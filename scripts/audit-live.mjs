// Production discoverability audit for samratpolyresins.in.
//   node scripts/audit-live.mjs [https://samratpolyresins.in]
// Reads the LIVE site only. Reports; changes nothing.
import fs from 'node:fs';

const BASE = process.argv[2] ?? 'https://samratpolyresins.in';
const problems = [];
const note = (m) => problems.push(m);
const get = (u, o = {}) => fetch(u, { redirect: 'manual', headers: { 'user-agent': 'spr-live-audit' }, ...o });

// robots
const robots = await (await get(`${BASE}/robots.txt`)).text();
const sitemapDecl = (robots.match(/^Sitemap:\s*(\S+)/im) || [])[1];
const disallowAll = /User-agent:\s*\*\s*[\r\n]+(?:[^\r\n]*[\r\n]+)*?Disallow:\s*\/\s*$/im.test(robots.split('# BEGIN Cloudflare')[0]);
console.log(`robots.txt: sitemap=${sitemapDecl} disallowAllForStar=${disallowAll}`);
if (!sitemapDecl) note('robots.txt declares no sitemap');

// sitemap
const idx = await (await get(sitemapDecl)).text();
const maps = [...idx.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const urls = [];
for (const m of maps) urls.push(...[...(await (await get(m)).text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((x) => x[1]));
console.log(`sitemap: ${maps.length} file(s), ${urls.length} URLs`);
const retired = urls.filter((u) => /pet-resin|\/uv-resin|what-is-uv-resin|marble-resin-vs-pet|gp-white-resin-tds/.test(u));
if (retired.length) note(`retired URLs in sitemap: ${retired.join(', ')}`);

// every sitemap URL: status, canonical, noindex, title, h1, json-ld validity
const titles = new Map(); const seen = { ok: 0 };
const pool = 8; let i = 0;
async function worker() {
  while (i < urls.length) {
    const u = urls[i++];
    const r = await get(u);
    if (r.status !== 200) { note(`${u} -> HTTP ${r.status}`); continue; }
    const h = await r.text();
    const canon = (h.match(/rel="canonical" href="([^"]+)"/) || [])[1];
    if (canon !== u) note(`${u} canonical=${canon}`);
    if (/<meta[^>]+name="robots"[^>]+noindex/i.test(h)) note(`${u} is noindex but in sitemap`);
    const t = (h.match(/<title>([^<]*)<\/title>/) || [])[1] || '';
    if (!t) note(`${u} no title`);
    (titles.get(t) || titles.set(t, []).get(t)).push(u);
    const h1s = (h.match(/<h1[\s>]/g) || []).length;
    if (h1s !== 1) note(`${u} has ${h1s} h1`);
    for (const s of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try {
        const j = JSON.parse(s[1]);
        const str = JSON.stringify(j);
        if (/"@type":"(Offer|AggregateRating|Review)"|"offers"|"aggregateRating"|"priceCurrency"/.test(str)) note(`${u} JSON-LD carries offer/rating/review`);
      } catch (e) { note(`${u} JSON-LD parse error`); }
    }
    seen.ok++;
  }
}
await Promise.all(Array.from({ length: pool }, worker));
const dupes = [...titles.entries()].filter(([, v]) => v.length > 1);
for (const [t, v] of dupes) note(`duplicate title "${t}" on ${v.length} URLs`);
console.log(`pages checked: ${seen.ok}; duplicate titles: ${dupes.length}`);

// redirects: every _redirects source resolves in one hop to a 200
const rules = fs.readFileSync('public/_redirects', 'utf8').split(/\r?\n/).filter((l) => l.trim() && !l.startsWith('#')).map((l) => l.trim().split(/\s+/));
let chains = 0, dead = 0;
for (const [from, to, code] of rules) {
  const r = await get(BASE + from);
  const loc = r.headers.get('location');
  if (!loc || !String(r.status).startsWith('3')) { note(`redirect ${from} not redirecting (HTTP ${r.status})`); dead++; continue; }
  const target = new URL(loc, BASE).href;
  const r2 = await get(target);
  if (String(r2.status).startsWith('3')) { note(`redirect chain ${from} -> ${target} -> ${r2.headers.get('location')}`); chains++; }
  else if (r2.status !== 200) { note(`redirect ${from} -> ${target} ends ${r2.status}`); dead++; }
}
console.log(`redirect rules: ${rules.length}; chains: ${chains}; broken: ${dead}`);

// https + host
const http = await get(BASE.replace('https:', 'http:') + '/');
console.log(`http:// -> ${http.status} ${http.headers.get('location')}`);
if (!(String(http.status).startsWith('3') && /^https:/.test(http.headers.get('location') || ''))) note('http does not redirect to https');
const www = await get(BASE.replace('://', '://www.') + '/').catch(() => null);
console.log(`www -> ${www ? www.status + ' ' + www.headers.get('location') : 'no response'}`);

fs.writeFileSync('audit-live-report.json', JSON.stringify({ urls: urls.length, problems }, null, 1));
console.log(problems.length ? `\nPROBLEMS (${problems.length}):\n  ` + problems.slice(0, 60).join('\n  ') : '\nno problems');
