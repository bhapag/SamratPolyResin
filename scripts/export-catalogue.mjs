// Export /catalogue/ to the downloadable A4 PDF.
//
//   npm run build && npx astro preview --port 4460
//   node scripts/export-catalogue.mjs http://localhost:4460
//
// The PDF is generated from the built page, which reads products.js, so the
// catalogue and the website cannot disagree about names, categories or which
// documents exist. Re-run this whenever product data or documents change;
// tests/catalogue.spec.ts fails if the PDF falls out of step with the data.
import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';

const base = process.argv[2] ?? 'http://localhost:4460';
const out = 'public/downloads/samrat-poly-resins-product-catalogue-2026-09.pdf';
mkdirSync('public/downloads', { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`${base}/catalogue/`, { waitUntil: 'networkidle' });
await page.emulateMedia({ media: 'print' });
await page.pdf({
  path: out,
  format: 'A4',
  printBackground: true,
  preferCSSPageSize: true,
  displayHeaderFooter: true,
  headerTemplate: '<span></span>',
  footerTemplate:
    '<div style="width:100%;font:7pt Arial,sans-serif;color:#6b6456;padding:0 12mm;display:flex;justify-content:space-between">' +
    '<span>Samrat Poly Resins · Product Catalogue · September 2026 · samratpolyresins.in</span>' +
    '<span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>',
  margin: { top: '12mm', bottom: '14mm', left: '12mm', right: '12mm' },
  tagged: true,
  outline: true,
});
await browser.close();
console.log('written', out);
