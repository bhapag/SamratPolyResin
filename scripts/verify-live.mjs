// Live production verification after the September 2026 consolidation release.
// Checks the things that could only break in production: the Cloudflare 301s
// (which astro preview cannot apply), the live sitemap, canonicals, robots and
// the new pages. Run: node verify-live.mjs
import { RETIRE } from './consolidated-guides.mjs';

const BASE = 'https://samratpolyresins.in';
const get = (p, opts = {}) => fetch(BASE + p, { redirect: 'manual', ...opts });

const results = { pass: 0, fail: 0, notes: [] };
const ok = (label) => { results.pass++; console.log(`  ok   ${label}`); };
const bad = (label, detail) => { results.fail++; results.notes.push(`${label} — ${detail}`); console.log(`  FAIL ${label} — ${detail}`); };

console.log('\n=== 1. Retired URLs must 301 to their consolidated guide ===');
const retired = Object.entries(RETIRE);
let chainCount = 0;
for (const [slug, dest] of retired) {
  const r = await get(`/resources/${slug}/`);
  const loc = r.headers.get('location');
  if (r.status !== 301) { bad(`/resources/${slug}/`, `status ${r.status}, expected 301`); continue; }
  const locPath = loc ? new URL(loc, BASE).pathname : null;
  if (locPath !== dest) { bad(`/resources/${slug}/`, `-> ${locPath}, expected ${dest}`); continue; }
  // The destination must be a real 200, not another redirect.
  const d = await get(dest);
  if (d.status !== 200) { bad(`destination ${dest}`, `status ${d.status}`); continue; }
  chainCount++;
}
if (chainCount === retired.length) ok(`all ${retired.length} retired URLs 301 to a live 200 destination, no chains`);

console.log('\n=== 2. Non-slash form also redirects ===');
let nonSlash = 0;
for (const [slug] of retired.slice(0, 10)) {
  const r = await get(`/resources/${slug}`);
  if (r.status === 301) nonSlash++;
}
nonSlash === 10 ? ok('non-slash form redirects (10 sampled)') : bad('non-slash form', `${nonSlash}/10 redirected`);

console.log('\n=== 3. New pages are live with correct canonicals ===');
const NEW = [
  '/resources/resin-glossary/',
  '/tools/resin-selector/',
  '/tools/quantity-guidance/',
  '/products/frp-allied-products/',
  '/products/industrial-specialty-resins/',
  '/how-to-order/',
];
for (const p of NEW) {
  const r = await fetch(BASE + p);
  if (r.status !== 200) { bad(p, `status ${r.status}`); continue; }
  const html = await r.text();
  const canon = /<link rel="canonical" href="([^"]+)"/.exec(html)?.[1];
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  const ld = (html.match(/application\/ld\+json/g) || []).length;
  if (canon !== BASE + p) bad(p, `canonical is ${canon}`);
  else if (h1 !== 1) bad(p, `${h1} h1 elements`);
  else ok(`${p} (canonical ok, 1 h1, ${ld} JSON-LD blocks)`);
}

console.log('\n=== 4. Sitemap ===');
const idx = await (await fetch(`${BASE}/sitemap-index.xml`)).text();
const maps = [...idx.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const urls = [];
for (const m of maps) {
  const xml = await (await fetch(m)).text();
  urls.push(...[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((x) => x[1]));
}
console.log(`  sitemap URLs: ${urls.length}`);
const leaked = retired.filter(([s]) => urls.some((u) => u.endsWith(`/resources/${s}/`)));
leaked.length === 0 ? ok('no retired URL in sitemap') : bad('sitemap', `${leaked.length} retired URLs present`);
const missingNew = NEW.filter((p) => !urls.includes(BASE + p));
missingNew.length === 0 ? ok('all 6 new pages in sitemap') : bad('sitemap', `missing ${missingNew.join(', ')}`);
urls.includes(`${BASE}/404`) || urls.some((u) => u.includes('/404')) ? bad('sitemap', '404 page present') : ok('404 not in sitemap');

console.log('\n=== 5. Every sitemap URL returns 200 ===');
let bad200 = [];
const queue = [...urls];
async function worker() {
  while (queue.length) {
    const u = queue.shift();
    try {
      const r = await fetch(u, { method: 'GET' });
      if (r.status !== 200) bad200.push(`${u} -> ${r.status}`);
    } catch (e) { bad200.push(`${u} -> ${e.message}`); }
  }
}
await Promise.all(Array.from({ length: 10 }, worker));
bad200.length === 0 ? ok(`all ${urls.length} sitemap URLs return 200`) : bad('sitemap URLs', bad200.slice(0, 5).join('; '));

console.log('\n=== 6. robots.txt and key pages ===');
const robots = await (await fetch(`${BASE}/robots.txt`)).text();
robots.includes('Sitemap:') ? ok('robots.txt references the sitemap') : bad('robots.txt', 'no Sitemap line');

// A bare `^Disallow: /$` match is a false positive here: Cloudflare's managed
// block disallows a list of NAMED AI crawlers (GPTBot, ClaudeBot, CCBot,
// Google-Extended and others), which says nothing about search indexing. Only a
// Disallow inside a `User-agent: *` group would block Googlebot. Parse the
// groups and check the wildcard one specifically.
{
  const groups = [];
  let current = null;
  for (const line of robots.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const ua = /^User-agent:\s*(.+)$/i.exec(t);
    if (ua) {
      if (!current || current.rules.length) current = { agents: [], rules: [] }, groups.push(current);
      current.agents.push(ua[1].trim());
      continue;
    }
    const rule = /^(Allow|Disallow):\s*(.*)$/i.exec(t);
    if (rule && current) current.rules.push({ type: rule[1].toLowerCase(), path: rule[2].trim() });
  }
  const wildcard = groups.filter((g) => g.agents.includes('*'));
  const blocksAll = wildcard.some((g) => g.rules.some((r) => r.type === 'disallow' && r.path === '/'));
  blocksAll
    ? bad('robots.txt', 'User-agent: * is disallowed site-wide — search crawling is blocked')
    : ok('User-agent: * is allowed — search crawling is not blocked');

  const blockedAgents = groups
    .filter((g) => !g.agents.includes('*') && g.rules.some((r) => r.type === 'disallow' && r.path === '/'))
    .flatMap((g) => g.agents);
  if (blockedAgents.length) {
    console.log(`  note  ${blockedAgents.length} named crawlers are blocked by the Cloudflare managed block:`);
    console.log(`        ${blockedAgents.join(', ')}`);
    console.log('        This does NOT affect Google Search indexing. It does affect AI');
    console.log('        assistant visibility — GA4 shows chatgpt.com referring real users.');
    console.log('        Changing it is a Cloudflare dashboard setting, not a repository one.');
  }
}

const r404 = await fetch(`${BASE}/no-such-page-xyz/`);
r404.status === 404 ? ok('unknown URL returns 404') : bad('404 handling', `status ${r404.status}`);

console.log('\n=== 7. CTR-fix pages carry their new metadata ===');
const metaChecks = [
  ['/products/', 'Polyester &amp; Epoxy Resin Products'],
  ['/resources/understanding-gel-time-in-polyester-resin/', 'What Is Gel Time in Polyester Resin'],
  ['/resources/what-is-gp-polyester-resin/', 'GP Full Form'],
  ['/products/unsaturated-polyester-resin/', 'UPR) Manufacturer in India'],
  ['/applications/resin-for-boat-manufacturing/', 'Marine &amp; Boat Composite Resins'],
  // Retitled in the brand phase to lead with the company name, which is one
  // of the branded terms targeted (`samrat poly resins contact`).
  ['/contact/', 'Contact Samrat Poly Resins'],
];
for (const [p, needle] of metaChecks) {
  const html = await (await fetch(BASE + p)).text();
  const title = /<title>([^<]*)<\/title>/.exec(html)?.[1] ?? '';
  title.includes(needle) ? ok(`${p} title updated`) : bad(p, `title is "${title}"`);
}

console.log('\n=== 8. LocalBusiness structured data on /contact/ ===');
{
  const html = await (await fetch(`${BASE}/contact/`)).text();
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((m) => { try { return JSON.parse(m[1]); } catch { return null; } })
    .filter(Boolean);
  const lb = blocks.find((b) => b['@type'] === 'LocalBusiness');
  if (!lb) bad('/contact/', 'no LocalBusiness JSON-LD');
  else {
    const invented = ['openingHours', 'openingHoursSpecification', 'geo', 'priceRange', 'aggregateRating', 'review']
      .filter((k) => lb[k] !== undefined);
    invented.length === 0
      ? ok(`LocalBusiness present, ${lb.address.postalCode}, no unverified fields`)
      : bad('LocalBusiness', `unverified fields present: ${invented.join(', ')}`);
  }
}

console.log('\n=== 9. Corrected specifications still live ===');
{
  const html = await (await fetch(`${BASE}/products/gp-clear-resin/`)).text();
  html.includes('1.20 g/cm³') ? bad('gp-clear-resin', 'the withdrawn 1.20 g/cm³ claim is back') : ok('gp-clear-resin: no withdrawn SG claim');
}

console.log(`\n===== ${results.pass} passed, ${results.fail} failed =====`);
if (results.fail) { console.log('\nFailures:'); results.notes.forEach((n) => console.log(' - ' + n)); }
