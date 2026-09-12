import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import { products } from '../src/data/products.js';

// Product-truth regressions found in the 2026-09-13 completion audit. Each one
// was a published claim that its own evidence did not support.

const bySlug = (s: string): any => products.find((p) => p.slug === s);

test.describe('GP White Resin', () => {
  test('publishes no processing figures without a GP White-specific sheet', async ({ page }) => {
    // The page had <350 cPs, 6 min, medium thixotropic, 30-35% with no source,
    // while its linked "TDS" was GP Clear Resin's sheet renamed.
    const p = bySlug('gp-white-resin');
    expect(p.tdsUrl, 'GP White TDS re-linked; is it a GP White-specific sheet?').toBeFalsy();
    for (const k of ['Viscosity', 'Gel Time', 'Thixotropy', 'Styrene Content']) {
      expect(p.techSpecs?.[k], `techSpecs.${k} restored without a source`).toBeUndefined();
    }
    await page.goto('/products/gp-white-resin/');
    const text = await page.locator('main').innerText();
    expect(text).not.toMatch(/<\s?350 cPs|below 350 cPs|6[- ]minute gel|medium[- ]thixotrop|30[–-]35% styrene/i);
  });

  test('the renamed GP Clear sheet is held, not served', async () => {
    expect(fs.existsSync(path.resolve('public/tds/gp-white-resin-tds.pdf'))).toBe(false);
    expect(fs.existsSync(path.resolve('source-documents/held/gp-white-resin-tds.pdf'))).toBe(true);
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
