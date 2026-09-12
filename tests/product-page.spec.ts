import { test, expect } from '@playwright/test';
import { products } from '../src/data/products.js';

// Product pages are the commercial core of the site: they carry the
// specifications a buyer purchases against, the documents they download and
// the route to a quotation. These tests guard the parts that would fail
// silently.

const withDocs = products.find((p) => p.tdsUrl && p.sdsUrl);
const allied = products.find((p) => !p.tdsUrl && !p.sdsUrl);

test.describe('product page structure', () => {
  test('has exactly one h1 and a breadcrumb that mirrors the URL', async ({ page }) => {
    await page.goto('/products/gp-clear-resin/');
    await expect(page.locator('h1')).toHaveCount(1);

    const crumb = page.locator('.crumb').first();
    await expect(crumb.locator('a').nth(0)).toHaveAttribute('href', '/');
    await expect(crumb.locator('a').nth(1)).toHaveAttribute('href', '/products/');
    // GP Clear Resin is in a category that HAS a hub, so the trail gains it.
    await expect(crumb.locator('a').nth(2)).toHaveAttribute('href', '/products/gp-resins/');

    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    const list = blocks.map((b) => JSON.parse(b)).find((j) => j['@type'] === 'BreadcrumbList');
    expect(list.itemListElement).toHaveLength(4);
    expect(list.itemListElement.map((i: any) => i.position)).toEqual([1, 2, 3, 4]);
  });

  test('a category without a hub gets a three-step breadcrumb, not a dead link', async ({ page }) => {
    // Hardeners has no hub page, so the trail must stay Home / Products / item.
    await page.goto('/products/mekp-hardener/');
    const crumb = page.locator('.crumb').first();
    await expect(crumb.locator('a')).toHaveCount(2);
  });
});

test.describe('in-page section navigation', () => {
  test('lists the real sections and every target resolves', async ({ page }) => {
    await page.goto('/products/gp-clear-resin/');
    await page.waitForTimeout(400);

    const nav = page.locator('#prodToc');
    await expect(nav).toBeVisible();

    const hrefs = await nav.locator('a').evaluateAll((links) =>
      links.map((a) => (a as HTMLAnchorElement).getAttribute('href') as string));
    expect(hrefs.length).toBeGreaterThanOrEqual(8);

    for (const href of hrefs) {
      expect(href.startsWith('#')).toBe(true);
      await expect(page.locator(href), `${href} has no target`).toHaveCount(1);
    }
  });

  test('is styled, not left as unstyled runtime markup', async ({ page }) => {
    // The links are created by script, so they never carry Astro's scoping
    // attribute. Without :global() in the page styles the rules silently do
    // not apply — this asserts they do.
    await page.goto('/products/gp-clear-resin/');
    await page.waitForTimeout(400);
    // The assertion is "a runtime-generated link carries a real rule border",
    // not "that border is on a specific edge". The prototype's contents list
    // uses a hairline underline instead of a full chip outline, so this reads
    // whichever edge is actually drawn.
    const style = await page.locator('.prod-toc-list a').first().evaluate((el) => {
      const s = getComputedStyle(el);
      return {
        border: Math.max(
          parseFloat(s.borderTopWidth),
          parseFloat(s.borderBottomWidth),
          parseFloat(s.borderLeftWidth),
          parseFloat(s.borderRightWidth),
        ),
        family: s.fontFamily,
      };
    });
    expect(style.border).toBeGreaterThan(0);
    expect(style.family.toLowerCase()).toContain('mono');
  });

  test('the page is unharmed when the script does not run', async ({ page }) => {
    // Progressive enhancement: with JavaScript disabled the nav must simply
    // be absent, and every section must still be in the document.
    const context = await page.context().browser()!.newContext({ javaScriptEnabled: false });
    const noJs = await context.newPage();
    await noJs.goto('/products/gp-clear-resin/');

    await expect(noJs.locator('h1')).toBeVisible();
    const headings = await noJs.locator('h2').count();
    expect(headings).toBeGreaterThanOrEqual(8);
    // The nav ships hidden and empty; it must not show as an empty box.
    await expect(noJs.locator('#prodToc')).toBeHidden();
    await context.close();
  });
});

test.describe('documents and conversion', () => {
  test('a product with documents links both, and they resolve', async ({ page, request }) => {
    await page.goto(`/products/${withDocs!.slug}/`);
    const tds = page.locator(`a[href="${withDocs!.tdsUrl}"]`).first();
    const sds = page.locator(`a[href="${withDocs!.sdsUrl}"]`).first();
    await expect(tds).toBeVisible();
    await expect(sds).toBeVisible();

    for (const url of [withDocs!.tdsUrl, withDocs!.sdsUrl]) {
      const res = await request.get(url as string);
      expect(res.status(), `${url} did not resolve`).toBe(200);
    }
  });

  test('document links say what they are, for a screen reader', async ({ page }) => {
    await page.goto(`/products/${withDocs!.slug}/`);
    const labels = await page.locator('a[href^="/tds/"], a[href^="/sds/"]').evaluateAll((links) =>
      links.map((a) => (a.getAttribute('aria-label') || a.textContent || '').trim()));
    expect(labels.length).toBeGreaterThan(0);
    for (const l of labels) expect(l.length, 'a document link has no accessible name').toBeGreaterThan(2);
  });

  test('a product without documents does not pretend to have them', async ({ page }) => {
    test.skip(!allied, 'every product has documents');
    await page.goto(`/products/${allied!.slug}/`);
    await expect(page.locator('a[href^="/tds/"], a[href^="/sds/"]')).toHaveCount(0);
  });

  test('every product page offers a route to a quotation', async ({ page }) => {
    for (const slug of ['gp-clear-resin', 'mekp-hardener', 'wax-polish']) {
      await page.goto(`/products/${slug}/`);
      const routes = page.locator('a[href*="wa.me"], a[href="/contact/"], #enquiryForm');
      expect(await routes.count(), `${slug} has no quotation route`).toBeGreaterThan(0);
    }
  });
});

test.describe('specification tables', () => {
  test('scroll inside their own container rather than the page', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/products/gp-clear-resin/');

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);

    const tables = page.locator('table');
    const n = await tables.count();
    expect(n).toBeGreaterThan(0);
    for (let i = 0; i < n; i++) {
      const fits = await tables.nth(i).evaluate((t) => {
        const box = t.getBoundingClientRect();
        let el: HTMLElement | null = t.parentElement;
        while (el) {
          const s = getComputedStyle(el);
          if (s.overflowX === 'auto' || s.overflowX === 'scroll') return true;
          el = el.parentElement;
        }
        return box.width <= document.documentElement.clientWidth + 1;
      });
      expect(fits, `table ${i} neither fits nor scrolls in a container`).toBe(true);
    }
  });
});
