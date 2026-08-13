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
  "Sheet Grade Resins",
  "GelCoat Resin",
  "Fire Retardant Resins",
  "FRP Allied Products",
  "Epoxy & Casting",
  "Industrial & Specialty Resins",
  "Hardeners",
];

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
      "Purity": "99%",
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
      "ISO 9001:2015 certified quality management system",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Consistent 99% purity and factory-controlled pigmentation",
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
        a: "Viscosity is approximately 280 cPs and styrene content is 35%, with 99% purity.",
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
      title: "Unsaturated Polyester Resin (UPR) – Orthophthalic Polyester Resin",
      description:
        "Unsaturated Polyester Resin (UPR) — a general-purpose orthophthalic polyester resin for FRP and composite manufacturing. Gel time under 8 minutes. 225 kg drums.",
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
      "Specific Gravity / Density": "1.20 g/cm³",
      "Cure Time": "45 minutes – 1.5 hours",
      "MEKP Dosage": "1.5%",
      "Cobalt Octoate Dosage": "0.4%",
      "Purity": "99%",
    },
    tagline: "The versatile, general-purpose workhorse resin for FRP.",
    description:
      "Unsaturated Polyester Resin (UPR) is a thermosetting resin widely used across the fibreglass-reinforced plastic (FRP) industry for its versatility and reliable mechanical properties. It crosslinks with styrene monomer through free-radical polymerisation, catalysed with MEKP, hardening into a rigid, durable composite. Polyester resins are broadly grouped into orthophthalic, isophthalic and vinyl ester families, differing in chemical resistance and cost. Samrat Poly Resins supplies its standard UPR grade as a general-purpose orthophthalic resin — a clear liquid with 350–450 cPs viscosity, a gel time under 8 minutes and 99% purity — suited to hand layup, spray-up, moulding and everyday FRP work.",
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
      "ISO 9001:2015 certified quality management system",
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
        a: "Styrene content is 33–40%, purity is 99%, and specific gravity is 1.20 g/cm³.",
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
      "Specific Gravity / Density": "1.20–1.60 g/cm³",
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
      "ISO 9001:2015 certified quality management system",
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
        a: "Viscosity is approximately 400 cPs, styrene content is 35%, and specific gravity ranges from 1.20 to 1.60 g/cm³. Purity is 100%.",
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
      title: "GP Clear Resin – General Purpose Polyester Resin",
      description:
        "GP Clear Resin — a clear, orthophthalic general-purpose polyester resin for FRP hand layup, spray-up and moulding. Gel time under 8 minutes. 225 kg drums.",
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
      "Specific Gravity / Density": "1.20 g/cm³",
      "Cure Time": "45 minutes – 1.5 hours",
      "MEKP Dosage": "1.5%",
      "Cobalt Octoate Dosage": "0.4%",
      "Purity": "99%",
    },
    tagline: "Clear, general-purpose orthophthalic polyester resin.",
    description:
      "GP Clear Resin is a clear, orthophthalic unsaturated polyester resin developed by Samrat Poly Resins for everyday FRP and composite manufacturing. Supplied as a non-accelerated liquid with a viscosity of 350–450 cPs and a gel time under 8 minutes, it wets out reinforcement quickly and cures at room temperature once catalysed with MEKP and a cobalt octoate accelerator. With a balanced 33–40% styrene content, 1.20 g/cm³ density and 99% purity, it delivers consistent, cost-effective performance across hand layup, spray-up, moulding and lamination — a dependable general-purpose polyester resin for a wide range of composite products.",
    usageNote:
      'In practice, GP Clear Resin is catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and a cobalt accelerator, then reinforced with <a href="/products/fibre-glass-mat/">glass fibre</a> for hand layup and spray-up. Pair it with a <a href="/products/gp-gelcoat-resin/">gelcoat resin</a> for a durable moulded surface, step up to <a href="/products/vinyl-ester-resin/">vinyl ester resin</a> where higher chemical and corrosion resistance is required, or see <a href="/products/lamination-resin/">lamination resin</a> for door-lamination and FRP bonding work.',
    features: [
      "Clear orthophthalic unsaturated polyester base for general-purpose FRP work",
      "Low viscosity (350–450 cPs) for excellent wet-out and easy impregnation",
      "Fast gel time under 8 minutes for quicker layup cycles",
      "Non-accelerated system — dose MEKP and cobalt accelerator to suit workshop conditions",
      "Balanced 33–40% styrene content and 1.20 g/cm³ density",
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
      "ISO 9001:2015 certified quality management system",
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
        a: "Viscosity is 350–450 cPs, styrene content is 33–40%, and specific gravity is 1.20 g/cm³. Purity is 99%.",
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
    sdsUrl: "/sds/gp-white-resin-sds.pdf",
    seo: {
      title: "GP White Resin Manufacturer in India | Water-White Polyester Resin",
      description:
        "GP White Resin manufacturer in India for water-white general-purpose FRP moulding, panels, water tanks, cooling towers and fabrication. Published TDS and 225 kg drum packaging.",
      keywords: [
        "GP White Resin",
        "Water White Polyester Resin",
        "White Polyester Resin",
        "White GP Resin",
        "General Purpose Polyester Resin",
        "FRP Resin",
        "White Resin Manufacturer",
        "White Resin Supplier",
        "Polyester Moulding Resin",
      ],
    },
    // Reorganised from the original single `specs` table into the sitewide
    // productDetails/techSpecs pattern — every value below is unchanged from
    // that original table, just regrouped. "Usage / Application" is not
    // repeated here since it's already covered in full by the applications
    // list below (same source data, no information lost). No new values
    // invented; pending a finalized TDS for anything beyond this.
    productDetails: {
      "Minimum Order Quantity": "1000 kg",
      "Packaging": "225 kg Drum",
      "Physical Form": "Liquid",
      "Colour / Appearance": "Water White",
    },
    techSpecs: {
      "Resin Type": "Orthophthalic",
      "Curing System": "Non-accelerated",
      "Viscosity": "<350 cPs",
      "Gel Time": "6 min",
      "Thixotropy": "Medium Thixotropic",
      "Styrene Content": "30–35%",
    },
    tagline: "Water-white general-purpose resin for FRP moulding.",
    description:
      "GP White Resin is Samrat Poly Resins' water-white, general-purpose orthophthalic unsaturated polyester resin for FRP panels, general moulding, hand layup, spray-up, cooling towers and water storage tanks. The published grade is a medium-thixotropic liquid with viscosity below 350 cPs and a 6-minute gel time. Its non-accelerated system is used with MEKP catalyst and cobalt octoate accelerator at room temperature. For buyers searching for white polyester resin, the relevant question is whether this water-white supplied appearance, general-purpose laminate role and published process data match the intended FRP component; it is not a substitute for a mould-surface gelcoat or a statement about the final colour of every reinforced part.",
    usageNote:
      'GP White Resin is catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and reinforced with <a href="/products/fibre-glass-mat/">glass fibre</a> for hand layup and spray-up. Where a fully clear (rather than water-white) grade is preferred, see our <a href="/products/gp-clear-resin/">GP Clear Resin</a>; mould-facing surfaces can be finished with a <a href="/products/gp-gelcoat-resin/">Gelcoat Resin</a>, and projects needing higher chemical resistance can step up to <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a>.',
    features: [
      "Water-white colour, low viscosity (<350 cPs)",
      "Medium-thixotropic body resists sagging on angled surfaces",
      "Fast 6-minute gel time for efficient production cycles",
      "Non-accelerated system — dose MEKP and cobalt accelerator to suit workshop conditions",
      "30–35% styrene content for consistent processing",
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
      "ISO 9001:2015 certified quality management system",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Water-white colour with a medium-thixotropic, sag-resistant body",
      "Supplied in bulk 225 kg drums, minimum order 1,000 kg",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is GP White Resin?",
        a: "GP White Resin is a water-white, general-purpose orthophthalic unsaturated polyester resin used for FRP moulding, panels, hand layup and spray-up work. It is supplied by Samrat Poly Resins as a non-accelerated liquid in 225 kg drums.",
      },
      {
        q: "What is the difference between GP White Resin and GP Clear Resin?",
        a: 'Both are general-purpose orthophthalic polyester resins, but GP White Resin is a water-white, medium-thixotropic grade that resists sagging on angled mould surfaces, while our <a href="/products/gp-clear-resin/">GP Clear Resin</a> is a lower-viscosity clear grade. Choose based on the colour and flow behaviour your project needs.',
      },
      {
        q: "Is GP White Resin thixotropic?",
        a: "Yes. It has a medium thixotropic body, which helps it resist sagging or running when applied to angled or vertical mould surfaces, rather than pooling before it gels.",
      },
      {
        q: "What is the gel time and viscosity of GP White Resin?",
        a: "Gel time is approximately 6 minutes, and viscosity is below 350 cPs, giving good reinforcement wet-out with a fast production cycle.",
      },
      {
        q: "What is the styrene content of GP White Resin?",
        a: "Styrene content is 30–35%.",
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
        a: "This published general-purpose grade is used for FRP panels, general moulding, hand layup, spray-up, cooling towers, water storage tanks and general industrial FRP fabrication. Review the product TDS and actual component requirement before selection.",
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
    tdsUrl: "/tds/gp-quartz-resin-tds.pdf",
    sdsUrl: "/sds/gp-quartz-resin-sds.pdf",
    seo: {
      title: "GP Quartz Resin Manufacturer in India | Engineered Stone Resin",
      description:
        "GP Quartz Resin for artificial quartz stone, engineered stone slabs and composite mineral surfaces. Orthophthalic polyester resin with published TDS, 400–800 cPs viscosity and 7–10 minute gel time.",
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
      "ISO 9001:2015 certified quality management system",
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
        a: 'Review <a href="/products/marble-resin/">Marble Resin</a> for its published cultured-marble and artificial-stone role, <a href="/products/gp-clear-resin/">GP Clear Resin</a> or <a href="/products/unsaturated-polyester-resin/">Unsaturated Polyester Resin</a> for broad general FRP selection, <a href="/products/gp-white-resin/">GP White Resin</a> where its water-white general-purpose FRP role is relevant, <a href="/products/lamination-resin/">Lamination Resin</a> for published lamination applications, and <a href="/products/gp-gelcoat-resin/">GP Gelcoat Resin</a> for a mould-surface role. Review the relevant product data before selecting a system.',
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
      "Cobalt Octoate Dosage": "0.4%",
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
      "ISO 9001:2015 certified quality management system",
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
        a: "It offers standard-duty resistance suitable for general FRP mould work. For moulds facing harsher chemical exposure or continuous water immersion — such as chemical tank exteriors or hulls kept permanently in water — a Vinyl Ester Resin system offers meaningfully better resistance and is the more suitable choice.",
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
        a: "Gel time is 8.5 minutes. Full cure at room temperature, once catalysed with MEKP (around 1.5%) and a cobalt octoate accelerator (around 0.4%), typically takes 1.5 to 2 hours.",
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
      "ISO 9001:2015 certified quality management system",
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
        a: 'The current <a href="/tds/fire-retardant-resin-tds.pdf" target="_blank" rel="noopener">Fire Retardant Resin TDS</a> and the <a href="/downloads/samrat-poly-resins-product-catalogue.pdf" target="_blank" rel="noopener">product catalogue</a> are available. The repository does not include an SDS, COA, fire test report or certification document for this grade.',
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
  },
  {
    slug: "iso-fire-retardant-resin",
    name: "ISO Fire Retardant Resin",
    category: "Fire Retardant Resins",
    price: "₹175 / kg",
    image: "iso-fire-retardant-resin.jpg",
    images: ["iso-fire-retardant-resin-2.jpg"],
    tdsUrl: "/tds/iso-fire-retardant-resin-tds.pdf",
    sdsUrl: "/sds/iso-fire-retardant-resin-sds.pdf",
    seo: {
      title: "Isophthalic Fire Retardant Resin Manufacturer in India | ISO FR Resin",
      description:
        "ISO Fire Retardant Resin is Samrat Poly Resins' published halogen-free, ATH-filled isophthalic FR polyester resin. Here, ISO refers to isophthalic chemistry—not ISO certification. Review the current TDS and project requirement before selection.",
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
      "Purity": "≥99%",
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
        a: 'The current <a href="/tds/iso-fire-retardant-resin-tds.pdf" target="_blank" rel="noopener">ISO Fire Retardant Resin TDS</a> and <a href="/downloads/samrat-poly-resins-product-catalogue.pdf" target="_blank" rel="noopener">product catalogue</a> are linked. The repository does not include an SDS, COA, fire-test report, chemical-resistance chart or certification document for this grade.',
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
      "Packaging Size": "10 kg",
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
      "FRP Polyester Pigment is Samrat Poly Resins' colour paste for FRP products made with unsaturated polyester, vinyl ester and gelcoat systems. It is not a structural resin, glass-fibre reinforcement or a gelcoat in its own right; it is the colour component blended into the separately selected resin or gelcoat. At the published 2–5% recommended dosage before catalysing, its high tinting strength (≥95%) provides colour at a controlled addition level. The TDS lists heat resistance up to 180°C and 7–8 Blue Wool Scale light fastness for the pigment itself; finished-part weathering still depends on the surrounding resin or gelcoat system. Supplied as a paste in 10 kg bottles with a 100 kg minimum order quantity, it is available in standard and custom colours, including RAL and Pantone matches.",
    usageNote:
      'FRP Polyester Pigment is stirred thoroughly into <a href="/products/gp-clear-resin/">GP Clear Resin</a>, <a href="/products/gp-yellow-resin/">GP Yellow Resin</a> or a <a href="/products/gp-gelcoat-resin/">Gelcoat Resin</a> before catalysing with an <a href="/products/mekp-hardener/">MEKP hardener</a> — mixing pigment in after catalysing risks uneven colour as working time runs out. It is also compatible with <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> binder systems. For a pre-pigmented, factory-coloured sheet resin instead of adding pigment yourself, see our <a href="/products/sheet-grade-yellow-resin/">Sheet Grade Yellow Resin</a>.',
    features: [
      "Blends seamlessly with unsaturated polyester, vinyl ester and gelcoat systems",
      "High tinting strength (≥95%) delivers full colour at a low 2–5% dosage",
      "Withstands exothermic curing heat, rated up to 180°C",
      "7–8 Blue Wool Scale light-fastness for the pigment's own colour retention",
      "Available in RAL and Pantone custom matches",
      "Supplied in 10 kg bottles, minimum order 100 kg",
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
      "ISO 9001:2015 certified quality management system",
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
        a: "It is supplied in 10 kg bottles, with a minimum order quantity of 100 kg.",
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
      'Glass Fiber supplies the reinforcement role; the resin is selected separately for the required FRP component and product role. Review <a href="/products/gp-clear-resin/">GP Clear Resin</a> or the parent <a href="/products/unsaturated-polyester-resin/">Unsaturated Polyester Resin</a> page for general FRP resin context, <a href="/products/gp-white-resin/">GP White Resin</a> where its published supplied appearance is relevant, and <a href="/products/lamination-resin/">Lamination Resin</a> for its published bonding and lamination contexts. For a mould-facing surface, review <a href="/products/gp-gelcoat-resin/">Gelcoat Resin</a>; for a specified chemical- or corrosion-resistance requirement, review the separate <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> data. Final system suitability should be confirmed against the applicable product data.',
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
      "ISO 9001:2015 certified quality management system",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
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
      'Epoxy Clear Casting Resin is mixed 2:1 by weight with a compatible <a href="/products/epoxy-hardener/">Epoxy Hardener</a> before pouring — accurate weight measurement matters more here than with a polyester resin dosed by catalyst percentage. For a self-levelling grade formulated specifically for floor art and table-top coating rather than deeper casting, see our <a href="/products/epoxy-art-resin/">Epoxy Art Resin</a>; for fast UV/LED-curing craft work instead of a multi-day room-temperature cure, our <a href="/products/uv-resin/">UV Resin</a> may be more suitable. Our polyester-based <a href="/products/gp-clear-resin/">GP Clear Resin</a> and <a href="/products/gp-yellow-resin/">GP Yellow Resin</a> use an entirely different MEKP/cobalt cure system and are not interchangeable with this epoxy system for FRP structural laminating work.',
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
      "ISO 9001:2015 certified quality management system",
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
      "uv-resin",
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
      "Component Type": "Two Component",
      "Curing Time": "24 hours",
      "Mix Ratio": "2:1",
      "UV Resistant": "Yes",
    },
    tagline: "Self-levelling, crystal-clear epoxy for artistic finishes.",
    description:
      "A crystal-clear, two-component epoxy system formulated for artistic and decorative applications. Mixed 2:1 and curing in around 24 hours, it offers excellent transparency, superior gloss, outstanding self-levelling properties and excellent bubble release for a flawless finish. Supplied in 15 kg packs, with a minimum order quantity of 100 kg, its UV-resistant formulation is designed to hold its clarity and gloss over time, making it well suited to floor art, table tops and other surfaces exposed to daylight.",
    usageNote:
      'Epoxy Art Resin is mixed 2:1 with a compatible <a href="/products/epoxy-hardener/">epoxy hardener</a> before pouring. For deeper pours up to 30 mm rather than a self-levelling surface coat, see our <a href="/products/epoxy-clear-casting-resin/">Epoxy Clear Casting Resin</a>; for fast UV-curing craft work, our <a href="/products/uv-resin/">UV Resin</a> may be more suitable.',
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
      "ISO 9001:2015 certified quality management system",
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
      "uv-resin",
    ],
  },
  {
    slug: "uv-resin",
    name: "UV Resin",
    category: "Epoxy & Casting",
    price: "₹140 / kg",
    image: "uv-resin.jpg",
    images: ["uv-resin-2.jpg"],
    tdsUrl: "/tds/uv-resin-tds.pdf",
    sdsUrl: "/sds/uv-resin-sds.pdf",
    seo: {
      title: "UV Resin – Fast-Curing Epoxy Acrylate Resin",
      description:
        "UV Resin — a fast UV/LED-curing, low-viscosity epoxy acrylate resin for jewellery, encapsulation and craft coatings. Crystal clear, scratch resistant.",
      keywords: [
        "UV Resin",
        "UV Curing Resin",
        "Epoxy Acrylate Resin",
        "UV LED Resin",
        "Craft Resin",
      ],
    },
    // Reorganised into productDetails/techSpecs — every value is unchanged
    // from the original single `specs` table, just regrouped. "Usage /
    // Application" is not repeated in the table since it's already covered
    // by the applications list below. No new values invented.
    productDetails: {
      "Minimum Order Quantity": "1000 kg",
      "Packaging Size": "200 kg",
      "Colour / Appearance": "Clear",
    },
    techSpecs: {
      "Resin Chemistry": "Epoxy Acrylate",
      "Curing Type": "UV LED Cure",
      "Viscosity": "Low",
      "Hardness": "Medium",
    },
    tagline: "Fast UV-curing resin for crystal-clear craft work.",
    description:
      "An epoxy-acrylate resin that cures rapidly under UV/LED light to a crystal-clear, high-gloss finish. Low-viscosity and fast-curing, it offers excellent scratch resistance, low shrinkage and outstanding surface hardness for detailed decorative work. Supplied in 200 kg packs, with a minimum order quantity of 1,000 kg, its medium hardness and low viscosity suit fine encapsulation, doming and coating work where a fast production cycle matters as much as clarity.",
    usageNote:
      'UV Resin is cured directly under UV/LED light with no separate hardener needed. Where a longer-working-time, room-temperature-cure system is preferred for deeper pours, see our <a href="/products/epoxy-clear-casting-resin/">Epoxy Clear Casting Resin</a> or <a href="/products/epoxy-art-resin/">Epoxy Art Resin</a>.',
    features: [
      "Fast UV/LED curing",
      "Low viscosity, clear finish",
      "Excellent scratch resistance, low shrinkage",
      "Medium hardness for durable coated and encapsulated surfaces",
      "Supplied in 200 kg packs, minimum order 1000 kg",
    ],
    applications: [
      "Jewellery making and resin art",
      "Encapsulation and doming",
      "Crafts, coatings and miniature models",
      "Adhesive, label, electronics, metal and wood coating",
    ],
    industries: [
      "Jewellery & fashion accessories",
      "Electronics & component encapsulation",
      "Craft & decorative coatings",
      "Wood & metal finishing",
    ],
    whyChoose: [
      "ISO 9001:2015 certified quality management system",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Fast UV/LED cure with excellent scratch resistance",
      "Supplied in 200 kg packs, minimum order 1,000 kg",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is UV Resin?",
        a: "UV Resin is an epoxy-acrylate resin that cures rapidly under UV/LED light to a crystal-clear, high-gloss finish, used for jewellery, encapsulation, doming and craft coatings.",
      },
      {
        q: "How is UV Resin cured?",
        a: "It cures directly under UV or LED light, without needing a separate hardener or long room-temperature cure time.",
      },
      {
        q: "What is the viscosity and hardness of UV Resin?",
        a: "Viscosity is low, and cured hardness is medium, giving a durable surface for coatings and encapsulated work.",
      },
      {
        q: "Does UV Resin resist scratching and shrinkage?",
        a: "Yes. It is formulated for excellent scratch resistance and low shrinkage on cure.",
      },
      {
        q: "What applications is UV Resin suited for?",
        a: "It is used for jewellery making, resin art, encapsulation, doming, and adhesive, label, electronics, metal and wood coating work.",
      },
      {
        q: "What packaging and minimum order quantity does UV Resin come in?",
        a: "It is supplied in 200 kg packs, with a minimum order quantity of 1,000 kg.",
      },
      {
        q: "What is the difference between UV Resin and Epoxy Art Resin?",
        a: 'UV Resin cures in seconds to minutes under UV/LED light, suited to thin layers and fast production. Our <a href="/products/epoxy-art-resin/">Epoxy Art Resin</a> is a room-temperature, 24-hour-cure system better suited to thicker, self-levelling table-top pours.',
      },
    ],
    relatedSlugs: [
      "epoxy-art-resin",
      "epoxy-clear-casting-resin",
      "epoxy-hardener",
    ],
  },
  {
    slug: "epoxy-hardener",
    name: "Epoxy Hardener",
    category: "Epoxy & Casting",
    price: "₹700 / kg",
    image: "epoxy-hardener.jpg",
    images: ["epoxy-hardener-2.jpg"],
    tdsUrl: "/tds/epoxy-hardener-tds.pdf",
    sdsUrl: "/sds/epoxy-hardener-sds.pdf",
    seo: {
      title: "Epoxy Hardener Manufacturer in India | Polyamide Curing Agent",
      description:
        "Epoxy Hardener is Samrat Poly Resins' published polyamide curing agent for compatible epoxy resin systems. Review the current TDS and request an industrial quote for the required epoxy system.",
      keywords: [
        "Epoxy Hardener",
        "Polyamide Hardener",
        "Epoxy Curing Agent",
        "Epoxy Resin Hardener",
        "Hardener for Epoxy Resin",
        "Epoxy Hardener Manufacturer",
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
      "Compatibility": "Compatible epoxy resin systems — confirm the resin/hardener pairing before ordering",
      "Viscosity": "500 cPs (at 25 °C)",
      "Specific Gravity / Density": "0.97 g/cm³",
      "Amine Value": "320 mg KOH/g",
    },
    tagline: "Polyamide curing agent for compatible epoxy resin systems.",
    description:
      "Epoxy Hardener is Samrat Poly Resins' published polyamide, amine-based curing agent for compatible epoxy resin systems. It is the separate hardener component of an epoxy system, not the epoxy resin itself and not a polyester-resin catalyst. The current TDS identifies a clear/transparent liquid with 500 cPs viscosity at 25 °C, 0.97 g/cm³ specific gravity and 320 mg KOH/g amine value. Review the actual epoxy resin, intended application and current Technical Data Sheet together before confirming a resin/hardener pairing. The published commercial format is a 20 kg pack with a 100 kg minimum order quantity.",
    usageNote:
      'The existing <a href="/products/epoxy-clear-casting-resin/">Epoxy Clear Casting Resin</a> and <a href="/products/epoxy-art-resin/">Epoxy Art Resin</a> product routes identify a compatible Epoxy Hardener as part of their separate two-component systems. That does not establish universal compatibility with every epoxy product or supplier. For a UV/LED-curable route that does not use this separate hardener component, review <a href="/products/uv-resin/">UV Resin</a>. For unsaturated polyester, vinyl ester or gelcoat systems, review the separate <a href="/products/mekp-hardener/">MEKP Hardener</a> product route instead.',
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
      "uv-resin",
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
    tdsUrl: "/tds/dmc-smc-resin-tds.pdf",
    sdsUrl: "/sds/dmc-smc-resin-sds.pdf",
    seo: {
      title: "DMC & SMC Resin Manufacturer in India | Polyester Moulding Resin",
      description:
        "DMC/SMC orthophthalic unsaturated polyester resin for the published Dough and Sheet Moulding Compound applications. Review the current TDS and request an industrial quote from Samrat Poly Resins.",
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
    slug: "pet-resin",
    name: "PET Resin / Polyester Putty Resin",
    category: "Industrial & Specialty Resins",
    price: "₹115 / kg",
    image: "pet-resin.jpg",
    images: ["pet-resin-2.jpg"],
    imageAlt:
      "PET Resin / Polyester Putty Resin - PET-modified liquid unsaturated polyester sheet-grade resin by Samrat Poly Resins",
    tdsUrl: "/tds/pet-resin-tds.pdf",
    sdsUrl: "/sds/pet-resin-sds.pdf",
    seo: {
      title: "PET Resin / Polyester Putty Resin Manufacturer in India",
      description:
        "Samrat Poly Resins manufactures PET Resin / Polyester Putty Resin: a PET-modified polyester resin for sheet and laminate manufacturing in India. Request a quote.",
      keywords: [
        "PET Resin",
        "Polyester Putty Resin",
        "PET Resin Manufacturer",
        "PET Resin Manufacturer in India",
        "Polyester Putty Resin Manufacturer",
        "Polyester Putty Resin Manufacturer in India",
        "Polyester Putty Resin Supplier",
        "Polyester Putty Resin Supplier in India",
        "Industrial Polyester Putty Resin",
        "Polyester Resin for Putty Applications",
        "PET-Modified Unsaturated Polyester Resin",
        "Sheet Grade Polyester Resin",
        "FRP Sheet Lamination Resin",
      ],
    },
    // Samrat's chemists/management have approved "PET Resin / Polyester
    // Putty Resin" as this grade's permanent dual name — both terms appear
    // on the current TDS heading and both are now the buyer-facing
    // identity, not just an artifact of the document. The one distinction
    // that still matters: the product catalogue separately lists a
    // thermoplastic PET chip item under a similar name, which is a
    // different material form from this liquid resin — keep that
    // clarified so buyers order the correct grade.
    productDetails: {
      "Product Role": "PET-modified liquid sheet-grade resin",
      "Minimum Order Quantity": "1000 kg",
      "Packaging Size": "75 kg",
      "Colour / Appearance": "Pale Yellow",
      "Storage": "Cool, dry place away from direct sunlight; keep container tightly closed",
      "Shelf Life": "6 months (unopened)",
      "Country of Origin": "India",
    },
    techSpecs: {
      "Resin Type": "PET-Modified Unsaturated Polyester Resin (Liquid)",
      "Grade": "Sheet Grade",
      "Viscosity": "450–650 cPs (at 25°C)",
      "Solid Content": "60–64%",
      "Specific Gravity": "1.05–1.12 g/cm³ (at 25°C)",
      "HDT": "70–85°C (cured)",
      "Flash Point": "Approx. 30°C",
      "Published End Use": "Fibre sheets, PET sheets",
    },
    tagline: "PET-modified unsaturated polyester resin manufactured in India for sheet, laminate and panel applications.",
    description:
      "PET Resin / Polyester Putty Resin is Samrat Poly Resins' PET-modified unsaturated polyester resin, supplied as a pale-yellow liquid sheet grade. It is manufactured for PET sheets, fibre sheet products, FRP sheet lamination and panel manufacturing. Both names appear on the current TDS and refer to this same Samrat grade; its product-specific technical data is listed below.",
    features: [
      "Manufactured and marketed as PET Resin / Polyester Putty Resin — Samrat's PET-modified unsaturated polyester sheet grade",
      "Pale-yellow liquid supply with 450–650 cPs viscosity at 25°C",
      "Suited to sheet, fibre-sheet, FRP sheet-lamination and panel-manufacturing work",
      "Supplied in 75 kg packaging, 1,000 kg minimum order quantity, six-month shelf life unopened",
      "Current Technical Data Sheet and Safety Data Sheet available for review",
    ],
    applications: [
      "PET sheets and fibre sheet products",
      "FRP sheet lamination and panel manufacturing",
    ],
    industries: [
      "FRP sheet & panel manufacturing",
      "Fibre & sheet manufacturing",
    ],
    whyChoose: [
      "Dedicated PET-modified liquid resin route manufactured in India, backed by a current TDS and SDS",
      "Consistent pale-yellow liquid supply for sheet and laminate production",
      "Direct manufacturer pricing and support for bulk PET Resin / Polyester Putty Resin orders",
      "Straightforward procurement path — share your application and documentation needs for a fast quote",
    ],
    faqs: [
      {
        q: "What is PET Resin / Polyester Putty Resin?",
        a: "It is Samrat Poly Resins' PET-modified unsaturated polyester resin — a pale-yellow liquid sheet grade manufactured in India for PET sheets, fibre sheet products, FRP sheet lamination and panel manufacturing. PET Resin and Polyester Putty Resin are the approved names shown together on the current TDS for this grade.",
      },
      {
        q: "Is PET Resin the same product as Polyester Putty Resin?",
        a: "Yes. On this page, PET Resin and Polyester Putty Resin refer to the same Samrat grade — both names appear on the current Technical Data Sheet, and we present them together so buyers searching either term reach the correct product.",
      },
      {
        q: "What is this PET Resin / Polyester Putty Resin grade used for?",
        a: "Samrat's current TDS lists PET sheets, fibre sheet products, FRP sheet lamination and panel manufacturing. Share the exact finished sheet, laminate or panel requirement so the product-specific data can be reviewed against the intended use.",
      },
      {
        q: "Is this supplied as a ready-made putty or filler compound?",
        a: "No — this product is supplied as a liquid resin, not as a pre-mixed putty or filler compound. Tell us the finished product you are manufacturing so the correct Samrat grade and document can be reviewed.",
      },
      {
        q: "Is this the same as thermoplastic PET chips or pellets?",
        a: "No. This is a liquid, PET-modified unsaturated polyester resin. Samrat's product catalogue separately lists a thermoplastic PET item with a different physical form and different data — let us know which material form you need so we point you to the right product.",
      },
      {
        q: "How is this different from GP Resin or Lamination Resin?",
        a: "This grade is a PET-modified sheet resin for the applications listed above. GP Clear Resin is Samrat's general-purpose FRP route, while Lamination Resin is tuned for door, plywood and FRP lamination work. Compare the current product-specific TDS for each against your actual finished product before choosing.",
      },
      {
        q: "Which technical properties are published?",
        a: "Sheet grade, pale-yellow liquid form, 450–650 cPs viscosity at 25°C, 60–64% solid content, 1.05–1.12 g/cm³ specific gravity, 70–85°C cured HDT and an approximate 30°C flash point. Full detail, storage guidance and shelf life are on the current TDS — confirm it before procurement.",
      },
      {
        q: "Are the TDS and SDS available, and what should I share for a quote?",
        a: "Yes — download the current <a href=\"/tds/pet-resin-tds.pdf\" target=\"_blank\" rel=\"noopener\">PET Resin / Polyester Putty Resin TDS</a> and SDS from this page, or review the <a href=\"/downloads/samrat-poly-resins-product-catalogue.pdf\" target=\"_blank\" rel=\"noopener\">product catalogue</a>. For a quote, share your intended sheet or laminate application, required quantity, packaging need and delivery location.",
      },
    ],
    relatedSlugs: [
      "unsaturated-polyester-resin",
      "gp-clear-resin",
      "lamination-resin",
      "sheet-grade-yellow-resin",
      "dmc-smc-resin",
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
        "Water-white unsaturated polyester Marble Resin for the TDS-listed cultured-marble and artificial-stone contexts. Review published data, 200 kg pack details and enquire.",
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
        q: "How is Marble Resin different from PET Resin / Polyester Putty Resin or GP Resin?",
        a: 'This Marble Resin is documented for cultured-marble and artificial-stone contexts. <a href="/products/pet-resin/">PET Resin / Polyester Putty Resin</a> is Samrat\'s separately documented liquid PET-modified sheet grade; it is not ready-made putty or a broad stone-resin route. <a href="/products/gp-clear-resin/">GP Clear Resin</a> is the separate general-purpose FRP product route. Compare the published product role and data rather than transferring values between grades.',
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
        a: "The current TDS lists 200 kg packaging and a 200 kg minimum order quantity. Review the <a href=\"/tds/marble-resin-tds.pdf\" target=\"_blank\" rel=\"noopener\">Marble Resin TDS</a> and <a href=\"/downloads/samrat-poly-resins-product-catalogue.pdf\" target=\"_blank\" rel=\"noopener\">product catalogue</a>, then share the finished marble or stone product, available requirement or drawing, appearance or finish requirement, quantity, packaging requirement, delivery location and documentation needed when requesting a quote.",
      },
    ],
    relatedSlugs: [
      "gp-quartz-resin",
      "gp-clear-resin",
      "pet-resin",
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
      title: "Vinyl Ester Resin Manufacturer in India | Industrial FRP Resin",
      description:
        "Bisphenol-A epoxy vinyl ester resin for documented industrial FRP tanks, pipelines, ducts, scrubbers, filament winding and pultrusion applications. Review the current TDS before ordering.",
      keywords: [
        "Vinyl Ester Resin",
        "Vinyl Ester Resin Manufacturer India",
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
    category: "Industrial & Specialty Resins",
    price: "₹800 / kg",
    image: "fiberglass-epoxy-resin.jpg",
    images: ["fiberglass-epoxy-resin-2.jpg", "fiberglass-epoxy-resin-3.jpg"],
    imageAlt: "Illustrative Fiberglass Epoxy Resin product graphic by Samrat Poly Resins; verify the current TDS for grade data",
    tdsUrl: "/tds/fiberglass-epoxy-resin-tds.pdf",
    sdsUrl: "/sds/fiberglass-epoxy-resin-sds.pdf",
    seo: {
      title: "Fiberglass Epoxy Resin Manufacturer in India | Composite Epoxy",
      description:
        "Fiberglass Epoxy Resin for Samrat's TDS-listed fabric reinforcement, hand lay-up and lamination contexts. Review current technical documents and request an industrial quote.",
      keywords: [
        "Fiberglass Epoxy Resin",
        "Fibreglass Epoxy Resin",
        "Epoxy Resin for Fiberglass",
        "Epoxy Resin for Fibreglass",
        "Composite Epoxy Resin",
        "Epoxy Laminating Resin",
        "Epoxy Resin for Composite Laminates",
        "Fiberglass Epoxy Resin Manufacturer India",
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
      "Curing system": "Room-temperature cure; TDS identifies an amine hardener but does not name a confirmed product pairing",
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
    category: "Industrial & Specialty Resins",
    price: "₹125 / kg",
    image: "bisphenol-resin.jpg",
    images: ["bisphenol-resin-2.jpg"],
    imageAlt: "Bisphenol Resin product graphic by Samrat Poly Resins",
    tdsUrl: "/tds/bisphenol-resin-tds.pdf",
    sdsUrl: "/sds/bisphenol-resin-sds.pdf",
    seo: {
      title: "Bisphenol Resin Manufacturer in India",
      description:
        "Bisphenol Resin for laminating, casting, coating and encapsulation applications. View technical details and request a quote from Samrat Poly Resins.",
      keywords: [
        "Bisphenol Resin",
        "Bisphenol Resin Manufacturer India",
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
    tdsUrl: "/tds/mekp-hardener-tds.pdf",
    sdsUrl: "/sds/mekp-hardener-sds.pdf",
    seo: {
      title: "MEKP Hardener Supplier in India | Polyester Resin Catalyst",
      description:
        "MEKP Hardener (Methyl Ethyl Ketone Peroxide) catalyst / initiator for published polyester, vinyl ester and gelcoat systems. Review the TDS and request an industrial quote.",
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
      "ISO 9001:2015 certified quality management system",
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
];
