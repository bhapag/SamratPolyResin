import { test, expect, type Page } from '@playwright/test';
import { site, ORGANIZATION_ID, WEBSITE_ID } from '../src/data/site.js';
import { products } from '../src/data/products.js';

// ---------------------------------------------------------------------------
// Brand / entity signals.
//
// What this is for, in numbers: Search Console for 1 Aug – 6 Sept 2026 shows
// exactly two branded queries in existence — `samrat poly resins` (136
// impressions, 12 clicks, average position 2.4) and `samrat plastic` (1
// impression). Position 2.4 on the company's own name means something outranks
// the official site for it. The About page sat at position 23.8 for branded
// queries with an H1 that never said the company's name.
//
// These tests hold the fixes in place: one entity node referenced everywhere,
// the brand name spelled one way, and — importantly — no drift into claiming
// the bare word "Samrat", which is a common given name with unrelated intent.
// ---------------------------------------------------------------------------

const BRAND = 'Samrat Poly Resins';

async function jsonLd(page: Page): Promise<any[]> {
  return page.$$eval('script[type="application/ld+json"]', (nodes) =>
    nodes.map((n) => {
      try {
        return JSON.parse(n.textContent || '');
      } catch {
        return { __invalid: true };
      }
    }),
  );
}

test.describe('entity node', () => {
  test('every page carries one Organization and one WebSite, both valid', async ({ page }) => {
    for (const path of ['/', '/about/', '/contact/', '/products/', '/technical-documents/']) {
      await page.goto(path);
      const blocks = await jsonLd(page);
      expect(blocks.filter((b) => b.__invalid), `${path} has invalid JSON-LD`).toEqual([]);

      const orgs = blocks.filter((b) => b['@type'] === 'Organization' || b['@type'] === 'LocalBusiness');
      expect(orgs.length, `${path} should declare the org exactly once per type`).toBeGreaterThan(0);
      for (const o of orgs) {
        expect(o['@id'], `${path}: org node must use the shared @id`).toBe(ORGANIZATION_ID);
        expect(o.name).toBe(BRAND);
      }

      const websites = blocks.filter((b) => b['@type'] === 'WebSite');
      expect(websites.length, `${path} should have exactly one WebSite node`).toBe(1);
      expect(websites[0]['@id']).toBe(WEBSITE_ID);
      expect(websites[0].publisher['@id']).toBe(ORGANIZATION_ID);
    }
  });

  test('the Organization carries only verified facts', async ({ page }) => {
    await page.goto('/');
    const org = (await jsonLd(page)).find((b) => b['@type'] === 'Organization');

    expect(org.name).toBe(BRAND);
    expect(org.founder.name).toBe(site.proprietor);
    expect(org.foundingDate).toBe(site.established);
    expect(org.taxID).toBe(site.gst);
    expect(org.address.postalCode).toBe(site.address.pin);
    expect(org.address.addressCountry).toBe('IN');
    expect(org.hasCertification.name).toBe('ISO 9001:2015');
    expect(org.telephone).toEqual(site.phones.map((p) => p.dial));
    expect(org.email).toBe(site.email);

    // Nothing in the repository verifies these. They must stay absent.
    for (const forbidden of ['numberOfEmployees', 'aggregateRating', 'review', 'award', 'duns']) {
      expect(org[forbidden], `${forbidden} is not verified anywhere`).toBeUndefined();
    }
  });

  test('sameAs is either absent or contains only real absolute URLs', async ({ page }) => {
    // Empty is the correct state until the owner supplies verified profile
    // URLs. What must never happen is a guessed or dead entry, because a wrong
    // sameAs actively confuses the entity it is meant to clarify.
    await page.goto('/');
    const org = (await jsonLd(page)).find((b) => b['@type'] === 'Organization');
    if (org.sameAs !== undefined) {
      expect(Array.isArray(org.sameAs)).toBe(true);
      expect(org.sameAs.length).toBeGreaterThan(0);
      for (const url of org.sameAs) expect(url).toMatch(/^https:\/\/[^\s]+$/);
    }
    expect(site.sameAs.every((u: string) => /^https:\/\//.test(u))).toBe(true);
  });
});

test.describe('brand naming', () => {
  test('the About page is the canonical brand page and names the company in its h1', async ({ page }) => {
    await page.goto('/about/');
    await expect(page.locator('h1')).toHaveText(BRAND);
    await expect(page).toHaveTitle(/^Samrat Poly Resins/);

    const blocks = await jsonLd(page);
    const about = blocks.find((b) => b['@type'] === 'AboutPage');
    expect(about, 'About page needs AboutPage schema').toBeTruthy();
    expect(about.mainEntity['@id']).toBe(ORGANIZATION_ID);

    // The verified company facts a brand page has to state.
    const body = await page.locator('body').innerText();
    for (const fact of [site.proprietor, site.gst, site.established, 'ISO 9001:2015']) {
      expect(body, `About page should state ${fact}`).toContain(String(fact));
    }
  });

  test('there is no second brand page competing with About', async ({ page }) => {
    for (const path of ['/brand/', '/company/', '/samrat-poly-resins/', '/about-us/']) {
      const res = await page.goto(path);
      expect(res?.status(), `${path} should not exist — it would split the entity`).toBe(404);
    }
  });

  test('contact page leads with the brand name', async ({ page }) => {
    await page.goto('/contact/');
    await expect(page).toHaveTitle(/Contact Samrat Poly Resins/);
  });

  test('the brand name is spelled one way everywhere it is asserted', async ({ page }) => {
    // Catches "Samrat Polyresins", "Samrat Poly Resin" (singular) and
    // "SamratPolyResins" creeping into visible copy or metadata.
    for (const path of ['/', '/about/', '/contact/', '/products/', '/technical-documents/']) {
      await page.goto(path);
      const html = await page.content();
      const visible = html.replace(/<script[\s\S]*?<\/script>/g, '');
      const wrong = [
        /Samrat\s+Polyresins/i,
        /Samrat\s+Poly\s+Resin(?!s)/i,
        /SamratPolyResins(?!\.in)/i,
      ].filter((re) => re.test(visible));
      expect(wrong.map(String), `${path} uses a non-standard spelling of the brand`).toEqual([]);
    }
  });
});

test.describe('brand scope discipline', () => {
  test('the site never targets the bare word "Samrat"', async ({ page }) => {
    // "Samrat" alone is a common Indian given name and an honorific. Targeting
    // it would be keyword-grabbing for unrelated intent. Every occurrence of
    // the word on a page must be part of the full company name.
    for (const path of ['/', '/about/', '/contact/', '/products/']) {
      await page.goto(path);
      const text = await page.locator('body').innerText();
      const bare = [...text.matchAll(/Samrat(?!\s+Poly\s+Resins)(?!\s+Poly)/g)];
      expect(bare.length, `${path} uses "Samrat" outside the full company name`).toBe(0);
    }
  });

  test('no page is stuffed with the brand name', async ({ page }) => {
    // A brand page naturally repeats its own name. Keyword stuffing does not
    // look like that — it looks like the name crowding out the content. Cap it
    // at a generous share of total words.
    for (const path of ['/', '/about/', '/contact/', '/products/gp-clear-resin/']) {
      await page.goto(path);
      const text = await page.locator('body').innerText();
      const words = text.split(/\s+/).filter(Boolean).length;
      const mentions = (text.match(/Samrat Poly Resins/g) || []).length;
      // Each mention is 3 words, so this is the share of the page it occupies.
      const share = (mentions * 3) / words;
      expect(share, `${path}: brand name occupies ${(share * 100).toFixed(1)}% of the copy`).toBeLessThan(0.05);
    }
  });

  test('no meaning-of-the-word or unrelated-namesake content exists', async ({ page }) => {
    await page.goto('/about/');
    const body = (await page.locator('body').innerText()).toLowerCase();
    for (const off of ['meaning of samrat', 'samrat means', 'emperor', 'king of', 'film', 'movie']) {
      expect(body, `About page drifted into unrelated "Samrat" content: ${off}`).not.toContain(off);
    }
  });
});

test.describe('product attribution', () => {
  test('every product page attributes the product to the company in schema', async ({ page }) => {
    const sample = ['gp-clear-resin', 'unsaturated-polyester-resin', 'epoxy-art-resin', 'mekp-hardener'];
    for (const slug of sample) {
      await page.goto(`/products/${slug}/`);
      const product = (await jsonLd(page)).find((b) => b['@type'] === 'Product');
      expect(product, `${slug} has no Product schema`).toBeTruthy();
      expect(product.brand['@id'], `${slug} brand must reference the entity node`).toBe(ORGANIZATION_ID);
      expect(product.brand.name).toBe(BRAND);
    }
  });

  test('every product and hub page names the company in visible copy', async ({ page }) => {
    const slugs = [
      ...products.map((p) => `/products/${p.slug}/`),
      '/products/gp-resins/',
      '/products/epoxy-resins/',
      '/products/frp-allied-products/',
      '/products/industrial-specialty-resins/',
    ];
    const missing: string[] = [];
    for (const path of slugs) {
      await page.goto(path);
      // Exclude the shared header and footer — chrome does not count as the
      // page telling a reader who supplies this product.
      const inBody = await page.evaluate(() => {
        const main = document.querySelector('main') ?? document.body;
        const clone = main.cloneNode(true) as HTMLElement;
        clone.querySelectorAll('header, footer, script').forEach((n) => n.remove());
        return (clone.innerText.match(/Samrat Poly Resins/g) || []).length;
      });
      if (inBody === 0) missing.push(path);
    }
    expect(missing, `pages that never name the company in body copy:\n${missing.join('\n')}`).toEqual([]);
  });
});
