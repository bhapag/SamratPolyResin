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
    // describes the product as supplied to the customer. MOQ was not part of
    // the verified sheet, so it is omitted rather than reusing the old,
    // unverified 1000 kg figure. Density and Flash Point are excluded as
    // unverified.
    productDetails: {
      "Packaging": "225 kg Drum",
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
      "Sheet Grade Yellow Resin is an orthophthalic unsaturated polyester resin supplied pre-pigmented yellow for consistent-colour FRP sheet and panel manufacturing. Based on a water-white orthophthalic resin, it is factory-pigmented so every batch delivers uniform colour throughout the sheet, without the variability of pigmenting resin by hand at the mould. Cured with an MEKP catalyst at room temperature, it wets out reinforcement cleanly for a smooth, low-porosity laminate suited to compression moulding and hand lay-up alike. Samrat Poly Resins supplies Sheet Grade Yellow Resin in bulk 225 kg drums for FRP sheet, panel and general industrial moulding manufacturers.",
    usageNote:
      'Sheet Grade Yellow Resin is typically catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and reinforced with <a href="/products/fibre-glass-mat/">glass fibre</a> during sheet lay-up or compression moulding. Where a project needs an unpigmented general-purpose grade instead, see our <a href="/products/gp-clear-resin/">GP Clear Resin</a> or base <a href="/products/unsaturated-polyester-resin/">Unsaturated Polyester Resin (UPR)</a>; for door and plywood lamination work, our <a href="/products/lamination-resin/">Lamination Resin</a> is more suitable, and mould-facing sheets can be finished with a <a href="/products/gp-gelcoat-resin/">Gelcoat Resin</a> or upgraded to <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> for higher chemical resistance.',
    features: [
      "Pre-pigmented yellow for consistent colour throughout every sheet",
      "Water-white orthophthalic base resin, 99% purity",
      "Gel time of 6.5 minutes for efficient sheet and panel production",
      "Room-temperature MEKP cure, fully hardened in around 12 hours",
      "35% styrene content for stable, repeatable sheet processing",
      "Bulk-packed in 225 kg drums for sheet manufacturers",
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
        "Transparent Roof Sheet Resin",
        "FRP Roof Light Resin",
      ],
    },
    // Same base-resin chemistry as sheet-grade-yellow-resin (shared verified
    // spec sheet) — this page targets translucent roofing/skylight intent,
    // distinct prose/FAQs from the sheet-grade page. "UV-resistant" and
    // "1 year" shelf life from the old data are not part of the verified
    // sheet and have been removed rather than kept (shelf life corrected to
    // the verified 2 months — a meaningful difference for storage planning).
    // MOQ was not verified this time and is omitted. Density and Flash Point
    // are excluded as unverified.
    productDetails: {
      "Packaging": "225 kg Drum",
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
    },
    tagline: "Water-white translucent resin for roof light and skylight sheets.",
    description:
      "Roof Light Sheet Grade Resin is a water-white orthophthalic unsaturated polyester resin formulated for translucent FRP roof light and skylight sheets that let natural daylight into a building. Its water-white, low-viscosity liquid form is chosen specifically for optical clarity, so cured sheets stay transparent enough to transmit light rather than block it — unlike a pigmented or general-purpose sheet resin used for opaque panels. Cured with an MEKP catalyst at room temperature, it wets out fibreglass reinforcement cleanly for a smooth, bubble-free laminate suited to hand lay-up roofing sheet production. Samrat Poly Resins supplies Roof Light Sheet Grade Resin in bulk 225 kg drums for roofing sheet, skylight and daylighting panel manufacturers.",
    usageNote:
      'Roof Light Sheet Grade Resin is typically catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and reinforced with <a href="/products/fibre-glass-mat/">glass fibre</a> during roofing sheet lay-up. Where a project needs an opaque, pigmented sheet resin instead, see our <a href="/products/gp-clear-resin/">GP Clear Resin</a> or base <a href="/products/unsaturated-polyester-resin/">Unsaturated Polyester Resin (UPR)</a>; for door and plywood lamination work, our <a href="/products/lamination-resin/">Lamination Resin</a> is more suitable, and roofing accessories can be finished with a <a href="/products/gp-gelcoat-resin/">Gelcoat Resin</a> or upgraded to <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> for higher chemical and weather resistance.',
    features: [
      "Water-white, high optical clarity for maximum light transmission",
      "Low viscosity (280 cPs) for smooth hand lay-up over roofing profiles",
      "Gel time of 6.5 minutes for efficient roofing sheet production",
      "MEKP-catalysed room-temperature cure, hardening fully in around 12 hours",
      "35% styrene content for consistent roofing-sheet lay-up",
      "Bulk-packed in 225 kg drums for roofing sheet manufacturers",
    ],
    applications: [
      "Roof light panels and skylight sheets",
      "Daylighting panels for factories and warehouses",
      "Greenhouse and agricultural roofing sheets",
      "Industrial and commercial roofing",
    ],
    industries: [
      "Roofing sheet & panel manufacturing",
      "Industrial & warehouse construction",
      "Greenhouse & agricultural structures",
      "Daylighting & skylight systems",
    ],
    whyChoose: [
      "ISO 9001:2015 certified quality management system",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Consistent 99% purity and water-white optical clarity",
      "Supplied in bulk 225 kg drums",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is Roof Light Sheet Grade Resin?",
        a: "Roof Light Sheet Grade Resin is a water-white orthophthalic unsaturated polyester resin formulated for translucent FRP roofing sheets and skylight panels that transmit natural daylight into a building.",
      },
      {
        q: "Why does Roof Light Resin need to be water-white rather than pigmented?",
        a: 'Roof light and skylight sheets are designed to let daylight through, so the resin needs to stay optically clear rather than opaque. A water-white resin transmits light efficiently; a pigmented sheet resin, like our <a href="/products/sheet-grade-yellow-resin/">Sheet Grade Yellow Resin</a>, is used instead where an opaque, coloured panel is required.',
      },
      {
        q: "Is Roof Light Sheet Grade Resin suitable for industrial and greenhouse roofing?",
        a: "Yes. It is commonly used for daylighting panels in factories, warehouses, greenhouses and other structures where translucent, weather-exposed roofing sheets are required.",
      },
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
  },
  {
    slug: "fire-retardant-resin",
    name: "Fire Retardant Resin",
    category: "Fire Retardant Resins",
    price: "₹175 / kg",
    image: "fire-retardant-resin.jpg",
    images: ["fire-retardant-resin-2.jpg", "fire-retardant-resin-3.jpg"],
    imageAlt:
      "Fire Retardant Resin — halogenated UL 94 V0 unsaturated polyester resin by Samrat Poly Resins",
    tdsUrl: "/tds/fire-retardant-resin-tds.pdf",
    seo: {
      title: "Fire Retardant Resin – Flame Retardant Polyester Resin",
      description:
        "Fire Retardant Resin — a halogenated, UL 94 V0-rated unsaturated polyester resin for fire-safety FRP components. Gel time 5.5 minutes. 35/225 kg packs.",
      keywords: [
        "Fire Retardant Resin",
        "FR Resin",
        "Fire Resistant Polyester Resin",
        "Flame Retardant Resin",
        "Fire Retardant Polyester Resin",
        "FRP Fire Retardant Resin",
        "Halogenated Fire Retardant Resin",
        "UL 94 V0 Resin",
      ],
    },
    // Values verified for this halogenated grade only — do not confuse with
    // the separate halogen-free iso-fire-retardant-resin. MOQ was not part
    // of the verified sheet, so it is omitted rather than reusing the old,
    // unverified 500 kg figure. Density and Flash Point are excluded as
    // unverified; no fire-test claims beyond the verified UL 94 V0 rating.
    productDetails: {
      "Packaging": "35 kg / 225 kg",
      "Physical Form": "Liquid",
      "Colour / Appearance": "White",
      "Shelf Life": "3 Months",
      "Storage Temperature": "30–35 °C",
    },
    techSpecs: {
      "Base Resin": "Unsaturated Polyester",
      "FR Type": "Halogenated Fire-Retardant Formulation",
      "Flammability Rating": "UL 94 V0",
      "Curing System": "Room Temperature Cure with MEKP Catalyst",
      "Smoke / Emission": "Reduced Smoke Density and Toxic Gas Emission",
      "Viscosity": "400 cPs",
      "Gel Time": "5.5 Minutes",
      "Styrene Content": "35%",
      "MEKP Dosage": "1.5%",
      "Cobalt Octoate Dosage": "0.4%",
    },
    tagline: "Halogenated, UL 94 V0-rated resin for fire-safety FRP components.",
    description:
      "Fire Retardant Resin is a halogenated unsaturated polyester resin formulated to resist ignition and limit flame spread in FRP components. Unlike a general-purpose laminating resin, which offers no fire performance beyond that of ordinary polyester, this grade is modified with fire-retardant additives to meet a UL 94 V0 flammability rating, while also reducing smoke density and toxic gas emission if the laminate is exposed to fire. Cured at room temperature with an MEKP catalyst, it processes in the same way as a standard laminating resin, so existing hand lay-up and moulding workflows do not need to change. Samrat Poly Resins supplies Fire Retardant Resin for FRP components used in electrical enclosures, transport and construction, where fire safety is a specification requirement rather than an optional extra.",
    usageNote:
      'Fire Retardant Resin is catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and reinforced with <a href="/products/fibre-glass-mat/">glass fibre</a> in the same way as our general-purpose grades. Where fire performance is not a requirement, our <a href="/products/gp-clear-resin/">GP Clear Resin</a> or base <a href="/products/unsaturated-polyester-resin/">Unsaturated Polyester Resin (UPR)</a> are more cost-effective; for door and plywood lamination work, see our <a href="/products/lamination-resin/">Lamination Resin</a>, and mould-facing surfaces can be finished with a <a href="/products/gp-gelcoat-resin/">Gelcoat Resin</a> or upgraded to <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> for higher chemical resistance.',
    features: [
      "UL 94 V0 flammability rating for fire-critical FRP components",
      "Halogenated fire-retardant formulation with reduced smoke density and toxic gas emission",
      "Gel time of 5.5 minutes for efficient production cycles",
      "Room-temperature cure system using MEKP and cobalt octoate",
      "35% styrene content for consistent, controlled processing",
      "Supplied in 35 kg or 225 kg packs",
    ],
    applications: [
      "Electrical enclosures and switchgear components",
      "Railway, automotive and marine FRP parts",
      "Fire-rated building panels and construction components",
      "General FRP manufacturing where flame retardancy is specified",
    ],
    industries: [
      "Electrical & switchgear manufacturing",
      "Railway & transport components",
      "Marine & automotive FRP parts",
      "Construction & fire-rated panels",
    ],
    whyChoose: [
      "ISO 9001:2015 certified quality management system",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "UL 94 V0-rated formulation for fire-safety-critical components",
      "Supplied in 35 kg or 225 kg packs",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is Fire Retardant Resin?",
        a: "Fire Retardant Resin is a halogenated unsaturated polyester resin formulated to resist ignition and limit flame spread in FRP components, rated to UL 94 V0 for flammability performance.",
      },
      {
        q: "How is Fire Retardant Resin different from General Purpose Polyester Resin?",
        a: "General-purpose resin (such as our GP Clear Resin or UPR) has no specific fire performance. Fire Retardant Resin is modified with halogenated fire-retardant additives to meet a UL 94 V0 flammability rating and reduce smoke density and toxic gas emission, at the cost of being a more specialised, higher-cost grade.",
      },
      {
        q: "Why is flame-retardant resin used for safety-critical components?",
        a: "In electrical, transport and construction applications, a component that ignites easily or produces heavy smoke and toxic gas in a fire can be a serious safety hazard. Fire Retardant Resin is selected specifically to reduce these risks in FRP parts used in enclosures, panels and structural components where fire codes or safety specifications apply.",
      },
      {
        q: "Is Fire Retardant Resin the same as ISO Fire Retardant Resin?",
        a: 'No. Fire Retardant Resin is a halogenated, unsaturated-polyester-based grade rated to UL 94 V0. Our <a href="/products/iso-fire-retardant-resin/">ISO Fire Retardant Resin</a> is a separate, halogen-free, isophthalic-based grade for applications needing enhanced chemical resistance alongside fire performance.',
      },
      {
        q: "What is the gel time and curing system of Fire Retardant Resin?",
        a: "Gel time is 5.5 minutes. It cures at room temperature with an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (around 0.4%).",
      },
      {
        q: "What is the viscosity and styrene content of Fire Retardant Resin?",
        a: "Viscosity is approximately 400 cPs and styrene content is 35%.",
      },
      {
        q: "What packaging and shelf life does Fire Retardant Resin have?",
        a: "It is supplied in 35 kg or 225 kg packs. Shelf life is 3 months from manufacture; store between 30–35 °C.",
      },
    ],
    relatedSlugs: [
      "iso-fire-retardant-resin",
      "gp-clear-resin",
      "mekp-hardener",
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
    seo: {
      title: "ISO Fire Retardant Resin – Halogen-Free FR Resin",
      description:
        "ISO Fire Retardant Resin — a halogen-free, ATH-filled isophthalic polyester resin, UL 94 V0 rated, for railway, marine and automotive fire-safety FRP parts.",
      keywords: [
        "ISO Fire Retardant Resin",
        "Halogen Free Fire Retardant Resin",
        "Isophthalic Fire Retardant Resin",
        "UL 94 V0 Resin",
        "Fire Retardant Polyester Resin",
      ],
    },
    // Reorganised into productDetails/techSpecs — every value is unchanged
    // from the original single `specs` table, just regrouped. "Usage /
    // Application" is not repeated in the table since it's already covered
    // by the applications list below. No new values invented.
    productDetails: {
      "Minimum Order Quantity": "500 kg",
      "Packaging": "50 kg",
      "Physical Form": "Semi-liquid",
      "Colour / Appearance": "White",
    },
    techSpecs: {
      "Base Resin": "Polyester",
      "FR Type": "Halogen Free",
      "Flammability Rating": "UL 94 V0",
      "Fillers": "ATH Filled",
      "Curing System": "Room Temperature Cure",
      "Purity": "100%",
    },
    tagline: "Isophthalic-based resin for demanding fire safety.",
    description:
      "An isophthalic-based fire retardant resin offering enhanced performance for demanding fire-safety applications. Halogen-free and filled with aluminium trihydrate (ATH), it combines a UL 94 V0 flammability rating with the improved chemical and mechanical resistance of an isophthalic backbone, bonding well with fibreglass mats to give strength and stability to the final product. Supplied as a white, semi-liquid resin with 100% purity, it cures at room temperature and is packed in 50 kg containers, with a minimum order quantity of 500 kg — suited to railway, marine and automotive manufacturers who need fire-rated FRP components without halogenated additives.",
    usageNote:
      'ISO Fire Retardant Resin is typically reinforced with <a href="/products/fibre-glass-mat/">glass fibre</a> for railway, marine and automotive fire-rated components. Where a halogenated, unsaturated-polyester-based fire retardant grade is acceptable instead, see our <a href="/products/fire-retardant-resin/">Fire Retardant Resin</a>; for general-purpose FRP work without a fire-safety requirement, our <a href="/products/gp-clear-resin/">GP Clear Resin</a> is more cost-effective.',
    features: [
      "Halogen-free, ATH-filled formulation",
      "UL 94 V0 flammability rating",
      "Isophthalic backbone for better chemical resistance",
      "Bonds well with fibreglass reinforcement for strength and stability",
      "Room-temperature cure, 100% purity",
      "Supplied in 50 kg containers, minimum order 500 kg",
    ],
    applications: [
      "Railway applications",
      "Marine applications",
      "Automotive fire-rated components",
      "FRP panels requiring fire compliance",
    ],
    industries: [
      "Railway & transport components",
      "Marine & shipbuilding",
      "Automotive FRP parts",
      "Fire-rated panel manufacturing",
    ],
    whyChoose: [
      "ISO 9001:2015 certified quality management system",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Halogen-free, ATH-filled formulation with 100% purity",
      "UL 94 V0-rated formulation for fire-safety-critical components",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is ISO Fire Retardant Resin?",
        a: "ISO Fire Retardant Resin is a halogen-free, isophthalic-based fire retardant resin, filled with aluminium trihydrate (ATH) and rated to UL 94 V0, formulated for demanding fire-safety FRP applications in railway, marine and automotive manufacturing.",
      },
      {
        q: "What is the difference between ISO Fire Retardant Resin and Fire Retardant Resin?",
        a: 'ISO Fire Retardant Resin is a halogen-free, isophthalic-based grade offering enhanced chemical resistance alongside fire performance. Our <a href="/products/fire-retardant-resin/">Fire Retardant Resin</a> is a halogenated, unsaturated-polyester-based grade, also rated UL 94 V0. Choose the halogen-free isophthalic grade where halogen-free specification or added chemical resistance is required.',
      },
      {
        q: "Why is ISO Fire Retardant Resin halogen-free?",
        a: "Some fire-safety specifications require halogen-free formulations to limit toxic gas and corrosive smoke in a fire. This grade uses ATH filler rather than halogenated additives to achieve its UL 94 V0 flammability rating.",
      },
      {
        q: "What is the flammability rating of ISO Fire Retardant Resin?",
        a: "It is rated UL 94 V0.",
      },
      {
        q: "What is the physical form and purity of ISO Fire Retardant Resin?",
        a: "It is a white, semi-liquid resin with 100% purity.",
      },
      {
        q: "What packaging and minimum order quantity does ISO Fire Retardant Resin come in?",
        a: "It is supplied in 50 kg containers, with a minimum order quantity of 500 kg.",
      },
      {
        q: "How is ISO Fire Retardant Resin cured?",
        a: "It cures at room temperature.",
      },
    ],
    relatedSlugs: [
      "fire-retardant-resin",
      "gp-clear-resin",
      "mekp-hardener",
      "fibre-glass-mat",
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
    seo: {
      title: "Epoxy Hardener – Polyamide Curing Agent",
      description:
        "Epoxy Hardener — a polyamide curing agent for epoxy resin systems, giving a bubble-free, super-gloss cure in around 24 hours. Enquire for bulk supply.",
      keywords: [
        "Epoxy Hardener",
        "Polyamide Hardener",
        "Epoxy Curing Agent",
        "Epoxy Resin Hardener",
        "Casting Resin Hardener",
      ],
    },
    // Reorganised into productDetails/techSpecs — every value is unchanged
    // from the original single `specs` table, just regrouped. "Features"
    // and "Recommended Use" are not repeated here since they are already
    // covered in full by the features and applications lists below (same
    // source data, no information lost). No new values invented.
    productDetails: {
      "Minimum Order Quantity": "100 kg",
      "Pack Size": "20 kg",
      "Colour / Appearance": "Clear / Transparent",
    },
    techSpecs: {
      "Hardener Type": "Polyamide",
      "Mixing Ratio (Resin:Hardener)": "2:1",
      "Viscosity": "Low",
      "Full Cure Time": "24 hours",
    },
    tagline: "Polyamide hardener for a super-gloss epoxy cure.",
    description:
      "A premium-quality polyamide curing agent formulated to provide excellent curing performance when used with compatible epoxy resins. Mixed 2:1 (resin:hardener) and fully curing in around 24 hours, it delivers superior bonding strength, outstanding mechanical properties and excellent chemical and moisture resistance. It is solvent-free and low-yellowing, keeping cured epoxy work clear and glossy over time, and is supplied in 20 kg packs with a minimum order quantity of 100 kg for art, casting and industrial epoxy applications.",
    usageNote:
      'Epoxy Hardener is mixed 2:1 (resin:hardener) with a compatible epoxy resin such as our <a href="/products/epoxy-clear-casting-resin/">Epoxy Clear Casting Resin</a> or <a href="/products/epoxy-art-resin/">Epoxy Art Resin</a>. For fast UV/LED-curing craft work instead of a 24-hour room-temperature cure, see our <a href="/products/uv-resin/">UV Resin</a>.',
    features: [
      "Polyamide hardener, clear/transparent",
      "2:1 mix ratio (resin:hardener), 24-hour full cure",
      "Excellent adhesion and chemical resistance",
      "Solvent-free, low-yellowing formulation",
      "Bubble-free, super-gloss finish",
      "Supplied in 20 kg packs, minimum order 100 kg",
    ],
    applications: [
      "Epoxy art and river tables",
      "Clear casting and laminating",
      "FRP composites, industrial flooring and adhesives",
    ],
    industries: [
      "Furniture & river table manufacturing",
      "Art & decorative casting",
      "FRP & composites manufacturing",
      "Industrial flooring & adhesives",
    ],
    whyChoose: [
      "ISO 9001:2015 certified quality management system",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Solvent-free, low-yellowing formulation for lasting clarity",
      "Supplied in 20 kg packs, minimum order 100 kg",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is Epoxy Hardener?",
        a: "Epoxy Hardener is a premium-quality polyamide curing agent formulated to cure compatible epoxy resins into a hard, glossy, bubble-free finish.",
      },
      {
        q: "What is the mixing ratio for Epoxy Hardener?",
        a: "It is mixed 2:1 (resin:hardener) and fully cures in around 24 hours.",
      },
      {
        q: "Is Epoxy Hardener solvent-free?",
        a: "Yes. It is a solvent-free, low-yellowing formulation, so cured epoxy work stays clear and glossy rather than discolouring over time.",
      },
      {
        q: "What resins is Epoxy Hardener compatible with?",
        a: 'It is formulated to cure compatible epoxy resins, such as our <a href="/products/epoxy-clear-casting-resin/">Epoxy Clear Casting Resin</a> and <a href="/products/epoxy-art-resin/">Epoxy Art Resin</a>.',
      },
      {
        q: "What chemical and moisture resistance does it offer?",
        a: "Once cured, it delivers excellent chemical and moisture resistance alongside superior bonding strength and mechanical properties.",
      },
      {
        q: "What packaging and minimum order quantity does Epoxy Hardener come in?",
        a: "It is supplied in 20 kg packs, with a minimum order quantity of 100 kg.",
      },
    ],
    relatedSlugs: [
      "epoxy-clear-casting-resin",
      "epoxy-art-resin",
      "uv-resin",
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
    seo: {
      title: "DMC/SMC Resin – Moulding Compound Resin",
      description:
        "DMC/SMC Resin — an orthophthalic polyester resin for Dough and Sheet Moulding Compounds, used in electrical housings and automotive panels.",
      keywords: [
        "DMC Resin",
        "SMC Resin",
        "Sheet Moulding Compound Resin",
        "Dough Moulding Compound Resin",
        "Moulding Polyester Resin",
      ],
    },
    // Reorganised into productDetails/techSpecs — every value is unchanged
    // from the original single `specs` table, just regrouped. "Usage /
    // Application" and "Features" are not repeated here since they are
    // already covered in full by the applications and features lists below
    // (same source data, no information lost). No new values invented.
    productDetails: {
      "Minimum Order Quantity": "1000 kg",
      "Packaging Size": "225 kg",
      "Physical State": "Liquid",
      "Colour / Appearance": "Pale Yellow",
    },
    techSpecs: {
      "Resin Type": "Polyester",
      "Base Type": "Orthophthalic",
      "Grade": "Casting / Moulding, FRP Lamination, Electrical",
      "Viscosity": "Medium",
      "Curing Type": "Non-accelerated",
    },
    tagline: "Orthophthalic resin for dough and sheet moulding compounds.",
    description:
      "A premium-grade orthophthalic unsaturated polyester resin engineered for the production of Dough Moulding Compound (DMC) and Sheet Moulding Compound (SMC) composites. Pale yellow with medium viscosity and a non-accelerated cure, it provides mechanical strength, dimensional stability and processing efficiency for high-volume manufacturing with superior surface finishes. Supplied as a liquid in 225 kg drums, with a minimum order quantity of 1,000 kg, it is suited to casting, moulding, FRP lamination and electrical-grade compression moulding work where consistent batch-to-batch performance is required.",
    usageNote:
      'DMC/SMC Resin is catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and reinforced with <a href="/products/fibre-glass-mat/">glass fibre</a> during compression moulding. Where a project needs a broader general-purpose grade rather than a moulding-compound-specific one, see our <a href="/products/gp-clear-resin/">GP Clear Resin</a>.',
    features: [
      "High mechanical strength and dimensional stability",
      "Fast curing with excellent fibre wet-out and low shrinkage",
      "Chemical, corrosion and moisture resistance",
      "Electrical insulation properties",
      "Non-accelerated cure system for controlled processing",
      "Supplied in 225 kg drums, minimum order 1000 kg",
    ],
    applications: [
      "Electrical housings and manhole covers",
      "Automotive panels and transportation components",
      "Water tanks and sanitaryware",
      "Dough and sheet moulding compound (DMC/SMC) production",
    ],
    industries: [
      "Electrical & switchgear manufacturing",
      "Automotive & transport components",
      "Water tanks & sanitaryware",
      "Compression moulding & DMC/SMC manufacturing",
    ],
    whyChoose: [
      "ISO 9001:2015 certified quality management system",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "High mechanical strength with consistent dimensional stability",
      "Supplied in 225 kg drums, minimum order 1,000 kg",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is DMC/SMC Resin?",
        a: "DMC/SMC Resin is an orthophthalic unsaturated polyester resin engineered for producing Dough Moulding Compound (DMC) and Sheet Moulding Compound (SMC) composites used in electrical, automotive and sanitaryware components.",
      },
      {
        q: "What is the viscosity and colour of DMC/SMC Resin?",
        a: "It is pale yellow in colour with medium viscosity.",
      },
      {
        q: "How is DMC/SMC Resin cured?",
        a: 'It is a non-accelerated system, catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> for room-temperature cure.',
      },
      {
        q: "Does DMC/SMC Resin offer electrical insulation properties?",
        a: "Yes. It provides electrical insulation properties suited to electrical housings and switchgear components.",
      },
      {
        q: "What is DMC/SMC Resin used for?",
        a: "It is used for electrical housings, manhole covers, automotive panels, transportation components, water tanks, sanitaryware and general DMC/SMC compression moulding.",
      },
      {
        q: "What packaging and minimum order quantity does DMC/SMC Resin come in?",
        a: "It is supplied in 225 kg drums, with a minimum order quantity of 1,000 kg.",
      },
    ],
    relatedSlugs: [
      "gp-clear-resin",
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
    tdsUrl: "/tds/pet-resin-tds.pdf",
    seo: {
      title: "PET Resin / Polyester Putty Resin",
      description:
        "PET Resin / Polyester Putty Resin — a PET-modified unsaturated polyester resin for FRP sheet lamination and panel manufacturing. Sheet grade, bulk supply.",
      keywords: [
        "PET Resin",
        "Polyester Putty Resin",
        "PET-Modified Polyester Resin",
        "PET-Modified Unsaturated Polyester Resin",
        "Sheet Grade PET Resin",
        "FRP Sheet Lamination Resin",
      ],
    },
    // Corrected per SPR-TDS-PET (July 2026): this is a PET-modified liquid
    // unsaturated polyester resin, not a solid thermoplastic bottle-grade
    // PET resin. The previous IV value (0.90 dl/g) and all bottle/
    // packaging/ISBM claims did not appear in the TDS and have been
    // removed — every value below is TDS-verified.
    productDetails: {
      "Minimum Order Quantity": "1000 kg",
      "Packaging Size": "75 kg",
      "Colour / Appearance": "Pale Yellow",
      "Country of Origin": "India",
    },
    techSpecs: {
      "Resin Type": "PET-Modified Unsaturated Polyester Resin (Liquid)",
      "Grade": "Sheet Grade",
      "Physical Form": "Liquid",
      "Viscosity": "450–650 cPs (at 25°C)",
      "Solid Content": "60–64%",
      "Specific Gravity": "1.05–1.12 g/cm³ (at 25°C)",
      "HDT": "70–85°C (cured)",
      "Shelf Life": "6 Months (Unopened)",
      "End Use": "Fibre Sheets, PET Sheets",
    },
    tagline: "PET-modified liquid polyester resin for sheet and panel lamination.",
    description:
      "PET Resin / Polyester Putty Resin is a premium-quality PET-modified unsaturated polyester resin — a liquid, styrene-compatible resin system incorporating polyethylene terephthalate content, not a solid thermoplastic PET material. Pale-yellow in appearance, it is manufactured for PET sheet and fibre sheet products as well as FRP sheet lamination and panel manufacturing, offering mechanical strength, impact resistance, dimensional stability and low moisture absorption with good wet-out for sheet and panel processing. Manufactured in India and supplied in 75 kg packs, with a minimum order quantity of 1,000 kg.",
    features: [
      "PET-modified, liquid unsaturated polyester resin — sheet grade",
      "High strength and toughness, with low moisture absorption",
      "Durable and recyclable PET content",
      "Good wet-out for sheet and laminate processing",
      "Supplied in 75 kg packs, minimum order 1000 kg",
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
      "ISO 9001:2015 certified quality management system",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Consistent 450–650 cPs viscosity for reliable sheet and laminate processing",
      "Supplied in 75 kg packs, minimum order 1,000 kg",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is PET Resin / Polyester Putty Resin?",
        a: "PET Resin / Polyester Putty Resin is a PET-modified unsaturated polyester resin — a liquid, styrene-compatible resin system incorporating polyethylene terephthalate content — used for PET sheet, fibre sheet and FRP sheet lamination work. It is not a solid thermoplastic PET material.",
      },
      {
        q: "Is PET Resin the same as bottle-grade PET used for beverage bottles?",
        a: "No. This is a liquid unsaturated polyester resin for FRP sheet lamination and panel manufacturing, not the solid thermoplastic PET resin or chips processed by injection stretch blow moulding into bottles, preforms or packaging.",
      },
      {
        q: "What is the viscosity of PET Resin?",
        a: "450–650 cPs at 25°C, with a solid content of 60–64% and specific gravity of 1.05–1.12 g/cm³.",
      },
      {
        q: "What grade is this PET Resin?",
        a: "It is a sheet grade resin, suited to PET sheet and fibre sheet products as well as FRP sheet lamination and panel manufacturing.",
      },
      {
        q: "What applications is PET Resin suited for?",
        a: "It is used for PET sheets and fibre sheet products, and for FRP sheet lamination and panel manufacturing.",
      },
      {
        q: "Is PET Resin recyclable?",
        a: "It incorporates PET content and is formulated to be durable and recyclable, consistent with standard sheet and laminate resin systems.",
      },
      {
        q: "What packaging and minimum order quantity does PET Resin come in?",
        a: "It is supplied in 75 kg packs, with a minimum order quantity of 1,000 kg.",
      },
      {
        q: "Where is this PET Resin manufactured?",
        a: "It is manufactured in India.",
      },
    ],
    relatedSlugs: [
      "dmc-smc-resin",
      "marble-resin",
      "vinyl-ester-resin",
    ],
  },
  {
    slug: "marble-resin",
    name: "Marble Resin",
    category: "Industrial & Specialty Resins",
    price: "₹125 / kg",
    image: "marble-resin.jpg",
    images: ["marble-resin-2.jpg"],
    tdsUrl: "/tds/marble-resin-tds.pdf",
    seo: {
      title: "Marble Resin – Resin for Cultured Marble",
      description:
        "Marble Resin — a water-white polyester resin for cultured marble slabs, countertops and wash basins, with a high-gloss finish and strong adhesion.",
      keywords: [
        "Marble Resin",
        "Cultured Marble Resin",
        "Artificial Marble Resin",
        "Polyester Marble Resin",
        "Marble Casting Resin",
      ],
    },
    // Reorganised into productDetails/techSpecs — every value is unchanged
    // from the original single `specs` table, just regrouped. "Usage /
    // Application" is not repeated in the table since it's already covered
    // by the applications list below. No new values invented.
    productDetails: {
      "Pack Size": "200 kg",
      "Colour / Appearance": "Water White",
    },
    techSpecs: {
      "Resin Type": "Polyester",
      "Viscosity": "Medium",
      "Curing Time": "20–40 min",
    },
    tagline: "Polyester resin for cultured marble and artificial stone.",
    description:
      "A premium-grade unsaturated polyester resin specially formulated for manufacturing cultured marble and artificial stone products. Water-white with medium viscosity, it offers excellent filler compatibility, smooth flow and a high-gloss finish, curing in 20–40 minutes with strong adhesion and consistent batch-to-batch quality. Supplied in 200 kg packs, it is also used for edge bonding of marble slabs, giving fabricators a single resin for casting, bonding and finishing work.",
    usageNote:
      'Marble Resin is cured with a room-temperature catalyst system in the same way as our general-purpose grades. For quartz and engineered-stone surfacing rather than cultured marble, see our <a href="/products/gp-quartz-resin/">GP Quartz Resin</a>; for general FRP work, our <a href="/products/gp-clear-resin/">GP Clear Resin</a> is available.',
    features: [
      "Excellent filler compatibility and smooth flow",
      "High-gloss finish, low shrinkage",
      "Water and chemical resistant once cured",
      "Strong adhesion — also suited to marble slab edge bonding",
      "Supplied in 200 kg packs",
    ],
    applications: [
      "Cultured marble slabs and vanity tops",
      "Kitchen and bathroom countertops, wash basins",
      "Wall panels, window sills and decorative architectural components",
      "Marble slab edge bonding",
    ],
    industries: [
      "Cultured marble & artificial stone manufacturing",
      "Countertop & vanity top manufacturing",
      "Bathroom & sanitaryware fittings",
      "Architectural & decorative components",
    ],
    whyChoose: [
      "ISO 9001:2015 certified quality management system",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Water-white colour with a high-gloss, low-shrinkage cure",
      "Supplied in 200 kg packs",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is Marble Resin?",
        a: "Marble Resin is a premium-grade unsaturated polyester resin formulated for manufacturing cultured marble and artificial stone products, including slabs, countertops and wash basins.",
      },
      {
        q: "What is the curing time of Marble Resin?",
        a: "Curing time is 20–40 minutes.",
      },
      {
        q: "Is Marble Resin water and chemical resistant?",
        a: "Yes, once cured it is water and chemical resistant, suited to countertops, wash basins and wall panels.",
      },
      {
        q: "Can Marble Resin be used for edge bonding?",
        a: "Yes. Its strong adhesion makes it suitable for marble slab edge bonding as well as full casting work.",
      },
      {
        q: "What is the difference between Marble Resin and GP Quartz Resin?",
        a: 'Marble Resin is formulated for cultured marble and artificial stone casting and bonding. Our <a href="/products/gp-quartz-resin/">GP Quartz Resin</a> is engineered specifically for high filler-loading quartz and engineered-stone surfacing. Choose based on whether your product is cultured marble or quartz-based.',
      },
      {
        q: "What packaging does Marble Resin come in?",
        a: "It is supplied in 200 kg packs.",
      },
    ],
    relatedSlugs: [
      "gp-quartz-resin",
      "gp-clear-resin",
      "dmc-smc-resin",
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
    seo: {
      title: "Vinyl Ester Resin – Chemical-Resistant Resin",
      description:
        "Vinyl Ester Resin — a Bisphenol-A epoxy vinyl ester for chemical tanks, pipelines and filament winding, resisting acids, alkalis and solvents.",
      keywords: [
        "Vinyl Ester Resin",
        "Chemical Resistant Resin",
        "Corrosion Resistant Resin",
        "FRP Tank Resin",
        "Filament Winding Resin",
      ],
    },
    // productDetails/techSpecs cross-checked against SPR-TDS-VER Rev. 01
    // (chemist-verified) — do not edit without an updated TDS. HDT is
    // explicitly labelled "with post-cure" since independent sources put
    // standard, non-post-cured bisphenol vinyl ester HDT closer to 100°C;
    // the TDS's single 110°C figure isn't tied to a specific cure schedule,
    // so it is not presented as an unconditional result. No Colour/
    // Appearance field — not part of this TDS, not invented.
    productDetails: {
      "Minimum Order Quantity": "225 kg",
      "Packaging": "225 kg Drum",
      "Shelf Life": "6 months",
      "Storage Temperature": "Below 25 °C",
    },
    techSpecs: {
      "Resin Type": "Bisphenol-A Epoxy Vinyl Ester",
      "Curing System": "MEKP Catalyst — Room Temp, Heat Cure (60–120°C) or Post-Cure",
      "Viscosity": "350 cPs (at 25°C)",
      "Gel Time": "15–20 minutes (1.5% MEKP)",
      "Styrene Content": "40%",
      "Specific Gravity / Density": "1.05 g/cm³",
      "Heat Deflection Temperature (HDT)": "Up to 110°C (with post-cure)",
      "Flash Point": "32°C (closed cup)",
      "MEKP Dosage": "1.5%",
    },
    tagline: "High-performance resin for chemical and corrosion resistance.",
    description:
      "Vinyl Ester Resin is Samrat Poly Resins' Bisphenol-A based epoxy vinyl ester system — a chemistry that sits between our general-purpose orthophthalic grades (GP Clear Resin, GP Yellow Resin) and a true two-part epoxy system like our Epoxy Clear Casting Resin. Its epoxy backbone gives it genuinely superior chemical resistance and toughness over standard polyester, while it still cures with the same MEKP catalyst and free-radical mechanism as our other polyester-family resins, not the amine-based two-part reaction a true epoxy uses. With a viscosity of 350 cPs and a 15–20 minute gel time at 1.5% MEKP, it processes by hand layup, spray-up, filament winding or pultrusion. A room-temperature cure is standard; where maximum heat deflection performance is needed, an optional heat cure (60–120°C) and post-cure can raise its heat deflection temperature to around 110°C. Samrat Poly Resins supplies Vinyl Ester Resin in 225 kg drums for FRP fabricators building tanks, pipelines and structures that must withstand sustained chemical or corrosive exposure beyond what a standard orthophthalic resin is rated for.",
    usageNote:
      'Vinyl Ester Resin is catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and reinforced with <a href="/products/fibre-glass-mat/">glass fibre</a>, using the same lay-up techniques as our general-purpose grades. Where chemical resistance beyond ordinary orthophthalic performance isn\'t required, <a href="/products/gp-clear-resin/">GP Clear Resin</a> or <a href="/products/gp-yellow-resin/">GP Yellow Resin</a> are more cost-effective for general FRP work, and <a href="/products/lamination-resin/">Lamination Resin</a> remains the better choice for fast-cycle door and plywood lamination rather than chemical-resistant structural work. Mould-facing surfaces can still be finished with a <a href="/products/gp-gelcoat-resin/">Gelcoat Resin</a> ahead of a vinyl ester laminate. For decorative, unreinforced casting work rather than structural chemical-resistant laminating, our two-part <a href="/products/epoxy-clear-casting-resin/">Epoxy Clear Casting Resin</a> uses a different, amine-cured epoxy chemistry entirely and is not a substitute for this product.',
    features: [
      "Bisphenol-A epoxy vinyl ester chemistry — genuinely superior chemical resistance to standard orthophthalic polyester",
      "Resists water, acids, alkalis and solvents",
      "Lower shrinkage on cure than standard orthophthalic polyester",
      "Cures with the same MEKP catalyst system as our general-purpose grades — room temperature, heat cure or post-cure",
      "350 cPs viscosity suited to hand layup, spray-up, filament winding and pultrusion",
      "Heat deflection temperature up to 110°C with post-cure",
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
      "Offshore & marine structures",
    ],
    whyChoose: [
      "ISO 9001:2015 certified quality management system",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Exceptional chemical and corrosion resistance for demanding environments",
      "Superior toughness and thermal stability versus general-purpose grades",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is Vinyl Ester Resin?",
        a: "Vinyl Ester Resin is a Bisphenol-A based epoxy vinyl ester resin — a chemistry that combines an epoxy backbone with the same MEKP-catalysed, styrene-based cure system as our general-purpose polyester grades. It sits between standard orthophthalic polyester and a true two-part epoxy system in both chemical resistance and cost.",
      },
      {
        q: "What is the difference between Vinyl Ester Resin and GP Clear Resin or GP Yellow Resin?",
        a: 'Vinyl Ester Resin\'s epoxy backbone gives it genuinely superior chemical, corrosion and water resistance than either general-purpose grade. <a href="/products/gp-clear-resin/">GP Clear Resin</a> and <a href="/products/gp-yellow-resin/">GP Yellow Resin</a> are more cost-effective orthophthalic resins for everyday FRP work that doesn\'t face sustained chemical exposure.',
      },
      {
        q: "What is the difference between Vinyl Ester Resin and Epoxy Clear Casting Resin?",
        a: 'They are different resin chemistries entirely, despite both offering strong performance. Vinyl Ester Resin cures with an MEKP catalyst in a styrene-based system, the same as our general-purpose polyester grades, and is used as a structural laminating resin with glass fibre reinforcement. Our <a href="/products/epoxy-clear-casting-resin/">Epoxy Clear Casting Resin</a> is a true two-part, amine-cured epoxy system used unreinforced for clear decorative casting. They are not interchangeable.',
      },
      {
        q: "What chemicals does Vinyl Ester Resin resist?",
        a: "It resists water, acids, alkalis and solvents, making it suitable for chemical storage tanks, pipelines and scrubbers facing sustained exposure beyond what standard orthophthalic resin is rated for.",
      },
      {
        q: "Does Vinyl Ester Resin shrink on cure?",
        a: "It is formulated for lower shrinkage than standard orthophthalic polyester, supporting dimensional stability in tanks and structural parts, though no specific shrinkage percentage has been published for this grade.",
      },
      {
        q: "What is the heat resistance of Vinyl Ester Resin?",
        a: "Its heat deflection temperature (HDT) reaches up to around 110°C, but that figure is achieved with a post-cure step — a room-temperature-only cure will typically have a somewhat lower HDT. Where maximum thermal performance matters, discuss the recommended heat-cure and post-cure schedule with our technical team.",
      },
      {
        q: "How is Vinyl Ester Resin cured?",
        a: 'It is catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> at room temperature, the same base system as our general-purpose polyester grades. It also supports an optional heat cure (60–120°C) and post-cure step for higher heat deflection performance where that\'s required.',
      },
      {
        q: "What applications and processes is Vinyl Ester Resin used for?",
        a: "It is used for FRP tanks and chemical storage vessels, pipelines, ducts and scrubbers, cooling towers, pressure vessels and offshore structures, and marine components — processed by hand layup, spray-up, filament winding or pultrusion.",
      },
    ],
    relatedSlugs: [
      "gp-clear-resin",
      "mekp-hardener",
      "fibre-glass-mat",
      "fiberglass-epoxy-resin",
      "gp-gelcoat-resin",
    ],
    // Card-only stubs (draft: true) approved via Step 1 audit + Step 3 —
    // slugs prefixed "vinyl-ester-resin-for-" for consistency with the GP
    // Yellow and Epoxy Clear Casting Resin ecosystems. See applications.js
    // for the stub entries themselves.
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
    tdsUrl: "/tds/fiberglass-epoxy-resin-tds.pdf",
    seo: {
      title: "Fiberglass Epoxy Resin – Structural Epoxy System",
      description:
        "Fiberglass Epoxy Resin — a low-viscosity, room-temperature-cure epoxy for structural fibreglass laminates in marine, wind and construction FRP work.",
      keywords: [
        "Fiberglass Epoxy Resin",
        "Structural Epoxy Resin",
        "Epoxy Laminating Resin",
        "Fibreglass Resin",
        "Composite Epoxy Resin",
      ],
    },
    // Reorganised into productDetails/techSpecs — every value is unchanged
    // from the original single `specs` table, just regrouped. "Usage /
    // Application" is not repeated in the table since it's already covered
    // by the applications list below. No new values invented.
    productDetails: {
      "Reinforcement Form": "Fabric",
    },
    techSpecs: {
      "Resin System": "Epoxy",
      "Viscosity": "Low",
      "Curing Type": "Room Temperature Cure",
    },
    tagline: "Structural epoxy system for fibreglass reinforcement.",
    description:
      "A premium-quality epoxy resin specially formulated for fibreglass reinforcement, composite manufacturing, lamination and structural applications. Low-viscosity and room-temperature curing, it offers outstanding mechanical strength, superior adhesion, excellent wet-out of fibreglass fabrics and exceptional chemical resistance. Its low viscosity is matched to fabric reinforcement rather than chopped strand mat, giving structural laminators the wet-out and strength needed for marine, wind-energy, construction and automotive components.",
    usageNote:
      'Fiberglass Epoxy Resin is reinforced with fibreglass fabric for structural laminates. Where a lower-cost, general-purpose polyester system is sufficient instead of a structural epoxy, see our <a href="/products/gp-clear-resin/">GP Clear Resin</a>; for chemical-resistant polyester tank and pipeline work, our <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> is available.',
    features: [
      "Low viscosity for excellent fabric wet-out",
      "Room-temperature cure",
      "Outstanding mechanical strength and adhesion",
      "Exceptional chemical resistance",
      "Formulated for fabric reinforcement in structural laminates",
    ],
    applications: [
      "Boat building and marine components",
      "Wind turbine components",
      "Construction, electrical and automotive FRP laminates",
    ],
    industries: [
      "Marine & boat building",
      "Wind energy components",
      "Construction & electrical FRP laminates",
      "Automotive structural components",
    ],
    whyChoose: [
      "ISO 9001:2015 certified quality management system",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Outstanding mechanical strength and fabric wet-out",
      "Room-temperature cure — no special curing equipment required",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is Fiberglass Epoxy Resin?",
        a: "Fiberglass Epoxy Resin is a premium-quality epoxy resin formulated for fibreglass fabric reinforcement, composite manufacturing and structural laminating applications.",
      },
      {
        q: "What reinforcement is Fiberglass Epoxy Resin designed for?",
        a: "It is formulated for fabric reinforcement, giving good wet-out of woven fibreglass fabric for structural laminates.",
      },
      {
        q: "How is Fiberglass Epoxy Resin cured?",
        a: "It cures at room temperature, without needing special curing equipment.",
      },
      {
        q: "What is the difference between Fiberglass Epoxy Resin and Vinyl Ester Resin?",
        a: 'Fiberglass Epoxy Resin is an epoxy system formulated for structural fabric-reinforced laminates in marine, wind and construction work. Our <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> is a polyester-family resin engineered for chemical and corrosion resistance in tanks and pipelines. Choose based on whether your project needs structural laminating strength or chemical resistance.',
      },
      {
        q: "What chemical resistance does Fiberglass Epoxy Resin offer?",
        a: "It offers exceptional chemical resistance alongside its structural mechanical strength and adhesion.",
      },
      {
        q: "What applications is Fiberglass Epoxy Resin used for?",
        a: "It is used for boat building and marine components, wind turbine components, and construction, electrical and automotive FRP laminates.",
      },
    ],
    relatedSlugs: [
      "vinyl-ester-resin",
      "gp-clear-resin",
      "fibre-glass-mat",
    ],
  },
  {
    slug: "bisphenol-resin",
    name: "Bisphenol Resin",
    category: "Industrial & Specialty Resins",
    price: "₹125 / kg",
    image: "bisphenol-resin.jpg",
    images: ["bisphenol-resin-2.jpg"],
    tdsUrl: "/tds/bisphenol-resin-tds.pdf",
    seo: {
      title: "Bisphenol Resin – Industrial Epoxy Resin",
      description:
        "Bisphenol Resin — a bisphenol-based epoxy for industrial flooring, tooling and electrical encapsulation, with strong chemical and moisture resistance.",
      keywords: [
        "Bisphenol Resin",
        "Bisphenol Epoxy Resin",
        "Industrial Epoxy Resin",
        "Epoxy Flooring Resin",
        "Electrical Encapsulation Resin",
      ],
    },
    // No productDetails/techSpecs table yet — no verified numeric spec sheet
    // (viscosity, mix ratio, cure time, packaging, MOQ, etc.) has been
    // supplied for this grade. Per standing instruction, values are never
    // invented to fill the table; this section will be added once a
    // finalized TDS is provided for Bisphenol Resin.
    tagline: "Bisphenol-based epoxy for demanding industrial use.",
    description:
      "A premium-quality bisphenol-based epoxy resin for high-performance industrial and composite applications requiring exceptional mechanical strength, superior chemical resistance and excellent adhesion. It offers outstanding durability, low shrinkage, excellent electrical insulation and resistance to moisture, solvents and corrosive chemicals, with excellent wet-out of fibreglass reinforcements. Samrat Poly Resins supplies Bisphenol Resin for industrial flooring, tooling, electrical encapsulation and structural bonding work where long-term durability and chemical resistance are priorities.",
    usageNote:
      'Bisphenol Resin is reinforced with fibreglass for laminating and structural work, in the same way as our other epoxy and structural resin grades. Where a lower-cost, general-purpose polyester system is sufficient instead of a bisphenol epoxy, see our <a href="/products/gp-clear-resin/">GP Clear Resin</a>; for chemical-resistant polyester tank and pipeline work, our <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> is available.',
    features: [
      "Outstanding durability and low shrinkage",
      "Excellent electrical insulation",
      "Resists moisture, solvents and corrosive chemicals",
      "Excellent wet-out of fibreglass reinforcements",
      "Excellent adhesion for structural bonding work",
    ],
    applications: [
      "Laminating and FRP composites",
      "Industrial flooring and protective coatings",
      "Electrical encapsulation, tooling and structural bonding",
    ],
    industries: [
      "Industrial flooring & coatings",
      "Electrical encapsulation & tooling",
      "FRP & composites manufacturing",
      "Structural bonding applications",
    ],
    whyChoose: [
      "ISO 9001:2015 certified quality management system",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Outstanding durability with excellent chemical and moisture resistance",
      "Excellent electrical insulation for tooling and encapsulation work",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is Bisphenol Resin?",
        a: "Bisphenol Resin is a premium-quality bisphenol-based epoxy resin for high-performance industrial and composite applications requiring exceptional mechanical strength, chemical resistance and adhesion.",
      },
      {
        q: "What electrical properties does Bisphenol Resin offer?",
        a: "It offers excellent electrical insulation, making it suitable for electrical encapsulation and tooling work.",
      },
      {
        q: "Does Bisphenol Resin resist chemicals and moisture?",
        a: "Yes. It resists moisture, solvents and corrosive chemicals, with outstanding durability and low shrinkage on cure.",
      },
      {
        q: "Is Bisphenol Resin suitable for fibreglass laminating?",
        a: "Yes. It offers excellent wet-out of fibreglass reinforcements, suited to laminating and FRP composite work.",
      },
      {
        q: "What is the difference between Bisphenol Resin and Vinyl Ester Resin?",
        a: 'Bisphenol Resin is an epoxy system suited to industrial flooring, tooling, encapsulation and structural bonding. Our <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> is a polyester-family resin engineered specifically for chemical-resistant tanks and pipelines. Choose based on your application.',
      },
      {
        q: "What applications is Bisphenol Resin used for?",
        a: "It is used for laminating and FRP composites, industrial flooring and protective coatings, and electrical encapsulation, tooling and structural bonding.",
      },
    ],
    relatedSlugs: [
      "vinyl-ester-resin",
      "fiberglass-epoxy-resin",
      "gp-clear-resin",
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
      'MEKP Hardener is a separate catalyst component for published resin systems including <a href="/products/gp-clear-resin/">GP Clear Resin</a>, <a href="/products/gp-white-resin/">GP White Resin</a>, <a href="/products/gp-yellow-resin/">GP Yellow Resin</a>, <a href="/products/lamination-resin/">Lamination Resin</a>, <a href="/products/gp-gelcoat-resin/">GP Gelcoat Resin</a> and <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a>. <a href="/products/fibre-glass-mat/">Glass Fiber</a> is the separate reinforcement component, while <a href="/products/frp-polyester-pigment/">FRP Polyester Pigment</a> is a separate colour component. Confirm the published product data for the actual system; this page does not provide operating instructions.',
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
