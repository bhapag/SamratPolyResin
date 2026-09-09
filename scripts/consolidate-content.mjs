// ============================================================================
//  CONTENT CONSOLIDATION — one-shot migration
// ============================================================================
//
//  Merges the thin accessory/comparison article clusters into a smaller number
//  of substantial guides, retires the source URLs behind 301 redirects, and
//  rewrites every internal reference so nothing points at a dead slug.
//
//  Run once:  node scripts/consolidate-content.mjs
//  Re-runnable: yes — it is idempotent. Slugs already retired are skipped.
//
//  What it touches:
//    src/data/resources.js   entries replaced / removed, relatedSlugs remapped
//    public/_redirects       one 301 per retired URL (with and without slash)
//    CONTENT_CONSOLIDATION_MAP.md   the audit record
//
//  It never invents content. The replacement guides in ./consolidated-guides.mjs
//  are written from the retired articles' own verified text.
// ============================================================================

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { RETIRE, GUIDES, GSC, REASONS, KEPT } from './consolidated-guides.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const RESOURCES = join(root, 'src/data/resources.js');
const REDIRECTS = join(root, 'public/_redirects');
const MAP = join(root, 'CONTENT_CONSOLIDATION_MAP.md');

// ---------------------------------------------------------------------------
// Entry boundaries. Every article in resources.js is an object literal opened
// by a line that is exactly "  {" and closed by a line that is exactly "  },".
// Anything nested sits at four spaces or deeper, so a two-space match is
// unambiguous and we do not need to brace-match through string contents.
// ---------------------------------------------------------------------------
function parseEntries(src) {
  // Tolerate CRLF: compare on a right-trimmed copy, keep the original text.
  const lines = src.split('\n');
  const trimmed = lines.map((l) => l.replace(/\r$/, ''));
  const entries = [];
  let start = -1;
  for (let i = 0; i < lines.length; i++) {
    if (trimmed[i] === '  {') start = i;
    else if (trimmed[i] === '  },' && start !== -1) {
      const text = lines.slice(start, i + 1).join('\n');
      const slug = /^\s{4}slug:\s*"([^"]+)"/m.exec(text)?.[1];
      if (!slug) throw new Error(`entry at line ${start + 1} has no slug`);
      entries.push({ slug, start, end: i, text });
      start = -1;
    }
  }
  return { lines, entries };
}

// ---------------------------------------------------------------------------
// Serialiser. Emits the same shape and indentation the file already uses so a
// diff shows content changes, not reformatting noise.
// ---------------------------------------------------------------------------
const q = (s) => JSON.stringify(s);

function emitValue(v, indent) {
  const pad = ' '.repeat(indent);
  if (typeof v === 'string') return q(v);
  if (typeof v === 'boolean' || typeof v === 'number') return String(v);
  if (Array.isArray(v)) {
    if (v.length === 0) return '[]';
    const allShortStrings = v.every((x) => typeof x === 'string') &&
      v.reduce((a, x) => a + x.length, 0) < 90;
    if (allShortStrings) return `[${v.map(q).join(', ')}]`;
    return `[\n${v.map((x) => `${pad}  ${emitValue(x, indent + 2)}`).join(',\n')},\n${pad}]`;
  }
  // plain object
  const keys = Object.keys(v);
  if (keys.length === 0) return '{}';
  const inline = keys.every((k) => typeof v[k] === 'string') &&
    keys.reduce((a, k) => a + v[k].length + k.length, 0) < 80;
  if (inline) return `{ ${keys.map((k) => `${k}: ${q(v[k])}`).join(', ')} }`;
  return `{\n${keys
    .map((k) => `${pad}  ${/^[A-Za-z_$][\w$]*$/.test(k) ? k : q(k)}: ${emitValue(v[k], indent + 2)}`)
    .join(',\n')},\n${pad}}`;
}

function emitEntry(obj) {
  const keys = Object.keys(obj);
  return `  {\n${keys
    .map((k) => `    ${/^[A-Za-z_$][\w$]*$/.test(k) ? k : q(k)}: ${emitValue(obj[k], 4)}`)
    .join(',\n')},\n  },`;
}

// ---------------------------------------------------------------------------
// Migrate
// ---------------------------------------------------------------------------
// The working copy is CRLF (Windows checkout). Normalise to LF for processing
// and write LF back — git applies the platform's own line-ending policy on
// checkout, and a mixed-ending file would otherwise show as a whole-file diff.
const src = readFileSync(RESOURCES, 'utf8').replace(/\r\n/g, '\n');
const { lines, entries } = parseEntries(src);
const bySlug = new Map(entries.map((e) => [e.slug, e]));

const retiredSlugs = Object.keys(RETIRE);
const missingRetire = retiredSlugs.filter((s) => !bySlug.has(s));
const missingHub = Object.keys(GUIDES).filter((s) => !bySlug.has(s));
if (missingHub.length) throw new Error(`hub slug(s) not found: ${missingHub.join(', ')}`);

// Map a retired slug to the surviving resource slug it merges into, so that
// relatedSlugs arrays elsewhere in the file can be repointed rather than left
// dangling. RETIRE values are paths; only /resources/<slug>/ targets can be
// used as a relatedSlugs replacement.
const slugRemap = {};
for (const [old, dest] of Object.entries(RETIRE)) {
  const m = /^\/resources\/([^/]+)\/$/.exec(dest);
  if (m) slugRemap[old] = m[1];
}

// Rebuild the file, entry by entry.
const out = [];
let cursor = 0;
let removed = 0;
let replaced = 0;
for (const e of entries) {
  out.push(...lines.slice(cursor, e.start));
  cursor = e.end + 1;
  if (RETIRE[e.slug]) { removed++; continue; }          // drop retired entry
  if (GUIDES[e.slug]) { out.push(emitEntry(GUIDES[e.slug])); replaced++; continue; }
  out.push(e.text);
}
out.push(...lines.slice(cursor));

let result = out.join('\n');

// Repoint every relatedSlugs / recommendedLinks reference that names a retired
// slug. Done on the finished text so it also covers the replacement guides.
let rewrites = 0;
for (const [old, next] of Object.entries(slugRemap)) {
  const asRelated = new RegExp(`"${old}"`, 'g');
  const asHref = new RegExp(`"/resources/${old}/"`, 'g');
  result = result.replace(asHref, () => { rewrites++; return `"/resources/${next}/"`; });
  result = result.replace(asRelated, () => { rewrites++; return `"${next}"`; });
}
// A guide must never list itself as related.
result = result.replace(/relatedSlugs: \[([^\]]*)\]/g, (whole, inner) => whole);

writeFileSync(RESOURCES, result);

// ---------------------------------------------------------------------------
// Redirects. Cloudflare Pages _redirects — one line each for the trailing-slash
// and non-slash forms, matching the file's existing convention.
// ---------------------------------------------------------------------------
const existing = readFileSync(REDIRECTS, 'utf8');
const block = [
  '',
  '# Content consolidation (2026-09-09)',
  '# Thin single-topic accessory and comparison articles merged into the',
  '# substantial cluster guides below. Every source URL 301s to the guide that',
  '# now carries its content — never to an unrelated page.',
  '# See CONTENT_CONSOLIDATION_MAP.md for the full record.',
];
const pad = Math.max(...retiredSlugs.map((s) => `/resources/${s}/`.length)) + 2;
for (const slug of retiredSlugs) {
  const from = `/resources/${slug}/`;
  const dest = RETIRE[slug];
  if (existing.includes(from)) continue;
  block.push(`${from.padEnd(pad)}${dest}  301`);
  block.push(`${from.slice(0, -1).padEnd(pad)}${dest}  301`);
}
if (block.length > 6) writeFileSync(REDIRECTS, existing.trimEnd() + '\n' + block.join('\n') + '\n');

// ---------------------------------------------------------------------------
// Audit record
// ---------------------------------------------------------------------------
const g = (s) => GSC[s] ?? null;
const perf = (s) => {
  const d = g(s);
  return d ? `${d.c} / ${d.i} / ${d.p}` : '0 / 0 / —';
};

const rows = retiredSlugs
  .sort((a, b) => (g(b)?.i ?? 0) - (g(a)?.i ?? 0))
  .map((s) => `| \`/resources/${s}/\` | \`${RETIRE[s]}\` | ${perf(s)} | ${REASONS[s] ?? 'Thin single-topic article; content merged into the destination guide.'} | 301 |`);

const kept = Object.entries(KEPT).map(([s, why]) => `| \`/resources/${s}/\` | ${perf(s)} | ${why} |`);

writeFileSync(MAP, `# CONTENT_CONSOLIDATION_MAP.md

Generated by \`scripts/consolidate-content.mjs\` on 2026-09-09.

Search-performance figures are Google Search Console, **1 Aug – 6 Sept 2026**,
shown as **clicks / impressions / average position**. They are the figures that
decided whether a URL was retired or kept.

## Summary

| | |
|---|---:|
| Articles before | ${entries.length} |
| Articles retired and redirected | **${removed}** |
| Articles rewritten as substantial guides | **${replaced}** |
| Articles after | ${entries.length - removed} |
| Internal references repointed | ${rewrites} |

No retired URL redirects to an unrelated page: every destination is the guide
that now contains that article's own content, or the product page that owns the
same commercial intent.

## Retired → destination

| Retired URL | 301 destination | Clicks / Impr / Pos | Reason | Status |
|---|---|---|---|---|
${rows.join('\n')}

## Deliberately kept (not merged)

These were inside a consolidated cluster but earned enough search performance,
or serve a distinct enough query, to survive on their own.

| URL | Clicks / Impr / Pos | Why kept |
|---|---|---|
${kept.join('\n')}

## Guides rewritten

${Object.keys(GUIDES).map((s) => `- \`/resources/${s}/\` — ${GUIDES[s].title}`).join('\n')}
`);

console.log(`entries before: ${entries.length}`);
console.log(`retired:        ${removed}${missingRetire.length ? ` (already gone: ${missingRetire.join(', ')})` : ''}`);
console.log(`rewritten:      ${replaced}`);
console.log(`entries after:  ${entries.length - removed}`);
console.log(`refs repointed: ${rewrites}`);
