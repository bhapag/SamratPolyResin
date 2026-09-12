import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import { products } from '../src/data/products.js';

// Product-truth regressions found in the 2026-09-13 completion audit. Each one
// was a published claim that its own evidence did not support.

const bySlug = (s: string): any => products.find((p) => p.slug === s);

test.describe('GP White Resin', () => {
  // Resolution (2026-09-13): the GP White SDS cites the same base resin and
  // processing as GP Clear, so GP White carries GP Clear's issued TDS as a
  // shared base specification. The former page figures (<350 cPs, 6 min,
  // medium thixotropic, 30-35%) had no source and stay removed. Appearance is
  // unresolved: TDS "Clear" vs SDS "white pigmented", so no water-white claim.
  test('carries the shared GP Clear base specification, not the unsourced figures', async ({ page }) => {
    const p = bySlug('gp-white-resin');
    const clear = bySlug('gp-clear-resin');
    expect(p.tdsUrl).toBe('/tds/gp-white-resin-tds.pdf');
    for (const k of Object.keys(clear.techSpecs)) {
      if (k === 'Appearance' || k === 'Colour') continue;
      expect(p.techSpecs[k], k).toBe(clear.techSpecs[k]);
    }
    await page.goto('/products/gp-white-resin/');
    const text = await page.locator('main').innerText();
    expect(text).not.toMatch(/<\s?350 cPs|below 350 cPs|6[- ]minute gel|medium[- ]thixotrop|30[–-]35% styrene/i);
    expect(text).not.toMatch(/water[- ]white/i);
    expect(text).toMatch(/not (yet )?confirmed/i);
  });

  test('the issued GP White TDS file is served again, not held', async () => {
    const served = fs.readFileSync(path.resolve('public/tds/gp-white-resin-tds.pdf'));
    expect(served.length).toBeGreaterThan(10000);
    expect(fs.existsSync(path.resolve('source-documents/held/gp-white-resin-tds.pdf'))).toBe(false);
  });
});

test('Unsaturated Polyester Resin is not described as a pre-pigmented sheet grade', async () => {
  // Introduced by a mis-aimed replacement in cc128a1; the UPR TDS says
  // "Orthophthalic, unsaturated polyester", colour "Clear".
  const p = bySlug('unsaturated-polyester-resin');
  expect(p.techSpecs['Resin Type']).toBe('Orthophthalic Unsaturated Polyester Resin');
  expect(JSON.stringify(p)).not.toMatch(/pre-pigmented sheet grade/i);
});

test('bought-in and article items are not sold on "manufacturer" framing', async () => {
  for (const s of ['fibre-glass-mat', 'paint-brushes', 'styrene-monomer', 'nc-thinner', 'soap-stone-powder', 'wax-polish', 'cobalt-octoate']) {
    const p = bySlug(s);
    expect((p.whyChoose || []).join(' | '), s).not.toMatch(/Indian manufacturer/);
    expect(p.seo?.title || '', s).not.toMatch(/manufacturer/i);
  }
});

test.describe('PDFs with a stray hidden text layer', () => {
  // The printed sheet is correct in each case; the embedded text is not.
  const CASES: Record<string, RegExp> = {
    'gp-quartz-resin': /GP Clear Resin/,
    'iso-fire-retardant-resin': /GP Clear Resin/,
    'epoxy-clear-casting-resin': /2:1.*1:1/,
  };
  test('the product page says so inside the download, including its accessible name', async ({ page }) => {
    for (const [slug, re] of Object.entries(CASES)) {
      expect(bySlug(slug).tdsNote, slug).toMatch(re);
      await page.goto(`/products/${slug}/`);
      const link = page.locator('.prod-docs a.doc-act-dl[href^="/tds/"]');
      await expect(link.locator('.doc-act-caution'), slug).toHaveText(bySlug(slug).tdsNote);
      expect(await link.getAttribute('aria-label'), slug).toContain(bySlug(slug).tdsNote);
    }
  });
});

test.describe('Polyester Putty Resin posters', () => {
  test('stay visible with an explicit warning, and are not the schema product image', async ({ page }) => {
    await page.goto('/products/polyester-putty-resin/');
    const warn = page.locator('.prod-img-warning');
    await expect(warn).toBeVisible();
    const text = (await warn.innerText()).replace(/\s+/g, ' ');
    for (const claim of [/food-contact/i, /bottle/i, /injection- or blow-moulded/i, /not this grade/i]) expect(text).toMatch(claim);
    // warning is readable size, not caption size
    const px = await warn.locator('p').last().evaluate((e) => parseFloat(getComputedStyle(e).fontSize));
    expect(px).toBeGreaterThanOrEqual(13);
    const product = await page.evaluate(() =>
      [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => JSON.parse(s.textContent!))
        .flatMap((j: any) => (Array.isArray(j) ? j : j['@graph'] || [j])).find((j: any) => j['@type'] === 'Product'));
    expect(product.image, 'PET poster exposed as Product.image').toBeUndefined();
    await expect(page.locator('.prod-img img, img.prod-img').first()).toBeVisible();
  });
});

test('GP Gelcoat is not assigned a backbone its data sheet does not state', async ({ page }) => {
  // TDS: "Resin Type: Polyester (surface-coating gelcoat)". No ortho/iso/NPG.
  for (const url of ['/products/gp-gelcoat-resin/', '/applications/gelcoat-for-frp-bathware-sanitaryware/', '/products/gelcoat-resins/']) {
    await page.goto(url);
    const text = (await page.locator('main').innerText()).replace(/\s+/g, ' ');
    expect(text, url).not.toMatch(/GP Gelcoat Resin is (a |an )?[^.]{0,30}(orthophthalic|isophthalic|NPG)/i);
  }
});

test('Product schema asserts manufacturer only for evidenced polyester families', async ({ page }) => {
  for (const [slug, expected] of [['gp-clear-resin', true], ['bisphenol-resin', false], ['epoxy-hardener', false], ['vinyl-ester-resin', false], ['styrene-monomer', false]] as const) {
    await page.goto(`/products/${slug}/`);
    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join(' ');
    expect(/"@type":"Product"[\s\S]*"manufacturer"/.test(ld), slug).toBe(expected);
  }
});
