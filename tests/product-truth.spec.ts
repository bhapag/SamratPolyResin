import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';
import { products } from '../src/data/products.js';

// Product-truth regressions found in the 2026-09-13 completion audit. Each one
// was a published claim that its own evidence did not support.

const bySlug = (s: string): any => products.find((p) => p.slug === s);

test.describe('GP White Resin', () => {
  // Resolution (2026-09-13): the GP White SDS cites the same base resin and
  // processing as GP Clear, so GP White carries GP Clear's issued TDS as a
  // shared base specification. The former page figures (<350 cPs, 6 min,
  // medium thixotropic, 30-35%) had no source and stay removed. Appearance
  // follows the SDS ("white pigmented"); the TDS "Clear" row is a carried-over error.
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
    expect(text).toMatch(/white pigmented/i);
    expect(text).not.toMatch(/appearance (is )?not (yet )?confirmed/i);
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

test.describe('TDS files formerly carrying a stray hidden text layer', () => {
  // Replaced 2026-09-13 by copies with the covered text removed. Extracted text
  // must now be the printed sheet only; the previous files are kept internally.
  const CASES: Record<string, { ref: string; must: RegExp[]; mustNot: RegExp }> = {
    'gp-quartz-resin': { ref: 'SPR-TDS-GQR', must: [/Viscosity\s+400-800 cPs/, /Gel Time\s+7-10 minutes/], mustNot: /GP CLEAR|SPR-TDS-GCR|Crystal-Clear/i },
    'iso-fire-retardant-resin': { ref: 'SPR-TDS-IFR', must: [/Purity\s+≥99%/, /Viscosity\s+400 cPs/], mustNot: /GP CLEAR|SPR-TDS-GCR|350-450/i },
    'epoxy-clear-casting-resin': { ref: 'SPR-TDS-CCR', must: [/Mix Ratio\s+2:1/, /Pot Life\s+40 Minutes/], mustNot: /1:1|12:1|Not Provided/i },
  };
  for (const [slug, c] of Object.entries(CASES)) {
    test(`${slug}: served TDS text is the printed sheet only`, async () => {
      let text = '';
      try { text = execSync(`pdftotext -enc UTF-8 -layout "public/tds/${slug}-tds.pdf" -`).toString(); } catch { test.skip(true, 'pdftotext not available'); }
      expect(text).toContain(c.ref);
      expect(text.match(new RegExp(c.ref, 'g'))?.length).toBe(1);
      for (const re of c.must) expect(text).toMatch(re);
      expect(text).not.toMatch(c.mustNot);
      expect(bySlug(slug).tdsNote, 'stale hidden-layer note').toBeUndefined();
      expect(fs.existsSync(path.resolve(`source-documents/historical/superseded-file-${slug}-tds-with-hidden-layer.pdf`))).toBe(true);
    });
  }
});

test.describe('Polyester Putty Resin posters', () => {
  // 2026-09-14: the PET Resin posters no longer lead the page. The product
  // frame is a text identity panel; the posters remain on the page, closed,
  // in a labelled archive that opens onto the warning.
  test('the product frame is an identity panel, not a PET poster', async ({ page }) => {
    await page.goto('/products/polyester-putty-resin/');
    await expect(page.locator('.prod-img .prod-identity')).toBeVisible();
    await expect(page.locator('.prod-img img')).toHaveCount(0);
    await expect(page.locator('.prod-identity-name')).toHaveText('Polyester Putty Resin');
  });

  test('the posters are kept in a closed archive with a readable warning', async ({ page }) => {
    await page.goto('/products/polyester-putty-resin/');
    const archive = page.locator('details.prod-archive-art');
    await expect(archive).toHaveCount(1);
    expect(await archive.evaluate((d: HTMLDetailsElement) => d.open)).toBe(false);
    await expect(archive.locator('summary')).toContainText(/not this product/i);
    await archive.locator('summary').click();
    const warn = archive.locator('.prod-img-warning');
    await expect(warn).toBeVisible();
    const text = (await warn.innerText()).replace(/\s+/g, ' ');
    for (const claim of [/food-contact/i, /bottle/i, /injection- or blow-moulded/i, /not this grade/i]) expect(text).toMatch(claim);
    const px = await warn.locator('p').last().evaluate((e) => parseFloat(getComputedStyle(e).fontSize));
    expect(px).toBeGreaterThanOrEqual(13);
    await expect(archive.locator('img')).toHaveCount(2);
    const product = await page.evaluate(() =>
      [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => JSON.parse(s.textContent!))
        .flatMap((j: any) => (Array.isArray(j) ? j : j['@graph'] || [j])).find((j: any) => j['@type'] === 'Product'));
    expect(product.image, 'PET poster exposed as Product.image').toBeUndefined();
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

test('FRP Polyester Pigment packaging follows the final TDS (1 kg bottle)', async ({ page }) => {
  const tds = 'public/tds/frp-polyester-pigment-tds.pdf';
  const { createHash } = await import('node:crypto');
  expect(createHash('sha256').update(fs.readFileSync(tds)).digest('hex')).toBe('ea980e2efb7daa1106bf944eb95650f7df972265a9f788f036ece20730b8a22c');
  const p = bySlug('frp-polyester-pigment');
  expect(p.productDetails['Packaging Size']).toBe('1 kg bottle');
  expect(JSON.stringify(p)).not.toMatch(/10 ?kg/);
  for (const url of ['/products/frp-polyester-pigment/', '/resources/what-is-frp-polyester-pigment/', '/how-to-order/', '/tools/quantity-guidance/']) {
    await page.goto(url);
    const text = await page.locator('main').innerText();
    expect(text, url).not.toMatch(/(?<![\d.])10 ?kg/);
  }
});
