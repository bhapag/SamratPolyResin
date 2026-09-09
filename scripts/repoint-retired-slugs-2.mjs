// ============================================================================
//  REPOINT RETIRED SLUGS
// ============================================================================
//
//  The consolidation script rewrites references inside resources.js. It does
//  not touch products.js, applications.js, or the hardcoded slug lists and
//  inline hrefs in page templates — and those carried 7 links to URLs that had
//  just been retired.
//
//  Those links were not broken for a visitor (the 301s catch them) but an
//  internal link should point at the live URL, not through a redirect. A slug
//  in a curated list is worse: it silently vanishes at `.filter(Boolean)`, so
//  the list quietly loses an entry with no error anywhere.
//
//  This repoints both forms — `/resources/<slug>/` hrefs and bare quoted slugs,
//  in either quote style — at the destination the redirect map already defines.
//  Idempotent: once repointed there is nothing left to match.
//
//  Run: node scripts/repoint-retired-slugs.mjs
// ============================================================================

import { readFileSync, writeFileSync } from 'node:fs';
import { RETIRE } from './consolidation-2-plan.mjs';

const R = '../';
const FILES = [
  'src/data/products.js',
  'src/data/applications.js',
  'src/data/resources.js',
  'src/pages/products/[slug].astro',
  'src/pages/products/gp-resins.astro',
  'src/pages/products/epoxy-resins.astro',
  'src/pages/resources/index.astro',
  'src/pages/resources/[slug].astro',
];

let total = 0;

for (const f of FILES) {
  const url = new URL(R + f, import.meta.url);
  let s = readFileSync(url, 'utf8').replace(/\r\n/g, '\n');
  let n = 0;

  for (const [old, dest] of Object.entries(RETIRE)) {
    const m = /^\/resources\/([^/]+)\/$/.exec(dest);
    const next = m ? m[1] : null;

    const beforeHref = s;
    s = s.split(`/resources/${old}/`).join(dest);
    if (s !== beforeHref) n++;

    if (next) {
      const beforeSlug = s;
      s = s.split(`"${old}"`).join(`"${next}"`);
      s = s.split(`'${old}'`).join(`'${next}'`);
      if (s !== beforeSlug) n++;
    }
  }

  // A curated list may now name the same slug twice, which would render the
  // same card twice. Collapse repeats within each quoted-slug array literal.
  const arrayLiteral = /\[(?:\s*'[a-z0-9-]+',?)+\s*\]/g;
  s = s.replace(arrayLiteral, (block) => {
    const slugs = [...block.matchAll(/'([a-z0-9-]+)'/g)].map((x) => x[1]);
    const unique = [...new Set(slugs)];
    if (unique.length === slugs.length) return block;
    const indent = (/\n(\s*)'/.exec(block) || [, '  '])[1];
    const close = indent.length >= 2 ? indent.slice(2) : '';
    n++;
    return `[\n${unique.map((u) => `${indent}'${u}',`).join('\n')}\n${close}]`;
  });

  writeFileSync(url, s);
  if (n) console.log(`${f}: ${n} change group(s)`);
  total += n;
}

console.log(total ? `total ${total}` : 'nothing to repoint — already clean');
