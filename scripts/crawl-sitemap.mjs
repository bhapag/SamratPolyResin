// Crawl every URL in the sitemap and check indexability basics.
//   node scripts/crawl-sitemap.mjs <baseUrl> [--sitemap-from=<url>]
// Checks per URL: HTTP 200 without redirect, self-canonical, no noindex
// (meta or X-Robots-Tag), exactly one H1, JSON-LD without price/rating/
// availability, internal links resolve (200, or a single redirect hop to a
// 200), and pages in the sitemap that no other page links to (orphans).
const [base = 'https://samratpolyresins.in', ...flags] = process.argv.slice(2);
const PROD = 'https://samratpolyresins.in';
const sitemapFrom = (flags.find((f) => f.startsWith('--sitemap-from=')) || '').split('=')[1] || base;

const get = async (url, redirect = 'manual') => {
  for (let i = 0; i < 3; i++) {
    try { return await fetch(url, { redirect, headers: { 'user-agent': 'SPR-sitemap-audit/1.0' } }); }
    catch (e) { if (i === 2) throw e; await new Promise((r) => setTimeout(r, 800)); }
  }
};
const toLocal = (u) => u.replace(PROD, base);

const robots = await (await get(base + '/robots.txt')).text();
const index = await (await get(sitemapFrom + '/sitemap-index.xml')).text();
const maps = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
let urls = [];
for (const sm of maps) urls.push(...[...(await (await get(toLocal(sm).replace(base, sitemapFrom))).text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
urls = [...new Set(urls)];

const problems = [];
const inbound = new Map(urls.map((u) => [u, 0]));
const linkTargets = new Map();
const pool = async (items, n, fn) => { const q = [...items]; await Promise.all(Array.from({ length: n }, async () => { while (q.length) await fn(q.shift()); })); };

await pool(urls, 8, async (u) => {
  const res = await get(toLocal(u));
  if (res.status !== 200) { problems.push([u, `status ${res.status} ${res.headers.get('location') || ''}`]); return; }
  const xr = res.headers.get('x-robots-tag'); if (xr && /noindex/i.test(xr)) problems.push([u, `X-Robots-Tag ${xr}`]);
  const html = await res.text();
  const canon = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
  if (canon !== u) problems.push([u, `canonical ${canon}`]);
  if (/<meta name="robots" content="[^"]*noindex/i.test(html)) problems.push([u, 'meta noindex']);
  const h1 = (html.replace(/<script[\s\S]*?<\/script>/g, '').match(/<h1\b/g) || []).length;
  if (h1 !== 1) problems.push([u, `h1 count ${h1}`]);
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]).join(' ');
  if (/"(offers|price|priceCurrency|aggregateRating|review|availability)"\s*:/i.test(ld)) problems.push([u, 'structured data has price/rating/availability']);
  const body = html.replace(/<script[\s\S]*?<\/script>|<!--[\s\S]*?-->/g, '');
  for (const m of body.matchAll(/<a\b[^>]*href="([^"#?]*)(?:[?#][^"]*)?"/g)) {
    let h = m[1]; if (!h) continue;
    if (h.startsWith(PROD)) h = h.slice(PROD.length) || '/';
    if (!h.startsWith('/') || h.startsWith('//')) continue;
    const abs = PROD + h;
    if (abs !== u && inbound.has(abs)) inbound.set(abs, inbound.get(abs) + 1);
    if (!linkTargets.has(h)) linkTargets.set(h, u);
  }
});

const linkProblems = [];
await pool([...linkTargets.keys()], 8, async (h) => {
  let res = await get(base + h);
  if (res.status >= 300 && res.status < 400) {
    const loc = new URL(res.headers.get('location'), base + h);
    const res2 = await get(base + loc.pathname);
    if (res2.status !== 200) linkProblems.push([h, `redirect -> ${loc.pathname} -> ${res2.status}`, linkTargets.get(h)]);
    else linkProblems.push([h, `redirect (1 hop) -> ${loc.pathname}`, linkTargets.get(h)]);
  } else if (res.status !== 200) linkProblems.push([h, `status ${res.status}`, linkTargets.get(h)]);
});

const orphans = [...inbound].filter(([u, n]) => n === 0 && u !== PROD + '/');
console.log(`sitemap URLs: ${urls.length}`);
console.log(`robots.txt: ${/Disallow:\s*\/\s*$/m.test(robots) ? 'BLOCKS SITE' : 'allows crawl'}; sitemap line: ${/Sitemap:/i.test(robots)}`);
console.log(`page problems: ${problems.length}`); problems.forEach((p) => console.log('  ', ...p));
console.log(`internal link targets checked: ${linkTargets.size}; problems: ${linkProblems.length}`); linkProblems.forEach((p) => console.log('  ', ...p));
console.log(`orphans (in sitemap, no inbound internal link): ${orphans.length}`); orphans.forEach(([u]) => console.log('  ', u));
