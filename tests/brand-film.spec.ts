import { test, expect, devices, webkit, chromium } from '@playwright/test';

// The homepage FRONT video (brand film), not the hero or ambient background.
// 2026-09-13: on iPhone (WebKit) it rendered at 2x3 px; on Android it had no
// play control and downloaded 3.4 MB on scroll. These run in both engines.
const BASE = `http://localhost:${process.env.PW_PORT ?? 4322}`;

// Timing notes (2026-09-14). Under the full parallel suite this test failed
// about one run in two with "Test timeout of 30000ms exceeded", never with a
// wrong state. Instrumented runs under the same load showed the film behaving
// correctly (tap -> play -> playing within 0.5 s) while the test's own
// mechanics consumed the budget: launching a separate browser, Playwright's
// scrollIntoView and tap waiting ~5 s and ~3 s for the element to settle
// during the page's CSS smooth scroll, and fixed sleeps. So: scroll
// instantly, poll for state instead of sleeping, and give the self-launched
// browser a budget that includes its launch.
for (const [name, engine, profile] of [
  ['iPhone / WebKit', webkit, devices['iPhone 13']],
  ['Android / Chromium', chromium, devices['Pixel 5']],
] as const) {
  test(`${name}: brand film is visible, shows a play control, loads nothing before a tap, plays on one tap`, async () => {
    test.setTimeout(90_000);
    const browser = await engine.launch();
    try {
      const ctx = await browser.newContext(profile);
      const page = await ctx.newPage();
      const filmRequests: string[] = [];
      page.on('request', (r) => { if (/brand-film\.mp4/.test(r.url())) filmRequests.push(r.url()); });
      await page.goto(`${BASE}/`, { waitUntil: 'load' });
      const frame = page.locator('#brandFilmFrame');
      const button = page.locator('#brandFilmPlay');
      const video = page.locator('#brandFilmVideo');
      await frame.evaluate((el) => el.scrollIntoView({ behavior: 'instant', block: 'center' }));
      await expect(frame).toHaveAttribute('data-mode', 'tap');
      await expect(button).toBeVisible();

      const box = (await frame.boundingBox())!;
      expect(box.width, 'frame width').toBeGreaterThan(250);
      expect(box.height, 'frame height').toBeGreaterThan(300);
      expect(await page.locator('#brandFilmVideo source').getAttribute('src'), 'source attached before tap').toBeNull();
      expect(filmRequests, 'film requested before tap').toEqual([]);

      await button.tap();
      await expect(frame).toHaveAttribute('data-state', 'playing', { timeout: 30_000 });
      const t1 = await video.evaluate((v: HTMLVideoElement) => v.currentTime);
      await expect.poll(() => video.evaluate((v: HTMLVideoElement) => v.currentTime), { message: 'video time advances', timeout: 15_000 }).toBeGreaterThan(t1);
      await expect(video).toHaveClass(/is-active/);

      // second tap pauses
      await button.tap();
      await expect(frame).toHaveAttribute('data-state', 'paused');
    } finally {
      await browser.close();
    }
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
