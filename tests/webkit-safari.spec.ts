import { test, expect, devices } from '@playwright/test';
import { webkit } from '@playwright/test';

// WebKit is the engine Safari and every iOS browser use. It is NOT an iPhone
// - no real hardware low-power mode, no real iOS media pipeline, no real
// touch - so a pass here is necessary but not sufficient. The remaining
// device-only gap is recorded in the handoff.
//
// These cover the behaviours historically fragile on Safari on this site:
// hero autoplay, poster/still fallback, source selection, and the disclosure
// based mobile navigation.

// Same port rule as playwright.config.ts. This was hardcoded to 4322, so with
// PW_PORT set the rest of the suite ran in isolation while these tests still
// hit whatever stale server another checkout had left on 4322.
const BASE = `http://localhost:${process.env.PW_PORT ?? 4322}`;

test.describe('WebKit (Safari engine)', () => {
  test.describe.configure({ mode: 'serial' });

  let browser;
  test.beforeAll(async () => { browser = await webkit.launch(); });
  test.afterAll(async () => { await browser?.close(); });

  test('iPhone-profile homepage: still frame renders and only one encode is fetched', async () => {
    const context = await browser.newContext({ ...devices['iPhone 13'] });
    const page = await context.newPage();
    const media: string[] = [];
    page.on('request', (r) => { if (/\.mp4/.test(r.url())) media.push(r.url()); });

    await page.goto(`${BASE}/`, { waitUntil: 'load' });
    await page.waitForTimeout(3000);

    const img = page.locator('.hero-media img').first();
    await expect(img).toBeVisible();
    const box = await img.boundingBox();
    expect(box?.height ?? 0, 'hero still frame missing in WebKit').toBeGreaterThan(150);

    const heroReqs = media.filter((u) => /hero-background/.test(u));
    expect(heroReqs.length, `WebKit fetched ${heroReqs.length} hero encodes`).toBeLessThanOrEqual(1);
    if (heroReqs.length === 1) expect(heroReqs[0]).toContain('hero-background-mobile.mp4');

    // Whether or not WebKit permits autoplay here, a frameless video must
    // never be visible - that is what would paint black on a real iPhone.
    const visibleFrameless = await page.locator('.hero-video').evaluateAll(
      (els) => els.filter((el) => !el.getAttribute('data-playing')
        && parseFloat(getComputedStyle(el).opacity) > 0.01).length);
    expect(visibleFrameless, 'a frameless hero video is visible in WebKit').toBe(0);

    await context.close();
  });

  test('mobile navigation: opens, discloses a category, reaches its hub, closes', async () => {
    const context = await browser.newContext({ ...devices['iPhone 13'] });
    const page = await context.newPage();
    await page.goto(`${BASE}/products/`, { waitUntil: 'load' });

    const toggle = page.locator('#navToggle');
    const panel = page.locator('#mobileNav');

    await expect(toggle).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await toggle.tap();
    await page.waitForTimeout(350);
    await expect(panel).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');

    // Products is a <details> disclosure; its contents are correctly hidden
    // until it is opened. Open it, then open a category inside it.
    const products = panel.locator('details.mobile-products');
    await products.locator('> summary').tap();
    await page.waitForTimeout(250);

    const firstCat = products.locator('details.mobile-cat').first();
    await firstCat.locator('> summary').tap();
    await page.waitForTimeout(250);

    // Only categories that really have a hub carry this link, and it must be
    // reachable once its disclosure is open — this is the mobile route into
    // the catalogue.
    const hubLink = firstCat.locator('a.mobile-cat-hub').first();
    await expect(hubLink).toBeVisible();
    const href = await hubLink.getAttribute('href');
    expect(href).toMatch(/^\/products\/[a-z-]+\/$/);

    // And it closes again.
    await toggle.tap();
    await page.waitForTimeout(350);
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await context.close();
  });

  test('no console errors on the key templates', async () => {
    const context = await browser.newContext({ ...devices['iPhone 13'] });
    const page = await context.newPage();
    const errors: string[] = [];
    page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
    page.on('pageerror', (e) => errors.push(e.message));

    for (const p of ['/', '/products/', '/products/gp-resins/', '/products/gp-clear-resin/',
                     '/technical-documents/', '/resources/', '/applications/', '/contact/']) {
      await page.goto(`${BASE}${p}`, { waitUntil: 'load' });
      await page.waitForTimeout(500);
    }
    expect(errors, `WebKit console errors:\n${errors.join('\n')}`).toEqual([]);
    await context.close();
  });

  test('no horizontal overflow at iPhone width on the main templates', async () => {
    const context = await browser.newContext({ ...devices['iPhone 13'] });
    const page = await context.newPage();
    for (const p of ['/', '/products/', '/products/gp-resins/', '/products/gp-clear-resin/',
                     '/technical-documents/', '/resources/', '/applications/', '/contact/', '/nope-404/']) {
      await page.goto(`${BASE}${p}`, { waitUntil: 'load' });
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, `${p} overflows horizontally in WebKit by ${overflow}px`).toBeLessThanOrEqual(0);
    }
    await context.close();
  });

  test('reduced motion in WebKit: no video, content still visible', async () => {
    const context = await browser.newContext({ ...devices['iPhone 13'], reducedMotion: 'reduce' });
    const page = await context.newPage();
    const media: string[] = [];
    page.on('request', (r) => { if (/\.mp4/.test(r.url())) media.push(r.url()); });

    await page.goto(`${BASE}/`, { waitUntil: 'load' });
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1500);

    expect(media, 'WebKit fetched video under reduced motion').toEqual([]);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('.cat-tile').first()).toBeVisible();
    await context.close();
  });
});
