// ============================================================================
//  APPLICATION LANDING PAGES — application-based SEO, one page per use case
// ============================================================================
//
//  Each entry powers two things:
//    1. An "Explore applications" card on whichever product page(s) list its
//       slug in `applicationSlugs` (see products.js) — uses cardImage /
//       cardDescription / cardBenefit / relatedProductSlugs / title. The
//       recommended-product label on the card is the parent product itself
//       (rendered from the product page, not duplicated here).
//    2. A dedicated page at /applications/{slug}/ — but ONLY once `draft` is
//       absent/false AND the full content fields below are filled in.
//
//  All 11 applications now have full page content and are live. Any future
//  application added here should start with `draft: true` (mirroring
//  resources.js) until its full content is written — getStaticPaths filters
//  draft entries out, and the product-page cards link drafts back to the
//  parent product instead of a dead /applications/ URL (see products/[slug].astro).
//
//  cardImage points at a filename in src/assets/applications/ — only set
//  where a real photo already exists there; entries without one fall back
//  to a styled placeholder panel on the card (see .app-card-img-fallback).
//
//  Every fact below is grounded in GP Clear Resin's own already-published
//  spec sheet (350–450 cPs, gel time <8 min, non-accelerated MEKP + cobalt
//  octoate cure, 33–40% styrene, 99% purity, 225 kg drums) — nothing new is
//  invented here, only its existing, verified properties applied to each
//  named use case.
// ============================================================================

export const applications = [
  {
    slug: "resin-for-water-tank-manufacturing",
    title: "Resin for Water Tank Manufacturing",
    cardImage: "frp-water-tanks.jpg",
    cardImageAlt: "Sectional FRP water storage tank built from glass-fibre-reinforced polyester panels",
    cardDescription: "Water tank manufacturers need a resin that wets out glass reinforcement cleanly and cures into a strong, leak-resistant laminate for long-term structural integrity.",
    cardBenefit: "Consistent wall thickness, no weak spots.",
    seo: {
      title: "Resin for Water Tank Manufacturing",
      description: "How GP Clear Resin is used in FRP water tank manufacturing — required resin properties, the lay-up process, and why it suits sectional and cylindrical tanks.",
      keywords: ["Resin for Water Tanks", "FRP Water Tank Resin", "Water Tank Manufacturing Resin", "Polyester Resin for Tanks"],
    },
    intro: "FRP (fibreglass-reinforced plastic) water tanks are widely used across residential, commercial and industrial sites because they resist corrosion, weigh far less than concrete or steel equivalents, and can be fabricated in sectional panels or one-piece cylindrical shells to fit almost any site. None of that is possible without a resin system that wets out the glass reinforcement evenly and cures into a rigid, watertight laminate — which is exactly the role General Purpose (GP) polyester resin plays in tank fabrication.",
    whatTheyManufacture: "Water tank manufacturers produce sectional panel tanks (bolted together on site from moulded FRP panels), one-piece cylindrical or rectangular tanks, underground and overhead storage tanks, and process tanks for industrial water storage. Capacities range from a few hundred litres for domestic use to hundreds of thousands of litres for institutional and industrial storage.",
    whySuitable: '<a href="/products/gp-clear-resin/">GP Clear Resin</a> is Samrat Poly Resins\' general-purpose orthophthalic unsaturated polyester resin — the same broad category of resin used across the FRP tank industry. Its clear, low-viscosity liquid form wets out chopped strand mat and woven roving quickly during hand lay-up, so laminators can build up tank walls in multiple passes without the resin dragging or leaving dry patches. Because it cures into a hard, chemically resistant laminate once catalysed, it forms the structural shell that gives an FRP tank its strength and its resistance to the water it holds.',
    requiredCharacteristics: [
      "Low viscosity for fast, even wet-out of glass reinforcement across large tank surfaces",
      "A workable gel time that gives fabricators time to lay up multiple reinforcement layers before the resin sets",
      "Good mechanical strength once cured, to withstand the hydrostatic pressure of a full tank",
      "Reliable, room-temperature cure so tanks can be fabricated without special curing equipment",
      "Consistent batch-to-batch quality, since tank walls are built up in several resin-and-reinforcement passes that all need to bond and cure alike",
    ],
    manufacturingProcess: 'Tank panels or shells are typically built by <a href="/applications/resin-for-hand-lay-up-process/">hand lay-up</a>: reinforcement (<a href="/products/fibre-glass-mat/">chopped strand mat</a>, and often woven roving for added strength) is placed against the mould, and resin — catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and a cobalt octoate accelerator — is worked into the reinforcement by roller or brush. Multiple layers are built up to reach the specified wall thickness, with each layer wetted out before the next is added. Once the full laminate has gelled and cured at room temperature, the panel or shell is released from the mould, trimmed, and — for sectional tanks — bolted together with the other panels on site to form the complete tank.',
    advantages: [
      "Fast gel time (under 8 minutes) keeps production cycles efficient without sacrificing lay-up time",
      "Non-accelerated cure system lets fabricators adjust MEKP and cobalt octoate dosage to suit workshop temperature and batch size",
      "225 kg drum packaging suits continuous production runs for tank manufacturers working at volume",
      "Consistent 99% purity and controlled viscosity reduce the risk of dry patches or resin-rich areas that weaken a tank wall",
    ],
    commonProducts: [
      "Sectional panel water tanks",
      "One-piece cylindrical and rectangular storage tanks",
      "Underground and overhead water tanks",
      "Industrial process water and raw-water storage tanks",
    ],
    faqs: [
      {
        q: "Is GP Clear Resin suitable for potable (drinking) water tanks?",
        a: "GP Clear Resin is a general-purpose orthophthalic resin suited to the structural laminate of FRP tanks. For tanks intended to hold potable water, always confirm the complete tank construction — including any food-grade gelcoat or lining used on the water-contact surface — meets the relevant drinking-water standards for your project.",
      },
      {
        q: "What reinforcement is used with GP Clear Resin for tank walls?",
        a: "Tank walls are typically built up with chopped strand mat, often combined with woven roving for additional strength in larger tanks. Samrat Poly Resins supplies E-glass chopped strand mat reinforcement alongside its resin range.",
      },
      {
        q: "How is GP Clear Resin catalysed for tank fabrication?",
        a: "It is cured at room temperature with an MEKP catalyst and a cobalt octoate accelerator, the same non-accelerated system used across Samrat Poly Resins' general-purpose grades. Dosage is adjusted to suit workshop temperature and the gel time required for a given panel size.",
      },
      {
        q: "Can GP Clear Resin be used for chemical storage tanks as well as water tanks?",
        a: "GP Clear Resin is formulated for general-purpose FRP work, including standard water storage. For tanks holding aggressive chemicals or requiring higher corrosion resistance, a vinyl ester resin system is generally the more suitable choice.",
      },
      {
        q: "What size tanks can be built with GP Clear Resin?",
        a: "It is used across the size range typical of FRP tank fabrication, from small domestic sectional tanks through to large industrial storage tanks — wall thickness and reinforcement layers are adjusted by the fabricator to suit the required capacity and structural load.",
      },
    ],
    relatedProductSlugs: ["mekp-hardener", "fibre-glass-mat"],
    ctaHeading: "Need resin for your water tank production?",
    ctaText: "Get a bulk quote or talk to our technical team about the right grade and dosage for your tank fabrication line.",
  },

  {
    slug: "resin-for-cooling-tower-manufacturing",
    title: "Resin for Cooling Tower Manufacturing",
    cardImage: "cooling-towers.jpg",
    cardImageAlt: "Industrial FRP cooling tower with moulded casing panels",
    cardDescription: "Cooling tower components face constant moisture and temperature cycling, demanding a laminate with lasting mechanical strength and chemical resistance.",
    cardBenefit: "Built to withstand continuous wet/dry cycling.",
    seo: {
      title: "Resin for Cooling Tower Manufacturing",
      description: "Why FRP cooling tower manufacturers choose GP Clear Resin — required laminate properties, panel fabrication, and when a chemical-resistant upgrade makes sense.",
      keywords: ["Resin for Cooling Towers", "FRP Cooling Tower Resin", "Cooling Tower Manufacturing Resin", "Industrial Cooling Tower Resin"],
    },
    intro: "Industrial cooling towers run around the clock, circulating warm water across a structure that never really dries out. Steel corrodes under that kind of exposure and timber eventually rots, which is why most cooling tower manufacturers in India build the casing, louvers and internal structure from FRP instead — it shrugs off the constant moisture, needs almost no maintenance coating, and holds its shape through years of thermal cycling. Getting that outcome depends on starting with a resin laminate that cures into a consistent, structurally sound shell.",
    whatTheyManufacture: "Cooling tower fabricators build the casing panels and shell sections that enclose the tower, along with louvers, air inlet screens, the cold water collection basin, internal partition walls, fan cylinders/stacks, and structural components such as ladders and handrails. Towers range from small packaged units serving a single chiller plant to large induced-draft towers built for power stations, refineries and process industries.",
    whySuitable: 'FRP cooling tower components are built the same way as most general-purpose FRP laminates — layers of glass reinforcement wetted out with resin and cured at room temperature — so the resin needs to behave predictably across large, often flat or gently curved panels. <a href="/products/gp-clear-resin/">GP Clear Resin</a>\'s 350–450 cPs viscosity wets out reinforcement evenly over these panel areas without pooling, and its non-accelerated cure gives fabricators control over gel timing when several panels are being laminated in the same shift. Where the circulating water is dosed with aggressive biocides or scale inhibitors, some fabricators step up to a <a href="/products/vinyl-ester-resin/">vinyl ester resin</a> for extra chemical resistance — but for standard treated cooling water, GP Clear Resin\'s cured laminate holds up well within its intended service life.',
    requiredCharacteristics: [
      "Even wet-out over large, often flat panel surfaces without dry patches",
      "A gel time that stays workable across a full production shift of panel lamination",
      "Cured mechanical strength sufficient for structural casing panels and internal partitions",
      "Stable performance under continuous moisture exposure and moderate warm-water temperatures",
      "Batch-to-batch consistency so panel thickness and strength don't vary across a large tower's casing",
    ],
    manufacturingProcess: 'Casing panels and structural sections are laminated by <a href="/applications/resin-for-hand-lay-up-process/">hand lay-up</a> over flat or gently profiled moulds: <a href="/products/fibre-glass-mat/">chopped strand mat</a> is placed and wet out with resin catalysed by an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator, with additional layers and ribbing built up where panels need extra stiffness. Louvers and smaller components are often laminated in dedicated moulds for consistent profiles. Once cured at room temperature, panels are trimmed, drilled for assembly, and bolted or bonded together on site to form the complete tower structure.',
    advantages: [
      "Fast gel time (under 8 minutes) supports efficient panel-by-panel production without long waits between lay-up passes",
      "Non-accelerated system lets fabricators tune MEKP and cobalt octoate dosage to match workshop temperature across a production run",
      "225 kg drum packaging suits the continuous resin consumption of large-panel cooling tower manufacturing",
      "Consistent 99% purity reduces the risk of resin-rich or resin-starved zones that could weaken a structural panel",
    ],
    commonProducts: [
      "FRP cooling tower casing and shell panels",
      "Louvers and air inlet screens",
      "Cold water collection basins",
      "Internal partition walls and fan cylinders/stacks",
      "Structural ladders and handrails",
    ],
    faqs: [
      {
        q: "Is GP Clear Resin suitable for the internal wet-deck areas of a cooling tower?",
        a: "GP Clear Resin is commonly used for casing panels, louvers and structural components. For internal areas exposed to continuous circulating water with water-treatment chemicals, check the specific chemical dosing against the resin's resistance — a vinyl ester resin is often preferred for the most aggressive wet-deck environments.",
      },
      {
        q: "What reinforcement is used for cooling tower panels?",
        a: "Panels are typically laminated with E-glass chopped strand mat, with additional layers added at ribs and edges for stiffness. Samrat Poly Resins supplies chopped strand mat reinforcement alongside its resin range.",
      },
      {
        q: "Can GP Clear Resin handle the warm water temperatures inside a cooling tower?",
        a: "Yes, for standard cooling tower operating temperatures. Its cured laminate is stable under continuous moisture and moderate warm-water exposure typical of induced-draft and packaged cooling towers.",
      },
      {
        q: "How is GP Clear Resin catalysed for cooling tower panel production?",
        a: "It is cured at room temperature with an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (around 0.4%), the same non-accelerated system used across Samrat Poly Resins' general-purpose grades — dosage is adjusted to suit the pace of panel production.",
      },
      {
        q: "What size cooling towers can be built with GP Clear Resin panels?",
        a: "It suits the panel sizes typical of both packaged and field-erected cooling towers — fabricators adjust laminate thickness and reinforcement layers to match the structural loads of the specific tower design.",
      },
    ],
    relatedProductSlugs: ["mekp-hardener", "fibre-glass-mat"],
    ctaHeading: "Need resin for your cooling tower production?",
    ctaText: "Get a bulk quote or talk to our technical team about the right grade and dosage for your panel fabrication line.",
  },
  {
    slug: "resin-for-roofing-sheet-manufacturing",
    title: "Resin for Roofing Sheet Manufacturing",
    cardImage: "frp-roofing-sheets.jpg",
    cardImageAlt: "Translucent corrugated FRP roofing sheets fitted over an industrial building frame",
    cardDescription: "Roofing and cladding sheet manufacturers need even lamination across large panel areas, without pooling or dry patches that weaken the sheet.",
    cardBenefit: "Even lamination across large sheet formats.",
    seo: {
      title: "Resin for Roofing Sheet Manufacturing",
      description: "How GP Clear Resin supports corrugated and flat FRP roofing sheet manufacturing, plus when a translucent roof-light grade is the better fit.",
      keywords: ["Resin for Roofing Sheets", "FRP Roofing Sheet Resin", "Corrugated FRP Sheet Resin", "Roofing Sheet Lamination Resin"],
    },
    intro: "Corrugated FRP roofing and cladding sheets cover everything from factory sheds and warehouses to poultry farms and rural housing, prized for being lighter than metal roofing, resistant to rust, and far cheaper to install than a fully engineered structure. Behind every one of those sheets is a continuous or semi-continuous lamination process where resin has to wet out reinforcement evenly across a long, narrow sheet run without leaving the thin spots or dry patches that show up as cracks a few months later.",
    whatTheyManufacture: "Roofing sheet manufacturers produce corrugated and flat FRP sheets in standard profiles for industrial roofing, cladding and daylighting panels, along with ridge caps, flashing pieces and ancillary fittings used to complete a roof installation. Sheet widths and corrugation profiles are typically standardised to match common steel roofing profiles so FRP sheets can be installed alongside them.",
    whySuitable: 'Roofing sheets are laminated in thin, wide sections, which makes wet-out speed and consistency more important than in thicker structural laminates — any dry patch shows up immediately as a weak point once the sheet is under roof load or wind uplift. <a href="/products/gp-clear-resin/">GP Clear Resin</a>\'s low 350–450 cPs viscosity spreads evenly across wide sheet moulds, and its sub-8-minute gel time keeps a continuous production line moving without long waits between sheets. Where the sheet needs to stay translucent for daylighting rather than opaque, Samrat Poly Resins\' dedicated <a href="/products/roof-light-resin/">Roof Light Sheet Grade Resin</a> is the more purpose-built choice — GP Clear Resin is the right fit for standard opaque roofing and cladding sheet runs.',
    requiredCharacteristics: [
      "Low viscosity for fast, even spread across wide, thin sheet moulds",
      "Fast, consistent gel time to keep a continuous or semi-continuous production line moving",
      "Reliable room-temperature cure so sheets can be demoulded on a predictable schedule",
      "Adequate flexural strength for a thin laminate that will carry roof loads and wind uplift",
      "Batch consistency so sheet thickness and strength don't drift across a long production run",
    ],
    manufacturingProcess: 'Roofing sheets are typically laminated over a corrugated mould bed: <a href="/products/fibre-glass-mat/">chopped strand mat</a> is laid into the corrugation profile and wet out with resin catalysed by an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator, worked through with a roller to remove air and achieve even thickness across every corrugation. Sheets cure at room temperature, often under a cover sheet to control surface finish, before being trimmed to length and stacked. High-volume producers run this as a semi-continuous line; smaller fabricators laminate sheet by sheet on fixed moulds.',
    advantages: [
      "Sub-8-minute gel time keeps sheet-by-sheet or continuous production moving efficiently",
      "Low viscosity reduces the labour needed to work resin evenly across wide corrugated moulds",
      "Non-accelerated cure lets fabricators adjust dosage for ambient workshop temperature through the day",
      "225 kg drums suit the steady resin consumption of ongoing sheet production runs",
    ],
    commonProducts: [
      "Corrugated FRP roofing sheets",
      "Flat FRP cladding panels",
      "Ridge caps and flashing accessories",
      "Industrial shed and warehouse roofing systems",
    ],
    faqs: [
      {
        q: "Should I use GP Clear Resin or Roof Light Resin for roofing sheets?",
        a: "GP Clear Resin suits standard opaque roofing and cladding sheets. If the sheet needs to transmit daylight — a common requirement for translucent roof-light panels — Samrat Poly Resins' dedicated Roof Light Sheet Grade Resin is formulated specifically for that clarity requirement.",
      },
      {
        q: "What reinforcement is used for FRP roofing sheets?",
        a: "Roofing sheets are typically laminated with E-glass chopped strand mat, laid into the corrugation profile before resin is applied and worked through with a roller.",
      },
      {
        q: "How thick are typical FRP roofing sheets, and how does that affect resin choice?",
        a: "Roofing sheets are generally thin laminates, which is why a low-viscosity, fast-wetting resin like GP Clear Resin matters — there's less margin for dry patches than in a thicker structural laminate.",
      },
      {
        q: "How is GP Clear Resin catalysed for sheet production?",
        a: "It is cured at room temperature with an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (around 0.4%), with dosage adjusted to suit ambient temperature and the pace of the production line.",
      },
      {
        q: "Can GP Clear Resin be pigmented for coloured roofing sheets?",
        a: "Yes. FRP Polyester Pigment can be blended into GP Clear Resin before catalysing to produce coloured sheets, in addition to the standard clear or natural finish.",
      },
    ],
    relatedProductSlugs: ["mekp-hardener", "fibre-glass-mat", "frp-polyester-pigment", "roof-light-resin"],
    ctaHeading: "Need resin for your roofing sheet production?",
    ctaText: "Get a bulk quote or talk to our technical team about the right grade and dosage for your sheet lamination line.",
  },
  {
    slug: "resin-for-frp-door-manufacturing",
    title: "Resin for FRP Door Manufacturing",
    cardImage: "frp-door.jpg",
    cardImageAlt: "FRP double door with moulded panel design and decorative metal grille",
    cardDescription: "FRP doors need a laminate that bonds well to the door-skin substrate and holds its shape and strength through years of daily use.",
    cardBenefit: "Dimensionally stable, long service life.",
    seo: {
      title: "Resin for FRP Door Manufacturing",
      description: "How GP Clear Resin is used to bond and reinforce FRP door frames and shutters, and when to step up to a lamination-specific resin grade.",
      keywords: ["Resin for FRP Doors", "FRP Door Manufacturing Resin", "FRP Door Frame Resin", "Polyester Resin for Doors"],
    },
    intro: "FRP doors have largely replaced timber in bathrooms, utility areas and exterior applications where moisture would eventually warp or rot a wooden frame. The door itself is usually a sandwich construction — a core material faced with moulded door skins — bonded and reinforced with a polyester resin system that has to hold that assembly together permanently, through repeated opening, closing, humidity and temperature swings for the life of the door.",
    whatTheyManufacture: "FRP door manufacturers produce complete door shutters, door frames, and the reinforcement laminate that bonds the door skin to its core structure. Products range from bathroom and utility doors to exterior-rated doors for residential and light commercial use, often finished with moulded panel designs replicating traditional timber door styles.",
    whySuitable: '<a href="/products/gp-clear-resin/">GP Clear Resin</a> is used in FRP door manufacturing wherever a general-purpose laminate is needed to bond reinforcement to the door\'s core and frame — its 350–450 cPs viscosity wets out glass reinforcement cleanly against the door-skin substrate, and once cured it holds its shape and dimensional stability through years of daily use, which matters for a door that has to keep closing flush against its frame. For manufacturers running high volumes of door lamination specifically, Samrat Poly Resins\' <a href="/products/lamination-resin/">Lamination Resin (LR Resin)</a> is tuned more precisely for that exact bonding job — GP Clear Resin remains the right choice for general FRP door fabrication and frame reinforcement.',
    requiredCharacteristics: [
      "Strong adhesion to door-skin substrates and core materials",
      "Cured dimensional stability so the door doesn't warp or bind in its frame over time",
      "Good mechanical strength to handle repeated opening, closing and impact",
      "A workable gel time for laminating reinforcement into frame and edge sections",
      "Consistent cure quality across every door in a production batch",
    ],
    manufacturingProcess: 'Door shutters are typically assembled by bonding moulded door skins to a core material with resin, then reinforcing the frame and edge sections with <a href="/products/fibre-glass-mat/">glass fibre</a> laminate wet out with resin catalysed by an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator. The assembled door is clamped or pressed while the laminate cures at room temperature, then trimmed, drilled for hardware, and finished. Frames are laminated separately over dedicated moulds before final assembly.',
    advantages: [
      "Reliable adhesion keeps the door-skin-to-core bond intact through years of daily use",
      "Non-accelerated cure system gives fabricators control over working time during assembly and clamping",
      "225 kg drum packaging suits continuous door production runs",
      "Consistent 99% purity supports uniform bonding quality across every door in a batch",
    ],
    commonProducts: [
      "FRP bathroom and utility doors",
      "Exterior-rated FRP door shutters",
      "FRP door frames",
      "Moulded panel-design door skins bonded to core structures",
    ],
    faqs: [
      {
        q: "Should I use GP Clear Resin or Lamination Resin for door manufacturing?",
        a: "GP Clear Resin works well for general FRP door fabrication and frame reinforcement. If your production is high-volume and focused specifically on door-skin lamination, Samrat Poly Resins' Lamination Resin (LR Resin) is tuned more precisely for that bonding process.",
      },
      {
        q: "What reinforcement is used in FRP door frames?",
        a: "Door frames and edge sections are typically reinforced with E-glass chopped strand mat, wet out with catalysed resin during lamination.",
      },
      {
        q: "Will GP Clear Resin keep a door from warping over time?",
        a: "Once fully cured, GP Clear Resin forms a dimensionally stable laminate that helps the door hold its shape through humidity and temperature changes — proper cure time and correct catalyst dosage are both important to achieving this.",
      },
      {
        q: "How is GP Clear Resin catalysed for door manufacturing?",
        a: "It is cured at room temperature with an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (around 0.4%), adjusted to give enough working time for clamping and assembly before the laminate gels.",
      },
      {
        q: "Can GP Clear Resin be used for both interior and exterior-rated doors?",
        a: "It is suitable as a general-purpose laminating resin for both. Overall door performance also depends on the core material, door-skin quality and any protective coating applied, not the resin alone.",
      },
    ],
    relatedProductSlugs: ["mekp-hardener", "fibre-glass-mat"],
    ctaHeading: "Need resin for your FRP door production?",
    ctaText: "Get a bulk quote or talk to our technical team about the right grade and dosage for your door fabrication line.",
  },
  {
    slug: "resin-for-door-skin-manufacturing",
    title: "Resin for Door Skin Manufacturing",
    cardImage: "frp-door-skin.jpg",
    cardImageAlt: "Moulded metallic-finish door skin panel with decorative embossed design",
    cardDescription: "Door skin production calls for excellent wet-out and a clean, glass-like cured finish straight out of the mould.",
    cardBenefit: "Clean, high-gloss finish on every skin.",
    seo: {
      title: "Resin for Door Skin Manufacturing",
      description: "Why FRP door skin manufacturers need a resin with excellent wet-out and a clean cured finish, and how GP Clear Resin performs against that requirement.",
      keywords: ["Resin for Door Skins", "FRP Door Skin Resin", "Moulded Door Skin Resin", "Polyester Resin for Door Skins"],
    },
    intro: "A door skin is the moulded face panel that gives an FRP door its finished look — the raised panel design, wood-grain texture or flush profile that buyers actually see. Unlike a door frame or structural laminate, the skin is a cosmetic and functional surface at once: any dry patch, air bubble or uneven cure shows up immediately as a visible defect once the part comes out of the mould, which puts more weight on wet-out quality and surface finish than on almost any other FRP product.",
    whatTheyManufacture: "Door skin manufacturers produce moulded FRP panels in a range of profiles — flush, raised-panel, wood-grain-textured and custom designs — that are later bonded to a core material to form a complete door shutter, or sold directly to door assemblers. Skins are typically moulded as matched front-and-back pairs to standard door sizes.",
    whySuitable: 'Because the mould surface itself creates the finished look of a door skin, the resin against that surface needs to wet out reinforcement completely and release a clean, glass-like face with no dry spots or air entrapment. <a href="/products/gp-clear-resin/">GP Clear Resin</a>\'s clear, low-viscosity liquid form (350–450 cPs) flows into fine mould detail and wets out chopped strand mat thoroughly, supporting the smooth, high-clarity finish door skin moulding demands. Where a producer is running door-skin lamination at high volume as their core business, Samrat Poly Resins\' <a href="/products/lamination-resin/">Lamination Resin (LR Resin)</a> is formulated specifically for that bonding step — GP Clear Resin is well suited to the skin-moulding process itself and to general door-skin fabrication.',
    requiredCharacteristics: [
      "Excellent wet-out to eliminate dry patches on a highly visible moulded face",
      "Low viscosity to flow into fine mould detail — wood-grain texture, panel profiles and edges",
      "A clean, glass-like cured surface with minimal air entrapment",
      "Consistent gel time so every skin in a batch releases from the mould on schedule",
      "Reliable room-temperature cure for predictable production scheduling",
    ],
    manufacturingProcess: 'Door skins are moulded face-down in a profiled mould: a gelcoat or surface layer is often applied first for finish quality, followed by <a href="/products/fibre-glass-mat/">chopped strand mat</a> wet out with resin catalysed by an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator. The laminate is rolled to remove trapped air and ensure even thickness across the panel profile, then cured at room temperature before being released, trimmed to size, and paired for use in door assembly.',
    advantages: [
      "Low viscosity supports a clean, defect-free finish on highly visible moulded panels",
      "Fast gel time keeps mould turnaround efficient in high-volume skin production",
      "Non-accelerated cure lets fabricators fine-tune dosage for the finish quality each mould run needs",
      "Consistent 99% purity reduces surface defects across repeated production cycles",
    ],
    commonProducts: [
      "Flush-profile FRP door skins",
      "Raised-panel and wood-grain-textured door skins",
      "Matched front-and-back skin pairs for door assembly",
      "Custom-moulded decorative door faces",
    ],
    faqs: [
      {
        q: "Why does door skin moulding need a different resin approach than a structural laminate?",
        a: "The skin's moulded face is the visible, finished surface of the door, so wet-out quality and surface finish matter as much as mechanical strength — any dry patch or trapped air shows up directly on the panel.",
      },
      {
        q: "Is GP Clear Resin suitable for wood-grain-textured door skins?",
        a: "Yes. Its low viscosity helps it flow into fine mould texture and detail, supporting a clean release and accurate reproduction of the mould's grain or panel pattern.",
      },
      {
        q: "Should door skins be gelcoated before laminating with GP Clear Resin?",
        a: "Many producers apply a gelcoat or surface layer first for finish quality and colour, then laminate GP Clear Resin and reinforcement behind it — this is a common approach for a smooth, defect-free door skin.",
      },
      {
        q: "How is GP Clear Resin catalysed for door skin production?",
        a: "It is cured at room temperature with an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (around 0.4%), with dosage adjusted for the mould turnaround time each production run needs.",
      },
      {
        q: "What reinforcement is used behind a moulded door skin?",
        a: "E-glass chopped strand mat is the standard reinforcement, wet out with catalysed resin and rolled to remove air before the panel cures.",
      },
    ],
    relatedProductSlugs: ["mekp-hardener", "fibre-glass-mat"],
    ctaHeading: "Need resin for your door skin production?",
    ctaText: "Get a bulk quote or talk to our technical team about the right grade and dosage for your skin moulding line.",
  },
  {
    slug: "resin-for-frp-panel-manufacturing",
    title: "Resin for FRP Panel Manufacturing",
    cardImage: "frp-panel-sheets.jpg",
    cardImageAlt: "Stack of coloured textured FRP panel sheet samples",
    cardDescription: "General FRP panels — from partitions to enclosures — need a resin that processes predictably at volume, batch after batch.",
    cardBenefit: "Fast, predictable cure for volume production.",
    seo: {
      title: "Resin for FRP Panel Manufacturing",
      description: "How GP Clear Resin supports general-purpose FRP panel manufacturing — partitions, enclosures and cladding — with consistent, high-volume lamination.",
      keywords: ["Resin for FRP Panels", "FRP Panel Manufacturing Resin", "FRP Partition Panel Resin", "General Purpose Polyester Resin"],
    },
    intro: "FRP panels show up in more places than most people realise — toilet cubicle partitions, electrical enclosure covers, machine guarding, wall cladding, false ceiling panels and equipment housings all rely on flat or lightly profiled FRP sheet as a lightweight, corrosion-resistant alternative to metal or timber panelling. What ties this category together isn't one specific product but a shared manufacturing need: a general-purpose resin that laminates predictably, batch after batch, regardless of the exact panel it's going into.",
    whatTheyManufacture: "FRP panel manufacturers produce flat and lightly profiled sheet panels used as partitions, enclosure covers, cladding, machine guards, false ceiling panels and equipment housings. Unlike a single-purpose product line, panel fabricators often run varied panel sizes, thicknesses and finishes through the same production line to serve different customer specifications.",
    whySuitable: 'Running varied panel work through one production line means the resin itself needs to be the constant — the same viscosity, gel time and cure behaviour regardless of which panel is being laminated that day. <a href="/products/gp-clear-resin/">GP Clear Resin</a>\'s 350–450 cPs viscosity and sub-8-minute gel time give panel fabricators that predictability, wetting out reinforcement evenly whether the mould is a large partition sheet or a smaller enclosure cover. Its non-accelerated cure system means dosage can be adjusted panel to panel without switching resin grades, which keeps a mixed-panel production line simple to run.',
    requiredCharacteristics: [
      "Predictable viscosity and gel time across varied panel sizes and thicknesses",
      "Even wet-out on both flat and lightly profiled panel surfaces",
      "Adjustable cure speed to match differing batch sizes without changing resin grade",
      "Adequate mechanical strength for panels used as partitions, guards and enclosure covers",
      "Batch consistency so panel quality doesn't vary as production shifts between different jobs",
    ],
    manufacturingProcess: 'Panels are laminated by <a href="/applications/resin-for-hand-lay-up-process/">hand lay-up</a> over flat or profiled moulds: <a href="/products/fibre-glass-mat/">chopped strand mat</a> is wet out with resin catalysed by an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator, rolled to remove air and achieve even thickness, then left to cure at room temperature. Panel thickness and reinforcement layers are adjusted to the specific job — a lightweight ceiling panel needs far less laminate than a structural enclosure cover — before trimming, drilling and any edge-finishing required.',
    advantages: [
      "Fast gel time supports efficient turnaround across a mixed-panel production schedule",
      "Non-accelerated cure system adapts to different batch sizes without a resin change",
      "225 kg drum packaging suits continuous, varied panel production",
      "Consistent 99% purity keeps quality uniform across every panel type run through the line",
    ],
    commonProducts: [
      "Toilet cubicle and partition panels",
      "Electrical enclosure and machine guard covers",
      "Wall cladding and false ceiling panels",
      "Equipment housings and general FRP sheet products",
    ],
    faqs: [
      {
        q: "Can GP Clear Resin be used across different panel thicknesses on the same line?",
        a: "Yes. Its predictable viscosity and gel time make it suitable across varied panel jobs — fabricators adjust laminate thickness and reinforcement layers per panel rather than switching resin grades.",
      },
      {
        q: "Can FRP panels be coloured with GP Clear Resin?",
        a: "Yes. FRP Polyester Pigment can be blended into GP Clear Resin before catalysing to produce coloured panels for cladding or décor applications, in addition to a clear or natural finish.",
      },
      {
        q: "What reinforcement is used in general FRP panels?",
        a: "E-glass chopped strand mat is the standard reinforcement, with layer count adjusted to the mechanical demands of the specific panel — a lightweight ceiling panel needs less than a structural enclosure cover.",
      },
      {
        q: "How is GP Clear Resin catalysed for panel production?",
        a: "It is cured at room temperature with an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (around 0.4%), with dosage adjusted to the batch size and pace of a given production run.",
      },
      {
        q: "Is GP Clear Resin suitable for fire-rated panel applications?",
        a: "GP Clear Resin is a standard general-purpose resin without fire-retardant additives. Where a panel needs a fire-rating specification, Samrat Poly Resins' Fire Retardant Resin is the more suitable choice.",
      },
    ],
    relatedProductSlugs: ["mekp-hardener", "fibre-glass-mat", "frp-polyester-pigment"],
    ctaHeading: "Need resin for your FRP panel production?",
    ctaText: "Get a bulk quote or talk to our technical team about the right grade and dosage for your panel fabrication line.",
  },
  {
    slug: "resin-for-hand-lay-up-process",
    title: "Resin for Hand Lay-Up Process",
    cardImage: "hand-layup-process.webp",
    cardImageAlt: "Diagram of the hand lay-up process showing resin poured into a mould tool and worked in with a roller",
    cardDescription: "Hand lay-up is the most common FRP fabrication method, and it depends on a resin that wets out reinforcement by hand without dragging or pooling.",
    cardBenefit: "Smooth hand application, no dragging.",
    seo: {
      title: "Resin for Hand Lay-Up Process",
      description: "Why hand lay-up fabricators across water tanks, panels and mouldings rely on GP Clear Resin for consistent wet-out and workable gel time.",
      keywords: ["Hand Lay-Up Resin", "FRP Hand Lay-Up Process", "Resin for Hand Lay-Up", "Polyester Resin for Lamination"],
    },
    intro: "Hand lay-up is the process behind more FRP products than any other manufacturing method — it's how most water tanks, panels, boat hulls, door skins and moulded parts in India are actually built, using nothing more than a brush or roller, resin, reinforcement and a mould. Its popularity comes down to low tooling cost and flexibility: the same basic technique can build a two-metre tank shell or a small decorative moulding, provided the resin behaves predictably in the fabricator's hands.",
    whatTheyManufacture: "Hand lay-up is used across almost every category of FRP product — water tanks, cooling tower panels, roofing sheets, boat hulls, door skins, general panels and moulded items are all commonly built this way. Rather than being tied to one product category, it's the fabrication method that underlies most general-purpose FRP manufacturing in a typical workshop.",
    whySuitable: 'What every hand lay-up job has in common is a fabricator working resin into reinforcement by hand, layer by layer, so the resin has to behave consistently under manual application — not too thick to drag or leave dry patches, not so fast-gelling that it sets before the layer is fully wet out. <a href="/products/gp-clear-resin/">GP Clear Resin</a>\'s 350–450 cPs viscosity is calibrated for exactly this kind of manual work, spreading evenly under a roller or brush, while its sub-8-minute gel time gives fabricators a workable window to complete each layer before moving to the next.',
    requiredCharacteristics: [
      "A viscosity that spreads smoothly under a brush or roller without dragging",
      "Even wet-out through reinforcement without leaving dry fibres or resin-rich pockets",
      "A gel time long enough to complete a layer by hand, but fast enough to keep production moving",
      "Reliable room-temperature cure with no special equipment required",
      "Predictable behaviour across different ambient workshop temperatures",
    ],
    manufacturingProcess: 'In hand lay-up, <a href="/products/fibre-glass-mat/">chopped strand mat</a> or woven roving is placed into or against a mould, and resin catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator is applied by brush or poured on and worked through the reinforcement with a laminating roller. The roller removes trapped air and drives the resin fully through the fibre before it begins to gel. Additional layers are built up the same way until the required thickness is reached, then the part cures at room temperature before being released from the mould.',
    advantages: [
      "Viscosity tuned for smooth manual application without excessive dragging or pooling",
      "Sub-8-minute gel time balances a workable application window against production speed",
      "Non-accelerated cure system lets fabricators fine-tune dosage for the day's workshop temperature",
      "Consistent 99% purity keeps hand-applied laminate quality uniform from batch to batch",
    ],
    commonProducts: [
      "Water tanks, cooling tower panels and roofing sheets",
      "Boat hulls and marine components",
      "Door skins and general FRP panels",
      "Moulded FRP parts across most general-purpose applications",
    ],
    faqs: [
      {
        q: "What makes a resin suitable for hand lay-up specifically?",
        a: "It needs a viscosity that spreads evenly under a brush or roller without dragging, and a gel time that gives the fabricator enough working time to wet out a full layer of reinforcement by hand before it starts to set.",
      },
      {
        q: "How is GP Clear Resin catalysed for hand lay-up?",
        a: "It is cured at room temperature with an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (around 0.4%), with dosage commonly adjusted to suit ambient workshop temperature and the size of the part being laminated.",
      },
      {
        q: "How many layers can be built up in a single hand lay-up session?",
        a: "This depends on the part's required thickness and the resin's gel time — fabricators typically wet out and roll one layer of reinforcement before adding the next, continuing until the specified laminate thickness is reached.",
      },
      {
        q: "Does hand lay-up work with both chopped strand mat and woven roving?",
        a: "Yes. GP Clear Resin wets out both, and many hand lay-up jobs combine chopped strand mat for bulk with woven roving where extra structural strength is needed.",
      },
      {
        q: "Is hand lay-up suitable for high-volume production?",
        a: "It's used across production volumes from small custom jobs to large-scale manufacturing of tanks, panels and sheets — output scales with the number of moulds and fabricators working, rather than the process itself being a bottleneck.",
      },
    ],
    relatedProductSlugs: ["mekp-hardener", "fibre-glass-mat"],
    ctaHeading: "Need resin for your hand lay-up production?",
    ctaText: "Get a bulk quote or talk to our technical team about the right grade and dosage for your lay-up process.",
  },
  {
    slug: "resin-for-spray-up-process",
    title: "Resin for Spray-Up Process",
    cardImage: "spray-up-process.jpg",
    cardImageAlt: "Diagram of the spray-up process showing a chopper gun depositing resin and fibre into a gelcoated mould",
    cardDescription: "Spray-up production needs a resin that atomises cleanly through spray equipment and gels on a predictable schedule.",
    cardBenefit: "Full control over gel timing at scale.",
    seo: {
      title: "Resin for Spray-Up Process",
      description: "How GP Clear Resin performs in spray-up FRP fabrication, where chopped roving and resin are deposited together for faster, high-volume lamination.",
      keywords: ["Spray-Up Resin", "FRP Spray-Up Process", "Resin for Spray-Up", "Chopper Gun Resin"],
    },
    intro: "Spray-up speeds up FRP fabrication by depositing chopped glass roving and catalysed resin onto the mould together, through a chopper gun, instead of laying reinforcement by hand and wetting it out separately. It suits fabricators producing larger volumes of moderately complex parts — tanks, tubs, panels and similar shapes — where the labour savings over hand lay-up matter, provided the resin sprays cleanly and gels on a schedule the production line can work around.",
    whatTheyManufacture: "Spray-up is used for products where higher-volume production and moderate part complexity make chopper-gun application worthwhile — water tanks, bathtubs and sanitaryware, panels, cooling tower components and similar moulded shapes with large surface areas benefit most from the process's speed advantage over manual lay-up.",
    whySuitable: 'Spray-up puts different demands on a resin than hand lay-up — it needs to atomise cleanly through spray equipment without clogging, and its gel time has to be predictable enough for an operator to build up thickness across a mould without the first pass gelling before the last one is sprayed. <a href="/products/gp-clear-resin/">GP Clear Resin</a>\'s 350–450 cPs viscosity is compatible with standard spray-up equipment, and because it\'s a non-accelerated resin, fabricators can dose the accelerator to set the gel time that best matches their equipment\'s spray rate and mould size.',
    requiredCharacteristics: [
      "A viscosity compatible with chopper-gun atomisation without clogging equipment",
      "Predictable gel timing that can be tuned to the spray rate and size of the mould",
      "Even resin distribution alongside chopped roving as it's deposited on the mould",
      "Reliable mechanical strength once the sprayed laminate is compacted and cured",
      "Consistent behaviour across repeated spray cycles in a production run",
    ],
    manufacturingProcess: 'In spray-up, resin catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator is fed through a chopper gun alongside continuous glass roving, which is cut and deposited onto the mould simultaneously with the resin spray. The sprayed laminate is then compacted with a roller to remove air and ensure the resin has fully wet out the chopped <a href="/products/fibre-glass-mat/">glass fibre</a>, in the same way a hand-applied layer would be rolled. Multiple passes build up the required thickness before the part cures at room temperature and is released from the mould.',
    advantages: [
      "Compatible viscosity for clean atomisation through standard spray-up equipment",
      "Non-accelerated cure system lets fabricators dial in gel time to match spray rate and mould size",
      "Sub-8-minute gel time supports faster cycle times than hand lay-up on larger parts",
      "Consistent 99% purity maintains laminate quality across high-volume spray production",
    ],
    commonProducts: [
      "Water tanks and sanitaryware produced at volume",
      "Bathtubs and moulded bathroom fixtures",
      "Cooling tower panels and casings",
      "General FRP panels with large surface areas",
    ],
    faqs: [
      {
        q: "Is GP Clear Resin compatible with chopper-gun spray-up equipment?",
        a: "Yes, its viscosity is compatible with standard spray-up equipment. As with any resin, operators should check compatibility with their specific spray equipment setup and adjust accelerator dosage to suit.",
      },
      {
        q: "How does gel time control work in spray-up compared to hand lay-up?",
        a: "Because spray-up deposits resin and reinforcement faster than hand lay-up, gel time is tuned to the operator's spray rate and the mould's size — enough time to complete all passes and roll out air, but not so long that production slows unnecessarily.",
      },
      {
        q: "Does spray-up use the same reinforcement as hand lay-up?",
        a: "Spray-up uses continuous glass roving fed through the chopper gun and cut on application, rather than pre-cut chopped strand mat — but the resin's role in wetting out that reinforcement is the same.",
      },
      {
        q: "How is GP Clear Resin catalysed for spray-up production?",
        a: "It is cured at room temperature with an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (around 0.4%), with dosage adjusted to the operator's spray rate and the equipment being used.",
      },
      {
        q: "Is spray-up or hand lay-up better for my production?",
        a: 'Spray-up generally suits higher-volume production of moderately complex shapes where labour savings matter most; <a href="/applications/resin-for-hand-lay-up-process/">hand lay-up</a> gives more control for complex geometries or lower-volume work. Both use the same GP Clear Resin.',
      },
    ],
    relatedProductSlugs: ["mekp-hardener", "fibre-glass-mat"],
    ctaHeading: "Need resin for your spray-up production?",
    ctaText: "Get a bulk quote or talk to our technical team about the right grade and dosage for your spray-up process.",
  },
  {
    slug: "resin-for-boat-manufacturing",
    title: "Resin for Boat & Marine Components",
    cardImage: "marine-boat-components.jpg",
    cardImageAlt: "FRP marine and boat components built from glass-reinforced polyester composite",
    cardDescription: "Marine and boat components need proven wet-out over glass fibre reinforcement and reliable strength once the laminate cures.",
    cardBenefit: "Reliable wet-out for hulls and marine parts.",
    seo: {
      title: "Resin for Boat & Marine Components",
      description: "How GP Clear Resin performs in FRP boat and marine component fabrication, and when a chemical-resistant grade is worth the upgrade.",
      keywords: ["Resin for Boat Manufacturing", "FRP Marine Resin", "Boat Building Resin", "Polyester Resin for Marine Components"],
    },
    intro: "Fibreglass has been the dominant boat-building material for small and mid-size craft for decades, prized for its strength-to-weight ratio, resistance to rot and corrosion, and the design freedom that moulding gives builders over plank-built timber or welded metal hulls. Every FRP hull, deck and marine component starts the same way regardless of the boat's final size or use: layers of glass reinforcement wet out with resin and cured into a single structural laminate.",
    whatTheyManufacture: "Marine fabricators build hulls, decks, cabin structures and a wide range of smaller FRP components — hatches, consoles, seating, fuel tank housings and fittings — for boats ranging from small fishing craft to mid-size recreational vessels, as well as marine components used outside boats entirely, such as FRP tanks and enclosures for waterfront and coastal installations.",
    whySuitable: 'Marine lamination puts a premium on wet-out quality, since a hull or deck depends on complete resin penetration through every layer of reinforcement to reach its rated strength — any dry glass fibre becomes a weak point under load or impact. <a href="/products/gp-clear-resin/">GP Clear Resin</a>\'s 350–450 cPs viscosity wets out chopped strand mat and woven roving thoroughly during hand lay-up, and its cured mechanical strength supports the structural demands of hull and deck laminates. For components with prolonged direct seawater immersion or where maximum corrosion resistance is a priority, some builders step up to a <a href="/products/vinyl-ester-resin/">vinyl ester resin</a> — GP Clear Resin remains a dependable, cost-effective choice for general marine and boat component fabrication.',
    requiredCharacteristics: [
      "Thorough wet-out through multiple layers of glass reinforcement for full laminate strength",
      "Good mechanical strength and impact resistance for hulls, decks and structural components",
      "A workable gel time for building up multi-layer hull and deck laminates in stages",
      "Reliable room-temperature cure suited to open-mould boat building processes",
      "Consistent batch quality across the many resin-and-reinforcement passes a hull requires",
    ],
    manufacturingProcess: 'Hulls and decks are typically built by <a href="/applications/resin-for-hand-lay-up-process/">hand lay-up</a> in an open mould: a gelcoat layer is applied first for the finished exterior surface, followed by <a href="/products/fibre-glass-mat/">chopped strand mat</a> and woven roving wet out with resin catalysed by an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator, built up layer by layer to the specified hull thickness. Each layer is rolled to remove trapped air before the next is added. Once fully cured at room temperature, the hull or component is released from the mould, trimmed, and finished for fitting out.',
    advantages: [
      "Thorough wet-out supports full laminate strength through multi-layer hull construction",
      "Non-accelerated cure system gives builders control over gel timing across a multi-stage lay-up",
      "225 kg drum packaging suits the substantial resin volumes hull and deck lamination requires",
      "Consistent 99% purity helps maintain uniform laminate quality across a large hull surface",
    ],
    commonProducts: [
      "FRP boat hulls and decks",
      "Cabin structures and consoles",
      "Hatches, seating and fuel tank housings",
      "Marine fittings and waterfront FRP components",
    ],
    faqs: [
      {
        q: "Is GP Clear Resin suitable for boat hulls exposed to seawater?",
        a: "GP Clear Resin is a general-purpose orthophthalic resin suitable for standard hull and marine component fabrication. For components with prolonged direct seawater immersion or where maximum corrosion resistance is the priority, a vinyl ester resin is often the preferred upgrade.",
      },
      {
        q: "What reinforcement is used in FRP boat hulls?",
        a: "Hulls typically combine E-glass chopped strand mat with woven roving for added structural strength, built up in multiple layers to reach the required hull thickness.",
      },
      {
        q: "Is a gelcoat needed with GP Clear Resin for marine components?",
        a: "Most boat builders apply a gelcoat layer first for a finished, protective exterior surface, then laminate GP Clear Resin and reinforcement behind it to build structural thickness.",
      },
      {
        q: "How is GP Clear Resin catalysed for marine lamination?",
        a: "It is cured at room temperature with an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (around 0.4%), with dosage adjusted to give enough working time for multi-layer hull lay-up.",
      },
      {
        q: "Can GP Clear Resin be used for small marine components as well as full hulls?",
        a: "Yes. It suits both — fabricators adjust laminate thickness and reinforcement to match the structural demands of the specific component, from small fittings to full hull structures.",
      },
    ],
    relatedProductSlugs: ["mekp-hardener", "fibre-glass-mat"],
    ctaHeading: "Need resin for your boat or marine component production?",
    ctaText: "Get a bulk quote or talk to our technical team about the right grade and dosage for your marine lamination line.",
  },
  {
    slug: "resin-for-general-frp-lamination",
    title: "Resin for General FRP Lamination",
    cardImage: "frp-lamination.jpg",
    cardImageAlt: "Stack of coloured corrugated FRP laminate sheets",
    cardDescription: "Whatever the lamination job, fabricators need one resin whose viscosity, gel time and strength stay consistent across varied work.",
    cardBenefit: "One dependable resin for varied lamination work.",
    seo: {
      title: "Resin for General FRP Lamination",
      description: "Why GP Clear Resin works as a single, dependable lamination resin across varied FRP jobs, and when a job-specific grade is worth choosing instead.",
      keywords: ["FRP Lamination Resin", "General Purpose Lamination Resin", "Resin for FRP Lamination", "Industrial Polyester Resin"],
    },
    intro: "Not every FRP workshop specialises in one product. Many fabricators laminate whatever job comes in that week — a repair here, a small custom panel there, a batch of brackets or covers the next day — and for that kind of varied work, switching resin grades for every job isn't practical. What these fabricators need is one dependable, general-purpose lamination resin that performs consistently regardless of what's being built.",
    whatTheyManufacture: "General FRP lamination covers the broad middle ground of composite fabrication that doesn't fall neatly into a single product category — custom brackets and covers, repair patches, small enclosures, jigs and fixtures, and one-off or short-run parts that a fabricator builds to a customer's specific drawing rather than a standard product line.",
    whySuitable: '<a href="/products/gp-clear-resin/">GP Clear Resin</a> is built for exactly this kind of varied lamination work — its 350–450 cPs viscosity and sub-8-minute gel time perform predictably whether the job is a small repair patch or a larger custom enclosure, and its non-accelerated cure system means the same drum of resin can be dosed differently from one job to the next without needing a different grade on the shelf. For fabricators whose work is concentrated specifically in door lamination, Samrat Poly Resins\' <a href="/products/lamination-resin/">Lamination Resin (LR Resin)</a> is tuned more precisely for that one task — GP Clear Resin is the more versatile choice for everything else.',
    requiredCharacteristics: [
      "Consistent viscosity and gel time regardless of the specific part being laminated",
      "Reliable mechanical strength across a wide range of part sizes and shapes",
      "Flexibility to adjust dosage per job without switching resin grades",
      "A cure profile compatible with basic hand lay-up tools and no special equipment",
      "Dependable batch-to-batch quality for fabricators running varied, often unpredictable work",
    ],
    manufacturingProcess: 'General lamination follows the same core <a href="/applications/resin-for-hand-lay-up-process/">hand lay-up</a> steps regardless of the part: <a href="/products/fibre-glass-mat/">glass fibre</a> reinforcement is placed against the mould or repair area and wet out with resin catalysed by an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator, rolled to remove air, and built up in layers to the thickness the job requires. Because job sizes and shapes vary so much, fabricators typically adjust catalyst dosage and layer count per part rather than following one fixed recipe.',
    advantages: [
      "One resin grade covers most general lamination jobs, simplifying inventory and workshop planning",
      "Non-accelerated cure system adapts to job-by-job dosage changes without a grade switch",
      "Sub-8-minute gel time suits both quick repairs and longer custom lay-up work",
      "Consistent 99% purity keeps quality dependable across unpredictable, varied production",
    ],
    commonProducts: [
      "Custom brackets, covers and enclosures",
      "FRP repair patches and reinforcement work",
      "Jigs, fixtures and one-off fabricated parts",
      "Short-run and made-to-drawing composite components",
    ],
    faqs: [
      {
        q: "Is GP Clear Resin a good default choice for a workshop that laminates varied jobs?",
        a: "Yes. Its consistent viscosity, gel time and cure behaviour make it a practical single-grade choice for fabricators who don't want to stock multiple resin grades for varied, unpredictable lamination work.",
      },
      {
        q: "When should I use a job-specific resin instead of GP Clear Resin?",
        a: "If your work is concentrated in one specific application — door lamination, chemical-resistant tanks, fire-rated parts — a purpose-built grade like Lamination Resin, Vinyl Ester Resin or Fire Retardant Resin will usually perform better for that specific job.",
      },
      {
        q: "Can I use GP Clear Resin for FRP repair work?",
        a: "Yes, it's commonly used for patching and reinforcing existing FRP parts, laminated the same way as new fabrication — reinforcement wet out with catalysed resin and rolled to remove air.",
      },
      {
        q: "How is GP Clear Resin catalysed for general lamination jobs?",
        a: "It is cured at room temperature with an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (around 0.4%), with dosage adjusted per job to suit part size and desired working time.",
      },
      {
        q: "What's the minimum order quantity if I only need resin for occasional custom jobs?",
        a: "GP Clear Resin is supplied in 225 kg drums with a minimum order quantity of 1,000 kg. Contact our team to discuss supply arrangements that suit smaller or occasional fabrication needs.",
      },
    ],
    relatedProductSlugs: ["mekp-hardener", "fibre-glass-mat"],
    ctaHeading: "Need a dependable resin for varied FRP lamination work?",
    ctaText: "Get a bulk quote or talk to our technical team about the right grade and dosage for your lamination jobs.",
  },
  {
    slug: "resin-for-general-frp-moulded-products",
    title: "Resin for General FRP Moulded Products",
    cardImage: "frp-moulded-grating.jpg",
    cardImageAlt: "Stack of coloured FRP moulded grating panels in a range of sizes",
    cardDescription: "From tanks to novelty mouldings, general FRP moulded products need a laminate that cures reliably and releases cleanly from the mould.",
    cardBenefit: "Consistent results across varied mould work.",
    seo: {
      title: "Resin for General FRP Moulded Products",
      description: "How GP Clear Resin performs across general FRP moulded products — planters, covers, fixtures and decorative items — with reliable cure and clean mould release.",
      keywords: ["FRP Moulding Resin", "General Purpose Moulded Products Resin", "Resin for FRP Moulding", "Polyester Resin for Moulded Parts"],
    },
    intro: "Beyond tanks, panels and structural components, a huge range of everyday FRP items are built the same basic way — moulded, cured and released — from planters and garden decor to equipment covers, signage, mannequins and decorative fixtures. These products don't share an industry so much as a process: a mould defines the shape, and the resin has to cure reliably and release cleanly every time, regardless of how simple or ornate the design is.",
    whatTheyManufacture: "General FRP moulding covers products such as planters and garden ornaments, equipment and machinery covers, signage and display fixtures, mannequins, decorative architectural elements, and other moulded items that don't require the specialised chemical or fire-rated performance of an industrial tank or panel, but do need a clean, consistent moulded finish.",
    whySuitable: '<a href="/products/gp-clear-resin/">GP Clear Resin</a> suits general moulded product work because it wets out reinforcement evenly into detailed mould shapes and cures into a laminate that releases cleanly, without the surface defects that ruin a decorative or display piece. Its non-accelerated cure system lets fabricators dose for the specific mould complexity and part size at hand, and FRP Polyester Pigment can be blended in wherever a moulded product needs colour rather than a clear or natural finish.',
    requiredCharacteristics: [
      "Good flow into detailed or ornamental mould shapes",
      "A clean release from the mould without surface defects",
      "Compatibility with pigments for coloured decorative and display products",
      "Reliable room-temperature cure suited to small-batch and one-off moulding",
      "Consistent quality across a wide variety of product shapes and sizes",
    ],
    manufacturingProcess: 'Moulded products are typically built with a gelcoat surface layer for finish, followed by <a href="/products/fibre-glass-mat/">chopped strand mat</a> wet out with resin catalysed by an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator, worked into the mould detail with a brush or roller. Once cured at room temperature, the part is released, trimmed of excess laminate at the mould line, and finished — painted, polished or left in its natural cured state depending on the product.',
    advantages: [
      "Reliable flow into detailed or ornamental mould geometry",
      "Clean mould release supports consistent finish quality on decorative and display products",
      "Compatible with FRP Polyester Pigment for coloured moulded items",
      "Non-accelerated cure system suits both small-batch and larger production runs",
    ],
    commonProducts: [
      "Planters and garden ornaments",
      "Equipment and machinery covers",
      "Signage and display fixtures",
      "Mannequins and decorative architectural elements",
    ],
    faqs: [
      {
        q: "Can GP Clear Resin be coloured for decorative moulded products?",
        a: "Yes. FRP Polyester Pigment can be blended into GP Clear Resin before catalysing to produce coloured mouldings, in addition to a clear or natural finish.",
      },
      {
        q: "Is a gelcoat needed for general FRP moulded products?",
        a: "Most fabricators apply a gelcoat layer first for a smooth, finished surface, then laminate GP Clear Resin and reinforcement behind it to build the part's structural thickness.",
      },
      {
        q: "How is GP Clear Resin catalysed for moulded product work?",
        a: "It is cured at room temperature with an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (around 0.4%), with dosage adjusted to the size and complexity of the specific mould.",
      },
      {
        q: "Does GP Clear Resin work for detailed or ornamental mould shapes?",
        a: "Yes, its viscosity supports good flow into mould detail, which helps reproduce ornamental or textured designs accurately during moulding.",
      },
      {
        q: "What reinforcement is used for general FRP moulded products?",
        a: "E-glass chopped strand mat is the standard reinforcement, with layer count adjusted to the structural needs of the specific product being moulded.",
      },
    ],
    relatedProductSlugs: ["mekp-hardener", "fibre-glass-mat", "frp-polyester-pigment"],
    ctaHeading: "Need resin for your moulded FRP products?",
    ctaText: "Get a bulk quote or talk to our technical team about the right grade and dosage for your moulding work.",
  },

  // ============================================================================
  //  LR RESIN (Lamination Resin) APPLICATIONS — decorative/bonding lamination,
  //  not general FRP structural work. Scoped per a technical audit: LR Resin's
  //  own spec (400 cPs, 5-min gel time, 100% purity, transparent) is genuinely
  //  suited to bonding a decorative face (laminate sheet, veneer, or a moulded
  //  FRP door skin) onto a substrate/core — NOT to manufacturing the substrate
  //  itself (plywood, MDF) or to general FRP lamination (that's GP Clear
  //  Resin's job). Related products are intentionally minimal — glass fibre
  //  only appears where FRP reinforcement is genuinely used (door-skin
  //  bonding); the rest are flat decorative-sheet bonding jobs with no
  //  reinforcement, so only MEKP Hardener is listed.
  // ============================================================================
  {
    slug: "door-lamination",
    title: "Resin for Door Lamination",
    cardImage: "door-lamination.jpg",
    cardImageAlt: "Modern entrance door finished with a decorative wood-grain laminate panel design",
    cardDescription: "Decorative doors need a resin that bonds laminate and veneer sheets firmly to the door face, curing quickly enough for efficient press cycles.",
    cardBenefit: "Fast press-cycle turnaround.",
    seo: {
      title: "Resin for Door Lamination",
      description: "How Lamination Resin (LR Resin) bonds decorative laminate and veneer sheets onto door faces — process, cure system, and where it fits in door manufacturing.",
      keywords: ["How Door Lamination Works", "LR Resin for Doors", "Decorative Door Lamination", "Polyester Resin for Door Lamination"],
    },
    intro: "Most decorative doors — the flush, laminate-faced or veneer-faced doors used across homes and offices — get their finished look from a thin decorative sheet bonded onto a plain door blank. That bonding step is a distinct process from building the door itself, and it depends on a resin formulated specifically for fast, reliable adhesion between two flat surfaces rather than for building up a thick structural laminate.",
    whatTheyManufacture: "Door lamination work produces laminate-faced flush doors, veneer-faced decorative doors, and doors finished with moulded or textured panel-look laminate sheets — largely for residential, office and hospitality interiors where a decorative, ready-to-finish door surface is needed without the cost of solid timber.",
    whySuitable: '<a href="/products/lamination-resin/">Lamination Resin (LR Resin)</a> is formulated specifically for this bonding step: its 5-minute gel time is faster than a general-purpose resin\'s, so a laminating press can cycle through more doors per shift, and its 100% purity, transparent liquid form gives a clean, glossy bond line that doesn\'t discolour the decorative sheet above it. For general FRP door fabrication and frame reinforcement rather than decorative sheet bonding, <a href="/products/gp-clear-resin/">GP Clear Resin</a> is the more suitable choice.',
    requiredCharacteristics: [
      "Fast gel time to keep a laminating press cycling efficiently",
      "Strong, reliable adhesion between the resin bond line and the decorative laminate or veneer sheet",
      "A clear, glossy cured finish that doesn't discolour the sheet above it",
      "Room-temperature or press-assisted cure depending on the production line",
      "Consistent batch-to-batch bonding quality across a production run",
    ],
    manufacturingProcess: 'The door blank surface is coated with resin catalysed by an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator, the decorative laminate or veneer sheet is placed on top, and the assembly is pressed — either in a hot press for faster cycles or clamped at room temperature for smaller production runs — until the resin cures and bonds the sheet permanently to the door face. Once cured, edges are trimmed and the door is finished for delivery.',
    advantages: [
      "5-minute gel time supports faster press-cycle turnaround than a general-purpose resin",
      "Excellent adhesion to laminate and veneer sheets, reducing the risk of peeling or delamination",
      "Clear, glossy cure gives a clean finish beneath decorative sheets",
      "Room-temperature cure option available for workshops without hot-press equipment",
    ],
    commonProducts: [
      "Laminate-faced flush doors",
      "Veneer-faced decorative doors",
      "Moulded panel-look laminated doors",
    ],
    faqs: [
      {
        q: "What is LR Resin used for in door lamination?",
        a: "It's used as the bonding layer between a plain door blank and a decorative laminate or veneer sheet, cured to permanently fix the sheet to the door face.",
      },
      {
        q: "Is LR Resin the same as the resin used to build the door structure itself?",
        a: "No. Structural door fabrication (frames, core reinforcement) typically uses a general-purpose resin such as GP Clear Resin. LR Resin is formulated specifically for the faster-cycling decorative bonding step.",
      },
      {
        q: "Does door lamination with LR Resin need a hot press?",
        a: "Not necessarily — its 5-minute gel time suits both hot-press production lines and room-temperature clamped bonding for smaller-scale door lamination work.",
      },
      {
        q: "How is LR Resin catalysed for door lamination?",
        a: "It's cured with an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (around 0.4%), the same system used across Samrat Poly Resins' general-purpose grades.",
      },
      {
        q: "Can LR Resin bond both laminate sheets and wood veneer?",
        a: 'This page focuses on synthetic decorative laminate sheets specifically. For solid-wood and wood-core doors finished with a natural wood veneer, see our <a href="/applications/wooden-door-lamination/">wooden door lamination guide</a> for the bonding considerations specific to timber veneer.',
      },
    ],
    relatedProductSlugs: ["mekp-hardener"],
    ctaHeading: "Need resin for your door lamination line?",
    ctaText: "Get a bulk quote or talk to our technical team about the right dosage for your press cycle.",
  },
  {
    slug: "door-skin-lamination",
    title: "Resin for Door Skin Lamination",
    cardImage: "wood-laminate-door.avif",
    cardImageAlt: "Wood-grain laminate door skin with a panelled grid design bonded onto a flush door",
    cardDescription: "Bonding a moulded FRP door skin to its core is a distinct step from moulding the skin itself, and depends on fast-curing resin and glass fibre reinforcement.",
    cardBenefit: "Fast cure keeps assembly lines moving.",
    seo: {
      title: "Resin for Door Skin Lamination",
      description: "How Lamination Resin bonds moulded FRP door skins to a door core, with glass fibre reinforcement and MEKP cure — distinct from skin moulding.",
      keywords: ["Door Skin Lamination", "FRP Door Skin Bonding", "LR Resin for Door Skins", "Skin to Core Bonding Resin"],
    },
    intro: "Producing an FRP door involves two distinct steps that are easy to conflate: moulding the decorative door skin panel itself, and then bonding that finished skin onto the door's core and frame. This page covers the second step — skin-to-core lamination — where reinforcement and a fast-curing resin bond the skin permanently onto the structure beneath it.",
    whatTheyManufacture: "Door skin lamination is the assembly step behind complete FRP and composite door shutters — moulded door skins (produced separately) are bonded to a core material and edge frame to form a finished, structurally sound door ready for hanging and hardware fitting.",
    whySuitable: 'Skin-to-core bonding needs a resin that cures quickly enough to keep an assembly line moving without a long clamping wait, while still forming a strong mechanical bond reinforced with glass fibre where the skin meets the core. <a href="/products/lamination-resin/">Lamination Resin (LR Resin)</a>\'s 5-minute gel time suits this faster assembly cycle, and it wets out <a href="/products/fibre-glass-mat/">glass fibre</a> reinforcement cleanly at the skin-to-core joint. Where the work is skin moulding itself — producing the decorative panel rather than bonding it to a core — a general-purpose resin such as <a href="/products/gp-clear-resin/">GP Clear Resin</a> is the more suitable choice, as covered on our <a href="/applications/resin-for-door-skin-manufacturing/">door skin manufacturing page</a>.',
    requiredCharacteristics: [
      "Fast gel time to keep skin-to-core assembly cycles efficient",
      "Reliable wet-out of glass fibre reinforcement at the bonding joint",
      "Strong mechanical adhesion between the door skin and the core material",
      "Room-temperature cure compatible with clamped or pressed assembly",
      "Consistent bond quality across every door in a production batch",
    ],
    manufacturingProcess: 'A layer of resin catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator is applied to the door core, reinforced with <a href="/products/fibre-glass-mat/">glass fibre</a> at the joint for added mechanical strength, and the pre-moulded door skin is placed on top and pressed or clamped in position. Once the resin cures, the assembled door is trimmed, drilled for hardware and finished.',
    advantages: [
      "5-minute gel time reduces clamping time in skin-to-core assembly",
      "Reliable wet-out of glass fibre reinforcement at the bonding joint",
      "Consistent adhesion supports a durable, long-lasting skin-to-core bond",
    ],
    commonProducts: [
      "Assembled FRP door shutters",
      "Composite doors with bonded moulded skins",
      "Reinforced skin-to-core door joints",
    ],
    faqs: [
      {
        q: "Is this the same as moulding a door skin?",
        a: "No. Moulding the decorative skin panel itself is a separate process, typically using a general-purpose resin like GP Clear Resin. This page covers bonding that already-moulded skin onto the door's core.",
      },
      {
        q: "Why is glass fibre used at the skin-to-core joint?",
        a: "It reinforces the bond between the skin and the core, adding mechanical strength beyond what the resin alone would provide.",
      },
      {
        q: "How is LR Resin catalysed for skin-to-core bonding?",
        a: "With an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (around 0.4%), cured at room temperature.",
      },
      {
        q: "Why use LR Resin instead of a general-purpose resin for this step?",
        a: "Its faster 5-minute gel time reduces clamping time in an assembly line producing multiple doors per shift, compared with a general-purpose resin's longer gel time.",
      },
      {
        q: "What reinforcement is used in door skin lamination?",
        a: "E-glass chopped strand mat, applied at the skin-to-core joint where extra mechanical strength is needed.",
      },
    ],
    relatedProductSlugs: ["mekp-hardener", "fibre-glass-mat"],
    ctaHeading: "Need resin for your door skin assembly line?",
    ctaText: "Get a bulk quote or talk to our technical team about the right dosage for your skin-to-core bonding process.",
  },
  {
    slug: "wooden-door-lamination",
    title: "Resin for Wooden Door Lamination",
    cardImage: "wood-laminate-door.avif",
    cardImageAlt: "Solid timber door finished with a bonded decorative wood veneer panel design",
    cardDescription: "Solid-wood and wood-core doors are commonly faced with a decorative veneer, bonded on with a fast-curing resin to protect and finish the timber surface.",
    cardBenefit: "Reliable bond to timber and veneer alike.",
    seo: {
      title: "Resin for Wooden Door Lamination",
      description: "How Lamination Resin bonds decorative wood veneer onto solid-wood and wood-core doors, protecting and finishing the timber surface.",
      keywords: ["Wooden Door Lamination", "Wood Veneer Bonding Resin", "LR Resin for Wood Doors", "Timber Door Lamination Resin"],
    },
    intro: "Solid-wood and wood-core doors are frequently finished by bonding a thin decorative veneer onto the timber surface, rather than leaving the base wood exposed — giving the door a premium grain appearance while protecting the underlying timber. That veneer has to be bonded with a resin that wets out and adheres reliably to a natural wood surface, not just to synthetic laminate.",
    whatTheyManufacture: "This lamination step produces veneer-faced solid-wood and wood-core doors — timber doors finished with a bonded decorative wood veneer for a premium appearance, used across residential and office interiors where a natural wood-grain finish is wanted.",
    whySuitable: '<a href="/products/lamination-resin/">Lamination Resin (LR Resin)</a> bonds reliably to timber and wood-core substrates as well as to the veneer sheet itself, and its 5-minute gel time keeps veneer-facing production moving efficiently. Its clear, transparent cure also avoids discolouring a natural wood-grain veneer the way a less refined resin might. For structural timber-door frame reinforcement rather than decorative veneer bonding, <a href="/products/gp-clear-resin/">GP Clear Resin</a> is the more suitable choice.',
    requiredCharacteristics: [
      "Reliable adhesion to timber and wood-core substrates as well as to the veneer sheet",
      "Fast gel time to keep veneer-facing production moving",
      "A clear cure that doesn't discolour a natural wood-grain veneer",
      "Room-temperature or press-assisted cure depending on production scale",
      "Consistent bond quality across every door in a batch",
    ],
    manufacturingProcess: 'Resin catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator is applied to the timber or wood-core door surface, the decorative veneer sheet is positioned on top, and the assembly is pressed or clamped until the resin cures and bonds the veneer permanently to the wood beneath it. The finished surface is then sanded and polished as needed.',
    advantages: [
      "Reliable adhesion to both timber substrates and veneer sheets",
      "5-minute gel time supports efficient veneer-facing production",
      "Clear cure preserves the natural appearance of the wood-grain veneer",
    ],
    commonProducts: [
      "Veneer-faced solid-wood doors",
      "Wood-core doors with a bonded decorative veneer finish",
    ],
    faqs: [
      {
        q: "Does LR Resin work on natural wood veneer, not just synthetic laminate?",
        a: "Yes, it bonds reliably to both natural wood veneer and synthetic decorative laminate sheets.",
      },
      {
        q: "Will LR Resin discolour a wood-grain veneer?",
        a: "No — it cures clear and transparent, which is why it's suited to work where the natural grain and colour of the veneer need to stay visible.",
      },
      {
        q: "How is LR Resin catalysed for wood veneer bonding?",
        a: "With an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (around 0.4%), the same system used across Samrat Poly Resins' general-purpose grades.",
      },
      {
        q: "Is this different from laminating a synthetic sheet onto a plain door blank?",
        a: "The bonding principle is similar, but this page focuses specifically on timber and wood-core doors finished with a natural wood veneer rather than a synthetic laminate sheet.",
      },
      {
        q: "Can LR Resin be used for both hot-press and room-temperature veneer bonding?",
        a: "Yes — its gel time suits either a hot-press production line or clamped room-temperature bonding for smaller-scale work.",
      },
    ],
    relatedProductSlugs: ["mekp-hardener"],
    ctaHeading: "Need resin for your wood veneer door lamination?",
    ctaText: "Get a bulk quote or talk to our technical team about the right dosage for your veneer-facing line.",
  },
  {
    slug: "decorative-panel-lamination",
    title: "Resin for Decorative Panel Lamination",
    cardImage: "decorative-panel-lamination.jpg",
    cardImageAlt: "Interior wall finished with decorative wood-panelled laminate cladding",
    cardDescription: "Wall panels, partitions and architectural cladding are often faced with a decorative laminate sheet, bonded on with a fast-curing resin for a durable interior finish.",
    cardBenefit: "Consistent bonding across large panel runs.",
    seo: {
      title: "Resin for Decorative Panel Lamination",
      description: "How Lamination Resin bonds decorative laminate sheets onto wall panels, partitions and architectural cladding for interior fit-out work.",
      keywords: ["Decorative Panel Lamination", "Laminate Panel Bonding Resin", "LR Resin for Panels", "Interior Panel Lamination Resin"],
    },
    intro: "Beyond doors, decorative laminate sheets are widely used to face wall panels, partitions and architectural cladding in interior fit-out work — giving plain board substrates a finished, durable surface without the cost of solid material. Bonding that laminate sheet onto the panel substrate is a distinct production step from manufacturing the panel board itself.",
    whatTheyManufacture: "Decorative panel lamination produces laminate-faced wall panels, partition panels and architectural cladding boards used in office, retail and hospitality interior fit-out, where a durable, decorative surface finish is needed across large panel areas.",
    whySuitable: '<a href="/products/lamination-resin/">Lamination Resin (LR Resin)</a>\'s fast 5-minute gel time supports efficient bonding across production runs of multiple panels, and its strong adhesion to decorative laminate sheets holds up under the wear interior panels see in commercial fit-out. For structural panel fabrication using glass fibre reinforcement rather than decorative sheet bonding, <a href="/products/gp-clear-resin/">GP Clear Resin</a> is the more suitable choice, as covered on our <a href="/applications/resin-for-frp-panel-manufacturing/">FRP panel manufacturing page</a>.',
    requiredCharacteristics: [
      "Fast gel time to keep panel-facing production efficient across large runs",
      "Strong, durable adhesion to decorative laminate sheets",
      "A clean, consistent cure across wide panel surfaces",
      "Room-temperature or press-assisted cure depending on production scale",
      "Reliable batch-to-batch bonding quality",
    ],
    manufacturingProcess: 'Resin catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator is applied to the panel substrate, the decorative laminate sheet is positioned on top, and the assembly is pressed until the resin cures and bonds the sheet to the panel. Panels are then trimmed to size for installation.',
    advantages: [
      "5-minute gel time supports efficient bonding across large panel production runs",
      "Strong adhesion to decorative laminate sheets suited to commercial interior wear",
      "Consistent cure quality across wide panel surfaces",
    ],
    commonProducts: [
      "Laminate-faced wall panels",
      "Partition panels",
      "Architectural cladding boards",
    ],
    faqs: [
      {
        q: "Is LR Resin used to manufacture the panel board itself?",
        a: "No — it's used to bond a decorative laminate sheet onto an already-manufactured panel substrate, not to produce the board material itself.",
      },
      {
        q: "What kind of panels use this lamination process?",
        a: "Wall panels, partition panels and architectural cladding boards used in interior fit-out, where a decorative laminate face is bonded onto a plain substrate.",
      },
      {
        q: "How is LR Resin catalysed for panel lamination?",
        a: "With an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (around 0.4%), cured at room temperature or under a press.",
      },
      {
        q: "Should I use LR Resin or GP Clear Resin for FRP panel fabrication?",
        a: "LR Resin is for bonding a decorative laminate face onto a panel substrate. If you're building the structural FRP panel itself with glass fibre reinforcement, GP Clear Resin is the more suitable choice.",
      },
      {
        q: "Can LR Resin bond laminate sheets across large panel areas evenly?",
        a: "Yes, it's formulated to cure consistently across panel-facing production runs, supporting even bonding across wide surfaces.",
      },
    ],
    relatedProductSlugs: ["mekp-hardener"],
    ctaHeading: "Need resin for your decorative panel lamination line?",
    ctaText: "Get a bulk quote or talk to our technical team about the right dosage for your panel-facing production.",
  },
  {
    slug: "decorative-plywood-lamination",
    title: "Resin for Decorative Plywood Lamination",
    cardImage: "decorative-plywood-lamination.jpg",
    cardImageAlt: "Wood-slat decorative plywood wall panelling in a bathroom interior",
    cardDescription: "LR Resin bonds a decorative laminate or veneer face onto already-manufactured plywood — it does not make the plywood board itself.",
    cardBenefit: "Fast bonding onto finished plywood boards.",
    seo: {
      title: "Resin for Decorative Plywood Lamination",
      description: "LR Resin bonds decorative laminate or veneer sheets onto finished plywood boards, not for manufacturing plywood itself — a separate adhesive process.",
      keywords: ["Decorative Plywood Lamination", "Plywood Laminate Bonding Resin", "LR Resin for Plywood", "Fancy Plywood Resin"],
    },
    intro: "It's worth being precise about what this page covers: plywood itself is manufactured by bonding thin wood veneers together under heat and pressure with a wood adhesive — a completely different process and chemistry from what Lamination Resin does. This page is about the separate step that comes after: bonding a decorative laminate or veneer face onto already-finished plywood boards, sometimes sold as 'fancy' or decorative plywood.",
    whatTheyManufacture: "Decorative plywood lamination produces laminate- or veneer-faced plywood boards — standard plywood finished with a bonded decorative surface — used in furniture, doors and interior panelling where a ready-finished decorative plywood board is wanted.",
    whySuitable: '<a href="/products/lamination-resin/">Lamination Resin (LR Resin)</a> is formulated for exactly this decorative bonding step, not for manufacturing the plywood board itself. Its 5-minute gel time suits efficient facing production, and it adheres reliably to both the plywood substrate and the decorative sheet bonded onto it. Plywood manufacture — bonding the wood veneers into the board structure — uses a different adhesive system entirely and is not something LR Resin, or any Samrat Poly Resins product, is used for.',
    requiredCharacteristics: [
      "Reliable adhesion to a finished plywood substrate",
      "Fast gel time for efficient decorative-facing production",
      "A clean, consistent cure across the plywood surface",
      "Room-temperature or press-assisted cure depending on production scale",
      "No role in bonding the plywood's internal wood veneer layers — that's a separate process",
    ],
    manufacturingProcess: 'Resin catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator is applied to the surface of finished plywood, a decorative laminate or veneer sheet is placed on top, and the assembly is pressed until the resin cures and bonds the sheet to the board. The laminated plywood is then trimmed and finished for use in <a href="/applications/furniture-lamination/">furniture</a>, doors or panelling.',
    advantages: [
      "5-minute gel time supports efficient decorative-facing production on plywood boards",
      "Reliable adhesion to plywood substrates and decorative sheets alike",
      "Consistent bonding quality across production runs",
    ],
    commonProducts: [
      "Decorative or \"fancy\" laminated plywood boards",
      "Laminate-faced plywood used in furniture and door manufacturing",
    ],
    faqs: [
      {
        q: "Does LR Resin manufacture plywood?",
        a: "No. Plywood is made by bonding wood veneers together with a wood adhesive under heat and pressure — a separate process and chemistry. LR Resin is used afterward, to bond a decorative sheet onto the finished plywood board.",
      },
      {
        q: "What is 'decorative' or 'fancy' plywood?",
        a: "It's standard plywood finished with a bonded decorative laminate or veneer face, giving it a ready-to-use finished surface for furniture, doors or panelling.",
      },
      {
        q: "How is LR Resin catalysed for plywood facing?",
        a: "With an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (around 0.4%), cured at room temperature or under a press.",
      },
      {
        q: "Can LR Resin be used to bond plywood veneer layers during manufacture?",
        a: "No — that step uses a wood adhesive system, not a polyester lamination resin. LR Resin is used only for the decorative facing step after the plywood board is already made.",
      },
      {
        q: "What kind of decorative sheet is bonded onto plywood with LR Resin?",
        a: "Either a synthetic decorative laminate sheet or a natural wood veneer, depending on the finish wanted.",
      },
    ],
    relatedProductSlugs: ["mekp-hardener"],
    ctaHeading: "Need resin for decorative plywood facing?",
    ctaText: "Get a bulk quote or talk to our technical team about the right dosage for your plywood-facing production.",
  },
  {
    slug: "furniture-lamination",
    title: "Resin for Furniture Lamination",
    cardImage: "furniture-lamination.webp",
    cardImageAlt: "Glossy laminate-faced wardrobe cabinet with decorative gold trim detailing",
    cardDescription: "LR Resin is one of several methods furniture manufacturers use to bond decorative laminate onto panels — alongside PU and contact adhesive systems.",
    cardBenefit: "Fast-curing option for decorative furniture surfaces.",
    seo: {
      title: "Resin for Furniture Lamination",
      description: "How Lamination Resin bonds decorative laminate onto furniture panels, and why it is one valid option among several the furniture industry uses.",
      keywords: ["Furniture Lamination Resin", "LR Resin for Furniture", "Modular Furniture Lamination", "Laminate Bonding Resin"],
    },
    intro: "It's worth being upfront about this one: the furniture industry bonds decorative laminate onto panels using several different methods, and polyester lamination resin is one valid option among them, not the dominant or only technology. PU and contact adhesives are also widely used for furniture laminate bonding. This page covers where and why LR Resin fits into that mix.",
    whatTheyManufacture: "Furniture lamination work produces laminate-faced panels for modular furniture, cabinet doors and shutters, and cabinetry surfaces — giving furniture-grade board a decorative, durable finish.",
    whySuitable: '<a href="/products/lamination-resin/">Lamination Resin (LR Resin)</a> is a valid choice for furniture panel lamination where its 5-minute gel time and reliable adhesion to laminate sheets suit the production line, particularly where a resin bond is preferred over a contact-adhesive process. It is one option among several the furniture industry uses — PU and contact adhesives remain common alternatives, and the right choice depends on the specific production setup and finish required.',
    requiredCharacteristics: [
      "Fast gel time to suit furniture-panel production runs",
      "Reliable adhesion to decorative laminate sheets",
      "A clean, consistent surface finish",
      "Room-temperature or press-assisted cure depending on the production line",
    ],
    manufacturingProcess: 'Resin catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator is applied to the furniture panel substrate, the decorative laminate sheet is positioned on top, and the assembly is pressed until the resin cures and bonds the sheet to the panel. The laminated panel is then cut, edge-banded and assembled into the finished furniture piece.',
    advantages: [
      "5-minute gel time suits furniture-panel production runs",
      "Reliable adhesion to decorative laminate sheets",
      "A resin-bonded alternative where a contact-adhesive process isn't preferred",
    ],
    commonProducts: [
      "Laminate-faced modular furniture panels",
      "Cabinet doors and shutters",
      "Decorative cabinetry surfaces",
    ],
    faqs: [
      {
        q: "Is LR Resin the standard bonding method for furniture lamination?",
        a: "No — it's one valid option. PU and contact adhesives are also widely used in furniture manufacturing for the same job. The right choice depends on your production setup.",
      },
      {
        q: "Why would a furniture manufacturer choose LR Resin over a contact adhesive?",
        a: "Some manufacturers prefer a resin bond for its cure characteristics and finish; others prefer contact adhesive for its application speed. Both are legitimate, established methods.",
      },
      {
        q: "How is LR Resin catalysed for furniture panel lamination?",
        a: "With an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (around 0.4%), cured at room temperature or under a press.",
      },
      {
        q: "Can LR Resin be used for cabinet doors and shutters as well as flat panels?",
        a: "Yes, it's used for bonding decorative laminate onto cabinet doors, shutters and general cabinetry panels.",
      },
      {
        q: "Does LR Resin work with both synthetic laminate and wood veneer for furniture?",
        a: "Yes, it bonds reliably to both synthetic decorative laminate sheets and natural wood veneer.",
      },
    ],
    relatedProductSlugs: ["mekp-hardener"],
    ctaHeading: "Need resin for your furniture lamination line?",
    ctaText: "Get a bulk quote or talk to our technical team about the right dosage for your panel-facing production.",
  },

  // ============================================================================
  //  GP GELCOAT RESIN APPLICATIONS — card-only stubs approved via technical
  //  audit (see conversation). Gelcoat is a surface-coating/mould-finish resin,
  //  never the structural laminate — every description below is written to
  //  keep that distinction explicit and avoid implying gelcoat is structural.
  //  All five are `draft: true`: cards render fully on the GP Gelcoat Resin
  //  product page now, but no dedicated /applications/ page exists yet, so
  //  getStaticPaths excludes them and each card's CTA links back to the
  //  product page instead of a dead URL. Flip draft to false individually,
  //  one at a time, once each page is actually built (Step 4).
  // ============================================================================
  {
    slug: "gelcoat-for-boat-marine-hull-finishing",
    title: "Gelcoat for Boat & Marine Hull Finishing",
    cardDescription: "Boat and marine hulls need a smooth, glossy cosmetic skin applied to the mould first — a surface coating, not the structural laminate that gives the hull its strength.",
    cardBenefit: "Glossy, mould-ready hull finish.",
    cardImage: "gelcoat-boat-hull-finish.jpg",
    cardImageAlt: "Glossy white fiberglass boat hull showing a smooth gelcoat finish",
    seo: {
      title: "Gelcoat for Boat & Marine Hull Finishing",
      description: "How GP Gelcoat Resin forms an FRP boat hull's outer finish, applied before the structural laminate, and when Vinyl Ester Resin suits hulls kept in water.",
      keywords: ["Gelcoat for Boat Hulls", "Marine Gelcoat Finish", "FRP Hull Gelcoat", "Boat Hull Surface Coating"],
    },
    intro: "Every FRP boat hull starts life inside a mould, and the very first material to touch that mould face isn't the structural laminate — it's gelcoat. Sprayed or brushed onto the mould before anything else, it's what becomes the hull's finished, visible outer surface once the boat is demoulded. This page covers that specific outer-skin step, not the structural lay-up covered on our Boat & Marine Components page.",
    whatTheyManufacture: "Marine gelcoat finishes the outer surface of FRP boat hulls, decks, cabin structures and other exterior marine components — the smooth, glossy, coloured skin visible on a finished boat, applied to the mould before the structural laminate is built up behind it.",
    whySuitable: 'GP Gelcoat Resin is thixotropic and much thicker (around 11,000 cPs) than a laminating resin, which is exactly what a curved, often vertical hull mould needs — it clings to the mould face without sagging or running while it gels. It is not the structural material of the hull: once it has gelled, <a href="/products/fibre-glass-mat/">glass fibre</a> reinforcement wet out with <a href="/products/gp-clear-resin/">GP Clear Resin</a> is built up behind it to form the actual structural laminate that gives the hull its strength. For hulls that stay in the water continuously, some builders step up to a <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> laminate behind the gelcoat instead of GP Clear Resin, since vinyl ester offers meaningfully better resistance to the osmotic blistering that continuous immersion can cause — this is a laminate-side decision, not a change to the gelcoat itself.',
    requiredCharacteristics: [
      "Thixotropic body that clings to curved, vertical hull mould surfaces without sagging",
      "High gloss, smooth cured finish straight off the mould face",
      "Compatible with spray or brush application over large hull areas",
      "Pigmentable for coloured hulls rather than plain white only",
      "Room-temperature MEKP cure matching standard hand lay-up workflows",
    ],
    manufacturingProcess: 'A wax release agent is applied to the open hull mould first, then <a href="/products/gp-gelcoat-resin/">GP Gelcoat Resin</a>, catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator, is sprayed or brushed on and left to gel. Once gelled, a layer of <a href="/products/fibre-glass-mat/">glass fibre</a> wet out with <a href="/products/gp-clear-resin/">GP Clear Resin</a> is applied directly behind it, followed by the remaining structural laminate layers to build up the full hull thickness. Once fully cured, the hull is released from the mould with the gelcoat now forming its finished, visible outer surface — no additional surface finishing is needed.',
    advantages: [
      "Glossy, ready-to-use hull finish straight from the mould, without post-finishing",
      "Thixotropic body suited to large, curved hull surfaces without special equipment",
      "Pigmentable for coloured hulls in a single application step",
      "Standard MEKP/cobalt cure keeps the process consistent with the rest of the hand lay-up workflow",
    ],
    commonProducts: [
      "FRP boat hulls and decks",
      "Cabin structures and marine component exteriors",
      "Coloured or white gelcoated hull surfaces",
    ],
    faqs: [
      {
        q: "Is GP Gelcoat Resin the structural material of a boat hull?",
        a: "No. It is the outer cosmetic and protective skin, applied to the mould first. The structural laminate that gives the hull its strength is built up behind the gelcoat, typically using GP Clear Resin reinforced with glass fibre.",
      },
      {
        q: "Why is gelcoat sprayed onto the mould before the hull laminate?",
        a: "Applying it first, against the smooth mould face, is what gives the finished hull its glossy, ready-to-use surface once demoulded — the gelcoat cures against the mould, and the structural laminate is built up on top of it afterwards.",
      },
      {
        q: "Can boat hull gelcoat be coloured?",
        a: "Yes. GP Gelcoat Resin is supplied plain white, but FRP Polyester Pigment can be blended in before catalysing to produce a coloured hull finish.",
      },
      {
        q: "Does GP Gelcoat Resin resist UV fading on a boat kept outdoors?",
        a: "GP Gelcoat Resin has no specific UV-stabiliser package confirmed in its specification. Like any unstabilised polyester surface, it can gradually yellow or chalk under prolonged direct sun exposure. For a hull expected to hold its colour long-term outdoors, discuss UV-stabilised formulation requirements with our technical team before specifying.",
      },
      {
        q: "Should I use Vinyl Ester Resin instead of GP Clear Resin behind the gelcoat for a hull kept permanently in water?",
        a: "For hulls in continuous water immersion, a Vinyl Ester Resin laminate behind the gelcoat offers meaningfully better resistance to osmotic blistering than a standard polyester laminate. This changes the laminate behind the gelcoat, not the gelcoat layer itself.",
      },
    ],
    relatedProductSlugs: ["gp-clear-resin", "mekp-hardener", "frp-polyester-pigment", "vinyl-ester-resin"],
    ctaHeading: "Need gelcoat for your boat or marine hull production?",
    ctaText: "Get a bulk quote or talk to our technical team about the right gelcoat and laminate combination for your hull.",
  },
  {
    slug: "gelcoat-for-frp-bathware-sanitaryware",
    title: "Gelcoat for FRP Bathware & Sanitaryware",
    cardDescription: "Bathtubs and shower trays need a smooth, glossy mould-facing surface coat applied before the structural laminate — the cosmetic finish, not the reinforced backing.",
    cardBenefit: "Smooth, ready-to-use surface finish.",
    cardImage: "gelcoat-bathtub-finish.jpg",
    cardImageAlt: "Glossy white freestanding FRP bathtub with a smooth gelcoat surface finish",
    seo: {
      title: "Gelcoat for FRP Bathware & Sanitaryware",
      description: "How GP Gelcoat Resin forms the smooth, coloured surface of FRP bathtubs and shower trays, applied to the mould before the structural laminate goes in behind it.",
      keywords: ["Gelcoat for Bathtubs", "FRP Sanitaryware Gelcoat", "Shower Tray Gelcoat", "Bathware Surface Coating"],
    },
    intro: "The smooth, glossy surface of an FRP bathtub or shower tray is what a customer actually touches and sees — and it isn't the structural fibreglass laminate underneath. It's a gelcoat layer, sprayed or brushed onto the mould before any reinforcement goes in, that becomes the finished surface once the part is demoulded. This page covers that surface-coating step specifically, not the structural laminate behind it.",
    whatTheyManufacture: "Gelcoat finishes the visible, mould-facing surface of FRP bathtubs, shower trays, wash basins and general sanitaryware — the smooth, coloured, easy-to-clean surface, applied before the structural laminate is built up behind it.",
    whySuitable: 'Bathware moulds are often deep, curved shapes, and <a href="/products/gp-gelcoat-resin/">GP Gelcoat Resin</a>\'s thixotropic body clings to those curved mould surfaces without sagging while it gels — the same property that suits vertical hull moulds works well here too. It is not the structural material of the tub or tray: once the gelcoat has gelled, <a href="/products/fibre-glass-mat/">glass fibre</a> reinforcement wet out with <a href="/products/gp-clear-resin/">GP Clear Resin</a> is built up behind it to form the actual structural shell. GP Gelcoat Resin is a general-purpose orthophthalic grade — some premium sanitaryware uses a more specialised gelcoat chemistry for continuous wet-service durability, so for demanding commercial installations it is worth confirming your specific requirement with our technical team.',
    requiredCharacteristics: [
      "Thixotropic body that clings to deep, curved bathware mould shapes without sagging",
      "High gloss, smooth cured finish requiring no further surface work",
      "Pigmentable for the range of colours bathware and sanitaryware are commonly sold in",
      "Room-temperature MEKP cure compatible with standard mould workflows",
    ],
    manufacturingProcess: 'Gelcoat is sprayed or brushed onto the open bathtub or shower tray mould first and left to gel, then <a href="/products/fibre-glass-mat/">glass fibre</a> reinforcement wet out with <a href="/products/gp-clear-resin/">GP Clear Resin</a>, catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator, is built up behind it to form the structural shell. Once cured, the part is released from the mould with the gelcoat forming its finished, ready-to-use surface, and is trimmed and fitted with drainage and hardware.',
    advantages: [
      "Smooth, glossy, ready-to-use surface straight from the mould",
      "Pigmentable to match standard bathware colour ranges in a single application step",
      "Thixotropic body suited to deep, curved mould shapes without special equipment",
      "Consistent MEKP/cobalt cure across repeated production runs",
    ],
    commonProducts: [
      "FRP bathtubs",
      "Shower trays and shower bases",
      "Wash basins and general sanitaryware",
    ],
    faqs: [
      {
        q: "Is the gelcoat on a bathtub the same material as the structural shell underneath?",
        a: "No. The gelcoat is the outer surface coating, applied to the mould first. The structural shell is a separate fibreglass laminate — typically GP Clear Resin reinforced with glass fibre — built up behind the gelcoat.",
      },
      {
        q: "Can FRP bathtub and shower tray gelcoat be coloured?",
        a: "Yes. GP Gelcoat Resin is supplied plain white, and FRP Polyester Pigment can be blended in before catalysing to match standard bathware colour ranges.",
      },
      {
        q: "Is GP Gelcoat Resin suitable for premium, continuous-wet-service sanitaryware?",
        a: "It is a general-purpose orthophthalic gelcoat suitable for standard FRP bathware manufacturing. Some premium sanitaryware uses a more specialised gelcoat chemistry for maximum long-term wet-service durability — for demanding commercial applications, discuss your specific requirement with our technical team.",
      },
      {
        q: "How is gelcoat catalysed for bathware manufacturing?",
        a: "It is cured at room temperature with an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (around 0.4%), the same system used across Samrat Poly Resins' gelcoat and general-purpose grades.",
      },
      {
        q: "Why is gelcoat applied before the fibreglass shell rather than after?",
        a: "Applying it first, against the smooth mould face, is what gives the finished tub or tray its glossy surface once demoulded — there is no way to achieve the same mould-facing finish by coating the part afterward.",
      },
    ],
    relatedProductSlugs: ["gp-clear-resin", "mekp-hardener", "fibre-glass-mat", "frp-polyester-pigment"],
    ctaHeading: "Need gelcoat for your bathware or sanitaryware production?",
    ctaText: "Get a bulk quote or talk to our technical team about the right gelcoat and laminate combination for your mould.",
  },
  {
    slug: "gelcoat-for-water-tank-exteriors",
    title: "Gelcoat for Water Tank Exteriors",
    cardDescription: "FRP water tank exteriors need a clean, glossy cosmetic surface coat applied to the mould face — separate from the structural laminate that forms the tank wall itself.",
    cardBenefit: "Clean, finished exterior surface.",
    seo: {
      title: "Gelcoat for Water Tank Exteriors",
      description: "GP Gelcoat Resin for the exterior surface of FRP water tanks — not for interior or potable-water-contact surfaces. What it covers, and what it doesn't.",
      keywords: ["Gelcoat for Water Tank Exteriors", "FRP Tank Exterior Finish", "Water Tank Surface Coating", "Non-Potable Tank Gelcoat"],
    },
    intro: "This page is specifically about the outer, exterior surface of an FRP water tank — the cosmetic gelcoat skin visible from the outside. It does not cover, and GP Gelcoat Resin is not recommended for, the interior surface of a tank that will hold potable (drinking) water, which requires certified food-grade materials Samrat Poly Resins does not currently supply. Read on for what this page does cover: the exterior finish only.",
    whatTheyManufacture: "Gelcoat finishes the exterior, weather-facing surface of FRP water tanks — sectional panel tanks, one-piece cylindrical or rectangular tanks, and underground or overhead storage tanks — applied to the mould before the structural laminate that forms the tank wall is built up behind it.",
    whySuitable: 'GP Gelcoat Resin\'s thixotropic body suits the flat and curved exterior mould surfaces used in tank panel and shell production, and it is not the structural material of the tank wall: <a href="/products/fibre-glass-mat/">glass fibre</a> reinforcement wet out with <a href="/products/gp-clear-resin/">GP Clear Resin</a> forms the actual structural laminate behind it. One important limitation for this specific application: independent industry sources describe UV-stabilised gelcoat as essential for tank exteriors that stay outdoors for the tank\'s full service life, since unstabilised polyester can yellow, chalk and eventually degrade under years of continuous sun exposure. GP Gelcoat Resin has no UV-stabiliser package confirmed in its specification, so for tanks expected to hold their exterior appearance over a long outdoor service life, discuss UV-stabilised formulation requirements with our technical team before specifying. This page covers exterior finishing only — it does not apply to interior, potable-water-contact surfaces.',
    requiredCharacteristics: [
      "Thixotropic body suited to flat and curved tank panel or shell exterior moulds",
      "High gloss, smooth cured finish for the tank's visible exterior surface",
      "Pigmentable for coloured or branded tank exteriors",
      "Room-temperature MEKP cure compatible with standard tank panel production",
      "Not certified or recommended for interior, potable-water-contact surfaces",
    ],
    manufacturingProcess: 'Gelcoat is sprayed or brushed onto the exterior-facing side of the tank panel or shell mould first and left to gel, then <a href="/products/fibre-glass-mat/">glass fibre</a> reinforcement wet out with <a href="/products/gp-clear-resin/">GP Clear Resin</a>, catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator, is built up behind it to form the structural tank wall. Once cured, panels are released from the mould, trimmed, and — for sectional tanks — bolted together on site, with the gelcoat forming the tank\'s finished exterior surface. The interior surface of a tank is a separate specification question entirely, particularly for potable water storage.',
    advantages: [
      "Clean, glossy exterior finish straight from the mould, without post-finishing",
      "Pigmentable for coloured or company-branded tank exteriors",
      "Thixotropic body suited to flat and curved exterior panel moulds",
      "Consistent MEKP/cobalt cure across repeated panel production runs",
    ],
    commonProducts: [
      "Sectional panel water tank exteriors",
      "One-piece cylindrical and rectangular tank exteriors",
      "Underground and overhead tank exterior surfaces",
    ],
    faqs: [
      {
        q: "Can GP Gelcoat Resin be used for the interior of a potable (drinking) water tank?",
        a: "No. This page and GP Gelcoat Resin cover exterior tank finishing only. Potable water tank interiors require certified food-grade, NSF/ANSI 61-type materials that Samrat Poly Resins does not currently supply — always confirm interior tank materials meet the relevant drinking-water standards for your project with a certified supplier.",
      },
      {
        q: "Is the gelcoat the structural material of the tank wall?",
        a: "No. It is the cosmetic exterior surface coating, applied to the mould first. The structural laminate that actually forms the tank wall — typically GP Clear Resin reinforced with glass fibre — is built up behind it.",
      },
      {
        q: "Is GP Gelcoat Resin UV-stabilised for tanks that stay outdoors long-term?",
        a: "Not as a confirmed feature of its current specification. Since tank exteriors are outdoors for the tank's entire service life, this matters more here than in most other gelcoat applications — for tanks needing long-term outdoor colour and surface stability, discuss UV-stabilised formulation options with our technical team before specifying.",
      },
      {
        q: "Can tank exterior gelcoat be coloured?",
        a: "Yes. GP Gelcoat Resin is supplied plain white, and FRP Polyester Pigment can be blended in before catalysing for a coloured or branded tank exterior.",
      },
      {
        q: "What reinforcement is used behind the gelcoat on a tank panel?",
        a: "Typically E-glass chopped strand mat, sometimes combined with woven roving for added strength, wet out with GP Clear Resin to form the structural laminate behind the gelcoat.",
      },
    ],
    relatedProductSlugs: ["gp-clear-resin", "mekp-hardener", "fibre-glass-mat", "frp-polyester-pigment"],
    ctaHeading: "Need gelcoat for your water tank exterior production?",
    ctaText: "Get a bulk quote or talk to our technical team about the right gelcoat and laminate combination for your tank panels.",
  },
  {
    slug: "gelcoat-for-general-frp-mould-finishing",
    title: "Gelcoat for General FRP Mould Finishing",
    cardDescription: "Panels, mouldings, furniture and décor items need a smooth, glossy mould-facing surface coat, applied before the structural laminate behind it — the cosmetic layer, not the structural resin.",
    cardBenefit: "Consistent, glossy mould finish.",
    cardImage: "gelcoat-mould-grating-finish.jpg",
    cardImageAlt: "Stacked coloured FRP moulded grating panels showing a smooth gelcoat surface finish",
    seo: {
      title: "Gelcoat for General FRP Mould Finishing",
      description: "How GP Gelcoat Resin finishes panels, furniture, planters and décor items, applied to the mould before the structural laminate is built up behind it.",
      keywords: ["Gelcoat for FRP Panels", "Gelcoat for Moulded Products", "FRP Décor Gelcoat", "General Mould Finishing Resin"],
    },
    intro: "Beyond boats, bathware and tanks, a huge range of everyday FRP items share the same finishing step: panels, furniture, planters, signage, mannequins and general moulded décor all get their smooth, coloured, ready-to-use surface from gelcoat applied to the mould first — not from the structural laminate underneath. This page covers that general-purpose finishing role across the varied moulded products a typical FRP workshop produces.",
    whatTheyManufacture: "General FRP mould finishing covers the visible surface of decorative and industrial moulded products — wall panels, cladding, furniture panels, planters, signage, mannequins and other moulded décor and industrial items — wherever a smooth, glossy, coloured mould-facing finish is wanted rather than a raw laminate surface.",
    whySuitable: '<a href="/products/gp-gelcoat-resin/">GP Gelcoat Resin</a>\'s thixotropic body and high gloss finish suit the varied mould shapes this category covers, from flat panels to detailed decorative mouldings. As with every other gelcoat application, it is not the structural material of the part: <a href="/products/fibre-glass-mat/">glass fibre</a> reinforcement wet out with <a href="/products/gp-clear-resin/">GP Clear Resin</a> is built up behind the gelcoat to form the actual structural laminate, sized to whatever the specific product needs. Because this category spans such varied products, required laminate thickness and reinforcement varies job to job — the gelcoat step itself stays the same throughout.',
    requiredCharacteristics: [
      "Good flow into varied mould shapes, from flat panels to detailed decorative mouldings",
      "High gloss, smooth cured finish across a wide range of product types",
      "Pigmentable for the colour range general moulded and décor products are commonly sold in",
      "Room-temperature MEKP cure compatible with standard mould workflows",
    ],
    manufacturingProcess: 'Gelcoat is sprayed or brushed onto the mould first and left to gel, then <a href="/products/fibre-glass-mat/">glass fibre</a> reinforcement wet out with <a href="/products/gp-clear-resin/">GP Clear Resin</a>, catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator, is built up behind it — with thickness and layer count adjusted to the specific product, from a lightweight decorative item to a structural panel. Once cured, the part is released from the mould with the gelcoat forming its finished surface, trimmed and finished as the product requires.',
    advantages: [
      "One finishing process covers a wide range of moulded product types",
      "Pigmentable in a single application step for coloured décor and panel products",
      "Smooth, glossy, ready-to-use surface straight from the mould",
      "Consistent MEKP/cobalt cure across varied production runs",
    ],
    commonProducts: [
      "Decorative and cladding wall panels",
      "Furniture panels and planters",
      "Signage, mannequins and moulded décor",
      "General industrial moulded FRP products",
    ],
    faqs: [
      {
        q: "Is gelcoat used the same way across such different products as panels, furniture and décor items?",
        a: "The gelcoat step itself is consistent — sprayed or brushed onto the mould first, then backed with a structural laminate. What varies job to job is the laminate thickness and reinforcement built up behind it, which is sized to whatever the specific product needs.",
      },
      {
        q: "Is the gelcoat the structural material of a moulded panel or décor item?",
        a: "No. It is the cosmetic surface coating, applied to the mould first. The structural laminate — typically GP Clear Resin reinforced with glass fibre — is built up behind it separately.",
      },
      {
        q: "Can general FRP mould gelcoat be coloured?",
        a: "Yes. GP Gelcoat Resin is supplied plain white, and FRP Polyester Pigment can be blended in before catalysing to match the colour range needed for panels, furniture or décor items.",
      },
      {
        q: "Does gelcoat work for detailed or ornamental mould shapes?",
        a: "Yes — its flow and thixotropic body support good coverage of detailed or textured mould surfaces, helping reproduce ornamental designs accurately in the cured finish.",
      },
      {
        q: "How is gelcoat catalysed for general mould finishing work?",
        a: "It is cured at room temperature with an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (around 0.4%), the same system used across Samrat Poly Resins' gelcoat and general-purpose grades.",
      },
    ],
    relatedProductSlugs: ["gp-clear-resin", "mekp-hardener", "frp-polyester-pigment", "fibre-glass-mat"],
    ctaHeading: "Need gelcoat for your general FRP mould production?",
    ctaText: "Get a bulk quote or talk to our technical team about the right gelcoat and laminate combination for your moulded product.",
  },
  {
    slug: "gelcoat-for-automotive-body-panels",
    title: "Gelcoat for Automotive & Transport Body Panels",
    cardDescription: "FRP body panels for buses, autorickshaws and trucks need a smooth, glossy cosmetic surface coat applied to the mould face — separate from the structural laminate built up behind it.",
    cardBenefit: "Glossy, paint-ready panel surface.",
    cardImage: "gelcoat-truck-cabin-panels.webp",
    cardImageAlt: "Interior of a moulded FRP commercial vehicle cab showing panel body finish",
    seo: {
      title: "Gelcoat for Bus & Commercial Vehicle Panels",
      description: "GP Gelcoat Resin for FRP body panels on buses, commercial and utility vehicles — the mould-facing finish, applied before the structural laminate behind it.",
      keywords: ["Gelcoat for Bus Body Panels", "Commercial Vehicle FRP Gelcoat", "Truck Body Panel Gelcoat", "Transport Panel Surface Coating"],
    },
    intro: "Bus, commercial and utility vehicle body fabricators across India build exterior panels from FRP, and — as with any open-mould FRP part — the finished, visible surface of those panels comes from gelcoat, applied to the mould before the structural laminate is built up behind it. This page covers that finishing step for buses, commercial vehicles, utility vehicles and truck bodies specifically.",
    whatTheyManufacture: "Gelcoat finishes the visible surface of FRP body panels for buses, tourist and staff coaches, commercial and utility vehicle bodies, and truck bodies — including insulated panel bodies for goods transport — applied to the mould before the structural laminate behind it is built up.",
    whySuitable: '<a href="/products/gp-gelcoat-resin/">GP Gelcoat Resin</a>\'s thixotropic body and high gloss finish suit the flat and gently curved panel moulds typical of bus and commercial vehicle body fabrication. It is not the structural material of the panel: <a href="/products/fibre-glass-mat/">glass fibre</a> reinforcement wet out with <a href="/products/gp-clear-resin/">GP Clear Resin</a> forms the structural laminate behind it, often over a foam or honeycomb core for insulated panel bodies. Because transport body panels are exposed outdoors for the vehicle\'s working life, the same caution applies here as with any long-term outdoor gelcoat use: GP Gelcoat Resin has no UV-stabiliser package confirmed in its specification, so where long-term outdoor colour stability matters, discuss UV-stabilised formulation requirements with our technical team before specifying.',
    requiredCharacteristics: [
      "Thixotropic body suited to flat and gently curved panel moulds",
      "High gloss, smooth cured finish ready for the vehicle body without further finishing",
      "Pigmentable to match fleet or livery colours",
      "Room-temperature MEKP cure compatible with standard panel production",
    ],
    manufacturingProcess: 'Gelcoat is sprayed or brushed onto the panel mould first and left to gel, then <a href="/products/fibre-glass-mat/">glass fibre</a> reinforcement wet out with <a href="/products/gp-clear-resin/">GP Clear Resin</a>, catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator, is built up behind it — for insulated body panels, this is often laminated over a foam or honeycomb core. Once cured, panels are released from the mould with the gelcoat forming the finished exterior surface, trimmed, and fitted to the vehicle body frame.',
    advantages: [
      "Glossy, ready-to-fit panel surface straight from the mould",
      "Pigmentable to match fleet or livery colours in a single application step",
      "Thixotropic body suited to flat and curved panel mould shapes",
      "Consistent MEKP/cobalt cure across repeated panel production runs",
    ],
    commonProducts: [
      "Bus and coach body panels",
      "Commercial and utility vehicle body panels",
      "Insulated truck body panels for goods transport",
    ],
    faqs: [
      {
        q: "Is the gelcoat the structural material of a vehicle body panel?",
        a: "No. It is the cosmetic exterior surface coating, applied to the mould first. The structural laminate — typically GP Clear Resin reinforced with glass fibre, sometimes over a foam or honeycomb core — is built up behind it.",
      },
      {
        q: "Can bus or truck body panel gelcoat be coloured to match fleet livery?",
        a: "Yes. GP Gelcoat Resin is supplied plain white, and FRP Polyester Pigment can be blended in before catalysing to match fleet or livery colours.",
      },
      {
        q: "Is GP Gelcoat Resin UV-stabilised for panels that stay outdoors on a vehicle body?",
        a: "Not as a confirmed feature of its current specification. Since transport body panels are outdoors for the vehicle's working life, this matters here as it does for tank exteriors — for panels needing long-term outdoor colour stability, discuss UV-stabilised formulation options with our technical team before specifying.",
      },
      {
        q: "Does this cover motorsport or aerospace panel applications?",
        a: "No. This page covers buses, commercial vehicles, utility vehicles and truck body panels specifically. Motorsport and aerospace composite panels typically require specialised resin systems beyond general-purpose gelcoat and are outside the scope of GP Gelcoat Resin.",
      },
      {
        q: "How is gelcoat catalysed for vehicle body panel production?",
        a: "It is cured at room temperature with an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (around 0.4%), the same system used across Samrat Poly Resins' gelcoat and general-purpose grades.",
      },
    ],
    relatedProductSlugs: ["gp-clear-resin", "mekp-hardener", "frp-polyester-pigment", "fibre-glass-mat"],
    ctaHeading: "Need gelcoat for your bus or commercial vehicle body panel production?",
    ctaText: "Get a bulk quote or talk to our technical team about the right gelcoat and laminate combination for your body panels.",
  },

  // ============================================================================
  //  GP YELLOW RESIN APPLICATIONS — card-only stubs approved via technical
  //  audit (Step 1) and Step 2 product-page work. GP Yellow Resin is a
  //  general-purpose orthophthalic structural laminating resin — same MEKP +
  //  cobalt octoate cure system and manufacturing route as GP Clear Resin,
  //  differing mainly in viscosity (450–600 cPs vs. 350–450 cPs), gel time
  //  (10–15 min vs. <8 min) and its transparent yellow colour rather than
  //  colourless. Every card below is written to state that plainly — never
  //  implying GP Yellow Resin is superior to GP Clear Resin, only that it is
  //  a workable, same-purpose alternative wherever the resin's own colour is
  //  hidden behind a gelcoat, paint or another layer. Slugs are prefixed
  //  "gp-yellow-resin-for-" (mirroring the "gelcoat-for-" pattern used for
  //  GP Gelcoat Resin) specifically so they never collide with GP Clear
  //  Resin's existing "resin-for-*" application slugs/pages, which already
  //  own this same search intent — see the Step 1 audit for why no new,
  //  independent application ecosystem was invented here.
  //  All 7 are `draft: true`: cards render fully on the GP Yellow Resin
  //  product page now, but no dedicated /applications/ page exists yet, so
  //  getStaticPaths excludes them and each card's CTA links back to the
  //  product page instead of a dead URL. Flip draft to false individually,
  //  one at a time, once each page is actually built (Step 4).
  // ============================================================================
  {
    slug: "gp-yellow-resin-for-water-tank-manufacturing",
    title: "GP Yellow Resin for Water Tank Manufacturing",
    cardDescription: "Water tank panels need a resin that wets out glass reinforcement cleanly and cures into a strong, leak-resistant laminate — GP Yellow Resin's orthophthalic base and MEKP/cobalt cure suit this structural role wherever the tank's exterior is finished over the resin's natural yellow tint.",
    cardBenefit: "Consistent laminate behind a finished exterior.",
    cardImage: "gp-yellow-water-tank.jpg",
    cardImageAlt: "Yellow multilayer rotomoulded plastic water storage tank",
    seo: {
      title: "GP Yellow Resin for Water Tank Manufacturing",
      description: "GP Yellow Resin as a structural laminating resin for FRP water tank panels — same MEKP/cobalt cure as GP Clear Resin, thicker body, slower gel.",
      keywords: ["GP Yellow Resin for Water Tanks", "Yellow Resin Water Tank Manufacturing", "FRP Tank Laminating Resin"],
    },
    draft: false,
    intro: "FRP water tanks — bolted sectional panel tanks, one-piece cylindrical shells, and underground or overhead storage vessels — all depend on a laminating resin that wets out glass reinforcement evenly and cures into a rigid, watertight shell. GP Yellow Resin, Samrat Poly Resins' transparent yellow general-purpose orthophthalic polyester resin, fills that structural role using the same MEKP and cobalt octoate cure system as our GP Clear Resin. It is a thicker-bodied, slightly slower-gelling grade of the same base chemistry, with a yellow tint rather than being colourless — this page covers where that combination fits a tank fabricator's process.",
    whatTheyManufacture: "Water tank manufacturers produce bolted sectional panel tanks assembled on site from moulded FRP panels, one-piece cylindrical and rectangular shells, underground and overhead storage tanks, and industrial process-water vessels, ranging from small domestic capacities to large institutional and industrial installations.",
    whySuitable: 'GP Yellow Resin uses the same general-purpose orthophthalic chemistry and <a href="/products/mekp-hardener/">MEKP</a> plus cobalt octoate cure system as our <a href="/products/gp-clear-resin/">GP Clear Resin</a>, so it wets out chopped strand mat and woven roving in the same way during hand lay-up. Its main practical difference is a thicker body (450–600 cPs against GP Clear Resin\'s 350–450 cPs) and a slower 10–15 minute gel time, which gives fabricators a longer open working window when rolling out reinforcement across a large tank panel — a genuine trade-off against GP Clear Resin\'s faster production cycle, not an improvement on it. Because the structural laminate inside a tank wall is rarely the visible surface once a tank is finished and installed, GP Yellow Resin\'s transparent yellow tint carries no functional downside here, making it a workable, same-purpose alternative wherever a fabricator prefers its slower-gelling grade.',
    requiredCharacteristics: [
      "Sufficient working time to roll out chopped strand mat and woven roving across large panel surfaces before the resin gels",
      "Reliable wet-out of glass reinforcement despite a thicker body than a low-viscosity laminating grade",
      "Adequate mechanical strength once cured, to withstand the hydrostatic pressure of a full tank",
      "Room-temperature MEKP/cobalt octoate cure with no special curing equipment required",
      "Consistent batch-to-batch quality across the multiple resin-and-reinforcement passes used to build up tank wall thickness",
    ],
    manufacturingProcess: 'Tank panels or shells are built up by hand lay-up: <a href="/products/fibre-glass-mat/">chopped strand mat</a>, often combined with woven roving for added strength, is placed against the mould, then GP Yellow Resin — catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator — is worked into the reinforcement by roller or brush. Its slower gel time gives fabricators extra time to work resin into each layer before moving to the next, and multiple layers are built up to the specified wall thickness. Once the laminate has fully cured at room temperature, the panel or shell is released from the mould, trimmed, and — for sectional tanks — bolted together with the other panels on site to form the complete tank.',
    advantages: [
      "Longer 10–15 minute gel time gives fabricators extra working time across large panel surfaces",
      "Same non-accelerated MEKP/cobalt octoate cure system as GP Clear Resin — no new dosing procedure to learn",
      "225 kg drum packaging suits continuous production runs",
      "Consistent 99% purity for predictable batch-to-batch processing",
    ],
    commonProducts: [
      "Bolted sectional panel water tanks",
      "One-piece cylindrical and rectangular storage tanks",
      "Underground and overhead water tanks",
      "Industrial process-water and raw-water storage vessels",
    ],
    faqs: [
      {
        q: "Is GP Yellow Resin suitable for potable (drinking) water tanks?",
        a: "GP Yellow Resin is a general-purpose orthophthalic resin suited to the structural laminate of an FRP tank, the same role GP Clear Resin plays. For tanks intended to hold potable water, always confirm the complete construction — including any food-grade gelcoat or lining on the water-contact surface — meets the relevant drinking-water standards for your project; the resin's own colour does not affect this requirement.",
      },
      {
        q: "Why choose GP Yellow Resin instead of GP Clear Resin for a water tank?",
        a: "There is no performance advantage — both are general-purpose orthophthalic resins with the same MEKP/cobalt cure. GP Yellow Resin is simply a thicker, slower-gelling grade with a transparent yellow tint rather than being colourless. Since a tank's structural laminate is rarely the visible surface once the tank is finished, some fabricators use GP Yellow Resin where its longer working time suits larger panel lay-ups, or as an alternative supply option to GP Clear Resin.",
      },
      {
        q: "Can GP Yellow Resin be used for chemical storage tanks as well as water tanks?",
        a: 'GP Yellow Resin is a general-purpose orthophthalic resin intended for standard water storage. For tanks holding aggressive chemicals or requiring higher corrosion resistance, a <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> system is the more suitable choice.',
      },
      {
        q: "What reinforcement is used with GP Yellow Resin for tank walls?",
        a: "Tank walls are typically built up with chopped strand mat, often combined with woven roving for additional strength in larger tanks — the same reinforcement approach used with GP Clear Resin.",
      },
      {
        q: "How is GP Yellow Resin catalysed for tank fabrication, and does the slower gel time change the process?",
        a: "It is cured at room temperature with an MEKP catalyst and a cobalt octoate accelerator, the same non-accelerated system as GP Clear Resin. Its 10–15 minute gel time (against GP Clear Resin's under 8 minutes) simply gives fabricators a longer window to work resin into each reinforcement layer — the dosing and lay-up technique itself does not change.",
      },
    ],
    relatedProductSlugs: ["mekp-hardener", "gp-gelcoat-resin", "gp-clear-resin", "vinyl-ester-resin"],
    ctaHeading: "Need GP Yellow Resin for your water tank production?",
    ctaText: "Get a bulk quote for GP Yellow Resin, or talk to our technical team about whether GP Yellow Resin or GP Clear Resin better suits your tank fabrication line.",
  },
  {
    slug: "gp-yellow-resin-for-cooling-tower-manufacturing",
    title: "GP Yellow Resin for Cooling Tower Manufacturing",
    cardDescription: "Cooling tower casings and internal components need a resin that cures reliably under sustained moisture — GP Yellow Resin uses the same MEKP and cobalt octoate cure system as GP Clear Resin, in a thicker, slightly slower-gelling grade suited to larger panel lay-ups.",
    cardBenefit: "Reliable cure for large panel lay-ups.",
    cardImage: "gp-yellow-cooling-towers.jpg",
    cardImageAlt: "Row of blue FRP cross-flow cooling tower modules installed on an industrial cooling water basin",
    seo: {
      title: "GP Yellow Resin for Cooling Towers",
      description: "GP Yellow Resin for FRP cooling tower casings and components — the same cure chemistry as GP Clear Resin, in a thicker, slower-gelling grade.",
      keywords: ["GP Yellow Resin for Cooling Towers", "Yellow Resin Cooling Tower Manufacturing"],
    },
    draft: false,
    intro: "Industrial cooling towers run continuously, circulating warm, often chemically-treated water across a structure that never fully dries out — which is why casings, louvers and internal structure are typically built from FRP rather than steel or timber. GP Yellow Resin, Samrat Poly Resins' general-purpose orthophthalic laminating resin, can form that structural laminate using the same MEKP and cobalt octoate cure system as our GP Clear Resin. The two differ mainly in body thickness, gel speed and colour, not in the underlying chemistry or the moisture performance of the cured laminate.",
    whatTheyManufacture: "Cooling tower fabricators build casing panels and shell sections, louvers and air inlet screens, the cold water collection basin, internal partition walls, fan cylinders/stacks, and structural ladders and handrails — ranging from small packaged units serving a single chiller plant to large induced-draft towers built for power stations and process industries.",
    whySuitable: 'Cooling tower panels are laminated the same way regardless of which general-purpose orthophthalic resin is used: layers of glass reinforcement wetted out with resin and cured at room temperature. GP Yellow Resin\'s thicker 450–600 cPs body still wets out reinforcement evenly over large, flat panel surfaces, and its 10–15 minute gel time — longer than <a href="/products/gp-clear-resin/">GP Clear Resin</a>\'s under 8 minutes — gives fabricators more working time when several panels are being laminated in the same shift, at the cost of a longer overall production cycle. Where circulating water is dosed with aggressive biocides or scale inhibitors, the correct upgrade is a <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> laminate rather than either general-purpose grade — that chemical-resistance decision is the same regardless of whether the general-purpose resin used elsewhere in the tower is GP Yellow or GP Clear.',
    requiredCharacteristics: [
      "Even wet-out over large, often flat panel surfaces despite a thicker body than a low-viscosity laminating grade",
      "A gel time that stays workable across a full production shift of panel lamination",
      "Cured mechanical strength sufficient for structural casing panels and internal partitions",
      "Stable performance under continuous moisture exposure and moderate warm-water temperatures",
      "Batch-to-batch consistency so panel thickness and strength don't vary across a large tower's casing",
    ],
    manufacturingProcess: 'Casing panels and structural sections are laminated by hand lay-up over flat or gently profiled moulds: <a href="/products/fibre-glass-mat/">chopped strand mat</a> is placed and wet out with GP Yellow Resin, catalysed by an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator, with additional layers and ribbing built up where panels need extra stiffness. Its slower gel time gives laminators more time to work resin fully into each layer before it sets, which can help on larger panels laminated across a longer shift. Louvers and smaller components are often laminated in dedicated moulds for consistent profiles. Once cured at room temperature, panels are trimmed, drilled for assembly, and bolted or bonded together on site to form the complete tower structure.',
    advantages: [
      "Longer 10–15 minute gel time suits panel-by-panel production runs spread across a full shift",
      "Same non-accelerated MEKP/cobalt octoate cure system as GP Clear Resin",
      "225 kg drum packaging suits continuous resin consumption on large-panel production",
      "Consistent 99% purity reduces the risk of resin-rich or resin-starved zones in a structural panel",
    ],
    commonProducts: [
      "FRP cooling tower casing and shell panels",
      "Louvers and air inlet screens",
      "Cold water collection basins",
      "Internal partition walls and fan cylinders/stacks",
      "Structural ladders and handrails",
    ],
    faqs: [
      {
        q: "Is GP Yellow Resin suitable for the internal wet-deck areas of a cooling tower?",
        a: 'GP Yellow Resin is suited to casing panels, louvers and structural components in the same way GP Clear Resin is. For internal areas exposed to continuous circulating water with water-treatment chemicals, check the specific chemical dosing against the resin\'s resistance — a <a href="/products/vinyl-ester-resin/">Vinyl Ester Resin</a> laminate is often preferred for the most aggressive wet-deck environments, regardless of which general-purpose resin is used elsewhere in the tower.',
      },
      {
        q: "Why would a fabricator choose GP Yellow Resin over GP Clear Resin for cooling tower panels?",
        a: "Not for any performance advantage — both cure into the same type of structural laminate using the same MEKP/cobalt system. GP Yellow Resin's longer 10–15 minute gel time can suit a production run where several large panels are laminated across a shift, giving more working time per panel, but this comes with a correspondingly longer production cycle than GP Clear Resin's faster gel.",
      },
      {
        q: "What reinforcement is used for cooling tower panels made with GP Yellow Resin?",
        a: "Panels are typically laminated with E-glass chopped strand mat, with additional layers added at ribs and edges for stiffness — the same reinforcement approach used with GP Clear Resin.",
      },
      {
        q: "Can GP Yellow Resin handle the warm water temperatures inside a cooling tower?",
        a: "Yes, for standard cooling tower operating temperatures, in the same way as GP Clear Resin. Its cured laminate is stable under continuous moisture and moderate warm-water exposure typical of induced-draft and packaged cooling towers.",
      },
      {
        q: "How is GP Yellow Resin catalysed for cooling tower panel production?",
        a: "It is cured at room temperature with an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (0.3–0.5%), the same non-accelerated cure system used across Samrat Poly Resins' general-purpose grades — dosage is adjusted to suit the pace of panel production and the resin's own longer gel time.",
      },
    ],
    relatedProductSlugs: ["mekp-hardener", "gp-gelcoat-resin", "gp-clear-resin", "vinyl-ester-resin"],
    ctaHeading: "Need GP Yellow Resin for your cooling tower production?",
    ctaText: "Get a bulk quote for GP Yellow Resin, or talk to our technical team about whether GP Yellow Resin or GP Clear Resin better suits your panel fabrication line.",
  },
  {
    slug: "gp-yellow-resin-for-roofing-sheet-manufacturing",
    title: "GP Yellow Resin for Roofing Sheet Manufacturing",
    cardDescription: "GP Yellow Resin's transparent yellow, general-purpose orthophthalic base wets out reinforcement for corrugated FRP roofing sheets. For a factory-pigmented grade tuned specifically for sheet production instead, Sheet Grade Yellow Resin is the dedicated alternative.",
    cardBenefit: "General-purpose base for sheet lay-up.",
    cardImage: "gp-yellow-roofing-sheets.jpg",
    cardImageAlt: "Grey corrugated FRP roofing sheets installed over an outdoor pergola structure",
    seo: {
      title: "GP Yellow Resin for FRP Roofing Sheets",
      description: "GP Yellow Resin as a general-purpose laminating resin for FRP roofing sheets, and how it differs from the factory-pigmented Sheet Grade Yellow Resin.",
      keywords: ["GP Yellow Resin for Roofing Sheets", "Yellow Resin Roofing Sheet Manufacturing"],
    },
    draft: false,
    intro: "Corrugated FRP roofing and cladding sheets are laminated in thin, wide sections, where resin has to wet out reinforcement evenly across a long run without leaving the dry patches that surface as cracks a few months later. GP Yellow Resin, Samrat Poly Resins' general-purpose orthophthalic laminating resin, can be used for this work with the same MEKP and cobalt octoate cure system as our GP Clear Resin — though its thicker body is worth weighing against dedicated sheet-grade options before choosing it for this specific job.",
    whatTheyManufacture: "Roofing sheet manufacturers produce corrugated and flat FRP sheets in standard profiles for industrial roofing, cladding and daylighting panels, along with ridge caps, flashing pieces and ancillary fittings used to complete a roof installation. Sheet widths and corrugation profiles are typically standardised to match common steel roofing profiles.",
    whySuitable: 'Because roofing sheets are laminated in thin, wide sections, wet-out speed and consistency matter more here than in a thicker structural laminate — any dry patch shows up quickly as a weak point under roof load or wind uplift. GP Yellow Resin\'s 450–600 cPs viscosity is thicker than <a href="/products/gp-clear-resin/">GP Clear Resin</a>\'s 350–450 cPs, which in turn is thicker than the purpose-built <a href="/products/sheet-grade-yellow-resin/">Sheet Grade Yellow Resin</a> (around 280 cPs) that Samrat Poly Resins formulates specifically for sheet and panel work. GP Yellow Resin can still be worked into a roofing sheet laminate with careful rolling to avoid dry patches, and its longer 10–15 minute gel time gives more time to do that across a wide sheet mould — but for fabricators prioritising minimum labour and dry-patch risk on thin sheet sections specifically, the lower-viscosity Sheet Grade Yellow Resin or GP Clear Resin are the better-suited starting point.',
    requiredCharacteristics: [
      "Even wet-out across wide, thin sheet moulds despite a thicker body than a dedicated sheet-grade resin",
      "A workable gel time to spread and roll resin through the corrugation profile before it sets",
      "Reliable room-temperature cure so sheets can be demoulded on a predictable schedule",
      "Adequate flexural strength for a thin laminate carrying roof loads and wind uplift",
      "Batch consistency so sheet thickness and strength don't drift across a production run",
    ],
    manufacturingProcess: 'Roofing sheets are laminated over a corrugated mould bed: <a href="/products/fibre-glass-mat/">chopped strand mat</a> is laid into the corrugation profile and wet out with GP Yellow Resin, catalysed by an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator, worked through with a roller to remove air and reach even thickness across every corrugation — its thicker body needs a little more rolling attention than a low-viscosity sheet-grade resin to avoid dry patches. Sheets cure at room temperature, often under a cover sheet to control surface finish, before being trimmed to length and stacked.',
    advantages: [
      "Longer 10–15 minute gel time gives more time to roll resin evenly through a wide corrugated mould",
      "Same non-accelerated MEKP/cobalt octoate cure system as GP Clear Resin",
      "225 kg drum packaging suits steady resin consumption on ongoing sheet production runs",
      "Consistent 99% purity for predictable batch-to-batch processing",
    ],
    commonProducts: [
      "Corrugated FRP roofing sheets",
      "Flat FRP cladding panels",
      "Ridge caps and flashing accessories",
      "Industrial shed and warehouse roofing systems",
    ],
    faqs: [
      {
        q: "Is GP Yellow Resin the best choice for FRP roofing sheets, or is a dedicated sheet-grade resin better?",
        a: 'For thin, wide roofing sheet sections specifically, a lower-viscosity resin reduces the labour needed to avoid dry patches. GP Yellow Resin (450–600 cPs) is thicker than GP Clear Resin (350–450 cPs), which in turn is thicker than the purpose-built <a href="/products/sheet-grade-yellow-resin/">Sheet Grade Yellow Resin</a> (around 280 cPs). GP Yellow Resin can still be used for roofing sheets with careful rolling, but Sheet Grade Yellow Resin or GP Clear Resin are the better-suited starting point where minimising dry-patch risk on thin sections is the priority.',
      },
      {
        q: "What is the difference between GP Yellow Resin and Sheet Grade Yellow Resin for roofing sheets?",
        a: "GP Yellow Resin is a general-purpose grade also used for tanks, cooling towers and general lamination. Sheet Grade Yellow Resin is factory-pigmented and formulated at a lower viscosity specifically for sheet and panel production, making it the more purpose-built choice for roofing and cladding sheets.",
      },
      {
        q: "What reinforcement is used for FRP roofing sheets made with GP Yellow Resin?",
        a: "Roofing sheets are typically laminated with E-glass chopped strand mat, laid into the corrugation profile before resin is applied and worked through with a roller — the same reinforcement approach used with GP Clear Resin or Sheet Grade Yellow Resin.",
      },
      {
        q: "How is GP Yellow Resin catalysed for roofing sheet production?",
        a: "It is cured at room temperature with an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (0.3–0.5%), with dosage adjusted to suit ambient temperature and the pace of the production line — the same non-accelerated system used across Samrat Poly Resins' general-purpose grades.",
      },
      {
        q: "Can GP Yellow Resin be pigmented for coloured roofing sheets, given it's already yellow-tinted?",
        a: "Yes, though its existing yellow tint will combine with whatever pigment is added. For a fully controlled, factory-consistent colour across every sheet, Sheet Grade Yellow Resin's pre-pigmented formulation is the more predictable option.",
      },
    ],
    relatedProductSlugs: ["mekp-hardener", "sheet-grade-yellow-resin", "gp-clear-resin"],
    ctaHeading: "Need GP Yellow Resin for your roofing sheet production?",
    ctaText: "Get a bulk quote for GP Yellow Resin, or talk to our technical team about whether GP Yellow Resin, GP Clear Resin or Sheet Grade Yellow Resin best suits your sheet lamination line.",
  },
  {
    slug: "gp-yellow-resin-for-door-skin-manufacturing",
    title: "GP Yellow Resin for Door Skin Manufacturing",
    cardDescription: "Moulded FRP door skins need a laminating resin that wets out reinforcement cleanly behind a gelcoat-finished face — GP Yellow Resin fills that structural role with the same cure chemistry as GP Clear Resin, in a thicker, slower-gelling grade.",
    cardBenefit: "Structural backing behind a gelcoat face.",
    cardImage: "gp-yellow-door-skin.jpg",
    cardImageAlt: "Pair of metallic-finish moulded FRP door skin panels with raised panel and embossed design",
    seo: {
      title: "GP Yellow Resin for Door Skin Manufacturing",
      description: "GP Yellow Resin as the structural laminating resin behind moulded FRP door skins — same MEKP/cobalt cure system as GP Clear Resin.",
      keywords: ["GP Yellow Resin for Door Skins", "Yellow Resin Door Skin Manufacturing"],
    },
    draft: false,
    intro: "A door skin is the moulded face panel that gives an FRP door its finished look — the raised panel design, wood-grain texture or flush profile buyers actually see. Many producers apply a gelcoat or surface layer first for finish quality, with the structural laminate built up behind it; GP Yellow Resin, Samrat Poly Resins' general-purpose orthophthalic laminating resin, can serve that structural role using the same MEKP and cobalt octoate cure system as our GP Clear Resin. Its suitability depends on how the specific skin is finished, covered below.",
    whatTheyManufacture: "Door skin manufacturers produce moulded FRP panels in a range of profiles — flush, raised-panel, wood-grain-textured and custom designs — that are later bonded to a core material to form a complete door shutter, or sold directly to door assemblers. Skins are typically moulded as matched front-and-back pairs to standard door sizes.",
    whySuitable: 'Where a gelcoat or surface layer is applied to the mould first, the visible finish of a door skin comes from that layer rather than the structural laminate behind it — and GP Yellow Resin\'s transparent yellow tint carries no functional downside in that role, using the same MEKP/cobalt cure system as <a href="/products/gp-clear-resin/">GP Clear Resin</a>. For skins moulded without a separate finish layer, where the base resin\'s own flow and clarity determine how well fine wood-grain texture or panel detail reproduces, GP Clear Resin\'s lower 350–450 cPs viscosity flows into fine mould detail more readily than GP Yellow Resin\'s thicker 450–600 cPs body, and its colourless finish avoids any yellow tint showing through. GP Yellow Resin is a workable choice behind a gelcoat or surface layer, or wherever its longer working time is useful; GP Clear Resin remains the better default for direct-finish skins relying on the resin\'s own clarity and flow.',
    requiredCharacteristics: [
      "Reliable wet-out of reinforcement behind a gelcoat or surface layer, or on direct-finish skins where flow into fine detail matters most",
      "A workable gel time so every skin in a batch releases from the mould on schedule",
      "Adequate mechanical bond to the reinforcement and to whatever surface layer is used",
      "Reliable room-temperature cure for predictable production scheduling",
      "Consistent batch-to-batch quality across repeated mould cycles",
    ],
    manufacturingProcess: 'Door skins are moulded face-down in a profiled mould. Where a gelcoat or surface layer is used, it is applied first for finish quality, followed by <a href="/products/fibre-glass-mat/">chopped strand mat</a> wet out with GP Yellow Resin, catalysed by an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator. The laminate is rolled to remove trapped air and ensure even thickness across the panel profile; its slower gel time gives a little more time to work resin into detailed panel profiles before it sets. Once cured at room temperature, skins are released, trimmed to size, and paired for use in door assembly.',
    advantages: [
      "Workable structural laminate behind a gelcoat or surface-finished door skin",
      "Longer 10–15 minute gel time gives more time to work resin into detailed panel profiles",
      "Same non-accelerated MEKP/cobalt octoate cure system as GP Clear Resin",
      "Consistent 99% purity across repeated production cycles",
    ],
    commonProducts: [
      "Flush-profile FRP door skins",
      "Raised-panel and wood-grain-textured door skins",
      "Matched front-and-back skin pairs for door assembly",
      "Custom-moulded decorative door faces",
    ],
    faqs: [
      {
        q: "Is GP Yellow Resin suitable for wood-grain-textured or fine-detail door skins?",
        a: 'It depends on how the skin is finished. Behind a gelcoat or surface layer, GP Yellow Resin\'s own colour and viscosity don\'t affect the finish. For direct-finish skins that rely on the base resin\'s own flow into fine mould texture without a separate surface layer, <a href="/products/gp-clear-resin/">GP Clear Resin</a>\'s lower viscosity flows into fine detail more readily and avoids any yellow tint showing through.',
      },
      {
        q: "Should door skins be gelcoated before laminating with GP Yellow Resin?",
        a: "Many producers apply a gelcoat or surface layer first for finish quality and colour, then laminate GP Yellow Resin and reinforcement behind it — the same approach commonly used with GP Clear Resin.",
      },
      {
        q: "Why would a producer choose GP Yellow Resin instead of GP Clear Resin for door skins?",
        a: "Not for a better finish — GP Clear Resin's lower viscosity and colourless finish make it the better default for direct-finish skins. GP Yellow Resin is a reasonable alternative behind a gelcoat or surface layer, or where its longer 10–15 minute gel time is useful for working resin into a detailed panel profile.",
      },
      {
        q: "Is GP Yellow Resin the same as Lamination Resin (LR Resin) for door skins?",
        a: 'No. <a href="/products/lamination-resin/">Lamination Resin (LR Resin)</a> is formulated specifically for the fast-cycle bonding step that attaches a finished skin to a door core. GP Yellow Resin is a general-purpose resin used for the skin-moulding laminate itself, not that bonding step.',
      },
      {
        q: "How is GP Yellow Resin catalysed for door skin production?",
        a: "It is cured at room temperature with an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (0.3–0.5%), with dosage adjusted for the mould turnaround time each production run needs.",
      },
    ],
    relatedProductSlugs: ["mekp-hardener", "gp-gelcoat-resin", "gp-clear-resin"],
    ctaHeading: "Need GP Yellow Resin for your door skin production?",
    ctaText: "Get a bulk quote for GP Yellow Resin, or talk to our technical team about whether GP Yellow Resin or GP Clear Resin better suits your skin moulding line.",
  },
  {
    slug: "gp-yellow-resin-for-hand-lay-up-process",
    title: "GP Yellow Resin for Hand Lay-Up Process",
    cardDescription: "Hand lay-up work relies on a resin that saturates chopped strand mat evenly, layer by layer — GP Yellow Resin uses the standard MEKP and cobalt octoate cure system, differing from GP Clear Resin mainly in its thicker body, slower gel and yellow tint.",
    cardBenefit: "Even saturation, layer by layer.",
    cardImage: "gp-yellow-hand-layup-diagram.jpg",
    cardImageAlt: "Diagram of the hand lay-up process showing gel coat, reinforcement, resin and roller worked into a mould tool",
    seo: {
      title: "GP Yellow Resin for Hand Lay-Up Process",
      description: "Using GP Yellow Resin for hand lay-up FRP work — the same manufacturing route as GP Clear Resin, at a thicker, slower-gelling grade.",
      keywords: ["GP Yellow Resin Hand Lay-Up", "Yellow Resin for Hand Layup Process"],
    },
    draft: false,
    intro: "Hand lay-up is the process behind more FRP products than any other manufacturing method — brush or roller, resin, reinforcement and a mould, building everything from tank shells to small mouldings. GP Yellow Resin, Samrat Poly Resins' general-purpose orthophthalic laminating resin, can be worked by hand lay-up using the same MEKP and cobalt octoate cure system as our GP Clear Resin, with a thicker body and a longer gel window than GP Clear Resin's faster-gelling grade.",
    whatTheyManufacture: "Hand lay-up is used across most categories of general-purpose FRP product — water tanks, cooling tower panels, roofing sheets, door skins, general panels and moulded items are all commonly built this way. Rather than being tied to one product category, it's the fabrication method that underlies most general-purpose FRP manufacturing in a typical workshop.",
    whySuitable: 'What every hand lay-up job has in common is a fabricator working resin into reinforcement by hand, layer by layer. GP Yellow Resin\'s 450–600 cPs body is thicker than <a href="/products/gp-clear-resin/">GP Clear Resin</a>\'s 350–450 cPs, which asks a little more of the roller to drive it fully through the fibre without dragging, but its longer 10–15 minute gel time gives fabricators more time to complete each layer by hand before it begins to set — a workable trade-off for hand lay-up specifically, since the technique already relies on manual working time rather than machine metering. It is not a better resin for this process than GP Clear Resin, simply a slower-gelling one with a yellow tint instead of being colourless.',
    requiredCharacteristics: [
      "A viscosity workable under a brush or roller, even if thicker than a low-viscosity laminating grade",
      "Even wet-out through reinforcement without leaving dry fibres or resin-rich pockets",
      "A gel time long enough to complete a layer by hand, without an excessively long production cycle",
      "Reliable room-temperature cure with no special equipment required",
      "Predictable behaviour across different ambient workshop temperatures",
    ],
    manufacturingProcess: 'In hand lay-up, <a href="/products/fibre-glass-mat/">chopped strand mat</a> or woven roving is placed into or against a mould, and GP Yellow Resin, catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator, is applied by brush or poured on and worked through the reinforcement with a laminating roller — its thicker body needs a slightly firmer rolling pass than a low-viscosity grade to drive it fully through the fibre. Additional layers are built up the same way until the required thickness is reached, then the part cures at room temperature before being released from the mould.',
    advantages: [
      "Longer 10–15 minute gel time gives fabricators more working time to complete a hand-applied layer",
      "Same non-accelerated MEKP/cobalt octoate cure system as GP Clear Resin",
      "Workable under standard brush or roller application",
      "Consistent 99% purity keeps hand-applied laminate quality uniform batch to batch",
    ],
    commonProducts: [
      "Water tanks, cooling tower panels and roofing sheets",
      "Door skins and general FRP panels",
      "Moulded FRP parts across most general-purpose applications",
    ],
    faqs: [
      {
        q: "What makes GP Yellow Resin workable for hand lay-up specifically?",
        a: "Its 450–600 cPs viscosity is thicker than a low-viscosity laminating grade, so it needs a firmer rolling pass to drive fully through reinforcement, but its 10–15 minute gel time gives fabricators more working time to complete a layer by hand before it sets.",
      },
      {
        q: "Is GP Yellow Resin as easy to roll out by hand as GP Clear Resin?",
        a: "GP Clear Resin's lower 350–450 cPs viscosity is somewhat easier to spread under a roller. GP Yellow Resin is still workable by hand lay-up, just with slightly more rolling effort to avoid dry patches — its longer gel time offsets some of that by giving more time to do it.",
      },
      {
        q: "How is GP Yellow Resin catalysed for hand lay-up?",
        a: "It is cured at room temperature with an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (0.3–0.5%), with dosage commonly adjusted to suit ambient workshop temperature and the size of the part being laminated.",
      },
      {
        q: "Does hand lay-up with GP Yellow Resin work with both chopped strand mat and woven roving?",
        a: "Yes. GP Yellow Resin wets out both, and many hand lay-up jobs combine chopped strand mat for bulk with woven roving where extra structural strength is needed.",
      },
      {
        q: "How many layers can be built up with GP Yellow Resin in a single hand lay-up session?",
        a: "This depends on the part's required thickness and the resin's gel time. Its longer 10–15 minute gel time gives a bit more room to complete a layer before moving on, but the overall approach is the same as with GP Clear Resin: wet out and roll one layer before adding the next.",
      },
    ],
    relatedProductSlugs: ["mekp-hardener", "gp-gelcoat-resin", "gp-clear-resin"],
    ctaHeading: "Need GP Yellow Resin for your hand lay-up production?",
    ctaText: "Get a bulk quote for GP Yellow Resin, or talk to our technical team about whether GP Yellow Resin or GP Clear Resin better suits your lay-up process.",
  },
  {
    slug: "gp-yellow-resin-for-spray-up-process",
    title: "GP Yellow Resin for Spray-Up Process",
    cardDescription: "Spray-up equipment chops and wets out fibre in a single pass, and GP Yellow Resin's viscosity and non-accelerated MEKP/cobalt cure make it workable through standard spray-up rigs — the same process route as GP Clear Resin, in a thicker, slower-gelling grade.",
    cardBenefit: "Workable through standard spray-up rigs.",
    cardImage: "gp-yellow-spray-up-diagram.webp",
    cardImageAlt: "Diagram of the spray-up process showing a chopper gun depositing resin and chopped fibre into a gelcoated mould",
    seo: {
      title: "GP Yellow Resin for Spray-Up Process",
      description: "Using GP Yellow Resin for spray-up FRP work — the same process route and cure system as GP Clear Resin, at a thicker, slower-gelling grade.",
      keywords: ["GP Yellow Resin Spray-Up", "Yellow Resin for Spray-Up Process"],
    },
    draft: false,
    intro: "Spray-up speeds up FRP fabrication by depositing chopped glass roving and catalysed resin onto the mould together through a chopper gun, rather than laying reinforcement by hand. GP Yellow Resin, Samrat Poly Resins' general-purpose orthophthalic laminating resin, uses the same MEKP and cobalt octoate cure system as our GP Clear Resin, but its thicker body is worth checking against your specific spray equipment before committing to a production run.",
    whatTheyManufacture: "Spray-up is used for products where higher-volume production and moderate part complexity make chopper-gun application worthwhile — water tanks, panels, cooling tower components and similar moulded shapes with large surface areas benefit most from the process's speed advantage over manual lay-up.",
    whySuitable: 'Spray-up puts more precise demands on viscosity than hand lay-up, since resin has to atomise cleanly through a chopper gun\'s nozzle and pump rather than simply spreading under a roller. GP Yellow Resin\'s 450–600 cPs body is thicker than <a href="/products/gp-clear-resin/">GP Clear Resin</a>\'s 350–450 cPs, and while many spray-up rigs can be calibrated — nozzle size, pump pressure — to handle that difference, it is not guaranteed to run cleanly on every setup without adjustment. GP Clear Resin\'s lower viscosity remains the safer default for spray equipment compatibility; GP Yellow Resin is workable for fabricators willing to confirm and, if needed, recalibrate their specific chopper gun setup first, and its longer 10–15 minute gel time still gives useful extra time to build up thickness across a mould once it is running.',
    requiredCharacteristics: [
      "A viscosity that atomises through chopper-gun equipment once calibrated for a thicker body than a low-viscosity spray resin",
      "Predictable gel timing that can be tuned to the spray rate and size of the mould",
      "Even resin distribution alongside chopped roving as it's deposited on the mould",
      "Reliable mechanical strength once the sprayed laminate is compacted and cured",
      "Consistent behaviour across repeated spray cycles once equipment is correctly set up",
    ],
    manufacturingProcess: 'In spray-up, GP Yellow Resin, catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator, is fed through a chopper gun alongside continuous glass roving, which is cut and deposited onto the mould simultaneously with the resin spray — nozzle size and pump pressure may need adjusting from a low-viscosity setup to handle GP Yellow Resin\'s thicker body cleanly. The sprayed laminate is then compacted with a roller to remove air and ensure the resin has fully wet out the chopped <a href="/products/fibre-glass-mat/">glass fibre</a>. Multiple passes build up the required thickness before the part cures at room temperature and is released from the mould.',
    advantages: [
      "Longer 10–15 minute gel time gives more time to build up thickness across a mould once spraying",
      "Same non-accelerated MEKP/cobalt octoate cure system as GP Clear Resin",
      "Consistent 99% purity maintains laminate quality across a production run",
      "Workable through spray-up equipment calibrated for its thicker body",
    ],
    commonProducts: [
      "Water tanks and panels produced at volume",
      "Cooling tower panels and casings",
      "General FRP panels with large surface areas",
    ],
    faqs: [
      {
        q: "Is GP Yellow Resin compatible with chopper-gun spray-up equipment?",
        a: "It can be, but its 450–600 cPs viscosity is thicker than GP Clear Resin's 350–450 cPs, so nozzle size and pump pressure may need recalibrating from a low-viscosity setup. Confirm compatibility with your specific spray equipment before committing to a production run; GP Clear Resin remains the safer default if you'd rather not adjust equipment settings.",
      },
      {
        q: "Why would a fabricator use GP Yellow Resin instead of GP Clear Resin for spray-up?",
        a: "Mainly where GP Yellow Resin is already the preferred general-purpose grade for other reasons — cost, supply, or its longer gel time — and the spray equipment has already been calibrated for its thicker body. Not because it sprays more easily than GP Clear Resin, which remains the lower-viscosity, easier default for spray equipment.",
      },
      {
        q: "How does gel time control work in spray-up with GP Yellow Resin?",
        a: "Gel time is tuned to the operator's spray rate and mould size using the cobalt octoate accelerator dosage, the same as with GP Clear Resin. GP Yellow Resin's own base gel time of 10–15 minutes is already longer, so accelerator dosing may be adjusted accordingly to match the production line's pace.",
      },
      {
        q: "Does spray-up with GP Yellow Resin use the same reinforcement as hand lay-up?",
        a: "No — spray-up uses continuous glass roving fed through the chopper gun and cut on application, rather than pre-cut chopped strand mat. GP Yellow Resin's role in wetting out that reinforcement is the same as in hand lay-up.",
      },
      {
        q: "How is GP Yellow Resin catalysed for spray-up production?",
        a: "It is cured at room temperature with an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (0.3–0.5%), with dosage adjusted to the operator's spray rate and the specific equipment being used.",
      },
    ],
    relatedProductSlugs: ["mekp-hardener", "gp-gelcoat-resin", "gp-clear-resin"],
    ctaHeading: "Need GP Yellow Resin for your spray-up production?",
    ctaText: "Get a bulk quote for GP Yellow Resin, or talk to our technical team about whether your spray equipment is suited to GP Yellow Resin or GP Clear Resin.",
  },
  {
    slug: "gp-yellow-resin-for-general-frp-moulded-products",
    title: "GP Yellow Resin for General FRP Moulded Products",
    cardDescription: "Panels, furniture, planters and general moulded FRP items need a dependable general-purpose laminating resin behind their surface finish — GP Yellow Resin serves this role wherever the part is painted, gelcoated or otherwise finished over its natural yellow tint.",
    cardBenefit: "Dependable backing for finished mouldings.",
    cardImage: "gp-yellow-moulded-grating.jpg",
    cardImageAlt: "Stacked coloured FRP pultruded grating panels in red, green, yellow and grey",
    seo: {
      title: "GP Yellow Resin for FRP Moulded Products",
      description: "GP Yellow Resin as a general-purpose structural laminating resin for moulded FRP panels, furniture and décor items finished over its surface.",
      keywords: ["GP Yellow Resin Moulded Products", "Yellow Resin General FRP Products"],
    },
    draft: false,
    intro: "Beyond tanks, panels and structural components, a huge range of everyday FRP items — planters, equipment covers, signage, mannequins and decorative fixtures — are all built the same basic way: moulded, cured and released. GP Yellow Resin, Samrat Poly Resins' general-purpose orthophthalic laminating resin, can serve as the structural laminate behind these mouldings using the same MEKP and cobalt octoate cure system as our GP Clear Resin.",
    whatTheyManufacture: "General FRP moulding covers products such as planters and garden ornaments, equipment and machinery covers, signage and display fixtures, mannequins, decorative architectural elements, and other moulded items that don't require the specialised chemical or fire-rated performance of an industrial tank or panel, but do need a clean, consistent moulded finish.",
    whySuitable: 'Most general FRP moulded products are built with a gelcoat surface layer applied first for finish, with the structural laminate built up behind it — and in that role, GP Yellow Resin\'s transparent yellow tint carries no functional downside, since the gelcoat determines the visible finish rather than the laminate underneath. Its thicker 450–600 cPs body still flows into most mould detail adequately, though for finely ornamental or textured mould shapes moulded without a gelcoat — where the base resin\'s own flow and clarity matter directly — <a href="/products/gp-clear-resin/">GP Clear Resin</a>\'s lower 350–450 cPs viscosity reproduces fine detail somewhat more readily. <a href="/products/frp-polyester-pigment/">FRP Polyester Pigment</a> can still be blended in for a coloured finish, though the existing yellow tint will combine with whatever pigment is added, unlike blending into a colourless base.',
    requiredCharacteristics: [
      "Adequate flow into most mould shapes, with GP Clear Resin favoured for the finest ornamental detail",
      "A clean release from the mould without surface defects",
      "Compatible with pigments, though a colourless base gives more predictable results than blending into an already-tinted resin",
      "Reliable room-temperature cure suited to small-batch and one-off moulding",
      "Consistent quality across a wide variety of product shapes and sizes",
    ],
    manufacturingProcess: 'Moulded products are typically built with a gelcoat surface layer for finish, followed by <a href="/products/fibre-glass-mat/">chopped strand mat</a> wet out with GP Yellow Resin, catalysed by an <a href="/products/mekp-hardener/">MEKP hardener</a> and cobalt octoate accelerator, worked into the mould detail with a brush or roller. Its longer gel time gives a little more time to work resin into detailed geometry before it sets. Once cured at room temperature, the part is released, trimmed of excess laminate at the mould line, and finished — painted, polished or left in its natural cured state depending on the product.',
    advantages: [
      "Workable structural laminate behind gelcoat-finished mouldings",
      "Longer 10–15 minute gel time for working resin into detailed mould geometry",
      "Same non-accelerated MEKP/cobalt octoate cure system as GP Clear Resin",
      "Suits both small-batch and larger production runs",
    ],
    commonProducts: [
      "Planters and garden ornaments",
      "Equipment and machinery covers",
      "Signage and display fixtures",
      "Mannequins and decorative architectural elements",
    ],
    faqs: [
      {
        q: "Is GP Yellow Resin suitable for detailed or ornamental mould shapes?",
        a: 'Behind a gelcoat layer, yes — the gelcoat determines the finish, so GP Yellow Resin\'s viscosity and colour don\'t affect detail reproduction. For finely ornamental shapes moulded without a gelcoat, where the base resin\'s own flow matters directly, <a href="/products/gp-clear-resin/">GP Clear Resin</a>\'s lower viscosity reproduces fine detail somewhat more readily.',
      },
      {
        q: "Is a gelcoat needed for general FRP moulded products made with GP Yellow Resin?",
        a: "Most fabricators apply a gelcoat layer first for a smooth, finished surface, then laminate GP Yellow Resin and reinforcement behind it to build the part's structural thickness — the same approach used with GP Clear Resin.",
      },
      {
        q: "Can GP Yellow Resin be coloured for decorative moulded products?",
        a: 'Yes, <a href="/products/frp-polyester-pigment/">FRP Polyester Pigment</a> can be blended in, though GP Yellow Resin\'s existing yellow tint will combine with whatever pigment is added. For fully predictable, uninfluenced colour, blending pigment into the colourless GP Clear Resin gives a more controllable result.',
      },
      {
        q: "How is GP Yellow Resin catalysed for moulded product work?",
        a: "It is cured at room temperature with an MEKP catalyst (around 1.5%) and a cobalt octoate accelerator (0.3–0.5%), with dosage adjusted to the size and complexity of the specific mould.",
      },
      {
        q: "What reinforcement is used for general FRP moulded products made with GP Yellow Resin?",
        a: "E-glass chopped strand mat is the standard reinforcement, with layer count adjusted to the structural needs of the specific product being moulded — the same reinforcement approach used with GP Clear Resin.",
      },
    ],
    relatedProductSlugs: ["mekp-hardener", "gp-gelcoat-resin", "gp-clear-resin"],
    ctaHeading: "Need GP Yellow Resin for your moulded FRP products?",
    ctaText: "Get a bulk quote for GP Yellow Resin, or talk to our technical team about whether GP Yellow Resin or GP Clear Resin better suits your moulding work.",
  },

  // ============================================================================
  //  EPOXY CLEAR CASTING RESIN APPLICATIONS — card-only stubs approved via
  //  Step 1 technical audit and Step 2 product-page work. This is a two-part
  //  epoxy system (2:1 by weight, 24h initial / 72h full cure), a genuinely
  //  different chemistry from every polyester-family product on this site
  //  (GP Clear, GP Yellow, GP Gelcoat, Vinyl Ester, Lamination Resin), so
  //  these applications do NOT reuse or overlap any existing FRP ecosystem.
  //  Positioning is deliberately conservative: medium-depth casting (~30mm
  //  per pour, staged for anything deeper) — never described as unlimited
  //  deep-pour — and UV/yellowing language stays scoped to "yellowing-
  //  resistant", never "non-yellowing". Tabletop/floor self-levelling work
  //  belongs to the sibling Epoxy Art Resin and is deliberately excluded here.
  //  Slugs are prefixed "epoxy-clear-casting-resin-" so they stay unambiguous
  //  against Epoxy Art Resin's own future application slugs.
  //  All 3 are `draft: true`: cards render fully on the Epoxy Clear Casting
  //  Resin product page now, but no dedicated /applications/ page exists yet,
  //  so getStaticPaths excludes them and each card's CTA links back to the
  //  product page instead of a dead URL. Flip draft to false individually,
  //  one at a time, once each page is actually built (Step 4).
  // ============================================================================
  {
    slug: "epoxy-clear-casting-resin-for-river-tables",
    title: "Epoxy Clear Casting Resin for River Tables & Wood Furniture",
    cardImage: "epoxy-river-table-ocean-dining.webp",
    cardImageAlt: "Live-edge wood dining table with a clear blue-tinted epoxy resin pour set with coral and shell inlays",
    cardDescription: "Live-edge river tables need a resin that stays optically clear against wood grain, resists shrinking away from the timber edge, and can be poured in successive ~30 mm stages to reach full tabletop thickness — exactly what Epoxy Clear Casting Resin's low-shrinkage, 2:1 epoxy system is formulated for.",
    cardBenefit: "Clear casting that holds its bond to wood.",
    seo: {
      title: "Epoxy Clear Casting Resin for River Tables",
      description: "Epoxy Clear Casting Resin for river tables and wood-resin furniture — low-shrinkage, crystal-clear 2:1 epoxy poured in stages up to 30 mm.",
      keywords: ["Epoxy Resin for River Tables", "River Table Epoxy Casting", "Wood Resin Furniture Epoxy"],
    },
    // Social-share (og:image/twitter:image) override for this page only —
    // requested explicitly, in place of the sitewide generic og-image.jpg.
    // Real file dimensions (not the sitewide 1200x630 default) so the meta
    // tags stay accurate. See Base.astro's ogImage/ogImageWidth/Height props.
    ogImage: "/og-images/epoxy-clear-casting-resin-for-river-tables.jpg",
    ogImageAlt: "Samrat Poly Resins — manufacturer of polyester resins and FRP composite raw materials",
    ogImageWidth: 1360,
    ogImageHeight: 765,
    draft: false,
    intro: "A river table is built by casting clear resin into the gaps of a live-edge wood slab — sealed edges, a clear void where bark or sapwood grain runs, or an intentional channel down the centre — then flush-sanding the cured resin level with the wood. Getting a river table right depends on a resin that stays optically clear against the wood grain, bonds securely to the timber edge without pulling away as it cures, and can be poured in stages to reach the depth most tabletop channels actually need. Epoxy Clear Casting Resin, Samrat Poly Resins' 2:1 two-part epoxy system, is built for exactly this kind of medium-depth decorative casting.",
    whatTheyManufacture: "River table makers and furniture workshops build dining and coffee tables, benches, shelving and decorative panels from live-edge wood slabs — walnut, mango, acacia and similar timbers are common in India — cast with a clear or lightly tinted resin channel or void. The same technique extends to smaller wood-resin pieces: cheese boards, coasters, clocks and wall art built around a wood-and-resin combination.",
    whySuitable: 'A river table\'s resin channel is rarely a single 30 mm pour — most river channels or tabletop pours are built up in successive stages, each poured once the previous layer has reached its initial cure, which keeps exotherm heat manageable and avoids the cracking risk of trying to pour a whole table\'s depth in one go. Epoxy Clear Casting Resin\'s 2:1 mix ratio, 900 cPs viscosity and under 0.2% shrinkage support this staged approach: because it shrinks so little on cure, it holds its bond to the wood edge rather than pulling away and leaving a visible gap line — the most visible flaw a finished river table can have. Its UV-stabilised formulation resists yellowing better than a standard, unstabilised epoxy, genuinely useful for a tabletop that sits under window light for years, though like any clear epoxy it is not permanently immune to gradual colour change under prolonged, intense UV exposure.',
    requiredCharacteristics: [
      "Low shrinkage to keep a tight, gap-free bond against the wood edge as the resin cures",
      "Optical clarity that doesn't compete with or distort the wood grain it's cast against",
      "A mix ratio and pot life practical for staged, multi-layer pours on a large horizontal surface",
      "Enough hardness once fully cured to be flush-sanded and finished level with the surrounding wood",
      "UV-stabilised colour retention for a piece that will sit under window or room light for years",
    ],
    manufacturingProcess: 'Before any resin is poured, the wood slab is sealed with a thin coat of resin brushed over the cut faces and edges — this stops trapped moisture and air in the wood from off-gassing into the main pour later and causing bubbles. The edges where wood will meet resin are lightly sanded so the cured resin bonds mechanically as well as chemically. A dam is then built around the slab — typically a wood frame lined with sealing tape so cured resin releases cleanly, with the seams sealed with silicone caulk to stop liquid resin leaking out before it gels. Epoxy Clear Casting Resin is mixed 2:1 by weight with <a href="/products/epoxy-hardener/">Epoxy Hardener</a>, poured in a stage up to around 30 mm deep, and any surface bubbles are released with a heat gun or torch passed briefly over the pour. Once that stage reaches its initial cure — typically the 24-hour mark — the next stage is poured on top, repeating until the full channel depth is reached. After the full 72-hour cure, the piece is released from its dam, flush-sanded level with the wood, and finished.',
    advantages: [
      "Under 0.2% shrinkage keeps the resin bonded tight to the wood edge rather than pulling away",
      "900 cPs viscosity supports staged, multi-layer pours without excessive dragging",
      "UV-stabilised formulation resists yellowing better than a standard, unstabilised epoxy",
      "Shore D 82 hardness once fully cured supports flush-sanding and a durable tabletop finish",
    ],
    commonProducts: [
      "River-style dining and coffee tables",
      "Live-edge benches and shelving",
      "Cheese boards, coasters and small wood-resin decor",
      "Wall art and clock faces built around a wood slab",
    ],
    faqs: [
      {
        q: "Can Epoxy Clear Casting Resin fill a whole river table channel in one pour?",
        a: "Not usually in a single pour. Its verified maximum casting depth is around 30 mm per pour, so most river table channels — which are often deeper than that — are built up in successive stages, each poured once the previous layer has reached its initial cure. This is standard practice for epoxy casting generally, not a limitation specific to this product.",
      },
      {
        q: "Will the resin pull away from the wood edge as it cures?",
        a: "Epoxy Clear Casting Resin's shrinkage is under 0.2% once fully cured, which is why it suits this application — a resin that shrinks more can leave a visible gap line at the wood-to-resin seam, the most visible part of a finished river table.",
      },
      {
        q: "Does Epoxy Clear Casting Resin stay clear under a window or lamp long-term?",
        a: "It uses a UV-stabilised formulation that resists yellowing significantly better than a standard, unstabilised epoxy. No clear epoxy is permanently immune to gradual colour change under prolonged, intense UV exposure, so this is best understood as yellowing-resistant rather than an absolute guarantee.",
      },
      {
        q: "Do I need to seal the wood before pouring resin for a river table?",
        a: "Yes — sealing the cut faces and edges of the wood slab with a thin coat of resin first is standard practice. It stops moisture and air trapped in the wood grain from off-gassing into the main pour and causing bubbles at the wood-resin interface.",
      },
      {
        q: "What is the difference between Epoxy Clear Casting Resin and Epoxy Art Resin for a river table?",
        a: 'Both are 2:1 epoxy systems. Epoxy Clear Casting Resin is suited to the depth of the river channel itself, poured in stages. Some makers finish the flush-sanded tabletop with a final thin, self-levelling flood coat — that thin, flat top layer is <a href="/products/epoxy-art-resin/">Epoxy Art Resin</a>\'s role, not this product\'s.',
      },
      {
        q: "How is Epoxy Clear Casting Resin catalysed for river table work?",
        a: 'It is mixed 2:1 by weight with a compatible <a href="/products/epoxy-hardener/">Epoxy Hardener</a>, weighed on a scale rather than measured by volume, since accurate weight ratios matter more here than with a polyester resin dosed by catalyst percentage.',
      },
    ],
    relatedProductSlugs: ["epoxy-hardener"],
    ctaHeading: "Need Epoxy Clear Casting Resin for your river table build?",
    ctaText: "Get a bulk quote for Epoxy Clear Casting Resin, or talk to our technical team about staging your pour depth and dosage.",
  },
  {
    slug: "epoxy-clear-casting-resin-for-jewellery-casting",
    title: "Epoxy Clear Casting Resin for Jewellery & Decorative Casting",
    cardImage: "epoxy-jewellery-pendant-casting.jpg",
    cardImageAlt: "Clear resin pendants with pressed botanicals and gold flake cast in bezel settings",
    cardDescription: "Small silicone moulds for jewellery and decorative pieces need a resin that captures fine detail, releases trapped air in a shallow pour, and cures crystal clear well within Epoxy Clear Casting Resin's medium-depth capability.",
    cardBenefit: "Crystal-clear detail in small moulds.",
    seo: {
      title: "Epoxy Casting Resin for Jewellery Casting",
      description: "Epoxy Clear Casting Resin for jewellery and small decorative casting — crystal-clear 2:1 epoxy for fine detail in silicone moulds.",
      keywords: ["Epoxy Resin for Jewellery", "Jewellery Casting Epoxy", "Decorative Casting Resin"],
    },
    draft: false,
    intro: "Jewellery and small decorative casting work at a completely different scale from a river table — silicone moulds a few centimetres across, pours well within Epoxy Clear Casting Resin's 30 mm depth limit, and small batches where every visible bubble or streak shows up clearly in the finished piece. Epoxy Clear Casting Resin, Samrat Poly Resins' 2:1 two-part epoxy system, is used for this work in the same way it's used for larger casting — the chemistry doesn't change with scale, but the technique does.",
    whatTheyManufacture: "Jewellery and craft workshops cast pendants, earrings, rings, keychains and small decorative pieces in silicone moulds, often embedding dried flowers, mica powder, glitter, small objects or pigment within the resin. The same small-batch casting technique extends to paperweights, coasters, bottle openers and other tabletop decor pieces cast in rigid or flexible moulds.",
    whySuitable: 'Small-batch jewellery casting is well within Epoxy Clear Casting Resin\'s verified 30 mm depth limit, so unlike a river table, the depth restriction is rarely a practical constraint here — most jewellery moulds are far shallower than that. What matters more at this scale is fine detail reproduction and a genuinely bubble-managed pour: its 900 cPs viscosity flows into mould detail without being so thin that it wicks under embedded objects, and its 40-minute pot life gives enough working time to mix a small batch, pour it carefully, and torch or heat-gun any surface bubbles before the resin starts to set. Its crystal-clear, high-gloss cured finish and UV-stabilised, yellowing-resistant formulation suit pieces meant to be worn or displayed over time.',
    requiredCharacteristics: [
      "Fine detail reproduction in small silicone moulds",
      "A pot life long enough to mix, pour and de-gas a small batch before it starts to set",
      "Crystal clarity that doesn't obscure embedded flowers, mica or small objects",
      "A viscosity that wets embedded objects without excessive wicking underneath them",
      "UV-stabilised colour retention for pieces worn or displayed under regular light",
    ],
    manufacturingProcess: 'Silicone moulds are usually used as-is, though a light mould-release spray can help with detailed or rigid moulds. Epoxy Clear Casting Resin is mixed 2:1 by weight with <a href="/products/epoxy-hardener/">Epoxy Hardener</a>, stirred thoroughly, and poured slowly from a slight height into the mould rather than dumped in, which reduces the air introduced during pouring itself. For pieces embedding flowers, mica or small objects, a thin base layer is often poured and left to gel slightly before the object is placed and a second pour covers it, holding the object in position rather than letting it float. Surface bubbles are released with a heat gun or small torch passed briefly over the pour; some makers pour in small increments — a little resin, check for bubbles, torch, then continue — rather than filling the mould in one go, particularly for detailed or multi-layer pieces. Once cured, pieces are demoulded, and any mould-line seams are wet-sanded and buffed back to a high-gloss finish.',
    advantages: [
      "900 cPs viscosity flows into fine mould detail without excessive wicking under embedded objects",
      "40-minute pot life gives enough working time for careful small-batch pouring and bubble release",
      "Crystal-clear, high-gloss finish suited to pieces meant to be worn or displayed",
      "Same 2:1 mixing and cure system as larger casting work, so technique carries over directly",
    ],
    commonProducts: [
      "Pendants, earrings, rings and keychains",
      "Flower, mica and small-object embedments",
      "Paperweights and small decorative castings",
      "Coasters and bottle openers cast in silicone moulds",
    ],
    faqs: [
      {
        q: "Is the 30 mm casting depth limit relevant for jewellery moulds?",
        a: "Rarely in practice — most jewellery and small decorative moulds are well under 30 mm deep, so the depth limit that matters for larger work like river tables is not usually a constraint here.",
      },
      {
        q: "How do I stop bubbles from ruining a small casting?",
        a: "Pour slowly from a slight height rather than dumping resin into the mould, then pass a heat gun or small torch briefly over the surface to release any bubbles that rise. For detailed or multi-layer pieces, pouring in small increments and checking for bubbles between pours gives more control than a single full pour.",
      },
      {
        q: "Can I embed flowers or small objects in Epoxy Clear Casting Resin?",
        a: "Yes. A common technique is pouring a thin base layer, letting it gel slightly, placing the object, then covering it with a second pour — this holds the object in position rather than letting it float to the surface.",
      },
      {
        q: "Will jewellery cast in this resin stay clear and yellowing-resistant over time?",
        a: "It uses a UV-stabilised formulation that resists yellowing significantly better than a standard, unstabilised epoxy. No clear epoxy is permanently immune to gradual colour change under prolonged, intense UV exposure, so pieces worn or displayed in direct sun for years may still show some change.",
      },
      {
        q: "How is a small jewellery batch mixed accurately at 2:1?",
        a: "The same way as a larger pour — resin and hardener are weighed on a scale at a 2:1 ratio by weight, not measured by volume or eyeballed, since accuracy matters as much for a small batch as a large one.",
      },
      {
        q: "What is the difference between using Epoxy Clear Casting Resin and Epoxy Art Resin for jewellery?",
        a: 'Both are 2:1 epoxy systems suited to small castings. Epoxy Clear Casting Resin is the more general-purpose casting choice; <a href="/products/epoxy-art-resin/">Epoxy Art Resin</a> is formulated specifically for self-levelling flatness, which matters less in a contained silicone mould than it does on an open table-top surface.',
      },
    ],
    relatedProductSlugs: ["epoxy-hardener"],
    ctaHeading: "Need Epoxy Clear Casting Resin for your jewellery or decorative casting work?",
    ctaText: "Get a bulk quote for Epoxy Clear Casting Resin, or talk to our technical team about mixing accuracy and bubble control for small-batch pours.",
  },
  {
    slug: "epoxy-clear-casting-resin-casting-process",
    title: "Epoxy Casting Process: Mixing to Finishing",
    cardImage: "epoxy-casting-resin-pour.webp",
    cardImageAlt: "Hands pouring blue-tinted mixed epoxy resin from a mixing cup onto a live-edge wood slab",
    cardDescription: "Epoxy casting is a different discipline from polyester lamination — weighed rather than dosed by percentage, degassed rather than simply rolled, and cured over days rather than minutes. This guide covers mixing, pouring and finishing Epoxy Clear Casting Resin correctly.",
    cardBenefit: "The complete mixing-to-polish workflow.",
    seo: {
      title: "Epoxy Casting Process Guide",
      description: "The complete epoxy casting process using Epoxy Clear Casting Resin — mixing by weight, degassing, staged pours and finishing.",
      keywords: ["Epoxy Casting Process", "How to Cast Epoxy Resin", "Epoxy Mixing and Curing Guide"],
    },
    draft: false,
    intro: "Epoxy casting follows a genuinely different discipline from polyester FRP lamination — resin and hardener are weighed rather than dosed by catalyst percentage, bubbles are actively managed rather than simply rolled out, and full cure takes days rather than minutes. This guide walks through mixing, pouring, curing and finishing Epoxy Clear Casting Resin correctly, independent of whether the finished piece is a river table, a jewellery casting, or another decorative project.",
    whatTheyManufacture: "This casting process underlies most of what Epoxy Clear Casting Resin is used for — river tables and wood-resin furniture, jewellery and small decorative castings, art pieces and craft work — rather than being tied to one specific end product. Anyone working with this resin, regardless of the final piece, follows broadly the same mixing, pouring and finishing sequence.",
    whySuitable: 'Epoxy Clear Casting Resin\'s 2:1 mix ratio by weight is the starting point for every stage of this process: because it\'s measured by weight rather than volume or drops, an accurate scale is a genuine requirement, not an optional nicety — getting the ratio wrong on a two-part epoxy risks a casting that stays tacky or never reaches full hardness. Its 900 cPs viscosity and 40-minute pot life give a working window that suits careful mixing and degassing without the resin gelling before pouring is finished, and its 30 mm maximum casting depth per pour is the single figure that determines whether a project needs one pour or several staged ones.',
    requiredCharacteristics: [
      "Accurate 2:1 weight-based measurement, not volume-based",
      "A pot life long enough to mix, degas and pour before the resin begins to set",
      "A viscosity workable for both careful pouring and detail work",
      "A dependable initial cure schedule for de-moulding and staged pours",
      "A predictable full cure schedule before sanding or finishing begins",
    ],
    manufacturingProcess: 'Mixing starts with a scale, not a measuring cup: Epoxy Clear Casting Resin is weighed out at a 2:1 ratio with <a href="/products/epoxy-hardener/">Epoxy Hardener</a> — for example, 200g resin to 100g hardener — since weight-based measurement is significantly more accurate than volume for a two-part system. The two are stirred together thoroughly, typically for at least two to three minutes, scraping the sides and bottom of the mixing container to avoid unmixed streaks that can leave soft, uncured patches in the finished piece. Once mixed, the resin has around 40 minutes of pot life before it begins to thicken and gel, so pouring should follow promptly. It is poured slowly, ideally from a slight height rather than dumped in, which limits the amount of air introduced by the pour itself. Surface bubbles that do form are released with a heat gun or small torch passed briefly over the fresh pour — moving quickly and not lingering in one spot, since excess heat can scorch the surface rather than simply releasing air. For anything deeper than the 30 mm maximum per pour, the resin is poured in stages: one layer poured, left to reach its initial cure at around the 24-hour mark, then the next layer poured on top, repeating until the full depth is reached. Once the final layer reaches full cure at around 72 hours, the piece is released from its mould, and any mould-line seams or surface haze from sanding are wet-sanded through progressively finer grits and buffed back to the resin\'s natural high-gloss finish.',
    advantages: [
      "2:1 weight-based mixing is straightforward with a basic digital scale",
      "40-minute pot life supports careful mixing and degassing without rushing",
      "Staged pours at up to 30 mm each keep exotherm heat manageable on deeper projects",
      "Wet-sanding and buffing restore full gloss after any surface work",
    ],
    commonProducts: [
      "River tables and wood-resin furniture",
      "Jewellery and small decorative castings",
      "General art and craft casting projects",
      "Any project needing correctly mixed, degassed and finished epoxy castings",
    ],
    faqs: [
      {
        q: "Why does Epoxy Clear Casting Resin need to be measured by weight rather than volume?",
        a: "A 2:1 weight ratio is significantly more accurate than measuring by volume for a two-part epoxy system. Small errors in ratio can leave a casting under- or over-catalysed, which shows up as a soft, tacky surface or a casting that never reaches full hardness — a basic digital scale is the standard tool for this, not a measuring cup.",
      },
      {
        q: "How long does each stage of the casting process take?",
        a: "Mixing and pouring take minutes, but curing is measured in days: Epoxy Clear Casting Resin reaches an initial, de-mouldable cure at around 24 hours and a full cure at around 72 hours. Staged pours add their own 24-hour wait between each layer.",
      },
      {
        q: "What is the maximum depth I can pour in one go?",
        a: "30 mm per pour. Anything deeper — most river tables, for example — is built up in successive stages rather than poured all at once, which keeps the exothermic heat generated during cure manageable and avoids cracking risk.",
      },
      {
        q: "How do I remove bubbles during an epoxy pour?",
        a: "Pour slowly rather than dumping resin in, then pass a heat gun or small torch briefly over the fresh pour to release surface bubbles. Moving quickly rather than lingering in one spot avoids scorching the surface.",
      },
      {
        q: "What finishing steps come after the resin has fully cured?",
        a: "Once fully cured, at around 72 hours, the piece is released from its mould and any surface imperfections or mould-line seams are wet-sanded through progressively finer grits, then buffed back to the resin's natural high-gloss finish.",
      },
      {
        q: "Does this process apply to both river tables and small jewellery castings?",
        a: 'Yes — the mixing, pot life and cure schedule are the same regardless of scale. See our dedicated guides for <a href="/applications/epoxy-clear-casting-resin-for-river-tables/">river tables and wood-resin furniture</a> and <a href="/applications/epoxy-clear-casting-resin-for-jewellery-casting/">jewellery and small decorative casting</a> for how the process applies to each.',
      },
      {
        q: "Does this process also apply to Epoxy Art Resin?",
        a: 'Yes, in most respects — <a href="/products/epoxy-art-resin/">Epoxy Art Resin</a> uses the same 2:1 mixing and a similar cure schedule. The main difference is technique emphasis: Epoxy Art Resin is formulated for self-levelling flatness on open horizontal surfaces, so its pours favour spreading evenly rather than staging for depth.',
      },
    ],
    relatedProductSlugs: ["epoxy-hardener", "epoxy-art-resin"],
    ctaHeading: "Need help planning your epoxy casting project?",
    ctaText: "Get a bulk quote for Epoxy Clear Casting Resin, or talk to our technical team about mixing ratios, staged pours and cure scheduling for your specific project.",
  },

  // ============================================================================
  //  VINYL ESTER RESIN APPLICATIONS — card-only stubs approved via Step 1
  //  technical audit and Step 2 product-page work. Vinyl Ester Resin is a
  //  premium-performance Bisphenol-A epoxy vinyl ester — same MEKP/styrene
  //  cure family as the GP-grade resins, but selected specifically where
  //  chemical resistance, corrosion resistance or demanding service
  //  conditions justify it over general-purpose polyester. Every card below
  //  is written to make that trade-off explicit — never implying Vinyl Ester
  //  Resin should replace GP Clear Resin for ordinary FRP work. Cooling
  //  towers, marine/boat hulls, pressure vessels and offshore structures were
  //  explicitly rejected as standalone applications in the audit (already
  //  covered as cross-references on existing GP Clear/GP Yellow pages, or too
  //  thin on their own) and are deliberately not built here. Slugs are
  //  prefixed "vinyl-ester-resin-for-" for consistency with the GP Yellow and
  //  Epoxy Clear Casting Resin ecosystems.
  //  All 4 are `draft: true`: cards render fully on the Vinyl Ester Resin
  //  product page now, but no dedicated /applications/ page exists yet, so
  //  getStaticPaths excludes them and each card's CTA links back to the
  //  product page instead of a dead URL. Flip draft to false individually,
  //  one at a time, once each page is actually built (Step 4).
  // ============================================================================
  {
    slug: "vinyl-ester-resin-for-chemical-storage-tanks",
    title: "Vinyl Ester Resin for Chemical Storage Tanks",
    cardDescription: "FRP tanks holding acids, alkalis or aggressive process chemicals need more chemical resistance than a general-purpose orthophthalic laminate can offer — Vinyl Ester Resin's epoxy-backbone chemistry is the premium-performance step up for that specific service, not a replacement for GP Clear Resin's role in standard water storage.",
    cardBenefit: "Chemical-resistant laminate for aggressive service.",
    cardImage: "vinyl-ester-chemical-tanks.jpg",
    cardImageAlt: "Industrial chemical storage and dosing tank skid with multiple vertical FRP tanks and piping",
    seo: {
      title: "Vinyl Ester Resin for Chemical Storage Tanks",
      description: "Vinyl Ester Resin for FRP chemical storage tanks — superior chemical and corrosion resistance for acid, alkali and solvent service.",
      keywords: ["Vinyl Ester Resin for Chemical Tanks", "Chemical Storage Tank Resin", "Corrosion Resistant Tank Resin"],
    },
    draft: false,
    intro: "FRP tanks holding acids, alkalis or other aggressive process chemicals are built differently from a general water storage tank — the wall isn't just a structural laminate, it includes a dedicated corrosion barrier designed specifically to resist the chemical being stored. Vinyl Ester Resin, Samrat Poly Resins' Bisphenol-A epoxy vinyl ester system, is the resin most commonly specified for that corrosion barrier and the structural laminate behind it, selected specifically where a general-purpose orthophthalic resin isn't rated for the service.",
    whatTheyManufacture: "Chemical processing plants, water and wastewater treatment facilities, and industrial sites fabricate FRP tanks and vessels for storing acids, caustics, bleach solutions and other process chemicals — ranging from small day tanks to large bulk storage vessels, built to the specific chemical, concentration and temperature the tank will hold.",
    whySuitable: 'A chemical storage tank\'s resistance to its contents comes primarily from its corrosion barrier — a resin-rich layer built specifically to resist chemical attack, distinct from the structural laminate that gives the tank its strength. Industry practice for this barrier typically starts with a surface veil layer around 0.3–0.8 mm thick and roughly 95% resin, reinforced with a C-glass surfacing veil that prevents the stored chemical from wicking along the glass fibres, followed by a secondary layer of resin-rich chopped strand mat before the structural laminate is built up behind it. Vinyl Ester Resin\'s epoxy backbone is what makes it suitable for this corrosion-barrier role — its resistance to acids, alkalis and solvents is genuinely superior to standard orthophthalic polyester, which is why it\'s the default choice for this specific construction rather than a general-purpose grade like <a href="/products/gp-clear-resin/">GP Clear Resin</a>. Exact chemical compatibility varies by concentration and temperature, so the specific service conditions should always be confirmed with our technical team before specifying a tank.',
    requiredCharacteristics: [
      "Genuine chemical resistance to the specific acid, alkali or solvent the tank will hold",
      "Compatibility with a C-glass surfacing veil for the resin-rich corrosion barrier layer",
      "Reliable wet-out of chopped strand mat and woven roving for the structural laminate behind the barrier",
      "Low shrinkage to avoid stress cracking at the barrier-to-structural-laminate interface",
      "A cure system that supports both room-temperature and heat-cure/post-cure schedules for demanding service",
    ],
    manufacturingProcess: 'Tank walls are built up in distinct layers rather than as a single laminate. First, a surface veil layer is applied directly against the mould — typically a C-glass surfacing veil saturated with Vinyl Ester Resin at a resin-rich ratio (around 95% resin), which becomes the tank\'s chemical-facing corrosion barrier once cured. A secondary layer follows, using <a href="/products/fibre-glass-mat/">chopped strand mat</a> wet out with Vinyl Ester Resin at a still resin-rich but lower ratio, adding barrier thickness without compromising the veil\'s wicking resistance. Once the corrosion barrier is complete, the structural laminate — chopped strand mat and woven roving wet out with Vinyl Ester Resin, catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> — is built up behind it to give the tank wall its mechanical strength. Larger cylindrical tanks are sometimes filament-wound rather than hand laid-up for the structural section. Once cured, the tank is trimmed, fitted with nozzles and supports, and — where the specification calls for it — heat post-cured to reach full chemical and thermal resistance before commissioning.',
    advantages: [
      "Epoxy-backbone chemistry gives genuinely superior resistance to acids, alkalis and solvents versus standard orthophthalic polyester",
      "Suited to the resin-rich corrosion-barrier construction chemical tanks specifically require",
      "Compatible with C-glass surfacing veil for wicking resistance at the chemical-facing surface",
      "Supports post-cure for tanks needing maximum chemical and thermal resistance",
    ],
    commonProducts: [
      "Acid and caustic storage tanks",
      "Bleach (sodium hypochlorite) storage vessels",
      "Process and day tanks for chemical plants",
      "Water and wastewater treatment chemical tanks",
    ],
    faqs: [
      {
        q: "Is Vinyl Ester Resin always better than GP Clear Resin for a storage tank?",
        a: 'No — it depends entirely on what the tank will hold. For standard water storage without aggressive chemical exposure, <a href="/products/gp-clear-resin/">GP Clear Resin</a> is the more cost-effective, appropriate choice. Vinyl Ester Resin is selected specifically when the tank will hold acids, alkalis, bleach or other chemicals that a standard orthophthalic laminate isn\'t rated to resist.',
      },
      {
        q: "What is a corrosion barrier, and why does a chemical tank need one?",
        a: "It's a resin-rich layer, typically starting with a C-glass veil at around 95% resin, built specifically to resist the stored chemical and prevent it from wicking along the glass fibres into the structural laminate behind it. A general water tank doesn't need this dedicated barrier construction; a chemical storage tank does.",
      },
      {
        q: "Can Vinyl Ester Resin handle any concentration of acid or alkali?",
        a: "Chemical resistance varies by the specific chemical, its concentration, and the operating temperature — there's no single answer that covers every service condition. Always confirm the exact chemical, concentration and temperature with our technical team before specifying a tank for a specific duty.",
      },
      {
        q: "Is Vinyl Ester Resin suitable for potable (drinking) water tanks?",
        a: "This page covers chemical-resistant industrial storage, not potable water service. Tanks intended to hold drinking water require certified food-grade materials and construction, which is a separate specification question from chemical resistance.",
      },
      {
        q: "What reinforcement is used in a Vinyl Ester Resin chemical tank?",
        a: 'A C-glass surfacing veil for the corrosion barrier, then E-glass <a href="/products/fibre-glass-mat/">chopped strand mat</a> and often woven roving for the structural laminate behind it — the same general reinforcement approach used across FRP tank construction, applied in a specific layered sequence for chemical service.',
      },
      {
        q: "How is Vinyl Ester Resin catalysed for tank fabrication?",
        a: 'It is catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> at room temperature for standard cure, with an optional heat cure and post-cure step available where maximum chemical and thermal resistance is required for the specific service.',
      },
      {
        q: "Does a chemical tank need a gelcoat exterior finish too?",
        a: 'The corrosion barrier faces the chemical on the inside; the tank\'s outer surface is a separate consideration and can be finished with a <a href="/products/gp-gelcoat-resin/">Gelcoat Resin</a> for weather protection and appearance, independent of the internal chemical-resistance construction.',
      },
    ],
    relatedProductSlugs: ["mekp-hardener", "fibre-glass-mat", "gp-clear-resin", "gp-gelcoat-resin"],
    ctaHeading: "Need Vinyl Ester Resin for your chemical storage tank?",
    ctaText: "Get a bulk quote for Vinyl Ester Resin, or talk to our technical team about corrosion-barrier construction and chemical compatibility for your specific tank service.",
  },
  {
    slug: "vinyl-ester-resin-for-pipelines-ducts-scrubbers",
    title: "Vinyl Ester Resin for Pipelines, Ducts & Scrubbers",
    cardDescription: "Chemical-plant piping, ducts and scrubber linings face continuous exposure to acids, solvents and fumes that standard polyester resin isn't rated for — Vinyl Ester Resin's superior chemical resistance is selected specifically for this demanding, sustained-exposure service.",
    cardBenefit: "Built for sustained chemical exposure.",
    cardImage: "vinyl-ester-scrubber-ductwork.jpg",
    cardImageAlt: "Industrial wet scrubber towers connected to FRP ductwork and an exhaust stack",
    seo: {
      title: "Vinyl Ester Resin for Pipelines & Scrubbers",
      description: "Vinyl Ester Resin for chemical-plant pipelines, ducts and scrubbers — chemical-resistant FRP laminate for sustained acid and solvent exposure.",
      keywords: ["Vinyl Ester Resin for Pipelines", "Scrubber Lining Resin", "Chemical Duct Resin"],
    },
    draft: false,
    intro: "Chemical-plant piping, ductwork and scrubber systems carry corrosive fumes, gases and liquids continuously rather than simply storing them — a different, arguably harder demand on the resin than a static storage tank. Vinyl Ester Resin, Samrat Poly Resins' Bisphenol-A epoxy vinyl ester system, is the standard resin choice for this kind of continuous-exposure chemical piping and ductwork, selected specifically where the fumes or liquids being carried would degrade a general-purpose orthophthalic laminate.",
    whatTheyManufacture: "Chemical processing plants, semiconductor fabrication facilities, wastewater treatment plants and metal-finishing operations fabricate FRP piping, ductwork and scrubber vessels for carrying and treating corrosive gases, fumes and process liquids — including acid fume exhaust ducts, chemical transfer piping, and the scrubber vessels that treat exhaust gas before it's released.",
    whySuitable: 'Piping, ducts and scrubber linings face continuous, moving contact with whatever chemical or fume they carry, rather than the mostly static contact a storage tank sees — so the resin-facing surface has to hold up to that ongoing exposure without degrading. Industry construction for this typically builds a resin-rich interior lining, often around 90% resin, that takes the direct chemical contact while the glass reinforcement behind it stays protected — the same corrosion-barrier principle used in tank construction, adapted for a continuous-flow surface rather than a static wall. Vinyl Ester Resin\'s epoxy backbone gives it the acid, alkali and solvent resistance this lining needs; a standard orthophthalic resin would degrade faster under the same continuous exposure. Duct and pipe sections are also typically joined at flanges or circumferential joints, where matching resin systems and thermal expansion behaviour matters for a leak-free seal.',
    requiredCharacteristics: [
      "Resin resistant enough to withstand continuous, moving contact with corrosive fumes or liquids",
      "Suitability for a resin-rich interior lining that protects the glass reinforcement behind it",
      "Compatible cure chemistry across joined sections for reliable flange and circumferential joint bonding",
      "Reliable wet-out for both filament-wound and hand-laid-up duct or pipe sections",
      "Consistent performance across the temperature range the fume or liquid stream operates at",
    ],
    manufacturingProcess: 'FRP ducts and pipe sections are built either by filament winding for cylindrical runs or by hand lay-up over a mandrel or mould for more complex duct shapes. The interior surface — the side that will contact the corrosive fume or liquid — is laid up resin-rich, wetting reinforcement with Vinyl Ester Resin catalysed by an <a href="/products/mekp-hardener/">MEKP hardener</a> at a higher resin-to-glass ratio than the structural layers behind it, giving that surface the chemical resistance the service demands. Structural layers are then built up behind the lining to give the duct or pipe its mechanical strength and pressure or vacuum rating. Individual sections are joined at flanges or circumferential joints using a compatible resin system and secondary lamination over the joint, since a mismatched joint is a common source of leaks in chemical ductwork. Scrubber vessels follow a similar lined-and-structural construction, sized and shaped to the specific gas-treatment process.',
    advantages: [
      "Resin-rich lining resists continuous chemical or fume contact better than a general-purpose resin",
      "Epoxy-backbone chemistry suited to acid, alkali and solvent exposure in moving process streams",
      "Compatible across filament-wound and hand-laid-up construction methods",
      "Consistent cure chemistry supports reliable secondary bonding at flanges and joints",
    ],
    commonProducts: [
      "Chemical fume exhaust ducts",
      "Process chemical transfer piping",
      "Wet scrubber vessels and packed towers",
      "Acid and solvent vapour extraction systems",
    ],
    faqs: [
      {
        q: "Why do ducts and pipes need a different construction from a storage tank?",
        a: "A tank mostly sees static contact with its contents; ducts, pipes and scrubbers see continuous, moving contact with corrosive fumes or liquids as they flow through. Both use a resin-rich lining principle, but ducts and pipes are built as continuous runs with jointed sections rather than a single enclosed vessel.",
      },
      {
        q: "What makes the interior lining of a chemical duct or pipe different from the structural layers behind it?",
        a: "The lining is built resin-rich — a higher proportion of Vinyl Ester Resin to glass reinforcement — specifically to face the corrosive fume or liquid, while the structural layers behind it carry the mechanical and pressure loads.",
      },
      {
        q: "How are FRP duct or pipe sections joined together?",
        a: "Typically at flanges or circumferential joints, using a compatible resin system and secondary lamination over the joint. A mismatched resin or thermal expansion behaviour between joined sections is a common cause of leaks, so joint construction matters as much as the pipe wall itself.",
      },
      {
        q: "Is Vinyl Ester Resin required for all chemical ductwork, or only some?",
        a: "It depends on what the duct or pipe carries. Mild, non-aggressive airflow may not need it, but fume streams containing acids, solvents or other aggressive chemicals typically do — the specific gas or liquid composition should be confirmed with our technical team before specifying.",
      },
      {
        q: "Can Vinyl Ester Resin ducts be filament-wound?",
        a: "Yes — cylindrical duct and pipe runs are commonly filament-wound, using the same resin system as hand-laid-up sections.",
      },
      {
        q: "How is Vinyl Ester Resin catalysed for duct and pipe construction?",
        a: 'It is catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a>, the same base system used across our resin range, with dosage and cure schedule adjusted for the specific lining and structural layer requirements.',
      },
    ],
    relatedProductSlugs: ["mekp-hardener", "fibre-glass-mat"],
    ctaHeading: "Need Vinyl Ester Resin for your ducting or piping project?",
    ctaText: "Get a bulk quote for Vinyl Ester Resin, or talk to our technical team about lining construction and chemical compatibility for your specific fume or process stream.",
  },
  {
    slug: "vinyl-ester-resin-for-filament-winding",
    title: "Vinyl Ester Resin for Filament Winding",
    cardDescription: "Filament-wound pressure vessels and chemical tanks depend on a resin viscosity that saturates continuous fibre cleanly during winding — Vinyl Ester Resin's 350 cPs body and proven chemical resistance make it a standard choice for this specific, demanding winding process.",
    cardBenefit: "Matched viscosity for clean fibre saturation.",
    cardImage: "vinyl-ester-filament-winding-machine.jpg",
    cardImageAlt: "Multi-spindle filament winding machine with fibre-wound mandrels loaded on the rack",
    seo: {
      title: "Vinyl Ester Resin for Filament Winding",
      description: "Vinyl Ester Resin for filament-wound FRP tanks and pressure vessels — 350 cPs viscosity matched to continuous fibre winding.",
      keywords: ["Vinyl Ester Resin Filament Winding", "Filament Wound Tank Resin", "Filament Winding Chemical Resin"],
    },
    draft: false,
    intro: "Filament winding builds cylindrical FRP shapes — tanks, pipes, pressure vessels — by winding continuous glass fibre, saturated with resin, around a rotating mandrel, rather than laying up reinforcement by hand into an open mould. It's a standard production method for chemical-resistant tanks and pipes at scale, and Vinyl Ester Resin's viscosity and chemical resistance are specifically suited to it.",
    whatTheyManufacture: "Filament winding produces cylindrical and near-cylindrical FRP products — chemical storage tanks, pressure vessels, and pipe sections — wherever a rotationally symmetric shape and continuous, automated production are wanted over hand lay-up.",
    whySuitable: 'Filament winding feeds continuous glass fibre through a resin bath before winding it onto a rotating mandrel, so the resin\'s viscosity has to be low enough to saturate the fibre cleanly as it passes through the bath, without dripping excessively or leaving dry fibre. Vinyl Ester Resin\'s 350 cPs viscosity sits within the range composites manufacturers commonly use for filament winding, and its epoxy-backbone chemical resistance is exactly what a filament-wound chemical tank or pipe needs, since these products are frequently built for the same aggressive-chemical service covered on our chemical storage tank and pipeline pages. Winding angle is chosen for the specific product: a high winding angle, close to 90° to the tank axis (hoop winding), maximises resistance to internal pressure trying to expand the vessel outward, while a low winding angle (helical winding, often 5–30°) maximises strength along the length of the part. Most pressure vessels and pipes combine both.',
    requiredCharacteristics: [
      "A viscosity that saturates continuous fibre cleanly as it passes through the resin bath",
      "Sufficient pot life to complete the full winding cycle before the resin gels on the mandrel",
      "Genuine chemical resistance where the finished part will hold or carry aggressive chemicals",
      "Reliable cure once winding is complete, whether at room temperature or with a heat cure",
      "Consistent viscosity and cure behaviour across a full production run",
    ],
    manufacturingProcess: 'A mandrel — permanent if it stays inside the finished part, or removable if the part needs to be hollow — is prepared and, for removable mandrels, treated with a release agent. Continuous glass fibre roving is fed through a resin bath containing Vinyl Ester Resin catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a>, saturating the fibre as it passes through, then wound onto the rotating mandrel at a winding angle chosen for the part\'s design — a high angle for hoop strength against internal pressure, a lower angle for axial strength along the part\'s length. Layers are built up by repeating the winding pattern until the specified wall thickness is reached. Once winding is complete, the part cures on the mandrel, either at room temperature or with a heat cure for faster turnaround or higher final properties. After cure, a removable mandrel is withdrawn, and the part is trimmed and fitted with end connections or nozzles as the design requires.',
    advantages: [
      "350 cPs viscosity suited to clean fibre saturation in the resin bath",
      "Epoxy-backbone chemical resistance suits filament-wound tanks and pipes built for aggressive service",
      "Consistent cure behaviour supports repeatable, automated production runs",
      "Compatible with both room-temperature and heat-cure schedules to match production speed requirements",
    ],
    commonProducts: [
      "Filament-wound chemical storage tanks",
      "FRP pressure vessels",
      "Filament-wound pipe sections",
      "Rotationally symmetric structural components",
    ],
    faqs: [
      {
        q: "Why is viscosity important for filament winding specifically?",
        a: "The resin has to saturate continuous fibre as it passes through a resin bath during winding, not just wet out reinforcement that's already in place. A resin that's too thick won't saturate cleanly at winding speed; Vinyl Ester Resin's 350 cPs viscosity sits within the range commonly used for this process.",
      },
      {
        q: "What is the difference between hoop winding and helical winding?",
        a: "Hoop winding uses a high winding angle, close to 90° to the part's axis, and maximises resistance to internal pressure trying to expand the vessel outward. Helical winding uses a lower angle, often 5–30°, and maximises strength along the part's length. Most pressure vessels and pipes use a combination of both.",
      },
      {
        q: "Does a filament-wound part need the same chemical resistance as a hand-laid-up tank?",
        a: 'If it\'s built for the same aggressive-chemical service, yes — the winding process changes how the reinforcement is applied, not what chemical resistance the finished part needs. See our <a href="/applications/vinyl-ester-resin-for-chemical-storage-tanks/">Chemical Storage Tanks</a> page for how that service requirement is assessed.',
      },
      {
        q: "Can a removable mandrel be reused?",
        a: "Yes, typically — a removable mandrel is treated with a release agent and withdrawn once the wound part has cured, then reused for the next part. A permanent mandrel stays inside the finished product and isn't reused.",
      },
      {
        q: "Is Vinyl Ester Resin's pot life long enough for a full winding cycle?",
        a: "Pot life depends on the size of the part and the winding speed — larger parts or slower winding cycles need more working time. Confirm the expected cycle time against the resin's pot life with our technical team before committing to a production schedule.",
      },
      {
        q: "How is Vinyl Ester Resin cured after filament winding?",
        a: 'It cures on the mandrel, catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a>, either at room temperature or with a heat cure for faster turnaround or higher final mechanical and thermal properties.',
      },
    ],
    relatedProductSlugs: ["mekp-hardener", "fibre-glass-mat"],
    ctaHeading: "Need Vinyl Ester Resin for your filament winding production?",
    ctaText: "Get a bulk quote for Vinyl Ester Resin, or talk to our technical team about viscosity, pot life and winding cycle time for your specific part.",
  },
  {
    slug: "vinyl-ester-resin-for-pultrusion",
    title: "Vinyl Ester Resin for Pultrusion",
    cardDescription: "Pultruded pipe and structural profiles are cured continuously through a heated die, a process that puts different demands on a resin than batch moulding — Vinyl Ester Resin's cure flexibility and chemical resistance suit this continuous, automated production method.",
    cardBenefit: "Suited to continuous, automated profiles.",
    cardImage: "vinyl-ester-pultruded-profiles.jpg",
    cardImageAlt: "Pultruded FRP square and round profile stock in yellow fibreglass and black carbon fibre",
    seo: {
      title: "Vinyl Ester Resin for Pultrusion",
      description: "Vinyl Ester Resin for pultruded FRP pipe and structural profiles — chemical-resistant resin suited to continuous, die-cured production.",
      keywords: ["Vinyl Ester Resin Pultrusion", "Pultruded Pipe Resin", "Pultrusion Chemical Resin"],
    },
    draft: false,
    intro: "Pultrusion produces constant-cross-section FRP profiles — pipe, rod, structural sections — by pulling continuous fibre reinforcement through a resin bath and then a heated die, rather than winding it onto a mandrel or laying it up by hand. It's a fully continuous, automated process, and Vinyl Ester Resin's flexible cure system and chemical resistance suit both the process itself and the chemical-service profiles it commonly produces.",
    whatTheyManufacture: "Pultrusion produces continuous-length FRP profiles with a constant cross-section — structural sections (channels, angles, I-beams), rod and bar stock, and pipe — cut to length as they emerge from the process. Chemical-resistant grating, ladder rails and structural members for chemical-plant walkways and platforms are common vinyl ester pultrusion products.",
    whySuitable: 'Pultrusion pulls continuous fibre reinforcement through a resin bath for impregnation, then through a heated die that both shapes the profile and cures the resin as it passes through — typically across several independently controlled heating zones in the 120–170°C range, with pull speed (commonly around 0.5–2.0 metres per minute) matched to how quickly the resin gels and cures at that temperature. Vinyl Ester Resin\'s flexible cure system — supporting room-temperature cure as well as the elevated die temperatures pultrusion uses — fits this process, and its chemical resistance is exactly what structural profiles destined for chemical-plant walkways, grating or corrosion-resistant structural members need, in a way a general-purpose orthophthalic resin\'s cure and resistance profile doesn\'t match as well.',
    requiredCharacteristics: [
      "A cure profile compatible with heated-die processing across multiple temperature zones",
      "Gel and cure timing matched to the die temperature and the line's pull speed",
      "Genuine chemical resistance for profiles destined for chemical-plant or corrosive-environment service",
      "Consistent viscosity for reliable fibre impregnation in the resin bath at production speed",
      "Dimensional stability through the die so the finished profile holds its specified cross-section",
    ],
    manufacturingProcess: 'Continuous fibre reinforcement — rovings, and often mat or fabric for specific profile properties — is drawn from a creel through a resin bath, where it\'s impregnated with Vinyl Ester Resin catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a>. The saturated reinforcement is then pulled through a heated steel die, typically with several independently controlled zones across the 120–170°C range, which shapes the profile to the die\'s cross-section and cures the resin as it passes through. Pull speed — commonly in the region of 0.5–2.0 metres per minute — is set to match how quickly the resin gels and cures at the die\'s temperature and the profile\'s thickness; too fast a pull risks incomplete cure, too slow reduces production efficiency. As the cured profile emerges continuously from the die, it\'s cut to length by an automated saw, ready for structural use with no further curing step required.',
    advantages: [
      "Cure system compatible with heated-die processing across multiple temperature zones",
      "Chemical resistance suited to structural profiles used in chemical-plant and corrosive environments",
      "Consistent viscosity supports reliable fibre impregnation at production line speed",
      "Continuous, automated process suited to long structural-profile production runs",
    ],
    commonProducts: [
      "Structural profiles — channels, angles and I-beams — for corrosive environments",
      "Pultruded FRP grating and walkway components",
      "Rod and bar stock for chemical-plant structural use",
      "Ladder rails and handrail sections",
    ],
    faqs: [
      {
        q: "What makes pultrusion different from filament winding?",
        a: 'Pultrusion produces constant-cross-section profiles — pipe, rod, structural sections — by pulling reinforcement through a resin bath and a heated die continuously. <a href="/applications/vinyl-ester-resin-for-filament-winding/">Filament winding</a> wraps reinforcement around a rotating mandrel to build rotationally symmetric shapes like tanks and pressure vessels. They\'re both continuous processes, but produce fundamentally different part geometries.',
      },
      {
        q: "What die temperature does pultrusion use, and does Vinyl Ester Resin support it?",
        a: "Pultrusion dies typically run across several zones in the 120–170°C range. Vinyl Ester Resin's cure system supports both room-temperature cure and elevated-temperature processing, which is what makes it compatible with this heated-die process.",
      },
      {
        q: "How fast does the pultrusion line run?",
        a: "Pull speed is commonly in the region of 0.5–2.0 metres per minute, set to match how quickly the resin gels and cures at the die's operating temperature and the profile's thickness — thicker profiles or lower die temperatures generally mean a slower pull speed.",
      },
      {
        q: "Are pultruded profiles fully cured as they come off the line?",
        a: "Yes — the heated die cures the resin as the profile passes through, so no separate post-cure step is needed before the profile is cut to length and used, unlike some room-temperature-cured hand lay-up parts that may benefit from a later post-cure.",
      },
      {
        q: "What chemical resistance do pultruded structural profiles need?",
        a: "It depends on the installation — grating, walkways or structural members in a chemical plant typically face splash, fume or spill exposure even if they're not directly immersed. Confirm the specific service environment with our technical team to determine whether Vinyl Ester Resin's resistance profile matches your application.",
      },
      {
        q: "How is Vinyl Ester Resin catalysed for pultrusion?",
        a: 'It is catalysed with an <a href="/products/mekp-hardener/">MEKP hardener</a> before entering the resin bath, with dosage and cure kinetics tuned to the specific die temperature and pull speed of the production line.',
      },
    ],
    relatedProductSlugs: ["mekp-hardener", "fibre-glass-mat"],
    ctaHeading: "Need Vinyl Ester Resin for your pultrusion line?",
    ctaText: "Get a bulk quote for Vinyl Ester Resin, or talk to our technical team about cure kinetics and die temperature for your specific profile and production speed.",
  },
];
