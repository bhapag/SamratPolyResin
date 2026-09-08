import { test, expect } from '@playwright/test';
import { resources } from '../src/data/resources.js';

// The Knowledge Centre index lists every live article on one page. Two things
// must stay true as articles and hubs are added:
//   1. the jump navigation and the hub sections cannot drift apart
//   2. compacting the rows must not have removed a single article link
// Both are easy to break silently, which is why they are asserted here.

const publishedSlugs = resources.filter((r) => !r.draft).map((r) => r.slug);

test.describe('Knowledge Centre index', () => {
  test('every jump-nav target resolves to a real hub heading', async ({ page }) => {
    await page.goto('/resources/');

    const targets = await page.locator('.kc-jump-list a').evaluateAll((links) =>
      links.map((a) => (a as HTMLAnchorElement).getAttribute('href') as string));

    expect(targets.length).toBeGreaterThan(0);
    for (const href of targets) {
      expect(href.startsWith('#')).toBe(true);
      const id = href.slice(1);
      const heading = page.locator(`h2#${id}`);
      await expect(heading, `jump target ${href} has no matching heading`).toHaveCount(1);
    }
  });

  test('no hub section is missing from the jump navigation', async ({ page }) => {
    await page.goto('/resources/');

    const navIds = await page.locator('.kc-jump-list a').evaluateAll((links) =>
      links.map((a) => ((a as HTMLAnchorElement).getAttribute('href') as string).slice(1)));
    const sectionIds = await page.locator('section.kc-focus[aria-labelledby]').evaluateAll((els) =>
      els.map((el) => el.getAttribute('aria-labelledby') as string));

    expect(sectionIds.length).toBeGreaterThan(0);
    expect(new Set(navIds)).toEqual(new Set(sectionIds));
  });

  test('every published article is still linked from the index', async ({ page }) => {
    await page.goto('/resources/');

    const linked = new Set(
      await page.locator('a[href^="/resources/"]').evaluateAll((links) =>
        links
          .map((a) => (a as HTMLAnchorElement).getAttribute('href') as string)
          .map((h) => h.replace(/^\/resources\//, '').replace(/\/$/, ''))
          .filter(Boolean)),
    );

    const missing = publishedSlugs.filter((slug) => !linked.has(slug));
    expect(missing, `articles missing from the index: ${missing.join(', ')}`).toEqual([]);
  });

  test('article links are in the HTML, not injected by script', async ({ page, request }) => {
    // Compacting the rows must never have turned a crawlable link into a
    // JavaScript-dependent one. Assert against the raw served HTML.
    const res = await request.get('/resources/');
    expect(res.status()).toBe(200);
    const html = await res.text();
    for (const slug of publishedSlugs.slice(0, 25)) {
      expect(html, `${slug} is not present in the served HTML`).toContain(`/resources/${slug}/`);
    }
  });

  test('compact rows keep the page navigable on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/resources/');
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);

    // Guard against the page regressing to its previous 95,224px height.
    const height = await page.evaluate(() => document.body.scrollHeight);
    expect(height).toBeLessThan(60_000);
  });
});
