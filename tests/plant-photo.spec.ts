import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import crypto from 'node:crypto';

// Approved plant photograph (2026-09-15). Every plant placement renders a
// derivative of this master; the previous photograph is gone from the build.
const MASTER = 'src/assets/facility/samrat-poly-resins-plant-reactors.png';
const APPROVED_SHA256 = 'bdf9374e3f0bf2f18c1b996615ea159fc47f1740f5f254391fd7b794799c178c';

test('the committed master is the approved file, byte for byte', () => {
  expect(crypto.createHash('sha256').update(fs.readFileSync(MASTER)).digest('hex')).toBe(APPROVED_SHA256);
  expect(fs.existsSync('src/assets/facility/production-infrastructure.jpg')).toBe(false);
});

const PLACEMENTS: [string, string][] = [
  ['/', '.facility-frame img'],
  ['/about/', '.about-photo img'],
  ['/about/', '.about-facility-photo img'],
  ['/catalogue/', '.cover-img'],
  ['/products/gp-clear-resin/', 'img.plant-interior-card'],
  ['/products/bisphenol-resin/', 'img.plant-interior-card'],
  ['/resources/what-is-gp-polyester-resin/', '.article-photo img'],
];

for (const [path, sel] of PLACEMENTS) {
  test(`${path} ${sel} shows the approved plant photograph, undistorted`, async ({ page }) => {
    await page.goto(path);
    const img = page.locator(sel).first();
    await img.scrollIntoViewIfNeeded();
    await expect.poll(() => img.evaluate((i: HTMLImageElement) => i.complete && i.naturalWidth > 0)).toBe(true);
    const r = await img.evaluate((i: HTMLImageElement) => ({ src: i.currentSrc || i.src, alt: i.alt, fit: getComputedStyle(i).objectFit, w: i.getBoundingClientRect().width, h: i.getBoundingClientRect().height, nw: i.naturalWidth, nh: i.naturalHeight }));
    expect(r.src).toMatch(/samrat-poly-resins-plant-reactors/);
    expect(r.alt).toMatch(/reactor/i);
    expect(r.alt).not.toMatch(/gate|building|exterior/i);
    if (r.fit === 'fill') expect(Math.abs(r.w / r.h - r.nw / r.nh)).toBeLessThan(0.03);
  });
}

test('no built page references the previous plant photograph', () => {
  const walk = (d: string): string[] => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(`${d}/${e.name}`) : e.name.endsWith('.html') ? [`${d}/${e.name}`] : []);
  const hits = walk('dist').filter((f) => /production-infrastructure\.[A-Za-z0-9_-]+\.(webp|jpg|avif|png)|factory-gate/.test(fs.readFileSync(f, 'utf8')));
  expect(hits).toEqual([]);
});
