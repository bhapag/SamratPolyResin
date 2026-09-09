// ============================================================================
//  RESIN SELECTOR — matching rules
// ============================================================================
//
//  DESIGN RULE, and the reason this file exists at all:
//
//  A product is only ever recommended because one of ITS OWN published lines
//  in products.js matched — an entry in `applications`, its `tagline`, or its
//  `category`. The matched line is then shown to the buyer as the reason.
//  Nothing here asserts a suitability the catalogue does not already publish,
//  and there is no hand-written "this grade is good for that" table that could
//  drift away from the product data over time.
//
//  Consequence worth understanding before editing: if a product's published
//  applications do not mention a use, the selector will NOT offer it for that
//  use. That is deliberate. The fix is to publish the application on the
//  product (with evidence), not to add a bare tag here.
//
//  The selector deliberately does NOT:
//    - suggest a dosage, ratio, layer count or quantity
//    - rank grades by performance, price or quality
//    - claim compliance, certification or fitness for a service condition
//  It narrows the catalogue to the grades whose own documentation names the
//  buyer's context, then hands over to the TDS and a human conversation.
// ============================================================================

import { products } from './products.js';

/**
 * Each option lists `match` phrases. A product matches the option when any
 * phrase appears (case-insensitively) in one of its published applications,
 * its tagline, or its category name.
 */
export const QUESTIONS = [
  {
    id: 'making',
    label: 'What are you making?',
    hint: 'Pick the closest component. This narrows the catalogue by the applications each grade actually publishes.',
    options: [
      { id: 'tanks', label: 'Water tanks & storage vessels', match: ['water tank', 'storage tank', 'storage vessel', 'water storage'] },
      { id: 'roofing', label: 'Roofing & daylight sheets', match: ['roofing sheet', 'roof light', 'roofing', 'skylight', 'daylighting'] },
      { id: 'doors', label: 'Doors, plywood & decorative panels', match: ['door skin', 'door panel', 'frp door', 'plywood', 'decorative', 'furniture', 'laminate bonding'] },
      { id: 'marine', label: 'Boats & marine components', match: ['boat', 'marine', 'hull', 'offshore'] },
      { id: 'bathware', label: 'Bathware & sanitaryware', match: ['bathware', 'sanitaryware', 'wash basin'] },
      { id: 'stone', label: 'Engineered stone, marble & countertops', match: ['quartz', 'engineered stone', 'cultured marble', 'artificial marble', 'countertop', 'vanity top', 'cast stone', 'marble sheet'] },
      { id: 'buttons', label: 'Buttons & small mouldings', match: ['button', 'small decorative moulding', 'novelty'] },
      { id: 'art', label: 'Art, river tables & jewellery casting', match: ['river table', 'jewellery', 'resin art', 'floor art', 'wood art', 'decor item', 'art and industrial casting', 'doming', 'encapsulation'] },
      { id: 'chemical', label: 'Chemical tanks, pipes & ducts', match: ['chemical storage', 'pipeline', 'duct', 'scrubber', 'pressure vessel', 'chemical'] },
      { id: 'electrical', label: 'Electrical enclosures & housings', match: ['electrical enclosure', 'electrical housing', 'electrical', 'manhole'] },
      { id: 'panels', label: 'Industrial sheets & panels', match: ['frp sheet', 'panel', 'sheet lamination', 'partition', 'composite panel'] },
      { id: 'unsure', label: "I'm not sure yet", match: [] },
    ],
  },
  {
    id: 'process',
    label: 'Which process will you use?',
    hint: 'Open-mould hand work and casting call for different grades.',
    options: [
      { id: 'handlayup', label: 'Hand lay-up', match: ['hand layup', 'hand lay-up', 'lay-up', 'layup'] },
      { id: 'sprayup', label: 'Spray-up', match: ['spray-up', 'spray up', 'spray application'] },
      { id: 'casting', label: 'Casting or pouring', match: ['casting', 'cast stone', 'pouring', 'encapsulation'] },
      { id: 'moulding', label: 'Compression or closed moulding', match: ['compression moulding', 'dmc', 'smc', 'moulding compound', 'pultrusion', 'filament winding'] },
      { id: 'lamination', label: 'Lamination or bonding onto a substrate', match: ['lamination', 'laminating', 'bonding', 'laminate'] },
      { id: 'surface', label: 'Surface coating on a mould (gelcoat)', match: ['gelcoat', 'gel coat', 'mould surface', 'surface-finish', 'coating'] },
      { id: 'unsure', label: "I'm not sure yet", match: [] },
    ],
  },
  {
    id: 'finish',
    label: 'What does the finish need to be?',
    hint: 'Only answer this if appearance is part of the requirement.',
    options: [
      { id: 'clear', label: 'Clear or transparent', match: ['clear', 'transparent', 'crystal-clear', 'optical clarity', 'high-clarity', 'glossy finish'] },
      { id: 'waterwhite', label: 'Water-white', match: ['water-white'] },
      { id: 'pigmented', label: 'Pre-pigmented or coloured', match: ['pigmented', 'pre-pigmented', 'colour', 'coloured', 'yellow'] },
      { id: 'gelcoat', label: 'A visible moulded surface', match: ['gelcoat', 'gel coat', 'high-gloss', 'surface'] },
      { id: 'any', label: "Appearance isn't a requirement", match: [] },
    ],
  },
  {
    id: 'special',
    label: 'Any specified performance requirement?',
    hint: 'Only choose one of these if a drawing, standard or customer specification actually calls for it.',
    options: [
      { id: 'fire', label: 'Fire performance is specified', match: ['fire retardant', 'fire-performance', 'fire-sensitive', 'fr polyester', 'halogen'] },
      { id: 'chemical', label: 'Chemical or corrosion resistance is specified', match: ['chemical', 'corrosion', 'chemical-service'] },
      { id: 'none', label: 'None stated', match: [] },
      { id: 'unsure', label: "I'm not sure yet", match: [] },
    ],
  },
];

/**
 * Match a phrase at a WORD START, not anywhere in the string.
 *
 * A plain substring test is wrong here and produced a real false positive:
 * the phrase "duct" matched inside "sheet pro-duct-ion", which put Sheet Grade
 * Yellow Resin into the results for "chemical tanks, pipes & ducts". Anchoring
 * to a word start keeps the useful plural and compound behaviour — "panel"
 * still matches "panels", "clear" still matches "crystal-clear" — while
 * refusing to match a fragment buried inside an unrelated word.
 *
 * Deliberately not anchored at the end: plurals and adjectival forms should
 * match, so "coating" finds "coatings" and "colour" finds "coloured".
 */
export function phraseMatches(text, phrase) {
  const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`\\b${escaped}`, 'i').test(text);
}

/** Every string on a product that a match phrase may be tested against. */
function haystack(product) {
  return [
    ...(product.applications || []).map((a) => ({ text: a, kind: 'application' })),
    { text: product.tagline || '', kind: 'tagline' },
    { text: product.category || '', kind: 'category' },
  ].filter((h) => h.text);
}

/**
 * Score one product against the chosen answers.
 * Returns null when nothing the product publishes supports any answer given —
 * in which case it is not offered at all.
 */
export function scoreProduct(product, answers) {
  const fields = haystack(product);
  let score = 0;
  const evidence = [];

  for (const question of QUESTIONS) {
    const chosen = answers[question.id];
    if (!chosen) continue;
    const option = question.options.find((o) => o.id === chosen);
    if (!option || option.match.length === 0) continue; // "not sure" constrains nothing

    let hit = null;
    for (const phrase of option.match) {
      hit = fields.find((f) => phraseMatches(f.text, phrase));
      if (hit) break;
    }
    if (hit) {
      // Weight the component question highest: what you are making is the
      // strongest signal, process next, then finish and any stated requirement.
      const weight = question.id === 'making' ? 4 : question.id === 'process' ? 3 : 2;
      score += weight;
      evidence.push({ question: question.label, answer: option.label, quote: hit.text, kind: hit.kind });
    }
  }

  if (score === 0) return null;
  return { product, score, evidence };
}

/** Ordered matches for a set of answers. Accessories are separated out. */
export function selectProducts(answers) {
  const scored = products
    .map((p) => scoreProduct(p, answers))
    .filter(Boolean)
    .sort((a, b) => b.score - a.score || a.product.name.localeCompare(b.product.name));

  const ACCESSORY_CATEGORIES = new Set(['FRP Allied Products', 'Hardeners']);
  return {
    grades: scored.filter((s) => !ACCESSORY_CATEGORIES.has(s.product.category)),
    supporting: scored.filter((s) => ACCESSORY_CATEGORIES.has(s.product.category)),
  };
}

/**
 * The catalogue rows the browser needs, pre-flattened at build time so the
 * page ships one small JSON blob instead of importing the whole product file.
 * `specs` are the product's own published techSpecs — never computed.
 */
export function selectorCatalogue() {
  return products.map((p) => ({
    slug: p.slug,
    name: p.name,
    category: p.category,
    tagline: p.tagline,
    applications: p.applications || [],
    tdsUrl: p.tdsUrl || null,
    specs: p.techSpecs
      ? Object.entries(p.techSpecs)
          .filter(([, v]) => v && !/^not (part of|provided|published)/i.test(v))
          .slice(0, 4)
          .map(([k, v]) => ({ k, v }))
      : [],
  }));
}
