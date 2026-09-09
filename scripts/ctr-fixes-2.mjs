// ============================================================================
//  CTR FIXES, SECOND BATCH
// ============================================================================
//
//  The first batch took the eight worst offenders. These are the next tier from
//  the same Search Console window (1 Aug – 6 Sept 2026): pages carrying real
//  impressions with ZERO clicks. Each entry records its own figures.
//
//  Idempotent. Run: node scripts/ctr-fixes-2.mjs
// ============================================================================

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function patch(file, edits) {
  const p = join(root, file);
  let s = readFileSync(p, 'utf8').replace(/\r\n/g, '\n');
  let applied = 0, already = 0;
  for (const [find, next, label] of edits) {
    if (s.includes(next)) { already++; continue; }
    const n = s.split(find).length - 1;
    if (n === 0) throw new Error(`${file}: anchor not found for "${label}"`);
    if (n > 1) throw new Error(`${file}: anchor for "${label}" matched ${n} times`);
    s = s.replace(find, next);
    applied++;
  }
  writeFileSync(p, s);
  console.log(`${file}: ${applied} applied, ${already} already present`);
}

patch('src/data/resources.js', [
  // 65 impressions, position 15.3, ZERO clicks. Title tag absent entirely, so
  // the SERP fell back to the H1 with no reason to click attached.
  [
    `    title: "Applications of GP Polyester Resin",\n    description: "Explore where GP Polyester Resin is commonly used across FRP, construction, marine and industrial manufacturing.",`,
    `    title: "Applications of GP Polyester Resin",\n    description: "Where GP polyester resin is actually used — FRP water tanks, roofing sheets, door skins, panels, bathware and marine components — and what decides the grade for each.",`,
    'applications-of-gp desc',
  ],
  [
    `    slug: "applications-of-gp-polyester-resin",`,
    `    slug: "applications-of-gp-polyester-resin",\n    seo: {\n      title: "GP Polyester Resin Applications: Tanks, Sheets & Panels",\n      keywords: ["gp resin uses", "gp polyester resin applications", "where is gp resin used", "frp resin applications"],\n      ogTitle: "Applications of GP Polyester Resin",\n      ogDescription: "Where GP polyester resin is used across FRP manufacturing, and what decides the grade for each application.",\n    },`,
    'applications-of-gp seo block',
  ],

  // 63 impressions, position 15.7, ZERO clicks. The title states the symptom
  // but promises no answer, which is the whole reason someone searches it.
  [
    `      title: "Why Polyester Resin Remains Sticky or Tacky",`,
    `      title: "Polyester Resin Still Sticky? What to Check First",`,
    'sticky title',
  ],

  // 50 impressions, position 12.0, ZERO clicks. Same problem: the searcher
  // wants to know whether yellowing is a fault or the grade.
  [
    `      title: "Why GP Resin Is Yellow or Turns Yellow | Buyer Checks",`,
    `      title: "Why Is GP Resin Yellow? Grade Colour vs a Real Fault",`,
    'yellow title',
  ],

  // 51 impressions, position 15.3, ZERO clicks. "Selection Guide" is vague;
  // the actual question is when the cheaper grade stops being enough.
  [
    `      title: "GP Resin vs Vinyl Ester Resin | FRP Selection Guide",`,
    `      title: "GP Resin vs Vinyl Ester: When GP Is Not Enough",`,
    'gp vs ve title',
  ],
]);

patch('src/data/products.js', [
  // 45 impressions, position 9.5, ZERO clicks — page one and nothing. The
  // description opened with "Water-white unsaturated polyester Marble Resin
  // for the TDS-listed..." which reads as internal documentation language.
  [
    `      "Water-white unsaturated polyester Marble Resin for the TDS-listed cultured-marble and artificial-stone contexts. Review published data, 200 kg pack details and enquire.",`,
    `      "Marble Resin for cultured-marble slabs, vanity tops, wash basins and cast architectural stone. Water-white unsaturated polyester, published viscosity and gel time, downloadable TDS. Made in Punjab.",`,
    'marble desc',
  ],

  // 57 impressions, position 51.5, ZERO clicks — and the impressions are the
  // wrong ones. `india pet resin market`, `india pet and pbt resins market`
  // and `pet resin` are all polyethylene terephthalate (bottle resin) queries.
  // Leading the title with the polyester putty name stops this page competing
  // for a market it has nothing to do with.
  [
    `    title: "PET Resin / Polyester Putty Resin Manufacturer in India",`,
    `    title: "Polyester Putty Resin (PET Resin) for Sheet & Laminate",`,
    'pet title',
  ],
]);

patch('src/data/applications.js', [
  // 44 impressions, position 8.3, ZERO clicks. Page one for a real buying
  // intent with a title that is just the page name.
  [
    `      title: "Resin for Cooling Tower Manufacturing",`,
    `      title: "Resin for FRP Cooling Towers — Grades & Selection",`,
    'cooling tower title',
  ],
]);

console.log('\nSecond CTR batch complete.');
