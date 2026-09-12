import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
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

  test('ISO Polyester, ISO Gelcoat and UV Stabilized publish their final TDS, not the drafts', async () => {
    // Working drafts of these three were published in 3276593 and withdrawn in
    // 8832615 ("Working draft", "to be confirmed"). The owner then supplied final
    // files, published at the same URLs. The drafts and finals share one
    // reference and revision (Rev. 01, September 2026), so the bytes are the only
    // thing that tells them apart — hence the pinned hashes.
    const FINAL: Record<string, string> = {
      'iso-polyester-resin': 'b36730c51b88e16addbbd7a5a6be15b16d04c9b147eb2d475d2d0c4c0ce2030a',
      'iso-gelcoat': 'ccdb8ecd4748e1c21a5213c9b9cdcc8946b158499c474a35e3927522aeb3133c',
      'uv-stabilized-sheet-grade-yellow-resin': '30e6d47591365f5004656a8019dfe33f9ef7002a95fe703770bfaf824f375702',
    };
    const problems: string[] = [];
    for (const [slug, want] of Object.entries(FINAL)) {
      const url = `/tds/${slug}-tds.pdf`;
      const p: any = products.find((x) => x.slug === slug);
      if (p?.tdsUrl !== url) problems.push(`${slug}: tdsUrl is ${p?.tdsUrl}`);
      const bytes = fs.readFileSync(path.join(PUBLIC, url));
      if (crypto.createHash('sha256').update(bytes).digest('hex') !== want) problems.push(`${slug}: not the final file`);
    }
    expect(problems, problems.join('\n')).toEqual([]);
  });

  test('the historical PET sheet-grade TDS is kept, but never served or linked', async () => {
    const hist = path.resolve('source-documents/historical/historical-spr-tds-pet-pet-resin-original.pdf');
    expect(fs.existsSync(hist), 'historical source missing').toBe(true);
    expect(fs.existsSync(path.join(PUBLIC, 'tds', 'pet-resin-tds.pdf')), 'PET TDS is back in public/').toBe(false);
    const putty: any = products.find((x) => x.slug === 'polyester-putty-resin');
    expect([putty.tdsUrl, putty.sdsUrl, putty.pdsUrl].filter(Boolean)).toEqual([]);
    expect(products.some((x) => /^pet-resin$/.test(x.slug)), 'PET Resin recreated as a product').toBe(false);
  });

  test('six TDS stay on their previous revision until a consistent TDS/SDS pair exists', async () => {
    // The replacement files for these six changed Flash Point from "Not
    // Provided" to "32 C, closed cup" while keeping the same reference and
    // revision (Rev. 01, July 2026), and each published SDS states that the TDS
    // lists flash point as "Not Provided". A value inside the SDS's carried-over
    // 31-34 C range is not a measurement for the grade. Until a revised pair with
    // proper revision control is supplied, the previous TDS is what is published.
    // Changing one of these hashes should be a deliberate act, made together with
    // the matching SDS.
    const HELD: Record<string, string> = {
      'button-grade-resin': '894228cad58e4a552a9fee94086b4e5d14a7df4fa81e80c97230a1a1eb1e0e70',
      'fire-retardant-resin': '58841fb102f29eede3c5167e9a5670f78fc3782e34f990a52db2d87d61f0ba96',
      'gp-gelcoat-resin': '8c3c8c584af9487cbc3c2a4889ab95aa661abd8cbeb0fc357400fa8553e41948',
      'lamination-resin': 'f35be96cc2bf27a99d02962f763756611372a1576478d5762f24fdbbbeeb2625',
      'roof-light-resin': '5cdebfb6c78810784e8757167a82d72cbb9963755f2e8b847b0b2d4489355a4c',
      'sheet-grade-yellow-resin': '3c131451dfce7eef2cbb1370e3ff9216a7445e40837774f6d571eb36eace2f3b',
    };
    const changed = Object.entries(HELD).filter(([slug, want]) => {
      const bytes = fs.readFileSync(path.join(PUBLIC, 'tds', `${slug}-tds.pdf`));
      return crypto.createHash('sha256').update(bytes).digest('hex') !== want;
    }).map(([slug]) => slug);
    expect(changed, `TDS changed without a matching SDS revision: ${changed.join(', ')}`).toEqual([]);
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
      // No published SDS: no SDS row of any kind — no placeholder, note or
      // enquiry prompt. The group lists only the documents that exist.
      if (!p.sdsUrl) {
        const text = (await block.innerText()).replace(/\s+/g, ' ');
        if (/Safety Data Sheet|\bSDS\b/.test(text)) problems.push(`${p.slug}: mentions an SDS it does not have — "${text.slice(0, 120)}"`);
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
    const whole = await page.locator('.prod-docs').innerText();
    expect(whole, 'no SDS row, placeholder or exemption note').not.toMatch(/Safety Data Sheet|Not applicable/);
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
    // Astro drops whitespace where literal text and an expression meet across a
    // newline; this once rendered as "in one place:31" and "grades.Each".
    expect(sub, 'punctuation glued to the next word').not.toMatch(/[:.,;][A-Za-z0-9]/);
  });

  test('a product without an SDS has an empty SDS cell, not a placeholder', async ({ page }) => {
    await page.goto('/technical-documents/');
    const cells = await page.locator('.td-table tbody tr').evaluateAll((rows) =>
      rows.map((r) => ({ name: r.querySelector('th')?.textContent?.trim(), sds: r.querySelectorAll('td')[1]?.innerText.trim() })));
    const problems: string[] = [];
    for (const p of products as any[]) {
      const row = cells.find((c) => c.name === p.name);
      if (!row) continue;
      if (!p.sdsUrl && row.sds !== '') problems.push(`${p.slug}: SDS cell says "${row.sds}"`);
    }
    expect(problems, problems.join('\n')).toEqual([]);
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
