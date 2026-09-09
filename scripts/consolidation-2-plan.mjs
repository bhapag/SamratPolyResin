// ============================================================================
//  CONSOLIDATION PASS 2 — PLAN AND REDIRECT MAP
// ============================================================================
//
//  Pass 1 (commit 0e4e21c) took the seven accessory clusters. It deliberately
//  left the product-family clusters alone because several of their articles
//  were still earning clicks and the safe move was to cut one axis at a time.
//
//  This pass takes six product-family clusters where the same pattern is now
//  visible: one hub article plus a ring of 150-230 word satellites splitting
//  the same intent. Same rules as pass 1:
//
//    - An article with a CLICK is never retired.
//    - An article with meaningful impressions on a query its hub does not
//      already own is never retired.
//    - Every destination is the hub that will carry that article's own
//      content — never an unrelated page.
//
//  Figures are Google Search Console, 1 Aug - 6 Sept 2026 (c/i/p = clicks,
//  impressions, average position).
// ============================================================================

export const GSC = {
  // ISO fire retardant
  'what-is-iso-fire-retardant-resin': { c: 0, i: 14, p: 6.7 },
  'iso-fire-retardant-resin-vs-upr': { c: 1, i: 12, p: 9.6 },
  'iso-fire-retardant-resin-fire-requirements': { c: 0, i: 4, p: 23.8 },
  'iso-fire-retardant-resin-vs-vinyl-ester-resin': { c: 0, i: 3, p: 28.7 },
  'iso-fire-retardant-resin-applications': { c: 0, i: 2, p: 37.5 },
  'iso-fire-retardant-resin-vs-fire-retardant-resin': { c: 0, i: 0, p: 0 },
  'iso-fire-retardant-resin-procurement-checklist': { c: 0, i: 0, p: 0 },
  // Fire retardant
  'fire-retardant-polyester-resin-applications-and-benefits': { c: 0, i: 24, p: 18.5 },
  'what-is-fire-retardant-resin': { c: 0, i: 9, p: 6.8 },
  'fire-retardant-resin-procurement-checklist': { c: 1, i: 3, p: 3.3 },
  'fire-retardant-resin-fireproof-vs-fire-retardant': { c: 0, i: 2, p: 36.0 },
  'fire-retardant-resin-vs-gp-resin': { c: 0, i: 1, p: 2.0 },
  'frp-fire-performance-requirements-buyer-guide': { c: 0, i: 1, p: 8.0 },
  // GP White
  'gp-white-resin-vs-gp-clear-resin': { c: 0, i: 15, p: 10.2 },
  'what-is-gp-white-resin': { c: 0, i: 14, p: 8.9 },
  'gp-white-resin-buyer-guide': { c: 1, i: 7, p: 14.7 },
  'applications-of-gp-white-resin': { c: 0, i: 7, p: 18.7 },
  'gp-white-resin-vs-gelcoat-resin': { c: 0, i: 6, p: 15.7 },
  // Roof light
  'frp-roofing-sheet-resin-selection-guide': { c: 1, i: 5, p: 4.0 },
  'roof-light-resin-vs-gp-clear-resin': { c: 0, i: 2, p: 38.0 },
  'sheet-grade-yellow-resin-vs-roof-light-resin': { c: 0, i: 1, p: 5.0 },
  'roof-light-resin-procurement-guide': { c: 0, i: 1, p: 54.0 },
  'what-is-roof-light-sheet-grade-resin': { c: 0, i: 1, p: 69.0 },
  'roof-light-resin-applications-frp-roofing-sheets': { c: 0, i: 0, p: 0 },
  // Button grade
  'button-grade-resin-vs-gp-resin': { c: 1, i: 10, p: 23.8 },
  'button-resin-for-polyester-button-manufacturing': { c: 0, i: 8, p: 16.1 },
  'what-is-button-grade-resin': { c: 0, i: 7, p: 13.9 },
  'button-grade-resin-vs-clear-casting-resin': { c: 0, i: 7, p: 35.9 },
  'button-resin-processing-checklist': { c: 0, i: 3, p: 24.0 },
  'how-to-choose-resin-for-button-manufacturing': { c: 0, i: 2, p: 47.5 },
  'button-resin-storage-and-quote-guide': { c: 0, i: 1, p: 1.0 },
  'button-resin-gel-time-and-viscosity-guide': { c: 0, i: 1, p: 85.0 },
  // Epoxy art
  'epoxy-art-resin-vs-polyester-resin': { c: 0, i: 14, p: 52.1 },
  'epoxy-art-resin-storage-and-procurement-guide': { c: 0, i: 6, p: 19.7 },
  'epoxy-art-resin-buyer-guide': { c: 0, i: 4, p: 31.8 },
  'epoxy-art-resin-finish-questions': { c: 0, i: 2, p: 55.0 },
  'what-is-epoxy-art-resin': { c: 0, i: 1, p: 36.0 },
  'applications-of-epoxy-art-resin': { c: 0, i: 0, p: 0 },
};

/** old slug -> destination path. Every destination is the cluster's own hub. */
export const RETIRE = {
  // --- ISO fire retardant: 7 -> 2 -------------------------------------------
  'iso-fire-retardant-resin-vs-fire-retardant-resin': '/resources/what-is-iso-fire-retardant-resin/',
  'iso-fire-retardant-resin-vs-vinyl-ester-resin': '/resources/what-is-iso-fire-retardant-resin/',
  'iso-fire-retardant-resin-applications': '/resources/what-is-iso-fire-retardant-resin/',
  'iso-fire-retardant-resin-fire-requirements': '/resources/what-is-iso-fire-retardant-resin/',
  'iso-fire-retardant-resin-procurement-checklist': '/resources/what-is-iso-fire-retardant-resin/',

  // --- Fire retardant: 6 -> 3 ------------------------------------------------
  'fire-retardant-resin-vs-gp-resin': '/resources/what-is-fire-retardant-resin/',
  'fire-retardant-resin-fireproof-vs-fire-retardant': '/resources/what-is-fire-retardant-resin/',
  'frp-fire-performance-requirements-buyer-guide': '/resources/what-is-fire-retardant-resin/',

  // --- GP White: 5 -> 3 ------------------------------------------------------
  'gp-white-resin-vs-gelcoat-resin': '/resources/what-is-gp-white-resin/',
  'applications-of-gp-white-resin': '/resources/what-is-gp-white-resin/',

  // --- Roof light: 6 -> 2 ----------------------------------------------------
  'roof-light-resin-procurement-guide': '/resources/what-is-roof-light-sheet-grade-resin/',
  'roof-light-resin-vs-gp-clear-resin': '/resources/what-is-roof-light-sheet-grade-resin/',
  'roof-light-resin-applications-frp-roofing-sheets': '/resources/what-is-roof-light-sheet-grade-resin/',
  'sheet-grade-yellow-resin-vs-roof-light-resin': '/resources/what-is-roof-light-sheet-grade-resin/',

  // --- Button grade: 8 -> 3 --------------------------------------------------
  'button-resin-storage-and-quote-guide': '/resources/what-is-button-grade-resin/',
  'button-resin-processing-checklist': '/resources/what-is-button-grade-resin/',
  'button-resin-gel-time-and-viscosity-guide': '/resources/what-is-button-grade-resin/',
  'how-to-choose-resin-for-button-manufacturing': '/resources/what-is-button-grade-resin/',
  'button-grade-resin-vs-clear-casting-resin': '/resources/what-is-button-grade-resin/',

  // --- Epoxy art: 6 -> 2 -----------------------------------------------------
  'epoxy-art-resin-storage-and-procurement-guide': '/resources/what-is-epoxy-art-resin/',
  'epoxy-art-resin-finish-questions': '/resources/what-is-epoxy-art-resin/',
  'applications-of-epoxy-art-resin': '/resources/what-is-epoxy-art-resin/',
  'epoxy-art-resin-buyer-guide': '/resources/what-is-epoxy-art-resin/',
};

export const KEPT = {
  'iso-fire-retardant-resin-vs-upr':
    'Earned a click at position 9.6 — the only ISO FR satellite that converts. Isophthalic-vs-standard-UPR is a distinct buying question.',
  'fire-retardant-resin-procurement-checklist':
    'Earned a click at position 3.3.',
  'fire-retardant-polyester-resin-applications-and-benefits':
    '24 impressions, the strongest FR article by reach.',
  'gp-white-resin-vs-gp-clear-resin':
    '15 impressions at position 10.2 — a genuine grade-choice comparison buyers search by name.',
  'gp-white-resin-buyer-guide':
    'Earned a click at position 14.7.',
  'frp-roofing-sheet-resin-selection-guide':
    'Earned a click at position 4.0 — the best-performing roofing article by some distance.',
  'button-grade-resin-vs-gp-resin':
    'Earned a click across 10 impressions.',
  'button-resin-for-polyester-button-manufacturing':
    '8 impressions at position 16.1 on button-manufacturing intent the hub does not own.',
  'epoxy-art-resin-vs-polyester-resin':
    '14 impressions — the widest reach in the epoxy art cluster, and a real cross-chemistry comparison.',
};

export const REASONS = {
  'iso-fire-retardant-resin-vs-fire-retardant-resin': 'Zero impressions; the ISO-vs-standard distinction is now a section of the hub.',
  'iso-fire-retardant-resin-vs-vinyl-ester-resin': 'Position 28.7 on 3 impressions; merged as a section.',
  'iso-fire-retardant-resin-applications': 'Position 37.5 on 2 impressions; applications merged into the hub.',
  'iso-fire-retardant-resin-fire-requirements': 'Position 23.8 on 4 impressions; fire-requirement content merged.',
  'iso-fire-retardant-resin-procurement-checklist': 'Zero impressions; buying checklist merged into the hub.',
  'fire-retardant-resin-vs-gp-resin': 'One impression; FR-vs-GP is now a section of the FR hub.',
  'fire-retardant-resin-fireproof-vs-fire-retardant': 'Position 36 on 2 impressions; the fireproof clarification is now the hub opening.',
  'frp-fire-performance-requirements-buyer-guide': 'One impression; requirement guidance merged into the hub.',
  'gp-white-resin-vs-gelcoat-resin': 'Position 15.7 on 6 impressions; merged as a section.',
  'applications-of-gp-white-resin': 'Position 18.7 on 7 impressions; applications merged into the hub.',
  'roof-light-resin-procurement-guide': 'Position 54 on one impression; buying content merged.',
  'roof-light-resin-vs-gp-clear-resin': 'Position 38 on 2 impressions; merged as a section.',
  'roof-light-resin-applications-frp-roofing-sheets': 'Zero impressions; applications merged into the hub.',
  'sheet-grade-yellow-resin-vs-roof-light-resin': 'One impression; the sheet-grade comparison is now a hub section.',
  'button-resin-storage-and-quote-guide': 'One impression; storage and quoting merged.',
  'button-resin-processing-checklist': 'Position 24 on 3 impressions; processing checks merged.',
  'button-resin-gel-time-and-viscosity-guide': 'Position 85 on one impression; properties merged.',
  'how-to-choose-resin-for-button-manufacturing': 'Position 47.5 on 2 impressions; selection guidance merged.',
  'button-grade-resin-vs-clear-casting-resin': 'Position 35.9; the casting-resin comparison is now a hub section.',
  'epoxy-art-resin-storage-and-procurement-guide': 'Position 19.7 on 6 impressions; storage and buying merged.',
  'epoxy-art-resin-finish-questions': 'Position 55 on 2 impressions; finish content merged.',
  'applications-of-epoxy-art-resin': 'Zero impressions; applications merged into the hub.',
  'epoxy-art-resin-buyer-guide': 'Position 31.8 on 4 impressions; buying checklist merged.',
};

export { GUIDES } from './consolidation-2-guides.mjs';
