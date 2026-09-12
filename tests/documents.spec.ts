import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import { products } from '../src/data/products.js';

// Document rules for the product range. Every assertion is derived from the
// product records, so adding a document updates the expectation automatically
// — and nothing here can be satisfied by writing a count down by hand.
//
// The three document kinds are independent. A TDS does not imply an SDS, and a
// Product Data Sheet is not a TDS: it is published for an article (Paint
// Brushes) that has no chemical hazard classification of its own.

const PUBLIC = path.resolve('public');
const docs = products.flatMap((p) =>
  (['tdsUrl', 'sdsUrl', 'pdsUrl'] as const)
    .filter((k) => (p as any)[k])
    .map((k) => ({ slug: p.slug, name: p.name, kind: k, url: (p as any)[k] as string })));

test.describe('document files', () => {
  test('every linked document exists and is a real PDF', async () => {
    const problems: string[] = [];
    for (const d of docs) {
      const file = path.join(PUBLIC, d.url);
      if (!fs.existsSync(file)) { problems.push(`${d.slug} ${d.kind}: ${d.url} missing`); continue; }
      const head = fs.readFileSync(file).subarray(0, 5).toString('latin1');
      if (head !== '%PDF-') problems.push(`${d.slug} ${d.kind}: ${d.url} is not a PDF`);
    }
    expect(problems, problems.join('\n')).toEqual([]);
  });

  test('each kind lives in its own directory', async () => {
    const wrong = docs.filter((d) => !d.url.startsWith(`/${d.kind.slice(0, 3)}/`));
    expect(wrong.map((d) => `${d.slug} ${d.kind} ${d.url}`)).toEqual([]);
  });

  test('retired and historical sheets are never linked from a product', async () => {
    // pet-resin-*: the historical sheet-grade documents, held back from
    // Polyester Putty Resin until the chemist establishes whether they describe
    // the same grade. uv-resin-*: a product removed from the range.
    const linked = docs.filter((d) => /\/(pet-resin|uv-resin)-(tds|sds)\.pdf$/.test(d.url));
    expect(linked.map((d) => `${d.slug} → ${d.url}`)).toEqual([]);
  });
});

test.describe('product page document actions', () => {
  test('each product shows exactly the documents it has, no more', async ({ page }) => {
    test.setTimeout(180_000);
    const problems: string[] = [];
    for (const p of products as any[]) {
      await page.goto(`/products/${p.slug}/`);
      const block = page.locator('.prod-docs');
      const hrefs = await block.locator('a.doc-act-dl').evaluateAll((els) =>
        els.map((e) => e.getAttribute('href')));
      const expected = [p.tdsUrl, p.pdsUrl, p.sdsUrl].filter(Boolean);
      if (JSON.stringify(hrefs) !== JSON.stringify(expected)) {
        problems.push(`${p.slug}: downloads ${JSON.stringify(hrefs)} ≠ data ${JSON.stringify(expected)}`);
      }
      // No SDS: the absence is stated, and it is not a control.
      if (!p.sdsUrl && (p.tdsUrl || p.pdsUrl)) {
        const none = block.locator('.doc-act-none');
        if ((await none.count()) !== 1) problems.push(`${p.slug}: no stated SDS absence`);
        else if ((await none.evaluate((e) => e.tagName)) !== 'P') problems.push(`${p.slug}: SDS absence rendered as a control`);
      }
      // The range link is navigation, never a download.
      const nav = block.locator('.doc-act-nav');
      if ((await nav.count()) !== 1) problems.push(`${p.slug}: product range link missing`);
      else if (await nav.evaluate((e) => e.hasAttribute('download'))) problems.push(`${p.slug}: range link marked as download`);
    }
    expect(problems, problems.join('\n')).toEqual([]);
  });

  test('Paint Brushes offers a Product Data Sheet and never calls it a TDS or SDS', async ({ page }) => {
    await page.goto('/products/paint-brushes/');
    const downloads = (await page.locator('.prod-docs a.doc-act-dl').allInnerTexts()).join(' | ');
    expect(downloads).toContain('Product Data Sheet');
    expect(downloads).not.toContain('Technical Data Sheet');
    expect(downloads).not.toContain('Safety Data Sheet');
    const label = await page.locator('.prod-docs a.doc-act-dl').first().getAttribute('aria-label');
    expect(label).toMatch(/^Download Product Data Sheet PDF for Paint Brushes/);
  });

  test('Polyester Putty Resin publishes no document at all', async ({ page }) => {
    await page.goto('/products/polyester-putty-resin/');
    await expect(page.locator('a[href$=".pdf"]')).toHaveCount(0);
  });

  test('no page still says a published TDS is "not published yet"', async ({ page }) => {
    test.setTimeout(180_000); // one page load per product with a TDS
    const problems: string[] = [];
    for (const p of (products as any[]).filter((x) => x.tdsUrl)) {
      await page.goto(`/products/${p.slug}/`);
      const html = await page.content();
      if (/technical data sheet[^.]{0,80}(not published yet|being prepared)/i.test(html)) problems.push(p.slug);
    }
    expect(problems, `stale "TDS not published" copy on: ${problems.join(', ')}`).toEqual([]);
  });
});

test.describe('technical document library', () => {
  test('counts on the page are the counts in the data', async ({ page }) => {
    const tds = products.filter((p: any) => p.tdsUrl).length;
    const sds = products.filter((p: any) => p.sdsUrl).length;
    const pds = products.filter((p: any) => p.pdsUrl).length;
    await page.goto('/technical-documents/');
    await expect(page.locator('.td-hero-badge-num')).toHaveText(String(tds + sds + pds));
    const sub = (await page.locator('.td-hero-sub').innerText()).replace(/\s+/g, ' ');
    expect(sub).toContain(`${tds} Technical Data Sheets`);
    expect(sub).toContain(`${sds} Safety Data Sheets`);
    expect(sub).toContain(`${pds} Product Data Sheet`);
  });

  test('every document is downloadable from the library under its correct kind', async ({ page }) => {
    await page.goto('/technical-documents/');
    const rows = await page.locator('a.td-doc').evaluateAll((els) =>
      els.map((e) => ({ href: e.getAttribute('href'), kind: e.querySelector('.td-doc-kind')?.textContent?.trim() })));
    const problems: string[] = [];
    for (const d of docs) {
      const row = rows.find((r) => r.href === d.url);
      const want = d.kind.slice(0, 3).toUpperCase();
      if (!row) problems.push(`${d.slug}: ${d.url} not in library`);
      else if (row.kind !== want) problems.push(`${d.slug}: ${d.url} labelled ${row.kind}, should be ${want}`);
    }
    expect(problems, problems.join('\n')).toEqual([]);
  });
});
