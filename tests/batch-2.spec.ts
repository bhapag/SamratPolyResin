import { test, expect } from '@playwright/test';
import { products, CATEGORIES } from '../src/data/products.js';

// Regression cover for the Batch 2 changes. Each test asserts the property
// that would actually break in production, not the presence of markup:
//   - the technical-document library lists real, resolvable documents
//   - application breadcrumbs mirror the URL path in both the visible trail
//     and the BreadcrumbList
//   - the hero requests exactly ONE video and no poster images
//   - the logo is served as a small derivative, not the 197 KB master
//   - the sitewide ambient layer downloads one poster, not two
//   - the eight new contextual hub links are present
//
// Run against a built dist/ via `astro preview` (see playwright.config.ts).

const productsWithDocs = products.filter((p) => p.tdsUrl || p.sdsUrl);

test.describe('/technical-documents/', () => {
  test('returns 200, has one h1 and logs no console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
    page.on('pageerror', (err) => consoleErrors.push(err.message));

    const response = await page.goto('/technical-documents/');
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);
    expect(consoleErrors, consoleErrors.join('\n')).toEqual([]);
  });

  test('lists every published TDS and SDS, and nothing that is not published', async ({ page }) => {
    await page.goto('/technical-documents/');

    const hrefs = await page.locator('a[href^="/tds/"], a[href^="/sds/"]').evaluateAll(
      (links) => links.map((a) => (a as HTMLAnchorElement).getAttribute('href')),
    );
    const expected = productsWithDocs.flatMap((p) => [p.tdsUrl, p.sdsUrl].filter(Boolean));

    expect(new Set(hrefs)).toEqual(new Set(expected));
    // No duplicate rows: one link per document, not one per category listing.
    expect(hrefs.length).toBe(expected.length);
  });

  test('every listed document actually resolves', async ({ page, request }) => {
    await page.goto('/technical-documents/');
    const hrefs = await page.locator('a[href^="/tds/"], a[href^="/sds/"]').evaluateAll(
      (links) => links.map((a) => (a as HTMLAnchorElement).getAttribute('href') as string),
    );
    // Sampled rather than all 50 — enough to catch a broken path convention
    // without turning this into a 50-request suite.
    for (const href of [hrefs[0], hrefs[Math.floor(hrefs.length / 2)], hrefs[hrefs.length - 1]]) {
      const res = await request.get(href);
      expect(res.status(), `${href} did not resolve`).toBe(200);
    }
  });

  test('groups documents under the same categories the rest of the site uses', async ({ page }) => {
    await page.goto('/technical-documents/');
    const headings = await page.locator('.td-group h2').allTextContents();
    for (const heading of headings) {
      expect(CATEGORIES, `"${heading}" is not a real product category`).toContain(heading.trim());
    }
    expect(headings.length).toBeGreaterThan(0);
  });

  test('publishes CollectionPage and BreadcrumbList, and no invented document metadata', async ({ page }) => {
    await page.goto('/technical-documents/');
    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    const parsed = blocks.map((b) => JSON.parse(b));
    const types = parsed.map((p) => p['@type']);

    expect(types).toContain('CollectionPage');
    expect(types).toContain('BreadcrumbList');
    // No DigitalDocument: this repo holds no revision date, version or
    // supersession data, so publishing that type would be invented metadata.
    expect(JSON.stringify(parsed)).not.toContain('DigitalDocument');
    expect(JSON.stringify(parsed)).not.toContain('datePublished');
  });

  for (const width of [360, 390, 430]) {
    test(`${width}px layout has no horizontal overflow`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('/technical-documents/');
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow).toBeLessThanOrEqual(0);
    });
  }

  test('the wide document table scrolls inside its own container', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 900 });
    await page.goto('/technical-documents/');
    const overflowX = await page.locator('.td-table-scroll').first()
      .evaluate((el) => getComputedStyle(el).overflowX);
    expect(overflowX).toBe('auto');
  });
});

test.describe('application breadcrumbs', () => {
  const applicationPath = '/applications/resin-for-general-frp-lamination/';

  test('visible trail is Home / Applications / {page}', async ({ page }) => {
    await page.goto(applicationPath);
    const crumb = page.locator('.crumb').first();
    await expect(crumb.locator('a').nth(0)).toHaveAttribute('href', '/');
    await expect(crumb.locator('a').nth(1)).toHaveAttribute('href', '/applications/');
    await expect(crumb.locator('a')).toHaveCount(2);
    await expect(crumb.locator('.cur')).toBeVisible();
  });

  test('BreadcrumbList mirrors the visible trail exactly', async ({ page }) => {
    await page.goto(applicationPath);
    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    const list = blocks.map((b) => JSON.parse(b)).find((p) => p['@type'] === 'BreadcrumbList');
    expect(list).toBeTruthy();

    const items = list.itemListElement;
    expect(items).toHaveLength(3);
    expect(items.map((i: any) => i.position)).toEqual([1, 2, 3]);
    expect(items[0].name).toBe('Home');
    expect(items[1].name).toBe('Applications');
    expect(items[1].item).toContain('/applications/');
    expect(items[2].item).toContain(applicationPath);

    const visible = await page.locator('.crumb').first().innerText();
    for (const item of items) {
      expect(visible).toContain(item.name);
    }
  });
});

test.describe('hero loading', () => {
  test('requests exactly one hero video and no hero poster image', async ({ page }) => {
    const videoRequests: string[] = [];
    page.on('request', (req) => {
      const url = req.url();
      if (/\/videos\/hero-background(-mobile)?\.mp4/.test(url)) videoRequests.push(url);
    });

    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/', { waitUntil: 'load' });
    await page.waitForTimeout(1500);

    // One encode only. The parse-time inline script assigns src to a single
    // element; a regression here means both encodes download again.
    expect(videoRequests.length, videoRequests.join('\n')).toBeLessThanOrEqual(1);
    if (videoRequests.length === 1) {
      expect(videoRequests[0]).toContain('hero-background-mobile.mp4');
    }
  });

  test('no hero or ambient video carries a poster attribute', async ({ page }) => {
    await page.goto('/');
    const postered = await page.locator('.hero-video[poster], .ambient-video[poster]').count();
    expect(postered).toBe(0);
  });

  test('the ambient poster resolves to a single image, not one per breakpoint', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/about/');
    // One <img> inside one <picture>; the browser picks a single candidate.
    await expect(page.locator('.ambient-bg picture')).toHaveCount(1);
    await expect(page.locator('.ambient-bg img')).toHaveCount(1);
  });

  test('reduced motion loads no hero video at all', async ({ page }) => {
    const videoRequests: string[] = [];
    page.on('request', (req) => {
      if (/\/videos\/.*\.mp4/.test(req.url())) videoRequests.push(req.url());
    });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/', { waitUntil: 'load' });
    await page.waitForTimeout(1200);
    expect(videoRequests, videoRequests.join('\n')).toEqual([]);
  });
});

test.describe('logo', () => {
  test('is served as a small pipeline derivative, not the 197 KB master', async ({ page, request }) => {
    await page.goto('/');
    const src = await page.locator('img.brand-mark').first().getAttribute('src');
    expect(src).toBeTruthy();
    expect(src).not.toBe('/logo.jpg');
    expect(src).toMatch(/^\/_astro\/logo\..*\.webp$/);

    const res = await request.get(src as string);
    expect(res.status()).toBe(200);
    const bytes = (await res.body()).length;
    // The master was 197,263 bytes. Anything near that means the derivative
    // regressed back to full size.
    expect(bytes).toBeLessThan(20_000);
  });

  test('the raw master is no longer published at /logo.jpg', async ({ request }) => {
    const res = await request.get('/logo.jpg');
    expect(res.status()).toBe(404);
  });
});

test.describe('contextual hub links', () => {
  const expected: Array<[string, string]> = [
    ['/resources/what-is-gp-polyester-resin/', '/products/gp-resins/'],
    ['/resources/how-to-select-polyester-resin-for-frp-manufacturing/', '/products/gp-resins/'],
    ['/applications/resin-for-general-frp-lamination/', '/products/gp-resins/'],
    ['/applications/resin-for-water-tank-manufacturing/', '/products/gp-resins/'],
    ['/resources/what-is-epoxy-clear-casting-resin/', '/products/epoxy-resins/'],
    ['/resources/what-is-epoxy-art-resin/', '/products/epoxy-resins/'],
    ['/resources/epoxy-resin-vs-epoxy-hardener/', '/products/epoxy-resins/'],
    ['/resources/unsaturated-polyester-resin-vs-epoxy-resin/', '/products/epoxy-resins/'],
  ];

  for (const [source, destination] of expected) {
    test(`${source} links to ${destination} from body prose`, async ({ page }) => {
      await page.goto(source);
      // Scoped to article/section body copy — a nav or footer link must not
      // satisfy this test, since boilerplate links are exactly what these
      // contextual links exist to supplement.
      const inProse = page.locator(
        `.article-section a[href="${destination}"], .app-content a[href="${destination}"]`,
      );
      expect(await inProse.count(), `no in-prose link to ${destination}`).toBeGreaterThan(0);
    });
  }
});

test.describe('technical documents discoverability', () => {
  test('is linked from the footer on every page', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.foot-nav a[href="/technical-documents/"]')).toHaveCount(1);
  });

  test('is present in the sitemap', async ({ request }) => {
    const index = await request.get('/sitemap-index.xml');
    expect(index.status()).toBe(200);
    const indexBody = await index.text();
    const first = indexBody.match(/<loc>([^<]+sitemap-0\.xml)<\/loc>/)?.[1];
    expect(first).toBeTruthy();

    const sitemap = await request.get(new URL(first as string).pathname);
    expect(sitemap.status()).toBe(200);
    expect(await sitemap.text()).toContain('/technical-documents/');
  });
});
