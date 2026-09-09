// ============================================================================
//  CONSOLIDATION PLAN + REPLACEMENT GUIDES
// ============================================================================
//
//  Read by scripts/consolidate-content.mjs.
//
//  RETIRE   old resource slug -> the path its 301 points at
//  GUIDES   hub slug -> the full replacement article object
//  GSC      Search Console performance, 1 Aug - 6 Sept 2026, that justified
//           each retire/keep decision (c = clicks, i = impressions, p = avg pos)
//  KEPT     articles inside a consolidated cluster that were deliberately left
//           alone, with the reason
//  REASONS  per-URL merge reason for the audit map
//
//  RULE OBSERVED THROUGHOUT: every sentence in the replacement guides is
//  carried over from the articles being merged. No specification, dosage,
//  ratio, price, capacity or compliance claim has been added, and none of the
//  merged articles contained numeric product specifications to begin with.
// ============================================================================

export const GSC = {
  // NC thinner cluster
  'nc-thinner-vs-general-purpose-thinner': { c: 3, i: 47, p: 9.2 },
  'what-is-nc-thinner': { c: 0, i: 41, p: 7.6 },
  'nc-thinner-for-wood-finishing': { c: 0, i: 16, p: 7.2 },
  'nc-thinner-in-spray-application': { c: 0, i: 2, p: 5.5 },
  'nc-thinner-viscosity-flow-and-blushing': { c: 0, i: 2, p: 4.5 },
  'nc-thinner-in-industrial-coatings': { c: 0, i: 2, p: 27.5 },
  'nc-thinner-selection-and-storage-guide': { c: 0, i: 1, p: 6.0 },
  'solvent-evaporation-and-coating-defects': { c: 1, i: 10, p: 3.7 },
  // Soapstone / mineral filler cluster
  'what-is-soapstone-talc-powder': { c: 0, i: 23, p: 14.3 },
  'soapstone-vs-calcium-carbonate-as-a-filler': { c: 0, i: 9, p: 16.2 },
  'mineral-fillers-in-polyester-resin': { c: 0, i: 8, p: 34.0 },
  'filler-vs-reinforcement': { c: 0, i: 8, p: 4.1 },
  'mineral-filler-selection-guide': { c: 0, i: 4, p: 18.5 },
  'soapstone-powder-storage-and-handling': { c: 0, i: 3, p: 1.3 },
  'soapstone-powder-in-paints-and-coatings': { c: 0, i: 3, p: 5.0 },
  'filler-dispersion-and-mixing-considerations': { c: 0, i: 1, p: 57.0 },
  'soapstone-powder-in-putty-and-filler-compounds': { c: 0, i: 0, p: 0 },
  // Styrene cluster
  'styrene-monomer-storage-handling-safety': { c: 0, i: 21, p: 8.3 },
  'styrene-as-reactive-diluent': { c: 0, i: 19, p: 8.8 },
  'styrene-and-polyester-cure-chemistry': { c: 1, i: 17, p: 6.2 },
  'what-is-styrene-monomer': { c: 0, i: 11, p: 10.7 },
  'why-styrene-reduces-resin-viscosity': { c: 0, i: 8, p: 3.1 },
  'styrene-vs-low-voc-resin-systems': { c: 0, i: 5, p: 6.6 },
  'styrene-in-gelcoat-systems': { c: 0, i: 4, p: 15.0 },
  'styrene-and-fibreglass-wet-out': { c: 0, i: 3, p: 32.7 },
  'styrene-monomer-buyer-guide': { c: 0, i: 2, p: 25.5 },
  'common-styrene-related-processing-issues': { c: 0, i: 2, p: 33.0 },
  // Mould release / wax cluster
  'what-is-frp-mould-release-wax': { c: 0, i: 14, p: 12.6 },
  'wax-vs-pva-release-agent': { c: 0, i: 10, p: 4.3 },
  'mould-surface-preparation-basics': { c: 0, i: 6, p: 25.7 },
  'choosing-a-release-agent-for-frp-moulding': { c: 0, i: 4, p: 5.2 },
  'preparing-a-new-frp-mould': { c: 0, i: 4, p: 24.8 },
  'gelcoat-application-and-mould-release-sequence': { c: 0, i: 2, p: 7.0 },
  'common-mould-release-failures': { c: 0, i: 2, p: 23.5 },
  'how-to-apply-and-buff-mould-release-wax': { c: 0, i: 2, p: 42.0 },
  'mould-care-between-production-runs': { c: 0, i: 2, p: 45.0 },
  'wax-release-for-marine-and-panel-moulding': { c: 0, i: 1, p: 9.0 },
  // Brush / tooling cluster
  'brush-vs-roller-vs-squeegee-in-frp-work': { c: 0, i: 4, p: 4.8 },
  'using-brushes-for-frp-repair': { c: 0, i: 3, p: 23.3 },
  'brush-technique-for-hand-lay-up-and-mould-corners': { c: 0, i: 1, p: 2.0 },
  'caring-for-and-replacing-application-brushes': { c: 0, i: 1, p: 9.0 },
  'selecting-brushes-for-resin-and-gelcoat-application': { c: 0, i: 1, p: 9.0 },
  'workshop-tool-checklist-for-open-moulding': { c: 0, i: 0, p: 0 },
  // MEKP / cobalt cluster
  'epoxy-hardener-vs-mekp-hardener': { c: 1, i: 32, p: 21.8 },
  'mekp-for-gelcoat-systems': { c: 0, i: 18, p: 27.8 },
  'cobalt-accelerators-vs-cobalt-free-accelerators': { c: 0, i: 15, p: 10.2 },
  'cobalt-accelerator-in-hand-lay-up': { c: 0, i: 15, p: 10.3 },
  'gel-time-and-cobalt-dosage-relationship': { c: 0, i: 9, p: 10.9 },
  'cobalt-octoate-storage-and-handling': { c: 0, i: 9, p: 3.1 },
  'mekp-hardener-procurement-guide': { c: 0, i: 6, p: 20.3 },
  'selecting-a-cobalt-accelerator': { c: 0, i: 5, p: 16.8 },
  'cobalt-accelerator-in-gelcoat-systems': { c: 0, i: 3, p: 19.0 },
  'what-is-mekp-hardener': { c: 0, i: 0, p: 0 },
  'what-is-cobalt-octoate': { c: 0, i: 0, p: 0 },
  'mekp-for-polyester-resin-systems': { c: 0, i: 0, p: 0 },
  'accelerator-vs-catalyst-vs-initiator': { c: 0, i: 0, p: 0 },
  'how-cobalt-accelerators-work-in-polyester-curing': { c: 0, i: 0, p: 0 },
  'cobalt-octoate-vs-mekp-different-roles': { c: 0, i: 0, p: 0 },
  // Glass fibre cluster
  'csm-300-vs-csm-450-glass-fiber': { c: 0, i: 7, p: 4.3 },
  'glass-fiber-for-frp-manufacturing': { c: 0, i: 2, p: 7.5 },
  'fire-retardant-resin-and-glass-fiber': { c: 0, i: 2, p: 10.5 },
  'glass-fiber-and-polyester-resin-compatibility': { c: 0, i: 1, p: 2.0 },
  'what-is-glass-fiber-chopped-strand-mat': { c: 0, i: 0, p: 0 },
  'glass-fiber-storage-and-procurement-guide': { c: 0, i: 0, p: 0 },
  // Pigment cluster
  'polyester-pigment-paste-vs-gelcoat': { c: 0, i: 19, p: 10.5 },
  'frp-pigment-storage-and-procurement-guide': { c: 0, i: 8, p: 11.9 },
  'applications-of-frp-polyester-pigment': { c: 0, i: 7, p: 9.3 },
  'what-is-frp-polyester-pigment': { c: 0, i: 7, p: 34.3 },
  'pigment-paste-vs-pre-pigmented-polyester-resin': { c: 0, i: 3, p: 7.3 },
  'frp-pigment-compatibility-with-resin-systems': { c: 0, i: 1, p: 7.0 },
  // Weak comparisons
  'what-is-lamination-resin': { c: 6, i: 65, p: 8.7 },
  'what-is-gel-coat-resin': { c: 0, i: 22, p: 17.1 },
  'applications-of-gelcoat-resin-in-frp-manufacturing': { c: 0, i: 5, p: 21.6 },
  'epoxy-hardener-vs-uv-resin-curing': { c: 0, i: 3, p: 8.3 },
  'applications-of-lamination-resin': { c: 0, i: 2, p: 48.0 },
  'gelcoat-resin-vs-epoxy-resin': { c: 0, i: 1, p: 11.0 },
  'marble-resin-vs-epoxy-clear-casting-resin': { c: 0, i: 0, p: 0 },
  'marble-resin-vs-pet-resin': { c: 1, i: 3, p: 6.3 },
};

export const RETIRE = {
  // --- NC thinner: 7 articles -> 2 -------------------------------------------
  'nc-thinner-for-wood-finishing': '/resources/what-is-nc-thinner/',
  'nc-thinner-in-spray-application': '/resources/what-is-nc-thinner/',
  'nc-thinner-viscosity-flow-and-blushing': '/resources/what-is-nc-thinner/',
  'nc-thinner-in-industrial-coatings': '/resources/what-is-nc-thinner/',
  'nc-thinner-selection-and-storage-guide': '/resources/what-is-nc-thinner/',

  // --- Soapstone / mineral fillers: 9 -> 1 -----------------------------------
  'mineral-fillers-in-polyester-resin': '/resources/what-is-soapstone-talc-powder/',
  'filler-vs-reinforcement': '/resources/what-is-soapstone-talc-powder/',
  'soapstone-powder-in-putty-and-filler-compounds': '/resources/what-is-soapstone-talc-powder/',
  'soapstone-powder-in-paints-and-coatings': '/resources/what-is-soapstone-talc-powder/',
  'soapstone-vs-calcium-carbonate-as-a-filler': '/resources/what-is-soapstone-talc-powder/',
  'filler-dispersion-and-mixing-considerations': '/resources/what-is-soapstone-talc-powder/',
  'soapstone-powder-storage-and-handling': '/resources/what-is-soapstone-talc-powder/',
  'mineral-filler-selection-guide': '/resources/what-is-soapstone-talc-powder/',

  // --- Styrene: 10 -> 3 ------------------------------------------------------
  'styrene-as-reactive-diluent': '/resources/what-is-styrene-monomer/',
  'why-styrene-reduces-resin-viscosity': '/resources/what-is-styrene-monomer/',
  'styrene-and-fibreglass-wet-out': '/resources/what-is-styrene-monomer/',
  'styrene-in-gelcoat-systems': '/resources/what-is-styrene-monomer/',
  'styrene-vs-low-voc-resin-systems': '/resources/what-is-styrene-monomer/',
  'common-styrene-related-processing-issues': '/resources/what-is-styrene-monomer/',
  'styrene-monomer-buyer-guide': '/resources/what-is-styrene-monomer/',

  // --- Mould release & wax: 10 -> 1 ------------------------------------------
  'how-to-apply-and-buff-mould-release-wax': '/resources/what-is-frp-mould-release-wax/',
  'preparing-a-new-frp-mould': '/resources/what-is-frp-mould-release-wax/',
  'mould-surface-preparation-basics': '/resources/what-is-frp-mould-release-wax/',
  'wax-vs-pva-release-agent': '/resources/what-is-frp-mould-release-wax/',
  'choosing-a-release-agent-for-frp-moulding': '/resources/what-is-frp-mould-release-wax/',
  'common-mould-release-failures': '/resources/what-is-frp-mould-release-wax/',
  'mould-care-between-production-runs': '/resources/what-is-frp-mould-release-wax/',
  'gelcoat-application-and-mould-release-sequence': '/resources/what-is-frp-mould-release-wax/',
  'wax-release-for-marine-and-panel-moulding': '/resources/what-is-frp-mould-release-wax/',

  // --- Brushes & open-moulding tools: 6 -> 1 ---------------------------------
  'brush-vs-roller-vs-squeegee-in-frp-work': '/resources/selecting-brushes-for-resin-and-gelcoat-application/',
  'brush-technique-for-hand-lay-up-and-mould-corners': '/resources/selecting-brushes-for-resin-and-gelcoat-application/',
  'using-brushes-for-frp-repair': '/resources/selecting-brushes-for-resin-and-gelcoat-application/',
  'workshop-tool-checklist-for-open-moulding': '/resources/selecting-brushes-for-resin-and-gelcoat-application/',
  'caring-for-and-replacing-application-brushes': '/resources/selecting-brushes-for-resin-and-gelcoat-application/',

  // --- MEKP: 5 -> 2 ----------------------------------------------------------
  'mekp-for-polyester-resin-systems': '/resources/what-is-mekp-hardener/',
  'mekp-for-gelcoat-systems': '/resources/what-is-mekp-hardener/',
  'mekp-hardener-procurement-guide': '/resources/what-is-mekp-hardener/',

  // --- Cobalt accelerator: 10 -> 1 -------------------------------------------
  'accelerator-vs-catalyst-vs-initiator': '/resources/what-is-cobalt-octoate/',
  'how-cobalt-accelerators-work-in-polyester-curing': '/resources/what-is-cobalt-octoate/',
  'cobalt-octoate-vs-mekp-different-roles': '/resources/what-is-cobalt-octoate/',
  'cobalt-accelerator-in-hand-lay-up': '/resources/what-is-cobalt-octoate/',
  'cobalt-accelerator-in-gelcoat-systems': '/resources/what-is-cobalt-octoate/',
  'gel-time-and-cobalt-dosage-relationship': '/resources/what-is-cobalt-octoate/',
  'selecting-a-cobalt-accelerator': '/resources/what-is-cobalt-octoate/',
  'cobalt-octoate-storage-and-handling': '/resources/what-is-cobalt-octoate/',
  'cobalt-accelerators-vs-cobalt-free-accelerators': '/resources/what-is-cobalt-octoate/',

  // --- Glass fibre: 6 -> 2 ---------------------------------------------------
  'glass-fiber-for-frp-manufacturing': '/resources/what-is-glass-fiber-chopped-strand-mat/',
  'glass-fiber-storage-and-procurement-guide': '/resources/what-is-glass-fiber-chopped-strand-mat/',
  'glass-fiber-and-polyester-resin-compatibility': '/resources/what-is-glass-fiber-chopped-strand-mat/',
  'fire-retardant-resin-and-glass-fiber': '/resources/what-is-glass-fiber-chopped-strand-mat/',

  // --- FRP pigment: 6 -> 2 ---------------------------------------------------
  'applications-of-frp-polyester-pigment': '/resources/what-is-frp-polyester-pigment/',
  'frp-pigment-compatibility-with-resin-systems': '/resources/what-is-frp-polyester-pigment/',
  'frp-pigment-storage-and-procurement-guide': '/resources/what-is-frp-polyester-pigment/',
  'pigment-paste-vs-pre-pigmented-polyester-resin': '/resources/what-is-frp-polyester-pigment/',

  // --- Weak / duplicated comparison + application articles -------------------
  'applications-of-lamination-resin': '/resources/what-is-lamination-resin/',
  'applications-of-gelcoat-resin-in-frp-manufacturing': '/resources/what-is-gel-coat-resin/',
  'gelcoat-resin-vs-epoxy-resin': '/resources/what-is-gel-coat-resin/',
  'epoxy-hardener-vs-uv-resin-curing': '/resources/epoxy-hardener-vs-mekp-hardener/',
  'marble-resin-vs-epoxy-clear-casting-resin': '/resources/marble-resin-vs-pet-resin/',
};

export const KEPT = {
  'nc-thinner-vs-general-purpose-thinner':
    'Best performer in the NC cluster (3 of the site\'s 122 clicks) and ranks for a distinct comparison query set — `gp thinner vs nc thinner`, `nc thinner vs thinner`, `thinner vs nc thinner`. Kept and improved in place.',
  'solvent-evaporation-and-coating-defects':
    'Earned a click at average position 3.7. Covers solvent/coating defects beyond NC lacquer, so it is not duplicated by the NC guide.',
  'styrene-and-polyester-cure-chemistry':
    'Earned a click at average position 6.2. Cure-chemistry intent is distinct from the styrene product guide.',
  'styrene-monomer-storage-handling-safety':
    'Highest-impression styrene article and the page SDS/safety queries land on. Safety content deliberately kept as its own URL rather than buried in a long guide.',
  'epoxy-hardener-vs-mekp-hardener':
    'Earned a click across 32 impressions. Epoxy-vs-polyester hardener confusion is a real, distinct buyer question.',
  'csm-300-vs-csm-450-glass-fiber':
    'Average position 4.3 on a specific, high-intent product comparison that buyers search by name.',
  'polyester-pigment-paste-vs-gelcoat':
    'Highest-impression pigment article at position 10.5; pigment-vs-gelcoat is a genuine specification decision, not a keyword variant.',
  'marble-resin-vs-pet-resin':
    'Earned a click at position 6.3, and now also receives the retired marble-vs-clear-casting comparison.',
};

export const REASONS = {
  'nc-thinner-for-wood-finishing': 'Single application context; now a section of the NC thinner guide.',
  'nc-thinner-in-spray-application': 'Spray viscosity content folded into the guide\'s application section.',
  'nc-thinner-viscosity-flow-and-blushing': 'Flow/blushing troubleshooting folded into the guide.',
  'nc-thinner-in-industrial-coatings': '103 words of body prose restating the guide\'s own opening.',
  'nc-thinner-selection-and-storage-guide': 'Buying and storage folded into the guide\'s closing sections.',
  'mineral-fillers-in-polyester-resin': 'Filler role in resin is now a section of the soapstone guide.',
  'filler-vs-reinforcement': 'The filler/reinforcement distinction is now a section of the guide.',
  'soapstone-powder-in-putty-and-filler-compounds': 'Application context merged; had zero impressions.',
  'soapstone-powder-in-paints-and-coatings': 'Extender-vs-pigment content merged into the guide.',
  'soapstone-vs-calcium-carbonate-as-a-filler': 'Comparison merged as a section; too thin to rank alone.',
  'filler-dispersion-and-mixing-considerations': 'Mixing guidance merged; ranked position 57 on one impression.',
  'soapstone-powder-storage-and-handling': 'Storage merged into the guide\'s handling section.',
  'mineral-filler-selection-guide': 'Buying checklist merged into the guide\'s closing section.',
  'styrene-as-reactive-diluent': 'Reactive-diluent explanation merged into the styrene guide.',
  'why-styrene-reduces-resin-viscosity': 'Viscosity mechanism merged into the guide.',
  'styrene-and-fibreglass-wet-out': 'Wet-out content merged into the guide.',
  'styrene-in-gelcoat-systems': 'Gelcoat context merged into the guide.',
  'styrene-vs-low-voc-resin-systems': 'Low-VOC comparison merged into the guide.',
  'common-styrene-related-processing-issues': 'Troubleshooting merged into the guide.',
  'styrene-monomer-buyer-guide': 'Buying checklist merged into the guide.',
  'how-to-apply-and-buff-mould-release-wax': 'Application technique merged into the release-wax guide.',
  'preparing-a-new-frp-mould': 'New-mould preparation merged into the guide.',
  'mould-surface-preparation-basics': 'Surface preparation merged into the guide.',
  'wax-vs-pva-release-agent': 'Wax/PVA comparison merged as a section of the guide.',
  'choosing-a-release-agent-for-frp-moulding': 'Selection guidance merged into the guide.',
  'common-mould-release-failures': 'Failure modes merged into the guide\'s troubleshooting section.',
  'mould-care-between-production-runs': 'Between-run care merged into the guide.',
  'gelcoat-application-and-mould-release-sequence': 'Process sequence merged into the guide.',
  'wax-release-for-marine-and-panel-moulding': 'Application context merged into the guide.',
  'brush-vs-roller-vs-squeegee-in-frp-work': 'Tool comparison merged into the applicator guide.',
  'brush-technique-for-hand-lay-up-and-mould-corners': 'Technique merged into the applicator guide.',
  'using-brushes-for-frp-repair': 'Repair context merged into the applicator guide.',
  'workshop-tool-checklist-for-open-moulding': 'Checklist merged; had zero impressions.',
  'caring-for-and-replacing-application-brushes': 'Care and replacement merged into the applicator guide.',
  'mekp-for-polyester-resin-systems': 'Merged into the MEKP catalyst guide.',
  'mekp-for-gelcoat-systems': 'Gelcoat context merged into the MEKP guide.',
  'mekp-hardener-procurement-guide': 'Buying checklist merged into the MEKP guide.',
  'accelerator-vs-catalyst-vs-initiator': 'Terminology merged into the cobalt accelerator guide.',
  'how-cobalt-accelerators-work-in-polyester-curing': 'Mechanism merged into the cobalt guide.',
  'cobalt-octoate-vs-mekp-different-roles': 'Role distinction merged into the cobalt guide.',
  'cobalt-accelerator-in-hand-lay-up': 'Process context merged into the cobalt guide.',
  'cobalt-accelerator-in-gelcoat-systems': 'Gelcoat context merged into the cobalt guide.',
  'gel-time-and-cobalt-dosage-relationship': 'Gel-time relationship merged into the cobalt guide.',
  'selecting-a-cobalt-accelerator': 'Selection guidance merged into the cobalt guide.',
  'cobalt-octoate-storage-and-handling': 'Storage merged into the cobalt guide.',
  'cobalt-accelerators-vs-cobalt-free-accelerators': 'Comparison merged into the cobalt guide.',
  'glass-fiber-for-frp-manufacturing': 'Merged into the chopped strand mat guide.',
  'glass-fiber-storage-and-procurement-guide': 'Storage and buying merged into the glass fibre guide.',
  'glass-fiber-and-polyester-resin-compatibility': 'Compatibility merged into the glass fibre guide.',
  'fire-retardant-resin-and-glass-fiber': 'Reinforcement content merged into the glass fibre guide.',
  'applications-of-frp-polyester-pigment': 'Applications merged into the pigment guide.',
  'frp-pigment-compatibility-with-resin-systems': 'Compatibility merged into the pigment guide.',
  'frp-pigment-storage-and-procurement-guide': 'Storage and buying merged into the pigment guide.',
  'pigment-paste-vs-pre-pigmented-polyester-resin': 'Comparison merged into the pigment guide.',
  'applications-of-lamination-resin': '107 words of body prose duplicating the lamination resin guide, which earns 6 clicks.',
  'applications-of-gelcoat-resin-in-frp-manufacturing': '136 words duplicating the gelcoat guide it now redirects to.',
  'gelcoat-resin-vs-epoxy-resin': 'One impression, no inbound internal links; merged into the gelcoat guide.',
  'epoxy-hardener-vs-uv-resin-curing': 'No inbound internal links; the surviving hardener comparison covers the same question.',
  'marble-resin-vs-epoxy-clear-casting-resin': 'Zero impressions, no inbound links, and listed by Google as crawled-not-indexed.',
};

// ============================================================================
//  REPLACEMENT GUIDES
// ============================================================================

export const GUIDES = {};

GUIDES['what-is-nc-thinner'] = {
  slug: 'what-is-nc-thinner',
  title: 'NC Thinner: Complete Guide to Nitrocellulose Lacquer Thinner',
  description:
    'What NC (nitrocellulose) thinner is, how it adjusts lacquer viscosity for spray and brush work, why blushing happens, and what to confirm before ordering.',
  category: 'Product Guide',
  icon: 'info',
  publishDate: '2026-09-01',
  seo: {
    title: 'NC Thinner: What It Is, How to Use It, and What to Check',
    keywords: [
      'what is nc thinner',
      'nc thinner full form',
      'nitrocellulose thinner',
      'nc lacquer thinner',
      'nc thinner for spray application',
      'nc thinner storage',
    ],
    ogTitle: 'NC Thinner: Complete Guide',
    ogDescription:
      'NC thinner is a solvent blend formulated specifically for nitrocellulose lacquer systems. How it works, how it is used, and what to confirm before buying.',
  },
  quickFacts: {
    'Full Form': 'NC = nitrocellulose',
    Function: 'Solvent blend for viscosity adjustment and application support',
    'Used With': 'Nitrocellulose-based lacquers and coatings',
    'Not': 'A resin, hardener, catalyst or general-purpose thinner',
    'Key Hazard': 'Flammable liquid and vapour — full guidance in the current SDS',
  },
  sections: [
    {
      heading: 'What NC thinner is: a solvent blend built for one job',
      body: [
        'NC stands for nitrocellulose. NC thinner is a blend of solvents formulated specifically to work with nitrocellulose-based lacquers and coatings — the kind of finish traditionally used on wood furniture, automotive refinishing and general industrial finishing. Nitrocellulose lacquer needs a specific balance of solvents to dissolve properly, flow out smoothly when sprayed or brushed, and dry to a clean, even finish, which is why NC thinner is formulated differently from a general-purpose thinner intended for oil-based paints.',
        'In practical use, NC thinner adjusts a lacquer\'s working viscosity for spray or brush application, and helps the finish flow out and level before it dries — rather than being a chemically active ingredient that reacts or cures the coating.',
      ],
    },
    {
      heading: 'What it is not',
      body: [
        'NC thinner is a solvent, not a resin, hardener or catalyst — it doesn\'t cure, react with, or chemically transform the lacquer. Its role is purely to thin, adjust flow, and support application, with the coating itself drying by solvent evaporation rather than a chemical curing reaction.',
        'It is also not interchangeable with a general-purpose thinner. "Thinner" is a broad category term, and different coating chemistries need solvent blends formulated to match how they dissolve, flow and dry. Using the wrong one for a given coating can affect how well it dissolves, sprays, flows and dries — the coating manufacturer\'s own guidance is the right reference for which thinner to use.',
      ],
    },
    {
      heading: 'Adjusting viscosity for spray application',
      body: [
        'Spray guns are designed to atomise a coating into a fine mist within a specific viscosity range. Lacquer straight from the can is often too thick for good atomisation, which is where NC thinner comes in — reducing viscosity to a workable spray consistency. Too thick, and the spray pattern can be uneven or produce an orange-peel texture; too thin, and the coating can run or sag on vertical surfaces, or build too little film per coat.',
        'The right thinning ratio depends on the specific lacquer, the spray equipment being used, and ambient conditions — there isn\'t one universal ratio that suits every combination. Testing on a scrap surface before committing to a full spray job, and adjusting incrementally, is standard practice for dialling in the right consistency for a given lacquer and gun setup.',
      ],
    },
    {
      heading: 'Flow, levelling and finish quality',
      body: [
        'A properly thinned lacquer doesn\'t just spray more easily — it also flows and levels better once on the surface, meaning brush or spray marks smooth themselves out before the coating dries, leaving an even film. Lacquer that\'s too thick can dry before it has a chance to level, locking in texture or marks, and is more prone to runs or sags.',
      ],
    },
    {
      heading: 'Blushing: the humidity defect to watch for',
      body: [
        'Blushing is a well-known nitrocellulose lacquer defect: a cloudy, milky-white haze that appears in the drying film, most often in humid or cool, damp conditions. It happens when solvents evaporate quickly enough to cool the surface below the surrounding air\'s dew point, causing moisture to condense into the still-wet film.',
        'Because it\'s tied to evaporation rate and humidity rather than the base lacquer itself, blushing is generally addressed through application conditions — avoiding spraying in high humidity, allowing better airflow and drying conditions, or using a slower-evaporating thinner blend suited to the conditions — rather than treated as a lacquer defect. Persistent blushing issues are worth discussing with your coating supplier.',
      ],
    },
    {
      heading: 'NC lacquer in wood furniture finishing',
      body: [
        'Nitrocellulose lacquer has a long history in wood furniture finishing because it dries relatively quickly, can be built up in multiple thin coats, and — once fully cured — can be rubbed out (buffed with fine abrasives) to a smooth, high-gloss finish. NC thinner supports this process by keeping the lacquer at a workable viscosity for spray or brush application across each coat.',
        'Achieving a smooth, professional-looking wood finish with NC lacquer generally depends on thin, even coats rather than one heavy application, proper surface preparation beforehand, and working in suitable ambient humidity. NC thinner\'s role is to support each of these coats flowing out evenly rather than to fix an underlying preparation or technique issue.',
      ],
    },
    {
      heading: 'Industrial and repeat-batch finishing work',
      body: [
        'While wood furniture finishing is the most familiar context, nitrocellulose-based coatings and their compatible thinners are also used across broader professional and industrial finishing work — anywhere an NC-based coating system has been specified for its particular drying and finish characteristics. In each case, NC thinner\'s role stays the same: adjusting the coating to a workable, consistent viscosity for the application method in use.',
        'For production or repeat-batch work, consistency in thinning ratio and technique between batches supports a more uniform finish across a run — an inconsistent approach batch-to-batch is a common, avoidable source of visible finish variation.',
      ],
    },
    {
      heading: 'Storage and handling',
      body: [
        'Like other solvent-based products, NC thinner is a flammable liquid — store it in a cool, dry, well-ventilated area away from heat sources, sparks and open flame, in tightly sealed original containers.',
        'This guide covers general principles only; always read and follow the current Safety Data Sheet (SDS) for complete handling, storage, PPE and emergency guidance.',
      ],
    },
    {
      heading: 'What to confirm before ordering',
      body: [
        'Since NC thinner is formulated for nitrocellulose-based coatings specifically, confirming the coating system it will be paired with is the useful starting point for a purchase — this helps ensure compatibility and lets a supplier understand your application (spray, brush, production run) before quoting.',
        'When requesting a quote, share the coating system you are using it with, your application method, expected quantity and delivery location, and ask for the current SDS alongside the quotation.',
      ],
    },
  ],
  faqs: [
    {
      q: 'What is the full form of NC thinner?',
      a: 'NC stands for nitrocellulose. NC thinner is a solvent blend formulated for nitrocellulose-based lacquer and coating systems.',
    },
    {
      q: 'Can NC thinner be used with any type of paint?',
      a: 'It\'s formulated specifically for nitrocellulose-based lacquer and coating systems — using it with a different coating chemistry (e.g. polyurethane or water-based) isn\'t the intended use.',
    },
    {
      q: 'Does NC thinner cure or react with the lacquer?',
      a: 'No. It\'s a solvent that thins and supports application — the lacquer itself dries by solvent evaporation, not a chemical reaction with the thinner.',
    },
    {
      q: 'How do I know if my lacquer needs more thinner for spraying?',
      a: 'Signs of too-thick lacquer include poor atomisation, a rough or orange-peel texture, or the spray gun struggling to produce a fine, even mist. Test on scrap material and adjust incrementally.',
    },
    {
      q: 'What happens if I add too much NC thinner?',
      a: 'Over-thinned lacquer can run or sag, especially on vertical surfaces, and builds less film per coat, which may require more coats to reach the desired finish.',
    },
    {
      q: 'What does blushing look like, and how is it prevented?',
      a: 'A cloudy, milky-white haze appearing in the lacquer film as it dries, typically in humid or damp conditions. It is commonly prevented by avoiding spraying in high humidity, improving airflow and drying conditions, or using a thinner blend and technique suited to the ambient conditions.',
    },
    {
      q: 'Is NC thinner flammable?',
      a: 'Yes — like most lacquer thinners, it\'s a flammable liquid and should be stored and handled with appropriate fire-safety precautions. Full guidance is in the current SDS.',
    },
  ],
  relatedSlugs: [
    'nc-thinner-vs-general-purpose-thinner',
    'solvent-evaporation-and-coating-defects',
    'resin-glossary',
  ],
  recommendedLinks: [
    { href: '/products/nc-thinner/', label: 'View NC Thinner', description: 'Request an industrial quote and current SDS.' },
    { href: '/products/frp-allied-products/', label: 'FRP Allied Products', description: 'Thinners, solvents, fillers and workshop consumables.' },
  ],
};

GUIDES['what-is-soapstone-talc-powder'] = {
  slug: 'what-is-soapstone-talc-powder',
  title: 'Soapstone (Talc) Powder: Complete Mineral Filler Guide',
  description:
    'What soapstone / talc powder is, how mineral fillers behave in resin, putty and coating formulations, how it differs from reinforcement and from calcium carbonate, and what to confirm before ordering.',
  category: 'Product Guide',
  icon: 'info',
  publishDate: '2026-09-01',
  seo: {
    title: 'Soapstone (Talc) Powder: Industrial Mineral Filler Guide',
    keywords: [
      'what is soapstone powder',
      'talc powder industrial filler',
      'steatite powder',
      'mineral filler polyester resin',
      'soapstone vs calcium carbonate',
      'filler vs reinforcement',
    ],
    ogTitle: 'Soapstone (Talc) Powder: Mineral Filler Guide',
    ogDescription:
      'Soapstone (talc/steatite) powder is a finely processed industrial mineral used as a functional filler across resin, putty, coating and plastic formulations.',
  },
  quickFacts: {
    'Mineral Class': 'Talc-type mineral (soapstone / steatite)',
    'General Character': 'Soft mineral, finely ground into powder form',
    Function: 'Mineral filler / extender — inert, not reactive',
    'Used In': 'Resin compounds, putties, coatings, plastics and other formulations',
    'Not': 'A reinforcement, a pigment, or a binder',
  },
  sections: [
    {
      heading: 'A soft, finely processed mineral filler',
      body: [
        'Soapstone (also known as steatite, and closely related to talc) is a naturally soft mineral, ground and processed into a fine powder for industrial use. As a filler, its job is to be blended into a base material — resin, putty, paint, plastic, and similar formulations — to add bulk, adjust working properties or reduce the proportion of more expensive base material needed, rather than to react chemically with the system it\'s added to.',
        'The specific effect soapstone powder has in a given formulation depends heavily on that formulation\'s own design — how much filler is used, how it\'s dispersed, and what property the formulator is targeting (cost reduction, workability, surface finish, dimensional stability, and others) all vary by application.',
      ],
    },
    {
      heading: 'An inert filler, not a reactive ingredient',
      body: [
        'Unlike a resin, catalyst or accelerator, soapstone powder doesn\'t take part in a curing or chemical reaction — it\'s a physically blended, inert filler. This is an important distinction for buyers: it changes the bulk, working consistency and sometimes finish characteristics of a formulation, but it\'s not a substitute for, or equivalent to, a reactive resin-system component.',
      ],
    },
    {
      heading: 'Filler vs reinforcement: why the distinction matters',
      body: [
        'In composite and resin-compound terminology, "filler" and "reinforcement" describe two functionally distinct roles. A filler — a mineral powder like soapstone, for example — is blended in to add bulk, influence working properties, or adjust cost, without itself carrying significant structural load. A reinforcement — most commonly glass fibre in FRP work — is specifically chosen and oriented to carry mechanical (typically tensile) load, giving the finished composite its structural strength.',
        'This distinction is why a mineral filler can\'t simply be swapped in for reinforcement fibre, or vice versa, even though both are "added" to a resin system — they\'re solving different problems in the formulation. Many composite formulations use both: reinforcement for structural strength, and filler for bulk, cost or working-property adjustment.',
      ],
    },
    {
      heading: 'Mineral fillers in polyester resin compounds',
      body: [
        'A mineral filler like soapstone powder is blended into a resin compound for several possible reasons depending on the formulation\'s goals: to reduce the proportion of (typically more expensive) resin needed for a given volume, to adjust the compound\'s working consistency, or to influence characteristics like shrinkage behaviour or surface finish in the cured material.',
        'Which of these matters most, and how much filler is appropriate, is a formulation decision specific to the product being made — not a fixed rule that applies the same way everywhere. Filler adds bulk and can influence certain physical characteristics, but it doesn\'t provide the tensile or structural reinforcement that glass fibre does in an FRP laminate.',
      ],
    },
    {
      heading: 'In putty and body-filler compounds',
      body: [
        'Putty and body-filler compounds — used for surface repair, filling and smoothing on various substrates — are generally formulated as a paste combining a resin binder with a mineral filler. The filler bulks out the compound to a workable consistency and volume without relying solely on (typically costlier) resin to do so, while the resin binder holds everything together and provides adhesion and cure.',
        'The exact formulation — filler type, loading level, and other additives — is set by whoever is compounding the putty product, and varies by intended use (automotive-type body filler, general industrial filler, and so on).',
      ],
    },
    {
      heading: 'In paints and coatings: an extender, not a pigment',
      body: [
        'In coating formulation terminology, a mineral powder like soapstone used in paints or coatings is generally classed as an extender — distinct from the pigment (which provides colour and opacity) and the binder (the film-forming resin that holds the coating together and gives it adhesion). Extenders bulk out a formulation and can influence properties like sheen or texture, but they aren\'t the primary colour or film-forming component.',
        'As with resin and putty compounds, the specific role and loading of a mineral extender in a given paint or coating is a formulation decision made by the coating manufacturer, tailored to that product\'s intended performance.',
      ],
    },
    {
      heading: 'Soapstone vs calcium carbonate',
      body: [
        'Soapstone (talc-type, magnesium silicate) and calcium carbonate are two of the most commonly used mineral fillers across resin, coating, plastics and putty formulations — but they\'re chemically and structurally different minerals, and each brings its own general handling and performance characteristics to a formulation.',
        'Neither is universally "better" — the right choice depends on what the formulator is trying to achieve, the base material it\'s going into, and cost considerations specific to the product being made. Because filler selection interacts closely with the rest of a formulation, a direct swap between the two isn\'t something to do without reformulation and testing.',
      ],
    },
    {
      heading: 'Dispersion and mixing',
      body: [
        'A mineral filler only delivers consistent results if it\'s evenly distributed throughout the base material — pockets of concentrated filler or unmixed resin can create weak spots, uneven surface finish, or inconsistent working properties across a batch. This is true whether the filler is being blended into resin, putty, paint or another base material.',
        'How much mixing is enough depends on the equipment, batch size and the specific compound — there isn\'t one universal mixing time that applies across every formulation and process. Batch-to-batch consistency in mixing technique and time is one of the more reliable ways to reduce variation in the finished compound.',
      ],
    },
    {
      heading: 'Storage and handling',
      body: [
        'As a fine mineral powder, soapstone is generally best kept sealed and protected from moisture ingress — a damp powder can clump and become harder to disperse evenly when it\'s eventually used, affecting mixing quality. Storing bags or containers off the ground, in a dry area, and keeping them properly sealed when not in use are standard practices for powder products of this kind.',
        'Handling a fine powder also generates dust, so basic dust-management practice — appropriate PPE such as a dust mask and eye protection, and reasonable ventilation — is worth following during handling and mixing, alongside whatever the product\'s SDS specifically recommends.',
      ],
    },
    {
      heading: 'What to confirm before ordering',
      body: [
        'Because mineral filler performance is formulation-dependent, the most useful starting point for a buyer is describing the intended use — resin compound, putty, paint/coating, plastic, or another application — rather than requesting a filler in isolation. This helps a supplier understand whether the product fits the intended use.',
        'Where a specific mesh size, purity or other technical specification is required for a formulation, that requirement should come from the formulator\'s own specification or testing — rather than being assumed from general industry figures, since this varies by application and isn\'t standardised across every use case.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is soapstone powder the same as talc?',
      a: 'Soapstone (steatite) is a talc-type mineral, closely related to what\'s commonly called talc in industrial use — both refer to the same general mineral character used as a filler.',
    },
    {
      q: 'Does soapstone powder react chemically in a formulation?',
      a: 'No — it\'s an inert mineral filler, physically blended into a base material rather than reacting with it.',
    },
    {
      q: 'Can mineral filler replace glass fibre reinforcement?',
      a: 'No — filler and reinforcement serve different structural roles. Filler generally doesn\'t provide the load-bearing strength that oriented reinforcement fibre does.',
    },
    {
      q: 'Does adding mineral filler weaken cured resin?',
      a: 'The effect on mechanical properties depends heavily on the specific formulation, filler loading and application — this is a formulation-specific question best addressed with reference to the actual product being made, not a general rule.',
    },
    {
      q: 'Can calcium carbonate be substituted for soapstone powder directly?',
      a: 'Not without reformulation and testing — the two are chemically different minerals and can behave differently in a given formulation.',
    },
    {
      q: 'Does soapstone powder provide colour in a coating?',
      a: 'No — that\'s the pigment\'s role. A mineral extender like soapstone bulks out the formulation and can influence texture or sheen, but doesn\'t provide the coating\'s colour.',
    },
    {
      q: 'What should I share when requesting a mineral filler quote?',
      a: 'Your intended formulation or use (resin, putty, coating, plastics, etc.), any specific technical requirement you\'ve identified, expected quantity and delivery location.',
    },
  ],
  relatedSlugs: ['what-is-glass-fiber-chopped-strand-mat', 'what-is-frp-polyester-pigment', 'resin-glossary'],
  recommendedLinks: [
    { href: '/products/soap-stone-powder/', label: 'View Soap Stone Powder', description: 'Request an industrial quote and current SDS.' },
    { href: '/products/frp-allied-products/', label: 'FRP Allied Products', description: 'Fillers, pigments, solvents and workshop consumables.' },
  ],
};

GUIDES['what-is-styrene-monomer'] = {
  slug: 'what-is-styrene-monomer',
  title: 'Styrene Monomer: Complete Guide for Polyester Resin Users',
  description:
    'What styrene monomer is, why it is called a reactive diluent, how it affects viscosity, wet-out and gelcoat, how low-VOC systems differ, and what to confirm before ordering.',
  category: 'Product Guide',
  icon: 'info',
  publishDate: '2026-09-01',
  seo: {
    title: 'Styrene Monomer: Reactive Diluent Guide for Polyester Resin',
    keywords: [
      'what is styrene monomer',
      'styrene monomer resin',
      'reactive diluent polyester resin',
      'styrene in frp',
      'styrene resin viscosity',
      'low voc polyester resin',
    ],
    ogTitle: 'Styrene Monomer: Complete Guide',
    ogDescription:
      'Styrene monomer is a reactive diluent used in unsaturated polyester resin systems to reduce viscosity and take part in the curing reaction itself.',
  },
  quickFacts: {
    'Chemical Class': 'Aromatic vinyl monomer',
    Role: 'Reactive diluent / comonomer for unsaturated polyester resin',
    Function: 'Reduces resin viscosity and copolymerises during cure',
    'Handling Note': 'Flammable and volatile — requires ventilation and PPE',
  },
  sections: [
    {
      heading: 'A diluent that reacts, not just a solvent',
      body: [
        'Styrene monomer holds an unusual position in unsaturated polyester resin: it thins the resin (reducing viscosity so it processes and wets out reinforcement more easily), but unlike a conventional solvent, it doesn\'t evaporate away and leave the resin behind — a meaningful proportion of it copolymerises directly into the cured resin network during the curing reaction. That\'s why it\'s called a reactive diluent rather than simply a solvent.',
        'Most unsaturated polyester resin is supplied already dissolved in styrene by the resin manufacturer, at a proportion set during formulation. Styrene monomer sold separately is typically used to further adjust viscosity for a specific process, or to formulate and blend resin systems, rather than to replace what\'s already in a standard resin.',
      ],
    },
    {
      heading: 'What makes a diluent "reactive"',
      body: [
        'A conventional solvent added to reduce a coating or resin\'s viscosity is expected to evaporate away, leaving the intended solid material behind. A reactive diluent works differently: it\'s chosen because its own molecular structure lets it take part in the curing reaction, so instead of evaporating out, a meaningful share of it becomes chemically bonded into the finished material.',
        'During cure, styrene molecules cross-link with the unsaturated (reactive) sites along the polyester resin\'s backbone, forming the rigid three-dimensional network that gives cured FRP laminate its structural properties. Because styrene participates in the cure reaction itself, its proportion in a resin system affects more than just how easily it flows — it also influences cure characteristics and the properties of the finished laminate.',
      ],
    },
    {
      heading: 'Why styrene reduces resin viscosity',
      body: [
        'The base polyester resin, before dilution, is a relatively viscous liquid. Styrene, being a much lower-viscosity liquid, thins the resin when blended in — which is central to why unsaturated polyester resin is supplied pre-dissolved in styrene rather than as a neat, undiluted resin.',
        'Because styrene content also affects cure chemistry and finished-laminate properties, viscosity reduction via styrene isn\'t something to push arbitrarily far — resin manufacturers balance styrene proportion against processing needs and performance targets when formulating a resin, and further adjustment by the fabricator should be done cautiously and, where significant, discussed with the resin supplier.',
      ],
    },
    {
      heading: 'Viscosity, wet-out and laminate quality',
      body: [
        'Wet-out is the process of resin fully penetrating and surrounding reinforcement fibres — whether chopped strand mat or woven roving — so that every fibre is bonded into the resin matrix with no dry, resin-starved patches. Thorough wet-out is one of the most fundamental quality requirements in hand lay-up and spray-up FRP work, since dry or under-wetted reinforcement doesn\'t transfer load properly and becomes a weak point in the finished part.',
        'Resin viscosity is one of the practical variables affecting how easily and quickly wet-out is achieved — a resin that flows more readily works into tight reinforcement weave and multiple layers faster than a highly viscous one, all else being equal. But it is one variable among several: reinforcement type and weave, application technique, ambient temperature, and the base resin formulation itself all matter. Fabricators experiencing wet-out problems should consider the whole process rather than assuming styrene content is the sole cause.',
      ],
    },
    {
      heading: 'Styrene in gelcoat systems',
      body: [
        'Gelcoat is itself a polyester-based system, formulated to be applied as a thin, even surface layer against a mould rather than built up in reinforced structural passes like laminating resin. Styrene plays a similar dual role here — contributing to workable viscosity for spray or brush application, and taking part in the cure reaction — but the target consistency and finish requirements differ from laminating resin, since gelcoat becomes the visible, cosmetic surface of the finished part.',
        'Gelcoat viscosity and styrene content are set by the gelcoat manufacturer to suit spray or brush application and the intended finish. Buyers looking to adjust a gelcoat\'s working consistency should refer to that gelcoat\'s own technical data rather than assuming laminating-resin practice transfers directly.',
      ],
    },
    {
      heading: 'Styrene-based vs low-VOC resin systems',
      body: [
        'Styrene monomer is volatile — some evaporates into workshop air during open processing (spraying, hand lay-up) before the resin cures, which is why it\'s classed as a volatile organic compound (VOC) and is subject to occupational exposure guidance. In response, some resin manufacturers formulate "low-styrene" or "low-VOC" resin systems, using formulation approaches intended to reduce styrene emission during processing.',
        'This is a resin-formulation choice made by the manufacturer, not something a fabricator achieves simply by using less styrene monomer additive — a standard resin\'s base styrene content is set during its own manufacture. The decision to specify a low-VOC resin system is typically driven by workplace air-quality requirements, applicable regulation, or a customer\'s process specification, rather than a universal performance preference.',
      ],
    },
    {
      heading: 'Common processing issues that trace back to styrene',
      body: [
        'Resin that has visibly thickened compared to when it arrived can, among other causes, relate to some styrene content evaporating over an extended storage period, particularly if containers weren\'t kept tightly sealed. Checking storage conditions and container seal integrity is a reasonable first step before assuming a resin batch is faulty.',
        'Since styrene content is one of the factors influencing resin viscosity, unexpectedly poor wet-out can sometimes relate back to a resin\'s styrene content shifting from what it should be — though application technique, reinforcement type and ambient temperature are equally common causes and should be checked alongside it.',
      ],
    },
    {
      heading: 'What to confirm before ordering',
      body: [
        'Styrene monomer is used for different purposes depending on context — adjusting a resin\'s working viscosity for a specific process, or as part of resin formulation and blending work. Being specific about which of these applies helps a supplier understand the requirement, and helps confirm the product is appropriate for the intended use rather than assumed to be a general-purpose thinner.',
        'Request the current Safety Data Sheet (SDS) for storage, handling and PPE guidance given styrene\'s flammability and VOC classification. If the intended use involves adjusting a specific resin\'s viscosity, that resin\'s own technical data — rather than a general assumption — is the right source for how much styrene monomer, if any, is appropriate to add.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is styrene monomer the same as polyester resin?',
      a: 'No. It\'s a separate reactive component, typically already present in supplied polyester resin at a proportion set by the manufacturer, and sometimes added separately to further adjust a resin system.',
    },
    {
      q: 'Does styrene monomer evaporate out of cured resin?',
      a: 'A meaningful portion reacts into the cured network rather than evaporating, which is why it\'s called a reactive diluent rather than a simple solvent — though some emission during processing, before cure, is a recognised handling consideration.',
    },
    {
      q: 'Why is styrene used instead of a non-reactive solvent?',
      a: 'Because it both reduces viscosity for processing and takes part in the curing reaction, contributing to the final cross-linked network rather than needing to fully evaporate away.',
    },
    {
      q: 'Does adding more styrene always make a resin easier to work with?',
      a: 'It generally reduces viscosity, but styrene content also affects cure behaviour and finished properties, so it\'s a balance rather than something to maximise freely.',
    },
    {
      q: 'Can I add styrene monomer to any polyester resin to thin it?',
      a: 'This should be checked against the specific resin\'s technical data or the resin manufacturer\'s guidance rather than assumed — styrene content is a formulation variable, not a free adjustment.',
    },
    {
      q: 'Does using less styrene monomer make my process "low-VOC"?',
      a: 'Not on its own — low-VOC resin systems are specifically formulated by the resin manufacturer, generally beyond simply reducing an additive. Confirm with your resin supplier if a low-emission formulation is required.',
    },
    {
      q: 'Why has my resin thickened since it arrived?',
      a: 'This can relate to storage conditions, including container seal integrity and storage duration. Compare against the resin\'s stated shelf life and storage guidance.',
    },
  ],
  relatedSlugs: [
    'styrene-monomer-storage-handling-safety',
    'styrene-and-polyester-cure-chemistry',
    'what-is-glass-fiber-chopped-strand-mat',
  ],
  recommendedLinks: [
    { href: '/products/styrene-monomer/', label: 'View Styrene Monomer', description: 'Request an industrial quote and current SDS.' },
    { href: '/products/unsaturated-polyester-resin/', label: 'View Unsaturated Polyester Resin', description: 'The resin system styrene is formulated into.' },
  ],
};

GUIDES['what-is-frp-mould-release-wax'] = {
  slug: 'what-is-frp-mould-release-wax',
  title: 'FRP Mould Release Wax: Complete Preparation and Release Guide',
  description:
    'What mould release / parting wax is, how to prepare and wax a mould, wax versus PVA, why parts stick, and how to plan mould care across a production run.',
  category: 'Product Guide',
  icon: 'info',
  publishDate: '2026-09-01',
  seo: {
    title: 'FRP Mould Release Wax: Preparation, Application and Troubleshooting',
    keywords: [
      'what is mould release wax',
      'frp parting wax',
      'frp mould release agent',
      'wax vs pva release agent',
      'frp part stuck to mould',
      'mould surface preparation frp',
    ],
    ogTitle: 'FRP Mould Release Wax: Complete Guide',
    ogDescription:
      'Mould release / parting wax creates a barrier layer on an FRP mould surface so cured composite parts release cleanly. Preparation, application, comparison and troubleshooting.',
  },
  quickFacts: {
    Function: 'Creates a release barrier between mould and moulded part',
    'Physical Form': 'Paste / wax, applied and buffed by hand',
    'Applied To': 'The mould surface, before gelcoat — never the finished part',
    'Context Here': 'Positioned specifically for FRP/composite mould preparation',
    'Not': 'A furniture, shoe or automotive detailing polish',
  },
  sections: [
    {
      heading: 'Why FRP moulding needs a release agent',
      body: [
        'In open-mould FRP fabrication, gelcoat and resin are applied directly against a mould surface, and once cured, the finished part needs to separate cleanly from that mould without sticking or damaging either the part\'s surface or the mould\'s own finish. Mould release wax is applied to the mould beforehand specifically to prevent that bond from forming — it creates a thin barrier layer on the mould surface that the cured composite doesn\'t adhere to.',
        'This is a functionally different job from a household furniture or automotive polish, even though both are wax-based products applied and buffed by hand. In this catalogue, this product is positioned specifically for the FRP mould-preparation role — not as a general household or automotive polish.',
      ],
    },
    {
      heading: 'Where it fits in the open-moulding sequence',
      body: [
        'In a standard open-moulding workflow, mould release wax is one of the earliest steps: the mould surface is prepared and cleaned, release wax is applied and buffed (with PVA sometimes added as an extra layer), and only once the release layer is properly established is gelcoat sprayed or brushed onto the mould face. Reinforcement and laminating resin follow once the gelcoat has reached a tack-free state, building up the structural laminate. After curing, the finished part is released from the mould using the release layer prepared at the start.',
        'Skipping or rushing the release-preparation step doesn\'t just risk a stuck part at the end — it can also affect gelcoat surface quality if the mould isn\'t properly prepared beforehand. Treating release preparation as a genuine first step in the process, not an afterthought before demoulding, is standard practice across FRP moulding.',
      ],
    },
    {
      heading: 'Mould surface preparation before waxing',
      body: [
        'A mould surface generally needs to be clean, dry and free of dust, old release residue or other contamination before fresh release wax is applied — contamination trapped under a wax layer can compromise how evenly the release film forms and how the finished part\'s surface turns out.',
        'Because a mould\'s surface finish transfers directly to the moulded part (the part is effectively a mirror image of the mould face), the mould\'s own polish quality is part of surface preparation too — a mould with fine scratches or defects will generally reproduce them on every part moulded from it.',
      ],
    },
    {
      heading: 'How to apply and buff release wax',
      body: [
        'Mould release wax is typically applied as a thin, even coat across the clean, dry mould surface, left to haze (the wax\'s carrier evaporating, leaving a thin film), and then buffed to a smooth finish before gelcoat is applied. A thin, even coat generally produces a more reliable release barrier than one heavy application — excess wax build-up can transfer unevenly onto the moulded surface rather than staying uniformly on the mould.',
        'Buffing isn\'t just cosmetic — it works the wax into a thin, even, well-bonded film on the mould surface rather than leaving it as a loose residue that could transfer onto the part. A clean buffing cloth, worked in a consistent pattern across the surface, helps achieve this evenness. Timing between application and buffing can vary by product and ambient conditions, so following the specific product\'s guidance is worthwhile.',
      ],
    },
    {
      heading: 'Preparing a new mould for its first release',
      body: [
        'A brand-new mould surface hasn\'t yet built up the release-film history that a mould already in regular production has — so first-time preparation typically involves multiple wax application-and-buff cycles to establish a reliable release barrier before the first part is ever moulded. This upfront investment is generally treated as worthwhile, since a failed first release can damage both the expensive new mould and the part.',
        'Some fabricators refer to this initial multi-coat process informally as "conditioning" or "seasoning" the mould — building up a dependable release surface before production begins. Once a mould has an established release history, care typically shifts to lighter, more routine maintenance between production runs.',
      ],
    },
    {
      heading: 'Wax vs PVA release agent',
      body: [
        'Wax release forms a semi-permanent, buffable film that can support multiple part releases across a production run before needing reapplication. PVA (polyvinyl alcohol) release agent is a different approach entirely — a liquid film sprayed or brushed onto the mould (often over a wax base) that acts as a sacrificial layer, generally intended for a single release before it\'s washed off and reapplied. Because PVA is water-soluble, it\'s typically removed with a water rinse after the part is released, whereas wax film is more durable and buffed rather than washed away between uses.',
        'PVA is sometimes used as an extra release layer over a wax base — particularly for a brand-new mould\'s first release, or for complex geometry where the fabricator wants additional insurance against sticking. This isn\'t universal practice, and whether it\'s warranted depends on the mould, the part\'s complexity, and the fabricator\'s own experience with that specific mould.',
      ],
    },
    {
      heading: 'Choosing a release approach for a given job',
      body: [
        'Is the mould new or already established in production? A new mould generally benefits from more thorough initial preparation. Is the part geometry simple and straightforward, or complex with undercuts, tight radii or fine detail where release risk is higher? More complex geometry is where some fabricators add a PVA layer over wax as extra insurance.',
        'And how long is the production run — a longer run may call for planning wax maintenance between cycles rather than a one-time application. There isn\'t one release approach that suits every job; the right one depends on the mould, part complexity and run length.',
      ],
    },
    {
      heading: 'Why parts stick, and how to prevent it',
      body: [
        'A part sticking to the mould is usually traced back to inadequate release coverage somewhere on the mould surface — a thin spot in the wax film, an area missed during application, wax that\'s worn thin after repeated releases without reapplication, or a mould surface defect the release film couldn\'t adequately cover. Reviewing the specific area where sticking occurred, rather than assuming the whole mould is at fault, is a reasonable first diagnostic step.',
        'Consistent, thorough wax application technique, a planned reapplication schedule as part of mould care between runs, and periodic inspection of the mould surface for wear or damage are the general practices that reduce release-failure risk over a production run.',
      ],
    },
    {
      heading: 'Mould care between production runs',
      body: [
        'A mould is a capital asset expected to produce many parts over its working life, and its release performance and surface finish quality both degrade gradually with use if not maintained. Between production runs, routine care generally includes cleaning any residue off the mould surface, inspecting for wear, scratches or damage, and reapplying release wax on a planned schedule rather than only when a release failure has already occurred.',
        'Fabricators running regular production typically build wax reapplication into their routine schedule — a set number of releases per wax cycle, or a fixed inspection interval — rather than reacting only after a sticking incident. This proactive approach generally costs less in downtime than dealing with a failed release mid-run.',
      ],
    },
    {
      heading: 'Large moulds: marine hulls and panel production',
      body: [
        'Marine hull moulds and large FRP panel moulds don\'t require a fundamentally different release approach from smaller parts — the same apply-and-buff wax principles apply — but the larger surface area makes consistent, even coverage more demanding, and inconsistency across a big surface is more likely to show up as a localised release problem in one area rather than across the whole part.',
        'For production runs turning out many panels or hulls from the same mould, mould care and a planned reapplication schedule become more operationally significant, since a release failure partway through a large or valuable part is costlier than on a small one.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is this the same as furniture or shoe polish?',
      a: 'No. In this catalogue, it\'s positioned specifically as an FRP mould release / parting wax for composite moulding tooling — not a furniture, shoe or automotive detailing product.',
    },
    {
      q: 'Does mould release wax go on the finished part or the mould?',
      a: 'It\'s applied to the mould surface, before gelcoat and lay-up begin — its job is to let the finished part release cleanly from the mould once cured.',
    },
    {
      q: 'Is one thick coat of wax better than several thin coats?',
      a: 'Generally not — a thin, even coat, properly buffed, tends to produce a more reliable release than one heavy application, which can leave uneven residue.',
    },
    {
      q: 'Why does a new mould need more wax coats than an established one?',
      a: 'A new surface hasn\'t built up a release-film history yet, so more thorough initial preparation reduces the risk of the first part sticking or damaging the mould.',
    },
    {
      q: 'Do I need PVA if I\'m already using wax release?',
      a: 'Not always — many production runs use wax release alone once a mould is established. PVA is more commonly added as extra insurance for a first release or complex geometry.',
    },
    {
      q: 'What\'s the most common cause of a part sticking to the mould?',
      a: 'Insufficient or uneven wax coverage on the mould surface — a thin spot, missed area, or worn release film after repeated uses without reapplication are the usual culprits.',
    },
    {
      q: 'Should wax be reapplied on a schedule or only after a problem occurs?',
      a: 'Many fabricators plan wax reapplication proactively — on a set schedule or after a certain number of releases — rather than waiting for a sticking failure to prompt it.',
    },
    {
      q: 'Does a scratched mould affect the finished part?',
      a: 'Yes — since the mould surface is essentially reproduced on the moulded part, defects in the mould\'s polish generally show up on every part made from it.',
    },
  ],
  relatedSlugs: [
    'selecting-brushes-for-resin-and-gelcoat-application',
    'what-is-gel-coat-resin',
    'resin-glossary',
  ],
  recommendedLinks: [
    { href: '/products/wax-polish/', label: 'View Wax Polish', description: 'FRP mould release / parting wax. Request an industrial quote.' },
    { href: '/products/gp-gelcoat-resin/', label: 'View GP Gelcoat Resin', description: 'The gelcoat applied after the release layer.' },
  ],
};

GUIDES['selecting-brushes-for-resin-and-gelcoat-application'] = {
  slug: 'selecting-brushes-for-resin-and-gelcoat-application',
  title: 'FRP Application Tools: Brushes, Rollers and Squeegees',
  description:
    'How to choose and use application brushes for resin and gelcoat, how brushes compare with rollers and squeegees, technique for corners and repairs, and what an open-moulding workshop should keep on hand.',
  category: 'Selection Guide',
  icon: 'checklist',
  publishDate: '2026-09-01',
  seo: {
    title: 'FRP Application Tools: Brushes, Rollers and Squeegees Explained',
    keywords: [
      'resin application brush',
      'gelcoat brush selection',
      'brush vs roller frp',
      'frp workshop tools',
      'hand lay up tools',
      'frp repair brush',
    ],
    ogTitle: 'FRP Application Tools: Brushes, Rollers and Squeegees',
    ogDescription:
      'How to choose the right application tool for resin, gelcoat, hand lay-up and FRP repair work — and why most workshops use a combination.',
  },
  quickFacts: {
    'Key Factors': 'Task (resin vs gelcoat), area size, and mould detail complexity',
    'Multiple Sizes': 'Most workshops keep a range of brush sizes for different tasks',
    'Brush / Roller / Squeegee': 'Different stages of the job, not competing choices',
    Consumable: 'Brushes used with catalysed resin are generally not reused indefinitely',
  },
  sections: [
    {
      heading: 'Matching the brush to the task',
      body: [
        'Resin and gelcoat application brushes are chosen primarily around the task at hand rather than a single universal choice: a wide brush covers large open areas of a mould efficiently, while a smaller detail brush gives better control around corners, edges and tight mould features where precision matters more than speed. Most FRP workshops keep a range of brush sizes on hand rather than relying on one brush for every job.',
        'Gelcoat application, in particular, often benefits from a brush suited to laying down a thin, even, bubble-free coat, since gelcoat becomes the visible finished surface.',
      ],
    },
    {
      heading: 'Brush vs roller vs squeegee',
      body: [
        'Brushes, rollers and squeegees each suit a different part of the hand lay-up process rather than being competing choices for the same task. A brush is typically used to get initial wet-out into corners, edges and detailed mould features where a roller can\'t reach effectively. A roller works well for consolidating resin across larger, flatter areas of reinforcement once it\'s roughly wetted out. A squeegee (or a ribbed laminating roller) is often used afterward to work out trapped air and remove excess resin, helping control laminate thickness and finish quality.',
        'Rather than choosing one tool for an entire job, many fabricators move between brush, roller and squeegee as the geometry of the part demands — brush for the tight spots a roller can\'t reach, roller for the open expanses, and a final consolidation pass to remove air and excess resin. Which combination makes sense depends on the specific mould geometry and the fabricator\'s own technique.',
      ],
    },
    {
      heading: 'Brush technique for hand lay-up and mould corners',
      body: [
        'Open, flat mould areas are relatively forgiving — a roller or brush working in broad strokes wets out reinforcement efficiently. Corners, radii and detailed mould features are where problems most often show up: air pockets can get trapped where reinforcement bridges a tight radius instead of conforming to it, and resin can pool in some spots while leaving others dry.',
        'A brush\'s precision is what makes it useful here — working resin into a corner with a stippling or dabbing motion, rather than a single sweeping pass, tends to press reinforcement into the mould detail and displace trapped air more effectively than a broad stroke.',
        'Good brush technique in tight areas is as much about working the reinforcement into the mould shape as it is about applying resin — reinforcement that bridges a corner rather than conforming to it leaves a void behind it regardless of how much resin is applied. Checking visually (and by feel, once trained) for full conformance in corners before moving on is standard practice.',
      ],
    },
    {
      heading: 'Brushes in FRP repair work',
      body: [
        'FRP repair — patching a damaged panel, tank wall or hull section — is typically smaller in scale and more localised than full production lay-up, which shifts the priority toward precision and control rather than covering a large area quickly. A brush suits this well, letting a fabricator work resin carefully into a prepared repair area, feather the edges of the patch, and work around irregular damage shapes that a roller isn\'t well suited to.',
        'In a typical repair sequence — preparing the damaged area, applying reinforcement patches, and wetting them out with resin — the brush is generally used at the wet-out stage, the same fundamental technique as production hand lay-up, just applied to a smaller, often irregularly shaped area.',
      ],
    },
    {
      heading: 'What an open-moulding workshop keeps on hand',
      body: [
        'Resin and reinforcement get most of the procurement attention in FRP work, but the application tools that get material onto the mould matter just as much for a good result — and are easy to under-order or overlook when planning a job or stocking a workshop. A basic open-moulding toolkit typically includes application brushes in a range of sizes, rollers for consolidating larger areas, a squeegee or ribbed laminating roller for working out air and excess resin, and a mould release agent such as a parting wax to prepare the mould surface before lay-up begins.',
        'Beyond size, practical workshop factors matter: having enough brushes on hand to avoid a mid-batch scramble when resin starts to gel, and keeping dedicated brushes for different resin and gelcoat systems where cross-contamination is a concern.',
      ],
    },
    {
      heading: 'Brush life, cleaning and replacement',
      body: [
        'Once resin has been catalysed and begins curing in a brush\'s bristles, it\'s difficult to fully remove — unlike water-based paint, which typically washes out cleanly. For this reason, many FRP workshops treat brushes used with catalysed resin as effectively a consumable item rather than something cleaned and reused indefinitely, budgeting for a working supply rather than expecting long brush life per unit.',
        'A brush with cured resin residue in its bristles doesn\'t apply a clean, even coat the way a fresh one does, and attempting to force reuse can compromise finish quality on visible surfaces like gelcoat. Where a brush is only used briefly with resin that hasn\'t yet begun to gel, some fabricators do clean brushes promptly with an appropriate solvent before cure sets in, extending usable life for lower-stakes tasks — but for critical surface work, many still prefer a fresh brush regardless.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Do I need different brushes for resin and gelcoat?',
      a: 'Many workshops do use different brushes for each, partly to avoid cross-contamination and partly because gelcoat application often benefits from a brush suited to a thin, even coat rather than bulk resin wet-out.',
    },
    {
      q: 'Can a roller replace a brush entirely?',
      a: 'Not usually — rollers are efficient over open, flat areas but struggle to reach mould corners, edges and detailed features the way a brush can. Most workshops use both.',
    },
    {
      q: 'What\'s the squeegee\'s role compared to the brush?',
      a: 'A squeegee (or ribbed roller) is typically used after initial wet-out with a brush or roller, to work out trapped air and control resin thickness — a different stage of the process, not a substitute for the brush.',
    },
    {
      q: 'Why do air pockets form in mould corners?',
      a: 'Reinforcement can bridge a tight corner or radius instead of fully conforming to it, trapping air behind it. Working the reinforcement into the shape with a brush, not just applying resin, helps address this.',
    },
    {
      q: 'What tools does a basic open-moulding setup need beyond resin and reinforcement?',
      a: 'At minimum: application brushes, a roller for larger areas, a squeegee or ribbed roller for consolidation, and a mould release agent for mould preparation.',
    },
    {
      q: 'Can resin brushes be cleaned and reused?',
      a: 'If cleaned promptly with an appropriate solvent before the resin cures, some reuse is possible for lower-stakes work — but many workshops treat catalysed-resin brushes as effectively consumable, especially for visible surface work like gelcoat.',
    },
  ],
  relatedSlugs: [
    'what-is-frp-mould-release-wax',
    'what-is-glass-fiber-chopped-strand-mat',
    'resin-glossary',
  ],
  recommendedLinks: [
    { href: '/products/paint-brushes/', label: 'View Paint Brushes', description: 'Request an industrial quote.' },
    { href: '/products/frp-allied-products/', label: 'FRP Allied Products', description: 'Brushes, release wax, fillers and workshop consumables.' },
  ],
};

GUIDES['what-is-mekp-hardener'] = {
  slug: 'what-is-mekp-hardener',
  title: 'MEKP Hardener: Catalyst Role, Systems and Procurement Guide',
  description:
    'What MEKP Hardener is, its published catalyst / initiator role in polyester, vinyl ester and gelcoat systems, and the published packaging, MOQ and shelf-life facts to check before requesting a quote.',
  category: 'Product Guide',
  icon: 'info',
  publishDate: '2026-08-06',
  seo: {
    title: 'MEKP Hardener: Catalyst, Systems and Buyer Checklist',
    keywords: [
      'MEKP Hardener',
      'MEKP Catalyst',
      'MEKP Initiator',
      'Polyester Resin Hardener',
      'FRP Hardener',
      'MEKP for gelcoat',
      'MEKP supplier',
    ],
    ogTitle: 'MEKP Hardener: Complete Buyer Guide',
    ogDescription:
      'A buyer guide to MEKP\'s published catalyst / initiator role in selected polyester-family resin systems, with the published commercial facts to check first.',
  },
  quickFacts: {
    'Product role': 'Catalyst / initiator, not a structural resin or reinforcement',
    'Published system context': 'UPR, vinyl ester and gelcoat systems',
    'Published packaging': '25 kg carboy',
    'Published MOQ': '25 kg',
    'Published unopened shelf life': '6 months',
    'Product document': 'MEKP Hardener TDS (Rev. 01, July 2026)',
  },
  sections: [
    {
      heading: 'One product role, several buyer terms',
      body: [
        'Industrial buyers may search for MEKP Hardener, MEKP Catalyst, MEKP Initiator, polyester resin hardener or FRP hardener. On this site, these terms describe MEKP\'s published catalyst / initiator role in selected unsaturated polyester, vinyl ester and gelcoat systems.',
        'MEKP is not a structural resin, Glass Fiber reinforcement, a mould-side gelcoat or a colour paste. Start by identifying the complete material-system requirement rather than treating a generic "hardener" request as enough product information.',
      ],
    },
    {
      heading: 'Why the base resin still comes first',
      body: [
        'The current MEKP data sheet publishes system context for unsaturated polyester resins, vinyl ester resins and gelcoats. The individual product page and TDS for the chosen resin remain the relevant references for that product role.',
        'Unsaturated Polyester Resin is a category, while GP Clear, GP White, GP Yellow and Lamination Resin are separate published product routes. The first buyer question is which resin role matches the component, not simply whether an MEKP hardener is required. Review the actual component, base resin grade and intended manufacturing context before requesting an MEKP quotation. This guide does not provide dosage, mixing, cure adjustment or handling instructions.',
      ],
    },
    {
      heading: 'Keeping the FRP material roles separate',
      body: [
        'The resin supplies the matrix role. Glass Fiber is the separate reinforcement material. Gelcoat is the separately selected mould-side surface product, and FRP Polyester Pigment is a separate colour component. A complete requirement identifies each role rather than treating them as one generic FRP material.',
        'Use the relevant product page and current TDS to define the base material, then discuss MEKP as the separate catalyst / initiator component in that documented system. Do not transfer process settings from one resin grade to another.',
      ],
    },
    {
      heading: 'MEKP in gelcoat systems',
      body: [
        'GP Gelcoat Resin is published as a mould-side polyester surface-coating product. MEKP Hardener is the separate catalyst / initiator component named in the current compatible-system context. They should not be compared as substitute products.',
        'Begin with the required component and visible surface role, then review the specific gelcoat product data before including MEKP in a system enquiry. The site\'s application guides cover FRP mould finishing, water-tank exteriors, boat and marine hull finishing, and bathware or sanitaryware — they provide component context but do not replace review of the current gelcoat and MEKP documentation.',
      ],
    },
    {
      heading: 'Published commercial facts',
      body: [
        'The current MEKP Hardener TDS is the product-specific reference for the published industrial-grade product. It identifies compatible system context, properties, packaging and commercial details. The listed values are typical, not performance guarantees. The TDS also contains safety information; this guide does not restate handling procedures.',
        'The current TDS publishes 25 kg carboy packaging, a 25 kg MOQ and a six-month unopened shelf life. These facts support a quote discussion but do not imply stock availability, lead time, sample policy or delivery commitment.',
      ],
    },
    {
      heading: 'MEKP quote checklist',
      body: [
        'State the base resin grade or gelcoat system, intended FRP component or application, expected quantity, production context if known, delivery location and any purchase specification. Attach or reference the relevant current product data where appropriate.',
        'Review the current MEKP TDS and the technical data for the base resin system before purchase. Do not assume another product\'s documentation applies.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is MEKP Hardener a resin?',
      a: 'No. MEKP Hardener is the separately selected catalyst / initiator component. The base resin, Glass Fiber, gelcoat and pigment have distinct roles.',
    },
    {
      q: 'Why is MEKP called a hardener, catalyst or initiator?',
      a: 'These terms describe its curing role in the selected resin system. They do not make MEKP interchangeable with the base resin or reinforcement.',
    },
    {
      q: 'Is MEKP Hardener the gelcoat itself?',
      a: 'No. MEKP is the separately selected catalyst / initiator. GP Gelcoat Resin is the published mould-side surface-finish product.',
    },
    {
      q: 'What commercial details are published for MEKP Hardener?',
      a: 'The current TDS publishes 25 kg carboy packaging, a 25 kg minimum order quantity and a six-month unopened shelf life. Confirm the actual commercial requirement when requesting a quotation.',
    },
    {
      q: 'Does this guide confirm MEKP for every polyester resin grade?',
      a: 'No. The product pages describe separate grades and roles. Confirm the actual resin product, current data and application before treating a system as appropriate.',
    },
    {
      q: 'What documentation should be reviewed before purchase?',
      a: 'Review the current MEKP TDS and the data for the actual base resin or gelcoat system. Do not assume another product\'s documentation applies.',
    },
  ],
  relatedSlugs: ['what-is-cobalt-octoate', 'epoxy-hardener-vs-mekp-hardener', 'understanding-gel-time-in-polyester-resin'],
  recommendedLinks: [
    { href: '/products/mekp-hardener/', label: 'View MEKP Hardener', description: 'Review published product details and the current TDS.' },
    { href: '/tds/mekp-hardener-tds.pdf', label: 'Download MEKP Hardener TDS', description: 'Use the current product document as the controlling reference.' },
    { href: '/products/unsaturated-polyester-resin/', label: 'Explore Unsaturated Polyester Resin', description: 'Start with the base resin-family role.' },
  ],
};

GUIDES['what-is-cobalt-octoate'] = {
  slug: 'what-is-cobalt-octoate',
  title: 'Cobalt Octoate: Accelerator Role, Chemistry and Handling Guide',
  description:
    'What cobalt octoate is, how accelerator, catalyst and initiator differ, the redox chemistry behind room-temperature polyester cure, how dosage relates to gel time, and why it is never stored with peroxide.',
  category: 'Product Guide',
  icon: 'info',
  publishDate: '2026-09-01',
  seo: {
    title: 'Cobalt Octoate: Polyester Resin Accelerator Explained',
    keywords: [
      'what is cobalt octoate',
      'cobalt octoate accelerator',
      'accelerator vs catalyst',
      'cobalt octoate vs mekp',
      'polyester resin accelerator',
      'cobalt free accelerator',
      'cobalt octoate storage',
    ],
    ogTitle: 'Cobalt Octoate: Complete Accelerator Guide',
    ogDescription:
      'Cobalt octoate is a metal-soap accelerator/promoter used with a peroxide catalyst to cure unsaturated polyester resin at room temperature.',
  },
  quickFacts: {
    'Chemical Class': 'Cobalt metal soap (cobalt carboxylate)',
    Role: 'Accelerator / promoter, not a catalyst on its own',
    'Used Alongside': 'A peroxide catalyst such as MEKP',
    'Typical Form': 'Liquid, added in small proportion to the resin',
    'Golden Rule': 'Never stored or mixed directly with peroxide catalyst',
  },
  sections: [
    {
      heading: 'A promoter, not a catalyst',
      body: [
        'Cobalt octoate belongs to a family of materials chemists call metal soaps — the octoate (2-ethylhexanoate) salt of cobalt, dissolved in a compatible carrier so it can be metered into resin in small proportion. On its own, cobalt octoate does not cure a polyester resin. Its job is to activate a separately added peroxide catalyst, which is why it is described as an accelerator or promoter rather than a catalyst or initiator.',
        'This distinction matters in procurement and in the workshop. Asking for "cobalt octoate" is not the same as asking for a hardener — a complete room-temperature cure system for unsaturated polyester resin normally needs three separate things: the resin itself, a peroxide catalyst (most commonly MEKP), and an accelerator such as cobalt octoate to get that peroxide working at ambient temperature instead of requiring external heat.',
      ],
    },
    {
      heading: 'Accelerator vs catalyst vs initiator',
      body: [
        'In FRP workshops, "hardener" is often used loosely to mean whatever gets added to resin to make it cure — but chemically, three distinct roles hide behind that one word. An initiator (also called a catalyst in this context, even though it\'s technically consumed in the reaction) is the substance that actually starts the polymerisation — for unsaturated polyester resin, this is almost always an organic peroxide such as MEKP. An accelerator, or promoter, doesn\'t start the reaction itself; it activates the initiator so the reaction proceeds fast enough at room temperature to be usable.',
        'Strictly, a true catalyst isn\'t consumed by the reaction it speeds up, which doesn\'t quite describe how MEKP behaves — but the label has stuck in FRP trade usage, so expect to hear "catalyst" and "hardener" both used for the peroxide component in everyday conversation.',
        'Because shop-floor language blurs these terms, a buyer asking a supplier for "hardener" without specifying which component can end up with the wrong material for their process — or with only half of what a working cure system actually needs. Naming the specific product avoids that confusion.',
      ],
    },
    {
      heading: 'How cobalt accelerators work: the redox mechanism',
      body: [
        'Unsaturated polyester resin cures through free-radical polymerisation — reactive sites in the resin (typically involving the styrene monomer dissolved in it) link together into a rigid, cross-linked network. That reaction needs to be triggered by free radicals, which come from the decomposition of an organic peroxide catalyst such as MEKP.',
        'Left at room temperature with no accelerator, most organic peroxides decompose slowly — workable for some processes, but far too slow for typical FRP shop-floor cycle times. Cobalt octoate changes that: the cobalt ion cycles between oxidation states in a redox (reduction-oxidation) reaction with the peroxide, dramatically speeding up the rate at which free radicals are generated, without needing to heat the resin. That is what makes ambient-temperature curing of polyester laminates practical at all.',
      ],
    },
    {
      heading: 'Cobalt octoate and MEKP: different roles, same system',
      body: [
        'Cobalt octoate and MEKP are almost always discussed together because a standard room-temperature cure of unsaturated polyester resin needs both — but they are chemically distinct products doing different jobs, not two versions of the same thing. MEKP is the peroxide catalyst that decomposes to generate the free radicals that actually start resin cross-linking. Cobalt octoate is the accelerator that makes that decomposition happen fast enough, at room temperature, to be practical for shop-floor cure times.',
        'Because neither one does the other\'s job, they can\'t substitute for each other. Ordering only MEKP without an accelerator (on a resin that isn\'t already pre-accelerated) means cure will be far slower than expected; ordering only cobalt octoate with no peroxide means the resin won\'t cure at all. Some resins are supplied already pre-accelerated, in which case only the peroxide catalyst is added at the point of use — check the specific resin\'s technical data.',
      ],
    },
    {
      heading: 'How dosage relates to gel time',
      body: [
        'Within the range a resin manufacturer recommends, increasing accelerator dosage generally speeds up gel time, and reducing it generally slows gel down — because dosage governs how quickly the redox reaction with the peroxide catalyst proceeds. This guide deliberately does not publish a specific dosage percentage or resulting gel-time figure, because that relationship is resin-specific: it depends on the exact resin formulation, the peroxide catalyst used, and ambient temperature at the time of curing.',
        'Pushing accelerator dosage higher to force a faster gel doesn\'t scale indefinitely — beyond a resin\'s recommended range, excess accelerator can contribute to problems like poor cure quality, discolouration or exotherm issues rather than a cleanly faster cure. Dosage is a balance to be tuned within a recommended range, alongside catalyst dosage and ambient temperature, rather than a single lever to push in one direction. Treat the resin\'s own technical data sheet as the authoritative reference.',
      ],
    },
    {
      heading: 'In hand lay-up work',
      body: [
        'In hand lay-up, reinforcement — typically chopped strand mat, sometimes with woven roving — is placed against a mould and resin is worked into it by roller or brush, often in multiple passes for a thicker laminate. Because this is a manual process, the fabricator needs a working window long enough to wet out the full reinforcement layer evenly before the resin begins to gel. Too short a window risks the resin starting to set before lay-up is finished, leaving dry patches or an uneven laminate; too long a window slows down mould turnaround and production throughput.',
        'A larger or more complex mould generally needs a longer working window than a small, simple part, since there\'s more surface area to wet out before the resin sets. Ambient temperature also shifts the picture — warmer conditions accelerate cure, so dosage or technique may need adjusting seasonally. Adjustments should be planned and tested against the resin\'s TDS rather than made ad hoc mid-batch.',
      ],
    },
    {
      heading: 'In gelcoat systems',
      body: [
        'Gelcoat is applied first, against the mould face, and becomes the visible outer surface of the finished FRP part once demoulded — so how it cures affects appearance directly, not just production speed. An accelerator/catalyst balance that\'s off can show up as tackiness, poor gloss, print-through of the reinforcement pattern beneath it, or a surface that isn\'t fully cured by the time lamination resin is applied over it.',
        'Gelcoat is normally allowed to reach a tack-free state before the structural laminate is built up behind it — applying reinforcement and resin too early, before the gelcoat has cured enough, or too late, after it has fully hardened and lost surface tack, can both affect how well the two layers bond. The specific product and dosage should follow the gelcoat manufacturer\'s technical data.',
      ],
    },
    {
      heading: 'Cobalt-free accelerator chemistries',
      body: [
        'Cobalt octoate has long been the standard accelerator for peroxide-cured unsaturated polyester resin, but it isn\'t the only chemistry used across the industry — some resin formulations and regions specify cobalt-free accelerator systems instead, generally for reasons tied to specific regulatory, formulation or supply-chain considerations that sit with the resin manufacturer rather than the accelerator buyer.',
        'For a buyer, the practical question isn\'t "which is generally better" — it\'s which accelerator chemistry the specific resin system in use is formulated and specified to work with. Substituting accelerator chemistry outside a resin\'s stated compatibility isn\'t something to do without confirming with the resin manufacturer first.',
      ],
    },
    {
      heading: 'Storage and handling: why separation is the central rule',
      body: [
        'The single most important handling principle for a cobalt accelerator is that it must never be mixed directly, in concentrated form, with a peroxide catalyst such as MEKP. Accelerator and peroxide reacting together outside the controlled, diluted context of curing resin can be hazardous — this is why the two are always stored, dispensed and handled as separate components, added to the resin one at a time, never pre-combined as standalone concentrates.',
        'In practice, this means keeping accelerator and peroxide in physically separate storage areas, using separate, clearly labelled dispensing equipment for each, and never topping up one container with residue from the other.',
        'Like most reactive industrial chemicals, cobalt accelerators are generally best kept in a cool, dry, well-ventilated area, away from direct sunlight and heat sources, in tightly sealed original containers. This guide covers general principles only — always read and follow the product\'s current Safety Data Sheet (SDS) for complete handling, storage, PPE and emergency guidance before use.',
      ],
    },
    {
      heading: 'What to confirm before ordering',
      body: [
        'Because cobalt octoate only makes sense in the context of a complete cure system, the most useful starting point for a buyer is the resin it will be used with — the resin manufacturer\'s technical data sheet is where compatible accelerator and catalyst guidance, and dosage ranges, should come from. It\'s also worth confirming which peroxide catalyst the accelerator will be paired with.',
        'When requesting a quote, share the base resin system or grade, the peroxide catalyst you intend to pair it with, your typical batch size or process (hand lay-up, gelcoat), expected quantity and delivery location. Request the current Safety Data Sheet (SDS) for correct storage, handling and PPE guidance before the product arrives on site.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is cobalt octoate the same as MEKP?',
      a: 'No. MEKP (methyl ethyl ketone peroxide) is the peroxide catalyst that actually initiates cure; cobalt octoate is the accelerator that activates the peroxide at room temperature. They are two separate materials with two separate roles.',
    },
    {
      q: 'Can a polyester resin cure with cobalt octoate alone?',
      a: 'No. Cobalt octoate has no independent curing action — it accelerates a peroxide catalyst\'s decomposition. Without a peroxide present, adding cobalt octoate to resin will not initiate cure.',
    },
    {
      q: 'Can I use extra MEKP instead of adding cobalt octoate?',
      a: 'No. Using more peroxide doesn\'t substitute for the accelerator\'s role — without an accelerator (or a resin that\'s already pre-accelerated), cure at room temperature will still be impractically slow regardless of peroxide dosage.',
    },
    {
      q: 'Is it safe to store cobalt octoate and MEKP together?',
      a: 'No — accelerator and peroxide catalyst should always be stored, handled and mixed separately. Many workshops keep them in entirely separate storage areas as an added precaution, on top of never mixing them directly.',
    },
    {
      q: 'Where do I find the correct accelerator dosage for my resin?',
      a: 'In that specific resin\'s technical data sheet (TDS), published by its manufacturer. Dosage is resin-specific and shouldn\'t be assumed from a different product or a general rule of thumb.',
    },
    {
      q: 'Is heat still needed if a cobalt accelerator is used?',
      a: 'No — that\'s the point of using an accelerator. It\'s what allows unsaturated polyester resin to cure at ambient workshop temperature without an external heat source, which is standard for most FRP hand lay-up and spray-up work.',
    },
    {
      q: 'Can I use a cobalt-free accelerator with any polyester resin?',
      a: 'Not automatically — accelerator compatibility depends on how the specific resin is formulated. Confirm with the resin manufacturer before substituting one accelerator chemistry for another.',
    },
    {
      q: 'What should I tell a supplier when requesting a cobalt accelerator quote?',
      a: 'Share the base resin system or grade, the peroxide catalyst you intend to pair it with, your typical batch size or process (e.g. hand lay-up, gelcoat), expected quantity and delivery location.',
    },
  ],
  relatedSlugs: [
    'what-is-mekp-hardener',
    'understanding-gel-time-in-polyester-resin',
    'how-temperature-affects-polyester-cure',
    'troubleshooting-polyester-cure-speed',
  ],
  recommendedLinks: [
    { href: '/products/cobalt-octoate/', label: 'View Cobalt Octoate', description: 'Review the product page and request an industrial quote.' },
    { href: '/products/mekp-hardener/', label: 'View MEKP Hardener', description: 'The peroxide catalyst typically used alongside cobalt octoate.' },
  ],
};

GUIDES['what-is-glass-fiber-chopped-strand-mat'] = {
  slug: 'what-is-glass-fiber-chopped-strand-mat',
  title: 'Glass Fiber (E-Glass CSM): Reinforcement, Compatibility and Procurement Guide',
  description:
    'What E-Glass Chopped Strand Mat is, how reinforcement differs from resin, the published CSM 300 and CSM 450 range, resin-system compatibility, and the published packaging, MOQ and storage facts.',
  category: 'Reinforcement Guide',
  icon: 'info',
  publishDate: '2026-08-06',
  seo: {
    title: 'Glass Fiber E-Glass Chopped Strand Mat: Complete Buyer Guide',
    keywords: [
      'Glass Fiber',
      'Fiberglass Mat',
      'E-Glass Fiber',
      'Chopped Strand Mat',
      'CSM 300',
      'CSM 450',
      'FRP Glass Fiber',
      'glass fiber resin compatibility',
    ],
    ogTitle: 'Glass Fiber (E-Glass CSM): Complete Guide',
    ogDescription:
      'Understand E-Glass Chopped Strand Mat as FRP reinforcement, including the published Samrat Poly Resins CSM 300 and CSM 450 range, compatibility and procurement facts.',
  },
  quickFacts: {
    'Published product form': 'Chopped Strand Mat (CSM)',
    'Published glass type': 'E-Glass',
    'Published area weights': '300 g/m² and 450 g/m²',
    'Published roll width': '1040 mm, approximately 30 kg/roll',
    'Published MOQ': '500 kg',
    'Published shelf life': '24 months',
  },
  sections: [
    {
      heading: 'Glass Fiber is the reinforcement part of an FRP laminate',
      body: [
        'Glass Fiber, also written fiberglass, is a reinforcement material used in fibre-reinforced plastic (FRP) manufacture. It is distinct from the resin: the mat contributes reinforcement, while the resin is selected separately to bind the reinforcement into a finished composite.',
        'This distinction matters during procurement. A request for "fiberglass resin" can combine two separate decisions: the reinforcement form and weight, and the resin product role. The published Samrat Poly Resins Glass Fiber listing covers the reinforcement side of that discussion.',
      ],
    },
    {
      heading: 'What E-Glass and Chopped Strand Mat mean',
      body: [
        'The current Glass Fiber TDS identifies the material as E-Glass Chopped Strand Mat (CSM). Chopped Strand Mat is a non-woven mat made from chopped glass strands held together with a binder; the current product data lists a 50 mm fibre length and polyester-compatible sizing.',
        'E-Glass describes the published glass type. It should not be confused with a resin chemistry, a gelcoat, a finished FRP component or an assurance of finished-laminate performance. The finished part depends on the full approved material system and the component design.',
      ],
    },
    {
      heading: 'The published CSM range',
      body: [
        'Samrat Poly Resins currently publishes two Glass Fiber mat weights: CSM 300 at 300 g/m² and CSM 450 at 450 g/m². Both are supplied as E-Glass Chopped Strand Mat; the TDS lists 1040 mm roll width, approximately 30 kg roll weight and a 500 kg minimum order quantity.',
        'No other reinforcement form should be assumed from this listing. In particular, woven roving, continuous roving, carbon fibre and other glass-mat types are not presented as Samrat Poly Resins products.',
      ],
    },
    {
      heading: 'Reinforcement, resin and gelcoat have different jobs',
      body: [
        'Glass Fiber Mat is the reinforcement material. Polyester or vinyl ester resin is selected separately to bind the reinforcement into a laminate. Gelcoat, where required, is a different mould-facing surface product. Treating these materials as interchangeable can lead to an unclear quotation or the wrong product-role discussion.',
        'The current Glass Fiber data identifies a polyester-compatible sizing, and the TDS lists compatibility with Unsaturated Polyester Resin, Vinyl Ester and epoxy systems. This identifies the compatibility discussion; it does not approve a specific formulation, mix, application setting or finished-component performance.',
      ],
    },
    {
      heading: 'Choosing the resin side of the system',
      body: [
        'For a general FRP resin context, review GP Clear Resin or the parent Unsaturated Polyester Resin page. GP White Resin has its own published water-white general-purpose role. Lamination Resin has separate published bonding and lamination contexts. Vinyl Ester Resin is the page to review where the project has a stated chemical- or corrosion-resistance requirement.',
        'GP Gelcoat Resin should be reviewed when the requirement is a mould-facing surface layer. It is not the structural reinforcement or a substitute for the resin selected for the laminate behind that surface.',
      ],
    },
    {
      heading: 'Component context: sheets, tanks, panels and doors',
      body: [
        'Glass Fiber selection is clearer when the intended FRP component is known. The existing Samrat Poly Resins application guides provide component context for roofing sheets, water tanks, panels, doors, general moulded products and hand lay-up. These guides support discovery; they are not a universal reinforcement specification.',
        'Each component has its own geometry, reinforcement build-up and finished-product requirement, so a material enquiry should name the specific component rather than rely on a broad "FRP glass fibre" request. The site does not publish a universal CSM 300 or CSM 450 assignment, a layer count, a resin-to-glass ratio or a finished-system classification.',
      ],
    },
    {
      heading: 'Fire retardant systems: still two separate roles',
      body: [
        'A Fire Retardant Resin enquiry concerns the resin or matrix component. A Glass Fiber enquiry concerns reinforcement. Both may be relevant to an FRP system, but neither product page alone defines a finished laminate or project result.',
        'The site lists Glass Fiber as a separate product and provides an FR Resin TDS for the listed Fire Retardant grade. It does not publish a universal reinforcement selection, layer count, resin-to-glass ratio or finished-system fire classification. Identify the finished part, the fire-performance requirement if any, and the required documentation when discussing such a system.',
      ],
    },
    {
      heading: 'Storage and published commercial details',
      body: [
        'The current listing publishes roll packaging, approximately 30 kg per roll and a 500 kg MOQ. Include the total required quantity and delivery location in the enquiry. This supports a commercial discussion without implying an unlisted lead time, stock position, sample policy or delivery promise.',
        'The current TDS publishes a 24-month shelf life and advises storage in a cool, dry area away from moisture and direct sunlight. Keep the product, batch or roll identification, receipt date, container condition and storage history with the procurement record. Do not transfer specifications, package dimensions, binder information or suitability statements from another supplier\'s mat to this product.',
      ],
    },
    {
      heading: 'Glass Fiber quote checklist',
      body: [
        'State the CSM 300 or CSM 450 requirement, intended FRP component, resin system under review if known, expected quantity, delivery location and any drawing or purchase specification. This helps distinguish the reinforcement request from the separate resin, surface-finish and component-design decisions.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is Glass Fiber the same as resin?',
      a: 'No. Glass Fiber is the reinforcement material. Resin is the separate liquid system that binds the reinforcement into the finished FRP laminate.',
    },
    {
      q: 'What is Samrat Poly Resins\' published Glass Fiber product?',
      a: 'The published product is industrial-grade E-Glass Chopped Strand Mat (CSM) with polyester-compatible sizing, available in 300 g/m² and 450 g/m² area weights.',
    },
    {
      q: 'Which resin systems are named in the Glass Fiber TDS?',
      a: 'The current Glass Fiber TDS lists UPR, Vinyl Ester and epoxy systems under binder compatibility. Confirm the final material system against the current product data and the specific component requirement.',
    },
    {
      q: 'Can one CSM weight be assigned to every FRP application?',
      a: 'No. The site documents component and process contexts but does not publish a universal CSM 300 or CSM 450 assignment. Confirm the applicable drawing and reinforcement build-up.',
    },
    {
      q: 'What packaging and MOQ are published for Glass Fiber Mat?',
      a: 'The product is published as 1040 mm rolls at approximately 30 kg per roll, with a 500 kg minimum order quantity. Confirm the current commercial requirement when requesting a quotation.',
    },
    {
      q: 'What storage information is published?',
      a: 'The current TDS states a 24-month shelf life and advises cool, dry storage away from moisture and direct sunlight.',
    },
    {
      q: 'Is Gelcoat a replacement for Glass Fiber Mat?',
      a: 'No. Gelcoat is a separate mould-side surface-coating product. It does not replace the reinforcement role of Glass Fiber Mat in an FRP laminate.',
    },
  ],
  relatedSlugs: ['csm-300-vs-csm-450-glass-fiber', 'what-is-styrene-monomer', 'selecting-brushes-for-resin-and-gelcoat-application'],
  recommendedLinks: [
    { href: '/products/fibre-glass-mat/', label: 'View Glass Fiber Mat', description: 'Review the published CSM 300 and CSM 450 product data and download the TDS.' },
    { href: '/tds/fibre-glass-mat-tds.pdf', label: 'Download Glass Fiber TDS', description: 'Use the current published technical data as the controlling product reference.' },
    { href: '/products/unsaturated-polyester-resin/', label: 'View the UPR product hub', description: 'Use the parent product page to understand the separate resin-side decision.' },
  ],
};

GUIDES['what-is-frp-polyester-pigment'] = {
  slug: 'what-is-frp-polyester-pigment',
  title: 'FRP Polyester Pigment: Colour Paste Role, Compatibility and Procurement',
  description:
    'What FRP polyester pigment paste is, its published UPR, vinyl ester and gelcoat system context, where it is used, how it differs from a pre-pigmented resin grade, and the published packaging, MOQ and storage facts.',
  category: 'Product Guide',
  icon: 'info',
  publishDate: '2026-08-06',
  seo: {
    title: 'FRP Polyester Pigment: Colour Paste Buyer Guide',
    keywords: [
      'FRP Polyester Pigment',
      'Polyester Pigment Paste',
      'FRP Colour Paste',
      'Pigment for Polyester Resin',
      'Resin Pigment',
      'pigment for gelcoat',
    ],
    ogTitle: 'FRP Polyester Pigment: Complete Guide',
    ogDescription:
      'A buyer guide to the published role of polyester pigment paste in FRP, resin and gelcoat material systems, with compatibility and procurement facts.',
  },
  quickFacts: {
    'Published product form': 'Polyester pigment paste for FRP',
    'Published system context': 'UPR, vinyl ester and gelcoat systems',
    'Published packaging': '10 kg bottles',
    'Published MOQ': '100 kg',
    'Published storage': 'Cool, dry conditions at 15–30°C; protect from direct sunlight',
    'Published unopened shelf life': '12 months',
  },
  sections: [
    {
      heading: 'A colour component for an FRP material system',
      body: [
        'FRP Polyester Pigment is the published Samrat Poly Resins product for adding colour within an FRP material-system discussion. It is supplied as a polyester pigment paste for FRP; it is not the structural resin, Glass Fiber reinforcement or finished gelcoat layer itself.',
        'This distinction helps a buyer begin with the right question. First define the component and the required appearance, then identify the resin or gelcoat system being considered, and finally review whether the published pigment product is appropriate for that system.',
      ],
    },
    {
      heading: 'The several names buyers use for the same role',
      body: [
        'Industrial buyers may use several terms for the same product role: FRP polyester pigment, polyester pigment paste, FRP colour paste or resin pigment. The useful procurement detail is not the label alone; it is the actual base system, intended component, shade reference if known and the expected finished appearance.',
        'The current product data publishes use with unsaturated polyester resin, vinyl ester and gelcoat systems. It does not make a universal compatibility statement, so the base system should be identified rather than assumed from a generic pigment-paste request.',
      ],
    },
    {
      heading: 'Keep the colouring decision separate from the resin decision',
      body: [
        'A GP, Lamination, Gelcoat or Vinyl Ester product has its own published role. Pigment selection does not replace selection of the underlying resin or surface-finish material. For an FRP buyer, the practical route is to review the component requirement, choose the relevant base material, then discuss the colour requirement against that documented system.',
        'Where a visible mould-side surface is required, review the Gelcoat product role as well as the pigment discussion. Where the requirement is a pre-coloured resin grade rather than a pigment-paste system, review the relevant product data instead of assuming the two choices are interchangeable.',
      ],
    },
    {
      heading: 'Published application contexts',
      body: [
        'Samrat Poly Resins publishes FRP Polyester Pigment application context for FRP tanks and pipes, gelcoats for boat and automotive applications, decorative and architectural panels, and electrical enclosures. These are useful starting points because the component and required appearance affect the material-system discussion.',
        'The list does not mean that one pigment selection or one appearance outcome applies across every product. A tank, panel, enclosure and moulded surface each need their own requirement review. For these contexts, a buyer should state the required appearance, whether a visible surface is involved, the base system under review and the component type.',
      ],
    },
    {
      heading: 'Compatibility: a starting point, not a blanket approval',
      body: [
        'The FRP Polyester Pigment product information publishes compatibility context for unsaturated polyester resin, vinyl ester and gelcoat systems. This helps frame the right technical question, but it is not a blanket statement that every pigment is suitable for every product within those families.',
        'GP Clear, GP White, GP Yellow and Lamination Resin are separate published product roles. A buyer can use those pages to understand the underlying resin requirement, but should not treat a product-family name as a substitute for checking the actual material system. Avoid relying on a supplier, product family or prior project alone as proof that a pigment system is appropriate for a different component or base material.',
      ],
    },
    {
      heading: 'Pigment paste vs a pre-pigmented resin grade',
      body: [
        'One buyer may need to discuss a polyester pigment paste within a defined FRP material system. Another may be evaluating an existing pre-pigmented polyester-resin grade. These are not interchangeable product descriptions, even when the finished component is intended to have colour.',
        'Samrat Poly Resins publishes FRP Polyester Pigment as a pigment-paste product and Sheet Grade Yellow Resin as a separate product. Start by identifying which product role matches the actual requirement. Where the buyer is considering a published pre-pigmented resin grade, review that product page and its TDS on their own terms — do not infer its technical properties, use cases or availability from the pigment-paste page.',
      ],
    },
    {
      heading: 'Storage and published commercial details',
      body: [
        'The current listing publishes 10 kg bottle packaging and a 100 kg MOQ. Include the expected quantity and delivery location in the enquiry. This supports a commercial discussion without implying an unlisted stock position, lead time, sample policy or delivery promise.',
        'The current TDS publishes storage at 15–30°C in cool, dry conditions with protection from direct sunlight, plus a 12-month unopened shelf life. Keep receipt, container and storage records with the material. Do not transfer dosage, colour, compatibility or performance information from a different supplier\'s pigment paste to this material.',
      ],
    },
    {
      heading: 'FRP pigment quote checklist',
      body: [
        'State the intended FRP component, the resin or gelcoat system under review if known, required colour reference or appearance requirement, expected quantity and delivery location. Include any purchase specification or approved visual reference where available. This makes the colour-paste discussion more precise without replacing product-specific technical review.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is FRP Polyester Pigment the same as polyester resin?',
      a: 'No. The published product is a polyester pigment paste for FRP. It is a colour component within a material system, whereas a resin grade has a separate product role.',
    },
    {
      q: 'Can pigment paste be assumed compatible with every resin?',
      a: 'No. The product page publishes UPR, vinyl ester and gelcoat system context, but the actual base system and application should be confirmed before a requirement is finalised.',
    },
    {
      q: 'Is a pre-pigmented resin the same product as pigment paste?',
      a: 'No. They are separate product roles. The appropriate route depends on the component, base resin requirement and finished-appearance requirement.',
    },
    {
      q: 'What commercial details are published for FRP Polyester Pigment?',
      a: 'The current product data publishes 10 kg bottle packaging and a 100 kg MOQ. Confirm the actual commercial requirement when requesting a quotation.',
    },
    {
      q: 'What storage information is published?',
      a: 'The current TDS publishes cool, dry storage at 15–30°C, protection from direct sunlight and a 12-month unopened shelf life.',
    },
    {
      q: 'Can a buyer request pigment for a gelcoat application?',
      a: 'The published pigment product includes gelcoat-system context. Share the gelcoat product, component and appearance requirement so the actual system can be reviewed.',
    },
  ],
  relatedSlugs: ['polyester-pigment-paste-vs-gelcoat', 'frp-colour-variation-buyer-checklist', 'what-is-gel-coat-resin'],
  recommendedLinks: [
    { href: '/products/frp-polyester-pigment/', label: 'View FRP Polyester Pigment', description: 'Review the published product information, colour range context and Technical Data Sheet.' },
    { href: '/tds/frp-polyester-pigment-tds.pdf', label: 'Download FRP Polyester Pigment TDS', description: 'Use the current published data as the controlling product reference.' },
    { href: '/products/gp-gelcoat-resin/', label: 'View GP Gelcoat Resin', description: 'Review the separate surface-finish product role.' },
  ],
};

// --- The two guides below already ranked. They are EXTENDED with the content
// --- of the thin articles redirected into them, not rewritten from scratch:
// --- every original section is preserved verbatim and new sections appended.

GUIDES['what-is-lamination-resin'] = {
  slug: 'what-is-lamination-resin',
  title: 'What is Lamination Resin (LR Resin)?',
  description:
    'A buyer guide to Lamination Resin, also called LR Resin, for door, plywood and FRP bonding work — including the published application contexts and what to verify before purchase.',
  category: 'Technical Explainer',
  icon: 'layers',
  publishDate: '2026-08-06',
  seo: {
    title: 'What is Lamination Resin (LR Resin)? | Buyer Guide',
    keywords: [
      'what is Lamination Resin',
      'LR Resin',
      'LR resin price',
      'polyester lamination resin',
      'Lamination Resin manufacturer',
      'resin for FRP lamination',
      'door lamination resin',
      'plywood lamination resin',
    ],
    ogTitle: 'What is Lamination Resin (LR Resin)?',
    ogDescription:
      'Understand the published role, applications and buyer checks for Samrat Poly Resins Lamination Resin.',
  },
  quickFacts: {
    'Published resin type': 'Transparent orthophthalic unsaturated polyester',
    'Published applications': 'Door lamination, plywood lamination and FRP bonding',
    'Published gel time': '5 minutes',
    'Buyer check': 'Confirm the substrate, process, finish requirement and TDS before selection',
  },
  sections: [
    {
      heading: 'The simple definition',
      body: [
        'Lamination Resin, also known as LR Resin, is the product name used by Samrat Poly Resins for its transparent orthophthalic unsaturated polyester grade positioned for door lamination, plywood lamination and FRP bonding. It is a liquid, room-temperature-cure resin grade with published technical data for procurement and production review.',
        'The product name is a useful starting point, not a substitute for process review. A buyer should match the grade to the substrate, reinforcement, finished-surface requirement and working conditions before finalising a requirement.',
      ],
    },
    {
      heading: 'Where this LR Resin is positioned',
      body: [
        'The published applications include door skin and decorative door panels, plywood and laminate bonding for furniture surfaces, FRP bonding and composite-panel lamination, plus clear-finish hand lay-up work. These application descriptions help production and procurement teams start with the intended component rather than a generic resin label.',
      ],
    },
    {
      heading: 'Published application contexts',
      body: [
        'For lamination buyers, the useful first question is what is being made: a door panel, plywood or furniture surface, a bonded FRP component, or a clear-finish hand lay-up part. The published Lamination Resin applications give a practical starting point for this conversation.',
      ],
      subsections: [
        {
          heading: 'Door skins and decorative door panels',
          body: 'Lamination Resin is published for door skin lamination and decorative door panels. Review the door substrate, finish requirement and working method alongside the product data before selection.',
        },
        {
          heading: 'Plywood and furniture surfaces',
          body: 'The product is also positioned for plywood and laminate bonding for furniture surfaces. Use the existing decorative plywood and furniture-lamination guides to frame the application discussion.',
        },
        {
          heading: 'FRP bonding and composite panels',
          body: 'For FRP bonding and composite-panel lamination, confirm the reinforcement, part geometry, process and intended service conditions rather than relying on the word FRP alone.',
        },
        {
          heading: 'Clear-finish hand lay-up work',
          body: 'Clear-finish hand lay-up is a published product application. Compare the TDS and the actual working window with the production setup before committing to a grade.',
        },
      ],
    },
    {
      heading: 'How LR Resin differs from a broad GP selection',
      body: [
        'A process described as lamination can mean a general FRP lay-up or a specific door, plywood or bonding requirement. The published Lamination Resin positioning is for the latter set of lamination-focused contexts, while GP Clear Resin is the broader general-purpose grade to review for common FRP manufacture. The component, substrate and working window should lead the comparison rather than the word "lamination" alone.',
        'A broad general FRP requirement may call for GP Clear Resin; a chemical- or corrosion-resistance requirement should be reviewed against Vinyl Ester Resin; and a mould-facing decorative surface has a different role from Gelcoat Resin. The right choice depends on the finished part and specified requirement, not on a broad product category alone.',
      ],
    },
    {
      heading: 'What to verify before purchase',
      body: [
        'Review the product TDS and the published product details alongside the actual line conditions. For a quotation or technical discussion, provide the component, substrate or reinforcement, process, expected quantity, packaging preference and delivery location.',
        'Do not assume that a resin described as suitable for lamination is appropriate for every FRP, surface-coating or chemical-exposure requirement.',
      ],
    },
  ],
  faqs: [
    {
      q: 'What does LR Resin mean?',
      a: 'LR Resin is the short name used here for Lamination Resin. Samrat Poly Resins publishes this grade for door lamination, plywood lamination and FRP bonding work.',
    },
    {
      q: 'Is Lamination Resin the same as every general-purpose polyester resin?',
      a: 'Not automatically. Both are polyester-resin products, but selection should begin with the published product purpose and the actual manufacturing process. Compare the TDS before choosing a grade.',
    },
    {
      q: 'Can Lamination Resin be considered for door skins?',
      a: 'Door skin lamination and decorative door panels are published applications for this product. Check the relevant application, finish and process details before final selection.',
    },
    {
      q: 'Is Lamination Resin used only for wood-based lamination?',
      a: 'No. The published applications also include FRP bonding and composite-panel lamination, as well as clear-finish hand lay-up work.',
    },
    {
      q: 'What should a buyer share before requesting an LR Resin quote?',
      a: 'Share the finished component, substrate or reinforcement, process, expected quantity, packaging preference and delivery location.',
    },
  ],
  relatedSlugs: [
    'gp-resin-vs-lamination-resin',
    'lamination-resin-for-hand-lay-up',
    'understanding-gel-time-in-polyester-resin',
    'how-to-select-polyester-resin-for-frp-manufacturing',
  ],
  recommendedLinks: [
    { href: '/products/lamination-resin/', label: 'View Lamination Resin', description: 'Review the published TDS, packaging and procurement details.' },
    { href: '/applications/door-lamination/', label: 'Door lamination guide', description: 'Explore one of the published application contexts.' },
    { href: '/tools/resin-selector/', label: 'Find the right grade', description: 'Answer four questions and see the grades that match.' },
  ],
};

GUIDES['what-is-gel-coat-resin'] = {
  slug: 'what-is-gel-coat-resin',
  title: 'What is Gel Coat Resin?',
  description:
    'Understand Gelcoat Resin as the visible, mould-facing surface layer in an FRP build-up, how it differs from laminating resin and from epoxy systems, where it is used, and what to confirm before procurement.',
  category: 'Product Guide',
  icon: 'layers',
  publishDate: '2026-07-18',
  seo: {
    title: 'What is Gel Coat Resin? FRP Surface Finish Explained',
    keywords: [
      'what is gel coat resin',
      'gelcoat resin',
      'gel coat resin',
      'gelcoat vs epoxy resin',
      'gelcoat applications frp',
      'FRP surface finish resin',
    ],
    ogTitle: 'What is Gel Coat Resin?',
    ogDescription:
      'Gel coat resin is the visible, mould-facing surface layer of an FRP part — distinct from the laminating resin behind it.',
  },
  quickFacts: {
    'Resin Type': 'Surface-coating unsaturated polyester resin, thickened and pigmentable',
    Applied: 'First, into the open mould — before lamination begins',
    'Not': 'A laminating or structural resin — it isn\'t reinforced with glass fibre',
    'Typical Thickness': 'Applied as a thin, even coat — check the product\'s TDS for the recommended range',
  },
  sections: [
    {
      heading: 'What Is Gel Coat Resin?',
      body: [
        'Gel coat resin is a specialised unsaturated polyester surface coating placed against the mould face of an FRP part, rather than used to build the reinforced structural laminate. Because it cures against the mould surface, it becomes the visible face once the part is demoulded.',
        'The exact product data matters. Samrat Poly Resins publishes GP Gelcoat Resin as a white, high-gloss polyester surface-coating grade with 11,000 cPs viscosity, thixotropic behaviour and an 8.5-minute gel time. These published details describe a mould-side coating role; they should not be transferred to a GP or laminating resin.',
        'Gelcoat carries no glass-fibre reinforcement of its own. The laminate and reinforcement behind it remain a separate selection and process discussion.',
      ],
    },
    {
      heading: 'How Gel Coat Differs From Laminating Resin',
      body: [
        'The distinction is role. GP Clear Resin and Lamination Resin are reviewed where the requirement is to wet out reinforcement, build a laminate or bond a substrate. GP Gelcoat Resin is reviewed where the requirement is the visible mould-side surface.',
        'The published GP Gelcoat Resin is thixotropic for its mould-side application. Its viscosity, gel time, application sequence and mould condition should be checked against the TDS; do not treat a surface-coating grade as an automatic substitute for a laminating or bonding grade.',
        'An FRP build-up can involve both surface and laminate decisions. The product data and actual manufacturing sequence should determine when lamination begins, rather than a generic timing rule.',
      ],
    },
    {
      heading: 'Gelcoat compared with an epoxy system',
      body: [
        'The useful first question is whether the buyer needs a mould-facing surface finish, a structural laminate, a casting system, an adhesive function or another specific role. GP Gelcoat Resin is published for the surface-coating role in FRP moulding; epoxy systems are a separate category with their own grade-specific uses. Treating broad material names as direct substitutes can obscure the actual requirement.',
        'An epoxy-system discussion may be relevant when an application specifically calls for an epoxy grade or a different resin-system approach. The correct grade, cure method, reinforcement, surface preparation and service environment need to be verified for that individual application; no general comparison can confirm suitability.',
      ],
    },
    {
      heading: 'Surface Finish and Protective Properties',
      body: [
        'For a visible FRP face, Gelcoat Resin is selected for surface finish and appearance. GP Gelcoat Resin is published as white and high gloss as supplied; any colour, gloss or service requirement should be discussed against the exact product data and build-up.',
        'Do not infer unlisted UV, chemical, water-immersion or long-term weathering performance from the general surface-coating category. Those requirements need product-specific technical confirmation.',
        'No approved application-thickness range is published in the repository for GP Gelcoat Resin. Follow the exact TDS and application guidance rather than estimating thickness by eye or transferring a number from another grade.',
      ],
    },
    {
      heading: 'Application Methods and Best Practices',
      body: [],
      subsections: [
        {
          heading: 'Mould Preparation',
          body: 'A clean, correctly waxed or release-agent-treated mould surface is essential before gel coat application — any contamination or inconsistent release treatment can telegraph through to the finished part\'s surface.',
        },
        {
          heading: 'Spray or Brush Application',
          body: 'Gel coat is most commonly applied by spray gun for consistent thickness across larger areas, though brush application is used for smaller parts or repairs. Either method requires an even, controlled coat rather than heavy, uneven pooling.',
        },
        {
          heading: 'Correct Thickness',
          body: 'Applying within the manufacturer\'s recommended thickness range is one of the most important factors in gel coat performance — always check the product\'s technical data sheet rather than estimating by appearance.',
        },
        {
          heading: 'Timing Before Lamination',
          body: 'Gel coat needs to reach the correct tacky, gelled state — not fully cured, and not still wet — before lamination begins, so that the laminate bonds properly as both layers finish curing together.',
        },
        {
          heading: 'Catalyst Dosage and Ambient Conditions',
          body: 'As with any polyester resin, catalyst dosage and workshop temperature affect gel coat\'s cure time. Follow the specific product\'s TDS for correct catalyst percentage rather than carrying over a dosage used for a different resin.',
        },
      ],
      callouts: [
        {
          label: 'Best Practice',
          variant: 'practice',
          items: [
            'Prepare and release-treat the mould surface thoroughly before spraying',
            'Apply gel coat within the manufacturer\'s recommended thickness range',
            'Allow gel coat to reach the correct tacky stage before starting lamination',
            'Follow the product\'s TDS for catalyst dosage and cure timing',
          ],
        },
      ],
    },
    {
      heading: 'Published Gelcoat application areas',
      body: [
        'Gelcoat Resin is used at the mould-facing stage of an FRP build-up. It is applied to the mould first, then the reinforcement and structural laminate are built behind it. This arrangement gives the finished component its visible surface while allowing the laminate system to be selected for its separate role.',
      ],
      subsections: [
        {
          heading: 'Boat and marine hull finishing',
          body: 'For moulded boat and marine components where the surface-finish requirement should be assessed alongside the laminate and intended service.',
        },
        {
          heading: 'Bathware, sanitaryware and moulded components',
          body: 'For FRP bathware, sanitaryware, furniture, panels and other moulded products where the visible surface is part of the finished-component requirement.',
        },
        {
          heading: 'Water-tank exteriors and automotive body panels',
          body: 'For exterior or visible FRP surfaces where the exact service conditions, colour and finish requirement should be confirmed before selection.',
        },
      ],
    },
    {
      heading: 'Common Uses in Composite Manufacturing',
      body: [
        'Gel coat is used wherever an FRP part needs a finished, presentable surface rather than a raw laminate face — which in practice covers most commercially produced composite products. Decorative and architectural panels rely on gel coat for consistent colour and gloss; product housings and enclosures use it to hide the reinforcement pattern and give a professional finish; and marine components use UV-stabilised gel coat as a first line of defence against sun and water exposure.',
        'In tank and roofing sheet manufacturing, gel coat or gel-coat-like surface layers are sometimes used on the exposed face of a component to improve weatherability and appearance, although many industrial tanks are left with a laminate finish where cosmetic appearance is a lower priority than cost and function.',
        'Across all of these uses, the same principle holds: gel coat is chosen when the visible surface of the part needs to look good and hold up to the environment over time, while the actual strength of the part continues to come from the laminating resin and reinforcement applied behind it.',
      ],
    },
    {
      heading: 'What to confirm before procurement',
      body: [
        'Specify the FRP component, moulding method, colour or finish requirement, surface exposure, compatible laminate plan, quantity and delivery location. This gives the supplier enough context to distinguish a surface-finish requirement from the structural laminate requirement.',
        'The published GP Gelcoat Resin TDS should be reviewed for the specific grade. Do not infer unlisted outdoor, chemical, water-immersion or certification performance from a general application category.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Is gel coat resin the same as GP polyester resin?',
      a: 'No. Both are unsaturated polyester resins, but gel coat is formulated specifically for surface finish and protection — thickened so it doesn\'t run on a mould surface, and typically pigmented — while GP resin is a laminating resin designed to be reinforced with glass fibre to build structural thickness.',
    },
    {
      q: 'Can gel coat be used as a laminating resin?',
      a: 'No. Gel coat is not designed to be reinforced with glass fibre or to build structural thickness. Using it as a laminating resin generally produces a brittle, poorly performing part — it should only be used as the outer surface layer, with a proper laminating resin behind it.',
    },
    {
      q: 'Is Gelcoat Resin the same as epoxy resin?',
      a: 'No. GP Gelcoat Resin is published as a polyester surface-coating gelcoat. Epoxy is a separate resin-system category; the correct choice depends on the full application and product data.',
    },
    {
      q: 'Why is gel coat applied first, before lamination?',
      a: 'Gel coat is sprayed or brushed directly onto the mould surface before any reinforcement is placed. Because the mould surface becomes the outer face of the finished part, gel coat ends up as the visible, weather-facing layer once the part is demoulded, with the structural laminate built up behind it.',
    },
    {
      q: 'Does gel coat need to be reinforced with glass fibre?',
      a: 'No, and it shouldn\'t be. Gel coat is a surface-finish resin, not a structural one. Structural strength comes entirely from the laminating resin and reinforcement applied over it, not from the gel coat layer itself.',
    },
    {
      q: 'Which FRP products can use gelcoat?',
      a: 'The site documents boat and marine hull finishing, bathware and sanitaryware, water-tank exteriors, general FRP mould finishing and automotive body panels. Suitability still depends on the specific component and service requirement.',
    },
    {
      q: 'What causes gel coat to crack or craze over time?',
      a: 'Common causes include applying it too thin or too thick, poor cure due to incorrect catalyst dosage, mechanical flexing of an under-reinforced part behind it, or prolonged weathering beyond what the specific formulation is rated for. Always check the product\'s TDS for recommended thickness and cure conditions.',
    },
    {
      q: 'Can gel coat be pigmented in any colour?',
      a: 'Yes, gel coat is commonly supplied pre-pigmented or as a clear base that can be tinted, which is one of its main advantages over laminating resin for parts where colour and surface appearance matter.',
    },
    {
      q: 'How long does gel coat protect a composite part?',
      a: 'Service life depends heavily on the specific formulation, application thickness and environmental exposure, so there\'s no single figure that applies across products — check the manufacturer\'s technical data sheet for the expected performance of the specific grade being used.',
    },
  ],
  relatedSlugs: [
    'gp-resin-vs-gelcoat-resin',
    'lamination-resin-vs-gelcoat-resin',
    'how-to-choose-gelcoat-resin-for-frp-products',
    'gelcoat-resin-problems-peeling-cracking-tackiness',
    'what-is-frp-mould-release-wax',
  ],
  recommendedLinks: [
    { href: '/products/gp-gelcoat-resin/', label: 'View GP Gelcoat Resin', description: 'Review the published white, high-gloss mould-surface grade and TDS.' },
    { href: '/resources/gp-resin-vs-gelcoat-resin/', label: 'Gelcoat Resin vs GP Resin', description: 'Separate the mould-facing surface role from the structural laminate role.' },
    { href: '/tools/resin-selector/', label: 'Find the right grade', description: 'Answer four questions and see the grades that match.' },
  ],
};
