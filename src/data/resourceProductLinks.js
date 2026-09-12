// Maps a resource-article slug to the single product slug it maps to 1:1,
// for the "View [Product]" CTA near the top of the article. Only articles
// with an unambiguous single-product subject are listed here — comparison
// ("X vs Y") and multi-product overview articles are deliberately omitted.
// Product name/URL are resolved from products.js at render time, not
// duplicated here.
export const resourceProductLinks = {
  "applications-of-gp-polyester-resin": "gp-clear-resin",
  "what-is-gel-coat-resin": "gp-gelcoat-resin",
  "fire-retardant-polyester-resin-applications-and-benefits": "fire-retardant-resin",
  "how-to-store-unsaturated-polyester-resin": "unsaturated-polyester-resin",
  "what-is-fire-retardant-resin": "fire-retardant-resin",
  "fire-retardant-resin-procurement-checklist": "fire-retardant-resin",
  "what-is-iso-fire-retardant-resin": "iso-fire-retardant-resin",
  "gp-yellow-resin-uses-in-frp-manufacturing": "gp-yellow-resin",
  "how-to-reduce-shrinkage-in-gp-resin-applications": "gp-clear-resin",
  "what-is-lamination-resin": "lamination-resin",
  "lamination-resin-for-hand-lay-up": "lamination-resin",
  "how-to-choose-gelcoat-resin-for-frp-products": "gp-gelcoat-resin",
  "gelcoat-resin-problems-peeling-cracking-tackiness": "gp-gelcoat-resin",
  "gelcoat-resin-storage-and-handling-guide": "gp-gelcoat-resin",
  "common-lamination-defects-in-frp": "lamination-resin",
  "what-is-button-grade-resin": "button-grade-resin",
  "button-resin-for-polyester-button-manufacturing": "button-grade-resin",
  "what-is-unsaturated-polyester-resin": "unsaturated-polyester-resin",
  "what-is-epoxy-clear-casting-resin": "epoxy-clear-casting-resin",
  "epoxy-clear-casting-resin-buyer-guide": "epoxy-clear-casting-resin",
  "polyester-resin-procurement-checklist": "unsaturated-polyester-resin",
  "what-is-gp-white-resin": "gp-white-resin",
  "gp-white-resin-buyer-guide": "gp-white-resin",
  "what-is-gp-quartz-resin": "gp-quartz-resin",
  "gp-quartz-resin-viscosity-gel-time-storage-guide": "gp-quartz-resin",
  "gp-quartz-resin-buyer-guide": "gp-quartz-resin",
  "what-is-glass-fiber-chopped-strand-mat": "fibre-glass-mat",
  "csm-300-vs-csm-450-glass-fiber": "fibre-glass-mat",
  "what-is-frp-polyester-pigment": "frp-polyester-pigment",
  "what-is-epoxy-art-resin": "epoxy-art-resin",
  "what-is-sheet-grade-yellow-resin": "sheet-grade-yellow-resin",
  "applications-of-sheet-grade-yellow-resin": "sheet-grade-yellow-resin",
  "frp-sheet-resin-procurement-guide": "sheet-grade-yellow-resin",
  "what-is-roof-light-sheet-grade-resin": "roof-light-resin",
  "what-is-epoxy-hardener": "epoxy-hardener",
  "epoxy-hardener-compatibility-guide": "epoxy-hardener",
  "what-is-dmc-smc-resin": "dmc-smc-resin",
  "dmc-vs-smc": "dmc-smc-resin",
  "dmc-smc-resin-applications": "dmc-smc-resin",
  "dmc-smc-resin-technical-specifications": "dmc-smc-resin",
  "dmc-smc-resin-procurement-checklist": "dmc-smc-resin",
  "epoxy-hardener-procurement-guide": "epoxy-hardener",
  "what-is-vinyl-ester-resin": "vinyl-ester-resin",
  "vinyl-ester-resin-for-chemical-service-frp": "vinyl-ester-resin",
  "vinyl-ester-resin-technical-specifications": "vinyl-ester-resin",
  "vinyl-ester-resin-procurement-checklist": "vinyl-ester-resin",
  "what-is-bisphenol-resin": "bisphenol-resin",
  "bisphenol-resin-applications": "bisphenol-resin",
  "bisphenol-resin-procurement-checklist": "bisphenol-resin",
  "what-is-marble-resin": "marble-resin",
  "marble-resin-raw-resin-vs-finished-marble-composite": "marble-resin",
  "what-is-fiberglass-epoxy-resin": "fiberglass-epoxy-resin",
  "fiberglass-epoxy-resin-applications": "fiberglass-epoxy-resin",
  "fiberglass-epoxy-resin-technical-specifications-and-document-check": "fiberglass-epoxy-resin",
  "fiberglass-epoxy-resin-procurement-checklist": "fiberglass-epoxy-resin",
  "marble-resin-technical-specifications-and-rfq": "marble-resin",

  // ISO Polyester Resin
  "what-is-iso-polyester-resin": "iso-polyester-resin",
  "iso-polyester-resin-applications": "iso-polyester-resin",
  "how-to-specify-iso-polyester-resin": "iso-polyester-resin",

  // ISO Gelcoat
  "what-is-iso-gelcoat": "iso-gelcoat",
  "how-to-apply-iso-gelcoat": "iso-gelcoat",
  "iso-gelcoat-applications": "iso-gelcoat",

  // UV Stabilised Sheet Grade Yellow Resin
  "what-is-uv-stabilized-sheet-grade-resin": "uv-stabilized-sheet-grade-yellow-resin",
  "uv-stabilized-sheet-resin-applications": "uv-stabilized-sheet-grade-yellow-resin",
  "how-uv-degrades-frp-sheets": "uv-stabilized-sheet-grade-yellow-resin",

  // Polyester Putty Resin
  "what-is-polyester-putty-resin": "polyester-putty-resin",
  "polyester-putty-cure-systems-bpo-and-mekp": "polyester-putty-resin",
  "polyester-putty-fillers-and-rheology": "polyester-putty-resin",
  "polyester-putty-troubleshooting": "polyester-putty-resin",

  // Allied products and consumables
  "what-is-styrene-monomer": "styrene-monomer",
  "styrene-monomer-storage-handling-safety": "styrene-monomer",
  "styrene-and-polyester-cure-chemistry": "styrene-monomer",
  "what-is-nc-thinner": "nc-thinner",
  "nc-thinner-vs-general-purpose-thinner": "nc-thinner",
  "solvent-evaporation-and-coating-defects": "nc-thinner",
  "selecting-brushes-for-resin-and-gelcoat-application": "paint-brushes",
  "what-is-soapstone-talc-powder": "soap-stone-powder",
  "what-is-frp-mould-release-wax": "wax-polish",

  // Cure system
  "what-is-mekp-hardener": "mekp-hardener",
  "what-is-cobalt-octoate": "cobalt-octoate",

  // Single-subject grades that had no CTA
  "gp-quartz-resin-uses-engineered-stone-mineral-composites": "gp-quartz-resin",
  "marble-resin-applications-cultured-marble-artificial-stone": "marble-resin",
  "fiberglass-epoxy-resin-system-and-hardener": "fiberglass-epoxy-resin",
  "epoxy-hardener-for-clear-casting-and-art-resin": "epoxy-hardener",
};
