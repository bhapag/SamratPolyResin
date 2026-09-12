import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { products, CATEGORIES } from '../src/data/products.js';

// The catalogue (web page and A4 PDF) is generated from products.js. These
// checks fail if the PDF is not re-exported after the data changes, or if the
// catalogue starts carrying things it must not.
const PDF = path.resolve('public/downloads/samrat-poly-resins-product-catalogue-2026-09.pdf');

test('web catalogue lists every product with exactly its published documents', async ({ page }) => {
  await page.goto('/catalogue/');
  const entries = await page.locator('article.entry').evaluateAll((els) => els.map((e) => ({
    name: e.querySelector('h3')?.textContent?.trim(),
    docs: [...e.querySelectorAll('.entry-docs a')].map((a) => a.getAttribute('href')),
  })));
  expect(entries.length).toBe(products.length);
  for (const p of products as any[]) {
    const e = entries.find((x) => x.name === p.name);
    expect(e, p.name).toBeTruthy();
    expect(e!.docs, p.name).toEqual([p.tdsUrl, p.pdsUrl, p.sdsUrl].filter(Boolean));
  }
  const headings = await page.locator('.sheet-cat h2').allInnerTexts();
  expect(headings.map((h) => h.toLowerCase())).toEqual(CATEGORIES.filter((c) => products.some((p) => p.category === c)).map((c) => c.toLowerCase()));
});

test('catalogue headings are legible on the paper panels', async ({ page }) => {
  // The sitewide h1/h2 uses a transparent text fill; on the light sheets that
  // printed as a blurred shadow.
  await page.goto('/catalogue/');
  const fill = await page.locator('.sheet-cat h2').first().evaluate((e) => getComputedStyle(e).webkitTextFillColor);
  expect(fill).not.toMatch(/rgba\(0, 0, 0, 0\)|transparent/);
});

test('catalogue carries no specifications, prices, posters or retired products', async ({ page }) => {
  await page.goto('/catalogue/');
  const text = await page.locator('.cat').innerText();
  expect(text).not.toMatch(/\bcPs\b|gel time \d|₹|price|food[- ]grade|PET Resin|UV Resin\b/i);
  const posters = await page.locator('.cat img').evaluateAll((imgs) => imgs.map((i) => (i as HTMLImageElement).src));
  expect(posters.some((s) => /pet-resin|products\//.test(s))).toBe(false);
});

test('downloadable PDF exists and matches the current product data', async () => {
  expect(fs.readFileSync(PDF).subarray(0, 5).toString('latin1')).toBe('%PDF-');
  let text = '';
  try { text = execSync(`pdftotext -raw "${PDF}" -`, { maxBuffer: 1 << 26 }).toString(); } catch { test.skip(true, 'pdftotext not available'); }
  const flat = text.replace(/\s+/g, ' ').toUpperCase();
  const missing = products.filter((p) => !flat.includes(p.name.toUpperCase())).map((p) => p.name);
  expect(missing, 'PDF is stale: re-run scripts/export-catalogue.mjs').toEqual([]);
  const tds = products.filter((p: any) => p.tdsUrl).length;
  const sds = products.filter((p: any) => p.sdsUrl).length;
  expect(text.replace(/\s+/g, ' ')).toContain(`lists ${tds} Technical Data Sheets, ${sds} Safety Data Sheets`);
});
