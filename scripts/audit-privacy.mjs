// Measure what a page load actually sends to third parties and stores in the
// browser, before any interaction.
//   node scripts/audit-privacy.mjs <baseUrl> [paths...]
// Prints, per path: third-party hosts contacted, cookies (name, domain,
// lifetime), localStorage/sessionStorage keys. Emulation, not a legal opinion.
import { chromium } from '@playwright/test';

const [base = 'https://samratpolyresins.in', ...rest] = process.argv.slice(2);
const paths = rest.length ? rest : ['/', '/contact/', '/products/gp-clear-resin/', '/custom-resin-request/', '/resources/'];
const origin = new URL(base).host;

const browser = await chromium.launch();
for (const p of paths) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const hosts = new Map();
  page.on('request', (r) => {
    const h = new URL(r.url()).host;
    if (h && h !== origin) hosts.set(h, (hosts.get(h) || 0) + 1);
  });
  await page.goto(base + p, { waitUntil: 'load', timeout: 90000 });
  await page.waitForTimeout(3000);
  const cookies = (await ctx.cookies()).map((c) => `${c.name}@${c.domain} ${c.expires > 0 ? Math.round((c.expires * 1000 - Date.now()) / 86400000) + 'd' : 'session'}`);
  const storage = await page.evaluate(() => { try { return { local: Object.keys(localStorage), session: Object.keys(sessionStorage) }; } catch { return { local: ['(blocked)'], session: [] }; } });
  console.log(`\n${p}`);
  console.log('  third-party hosts:', [...hosts.entries()].map(([h, n]) => `${h}(${n})`).join(', ') || 'none');
  console.log('  cookies:', cookies.join(' | ') || 'none');
  console.log('  localStorage:', storage.local.join(', ') || 'none', '| sessionStorage:', storage.session.join(', ') || 'none');
  await ctx.close();
}
await browser.close();
