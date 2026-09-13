// Automated WCAG 2.2 A/AA checks with axe-core on representative pages.
//   node scripts/audit-a11y.mjs <baseUrl> <outJson>
// Automated checks find a subset of problems only; keyboard, zoom and
// screen-reader behaviour are checked separately.
import { chromium } from '@playwright/test';
import fs from 'node:fs';

const [base = 'http://localhost:4460', out = 'a11y.json', listFile, widthArg] = process.argv.slice(2);
const DEFAULT_PAGES = [
  '/', '/products/', '/products/gp-resins/', '/products/gp-clear-resin/', '/products/polyester-putty-resin/',
  '/products/frp-polyester-pigment/', '/applications/', '/resources/', '/resources/what-is-gp-polyester-resin/',
  '/contact/', '/about/', '/technical-documents/', '/catalogue/', '/how-to-order/', '/tools/resin-selector/',
  '/tools/quantity-guidance/', '/custom-resin-request/', '/privacy-policy/', '/cookie-policy/', '/terms/', '/no-such-page/',
];
const PAGES = listFile ? fs.readFileSync(listFile, 'utf8').split(String.fromCharCode(10)).map((s) => s.trim()).filter(Boolean) : DEFAULT_PAGES;
const WIDTHS = widthArg ? [Number(widthArg)] : [390, 1440];
const browser = await chromium.launch();
const results = [];
for (const width of WIDTHS) {
  const ctx = await browser.newContext({ viewport: { width, height: 900 } });
  await ctx.addInitScript(() => { try { localStorage.setItem('spr_analytics_consent_v1', JSON.stringify({ choice: 'denied', at: 'audit' })); } catch {} });
  const page = await ctx.newPage();
  for (const p of PAGES) {
    await page.goto(base + p, { waitUntil: 'load' });
    await page.evaluate(() => document.querySelectorAll('.js-reveal, .js-reveal-img').forEach((e) => e.classList.add('is-visible')));
    await page.waitForTimeout(800);
    await page.addScriptTag({ url: 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.2/axe.min.js' });
    const r = await page.evaluate(async () => {
      // @ts-ignore
      const res = await axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'] }, resultTypes: ['violations'] });
      return res.violations.map((v) => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.slice(0, 8).map((n) => ({ target: n.target.join(' '), summary: (n.failureSummary || '').slice(0, 220), html: n.html.slice(0, 160) })), count: v.nodes.length }));
    });
    results.push({ width, path: p, violations: r });
    console.log(width, p, r.map((v) => `${v.id}(${v.count})`).join(' ') || 'no violations');
  }
  await ctx.close();
}
fs.writeFileSync(out, JSON.stringify(results, null, 1));
await browser.close();
