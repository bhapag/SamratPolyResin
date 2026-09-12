import { chromium } from '@playwright/test';
import path from 'node:path';
const [base, out, label] = process.argv.slice(2);
const b = await chromium.launch();
const TARGETS = [
  ['technical-documents', '/technical-documents/', '.td-group'],
  ['gp-quartz', '/products/gp-quartz-resin/', '.prod-docs'],
  ['putty', '/products/polyester-putty-resin/', '.prod-img-warning, .marble-image-note'],
];
for (const [name, url, sel] of TARGETS) for (const w of [360, 390, 430, 768, 1440]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 }, deviceScaleFactor: 2 });
  await p.goto(base + url, { waitUntil: 'networkidle' });
  const el = p.locator(sel).first();
  if (!(await el.count())) { console.log(`${label} ${name} ${w}: selector missing`); await p.close(); continue; }
  const info = await p.evaluate((s) => {
    const e = document.querySelector(s.split(',')[0].trim()) || document.querySelector(s.split(',').pop().trim());
    const ctl = [...document.querySelectorAll('a.td-doc, a.doc-act-dl')];
    return {
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      scrollers: [...document.querySelectorAll('.td-table-scroll')].filter((x) => x.scrollWidth > x.clientWidth + 1).length,
      minTap: ctl.length ? Math.round(Math.min(...ctl.map((a) => a.getBoundingClientRect().height))) : null,
    };
  }, sel);
  if (name === 'technical-documents') {
    // screenshot the group that contains a TDS-only item and Paint Brushes
    const grp = p.locator('.td-group', { hasText: 'Paint Brushes' });
    await grp.scrollIntoViewIfNeeded(); await p.waitForTimeout(300);
    await grp.screenshot({ path: path.join(out, `${label}-${name}-${w}.png`) });
  } else {
    await el.scrollIntoViewIfNeeded(); await p.waitForTimeout(300);
    const box = name === 'putty' ? p.locator('.prod-media, .prod-gallery, .prod-img').first() : el;
    await (await box.count() ? box : el).screenshot({ path: path.join(out, `${label}-${name}-${w}.png`) });
  }
  console.log(`${label} ${name.padEnd(20)} ${String(w).padStart(4)}px overflow=${info.overflow} tableScrollNeeded=${info.scrollers} minTap=${info.minTap}`);
  await p.close();
}
// keyboard: first library download reachable by Tab with a visible focus ring
const p = await b.newPage({ viewport: { width: 390, height: 844 } });
await p.goto(base + '/technical-documents/');
await p.locator('a.td-doc').first().focus();
const f = await p.evaluate(() => { const e = document.activeElement; const s = getComputedStyle(e); return { cls: e.className, outline: s.outlineStyle + ' ' + s.outlineWidth, label: e.getAttribute('aria-label') }; });
console.log(`${label} keyboard focus: ${f.cls} outline=${f.outline} label="${f.label}"`);
await b.close();
