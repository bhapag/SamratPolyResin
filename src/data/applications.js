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
];
