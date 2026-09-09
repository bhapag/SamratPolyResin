// ============================================================================
//  CTR FIXES — pages that already rank and were not being clicked
// ============================================================================
//
//  Every change below is driven by a specific Search Console figure for the
//  90 days to 6 September 2026. Nothing here is a guess about what might rank
//  better; each edit closes a measured gap between what the page promised in
//  the SERP and what the searcher had actually asked for.
//
//  Run once: node scripts/ctr-fixes.mjs   (idempotent — re-running is a no-op)
// ============================================================================

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

/** Replace `find` with `next` exactly once, or report it as already applied. */
function patch(file, edits) {
  const p = join(root, file);
  let s = readFileSync(p, 'utf8').replace(/\r\n/g, '\n');
  let applied = 0;
  let already = 0;
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

// ---------------------------------------------------------------------------
// /resources/understanding-gel-time-in-polyester-resin/
//   140 impressions, average position 7.1, ZERO clicks, 0% CTR.
//   It ranks page 1 and earns nothing. The cause is a title/intent mismatch:
//   the page was titled "GP Resin Gel Time Troubleshooting" while the queries
//   reaching it are definitional — `gel time of resin` (position 4.5),
//   `what is gel time` (position 20.0). A searcher asking what gel time IS
//   does not click a troubleshooting page.
// ---------------------------------------------------------------------------
patch('src/data/resources.js', [
  [
    `    description: "Learn what gel time means, why it matters and how it affects manufacturing efficiency.",`,
    `    description: "Gel time is the working window between catalysing a polyester resin and it starting to set. What it means, what changes it, and what to check when it drifts.",`,
    'gel-time description',
  ],
  [
    `      title: "GP Resin Gel Time Troubleshooting | Polyester Resin Guide",`,
    `      title: "What Is Gel Time in Polyester Resin? Working Time Explained",`,
    'gel-time seo title',
  ],
  [
    `      ogDescription: "Understand gel time, common GP resin troubleshooting checks and when to review the product TDS before changing a process.",`,
    `      ogDescription: "Gel time is the working window between catalysing a polyester resin and the point it begins to set. What changes it, and what to check when it drifts.",`,
    'gel-time og description',
  ],
  [
    `      keywords: ["GP resin gel time", "GP resin gel time troubleshooting", "polyester resin gel time", "resin curing time", "FRP resin troubleshooting"],`,
    `      keywords: ["what is gel time", "gel time of resin", "polyester resin gel time", "GP resin gel time", "resin working time", "resin curing time", "FRP resin troubleshooting"],`,
    'gel-time keywords',
  ],

  // ---------------------------------------------------------------------------
  // /resources/what-is-gp-polyester-resin/
  //   301 impressions, position 6.1, 8 clicks (2.7%) — the site's best article.
  //   It is losing a query it already ranks 7.0 for and gets zero clicks on:
  //   `gp resin full form` (22 impressions). The page never states what GP
  //   stands for in its title, description or opening line. Indian technical
  //   search leans heavily on "full form" phrasing.
  // ---------------------------------------------------------------------------
  [
    `    description: "A complete guide to General Purpose (GP) polyester resin — what it is, how it's made, key properties, applications and how to select the right grade.",`,
    `    description: "GP stands for General Purpose. A complete guide to GP polyester resin — what the name means, how it's made, its key properties, where it's used and how to select a grade.",`,
    'gp full form description',
  ],
  [
    `      title: "GP Polyester Resin — Properties, Uses & Buying Guide",`,
    `      title: "What Is GP Polyester Resin? GP Full Form, Properties & Uses",`,
    'gp full form seo title',
  ],
  [
    `      ogDescription: "What General Purpose polyester resin is, how it's manufactured, its properties and advantages, where it's used, and how to select and store it correctly.",`,
    `      ogDescription: "GP stands for General Purpose. What GP polyester resin is, how it's manufactured, its properties, where it's used, and how to select and store it correctly.",`,
    'gp full form og description',
  ],
  [
    `        "GP polyester resin",\n        "general purpose polyester resin",`,
    `        "gp resin full form",\n        "what is gp resin",\n        "gp resin uses",\n        "GP polyester resin",\n        "general purpose polyester resin",`,
    'gp full form keywords',
  ],
  [
    `      "Resin Type": "Unsaturated Polyester Resin (UPR)",\n      "Material Class": "Thermosetting resin",`,
    `      "GP Full Form": "General Purpose",\n      "Resin Type": "Unsaturated Polyester Resin (UPR)",\n      "Material Class": "Thermosetting resin",`,
    'gp full form quick fact',
  ],
]);

// ---------------------------------------------------------------------------
// /products/unsaturated-polyester-resin/  337 impressions, position 15.3, 0.9%
// /products/gp-clear-resin/               195 impressions, position  9.7, 1.0%
// /products/mekp-hardener/                138 impressions, position 13.1, 0.7%
//
//   All three rank and none convert the impression. The meta descriptions read
//   as spec fragments ("Gel time under 8 minutes. 225 kg drums.") with no
//   reason to click and no mention of the documents a technical buyer is
//   actually looking for. UPR additionally never states its own full form,
//   despite `upr resin` and `up resin` both appearing in the query set.
// ---------------------------------------------------------------------------
patch('src/data/products.js', [
  [
    `        "Unsaturated Polyester Resin (UPR) — a general-purpose orthophthalic polyester resin for FRP and composite manufacturing. Gel time under 8 minutes. 225 kg drums.",`,
    `        "UPR stands for Unsaturated Polyester Resin — the orthophthalic general-purpose grade used across FRP and composite manufacturing. Published specifications, downloadable TDS and SDS, made in Punjab.",`,
    'UPR meta description',
  ],
  [
    `      title: "Unsaturated Polyester Resin (UPR) – Orthophthalic Polyester Resin",`,
    `      title: "Unsaturated Polyester Resin (UPR) Manufacturer in India | TDS",`,
    'UPR meta title',
  ],
  [
    `        "GP Clear Resin — a clear, orthophthalic general-purpose polyester resin for FRP hand layup, spray-up and moulding. Gel time under 8 minutes. 225 kg drums.",`,
    `        "GP Clear Resin — the clear orthophthalic general-purpose polyester resin for FRP hand lay-up, spray-up and moulding. Published viscosity and gel time, downloadable TDS and SDS, made in Punjab.",`,
    'GP Clear meta description',
  ],
  [
    `      title: "GP Clear Resin – General Purpose Polyester Resin",`,
    `      title: "GP Clear Resin Manufacturer | General Purpose Polyester Resin",`,
    'GP Clear meta title',
  ],
  [
    `        "MEKP Hardener (Methyl Ethyl Ketone Peroxide) catalyst / initiator for published polyester, vinyl ester and gelcoat systems. Review the TDS and request an industrial quote.",`,
    `        "MEKP Hardener (Methyl Ethyl Ketone Peroxide) — the catalyst / initiator for polyester, vinyl ester and gelcoat systems. Published 25 kg carboy packaging and TDS. Not the same as an accelerator.",`,
    'MEKP meta description',
  ],
]);

console.log('\nCTR fixes complete.');
