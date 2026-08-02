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
      title: "GP White Resin – Water-White Polyester Resin",
      description:
        "GP White Resin — a water-white, general-purpose orthophthalic polyester resin for FRP moulding, panels and water tanks. 6-minute gel time. 225 kg drums.",
      keywords: [
        "GP White Resin",
        "Water White Polyester Resin",
        "General Purpose Polyester Resin",
        "FRP Resin",
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
      "GP White Resin is a premium general-purpose orthophthalic unsaturated polyester resin offering excellent fibreglass wet-out, reliable curing and high mechanical strength. Supplied as a water-white, medium-thixotropic liquid with a viscosity below 350 cPs, its body resists sagging on angled and vertical mould surfaces while still wetting out reinforcement quickly, helped by a fast 6-minute gel time. With 30–35% styrene content and a non-accelerated cure system, it is catalysed with an MEKP catalyst and cobalt octoate accelerator at room temperature for controlled, repeatable processing. Samrat Poly Resins supplies GP White Resin in bulk 225 kg drums for panel, moulding, hand layup, spray-up, cooling tower and water tank manufacturers who need a water-white general-purpose grade.",
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
      title: "GP Quartz Resin – Resin for Engineered Stone",
      description:
        "GP Quartz Resin — a polyester resin engineered for artificial quartz stone and engineered stone countertop manufacturing. Gel time 12–20 minutes.",
      keywords: [
        "GP Quartz Resin",
        "Quartz Stone Resin",
        "Engineered Stone Resin",
        "Artificial Marble Resin",
        "Polyester Resin",
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
    tagline: "Premium resin engineered for quartz and engineered stone surfaces.",
    description:
      "Samrat GP Quartz Resin is an orthophthalic-based, general-purpose unsaturated polyester resin engineered for manufacturing artificial quartz stone, engineered stone slabs and composite mineral surfaces. Its clear-to-pale-yellow liquid form and controlled viscosity support smooth, uniform resin distribution and consistent curing performance for demanding industrial production. Supplied with a viscosity of 400–800 cPs and a gel time of 7–10 minutes, it cures under a non-accelerated system with an MEKP catalyst and cobalt octoate accelerator, reaching full cure in around 2 hours. At 99% purity, it is packed in 225 kg drums, with a minimum order quantity of 1,000 kg.",
    usageNote:
      'GP Quartz Resin is cured with an <a href="/products/mekp-hardener/">MEKP catalyst</a> and cobalt octoate accelerator under a non-accelerated system. For cultured marble and artificial stone work outside quartz surfacing, see our <a href="/products/marble-resin/">Marble Resin</a>; for general-purpose FRP manufacturing rather than stone casting, our <a href="/products/gp-clear-resin/">GP Clear Resin</a> is more suitable.',
    features: [
      "Clear to pale yellow liquid appearance",
      "Controlled viscosity (400–800 cPs) for consistent processing",
      "Non-accelerated curing system",
      "Gel time of 7–10 minutes",
      "99% purity for consistent batch-to-batch quality",
      "Supplied in 225 kg drums; minimum order 1,000 kg",
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
        a: "Its controlled viscosity is formulated to support smooth, uniform resin distribution and consistent curing performance, the properties needed for engineered stone and quartz casting work.",
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
      title: "GP Gelcoat Resin – Polyester Gelcoat for FRP Moulds",
      description:
        "GP Gelcoat Resin — a white, high-gloss polyester gelcoat for FRP moulds, applied before fibreglass lay-up. Thixotropic, 8.5-minute gel time. 50/225 kg packs, MOQ 500 kg.",
      keywords: [
        "GP Gelcoat Resin",
        "Gelcoat Resin",
        "Polyester Gelcoat Resin",
        "FRP Gelcoat Resin",
        "White Gelcoat Resin",
        "General Purpose Gelcoat",
        "Fiberglass Gelcoat Resin",
        "Brush Grade Gelcoat Resin",
        "Mould Gelcoat Resin",
        "Surface Coating Gelcoat",
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
      "GP Gelcoat Resin is a white, high-gloss polyester surface-coating resin applied as the outermost layer of an FRP moulding, before the fibreglass laminate is built up behind it. Unlike a general-purpose laminating resin, which is designed to soak into and bind reinforcement, gelcoat is formulated to be brushed, sprayed or rollered directly onto the mould face — its high viscosity and thixotropic behaviour let it cling to vertical and overhead mould surfaces without sagging or running. Once cured with an MEKP catalyst, it forms a smooth, glossy, protective skin that shields the laminate underneath from moisture, abrasion and weathering, giving the finished part its visible surface finish. Samrat Poly Resins supplies GP Gelcoat Resin as a 100% pure, general-purpose white gelcoat suited to a wide range of FRP mould work.",
    usageNote:
      'In a typical FRP lay-up, GP Gelcoat Resin is brushed or sprayed onto the mould first and left to gel, then reinforced with <a href="/products/fibre-glass-mat/">glass fibre</a> saturated in a laminating resin such as our <a href="/products/gp-clear-resin/">GP Clear Resin</a> or base <a href="/products/unsaturated-polyester-resin/">Unsaturated Polyester Resin (UPR)</a>, catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a>. For door and plywood lamination work rather than mould gelcoating, see our <a href="/products/lamination-resin/">Lamination Resin</a>; for moulds needing higher chemical and corrosion resistance, a <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> system may be more suitable.',
    features: [
      "White, high-gloss, pigment-free finish with 100% purity",
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
      "vinyl-ester-resin",
      "mekp-hardener",
      "fibre-glass-mat",
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
    tdsUrl: "/tds/frp-polyester-pigment-tds.pdf",
    seo: {
      title: "FRP Polyester Pigment – Colour Paste for Resins",
      description:
        "FRP Polyester Pigment — a heat-stable colour paste for unsaturated polyester resins and gel coats, available in custom RAL and Pantone shades.",
      keywords: [
        "FRP Polyester Pigment",
        "Polyester Resin Pigment",
        "Gel Coat Pigment",
        "FRP Colour Paste",
        "Resin Pigment Paste",
      ],
    },
    // Reorganised into productDetails/techSpecs — every value is unchanged
    // from the original single `specs` table, just regrouped. "Usage /
    // Application" is not repeated in the table since it's already covered
    // by the applications list below. No new values invented.
    productDetails: {
      "Minimum Order Quantity": "100 kg",
      "Packaging Size": "10 kg",
      "Pack Type": "Bottle",
      "Colour / Appearance": "Multicolor",
    },
    techSpecs: {
      "Form": "Paste",
      "Polyester Type": "UPR",
      "Binder Compatibility": "Unsaturated Polyester",
    },
    tagline: "Heat-stable colour paste for polyester resins.",
    description:
      "A colorant paste designed specifically for FRP products made with unsaturated polyester resins. Formulated to blend seamlessly with the resin system, it provides consistent multicolour coloration without affecting curing or mechanical properties. It withstands the exothermic heat of curing, contains stabilisers to resist fading, and is available in a wide range of standard and custom colours including RAL and Pantone matches. Supplied as a paste in 10 kg bottles, with a minimum order quantity of 100 kg, it is compatible with unsaturated polyester resin binder systems used across FRP tanks, gel coats, panels and enclosures — letting manufacturers achieve consistent, factory-matched colour without compromising cure or mechanical performance.",
    usageNote:
      'FRP Polyester Pigment is blended directly into <a href="/products/gp-clear-resin/">GP Clear Resin</a> or another unsaturated polyester resin before catalysing with an <a href="/products/mekp-hardener/">MEKP hardener</a>. For a pre-pigmented, factory-coloured sheet resin instead of adding pigment yourself, see our <a href="/products/sheet-grade-yellow-resin/">Sheet Grade Yellow Resin</a>.',
    features: [
      "Blends seamlessly with unsaturated polyester resins",
      "Compatible with unsaturated polyester (UPR) binder systems",
      "Withstands exothermic curing heat",
      "UV and weather-resistant stabilisers resist fading",
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
        a: "FRP Polyester Pigment is a colorant paste formulated for FRP products made with unsaturated polyester resins, providing consistent multicolour coloration without affecting curing or mechanical properties.",
      },
      {
        q: "Is FRP Polyester Pigment compatible with all polyester resins?",
        a: 'It is formulated for compatibility with unsaturated polyester (UPR) resin binder systems, such as our <a href="/products/gp-clear-resin/">GP Clear Resin</a> and other general-purpose grades.',
      },
      {
        q: "Does FRP Polyester Pigment affect curing or mechanical properties?",
        a: "No. It is formulated to blend seamlessly with the resin system without affecting curing or the final mechanical properties of the FRP part.",
      },
      {
        q: "Can I get custom colours matched?",
        a: "Yes. It is available in a wide range of standard and custom colours, including RAL and Pantone matches.",
      },
      {
        q: "Does FRP Polyester Pigment resist fading?",
        a: "Yes. It contains stabilisers to resist fading and withstands the exothermic heat generated during resin curing.",
      },
      {
        q: "What packaging and minimum order quantity does FRP Polyester Pigment come in?",
        a: "It is supplied in 10 kg bottles, with a minimum order quantity of 100 kg.",
      },
      {
        q: "How is FRP Polyester Pigment used?",
        a: 'It is blended directly into the unsaturated polyester resin before catalysing with an <a href="/products/mekp-hardener/">MEKP hardener</a>, giving the cured FRP part its final colour.',
      },
    ],
    relatedSlugs: [
      "gp-clear-resin",
      "sheet-grade-yellow-resin",
      "mekp-hardener",
      "fibre-glass-mat",
    ],
  },
  {
    slug: "fibre-glass-mat",
    name: "Glass Fiber",
    category: "FRP Allied Products",
    price: "₹120 / kg",
    image: "fibre-glass-mat.jpg",
    images: ["fibre-glass-mat-2.jpg"],
    tdsUrl: "/tds/fibre-glass-mat-tds.pdf",
    seo: {
      title: "Glass Fiber Mat – E-Glass Chopped Strand Mat",
      description:
        "Glass Fiber — E-glass chopped strand mat reinforcement, polyester-sized, in 300/450 gsm for marine, automotive and construction FRP composites.",
      keywords: [
        "Glass Fiber Mat",
        "Chopped Strand Mat",
        "FRP Reinforcement",
        "E-Glass Mat",
        "Fibreglass Mat",
      ],
    },
    // Reorganised into productDetails/techSpecs — every value is unchanged
    // from the original single `specs` table, just regrouped. "Usage /
    // Application" is not repeated in the table since it's already covered
    // by the applications list below. No new values invented.
    productDetails: {
      "Minimum Order Quantity": "500 kg",
      "Packaging Type": "Roll",
      "Roll Width": "1040 mm",
    },
    techSpecs: {
      "Glass Type": "E-Glass",
      "Form": "Chopped Strand",
      "Tex / GSM": "300 g/m² & 450 g/m²",
      "Sizing Type": "Polyester",
      "Fiber Length": "3 mm",
      "Grade Standard": "Industrial Grade",
      "Types": "Orthophthalic",
    },
    tagline: "Reinforcement that gives composites their strength.",
    description:
      "E-glass chopped strand mat reinforcement used together with polyester resin to form FRP composites. It acts as the structure that the resin binds together, providing rigidity, strength and shape to the final product. Supplied in industrial-grade rolls with polyester sizing for good resin compatibility, it is widely used across marine, automotive and construction applications. Available in 1040 mm wide rolls at 300 g/m² and 450 g/m², with a minimum order quantity of 500 kg, its polyester sizing ensures reliable wet-out and bonding with polyester resin systems, giving composite laminates the reinforcement they need for consistent strength and shape retention.",
    usageNote:
      'Glass Fiber is reinforced into <a href="/products/gp-clear-resin/">GP Clear Resin</a> or another general-purpose polyester resin, catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a>, for hand layup and spray-up work. Mould-facing surfaces can be finished with a <a href="/products/gp-gelcoat-resin/">Gelcoat Resin</a>.',
    features: [
      "E-glass chopped strand, 3 mm fibre length",
      "300 g/m² and 450 g/m² weights available",
      "1040 mm roll width, polyester sizing",
      "Fast curing, good chemical resistance once wet out",
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
        a: "Glass Fiber is an E-glass chopped strand mat reinforcement used together with polyester resin to form FRP composites, providing the structural rigidity and strength that the resin alone cannot.",
      },
      {
        q: "What glass type and fibre length is used?",
        a: "It is E-glass with a 3 mm chopped fibre length, industrial grade.",
      },
      {
        q: "What weights (GSM) are available?",
        a: "It is available in 300 g/m² and 450 g/m² weights.",
      },
      {
        q: "What is the roll width and packaging?",
        a: "It is supplied in 1040 mm wide rolls.",
      },
      {
        q: "Is the sizing compatible with polyester resin?",
        a: "Yes. It carries a polyester sizing formulated for good compatibility and wet-out with polyester resin systems.",
      },
      {
        q: "What is the minimum order quantity for Glass Fiber?",
        a: "Minimum order quantity is 500 kg.",
      },
      {
        q: "How is Glass Fiber used with resin?",
        a: 'It is laid into the mould and wet out with a catalysed polyester resin such as our <a href="/products/gp-clear-resin/">GP Clear Resin</a>, typically catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a>, so the resin binds around the glass fibre reinforcement as it cures.',
      },
    ],
    relatedSlugs: [
      "gp-clear-resin",
      "mekp-hardener",
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
    tdsUrl: "/tds/epoxy-clear-casting-resin-tds.pdf",
    seo: {
      title: "Epoxy Clear Casting Resin – River Table Resin",
      description:
        "Epoxy Clear Casting Resin — a crystal-clear, high-gloss two-part epoxy for river tables, jewellery and decorative casting, curing in around 24 hours.",
      keywords: [
        "Epoxy Clear Casting Resin",
        "Casting Epoxy Resin",
        "River Table Resin",
        "Clear Epoxy Resin",
        "Epoxy Casting Resin",
      ],
    },
    // Reorganised into productDetails/techSpecs — every value is unchanged
    // from the original single `specs` table, just regrouped. "Usage /
    // Application" is not repeated in the table since it's already covered
    // by the applications list below. No new values invented.
    productDetails: {
      "Minimum Order Quantity": "100 kg",
      "Pack Size": "20 kg",
      "Colour / Appearance": "Clear",
      "Finish": "High Gloss",
    },
    techSpecs: {
      "Resin Type": "Epoxy",
      "Max Casting Depth": "30 mm",
      "Curing Time": "24 hours",
      "Viscosity": "Medium",
      "Mix Ratio": "1:1",
    },
    tagline: "Crystal-clear, bubble-resistant resin for casting and art.",
    description:
      "A premium two-part epoxy resin formulated for casting, river tables, jewellery and decorative artwork. Mixed 1:1, it cures in around 24 hours to a crystal-clear, high-gloss finish with low bubble formation, suited to deep pours up to 30 mm and fine detail work where optical clarity matters. Supplied in 20 kg packs, with a minimum order quantity of 100 kg, its medium viscosity gives good self-levelling in flat pours while still holding fine detail in decor items and jewellery moulds.",
    usageNote:
      'Epoxy Clear Casting Resin is mixed 1:1 with a compatible <a href="/products/epoxy-hardener/">epoxy hardener</a> before pouring. For a self-levelling grade formulated specifically for floor art and table-top work, see our <a href="/products/epoxy-art-resin/">Epoxy Art Resin</a>; for fast UV-curing craft work rather than a 24-hour cast, our <a href="/products/uv-resin/">UV Resin</a> may be more suitable.',
    features: [
      "Crystal clear, high-gloss finish",
      "1:1 mix ratio, 24-hour cure",
      "Low bubble formation, max casting depth 30 mm",
      "Medium viscosity for good self-levelling and detail retention",
      "Minimum order 100 kg",
    ],
    applications: [
      "River tables and flooring",
      "Jewellery making and decorative items",
      "Artwork and industrial casting",
      "Decor items and detailed mould casting",
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
        a: "Epoxy Clear Casting Resin is a premium two-part epoxy system formulated for casting, river tables, jewellery and decorative artwork, curing to a crystal-clear, high-gloss finish.",
      },
      {
        q: "What is the mix ratio and cure time?",
        a: "It is mixed 1:1 and cures in around 24 hours.",
      },
      {
        q: "What is the maximum casting depth?",
        a: "Maximum casting depth is 30 mm per pour.",
      },
      {
        q: "Does it form bubbles during casting?",
        a: "It is formulated for low bubble formation, giving a clear, flawless finish suited to fine detail work.",
      },
      {
        q: "What is the difference between Epoxy Clear Casting Resin and Epoxy Art Resin?",
        a: 'Epoxy Clear Casting Resin is a medium-viscosity 1:1 system suited to deep pours up to 30 mm. Our <a href="/products/epoxy-art-resin/">Epoxy Art Resin</a> is a self-levelling 2:1 system tuned specifically for floor art and table-top finishes. Choose based on your pour depth and finish requirement.',
      },
      {
        q: "What packaging and minimum order quantity does it come in?",
        a: "It is supplied in 20 kg packs, with a minimum order quantity of 100 kg.",
      },
      {
        q: "How is Epoxy Clear Casting Resin used?",
        a: 'It is mixed 1:1 with a compatible <a href="/products/epoxy-hardener/">epoxy hardener</a> and poured into the mould, where it self-levels and cures over approximately 24 hours.',
      },
    ],
    relatedSlugs: [
      "epoxy-art-resin",
      "epoxy-hardener",
      "uv-resin",
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
        a: 'Epoxy Art Resin is a 2:1, self-levelling system tuned for floor art and table-top surfaces. Our <a href="/products/epoxy-clear-casting-resin/">Epoxy Clear Casting Resin</a> is a 1:1 system suited to deeper pours up to 30 mm. Choose based on whether you need a self-levelling surface coat or a deeper cast.',
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
      "Mixing Ratio (Resin:Hardener)": "1:2",
      "Viscosity": "Low",
      "Full Cure Time": "24 hours",
    },
    tagline: "Polyamide hardener for a super-gloss epoxy cure.",
    description:
      "A premium-quality polyamide curing agent formulated to provide excellent curing performance when used with compatible epoxy resins. Mixed 1:2 (resin:hardener) and fully curing in around 24 hours, it delivers superior bonding strength, outstanding mechanical properties and excellent chemical and moisture resistance. It is solvent-free and low-yellowing, keeping cured epoxy work clear and glossy over time, and is supplied in 20 kg packs with a minimum order quantity of 100 kg for art, casting and industrial epoxy applications.",
    usageNote:
      'Epoxy Hardener is mixed 1:2 with a compatible epoxy resin such as our <a href="/products/epoxy-clear-casting-resin/">Epoxy Clear Casting Resin</a> or <a href="/products/epoxy-art-resin/">Epoxy Art Resin</a>. For fast UV/LED-curing craft work instead of a 24-hour room-temperature cure, see our <a href="/products/uv-resin/">UV Resin</a>.',
    features: [
      "Polyamide hardener, clear/transparent",
      "1:2 mix ratio (resin:hardener), 24-hour full cure",
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
        a: "It is mixed 1:2 (resin:hardener) and fully cures in around 24 hours.",
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
    name: "PET Resin",
    category: "Industrial & Specialty Resins",
    price: "₹115 / kg",
    image: "pet-resin.jpg",
    images: ["pet-resin-2.jpg"],
    tdsUrl: "/tds/pet-resin-tds.pdf",
    seo: {
      title: "PET Resin – Sheet-Grade Polyester Resin",
      description:
        "PET Resin — a sheet-grade polyethylene terephthalate resin for beverage bottles, pharmaceutical packaging and food-grade containers. Bulk supply.",
      keywords: [
        "PET Resin",
        "Polyethylene Terephthalate Resin",
        "Sheet Grade PET Resin",
        "PET Packaging Resin",
        "Bottle Grade PET Resin",
      ],
    },
    // Reorganised into productDetails/techSpecs — every value is unchanged
    // from the original single `specs` table, just regrouped. "Usage /
    // Application" is not repeated in the table since it's already covered
    // by the applications list below. No new values invented.
    productDetails: {
      "Minimum Order Quantity": "1000 kg",
      "Packaging Size": "75 kg",
      "Colour / Appearance": "Pale Yellow",
      "Country of Origin": "India",
    },
    techSpecs: {
      "IV Value": "0.90 dl/g",
      "Grade": "Sheet Grade",
      "Physical Form": "Liquid",
      "End Use Process": "Fibre Sheets",
    },
    tagline: "Sheet-grade PET resin for packaging and containers.",
    description:
      "A premium-quality polyethylene terephthalate (PET) resin designed for manufacturing high-performance plastic packaging and industrial containers. With an IV value of 0.90 dl/g and pale-yellow colour, it provides clarity, mechanical strength, impact resistance and dimensional stability with excellent processability for injection stretch blow moulding and fibre sheet manufacturing. Manufactured in India and supplied in 75 kg packs, with a minimum order quantity of 1,000 kg, it is a sheet-grade resin suited to beverage, pharmaceutical, cosmetic and food-grade packaging manufacturers.",
    features: [
      "IV value 0.90 dl/g, sheet grade",
      "Exceptional transparency and low moisture absorption",
      "Durable and recyclable",
      "Good processability for injection stretch blow moulding and fibre sheet manufacturing",
      "Supplied in 75 kg packs, minimum order 1000 kg",
    ],
    applications: [
      "Beverage, mineral water and edible-oil bottles",
      "Pharmaceutical and cosmetic packaging",
      "Food-grade containers and jars",
      "Fibre and sheet manufacturing",
    ],
    industries: [
      "Packaging & bottling industry",
      "Pharmaceutical & cosmetic packaging",
      "Food & beverage industry",
      "Fibre & sheet manufacturing",
    ],
    whyChoose: [
      "ISO 9001:2015 certified quality management system",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Consistent IV value of 0.90 dl/g for reliable processability",
      "Supplied in 75 kg packs, minimum order 1,000 kg",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
    ],
    faqs: [
      {
        q: "What is PET Resin?",
        a: "PET Resin is a sheet-grade polyethylene terephthalate resin used for manufacturing plastic packaging, bottles and industrial containers.",
      },
      {
        q: "What is the IV value of PET Resin, and why does it matter?",
        a: "IV (intrinsic viscosity) value is 0.90 dl/g. A consistent IV value gives predictable processability and mechanical performance during stretch blow moulding and sheet manufacturing.",
      },
      {
        q: "What grade is this PET Resin?",
        a: "It is a sheet grade, suited to fibre and sheet manufacturing as well as bottle and container applications.",
      },
      {
        q: "What applications is PET Resin suited for?",
        a: "It is used for beverage, mineral water and edible-oil bottles, pharmaceutical and cosmetic packaging, food-grade containers and jars, and fibre/sheet manufacturing.",
      },
      {
        q: "Is PET Resin recyclable?",
        a: "Yes. It is durable and recyclable, consistent with standard PET packaging recycling streams.",
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
    tdsUrl: "/tds/vinyl-ester-resin-tds.pdf",
    seo: {
      title: "Vinyl Ester Resin – Chemical-Resistant Resin",
      description:
        "Vinyl Ester Resin — a high-performance resin for chemical storage tanks, pipelines and cooling towers, resisting acids, alkalis and solvents.",
      keywords: [
        "Vinyl Ester Resin",
        "Chemical Resistant Resin",
        "Corrosion Resistant Resin",
        "FRP Tank Resin",
        "Industrial Resin Manufacturer",
      ],
    },
    // No productDetails/techSpecs table yet — unlike the other GP-family
    // pages, no verified numeric spec sheet (viscosity, gel time, packaging,
    // MOQ, purity, etc.) has been supplied for this grade. Per standing
    // instruction, values are never invented to fill the table; this section
    // will be added once a finalized TDS is provided for Vinyl Ester Resin.
    tagline: "High-performance resin for chemical and corrosion resistance.",
    description:
      "A high-performance resin engineered for demanding industrial applications requiring exceptional chemical resistance, corrosion protection and mechanical strength. It offers excellent adhesion, superior toughness, thermal stability and resistance to water, acids, alkalis and solvents, with low shrinkage on cure — properties that go beyond what a standard orthophthalic general-purpose resin can offer in aggressive chemical environments. Samrat Poly Resins supplies Vinyl Ester Resin for FRP fabricators building tanks, pipelines and structures that must withstand sustained chemical or corrosive exposure.",
    usageNote:
      'Vinyl Ester Resin is catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and reinforced with <a href="/products/fibre-glass-mat/">glass fibre</a>, in the same way as our general-purpose grades. Where chemical resistance beyond ordinary orthophthalic performance is not required, our <a href="/products/gp-clear-resin/">GP Clear Resin</a> is more cost-effective for general FRP work.',
    features: [
      "Exceptional chemical and corrosion resistance",
      "Superior toughness and thermal stability",
      "Resists water, acids, alkalis and solvents",
      "Excellent adhesion to fibreglass reinforcement",
      "Low shrinkage on cure",
    ],
    applications: [
      "FRP tanks and chemical storage vessels",
      "Pipelines, ducts and scrubbers",
      "Cooling towers, pressure vessels and offshore structures",
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
        a: "Vinyl Ester Resin is a high-performance resin engineered for demanding industrial applications that require exceptional chemical resistance, corrosion protection and mechanical strength, beyond what a standard orthophthalic resin offers.",
      },
      {
        q: "What is the difference between Vinyl Ester Resin and GP Clear Resin?",
        a: 'Vinyl Ester Resin is formulated specifically for superior chemical, corrosion and thermal resistance in aggressive environments. Our <a href="/products/gp-clear-resin/">GP Clear Resin</a> is a general-purpose orthophthalic resin for everyday FRP work at a lower cost, without the same chemical-resistance profile.',
      },
      {
        q: "What chemicals does Vinyl Ester Resin resist?",
        a: "It resists water, acids, alkalis and solvents, making it suitable for chemical storage tanks, pipelines and scrubbers.",
      },
      {
        q: "Does Vinyl Ester Resin shrink on cure?",
        a: "It is formulated for low shrinkage on cure, supporting dimensional stability in tanks and structural parts.",
      },
      {
        q: "How is Vinyl Ester Resin cured?",
        a: 'It is catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> in the same way as our general-purpose polyester grades.',
      },
      {
        q: "What applications is Vinyl Ester Resin used for?",
        a: "It is used for FRP tanks and chemical storage vessels, pipelines, ducts and scrubbers, and cooling towers, pressure vessels and offshore structures.",
      },
    ],
    relatedSlugs: [
      "gp-clear-resin",
      "mekp-hardener",
      "fibre-glass-mat",
      "fiberglass-epoxy-resin",
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
      title: "MEKP Hardener – Polyester Resin Catalyst",
      description:
        "MEKP Hardener (Methyl Ethyl Ketone Peroxide) — the standard catalyst for curing polyester and vinyl ester resins and gelcoats. Enquire for bulk supply.",
      keywords: [
        "MEKP Hardener",
        "MEKP Catalyst",
        "Polyester Resin Catalyst",
        "Resin Curing Agent",
        "Gelcoat Catalyst",
      ],
    },
    // No productDetails/techSpecs table yet — no verified dosage rate,
    // packaging size or MOQ has been supplied as this product's own spec
    // sheet (other product pages state their own recommended MEKP dosage as
    // part of *their* verified specs, but that is not the same as a verified
    // spec sheet for this hardener itself). Per standing instruction, values
    // are never invented to fill the table; this section will be added once
    // a finalized TDS is provided for MEKP Hardener.
    tagline: "The catalyst that kicks off resin curing.",
    description:
      "Methyl Ethyl Ketone Peroxide (MEKP) is the catalyst used to initiate curing in unsaturated polyester resins, vinyl ester resins and gelcoats. Essential across composite applications such as FRP products, boat building, automotive parts and laminates, it decomposes on mixing to generate free radicals that start polymerisation — an exothermic reaction that hardens the resin. Used alongside a cobalt octoate accelerator in most polyester and gelcoat systems, dosage is adjusted to suit the resin grade, ambient workshop temperature and the gel time required, as specified on each resin's own technical data sheet. Samrat Poly Resins supplies MEKP Hardener as the standard catalyst paired with its polyester, vinyl ester and gelcoat resin ranges.",
    usageNote:
      'MEKP Hardener is used to catalyse general-purpose resins such as <a href="/products/gp-clear-resin/">GP Clear Resin</a> and <a href="/products/gp-gelcoat-resin/">GP Gelcoat Resin</a>, chemical-resistant <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a>, and reinforcement such as <a href="/products/fibre-glass-mat/">glass fibre</a> laminates. Dosage should follow the specific resin\'s own technical data sheet.',
    features: [
      "Initiates curing of polyester and vinyl ester resins",
      "Generates free radicals for polymerisation",
      "Essential for gelcoats and laminates",
      "Standard catalyst for room-temperature cure",
      "Paired with a cobalt octoate accelerator in most polyester systems",
      "Dosage adjustable to suit resin grade and workshop conditions",
    ],
    applications: [
      "Curing FRP products and laminates",
      "Boat building and automotive parts",
      "Gelcoat and casting work",
      "Curing vinyl ester resin for chemical-resistant tanks and pipelines",
    ],
    industries: [
      "FRP & composites manufacturing",
      "Boat & marine building",
      "Automotive parts manufacturing",
      "Gelcoat & casting work",
    ],
    whyChoose: [
      "ISO 9001:2015 certified quality management system",
      "Manufacturing polyester resins since 2017",
      "GST-registered Indian manufacturer (GSTIN 03ALBPS3446G1ZB)",
      "Reliable, consistent-quality catalyst for room-temperature cure",
      "Compatible with polyester and vinyl ester resins, and gelcoats",
      "Dispatch across North & East India, with exports to Nepal and Bangladesh",
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
        q: "How does MEKP Hardener work?",
        a: "It decomposes on mixing to generate free radicals that start polymerisation — an exothermic reaction that hardens the resin from a liquid into a rigid, cured solid.",
      },
      {
        q: "Does MEKP Hardener cure resin at room temperature?",
        a: "Yes. It is the standard catalyst for room-temperature cure, typically used alongside a cobalt octoate accelerator.",
      },
      {
        q: "What dosage of MEKP Hardener should I use?",
        a: "Dosage varies by resin system, ambient workshop temperature and the gel time required — always follow the specific resin's own technical data sheet.",
      },
      {
        q: "Is MEKP Hardener used with gelcoats?",
        a: "Yes. It is essential for curing gelcoats as well as general-purpose and structural laminating resins.",
      },
      {
        q: "What applications use MEKP Hardener?",
        a: "It is used for curing FRP products and laminates, boat building and automotive parts, gelcoat and casting work, and vinyl ester resin for chemical-resistant tanks and pipelines.",
      },
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
      "GP Yellow Resin — transparent yellow, general-purpose orthophthalic unsaturated polyester resin by Samrat Poly Resins",
    tdsUrl: "/tds/gp-yellow-resin-tds.pdf",
    seo: {
      title: "GP Yellow Resin – General Purpose Yellow Polyester Resin",
      description:
        "GP Yellow Resin — a transparent yellow, general-purpose orthophthalic polyester resin for FRP roofing sheets, tanks, doors and lamination. 225 kg drums, MOQ 1,000 kg.",
      keywords: [
        "GP Yellow Resin",
        "Yellow Polyester Resin",
        "General Purpose Yellow Resin",
        "Yellow FRP Resin",
        "Pigmented Polyester Resin",
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
    tagline: "Transparent yellow, general-purpose orthophthalic polyester resin.",
    description:
      "GP Yellow Resin is a transparent yellow, orthophthalic unsaturated polyester resin developed by Samrat Poly Resins for general-purpose FRP manufacturing. Supplied as a non-accelerated liquid with a viscosity of 450–600 cPs and a gel time of 10–15 minutes, it offers excellent wet-out of reinforcement for a smooth, well-bonded laminate and good mechanical strength once cured. Cured at room temperature with an MEKP catalyst and cobalt octoate accelerator, it processes cleanly by hand layup or spray-up. With 34–38% styrene content, 1.10–1.14 g/cm³ density and 99% purity, it delivers consistent, cost-effective performance across roofing sheets, water tanks, FRP doors and panels, and general lamination work.",
    usageNote:
      'GP Yellow Resin is catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt accelerator, then reinforced with <a href="/products/fibre-glass-mat/">glass fibre</a> for hand layup and spray-up. Where a factory-pigmented grade tuned specifically for sheet and panel production is needed instead, see our <a href="/products/sheet-grade-yellow-resin/">Sheet Grade Yellow Resin</a>; for an unpigmented general-purpose grade, our <a href="/products/gp-clear-resin/">GP Clear Resin</a> is available, and mould-facing surfaces can be finished with a <a href="/products/gp-gelcoat-resin/">Gelcoat Resin</a>.',
    features: [
      "Transparent yellow orthophthalic base for general-purpose FRP work",
      "Excellent wet-out for smooth fibre impregnation and lamination",
      "Good mechanical strength for durable, long-lasting FRP components",
      "Gel time of 10–15 minutes with an MEKP and cobalt octoate cure system",
      "34–38% styrene content and 99% purity for consistent processing",
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
        a: "GP Yellow Resin is a transparent yellow, orthophthalic unsaturated polyester resin used for general-purpose FRP manufacturing — including roofing sheets, water tanks, doors, panels and lamination. It is supplied by Samrat Poly Resins as a non-accelerated liquid in 225 kg drums.",
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
      "mekp-hardener",
    ],
  },
];
