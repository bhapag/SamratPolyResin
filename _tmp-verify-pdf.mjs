import { chromium } from 'playwright';
const SCRATCH = 'C:/Users/harmy/AppData/Local/Temp/claude/C--Users-harmy-samrat-poly-resins-website/5980f3b6-ff96-49d1-9f8f-34d3ee9bcf59/scratchpad';
const pdfPath = `${SCRATCH}/Samrat Poly Resins Product Catalog.pdf`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 900, height: 1300 } });
await page.goto('file:///' + pdfPath.replace(/ /g, '%20'));
await page.waitForTimeout(1500);
await page.screenshot({ path: `${SCRATCH}/pdf-check-p1.png` });
await browser.close();
console.log('done');
