// ============================================================================
//  PRODUCT CATALOG  —  EDIT THIS FILE TO ADD / CHANGE / REMOVE PRODUCTS
// ============================================================================
//
//  To ADD a product: copy one block between the { } braces (including the
//  trailing comma), paste it, and change the fields.
//
//  Fields:
//    slug        unique url-friendly id, lowercase-with-dashes, no spaces
//    name        display name
//    category    must match one of the CATEGORIES below (exact text)
//    price       shown as-is, e.g. "₹130 / kg"  — or "" to show "Ask for price"
//    image       filename inside /public/products/  (e.g. "sheet-yellow.jpg")
//    images      optional — array of extra filenames inside /public/products/
//                for a photo gallery on the product page (image is always
//                shown first). Omit if there's only one photo.
//    tagline     one short line shown on the product card
//    description one paragraph shown on the product page
//    features    bullet list of key features
//    applications bullet list of where it's used
//    whatsappName  optional — clean product name used only in the WhatsApp
//                  quote message, for products whose display `name` carries
//                  a parenthetical alias (e.g. "Lamination Resin (LR Resin)").
//                  Omit for products where `name` is already clean.
//
//  Prices and specs below were reconciled against the live IndiaMART listing
//  (samratpolyresins.com) on 2026-07-08 — that site is the temporary catalog
//  until this one replaces it, so it was treated as the source of truth for
//  pricing/specs. A few products there had auto-generated descriptions that
//  didn't match their own specs (e.g. "LR Resin" carried a lab-microscopy
//  description despite being sold in 1000kg drums as a GP resin) — those were
//  rewritten here to describe what the product actually is.
//
//  After editing: commit + push. The site rebuilds automatically.
// ============================================================================

export const CATEGORIES = [
  "GP Resins",
  "ISO Resins",
  "Sheet Grade Resins",
  "GelCoat Resin",
  "Fire Retardant Resins",
  "FRP Allied Products",
  "Epoxy & Casting",
  "Industrial & Specialty Resins",
  "Hardeners",
];

// Category → dedicated family/hub page slug.
//
// Single source of truth for every place that needs to link a category name
// to its own landing page (products index headings, header mega-menu, mobile
// nav). ONLY categories that have a real, published hub page under
// src/pages/products/ appear here — a category with no hub renders as a
// plain label rather than a link to a page that doesn't exist.
//
// Add an entry here only when the corresponding .astro page actually exists.
export const CATEGORY_HUBS = {
  "GP Resins": "gp-resins",
  "Sheet Grade Resins": "sheet-grade-resins",
  "GelCoat Resin": "gelcoat-resins",
  "Fire Retardant Resins": "fire-retardant-resins",
  "Epoxy & Casting": "epoxy-resins",
  "FRP Allied Products": "frp-allied-products",
  "Industrial & Specialty Resins": "industrial-specialty-resins",
  "Hardeners": "hardeners-accelerators",
};

// An earlier review deliberately left Sheet Grade, GelCoat, Fire Retardant and
// Hardeners without hubs, on the grounds that a hub over one or two products is
// an empty category page. That was right for the catalogue as it then stood.
// Two things changed it.
//
// The families grew: Sheet Grade went from two products to three and GelCoat
// from one to two when the new grades were added, so each now contains a real
// decision rather than a single option.
//
// More importantly, these four are not category listings. Each exists to answer
// a choice a buyer has to make and that no single product page can make for
// them — general-purpose against isophthalic gelcoat, halogenated against
// halogen-free fire retardancy, which of three sheet grades suits a panel's
// relationship with sunlight, and the fact that a catalyst and an accelerator
// are two halves of one cure system that must never meet undiluted. If a family
// ever loses that decision, its hub should go with it.
//
// "ISO Resins" stays deliberately without one: it holds a single product, and
// ISO Polyester Resin's own page already is the answer for that search.

export const products = [
  {
    slug: "sheet-grade-yellow-resin",
    name: "Sheet Grade Yellow Resin",
    category: "Sheet Grade Resins",
    price: "₹135 / kg",
    image: "sheet-grade-yellow-resin.jpg",
    images: ["sheet-grade-yellow-resin-2.jpg", "sheet-grade-yellow-resin-3.jpg"],
    imageAlt:
      "Sheet Grade Yellow Resin — pre-pigmented yellow orthophthalic polyester resin for FRP sheets by Samrat Poly Resins",
    tdsUrl: "/tds/sheet-grade-yellow-resin-tds.pdf",
    sdsUrl: "/sds/sheet-grade-yellow-resin-sds.pdf",
    seo: {
      title: "Sheet Grade Yellow Resin – Polyester Resin for FRP Sheets",
      description:
        "Sheet Grade Yellow Resin — a pre-pigmented orthophthalic polyester resin for FRP sheet and panel manufacturing. Gel time 6.5 minutes. 225 kg drums.",
      keywords: [
        "Sheet Grade Yellow Resin",
        "Polyester Sheet Grade Resin",
        "Yellow Sheet Grade Resin",
        "Sheet Grade Polyester Resin",
        "FRP Sheet Resin",
        "Roofing Sheet Resin",
      ],
    },
    // Same technical specifications as roof-light-resin except final product
    // colour (both share this verified spec sheet) — the two pages target
    // different buyer intent (general FRP sheet/panel manufacturing here vs.
    // translucent roofing there) and must not share prose/FAQs. Colour
    // describes the product as supplied to the customer. The current TDS
    // verifies the 1,000 kg MOQ. Density and Flash Point are excluded as
    // unverified.
    productDetails: {
      "Packaging": "225 kg Drum",
      "Minimum Order Quantity": "1,000 kg",
      "Physical Form": "Liquid",
      "Colour / Appearance": "Yellow",
      "Shelf Life": "2 Months",
      "Storage Temperature": "30–35 °C",
    },
    techSpecs: {
      "Resin Type": "Orthophthalic Unsaturated Polyester",
      "Curing System": "Non-Accelerated (MEKP Catalyst)",
      "Viscosity": "280 cPs",
      "Gel Time": "6.5 Minutes",
      "Styrene Content": "35%",
      "Cure Time": "12 Hours",
      "MEKP Dosage": "1.5%",
      "Cobalt Octoate Dosage": "0.4%",
    },
    tagline: "Pre-pigmented yellow resin for consistent FRP sheet manufacturing.",
    description:
      "Sheet Grade Yellow Resin is an orthophthalic unsaturated polyester resin supplied pre-pigmented yellow for the published FRP sheet and panel role. The current Technical Data Sheet lists it for sheet moulding and laminate applications, helping buyers separate a supplied-yellow sheet/panel requirement from a transparent-yellow general-purpose grade or a water-white roof-light resin. Review the intended sheet or panel, supplied appearance, reinforcement requirement, production context and current TDS before selecting a resin route. Samrat Poly Resins publishes 225 kg drum packaging for this product.",
    usageNote:
      'Sheet Grade Yellow Resin is typically catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and reinforced with <a href="/products/fibre-glass-mat/">glass fibre</a> during sheet lay-up or compression moulding. Where a project needs an unpigmented general-purpose grade instead, see our <a href="/products/gp-clear-resin/">GP Clear Resin</a> or base <a href="/products/unsaturated-polyester-resin/">Unsaturated Polyester Resin (UPR)</a>; for door and plywood lamination work, our <a href="/products/lamination-resin/">Lamination Resin</a> is more suitable, and mould-facing sheets can be finished with a <a href="/products/gp-gelcoat-resin/">Gelcoat Resin</a> or upgraded to <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> for higher chemical resistance.',
    features: [
      "Pre-pigmented yellow supplied appearance for the published sheet and panel role",
      "Orthophthalic unsaturated polyester resin",
      "Published for sheet moulding and laminate applications",
      "Current product-specific Technical Data Sheet available",
      "225 kg drum packaging",
    ],
    applications: [
      "FRP sheets and panels for industrial use",
      "Decorative and coloured composite panels",
      "Electrical enclosures and washroom partitions",
      "Compression moulding and hand lay-up sheet production",
    ],
    industries: [
      "FRP sheet & panel manufacturing",
      
      "Electrical & switchgear enclosures",
      "Construction formwork & partitions",
      "General industrial moulding",
    ],
    whyChoose: [
      "ISO 9001:2015 certificate of registration (GMSQR Certifications, first registered 2019)",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Factory-controlled pigmentation for consistent colour",
      "Supplied in bulk 225 kg drums",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is Sheet Grade Yellow Resin?",
        a: "Sheet Grade Yellow Resin is an orthophthalic unsaturated polyester resin, factory-pigmented yellow, formulated for FRP sheet and panel manufacturing where consistent colour is required across every batch.",
      },
      {
        q: "Why is Sheet Grade Yellow Resin pre-pigmented rather than mixed on site?",
        a: "Factory pigmentation ensures uniform colour depth and consistency throughout the sheet, batch after batch — mixing pigment by hand at the mould is harder to control and can lead to visible colour variation between sheets.",
      },
      {
        q: "Is Sheet Grade Yellow Resin the same as Roof Light Sheet Grade Resin?",
        a: 'They share the same base resin chemistry, but Sheet Grade Yellow Resin is factory-pigmented yellow for opaque, consistently-coloured FRP sheets and panels, while our <a href="/products/roof-light-resin/">Roof Light Sheet Grade Resin</a> is left water-white for translucent roofing and skylight sheets. Choose based on whether you need an opaque coloured sheet or a light-transmitting roofing sheet.',
      },
      {
        q: "Is Sheet Grade Yellow Resin the same as GP Yellow Resin?",
        a: 'No. Sheet Grade Yellow Resin is the published pre-pigmented yellow grade for sheet moulding and laminate applications. <a href="/products/gp-yellow-resin/">GP Yellow Resin</a> is the separately published transparent-yellow, general-purpose orthophthalic grade. Start with the actual FRP sheet or panel role, supplied appearance and current product-specific TDS before choosing between them.',
      },
      {
        q: "Which information should I share for a Sheet Grade Yellow Resin quotation?",
        a: 'Share the intended FRP sheet or panel, required supplied yellow appearance, reinforcement requirement if known, production process or finished-product context, expected quantity and delivery location. This supports a focused product and commercial discussion without confirming suitability before review.',
      },
      {
        q: "Which related materials should I review for an FRP sheet requirement?",
        a: 'Review <a href="/products/fibre-glass-mat/">Glass Fiber Mat</a> when reinforcement is part of the requirement. For a water-white roof-light or skylight sheet, review <a href="/products/roof-light-resin/">Roof Light Sheet Grade Resin</a>; for a mould-facing surface role, review <a href="/products/gp-gelcoat-resin/">GP Gelcoat Resin</a>. Each product has a separate published role and Technical Data Sheet.',
      },
      {
        q: "What is the gel time and cure time of Sheet Grade Yellow Resin?",
        a: "Gel time is 6.5 minutes. Full cure at room temperature, once catalysed with MEKP (around 1.5%) and a cobalt octoate accelerator (around 0.4%), takes approximately 12 hours.",
      },
      {
        q: "What is the viscosity and styrene content of Sheet Grade Yellow Resin?",
        a: "Viscosity is approximately 280 cPs and styrene content is 35%. Purity is not published on the current TDS for this grade — ask us if your specification requires it.",
      },
      {
        q: "What is the shelf life and storage temperature for Sheet Grade Yellow Resin?",
        a: "Shelf life is 2 months from manufacture. Store between 30–35 °C, away from direct heat and sunlight.",
      },
      {
        q: "What packaging does Sheet Grade Yellow Resin come in?",
        a: "It is supplied in bulk 225 kg drums.",
      },
    ],
    relatedSlugs: [
      "roof-light-resin",
      "gp-clear-resin",
      "gp-gelcoat-resin",
      "mekp-hardener",
    ],
  },
  {
    slug: "unsaturated-polyester-resin",
    name: "Unsaturated Polyester Resin",
    whatsappName: "Unsaturated Polyester Resin",
    category: "GP Resins",
    price: "₹130 / kg",
    image: "unsaturated-polyester-resin-2.jpg",
    images: ["unsaturated-polyester-resin.jpg", "unsaturated-polyester-resin-3.jpg", "unsaturated-polyester-resin-4.jpg"],
    tdsUrl: "/tds/unsaturated-polyester-resin-tds.pdf",
    sdsUrl: "/sds/unsaturated-polyester-resin-sds.pdf",
    imageAlt:
      "Unsaturated Polyester Resin (UPR) — clear orthophthalic general-purpose polyester resin by Samrat Poly Resins",
    seo: {
      title: "Unsaturated Polyester Resin (UPR) Manufacturer in India | TDS",
      description:
        "UPR stands for Unsaturated Polyester Resin — the orthophthalic general-purpose grade used across FRP and composite manufacturing. Published specifications, downloadable TDS and SDS, made in Punjab.",
      // "General Purpose Polyester Resin" intentionally omitted here — that
      // exact phrase is in GP Clear Resin's own title tag, so keeping it here
      // too would have this page competing with GP Clear Resin for it. Every
      // other requested secondary term is covered naturally in the page copy
      // and FAQs below regardless.
      keywords: [
        "Unsaturated Polyester Resin",
        "UPR Resin",
        "Polyester Resin",
        "Orthophthalic Polyester Resin",
        "FRP Resin",
        "Fiberglass Resin",
        "Liquid Polyester Resin",
      ],
    },
    // Same physical grade as GP Clear Resin — Samrat Poly Resins supplies its
    // standard orthophthalic UPR under that product name. Values verified
    // against SPR-TDS-GCR Rev. 01, identical to gp-clear-resin's specs
    // (do not let the two drift apart). Flash Point and Thixotropy excluded.
    productDetails: {
      "Minimum Order Quantity": "1,000 kg",
      "Packaging": "225 kg Drum",
      "Physical Form": "Liquid",
      "Colour / Appearance": "Clear",
      "Shelf Life": "3 months (225 kg drum) / 2 months (PET packaging)",
      "Storage Temperature": "30–35 °C",
    },
    techSpecs: {
      "Resin Type": "Orthophthalic Unsaturated Polyester Resin",
      "Curing System": "Non-accelerated",
      "Viscosity": "350–450 cPs",
      "Gel Time": "< 8 minutes",
      "Styrene Content": "33–40%",
      "Specific Gravity / Density": "Not part of the published specification for this grade",
      "Cure Time": "45 minutes – 1.5 hours",
      "MEKP Dosage": "1.5%",
      "Cobalt Octoate Dosage": "0.4%",
      "Purity": "99%",
    },
    tagline: "The versatile, general-purpose workhorse resin for FRP.",
    description:
      "Samrat Poly Resins manufactures Unsaturated Polyester Resin (UPR) at its facility in Doraha, Punjab, India. Established in 2017, the company holds an ISO 9001:2015 certificate of registration for the manufacture and supply of polyester resins. UPR is a thermosetting resin widely used across the fibreglass-reinforced plastic (FRP) industry for its versatility and reliable mechanical properties. It crosslinks with styrene monomer through free-radical polymerisation, catalysed with MEKP, hardening into a rigid, durable composite. Polyester resins are broadly grouped into orthophthalic, isophthalic and vinyl ester families, differing in chemical resistance and cost. Samrat Poly Resins' standard UPR grade is a general-purpose orthophthalic resin — a clear liquid with 350–450 cPs viscosity, a gel time under 8 minutes and 99% purity — suited to hand layup, spray-up, moulding and everyday FRP work.",
    usageNote:
      'Samrat Poly Resins supplies this standard orthophthalic UPR grade under the product name <a href="/products/gp-clear-resin/">GP Clear Resin</a>, typically catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt accelerator, then reinforced with <a href="/products/fibre-glass-mat/">glass fibre</a> for hand layup and spray-up. For door and plywood lamination work, see our <a href="/products/lamination-resin/">Lamination Resin</a>; for higher chemical and corrosion resistance, step up to <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a>; and pair with a <a href="/products/gp-gelcoat-resin/">Gelcoat Resin</a> for a finished decorative surface.',
    features: [
      "Widely used, cost-effective orthophthalic UPR grade for general FRP work",
      "Clear liquid, 350–450 cPs viscosity for smooth reinforcement wet-out",
      "Gel time under 8 minutes for efficient production cycles",
      "Cures via MEKP and cobalt octoate at room temperature — no special curing equipment required",
      "33–40% styrene content, 99% purity, consistent batch-to-batch quality",
      "Supplied in 225 kg drums, minimum order 1,000 kg",
    ],
    applications: [
      "Hand layup, spray-up and pultrusion",
      "FRP mouldings, panels and casting",
      "Bathware, automotive and marine composite parts",
      "General-purpose fiberglass fabrication",
    ],
    industries: [
      "FRP & fiberglass composites manufacturing",
      "Automotive & transport components",
      "Marine & boat building",
      "Bathware & sanitaryware",
      "Construction & general fabrication",
      "Pultrusion & casting",
    ],
    whyChoose: [
      "ISO 9001:2015 certificate of registration (GMSQR Certifications, first registered 2019)",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Consistent 99% purity with batch-to-batch quality control",
      "Bulk supply from 1,000 kg, packed in 225 kg drums",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is Unsaturated Polyester Resin (UPR)?",
        a: "Unsaturated Polyester Resin (UPR) is a thermosetting resin used across the FRP and composites industry. It crosslinks with styrene monomer through free-radical polymerisation, catalysed with MEKP, curing into a rigid, durable solid used in fiberglass laminates, mouldings and castings.",
      },
      {
        q: "What are the different types of polyester resin?",
        a: "Polyester resins are generally grouped into orthophthalic, isophthalic and vinyl ester types. Orthophthalic is the most economical, general-purpose grade; isophthalic offers improved water and chemical resistance; vinyl ester offers the highest chemical and corrosion resistance. Samrat Poly Resins' standard UPR grade is an orthophthalic resin suited to general FRP work.",
      },
      {
        q: "Is this Unsaturated Polyester Resin the same as GP Clear Resin?",
        a: "Yes. Samrat Poly Resins supplies its standard general-purpose orthophthalic UPR grade under the product name GP Clear Resin. The technical specifications are identical — this page describes the same resin from a category perspective.",
      },
      {
        q: "What is the viscosity and gel time of this UPR grade?",
        a: "Viscosity is 350–450 cPs and gel time is under 8 minutes. It is a non-accelerated system, cured at room temperature with an MEKP catalyst and a cobalt octoate accelerator.",
      },
      {
        q: "What is the styrene content, purity and density of this resin?",
        a: "Styrene content is 33–40% and purity is 99%. Specific gravity / density is not part of the published specification set for this grade — the current TDS states it is intentionally excluded.",
      },
      {
        q: "What packaging and minimum order quantity is available?",
        a: "This UPR grade is supplied in 225 kg drums, with a minimum order quantity of 1,000 kg.",
      },
      {
        q: "Is Unsaturated Polyester Resin the same as fiberglass resin?",
        a: "\"Fiberglass resin\" is a common industry term for the unsaturated polyester resin used with glass fibre reinforcement in FRP manufacturing. Samrat Poly Resins' UPR grade is suitable for this use, typically paired with glass fibre matting and an MEKP catalyst.",
      },
      {
        q: "Does this UPR page describe every Samrat Poly Resins grade?",
        a: "No. The technical specifications and TDS on this page describe Samrat Poly Resins' standard clear orthophthalic UPR, supplied as <a href=\"/products/gp-clear-resin/\">GP Clear Resin</a>. Lamination, gelcoat, button, fire-retardant and vinyl ester products have their own published data and should be reviewed separately.",
      },
      {
        q: "Which polyester resin grade should I review for my application?",
        a: "Start with the component and process. <a href=\"/products/gp-clear-resin/\">GP Clear Resin</a> is the published standard clear UPR for general FRP work; <a href=\"/products/lamination-resin/\">Lamination Resin</a> is published for door, plywood and FRP bonding; <a href=\"/products/gp-gelcoat-resin/\">GP Gelcoat Resin</a> is for the mould-facing surface layer. Review the individual product data for a specialist, chemical-resistance, fire-performance, casting or other stated requirement.",
      },
      {
        q: "What details should I share when requesting an Unsaturated Polyester Resin quote?",
        a: "Please share the component or application, manufacturing process, required finish or product role, expected quantity and delivery location. This helps the sales team identify the relevant published product data before preparing a quote.",
      },
    ],
    relatedSlugs: [
      "gp-clear-resin",
      "lamination-resin",
      "vinyl-ester-resin",
      "gp-gelcoat-resin",
    ],
  },
  {
    slug: "lamination-resin",
    name: "Lamination Resin (LR Resin)",
    whatsappName: "Lamination Resin",
    category: "GP Resins",
    price: "₹140 / kg",
    image: "lamination-resin.jpg",
    images: ["lamination-resin-2.jpg", "lamination-resin-3.jpg"],
    imageAlt:
      "Lamination Resin (LR Resin) — transparent orthophthalic unsaturated polyester lamination resin by Samrat Poly Resins",
    tdsUrl: "/tds/lamination-resin-tds.pdf",
    sdsUrl: "/sds/lamination-resin-sds.pdf",
    seo: {
      title: "Lamination Resin (LR Resin)",
      description:
        "Lamination Resin (LR Resin) — a transparent orthophthalic polyester resin for door and plywood lamination. 5-minute gel time. 35 kg PET or 225 kg drum.",
      keywords: [
        "Lamination Resin",
        "LR Resin",
        "Polyester Lamination Resin",
        "Decorative Lamination Resin",
        "Door Lamination Resin",
        "Plywood Lamination Resin",
        "FRP Door Skin Bonding Resin",
        "Unsaturated Polyester Lamination Resin",
      ],
    },
    // Values verified against SPR-TDS-LR Rev. 01 — do not edit without an
    // updated TDS. Flash Point and Thixotropy are intentionally excluded.
    productDetails: {
      "Minimum Order Quantity": "1,000 kg",
      "Packaging": "35 kg PET Packaging / 225 kg Drum",
      "Physical Form": "Liquid",
      "Colour / Appearance": "Transparent",
      "Shelf Life": "3 Months",
      "Storage Temperature": "30–35 °C",
    },
    techSpecs: {
      "Resin Type": "Orthophthalic, Unsaturated Polyester",
      "Curing System": "Room Temperature Cure",
      "Viscosity": "400 cPs",
      "Gel Time": "5 Minutes",
      "Styrene Content": "35%",
      "Specific Gravity / Density": "Not published in the current TDS",
      "Cure Time": "30 Minutes – 1 Hour",
      "MEKP Dosage": "1.5%",
      "Cobalt Octoate Dosage": "0.4%",
      "Purity": "100%",
    },
    tagline: "Transparent orthophthalic polyester resin for door & FRP lamination.",
    description:
      "Lamination Resin (LR Resin) is a transparent, orthophthalic unsaturated polyester lamination resin developed by Samrat Poly Resins for door lamination, plywood lamination and other FRP bonding applications. It cures at room temperature once catalysed with MEKP and a cobalt octoate accelerator, offering excellent adhesion and wet-out over decorative door skins, plywood surfaces and composite panels. With a fast 5-minute gel time, 35% styrene content and 100% purity, it delivers a smooth, glossy, transparent finish and consistent, batch-to-batch performance for FRP and plywood lamination work.",
    usageNote:
      'In practice, Lamination Resin is catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt accelerator, then applied over <a href="/products/fibre-glass-mat/">glass fibre</a> reinforcement for door-skin and FRP bonding work. Where a project needs a broader general-purpose grade rather than a lamination-specific one, see our <a href="/products/gp-clear-resin/">GP Clear Resin</a> or base <a href="/products/unsaturated-polyester-resin/">Unsaturated Polyester Resin (UPR)</a>; for higher chemical and corrosion resistance, step up to <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a>, and pair with a <a href="/products/gp-gelcoat-resin/">Gelcoat Resin</a> for a finished decorative surface.',
    features: [
      "Transparent, glass-like finish with 100% purity",
      "Fast gel time of 5 minutes for efficient lamination cycles",
      "Room-temperature cure — no external heat required",
      "Excellent wet-out and adhesion for door skins and FRP bonding",
      "Balanced 35% styrene content for consistent processing",
      "Supplied in 35 kg PET packs or 225 kg drums; minimum order 1,000 kg",
    ],
    applications: [
      "Door skin lamination and decorative door panels",
      "Plywood and laminate bonding for furniture surfaces",
      "FRP bonding and composite panel lamination",
      "Hand layup work requiring a clear, glossy finish",
    ],
    industries: [
      "Plywood & door lamination",
      "Decorative laminates & panels",
      "FRP bonding & composite fabrication",
      "Furniture & interior surface manufacturing",
      "General FRP moulding & hand layup",
    ],
    whyChoose: [
      "ISO 9001:2015 certificate of registration (GMSQR Certifications, first registered 2019)",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Consistent 100% purity with batch-to-batch quality control",
      "Bulk supply from 1,000 kg, packed in 35 kg PET or 225 kg drums",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is Lamination Resin (LR Resin)?",
        a: "Lamination Resin, also known as LR Resin, is a transparent orthophthalic unsaturated polyester resin manufactured by Samrat Poly Resins for door lamination, plywood lamination and general FRP bonding. It is supplied as a room-temperature-curing liquid in 35 kg PET packs or 225 kg drums.",
      },
      {
        q: "Is Lamination Resin suitable for plywood and door skin lamination?",
        a: "Yes. Its fast wet-out and adhesion make it well suited to plywood lamination, decorative door skin lamination and similar FRP bonding applications where a clear, glossy finish is required.",
      },
      {
        q: "What is the gel time and cure time of Lamination Resin?",
        a: "Gel time is 5 minutes. Full cure at room temperature typically takes 30 minutes to 1 hour, depending on ambient temperature and the MEKP and cobalt octoate dosage used.",
      },
      {
        q: "How is Lamination Resin cured?",
        a: "It is a room-temperature-cure orthophthalic unsaturated polyester resin, catalysed with an MEKP hardener (around 1.5%) and a cobalt octoate accelerator (around 0.4%). No external heat is required.",
      },
      {
        q: "What is the viscosity, styrene content and density of Lamination Resin?",
        a: "Viscosity is approximately 400 cPs, styrene content is 35% and purity is 100%. Specific gravity / density is recorded as \"Not Provided\" on the current TDS, so no figure is quoted here.",
      },
      {
        q: "What packaging and minimum order quantity does Lamination Resin come in?",
        a: "Lamination Resin is supplied in 35 kg PET packaging or 225 kg drums, with a minimum order quantity of 1,000 kg.",
      },
      {
        q: "What is the difference between Lamination Resin and GP Clear Resin?",
        a: "Lamination Resin is formulated specifically for door lamination, plywood lamination and FRP bonding, with a faster 5-minute gel time. GP Clear Resin is a broader general-purpose orthophthalic resin for hand layup, spray-up and moulding. For lamination-focused work, choose this Lamination Resin grade; for general-purpose FRP manufacturing, see GP Clear Resin.",
      },
    ],
    relatedSlugs: [
      "gp-clear-resin",
      "gp-gelcoat-resin",
      "vinyl-ester-resin",
      "epoxy-clear-casting-resin",
    ],
    // Ordered application-guide cards for the "Explore applications" section
    // on this product's page — see src/data/applications.js. Scoped to
    // decorative/bonding lamination use cases genuinely served by LR Resin's
    // fast gel time and adhesion to laminate/veneer sheets, not general FRP
    // structural work (that's GP Clear Resin's applicationSlugs instead).
    applicationSlugs: [
      "door-lamination",
      "door-skin-lamination",
      "wooden-door-lamination",
      "decorative-panel-lamination",
      "decorative-plywood-lamination",
      "furniture-lamination",
    ],
  },
  {
    slug: "gp-clear-resin",
    name: "GP Clear Resin",
    category: "GP Resins",
    price: "",
    image: "gp-clear-resin.jpg",
    images: ["gp-clear-resin-2.jpg"],
    imageAlt:
      "GP Clear Resin — clear orthophthalic general-purpose unsaturated polyester resin by Samrat Poly Resins",
    tdsUrl: "/tds/gp-clear-resin-tds.pdf",
    sdsUrl: "/sds/gp-clear-resin-sds.pdf",
    seo: {
      title: "GP Clear Resin Manufacturer | General Purpose Polyester Resin",
      description:
        "Clear orthophthalic general-purpose polyester resin for FRP hand lay-up, spray-up and moulding. Published viscosity and gel time, TDS and SDS.",
      // "Unsaturated Polyester Resin" and "Orthophthalic Polyester Resin" were
      // removed from here — the dedicated /unsaturated-polyester-resin/ page
      // now owns that search intent; keeping both here would have the two
      // pages competing for the same terms.
      keywords: [
        "GP Clear Resin",
        "General Purpose Resin",
        "General Purpose Polyester Resin",
        "FRP Resin",
        "Clear Polyester Resin",
      ],
    },
    // Two grouped tables on the page: commercial/handling vs chemical/performance.
    // Values verified against SPR-TDS-GCR Rev. 01 — do not edit without an
    // updated TDS. Flash Point and Thixotropy are intentionally excluded.
    productDetails: {
      "Minimum Order Quantity": "1,000 kg",
      "Packaging": "225 kg Drum",
      "Physical Form": "Liquid",
      "Colour / Appearance": "Clear",
      "Shelf Life": "3 months (225 kg drum) / 2 months (PET packaging)",
      "Storage Temperature": "30–35 °C",
    },
    techSpecs: {
      "Resin Type": "Orthophthalic, Unsaturated Polyester",
      "Curing System": "Non-accelerated",
      "Viscosity": "350–450 cPs",
      "Gel Time": "< 8 minutes",
      "Styrene Content": "33–40%",
      "Specific Gravity / Density": "Not part of the published specification for this grade",
      "Cure Time": "45 minutes – 1.5 hours",
      "MEKP Dosage": "1.5%",
      "Cobalt Octoate Dosage": "0.4%",
      "Purity": "99%",
    },
    tagline: "Clear, general-purpose orthophthalic polyester resin.",
    description:
      "GP Clear Resin is a clear, orthophthalic unsaturated polyester resin developed by Samrat Poly Resins for everyday FRP and composite manufacturing. Supplied as a non-accelerated liquid with a viscosity of 350–450 cPs and a gel time under 8 minutes, it wets out reinforcement quickly and cures at room temperature once catalysed with MEKP and a cobalt octoate accelerator. With a balanced 33–40% styrene content and 99% purity, it delivers consistent, cost-effective performance across hand layup, spray-up, moulding and lamination — a dependable general-purpose polyester resin for a wide range of composite products.",
    usageNote:
      'In practice, GP Clear Resin is catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and a cobalt accelerator, then reinforced with <a href="/products/fibre-glass-mat/">glass fibre</a> for hand layup and spray-up. Pair it with a <a href="/products/gp-gelcoat-resin/">gelcoat resin</a> for a durable moulded surface, step up to <a href="/products/vinyl-ester-resin/">vinyl ester resin</a> where higher chemical and corrosion resistance is required, or see <a href="/products/lamination-resin/">lamination resin</a> for door-lamination and FRP bonding work.',
    features: [
      "Clear orthophthalic unsaturated polyester base for general-purpose FRP work",
      "Low viscosity (350–450 cPs) for excellent wet-out and easy impregnation",
      "Fast gel time under 8 minutes for quicker layup cycles",
      "Non-accelerated system — dose MEKP and cobalt accelerator to suit workshop conditions",
      "Balanced 33–40% styrene content and 99% purity",
      "Consistent 99% purity with batch-to-batch reliability",
      "Supplied in 225 kg drums; minimum order 1,000 kg",
    ],
    applications: [
      "Hand layup and spray-up laminates",
      "FRP water tanks, roofing sheets and sanitaryware",
      "Panels, moulding and cooling tower components",
      "General-purpose composite and FRP products",
    ],
    industries: [
      "FRP & composites manufacturing",
      "Water tanks & storage",
      "Construction, roofing & panels",
      "Sanitaryware & bathware moulding",
      "Cooling towers & industrial FRP",
      "General moulding & fabrication",
    ],
    whyChoose: [
      "ISO 9001:2015 certificate of registration (GMSQR Certifications, first registered 2019)",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Consistent 99% purity with batch-to-batch quality control",
      "Bulk supply from 1,000 kg, packed in 225 kg drums",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is GP Clear Resin?",
        a: "GP Clear Resin is a clear, orthophthalic unsaturated polyester resin used for general-purpose FRP manufacturing — including hand layup, spray-up, moulding and lamination. It is supplied by Samrat Poly Resins as a non-accelerated liquid in 225 kg drums.",
      },
      {
        q: "Is GP Clear Resin an orthophthalic or isophthalic resin?",
        a: "It is an orthophthalic unsaturated polyester resin, formulated for general-purpose composite work where balanced mechanical performance and cost-efficiency are required.",
      },
      {
        q: "What is the gel time, and how is GP Clear Resin cured?",
        a: "Gel time is under 8 minutes. As a non-accelerated resin it is cured at room temperature by adding a cobalt octoate accelerator (around 0.4%) and an MEKP catalyst (around 1.5%); full cure typically takes 45 minutes to 1.5 hours depending on temperature and dosage.",
      },
      {
        q: "What is the viscosity, styrene content and density of GP Clear Resin?",
        a: "Viscosity is 350–450 cPs, styrene content is 33–40% and purity is 99%. Specific gravity / density is not part of the published specification set for this grade — the current TDS states it is intentionally excluded.",
      },
      {
        q: "How is GP Clear Resin packed, and what is the minimum order quantity?",
        a: "It is supplied in 225 kg drums, with a minimum order quantity of 1,000 kg. Bulk and repeat-order pricing is available on request.",
      },
      {
        q: "What is the shelf life and recommended storage?",
        a: "Shelf life is 3 months in a sealed 225 kg drum and 2 months in PET packaging. Store between 30–35 °C, away from direct heat, sparks and sunlight.",
      },
      {
        q: "What is the difference between GP Clear Resin and Lamination Resin?",
        a: "GP Clear Resin is a general-purpose orthophthalic resin for a broad range of FRP work, while Lamination Resin is tuned specifically for door-lamination and FRP bonding. For lamination-focused projects, choose the Lamination Resin grade.",
      },
    ],
    relatedSlugs: [
      "lamination-resin",
      "gp-gelcoat-resin",
      "vinyl-ester-resin",
      "epoxy-clear-casting-resin",
    ],
    // Ordered application-guide cards shown in the "Explore applications"
    // section — see src/data/applications.js. Only entries without
    // `draft: true` there resolve to a live /applications/{slug}/ page.
    applicationSlugs: [
      "resin-for-water-tank-manufacturing",
      "resin-for-cooling-tower-manufacturing",
      "resin-for-roofing-sheet-manufacturing",
      "resin-for-frp-door-manufacturing",
      "resin-for-door-skin-manufacturing",
      "resin-for-frp-panel-manufacturing",
      "resin-for-hand-lay-up-process",
      "resin-for-spray-up-process",
      "resin-for-boat-manufacturing",
      "resin-for-general-frp-lamination",
      "resin-for-general-frp-moulded-products",
    ],
  },
  {
    slug: "gp-white-resin",
    name: "GP White Resin",
    category: "GP Resins",
    price: "₹135 / kg",
    image: "gp-white-resin.jpg",
    images: ["gp-white-resin-2.jpg"],
    tdsUrl: "/tds/gp-white-resin-tds.pdf",
    tdsNote: "GP Clear Resin's shared base specification (SPR-TDS-GCR). Technical values apply; its 'Clear' appearance row does not. GP White is white pigmented (SDS).",
    imageAlt: "GP White Resin — general-purpose orthophthalic unsaturated polyester resin for FRP moulding by Samrat Poly Resins",
    sdsUrl: "/sds/gp-white-resin-sds.pdf",
    seo: {
      title: "GP White Resin Manufacturer in India | White GP Polyester Resin",
      description:
        "GP White Resin: general-purpose orthophthalic polyester resin for FRP moulding, panels, water tanks and cooling towers, sharing GP Clear Resin's published specification. TDS, SDS, 225 kg drums.",
      keywords: [
        "GP White Resin",
        "White GP Polyester Resin",
        "White Polyester Resin",
        "White GP Resin",
        "General Purpose Polyester Resin",
        "FRP Resin",
        "White Resin Manufacturer",
        "White Resin Supplier",
        "Polyester Moulding Resin",
      ],
    },
    // 2026-09-13 (revised). The supplied GP White TDS prints exactly GP Clear
    // Resin's specification under reference SPR-TDS-GCR, and the GP White SDS
    // states the same orthophthalic base resin with "manufacturer-confirmed"
    // shared processing characteristics. So the shared specification applies
    // and is published here with that attribution. Not restored: the former
    // page figures (<350 cPs, 6 min, medium thixotropic, 30-35%), present
    // since the initial commit (516e1a5) with no source document and
    // contradicted by both GP White documents. Appearance (owner decision,
    // 2026-09-14): the GP White SDS description "white pigmented" is the
    // documented appearance; the TDS "Clear" row is carried over from GP Clear
    // and recorded as a TDS error awaiting reissue (see source-documents/
    // document-control-proposals.md).
    productDetails: {
      "Minimum Order Quantity": "1000 kg",
      "Packaging": "225 kg Drum",
      "Physical Form": "Liquid",
      "Colour / Appearance": "White pigmented (per GP White SDS; the shared TDS's 'Clear' row is carried over from GP Clear)",
    },
    techSpecs: {
      "Resin Type": "Orthophthalic, Unsaturated Polyester",
      "Curing System": "Non-accelerated",
      "Viscosity": "350–450 cPs",
      "Gel Time": "< 8 minutes",
      "Styrene Content": "33–40%",
      "Specific Gravity / Density": "Not part of the published specification for this grade",
      "Cure Time": "45 minutes – 1.5 hours",
      "MEKP Dosage": "1.5%",
      "Cobalt Octoate Dosage": "0.4%",
      "Purity": "99%",
    },
    tagline: "General-purpose orthophthalic resin for FRP moulding, on GP Clear Resin's base specification.",
    description:
      "GP White Resin is Samrat Poly Resins' general-purpose orthophthalic unsaturated polyester resin for FRP panels, general moulding, hand layup, spray-up, cooling towers and water storage tanks. GP White Resin shares GP Clear Resin's published base specification (TDS reference SPR-TDS-GCR): 350-450 cPs viscosity, gel time under 8 minutes, 33-40% styrene and a non-accelerated curing system. Its documented appearance is white pigmented, as described by the GP White SDS. The GP White TDS is GP Clear Resin's base sheet (SPR-TDS-GCR) issued under the GP White name: its technical values apply, but its 'Clear' appearance row and 'crystal-clear' wording are carried over from GP Clear and are incorrect for this grade. Its non-accelerated system is used with MEKP catalyst and cobalt octoate accelerator at room temperature. For buyers searching for white polyester resin, the relevant question is whether this general-purpose laminate role and published process data match the intended FRP component; it is not a substitute for a mould-surface gelcoat or a statement about the final colour of every reinforced part.",
    usageNote:
      'GP White Resin is catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and reinforced with <a href="/products/fibre-glass-mat/">glass fibre</a> for hand layup and spray-up. For the separately listed clear grade, see our <a href="/products/gp-clear-resin/">GP Clear Resin</a>; mould-facing surfaces can be finished with a <a href="/products/gp-gelcoat-resin/">Gelcoat Resin</a>, and projects needing higher chemical resistance can step up to <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a>.',
    features: [
      "Shares GP Clear Resin's published base specification: 350-450 cPs, gel under 8 min, 33-40% styrene",
      "Non-accelerated system — dose MEKP and cobalt accelerator to suit workshop conditions",
      "Excellent fibreglass wet-out and mechanical strength",
      "Supplied in 225 kg drums, minimum order 1,000 kg",
    ],
    applications: [
      "Panels and general-purpose moulding",
      "Hand layup and spray-up work",
      "Cooling towers and water storage tanks",
      "General industrial FRP fabrication",
    ],
    industries: [
      "FRP & composites manufacturing",
      "Water tanks & storage",
      "Cooling towers & industrial plants",
      "General moulding & fabrication",
    ],
    whyChoose: [
      "ISO 9001:2015 certificate of registration (GMSQR Certifications, first registered 2019)",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Published base specification shared with GP Clear Resin",
      "Supplied in bulk 225 kg drums, minimum order 1,000 kg",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is GP White Resin?",
        a: "GP White Resin is a general-purpose orthophthalic unsaturated polyester resin used for FRP moulding, panels, hand layup and spray-up work. It is supplied by Samrat Poly Resins as a non-accelerated liquid in 225 kg drums.",
      },
      {
        q: "What is the difference between GP White Resin and GP Clear Resin?",
        a: 'Both are general-purpose orthophthalic polyester resins. They share one published base specification (TDS reference SPR-TDS-GCR), and the GP White SDS confirms the same base resin as <a href="/products/gp-clear-resin/">GP Clear Resin</a>. The difference is appearance: GP White is white pigmented, as its SDS describes. Its TDS is GP Clear\'s base sheet under the GP White name, so its technical values apply but its \'Clear\' appearance row is a carried-over error.',
      },
      {
        q: "What is the gel time and viscosity of GP White Resin?",
        a: "GP White Resin shares GP Clear Resin's published base specification: viscosity 350-450 cPs and gel time under 8 minutes, at a non-accelerated cure with 1.5% MEKP and 0.4% cobalt octoate.",
      },
      {
        q: "How is GP White Resin cured?",
        a: 'As a non-accelerated resin, it is cured at room temperature with a cobalt octoate accelerator and an <a href="/products/mekp-hardener/">MEKP catalyst</a>, dosed to suit workshop conditions.',
      },
      {
        q: "What packaging and minimum order quantity does GP White Resin come in?",
        a: "It is supplied in 225 kg drums, with a minimum order quantity of 1000 kg.",
      },
      {
        q: "Can GP White Resin be used for FRP manufacturing?",
        a: "This published general-purpose grade is used for FRP panels, general moulding, hand layup, spray-up, cooling towers, water storage tanks and general industrial FRP fabrication. Review the TDS and actual component requirement before selection.",
      },
      {
        q: "What details should I share when requesting a GP White Resin quote?",
        a: "Please share the intended FRP component or application, expected quantity, required supplied appearance or finish, manufacturing process, and delivery location. This helps the sales team understand whether the published GP White Resin grade is relevant before preparing a quote.",
      },
      {
        q: "When should I consider a different resin grade?",
        a: 'Review <a href="/products/gp-clear-resin/">GP Clear Resin</a> where a clear GP grade is relevant, <a href="/products/lamination-resin/">Lamination Resin</a> for its published door, plywood and FRP-bonding applications, <a href="/products/gp-gelcoat-resin/">GP Gelcoat Resin</a> for a mould-facing surface role, and <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> where a project has a stated chemical- or corrosion-resistance requirement. Review the relevant product data before selecting a system.',
      },
    ],
    relatedSlugs: [
      "gp-clear-resin",
      "gp-gelcoat-resin",
      "mekp-hardener",
      "fibre-glass-mat",
    ],
  },
  {
    slug: "gp-quartz-resin",
    name: "GP Quartz Resin",
    category: "GP Resins",
    price: "",
    image: "gp-quartz-resin.jpg",
    images: ["gp-quartz-resin-2.jpg"],
    imageAlt: "GP Quartz Resin — orthophthalic polyester resin for engineered stone and quartz casting by Samrat Poly Resins",
    tdsUrl: "/tds/gp-quartz-resin-tds.pdf",
    // The printed sheet is GP Quartz Resin's own (SPR-TDS-GQR) and matches this
    // page. The file first issued also carried GP Clear Resin's sheet as a
    // hidden text layer; 2026-09-13 it was replaced by a copy with that covered
    // text removed (render pixel-identical, same Doc. Ref and Rev.). Previous
    // file: source-documents/historical/.
    sdsUrl: "/sds/gp-quartz-resin-sds.pdf",
    seo: {
      title: "GP Quartz Resin Manufacturer in India",
      description:
        "Orthophthalic polyester resin for artificial quartz, engineered stone slabs and mineral composite surfaces. Published viscosity and gel time.",
      keywords: [
        "GP Quartz Resin",
        "Quartz Resin",
        "Quartz Stone Resin",
        "Engineered Stone Resin",
        "Resin for Quartz Slabs",
        "Resin for Artificial Quartz",
        "Artificial Marble Resin",
        "Polyester Resin for Quartz",
        "Quartz Resin Manufacturer",
        "Quartz Resin Supplier",
        "Mineral Filled Polyester Resin",
      ],
    },
    // Values verified against SPR-TDS-GQR Rev. 01 (July 2026) — do not edit
    // without an updated TDS. Density, Tensile Strength, Flexural Strength
    // and Barcol Hardness previously appeared here from an earlier,
    // unverified source; the finalized TDS explicitly excludes these as
    // "additional engineering properties... not part of the standard
    // specification set," so they have been removed rather than kept.
    productDetails: {
      "Minimum Order Quantity": "1,000 kg",
      "Packaging": "225 kg Drum",
      "Physical Form": "Liquid",
      "Colour / Appearance": "Clear to Pale Yellow",
      "Shelf Life": "3 months",
      "Storage Temperature": "30–35 °C",
    },
    techSpecs: {
      "Resin Type": "Orthophthalic (Ortho) Unsaturated Polyester Resin",
      "Curing System": "Non-accelerated",
      "Viscosity": "400–800 cPs",
      "Gel Time": "7–10 minutes",
      "Styrene Content": "35–40%",
      "Cure Time": "2 hours",
      "MEKP Dosage": "1.5%",
      "Cobalt Octoate Dosage": "0.4%",
      "Purity": "99%",
    },
    tagline: "Orthophthalic polyester resin for engineered stone and quartz casting.",
    description:
      "Samrat GP Quartz Resin is an orthophthalic unsaturated polyester resin published for artificial quartz stone, engineered stone slabs and composite mineral surfaces. It is a specific product route for buyers evaluating a quartz-filled or mineral-filled composite requirement, rather than a broad general-FRP selection. The published TDS lists a clear-to-pale-yellow liquid appearance, 400–800 cPs viscosity, 7–10 minute gel time, a non-accelerated curing system and approximately two-hour cure time. Review the exact TDS with the intended component, filler or mineral type, production process and finish requirement before selection.",
    usageNote:
      'GP Quartz Resin is published with a non-accelerated system using an <a href="/products/mekp-hardener/">MEKP catalyst</a> and cobalt octoate accelerator; use the GP Quartz Resin TDS rather than transferring process settings from another grade. For cultured marble and artificial-stone work outside the published quartz-surfacing context, review <a href="/products/marble-resin/">Marble Resin</a>. For broad general FRP manufacture, review <a href="/products/gp-clear-resin/">GP Clear Resin</a> or the <a href="/products/unsaturated-polyester-resin/">Unsaturated Polyester Resin</a> product hub. <a href="/products/gp-white-resin/">GP White Resin</a>, <a href="/products/lamination-resin/">Lamination Resin</a> and <a href="/products/gp-gelcoat-resin/">GP Gelcoat Resin</a> have separate published roles and data.',
    features: [
      "Published for artificial quartz stone, engineered stone slabs and composite mineral surfaces",
      "Clear to pale yellow liquid appearance",
      "Published viscosity: 400–800 cPs",
      "Non-accelerated curing system with 7–10 minute gel time",
      "Published purity: 99%; approximate cure time: 2 hours",
      "225 kg drum packaging; minimum order quantity: 1,000 kg",
    ],
    applications: [
      "Artificial quartz stone manufacturing and engineered stone slabs",
      "Quartz kitchen and vanity countertops",
      "Artificial marble and decorative cast stone",
      "Table tops, interior panels and premium composite stone",
    ],
    industries: [
      "Engineered & quartz stone manufacturing",
      "Countertop & surface manufacturing",
      "Interior décor & architectural panels",
      "Composite stone products",
    ],
    whyChoose: [
      "ISO 9001:2015 certificate of registration (GMSQR Certifications, first registered 2019)",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "High filler-loading compatibility with consistent mechanical strength",
      "Room-temperature MEKP cure for straightforward, repeatable processing",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is GP Quartz Resin?",
        a: "GP Quartz Resin is an orthophthalic-based, general-purpose unsaturated polyester resin engineered for manufacturing artificial quartz stone, engineered stone slabs and composite mineral surfaces.",
      },
      {
        q: "What is the difference between GP Quartz Resin and GP Clear Resin?",
        a: 'GP Quartz Resin is engineered specifically for artificial quartz and engineered-stone casting, with a controlled viscosity and gel time suited to that use. Our <a href="/products/gp-clear-resin/">GP Clear Resin</a> is a broader general-purpose grade for hand layup, spray-up and moulding rather than stone casting.',
      },
      {
        q: "What is the viscosity and gel time of GP Quartz Resin?",
        a: "Viscosity is 400–800 cPs, and gel time is 7–10 minutes.",
      },
      {
        q: "What is the styrene content and purity of GP Quartz Resin?",
        a: "Styrene content is 35–40%, and purity is 99%.",
      },
      {
        q: "What is the cure time and packaging for GP Quartz Resin?",
        a: "Full cure takes around 2 hours. It is supplied in 225 kg drums, with a minimum order quantity of 1,000 kg.",
      },
      {
        q: "How is GP Quartz Resin cured?",
        a: "It cures under a non-accelerated system with an MEKP catalyst and cobalt octoate accelerator, reaching full cure in around 2 hours.",
      },
      {
        q: "Is GP Quartz Resin suitable for high filler loading?",
        a: "GP Quartz Resin is published for engineered stone and composite mineral surfaces, with a 400–800 cPs viscosity range. Confirm the actual filler or mineral type, intended product and production process against the current TDS before treating it as suitable for a specific formulation.",
      },
      {
        q: "Which details should I share before requesting a GP Quartz Resin quotation?",
        a: "Please share the intended engineered-stone, artificial-quartz, artificial-marble or mineral-filled product; the production process if known; filler or mineral type; expected quantity; required finish; and delivery location. This helps the sales team understand whether the published GP Quartz Resin role is relevant before preparing a quote.",
      },
      {
        q: "When should I consider another resin grade?",
        a: 'Review <a href="/products/marble-resin/">Marble Resin</a> for its published cultured-marble and artificial-stone role, <a href="/products/gp-clear-resin/">GP Clear Resin</a> or <a href="/products/unsaturated-polyester-resin/">Unsaturated Polyester Resin</a> for broad general FRP selection, <a href="/products/gp-white-resin/">GP White Resin</a> where its general-purpose FRP role is relevant, <a href="/products/lamination-resin/">Lamination Resin</a> for published lamination applications, and <a href="/products/gp-gelcoat-resin/">GP Gelcoat Resin</a> for a mould-surface role. Review the relevant product data before selecting a system.',
      },
    ],
    relatedSlugs: [
      "gp-clear-resin",
      "marble-resin",
      "mekp-hardener",
    ],
  },
  {
    slug: "gp-gelcoat-resin",
    name: "GP Gelcoat Resin",
    category: "GelCoat Resin",
    price: "₹180 / kg",
    image: "gp-gelcoat-resin.jpg",
    images: ["gp-gelcoat-resin-2.jpg", "gp-gelcoat-resin-3.jpg"],
    imageAlt:
      "GP Gelcoat Resin — white high-gloss polyester surface-coating gelcoat by Samrat Poly Resins",
    tdsUrl: "/tds/gp-gelcoat-resin-tds.pdf",
    sdsUrl: "/sds/gp-gelcoat-resin-sds.pdf",
    seo: {
      title: "GP Gelcoat Resin – Mould Surface Coating",
      description:
        "GP Gelcoat Resin — a white, high-gloss polyester surface coating for FRP moulds, not a laminating resin. Thixotropic, 8.5-minute gel time. 50/225 kg packs.",
      keywords: [
        "GP Gelcoat Resin",
        "Polyester Gelcoat Resin",
        "FRP Mould Gelcoat",
        "Surface Coating Resin",
        "White Gelcoat Resin",
      ],
    },
    // Values verified for GP Gelcoat Resin only — do not copy Thixotropy to
    // any other product. Density and Flash Point are not verified for this
    // grade and are intentionally excluded; Storage Temperature was not
    // supplied either, so it is omitted rather than estimated.
    productDetails: {
      "Minimum Order Quantity": "500 kg",
      "Packaging": "50 kg / 225 kg",
      "Physical Form": "Liquid",
      "Colour / Appearance": "White",
      "Gloss Level": "High Gloss",
      "Shelf Life": "3 Months (Drum) / 2 Months (PET)",
    },
    techSpecs: {
      "Resin Type": "Polyester (Surface-Coating Gelcoat)",
      "Curing System": "MEKP Catalyst, Room Temperature Cure",
      "Viscosity": "11,000 cPs",
      "Thixotropy": "Yes — resists sagging on vertical mould surfaces",
      "Gel Time": "8.5 Minutes",
      "Styrene Content": "30%",
      "Cure Time": "1.5–2 Hours",
      "MEKP Dosage": "1.5%",
      "Purity": "100%",
    },
    tagline: "White, high-gloss polyester gelcoat for FRP mould surfaces.",
    description:
      "GP Gelcoat Resin is a white, high-gloss polyester surface-coating resin — not a laminating resin. It is applied as the outermost layer of an FRP moulding, brushed, sprayed or rollered directly onto the mould face before any reinforcement goes in, where its high viscosity and thixotropic behaviour let it cling to vertical and overhead surfaces without sagging or running. Once cured with an MEKP catalyst, it forms a smooth, glossy, protective skin that shields the laminate against moisture and abrasion and gives the finished part its visible surface finish, while the structural laminate itself — typically GP Clear Resin, reinforced with glass fibre — is built up behind it. Samrat Poly Resins supplies GP Gelcoat Resin as a 100% pure, general-purpose white gelcoat suited to a wide range of FRP mould work.",
    usageNote:
      'In a typical FRP lay-up, GP Gelcoat Resin is brushed or sprayed onto the mould first and left to gel, then reinforced with <a href="/products/fibre-glass-mat/">glass fibre</a> saturated in a laminating resin such as our <a href="/products/gp-clear-resin/">GP Clear Resin</a> or base <a href="/products/unsaturated-polyester-resin/">Unsaturated Polyester Resin (UPR)</a>, catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a>. Where a coloured rather than plain white finish is needed, <a href="/products/frp-polyester-pigment/">FRP Polyester Pigment</a> can be blended into the gelcoat before catalysing. For door and plywood lamination work rather than mould gelcoating, see our <a href="/products/lamination-resin/">Lamination Resin</a>; for moulds facing harsher chemical exposure or continuous water immersion, a <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> system may be more suitable.',
    features: [
      "White, high-gloss finish with 100% purity, as supplied",
      "Accepts polyester pigment for coloured finishes beyond standard white",
      "Thixotropic — resists sagging and running on vertical mould surfaces",
      "Fast gel time of 8.5 minutes for efficient mould-release cycles",
      "Cures with MEKP catalyst and cobalt octoate accelerator at room temperature",
      "30% styrene content for consistent, controlled application viscosity",
      "Supplied in 50 kg or 225 kg packs; minimum order 500 kg",
    ],
    applications: [
      "Mould surfaces for FRP boat hulls and body panels",
      "Bathware, sanitaryware and water tank exteriors",
      "FRP furniture, panels and moulded components",
    ],
    industries: [
      "FRP mould manufacturing",
      "Boat & marine hull building",
      "Automotive body panels",
      "Bathware & sanitaryware",
      "Water tanks & storage",
      "General FRP moulding & fabrication",
    ],
    whyChoose: [
      "ISO 9001:2015 certificate of registration (GMSQR Certifications, first registered 2019)",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Consistent 100% purity with batch-to-batch quality control",
      "Bulk supply from 500 kg, packed in 50 kg or 225 kg packs",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is GP Gelcoat Resin?",
        a: "GP Gelcoat Resin is a white, high-gloss polyester surface-coating resin used as the outermost layer of FRP mouldings. It is applied to the mould face before the fibreglass laminate is built up, giving the finished part its visible, protective surface finish.",
      },
      {
        q: "What is the difference between Gelcoat Resin and General Purpose Resin?",
        a: "General-purpose resin (such as our GP Clear Resin or UPR) is designed to saturate and bind fibreglass reinforcement. Gelcoat is a thicker, thixotropic surface-coating resin applied directly to the mould with no reinforcement mixed in — it forms the outer skin and finish of a moulding, while general-purpose resin forms the structural laminate behind it.",
      },
      {
        q: "Can GP Gelcoat Resin be pigmented for coloured finishes?",
        a: 'Yes. It is supplied as a plain white, pigment-free gelcoat, but <a href="/products/frp-polyester-pigment/">FRP Polyester Pigment</a> can be blended in before catalysing to produce a coloured, glossy finish for boat hulls, bathware, panels or mouldings.',
      },
      {
        q: "Is GP Gelcoat Resin UV resistant or suitable for prolonged outdoor exposure?",
        a: "GP Gelcoat Resin is a general-purpose gelcoat without a specific UV-stabiliser additive package. Like any unstabilised polyester surface, it can gradually yellow or chalk under prolonged direct UV exposure. For parts requiring long-term outdoor colour stability, discuss UV-stabilised formulation requirements with our technical team before specifying.",
      },
      {
        q: "Does GP Gelcoat Resin offer good chemical or water resistance?",
        a: "Its TDS says it shields the laminate from moisture, abrasion and weathering, and positions it as a more affordable alternative to ISO or vinyl ester gelcoats for standard-duty work. It publishes no chemical-resistance or immersion test. Where the surface faces sustained water contact or outdoor service, review <a href='/products/iso-gelcoat/'>ISO Gelcoat</a>; for aggressive chemical service, discuss a vinyl ester system.",
      },
      {
        q: "Why is Gelcoat applied before the fibreglass reinforcement?",
        a: "Gelcoat is sprayed or brushed onto the mould surface first so that, once the part is de-moulded, it becomes the visible outer face. Applying it before lay-up lets it cure against the smooth mould surface, producing a glossy, ready-to-use finish without additional surface finishing.",
      },
      {
        q: "Why is GP Gelcoat Resin thixotropic?",
        a: "Thixotropy lets the gelcoat resist sagging or running when applied to vertical or overhead mould surfaces, so it builds up to an even coating thickness rather than pooling at the bottom of the mould before it gels.",
      },
      {
        q: "What is the gel time and cure time of GP Gelcoat Resin?",
        a: "Gel time is 8.5 minutes. Full cure at room temperature, once catalysed with MEKP (around 1.5%), typically takes 1.5 to 2 hours. The current TDS does not publish a cobalt octoate dosage for this gelcoat — confirm the accelerator dosage with us before production.",
      },
      {
        q: "What is the viscosity and styrene content of GP Gelcoat Resin?",
        a: "Viscosity is approximately 11,000 cPs — much thicker than a general-purpose laminating resin, by design, so it clings to the mould surface. Styrene content is 30%, and purity is 100%.",
      },
      {
        q: "What packaging and minimum order quantity does GP Gelcoat Resin come in?",
        a: "It is supplied in 50 kg or 225 kg packs, with a minimum order quantity of 500 kg.",
      },
    ],
    relatedSlugs: [
      "gp-clear-resin",
      "mekp-hardener",
      "fibre-glass-mat",
      "frp-polyester-pigment",
      "vinyl-ester-resin",
    ],
    // Ordered application-guide cards for the "Explore applications" section —
    // see src/data/applications.js. All five are currently draft:true (card
    // content only, no dedicated page yet) — approved via technical audit.
    applicationSlugs: [
      "gelcoat-for-boat-marine-hull-finishing",
      "gelcoat-for-frp-bathware-sanitaryware",
      "gelcoat-for-water-tank-exteriors",
      "gelcoat-for-general-frp-mould-finishing",
      "gelcoat-for-automotive-body-panels",
    ],
  },
  {
    slug: "button-grade-resin",
    name: "Button Grade Resin",
    category: "GP Resins",
    price: "₹175 / kg",
    image: "button-grade-resin.jpg",
    images: ["button-grade-resin-2.jpg", "button-grade-resin-3.jpg"],
    imageAlt:
      "Button Grade Resin — transparent unsaturated polyester casting resin for buttons by Samrat Poly Resins",
    tdsUrl: "/tds/button-grade-resin-tds.pdf",
    sdsUrl: "/sds/button-grade-resin-sds.pdf",
    seo: {
      title: "Button Grade Resin – Polyester Casting Resin for Buttons",
      description:
        "Button Grade Resin — a transparent, high-clarity unsaturated polyester casting resin for button and small moulding manufacture. Gel time 9.5 minutes. 225 kg drums.",
      keywords: [
        "Button Grade Resin",
        "Polyester Button Grade Resin",
        "Button Resin",
        "Unsaturated Polyester Button Resin",
        "Casting Grade Polyester Resin",
        "Moulding Polyester Resin",
        "Polyester Casting Resin",
        "Transparent Button Resin",
      ],
    },
    // Values verified for Button Grade Resin only. Purity and Minimum Order
    // Quantity were not part of the verified sheet, so neither is included —
    // the previous "2 kg / 200 ml bottle" figures described retail/craft
    // packaging that directly conflicted with the verified 225 kg drum
    // packaging, so they were removed rather than kept or guessed at.
    // Density and Flash Point are not verified for this grade and are
    // intentionally excluded.
    productDetails: {
      "Packaging": "225 kg Drum",
      "Physical Form": "Semi-liquid",
      "Colour / Appearance": "Transparent",
      "Grade": "Casting / Moulding",
      "Shelf Life": "2 Months",
      "Storage Temperature": "30–35 °C",
    },
    techSpecs: {
      "Resin Type": "Polyester (Unsaturated)",
      "Viscosity": "1,100 cPs",
      "Gel Time": "9.5 Minutes",
      "Curing Time": "2 Hours",
      "Styrene Content": "33%",
      "MEKP Dosage": "1.5%",
      "Cobalt Octoate Dosage": "0.1%",
    },
    tagline: "High-clarity resin for buttons and small mouldings.",
    description:
      "Button Grade Resin is a specialised unsaturated polyester casting resin formulated for manufacturing buttons and other small decorative mouldings. Unlike a general-purpose laminating resin, which is optimised for reinforcement wet-out and structural strength, Button Grade Resin is a semi-liquid, transparent casting grade designed for clarity, hardness and a fine, polishable surface finish — properties that matter most when the cast part itself is the visible, finished product rather than a structural laminate. Cured with an MEKP catalyst and cobalt octoate accelerator, it sets into a hard, glass-clear casting suitable for both natural transparent buttons and pigmented colour work. Samrat Poly Resins supplies Button Grade Resin in bulk 225 kg drums for button, fashion-accessory and small-moulding manufacturers.",
    usageNote:
      'Button Grade Resin is cured with an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt accelerator, in the same way as our general-purpose grades. If your project needs a resin for structural FRP lay-up rather than decorative casting, see our <a href="/products/gp-clear-resin/">GP Clear Resin</a> or base <a href="/products/unsaturated-polyester-resin/">Unsaturated Polyester Resin (UPR)</a>; for mould-surface coating, door lamination or higher chemical resistance, our <a href="/products/gp-gelcoat-resin/">Gelcoat Resin</a>, <a href="/products/lamination-resin/">Lamination Resin</a> and <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> grades are also available.',
    features: [
      "Transparent, glass-clear casting resin with a fine, polishable finish",
      "Semi-liquid consistency suited to button and small-mould casting",
      "Gel time of 9.5 minutes for controlled, predictable casting cycles",
      "Cures with MEKP catalyst and cobalt octoate accelerator in around 2 hours",
      "33% styrene content for consistent casting performance",
      "Supplied in 225 kg drums",
    ],
    applications: [
      "Buttons and fashion accessories",
      "Small decorative mouldings and novelty items",
      "Transparent and pigmented casting work",
    ],
    industries: [
      "Button & fashion accessory manufacturing",
      "Garment & apparel trims",
      "Decorative casting & novelty moulding",
      "General small-parts casting",
    ],
    whyChoose: [
      "ISO 9001:2015 certificate of registration (GMSQR Certifications, first registered 2019)",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Supplied in bulk 225 kg drums for manufacturers",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is Button Grade Resin?",
        a: "Button Grade Resin is a transparent, semi-liquid unsaturated polyester casting resin formulated for manufacturing buttons and other small decorative mouldings. It is a casting/moulding grade, not a laminating resin — it is poured or cast into moulds rather than used with fibreglass reinforcement.",
      },
      {
        q: "Why is Button Grade Resin used for button manufacturing?",
        a: "Button manufacturing needs a resin that casts clear and hard, with a fine surface that takes a high polish, since the cast part itself is the finished, visible product. Button Grade Resin is formulated specifically for this clarity and surface finish, rather than for structural strength or reinforcement wet-out.",
      },
      {
        q: "How is Button Grade Resin different from General Purpose Resin?",
        a: "General-purpose resin (such as our GP Clear Resin or UPR) is designed to saturate and bind fibreglass reinforcement for structural FRP laminates. Button Grade Resin is a casting grade, used on its own without reinforcement, formulated for clarity, hardness and polishability rather than laminate strength.",
      },
      {
        q: "What is the gel time and curing time of Button Grade Resin?",
        a: "Gel time is 9.5 minutes. Full cure at room temperature, once catalysed with MEKP (around 1.5%) and a cobalt octoate accelerator (around 0.1%), takes approximately 2 hours.",
      },
      {
        q: "What is the viscosity and styrene content of Button Grade Resin?",
        a: "Viscosity is approximately 1,100 cPs and styrene content is 33%.",
      },
      {
        q: "What is the shelf life and storage temperature for Button Grade Resin?",
        a: "Shelf life is 2 months from manufacture. Store between 30–35 °C, away from direct heat and sunlight.",
      },
      {
        q: "What packaging is Button Grade Resin supplied in?",
        a: "It is supplied in bulk 225 kg drums.",
      },
    ],
    relatedSlugs: [
      "gp-clear-resin",
      "unsaturated-polyester-resin",
      "mekp-hardener",
    ],
  },
  {
    slug: "roof-light-resin",
    name: "Roof Light Sheet Grade Resin",
    category: "Sheet Grade Resins",
    price: "₹135 / kg",
    image: "roof-light-resin.jpg",
    images: ["roof-light-resin-2.jpg", "roof-light-resin-3.jpg"],
    imageAlt:
      "Roof Light Sheet Grade Resin — water-white translucent orthophthalic polyester resin for roofing sheets by Samrat Poly Resins",
    tdsUrl: "/tds/roof-light-resin-tds.pdf",
    sdsUrl: "/sds/roof-light-resin-sds.pdf",
    seo: {
      title: "Roof Light Sheet Grade Resin – Translucent Roofing Resin",
      description:
        "Roof Light Sheet Grade Resin — a water-white orthophthalic polyester resin for translucent roof light and skylight sheets. Gel time 6.5 minutes. 225 kg drums.",
      keywords: [
        "Roof Light Sheet Grade Resin",
        "Roof Light Resin",
        "Roof Sheet Resin",
        "Skylight Sheet Resin",
        "Roofing Polyester Resin",
        "Translucent FRP Sheet Resin",
        "FRP Roof Light Resin",
      ],
    },
    // This page owns the documented water-white roof-light and skylight
    // intent, distinct from the pre-pigmented Sheet Grade Yellow sheet/panel
    // route. SPR-TDS-RLS Rev. 01 supports the current 2-month shelf life,
    // 500 kg MOQ and 1.1 g/cm³ specific gravity. Flash Point remains excluded
    // because the TDS marks it "Not Provided". Catalogue gel time differs
    // from the TDS; the page uses the TDS value and flags the conflict.
    productDetails: {
      "Packaging": "225 kg Drum",
      "Minimum Order Quantity": "500 kg",
      "Physical Form": "Liquid",
      "Colour / Appearance": "Water White",
      "Shelf Life": "2 Months",
      "Storage Temperature": "30–35 °C",
    },
    techSpecs: {
      "Resin Type": "Orthophthalic Unsaturated Polyester",
      "Curing System": "Non-Accelerated (MEKP Catalyst)",
      "Viscosity": "280 cPs",
      "Gel Time": "6.5 Minutes",
      "Styrene Content": "35%",
      "Cure Time": "12 Hours",
      "MEKP Dosage": "1.5%",
      "Cobalt Octoate Dosage": "0.4%",
      "Purity": "99%",
      "Specific Gravity": "1.1 g/cm³",
    },
    tagline: "Water-white polyester resin for published roof-light and skylight sheet applications.",
    description:
      "Roof Light Sheet Grade Resin is Samrat Poly Resins' water-white orthophthalic unsaturated polyester resin for the published translucent roof-light panel and skylight-sheet role. The current Technical Data Sheet identifies high optical clarity for light penetration and lists skylights, roof-light panels, greenhouses, industrial and commercial roofing, and roofing-sheet production as its application context. This is a specific sheet-grade route for buyers defining a roof-light or daylighting requirement, rather than a broad GP Clear Resin search or a pre-pigmented yellow sheet/panel route. Review the intended finished sheet, required supplied appearance, reinforcement context and current TDS before selection. The product is published in 225 kg drums with a 500 kg MOQ.",
    usageNote:
      'For a published roof-light, skylight or daylighting-sheet requirement, review <a href="/products/fibre-glass-mat/">Glass Fiber Mat</a> as the separate reinforcement role and the current Roof Light Resin TDS as the product-specific reference. For a pre-pigmented yellow sheet or panel, review <a href="/products/sheet-grade-yellow-resin/">Sheet Grade Yellow Resin</a>; for broad clear general-purpose FRP intent, review <a href="/products/gp-clear-resin/">GP Clear Resin</a> or the <a href="/products/unsaturated-polyester-resin/">Unsaturated Polyester Resin (UPR)</a> family. A mould-facing surface-finish requirement is a separate <a href="/products/gp-gelcoat-resin/">Gelcoat Resin</a> decision, while <a href="/products/lamination-resin/">Lamination Resin</a> is published for a different bonding-focused role.',
    features: [
      "Water-white appearance with high optical clarity published for roof-light panels",
      "Published for skylights, roof-light panels, greenhouses and industrial/commercial roofing",
      "Current product-specific Technical Data Sheet available",
      "280 cPs viscosity and 6.5-minute gel time published in the current TDS",
      "225 kg drum packaging with a published 500 kg MOQ",
    ],
    applications: [
      "Roof light panels and skylight sheets",
      "Greenhouse roofing sheets",
      "Industrial and commercial roofing",
      "Roofing sheet production",
    ],
    industries: [
      "Roofing sheet & panel manufacturing",
      "Industrial & commercial roofing",
      "Greenhouse & agricultural structures",
      "Roof-light & skylight components",
    ],
    whyChoose: [
      "Current product-specific Roof Light Resin TDS available",
      "Published for roof-light panels, skylights, greenhouses and roofing-sheet production",
      "Water-white appearance, 280 cPs viscosity and 6.5-minute gel time published in the TDS",
      "225 kg drum packaging and 500 kg MOQ published in the TDS",
      "Company and facility information available for Samrat Poly Resins in Doraha, Ludhiana",
    ],
    faqs: [
      { q: "What is Roof Light Sheet Grade Resin?", a: "Roof Light Sheet Grade Resin is the site's water-white orthophthalic unsaturated polyester resin for the published translucent roof-light panel and skylight-sheet role. The current TDS also lists greenhouses and industrial/commercial roofing." },
      { q: "What does Sheet Grade mean for this product?", a: "It identifies the published FRP roofing-sheet and roof-light panel context. The product should still be checked against the current Roof Light Resin TDS and the actual finished-sheet requirement." },
      { q: "How is Roof Light Resin different from Sheet Grade Yellow Resin?", a: 'Roof Light Resin is supplied water-white for the published roof-light and skylight route. <a href="/products/sheet-grade-yellow-resin/">Sheet Grade Yellow Resin</a> is the separately published pre-pigmented yellow product for sheet and panel applications. Start with the required supplied appearance and finished-sheet role.' },
      { q: "Is Roof Light Resin the same as GP Clear Resin?", a: 'No. <a href="/products/gp-clear-resin/">GP Clear Resin</a> is the published general-purpose clear orthophthalic resin route. Roof Light Sheet Grade Resin is the separately published water-white grade for roof-light and skylight sheet intent. Review each current product-specific TDS rather than transferring values between them.' },
      { q: "Which reinforcement should be reviewed for an FRP roof-light sheet?", a: 'Glass Fiber is a separate reinforcement role in an FRP material system. Review <a href="/products/fibre-glass-mat/">Glass Fiber Mat</a> and the actual component specification; this page does not prescribe a mat weight or laminate build-up.' },
      { q: "Which document should I review before ordering?", a: 'Use the current <a href="/tds/roof-light-resin-tds.pdf" target="_blank" rel="noopener">Roof Light Sheet Grade Resin TDS</a> for the exact product under consideration. Do not transfer technical values or performance expectations from another resin grade.' },
      { q: "What should I provide for a Roof Light Resin quotation?", a: "Share the finished roofing or roof-light sheet requirement, required supplied appearance, reinforcement context if known, expected quantity and delivery location. Include a drawing or buyer specification where available." },
      {
        q: "What is the gel time and cure time of Roof Light Sheet Grade Resin?",
        a: "Gel time is 6.5 minutes. Full cure at room temperature, once catalysed with MEKP (around 1.5%) and a cobalt octoate accelerator (around 0.4%), takes approximately 12 hours.",
      },
      {
        q: "What is the viscosity and styrene content of Roof Light Sheet Grade Resin?",
        a: "Viscosity is approximately 280 cPs and styrene content is 35%, with 99% purity.",
      },
      {
        q: "What is the shelf life and storage temperature for Roof Light Sheet Grade Resin?",
        a: "Shelf life is 2 months from manufacture. Store between 30–35 °C, away from direct heat and sunlight.",
      },
      {
        q: "What packaging does Roof Light Sheet Grade Resin come in?",
        a: "It is supplied in bulk 225 kg drums.",
      },
    ],
    relatedSlugs: [
      "sheet-grade-yellow-resin",
      "gp-clear-resin",
      "gp-gelcoat-resin",
      "mekp-hardener",
    ],
    applicationSlugs: [
      "roof-light-sheet-resin-for-frp-roofing-and-skylight-sheets",
    ],
  },
  {
    slug: "fire-retardant-resin",
    name: "Fire Retardant Resin",
    category: "Fire Retardant Resins",
    price: "₹175 / kg",
    image: "fire-retardant-resin.jpg",
    images: ["fire-retardant-resin-2.jpg", "fire-retardant-resin-3.jpg"],
    imageAlt:
      "Fire Retardant Resin — halogenated unsaturated polyester resin by Samrat Poly Resins",
    tdsUrl: "/tds/fire-retardant-resin-tds.pdf",
    sdsUrl: "/sds/fire-retardant-resin-sds.pdf",
    seo: {
      title: "Fire Retardant Resin Manufacturer in India | FR Polyester Resin",
      description:
        "Halogenated Fire Retardant Unsaturated Polyester Resin (FR Resin) for published industrial FRP applications. Review the current TDS, project requirement and quotation details with Samrat Poly Resins.",
      keywords: [
        "Fire Retardant Resin",
        "FR Resin",
        "Fire Retardant Polyester Resin",
        "FR Polyester Resin",
        "Fire Retardant UPR",
        "Fire Retardant Unsaturated Polyester Resin",
        "FRP Fire Retardant Resin",
        "Halogenated Fire Retardant Resin",
      ],
    },
    // Current product data is taken from SPR-TDS-FRR Rev. 01 (July 2026).
    // The catalogue calls this an orthophthalic grade while the TDS only says
    // "unsaturated polyester"; the page therefore avoids presenting a base
    // chemistry beyond the current TDS. The TDS lists a manufacturer-published
    // UL 94 V0* statement but says its test/certification reference still needs
    // confirmation, so that statement is not presented as a verified rating.
    productDetails: {
      "Minimum Order Quantity": "500 kg",
      "Packaging": "35 kg / 225 kg",
      "Physical Form": "Liquid",
      "Colour / Appearance": "White",
      "Shelf Life": "3 Months",
      "Storage Temperature": "30–35 °C",
    },
    techSpecs: {
      "Base Resin": "Unsaturated Polyester",
      "FR Type": "Halogenated Fire-Retardant Formulation",
      "Curing System": "Room Temperature Cure with MEKP Catalyst",
      "Viscosity": "400 cPs",
      "Gel Time": "5.5 Minutes",
      "Styrene Content": "35%",
    },
    tagline: "Halogenated FR polyester resin for industrial FRP requirements.",
    description:
      "Fire Retardant Resin is Samrat Poly Resins' published halogenated unsaturated polyester product for industrial FRP requirements where a fire-performance specification forms part of the material discussion. The current TDS identifies a white liquid resin, room-temperature cure with an MEKP catalyst, 400 cPs viscosity, 5.5-minute gel time and 35 kg / 225 kg packaging. It is a specialist product role to review alongside the finished FRP component, required specification and current product documentation — not a general-purpose claim that every FRP part will meet a fire classification.",
    usageNote:
      'Where a reinforced FRP component is being considered, <a href="/products/fibre-glass-mat/">Glass Fiber</a> is the separate reinforcement product to review; the required mat, laminate build-up and finished-system requirement should be specified rather than assumed. For general FRP work without a stated fire-performance requirement, review <a href="/products/gp-clear-resin/">GP Clear Resin</a> or the <a href="/products/unsaturated-polyester-resin/">Unsaturated Polyester Resin (UPR)</a> family. <a href="/products/gp-gelcoat-resin/">Gelcoat Resin</a> remains a separate mould-surface role, while <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> has its own published chemical- and corrosion-resistance product context.',
    features: [
      "Halogenated fire-retardant formulation listed in the current TDS",
      "Unsaturated polyester resin supplied as a white liquid",
      "Published 400 cPs viscosity and 5.5-minute gel time",
      "Room-temperature cure with an MEKP catalyst",
      "35 kg / 225 kg packaging and 500 kg minimum order quantity published in the TDS",
      "Product-specific Technical Data Sheet available for review",
    ],
    applications: [
      "Automotive and railway FRP components",
      "Marine and electrical applications",
      "FRP panels and building components",
      "Tunnels, infrastructure and other fire-sensitive environments",
    ],
    industries: [
      "Automotive and railway components",
      "Marine FRP applications",
      "Electrical FRP applications",
      "FRP panels and building components",
    ],
    whyChoose: [
      "A dedicated halogenated Fire Retardant Resin product route, separate from general-purpose grades",
      "Current product-specific TDS with published supply and technical data",
      "Published 35 kg / 225 kg packaging and 500 kg MOQ",
      "A product-selection path that asks for the actual finished-system requirement before quotation",
    ],
    faqs: [
      {
        q: "What is Fire Retardant Resin?",
        a: "Fire Retardant Resin is Samrat Poly Resins' published halogenated unsaturated polyester resin for industrial FRP requirements where a fire-performance specification forms part of the product discussion. It is supplied as a white liquid and has its own Technical Data Sheet; it is not the same product role as a general-purpose polyester resin.",
      },
      {
        q: "How is Fire Retardant Resin different from General Purpose Polyester Resin?",
        a: 'GP Clear Resin and the <a href="/products/unsaturated-polyester-resin/">UPR</a> family are published for broader general FRP roles. This Fire Retardant Resin is the specialist halogenated product route to review when a buyer has a stated fire-performance requirement. The final choice should follow the actual component, required specification and current product-specific TDS, not a product name alone.',
      },
      {
        q: "Is Fire Retardant Resin fireproof?",
        a: "No. “Fire retardant” is a product classification, not a claim that a resin or finished FRP part is fireproof or non-combustible. The relevant finished-system construction, reinforcement and project test or classification requirement must be reviewed before specification.",
      },
      {
        q: "Does the current Fire Retardant Resin TDS provide a verified fire rating?",
        a: "The current TDS includes a manufacturer-published “UL 94 V0*” statement. Its own note says that the test-report/certification reference is to be supplied on request and confirmed in a later revision. No corresponding test report or certificate is present in this repository, so buyers should share their exact required standard or classification for confirmation before specifying the material.",
      },
      {
        q: "Which applications are published for this product?",
        a: "The current TDS lists automotive and railway components, marine and electrical applications, FRP panels and building components, and tunnels, infrastructure and fire-sensitive environments. These are application categories to discuss, not a confirmation that every finished part meets a project-specific requirement.",
      },
      {
        q: "Can Fire Retardant Resin be considered with Glass Fiber?",
        a: 'Glass Fiber is the separate reinforcement product to review for an FRP system. See <a href="/products/fibre-glass-mat/">Glass Fiber Mat</a>, then confirm the required reinforcement, laminate construction and finished-system specification rather than assuming a mat weight or build-up.',
      },
      {
        q: "What should I share when requesting a Fire Retardant Resin quote?",
        a: "Share the finished FRP application, the exact fire standard or classification if one is specified, the relevant project or technical requirement, reinforcement context if known, expected quantity, packaging requirement and delivery location. This allows a focused technical and commercial discussion without assuming project compliance.",
      },
      {
        q: "Which documents are currently available?",
        a: 'The current <a href="/tds/fire-retardant-resin-tds.pdf" target="_blank" rel="noopener">Fire Retardant Resin TDS</a> and the <a href="/products/">published product range</a> are available. The repository does not include an SDS, COA, fire test report or certification document for this grade.',
      },
      {
        q: "What supply and technical information is published?",
        a: "The current TDS lists 35 kg / 225 kg packaging, a 500 kg minimum order quantity, white liquid appearance, three-month shelf life, 30–35 °C storage, 400 cPs viscosity, 5.5-minute gel time and 35% styrene content. Confirm current product data before ordering.",
      },
    ],
    relatedSlugs: [
      "iso-fire-retardant-resin",
      "unsaturated-polyester-resin",
      "gp-clear-resin",
      "fibre-glass-mat",
      "gp-gelcoat-resin",
      "vinyl-ester-resin",
    ],
    applicationSlugs: ["fire-retardant-resin-for-railway-and-transport-frp"],
  },
  {
    slug: "iso-fire-retardant-resin",
    name: "ISO Fire Retardant Resin",
    category: "Fire Retardant Resins",
    price: "₹175 / kg",
    image: "iso-fire-retardant-resin.jpg",
    images: ["iso-fire-retardant-resin-2.jpg"],
    imageAlt: "ISO Fire Retardant Resin — halogen-free, ATH-filled isophthalic fire-retardant polyester resin by Samrat Poly Resins",
    tdsUrl: "/tds/iso-fire-retardant-resin-tds.pdf",
    // Printed sheet is ISO Fire Retardant Resin's own (SPR-TDS-IFR) and matches
    // this page. The hidden GP Clear Resin text layer in the first-issued file
    // was removed 2026-09-13, as for GP Quartz (previous file kept in
    // source-documents/historical/).
    sdsUrl: "/sds/iso-fire-retardant-resin-sds.pdf",
    seo: {
      title: "ISO Fire Retardant Resin Manufacturer in India",
      description:
        "Halogen-free, ATH-filled isophthalic fire-retardant polyester resin. ISO here means isophthalic chemistry, not certification. TDS available.",
      keywords: [
        "ISO Fire Retardant Resin",
        "Isophthalic Fire Retardant Resin",
        "Isophthalic FR Resin",
        "ISO FR Resin",
        "Fire Retardant Isophthalic Resin",
        "Isophthalic Polyester Fire Retardant Resin",
      ],
    },
    productDetails: {
      "Minimum Order Quantity": "500 kg",
      "Packaging": "35 kg / 225 kg",
      "Physical Form": "Liquid",
      "Colour / Appearance": "White",
      "Shelf Life": "3 months",
      "Storage Temperature": "30–35°C",
    },
    techSpecs: {
      "Resin Type": "Unsaturated Polyester Resin (Fire Retardant Grade)",
      "ISO Designation": "Isophthalic-based resin chemistry (not ISO certification)",
      "FR Type": "Halogen-free, ATH-filled formulation",
      "Curing System": "Room-temperature cure with MEKP catalyst",
      "Viscosity": "400 cPs",
      "Gel Time": "5.5 minutes",
      "Styrene Content": "35%",
      "Specific Gravity / Density": "1.18 g/cm³",
      "Flash Point": "34°C (Closed Cup)",
    },
    tagline: "Halogen-free, ATH-filled isophthalic FR polyester resin.",
    description:
      "ISO Fire Retardant Resin is Samrat Poly Resins’ published halogen-free, ATH-filled isophthalic unsaturated polyester grade for industrial FRP discussions where a fire-performance requirement is part of product selection. In this product name, ISO refers to isophthalic resin chemistry—not ISO certification. The current TDS identifies a white liquid resin with its own technical and supply data; it does not establish a finished FRP component’s project approval or classification.",
    usageNote:
      'For an FRP system, <a href="/products/fibre-glass-mat/">Glass Fiber</a> is the separate reinforcement product to review. Compare this isophthalic ISO FR route with the separate <a href="/products/fire-retardant-resin/">Fire Retardant Resin</a> page when the project specification identifies a different FR product requirement. For general-purpose work without a stated FR requirement, review <a href="/products/gp-clear-resin/">GP Clear Resin</a> or the broader <a href="/products/unsaturated-polyester-resin/">Unsaturated Polyester Resin</a> family. <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> has its own published product context for a different specialist requirement.',
    features: [
      "Halogen-free, ATH-filled formulation identified in the current TDS",
      "Published isophthalic-based product designation; ISO is not a certification claim",
      "White liquid with published 400 cPs viscosity and 5.5-minute gel time",
      "Published 35 kg / 225 kg packaging and 500 kg minimum order quantity",
      "Product-specific Technical Data Sheet available for review",
    ],
    applications: [
      "Railway and marine applications",
      "Automotive fire-performance component discussions",
      "FRP panels where a fire-performance requirement is specified",
      "Electrical enclosures, tunnels and construction applications to review against the project requirement",
    ],
    industries: [
      "Railway and transport FRP",
      "Marine FRP",
      "Automotive FRP components",
      "Panels and industrial FRP where requirements are specified",
    ],
    whyChoose: [
      "Separate isophthalic ISO FR product route with its own current TDS",
      "Published technical and supply information for the listed grade",
      "Halogen-free, ATH-filled formulation identified in the TDS",
      "Industrial enquiry path for the finished component, requirement and delivery details",
    ],
    faqs: [
      {
        q: "What is ISO Fire Retardant Resin?",
        a: "It is Samrat Poly Resins’ published halogen-free, ATH-filled isophthalic unsaturated polyester Fire Retardant Resin grade. It is a specialist product route to review when the finished FRP application has a stated fire-performance requirement.",
      },
      {
        q: "What does ISO mean in ISO Fire Retardant Resin?",
        a: "ISO refers to the product’s published isophthalic-based resin chemistry. It does not mean the product is ISO certified, ISO approved or compliant with an ISO standard.",
      },
      {
        q: "Is ISO Fire Retardant Resin an unsaturated polyester resin?",
        a: "Yes. The current TDS identifies it as an Unsaturated Polyester Resin (Fire Retardant Grade) and describes it as isophthalic-based.",
      },
      {
        q: "What is the difference between ISO Fire Retardant Resin and Fire Retardant Resin?",
        a: 'The current ISO Fire Retardant Resin TDS identifies a halogen-free, ATH-filled isophthalic-based grade. The separate <a href="/products/fire-retardant-resin/">Fire Retardant Resin</a> TDS identifies a halogenated Fire Retardant Unsaturated Polyester Resin grade. Review the exact project requirement and the current product-specific TDS; the repository does not establish a universal finished-system result for either product.',
      },
      {
        q: "Is ISO Fire Retardant Resin fireproof?",
        a: "No. Fire Retardant Resin should not be interpreted as fireproof, non-combustible or as an automatic classification for a finished FRP component. The finished system and its project requirement must be reviewed.",
      },
      {
        q: "Does this product have a verified fire rating in the repository?",
        a: "The current TDS displays a UL 94 V0 statement, but the repository contains no supporting fire-test report, test method detail or tested specimen/system context. This page therefore does not present a fire rating or project compliance as verified.",
      },
      {
        q: "Does this product have documented chemical or corrosion resistance?",
        a: "The TDS describes an isophthalic backbone, but the repository does not contain a chemical-resistance chart, service-environment approval or temperature limit for this grade. Share the actual service environment during the product discussion.",
      },
      {
        q: "Can ISO Fire Retardant Resin be considered with Glass Fiber?",
        a: 'Glass Fiber is the separate reinforcement product to review for an FRP system. See <a href="/products/fibre-glass-mat/">Glass Fiber Mat</a>, then confirm the actual component, reinforcement context and finished-system requirement rather than assuming a mat grade or laminate build-up.',
      },
      {
        q: "What should I share when requesting a quotation?",
        a: "Share the finished FRP application, exact product/grade requirement, fire standard or classification if one is specified, technical requirement, service environment where relevant, expected quantity, packaging requirement and delivery location.",
      },
      {
        q: "Which documents are currently available?",
        a: 'The current <a href="/tds/iso-fire-retardant-resin-tds.pdf" target="_blank" rel="noopener">ISO Fire Retardant Resin TDS</a> and <a href="/products/">published product range</a> are linked. The repository does not include an SDS, COA, fire-test report, chemical-resistance chart or certification document for this grade.',
      },
    ],
    relatedSlugs: [
      "fire-retardant-resin",
      "unsaturated-polyester-resin",
      "gp-clear-resin",
      "vinyl-ester-resin",
      "fibre-glass-mat",
      "gp-gelcoat-resin",
    ],
    applicationSlugs: ["fire-retardant-resin-for-railway-and-transport-frp"],
  },
  {
    slug: "frp-polyester-pigment",
    name: "FRP Polyester Pigment",
    category: "FRP Allied Products",
    price: "₹300 / kg",
    image: "frp-polyester-pigment.jpg",
    images: ["frp-polyester-pigment-1.jpg", "frp-polyester-pigment-3.jpg"],
    imageAlt:
      "FRP Polyester Pigment — multicolour resin colour paste by Samrat Poly Resins",
    tdsUrl: "/tds/frp-polyester-pigment-tds.pdf",
    sdsUrl: "/sds/frp-polyester-pigment-sds.pdf",
    seo: {
      title: "FRP Polyester Pigment Supplier in India | Polyester Pigment Paste",
      description:
        "FRP polyester pigment paste for UPR, vinyl ester and gelcoat systems. Available in standard and custom RAL/Pantone colours, with a published 2–5% recommended dosage.",
      keywords: [
        "FRP Polyester Pigment",
        "Polyester Resin Pigment",
        "Polyester Pigment Paste",
        "Gel Coat Pigment",
        "FRP Colour Paste",
        "Resin Pigment Paste",
        "Pigment for Polyester Resin",
        "Pigment for FRP Products",
        "Colour Paste Supplier",
      ],
    },
    // Reorganised into productDetails/techSpecs, values cross-checked against
    // SPR-TDS-FPP Rev. 01 — do not edit without an updated TDS. Binder
    // compatibility broadened from "Unsaturated Polyester" only to also
    // include vinyl ester and gelcoat systems, per the TDS. Dosage, tinting
    // strength, heat resistance and light fastness added — none of these
    // were in the original table. "Polyester Type: UPR" removed as redundant
    // with the broadened Binder Compatibility line below.
    productDetails: {
      "Minimum Order Quantity": "100 kg",
      "Packaging Size": "1 kg bottle",
      "Pack Type": "Bottle",
      "Colour / Appearance": "Multicolour (custom RAL & Pantone matching)",
      "Shelf Life": "12 months (unopened)",
      "Storage Temperature": "15–30 °C",
    },
    techSpecs: {
      "Form": "Paste",
      "Binder Compatibility": "Unsaturated Polyester, Vinyl Ester & Gelcoat Systems",
      "Recommended Dosage": "2–5% by weight",
      "Tinting Strength": "High (≥ 95%)",
      "Heat Resistance": "Up to 180 °C",
      "Light Fastness": "7–8 (Blue Wool Scale)",
      "Specific Gravity / Density": "1.45 g/cm³",
    },
    tagline: "Colour paste for FRP resin and gelcoat systems.",
    description:
      "FRP Polyester Pigment is Samrat Poly Resins' colour paste for FRP products made with unsaturated polyester, vinyl ester and gelcoat systems. It is not a structural resin, glass-fibre reinforcement or a gelcoat in its own right; it is the colour component blended into the separately selected resin or gelcoat. At the published 2–5% recommended dosage before catalysing, its high tinting strength (≥95%) provides colour at a controlled addition level. The TDS lists heat resistance up to 180°C and 7–8 Blue Wool Scale light fastness for the pigment itself; finished-part weathering still depends on the surrounding resin or gelcoat system. Supplied as a paste in 1 kg bottles with a 100 kg minimum order quantity, it is available in standard and custom colours, including RAL and Pantone matches.",
    usageNote:
      'FRP Polyester Pigment is stirred thoroughly into <a href="/products/gp-clear-resin/">GP Clear Resin</a>, <a href="/products/gp-yellow-resin/">GP Yellow Resin</a> or a <a href="/products/gp-gelcoat-resin/">Gelcoat Resin</a> before catalysing with an <a href="/products/mekp-hardener/">MEKP hardener</a> — mixing pigment in after catalysing risks uneven colour as working time runs out. It is also compatible with <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> binder systems. For a pre-pigmented, factory-coloured sheet resin instead of adding pigment yourself, see our <a href="/products/sheet-grade-yellow-resin/">Sheet Grade Yellow Resin</a>.',
    features: [
      "Blends seamlessly with unsaturated polyester, vinyl ester and gelcoat systems",
      "High tinting strength (≥95%) delivers full colour at a low 2–5% dosage",
      "Withstands exothermic curing heat, rated up to 180°C",
      "7–8 Blue Wool Scale light-fastness for the pigment's own colour retention",
      "Available in RAL and Pantone custom matches",
      "Supplied in 1 kg bottles, minimum order 100 kg",
    ],
    applications: [
      "FRP tanks and pipes",
      "Gel coats for boats and automotive parts",
      "Decorative and architectural panels",
      "Electrical enclosures",
    ],
    industries: [
      "FRP tank & pipe manufacturing",
      "Marine & automotive gelcoat",
      "Architectural & decorative panels",
      "Electrical enclosure manufacturing",
    ],
    whyChoose: [
      "ISO 9001:2015 certificate of registration (GMSQR Certifications, first registered 2019)",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Heat-stable, fade-resistant multicolour formulation",
      "Custom RAL and Pantone colour matching available",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is FRP Polyester Pigment?",
        a: "FRP Polyester Pigment is a colorant paste for FRP products made with unsaturated polyester, vinyl ester or gelcoat systems, providing consistent colour without acting as a structural or surface-coating material in its own right — it is blended into whichever resin or gelcoat is already being used.",
      },
      {
        q: "Is FRP Polyester Pigment compatible with all polyester resins?",
        a: 'It is formulated for compatibility with unsaturated polyester (UPR) and vinyl ester resin binder systems, as well as gelcoat systems such as our <a href="/products/gp-gelcoat-resin/">GP Gelcoat Resin</a> — including our <a href="/products/gp-clear-resin/">GP Clear Resin</a> and <a href="/products/gp-yellow-resin/">GP Yellow Resin</a> general-purpose grades.',
      },
      {
        q: "What is the recommended dosage?",
        a: "2–5% by weight is the recommended dosage, with its high tinting strength (≥95%) delivering full colour at the lower end of that range for most shades. Adding more than necessary isn't recommended, since heavier pigment loading can begin to affect the cured laminate's mechanical properties.",
      },
      {
        q: "Does FRP Polyester Pigment affect curing or mechanical properties?",
        a: "Within the recommended 2–5% dosage range, no — it blends seamlessly without affecting cure or the final laminate's mechanical properties. Loading significantly above that range isn't recommended, as heavier pigment content can begin to affect mechanical performance.",
      },
      {
        q: "Can I get custom colours matched?",
        a: "Yes. It is available in a wide range of standard and custom colours, including RAL and Pantone matches.",
      },
      {
        q: "Does FRP Polyester Pigment resist fading?",
        a: "The pigment itself carries a 7–8 rating on the Blue Wool Scale, a strong result for outdoor-use colourants, meaning the colour itself resists fading well. The overall weathering of a finished FRP part also depends on the UV stability of the surrounding resin or gelcoat, which is a separate property from the pigment's own light-fastness.",
      },
      {
        q: "Does FRP Polyester Pigment make the finished FRP part weather-resistant?",
        a: "Not on its own. Pigment colour retention and a laminate's overall weather resistance are two different properties — a light-fast pigment can still be surrounded by a resin or gelcoat that yellows or chalks under prolonged UV exposure. For parts needing confirmed long-term outdoor performance, the resin or gelcoat's own UV stability matters as much as the pigment's.",
      },
      {
        q: "What packaging and minimum order quantity does FRP Polyester Pigment come in?",
        a: "It is supplied in 1 kg bottles, with a minimum order quantity of 100 kg.",
      },
      {
        q: "How is FRP Polyester Pigment used?",
        a: 'It is stirred thoroughly into the resin or gelcoat first, before adding an <a href="/products/mekp-hardener/">MEKP hardener</a> and accelerator — mixing pigment in after catalysing risks uneven colour as working time runs out.',
      },
      {
        q: "What information should I share for an FRP Polyester Pigment quote?",
        a: "Share the required colour or RAL/Pantone reference if known, the FRP application, intended resin or gelcoat system, quantity, industry and delivery location. The actual colour and system requirement should be confirmed before ordering.",
      },
    ],
    relatedSlugs: [
      "gp-clear-resin",
      "gp-gelcoat-resin",
      "gp-yellow-resin",
      "vinyl-ester-resin",
      "sheet-grade-yellow-resin",
      "mekp-hardener",
    ],
  },
  {
    slug: "fibre-glass-mat",
    name: "Glass Fiber",
    category: "FRP Allied Products",
    price: "₹120 / kg",
    image: "fibre-glass-mat.jpg",
    images: ["fibre-glass-mat-2.jpg"],
    imageAlt:
      "Glass Fiber — E-glass chopped strand mat (CSM) reinforcement roll by Samrat Poly Resins",
    tdsUrl: "/tds/fibre-glass-mat-tds.pdf",
    sdsUrl: "/sds/fibre-glass-mat-sds.pdf",
    seo: {
      title: "Glass Fiber Mat Supplier in India | E-Glass CSM 300 & 450",
      description:
        "E-Glass Chopped Strand Mat (CSM) in 300 and 450 GSM for FRP reinforcement. Polyester-compatible sizing, 1040 mm rolls, 30 kg packaging and published TDS.",
      keywords: [
        "Glass Fiber",
        "Glass Fiber Mat",
        "Fiberglass Mat",
        "E-Glass Fiber",
        "Chopped Strand Mat",
        "CSM",
        "CSM 300",
        "CSM 450",
        "300 GSM Glass Fiber",
        "450 GSM Glass Fiber",
        "FRP Reinforcement",
        "FRP Reinforcement Material",
        "Polyester Resin Glass Fiber",
        "Glass Fiber Supplier",
      ],
    },
    // Reorganised into productDetails/techSpecs, values cross-checked against
    // SPR-TDS-GFM Rev. 01 — do not edit without an updated TDS. Fiber Length
    // corrected from an earlier, unverified "3 mm" to the TDS-verified 50 mm
    // (also the standard CSM chop length industry-wide). "Types:
    // Orthophthalic" removed — that field described a resin classification,
    // not a property of a reinforcement product, and didn't belong here.
    // Tensile Strength is labelled explicitly as a glass-filament property,
    // not a claim about the finished laminate (composite tensile strength is
    // far lower and depends on the resin system and lay-up). Binder
    // compatibility beyond polyester/vinyl ester is not stated here as a
    // flat spec — see the FAQ below for the hedged epoxy note.
    productDetails: {
      "Minimum Order Quantity": "500 kg",
      "Packaging Type": "Roll",
      "Roll Width": "1040 mm",
      "Roll Weight": "30 kg/roll",
      "Shelf Life": "24 months",
    },
    techSpecs: {
      "Glass Type": "E-Glass",
      "Form": "Chopped Strand Mat",
      "Area Weight (GSM)": "300 g/m² & 450 g/m²",
      "Fiber Length": "50 mm",
      "Sizing Type": "Polyester-compatible",
      "Grade Standard": "Industrial Grade",
      "Tensile Strength (Glass Filament)": "≥ 2,000 MPa",
      "Moisture Content": "≤ 0.10%",
    },
    tagline: "E-glass chopped strand mat for FRP reinforcement.",
    description:
      "Glass Fiber, also called fibreglass mat or chopped strand mat (CSM), is an E-glass reinforcement material for FRP manufacture — it is not a resin. Samrat Poly Resins supplies industrial-grade, polyester-compatible CSM in 300 g/m² and 450 g/m² rolls for buyers building reinforced FRP components. The mat contains 50 mm chopped E-glass strands held together with an emulsion binder; the chosen resin binds the reinforcement into the finished laminate. Review the published 1040 mm roll width, 30 kg roll weight, 500 kg minimum order quantity and Technical Data Sheet against the intended component and resin system before requesting a quote.",
    usageNote:
      'Glass Fiber supplies the reinforcement role; the resin is selected separately for the required FRP component and product role. Review <a href="/products/gp-clear-resin/">GP Clear Resin</a> or the parent <a href="/products/unsaturated-polyester-resin/">Unsaturated Polyester Resin</a> page for general FRP resin context, <a href="/products/gp-white-resin/">GP White Resin</a> where a white-pigmented general-purpose resin is relevant, and <a href="/products/lamination-resin/">Lamination Resin</a> for its published bonding and lamination contexts. For a mould-facing surface, review <a href="/products/gp-gelcoat-resin/">Gelcoat Resin</a>; for a specified chemical- or corrosion-resistance requirement, review the separate <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> data. Final system suitability should be confirmed against the applicable product data.',
    features: [
      "E-glass chopped strand mat, 50 mm fibre length",
      "300 g/m² and 450 g/m² weights available",
      "1040 mm roll width, polyester-compatible sizing",
      "High filament-level tensile strength for laminate reinforcement",
      "Reliable resin wet-out for consistent laminate strength",
      "Minimum order 500 kg",
    ],
    applications: [
      "Reinforcement for FRP laminates",
      "Marine, automotive and construction composites",
      "Moulded fibreglass parts",
      "Hand layup and spray-up reinforcement",
    ],
    industries: [
      "FRP & composites manufacturing",
      "Marine & automotive fabrication",
      "Construction & panel manufacturing",
      "General moulding & fabrication",
    ],
    whyChoose: [
      "ISO 9001:2015 certificate of registration (GMSQR Certifications, first registered 2019)",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian business (GSTIN 03ALBPS3446G1ZB)",
      "Industrial-grade E-glass with polyester sizing for reliable wet-out",
      "Supplied in 1040 mm rolls, minimum order 500 kg",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is Glass Fiber (chopped strand mat)?",
        a: "Glass Fiber is Samrat Poly Resins' E-glass chopped strand mat (CSM) — a non-woven reinforcement of 50 mm chopped E-glass strands, used together with a polyester or vinyl ester resin to form FRP composites. It provides the load-bearing reinforcement a cured resin alone cannot supply; the resin then provides the shape, surface finish and cure.",
      },
      {
        q: "What glass type and fibre length is used?",
        a: "It is E-glass with a 50 mm chopped fibre length, industrial grade — the standard chop length for chopped strand mat used in hand layup and spray-up reinforcement.",
      },
      {
        q: "What weights (GSM) are available?",
        a: "It is available in 300 g/m² and 450 g/m² weights.",
      },
      {
        q: "How should I choose between CSM 300 and CSM 450?",
        a: "CSM 300 and CSM 450 identify the two published area weights: 300 g/m² and 450 g/m². The right option depends on the component drawing, laminate design, required reinforcement build-up, resin system and production method. Share those details so the requirement can be discussed against the Technical Data Sheet instead of assuming one weight is suitable for every FRP part.",
      },
      {
        q: "What is the roll width and packaging?",
        a: "It is supplied in 1040 mm wide rolls, approximately 30 kg per roll.",
      },
      {
        q: "Which resin systems is Glass Fiber compatible with?",
        a: 'Its polyester-compatible sizing wets out cleanly with polyester and <a href="/products/vinyl-ester-resin/">vinyl ester</a> resin systems, which share the same ester-based chemistry. It can also be used with epoxy resin, though epoxy-specific sizings are formulated for that chemistry specifically, so results with epoxy systems should be tested for your particular application.',
      },
      {
        q: "What is the minimum order quantity for Glass Fiber?",
        a: "Minimum order quantity is 500 kg.",
      },
      {
        q: "What should I share when requesting a Glass Fiber quote?",
        a: "Please share whether CSM 300 or CSM 450 is required, the intended FRP component or application, the resin system under consideration, required quantity, delivery location and any drawing or purchase specification available. This helps the sales team understand the reinforcement requirement before preparing a quote.",
      },
      {
        q: "How is Glass Fiber used with resin?",
        a: 'It is laid into the mould and wet out with a catalysed resin such as our <a href="/products/gp-clear-resin/">GP Clear Resin</a> or <a href="/products/gp-yellow-resin/">GP Yellow Resin</a>, typically catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a>. The fibre itself does not cure — only the resin does, binding around the glass fibre reinforcement as it sets.',
      },
      {
        q: "Does Glass Fiber's tensile strength describe the finished FRP laminate?",
        a: "No. The ≥2,000 MPa figure describes the individual glass filament's own tensile strength, which is very high. Once chopped, randomly oriented and bound into a cured resin laminate, the composite's overall tensile strength is substantially lower than the filament strength — how much lower depends on the resin system, fibre loading and lay-up quality.",
      },
      {
        q: "Does Glass Fiber itself provide chemical resistance?",
        a: 'Not independently. Chemical resistance in a finished FRP laminate comes from the resin that fully encapsulates the glass fibre — for harsher chemical exposure, the resin choice (for example, stepping up to <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a>) matters more than the reinforcement itself.',
      },
    ],
    relatedSlugs: [
      "unsaturated-polyester-resin",
      "gp-clear-resin",
      "gp-white-resin",
      "lamination-resin",
      "gp-gelcoat-resin",
      "vinyl-ester-resin",
    ],
  },
  {
    slug: "epoxy-clear-casting-resin",
    name: "Clear Casting Resin",
    category: "Epoxy & Casting",
    price: "₹700 / kg",
    image: "epoxy-clear-casting-resin.jpg",
    images: ["epoxy-clear-casting-resin-2.jpg"],
    imageAlt:
      "Epoxy Clear Casting Resin — crystal-clear two-part epoxy for river table and decorative casting by Samrat Poly Resins",
    tdsUrl: "/tds/epoxy-clear-casting-resin-tds.pdf",
    // Printed sheet (SPR-TDS-CCR) gives 2:1 by weight, 900 cPs, 40 min pot life,
    // Shore D 82 — matching this page and the SDS. The first-issued file hid an
    // earlier version of the same reference giving a 1:1 mix ratio and "Not
    // Provided" fields. That covered text was removed 2026-09-13 (render
    // pixel-identical; previous file kept in source-documents/historical/).
    sdsUrl: "/sds/epoxy-clear-casting-resin-sds.pdf",
    seo: {
      title: "Epoxy Clear Casting Resin – Two-Part Epoxy",
      description:
        "Epoxy Clear Casting Resin — a crystal-clear, high-gloss two-part epoxy (2:1 mix) for river tables, jewellery and decorative casting. Full cure in 72 hours.",
      keywords: [
        "Epoxy Clear Casting Resin",
        "Casting Epoxy Resin",
        "River Table Resin",
        "Clear Epoxy Resin",
        "Epoxy Casting Resin",
      ],
    },
    // Reorganised into productDetails/techSpecs, values cross-checked against
    // SPR-TDS-CCR Rev. 01 (chemist-verified block) — do not edit without an
    // updated TDS. Mix ratio corrected from an earlier, unverified "1:1" to
    // the confirmed 2:1 (resin:hardener by weight); Curing Time split into
    // its two verified stages (initial vs. full cure) rather than a single
    // "24 hours" figure. Viscosity, Pot Life, Hardness, Specific Gravity,
    // Shrinkage and VOC added — none of these were in the original table.
    productDetails: {
      "Minimum Order Quantity": "100 kg",
      "Pack Size": "20 kg",
      "Colour / Appearance": "Clear",
      "Finish": "High Gloss",
      "Shelf Life": "12 months (unopened)",
      "Storage Temperature": "20–30 °C",
    },
    techSpecs: {
      "Resin Type": "Epoxy, Two-Part System",
      "Mix Ratio": "2:1 (Resin : Hardener, by weight)",
      "Viscosity": "900 cPs (at 25°C)",
      "Initial Cure Time": "24 hours (at 25°C)",
      "Full Cure Time": "72 hours (at 25°C)",
      "Pot Life": "40 minutes (at 25°C)",
      "Max Casting Depth": "30 mm per pour",
      "Hardness (Fully Cured)": "Shore D 82",
      "Specific Gravity / Density": "1.10 g/cm³",
      "Shrinkage": "< 0.2%",
    },
    tagline: "Crystal-clear, bubble-resistant resin for casting and art.",
    description:
      "Epoxy Clear Casting Resin is Samrat Poly Resins' two-part epoxy system for casting, river tables, jewellery and decorative artwork — a different resin chemistry entirely from our polyester-based GP Clear Resin, GP Yellow Resin, GP Gelcoat Resin, Vinyl Ester Resin and Lamination Resin, all of which cure with an MEKP and cobalt system rather than a two-part epoxy reaction. Mixed 2:1 by weight (resin:hardener), it reaches an initial, de-mouldable cure in around 24 hours and a full cure in around 72 hours, delivering a crystal-clear, high-gloss finish with low bubble formation. Its 900 cPs viscosity gives moderate self-levelling in a contained mould and supports casting depths up to 30 mm per pour — deeper work such as most river tables is built up in stages rather than poured all at once. Once fully cured it reaches Shore D 82 hardness with under 0.2% shrinkage, and its UV-stabilised formulation is significantly more resistant to yellowing than a standard epoxy, though no clear epoxy is entirely immune to gradual colour change under prolonged UV exposure. Supplied in 20 kg packs, with a minimum order quantity of 100 kg.",
    usageNote:
      'Epoxy Clear Casting Resin is mixed 2:1 by weight with a compatible <a href="/products/epoxy-hardener/">Epoxy Hardener</a> before pouring — accurate weight measurement matters more here than with a polyester resin dosed by catalyst percentage. For a self-levelling grade formulated specifically for floor art and table-top coating rather than deeper casting, see our <a href="/products/epoxy-art-resin/">Epoxy Art Resin</a>. Our polyester-based <a href="/products/gp-clear-resin/">GP Clear Resin</a> and <a href="/products/gp-yellow-resin/">GP Yellow Resin</a> use an entirely different MEKP/cobalt cure system and are not interchangeable with this epoxy system for FRP structural laminating work.',
    features: [
      "Crystal-clear, high-gloss finish with low bubble formation",
      "2:1 mix ratio by weight; 24-hour initial cure, 72-hour full cure",
      "Casting depths up to 30 mm per pour, built up in stages for deeper work",
      "Shore D 82 hardness and under 0.2% shrinkage once fully cured",
      "UV-stabilised formulation, more yellowing-resistant than standard epoxy",
      "Minimum order 100 kg",
    ],
    applications: [
      "River tables and wood-resin furniture",
      "Jewellery making and small decorative casting",
      "Art and industrial casting",
      "Decor items requiring optical clarity and casting depth",
    ],
    industries: [
      "Furniture & river table manufacturing",
      "Jewellery & fashion accessories",
      "Art & decorative casting",
      "Industrial casting applications",
    ],
    whyChoose: [
      "ISO 9001:2015 certificate of registration (GMSQR Certifications, first registered 2019)",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Crystal-clear, high-gloss finish with low bubble formation",
      "Supplied in 20 kg packs, minimum order 100 kg",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is Epoxy Clear Casting Resin?",
        a: "Epoxy Clear Casting Resin is a two-part epoxy system for casting, river tables, jewellery and decorative artwork — a different chemistry from Samrat's polyester-based GP Clear Resin, GP Yellow Resin, GP Gelcoat Resin, Vinyl Ester Resin and Lamination Resin, which all cure with an MEKP and cobalt system rather than a two-part epoxy reaction.",
      },
      {
        q: "What is the mix ratio and cure time?",
        a: "It is mixed 2:1 by weight (resin:hardener). It reaches an initial, de-mouldable cure in around 24 hours and a full cure in around 72 hours.",
      },
      {
        q: "What is the maximum casting depth?",
        a: "Maximum casting depth is 30 mm per pour. Deeper castings, such as most river tables, are built up in stages — pouring one 30 mm layer, letting it reach initial cure, then pouring the next — rather than poured all at once.",
      },
      {
        q: "Does it form bubbles during casting?",
        a: "It is formulated for low bubble formation. Surface bubbles are typically still released with a heat gun or torch passed briefly over a fresh pour, the standard technique for epoxy casting generally.",
      },
      {
        q: "Is Epoxy Clear Casting Resin UV resistant, and will it stay non-yellowing?",
        a: "It uses a UV-stabilised formulation that is significantly more resistant to yellowing than a standard, unstabilised epoxy. No clear epoxy — including UV-stabilised formulations — is permanently immune to yellowing under prolonged, intense UV exposure, so this is best understood as yellowing-resistant rather than an absolute guarantee.",
      },
      {
        q: "What is the difference between Epoxy Clear Casting Resin and Epoxy Art Resin?",
        a: 'Both are 2:1 epoxy systems with a similar cure schedule. Epoxy Clear Casting Resin is suited to deeper pours up to 30 mm per stage, such as river tables and jewellery moulds. Our <a href="/products/epoxy-art-resin/">Epoxy Art Resin</a> is formulated for self-levelling flatness on horizontal surfaces such as floor art and table tops. Choose based on whether you need casting depth or a level surface coat.',
      },
      {
        q: "How is it different from Samrat's polyester resins, like GP Clear Resin or Vinyl Ester Resin?",
        a: 'Epoxy Clear Casting Resin cures through a two-part epoxy reaction (2:1 by weight, multi-day cure), while <a href="/products/gp-clear-resin/">GP Clear Resin</a>, <a href="/products/gp-yellow-resin/">GP Yellow Resin</a> and <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> are polyester-family resins cured with an MEKP catalyst and cobalt accelerator in minutes to hours. Epoxy also shrinks far less on cure than polyester, which is why it is preferred for dimensionally accurate, optically clear casting work rather than structural FRP laminating.',
      },
      {
        q: "What packaging and minimum order quantity does it come in?",
        a: "It is supplied in 20 kg packs, with a minimum order quantity of 100 kg.",
      },
      {
        q: "How is Epoxy Clear Casting Resin used?",
        a: 'It is mixed 2:1 by weight with a compatible <a href="/products/epoxy-hardener/">Epoxy Hardener</a>, poured into the mould, and left to reach an initial cure over about 24 hours and a full cure over about 72 hours.',
      },
    ],
    relatedSlugs: [
      "epoxy-art-resin",
      "epoxy-hardener",
    ],
    // Card-only stubs (draft: true) approved via Step 1 audit + Step 3 —
    // slugs prefixed "epoxy-clear-casting-resin-" so they stay unambiguous
    // against Epoxy Art Resin's own future application slugs. See
    // applications.js for the stub entries themselves.
    applicationSlugs: [
      "epoxy-clear-casting-resin-for-river-tables",
      "epoxy-clear-casting-resin-for-jewellery-casting",
      "epoxy-clear-casting-resin-casting-process",
    ],
  },
  {
    slug: "epoxy-art-resin",
    name: "Epoxy Art Resin",
    category: "Epoxy & Casting",
    price: "₹700 / kg",
    image: "epoxy-art-resin.jpg",
    images: ["epoxy-art-resin-2.jpg", "epoxy-art-resin-3.jpg"],
    imageAlt: "Epoxy Art Resin — self-levelling clear epoxy resin for decorative and artistic finishes by Samrat Poly Resins",
    tdsUrl: "/tds/epoxy-art-resin-tds.pdf",
    sdsUrl: "/sds/epoxy-art-resin-sds.pdf",
    seo: {
      title: "Epoxy Art Resin – Self-Levelling Clear Epoxy",
      description:
        "Epoxy Art Resin — a self-levelling, water-clear two-component epoxy for floor art, table tops and river tables. UV resistant, high-gloss finish.",
      keywords: [
        "Epoxy Art Resin",
        "Art Resin",
        "Self Levelling Epoxy",
        "Table Top Epoxy Resin",
        "River Table Epoxy",
      ],
    },
    // Reorganised into productDetails/techSpecs — every value is unchanged
    // from the original single `specs` table, just regrouped. "Usage /
    // Application" is not repeated in the table since it's already covered
    // by the applications list below. No new values invented.
    productDetails: {
      "Minimum Order Quantity": "100 kg",
      "Pack Size": "15 kg",
      "Colour / Appearance": "Water Clear",
      "Finish": "High Gloss",
    },
    techSpecs: {
      "Resin Type": "Epoxy, two-component system",
      Composition: "Bisphenol-A and epichlorohydrin based",
      "Colour / Appearance": "Water clear",
      Finish: "High gloss",
      "Curing Time": "24 hours",
      "Mix Ratio": "2:1",
      Viscosity: "900–1200 cPs (mixed, at 25 °C)",
      "Flow Behaviour": "Self-levelling, with bubble release",
      "UV Resistance": "UV stabilised; the TDS states it resists yellowing",
    },
    tagline: "Self-levelling, crystal-clear epoxy for artistic finishes.",
    description:
      "A crystal-clear, two-component epoxy system formulated for artistic and decorative applications. Mixed 2:1 and curing in around 24 hours, it offers excellent transparency, superior gloss, outstanding self-levelling properties and excellent bubble release for a flawless finish. Supplied in 15 kg packs, with a minimum order quantity of 100 kg, its UV-resistant formulation is designed to hold its clarity and gloss over time, making it well suited to floor art, table tops and other surfaces exposed to daylight.",
    usageNote:
      'Epoxy Art Resin is mixed 2:1 with a compatible <a href="/products/epoxy-hardener/">epoxy hardener</a> before pouring. For deeper pours up to 30 mm rather than a self-levelling surface coat, see our <a href="/products/epoxy-clear-casting-resin/">Epoxy Clear Casting Resin</a>.',
    features: [
      "Water-clear, high-gloss finish",
      "2:1 mix ratio, 24-hour cure",
      "Self-levelling with excellent bubble release",
      "UV resistant — holds clarity and gloss over time",
      "Supplied in 15 kg packs, minimum order 100 kg",
    ],
    applications: [
      "Floor art and table tops",
      "River tables and wood art",
      "Jewellery and decorative casting",
      "Decorative coatings",
    ],
    industries: [
      "Furniture & table top manufacturing",
      "Flooring & decorative coatings",
      "Jewellery & fashion accessories",
      "Art & decorative casting",
    ],
    whyChoose: [
      "ISO 9001:2015 certificate of registration (GMSQR Certifications, first registered 2019)",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Self-levelling, UV-resistant formulation for a lasting high-gloss finish",
      "Supplied in 15 kg packs, minimum order 100 kg",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is Epoxy Art Resin?",
        a: "Epoxy Art Resin is a crystal-clear, two-component epoxy system formulated for artistic and decorative applications such as floor art, table tops and river tables.",
      },
      {
        q: "What is the mix ratio and cure time?",
        a: "It is mixed 2:1 and cures in around 24 hours.",
      },
      {
        q: "Is Epoxy Art Resin self-levelling?",
        a: "Yes. It is formulated to self-level with excellent bubble release, giving a flawless, flat finish on table tops and floor art without extensive tooling.",
      },
      {
        q: "Is Epoxy Art Resin UV resistant?",
        a: "Yes. It is UV resistant, helping it retain clarity and gloss over time rather than yellowing under daylight exposure.",
      },
      {
        q: "What is the difference between Epoxy Art Resin and Epoxy Clear Casting Resin?",
        a: 'Both are 2:1 epoxy systems with a similar cure schedule. Epoxy Art Resin is formulated for self-levelling flatness on floor art and table-top surfaces. Our <a href="/products/epoxy-clear-casting-resin/">Epoxy Clear Casting Resin</a> is suited to deeper pours up to 30 mm per stage. Choose based on whether you need a self-levelling surface coat or a deeper cast.',
      },
      {
        q: "What packaging and minimum order quantity does it come in?",
        a: "It is supplied in 15 kg packs, with a minimum order quantity of 100 kg.",
      },
      {
        q: "How is Epoxy Art Resin used?",
        a: 'It is mixed 2:1 with a compatible <a href="/products/epoxy-hardener/">epoxy hardener</a> and poured onto the surface, where it self-levels and cures over approximately 24 hours.',
      },
    ],
    relatedSlugs: [
      "epoxy-clear-casting-resin",
      "epoxy-hardener",
    ],
    applicationSlugs: ["epoxy-art-resin-for-table-tops-and-surface-coating"],
  },
  {
    slug: "epoxy-hardener",
    name: "Epoxy Hardener",
    category: "Epoxy & Casting",
    price: "₹700 / kg",
    image: "epoxy-hardener.jpg",
    images: ["epoxy-hardener-2.jpg"],
    imageAlt: "Epoxy Hardener — polyamide curing agent for compatible epoxy resin systems by Samrat Poly Resins",
    tdsUrl: "/tds/epoxy-hardener-tds.pdf",
    sdsUrl: "/sds/epoxy-hardener-sds.pdf",
    seo: {
      title: "Epoxy Hardener in India | Polyamide Curing Agent",
      description:
        "Epoxy Hardener is Samrat Poly Resins' published polyamide curing agent for compatible epoxy resin systems. Review the current TDS and request an industrial quote for the required epoxy system.",
      keywords: [
        "Epoxy Hardener",
        "Polyamide Hardener",
        "Epoxy Curing Agent",
        "Epoxy Resin Hardener",
        "Hardener for Epoxy Resin",
        "Epoxy Hardener Supplier",
      ],
    },
    // Product data below follows SPR-TDS-EPH Rev. 01 (July 2026). The
    // catalogue differs on chemical-type wording, viscosity and specific
    // gravity, so the current TDS is used here and the discrepancy is not
    // silently reconciled. Ratio, pot-life and cure figures stay in the TDS
    // rather than being presented as public operating instructions.
    productDetails: {
      "Minimum Order Quantity": "100 kg",
      "Pack Size": "20 kg",
      "Physical Form": "Liquid",
      "Colour / Appearance": "Clear / Transparent",
      "Shelf Life": "12 months (unopened)",
      "Storage": "Cool, dry place (15–30 °C); keep container tightly closed",
    },
    techSpecs: {
      "Hardener Type": "Polyamide (amine-based curing agent)",
      "Colour / Appearance": "Clear, transparent liquid",
      "Mixing Ratio (resin : hardener)": "2:1 by weight",
      "Pot Life": "30–60 minutes (at 25 °C)",
      "Full Cure Time": "Approx. 24 hours (at 25 °C)",
      "Compatibility": "Compatible epoxy resin systems — confirm the resin/hardener pairing before ordering",
      "Viscosity": "500 cPs (at 25 °C)",
      "Specific Gravity / Density": "0.97 g/cm³",
      "Amine Value": "320 mg KOH/g",
    },
    tagline: "Polyamide curing agent for compatible epoxy resin systems.",
    description:
      "Epoxy Hardener is Samrat Poly Resins' published polyamide, amine-based curing agent for compatible epoxy resin systems. It is the separate hardener component of an epoxy system, not the epoxy resin itself and not a polyester-resin catalyst. The current TDS identifies a clear/transparent liquid with 500 cPs viscosity at 25 °C, 0.97 g/cm³ specific gravity and 320 mg KOH/g amine value. Review the actual epoxy resin, intended application and current Technical Data Sheet together before confirming a resin/hardener pairing. The published commercial format is a 20 kg pack with a 100 kg minimum order quantity.",
    usageNote:
      'The existing <a href="/products/epoxy-clear-casting-resin/">Epoxy Clear Casting Resin</a> and <a href="/products/epoxy-art-resin/">Epoxy Art Resin</a> product routes identify a compatible Epoxy Hardener as part of their separate two-component systems. That does not establish universal compatibility with every epoxy product or supplier. For unsaturated polyester, vinyl ester or gelcoat systems, review the separate <a href="/products/mekp-hardener/">MEKP Hardener</a> product route instead.',
    features: [
      "Published polyamide (amine-based) epoxy curing-agent type",
      "Clear / transparent liquid supplied form",
      "Current TDS publishes viscosity, specific gravity and amine value",
      "Compatible epoxy-system selection should be confirmed before ordering",
      "20 kg packaging and 100 kg MOQ published in the current TDS",
      "Current Technical Data Sheet available for product review",
    ],
    applications: [
      "Epoxy art and river tables",
      "Clear casting and laminating",
      "FRP composites and industrial flooring",
      "Adhesives and protective coatings",
    ],
    industries: [
      "Furniture & river table manufacturing",
      "Art & decorative casting",
      "FRP & composites manufacturing",
      "Industrial flooring & adhesives",
    ],
    whyChoose: [
      "Published Epoxy Hardener TDS available for review",
      "Clear separation between epoxy-system and polyester-system hardener roles",
      "Published technical identity: polyamide, amine-based curing agent",
      "Published 20 kg packaging and 100 kg minimum order quantity",
      "Enquiry can confirm the exact resin, application and documentation requirement",
    ],
    faqs: [
      {
        q: "What is Epoxy Hardener?",
        a: "Epoxy Hardener is Samrat Poly Resins' published polyamide, amine-based curing agent for compatible epoxy resin systems. It is the separate hardener component, not the epoxy resin itself.",
      },
      {
        q: "Which Samrat epoxy systems is this hardener linked with?",
        a: 'The existing <a href="/products/epoxy-clear-casting-resin/">Epoxy Clear Casting Resin</a> and <a href="/products/epoxy-art-resin/">Epoxy Art Resin</a> product routes identify a compatible Epoxy Hardener. Confirm the exact resin/hardener pairing and current TDS before ordering; universal compatibility is not claimed.',
      },
      {
        q: "Is Epoxy Hardener the same as epoxy resin?",
        a: "No. Epoxy resin and epoxy hardener are separate components of a compatible epoxy system. The correct pairing should be confirmed before procurement.",
      },
      {
        q: "Is Epoxy Hardener the same as MEKP Hardener?",
        a: 'No. This product is an epoxy-system curing agent. <a href="/products/mekp-hardener/">MEKP Hardener</a> is the separate catalyst / initiator product route for published unsaturated polyester, vinyl ester and gelcoat systems; it is not an epoxy curing agent.',
      },
      {
        q: "What technical data is published for Epoxy Hardener?",
        a: 'The current <a href="/tds/epoxy-hardener-tds.pdf" target="_blank" rel="noopener">Epoxy Hardener TDS</a> publishes its polyamide type, supplied appearance, viscosity, specific gravity, amine value, shelf life, storage, packaging and MOQ. Its typical values should be reviewed against the actual resin system and application.',
      },
      {
        q: "What packaging and minimum order quantity does Epoxy Hardener come in?",
        a: "It is supplied in 20 kg packs, with a minimum order quantity of 100 kg.",
      },
      {
        q: "What should I include when requesting an Epoxy Hardener quote?",
        a: "Share the exact epoxy resin or Samrat product route being evaluated, intended application, expected quantity, packaging requirement if relevant, delivery location and required documentation. This lets the team confirm the product role before preparing a quote.",
      },
    ],
    relatedSlugs: [
      "epoxy-clear-casting-resin",
      "epoxy-art-resin",
      "mekp-hardener",
    ],
  },
  {
    slug: "dmc-smc-resin",
    name: "DMC/SMC Resin",
    category: "Industrial & Specialty Resins",
    price: "₹150 / kg",
    image: "dmc-smc-resin.jpg",
    images: ["dmc-smc-resin-2.jpg", "dmc-smc-resin-3.jpg"],
    imageAlt: "DMC/SMC Resin — orthophthalic polyester resin for dough and sheet moulding compounds by Samrat Poly Resins",
    tdsUrl: "/tds/dmc-smc-resin-tds.pdf",
    sdsUrl: "/sds/dmc-smc-resin-sds.pdf",
    seo: {
      title: "DMC / SMC Resin Manufacturer in India",
      description:
        "Orthophthalic unsaturated polyester resin for dough and sheet moulding compounds. Published TDS, with an industrial quote route.",
      keywords: [
        "DMC Resin",
        "SMC Resin",
        "DMC SMC Resin",
        "Sheet Moulding Compound Resin",
        "Dough Moulding Compound Resin",
        "Polyester Resin for DMC",
        "Polyester Resin for SMC",
        "Moulding Compound Resin",
        "Compression Moulding Resin",
      ],
    },
    // Current product data comes from SPR-TDS-DMC Rev. 01 (July 2026). The
    // catalogue lists different viscosity, gel-time and specific-gravity
    // values, so this page uses the grade-specific TDS and does not combine
    // conflicting numbers. The TDS describes one DMC/SMC product; no separate
    // DMC, SMC or BMC grade/formulation is documented in the repository.
    productDetails: {
      "Packaging": "225 kg drum",
      "Minimum Order Quantity": "1,000 kg",
      "Physical Form": "Liquid",
      "Colour / Appearance": "Pale Yellow",
      "Shelf Life": "3 months",
      "Storage": "Below 25°C; cool and dry place",
    },
    techSpecs: {
      "Resin Type": "Orthophthalic unsaturated polyester resin",
      "Published Grade / Role": "DMC / SMC moulding compounds; FRP lamination; electrical components",
      "Viscosity": "600 cPs (at 25°C)",
      "Curing Type": "Non-accelerated",
      "Gel Time": "12–18 minutes (at 25°C; review current TDS for test context)",
      "Styrene Content": "35%",
      "Specific Gravity / Density": "1.12 g/cm³",
      "Flash Point": "32°C (closed cup)",
    },
    tagline: "Orthophthalic resin for dough and sheet moulding compounds.",
    description:
      "DMC/SMC Resin is Samrat Poly Resins' published orthophthalic unsaturated polyester resin for Dough Moulding Compound (DMC) and Sheet Moulding Compound (SMC) applications. The current Technical Data Sheet identifies one pale-yellow, non-accelerated liquid grade for DMC/SMC moulding compounds, electrical components and its listed application contexts. It is a moulding-compound product route, not a broad substitute for general-purpose FRP, sheet-grade or lamination resin. Review the current TDS, intended finished component and compound-system requirement together before procurement.",
    usageNote:
      'The current DMC/SMC TDS is the grade-specific reference for this product. <a href="/products/mekp-hardener/">MEKP Hardener</a> is the separate catalyst / initiator product route for published polyester-family systems, but this page does not provide a compound recipe or curing instructions. Where reinforcement is separately specified, see <a href="/products/fibre-glass-mat/">Glass Fiber</a> for its material role; the repository does not prescribe CSM 300, CSM 450 or a specific reinforcement format for this DMC/SMC Resin.',
    features: [
      "One published orthophthalic unsaturated polyester route for DMC and SMC moulding-compound applications",
      "Pale-yellow, non-accelerated liquid resin with 600 cPs viscosity published in the current TDS",
      "Current Technical Data Sheet lists 12–18 minute gel time at 25°C, 35% styrene content and 1.12 g/cm³ specific gravity",
      "TDS-published applications include DMC/SMC moulding compounds, electrical housings, manhole covers, automotive panels, transport components, water tanks and sanitaryware",
      "225 kg drum packaging and 1,000 kg MOQ published in the current TDS",
      "Product selection can begin with the compound type, finished component, required specification and current documentation",
    ],
    applications: [
      "DMC and SMC moulding compounds",
      "Electrical housings and manhole covers",
      "Automotive panels and transportation components",
      "Water tanks and sanitaryware",
    ],
    industries: [
      "DMC / SMC moulding-compound procurement",
      "Electrical-housing and manhole-cover manufacturing",
      "Automotive and transportation-component manufacturing",
      "Water-tank and sanitaryware manufacturing",
    ],
    whyChoose: [
      "Published DMC/SMC-specific product route instead of a generic UPR selection",
      "Current TDS provides the published liquid-resin supply data for the listed grade",
      "One documented product listing for DMC and SMC contexts; confirm the actual compound/system requirement before ordering",
      "Published 225 kg drum format, 1,000 kg MOQ, three-month shelf life and below-25°C storage guidance",
      "Industrial RFQ can identify the DMC or SMC context, finished component, specification, quantity and delivery location",
    ],
    faqs: [
      {
        q: "What is DMC/SMC Resin?",
        a: "DMC/SMC Resin is Samrat Poly Resins' published orthophthalic unsaturated polyester resin for Dough Moulding Compound (DMC) and Sheet Moulding Compound (SMC) applications. The current TDS describes one pale-yellow, non-accelerated liquid grade for the listed moulding-compound contexts.",
      },
      {
        q: "What does DMC mean?",
        a: "In the current product TDS, DMC means Dough Moulding Compound. The document identifies this resin for DMC and SMC moulding-compound applications, but does not publish a separate DMC formulation or processing recipe.",
      },
      {
        q: "What does SMC mean?",
        a: "In the current product TDS, SMC means Sheet Moulding Compound. It refers to the moulding-compound context for this product, not to Samrat's separately published FRP Sheet Grade Resin products.",
      },
      {
        q: "Is DMC the same as BMC?",
        a: "The current product listing and TDS use DMC (Dough Moulding Compound) and SMC (Sheet Moulding Compound). They do not establish DMC as an interchangeable BMC term or publish a BMC product designation, so BMC should be confirmed separately rather than assumed.",
      },
      {
        q: "Does Samrat publish separate DMC and SMC resin grades?",
        a: "The repository contains one DMC/SMC Resin product and one current product-specific TDS that names both DMC and SMC contexts. It does not publish separate DMC-grade and SMC-grade formulations, so share the actual compound requirement for confirmation.",
      },
      {
        q: "Is DMC/SMC Resin an unsaturated polyester resin?",
        a: 'Yes. The current TDS identifies it as an orthophthalic unsaturated polyester resin. <a href="/products/unsaturated-polyester-resin/">Unsaturated Polyester Resin</a> is the broader family page; this product is the published DMC/SMC moulding-compound route within that family.',
      },
      {
        q: "How is DMC/SMC Resin different from GP Resin?",
        a: 'GP Resin is the general-purpose FRP route. DMC/SMC Resin is the separately published moulding-compound route. Review <a href="/products/gp-clear-resin/">GP Clear Resin</a> for general-purpose FRP requirements and use the DMC/SMC TDS for a documented moulding-compound requirement.',
      },
      {
        q: "Is SMC Resin the same as Sheet Grade Resin?",
        a: 'No. This product is published for Sheet Moulding Compound (SMC) context. <a href="/products/sheet-grade-yellow-resin/">Sheet Grade Yellow Resin</a> and <a href="/products/roof-light-resin/">Roof Light Sheet Grade Resin</a> are separately published FRP sheet and panel product routes. Do not transfer product data between them.',
      },
      {
        q: "Which technical specifications are published for DMC/SMC Resin?",
        a: 'The current TDS publishes pale-yellow liquid appearance, 600 cPs viscosity at 25°C, non-accelerated curing type, 12–18 minute gel time at 25°C, 35% styrene content, 1.12 g/cm³ specific gravity, 32°C closed-cup flash point, three-month shelf life, below-25°C storage, 225 kg packaging and 1,000 kg MOQ. Use the current <a href="/tds/dmc-smc-resin-tds.pdf" target="_blank" rel="noopener">DMC/SMC Resin TDS</a> for the complete test context.',
      },
      {
        q: "Does this product have documented low-shrink, electrical or fire ratings?",
        a: "The TDS lists low shrinkage and electrical insulation among its key characteristics, but the repository does not provide a shrinkage value, low-profile or Class-A designation, electrical test result, fire rating or finished-part certification. Do not treat liquid-resin data as a finished compound or moulded-part rating.",
      },
      {
        q: "What should I share for a DMC/SMC Resin quotation?",
        a: "Share whether the requirement is DMC or SMC, the finished component or application, any stated product or performance specification, compound/process context if known, expected quantity, packaging need, delivery location and required documentation. This supports a focused discussion without requiring a public formulation recipe.",
      },
    ],
    relatedSlugs: [
      "unsaturated-polyester-resin",
      "gp-clear-resin",
      "sheet-grade-yellow-resin",
      "lamination-resin",
      "fire-retardant-resin",
      "mekp-hardener",
      "fibre-glass-mat",
    ],
  },
  {
    slug: "polyester-putty-resin",
    name: "Polyester Putty Resin",
    category: "Industrial & Specialty Resins",
    price: "₹115 / kg",
    // No product photography exists for this grade. The artwork previously
    // used here (pet-resin.jpg) is a PET packaging poster for a different
    // product: it is titled PET RESIN, describes polyethylene-terephthalate
    // based material for bottles, preforms and thermoformed packaging, and
    // carries a specification table plus a food-contact claim that has no
    // bearing on a putty base resin. Rather than borrow another product's
    // pack shot, the page renders a code-native identity panel. The image
    // files themselves are untouched and still serve the PET sheet content.
    // Restored at the owner’s explicit instruction after the alternative was
    // put to them. The supplied file (Downloads/"images (34).jpg") is a 225px
    // copy of this same poster, so the full-resolution repo asset is used
    // instead of a 3.7x upscale. Note what the artwork says: it is titled
    // PET RESIN, describes a polyethylene-terephthalate based resin for
    // sheets, containers and packaging, carries a specification table for
    // that grade and a food-contact claim. None of that is repeated in the
    // page copy or FAQ; since 2026-09-13 the poster is also kept out of the
    // Product schema image, and a reading-size warning under the image states
    // that its food-contact, PET-packaging, moulding and figure claims do not
    // apply. The sheet-grade TDS is archived and neither PET document is linked.
    // 2026-09-14: the two PET Resin posters no longer lead the page. The
    // product frame shows a code-native identity panel; the posters stay on
    // the page, unchanged, in a closed and labelled archive beneath it with
    // the warning (see archivedPosters in products/[slug].astro).
    images: [],
    archivedPosters: ["pet-resin.jpg", "pet-resin-2.jpg"],
    // Historical documents SPR-TDS-PET Rev. 01 and its SDS are titled
    // "PET Resin / Polyester Putty Resin" but describe a SHEET GRADE for
    // "PET sheets and fibre sheet products" and "FRP sheet lamination and
    // panel manufacturing". Nothing in them addresses putty or filler
    // manufacture. Until the chemist confirms whether the putty base resin
    // and that sheet grade are one grade or two, those documents are not
    // offered here as this product's technical documents, and their values
    // are not published as this product's values. The files remain in place
    // remain in place, but the guide cluster that presented that
    // sheet-grade identity to buyers was retired on 2026-09-12 and now
    // redirects here, so the site states one identity for this product.
    seo: {
      title: "Polyester Putty Resin Manufacturer in India",
      description: "Liquid unsaturated polyester resin supplied in bulk to putty and body-filler manufacturers in India. Send your formulation requirement for grade data.",
      keywords: [
        "Polyester Putty Resin",
        "Polyester Putty Resin Manufacturer",
        "Polyester Putty Resin Manufacturer in India",
        "Polyester Putty Resin Supplier",
        "Polyester Putty Resin Supplier in India",
        "putty base resin",
        "body filler resin manufacturer",
        "resin for polyester putty manufacturing",
        "unsaturated polyester resin for putty",
        "PET Resin",
      ],
    },
    productDetails: {
      "Product Role": "Liquid unsaturated polyester resin, supplied as a base for polyester putty and filler manufacture",
      "Physical Form": "Liquid",
      "Country of Origin": "India",
      "Manufactured At": "Doraha, Punjab",
      "Grade Data": "Confirmed against the production batch at the time of enquiry",
    },
    imageAlt: "Earlier PET Resin poster; its food-contact, packaging and specification claims do not apply to Polyester Putty Resin",
    tagline: "Liquid unsaturated polyester resin, supplied to manufacturers as a base for polyester putty and filler.",
    description: "Polyester Putty Resin is a liquid unsaturated polyester resin manufactured by Samrat Poly Resins and supplied to putty and filler manufacturers as the base resin in their own formulations. It is the resin a putty maker charges to a disperser before adding talc, carbonate, microspheres, thixotrope and pigment — not a finished, ready-to-use body filler. Samrat Poly Resins manufactures this grade at its facility in Doraha, Punjab, India. Established in 2017, the company holds an ISO 9001:2015 certificate of registration for the manufacture and supply of polyester resins.",
    usageNote: "Grade-specific figures such as viscosity, reactivity and styrene content are confirmed against the production batch at the time of enquiry rather than published here, and the cure system this grade is designed for is confirmed with the technical team. Send your filler package, target loading and working time so the right data can be matched to your formulation.",
    features: [
      "Liquid unsaturated polyester resin supplied as a putty and filler base, not a finished compound",
      "Sold in bulk to putty and body-filler manufacturers rather than to body shops",
      "Grade data confirmed against the production batch at the time of enquiry",
      "Manufactured by Samrat Poly Resins at Doraha, Punjab",
    ],
    applications: [
      "Polyester putty and filler compound manufacturing",
      "Stopper and glazing putty formulation",
    ],
    industries: [
      "Putty & filler compound manufacturing",
      "Automotive refinish material manufacturing",
    ],
    whyChoose: [
      "Supplied as a putty base resin, with the product role stated plainly rather than borrowed from an adjacent grade",
      "Direct manufacturer supply and pricing for bulk Polyester Putty Resin orders",
      "Grade data confirmed against the production batch, so the figures you quote in your own specification are current",
      "Straightforward procurement path — share your filler package, loading target and working time for a focused quote",
    ],
    faqs: [
      {
        q: "What is Polyester Putty Resin?",
        a: "It is a liquid unsaturated polyester resin manufactured by Samrat Poly Resins and supplied to putty and filler manufacturers as the base resin in their own formulations. It is the liquid a putty maker charges to a disperser before adding fillers, thixotrope and pigment.",
      },
      {
        q: "Is this a ready-made putty or body filler?",
        a: "No. This is the base resin sold in bulk to manufacturers, not a finished two-part paste. If you need filler for a repair, you want a finished putty product with its matched hardener rather than this resin.",
      },
      {
        q: "Is Polyester Putty Resin the same as PET?",
        a: "No, and the distinction matters. PET is polyethylene terephthalate, a saturated thermoplastic that is melted and re-melted. This is an unsaturated polyester thermoset: a liquid that crosslinks irreversibly and cannot be re-melted. Both carry the word polyester, and neither substitutes for the other.",
      },
      {
        q: "This product was previously listed as PET Resin. What changed?",
        a: "The public name is now Polyester Putty Resin, and the page describes the putty base-resin role. Samrat separately holds a historical sheet-grade document that carries both names and describes sheet and laminate manufacture. Whether that sheet grade and this putty base resin are one grade or two is a question currently with our technical team, so this page does not present the sheet-grade data or documents as this product's own.",
      },
      {
        q: "What viscosity, gel time and styrene content does it have?",
        a: "Those figures are confirmed against the production batch at the time of enquiry rather than published here, because a value carried across from a different grade is worse than no value at all. Tell us your filler loading target and working time and the current data can be matched to it.",
      },
      {
        q: "Which peroxide system is it designed for?",
        a: "Confirm this with our technical team for the current grade. Polyester putty is made on more than one cure route in practice — benzoyl peroxide with an amine dominates hand-applied body filler, while ketone peroxide with cobalt is used in sprayable and some marine putties — so the answer belongs to the specific grade rather than to the category.",
      },
      {
        q: "How much filler will it accept?",
        a: "That depends on your filler package as much as on the resin, since particle shape and oil absorption drive resin demand. Send your intended talc, carbonate and microsphere loading and your mixing equipment, and the achievable window can be discussed against the current grade.",
      },
      {
        q: "Are a TDS and SDS available for this grade?",
        a: "A revised, putty-specific data sheet is being prepared with our technical team. The historical sheet-grade document is not offered here, because it describes sheet and laminate manufacture rather than putty formulation. Request current grade data with your enquiry and it will be sent directly.",
      },
      {
        q: "What should I send with an enquiry?",
        a: "Your filler package and target loading, the working time and sanding window you are formulating to, your mixing equipment, the peroxide system your finished product uses, target colour, and the quantity, packaging and delivery location.",
      },
    ],
    relatedSlugs: [
      "unsaturated-polyester-resin",
      "gp-clear-resin",
      "soap-stone-powder",
      "styrene-monomer",
      "mekp-hardener",
      "marble-resin",
    ],
  },
  {
    slug: "marble-resin",
    name: "Marble Resin",
    category: "Industrial & Specialty Resins",
    price: "₹125 / kg",
    image: "marble-resin.jpg",
    images: ["marble-resin-2.jpg"],
    imageAlt: "Illustrative Marble Resin product graphic by Samrat Poly Resins; review the TDS for verified grade data",
    tdsUrl: "/tds/marble-resin-tds.pdf",
    sdsUrl: "/sds/marble-resin-sds.pdf",
    seo: {
      title: "Marble Resin Manufacturer in India | Cultured Marble Resin",
      description:
        "Water-white unsaturated polyester resin for cultured marble, vanity tops, wash basins and cast architectural stone. Published TDS.",
      keywords: [
        "Marble Resin",
        "Cultured Marble Resin",
        "Artificial Marble Resin",
        "Polyester Marble Resin",
        "Polyester Resin for Marble",
        "Polyester Resin for Artificial Marble",
        "Marble Resin Manufacturer India",
        "Marble Resin Supplier India",
      ],
    },
    // Current TDS (SPR-TDS-MBR Rev. 01, July 2026) and the catalogue use
    // compatible product-role language but differ on viscosity and gel time.
    // Both source values are shown below rather than silently reconciled.
    productDetails: {
      "Documented Product Role": "Liquid resin for cultured-marble and artificial-stone contexts",
      "Physical Form": "Liquid (TDS)",
      "Colour / Appearance": "Water White (TDS)",
      "Packaging": "200 kg pack",
      "Minimum Order Quantity": "200 kg",
      "Shelf Life": "3 months",
      "Storage": "20–30 °C; cool, dry place away from direct sunlight",
    },
    techSpecs: {
      "Resin Family": "Unsaturated polyester resin (TDS); catalogue labels it Orthophthalic UPR",
      "Viscosity": "450 cPs at 25 °C (TDS); catalogue lists 300 cPs",
      "Gel Time": "15–20 minutes at 25 °C (TDS typical data); catalogue lists 15 minutes",
      "Curing Time": "20–40 minutes at 25 °C (TDS)",
      "Specific Gravity / Density": "1.12 g/cm³",
      "Styrene Content": "35% (TDS)",
      "Flash Point": "32 °C, closed cup (TDS)",
    },
    tagline: "Water-white liquid unsaturated polyester resin for documented cultured-marble and artificial-stone contexts.",
    description:
      "Samrat Marble Resin is a water-white liquid unsaturated polyester resin. Its current Technical Data Sheet positions the supplied resin for cultured marble and artificial stone, including the listed slab, vanity-top, countertop, wash-basin, wall-panel and architectural-product contexts. Samrat supplies the liquid resin, not finished marble slabs, countertops, wash basins or other completed stone products. The current catalogue separately calls the product a filled resin for cultured marble and onyx production; it does not publish a filler type, filler level or formulation. Review the current product document with the actual finished product before selecting a grade.",
    usageNote:
      'Use the dedicated Marble Resin TDS for its supplied-resin data. The catalogue gives a separate short product summary and differs on viscosity and gel time, so its figures are not merged into a single claimed specification. For a quartz or engineered-stone requirement, review <a href="/products/gp-quartz-resin/">GP Quartz Resin</a>; both documents use some artificial-stone terminology, so the exact finished product and current TDS should guide selection. For broad general FRP, door/plywood lamination or a specified two-part epoxy system, review <a href="/products/gp-clear-resin/">GP Clear Resin</a>, <a href="/products/lamination-resin/">Lamination Resin</a> or <a href="/products/epoxy-clear-casting-resin/">Clear Casting Resin</a> respectively.',
    features: [
      "TDS-identified water-white liquid unsaturated polyester resin",
      "TDS-listed cultured-marble and artificial-stone product contexts",
      "Published typical TDS data for viscosity, gel time, curing time, density, storage and shelf life",
      "TDS describes fully cured water and chemical resistance at a general level; it does not publish a chemical-compatibility chart or application approval",
      "200 kg packaging and 200 kg minimum order quantity published in the current TDS",
    ],
    applications: [
      "Cultured marble slabs and vanity tops",
      "Kitchen and bathroom countertops, wash basins",
      "Wall panels, window sills and decorative architectural components",
      "Marble sheets, statues, railings and balusters",
    ],
    industries: [
      "Cultured marble & artificial stone manufacturing",
      "Countertop & vanity top manufacturing",
      "Wash-basin and bathroom-product manufacturing",
      "Architectural & decorative components",
    ],
    faqs: [
      {
        q: "What is Marble Resin?",
        a: "Marble Resin is Samrat Poly Resins' supplied water-white liquid unsaturated polyester resin for the current TDS-listed cultured-marble and artificial-stone contexts. It is a raw resin product, not a finished slab, countertop, wash basin or other completed marble product.",
      },
      {
        q: "Is Marble Resin an unsaturated polyester resin?",
        a: "Yes. The Marble Resin TDS identifies the product as unsaturated polyester resin. The current catalogue additionally labels it Orthophthalic Unsaturated Polyester Resin; this page keeps that source distinction visible rather than treating the catalogue summary as a replacement for the TDS.",
      },
      {
        q: "What applications are published for Marble Resin?",
        a: "The current TDS lists cultured-marble slabs and vanity tops; kitchen and bathroom countertops and wash basins; wall panels, window sills and architectural components; and marble sheets, statues, railings and balusters. The catalogue separately mentions cultured marble, onyx production and decorative panels. Confirm the actual finished product against the current TDS before selection.",
      },
      {
        q: "Is Marble Resin used for artificial or cultured marble?",
        a: "Yes. The current TDS explicitly names cultured marble and artificial stone. The catalogue also mentions cultured marble and onyx production. Neither document publishes a formulation, finished-system qualification or a universal suitability claim for every artificial-stone design.",
      },
      {
        q: "What is the difference between Marble Resin and GP Quartz Resin?",
        a: 'Marble Resin is the TDS-listed route for cultured marble and artificial stone. <a href="/products/gp-quartz-resin/">GP Quartz Resin</a> is documented for artificial quartz stone, engineered-stone slabs and composite mineral surfaces. The documents overlap around some artificial-marble or artificial-stone wording, so they do not establish a universal boundary or a performance ranking. Start with the exact finished product, mineral or filler context, required appearance and the grade-specific TDS.',
      },
      {
        q: "How is Marble Resin different from Polyester Putty Resin or GP Resin?",
        a: 'This Marble Resin is documented for cultured-marble and artificial-stone contexts. <a href="/products/polyester-putty-resin/">Polyester Putty Resin</a> is the separately published liquid base resin supplied to putty and body-filler manufacturers; it is not ready-made putty and not a stone-composite route. <a href="/products/gp-clear-resin/">GP Clear Resin</a> is the separate general-purpose FRP product route. Compare the published product role and data rather than transferring values between grades.',
      },
      {
        q: "Does Marble Resin determine the final appearance or performance of a finished marble product?",
        a: "No. The TDS describes supplied-resin data and uses terms such as smooth flow, high-gloss finish, low shrinkage and fully cured water or chemical resistance. The finished marble or mineral composite can also depend on the complete formulation, construction, cure state, surface system and tested configuration. The current documents do not publish a finished-product performance guarantee.",
      },
      {
        q: "Is Marble Resin water or chemical resistant?",
        a: "The TDS describes water and chemical resistance after full cure at a general level. It does not publish a chemical-compatibility chart, a specific chemical recommendation, a service-temperature limit or a finished countertop, basin or panel approval. Share the actual service requirement for confirmation before selecting a system.",
      },
      {
        q: "Which technical properties should buyers review?",
        a: "The current TDS lists water-white liquid form, 450 cPs viscosity at 25 °C, 15-20 minute gel time at 25 °C, 20-40 minute curing time at 25 °C, 1.12 g/cm³ specific gravity, 35% styrene content, 32 °C closed-cup flash point, storage and shelf life. The catalogue lists 300 cPs viscosity and 15-minute gel time, so the two sources should not be silently combined. Review the current TDS for the exact grade under consideration.",
      },
      {
        q: "What packaging and quote details are published?",
        a: "The current TDS lists 200 kg packaging and a 200 kg minimum order quantity. Review the <a href=\"/tds/marble-resin-tds.pdf\" target=\"_blank\" rel=\"noopener\">Marble Resin TDS</a> and <a href=\"/products/\">published product range</a>, then share the finished marble or stone product, available requirement or drawing, appearance or finish requirement, quantity, packaging requirement, delivery location and documentation needed when requesting a quote.",
      },
    ],
    relatedSlugs: [
      "gp-quartz-resin",
      "gp-clear-resin",
      "polyester-putty-resin",
      "lamination-resin",
      "epoxy-clear-casting-resin",
    ],
  },
  {
    slug: "vinyl-ester-resin",
    name: "Vinyl Ester Resin",
    category: "Industrial & Specialty Resins",
    price: "₹135 / kg",
    image: "vinyl-ester-resin.jpg",
    images: ["vinyl-ester-resin-2.jpg"],
    imageAlt:
      "Vinyl Ester Resin — Bisphenol-A epoxy vinyl ester resin for chemical-resistant FRP by Samrat Poly Resins",
    tdsUrl: "/tds/vinyl-ester-resin-tds.pdf",
    sdsUrl: "/sds/vinyl-ester-resin-sds.pdf",
    seo: {
      title: "Vinyl Ester Resin Supplier in India",
      description:
        "Vinyl Ester Resin from Samrat Poly Resins — Bisphenol-A epoxy vinyl ester for FRP chemical and corrosion service, MEKP cured. Request a quote.",
      keywords: [
        "Vinyl Ester Resin",
        "Vinyl Ester Resin Supplier India",
        "Bisphenol-A Epoxy Vinyl Ester Resin",
        "Vinyl Ester Resin for FRP",
        "Industrial Vinyl Ester Resin",
        "Chemical and Corrosion Resistant Resin",
      ],
    },
    // Cross-checked against SPR-TDS-VER Rev. 01 and the current catalogue.
    // Values are typical TDS data, not guaranteed specifications. The TDS
    // gives 110°C as thermal data but does not publish its test/cure condition,
    // so it is not represented as a service-temperature limit on the page.
    productDetails: {
      "Grade": "Industrial Grade",
      "Minimum Order Quantity": "225 kg",
      "Packaging": "225 kg Drum",
      "Shelf Life": "6 months",
      "Storage": "Below 25°C; cool, dry place away from direct sunlight",
    },
    techSpecs: {
      "Resin Type": "Bisphenol-A Epoxy Vinyl Ester",
      "Viscosity": "350 cPs (at 25°C)",
      "Gel Time": "15–20 minutes at 25°C (see TDS test condition)",
      "Styrene Content": "40%",
      "Catalyst / Dosage": "MEKP at 1.5% — the dosage the published gel time is measured at",
      "Specific Gravity / Density": "1.05 g/cm³",
      "Thermal Data": "110°C (TDS typical data; not a stated service-temperature limit)",
      "Flash Point": "32°C (closed cup)",
    },
    tagline: "Industrial-grade Bisphenol-A epoxy vinyl ester resin for documented chemical- and corrosion-service FRP applications.",
    description:
      "Vinyl Ester Resin is Samrat Poly Resins' documented industrial-grade Bisphenol-A epoxy vinyl ester resin for industrial FRP applications where chemical and corrosion resistance is a stated product-selection requirement. The current Technical Data Sheet lists FRP tanks and chemical storage vessels; pipelines, ducts and scrubbers; cooling towers, pressure vessels and offshore structures; and marine, pultrusion and filament-winding applications. It describes resistance to water, acids, alkalis and solvents at a product-data level. This is not a chemical-compatibility chart, a finished-component approval or a recommendation for every service medium. Buyers should share the actual FRP component, service medium, concentration and operating temperature where relevant before selecting a resin system.",
    usageNote:
      'Vinyl Ester Resin is the resin or matrix component in an FRP system; <a href="/products/fibre-glass-mat/">Glass Fiber</a> is the separate reinforcement decision. The TDS lists hand lay-up, spray-up, filament winding, casting and pultrusion as processing methods, but this product page does not provide operating instructions. For general FRP without a stated chemical- or corrosion-service requirement, review <a href="/products/gp-clear-resin/">GP Clear Resin</a> or <a href="/products/unsaturated-polyester-resin/">Unsaturated Polyester Resin</a>. <a href="/products/lamination-resin/">Lamination Resin</a> and <a href="/products/gp-gelcoat-resin/">GP Gelcoat Resin</a> have separate lamination and mould-surface roles. <a href="/products/epoxy-clear-casting-resin/">Epoxy Clear Casting Resin</a> is a separate two-component epoxy route for published decorative casting, not a substitute for this industrial FRP resin.',
    features: [
      "Documented industrial-grade Bisphenol-A epoxy vinyl ester chemistry",
      "TDS lists chemical and corrosion resistance to water, acids, alkalis and solvents",
      "Published 350 cPs viscosity at 25°C",
      "TDS identifies low shrinkage on cure without publishing a percentage",
      "Published for documented industrial FRP applications",
      "Product-specific Technical Data Sheet available",
    ],
    applications: [
      "FRP tanks and chemical storage vessels",
      "Pipelines, ducts and scrubbers",
      "Cooling towers, pressure vessels and offshore structures",
      "Marine components, filament winding and pultrusion",
    ],
    industries: [
      "Chemical storage & processing",
      "Cooling towers & industrial plants",
      "Pipelines, ducts & scrubbers",
      "Marine & industrial composite applications",
    ],
    whyChoose: [
      "Published industrial-grade chemistry and technical data",
      "Documented chemical- and corrosion-service application context",
      "225 kg drum packaging and 225 kg minimum order quantity",
      "Product-specific TDS available for technical review",
      "Clear separation from GP, fire-retardant and conventional epoxy product routes",
      "Industrial enquiry route for the actual service requirement",
    ],
    faqs: [
      {
        q: "What is Vinyl Ester Resin?",
        a: "Samrat's current TDS identifies Vinyl Ester Resin as an industrial-grade Bisphenol-A based epoxy vinyl ester resin. It is published for industrial FRP applications where chemical and corrosion resistance is part of the material-selection discussion.",
      },
      {
        q: "How is Vinyl Ester Resin different from GP or standard UPR routes?",
        a: 'Samrat publishes <a href="/products/unsaturated-polyester-resin/">Unsaturated Polyester Resin</a> and <a href="/products/gp-clear-resin/">GP Clear Resin</a> as separate broad and general-purpose FRP routes. This product\'s TDS instead identifies a Bisphenol-A epoxy vinyl ester grade with a documented chemical- and corrosion-service context. Select by the actual component and service requirement, not by resin family name alone.',
      },
      {
        q: "What is the difference between Vinyl Ester Resin and Epoxy Clear Casting Resin?",
        a: 'They are separately published material routes. Vinyl Ester Resin is the industrial FRP product described in its own TDS as Bisphenol-A epoxy vinyl ester. <a href="/products/epoxy-clear-casting-resin/">Epoxy Clear Casting Resin</a> is a separate two-component epoxy product for published decorative casting. “Epoxy vinyl ester” does not mean this is a clear-casting or art epoxy substitute.',
      },
      {
        q: "What chemical and corrosion information is published?",
        a: "The current TDS describes resistance to water, acids, alkalis and solvents. It does not publish a chemical-compatibility chart, concentration limits, a service-temperature range or a finished-FRP approval. Share the actual medium, concentration, temperature and component requirement before selection.",
      },
      {
        q: "Does the TDS publish shrinkage, mechanical or thermal test results?",
        a: "The TDS identifies low shrinkage on cure but does not publish a shrinkage percentage or a mechanical-property table. It lists 110°C as typical thermal data without a stated test or cure condition, so it should not be treated as an operating-temperature limit for a finished part.",
      },
      {
        q: "Is Vinyl Ester Resin fire retardant?",
        a: 'No fire-retardant rating, fire classification or fire-performance claim is published for this Vinyl Ester product. If a project has a fire requirement, review the separate <a href="/products/fire-retardant-resin/">Fire Retardant Resin</a> route and share the project specification; do not assume a normal Vinyl Ester Resin establishes finished-system fire performance.',
      },
      {
        q: "Can Vinyl Ester Resin be used with Glass Fiber?",
        a: 'The TDS lists industrial FRP processing methods, and <a href="/products/fibre-glass-mat/">Glass Fiber</a> is Samrat\'s separate reinforcement product route. Resin and reinforcement have different roles; the required reinforcement, laminate construction and finished-component requirement should be confirmed for the application rather than assumed from this page.',
      },
      {
        q: "How does Vinyl Ester Resin relate to the separate Bisphenol Resin product?",
        a: 'They are separate Samrat product routes with their own TDS documents. Do not treat “Bisphenol” as a synonym for this Vinyl Ester grade or assume interchangeability. Review the exact product TDS and intended application before choosing between <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> and <a href="/products/bisphenol-resin/">Bisphenol Resin</a>.',
      },
      {
        q: "What should I provide when requesting a Vinyl Ester Resin quote?",
        a: "Share the finished FRP component, exact grade if known, service medium and concentration where relevant, operating temperature where relevant, any stated fire or technical requirement, expected quantity, packaging requirement, delivery location and required documentation. This supports grade selection without assuming a chemical-compatibility or finished-system approval.",
      },
    ],
    relatedSlugs: [
      "unsaturated-polyester-resin",
      "gp-clear-resin",
      "fibre-glass-mat",
      "fiberglass-epoxy-resin",
      "gp-gelcoat-resin",
      "fire-retardant-resin",
      "bisphenol-resin",
    ],
    // Existing Vinyl Ester application guides. Their separate pages remain
    // the deeper application context; this product page stays selection-led.
    applicationSlugs: [
      "vinyl-ester-resin-for-chemical-storage-tanks",
      "vinyl-ester-resin-for-pipelines-ducts-scrubbers",
      "vinyl-ester-resin-for-filament-winding",
      "vinyl-ester-resin-for-pultrusion",
    ],
  },
  {
    slug: "fiberglass-epoxy-resin",
    name: "Fiberglass Epoxy Resin",
    // Epoxy by its own TDS ("Resin Type: Epoxy", amine-hardener cure), so it
    // belongs in the epoxy hub rather than the specialty catch-all.
    category: "Epoxy & Casting",
    price: "₹800 / kg",
    image: "fiberglass-epoxy-resin.jpg",
    images: ["fiberglass-epoxy-resin-2.jpg", "fiberglass-epoxy-resin-3.jpg"],
    imageAlt: "Illustrative Fiberglass Epoxy Resin product graphic by Samrat Poly Resins; verify the current TDS for grade data",
    tdsUrl: "/tds/fiberglass-epoxy-resin-tds.pdf",
    sdsUrl: "/sds/fiberglass-epoxy-resin-sds.pdf",
    seo: {
      title: "Fiberglass Epoxy Resin Supplier in India",
      description:
        "Fiberglass Epoxy Resin from Samrat Poly Resins — an epoxy laminating resin for fibreglass reinforcement, cured with an amine hardener. Request grade data.",
      keywords: [
        "Fiberglass Epoxy Resin",
        "Fibreglass Epoxy Resin",
        "Epoxy Resin for Fiberglass",
        "Epoxy Resin for Fibreglass",
        "Composite Epoxy Resin",
        "Epoxy Laminating Resin",
        "Epoxy Resin for Composite Laminates",
        "Fiberglass Epoxy Resin Supplier India",
      ],
    },
    // Current product data is cross-checked against SPR-TDS-FER Rev. 01
    // (July 2026) and the product catalogue. The sources differ on resin
    // chemistry wording, viscosity, gel-time / pot-life label and specific
    // gravity, so this page keeps both records visible instead of merging
    // them. The documents identify an amine hardener as part of the system,
    // but do not name a specific compatible Samrat product or say whether it
    // is included in this product's commercial pack.
    productDetails: {
      "Published grade / role": "General-purpose epoxy system for fibreglass reinforcement and lamination (current TDS)",
      "Reinforcement form": "Fabric (current TDS)",
      "Packaging": "20 kg pack",
      "Minimum order quantity": "100 kg",
      "Shelf life": "12 months (unopened)",
      "Storage": "20-30°C; cool, dry place",
    },
    techSpecs: {
      "Resin type": "Epoxy (current TDS); catalogue calls it Bisphenol-A Epoxy Resin",
      "Curing system": "Room-temperature cure with an amine hardener at 2:1 by weight (TDS). The TDS gives the hardener type and ratio but does not name a specific Samrat hardener as the qualified partner — confirm the pairing before ordering",
      "Published processing": "Hand lay-up and lamination (current TDS); catalogue separately lists filament winding",
      "Viscosity": "700 cPs at 25°C (TDS); catalogue lists 900 cPs",
      "Gel / pot-life data": "35-45 minutes at 25°C (TDS gel time); catalogue lists 35 minutes as Gel Time / Pot Life",
      "Specific gravity / density": "1.15 g/cm³ (TDS); catalogue lists 1.16 g/cm³",
      "Thermal data": "75°C HDT / thermal data (TDS; no test context or continuous-service limit published)",
      "Flash point": ">100°C (TDS)",
    },
    tagline: "Documented epoxy-system route for fibreglass fabric reinforcement and lamination.",
    description:
      "Samrat Fiberglass Epoxy Resin is the current TDS-listed general-purpose epoxy-system route for fibreglass reinforcement, composite manufacturing, hand lay-up and lamination. The detailed TDS identifies fabric reinforcement and lists boat or marine components, wind-turbine components, and construction, electrical and automotive FRP laminates as application contexts. It does not publish a finished-part approval, numerical mechanical test results, a reinforcement schedule or a universal compatibility statement for every glass-fibre product.",
    usageNote:
      'The TDS identifies an amine hardener as part of the epoxy system, but it does not name a specific compatible Samrat hardener or state whether hardener is included with this product. <a href="/products/epoxy-hardener/">Epoxy Hardener</a> is a separate polyamide curing-agent route; confirm the exact resin/hardener pairing before procurement. <a href="/products/fibre-glass-mat/">Glass Fiber</a> is a separate reinforcement product. The Fiberglass Epoxy TDS says fabric reinforcement and does not prescribe CSM 300, CSM 450, a resin-to-glass ratio or a laminate design.',
    features: [
      "Current TDS identifies an epoxy system and a general-purpose grade",
      "TDS-listed fabric-reinforcement, hand lay-up and lamination contexts",
      "Published supplied-resin viscosity, gel-time, density, packaging, MOQ, storage and shelf-life data",
      "Catalogue-versus-TDS chemistry and property differences disclosed before ordering",
      "Separate resin, hardener and reinforcement roles made clear for RFQs",
    ],
    applications: [
      "TDS-listed boat building and marine components",
      "TDS-listed wind-turbine components",
      "TDS-listed construction, electrical and automotive FRP laminates",
      "Catalogue-listed structural laminates and filament winding — confirm document route before selection",
    ],
    industries: [
      "Fibreglass composite and laminating buyers",
      "Marine, wind, construction, electrical and automotive requirements named in the TDS",
      "Structural-laminate and filament-winding enquiries named in the catalogue",
    ],
    whyChoose: [
      "Current product-specific TDS and catalogue available for review",
      "Published 20 kg packaging, 100 kg MOQ, storage and shelf-life information",
      "TDS-listed resin-system and fabric-reinforcement context",
      "Transparent disclosure that the source documents use different chemistry labels and values",
      "Focused enquiry route for the finished composite, system components and documentation need",
    ],
    faqs: [
      {
        q: "What is Fiberglass Epoxy Resin?",
        a: "The current Fiberglass Epoxy Resin TDS identifies a general-purpose epoxy system for fibreglass reinforcement, composite manufacturing, hand lay-up and lamination. It names fabric as the reinforcement form. Review the current TDS and finished composite requirement before selecting it.",
      },
      {
        q: "How is Fiberglass Epoxy Resin different from Bisphenol Resin?",
        a: 'Both have their own TDS and SDS: Bisphenol Resin is SPR-TDS-BPR, Fiberglass Epoxy Resin is SPR-TDS-FER. The two sheets share an amine hardener at 2:1 by weight, a 35–45 minute gel time at 25 °C, no styrene, a flash point above 100 °C, 12-month shelf life, 20 kg packs and a 100 kg MOQ. They differ in viscosity (600 vs 700 cPs at 25 °C), density (1.10 vs 1.15 g/cm³), thermal data (80 °C vs 75 °C), grade (premium vs general purpose) and listed uses: Bisphenol Resin names Bisphenol A and epichlorohydrin chemistry for laminating, casting, coating, flooring and encapsulation; Fiberglass Epoxy Resin names epoxy for fabric lamination in boat, wind-turbine, construction, electrical and automotive laminates. Neither document says whether they are separate formulations or two grades of one epoxy platform, so choose by the sheet that matches your process and confirm the grade with the plant when ordering. See <a href="/products/bisphenol-resin/">Bisphenol Resin</a>.',
      },
      {
        q: "Is Fiberglass Epoxy Resin supplied as resin only or as a complete system?",
        a: 'The current TDS identifies an amine hardener as part of the epoxy system, but it does not say whether hardener is included with the Fiberglass Epoxy Resin pack or name a specific compatible Samrat product. Confirm whether the requirement is resin only or a complete system before ordering. <a href="/products/epoxy-hardener/">Epoxy Hardener</a> is a separately listed product route.',
      },
      {
        q: "Is Epoxy Laminating Resin an accurate term for this product?",
        a: "The TDS lists fibreglass reinforcement and lamination, with hand lay-up and lamination as published processing methods. The catalogue separately calls the product an epoxy system for structural fiberglass laminating. Use the exact current document and application rather than assuming every laminating-epoxy requirement is identical.",
      },
      {
        q: "What reinforcement is documented for Fiberglass Epoxy Resin?",
        a: 'The Fiberglass Epoxy Resin TDS names fabric reinforcement. <a href="/products/fibre-glass-mat/">Glass Fiber</a> is the separate reinforcement product and its TDS says it is compatible with epoxy systems generally, but the Fiberglass Epoxy TDS does not prescribe a CSM weight, fabric type or reinforcement design for this grade.',
      },
      {
        q: "How does Fiberglass Epoxy Resin differ from Clear Casting or Epoxy Art Resin?",
        a: 'Fiberglass Epoxy Resin is the published fiberglass-reinforcement and lamination route. <a href="/products/epoxy-clear-casting-resin/">Epoxy Clear Casting Resin</a> has a separate clear, contained-casting role, while <a href="/products/epoxy-art-resin/">Epoxy Art Resin</a> has a separate self-levelling decorative-surface role. These product roles do not establish a universal performance ranking.',
      },
      {
        q: "How does Fiberglass Epoxy Resin differ from polyester Lamination Resin or UPR?",
        a: 'Fiberglass Epoxy Resin is an epoxy-system route. <a href="/products/lamination-resin/">Lamination Resin</a>, <a href="/products/unsaturated-polyester-resin/">Unsaturated Polyester Resin</a> and <a href="/products/gp-clear-resin/">GP Clear Resin</a> are separate polyester-product routes with their own current documents and application roles. Select by the actual specified system and finished component rather than assuming one family is universally better.',
      },
      {
        q: "Is Fiberglass Epoxy Resin chemical, water, heat or UV resistant?",
        a: "The TDS uses broad chemical-resistance wording for water, acids, alkalis and solvents and lists 75°C as HDT / thermal data. It does not provide a chemical-compatibility chart, concentration limits, test context, continuous-service temperature, UV result, weathering result or finished-component approval. Do not treat the broad wording as a project-specific compatibility recommendation.",
      },
      {
        q: "Which technical data should Fiberglass Epoxy buyers review?",
        a: "The detailed TDS lists epoxy type, general-purpose grade, room-temperature cure, hand lay-up and lamination, 700 cPs viscosity at 25°C, 35-45 minute gel time at 25°C, 1.15 g/cm³ density, 75°C HDT / thermal data, storage, shelf life, packaging and MOQ. The catalogue uses a Bisphenol-A epoxy label and different viscosity, time and density figures, so do not combine the two records without confirmation.",
      },
      {
        q: "Does resin data establish finished fiberglass-composite performance?",
        a: "No. Finished performance can depend on the resin and hardener system, reinforcement, laminate construction, cure state, thickness, component design and tested configuration. The documents do not publish a laminate design, a finished mechanical rating or a project approval.",
      },
      {
        q: "What should I include in a Fiberglass Epoxy Resin quote request?",
        a: "Share the finished composite or fiberglass application, whether resin only or a complete system is required, the reinforcement form if known, the exact TDS or catalogue reference being evaluated, required published properties, quantity, packaging need, delivery location and documentation requirement. Do not rely on a product name alone to establish the resin/hardener pairing or a finished-system result.",
      },
    ],
    relatedSlugs: [
      "epoxy-hardener",
      "fibre-glass-mat",
      "epoxy-clear-casting-resin",
      "epoxy-art-resin",
      "lamination-resin",
      "unsaturated-polyester-resin",
      "vinyl-ester-resin",
    ],
  },
  {
    slug: "bisphenol-resin",
    name: "Bisphenol Resin",
    // Bisphenol-A + epichlorohydrin cured with an amine hardener is a
    // bisphenol-A epoxy resin. Distinct from Vinyl Ester Resin, which is a
    // Bisphenol-A epoxy VINYL ESTER and cures with MEKP, not an amine.
    category: "Epoxy & Casting",
    price: "₹125 / kg",
    image: "bisphenol-resin.jpg",
    images: ["bisphenol-resin-2.jpg"],
    imageAlt: "Bisphenol Resin product graphic by Samrat Poly Resins",
    tdsUrl: "/tds/bisphenol-resin-tds.pdf",
    sdsUrl: "/sds/bisphenol-resin-sds.pdf",
    seo: {
      title: "Bisphenol Resin Supplier in India",
      description:
        "Bisphenol Resin from Samrat Poly Resins — a bisphenol-A and epichlorohydrin epoxy for laminating, casting, coating and encapsulation. Request a quote.",
      keywords: [
        "Bisphenol Resin",
        "Bisphenol Resin Supplier India",
        "Bisphenol A Resin System",
        "Bisphenol Resin for Laminating",
        "Bisphenol Resin for Casting",
        "Bisphenol Resin for Coating",
        "Bisphenol Resin for Encapsulation",
        "Industrial Bisphenol Resin",
      ],
    },
    productDetails: {
      Grade: "Premium grade (current TDS)",
      Packaging: "20 kg pack",
      "Minimum order quantity": "100 kg",
      "Shelf life": "12 months (unopened)",
      Storage: "20-30°C; cool, dry place away from direct sunlight",
    },
    techSpecs: {
      "Resin type": "Bisphenol A & epichlorohydrin based (thermosetting) - current TDS wording",
      "Curing methods": "Room-temperature cure with an amine hardener (TDS)",
      "Processing methods": "Laminating, casting, coating, encapsulation (TDS)",
      Viscosity: "600 cPs (at 25°C)",
      "Gel time": "35-45 minutes (at 25°C; TDS typical data)",
      "Styrene content": "Not applicable",
      "Specific gravity / density": "1.10 g/cm³ (at 25°C)",
      "Thermal data": "80°C (fully cured; not a published continuous-service limit)",
      "Flash point": ">100°C",
    },
    tagline: "Bisphenol A and epichlorohydrin-based thermosetting resin for laminating, casting, coating and encapsulation.",
    description:
      "The current Bisphenol Resin TDS identifies a premium-grade Bisphenol A & epichlorohydrin-based thermosetting resin system. The TDS describes a low-viscosity liquid for laminating, casting, coating and encapsulation, and lists FRP composites, flooring and protective coatings, electrical encapsulation, tooling, structural bonding, and casting or coating as its application contexts. This is a separate specialist thermosetting product route from Samrat's general-purpose UPR and Vinyl Ester Resin grades.",
    usageNote:
      'The current product-specific TDS is the technical authority for this Bisphenol Resin grade. The catalogue remains a general range overview and should not replace the grade-specific data. The TDS identifies a room-temperature cure with an amine hardener, but this page does not provide ratios or process instructions. <a href="/products/fibre-glass-mat/">Glass Fiber</a> is a separate reinforcement decision for an FRP composite. For a broad general-purpose polyester requirement, review <a href="/products/unsaturated-polyester-resin/">Unsaturated Polyester Resin</a> or <a href="/products/gp-clear-resin/">GP Clear Resin</a>. <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> is a separate product route with its own TDS.',
    features: [
      "Current TDS identifies a Bisphenol A & epichlorohydrin-based thermosetting resin system",
      "Published typical viscosity, gel-time, density and thermal data",
      "TDS-listed laminating, casting, coating and encapsulation contexts",
      "Published 20 kg packaging, 100 kg MOQ, storage and shelf-life information",
      "Current product-specific TDS available as the technical selection reference",
    ],
    applications: [
      "Laminating and FRP composites",
      "Industrial flooring and protective coatings",
      "Electrical encapsulation, tooling and structural bonding",
      "High-end casting and coating applications",
    ],
    industries: [
      "FRP composite laminating",
      "Industrial flooring and protective coatings",
      "Electrical encapsulation and tooling",
      "Casting and coating procurement",
    ],
    whyChoose: [
      "Current product-specific TDS with published supplied-resin data",
      "Defined TDS-listed application contexts for buyer discussion",
      "Published packaging, MOQ, shelf-life and storage information",
      "Clear selection routes beside UPR, Vinyl Ester, fire-retardant and epoxy-system products",
    ],
    faqs: [
      {
        q: "What is Bisphenol Resin?",
        a: "The current Bisphenol Resin TDS identifies a premium-grade Bisphenol A & epichlorohydrin-based thermosetting resin system. It lists laminating, casting, coating and encapsulation as product contexts. Review the current TDS with the intended application before selecting the grade.",
      },
      {
        q: "How is Bisphenol Resin different from Fiberglass Epoxy Resin?",
        a: 'Both have their own TDS and SDS: Bisphenol Resin is SPR-TDS-BPR, Fiberglass Epoxy Resin is SPR-TDS-FER. The two sheets share an amine hardener at 2:1 by weight, a 35–45 minute gel time at 25 °C, no styrene, a flash point above 100 °C, 12-month shelf life, 20 kg packs and a 100 kg MOQ. They differ in viscosity (600 vs 700 cPs at 25 °C), density (1.10 vs 1.15 g/cm³), thermal data (80 °C vs 75 °C), grade (premium vs general purpose) and listed uses: Bisphenol Resin names Bisphenol A and epichlorohydrin chemistry for laminating, casting, coating, flooring and encapsulation; Fiberglass Epoxy Resin names epoxy for fabric lamination in boat, wind-turbine, construction, electrical and automotive laminates. Neither document says whether they are separate formulations or two grades of one epoxy platform, so choose by the sheet that matches your process and confirm the grade with the plant when ordering. See <a href="/products/fiberglass-epoxy-resin/">Fiberglass Epoxy Resin</a>.',
      },
      {
        q: "Does “Bisphenol” mean Bisphenol A for this product?",
        a: "The current TDS uses the exact wording “Bisphenol A & epichlorohydrin based (thermosetting)”. The page uses that document wording and does not infer a wider product-family identity from the name alone.",
      },
      {
        q: "Is Bisphenol Resin an unsaturated polyester resin or Vinyl Ester Resin?",
        a: 'The current product-specific TDS does not identify this product as unsaturated polyester resin or Vinyl Ester Resin; it lists styrene content as not applicable. <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> is a separate Samrat product with its own TDS and should not be treated as interchangeable.',
      },
      {
        q: "Is Bisphenol Resin suitable for fibreglass laminating?",
        a: "Laminating and FRP composites are listed in the current TDS. <a href=\"/products/fibre-glass-mat/\">Glass Fiber</a> is a separate reinforcement product; the TDS does not prescribe a mat weight, resin-to-glass ratio or laminate design.",
      },
      {
        q: "What is the difference between Bisphenol Resin and Vinyl Ester Resin?",
        a: 'They are separately listed Samrat product routes with their own TDS documents. The current Bisphenol Resin TDS and the separate <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> TDS use different product descriptions and values. Select against the exact document, application and stated requirement; neither page treats one as an automatic substitute for the other.',
      },
      {
        q: "What applications is Bisphenol Resin used for?",
        a: "The current TDS lists laminating and FRP composites; industrial flooring and protective coatings; electrical encapsulation, tooling and structural bonding; and high-end casting and coating applications. It does not publish a tank, pipe, marine or chemical-specific approval.",
      },
      {
        q: "Does Samrat publish chemical compatibility or a corrosion-service approval for Bisphenol Resin?",
        a: "No product-specific chemical-compatibility chart, chemical concentration limit, corrosion-life claim or finished-system approval is published in the current Bisphenol Resin TDS. Share the actual service condition and documentation requirement during enquiry rather than inferring a compatibility recommendation.",
      },
      {
        q: "What temperature data is published?",
        a: "The current TDS lists 80°C under thermal data for a fully cured material. It does not publish a continuous service-temperature limit, so this value should not be treated as one.",
      },
      {
        q: "Is Bisphenol Resin fire retardant?",
        a: "No fire classification, rating, test result or fire-retardant claim is published for this product. Where a project specifies fire performance, share the exact requirement and review the separate <a href=\"/products/fire-retardant-resin/\">Fire Retardant Resin</a> route instead of assuming this product meets it.",
      },
      {
        q: "Which documents and details should I provide for a quote?",
        a: "Review the current product-specific TDS, then share the intended application, required technical or service requirement, expected quantity, packaging need, delivery location and documentation requirement. Where relevant, include the service medium, concentration and temperature without assuming a compatibility recommendation.",
      },
    ],
    relatedSlugs: [
      "vinyl-ester-resin",
      "unsaturated-polyester-resin",
      "fiberglass-epoxy-resin",
      "gp-clear-resin",
      "fibre-glass-mat",
      "fire-retardant-resin",
    ],
  },
  {
    slug: "mekp-hardener",
    name: "MEKP Hardener",
    category: "Hardeners",
    price: "₹220 / kg",
    image: "mekp-hardener.jpg",
    images: ["mekp-hardener-2.jpg"],
    imageAlt: "MEKP Hardener — methyl ethyl ketone peroxide catalyst for polyester resin systems by Samrat Poly Resins",
    tdsUrl: "/tds/mekp-hardener-tds.pdf",
    sdsUrl: "/sds/mekp-hardener-sds.pdf",
    seo: {
      title: "MEKP Hardener Supplier in India | Polyester Resin Catalyst",
      description:
        "MEKP Hardener (Methyl Ethyl Ketone Peroxide) — the catalyst / initiator for polyester, vinyl ester and gelcoat systems. Published 25 kg carboy packaging and TDS. Not the same as an accelerator.",
      keywords: [
        "MEKP Hardener",
        "MEKP Catalyst",
        "MEKP Initiator",
        "Polyester Resin Catalyst",
        "Polyester Resin Hardener",
        "Catalyst for Polyester Resin",
        "FRP Hardener",
        "Industrial MEKP",
        "MEKP Supplier",
        "Gelcoat Catalyst",
      ],
    },
    productDetails: {
      "Product type": "Methyl Ethyl Ketone Peroxide (MEKP) - organic peroxide initiator",
      Grade: "Industrial grade",
      Function: "Curing catalyst / initiator for unsaturated polyester, vinyl ester and gelcoat systems",
      "Compatible systems": "Unsaturated polyester resins, vinyl ester resins and gelcoats",
      Appearance: "Clear, colourless liquid",
    },
    techSpecs: {
      Purity: "98%",
      "Specific gravity / density": "1.17 g/cm³ (at 25 °C)",
      "Active oxygen content": "9.0%",
      "Shelf life": "6 months (unopened)",
      Packaging: "25 kg carboy",
      "Minimum order quantity": "25 kg",
    },
    tagline: "Catalyst / initiator for published polyester resin systems.",
    description:
      "MEKP Hardener (Methyl Ethyl Ketone Peroxide) is Samrat Poly Resins' published industrial catalyst / initiator for selected unsaturated polyester resin, vinyl ester resin and gelcoat systems. In FRP procurement and shop-floor language it may be called a hardener, catalyst or initiator because its role is to start curing in the selected resin system. It is not a structural resin, glass-fibre reinforcement or a finished-surface gelcoat. Review the actual resin grade, intended FRP application and current Technical Data Sheet before selecting the complete material system.",
    usageNote:
      'MEKP Hardener is a separate catalyst component for published resin systems including <a href="/products/gp-clear-resin/">GP Clear Resin</a>, <a href="/products/gp-white-resin/">GP White Resin</a>, <a href="/products/gp-yellow-resin/">GP Yellow Resin</a>, <a href="/products/lamination-resin/">Lamination Resin</a>, <a href="/products/gp-gelcoat-resin/">GP Gelcoat Resin</a> and <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a>. <a href="/products/fibre-glass-mat/">Glass Fiber</a> is the separate reinforcement component, while <a href="/products/frp-polyester-pigment/">FRP Polyester Pigment</a> is a separate colour component. For a published compatible two-component epoxy route, review <a href="/products/epoxy-hardener/">Epoxy Hardener</a> and the <a href="/resources/epoxy-hardener-vs-mekp-hardener/">Epoxy Hardener vs MEKP guide</a> instead; MEKP does not replace that separate epoxy curing-agent component. Confirm the published product data for the actual system; this page does not provide operating instructions.',
    features: [
      "Published catalyst / initiator role for selected polyester-family resin systems",
      "Compatible-system guidance for unsaturated polyester, vinyl ester and gelcoat buyers",
      "Separate material role from structural resin, glass-fibre reinforcement and surface gelcoat",
      "Industrial-grade product with a published Technical Data Sheet",
      "25 kg carboy packaging and 25 kg minimum order quantity",
      "Quote discussion can begin with the resin grade, application and expected quantity",
    ],
    applications: [
      "Published polyester resin systems for FRP products and laminates",
      "Published gelcoat systems for moulded FRP surface-finish work",
      "Published vinyl ester resin systems for specified chemical-storage and pipeline contexts",
      "Composite manufacturing applications where the selected base resin is confirmed first",
    ],
    industries: [
      "FRP & composites manufacturing",
      "FRP roofing, panel and tank manufacturing",
      "FRP moulded-product and surface-finish manufacture",
      "Industrial composite and resin-system procurement",
    ],
    whyChoose: [
      "Published MEKP Hardener Technical Data Sheet available for review",
      "Clear product role beside the relevant polyester, vinyl ester and gelcoat pages",
      "25 kg carboy packaging and 25 kg MOQ published in the current TDS",
      "Industrial enquiry can capture resin grade, application, process and delivery location",
    ],
    faqs: [
      {
        q: "What is MEKP Hardener?",
        a: "MEKP Hardener (Methyl Ethyl Ketone Peroxide) is the standard catalyst used to initiate curing in unsaturated polyester resins, vinyl ester resins and gelcoats.",
      },
      {
        q: "What resins is MEKP Hardener used with?",
        a: 'It is used with unsaturated polyester resins such as <a href="/products/gp-clear-resin/">GP Clear Resin</a>, gelcoats such as our <a href="/products/gp-gelcoat-resin/">GP Gelcoat Resin</a>, and vinyl ester resins such as our <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a>.',
      },
      {
        q: "Why is MEKP referred to as a hardener, catalyst or initiator?",
        a: "These terms describe MEKP's curing role within a selected polyester-family resin system. MEKP is not the structural resin, the glass-fibre reinforcement or the mould-side gelcoat itself.",
      },
      {
        q: "Is MEKP Hardener a resin or reinforcement material?",
        a: "No. MEKP Hardener is the separately selected catalyst / initiator. The resin, <a href=\"/products/fibre-glass-mat/\">glass-fibre reinforcement</a>, gelcoat and any <a href=\"/products/frp-polyester-pigment/\">FRP Polyester Pigment</a> have distinct material roles within an FRP system.",
      },
      {
        q: "What should I share when requesting an MEKP Hardener quote?",
        a: "Please share the base resin grade or system, finished component or application, expected quantity, production process if known, and delivery location. This helps the team understand the procurement requirement before preparing a quote.",
      },
      {
        q: "Is MEKP Hardener used with gelcoats?",
        a: "The published compatible systems include gelcoats, alongside unsaturated polyester resins and vinyl ester resins. Review the actual gelcoat product data and intended application before selecting the system.",
      },
      {
        q: "What applications use MEKP Hardener?",
        a: "The current TDS lists FRP products and laminates, boat building and automotive parts, gelcoat and casting work, and composite manufacturing. Suitability still depends on the separately selected resin system and the application requirements.",
      },
    ],
    applicationSlugs: [
      "resin-for-water-tank-manufacturing",
      "resin-for-roofing-sheet-manufacturing",
      "resin-for-frp-panel-manufacturing",
      "resin-for-hand-lay-up-process",
      "gelcoat-for-general-frp-mould-finishing",
    ],
    relatedSlugs: [
      "gp-clear-resin",
      "gp-gelcoat-resin",
      "vinyl-ester-resin",
      "fibre-glass-mat",
      "epoxy-hardener",
    ],
  },
  {
    slug: "gp-yellow-resin",
    name: "GP Yellow Resin",
    category: "GP Resins",
    price: "",
    image: "gp-yellow-resin.jpg",
    images: ["gp-yellow-resin-2.jpg"],
    imageAlt:
      "GP Yellow Resin — transparent yellow, general-purpose orthophthalic polyester laminating resin by Samrat Poly Resins",
    tdsUrl: "/tds/gp-yellow-resin-tds.pdf",
    sdsUrl: "/sds/gp-yellow-resin-sds.pdf",
    seo: {
      title: "GP Yellow Resin – Laminating Polyester Resin",
      description:
        "GP Yellow Resin — a transparent yellow, orthophthalic polyester resin for general-purpose FRP laminating. Gel time 10–15 minutes. 225 kg drums.",
      keywords: [
        "GP Yellow Resin",
        "Yellow Polyester Resin",
        "General Purpose Yellow Resin",
        "FRP Laminating Resin",
        "Yellow FRP Resin",
      ],
    },
    // Specification sheet supplied directly for this product (transparent
    // yellow GP grade) — not yet backed by a published TDS PDF, so no
    // tdsUrl. Field names/keys kept identical to gp-clear-resin's table for
    // sitewide consistency ("Specific Gravity / Density", etc.).
    productDetails: {
      "Minimum Order Quantity": "1,000 kg",
      "Packaging": "225 kg Drum",
      "Physical Form": "Liquid",
      "Colour / Appearance": "Transparent Yellow",
      "Shelf Life": "3 months (225 kg drum) / 2 months (PET packaging)",
      "Storage Temperature": "25–30 °C",
    },
    techSpecs: {
      "Resin Type": "Orthophthalic, Unsaturated Polyester",
      "Curing System": "Non-accelerated",
      "Viscosity": "450–600 cPs @ 25°C",
      "Gel Time": "10–15 minutes",
      "Styrene Content": "34–38%",
      "Specific Gravity / Density": "1.10–1.14 g/cm³",
      "Cure Time": "60–90 minutes",
      "MEKP Dosage": "1.5%",
      "Cobalt Octoate Dosage": "0.3–0.5%",
      "Purity": "99%",
    },
    tagline: "Transparent yellow, general-purpose orthophthalic laminating resin.",
    description:
      "GP Yellow Resin is a transparent yellow, orthophthalic unsaturated polyester resin from Samrat Poly Resins — a general-purpose structural laminating resin, not a surface coating or a lamination-specialty grade. It shares the same MEKP and cobalt octoate cure system and hand layup / spray-up processing as our GP Clear Resin, but runs thicker (450–600 cPs against GP Clear Resin's 350–450 cPs) with a slightly slower 10–15 minute gel time and 60–90 minute cure. With 34–38% styrene content and 99% purity, it wets out glass fibre reinforcement for a consistent, well-bonded laminate across roofing sheets, water tanks, FRP doors and panels, and general lamination work — a straightforward alternative to GP Clear Resin wherever the resin's own colour is hidden behind a gelcoat, paint or another layer.",
    usageNote:
      'GP Yellow Resin is catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt accelerator, then reinforced with <a href="/products/fibre-glass-mat/">glass fibre</a> for hand layup and spray-up — the same process used for our <a href="/products/gp-clear-resin/">GP Clear Resin</a>. Where the finished part needs to stay colourless, GP Clear Resin is the better choice; where a factory-pigmented grade tuned specifically for sheet and panel production is needed instead, see our <a href="/products/sheet-grade-yellow-resin/">Sheet Grade Yellow Resin</a>. Mould-facing surfaces can be finished with a <a href="/products/gp-gelcoat-resin/">Gelcoat Resin</a>, and projects facing harsher chemical exposure or continuous water immersion should step up to <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> instead.',
    features: [
      "Transparent yellow orthophthalic base, sharing GP Clear Resin's cure chemistry",
      "Wets out glass fibre reinforcement for a consistent, well-bonded laminate",
      "Thicker body and slightly slower cure than GP Clear Resin (450–600 cPs, 10–15 minute gel)",
      "Cures at room temperature with the same MEKP and cobalt octoate system as GP Clear Resin",
      "34–38% styrene content and 99% purity for consistent, batch-to-batch processing",
      "Supplied in 225 kg drums; minimum order 1,000 kg",
    ],
    applications: [
      "Roofing sheets and daylighting panels",
      "Water tanks and storage vessels",
      "FRP doors and decorative panels",
      "General lamination and FRP moulded products",
    ],
    industries: [
      "FRP & composites manufacturing",
      "Roofing & construction",
      "Water tanks & storage",
      "Door & panel manufacturing",
      "General industrial moulding",
    ],
    whyChoose: [
      "ISO 9001:2015 certificate of registration (GMSQR Certifications, first registered 2019)",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Consistent 99% purity with batch-to-batch quality control",
      "Bulk supply from 1,000 kg, packed in 225 kg drums",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is GP Yellow Resin?",
        a: "GP Yellow Resin is a transparent yellow, orthophthalic unsaturated polyester resin from Samrat Poly Resins — a general-purpose structural laminating resin used to wet out and bind glass fibre reinforcement, not a surface coating. It is supplied as a non-accelerated liquid in 225 kg drums for roofing sheets, water tanks, doors, panels and general lamination work.",
      },
      {
        q: "What is the difference between GP Yellow Resin and GP Clear Resin?",
        a: "Both are general-purpose orthophthalic polyester resins that cure with the same MEKP and cobalt octoate system. GP Yellow Resin is thicker (450–600 cPs against 350–450 cPs) and gels and cures somewhat slower (10–15 minutes against under 8 minutes) than GP Clear Resin, and it carries a transparent yellow tint rather than being colourless. Choose GP Yellow Resin where the resin's own colour won't be visible in the finished part — for example, behind a gelcoat or another layer — and GP Clear Resin where a colourless resin matters.",
      },
      {
        q: "Is GP Yellow Resin the same as Sheet Grade Yellow Resin?",
        a: "No. GP Yellow Resin is a general-purpose grade suited to a broad range of FRP work — roofing sheets, water tanks, doors and panels. Sheet Grade Yellow Resin is factory-pigmented and tuned specifically for FRP sheet and panel manufacturing. Choose based on your specific application.",
      },
      {
        q: "What is the gel time, and how is GP Yellow Resin cured?",
        a: "Gel time is 10–15 minutes. It is a non-accelerated resin, cured at room temperature by adding a cobalt octoate accelerator (0.3–0.5%) and an MEKP catalyst (around 1.5%); full cure typically takes 60–90 minutes depending on temperature and dosage.",
      },
      {
        q: "Does GP Yellow Resin offer good chemical resistance?",
        a: 'As an orthophthalic polyester resin, GP Yellow Resin offers standard-duty resistance suitable for general FRP work, but orthophthalic grades are the base tier for chemical resistance within the polyester family. For moulds or parts facing harsher chemical exposure or continuous water immersion, a <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> system offers meaningfully better resistance and is the more suitable choice.',
      },
      {
        q: "What is the viscosity, styrene content and density of GP Yellow Resin?",
        a: "Viscosity is 450–600 cPs at 25°C, styrene content is 34–38%, and specific gravity is 1.10–1.14 g/cm³. Purity is 99%.",
      },
      {
        q: "How is GP Yellow Resin packed, and what is the minimum order quantity?",
        a: "It is supplied in 225 kg drums, with a minimum order quantity of 1,000 kg. Bulk and repeat-order pricing is available on request.",
      },
      {
        q: "What is the shelf life and recommended storage?",
        a: "Shelf life is 3 months in a sealed 225 kg drum and 2 months in PET packaging. Store between 25–30 °C, away from direct heat, sparks and sunlight.",
      },
    ],
    relatedSlugs: [
      "sheet-grade-yellow-resin",
      "gp-clear-resin",
      "gp-gelcoat-resin",
      "vinyl-ester-resin",
      "mekp-hardener",
    ],
    // Card-only stubs (draft: true) approved via Step 1 audit + Step 3 —
    // slugs prefixed "gp-yellow-resin-for-" so they never collide with GP
    // Clear Resin's existing "resin-for-*" pages that already own this
    // search intent. See applications.js for the stub entries themselves.
    applicationSlugs: [
      "gp-yellow-resin-for-water-tank-manufacturing",
      "gp-yellow-resin-for-cooling-tower-manufacturing",
      "gp-yellow-resin-for-roofing-sheet-manufacturing",
      "gp-yellow-resin-for-door-skin-manufacturing",
      "gp-yellow-resin-for-hand-lay-up-process",
      "gp-yellow-resin-for-spray-up-process",
      "gp-yellow-resin-for-general-frp-moulded-products",
    ],
  },

  // ==========================================================================
  //  New products added 2026-09-01. Cobalt Octoate joins the existing
  //  Hardeners category (chemically it accelerates/promotes a peroxide-
  //  initiated cure, not a hardener itself — see its description). The other
  //  five (non-resin FRP consumables: application tools, thinners, fillers,
  //  mould-release wax) briefly had their own "Elite Products" category,
  //  since removed — they now join the existing FRP Allied Products
  //  category instead. No numeric specs (purity, dosage, viscosity, density,
  //  concentration, mesh size, etc.) are asserted for any of these six —
  //  none is backed by verified product data yet, so productDetails below
  //  is deliberately non-numeric, and techSpecs is omitted entirely rather
  //  than filled with placeholders.
  // ==========================================================================
  {
    slug: "cobalt-octoate",
    name: "Cobalt Octoate",
    category: "Hardeners",
    price: "",
    image: "cobalt-octoate.png",
    imageAlt:
      "Cobalt Octoate — cobalt-based accelerator / promoter for unsaturated polyester resin curing systems by Samrat Poly Resins",
    seo: {
      title: "Cobalt Octoate Accelerator / Promoter | Samrat Poly Resins",
      description:
        "Cobalt accelerator for unsaturated polyester curing, used alongside MEKP. Never mix the two directly. Industrial quantities from Punjab.",
      keywords: [
        "Cobalt Octoate",
        "Cobalt Octoate Accelerator",
        "Cobalt Octoate Promoter",
        "Polyester Resin Accelerator",
        "UPR Curing Accelerator",
        "Cobalt Octoate Supplier",
      ],
    },
    // Deliberately non-numeric — see file-level note above. Do not add a
    // cobalt-content percentage or other figures here without verified data,
    // even though the product image itself displays a concentration.
    productDetails: {
      "Product Type": "Cobalt Octoate Accelerator / Promoter",
      "Function": "Curing accelerator / promoter for compatible unsaturated polyester resin systems",
      "Typically Used With": "Peroxide-initiated cure systems such as MEKP",
      "Category": "Hardeners",
    },
    tagline: "Cobalt-based accelerator / promoter for compatible unsaturated polyester resin curing systems.",
    description:
      "Cobalt Octoate is Samrat Poly Resins' cobalt-based accelerator / promoter, positioned for compatible unsaturated polyester resin curing systems. It is commonly associated with peroxide-initiated cure systems such as MEKP, where its role is to accelerate and promote the curing reaction. Cobalt Octoate is not itself a polyester resin, a standalone hardener or a finished composite material — it is a separate accelerator component used alongside a selected base resin and peroxide catalyst. It is catalogued under Hardeners for browsing convenience alongside the other curing-system components; review the actual resin system, peroxide catalyst and current product data before finalising a curing formulation.",
    usageNote:
      'Cobalt Octoate is a separate accelerator / promoter component, typically used alongside a peroxide catalyst such as <a href="/products/mekp-hardener/">MEKP Hardener</a> in a compatible unsaturated polyester resin system. It does not replace the base resin, the catalyst or any reinforcement material — confirm the actual resin grade and current product data before selecting a complete curing system.',
    features: [
      "Cobalt-based accelerator / promoter for compatible unsaturated polyester resin systems",
      "Commonly used alongside peroxide-initiated cure systems such as MEKP",
      "Supplied as a separate accelerator component, not a standalone hardener or resin",
      "Catalogued under Hardeners for browsing convenience alongside other curing-system components",
      "Chemically distinct from, and not a substitute for, the peroxide catalyst it is paired with",
      "Suited to workshops already running an MEKP-initiated, room-temperature cure process",
    ],
    applications: [
      "Unsaturated polyester resin curing systems where a cobalt-based accelerator is specified",
      "FRP fabrication and moulding processes using MEKP-initiated cure",
      "General composite manufacturing where a separate accelerator / promoter component is required",
    ],
    industries: [
      "FRP & composites manufacturing",
      "Polyester resin processing",
      "Industrial resin-system procurement",
      "FRP tank, panel and moulded-product manufacturing",
      "Gelcoat and surface-finish production",
    ],
    whyChoose: [
      "ISO 9001:2015 certificate of registration (GMSQR Certifications, first registered 2019)",
      "GST-registered Indian business (GSTIN 03ALBPS3446G1ZB)",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
      "Enquiry can begin with the resin system, application and expected quantity",
      "Part of Samrat Poly Resins' broader FRP and composite raw-material range",
    ],
    faqs: [
      {
        q: "What is Cobalt Octoate used for?",
        a: "Cobalt Octoate is a cobalt-based accelerator / promoter used with compatible unsaturated polyester resin curing systems, commonly alongside a peroxide catalyst such as MEKP.",
      },
      {
        q: "Is Cobalt Octoate the same as MEKP Hardener?",
        a: 'No. Cobalt Octoate is a separate accelerator / promoter component. <a href="/products/mekp-hardener/">MEKP Hardener</a> is the peroxide catalyst / initiator typically used alongside it — the two perform different roles within a curing system.',
      },
      {
        q: "Is Cobalt Octoate a standalone hardener or resin?",
        a: "No. It is an accelerator / promoter component only, used alongside a separately selected base resin and catalyst — not a structural resin and not a complete curing agent on its own.",
      },
      {
        q: "What should I share when requesting a Cobalt Octoate quote?",
        a: "Please share the base resin system, intended application, expected quantity and delivery location so the team can understand the requirement before preparing a quote.",
      },
      {
        q: "Does Cobalt Octoate come with a Safety Data Sheet?",
        a: "Request the current Safety Data Sheet (SDS) at the time of enquiry for storage, handling and PPE guidance.",
      },
      {
        q: "Can Cobalt Octoate be supplied in bulk quantities?",
        a: "Share your expected quantity when requesting a quote — packaging and bulk-order options are confirmed at that stage.",
      },
    ],
    relatedSlugs: ["mekp-hardener"],
    resourceSlugs: [
      "what-is-cobalt-octoate",
      "what-is-cobalt-octoate",
      "what-is-cobalt-octoate",
      "what-is-cobalt-octoate",
      "what-is-cobalt-octoate",
      "what-is-cobalt-octoate",
      "how-temperature-affects-polyester-cure",
      "what-is-cobalt-octoate",
      "troubleshooting-polyester-cure-speed",
      "common-frp-curing-problems",
      "what-is-cobalt-octoate",
      "what-is-cobalt-octoate",
      "what-is-cobalt-octoate",
    ],
    tdsUrl: "/tds/cobalt-octoate-tds.pdf",
  },
  {
    slug: "styrene-monomer",
    name: "Styrene Monomer",
    category: "FRP Allied Products",
    price: "",
    image: "styrene-monomer.png",
    imageAlt:
      "Styrene Monomer — reactive monomer / reactive diluent for unsaturated polyester resin systems by Samrat Poly Resins",
    seo: {
      title: "Styrene Monomer Supplier in India",
      description:
        "Reactive monomer and diluent for unsaturated polyester systems, used to adjust viscosity and support flow. Industrial supply from Punjab.",
      keywords: [
        "Styrene Monomer",
        "Reactive Diluent",
        "Polyester Resin Monomer",
        "Styrene Monomer Supplier",
        "UPR Reactive Diluent",
        "FRP Processing Monomer",
      ],
    },
    productDetails: {
      "Product Type": "Styrene Monomer",
      "Function": "Reactive monomer / reactive diluent",
      "Appearance": "Clear, colourless liquid",
      "Used In": "Compatible unsaturated polyester resin systems",
    },
    tagline: "Reactive monomer / reactive diluent for compatible unsaturated polyester resin systems.",
    description:
      "Styrene Monomer is Samrat Poly Resins' reactive monomer / reactive diluent, positioned for use in compatible unsaturated polyester resin systems. It helps reduce viscosity and supports processing and flow in suitable formulations. Styrene Monomer is not itself a polyester resin — it is a separate reactive component used alongside a selected base resin. Review the actual resin system and current product data before finalising a formulation.",
    usageNote:
      'Styrene Monomer is typically used to adjust the working viscosity of an already-selected unsaturated polyester resin system such as our <a href="/products/gp-clear-resin/">GP Clear Resin</a> or <a href="/products/unsaturated-polyester-resin/">Unsaturated Polyester Resin</a>, or as part of gelcoat formulation work such as our <a href="/products/gp-gelcoat-resin/">GP Gelcoat Resin</a>. It is a reactive diluent, not a standalone resin — confirm the base resin system and current product data before ordering.',
    features: [
      "Reactive monomer / reactive diluent for compatible unsaturated polyester resin systems",
      "Helps reduce viscosity and support processing / flow in suitable formulations",
      "Supplied as a separate reactive component, not a standalone resin",
      "Participates in the curing reaction itself rather than evaporating away like a conventional solvent",
      "Positioned for formulation and process-adjustment use alongside a selected base resin",
    ],
    applications: [
      "Unsaturated polyester resin systems where viscosity reduction / flow support is needed",
      "FRP lamination and moulding processes using compatible resin formulations",
      "General composite manufacturing where a reactive diluent component is required",
    ],
    industries: [
      "FRP & composites manufacturing",
      "Polyester resin processing",
      "Industrial resin-system procurement",
      "Gelcoat and surface-finish formulation",
    ],
    whyChoose: [
      "ISO 9001:2015 certificate of registration (GMSQR Certifications, first registered 2019)",
      "GST-registered Indian business (GSTIN 03ALBPS3446G1ZB)",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
      "Enquiry can begin with the resin system, application and expected quantity",
      "Part of Samrat Poly Resins' broader FRP and composite raw-material range",
    ],
    faqs: [
      {
        q: "What is Styrene Monomer used for?",
        a: "Styrene Monomer is a reactive monomer / reactive diluent used in compatible unsaturated polyester resin systems to help reduce viscosity and support resin flow and processing.",
      },
      {
        q: "Is Styrene Monomer the same as polyester resin?",
        a: "No. Styrene Monomer is a separate reactive component used alongside a selected base polyester resin — it is not itself a structural resin.",
      },
      {
        q: "What should I share when requesting a Styrene Monomer quote?",
        a: "Please share the base resin system, intended application, expected quantity and delivery location so the team can understand the requirement before preparing a quote.",
      },
      {
        q: "Does Styrene Monomer require special handling?",
        a: "It is a flammable, volatile liquid — request the current Safety Data Sheet (SDS) for storage, ventilation and PPE guidance before use.",
      },
      {
        q: "Can Styrene Monomer be supplied in bulk quantities?",
        a: "Share your expected quantity when requesting a quote — packaging and bulk-order options are confirmed at that stage.",
      },
    ],
    relatedSlugs: ["gp-clear-resin", "unsaturated-polyester-resin", "gp-gelcoat-resin"],
    resourceSlugs: [
      "what-is-styrene-monomer",
      "what-is-styrene-monomer",
      "what-is-styrene-monomer",
      "what-is-styrene-monomer",
      "what-is-styrene-monomer",
      "styrene-and-polyester-cure-chemistry",
      "what-is-styrene-monomer",
      "styrene-monomer-storage-handling-safety",
      "what-is-styrene-monomer",
      "what-is-styrene-monomer",
    ],
    tdsUrl: "/tds/styrene-monomer-tds.pdf",
  },
  {
    slug: "nc-thinner",
    name: "NC Thinner",
    category: "FRP Allied Products",
    price: "",
    image: "nc-thinner.png",
    imageAlt:
      "NC Thinner — nitrocellulose lacquer thinner for compatible NC coating systems by Samrat Poly Resins",
    seo: {
      title: "NC Thinner | Nitrocellulose Lacquer Thinner",
      description:
        "Nitrocellulose thinner for NC lacquer and coating systems, used for viscosity adjustment and application. Industrial supply from Punjab.",
      keywords: [
        "NC Thinner",
        "Nitrocellulose Thinner",
        "NC Lacquer Thinner",
        "Professional Thinner",
        "NC Coating Thinner",
        "Thinner Supplier",
      ],
    },
    productDetails: {
      "Product Type": "Nitrocellulose (NC) Thinner",
      "Function": "Solvent blend for viscosity adjustment",
      "Appearance": "Clear liquid",
      "Used With": "Compatible NC lacquer / coating systems",
    },
    tagline: "Nitrocellulose thinner / professional thinner for compatible NC lacquer and coating systems.",
    description:
      "NC Thinner is Samrat Poly Resins' nitrocellulose thinner / professional thinner, a solvent blend positioned for compatible NC lacquer and coating systems. It is used for viscosity adjustment and to support application. NC Thinner is not a resin, hardener or catalyst — it is a separate solvent component used alongside a selected NC lacquer or coating system. Review the actual coating system and current product data before use.",
    usageNote:
      "NC Thinner is supplied as a standalone solvent blend for nitrocellulose-based lacquer and coating systems sourced separately — it is not paired with a specific Samrat resin product, and thinning ratio should be matched to the coating manufacturer's own recommendations rather than assumed from a different thinner or coating type.",
    features: [
      "Nitrocellulose thinner / professional thinner for compatible NC lacquer and coating systems",
      "Used for viscosity adjustment and application support",
      "Supplied as a separate solvent blend, not a resin, hardener or catalyst",
      "Supports flow and levelling for spray or brush application",
      "Positioned for professional and industrial finishing work, not just furniture use",
    ],
    applications: [
      "NC lacquer and coating systems requiring viscosity adjustment",
      "Professional spray-application and finishing processes using compatible NC systems",
      "General industrial finishing work where an NC-compatible thinner is required",
    ],
    industries: [
      "Wood finishing & furniture coating",
      "Industrial and professional coating application",
      "General finishing & fabrication",
      "Automotive and industrial refinishing",
    ],
    whyChoose: [
      "ISO 9001:2015 certificate of registration (GMSQR Certifications, first registered 2019)",
      "GST-registered Indian business (GSTIN 03ALBPS3446G1ZB)",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
      "Enquiry can begin with the intended coating system, application and expected quantity",
      "Part of Samrat Poly Resins' broader FRP and composite raw-material range",
    ],
    faqs: [
      {
        q: "What is NC Thinner used for?",
        a: "NC Thinner is a nitrocellulose (NC) thinner / professional thinner blend used with compatible NC lacquer and coating systems for viscosity adjustment and application support.",
      },
      {
        q: "Is NC Thinner a resin, hardener or catalyst?",
        a: "No. NC Thinner is a solvent blend only, used alongside a separately selected NC lacquer or coating system — it does not cure or react as a resin, hardener or catalyst would.",
      },
      {
        q: "What should I share when requesting an NC Thinner quote?",
        a: "Please share the intended coating system, application, expected quantity and delivery location so the team can understand the requirement before preparing a quote.",
      },
      {
        q: "Is NC Thinner flammable?",
        a: "Yes — like most lacquer thinners, it is a flammable liquid. Request the current Safety Data Sheet (SDS) for storage and handling guidance.",
      },
      {
        q: "Can NC Thinner be used with any coating type?",
        a: "It is formulated specifically for nitrocellulose-based coatings — check the coating manufacturer's guidance before using it with a different coating chemistry.",
      },
    ],
    resourceSlugs: [
      "what-is-nc-thinner",
      "what-is-nc-thinner",
      "what-is-nc-thinner",
      "what-is-nc-thinner",
      "solvent-evaporation-and-coating-defects",
      "nc-thinner-vs-general-purpose-thinner",
      "what-is-nc-thinner",
      "what-is-nc-thinner",
    ],
    tdsUrl: "/tds/nc-thinner-tds.pdf",
  },
  {
    slug: "paint-brushes",
    name: "Paint Brushes",
    category: "FRP Allied Products",
    price: "",
    image: "paint-brushes.png",
    imageAlt:
      "Paint Brushes — professional application brushes for resin, gelcoat and FRP work by Samrat Poly Resins",
    seo: {
      title: "Paint Brushes | Application Brushes for Resin & FRP Work",
      description:
        "Application brushes for resin, gelcoat, hand lay-up and FRP repair work, in the widths a composite workshop actually uses.",
      keywords: [
        "Paint Brushes",
        "Resin Application Brush",
        "FRP Brush",
        "Gelcoat Brush",
        "Hand Lay-Up Brush",
        "Composite Fabrication Tools",
      ],
    },
    productDetails: {
      "Product Type": "Application Brush",
      "Primary Use": "Resin, gelcoat and coating application",
      "Suitable Processes": "Hand lay-up, FRP repair, composite fabrication",
      "Format": "Multiple brush sizes",
    },
    tagline: "Professional application brushes suitable for resin, hand lay-up, gelcoat and FRP repair work.",
    description:
      "Paint Brushes from Samrat Poly Resins are professional application tools suitable for resin application, hand lay-up, gelcoat application, FRP repair and composite fabrication work. They are supplied as manual application tools, not a chemical or resin product, and are intended to support consistent application alongside a separately selected resin, gelcoat or coating system.",
    usageNote:
      'Paint Brushes are typically used to apply and work in resin or gelcoat during hand lay-up — for example our <a href="/products/gp-clear-resin/">GP Clear Resin</a> or <a href="/products/gp-gelcoat-resin/">GP Gelcoat Resin</a>, catalysed with <a href="/products/mekp-hardener/">MEKP Hardener</a> and <a href="/products/cobalt-octoate/">Cobalt Octoate</a>. They are an application tool, not a chemical component of the resin system itself — confirm the actual resin/gelcoat system separately.',
    features: [
      "Professional application tools suitable for resin, gelcoat and coating work",
      "Suitable for hand lay-up, FRP repair and composite fabrication processes",
      "Supplied in multiple brush sizes for different fabrication needs",
      "Manual application tool, not a chemical or resin product",
      "Useful for reaching mould corners, edges and detail work a roller can't cover",
    ],
    applications: [
      "Resin application during hand lay-up work",
      "Gelcoat application on FRP moulds and finished surfaces",
      "FRP repair and general composite fabrication",
    ],
    industries: [
      "FRP & composites manufacturing",
      "FRP repair and maintenance",
      "General fabrication workshops",
      "Marine and panel moulding",
    ],
    whyChoose: [
      "ISO 9001:2015 certificate of registration (GMSQR Certifications, first registered 2019)",
      "GST-registered Indian business (GSTIN 03ALBPS3446G1ZB)",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
      "Enquiry can begin with the intended application and expected quantity",
      "Part of Samrat Poly Resins' broader FRP and composite raw-material range",
    ],
    faqs: [
      {
        q: "What are Samrat Paint Brushes used for?",
        a: "They are professional application tools suitable for resin application, hand lay-up, gelcoat application, FRP repair and composite fabrication work.",
      },
      {
        q: "Are Paint Brushes a resin or chemical product?",
        a: "No. They are manual application tools, supplied separately from any resin, gelcoat or coating system.",
      },
      {
        q: "Do the brushes come in different sizes?",
        a: "Yes, multiple brush sizes are available to suit different fabrication and application requirements — share your intended use when requesting a quote.",
      },
      {
        q: "Can brushes used with catalysed resin be cleaned and reused?",
        a: "Many workshops treat brushes used with catalysed resin as effectively consumable, since cured resin is difficult to fully remove from bristles — plan for a working supply rather than expecting indefinite reuse.",
      },
      {
        q: "Can Paint Brushes be ordered in bulk for a workshop?",
        a: "Share your expected quantity and range of sizes when requesting a quote — bulk workshop supply is confirmed at that stage.",
      },
    ],
    relatedSlugs: ["gp-gelcoat-resin", "mekp-hardener", "cobalt-octoate"],
    resourceSlugs: [
      "selecting-brushes-for-resin-and-gelcoat-application",
      "selecting-brushes-for-resin-and-gelcoat-application",
      "selecting-brushes-for-resin-and-gelcoat-application",
      "selecting-brushes-for-resin-and-gelcoat-application",
      "selecting-brushes-for-resin-and-gelcoat-application",
      "selecting-brushes-for-resin-and-gelcoat-application",
    ],
    pdsUrl: "/pds/paint-brushes-pds.pdf",
  },
  {
    slug: "soap-stone-powder",
    name: "Soap Stone Powder",
    category: "FRP Allied Products",
    price: "",
    image: "soap-stone-powder.png",
    imageAlt:
      "Soap Stone Powder — soapstone / talc-type industrial mineral filler powder by Samrat Poly Resins",
    seo: {
      title: "Soap Stone Powder | Industrial Mineral Filler",
      description:
        "Industrial talc and soapstone powder used as filler and extender in resin compounds, putties and coatings. Bulk supply from Punjab.",
      keywords: [
        "Soap Stone Powder",
        "Soapstone Powder",
        "Talc Powder",
        "Mineral Filler",
        "Resin Filler Powder",
        "Industrial Mineral Powder",
      ],
    },
    productDetails: {
      "Product Type": "Soapstone (Talc-Type) Mineral Powder",
      "Function": "Mineral filler / extender",
      "Physical Form": "Fine powder",
      "Appearance": "White to off-white",
    },
    tagline: "Soapstone / talc-type mineral powder used as a filler / extender in suitable industrial formulations.",
    description:
      "Soap Stone Powder from Samrat Poly Resins is a soapstone / talc-type industrial mineral powder, used as a functional filler or extender in suitable resin compounds, putties, coatings, plastics or other industrial formulations depending on the specific requirement. It is not a resin, catalyst, accelerator or reinforcement fibre. Review the actual formulation and current product data before use.",
    usageNote:
      'Soap Stone Powder is typically blended into a base resin system as a functional filler or extender — for example in filled, mineral-loaded formulations such as our <a href="/products/marble-resin/">Marble Resin</a>, or into a putty/filler compound built on a resin such as our <a href="/products/gp-clear-resin/">GP Clear Resin</a>. It is not a resin or reinforcement material itself — confirm the base system and required filler loading separately.',
    features: [
      "Soapstone / talc-type industrial mineral powder",
      "Usable as a functional filler / extender across suitable formulations",
      "Fine powder form",
      "Supplied as a separate mineral filler, not a resin or reinforcement material",
      "Blends into resin compounds, putties, coatings and plastics depending on formulation",
    ],
    applications: [
      "Filler / extender in suitable resin compounds and putties",
      "Mineral filler for suitable coatings and industrial formulations",
      "General industrial filling applications where a talc-type powder is specified",
    ],
    industries: [
      "FRP & composites manufacturing",
      "Putty & filler compound manufacturing",
      "Paints, coatings & industrial formulations",
      "Plastics and general industrial manufacturing",
    ],
    whyChoose: [
      "ISO 9001:2015 certificate of registration (GMSQR Certifications, first registered 2019)",
      "GST-registered Indian business (GSTIN 03ALBPS3446G1ZB)",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
      "Enquiry can begin with the intended formulation and expected quantity",
      "Part of Samrat Poly Resins' broader FRP and composite raw-material range",
    ],
    faqs: [
      {
        q: "What is Soap Stone Powder used for?",
        a: "Soap Stone Powder is a soapstone / talc-type mineral powder used as a functional filler or extender in suitable resin compounds, putties, coatings, plastics or industrial formulations, depending on the specific formulation requirement.",
      },
      {
        q: "Is Soap Stone Powder a resin, catalyst or reinforcement material?",
        a: "No. It is a mineral filler powder only — a separate material from any resin, catalyst, accelerator or reinforcement fibre used in a formulation.",
      },
      {
        q: "What should I share when requesting a Soap Stone Powder quote?",
        a: "Please share the intended formulation or use, expected quantity and delivery location so the team can understand the requirement before preparing a quote.",
      },
      {
        q: "Does soapstone powder need to be kept dry before use?",
        a: "Yes — moisture can cause a fine powder to clump, making it harder to disperse evenly when used. Keep it sealed and stored in a dry area.",
      },
      {
        q: "Can Soap Stone Powder be supplied in bulk quantities?",
        a: "Share your expected quantity when requesting a quote — packaging and bulk-order options are confirmed at that stage.",
      },
    ],
    relatedSlugs: ["marble-resin", "gp-clear-resin"],
    resourceSlugs: [
      "what-is-soapstone-talc-powder",
      "what-is-soapstone-talc-powder",
      "what-is-soapstone-talc-powder",
      "what-is-soapstone-talc-powder",
      "what-is-soapstone-talc-powder",
      "what-is-soapstone-talc-powder",
      "what-is-soapstone-talc-powder",
      "what-is-soapstone-talc-powder",
      "what-is-soapstone-talc-powder",
    ],
    tdsUrl: "/tds/soap-stone-powder-tds.pdf",
  },
  {
    slug: "wax-polish",
    name: "Wax Polish",
    category: "FRP Allied Products",
    price: "",
    image: "wax-polish.png",
    imageAlt:
      "Wax Polish — FRP mould release / parting wax for composite moulding tooling by Samrat Poly Resins",
    seo: {
      title: "Wax Polish | FRP Mould Release & Parting Wax",
      description:
        "FRP mould release and parting wax for mould preparation, clean part release and polished tooling surfaces. Bulk supply from Punjab.",
      keywords: [
        "Wax Polish",
        "FRP Mould Release Wax",
        "Parting Wax",
        "Mould Release Wax",
        "FRP Tooling Wax",
        "Composite Mould Wax",
      ],
    },
    productDetails: {
      "Product Type": "FRP Mould Release / Parting Wax",
      "Function": "Mould preparation and part release for FRP / composite moulding",
      "Physical Form": "Paste / wax",
      "Application Method": "Apply and buff on a suitable mould surface",
    },
    tagline: "FRP mould release / parting wax for mould preparation and part release in composite moulding.",
    description:
      "Wax Polish from Samrat Poly Resins is positioned, in the FRP context, as a mould release / parting wax. It is used for mould preparation, creating a release barrier and supporting polished tooling/mould surfaces across composite/FRP moulding workflows. In this catalogue it is not presented as a furniture polish, shoe polish, automotive detailing wax, resin, catalyst or hardener — its role here is mould-side release and surface preparation. Review the actual mould substrate and process before use.",
    usageNote:
      'Wax Polish is used to prepare a mould before <a href="/products/gp-gelcoat-resin/">gelcoat</a> and resin are applied, typically as one of the first steps in an open-moulding sequence, often alongside <a href="/products/paint-brushes/">application brushes</a> during mould preparation and gelcoat application. It is a mould-release product, not a resin, catalyst or hardener.',
    features: [
      "FRP mould release / parting wax for composite moulding workflows",
      "Supports mould preparation and a clean release barrier",
      "Helps maintain a polished tooling / mould surface",
      "Applied and buffed on a suitable mould surface — not a resin, catalyst or hardener",
      "Positioned for repeated use across a production run, with routine mould-care reapplication",
    ],
    applications: [
      "Mould preparation before FRP hand lay-up or gelcoat moulding",
      "Part release for moulded FRP components and panels",
      "General composite/FRP tooling maintenance",
    ],
    industries: [
      "FRP & composites manufacturing",
      "FRP moulding & tooling",
      "Marine and general FRP component fabrication",
      "Panel and large-format composite moulding",
    ],
    whyChoose: [
      "ISO 9001:2015 certificate of registration (GMSQR Certifications, first registered 2019)",
      "GST-registered Indian business (GSTIN 03ALBPS3446G1ZB)",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
      "Enquiry can begin with the mould/tooling context and expected quantity",
      "Part of Samrat Poly Resins' broader FRP and composite raw-material range",
    ],
    faqs: [
      {
        q: "What is Wax Polish used for in this catalogue?",
        a: "In the FRP context, Wax Polish is positioned as a mould release / parting wax — used for mould preparation and part release across composite/FRP moulding workflows.",
      },
      {
        q: "Is this the same as furniture or automotive wax polish?",
        a: "No. In this catalogue, Wax Polish is presented specifically as an FRP mould release / parting wax for composite moulding tooling, not a furniture, shoe or automotive detailing product.",
      },
      {
        q: "What should I share when requesting a Wax Polish quote?",
        a: "Please share the mould/tooling context, intended FRP process, expected quantity and delivery location so the team can understand the requirement before preparing a quote.",
      },
      {
        q: "Does Wax Polish go on before or after gelcoat?",
        a: "Before — mould release preparation is one of the first steps in the moulding sequence, completed before gelcoat is applied to the mould.",
      },
      {
        q: "Can Wax Polish be supplied in bulk quantities?",
        a: "Share your expected quantity when requesting a quote — packaging and bulk-order options are confirmed at that stage.",
      },
    ],
    relatedSlugs: ["gp-gelcoat-resin", "paint-brushes"],
    resourceSlugs: [
      "what-is-frp-mould-release-wax",
      "what-is-frp-mould-release-wax",
      "what-is-frp-mould-release-wax",
      "what-is-frp-mould-release-wax",
      "what-is-frp-mould-release-wax",
      "what-is-frp-mould-release-wax",
      "what-is-frp-mould-release-wax",
      "what-is-frp-mould-release-wax",
      "what-is-frp-mould-release-wax",
      "what-is-frp-mould-release-wax",
    ],
    tdsUrl: "/tds/wax-polish-tds.pdf",
  },
  {
    slug: "uv-stabilized-sheet-grade-yellow-resin",
    name: "UV Stabilized Sheet Grade Yellow Resin",
    category: "Sheet Grade Resins",
    price: "",
    image: "uv-stabilized-sheet-grade-yellow-resin.jpg",
    images: [],
    imageAlt:
      "UV Stabilized Sheet Grade Yellow Resin — pre-pigmented yellow unsaturated polyester resin for outdoor FRP roofing, cladding and coloured sheet manufacturing by Samrat Poly Resins",
    seo: {
      title: "UV Stabilized Sheet Grade Yellow Resin Manufacturer in India",
      description:
        "Pre-pigmented yellow polyester resin with a UV-stabilised formulation, for outdoor FRP roofing, cladding and coloured sheet. Not a UV-curing resin.",
      keywords: [
        "UV Stabilized Sheet Grade Yellow Resin",
        "UV Stabilised Sheet Grade Resin",
        "UV Stabilized Polyester Resin",
        "Yellow FRP Sheet Resin",
        "Pre-Pigmented Polyester Resin",
        "FRP Roofing Sheet Resin Manufacturer",
      ],
    },
    productDetails: {
      "Product Role": "Pre-pigmented sheet-grade resin with a UV-stabilised formulation",
      Packaging: "225 kg industrial drum",
      "Colour / Appearance": "Yellow, factory master yellow shade (pre-pigmented liquid)",
      "Acceleration Status": "Non-accelerated",
      "Shelf Life": "2 months",
      "Storage Temperature": "15–25 °C, maximum recommended 25 °C",
      "Country of Origin": "India",
    },
    // Values from the final TDS SPR-TDS-USY Rev. 01 (September 2026).
    techSpecs: {
      "Resin Type": "Orthophthalic Unsaturated Polyester Resin",
      Form: "Pre-pigmented yellow liquid resin",
      "Curing System": "MEKP 1.5% with cobalt octoate 0.4% by weight of resin",
      "Viscosity": "280 cPs at 25 °C",
      "Gel Time": "6.5 minutes at 25 °C",
      "Specific Gravity": "1.10 g/cm³ at 25 °C",
      "Styrene Content": "35% by weight",
      "Stabiliser System": "Benzotriazole-type UV absorber with HALS (hindered amine light stabiliser)",
      "Cure Mechanism": "UV-stabilised; not UV-light-curing",
      "Weathering": "ISO 4892-2 xenon arc, 1,000 hours: ΔE 3–5, 80% gloss retention, 85% tensile strength retention",
      "Flash Point": "32 °C, closed cup",
    },
    tagline:
      "Pre-pigmented yellow polyester resin with a UV-stabilised formulation, for outdoor FRP sheet and panel work.",
    description:
      "UV Stabilized Sheet Grade Yellow Resin is a pre-pigmented unsaturated polyester resin manufactured by Samrat Poly Resins for FRP sheet and panel production where the finished part is exposed to sunlight. It is supplied as a yellow liquid with the pigment already dispersed at the factory, so colour does not have to be added on the shop floor, and it carries a UV-stabilised formulation intended to improve resistance to prolonged outdoor exposure and weathering. It is a distinct grade from the standard Sheet Grade Yellow Resin, which is supplied for general sheet and panel manufacturing without a UV-stabiliser package.",
    usageNote:
      'This grade is positioned for outdoor-exposed coloured sheet work. Where the finished sheet is translucent and optical clarity matters rather than colour, review <a href="/products/roof-light-resin/">Roof Light Sheet Grade Resin</a> instead; for general interior sheet and panel manufacturing, see <a href="/products/sheet-grade-yellow-resin/">Sheet Grade Yellow Resin</a>. Confirm the intended sheet product, exposure condition and processing route with us before selecting a grade.',
    features: [
      "Pre-pigmented yellow resin — colour dispersed at the factory rather than added at the laminating stage",
      "UV-stabilised formulation intended for prolonged outdoor exposure",
      "Formulated for FRP sheet moulding and lamination processes",
      "Supplied in 225 kg industrial drums",
      "Manufactured by Samrat Poly Resins at Doraha, Punjab",
    ],
    applications: [
      // RECOMMENDED APPLICATIONS of SPR-TDS-USY Rev. 01, as printed.
      "FRP sheet and panel production for outdoor service",
      "Coloured roofing and cladding sheet",
      "Sheet moulding and lamination",
      "Exterior-exposed coloured FRP components",
    ],
    industries: [
      "FRP sheet & panel manufacturing",
      "Roofing & cladding manufacturing",
      "General industrial moulding",
    ],
    whyChoose: [
      "ISO 9001:2015 certificate of registration (GMSQR Certifications, first registered 2019)",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
      "Enquiry can begin with the intended sheet product, exposure condition and expected quantity",
    ],
    faqs: [
      {
        q: "What is UV Stabilized Sheet Grade Yellow Resin?",
        a: "It is a pre-pigmented yellow unsaturated polyester resin manufactured by Samrat Poly Resins for FRP sheet and panel production, supplied with a UV-stabilised formulation intended for parts exposed to sunlight.",
      },
      {
        q: "How is this different from Sheet Grade Yellow Resin?",
        a: 'The difference is the UV-stabilised formulation. <a href="/products/sheet-grade-yellow-resin/">Sheet Grade Yellow Resin</a> is the standard pre-pigmented yellow grade for general FRP sheet and panel manufacturing; this grade is positioned for sheet that will be exposed to prolonged outdoor UV. Share the intended application and exposure condition and we will confirm which grade fits.',
      },
      {
        q: "Is this the same as Roof Light Sheet Grade Resin?",
        a: 'No. <a href="/products/roof-light-resin/">Roof Light Sheet Grade Resin</a> is a water-white grade for translucent roof light and skylight panels where light transmission matters. This grade is pre-pigmented yellow and is intended for opaque coloured sheet and cladding work.',
      },
      {
        q: "Does UV stabilisation mean the resin cures under UV light?",
        a: "No — those are opposite things. UV stabilisation means the cured part is formulated to resist degradation from sunlight. This resin cures with an MEKP catalyst and a cobalt octoate accelerator at room temperature, in the normal way for an unsaturated polyester resin.",
      },
      {
        q: "Is a technical data sheet available?",
        a: "Yes. The Technical Data Sheet for this grade (SPR-TDS-USY) can be downloaded from this page and from the technical document library.",
      },
      {
        q: "What packaging and quantities are available?",
        a: "It is supplied in 225 kg industrial drums. Share your expected quantity and delivery location with your enquiry and we will confirm availability and pricing.",
      },
    ],
    relatedSlugs: [
      "sheet-grade-yellow-resin",
      "roof-light-resin",
      "gp-yellow-resin",
      "frp-polyester-pigment",
    ],
    tdsUrl: "/tds/uv-stabilized-sheet-grade-yellow-resin-tds.pdf",
  },
  {
    slug: "iso-polyester-resin",
    name: "ISO Polyester Resin",
    category: "ISO Resins",
    price: "",
    image: "iso-polyester-resin.jpg",
    images: [],
    imageAlt:
      "ISO Polyester Resin — isophthalic unsaturated polyester resin for chemical-resistant and water-resistant FRP applications by Samrat Poly Resins",
    seo: {
      title: "ISO Polyester Resin Manufacturer in India",
      description:
        "Isophthalic unsaturated polyester resin for FRP facing water, chemicals or years outdoors. ISO means isophthalic chemistry, not certification.",
      keywords: [
        "ISO Polyester Resin",
        "Isophthalic Polyester Resin",
        "Isophthalic Resin Manufacturer India",
        "ISO Resin Manufacturer",
        "Chemical Resistant Polyester Resin",
        "Isophthalic UPR",
      ],
    },
    productDetails: {
      "Product Role": "Isophthalic unsaturated polyester resin",
      "Colour / Appearance": "Off-white to light beige liquid",
      "Acceleration Status": "Non-accelerated",
      Packaging: "225 kg industrial drum",
      "Shelf Life": "3 months",
      "Storage Temperature": "15–25 °C",
      "Country of Origin": "India",
    },
    // Values from the final TDS SPR-TDS-IPR Rev. 01 (September 2026): typical
    // values, not guaranteed limits.
    techSpecs: {
      "Resin Type": "Isophthalic Unsaturated Polyester Resin",
      "Curing System": "MEKP catalyst with cobalt octoate accelerator",
      "Recommended Dosage": "MEKP 1.5% and cobalt octoate 0.4% by weight of resin",
      "Viscosity": "500 cPs (mPa·s) at 25 °C",
      "Gel Time": "15 minutes at 25 °C",
      "Peak Exotherm": "190 °C, reached in 25 minutes",
      "Specific Gravity": "1.12 g/cm³ at 25 °C",
      "Styrene Content": "40% by weight",
      "Acid Value": "16 mg KOH/g",
      "Heat Deflection Temperature": "90 °C (cured resin)",
      "Tensile Strength / Modulus": "75 MPa / 3,500 MPa (cured resin)",
      "Elongation at Break": "3.0% (cured resin)",
      "Flexural Strength / Modulus": "125 MPa / 3,700 MPa (cured resin)",
      "Barcol Hardness": "42",
      "Water Absorption": "0.15% by weight after 24 h",
      "Flash Point": "34 °C, closed cup",
    },
    tagline:
      "Isophthalic unsaturated polyester resin for laminates facing water immersion, chemical service or sustained outdoor conditions.",
    description:
      "ISO Polyester Resin is an isophthalic unsaturated polyester resin manufactured by Samrat Poly Resins. Isophthalic resins are built on isophthalic acid rather than the phthalic anhydride used in general-purpose orthophthalic grades. In general industry terms that difference allows a higher-molecular-weight polyester chain, which is why isophthalic resins are normally specified where a laminate faces water immersion, chemical service or sustained outdoor conditions rather than routine dry FRP work. Samrat Poly Resins supplies this grade for those more demanding FRP applications.",
    usageNote:
      'Where the requirement is routine general-purpose FRP lamination rather than chemical or water service, our orthophthalic grades such as <a href="/products/gp-clear-resin/">GP Clear Resin</a> and <a href="/products/unsaturated-polyester-resin/">Unsaturated Polyester Resin</a> are the usual route. Where the service medium is aggressive and a stated chemical-resistance requirement applies, review <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> as well. Share the FRP component, service medium and operating condition with your enquiry so the right grade can be confirmed.',
    features: [
      "Isophthalic backbone rather than the orthophthalic chemistry used in general-purpose grades",
      "Positioned for chemical, water and hydrolysis resistance in FRP service",
      "Room-temperature cure with MEKP catalyst and cobalt octoate accelerator",
      "Supplied in 225 kg industrial drums",
      "Manufactured by Samrat Poly Resins at Doraha, Punjab",
    ],
    applications: [
      // RECOMMENDED APPLICATIONS of SPR-TDS-IPR Rev. 01, as printed.
      "Laminates facing water immersion or sustained damp service",
      "Chemical service FRP where a resistance requirement applies",
      "Components in sustained outdoor conditions",
      "Tanks, linings and corrosion-resistant FRP",
    ],
    industries: [
      "Chemical process & storage",
      "Marine & boat building",
      "Water & effluent treatment",
      "FRP & composites manufacturing",
    ],
    whyChoose: [
      "ISO 9001:2015 certificate of registration (GMSQR Certifications, first registered 2019)",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
      "Enquiry can begin with the FRP component, service medium and expected quantity",
    ],
    faqs: [
      {
        q: "What is ISO Polyester Resin?",
        a: "It is an isophthalic unsaturated polyester resin — a resin built on isophthalic acid rather than the phthalic anhydride used in general-purpose orthophthalic grades. Samrat Poly Resins supplies it for FRP work that needs better chemical and water resistance than a standard GP resin.",
      },
      {
        q: "Does ISO here mean ISO 9001 certification?",
        a: "No. In resin naming, ISO is short for isophthalic and describes the chemistry of the resin. It is unrelated to ISO 9001:2015, the quality-management standard named on Samrat Poly Resins' certificate of registration. The two terms mean different things.",
      },
      {
        q: "How is isophthalic resin different from orthophthalic resin?",
        a: "The difference is the diacid used to build the polyester chain — isophthalic acid instead of phthalic anhydride. General industry literature attributes better hydrolytic stability, chemical resistance and heat distortion performance to isophthalic resins, which is why they are normally specified for immersion and chemical service. Confirm the requirement for your component with us before selecting.",
      },
      {
        q: "How does this compare with Vinyl Ester Resin?",
        a: 'Vinyl ester is a further step for aggressive chemical service. <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> is Samrat\'s documented bisphenol-A epoxy vinyl ester grade. Share the service medium, concentration and temperature and we will advise which route fits the duty.',
      },
      {
        q: "Is this the same as ISO Fire Retardant Resin?",
        a: 'No. <a href="/products/iso-fire-retardant-resin/">ISO Fire Retardant Resin</a> is an isophthalic grade formulated for fire performance. This grade is the general isophthalic resin without that fire-retardant package.',
      },
      {
        q: "Is a technical data sheet available?",
        a: "Yes. The Technical Data Sheet for this grade (SPR-TDS-IPR) can be downloaded from this page and from the technical document library.",
      },
    ],
    relatedSlugs: [
      "vinyl-ester-resin",
      "iso-fire-retardant-resin",
      "unsaturated-polyester-resin",
      "gp-clear-resin",
    ],
    tdsUrl: "/tds/iso-polyester-resin-tds.pdf",
  },
  {
    slug: "iso-gelcoat",
    name: "ISO Gelcoat",
    category: "GelCoat Resin",
    price: "",
    // The supplied poster shows swimming pools and water slides among its
    // applications and carries a "TRUSTED BY FRP MANUFACTURERS" endorsement
    // with nothing behind it. Enlarging it would publish an immersion claim
    // that contradicts our own guidance, so the page renders a code-native
    // identity panel instead. The file is untouched on disk.
    // The supplied poster (iso-gelcoat.jpg, kept intact) carries two claims the
    // owner-supplied data sheet SPR-TDS-IGC Rev. 01 does not support: a
    // "swimming pools & water slides" panel, which would imply continuous
    // immersion, and a "TRUSTED BY FRP MANUFACTURERS" endorsement with no named
    // reference. iso-gelcoat-display.jpg is a top crop of that same file: it
    // keeps the product visual, the identity block and the supported icon row,
    // and ends before the unsupported panels. Both the repo original and the
    // Downloads original are untouched.
    image: "iso-gelcoat-display.jpg",
    images: [],
    imageAlt: "ISO Gelcoat — isophthalic polyester gelcoat applied to the mould face of an FRP moulding, by Samrat Poly Resins",
    seo: {
      title: "ISO Gelcoat Manufacturer in India | Isophthalic Gelcoat",
      description:
        "Isophthalic polyester gelcoat for FRP surfaces that must hold gloss and colour through weathering and water contact. Brush or spray.",
      keywords: [
        "ISO Gelcoat",
        "Isophthalic Gelcoat",
        "ISO Gelcoat Manufacturer India",
        "Marine Gelcoat",
        "Weather Resistant Gelcoat",
        "FRP Surface Gelcoat",
      ],
    },
    productDetails: {
      "Product Role": "Isophthalic surface-coating gelcoat for FRP mouldings",
      "Colour / Appearance": "Creamy off-white to pale ivory thixotropic gelcoat",
      "Supplied Form": "Pigmented / pigmentable thixotropic liquid",
      Application: "Brush or spray onto the mould face",
      "Acceleration Status": "Pre-accelerated",
      "Shelf Life": "3 months",
      "Storage Temperature": "15–25 °C, maximum 25 °C",
      "Country of Origin": "India",
    },
    // Values from the final TDS SPR-TDS-IGC Rev. 01 (September 2026). The
    // earlier sheet published no measured properties; this one does. The
    // thixotropic index is shown as printed (26); 40,000 / 1,500 calculates to
    // 26.7, recorded in source-documents/document-control-proposals.md.
    techSpecs: {
      "Resin Type": "Isophthalic Polyester Gelcoat (isophthalic unsaturated polyester backbone)",
      "Curing System": "MEKP at 2.0% by weight of gelcoat",
      Process: "Hand lay-up and spray-up FRP moulding",
      "Viscosity — low shear": "40,000 cPs at 25 °C",
      "Viscosity — high shear": "1,500 cPs at 25 °C",
      "Thixotropic Index": "26 (as printed)",
      "Gel Time": "8 minutes at 25 °C",
      "Specific Gravity": "1.15 g/cm³ at 25 °C",
      "Styrene Content": "32% by weight",
      "Wet Film Thickness": "700 µm target; 600–800 µm recommended range, one complete coat",
      "Application Temperature": "15–25 °C",
      "Back-up / Laminating Time": "30–45 minutes",
      "Barcol Hardness": "42 (cured)",
      "Gloss": "90 GU at 60°",
      "Water Resistance / Absorption": "Good to very good; approximately 18 mg after 24 h at 23 °C",
      "Weathering": "ISO 4892-2 xenon arc, 1,000 hours: ΔE 3–5, 80% gloss retention",
      "Flash Point": "32 °C, closed cup",
    },
    tagline:
      "Isophthalic polyester gelcoat, the grade normally specified where an FRP surface has to hold gloss and colour through weathering and water contact.",
    description:
      "ISO Gelcoat is an isophthalic polyester gelcoat manufactured by Samrat Poly Resins. A gelcoat is the outermost layer of an FRP moulding, applied to the mould face before any reinforcement goes in, and it gives the finished part its visible surface and its first line of protection. Isophthalic gelcoats are the grade normally specified in industry where that surface has to hold gloss and colour through weathering, water contact or outdoor service — marine, sanitaryware and transport work being the common examples. It is a separate grade from the general-purpose GP Gelcoat Resin.",
    usageNote:
      'For standard-duty FRP mould work where the part is not in sustained water contact or outdoor service, <a href="/products/gp-gelcoat-resin/">GP Gelcoat Resin</a> is the general-purpose route. A gelcoat is a surface coating and not a laminating resin — the structural laminate behind it is built with a separate resin such as <a href="/products/gp-clear-resin/">GP Clear Resin</a> or, for chemical and water service, <a href="/products/iso-polyester-resin/">ISO Polyester Resin</a>. Share the finished part, its service condition and the required finish with your enquiry.',
    features: [
      "Isophthalic gelcoat chemistry rather than a general-purpose polyester gelcoat",
      "Specified where the visible surface has to hold gloss and colour through weathering, water contact or outdoor service",
      "Applied to the mould face before any reinforcement, so it becomes the visible outer surface of the moulding",
      "Brush or spray application, as published on the grade’s data sheet",
      "Pre-accelerated, catalysed with MEKP at 2.0%",
      "Manufactured by Samrat Poly Resins at Doraha, Punjab",
    ],
    applications: [
      // Taken from the RECOMMENDED APPLICATIONS block of the owner-supplied
      // data sheet SPR-TDS-IGC Rev. 01. Swimming pools and water slides are
      // deliberately absent: the sheet does not list them, and continuous
      // immersion suitability is not inferred from it.
      "Mould-face surface coat for FRP mouldings",
      "Marine components",
      "Sanitaryware and transport panel moulding",
      "Exterior panel moulding",
      "Parts whose surface must hold gloss and colour in service",
    ],
    industries: [
      "Marine & boat building",
      "Sanitaryware & bathware manufacturing",
      "Automotive & transport",
      "FRP & composites manufacturing",
    ],
    whyChoose: [
      "ISO 9001:2015 certificate of registration (GMSQR Certifications, first registered 2019)",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
      "Enquiry can begin with the finished part, service condition and required finish",
    ],
    faqs: [
      {
        q: "What is ISO Gelcoat?",
        a: "It is an isophthalic polyester gelcoat — the surface layer applied to an FRP mould before the laminate is built up. Samrat Poly Resins supplies it for parts whose surface has to hold gloss and colour under weathering or water contact.",
      },
      {
        q: "How is ISO Gelcoat different from GP Gelcoat Resin?",
        a: 'The chemistry differs. <a href="/products/gp-gelcoat-resin/">GP Gelcoat Resin</a> is Samrat\'s general-purpose surface-coating gelcoat for standard-duty work. ISO Gelcoat uses isophthalic chemistry, which industry literature associates with better gloss retention, weather resistance and water and hydrolysis resistance. Share the finished part and its service condition and we will confirm which grade fits.',
      },
      {
        q: "Does ISO here refer to ISO 9001 certification?",
        a: "No. ISO in a gelcoat name is short for isophthalic and describes the chemistry. Samrat Poly Resins separately holds an ISO 9001:2015 certificate of registration for its quality management system; the two are unrelated terms that share an abbreviation.",
      },
      {
        q: "Can ISO Gelcoat be used as a laminating resin?",
        a: "No. A gelcoat is a surface coating applied to the mould face, not a resin for wetting out glass-fibre reinforcement. The laminate behind it is built with a separate laminating resin.",
      },
      {
        q: "How is it applied?",
        a: "It is brushed or sprayed directly onto the prepared mould face before any reinforcement is laid up, and it cures with an MEKP catalyst at room temperature.",
      },
      {
        q: "Is a technical data sheet available?",
        a: "Yes. The Technical Data Sheet for this grade (SPR-TDS-IGC) can be downloaded from this page and from the technical document library.",
      },
    ],
    relatedSlugs: [
      "gp-gelcoat-resin",
      "iso-polyester-resin",
      "gp-clear-resin",
      "vinyl-ester-resin",
    ],
    applicationSlugs: ["gelcoat-for-boat-marine-hull-finishing", "gelcoat-for-automotive-body-panels", "gelcoat-for-frp-bathware-sanitaryware"],
    tdsUrl: "/tds/iso-gelcoat-tds.pdf",
  },
];

// ---------------------------------------------------------------------------
//  CARD SPECS — the two published values shown on a product card
// ---------------------------------------------------------------------------
//  Why this exists: 31 product cards were previously distinguished only by a
//  marketing poster image and a one-line tagline. At card size the posters are
//  visually near-identical (light artwork, dense micro-text), so a buyer
//  scanning the catalogue could not tell one grade from another. The values
//  that actually separate grades — how thick it is and how long you have to
//  work with it — were already in `techSpecs` but appeared nowhere until the
//  product page.
//
//  SOURCING RULE: this only ever reads `techSpecs`, which is transcribed from
//  each grade's published TDS. It never computes, averages, rounds or infers a
//  value, and it never substitutes a value from a related grade. A product
//  with no published spec renders no spec row - not a placeholder, not a dash.
//
//  Key names in `techSpecs` are inconsistently cased across grades ("Gel Time"
//  vs "Gel time", "Specific Gravity / Density" vs "Specific gravity /
//  density") because each was transcribed to match its own TDS. Matching is
//  therefore case- and punctuation-insensitive rather than exact.

const CARD_SPEC_PRIORITY = [
  ['Viscosity', ['viscosity']],
  ['Gel Time', ['geltime', 'gelpotlifedata', 'potlife']],
  ['Cure Time', ['curetime', 'curingtime', 'initialcuretime']],
  ['Resin Type', ['resintype', 'resinchemistry', 'resinfamily', 'baseresin']],
  ['Purity', ['purity', 'activeoxygencontent', 'solidcontent']],
  ['Form', ['form', 'componenttype', 'grade', 'gradestandard']],
];

const normaliseSpecKey = (key) => key.toLowerCase().replace(/[^a-z]/g, '');

// Long TDS prose ("Bisphenol A & epichlorohydrin based (thermosetting) -
// current TDS wording") is useful on the product page and useless in a 140px
// card cell. Values longer than this are skipped rather than truncated, so a
// card never shows a half-sentence that changes the meaning of the spec.
const CARD_SPEC_MAX_LENGTH = 34;

export function getCardSpecs(product, limit = 2) {
  const specs = product.techSpecs;
  if (!specs) return [];

  const entries = Object.entries(specs);
  const byNormalised = entries.map(([key, value]) => [normaliseSpecKey(key), key, value]);
  const picked = [];
  const usedKeys = new Set();

  for (const [label, aliases] of CARD_SPEC_PRIORITY) {
    if (picked.length >= limit) break;
    const hit = byNormalised.find(([norm, key, value]) =>
      !usedKeys.has(key) &&
      typeof value === 'string' &&
      value.trim() &&
      value.trim().length <= CARD_SPEC_MAX_LENGTH &&
      aliases.some((alias) => norm.startsWith(alias)));
    if (hit) {
      usedKeys.add(hit[1]);
      picked.push({ label, value: hit[2].trim() });
    }
  }

  return picked;
}
