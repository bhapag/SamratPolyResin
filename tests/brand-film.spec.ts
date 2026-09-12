import { test, expect, devices, webkit, chromium } from '@playwright/test';

// The homepage FRONT video (brand film), not the hero or ambient background.
// 2026-09-13: on iPhone (WebKit) it rendered at 2x3 px; on Android it had no
// play control and downloaded 3.4 MB on scroll. These run in both engines.
const BASE = `http://localhost:${process.env.PW_PORT ?? 4322}`;

for (const [name, engine, profile] of [
  ['iPhone / WebKit', webkit, devices['iPhone 13']],
  ['Android / Chromium', chromium, devices['Pixel 5']],
] as const) {
  test(`${name}: brand film is visible, shows a play control, loads nothing before a tap, plays on one tap`, async () => {
    const browser = await engine.launch();
    const ctx = await browser.newContext(profile);
    const page = await ctx.newPage();
    const filmRequests: string[] = [];
    page.on('request', (r) => { if (/brand-film\.mp4/.test(r.url())) filmRequests.push(r.url()); });
    await page.goto(`${BASE}/`, { waitUntil: 'load' });
    const frame = page.locator('#brandFilmFrame');
    await frame.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500);

    const box = (await frame.boundingBox())!;
    expect(box.width, 'frame width').toBeGreaterThan(250);
    expect(box.height, 'frame height').toBeGreaterThan(300);
    await expect(page.locator('#brandFilmPlay')).toBeVisible();
    await expect(frame).toHaveAttribute('data-mode', 'tap');
    expect(await page.locator('#brandFilmVideo source').getAttribute('src'), 'source attached before tap').toBeNull();
    expect(filmRequests, 'film requested before tap').toEqual([]);

    await page.locator('#brandFilmPlay').tap();
    await expect(frame).toHaveAttribute('data-state', 'playing', { timeout: 15000 });
    const t1 = await page.locator('#brandFilmVideo').evaluate((v: HTMLVideoElement) => v.currentTime);
    await page.waitForTimeout(1200);
    const t2 = await page.locator('#brandFilmVideo').evaluate((v: HTMLVideoElement) => v.currentTime);
    expect(t2, 'video time advances').toBeGreaterThan(t1);
    await expect(page.locator('#brandFilmVideo')).toHaveClass(/is-active/);

    // second tap pauses
    await page.locator('#brandFilmPlay').tap();
    await expect(frame).toHaveAttribute('data-state', 'paused');
    await browser.close();
  });
}

test('desktop keeps the approved autoplay cycle', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/', { waitUntil: 'load' });
  const frame = page.locator('#brandFilmFrame');
  await frame.scrollIntoViewIfNeeded();
  await expect(frame).toHaveAttribute('data-mode', 'auto');
  await expect(page.locator('#brandFilmPlay')).toBeHidden();
  await expect.poll(() => page.locator('#brandFilmVideo').evaluate((v: HTMLVideoElement) => !v.paused), { timeout: 15000 }).toBe(true);
});
