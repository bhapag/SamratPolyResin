import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import crypto from 'node:crypto';

// Approved laboratory photograph (2026-09-15). The /catalogue/ page and its
// PDF are approved catalogue work and intentionally still use the previous
// photograph; every other placement renders the approved master.
const MASTER = 'src/assets/quality/samrat-poly-resins-qc-laboratory.jpg';

test('the committed laboratory master is the approved file, byte for byte', () => {
  expect(crypto.createHash('sha256').update(fs.readFileSync(MASTER)).digest('hex'))
    .toBe('749ef66b9a6077b910576d897e9b62db8e74877d9474ab9e2a4104dca7de9fc5');
});

for (const [path, sel] of [
  ['/', '.why-quality-frame img'],
  ['/about/', '.about-facility-photo img[alt*="aboratory"]'],
  ['/products/gp-clear-resin/', 'img.lab-card'],
  ['/products/vinyl-ester-resin/', 'img.lab-card'],
] as const) {
  test(`${path} shows the approved laboratory photograph`, async ({ page }) => {
    await page.goto(path);
    const img = page.locator(sel).first();
    await img.scrollIntoViewIfNeeded();
    await expect.poll(() => img.evaluate((i: HTMLImageElement) => i.complete && i.naturalWidth > 0)).toBe(true);
    expect(await img.evaluate((i: HTMLImageElement) => i.currentSrc || i.src)).toMatch(/samrat-poly-resins-qc-laboratory/);
  });
}

test('only the catalogue page still references the previous laboratory photograph', () => {
  const walk = (d: string): string[] => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(`${d}/${e.name}`) : e.name === 'index.html' ? [`${d}/${e.name}`] : []);
  const hits = walk('dist').filter((f) => /\/_astro\/qc-laboratory\./.test(fs.readFileSync(f, 'utf8'))).map((f) => f.split(String.fromCharCode(92)).join('/'));
  expect(hits).toEqual(['dist/catalogue/index.html']);
});
