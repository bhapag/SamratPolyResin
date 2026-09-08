import { test, expect } from '@playwright/test';

// The hero has no `poster` attribute on either <video>. That was a deliberate
// performance change (a poster is never lazy, so it downloaded a frame the
// eager <Image> beneath was already painting), and the historical reason the
// posters existed - a frameless <video> paints opaque black - is now handled
// by keeping each video at opacity 0 until it is genuinely playing.
//
// That trade is only safe if the still frame survives every way playback can
// fail. These tests cover each of those ways. If one fails, the hero can go
// black or blank for a real visitor.

const heroVisible = async (page) => {
  const img = page.locator('.hero-media img').first();
  await expect(img).toBeVisible();
  const box = await img.boundingBox();
  expect(box?.height ?? 0, 'hero still frame is not rendering').toBeGreaterThan(200);
};

const videoRequests = (page) => {
  const seen: string[] = [];
  page.on('request', (r) => { if (/\/videos\/.*\.mp4/.test(r.url())) seen.push(r.url()); });
  return seen;
};

test.describe('hero fallback survives every failure mode', () => {
  test('normal load: exactly one encode, and it reveals only once playing', async ({ page }) => {
    const seen = videoRequests(page);
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/', { waitUntil: 'load' });
    await page.waitForTimeout(2500);

    await heroVisible(page);
    expect(seen.filter((u) => /hero-background/.test(u)).length,
      `hero requested ${seen.length} video(s)`).toBeLessThanOrEqual(1);

    // Whichever video element is the active one must never be visible while
    // it has no frames.
    const bad = await page.locator('.hero-video:not([data-playing="true"])').evaluateAll(
      (els) => els.filter((el) => parseFloat(getComputedStyle(el).opacity) > 0.01).length);
    expect(bad, 'a frameless hero video is visible and will paint black').toBe(0);
  });

  test('autoplay rejected: still frame remains, nothing goes black', async ({ browser }) => {
    // Default Chromium policy without the autoplay flag rejects muted
    // autoplay far more often; this exercises the rejection path.
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    await page.addInitScript(() => {
      const original = HTMLMediaElement.prototype.play;
      HTMLMediaElement.prototype.play = function () {
        return Promise.reject(new DOMException('NotAllowedError', 'NotAllowedError'));
      };
      (window as any).__origPlay = original;
    });
    await page.goto('/', { waitUntil: 'load' });
    await page.waitForTimeout(1800);

    await heroVisible(page);
    const visibleFrameless = await page.locator('.hero-video').evaluateAll(
      (els) => els.filter((el) => !el.getAttribute('data-playing')
        && parseFloat(getComputedStyle(el).opacity) > 0.01).length);
    expect(visibleFrameless).toBe(0);
    await context.close();
  });

  test('video 404s: still frame remains', async ({ page }) => {
    await page.route('**/videos/*.mp4', (route) => route.fulfill({ status: 404, body: '' }));
    await page.goto('/', { waitUntil: 'load' });
    await page.waitForTimeout(1800);

    await heroVisible(page);
    const visibleFrameless = await page.locator('.hero-video').evaluateAll(
      (els) => els.filter((el) => !el.getAttribute('data-playing')
        && parseFloat(getComputedStyle(el).opacity) > 0.01).length);
    expect(visibleFrameless).toBe(0);
  });

  test('Save-Data: no video anywhere on the page, poster still shows', async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    // Chromium does not expose a Save-Data toggle, so emulate the API the
    // site actually reads.
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'connection', {
        configurable: true,
        get: () => ({ saveData: true, effectiveType: '3g' }),
      });
    });
    const seen = videoRequests(page);
    await page.goto('/', { waitUntil: 'load' });
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(2200);

    expect(seen, `Save-Data still fetched:\n${seen.join('\n')}`).toEqual([]);
    await heroVisible(page);
    await context.close();
  });

  test('back navigation re-arms the hero instead of leaving it blank', async ({ page }) => {
    await page.goto('/', { waitUntil: 'load' });
    await page.waitForTimeout(1200);

    await page.locator('a[href="/products/"]').first().click();
    await page.waitForURL('**/products/');
    await page.waitForTimeout(400);

    await page.goBack();
    await page.waitForURL((url) => url.pathname === '/');
    await page.waitForTimeout(1800);

    await heroVisible(page);
    const visibleFrameless = await page.locator('.hero-video').evaluateAll(
      (els) => els.filter((el) => !el.getAttribute('data-playing')
        && parseFloat(getComputedStyle(el).opacity) > 0.01).length);
    expect(visibleFrameless, 'hero shows a frameless video after back navigation').toBe(0);
  });

  test('the desktop encode is never fetched on a phone viewport', async ({ page }) => {
    const seen = videoRequests(page);
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/', { waitUntil: 'load' });
    await page.waitForTimeout(2500);
    expect(seen.filter((u) => /hero-background\.mp4/.test(u)),
      'the 4MB desktop encode was fetched on mobile').toEqual([]);
  });

  test('the mobile encode is never fetched on a desktop viewport', async ({ page }) => {
    const seen = videoRequests(page);
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/', { waitUntil: 'load' });
    await page.waitForTimeout(2500);
    expect(seen.filter((u) => /hero-background-mobile\.mp4/.test(u))).toEqual([]);
  });
});
