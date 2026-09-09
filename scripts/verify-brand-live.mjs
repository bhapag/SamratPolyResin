// Live brand/entity verification. Run after deployment:
//   node scripts/verify-brand-live.mjs
//
// Checks that the one-entity-node work actually survived to production, and
// that the site has not drifted into claiming the bare word "Samrat".
import { site, ORGANIZATION_ID, WEBSITE_ID } from '../src/data/site.js';

const BASE = 'https://samratpolyresins.in';
const BRAND = 'Samrat Poly Resins';

let pass = 0;
const fails = [];
const ok = (m) => { pass++; console.log(`  ok   ${m}`); };
const bad = (m, d) => { fails.push(`${m} — ${d}`); console.log(`  FAIL ${m} — ${d}`); };

const html = {};
async function get(path) {
  if (!html[path]) html[path] = await (await fetch(BASE + path)).text();
  return html[path];
}
function ld(h) {
  return [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((m) => { try { return JSON.parse(m[1]); } catch { return { __invalid: true }; } });
}
const title = (h) => (/<title>([^<]*)<\/title>/.exec(h)?.[1] ?? '').replace(/&amp;/g, '&');
const textOf = (h) => h
  .replace(/<script[\s\S]*?<\/script>/g, '')
  .replace(/<style[\s\S]*?<\/style>/g, '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&');

const PAGES = ['/', '/about/', '/contact/', '/products/', '/technical-documents/',
  '/products/gp-resins/', '/products/epoxy-resins/'];

console.log('\n=== 1. One entity node, referenced everywhere ===');
for (const p of PAGES) {
  const blocks = ld(await get(p));
  if (blocks.some((b) => b.__invalid)) { bad(p, 'invalid JSON-LD'); continue; }
  const orgs = blocks.filter((b) => b['@type'] === 'Organization' || b['@type'] === 'LocalBusiness');
  const sites = blocks.filter((b) => b['@type'] === 'WebSite');
  if (!orgs.length) { bad(p, 'no Organization node'); continue; }
  if (orgs.some((o) => o['@id'] !== ORGANIZATION_ID)) { bad(p, 'org node uses a different @id'); continue; }
  if (orgs.some((o) => o.name !== BRAND)) { bad(p, 'org name is not the brand'); continue; }
  if (sites.length !== 1 || sites[0]['@id'] !== WEBSITE_ID) { bad(p, 'WebSite node missing or wrong @id'); continue; }
  if (sites[0].publisher['@id'] !== ORGANIZATION_ID) { bad(p, 'WebSite publisher not linked'); continue; }
  ok(`${p} — ${orgs.length} org node(s) + WebSite, all on the shared @id`);
}

console.log('\n=== 2. Organization carries only verified facts ===');
{
  const org = ld(await get('/')).find((b) => b['@type'] === 'Organization');
  const checks = [
    ['name', org.name === BRAND],
    ['founder', org.founder?.name === site.proprietor],
    ['foundingDate', org.foundingDate === site.established],
    ['taxID (GSTIN)', org.taxID === site.gst],
    ['postalCode', org.address?.postalCode === site.address.pin],
    ['ISO 9001:2015 certification', org.hasCertification?.name === 'ISO 9001:2015'],
    ['telephone', JSON.stringify(org.telephone) === JSON.stringify(site.phones.map((x) => x.dial))],
    ['areaServed', Array.isArray(org.areaServed) && org.areaServed.length > 0],
  ];
  for (const [label, good] of checks) good ? ok(`Organization.${label}`) : bad('Organization', `${label} wrong`);

  const invented = ['numberOfEmployees', 'aggregateRating', 'review', 'award', 'duns']
    .filter((k) => org[k] !== undefined);
  invented.length === 0
    ? ok('no unverified fields present')
    : bad('Organization', `unverified fields: ${invented.join(', ')}`);

  if (org.sameAs === undefined) {
    console.log('  note  sameAs is absent — correct until real profile URLs are supplied.');
  } else {
    const badUrls = org.sameAs.filter((u) => !/^https:\/\//.test(u));
    badUrls.length ? bad('sameAs', `not absolute https: ${badUrls.join(', ')}`) : ok(`sameAs has ${org.sameAs.length} URL(s)`);
  }
}

console.log('\n=== 3. Branded titles ===');
for (const [p, re] of [
  ['/', /^Samrat Poly Resins/],
  ['/about/', /^Samrat Poly Resins — Resin Manufacturer/],
  ['/contact/', /^Contact Samrat Poly Resins/],
  ['/technical-documents/', /Samrat Poly Resins$/],
  ['/products/gp-resins/', /Samrat Poly Resins$/],
]) {
  const t = title(await get(p));
  re.test(t) ? ok(`${p} — "${t}"`) : bad(p, `title is "${t}"`);
}

console.log('\n=== 4. About is the canonical brand page ===');
{
  const h = await get('/about/');
  const h1 = /<h1[^>]*>([\s\S]*?)<\/h1>/.exec(h)?.[1].replace(/<[^>]+>/g, '').trim();
  h1 === BRAND ? ok(`h1 is "${h1}"`) : bad('/about/', `h1 is "${h1}"`);

  const about = ld(h).find((b) => b['@type'] === 'AboutPage');
  about?.mainEntity?.['@id'] === ORGANIZATION_ID
    ? ok('AboutPage links to the entity node')
    : bad('/about/', 'AboutPage schema missing or unlinked');

  const t = textOf(h);
  for (const fact of [site.proprietor, site.gst, site.established, 'ISO 9001:2015']) {
    t.includes(String(fact)) ? ok(`states ${fact}`) : bad('/about/', `does not state ${fact}`);
  }

  for (const dup of ['/brand/', '/company/', '/samrat-poly-resins/', '/about-us/']) {
    const r = await fetch(BASE + dup);
    r.status === 404 ? ok(`${dup} correctly does not exist`) : bad(dup, `returns ${r.status} — a second brand page splits the entity`);
  }
}

console.log('\n=== 5. Scope discipline: never the bare word "Samrat" ===');
for (const p of ['/', '/about/', '/contact/', '/products/']) {
  const t = textOf(await get(p));
  const bare = [...t.matchAll(/Samrat(?!\s+Poly\s+Resins)(?!\s+Poly)/g)];
  bare.length === 0 ? ok(`${p} only uses the full company name`) : bad(p, `${bare.length} bare "Samrat" occurrence(s)`);

  const words = t.split(/\s+/).filter(Boolean).length;
  const share = ((t.match(/Samrat Poly Resins/g) || []).length * 3) / words;
  share < 0.05 ? ok(`${p} brand density ${(share * 100).toFixed(1)}%`) : bad(p, `brand density ${(share * 100).toFixed(1)}% — stuffed`);
}

console.log('\n=== 6. Product attribution ===');
for (const slug of ['gp-clear-resin', 'unsaturated-polyester-resin', 'epoxy-art-resin']) {
  const h = await get(`/products/${slug}/`);
  const prod = ld(h).find((b) => b['@type'] === 'Product');
  const linked = prod?.brand?.['@id'] === ORGANIZATION_ID;
  const named = textOf(h).includes(BRAND);
  linked && named ? ok(`${slug} — brand linked to entity node and named in copy`)
    : bad(slug, `brand linked: ${linked}, named in copy: ${named}`);
}

console.log(`\n===== ${pass} passed, ${fails.length} failed =====`);
if (fails.length) { console.log('\nFailures:'); fails.forEach((f) => console.log(' - ' + f)); }
