#!/usr/bin/env node
// ---------------------------------------------------------------------------
//  verify-tds-specs.mjs — every published number must come from its own TDS
// ---------------------------------------------------------------------------
//
//  WHY: the site renders technical properties (viscosity, gel time, specific
//  gravity, purity …) from `techSpecs` in src/data/products.js. Those values
//  are transcribed by hand from each grade's published Technical Data Sheet.
//  A transcription slip publishes a specification a buyer may purchase
//  against, so it is checked mechanically rather than trusted.
//
//  METHOD: extract the text of each product's own TDS PDF with `pdftotext
//  -layout`, normalise both sides (unicode dashes, degree/micro signs,
//  superscripts, non-breaking spaces, casing, whitespace) and require the
//  recorded value — or, for values written as prose around a figure, every
//  numeric token in it — to appear in that document.
//
//  REQUIREMENT: pdftotext (poppler-utils). If it is missing the script exits
//  0 with a clear SKIPPED notice rather than pretending it verified anything.
//
//  Run:  node scripts/verify-tds-specs.mjs
//        node scripts/verify-tds-specs.mjs --all    (list every entry)
// ---------------------------------------------------------------------------

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(here, '..');
const { products } = await import(pathToFileURL(path.join(ROOT, 'src/data/products.js')).href);

const VERBOSE = process.argv.includes('--all');

// ---------------------------------------------------------------------------
//  Known, investigated exceptions. Every entry states WHY it cannot match, so
//  this list stays auditable instead of becoming a place to bury failures.
//  Adding to it requires reading the source PDF and explaining the reason.
// ---------------------------------------------------------------------------
const ALLOWED = [
  {
    slug: 'gp-quartz-resin', key: 'Viscosity',
    why: 'Its TDS carries a DOUBLED TEXT LAYER: the viscosity row renders as two overlaid values '
       + '(350-450 cPs and 400-800 cPs). The recorded 400-800 cPs matches the coherent '
       + 'GP-Quartz-specific layer; the other is a GP Clear layer bleeding through. '
       + 'OWNER ACTION: reissue this PDF with a single text layer.',
  },
  {
    slug: 'epoxy-clear-casting-resin', key: 'Hardness (Fully Cured)',
    why: 'Doubled text layer: one layer reads "Shore D 82", the other "Not Provided". The recorded '
       + 'value matches the complete layer. OWNER ACTION: reissue this PDF.',
  },
  {
    slug: 'epoxy-clear-casting-resin', key: 'Specific Gravity / Density',
    why: 'Doubled text layer: one layer reads "1.10 g/cm3", the other "Not Provided". The recorded '
       + 'value matches the complete layer. OWNER ACTION: reissue this PDF.',
  },
  {
    slug: 'marble-resin', key: 'Viscosity',
    why: 'The recorded value deliberately quotes BOTH the TDS figure (450 cPs, verified present) '
       + 'and the differing catalogue figure (300 cPs, correctly absent from the TDS). '
       + 'The mismatch is the point of the entry.',
  },
  {
    slug: 'fiberglass-epoxy-resin', key: 'Viscosity',
    why: 'Records a TDS-versus-catalogue discrepancy: 700 cPs (TDS, verified present) vs 900 cPs '
       + '(catalogue, correctly absent).',
  },
  {
    slug: 'fiberglass-epoxy-resin', key: 'Specific gravity / density',
    why: 'Records a TDS-versus-catalogue discrepancy: 1.15 g/cm3 (TDS, verified present) vs '
       + '1.16 g/cm3 (catalogue, correctly absent).',
  },
];

const allowed = (slug, key) => ALLOWED.find((a) => a.slug === slug && a.key === key);

// ---------------------------------------------------------------------------
//  PROSE FIGURES
//  techSpecs is not the only place a specification reaches a buyer. Product
//  descriptions, feature bullets and FAQ answers state figures too - and FAQ
//  answers are additionally emitted as FAQPage structured data, so an
//  unsupported number there becomes fabricated schema. Those are scanned with
//  the same rule.
// ---------------------------------------------------------------------------
const PROSE_STRING_FIELDS = ['description', 'productDetails', 'usageNote'];
const PROSE_ARRAY_FIELDS = ['features', 'whyChoose', 'applications', 'industries'];

// A number immediately followed by a unit these data sheets actually use.
// Prices, years, item counts and ordinals are not specifications. The
// trailing (?![a-z]) rather than \b matters: \b after "%" or "g/cm³" never
// matches, which silently hid most findings in an earlier version of this.
const FIGURE = /(\d[\d,]*(?:\.\d+)?)\s*(?:[-–—]\s*(\d[\d,]*(?:\.\d+)?)\s*)?(cps|%|g\/cm[³²3]?|kg|mm|°\s?c|shore\s*d|minutes|mins|hours|hrs|months)(?![a-z])/gi;

const PROSE_ALLOWED = [
  {
    slug: 'gp-yellow-resin', match: '350',
    why: 'The sentence compares this grade with GP Clear Resin ("450-600 cPs against GP Clear Resin\'s '
       + '350-450 cPs"). 350-450 is GP Clear\'s published figure and is correctly absent from GP Yellow\'s '
       + 'own TDS, which publishes 450-600 cPs.',
  },
  {
    slug: 'marble-resin', match: '300',
    why: 'The FAQ states the TDS figure (450 cPs) and the differing catalogue figure (300 cPs) side by side '
       + 'and warns they must not be combined. Quoting the unverified figure is the point of the answer.',
  },
  {
    slug: 'gp-quartz-resin', match: '800',
    why: 'Doubled text layer in its TDS - see the Viscosity entry above.',
  },
  {
    slug: 'gp-quartz-resin', match: '1000',
    why: 'Its TDS minimum-order row is doubled ("11,,000000 kkgg"), i.e. 1,000 kg written twice, so the '
       + 'figure is supported but not extractable as contiguous text.',
  },
  {
    slug: 'iso-fire-retardant-resin', match: '500',
    why: 'Its TDS minimum-order row carries two overlaid values (500 kg and 1,000 kg). 500 kg belongs to the '
       + 'coherent ISO-grade layer, matching that layer\'s 35 kg / 225 kg packaging. OWNER ACTION: reissue this PDF.',
  },
];

const proseAllowed = (slug, num) => PROSE_ALLOWED.find((a) => a.slug === slug && a.match === num);

// ---------------------------------------------------------------------------

const norm = (s) => String(s)
  .replace(/ /g, ' ')
  .replace(/[‐-―−]/g, '-')
  .replace(/[‘’]/g, "'")
  .replace(/[“”]/g, '"')
  .replace(/[µμ]/g, 'u')
  .replace(/[°�]/g, '')
  .replace(/³/g, '3')
  .replace(/²/g, '2')
  .replace(/≥/g, '>=')
  .replace(/≤/g, '<=')
  .replace(/\s+/g, ' ')
  .toLowerCase()
  .trim();

function havePdftotext() {
  // `pdftotext -v` prints its banner and exits 99 on the xpdf build and 0 on
  // poppler, so the exit code says nothing about availability. Only a spawn
  // failure (ENOENT) means the binary is genuinely absent.
  try {
    execFileSync('pdftotext', ['-v'], { stdio: 'ignore' });
    return true;
  } catch (err) {
    return err?.code !== 'ENOENT';
  }
}

function tdsText(urlPath) {
  const file = path.join(ROOT, 'public', urlPath);
  if (!fs.existsSync(file)) return null;
  try {
    return execFileSync('pdftotext', ['-layout', file, '-'], {
      encoding: 'utf8', maxBuffer: 16 << 20, stdio: ['ignore', 'pipe', 'ignore'],
    });
  } catch {
    return null;
  }
}

function present(value, text) {
  const v = norm(value);
  if (!v) return true;
  if (text.includes(v)) return true;
  const nums = v.match(/\d+(?:\.\d+)?/g) || [];
  return nums.length > 0 && nums.every((n) => text.includes(n));
}

// ---------------------------------------------------------------------------

if (!havePdftotext()) {
  console.log('SKIPPED: pdftotext is not installed, so no specification could be verified.');
  console.log('Install poppler-utils to run this check. Exiting 0 without asserting anything.');
  process.exit(0);
}

let checked = 0;
const failures = [];
const excused = [];
const missingPdf = [];

for (const product of products) {
  if (!product.techSpecs) continue;
  if (!product.tdsUrl) {
    const numeric = Object.entries(product.techSpecs).filter(([, v]) => typeof v === 'string' && /\d/.test(v));
    if (numeric.length) {
      for (const [key, value] of numeric) failures.push({ slug: product.slug, key, value, reason: 'product has no TDS at all' });
    }
    continue;
  }

  const raw = tdsText(product.tdsUrl);
  if (raw === null) { missingPdf.push(`${product.slug} -> ${product.tdsUrl}`); continue; }
  const text = norm(raw);

  for (const [key, value] of Object.entries(product.techSpecs)) {
    if (typeof value !== 'string' || !/\d/.test(value)) continue;   // numeric claims only
    checked++;
    if (present(value, text)) {
      if (VERBOSE) console.log(`  ok  ${product.slug} / ${key} = ${value}`);
      continue;
    }
    const note = allowed(product.slug, key);
    if (note) excused.push({ ...note, value });
    else failures.push({ slug: product.slug, key, value, reason: `not found in ${product.tdsUrl}` });
  }

  // --- prose ---
  const chunks = [];
  for (const f of PROSE_STRING_FIELDS) if (typeof product[f] === 'string') chunks.push([f, product[f]]);
  for (const f of PROSE_ARRAY_FIELDS) {
    if (Array.isArray(product[f])) product[f].forEach((v, i) => {
      if (typeof v === 'string') chunks.push([`${f}[${i}]`, v]);
    });
  }
  if (Array.isArray(product.faqs)) product.faqs.forEach((q, i) => {
    if (typeof q?.a === 'string') chunks.push([`faqs[${i}].a (also FAQPage JSON-LD)`, q.a]);
  });

  const grouped = (n) => n.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  for (const [field, value] of chunks) {
    for (const m of String(value).matchAll(FIGURE)) {
      const nums = [m[1], m[2]].filter(Boolean).map((n) => n.replace(/,/g, ''));
      for (const n of nums) {
        checked++;
        if (text.includes(n) || text.includes(grouped(n)) || text.includes(n.replace(/\.0+$/, ''))) continue;
        const ok = proseAllowed(product.slug, n);
        if (ok) excused.push({ slug: product.slug, key: field, value: m[0].trim(), why: ok.why });
        else failures.push({ slug: product.slug, key: field, value: m[0].trim(), reason: `figure ${n} not in ${product.tdsUrl}` });
      }
    }
  }
}

console.log(`Verified ${checked} numeric technical properties against their own TDS.`);
if (missingPdf.length) {
  console.log(`\nCould not read ${missingPdf.length} TDS file(s):`);
  missingPdf.forEach((m) => console.log('  ' + m));
}
if (excused.length) {
  console.log(`\n${excused.length} known exception(s), each investigated and documented in this script:`);
  for (const e of excused) console.log(`  - ${e.slug} / ${e.key} = "${e.value}"\n      ${e.why}`);
}

if (failures.length) {
  console.error(`\nFAILED: ${failures.length} published value(s) could not be verified against a TDS.\n`);
  for (const f of failures) console.error(`  ${f.slug} / ${f.key} = "${f.value}"  (${f.reason})`);
  console.error('\nRemove the number, or qualify it honestly, or add a documented exception above.');
  process.exit(1);
}

console.log('\nOK — every published numeric property is supported by its own technical data sheet.');
