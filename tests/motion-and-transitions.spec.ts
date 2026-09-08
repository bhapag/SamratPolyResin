import { test, expect } from '@playwright/test';

// Astro View Transitions keep the document alive across navigation, so any
// listener registered inside `astro:page-load` stacks up on every hop. That
// shows as duplicated analytics events and double-fired handlers - invisible
// in a screenshot and expensive in the data. These tests navigate several
// times and assert nothing multiplies.

// Read the real GA4 queue rather than stubbing window.gtag. Base.astro
// declares `function gtag(){dataLayer.push(arguments)}` at global scope,
// which replaces any stub assigned beforehand - an earlier version of these
// tests stubbed gtag, recorded nothing, and passed vacuously. Every event the
// site sends ends up in window.dataLayer as ['event', name, payload], so
// that is what gets counted.
const eventNames = (page: any) => page.evaluate(() =>
  ((window as any).dataLayer || [])
    .map((entry: any) => Array.from(entry || []))
    .filter((args: any[]) => args[0] === 'event')
    .map((args: any[]) => args[1]));

test.describe('client-side navigation', () => {
  test('a CTA click fires exactly one analytics event, after several hops', async ({ page }) => {
    await page.goto('/');
    // Navigate around using real in-page links, so View Transitions run.
    for (const path of ['/products/', '/applications/', '/products/', '/contact/']) {
      await page.locator(`a[href="${path}"]`).first().click();
      await page.waitForURL(`**${path}`);
      await page.waitForTimeout(250);
    }

    const before = (await eventNames(page)).filter((e: string) => e === 'phone_click').length;
    await page.locator('a[href^="tel:"]').first().click().catch(() => {});
    await page.waitForTimeout(400);
    const after = (await eventNames(page)).filter((e: string) => e === 'phone_click').length;

    // Exactly one - not zero (the listener died) and not several (it stacked
    // up once per navigation, which is the failure View Transitions invite).
    expect(after - before, 'phone_click did not fire exactly once').toBe(1);
  });

  test('product_view fires once per product, not once per page-load event', async ({ page }) => {
    await page.goto('/products/lamination-resin/');
    await page.waitForTimeout(600);

    // initialisePage() runs twice on a cold load - once at module evaluation
    // and once on the first astro:page-load - so this asserts the
    // lastProductView guard actually holds.
    const names = await eventNames(page);
    expect(names.filter((e: string) => e === 'product_view').length).toBe(1);

    // Navigating to a different grade must fire again; returning must not.
    await page.locator('a[href="/products/"]').first().click();
    await page.waitForURL('**/products/');
    await page.locator('a[href="/products/gp-clear-resin/"]').first().click();
    await page.waitForURL('**/products/gp-clear-resin/');
    await page.waitForTimeout(500);

    const after = await eventNames(page);
    expect(after.filter((e: string) => e === 'product_view').length).toBe(2);
  });

  test('the enquiry form is wired once, not once per navigation', async ({ page }) => {
    await page.goto('/');
    for (const path of ['/contact/', '/products/', '/contact/']) {
      await page.locator(`a[href="${path}"]`).first().click();
      await page.waitForURL(`**${path}`);
      await page.waitForTimeout(250);
    }
    // The guard flag is the mechanism; assert it is present and singular.
    await expect(page.locator('#enquiryForm')).toHaveCount(1);
    await expect(page.locator('#enquiryForm')).toHaveAttribute('data-wired', 'true');
  });
});

test.describe('reduced motion', () => {
  test('no video is requested at all', async ({ page }) => {
    const media: string[] = [];
    page.on('request', (req) => { if (/\.mp4/.test(req.url())) media.push(req.url()); });

    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/', { waitUntil: 'load' });
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1500);

    expect(media, `videos requested under reduced motion:\n${media.join('\n')}`).toEqual([]);
  });

  test('content is still fully visible with animation suppressed', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(700);

    // The reveal system must not run at all under reduced motion, so nothing
    // may be left sitting at opacity 0.
    const hidden = await page.locator('.js-reveal, .js-reveal-img').count();
    expect(hidden).toBe(0);

    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('.cat-tile').first()).toBeVisible();
  });

  test('the hero still shows its still frame', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    const heroImage = page.locator('.hero-media img').first();
    await expect(heroImage).toBeVisible();
    const box = await heroImage.boundingBox();
    expect(box?.height ?? 0).toBeGreaterThan(200);
  });
});
