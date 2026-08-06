// ============================================================================
//  KNOWLEDGE CENTRE — technical resource articles
// ============================================================================
//
//  This is a structured technical resource centre, not a blog. Each entry
//  below defines one article's metadata and its section outline (the
//  `sections` array becomes the Table of Contents and the H2 headings on
//  the article page).
//
//  Fields:
//    slug          unique url-friendly id
//    title         article title (used as the page H1)
//    description   one-sentence summary, shown on the resource card and
//                  used as the page meta description
//    icon          one of: info, grid, checklist, layers, shield, tank,
//                  roof, door, clock, drum (see ResourceIcon.astro)
//    category      short label shown on cards and in the article hero
//    readingTime   fallback only — the article template calculates actual
//                  reading time from content via getReadingTime() below.
//                  Kept for the resource-card grid, which shows it without
//                  loading full section content.
//    publishDate   ISO date string, shown on the article page and used in
//                  the Schema.org Article JSON-LD
//    sections      ordered list of section headings for the article body.
//                  A plain string = heading only, no body written yet.
//                  An object ({ heading, body, ... }) = real written content.
//    draft         true = excluded from getStaticPaths, the /resources/
//                  index, and the sitemap. Use this for any article whose
//                  `sections` are still plain-string headings — that way an
//                  unfinished outline can never accidentally go live showing
//                  placeholder filler text to a real visitor or Google.
//                  Remove the flag once every section has real body content.
//
//  No invented facts, figures or specs are used as filler — sections without
//  real content are marked `draft: true` instead of being padded out.
// ============================================================================

// Dynamic reading time — walks the actual section/subsection/FAQ content
// (never a hardcoded figure) and estimates minutes at ~200 words/minute.
export function getReadingTime(resource) {
  let words = 0;
  const count = (str) => {
    if (!str) return;
    words += String(str).trim().split(/\s+/).filter(Boolean).length;
  };
  (resource.sections || []).forEach((s) => {
    if (typeof s === 'string') { count(s); return; }
    count(s.heading);
    (s.body || []).forEach(count);
    (s.subsections || []).forEach((sub) => { count(sub.heading); count(sub.body); });
  });
  (resource.faqs || []).forEach((f) => { count(f.q); count(f.a); });
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export const resources = [
  {
    slug: "what-is-gp-polyester-resin",
    title: "What is GP Polyester Resin?",
    description: "A complete guide to General Purpose (GP) polyester resin — what it is, how it's made, key properties, applications and how to select the right grade.",
    category: "Product Guide",
    icon: "info",
    readingTime: "10 min read",
    publishDate: "2026-07-18",

    seo: {
      title: "GP Polyester Resin — Properties, Uses & Buying Guide",
      keywords: [
        "GP polyester resin",
        "general purpose polyester resin",
        "unsaturated polyester resin",
        "UPR resin",
        "FRP resin",
        "polyester resin manufacturer India",
        "GP resin applications",
        "GP resin properties",
      ],
      ogTitle: "What is GP Polyester Resin? A Complete Guide",
      ogDescription: "What General Purpose polyester resin is, how it's manufactured, its properties and advantages, where it's used, and how to select and store it correctly.",
    },

    quickFacts: {
      "Resin Type": "Unsaturated Polyester Resin (UPR)",
      "Material Class": "Thermosetting resin",
      "Curing System": "Room-temperature cure via peroxide catalyst (typically MEKP)",
      "Typical Reinforcement": "Glass fibre — chopped strand mat, woven roving",
      "Typical Applications": "FRP tanks, roofing sheets, door skins, industrial mouldings",
      "Appearance": "Viscous liquid, pale to water-white depending on grade",
    },

    propertiesTable: {
      headers: ["Property", "Typical Performance"],
      rows: [
        ["Mechanical Strength", "Good — suitable for most general structural and semi-structural FRP components"],
        ["Chemical Resistance", "Moderate — adequate for general environmental exposure; speciality grades needed for aggressive chemicals"],
        ["Processability", "Excellent — compatible with hand lay-up, spray-up and most open-mould processes"],
        ["Surface Finish", "Good — smooth, paintable finish when used with a compatible gel coat"],
        ["Adhesion", "Good — bonds well to glass fibre reinforcement and common core materials"],
        ["Cost Effectiveness", "Very good — among the most economical resin systems available"],
        ["Curing Characteristics", "Reliable — cures at room temperature with standard peroxide catalysts"],
        ["Glass Fibre Compatibility", "Excellent — well suited to chopped strand mat, woven roving and combination reinforcements"],
      ],
      note: "Exact figures vary between manufacturers and grades. Always confirm against the specific product's technical data sheet (TDS).",
    },

    resinFamilyTable: {
      headers: ["Resin Type", "Typical Positioning"],
      rows: [
        ["GP Polyester Resin", "General purpose applications"],
        ["Isophthalic Polyester Resin", "Improved water & chemical resistance"],
        ["Vinyl Ester Resin", "Higher chemical resistance"],
        ["Epoxy Resin", "Higher structural performance"],
      ],
      note: "This is a general positioning guide, not a ranking — no resin system is universally “better”, and the right choice depends on the application.",
    },

    comparisonTable: {
      title: "GP Polyester Resin vs Epoxy Resin vs Vinyl Ester Resin",
      note: "This comparison is general in nature. No single resin system is universally “better” — actual performance depends on the specific grade, formulation and reinforcement used, and should be confirmed against manufacturer data.",
      headers: ["Property", "GP Polyester Resin", "Epoxy Resin", "Vinyl Ester Resin"],
      rows: [
        ["Cost", "Low", "High", "Moderate to high"],
        ["Strength", "Good for general use", "Very good — high strength-to-weight ratio", "Very good — good toughness"],
        ["Chemical Resistance", "Moderate", "Good to very good, application-dependent", "Very good — strong corrosion resistance"],
        ["Ease of Processing", "Easy — room-temperature cure, familiar techniques", "Requires more precise mixing and cure control", "Similar to polyester, slightly more sensitive to processing conditions"],
        ["Typical Applications", "Tanks, roofing sheets, mouldings, general FRP", "Structural composites, adhesives, high-performance parts", "Chemical storage tanks, pipework, corrosion-resistant structures"],
      ],
    },

    relatedSlugs: [
      "applications-of-gp-polyester-resin",
      "how-to-select-polyester-resin-for-frp-manufacturing",
      "understanding-gel-time-in-polyester-resin",
    ],
    recommendedLinks: [
      { href: "/products/gp-clear-resin/", label: "View GP Clear Resin", description: "Review the published general-purpose grade, TDS and procurement details." },
      { href: "/resources/applications-of-gp-polyester-resin/", label: "Explore GP Resin applications", description: "Match the resin discussion to the finished FRP product." },
    ],

    faqs: [
      {
        q: "What does GP mean in GP polyester resin?",
        a: "GP stands for General Purpose. It refers to a standard-grade unsaturated polyester resin formulated for broad, everyday FRP applications, as opposed to speciality resins engineered for specific properties such as fire retardancy or enhanced chemical resistance.",
      },
      {
        q: "Does GP resin require MEKP to cure?",
        a: "Yes. GP polyester resin is typically cured using a peroxide catalyst, most commonly Methyl Ethyl Ketone Peroxide (MEKP), added at a small percentage just before use to initiate curing. The correct dosage should always follow the manufacturer's technical data sheet.",
      },
      {
        q: "Can GP resin be reinforced with glass fibre?",
        a: "Yes. GP resin is designed to be used with glass fibre reinforcement, including chopped strand mat, woven roving and combination fabrics, and this reinforcement is what gives the cured laminate its structural strength.",
      },
      {
        q: "Is GP resin waterproof?",
        a: "Cured GP resin laminates generally resist water well and provide a good barrier for general storage and outdoor use. However, GP resin offers moderate rather than specialised chemical resistance, so prolonged immersion or aggressive chemical exposure may call for an isophthalic or vinyl ester grade instead.",
      },
      {
        q: "Can GP resin be painted?",
        a: "Yes. Once fully cured, GP resin laminate surfaces can generally be painted using compatible coating systems, particularly after appropriate surface preparation such as light abrasion and cleaning.",
      },
      {
        q: "What industries use GP polyester resin?",
        a: "GP resin is used across FRP water tank manufacturing, roofing sheet production, door skin manufacturing, industrial mouldings, decorative panels, marine components, automotive parts and general construction products, among other FRP applications.",
      },
      {
        q: "How long does GP resin last once cured?",
        a: "Cured GP resin laminates are designed for long-term structural use and, when correctly formulated and reinforced, can perform reliably for many years under normal service conditions. Actual service life depends on the application, environmental exposure and product design.",
      },
      {
        q: "How should GP resin be stored before use?",
        a: "Uncured GP resin should be stored in tightly sealed containers, in a cool, dry, well-ventilated area away from direct sunlight and heat sources, and used within the shelf life stated on the product's technical data sheet.",
      },
      {
        q: "What is the difference between GP resin and gel coat resin?",
        a: "GP resin is a laminating resin used with reinforcement to build structural thickness in a composite part, while gel coat resin is a surface-coating resin applied as the outermost layer of a mould, ahead of lamination, to provide a smooth, protective and often pigmented finish.",
      },
    ],

    sections: [
      {
        heading: "Introduction",
        body: [
          "General Purpose (GP) polyester resin is one of the most widely used thermosetting resin systems in the fibre-reinforced plastics (FRP) and composites industry. It is manufactured by reacting unsaturated dibasic acids or anhydrides with glycols, then dissolving the resulting polyester in styrene monomer. Once combined with a suitable catalyst, it cures through free-radical crosslinking into a rigid, insoluble thermoset structure.",
          "Its popularity is not accidental. GP resin offers a practical balance of mechanical performance, ease of processing and cost, which is why it remains the default choice for a broad range of FRP applications — from water storage tanks and roofing sheets to industrial mouldings and construction products. Unlike speciality resin systems developed for specific performance requirements, such as enhanced chemical resistance, fire retardancy, or superior toughness, GP resin is formulated as a versatile, all-round material suited to general-purpose composite manufacturing.",
          "This article explains what GP polyester resin is, how it is manufactured, its key properties and advantages, where it is used, and how manufacturers should approach selecting and handling it correctly.",
        ],
      },
      {
        heading: "What Is General Purpose (GP) Polyester Resin?",
        body: [
          "The term “GP” simply stands for General Purpose. It distinguishes this resin grade from speciality polyester systems — such as isophthalic, fire-retardant, or gel coat resins — that are engineered for specific performance characteristics. GP resin, by contrast, is formulated to perform reliably across a wide range of everyday FRP applications without the need for specialised additives or modified backbone chemistry.",
          "Chemically, GP resin belongs to the unsaturated polyester resin (UPR) family. Unsaturated polyester resins are produced by reacting unsaturated dibasic acids or anhydrides, commonly maleic anhydride, with glycols to form a polyester backbone containing reactive carbon-carbon double bonds. This polyester is then dissolved in styrene monomer, which acts both as a viscosity-reducing solvent and as the reactive comonomer that crosslinks the resin during curing. When combined with a peroxide catalyst — most commonly Methyl Ethyl Ketone Peroxide (MEKP) — the resin cures at room temperature into a rigid, thermoset polymer network.",
          "GP resin is typically based on orthophthalic acid chemistry, which is more economical to produce than isophthalic or vinyl ester alternatives. Isophthalic resins offer improved water and chemical resistance; vinyl ester resins offer superior corrosion resistance and toughness; fire-retardant grades incorporate halogenated or halogen-free additives to meet flammability standards; gel coat resins are formulated for surface finish and weatherability rather than structural lamination. GP resin sits at the general-purpose end of this spectrum — it is not engineered to excel in any one of these specialised areas, but it performs adequately across most of them at a lower cost.",
          "Manufacturers choose GP resin because it offers a dependable combination of processability, mechanical performance and cost-effectiveness for applications that do not demand the enhanced properties of speciality systems. It is compatible with common reinforcement materials, cures reliably under standard workshop conditions, and is widely available, making it a practical default for FRP fabricators producing tanks, panels, roofing sheets and general mouldings.",
        ],
        visuals: [
          {
            type: "steps",
            caption: "How catalysed GP resin cures from a liquid into a rigid composite",
            items: [
              { label: "Liquid GP Resin + MEKP Catalyst" },
              { label: "Cross-Linking Reaction" },
              { label: "Gel Stage" },
              { label: "Hard Cure" },
              { label: "Finished Composite Product" },
            ],
          },
        ],
        table: "resinFamilyTable",
        callouts: [
          {
            label: "Information",
            variant: "info",
            text: "GP stands for General Purpose — a standard-grade unsaturated polyester resin formulated for broad, everyday FRP applications, rather than a speciality system engineered for one specific property.",
          },
        ],
      },
      {
        heading: "How GP Polyester Resin Is Manufactured",
        photo: {
          src: "production-infrastructure.jpg",
          alt: "Stainless-steel resin processing reactors at the Samrat Poly Resins manufacturing facility",
          caption: "Our production reactors — Doraha, Ludhiana",
        },
        body: [
          "GP polyester resin manufacturing begins with a small number of core raw materials: unsaturated dibasic acids or anhydrides (typically maleic anhydride, sometimes combined with phthalic anhydride), saturated dibasic acids such as phthalic anhydride, which contribute rigidity and control the degree of unsaturation, and glycols, commonly propylene glycol or ethylene glycol, which provide the flexible backbone linking the acid units together.",
          "These raw materials are reacted together in a controlled polycondensation process inside a resin reactor, typically under heat and with continuous removal of water, a by-product of the esterification reaction. This produces a linear unsaturated polyester chain containing reactive double bonds distributed along its backbone. The reaction is monitored and controlled to achieve a target acid value and molecular weight, which influence the resin's final viscosity and reactivity.",
          "Once the polyester base is formed and cooled to a safe handling temperature, it is dissolved in styrene monomer, typically in a ratio that balances viscosity, reactivity and cured mechanical properties. Styrene serves two purposes: it reduces the viscosity of the otherwise highly viscous polyester so it can be processed at ambient temperature, and it acts as the crosslinking agent that reacts with the polyester's unsaturation sites during cure. Small quantities of inhibitor are also added at this stage to give the resin adequate shelf life and controllable gel time before it is catalysed for use.",
          "Before packaging, each batch is checked against a set of quality parameters, which typically include viscosity, acid value, colour and gel time. These checks confirm that the batch is consistent with previous production and suitable for its intended application, helping fabricators achieve repeatable results from drum to drum.",
          "Finished GP resin is typically packed into sealed drums to protect it from moisture, contamination and light exposure, all of which can affect shelf life and performance if the resin is stored incorrectly.",
        ],
        visuals: [
          {
            type: "steps",
            caption: "GP polyester resin manufacturing process",
            items: [
              { label: "Raw Materials" },
              { label: "Polyester Formation" },
              { label: "Styrene Addition" },
              { label: "Quality Control" },
              { label: "Packaging" },
              { label: "Industrial Customer" },
            ],
          },
        ],
        callouts: [
          {
            label: "Technical Note",
            variant: "technical",
            text: "Each batch is checked against viscosity, acid value, colour and gel time before packaging — these checks confirm the batch matches the specification and prior production runs, not just that it looks correct.",
          },
        ],
      },
      {
        heading: "Key Properties of GP Polyester Resin",
        body: [
          "GP resin's properties reflect its role as an all-round material rather than a specialised one. The table below summarises how it typically compares across the properties that matter most to FRP fabricators.",
        ],
        table: "propertiesTable",
      },
      {
        heading: "Advantages of GP Polyester Resin",
        subsections: [
          { heading: "Economical", body: "GP resin is one of the most cost-effective resin systems available, making it the practical choice for high-volume or price-sensitive FRP production where speciality performance is not required." },
          { heading: "Easy Processing", body: "It is compatible with straightforward, room-temperature curing processes and common catalyst systems, allowing fabricators to work with familiar techniques and equipment without specialised curing infrastructure." },
          { heading: "Good Mechanical Properties", body: "When properly reinforced with glass fibre, GP resin laminates achieve mechanical properties suitable for a wide range of structural and semi-structural applications." },
          { heading: "Good Dimensional Stability", body: "Cured GP resin laminates hold their shape and dimensions well under normal service conditions, which matters for products such as tanks and panels that must maintain accurate geometry." },
          { heading: "Smooth Finish", body: "GP resin, particularly when paired with a compatible gel coat, produces a smooth, consistent surface finish suitable for both functional and semi-decorative applications." },
          { heading: "Efficient Production", body: "Predictable gel time and cure behaviour allow fabricators to plan production schedules with confidence, supporting efficient, repeatable manufacturing." },
        ],
        callouts: [
          {
            label: "Key Takeaway",
            variant: "takeaway",
            items: ["Economical", "Easy processing", "Good mechanical properties", "Good dimensional stability", "Smooth finish", "Efficient production"],
          },
        ],
      },
      {
        heading: "Common Industrial Applications",
        visuals: [
          {
            type: "steps",
            caption: "Typical manufacturing workflow for GP resin composites",
            items: [
              { label: "GP Resin + Glass Fibre Reinforcement" },
              { label: "Composite Laminate" },
              { label: "Finished Product" },
            ],
            branchLabel: "Typical Applications",
            branchItems: ["Water Tanks", "Roofing Sheets", "Door Skins", "FRP Components", "Decorative Panels"],
          },
        ],
        subsections: [
          { heading: "FRP Water Tanks", body: "GP resin is widely used in manufacturing FRP water storage tanks, where its good mechanical strength, dimensional stability and compatibility with glass fibre reinforcement provide a durable, corrosion-free storage vessel. Its cost-effectiveness is particularly valuable given the relatively large resin volumes required for tank fabrication." },
          { heading: "Roofing Sheets", body: "In FRP and translucent roofing sheets, GP resin's clarity in appropriate formulations, UV-stabilised grades and smooth cured finish support both structural roofing panels and roof-light sheets that admit natural light while maintaining weather resistance." },
          { heading: "Door Skins", body: "FRP door skins benefit from GP resin's ability to reproduce fine mould detail and achieve a smooth, paintable or textured surface, while its mechanical properties provide the rigidity and impact resistance expected of a door facing." },
          { heading: "Industrial Mouldings", body: "GP resin is a practical choice for general industrial mouldings — enclosures, covers, ducting and similar components — where moderate mechanical and chemical performance is sufficient and cost efficiency is a priority." },
          { heading: "Decorative Panels", body: "For decorative and architectural panels, GP resin's compatibility with pigments and its smooth surface finish allow fabricators to produce consistent colour and texture across production runs." },
          { heading: "Marine Components", body: "In less demanding marine applications, GP resin is used for components where full marine-grade isophthalic or vinyl ester performance is not required, offering an economical option for parts not subject to prolonged immersion or high mechanical loading." },
          { heading: "Automotive Components", body: "GP resin is used in certain automotive FRP components, such as body panels and covers, where its processability and finish support moderate-volume production without the cost of speciality resin systems." },
          { heading: "Construction Products", body: "Beyond tanks and roofing, GP resin is used across various construction-related FRP products, including cladding, formwork and structural liners, where its balance of strength, cost and workability suits general building applications." },
        ],
        visualsAfter: [
          {
            type: "icongrid",
            label: "Infographic: industrial applications of GP polyester resin",
            caption: "GP polyester resin — industrial applications",
            items: [
              { icon: "tank", label: "Water Tanks" },
              { icon: "roof", label: "Roofing Sheets" },
              { icon: "door", label: "Door Skins" },
              { icon: "marine", label: "Marine Components" },
              { icon: "moulding", label: "Industrial Mouldings" },
              { icon: "decorative", label: "Decorative Panels" },
              { icon: "construction", label: "Construction Products" },
              { icon: "automotive", label: "Automotive Components" },
            ],
          },
        ],
      },
      {
        heading: "Manufacturing Processes",
        visuals: [
          {
            type: "icongrid",
            label: "Diagram: manufacturing methods compatible with GP polyester resin",
            caption: "Manufacturing methods used with GP polyester resin",
            items: [
              { icon: "hand-layup", label: "Hand Lay-Up" },
              { icon: "spray-up", label: "Spray-Up" },
              { icon: "compression", label: "Compression Moulding" },
              { icon: "pultrusion", label: "Pultrusion" },
              { icon: "lamination", label: "Continuous Lamination" },
              { icon: "vacuum", label: "Vacuum Bagging" },
            ],
          },
        ],
        subsections: [
          { heading: "Hand Lay-Up", body: "The most common and accessible FRP process, in which catalysed resin is applied by brush or roller onto reinforcement laid into an open mould. GP resin's workable gel time and viscosity make it well suited to this manual, labour-intensive method." },
          { heading: "Spray-Up", body: "In spray-up, catalysed resin and chopped glass fibre are simultaneously deposited onto the mould using spray equipment. GP resin's viscosity and cure characteristics are compatible with this faster, semi-mechanised process, commonly used for tanks and larger components." },
          { heading: "Compression Moulding", body: "GP resin formulations, often as part of sheet moulding compound (SMC) or dough moulding compound (DMC) systems, are used in compression moulding, where heat and pressure cure the resin rapidly in a closed mould — suited to higher-volume production of consistent parts." },
          { heading: "Continuous Lamination", body: "For flat or corrugated sheet products such as roofing sheets, GP resin is used in continuous lamination lines, where resin-impregnated reinforcement passes through a curing process to produce continuous panel lengths." },
          { heading: "Pultrusion (Where Suitable Grades Are Used)", body: "Certain GP resin grades, formulated with appropriate reactivity and viscosity, are used in pultrusion — a continuous process that pulls resin-impregnated reinforcement through a heated die to form constant cross-section profiles. Not all GP grades are suitable; pultrusion typically requires resins specifically formulated for the process's fast, controlled cure requirements." },
          { heading: "Vacuum Bagging", body: "GP resin can be used in vacuum bagging processes, where atmospheric pressure consolidates the laminate and removes excess resin and trapped air, improving fibre-to-resin ratio and reducing voids compared with basic hand lay-up." },
        ],
      },
      {
        heading: "How to Select the Right GP Polyester Resin",
        subsections: [
          { heading: "Application", body: "Start with the end-use of the component. Structural parts, storage tanks, decorative panels and roofing products each place different demands on mechanical performance, surface finish and chemical exposure, which should guide grade selection." },
          { heading: "Gel Time", body: "Gel time — how quickly the catalysed resin begins to cure — should match the production process and component size. Larger components or manual lay-up typically require a longer working time, while faster-cycle processes may need a shorter gel time." },
          { heading: "Viscosity", body: "Resin viscosity affects how easily it wets out reinforcement and flows into mould detail. Lower-viscosity grades suit fine detail and thorough fibre wet-out; higher-viscosity or thixotropic grades help resin stay in place on vertical or overhead mould surfaces." },
          { heading: "Mechanical Properties", body: "Consider the load-bearing and impact requirements of the finished part, and select a grade with mechanical properties appropriate to the application, reinforcement type and expected service conditions." },
          { heading: "Chemical Resistance", body: "For components exposed to water, mild chemicals or outdoor weathering, assess whether standard GP resin's moderate chemical resistance is sufficient, or whether an isophthalic or vinyl ester grade is more appropriate." },
          { heading: "Processing Method", body: "Match the resin grade to the intended manufacturing process — hand lay-up, spray-up, compression moulding, continuous lamination, pultrusion or vacuum bagging — since not all GP grades are formulated for every process." },
          { heading: "Environmental Conditions", body: "Account for the temperature, humidity and UV exposure the finished product will face in service, as well as the workshop conditions during fabrication, both of which affect cure behaviour and long-term performance." },
        ],
        callouts: [
          {
            label: "Best Practice",
            variant: "practice",
            items: [
              "Confirm gel time and viscosity against your process before committing to a bulk order",
              "Request the technical data sheet (TDS) for the specific grade rather than relying on general GP resin figures",
              "Trial a small batch under real production conditions before scaling up",
            ],
          },
        ],
      },
      {
        heading: "Storage and Handling",
        body: [
          "GP polyester resin should be stored in a cool, dry, well-ventilated area, away from direct sunlight, heat sources and open flames. Storing resin at excessive temperatures accelerates the ageing of its inhibitor system, which can shorten shelf life and cause premature gelling in the drum.",
          "Exact recommended storage temperature ranges vary by manufacturer and grade, so resin should generally be kept within a moderate, stable temperature range rather than subjected to extremes of heat or cold. Always refer to the product's technical data sheet (TDS) for the specific recommended storage temperature.",
          "Drums should be kept tightly sealed when not in use. Exposure to air allows styrene monomer to evaporate, which changes the resin's viscosity and reactivity, and can also allow moisture or contaminants to enter the container.",
          "Unsaturated polyester resin has a finite shelf life, typically measured in months rather than years, and this reduces further if storage conditions are not followed. Always check the batch manufacturing date and consult the SDS/TDS for the manufacturer's stated shelf life rather than assuming a fixed figure, since this varies between products.",
          "GP resin contains styrene monomer, which is flammable and gives off vapour that should not be inhaled in unventilated spaces. When handling resin and catalyst, appropriate personal protective equipment should be used, typically including chemical-resistant gloves, eye protection, and respiratory protection where ventilation is limited. Resin and peroxide catalyst, such as MEKP, must always be stored, handled and mixed separately, as direct contact between concentrated peroxide and accelerator can be hazardous. Full handling, storage and emergency guidance should always be read from the product's Safety Data Sheet (SDS) before use.",
        ],
        callouts: [
          {
            label: "Best Practice",
            variant: "practice",
            items: [
              "Cool, dry, well-ventilated area — away from direct sunlight and heat sources",
              "Keep drums tightly sealed when not in use",
              "Check the batch date and use within the shelf life stated on the TDS",
              "Never store resin and peroxide catalyst together",
            ],
          },
          {
            label: "Important Note",
            variant: "warning",
            text: "Resin and peroxide catalyst (such as MEKP) must always be stored, handled and mixed separately — direct contact between concentrated peroxide and accelerator can be hazardous. Always read the product's Safety Data Sheet (SDS) before use.",
          },
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "GP polyester resin remains one of the most practical and widely used resin systems in FRP manufacturing because it offers a dependable balance of mechanical performance, processability and cost. It is not designed to outperform speciality resin systems in any single demanding property, but for the broad range of general industrial applications — from water tanks and roofing sheets to industrial mouldings and construction products — it continues to provide manufacturers with a reliable, economical and well-understood material. Selecting the right grade, and following correct storage and handling practices, remains essential to achieving consistent results in production.",
        ],
      },
    ],
  },
  {
    slug: "applications-of-gp-polyester-resin",
    title: "Applications of GP Polyester Resin",
    description: "Explore where GP Polyester Resin is commonly used across FRP, construction, marine and industrial manufacturing.",
    category: "Application Guide",
    icon: "grid",
    readingTime: "6 min read",
    publishDate: "2026-07-18",

    quickFacts: {
      "Primary Role": "Laminating resin for glass-fibre-reinforced (FRP) components",
      "Broadest Use Cases": "Water tanks, roofing sheets, door skins, industrial mouldings",
      "Key Selection Driver": "Exposure and load the finished part will face in service",
      "When to Look Elsewhere": "Sustained chemical immersion or fire-rating requirements",
    },

    relatedSlugs: [
      "what-is-gp-polyester-resin",
      "how-to-select-polyester-resin-for-frp-manufacturing",
    ],
    recommendedLinks: [
      { href: "/products/gp-clear-resin/", label: "View GP Clear Resin", description: "Review the published GP grade used across common FRP processes." },
      { href: "/resources/how-to-select-polyester-resin-for-frp-manufacturing/", label: "Read the selection guide", description: "Compare the process with the relevant resin data." },
    ],

    faqs: [
      {
        q: "Is GP resin suitable for every FRP application?",
        a: "No. GP resin is a strong default for general-purpose FRP work, but applications involving sustained chemical exposure, prolonged water immersion, or fire-rating requirements are usually better served by isophthalic, vinyl ester or fire-retardant grades instead.",
      },
      {
        q: "Can the same GP resin be used for tanks, roofing sheets and door skins?",
        a: "The same broad resin family can serve all three, but the specific grade often differs. Tank manufacturing, continuous sheet lamination and door-skin moulding each place different demands on viscosity and gel time, so fabricators typically use a grade suited to their particular process rather than one universal product.",
      },
      {
        q: "Why is GP resin so widely used across such different industries?",
        a: "Its combination of adequate mechanical strength, workable processing behaviour and low cost makes it viable across many unrelated applications at once — from construction products to industrial mouldings — without needing a specialised formulation for each one.",
      },
      {
        q: "Is GP resin used in marine applications?",
        a: "It is used in some lower-demand marine components not subject to prolonged immersion or heavy structural loading. For hulls, decks and other parts with sustained water contact, marine fabricators generally move to isophthalic or vinyl ester resin for better long-term water resistance.",
      },
      {
        q: "What is the most common mistake buyers make when applying GP resin?",
        a: "Assuming a single \"general purpose\" grade will perform identically across every application. Gel time, viscosity and mechanical requirements shift between a large tank, a thin roofing sheet and a moulded door skin, so the grade should be matched to the specific product being made.",
      },
      {
        q: "Does GP resin need reinforcement to be usable in these applications?",
        a: "Yes. GP resin on its own is not structural — it relies on glass fibre reinforcement (chopped strand mat, woven roving, or a combination) to provide the mechanical strength that makes these applications viable.",
      },
      {
        q: "How do I know which application-specific grade to ask for?",
        a: "Start with the end product and its service conditions, then check candidate grades against their technical data sheets for viscosity, gel time and mechanical performance suited to that use — a supplier's technical team can help narrow this down for your specific process.",
      },
    ],

    sections: [
      {
        heading: "Overview of GP Polyester Resin Applications",
        body: [
          "GP polyester resin's popularity comes from how broadly it applies, not from excelling at any single task. Because it strikes a workable balance between mechanical strength, ease of processing and cost, the same underlying resin chemistry shows up across water storage tanks, roofing sheets, door skins, industrial mouldings, and a range of construction and marine products.",
          "What determines whether GP resin is the right fit for a given application is a combination of factors: the mechanical load the finished part will carry, the chemical and weather exposure it will face in service, the manufacturing process used to produce it, and the cost sensitivity of the end product. GP resin tends to perform well wherever these requirements sit in the moderate range, and less well where any one of them becomes extreme.",
          "This article walks through the main categories where GP resin is used in practice — FRP moulding, construction and building products, and marine and industrial fabrication — and closes with guidance on how to narrow down the right application-specific grade rather than treating \"GP resin\" as a single interchangeable product.",
        ],
      },
      {
        heading: "FRP Manufacturing and Moulding",
        subsections: [
          { heading: "Open-Mould Components", body: "Hand lay-up and spray-up, the most widely used FRP moulding methods, rely on GP resin's workable gel time and viscosity to build up a laminate over an open mould. This covers everything from custom enclosures and covers to one-off or low-volume structural components." },
          { heading: "Moulded Enclosures and Covers", body: "Equipment housings, machine guards and protective covers are commonly moulded in GP resin laminate, taking advantage of its rigidity, moderate impact resistance and ability to be moulded into complex shapes that would be harder or costlier to produce in metal." },
          { heading: "Decorative and Architectural Mouldings", body: "GP resin's compatibility with pigments and its smooth cured finish make it a practical choice for decorative panels, signage and architectural trim, where consistent colour and surface quality across a production run matter as much as strength." },
        ],
      },
      {
        heading: "Construction and Building Products",
        subsections: [
          { heading: "Roofing and Roof-Light Sheets", body: "In continuous lamination lines, GP resin is used to produce both structural FRP roofing sheets and translucent roof-light panels, where UV-stabilised formulations help the sheet hold its clarity and colour under long-term outdoor exposure." },
          { heading: "Door Skins", body: "FRP door skins are moulded from GP resin to reproduce fine surface detail — wood-grain textures, panel profiles — while providing the rigidity and impact resistance expected of a door facing." },
          { heading: "Cladding, Formwork and Structural Liners", body: "Beyond roofing and doors, GP resin is used in cladding panels, concrete formwork and structural liners, where its balance of strength, mould detail and cost suits general building applications better than higher-cost speciality resins." },
        ],
      },
      {
        heading: "Marine and Industrial Fabrication",
        body: [
          "In marine work, GP resin is generally reserved for components that are not subject to prolonged water immersion or heavy structural loading — trim pieces, non-structural fittings and similar parts — since sustained contact with water is exactly the condition where GP resin's moderate chemical resistance is most likely to fall short over time.",
          "In industrial fabrication more broadly, GP resin is used for ducting, enclosures, covers and process equipment where the chemical environment is mild and the priority is a durable, corrosion-resistant alternative to metal at a reasonable cost. Where a process involves aggressive chemicals or continuous immersion, fabricators typically step up to an isophthalic or vinyl ester resin instead.",
          "This is the recurring theme across marine and industrial use: GP resin is the practical first choice, and the decision to move to a speciality resin is driven by a specific exposure condition that GP resin isn't formulated to handle indefinitely, rather than a general dissatisfaction with its performance.",
        ],
      },
      {
        heading: "Selecting the Right Application-Specific Grade",
        body: [
          "Because GP resin covers such a wide span of end uses, the practical question for a buyer is rarely \"should I use GP resin\" but \"which GP resin grade suits this specific application and process.\" Two products both labelled general-purpose can have meaningfully different viscosity, gel time and mechanical performance once you check their technical data sheets side by side.",
        ],
        callouts: [
          {
            label: "Best Practice",
            variant: "practice",
            items: [
              "Start from the finished part's exposure and load, not the resin's category label",
              "Confirm viscosity and gel time suit your specific manufacturing process",
              "Check the technical data sheet (TDS) rather than assuming a general figure applies",
              "Move to a speciality resin (isophthalic, vinyl ester, fire-retardant) where exposure genuinely demands it",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "how-to-select-polyester-resin-for-frp-manufacturing",
    title: "How to Select Polyester Resin for FRP Manufacturing",
    description: "Understand the key factors when selecting polyester resin for different FRP manufacturing processes.",
    category: "Buying Guide",
    icon: "checklist",
    readingTime: "7 min read",
    publishDate: "2026-07-18",

    seo: {
      title: "How to Select the Right Polyester Resin for FRP Manufacturing",
      keywords: [
        "polyester resin selection",
        "FRP manufacturing resin",
        "resin viscosity FRP",
        "resin gel time",
        "hand layup resin",
        "spray up resin",
        "pultrusion resin",
        "polyester resin buying guide",
      ],
      ogTitle: "How to Select Polyester Resin for FRP Manufacturing",
      ogDescription: "A practical guide to matching polyester resin viscosity, gel time and type to your FRP manufacturing process — and the selection mistakes that cost fabricators the most.",
    },

    quickFacts: {
      "Key Selection Factors": "Process, viscosity, gel time, mechanical needs, chemical exposure",
      "Most Common Mistake": "Choosing resin on price alone, without checking process fit",
      "Recommended First Step": "Confirm your process and part size before comparing grades",
      "Always Check": "The specific grade's technical data sheet (TDS), not general figures",
    },

    processTable: {
      headers: ["Process", "Typical Viscosity Need", "Typical Gel Time Need", "Notes"],
      rows: [
        ["Hand Lay-Up", "Medium — enough body to stay in place on a vertical mould", "Longer — allows time to roll out fibre and remove air manually", "Most forgiving process for beginners; thixotropic grades help on vertical surfaces"],
        ["Spray-Up", "Medium-low — must atomise cleanly through spray equipment", "Moderate — matched to the pace of the spray line", "Viscosity must suit the specific spray equipment being used"],
        ["Compression Moulding (SMC/DMC)", "Formulated as a moulding compound, not a liquid viscosity spec", "Fast — heat-activated cure inside a closed, heated mould", "Requires resin specifically formulated for the SMC/DMC process"],
        ["Pultrusion", "Low — must wet out fibre quickly as it's pulled through a die", "Fast and tightly controlled — matched to line speed", "Not all grades are suitable; needs a resin engineered for continuous, fast cure"],
        ["Continuous Lamination", "Low to medium — must impregnate reinforcement evenly at speed", "Matched to line speed and curing oven length", "Used for flat and corrugated sheet products such as roofing sheets"],
        ["Vacuum Bagging / Infusion", "Low — must flow through reinforcement under vacuum without voids", "Longer — infusion can take time across large or complex parts", "Air removal and full wet-out matter more here than in hand lay-up"],
      ],
      note: "These are general tendencies, not fixed values — always confirm viscosity and gel time against the specific product's technical data sheet (TDS) before committing to a process.",
    },

    relatedSlugs: [
      "what-is-gp-polyester-resin",
    ],
    recommendedLinks: [
      { href: "/products/gp-clear-resin/", label: "View GP Clear Resin", description: "Review the published TDS before selecting a grade for the process." },
      { href: "/products/lamination-resin/", label: "View Lamination Resin", description: "Review the published lamination-focused grade and TDS for door, plywood or FRP bonding work." },
      { href: "/applications/resin-for-hand-lay-up-process/", label: "Hand lay-up guide", description: "Review a common GP Clear Resin process use case." },
    ],

    faqs: [
      {
        q: "What's the single most important factor in choosing a polyester resin?",
        a: "Your manufacturing process. Viscosity, gel time and cure behaviour all need to match how the resin will actually be applied — hand lay-up, spray-up, compression moulding, pultrusion or infusion each place different demands on the resin, and a grade that performs well in one process can perform poorly in another.",
      },
      {
        q: "Can I use the same resin for hand lay-up and spray-up?",
        a: "Not usually without checking first. Spray-up requires a resin viscosity that atomises cleanly through spray equipment, while hand lay-up generally works better with a slightly higher-viscosity or thixotropic resin that stays in place while being rolled out manually. Some grades are formulated to suit both; many are not.",
      },
      {
        q: "How do I know if a resin's gel time is right for my part?",
        a: "Match gel time to how long you need working time for. Larger or more complex parts made by hand generally need a longer gel time so you can complete lay-up before the resin starts curing. Faster-cycle or line-based processes usually need a shorter, more tightly controlled gel time to keep production moving.",
      },
      {
        q: "Is a higher-priced resin always the better choice?",
        a: "No — and price alone is one of the most common ways fabricators pick the wrong resin. A more expensive speciality resin (isophthalic, vinyl ester, fire-retardant) is only the right choice if your application actually needs its specific property. For general-purpose parts, a well-matched GP resin is usually the more practical and economical choice.",
      },
      {
        q: "Should I trial a resin before placing a bulk order?",
        a: "Yes. Running a small trial batch under your actual production conditions — checking gel time, viscosity, wet-out and finish on your own equipment — catches mismatches before they become an expensive bulk-order problem.",
      },
      {
        q: "Do all polyester resins use the same catalyst?",
        a: "Most unsaturated polyester resins cure with a peroxide catalyst, commonly MEKP, but the correct type and dosage vary by resin grade, ambient temperature and desired gel time. Always follow the specific product's technical data sheet rather than assuming a standard dosage across different resins.",
      },
      {
        q: "What happens if I choose a resin with the wrong viscosity for my process?",
        a: "Too low a viscosity for hand lay-up on a vertical surface can cause resin to run or drain before curing, leaving thin, resin-starved areas. Too high a viscosity for spray-up or pultrusion can cause poor atomisation or incomplete fibre wet-out, leading to voids and weaker laminate.",
      },
    ],

    sections: [
      {
        heading: "Understanding FRP Manufacturing Processes",
        body: [
          "Polyester resin selection starts with the manufacturing process, not the finished part. The same general-purpose resin chemistry can be formulated in different ways — different viscosity, different gel time, different thixotropy — to suit very different production methods, and using the wrong formulation for your process is one of the most common causes of poor results in FRP manufacturing.",
          "FRP fabrication covers a range of processes, each placing different demands on the resin. Hand lay-up and spray-up are open-mould processes suited to lower-volume or larger, more custom parts. Compression moulding (using SMC or DMC moulding compounds) and pultrusion are closed or continuous processes suited to higher-volume, more consistent production. Continuous lamination produces flat or corrugated sheet products, while vacuum bagging and resin infusion are used where a higher fibre-to-resin ratio and fewer voids are required.",
          "Before comparing resin grades, confirm which process — or processes — the resin needs to work with. A resin that performs excellently in hand lay-up may be entirely unsuitable for pultrusion, and vice versa.",
        ],
        visuals: [
          {
            type: "icongrid",
            label: "Diagram: FRP manufacturing processes covered in this guide",
            caption: "Common FRP manufacturing processes",
            items: [
              { icon: "hand-layup", label: "Hand Lay-Up" },
              { icon: "spray-up", label: "Spray-Up" },
              { icon: "compression", label: "Compression Moulding" },
              { icon: "pultrusion", label: "Pultrusion" },
              { icon: "lamination", label: "Continuous Lamination" },
              { icon: "vacuum", label: "Vacuum Bagging" },
            ],
          },
        ],
      },
      {
        heading: "Resin Viscosity and Wet-Out Considerations",
        body: [
          "Viscosity — how thick or thin the resin is in its liquid state — determines how well it wets out (fully saturates and de-airs) the reinforcement, and how well it behaves during application. Getting viscosity wrong is one of the fastest ways to end up with a weak, void-filled laminate, regardless of how good the resin's cured properties are on paper.",
          "For hand lay-up, especially on vertical or overhead mould surfaces, resin needs enough body to stay in place while it's rolled and worked into the reinforcement — too thin, and it drains or runs before curing, leaving resin-starved patches. Thixotropic resins, which thicken when left undisturbed but flow more easily when worked with a brush or roller, are commonly used for exactly this reason.",
          "For spray-up, pultrusion and infusion processes, the opposite is usually true: the resin needs to be low-viscosity enough to atomise cleanly through spray equipment, flow quickly through and around fibre as it's pulled through a pultrusion die, or draw through a reinforcement stack under vacuum without leaving dry spots or trapped air.",
          "Because viscosity requirements are process-specific rather than universal, always check the intended process against the resin's stated viscosity range on its technical data sheet, rather than assuming a resin described as \"general purpose\" will suit every application equally well.",
        ],
      },
      {
        heading: "Gel Time and Cure Requirements",
        body: [
          "Gel time is the working window between when a resin is catalysed and when it begins to set — the point past which it can no longer be worked, rolled out or repositioned. Choosing the right gel time is a balance between giving yourself enough time to do the job properly and not holding up production.",
          "Larger components, more complex mould geometry, and manual processes like hand lay-up generally call for a longer gel time, giving the fabricator time to fully wet out reinforcement, remove trapped air and work the resin into detail before it begins curing. Rushing a part that needed a longer gel time is a common cause of poor fibre wet-out and visible surface defects.",
          "Faster-cycle and line-based processes — spray-up on larger production runs, continuous lamination, pultrusion and compression moulding — generally need a shorter, more tightly controlled gel time so that cure keeps pace with the production line without becoming the bottleneck. In compression moulding specifically, cure is usually heat-activated inside a closed, heated mould rather than relying on ambient-temperature gel time alone.",
          "Gel time is also sensitive to ambient workshop temperature and catalyst dosage — both of which affect how quickly a given resin actually cures on a given day. Rather than treating a resin's stated gel time as fixed, treat it as a starting reference to be confirmed under your own workshop conditions, and always follow the specific product's technical data sheet for correct catalyst dosage rather than estimating.",
        ],
        callouts: [
          {
            label: "Important Note",
            variant: "warning",
            text: "Catalyst type and dosage vary by resin grade, ambient temperature and desired gel time. Always follow the specific product's technical data sheet (TDS) and safety data sheet (SDS) rather than assuming a standard dosage carries over between different resins.",
          },
        ],
      },
      {
        heading: "Matching Resin Type to Moulding Method",
        body: [
          "The table below summarises how viscosity and gel time needs typically shift across common FRP processes. Treat it as a starting point for narrowing down candidate grades, not as a substitute for checking the specific product's technical data sheet.",
        ],
        table: "processTable",
      },
      {
        heading: "Common Selection Mistakes to Avoid",
        subsections: [
          { heading: "Choosing on Price Alone", body: "The cheapest resin per kilogram isn't necessarily the most economical choice once wastage, rework and inconsistent results from a poorly matched grade are accounted for. Price should be one factor weighed against process fit, not the deciding one." },
          { heading: "Ignoring the Technical Data Sheet", body: "General category descriptions (\"general purpose\", \"fire retardant\") describe a resin's positioning, not its exact viscosity, gel time or cure profile. Always check the specific grade's TDS rather than assuming it matches a similar product you've used before." },
          { heading: "Mismatching Viscosity to Process", body: "Using a resin formulated for hand lay-up in a spray-up or infusion process, or vice versa, is one of the most common and most avoidable causes of poor wet-out, voids and weak laminate." },
          { heading: "Skipping a Trial Batch", body: "Committing to a bulk order before trialling a small batch under real production conditions means any mismatch — in viscosity, gel time or finish — is discovered at full scale rather than caught early." },
          { heading: "Overlooking Chemical or Environmental Exposure", body: "Selecting a standard GP resin for a part that will face sustained water immersion, chemical exposure or harsh UV conditions, without checking whether an isophthalic, vinyl ester or fire-retardant grade is more appropriate, can lead to premature degradation in service." },
          { heading: "Assuming Catalyst Ratios Carry Over", body: "Applying a catalyst dosage that worked for a previous resin to a new grade, without checking its TDS, can produce a gel time that's badly mismatched to the process — either curing too fast to work with, or too slowly to hold a production schedule." },
        ],
        callouts: [
          {
            label: "Best Practice",
            variant: "practice",
            items: [
              "Confirm your process before comparing resin grades on price",
              "Check viscosity and gel time against the specific product's TDS",
              "Trial a small batch under real production conditions first",
              "Match chemical/UV exposure requirements to the grade, not just the application",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "what-is-gel-coat-resin",
    title: "What is Gel Coat Resin?",
    description: "Learn how gel coat resin provides surface finish, protection and durability for composite products.",
    category: "Product Guide",
    icon: "layers",
    readingTime: "5 min read",
    publishDate: "2026-07-18",

    quickFacts: {
      "Resin Type": "Surface-coating unsaturated polyester resin, thickened and pigmentable",
      "Applied": "First, into the open mould — before lamination begins",
      "Not": "A laminating or structural resin — it isn't reinforced with glass fibre",
      "Typical Thickness": "Applied as a thin, even coat — check the product's TDS for the recommended range",
    },

    relatedSlugs: [
      "what-is-gp-polyester-resin",
      "how-to-select-polyester-resin-for-frp-manufacturing",
      "applications-of-gelcoat-resin-in-frp-manufacturing",
      "how-to-choose-gelcoat-resin-for-frp-products",
      "gelcoat-resin-problems-peeling-cracking-tackiness",
    ],

    faqs: [
      {
        q: "Is gel coat resin the same as GP polyester resin?",
        a: "No. Both are unsaturated polyester resins, but gel coat is formulated specifically for surface finish and protection — thickened so it doesn't run on a mould surface, and typically pigmented — while GP resin is a laminating resin designed to be reinforced with glass fibre to build structural thickness.",
      },
      {
        q: "Can gel coat be used as a laminating resin?",
        a: "No. Gel coat is not designed to be reinforced with glass fibre or to build structural thickness. Using it as a laminating resin generally produces a brittle, poorly performing part — it should only be used as the outer surface layer, with a proper laminating resin behind it.",
      },
      {
        q: "Why is gel coat applied first, before lamination?",
        a: "Gel coat is sprayed or brushed directly onto the mould surface before any reinforcement is placed. Because the mould surface becomes the outer face of the finished part, gel coat ends up as the visible, weather-facing layer once the part is demoulded, with the structural laminate built up behind it.",
      },
      {
        q: "Does gel coat need to be reinforced with glass fibre?",
        a: "No, and it shouldn't be. Gel coat is a surface-finish resin, not a structural one. Structural strength comes entirely from the laminating resin and reinforcement applied over it, not from the gel coat layer itself.",
      },
      {
        q: "What causes gel coat to crack or craze over time?",
        a: "Common causes include applying it too thin or too thick, poor cure due to incorrect catalyst dosage, mechanical flexing of an under-reinforced part behind it, or prolonged weathering beyond what the specific formulation is rated for. Always check the product's TDS for recommended thickness and cure conditions.",
      },
      {
        q: "Can gel coat be pigmented in any colour?",
        a: "Yes, gel coat is commonly supplied pre-pigmented or as a clear base that can be tinted, which is one of its main advantages over laminating resin for parts where colour and surface appearance matter.",
      },
      {
        q: "How long does gel coat protect a composite part?",
        a: "Service life depends heavily on the specific formulation, application thickness and environmental exposure, so there's no single figure that applies across products — check the manufacturer's technical data sheet for the expected performance of the specific grade being used.",
      },
    ],

    sections: [
      {
        heading: "What Is Gel Coat Resin?",
        body: [
          "Gel coat resin is a specialised unsaturated polyester resin formulated to serve as the outer surface layer of a fibre-reinforced plastic (FRP) part, rather than as the structural laminate itself. It is typically thickened to a paste-like consistency so it can be applied to a vertical or overhead mould surface without running, and it is commonly supplied pre-pigmented to give the finished part its colour.",
          "Chemically, gel coat shares the same unsaturated polyester resin family as general purpose (GP) laminating resin — it cures through the same peroxide-catalysed, free-radical crosslinking mechanism. What sets it apart is its formulation: additives that control flow and sag resistance, UV stabilisers and pigments for surface appearance and weatherability, and a resin backbone chosen to give good surface hardness and gloss rather than maximum mechanical strength.",
          "Because gel coat is applied directly against the mould surface, it becomes the visible, weather-facing skin of the finished part once demoulded. It carries no reinforcement of its own — the structural strength of the part comes entirely from the laminating resin and glass fibre applied behind it in the following steps of the moulding process.",
        ],
      },
      {
        heading: "How Gel Coat Differs From Laminating Resin",
        body: [
          "The clearest way to understand gel coat is by contrast with the laminating resin — typically GP, isophthalic or vinyl ester — that it sits in front of. Laminating resin is designed to be reinforced with glass fibre, building up thickness and structural strength across multiple layers. Gel coat is never reinforced; it is applied as a thin, unreinforced surface layer whose job is finish and protection, not load-bearing strength.",
          "Viscosity and application method also differ. Gel coat is thickened and typically applied by spray gun or brush directly onto a clean mould surface, while laminating resin is formulated to wet out and saturate reinforcement fabric once it's laid into the mould. Using gel coat as though it were a laminating resin, or vice versa, generally produces poor results — a laminating resin applied as a surface coat tends to sag or run, while gel coat used to build structural thickness is brittle and prone to cracking under load.",
          "Cure behaviour is matched between the two so that gel coat partially cures (reaching a tacky, gelled state) before lamination begins, allowing the reinforced laminate to bond to it chemically as both layers finish curing together, rather than gel coat curing fully in isolation before lamination starts.",
        ],
      },
      {
        heading: "Surface Finish and Protective Properties",
        body: [
          "Gel coat's primary function is to give an FRP part a smooth, glossy, consistently coloured surface without any visible fibre pattern or weave print-through from the reinforcement behind it. This is why gel coat is used on any FRP part where appearance matters — from decorative panels to product housings and marine components.",
          "Beyond appearance, gel coat also serves a genuine protective role. It acts as a barrier between the environment and the structural laminate underneath, helping to resist UV degradation, moisture ingress and general surface wear that would otherwise affect the laminating resin directly. UV-stabilised gel coat formulations are specifically intended for parts that will see prolonged outdoor exposure.",
          "The quality of this protection depends on applying the gel coat at a consistent, correct thickness. Too thin, and it may not fully protect the laminate or could show fibre print-through; too thick, and it becomes more prone to cracking or crazing, particularly on parts that flex in service. The correct thickness range should always be confirmed against the specific product's technical data sheet rather than judged by eye.",
        ],
      },
      {
        heading: "Application Methods and Best Practices",
        subsections: [
          { heading: "Mould Preparation", body: "A clean, correctly waxed or release-agent-treated mould surface is essential before gel coat application — any contamination or inconsistent release treatment can telegraph through to the finished part's surface." },
          { heading: "Spray or Brush Application", body: "Gel coat is most commonly applied by spray gun for consistent thickness across larger areas, though brush application is used for smaller parts or repairs. Either method requires an even, controlled coat rather than heavy, uneven pooling." },
          { heading: "Correct Thickness", body: "Applying within the manufacturer's recommended thickness range is one of the most important factors in gel coat performance — always check the product's technical data sheet rather than estimating by appearance." },
          { heading: "Timing Before Lamination", body: "Gel coat needs to reach the correct tacky, gelled state — not fully cured, and not still wet — before lamination begins, so that the laminate bonds properly as both layers finish curing together." },
          { heading: "Catalyst Dosage and Ambient Conditions", body: "As with any polyester resin, catalyst dosage and workshop temperature affect gel coat's cure time. Follow the specific product's TDS for correct catalyst percentage rather than carrying over a dosage used for a different resin." },
        ],
        callouts: [
          {
            label: "Best Practice",
            variant: "practice",
            items: [
              "Prepare and release-treat the mould surface thoroughly before spraying",
              "Apply gel coat within the manufacturer's recommended thickness range",
              "Allow gel coat to reach the correct tacky stage before starting lamination",
              "Follow the product's TDS for catalyst dosage and cure timing",
            ],
          },
        ],
      },
      {
        heading: "Common Uses in Composite Manufacturing",
        body: [
          "Gel coat is used wherever an FRP part needs a finished, presentable surface rather than a raw laminate face — which in practice covers most commercially produced composite products. Decorative and architectural panels rely on gel coat for consistent colour and gloss; product housings and enclosures use it to hide the reinforcement pattern and give a professional finish; and marine components use UV-stabilised gel coat as a first line of defence against sun and water exposure.",
          "In tank and roofing sheet manufacturing, gel coat or gel-coat-like surface layers are sometimes used on the exposed face of a component to improve weatherability and appearance, although many industrial tanks are left with a laminate finish where cosmetic appearance is a lower priority than cost and function.",
          "Across all of these uses, the same principle holds: gel coat is chosen when the visible surface of the part needs to look good and hold up to the environment over time, while the actual strength of the part continues to come from the laminating resin and reinforcement applied behind it.",
        ],
      },
    ],
  },
  {
    slug: "fire-retardant-polyester-resin-applications-and-benefits",
    title: "Fire Retardant Polyester Resin: Applications & Benefits",
    description: "Understand where fire retardant polyester resin is used and why it is important for specialised industrial applications.",
    category: "Application Guide",
    icon: "shield",
    readingTime: "6 min read",
    publishDate: "2026-07-18",

    quickFacts: {
      "Resin Type": "Unsaturated polyester resin modified for reduced flammability",
      "Two Main Routes": "Halogenated additives or halogen-free (phosphorus-based) systems",
      "Typical Buyers": "Rail, public transport, electrical, and building-code-regulated fabricators",
      "Always Confirm": "The specific fire rating/standard the application requires before ordering",
    },

    relatedSlugs: [
      "what-is-gp-polyester-resin",
      "how-to-select-polyester-resin-for-frp-manufacturing",
    ],

    faqs: [
      {
        q: "Is fire retardant resin completely non-flammable?",
        a: "No. Fire retardant resin is formulated to resist ignition, slow flame spread and reduce smoke development compared with standard GP resin, but it is not non-combustible. Its actual performance against a given fire standard should always be confirmed through the specific product's test certification.",
      },
      {
        q: "Do I need fire retardant resin for every FRP project?",
        a: "No. Most general FRP applications — tanks, general mouldings, non-regulated construction products — use standard GP resin. Fire retardant resin is needed where a specific building code, transport regulation or industry standard mandates a fire, smoke or toxicity rating for the finished component.",
      },
      {
        q: "What's the difference between halogenated and halogen-free fire retardant resin?",
        a: "Halogenated systems use halogen-containing compounds (commonly bromine or chlorine based) to interrupt combustion chemically, and have historically been a cost-effective, well-established route. Halogen-free systems typically use phosphorus-based or mineral additives instead, and are increasingly specified where low smoke and toxic gas emission during a fire are a priority, such as rail and enclosed public transport.",
      },
      {
        q: "Does fire retardant resin cost more than GP resin?",
        a: "Generally yes. The additives and formulation changes needed to achieve fire retardant performance typically add cost compared with standard GP resin, which is one reason it's reserved for applications that specifically require it rather than used as a general-purpose default.",
      },
      {
        q: "How is a resin's fire performance actually rated?",
        a: "Fire performance is assessed against defined test standards — which vary by region and industry — measuring properties like flame spread, smoke density and, in some standards, toxic gas emission. The applicable standard depends on the end use and the market the product is sold into, so this should be confirmed with the standard relevant to your industry rather than assumed.",
      },
      {
        q: "Can fire retardant resin be processed the same way as GP resin?",
        a: "In most cases fire retardant resin can be processed with similar hand lay-up, spray-up or lamination techniques as GP resin, but viscosity, gel time and cure behaviour can differ due to the added fire-retardant chemistry, so the specific product's technical data sheet should be checked before assuming a direct substitution.",
      },
      {
        q: "Does fire retardant resin affect the mechanical properties of the finished part?",
        a: "Fire retardant additives can influence mechanical performance to some degree depending on the formulation and loading level, which is why fire retardant grades are engineered and tested as complete systems rather than being GP resin with an additive simply mixed in on-site.",
      },
    ],

    sections: [
      {
        heading: "What Makes a Resin Fire Retardant?",
        body: [
          "A standard unsaturated polyester resin, like GP resin, is combustible once ignited and will support flame spread in the way most organic materials do. Fire retardant polyester resin is deliberately formulated to resist ignition, slow the spread of flame, and in many formulations reduce smoke development, compared with an unmodified resin.",
          "This is achieved by modifying the resin's chemistry rather than simply spraying a coating onto a finished part. Fire retardant performance can come from the resin's own backbone chemistry (using inherently less flammable building blocks) or from additives incorporated during manufacture that interfere with the combustion process — either by releasing flame-inhibiting compounds when heated, by promoting char formation that insulates the material, or by diluting the fuel available to the flame with inert gases.",
          "It's important to understand that fire retardant resin reduces flammability and slows fire behaviour — it does not make a composite part fireproof. Its actual performance is always defined against a specific test standard, and that rating is what a buyer should look for rather than the general label \"fire retardant\" on its own.",
        ],
      },
      {
        heading: "Flammability Ratings and Standards",
        body: [
          "Fire performance for composite materials is assessed against defined test standards that measure specific behaviours — how easily the material ignites, how quickly flame spreads across its surface, how much smoke is produced, and in some standards, the toxicity of gases released while burning.",
          "Which standard applies depends heavily on the industry and region the finished product is sold into. Rail and public transport applications, building and construction products, and electrical equipment enclosures are each typically governed by different standards with different pass/fail criteria, and a resin that meets one standard's requirements does not automatically meet another's.",
          "Because of this, the right approach for a buyer is to identify the specific standard their application must comply with first, then confirm with the resin supplier that the product has been tested and rated against that standard — rather than relying on a general \"fire retardant\" description as proof of compliance.",
        ],
        callouts: [
          {
            label: "Important Note",
            variant: "warning",
            text: "\"Fire retardant\" describes a category of resin, not a guarantee of meeting a specific fire code. Always confirm test certification against the exact standard your application requires before specifying a grade.",
          },
        ],
      },
      {
        heading: "Industries That Require Fire Retardant Resin",
        subsections: [
          { heading: "Rail and Public Transport", body: "Interior and structural composite components in trains, buses and other public transport are typically subject to strict fire, smoke and toxicity regulations, given the enclosed environment and passenger safety considerations." },
          { heading: "Electrical Enclosures and Switchgear", body: "FRP enclosures housing electrical equipment often require fire retardant properties to limit fire risk in the event of an electrical fault, and to meet the safety standards applicable to electrical installations." },
          { heading: "Building and Construction Products", body: "Certain construction applications — wall linings, panels and cladding in buildings subject to fire-safety codes — call for fire retardant FRP products to meet local building regulations." },
          { heading: "Industrial Ducting and Process Equipment", body: "Ducting and enclosures used in industrial environments with elevated fire risk, such as areas handling flammable materials, often specify fire retardant resin as a risk-mitigation measure." },
          { heading: "Marine Applications", body: "Certain marine and offshore components are subject to fire safety standards specific to that industry, requiring fire retardant composite materials in defined areas of a vessel or structure." },
        ],
      },
      {
        heading: "Halogenated vs Halogen-Free Formulations",
        body: [
          "Fire retardant resins are broadly formulated using one of two approaches. Halogenated systems incorporate halogen-containing compounds — commonly bromine or chlorine based — that interfere chemically with the combustion process once heated. These systems have a long track record and are often a cost-effective way to achieve a required fire rating.",
          "Halogen-free systems instead rely on alternative chemistries, commonly phosphorus-based compounds or mineral fillers, to achieve similar fire performance without halogen content. These formulations are increasingly specified where low smoke density and reduced toxic gas emission during combustion are priorities — enclosed public transport being a common example — since some halogenated combustion by-products are considered more hazardous in confined spaces.",
          "Neither approach is universally \"better\" — the right choice depends on which specific standard the application must meet, and whether that standard places particular weight on smoke and toxicity performance in addition to basic flame spread. This is a decision best made against the applicable standard and the resin's tested certification, not on formulation type alone.",
        ],
      },
      {
        heading: "Key Benefits for Industrial Buyers",
        body: [
          "For buyers whose application is genuinely regulated by a fire, smoke or toxicity standard, fire retardant resin provides a way to meet that requirement while retaining most of the practical advantages of FRP construction — light weight, corrosion resistance, and design flexibility — that would otherwise make the material unsuitable for a regulated environment.",
          "Beyond regulatory compliance, fire retardant resin can also serve as a risk-reduction measure in applications that aren't formally regulated but carry an elevated fire risk in practice, such as enclosures near flammable processes or equipment.",
        ],
        callouts: [
          {
            label: "Best Practice",
            variant: "practice",
            items: [
              "Identify the exact fire/smoke/toxicity standard your application must meet before selecting a grade",
              "Request test certification against that specific standard, not a general \"fire retardant\" claim",
              "Confirm viscosity, gel time and mechanical properties against the product's TDS before assuming it processes like standard GP resin",
              "Weigh halogenated vs halogen-free formulations against your standard's smoke/toxicity requirements, not cost alone",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "how-polyester-resin-is-used-in-water-tank-manufacturing",
    title: "How Polyester Resin is Used in Water Tank Manufacturing",
    description: "Discover why polyester resin is widely used in manufacturing durable FRP water storage tanks.",
    category: "Application Guide",
    icon: "tank",
    readingTime: "6 min read",
    publishDate: "2026-07-18",

    quickFacts: {
      "Common Resin Grades": "GP resin for general use; isophthalic for higher water/chemical resistance",
      "Reinforcement": "Glass fibre — typically chopped strand mat and woven roving",
      "Key Property": "Corrosion resistance — FRP tanks don't rust the way metal tanks do",
      "Always Check": "Potable-water suitability against the specific resin/product's certification, if relevant",
    },

    relatedSlugs: [
      "what-is-gp-polyester-resin",
      "how-to-select-polyester-resin-for-frp-manufacturing",
      "how-to-store-unsaturated-polyester-resin",
    ],
    recommendedLinks: [
      { href: "/products/gp-clear-resin/", label: "View GP Clear Resin", description: "Check the published gel time and TDS for the specific GP grade." },
      { href: "/products/lamination-resin/", label: "View Lamination Resin", description: "Compare the published 5-minute gel time with the applicable product TDS." },
      { href: "/resources/gp-resin-viscosity-explained/", label: "Read GP Resin viscosity guidance", description: "Review viscosity alongside gel time and process fit." },
    ],

    faqs: [
      {
        q: "Why is FRP preferred over metal for water storage tanks?",
        a: "FRP tanks don't rust or corrode the way steel tanks can, which removes a major long-term maintenance and failure risk in water storage. They're also lighter than equivalent metal tanks, which can simplify transport and installation.",
      },
      {
        q: "Does GP resin work for all water tank applications?",
        a: "GP resin is used for general water storage tanks, but applications with more demanding water quality requirements or chemical exposure often use isophthalic resin instead, for its improved water and chemical resistance. The right choice depends on the specific application and should be confirmed against the product's technical data sheet.",
      },
      {
        q: "Is polyester resin safe for storing drinking water?",
        a: "This depends entirely on the specific resin product and its certification — not all polyester resins are certified for potable water contact. If a tank will store drinking water, confirm the specific resin and any internal lining meet the relevant food/potable-water-contact standards before use.",
      },
      {
        q: "How is an FRP water tank actually built?",
        a: "Typically through hand lay-up or filament winding, where catalysed resin and glass fibre reinforcement are built up in layers over a mould to the required thickness, followed by curing and, in some designs, an internal or external protective layer.",
      },
      {
        q: "How long do FRP water tanks typically last?",
        a: "Service life depends on the resin grade, reinforcement, wall thickness, water quality and environmental exposure, so there's no single figure that applies to every tank — a properly designed and manufactured FRP tank is intended for long-term structural service, but the specific expected life should be confirmed with the manufacturer.",
      },
      {
        q: "Do FRP tanks need regular maintenance?",
        a: "Yes, though generally less than metal tanks. Periodic visual inspection for surface damage, cracking or leaks, along with routine cleaning, is the typical maintenance requirement — significant structural repair is uncommon if the tank was correctly designed and manufactured.",
      },
      {
        q: "Can a damaged FRP tank be repaired?",
        a: "In many cases, yes — surface damage or minor cracks can often be repaired using compatible resin and reinforcement patches. The appropriate repair method depends on the extent and location of the damage, and significant structural damage may require professional assessment.",
      },
    ],

    sections: [
      {
        heading: "Why FRP Is Used for Water Storage Tanks",
        body: [
          "Fibre-reinforced plastic (FRP) has become one of the most widely used materials for water storage tanks, largely because it solves the biggest long-term problem with metal tanks: corrosion. A properly manufactured FRP tank doesn't rust, and it doesn't rely on a protective coating that can wear through and expose bare metal to water over years of service.",
          "Beyond corrosion resistance, FRP tanks are considerably lighter than equivalent-capacity steel or concrete tanks, which simplifies transport, handling and installation, particularly for tanks installed on rooftops or in locations with limited access. FRP also moulds into smooth, seamless shapes, reducing the number of joints and seams that can become future leak points.",
          "Cost is another factor. Polyester resin systems, particularly GP resin for general applications, are relatively economical compared with some alternative construction materials, which keeps FRP tanks competitive for large-volume water storage where material cost matters at scale.",
        ],
      },
      {
        heading: "Resin Properties That Matter for Tank Manufacturing",
        body: [
          "Tank manufacturing places a specific set of demands on resin that differ somewhat from smaller moulded parts. Because tanks are large, resin volume and viscosity behaviour over a big surface area matter — resin needs to wet out reinforcement evenly across large panels without excessive drainage or pooling.",
          "Mechanical strength and dimensional stability are critical, since a tank must hold its shape and resist the hydrostatic pressure of the stored liquid without deforming or cracking. Chemical resistance also matters more here than in many other FRP applications, because the resin is in constant, sustained contact with the stored liquid rather than brief or occasional exposure.",
          "For general water storage, GP resin's moderate chemical resistance and good mechanical properties are usually sufficient. Where water quality requirements are stricter, or where the tank will store anything beyond plain water, isophthalic resin's improved water and chemical resistance is often the more appropriate choice — this decision should be confirmed against the specific application's requirements rather than assumed.",
        ],
      },
      {
        heading: "Manufacturing Process Overview",
        visuals: [
          {
            type: "steps",
            caption: "Typical FRP water tank manufacturing sequence",
            items: [
              { label: "Mould Preparation" },
              { label: "Resin + Glass Fibre Lay-Up" },
              { label: "Layer Build-Up to Wall Thickness" },
              { label: "Cure" },
              { label: "Inspection & Finishing" },
            ],
          },
        ],
        subsections: [
          { heading: "Mould Preparation", body: "Tank moulds are prepared and release-treated to ensure the finished shell separates cleanly once cured, and to give the interior or exterior surface the intended finish." },
          { heading: "Resin and Reinforcement Lay-Up", body: "Catalysed resin and glass fibre reinforcement — typically chopped strand mat and woven roving for added strength — are applied in successive layers, either by hand lay-up for smaller or custom tanks, or by filament winding for larger cylindrical tanks, building up to the design wall thickness." },
          { heading: "Curing", body: "Once laid up, the laminate is left to cure at ambient or controlled temperature, developing the mechanical strength and rigidity needed to hold the tank's shape under load." },
          { heading: "Inspection and Finishing", body: "Finished tanks are inspected for surface defects, correct wall thickness and structural integrity before fittings, outlets and any protective coatings are added." },
        ],
      },
      {
        heading: "Durability and Chemical Resistance",
        body: [
          "One of the main reasons FRP tanks are chosen for water storage is their long-term durability against the specific failure mode that affects metal tanks most: corrosion. Because the resin and glass fibre laminate doesn't rust, an FRP tank's structural integrity isn't threatened by the slow degradation that eventually affects unprotected or poorly coated steel.",
          "Chemical resistance in an FRP tank comes primarily from the resin, since the resin forms the barrier between the stored liquid and the glass fibre reinforcement (glass fibre itself can be vulnerable to certain chemical attack if directly exposed). This is why resin selection matters so much for tank applications — a resin with insufficient chemical resistance for the stored contents can eventually allow degradation to reach the reinforcement, weakening the laminate over time.",
          "UV exposure is a separate durability consideration for tanks installed outdoors or on rooftops. UV-stabilised gel coat or resin formulations help protect the tank's exterior surface from long-term sun exposure, which can otherwise cause surface degradation over years of service.",
        ],
      },
      {
        heading: "Maintenance and Service Life Considerations",
        body: [
          "FRP tanks generally require less maintenance than metal alternatives, but they are not maintenance-free. Periodic visual inspection for surface cracking, discolouration, or signs of leakage helps catch minor issues before they become significant, and routine cleaning helps maintain water quality and surface condition.",
          "Service life depends on a combination of factors — the resin grade used, wall thickness, reinforcement quality, manufacturing process control, water quality and environmental exposure — so there's no universal figure that applies across all FRP tanks. A tank correctly designed and manufactured for its intended use is built for long-term structural service, but buyers should confirm expected service life and any warranty terms directly with the manufacturer.",
        ],
        callouts: [
          {
            label: "Best Practice",
            variant: "practice",
            items: [
              "Match resin chemical resistance to what the tank will actually store, not just \"water\" in general",
              "Confirm potable-water suitability directly if the tank will hold drinking water",
              "Inspect periodically for surface cracking, discolouration or leakage",
              "Confirm expected service life and wall thickness with the manufacturer rather than assuming a standard figure",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "polyester-resin-for-roofing-sheets",
    title: "Polyester Resin for Roofing Sheets",
    description: "Learn how polyester resin improves strength, weather resistance and performance in FRP roofing sheets.",
    category: "Application Guide",
    icon: "roof",
    readingTime: "5 min read",
    publishDate: "2026-07-18",

    quickFacts: {
      "Typical Process": "Continuous lamination — resin-impregnated reinforcement cured in-line",
      "Two Broad Products": "Opaque structural sheets and translucent roof-light sheets",
      "Key Additive": "UV stabilisers, to slow yellowing and clarity loss in outdoor exposure",
      "Reinforcement": "Glass fibre mat, giving the sheet its rigidity and load-bearing strength",
    },

    relatedSlugs: [
      "what-is-gp-polyester-resin",
      "how-to-select-polyester-resin-for-frp-manufacturing",
    ],

    faqs: [
      {
        q: "What makes FRP roofing sheets different from plain fibreglass sheeting?",
        a: "In practice they're the same underlying material — FRP (fibreglass-reinforced polyester) roofing sheets are made from polyester resin reinforced with glass fibre. Product ranges vary in thickness, profile, UV stabilisation and whether they're opaque (structural roofing) or translucent (roof-light sheets).",
      },
      {
        q: "Why do some FRP roofing sheets turn yellow or hazy over time?",
        a: "This is typically UV degradation of the resin's surface over years of sun exposure. UV-stabilised resin formulations slow this process considerably compared with standard resin, which is why roofing-grade resin is chosen specifically for outdoor durability rather than using a general laminating resin.",
      },
      {
        q: "Can the same resin be used for both opaque and translucent roofing sheets?",
        a: "Not usually as-is. Translucent sheets need a resin and process that preserves optical clarity, while opaque structural sheets prioritise mechanical strength and often use pigmented or filled formulations — the two products are typically made with resin grades formulated for their specific requirement.",
      },
      {
        q: "How is resin applied in roofing sheet manufacturing?",
        a: "Most FRP roofing sheets are produced by continuous lamination, where resin-impregnated glass fibre reinforcement passes through a forming and curing line to produce continuous flat or corrugated sheet lengths, rather than being moulded individually.",
      },
      {
        q: "Do FRP roofing sheets need a gel coat surface?",
        a: "Not always — many roofing sheets are used as structural or utility roofing without a gel coat finish, since appearance is a lower priority than weatherability and cost. Where a smoother or more decorative surface is wanted, a gel coat or similar surface layer can be added.",
      },
      {
        q: "What causes an FRP roofing sheet to crack or fail prematurely?",
        a: "Common causes include incorrect resin selection for the UV exposure the sheet will face, insufficient reinforcement for the design load, poor cure during manufacturing, or mechanical damage in service. Confirming the sheet is rated for its intended load and environment helps avoid these issues.",
      },
      {
        q: "Are FRP roofing sheets suitable for industrial buildings?",
        a: "Yes, they're widely used for industrial and agricultural roofing where a lightweight, corrosion-resistant, and in translucent form, light-transmitting roofing material is wanted, often alongside metal roofing sheets in the same structure.",
      },
    ],

    sections: [
      {
        heading: "Role of Resin in FRP Roofing Sheets",
        body: [
          "Polyester resin is the binding matrix that holds glass fibre reinforcement together in an FRP roofing sheet, giving the finished product its rigidity, weather resistance and structural performance. Without the resin, the glass fibre reinforcement would have no shape-holding strength on its own — it's the cured resin matrix that transforms loose fibre into a rigid, load-bearing sheet.",
          "Roofing sheets are somewhat unusual among FRP products because they're typically produced as continuous, flat or corrugated lengths rather than individually moulded parts, which places specific demands on the resin used — it needs to impregnate reinforcement evenly and cure reliably at line speed across a continuous manufacturing process.",
          "Depending on the product, roofing sheet resin is formulated either for structural, opaque roofing (where mechanical strength and weatherability are the priority) or for translucent roof-light sheets (where optical clarity is equally important), and these two use cases often call for different resin formulations.",
        ],
      },
      {
        heading: "Weather and UV Resistance Requirements",
        body: [
          "Roofing sheets face some of the most sustained outdoor exposure of any FRP product — continuous sun, rain, temperature swings and, depending on location, dust and pollution, all acting on the same surface for years at a stretch. This makes weatherability a central requirement for roofing-grade resin, more so than for many indoor or occasional-exposure FRP applications.",
          "UV exposure specifically degrades the resin's surface over time, which can show up as yellowing, surface chalking, or in translucent sheets, a gradual loss of clarity and light transmission. UV-stabilised resin formulations, which incorporate additives that absorb or block UV radiation before it degrades the resin, are used specifically to slow this process and extend the sheet's useful service life.",
          "The degree of UV resistance needed depends on the installation's climate and expected service life, so the specific resin's UV performance should be checked against the product's technical data sheet rather than assumed from a general \"UV-stabilised\" label.",
        ],
      },
      {
        heading: "Strength and Load-Bearing Performance",
        body: [
          "Roofing sheets need to carry their own weight plus environmental loads — wind uplift, and depending on the region, snow or standing water — without deflecting or cracking. This structural performance comes from the combination of resin and glass fibre reinforcement, with the reinforcement type and quantity, sheet thickness and corrugation profile all contributing alongside the resin itself.",
          "Corrugated profiles, which are common in FRP roofing sheets, add mechanical rigidity through their shape in addition to whatever strength the resin-fibre laminate provides, which is why roofing sheets can achieve useful load-bearing performance at a relatively thin, lightweight cross-section compared with a flat panel.",
          "As with other structural FRP applications, the specific load rating of a given roofing sheet product depends on its exact design and construction, and should be confirmed against the manufacturer's specifications for the intended span and loading conditions rather than assumed from a general FRP roofing description.",
        ],
      },
      {
        heading: "Translucent and Roof Light Sheet Applications",
        body: [
          "Translucent FRP roof-light sheets are used to admit natural daylight into a building while maintaining the weather protection of a conventional roof, commonly installed alongside opaque roofing sheets to bring light into warehouses, workshops and agricultural buildings without additional electrical lighting.",
          "Producing a translucent sheet requires a resin formulation and manufacturing process that preserves optical clarity through the reinforcement and cure process, since anything that scatters light — trapped air, uneven resin distribution, or a resin that yellows with age — reduces the sheet's light transmission over time.",
          "UV stabilisation matters even more for translucent sheets than opaque ones, because clarity loss is often more visually noticeable and functionally significant (less daylight admitted) than the surface changes seen on an opaque roofing sheet.",
        ],
      },
      {
        heading: "Manufacturing Considerations for Roofing Grades",
        body: [
          "Because roofing sheets are typically produced on continuous lamination lines, the resin used needs viscosity and gel time characteristics matched to the specific line speed and curing oven length of that manufacturing setup, rather than to a general hand lay-up or spray-up process.",
        ],
        callouts: [
          {
            label: "Best Practice",
            variant: "practice",
            items: [
              "Match resin UV stabilisation to the installation's climate and expected service life",
              "Choose a formulation suited to opaque structural sheets or translucent roof-light sheets specifically",
              "Confirm viscosity and gel time against your continuous lamination line's speed",
              "Check load ratings against the manufacturer's specifications for your span and loading conditions",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "polyester-resin-for-door-skin-manufacturing",
    title: "Polyester Resin for Door Skin Manufacturing",
    description: "Understand the role of polyester resin in producing strong and lightweight FRP door skins.",
    category: "Application Guide",
    icon: "door",
    readingTime: "5 min read",
    publishDate: "2026-07-18",

    quickFacts: {
      "What It Is": "A moulded FRP facing bonded or fitted over a door's core structure",
      "Typical Resin": "GP polyester resin, often paired with gel coat for surface finish",
      "Main Advantage Over Wood": "Doesn't warp, rot or absorb moisture the way timber can",
      "Common Textures": "Wood-grain, panelled and flush profiles moulded directly into the skin",
    },

    relatedSlugs: [
      "what-is-gp-polyester-resin",
      "what-is-gel-coat-resin",
      "how-to-select-polyester-resin-for-frp-manufacturing",
    ],

    faqs: [
      {
        q: "What is an FRP door skin, exactly?",
        a: "It's a moulded fibre-reinforced polyester facing — often two skins, one for each face of the door — that is fitted or bonded over a door's core structure (commonly a timber frame or engineered core) to give the door its outer surface, texture and weather resistance.",
      },
      {
        q: "Why use polyester resin instead of solid timber for door facings?",
        a: "FRP door skins don't warp, rot or absorb moisture the way solid timber can, which makes them particularly useful for exterior doors exposed to weather. They can also reproduce fine surface detail, such as wood-grain texture or panel profiles, in a consistent, repeatable way across production.",
      },
      {
        q: "Does an FRP door skin need a gel coat finish?",
        a: "Many door skins use a gel coat or similar pigmented surface layer to achieve a consistent, paintable or textured finish, since gel coat gives better surface appearance and weatherability than a bare laminate face.",
      },
      {
        q: "How is strength achieved in a thin, moulded door skin?",
        a: "Through the combination of resin and glass fibre reinforcement in the laminate, plus the door's overall construction — the skin is typically bonded to a core material (foam, timber frame, or similar) that contributes additional rigidity and insulation to the finished door.",
      },
      {
        q: "Are FRP door skins suitable for exterior doors?",
        a: "Yes, this is one of their main advantages — properly formulated FRP door skins, especially with a weather-resistant gel coat or paint finish, hold up well to exterior exposure without the moisture-related warping and swelling that can affect timber doors.",
      },
      {
        q: "Can FRP door skins be painted or stained to look like wood?",
        a: "Yes. Many FRP door skins are moulded with a wood-grain texture and can be painted or stained to closely resemble a solid timber door, while retaining the dimensional stability and low maintenance of a composite material.",
      },
      {
        q: "What resin properties matter most for door skin moulding?",
        a: "Good mould-detail reproduction (to capture fine wood-grain or panel texture), a smooth compatible surface for gel coat or paint, and adequate mechanical properties for the rigidity and impact resistance expected of a door facing.",
      },
    ],

    sections: [
      {
        heading: "What Are FRP Door Skins?",
        body: [
          "An FRP door skin is a moulded fibre-reinforced polyester facing that forms the outer surface of a door, typically produced as a pair — one skin for each face — and fitted over a door's core structure during manufacture. The core is commonly a timber frame, engineered wood, or a foam-filled cavity, with the FRP skins bonded to it to complete the finished door.",
          "This construction is common in both residential and light commercial doors, where manufacturers want the appearance and feel of a panelled or textured door face without relying entirely on solid timber, which brings its own moisture and dimensional-stability challenges.",
          "Because the skin is moulded rather than machined from solid material, it can reproduce fine surface detail — wood-grain texture, raised panel profiles, decorative mouldings — consistently across a production run, which is difficult to achieve as economically with solid timber.",
        ],
      },
      {
        heading: "Why Manufacturers Choose Polyester Resin",
        body: [
          "Polyester resin, typically GP resin, is chosen for door skin manufacturing because it offers a workable combination of mould-detail reproduction, mechanical performance and cost. Moulding a door skin generally requires the resin to flow into fine surface detail in the mould — wood-grain texture, panel lines — and hold that detail accurately once cured.",
          "GP resin's compatibility with pigments and gel coat systems also matters here, since door skins are almost always intended to be seen, painted or stained rather than left as a raw laminate surface. A resin that produces a smooth, consistent, paintable surface reduces the finishing work needed after moulding.",
          "Cost is a practical factor too — door manufacturing is often a volume business, and GP resin's economical positioning relative to speciality resins keeps door skin production viable at scale without sacrificing the mechanical and surface qualities the product needs.",
        ],
      },
      {
        heading: "Strength-to-Weight Considerations",
        body: [
          "A door skin needs enough rigidity and impact resistance to function as the outer face of a door — resisting dents, scuffs and general handling — while remaining thin and light enough not to make the finished door unreasonably heavy. This balance comes from the resin-and-glass-fibre laminate itself, plus the core material the skin is bonded to.",
          "GP resin, properly reinforced, provides adequate strength for this role in most residential and light commercial door applications. The skin doesn't need to carry structural load on its own — it works together with the door's core and frame, which is why door skin design is considered as part of the complete door assembly rather than the skin in isolation.",
          "Because door skins are relatively thin compared with other FRP mouldings, achieving consistent thickness and fibre distribution during moulding matters more here than in thicker structural parts, where minor variation has less relative impact on strength.",
        ],
      },
      {
        heading: "Surface Finish and Moulding Detail",
        body: [
          "Surface appearance is arguably the most important requirement for a door skin, since it's the part of the door people actually see and touch. Fine mould detail — wood-grain texture, panel profiles, decorative routing lines — needs to be faithfully reproduced from the mould into the cured resin surface, which depends on resin viscosity and flow behaviour during moulding as much as on the mould's own quality.",
          "Many door skin manufacturers use a gel coat or similar pigmented surface layer over the structural laminate to achieve a consistent, ready-to-finish surface, since gel coat is specifically formulated for surface appearance and can be tinted or left paintable depending on the product line.",
          "Consistency across a production run matters commercially too — buyers expect matching doors within an order to look the same, which places a premium on repeatable resin behaviour and process control during moulding.",
        ],
      },
      {
        heading: "Durability in Interior and Exterior Use",
        body: [
          "One of the clearest advantages FRP door skins offer over solid timber is resistance to moisture-related problems — warping, swelling, cracking and rot — that affect wood exposed to humidity or direct weather. This makes properly formulated FRP door skins particularly suitable for exterior doors, where a timber door's dimensional stability can be a recurring maintenance issue.",
          "For exterior use specifically, the gel coat or paint finish over the resin skin plays an important protective role, shielding the underlying laminate from UV exposure and moisture over years of outdoor service. Interior doors face a less demanding environment but still benefit from the dimensional stability and low-maintenance nature of an FRP skin compared with solid wood.",
          "Overall service life depends on the specific product's construction, resin grade and finish, so buyers should confirm expected durability and any warranty terms with the manufacturer rather than assuming a blanket figure across all FRP door products.",
        ],
      },
    ],
  },
  {
    slug: "understanding-gel-time-in-polyester-resin",
    title: "Understanding Gel Time in Polyester Resin",
    description: "Learn what gel time means, why it matters and how it affects manufacturing efficiency.",
    category: "Technical Data",
    icon: "clock",
    readingTime: "4 min read",
    publishDate: "2026-07-18",
    seo: {
      title: "GP Resin Gel Time Troubleshooting | Polyester Resin Guide",
      keywords: ["GP resin gel time", "GP resin gel time troubleshooting", "polyester resin gel time", "resin curing time", "FRP resin troubleshooting"],
      ogTitle: "GP Resin Gel Time Troubleshooting",
      ogDescription: "Understand gel time, common GP resin troubleshooting checks and when to review the product TDS before changing a process.",
    },

    quickFacts: {
      "Definition": "The working time between catalysing resin and it beginning to set",
      "Main Influences": "Catalyst dosage, ambient temperature, resin formulation and batch/inhibitor level",
      "Too Short": "Risk of resin curing before lay-up/lamination is finished",
      "Too Long": "Slows production and can hold up mould turnaround",
    },

    relatedSlugs: [
      "what-is-gp-polyester-resin",
      "how-to-select-polyester-resin-for-frp-manufacturing",
      "how-to-store-unsaturated-polyester-resin",
    ],

    faqs: [
      {
        q: "What exactly is gel time?",
        a: "Gel time is the period between adding catalyst to a polyester resin and the point at which the resin transitions from a liquid to a soft, gelled state — the point past which it can no longer be worked, rolled out or repositioned.",
      },
      {
        q: "Is gel time the same as full cure time?",
        a: "No. Gel time marks the start of the curing reaction becoming irreversible in a practical sense — the resin has stopped being workable — but full cure, where the laminate reaches its final hardness and mechanical properties, takes considerably longer and continues after the gel point.",
      },
      {
        q: "What's the fastest way to shorten gel time?",
        a: "Increasing catalyst dosage generally shortens gel time, and higher ambient temperature accelerates the reaction as well. However, catalyst dosage should always follow the resin manufacturer's technical data sheet rather than being adjusted freely, since too much catalyst can cause other problems, including excessive heat generation (exotherm) during cure.",
      },
      {
        q: "Why does the same resin gel faster on a hot day than a cool one?",
        a: "The curing reaction is temperature-sensitive — higher ambient and resin temperatures speed up the chemical reaction between catalyst and resin, shortening gel time, while cooler conditions slow it down. This is why gel time figures on a TDS are usually given at a stated reference temperature.",
      },
      {
        q: "What happens if gel time is too short for the job?",
        a: "The resin can begin to set before lay-up, rolling out, or de-airing is complete, leaving poor fibre wet-out, trapped air, and visible surface defects in the finished laminate — essentially, the fabricator runs out of working time before the job is done.",
      },
      {
        q: "What happens if gel time is too long?",
        a: "Production slows down, mould turnaround time increases, and on vertical or overhead surfaces, resin has more opportunity to drain or sag before it sets, potentially leaving resin-starved areas.",
      },
      {
        q: "Can gel time change between batches of the same resin?",
        a: "It can vary slightly batch to batch due to normal manufacturing tolerances, and it's one of the quality parameters checked during production. If gel time seems noticeably different from a previous batch under the same conditions, it's worth checking the batch documentation or contacting the supplier rather than assuming your process has changed.",
      },
    ],

    sections: [
      {
        heading: "What Is Gel Time?",
        body: [
          "Gel time is one of the most practically important properties of a catalysed polyester resin, describing the period between adding catalyst and the point at which the resin transitions from a free-flowing liquid into a soft, gelled solid. Once a resin reaches its gel point, it can no longer be worked, rolled out, repositioned or have air worked out of it — the window for doing anything with the resin has closed.",
          "Gel time is distinct from full cure time. Reaching the gel point means the resin has stopped being liquid and workable, but the chemical crosslinking reaction continues well beyond that point, gradually building the hardness and mechanical properties the fully cured laminate will eventually reach. Gel time is the fabricator's working window; full cure is the material's eventual end state.",
          "In practical terms, gel time is what determines how much time a fabricator has to complete lay-up, wet out reinforcement, remove trapped air, and get a part fully formed before the resin sets — which is why it's one of the first specifications checked when planning any FRP production run.",
        ],
      },
      {
        heading: "Factors That Influence Gel Time",
        body: [
          "Several variables affect how quickly a given resin gels once catalysed, and understanding them helps explain why the same resin can behave differently on different days or in different production settings.",
          "Catalyst dosage is the most direct control a fabricator has — more catalyst generally accelerates the curing reaction and shortens gel time, while less catalyst slows it down. Ambient and resin temperature also has a major effect, since the curing reaction is temperature-sensitive: resin gels faster in a warm workshop than a cool one, all else being equal.",
          "The resin's own formulation matters too — different resin types and grades are engineered with different reactivity and inhibitor levels, which is why a technical data sheet's stated gel time applies specifically to that product, at a stated reference temperature and catalyst dosage, and doesn't necessarily transfer to a different resin.",
          "Batch age and storage conditions can have a smaller but real effect as well — resin nearing the end of its shelf life, or that has been stored at elevated temperature, can behave slightly differently than a fresh batch, which is one reason correct storage matters.",
        ],
      },
      {
        heading: "Gel Time and Production Scheduling",
        body: [
          "Gel time directly shapes how an FRP production line or workshop schedules its work. Longer gel times give more working time per part but slow down how quickly a mould can be reused for the next part, since the fabricator has to wait for the resin to progress through gelling and enough of the cure cycle before demoulding.",
          "Shorter gel times speed up mould turnaround and suit higher-volume or line-based production, but leave less margin for error — if lay-up, spraying or wet-out isn't completed before the resin gels, the part may be left with defects that can't be corrected afterward.",
          "This is why gel time is chosen deliberately to match the process and part size, rather than simply maximised or minimised — hand lay-up on a large, complex part typically needs a longer gel time than a small part on a fast-cycle production line, as covered in more detail in our guide to selecting resin for FRP manufacturing.",
        ],
      },
      {
        heading: "Adjusting Gel Time With Catalyst Ratio",
        body: [
          "Catalyst dosage is the main lever fabricators use to fine-tune gel time within a given resin's usable range. Increasing the catalyst percentage shortens gel time; decreasing it lengthens gel time — within the limits the resin manufacturer specifies as safe and effective for that product.",
          "It's important not to treat catalyst dosage as a free variable to adjust however convenient, though. Catalyst percentage affects not just gel time but also the exotherm (heat generated during cure) and the final mechanical properties of the cured laminate. Too much catalyst can cause excessive exotherm, risking heat damage, cracking or an unsafe reaction, while too little can leave the resin under-cured with poor mechanical properties.",
        ],
        callouts: [
          {
            label: "Important Note",
            variant: "warning",
            text: "Always follow the specific resin's technical data sheet (TDS) and safety data sheet (SDS) for correct catalyst dosage rather than adjusting it by feel — the right dosage range is product-specific and affects cure quality and safety, not just gel time.",
          },
        ],
      },
      {
        heading: "Common Gel Time Issues and Causes",
        subsections: [
          { heading: "Gel Time Shorter Than Expected", body: "Usually caused by higher-than-normal workshop temperature, an over-measured catalyst dose, or resin nearing the end of its shelf life. Checking ambient temperature and catalyst measurement first usually identifies the cause." },
          { heading: "Gel Time Longer Than Expected", body: "Often the result of cooler workshop conditions, under-measured catalyst, or a batch with a naturally longer reference gel time than previously used stock. Confirming batch documentation and catalyst dosage helps rule out common causes." },
          { heading: "Inconsistent Gel Time Across a Batch", body: "Can indicate uneven catalyst mixing, inconsistent resin temperature across a large container, or variation introduced during storage. Thorough mixing and consistent storage conditions reduce this variability." },
          { heading: "Gel Time Drifting Over Time from the Same Stock", body: "May reflect the resin approaching the end of its shelf life or degradation from poor storage conditions (heat, sunlight, an unsealed container), rather than a change in the fabricator's own process." },
        ],
      },
    ],
  },
  {
    slug: "how-to-store-unsaturated-polyester-resin",
    title: "How to Store Unsaturated Polyester Resin",
    description: "Best practices for storage, handling and maintaining resin quality before use.",
    category: "Best Practices",
    icon: "drum",
    readingTime: "4 min read",
    publishDate: "2026-07-18",

    quickFacts: {
      "Store": "Cool, dry, well-ventilated area, away from sunlight and heat sources",
      "Keep": "Drums tightly sealed when not in use",
      "Shelf Life": "Finite — typically months, not years; always confirm against the TDS",
      "Never": "Store resin and peroxide catalyst (e.g. MEKP) together",
    },

    relatedSlugs: [
      "what-is-gp-polyester-resin",
      "understanding-gel-time-in-polyester-resin",
    ],
    recommendedLinks: [
      { href: "/products/gp-clear-resin/", label: "View GP Clear Resin", description: "Check the product's stated shelf life and storage temperature." },
      { href: "/products/lamination-resin/", label: "View Lamination Resin", description: "Check its published 3-month shelf life and 30–35 °C storage temperature." },
      { href: "/resources/why-gp-resin-turns-yellow/", label: "Why GP Resin Turns Yellow", description: "Review expected grade colour and storage-related checks." },
    ],

    faqs: [
      {
        q: "What's the ideal storage temperature for unsaturated polyester resin?",
        a: "General guidance is a cool, stable, moderate temperature away from extremes of heat or cold, but the exact recommended range varies by manufacturer and grade. Always check the specific product's technical data sheet (TDS) rather than assuming a universal figure.",
      },
      {
        q: "How long can unsaturated polyester resin be stored before it goes bad?",
        a: "Shelf life is finite and typically measured in months rather than years, and it depends on the specific product's formulation and inhibitor system as well as storage conditions. Always check the batch manufacturing date and the manufacturer's stated shelf life rather than assuming resin remains usable indefinitely.",
      },
      {
        q: "Why does resin need to be kept away from direct sunlight?",
        a: "UV exposure and heat accelerate the ageing of the resin's inhibitor system, which is what keeps uncatalysed resin stable in storage. Once the inhibitor degrades, resin can become unstable and gel prematurely in the drum, even without catalyst being added.",
      },
      {
        q: "Can resin and catalyst be stored in the same area?",
        a: "They can be stored in the same general area but must never be stored, handled or mixed in a way that risks direct contact between concentrated peroxide catalyst and resin or accelerator outside of controlled, catalysed use — this contact can be hazardous. Follow the product's Safety Data Sheet (SDS) for correct separation and handling.",
      },
      {
        q: "How can I tell if a drum of resin has degraded in storage?",
        a: "Signs can include unusual thickening or partial gelling in the drum, a noticeable change in colour or odour, or a batch that no longer matches its expected gel time when tested. If any of these are observed, the batch should be checked before use rather than assumed to still be good.",
      },
      {
        q: "Does opening a drum of resin affect its shelf life?",
        a: "Yes. Once opened, resin is exposed to air, which allows styrene monomer to evaporate over time, gradually changing the resin's viscosity and reactivity. Drums should be resealed tightly between uses to minimise this effect.",
      },
      {
        q: "What's the best way to manage resin stock over time?",
        a: "Using a first-in, first-out (FIFO) rotation, so older batches are used before newer ones, combined with tracking batch dates against the manufacturer's stated shelf life, helps ensure resin is always used well within its usable window rather than left to age unnoticed.",
      },
    ],

    sections: [
      {
        heading: "Recommended Storage Conditions",
        body: [
          "Unsaturated polyester resin should be stored in a cool, dry, well-ventilated area, kept away from direct sunlight, heat sources and open flames. These conditions protect two things at once: the resin's chemical stability in storage, and worker safety, since resin contains flammable styrene monomer.",
          "Exact recommended temperature ranges vary between manufacturers and resin grades, so rather than targeting a single specific figure, the safer general principle is to keep resin within a moderate, stable temperature range and avoid extremes of heat or cold. The specific product's technical data sheet (TDS) is the authoritative source for its recommended storage temperature.",
          "Ventilation matters both for managing styrene vapour in the storage area and for general workplace safety. Drums should also be stored off the ground where practical and positioned to avoid standing water or moisture ingress around the container's seal.",
        ],
      },
      {
        heading: "Shelf Life and Temperature Sensitivity",
        body: [
          "Unsaturated polyester resin has a finite shelf life, typically measured in months rather than years, determined largely by the inhibitor system that keeps the uncatalysed resin stable and prevents it from gelling on its own. Over time — and faster under poor storage conditions — this inhibitor system gradually depletes, eventually leaving the resin unstable or prone to premature gelling even without catalyst added.",
          "Temperature is the single biggest factor influencing how quickly this happens. Storing resin at elevated temperatures accelerates inhibitor depletion, shortening effective shelf life considerably compared with resin kept in a cool, stable environment. This is why manufacturers state shelf life alongside a reference storage temperature rather than as a fixed, condition-independent number.",
          "Because shelf life is genuinely product-specific, the practical approach is always to check the batch manufacturing date printed on the drum against the shelf life stated on that product's TDS, rather than relying on a general industry rule of thumb.",
        ],
      },
      {
        heading: "Handling Precautions",
        body: [
          "Unsaturated polyester resin contains styrene monomer, which is flammable and gives off vapour that shouldn't be inhaled in poorly ventilated spaces. Appropriate personal protective equipment — typically chemical-resistant gloves, eye protection, and respiratory protection where ventilation is limited — should be used when handling resin and catalyst.",
          "Resin and peroxide catalyst, most commonly MEKP, must always be stored, handled and mixed separately from each other and from accelerators. Direct, uncontrolled contact between concentrated peroxide and accelerator can be hazardous, so mixing should only be carried out following the manufacturer's stated procedure and dosage.",
          "Drums should be kept tightly sealed whenever resin isn't actively being drawn from them. An open or poorly sealed drum allows styrene to evaporate, which changes the resin's viscosity and reactivity over time, and also leaves the resin more exposed to moisture or airborne contaminants.",
        ],
        callouts: [
          {
            label: "Important Note",
            variant: "warning",
            text: "Resin and peroxide catalyst (such as MEKP) must always be stored, handled and mixed separately — direct contact between concentrated peroxide and accelerator can be hazardous. Always read the product's Safety Data Sheet (SDS) before use.",
          },
        ],
      },
      {
        heading: "Signs of Resin Degradation",
        subsections: [
          { heading: "Unusual Thickening or Partial Gelling", body: "Resin that has noticeably thickened in the drum, or shows signs of partial gelling, has likely begun to lose stability — this batch should be checked and generally should not be used without confirming its condition first." },
          { heading: "Colour or Odour Changes", body: "A noticeable shift in colour or a stronger, unusual odour compared with a fresh batch can indicate the resin has degraded in storage, particularly if the drum was exposed to heat or an extended storage period." },
          { heading: "Gel Time No Longer Matching Expectations", body: "If a batch's gel time under your normal catalyst dosage and workshop conditions is noticeably different from what you'd expect, it can point to inhibitor depletion or other degradation, and is worth investigating before committing to a production run." },
          { heading: "Approaching or Past the Stated Shelf Life", body: "Even without visible signs of change, resin at or beyond its manufacturer-stated shelf life should be treated with caution and, where possible, tested before being used in critical production." },
        ],
      },
      {
        heading: "Stock Rotation Best Practices",
        body: [
          "Because resin has a finite shelf life that's shortened by poor storage conditions, disciplined stock rotation is one of the simplest ways to avoid using resin past its useful window. A first-in, first-out (FIFO) approach — using older batches before newer ones — helps ensure resin doesn't sit unused in storage until it ages out.",
          "Tracking batch manufacturing dates against each product's stated shelf life, rather than relying on visual inspection alone, catches ageing stock before it becomes a quality problem in production. This is particularly important for buyers holding larger volumes of resin across multiple batches or suppliers.",
        ],
        callouts: [
          {
            label: "Best Practice",
            variant: "practice",
            items: [
              "Store in a cool, dry, well-ventilated area away from sunlight and heat",
              "Keep drums tightly sealed when not in use",
              "Track batch dates and rotate stock on a first-in, first-out basis",
              "Never store resin and peroxide catalyst together, and always follow the SDS",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "gp-clear-resin-vs-gp-yellow-resin",
    title: "GP Clear Resin vs GP Yellow Resin",
    description: "A practical comparison of GP Clear Resin and GP Yellow Resin for FRP buyers selecting a general-purpose polyester grade.",
    category: "Comparison Guide",
    icon: "checklist",
    readingTime: "4 min read",
    publishDate: "2026-08-06",
    seo: {
      title: "GP Clear Resin vs GP Yellow Resin | Which GP Resin to Choose",
      keywords: ["GP Clear Resin vs GP Yellow Resin", "GP Resin comparison", "GP Yellow Resin", "clear polyester resin", "FRP resin selection"],
      ogTitle: "GP Clear Resin vs GP Yellow Resin",
      ogDescription: "Compare clear and yellow GP polyester resin grades for FRP processing, appearance and procurement decisions.",
    },
    quickFacts: {
      "Shared Positioning": "General-purpose orthophthalic polyester resins for FRP work",
      "GP Clear Resin": "Clear; 350-450 cPs; gel time under 8 minutes",
      "GP Yellow Resin": "Transparent yellow; 450-600 cPs at 25 C; gel time 10-15 minutes",
      "Best Starting Point": "Confirm whether resin colour, viscosity and working window matter for the process",
    },
    comparisonTable: {
      title: "Side-by-side comparison",
      note: "Compare the published technical data for the specific batch and process before purchase. Resin selection should not be made on colour alone.",
      headers: ["Decision factor", "GP Clear Resin", "GP Yellow Resin"],
      rows: [
        ["Appearance", "Clear", "Transparent yellow"],
        ["Published viscosity", "350-450 cPs", "450-600 cPs at 25 C"],
        ["Published gel time", "Under 8 minutes", "10-15 minutes"],
        ["Curing system", "Non-accelerated", "Non-accelerated"],
        ["Packaging / MOQ", "225 kg drum / 1,000 kg", "225 kg drum / 1,000 kg"],
      ],
    },
    relatedSlugs: ["what-is-gp-polyester-resin", "gp-yellow-resin-uses-in-frp-manufacturing", "why-gp-resin-turns-yellow", "how-to-select-polyester-resin-for-frp-manufacturing", "gp-resin-viscosity-explained"],
    recommendedLinks: [
      { href: "/products/gp-clear-resin/", label: "View GP Clear Resin", description: "Review the published TDS, packaging and commercial details." },
      { href: "/products/gp-yellow-resin/", label: "View GP Yellow Resin", description: "Review the yellow GP grade and its published data." },
      { href: "/resources/gp-yellow-resin-uses-in-frp-manufacturing/", label: "GP Yellow Resin uses in FRP", description: "Review the existing GP Yellow Resin application routes before choosing a grade." },
      { href: "/resources/why-gp-resin-turns-yellow/", label: "Why GP Resin is yellow or turns yellow", description: "Separate the published transparent-yellow grade from an unexpected colour change." },
      { href: "/applications/resin-for-hand-lay-up-process/", label: "Hand lay-up guide", description: "Check process suitability before selecting a grade." },
    ],
    faqs: [
      { q: "Are GP Clear Resin and GP Yellow Resin used for the same type of FRP work?", a: "Both are general-purpose orthophthalic polyester resins used across common FRP work. The choice should consider the required appearance, published viscosity, gel time and the specific process." },
      { q: "When is GP Clear Resin the more relevant option?", a: "GP Clear Resin is the grade to discuss where a clear or colourless resin is relevant to the finished process, alongside its published viscosity and gel time." },
      { q: "Can procurement compare the two grades only on price?", a: "No. Confirm the intended process, appearance requirement, technical data, quantity and delivery location before comparing quotations." },
    ],
    sections: [
      { heading: "Buyer question", body: ["A common FRP purchasing question is whether a clear GP grade or a yellow GP grade is the better fit for a routine manufacturing line. These are related general-purpose polyester resin grades, but they are not interchangeable without checking what the part, process and appearance requirement actually demand."] },
      { heading: "Quick answer", body: ["Start with the role of resin colour in the process. GP Clear Resin is the clear general-purpose grade; GP Yellow Resin is supplied transparent yellow. Then compare the published processing data: GP Clear Resin has a lower published viscosity range and a shorter published gel time than the GP Yellow grade.", "Neither option is automatically better. The appropriate choice depends on whether the resin colour will matter, the reinforcement and moulding workflow, and the working window needed by the production team."] },
      { heading: "When to choose each grade", subsections: [
        { heading: "Consider GP Clear Resin", body: "Consider the clear grade when a colourless resin is relevant to the application and the published 350-450 cPs viscosity with gel time under 8 minutes aligns with the planned workflow. Confirm fit against the product TDS before ordering." },
        { heading: "Consider GP Yellow Resin", body: "Consider the transparent-yellow grade when its colour is acceptable in the process and its published 450-600 cPs viscosity at 25 C and 10-15 minute gel time suit the line. Check its product page for the applicable details." },
        { heading: "When not to force either choice", body: "If the job has a specific chemical-resistance, fire-performance, surface-coating or speciality bonding requirement, compare a purpose-specific grade instead of assuming either GP resin is suitable." },
      ] },
      { heading: "Details to share before requesting a quote", body: ["Share the finished part, manufacturing process, expected quantity, required appearance, existing grade if any, and delivery location. This gives the supplier enough context to direct the enquiry to the relevant product data and grade discussion."] },
    ],
  },
  {
    slug: "gp-yellow-resin-uses-in-frp-manufacturing",
    title: "GP Yellow Resin Uses in FRP Manufacturing",
    description: "A practical guide to the published GP Yellow Resin applications for Indian FRP fabricators, including roofing sheets, tanks, door skins and moulded products.",
    category: "Application Guide",
    icon: "grid",
    readingTime: "5 min read",
    publishDate: "2026-08-06",
    seo: {
      title: "GP Yellow Resin Uses in FRP Manufacturing | Buyer Guide",
      keywords: ["GP Yellow Resin uses", "GP Yellow Resin for FRP", "yellow polyester resin for FRP products", "Yellow GP Resin", "GP Resin applications"],
      ogTitle: "GP Yellow Resin Uses in FRP Manufacturing",
      ogDescription: "Review the published GP Yellow Resin applications, process considerations and selection questions for FRP manufacturing.",
    },
    quickFacts: {
      "Published resin type": "Transparent-yellow, orthophthalic unsaturated polyester resin",
      "Published application role": "General-purpose FRP lamination and moulded-product work with glass-fibre reinforcement",
      "Published processing data": "450-600 cPs viscosity at 25 C; 10-15 minute gel time",
      "First selection check": "Confirm the finished part, process, appearance requirement and product TDS",
    },
    relatedSlugs: [
      "what-is-gp-polyester-resin",
      "applications-of-gp-polyester-resin",
      "gp-clear-resin-vs-gp-yellow-resin",
      "how-to-select-polyester-resin-for-frp-manufacturing",
      "understanding-gel-time-in-polyester-resin",
    ],
    recommendedLinks: [
      { href: "/products/gp-yellow-resin/", label: "View GP Yellow Resin", description: "Review the published TDS, packaging, MOQ and technical data." },
      { href: "/products/gp-clear-resin/", label: "View GP Clear Resin", description: "Review the clear GP grade where a colourless resin is relevant." },
      { href: "/products/lamination-resin/", label: "View Lamination Resin", description: "Review the product published for door, plywood and FRP bonding applications." },
      { href: "/products/vinyl-ester-resin/", label: "View Vinyl Ester Resin", description: "Review the published vinyl ester product when a project has a stated chemical- or corrosion-resistance requirement." },
      { href: "/products/gp-gelcoat-resin/", label: "View GP Gelcoat Resin", description: "Review the mould-surface coating product separately from the reinforced laminate." },
      { href: "/applications/gp-yellow-resin-for-roofing-sheet-manufacturing/", label: "FRP roofing sheet application", description: "Review the existing GP Yellow Resin roofing-sheet guide." },
      { href: "/applications/gp-yellow-resin-for-water-tank-manufacturing/", label: "Water-tank manufacturing application", description: "Review the existing GP Yellow Resin water-tank guide." },
      { href: "/applications/gp-yellow-resin-for-hand-lay-up-process/", label: "Hand lay-up application", description: "Review the existing GP Yellow Resin hand lay-up guide." },
      { href: "/applications/gp-yellow-resin-for-spray-up-process/", label: "Spray-up application", description: "Review the existing GP Yellow Resin spray-up guide before confirming equipment fit." },
      { href: "/applications/gp-yellow-resin-for-general-frp-moulded-products/", label: "Moulded FRP products application", description: "Review the existing GP Yellow Resin guide for general moulded products." },
    ],
    faqs: [
      { q: "What is GP Yellow Resin used for?", a: "Samrat Poly Resins publishes GP Yellow Resin for general FRP lamination and moulded-product applications including roofing sheets, water tanks, cooling towers, door skins, hand lay-up, spray-up and general FRP moulded products." },
      { q: "Is GP Yellow Resin suitable for every FRP requirement?", a: "No. It is a published general-purpose orthophthalic grade. A project with a stated chemical- or corrosion-resistance, fire-performance, mould-surface coating or other specialised requirement should be reviewed against the relevant product data before selection." },
      { q: "What should an FRP buyer share before requesting a quote?", a: "Share the finished component, production method, expected quantity, whether the resin colour is suitable in the finished build-up and delivery location. This gives the supplier the context needed for a product discussion." },
    ],
    sections: [
      { heading: "Where GP Yellow Resin fits in FRP manufacturing", body: ["GP Yellow Resin is Samrat Poly Resins’ published transparent-yellow, orthophthalic unsaturated polyester grade for general FRP lamination and moulded-product work. It is used with glass-fibre reinforcement to build the structural laminate, rather than as the mould-facing surface coating.", "The most useful starting point is the finished part and process. The published GP Yellow Resin applications cover roofing sheets, water tanks, cooling towers, door skins, hand lay-up, spray-up and general FRP moulded products. Each production route should still be checked against the product Technical Data Sheet and actual line conditions."] },
      { heading: "Published application areas", subsections: [
        { heading: "Roofing sheets, water tanks and cooling towers", body: "These existing application pages show where GP Yellow Resin is discussed for FRP sheet lamination and tank or cooling-tower production. Buyers should confirm the component design, reinforcement, process and finished-surface requirement before choosing a grade." },
        { heading: "Door skins and general moulded products", body: "For door skins, panels and general FRP moulded products, the product role is the reinforced laminate. Where the visible surface is important, the surface-finish requirement should be considered separately from the structural laminate requirement." },
        { heading: "Hand lay-up and spray-up", body: "The published GP Yellow Resin application pages cover both hand lay-up and spray-up. The product’s published viscosity and gel time should be reviewed against the equipment, reinforcement, part geometry and working window before production use." },
      ] },
      { heading: "Selecting the grade for the finished part", body: ["GP Yellow Resin is transparent yellow, so buyers should first confirm whether that colour is suitable or will be hidden within the finished build-up. Then compare the published 450-600 cPs viscosity at 25 C and 10-15 minute gel time with the intended process.", "A general-purpose grade is not automatically the right choice for every project. Where a colourless grade, lamination-focused product, chemical-resistance system or mould-surface coating is required, review GP Clear Resin, Lamination Resin, Vinyl Ester Resin or GP Gelcoat Resin as appropriate, together with their published product data."] },
      { heading: "Procurement and process checklist", body: ["Before requesting a quote, record the finished FRP component, reinforcement and process, expected quantity, resin colour or surface-finish context, required delivery location and any existing grade in use. Review the GP Yellow Resin TDS and its published packaging, MOQ, shelf life and storage information before finalising a requirement."] },
    ],
  },
  {
    slug: "gp-resin-vs-lamination-resin",
    title: "GP Resin vs Lamination Resin (LR Resin)",
    description: "Understand the difference between general-purpose GP resin and Lamination Resin for FRP work, door lamination and bonding requirements.",
    category: "Comparison Guide",
    icon: "checklist",
    readingTime: "4 min read",
    publishDate: "2026-08-06",
    seo: {
      title: "GP Resin vs Lamination Resin (LR Resin) | FRP Buyer Guide",
      keywords: ["GP Resin vs LR Resin", "GP Resin vs Lamination Resin", "Lamination Resin", "FRP bonding resin", "door lamination resin"],
      ogTitle: "GP Resin vs Lamination Resin (LR Resin)",
      ogDescription: "A practical guide to choosing a general-purpose GP resin or Lamination Resin for the manufacturing requirement.",
    },
    quickFacts: {
      "GP Clear Resin": "Broad general-purpose FRP grade",
      "Lamination Resin": "Product positioned for door lamination, plywood lamination and FRP bonding",
      "Published gel time": "GP Clear: under 8 minutes; Lamination Resin: 5 minutes",
      "Decision trigger": "Match the grade to the actual process, not the generic name",
    },
    comparisonTable: {
      title: "Side-by-side comparison",
      note: "This is a product-positioning comparison based on the published product pages. Confirm the specific grade's TDS before production use.",
      headers: ["Decision factor", "GP Clear Resin", "Lamination Resin (LR Resin)"],
      rows: [
        ["Primary positioning", "General FRP and composite manufacturing", "Door lamination, plywood lamination and FRP bonding"],
        ["Published gel time", "Under 8 minutes", "5 minutes"],
        ["Published viscosity", "350-450 cPs", "400 cPs"],
        ["Published packaging", "225 kg drum", "35 kg PET packaging / 225 kg drum"],
      ],
    },
    relatedSlugs: ["what-is-gp-polyester-resin", "how-to-select-polyester-resin-for-frp-manufacturing", "applications-of-gp-polyester-resin"],
    recommendedLinks: [
      { href: "/products/gp-clear-resin/", label: "View GP Clear Resin", description: "For broad general-purpose FRP manufacturing requirements." },
      { href: "/products/lamination-resin/", label: "View Lamination Resin", description: "For door, plywood and FRP bonding requirements." },
      { href: "/applications/resin-for-general-frp-lamination/", label: "General FRP lamination guide", description: "Review the process before deciding on a grade." },
    ],
    faqs: [
      { q: "Is Lamination Resin the same as a general GP resin?", a: "No. Both are polyester resin products, but the published positioning differs. GP Clear Resin is a broader general-purpose FRP grade, while Lamination Resin is positioned for door lamination, plywood lamination and FRP bonding." },
      { q: "Which resin should be discussed for door or plywood lamination?", a: "Start with Lamination Resin, because that is the product positioned for those requirements. Confirm the substrate, process and finish requirement before placing an order." },
      { q: "What should a buyer compare before changing grades?", a: "Compare the product purpose, TDS, viscosity, gel time, packaging, quantity and the actual manufacturing process. Do not rely on a generic resin name alone." },
    ],
    sections: [
      { heading: "Buyer question", body: ["The term lamination can describe many FRP workflows, which is why buyers sometimes treat a general GP resin and Lamination Resin as the same item. They serve related polyester-resin applications, but the published product positioning is different and should guide the first selection discussion."] },
      { heading: "Quick answer", body: ["GP Clear Resin is positioned as a clear general-purpose orthophthalic polyester resin for hand lay-up, spray-up, moulding and general lamination. Lamination Resin, also called LR Resin, is positioned for door lamination, plywood lamination and FRP bonding.", "For a general FRP requirement, begin with GP Clear Resin. For a door, plywood or bonding-focused requirement, begin with Lamination Resin and verify the details against its TDS."] },
      { heading: "When not to choose by name alone", body: ["A buyer should not select either grade solely because a process is described as lamination. Confirm the substrate, reinforcement, required surface appearance, part size, expected working time and technical specification. Those details determine whether the general-purpose or lamination-specific positioning is appropriate."] },
      { heading: "Quote checklist", body: ["Include the finished product, process, quantity, packaging preference, required delivery location and any current resin grade in the enquiry. This helps avoid a quotation being prepared against the wrong use case."] },
    ],
  },
  {
    slug: "gp-resin-vs-vinyl-ester-resin",
    title: "GP Resin vs Vinyl Ester Resin",
    description: "Compare general-purpose GP polyester resin and vinyl ester resin when an FRP project has different process or chemical-resistance requirements.",
    category: "Comparison Guide",
    icon: "checklist",
    readingTime: "4 min read",
    publishDate: "2026-08-06",
    seo: {
      title: "GP Resin vs Vinyl Ester Resin | FRP Selection Guide",
      keywords: ["GP Resin vs Vinyl Ester Resin", "general purpose polyester resin", "vinyl ester resin", "chemical resistant FRP resin", "FRP resin selection"],
      ogTitle: "GP Resin vs Vinyl Ester Resin",
      ogDescription: "Understand when a general-purpose GP grade or a vinyl ester system should be reviewed for an FRP application.",
    },
    quickFacts: {
      "GP Clear Resin": "Orthophthalic, general-purpose polyester resin",
      "Vinyl Ester Resin": "Bisphenol-A epoxy vinyl ester product positioned for chemical-resistant FRP work",
      "GP Clear Resin use": "Routine hand lay-up, spray-up, moulding and general lamination",
      "Decision trigger": "Confirm the actual exposure and performance requirement before choosing a resin family",
    },
    comparisonTable: {
      title: "Side-by-side comparison",
      note: "No resin family is universally better. Use the product TDS and the application's stated requirements to make the final selection.",
      headers: ["Decision factor", "GP Clear Resin", "Vinyl Ester Resin"],
      rows: [
        ["Published resin type", "Orthophthalic unsaturated polyester", "Bisphenol-A epoxy vinyl ester"],
        ["Primary positioning", "General-purpose FRP work", "Chemical-resistant FRP applications"],
        ["Published applications", "Hand lay-up, spray-up, moulding and general lamination", "Chemical tanks, pipelines, ducting, scrubbers, filament winding and pultrusion"],
        ["What to verify", "Process, working time and appearance requirement", "Chemical exposure, cure requirements and the application-specific TDS"],
      ],
    },
    relatedSlugs: ["what-is-gp-polyester-resin", "how-to-select-polyester-resin-for-frp-manufacturing", "applications-of-gp-polyester-resin"],
    recommendedLinks: [
      { href: "/products/gp-clear-resin/", label: "View GP Clear Resin", description: "For general-purpose FRP production requirements." },
      { href: "/products/vinyl-ester-resin/", label: "View Vinyl Ester Resin", description: "For projects requiring a chemical-resistant resin system review." },
      { href: "/applications/vinyl-ester-resin-for-chemical-storage-tanks/", label: "Chemical tank application guide", description: "Review a relevant vinyl ester use case." },
    ],
    faqs: [
      { q: "Is vinyl ester resin a direct substitute for GP resin?", a: "Not automatically. The products are positioned for different needs: GP Clear Resin for general-purpose FRP work and Vinyl Ester Resin for chemical-resistant FRP applications. The application requirements should determine the choice." },
      { q: "When should a buyer review vinyl ester instead of GP Clear Resin?", a: "Review Vinyl Ester Resin when the project has a stated chemical- or corrosion-resistance requirement, or when the end use is a chemical tank, pipeline, duct, scrubber or related application." },
      { q: "Can a supplier recommend a grade without knowing the application?", a: "A responsible selection discussion needs the end use, process, exposure, quantity and technical requirement. Those details should be shared before finalising a grade." },
    ],
    sections: [
      { heading: "Buyer question", body: ["Many FRP buyers first compare GP resin and vinyl ester resin when a project moves beyond routine moulding or lamination into a more demanding service environment. The useful question is not which name sounds higher specification, but what the finished part is required to handle."] },
      { heading: "Quick answer", body: ["GP Clear Resin is the published general-purpose orthophthalic polyester grade for common FRP processes. Vinyl Ester Resin is a different product family, published as a Bisphenol-A epoxy vinyl ester for chemical-resistant FRP applications.", "For a normal GP application, begin with the GP Clear Resin data. For a project with specified chemical or corrosion exposure, review the Vinyl Ester Resin page, TDS and application details before making a purchase decision."] },
      { heading: "When to consider each resin", subsections: [
        { heading: "Consider GP Clear Resin", body: "Consider GP Clear Resin for the routine FRP processes and general applications listed on its product page, after confirming the published technical data is appropriate for the job." },
        { heading: "Consider Vinyl Ester Resin", body: "Consider Vinyl Ester Resin where the design brief identifies chemical resistance or corrosion resistance as a requirement, or where the application aligns with its published chemical-tank, pipeline, ducting, scrubber, filament-winding or pultrusion uses." },
        { heading: "Do not make an assumption", body: "Do not upgrade or substitute resin families based only on a product name. Share the exposure, process, cure requirement and applicable specification for technical review." },
      ] },
      { heading: "Details to share with the supplier", body: ["Provide the medium or exposure involved, expected service conditions, part type, reinforcement and manufacturing process, plus the quantity and delivery location. This is more useful than asking for a generic high-performance resin."] },
    ],
  },
  {
    slug: "gp-resin-vs-gelcoat-resin",
    title: "GP Resin vs Gelcoat Resin",
    description: "Learn the different roles of GP resin and gelcoat resin in an FRP laminate, from structural build-up to the mould-facing surface.",
    category: "Comparison Guide",
    icon: "layers",
    readingTime: "4 min read",
    publishDate: "2026-08-06",
    seo: {
      title: "GP Resin vs Gelcoat Resin | Roles in FRP Manufacturing",
      keywords: ["GP Resin vs Gelcoat Resin", "FRP gelcoat", "general purpose resin", "FRP laminate resin", "mould surface coating"],
      ogTitle: "GP Resin vs Gelcoat Resin",
      ogDescription: "A practical explanation of the different roles of GP resin and gelcoat in FRP manufacturing.",
    },
    quickFacts: {
      "GP Clear Resin": "General-purpose resin used to build the FRP laminate",
      "GP Gelcoat Resin": "Polyester surface-coating gelcoat for the mould-facing surface",
      "Relationship": "The products can be used in the same FRP manufacturing sequence for different roles",
      "Decision trigger": "Separate the structural laminate requirement from the required surface finish",
    },
    comparisonTable: {
      title: "Side-by-side comparison",
      note: "These products serve different jobs in an FRP build-up. Confirm the product-specific TDS and process requirements before use.",
      headers: ["Decision factor", "GP Clear Resin", "GP Gelcoat Resin"],
      rows: [
        ["Primary role", "Builds the laminate with reinforcement", "Provides the mould-facing surface coating"],
        ["Published positioning", "General-purpose orthophthalic polyester resin", "High-gloss polyester surface coating"],
        ["Use with reinforcement", "Used to wet out and bind glass-fibre reinforcement", "Not positioned as the bulk laminating resin"],
        ["Selection question", "What does the laminate need to do?", "What surface finish and mould-facing behaviour are required?"],
      ],
    },
    relatedSlugs: ["what-is-gp-polyester-resin", "what-is-gel-coat-resin", "applications-of-gelcoat-resin-in-frp-manufacturing", "gelcoat-resin-vs-vinyl-ester-resin"],
    recommendedLinks: [
      { href: "/products/gp-clear-resin/", label: "View GP Clear Resin", description: "For the general-purpose FRP laminate requirement." },
      { href: "/products/gp-gelcoat-resin/", label: "View GP Gelcoat Resin", description: "For the mould-facing surface-coating requirement." },
      { href: "/resources/what-is-gel-coat-resin/", label: "Read the gelcoat guide", description: "Understand gelcoat selection and role in a composite build-up." },
    ],
    faqs: [
      { q: "Can GP Clear Resin replace gelcoat?", a: "No. The products have different published roles. GP Clear Resin is used to build the laminate, while GP Gelcoat Resin is positioned as a mould-surface coating." },
      { q: "Can GP resin and gelcoat be used together?", a: "Yes. They can be used in the same FRP manufacturing sequence for different roles: gelcoat on the mould-facing surface and GP resin with reinforcement to build the laminate behind it." },
      { q: "What should a buyer specify in an enquiry?", a: "State whether the enquiry is for the laminate, the visible surface finish, or both. Also share the part type, process, quantity and any required appearance." },
    ],
    sections: [
      { heading: "Buyer question", body: ["GP resin and gelcoat are often requested together, but they should not be treated as two names for the same material. A clear selection starts by separating the job of building the laminate from the job of creating the mould-facing surface."] },
      { heading: "Quick answer", body: ["GP Clear Resin is the general-purpose resin used with glass-fibre reinforcement to form the FRP laminate. GP Gelcoat Resin is the published polyester surface-coating product for the mould-facing side of a part.", "In a typical build-up, the surface layer and the structural laminate are selected for different reasons. The production team should identify both requirements rather than asking for a single resin to do both jobs."] },
      { heading: "When to choose each product", subsections: [
        { heading: "Choose GP Clear Resin for the laminate", body: "Use the GP Clear Resin page and TDS when the requirement is to wet out reinforcement and build the general FRP laminate in the published processes." },
        { heading: "Choose GP Gelcoat Resin for the surface", body: "Use the GP Gelcoat Resin page and TDS when the requirement concerns the mould-facing surface coating, finish or surface behaviour." },
        { heading: "When the project needs both", body: "Discuss the full sequence, part geometry, process and expected surface result. This helps ensure the laminate and surface layer are considered together without treating them as substitutes." },
      ] },
      { heading: "Procurement checklist", body: ["Include whether the purchase is for a structural laminate, a surface coating, or a complete build-up; then add the part type, process, quantity and delivery location. This makes the quotation request more precise."] },
    ],
  },
  {
    slug: "why-gp-resin-turns-yellow",
    title: "Why GP Resin Is Yellow or Turns Yellow",
    description: "A practical guide to understanding intentional yellow GP resin and unexpected colour change, what to check first and when to discuss a batch or process with the supplier.",
    category: "Troubleshooting Guide",
    icon: "info",
    readingTime: "4 min read",
    publishDate: "2026-08-06",
    seo: {
      title: "Why GP Resin Is Yellow or Turns Yellow | Buyer Checks",
      keywords: ["why GP resin is yellow", "why GP resin turns yellow", "GP Yellow Resin", "yellow polyester resin", "GP resin colour", "polyester resin storage"],
      ogTitle: "Why GP Resin Is Yellow or Turns Yellow",
      ogDescription: "Understand the published transparent-yellow GP grade, storage-related colour change and the information to share when discussing a batch.",
    },
    quickFacts: {
      "First check": "Confirm whether the supplied grade is clear or intentionally transparent yellow",
      "Storage factors": "Heat, direct sunlight, age and an unsealed container can affect resin condition",
      "Do not assume": "A colour difference alone does not identify the cause or prove fitness for use",
      "Useful records": "Batch details, storage history, photographs and the intended application",
    },
    relatedSlugs: ["gp-clear-resin-vs-gp-yellow-resin", "gp-yellow-resin-uses-in-frp-manufacturing", "what-is-gp-polyester-resin", "how-to-store-unsaturated-polyester-resin", "gp-resin-viscosity-explained"],
    recommendedLinks: [
      { href: "/products/gp-clear-resin/", label: "View GP Clear Resin", description: "Check the published clear appearance, storage guidance and TDS." },
      { href: "/products/gp-yellow-resin/", label: "View GP Yellow Resin", description: "Review the intentionally transparent-yellow GP grade." },
      { href: "/resources/gp-clear-resin-vs-gp-yellow-resin/", label: "Compare GP Clear and GP Yellow Resin", description: "Review the published appearance, viscosity and gel-time differences." },
      { href: "/resources/how-to-store-unsaturated-polyester-resin/", label: "Read storage guidance", description: "Review general storage and stock-rotation practices." },
    ],
    faqs: [
      { q: "Is all yellow GP resin defective?", a: "No. Some GP grades are intentionally supplied transparent yellow. First confirm the ordered grade and its published appearance before treating yellow colour as a problem." },
      { q: "Why is GP Yellow Resin yellow?", a: "GP Yellow Resin is published as a transparent-yellow general-purpose grade. Its supplied appearance should be checked against the product page and Technical Data Sheet, rather than being treated as an unexpected colour change." },
      { q: "Can storage affect the appearance of resin?", a: "Heat, direct sunlight, age and an unsealed container can affect resin condition. The product TDS and batch information should be checked before use." },
      { q: "What should I send to the supplier if a batch looks different?", a: "Share the product name, batch details, manufacturing or receipt date if available, storage history, photographs and the intended application. Do not assume a remedy without technical review." },
    ],
    sections: [
      { heading: "Understand the starting colour first", body: ["The phrase yellow GP resin can describe two different situations: a grade that is intentionally supplied transparent yellow, and a clear grade that appears different from the expected colour. These should not be treated as the same issue. Start by confirming the product name, ordered grade and the appearance stated for that grade."] },
      { heading: "When GP Yellow Resin is the intended grade", body: ["Samrat Poly Resins publishes GP Yellow Resin as a transparent-yellow, general-purpose orthophthalic polyester grade. When that is the ordered product, its colour is part of the published grade description rather than evidence of a defect. The selection question is whether the colour is suitable or will be hidden in the finished FRP build-up, alongside the product’s published processing data and intended application."] },
      { heading: "Common reasons a clear grade may look different", body: ["Resin condition can be affected by storage and age. Existing storage guidance highlights heat, direct sunlight and a poorly sealed container as factors that can affect stability and appearance over time. A visible change may also arise from handling or contamination in the process, so colour alone is not enough to identify the cause.", "Do not judge a batch only by visual appearance. Compare the batch details with the expected product, review the storage record and check the applicable TDS before committing it to a production run."] },
      { heading: "Prevention and purchasing checks", body: ["Keep drums sealed when not in use, protect them from direct sunlight and heat, and rotate stock by batch date. When appearance matters in the finished part, include that requirement in the original product discussion rather than assuming every GP grade has the same colour characteristics."] },
      { heading: "What to share with the supplier", body: ["Provide the product and batch details, photographs taken in neutral light, how and where the drum was stored, whether the container has been opened, and the intended FRP process. This gives the supplier context for a technical conversation without making unsupported assumptions about the cause."] },
    ],
  },
  {
    slug: "why-polyester-resin-remains-sticky-or-tacky",
    title: "Why Polyester Resin Remains Sticky or Tacky",
    description: "Understand common reasons a polyester resin surface may remain sticky or tacky, the checks to make and the details to share with a supplier.",
    category: "Troubleshooting Guide",
    icon: "info",
    readingTime: "4 min read",
    publishDate: "2026-08-06",
    seo: {
      title: "Why Polyester Resin Remains Sticky or Tacky | Troubleshooting Guide",
      keywords: ["polyester resin sticky", "polyester resin tacky", "GP resin not curing", "FRP resin troubleshooting", "polyester resin gel time"],
      ogTitle: "Why Polyester Resin Remains Sticky or Tacky",
      ogDescription: "A practical, safety-conscious guide to checking a sticky or tacky polyester resin surface before changing the process.",
    },
    quickFacts: {
      "What it can indicate": "A cure, process, storage or surface-condition issue that needs checking",
      "First response": "Pause and compare the process with the product TDS and batch information",
      "Do not do": "Do not add unapproved chemicals or change catalyst dosage by guesswork",
      "Useful records": "Product, batch, process, ambient conditions and observed result",
    },
    relatedSlugs: ["understanding-gel-time-in-polyester-resin", "how-to-store-unsaturated-polyester-resin", "how-to-select-polyester-resin-for-frp-manufacturing"],
    recommendedLinks: [
      { href: "/products/gp-clear-resin/", label: "View GP Clear Resin", description: "Review the published curing system and TDS for the specific GP grade." },
      { href: "/products/lamination-resin/", label: "View Lamination Resin", description: "Review the published curing system and TDS for the lamination grade." },
      { href: "/resources/understanding-gel-time-in-polyester-resin/", label: "Read the gel time guide", description: "Understand working time, cure progression and common gel-time issues." },
      { href: "/contact/", label: "Discuss the application", description: "Share the process and batch details for a focused technical conversation." },
    ],
    faqs: [
      { q: "Does a tacky surface always mean the resin is defective?", a: "No. A sticky or tacky result can have several causes related to cure conditions, mixing or measurement, temperature, storage, surface effects or process fit. The batch and process should be reviewed before reaching a conclusion." },
      { q: "Should I add more catalyst to correct a tacky resin?", a: "Do not change catalyst or accelerator dosage by guesswork. Follow the specific product TDS and seek supplier guidance, because cure chemistry and safety are product-specific." },
      { q: "What should I record before contacting a supplier?", a: "Record the product and batch, the intended process, ambient conditions, storage history, timing, reinforcement or substrate and photographs of the result. This makes troubleshooting more useful." },
    ],
    sections: [
      { heading: "What a sticky or tacky result means", body: ["A sticky or tacky resin surface means the finished result has not reached the condition expected by the fabricator. It is a troubleshooting signal, not a diagnosis on its own. The same visible outcome can be connected to more than one part of the material, process or environment."] },
      { heading: "Common areas to check", body: ["Start with the exact product and batch, then compare the process with the published TDS. Check whether the resin was within its stated shelf-life and storage conditions, whether the process followed the supplier's stated system, and whether the ambient conditions differed from the normal production environment.", "For a laminate, also record the reinforcement, part shape and surface involved. These details help distinguish a general cure issue from a process-specific surface result without recommending unapproved changes."] },
      { heading: "Prevention without guesswork", body: ["Use the specified product for the intended application, keep accurate batch and process records, follow the product TDS and maintain controlled storage. Do not attempt to compensate for a problem by adding chemicals or changing curing inputs without the product-specific guidance required for safe use."] },
      { heading: "What to share with the supplier", body: ["Provide the product name, batch details, manufacturing date if available, storage history, process used, ambient conditions, timing and photographs. Include whether the issue appears across the part or only on one surface. This information supports a practical technical discussion."] },
    ],
  },
  {
    slug: "how-to-reduce-shrinkage-in-gp-resin-applications",
    title: "How to Reduce Shrinkage in GP Resin Applications",
    description: "A practical guide to understanding shrinkage in GP resin applications and the process questions to resolve before production.",
    category: "Best Practices",
    icon: "checklist",
    readingTime: "4 min read",
    publishDate: "2026-08-06",
    seo: {
      title: "How to Reduce Shrinkage in GP Resin Applications | FRP Guide",
      keywords: ["GP resin shrinkage", "polyester resin shrinkage", "FRP shrinkage", "GP resin applications", "FRP process control"],
      ogTitle: "How to Reduce Shrinkage in GP Resin Applications",
      ogDescription: "Understand resin shrinkage as a process and application question, without relying on unsupported one-size-fits-all fixes.",
    },
    quickFacts: {
      "What shrinkage means": "Dimensional change as a resin system cures",
      "Why it varies": "Grade, reinforcement, part geometry, laminate design and cure conditions all matter",
      "First step": "Clarify the dimensional and surface requirement for the finished part",
      "Avoid": "Unapproved process changes or universal shrinkage claims without application data",
    },
    relatedSlugs: ["how-to-select-polyester-resin-for-frp-manufacturing", "applications-of-gp-polyester-resin", "understanding-gel-time-in-polyester-resin"],
    recommendedLinks: [
      { href: "/products/gp-clear-resin/", label: "View GP Clear Resin", description: "Review the published general-purpose grade and TDS." },
      { href: "/resources/how-to-select-polyester-resin-for-frp-manufacturing/", label: "Read the resin-selection guide", description: "Match resin choice to process and part requirements." },
      { href: "/contact/", label: "Discuss your application", description: "Share the part, process and dimensional requirement before selecting a system." },
    ],
    faqs: [
      { q: "Can one shrinkage recommendation apply to every GP resin application?", a: "No. Shrinkage behaviour depends on the specific grade, reinforcement, part geometry, laminate design and cure conditions. The application should be reviewed before making changes." },
      { q: "Should a buyer ask about shrinkage before ordering GP resin?", a: "Yes, when dimensional accuracy, mould replication or surface appearance is important. Share the part type, process and acceptance requirement early in the discussion." },
      { q: "Can catalyst changes be used as a general shrinkage fix?", a: "Do not make unapproved cure-system changes as a general fix. Follow the product TDS and request technical guidance for the specific application." },
    ],
    sections: [
      { heading: "What shrinkage means in an FRP application", body: ["Shrinkage refers to dimensional change as a resin system cures. In practical FRP manufacturing, its importance depends on the part: a large moulded surface, a detailed pattern, a tight-fit component and a general fabricated item may not have the same dimensional or surface expectations."] },
      { heading: "Why one answer does not fit every part", body: ["The finished result is influenced by the resin grade, reinforcement, laminate design, geometry, mould condition and cure environment. This is why a general statement about a resin family is not enough to predict a specific part. The production requirement must be defined before a supplier can discuss the relevant system."] },
      { heading: "Practical prevention approach", body: ["Start with the right application and process discussion rather than an after-the-fact correction. Confirm the part geometry, reinforcement, finish, dimensional tolerance, expected production method and any current process issue. Maintain consistent handling and follow the published product guidance rather than changing cure inputs without approval."] },
      { heading: "What to share with the supplier", body: ["Share drawings or part dimensions where appropriate, the moulding method, reinforcement, laminate build-up, visible surface requirement, quantity and the problem being observed. This gives the supplier the context needed to discuss product selection without making unsupported performance promises."] },
    ],
  },
  {
    slug: "gp-resin-viscosity-explained",
    title: "GP Resin Viscosity Explained",
    description: "Understand what GP resin viscosity means for hand lay-up, spray-up and general FRP processing, including what to check before buying.",
    category: "Technical Data",
    icon: "info",
    readingTime: "4 min read",
    publishDate: "2026-08-06",
    seo: {
      title: "GP Resin Viscosity Explained | FRP Buyer and Process Guide",
      keywords: ["GP resin viscosity", "polyester resin viscosity", "GP Clear Resin viscosity", "FRP resin processing", "hand lay-up resin"],
      ogTitle: "GP Resin Viscosity Explained",
      ogDescription: "A practical explanation of GP resin viscosity, process fit and the information to check against a technical data sheet.",
    },
    quickFacts: {
      "Definition": "A measure of a resin's resistance to flow",
      "GP Clear Resin": "Published viscosity of 350-450 cPs",
      "Why it matters": "Viscosity affects how a resin handles in a given process",
      "Always check": "The specific product TDS, temperature and equipment or reinforcement used",
    },
    relatedSlugs: ["how-to-select-polyester-resin-for-frp-manufacturing", "understanding-gel-time-in-polyester-resin", "how-to-store-unsaturated-polyester-resin"],
    recommendedLinks: [
      { href: "/products/gp-clear-resin/", label: "View GP Clear Resin", description: "Review the published 350-450 cPs viscosity and TDS." },
      { href: "/products/gp-yellow-resin/", label: "View GP Yellow Resin", description: "Compare the published yellow GP grade viscosity range." },
      { href: "/applications/resin-for-spray-up-process/", label: "Read the spray-up guide", description: "Review the process context before selecting a resin grade." },
    ],
    faqs: [
      { q: "What does viscosity mean for a GP resin buyer?", a: "Viscosity describes how readily a resin flows. For buyers and production teams, it is one of the published properties used to assess process fit alongside gel time, resin type and cure system." },
      { q: "Is a lower viscosity always better?", a: "No. The useful viscosity depends on the process, reinforcement, part geometry and equipment. Compare the TDS with the actual manufacturing requirement rather than treating lower or higher as universally better." },
      { q: "Can storage change the way resin flows?", a: "Storage history and temperature can affect resin condition. Keep the product within its stated storage guidance and compare any concern with the batch information and TDS." },
    ],
    sections: [
      { heading: "What viscosity means", body: ["Viscosity is a measure of resistance to flow. In practical terms, it influences how a resin moves, wets reinforcement and behaves in a manufacturing process. It should be read as a process-fit property, not as a stand-alone quality score."] },
      { heading: "GP Clear Resin viscosity", body: ["GP Clear Resin has a published viscosity of 350-450 cPs. That number should be considered alongside its non-accelerated curing system, gel time, reinforcement and the process being used. The product TDS is the correct reference for the actual grade rather than a general industry figure."] },
      { heading: "Why process context matters", body: ["Hand lay-up, spray-up and other FRP processes place different demands on resin flow. Reinforcement type, mould shape, part size, workshop temperature and equipment can all affect whether the published viscosity is a good fit for the line. Review the process before switching grades."] },
      { heading: "What to discuss before purchase", body: ["Share the manufacturing process, reinforcement, part type, temperature conditions, equipment where relevant, expected quantity and any current resin grade. This helps a supplier compare the requirement with the published data instead of making a generic recommendation."] },
    ],
  },
  {
    slug: "what-is-lamination-resin",
    title: "What is Lamination Resin (LR Resin)?",
    description: "A buyer guide to Lamination Resin, also called LR Resin, for door, plywood and FRP bonding work.",
    category: "Technical Explainer",
    icon: "layers",
    readingTime: "4 min read",
    publishDate: "2026-08-06",
    seo: {
      title: "What is Lamination Resin (LR Resin)? | Buyer Guide",
      keywords: ["what is Lamination Resin", "LR Resin", "polyester lamination resin", "Lamination Resin manufacturer", "resin for FRP lamination"],
      ogTitle: "What is Lamination Resin (LR Resin)?",
      ogDescription: "Understand the published role, applications and buyer checks for Samrat Poly Resins Lamination Resin.",
    },
    quickFacts: {
      "Published resin type": "Transparent orthophthalic unsaturated polyester",
      "Published applications": "Door lamination, plywood lamination and FRP bonding",
      "Published gel time": "5 minutes",
      "Buyer check": "Confirm the substrate, process, finish requirement and TDS before selection",
    },
    relatedSlugs: ["gp-resin-vs-lamination-resin", "how-to-select-polyester-resin-for-frp-manufacturing", "understanding-gel-time-in-polyester-resin"],
    recommendedLinks: [
      { href: "/products/lamination-resin/", label: "View Lamination Resin", description: "Review the published TDS, packaging and procurement details." },
      { href: "/applications/door-lamination/", label: "Door lamination guide", description: "Explore one of the published application contexts." },
      { href: "/contact/", label: "Discuss an LR Resin application", description: "Share the substrate, process and quantity for a focused discussion." },
    ],
    faqs: [
      { q: "What does LR Resin mean?", a: "LR Resin is the short name used here for Lamination Resin. Samrat Poly Resins publishes this grade for door lamination, plywood lamination and FRP bonding work." },
      { q: "Is Lamination Resin the same as every general-purpose polyester resin?", a: "Not automatically. Both are polyester-resin products, but selection should begin with the published product purpose and the actual manufacturing process. Compare the TDS before choosing a grade." },
      { q: "What should a buyer share before requesting an LR Resin quote?", a: "Share the finished component, substrate or reinforcement, process, expected quantity, packaging preference and delivery location." },
    ],
    sections: [
      { heading: "The simple definition", body: ["Lamination Resin, also known as LR Resin, is the product name used by Samrat Poly Resins for its transparent orthophthalic unsaturated polyester grade positioned for door lamination, plywood lamination and FRP bonding. It is a liquid, room-temperature-cure resin grade with published technical data for procurement and production review.", "The product name is a useful starting point, not a substitute for process review. A buyer should match the grade to the substrate, reinforcement, finished-surface requirement and working conditions before finalising a requirement."] },
      { heading: "Where this LR Resin is positioned", body: ["The published applications include door skin and decorative door panels, plywood and laminate bonding for furniture surfaces, FRP bonding and composite-panel lamination, plus clear-finish hand lay-up work. These application descriptions help production and procurement teams start with the intended component rather than a generic resin label."] },
      { heading: "What to verify before purchase", body: ["Review the product TDS and the published product details alongside the actual line conditions. For a quotation or technical discussion, provide the component, substrate or reinforcement, process, expected quantity, packaging preference and delivery location. Do not assume that a resin described as suitable for lamination is appropriate for every FRP, surface-coating or chemical-exposure requirement."] },
    ],
  },
  {
    slug: "applications-of-lamination-resin",
    title: "Applications of Lamination Resin in FRP Manufacturing",
    description: "Explore the published Lamination Resin applications for door panels, plywood, FRP bonding and clear-finish hand lay-up work.",
    category: "Application Guide",
    icon: "grid",
    readingTime: "4 min read",
    publishDate: "2026-08-06",
    seo: {
      title: "Applications of Lamination Resin in FRP Manufacturing",
      keywords: ["Lamination Resin applications", "LR Resin applications", "resin for FRP lamination", "door lamination resin", "plywood lamination resin"],
      ogTitle: "Applications of Lamination Resin in FRP Manufacturing",
      ogDescription: "Use the published application contexts to assess Lamination Resin for a door, plywood or FRP bonding requirement.",
    },
    quickFacts: {
      "Door work": "Door skins and decorative door panels",
      "Plywood work": "Plywood and laminate bonding for furniture surfaces",
      "FRP work": "FRP bonding and composite-panel lamination",
      "Selection note": "Confirm the component and process against the product TDS",
    },
    relatedSlugs: ["what-is-lamination-resin", "gp-resin-vs-lamination-resin", "how-to-select-polyester-resin-for-frp-manufacturing"],
    recommendedLinks: [
      { href: "/products/lamination-resin/", label: "View Lamination Resin", description: "Review the product data and TDS for the published grade." },
      { href: "/applications/decorative-plywood-lamination/", label: "Decorative plywood lamination", description: "Explore an existing application guide." },
      { href: "/applications/resin-for-general-frp-lamination/", label: "General FRP lamination", description: "Review process context before selecting a grade." },
    ],
    faqs: [
      { q: "Can Lamination Resin be considered for door skins?", a: "Door skin lamination and decorative door panels are published applications for this product. Check the relevant application, finish and process details before final selection." },
      { q: "Is Lamination Resin used only for wood-based lamination?", a: "No. The published applications also include FRP bonding and composite-panel lamination, as well as clear-finish hand lay-up work." },
      { q: "Should a buyer choose a grade only because the finished part uses FRP?", a: "No. The substrate, reinforcement, process, required finish and service requirement should be discussed against the specific product TDS." },
    ],
    sections: [
      { heading: "Start with the component", body: ["For lamination buyers, the useful first question is what is being made: a door panel, plywood or furniture surface, a bonded FRP component, or a clear-finish hand lay-up part. The published Lamination Resin applications give a practical starting point for this conversation."] },
      { heading: "Published application contexts", subsections: [
        { heading: "Door skins and decorative door panels", body: "Lamination Resin is published for door skin lamination and decorative door panels. Review the door substrate, finish requirement and working method alongside the product data before selection." },
        { heading: "Plywood and furniture surfaces", body: "The product is also positioned for plywood and laminate bonding for furniture surfaces. Use the existing decorative plywood and furniture-lamination guides to frame the application discussion." },
        { heading: "FRP bonding and composite panels", body: "For FRP bonding and composite-panel lamination, confirm the reinforcement, part geometry, process and intended service conditions rather than relying on the word FRP alone." },
        { heading: "Clear-finish hand lay-up work", body: "Clear-finish hand lay-up is a published product application. Compare the TDS and the actual working window with the production setup before committing to a grade." },
      ] },
      { heading: "When to discuss another product", body: ["A general FRP requirement may call for GP Clear Resin; a chemical- or corrosion-resistance requirement should be reviewed against Vinyl Ester Resin; and a mould-facing decorative surface has a different role from Gelcoat Resin. The right choice depends on the finished part and specified requirement, not on a broad product category alone."] },
    ],
  },
  {
    slug: "lamination-resin-for-hand-lay-up",
    title: "Lamination Resin for Hand Lay-Up Process",
    description: "A practical guide to reviewing Lamination Resin for published clear-finish hand lay-up work before production.",
    category: "Process Guide",
    icon: "layers",
    readingTime: "4 min read",
    publishDate: "2026-08-06",
    seo: {
      title: "Lamination Resin for Hand Lay-Up | LR Resin Process Guide",
      keywords: ["Lamination Resin for hand lay-up", "LR Resin hand layup", "polyester lamination resin", "resin for FRP fabrication", "FRP hand lay-up resin"],
      ogTitle: "Lamination Resin for Hand Lay-Up Process",
      ogDescription: "Review published Lamination Resin data and the process questions to resolve for a clear-finish hand lay-up requirement.",
    },
    quickFacts: {
      "Published process context": "Hand lay-up work requiring a clear, glossy finish",
      "Published resin type": "Transparent orthophthalic unsaturated polyester",
      "Published gel time": "5 minutes",
      "First check": "Compare the working window and finished-surface requirement with the TDS",
    },
    relatedSlugs: ["what-is-lamination-resin", "applications-of-lamination-resin", "understanding-gel-time-in-polyester-resin"],
    recommendedLinks: [
      { href: "/products/lamination-resin/", label: "View Lamination Resin", description: "Check the published 5-minute gel time, TDS and product details." },
      { href: "/applications/resin-for-hand-lay-up-process/", label: "Hand lay-up process guide", description: "Review existing process context alongside the grade data." },
      { href: "/contact/", label: "Discuss your hand lay-up process", description: "Share the part, reinforcement and production conditions." },
    ],
    faqs: [
      { q: "Is Lamination Resin published for hand lay-up?", a: "Yes. The product lists hand lay-up work requiring a clear, glossy finish among its published applications. Final suitability should still be checked against the TDS and actual process." },
      { q: "Can every hand lay-up process use the same resin grade?", a: "No. Part size, reinforcement, surface requirement, ambient conditions and the working window all need review before selecting a grade." },
      { q: "Which details help a technical discussion?", a: "Share the part, reinforcement, substrate, ambient conditions, expected quantity and the current process or grade, then compare them with the product data." },
    ],
    sections: [
      { heading: "Published hand lay-up context", body: ["Samrat Poly Resins lists clear-finish hand lay-up work as a published application for Lamination Resin. This gives buyers a product-specific starting point where the job involves a clear or glossy finish, but it does not replace a review of the part and process conditions."] },
      { heading: "Questions to resolve before production", body: ["Review the finished component, reinforcement, substrate, mould or surface requirement, working conditions and the time available for the operation. The product's published 5-minute gel time and other TDS values should be evaluated against the actual production setup rather than used as a stand-alone approval."] },
      { heading: "Keep the selection discussion specific", body: ["For a broad general-purpose FRP process, compare GP Clear Resin. For chemical- or corrosion-resistance requirements, review Vinyl Ester Resin. If the job concerns the mould-facing surface, review the distinct role of Gelcoat Resin. Share the application details before choosing a resin family or changing a cure system."] },
    ],
  },
  {
    slug: "lamination-resin-vs-vinyl-ester-resin",
    title: "Lamination Resin vs Vinyl Ester Resin",
    description: "A decision guide for FRP buyers comparing a lamination-focused polyester grade with Vinyl Ester Resin for a specified requirement.",
    category: "Comparison Guide",
    icon: "checklist",
    readingTime: "4 min read",
    publishDate: "2026-08-06",
    seo: {
      title: "Lamination Resin vs Vinyl Ester Resin | FRP Buyer Guide",
      keywords: ["Lamination Resin vs Vinyl Ester Resin", "LR Resin vs Vinyl Ester Resin", "FRP resin selection", "chemical resistant FRP resin", "polyester lamination resin"],
      ogTitle: "Lamination Resin vs Vinyl Ester Resin",
      ogDescription: "Compare the published roles of Lamination Resin and Vinyl Ester Resin before selecting an FRP resin system.",
    },
    quickFacts: {
      "Lamination Resin": "Published for door, plywood and FRP bonding work",
      "Vinyl Ester Resin": "Published for chemical-resistant FRP applications",
      "Decision trigger": "Confirm exposure, finished component and process",
      "Do not assume": "One resin family is automatically a substitute for the other",
    },
    comparisonTable: {
      title: "Side-by-side decision guide",
      note: "This is a published-product positioning comparison. Confirm the applicable TDS and actual application requirement before selecting a resin system.",
      headers: ["Decision factor", "Lamination Resin (LR Resin)", "Vinyl Ester Resin"],
      rows: [
        ["Published resin type", "Orthophthalic unsaturated polyester", "Bisphenol-A epoxy vinyl ester"],
        ["Published positioning", "Door lamination, plywood lamination and FRP bonding", "Chemical-resistant FRP applications"],
        ["What to define", "Substrate, finished surface, process and working conditions", "Chemical exposure, process and application-specific requirements"],
      ],
    },
    relatedSlugs: ["what-is-lamination-resin", "applications-of-lamination-resin", "gp-resin-vs-vinyl-ester-resin"],
    recommendedLinks: [
      { href: "/products/lamination-resin/", label: "View Lamination Resin", description: "For published door, plywood and FRP bonding applications." },
      { href: "/products/vinyl-ester-resin/", label: "View Vinyl Ester Resin", description: "Review the product data for a chemical-resistance requirement." },
      { href: "/applications/vinyl-ester-resin-for-chemical-storage-tanks/", label: "Chemical storage tank guide", description: "Explore an existing Vinyl Ester application context." },
    ],
    faqs: [
      { q: "Is Vinyl Ester Resin a direct replacement for Lamination Resin?", a: "Not automatically. The products are published for different application contexts, so the finished part, service exposure and process should drive the selection." },
      { q: "When should a buyer review Vinyl Ester Resin?", a: "Review Vinyl Ester Resin when the project has a stated chemical- or corrosion-resistance requirement. Use the product TDS and the specific exposure details for the discussion." },
      { q: "What should be compared before changing resin families?", a: "Compare the product role, TDS, actual exposure, process, reinforcement, part design and procurement requirement rather than choosing by name or price alone." },
    ],
    sections: [
      { heading: "Different starting questions", body: ["Lamination Resin and Vinyl Ester Resin should not be treated as an automatic like-for-like swap. Lamination Resin is published for door, plywood and FRP bonding work. Vinyl Ester Resin is published for chemical-resistant FRP applications. The choice starts with the job requirement, not with a broad ranking of resin families."] },
      { heading: "When Lamination Resin is the relevant product to review", body: ["Start with Lamination Resin for the published door-lamination, plywood-lamination and FRP-bonding contexts. Confirm the substrate, required finish, reinforcement, working conditions and product TDS before purchase."] },
      { heading: "When Vinyl Ester Resin needs a review", body: ["Where a project specifies chemical or corrosion resistance, review Vinyl Ester Resin and its application-specific data. The exact chemical, concentration, temperature, exposure pattern and part construction require a technical review; this comparison does not make a performance promise for any unlisted service condition."] },
      { heading: "Quote and technical discussion checklist", body: ["Provide the finished component, process, reinforcement, service environment where relevant, quantity, packaging preference and delivery location. This gives procurement and technical teams the information needed to compare the published product data responsibly."] },
    ],
  },
  {
    slug: "lamination-resin-vs-gelcoat-resin",
    title: "Lamination Resin vs Gelcoat Resin",
    description: "Understand the different roles of Lamination Resin and Gelcoat Resin in an FRP build-up before selecting a product.",
    category: "Comparison Guide",
    icon: "checklist",
    readingTime: "4 min read",
    publishDate: "2026-08-06",
    seo: {
      title: "Lamination Resin vs Gelcoat Resin | FRP Buyer Guide",
      keywords: ["Lamination Resin vs Gelcoat Resin", "LR Resin vs Gelcoat Resin", "FRP lamination resin", "FRP surface coating", "Gelcoat Resin"],
      ogTitle: "Lamination Resin vs Gelcoat Resin",
      ogDescription: "A simple guide to the distinct laminate and mould-surface roles of Lamination Resin and Gelcoat Resin.",
    },
    quickFacts: {
      "Lamination Resin": "Published for lamination and FRP bonding work",
      "Gelcoat Resin": "Published as a mould-surface coating",
      "Key difference": "The products have different roles in an FRP build-up",
      "Selection note": "Confirm the finished surface and laminate requirements separately",
    },
    comparisonTable: {
      title: "Side-by-side decision guide",
      note: "This comparison describes product roles, not a performance ranking. Confirm the product TDS and the manufacturing sequence before use.",
      headers: ["Decision factor", "Lamination Resin (LR Resin)", "GP Gelcoat Resin"],
      rows: [
        ["Published role", "Lamination and FRP bonding", "Mould-surface coating"],
        ["Typical buyer question", "How should the substrate or laminate be processed?", "What surface is required on the mould-facing side?"],
        ["Selection approach", "Review component, process and working conditions", "Review mould, finish and product-specific data"],
      ],
    },
    relatedSlugs: ["what-is-lamination-resin", "applications-of-lamination-resin", "gp-resin-vs-gelcoat-resin", "applications-of-gelcoat-resin-in-frp-manufacturing"],
    recommendedLinks: [
      { href: "/products/lamination-resin/", label: "View Lamination Resin", description: "Review the published grade for lamination and FRP bonding work." },
      { href: "/products/gp-gelcoat-resin/", label: "View GP Gelcoat Resin", description: "Review the separate mould-surface product role and TDS." },
      { href: "/contact/", label: "Discuss your FRP build-up", description: "Share the laminate and surface requirement before selecting products." },
    ],
    faqs: [
      { q: "Is Gelcoat Resin the same as Lamination Resin?", a: "No. The published roles are different: Lamination Resin is for lamination and FRP bonding work, while GP Gelcoat Resin is a mould-surface coating." },
      { q: "Can an FRP build-up involve both product types?", a: "They can have different roles in the same manufacturing sequence. The specific construction, finish requirement and product data should be reviewed before use." },
      { q: "What should a buyer clarify first?", a: "Clarify whether the requirement concerns the laminate or bonding layer, the mould-facing surface, or both. Then compare each product's published TDS with the process." },
    ],
    sections: [
      { heading: "Different roles, not competing names", body: ["The key difference is role. Samrat Poly Resins publishes Lamination Resin for lamination and FRP bonding work, and GP Gelcoat Resin as a mould-surface coating. A useful FRP discussion separates the laminate or bonding requirement from the finished surface requirement."] },
      { heading: "When to review Lamination Resin", body: ["Review Lamination Resin where the published application concerns door lamination, plywood lamination, FRP bonding or clear-finish hand lay-up work. Check the actual substrate, reinforcement, working conditions and product TDS before selection."] },
      { heading: "When to review Gelcoat Resin", body: ["Review GP Gelcoat Resin when the question is about the mould-facing surface. It should be selected against the required finish and the appropriate product data, rather than being used as a generic substitute for a laminate resin."] },
      { heading: "What to include in an enquiry", body: ["Share the component, manufacturing sequence, mould or surface requirement, substrate or reinforcement, quantity and delivery location. This lets the team discuss the correct product role without assuming the process."] },
    ],
  },
  {
    slug: "gelcoat-resin-vs-vinyl-ester-resin",
    title: "Gelcoat Resin vs Vinyl Ester Resin",
    description: "Compare the distinct surface-finish and chemical-service roles of Gelcoat Resin and Vinyl Ester Resin before planning an FRP build-up.",
    category: "Comparison Guide",
    icon: "layers",
    readingTime: "4 min read",
    publishDate: "2026-08-06",
    seo: {
      title: "Gelcoat Resin vs Vinyl Ester Resin | FRP Buyer Guide",
      keywords: ["Gelcoat Resin vs Vinyl Ester Resin", "Gelcoat vs Vinyl Ester", "FRP surface finish resin", "Vinyl Ester Resin", "Gelcoat Resin manufacturer India"],
      ogTitle: "Gelcoat Resin vs Vinyl Ester Resin",
      ogDescription: "Understand the different roles of Gelcoat Resin and Vinyl Ester Resin in an FRP product before selecting either material.",
    },
    quickFacts: {
      "GP Gelcoat Resin": "A polyester surface-coating gelcoat for the mould-facing finish",
      "Vinyl Ester Resin": "A separate resin system for applications needing its published chemical-resistance positioning",
      "Key decision": "Separate the exterior finish requirement from the laminate or service requirement",
      "Verify": "The finished-part environment and the specific product TDS before specifying",
    },
    relatedSlugs: ["what-is-gel-coat-resin", "gp-resin-vs-gelcoat-resin", "how-to-choose-gelcoat-resin-for-frp-products"],
    recommendedLinks: [
      { href: "/products/gp-gelcoat-resin/", label: "View GP Gelcoat Resin", description: "Review the published mould-surface product details and TDS." },
      { href: "/products/vinyl-ester-resin/", label: "View Vinyl Ester Resin", description: "Review the separate product data for chemical-service discussions." },
      { href: "/applications/vinyl-ester-resin-for-chemical-storage-tanks/", label: "Chemical storage tank guidance", description: "Understand why service conditions must be specified before choosing a resin system." },
    ],
    faqs: [
      { q: "Is Gelcoat Resin a replacement for Vinyl Ester Resin?", a: "No. They are selected for different roles. Gelcoat is a mould-facing surface coating, while Vinyl Ester Resin is a separate resin system whose suitability depends on the service requirement and product data." },
      { q: "Can an FRP product involve both Gelcoat and Vinyl Ester Resin?", a: "A finished FRP product can have separate surface and laminate requirements. The complete build-up should be reviewed for the actual application rather than assuming one material performs every role." },
      { q: "What should a buyer share before asking for a quote?", a: "Share the component, whether the enquiry concerns the visible surface or the laminate, the intended exposure, process, quantity and delivery location." },
    ],
    sections: [
      { heading: "Different decisions in one FRP product", body: ["Gelcoat Resin and Vinyl Ester Resin are not interchangeable names for the same product. A gelcoat is selected for the mould-facing surface and finish of an FRP part. Vinyl Ester Resin is considered where the laminate or lining has a service requirement that needs its separate chemical-resistance positioning.", "A buyer should therefore separate two questions: what visible surface is required, and what will the finished component face in service? The answer to one does not automatically settle the other."] },
      { heading: "When to review GP Gelcoat Resin", body: ["Review GP Gelcoat Resin where the requirement is a white, high-gloss polyester surface coating for the mould face of an FRP product. Its published product data describes a surface-coating gelcoat with thixotropic behaviour for mould-facing application. Confirm the specific TDS, colour requirement and application method before production."] },
      { heading: "When to review Vinyl Ester Resin", body: ["Review Vinyl Ester Resin when the finished laminate, lining or service environment may need the product's chemical-resistance positioning. Chemical, concentration, temperature, exposure duration and construction details can change the selection. A broad material category is not a substitute for checking the actual application against the product data."] },
      { heading: "A practical enquiry checklist", body: ["Describe the FRP component, the visible-finish requirement, the laminate construction or reinforcement, the intended exposure, process, quantity and delivery location. This keeps a surface-finish discussion distinct from a chemical-service discussion and gives the supplier the facts needed for a useful technical conversation."] },
    ],
  },
  {
    slug: "gelcoat-resin-vs-epoxy-resin",
    title: "Gelcoat Resin vs Epoxy Resin for FRP Products",
    description: "A general decision guide to the different mould-surface and structural roles of Gelcoat Resin and epoxy systems in FRP products.",
    category: "Comparison Guide",
    icon: "layers",
    readingTime: "4 min read",
    publishDate: "2026-08-06",
    seo: {
      title: "Gelcoat Resin vs Epoxy Resin for FRP Products",
      keywords: ["Gelcoat Resin vs Epoxy Resin", "Gelcoat vs Epoxy", "FRP surface finish resin", "Gelcoat Resin for moulded FRP products"],
      ogTitle: "Gelcoat Resin vs Epoxy Resin",
      ogDescription: "A general guide to separating an FRP surface-finish requirement from an epoxy-system requirement.",
    },
    quickFacts: {
      "Gelcoat role": "Mould-facing polyester surface coating",
      "Epoxy role": "A separate resin-system category whose grade and application need separate evaluation",
      "Do not assume": "One material can be substituted for the other without checking the full build-up",
      "First check": "The component, process, surface requirement and service conditions",
    },
    relatedSlugs: ["what-is-gel-coat-resin", "gp-resin-vs-gelcoat-resin", "how-to-select-polyester-resin-for-frp-manufacturing"],
    recommendedLinks: [
      { href: "/products/gp-gelcoat-resin/", label: "View GP Gelcoat Resin", description: "Review the published surface-coating product and TDS." },
      { href: "/products/epoxy-clear-casting-resin/", label: "View Epoxy Clear Casting Resin", description: "Review the site's separate epoxy product information where applicable." },
      { href: "/resources/how-to-select-polyester-resin-for-frp-manufacturing/", label: "Resin selection guide", description: "Start with the process and component requirement." },
    ],
    faqs: [
      { q: "Is Gelcoat Resin the same as epoxy resin?", a: "No. GP Gelcoat Resin is published as a polyester surface-coating gelcoat. Epoxy is a separate resin-system category; the correct choice depends on the full application and product data." },
      { q: "Can I choose only by the words gelcoat or epoxy?", a: "No. Confirm the component, moulding process, visible surface requirement and the specific service conditions before selecting a product." },
      { q: "Does this comparison approve a particular substitution?", a: "No. This is general decision support, not a compatibility or performance approval. Confirm a proposed build-up with the relevant technical data and application discussion." },
    ],
    sections: [
      { heading: "Start with the role, not the material name", body: ["The useful first question is whether the buyer needs a mould-facing surface finish, a structural laminate, a casting system, an adhesive function or another specific role. GP Gelcoat Resin is published for the surface-coating role in FRP moulding; epoxy systems are a separate category with their own grade-specific uses.", "Treating broad material names as direct substitutes can obscure the actual requirement. The component and production method should lead the selection discussion."] },
      { heading: "Where Gelcoat Resin fits", body: ["Gelcoat is applied to the mould face before the reinforcement and laminate are built up behind it. The published GP Gelcoat Resin is a white, high-gloss polyester surface coating for this mould-facing role. It is not presented as a reinforced structural laminate resin."] },
      { heading: "Where an epoxy discussion may be relevant", body: ["An epoxy-system discussion may be relevant when an application specifically calls for an epoxy grade or a different resin-system approach. The correct grade, cure method, reinforcement, surface preparation and service environment need to be verified for that individual application; no general comparison can confirm suitability."] },
      { heading: "How to make the comparison useful", body: ["Bring the drawing or component description, moulding method, required finish, reinforcement or substrate, exposure conditions and expected quantity to the discussion. Review the relevant TDS rather than transferring a process assumption from one resin system to another."] },
    ],
  },
  {
    slug: "applications-of-gelcoat-resin-in-frp-manufacturing",
    title: "Applications of Gelcoat Resin in FRP Manufacturing",
    description: "See where Gelcoat Resin is used for the mould-facing surface and finish of FRP products, and what buyers should confirm before selection.",
    category: "Application Guide",
    icon: "grid",
    readingTime: "5 min read",
    publishDate: "2026-08-06",
    seo: {
      title: "Applications of Gelcoat Resin in FRP Manufacturing",
      keywords: ["Gelcoat Resin applications", "Gelcoat for FRP", "Gelcoat for moulded FRP products", "FRP surface finish resin", "GP Gelcoat Resin"],
      ogTitle: "Applications of Gelcoat Resin in FRP Manufacturing",
      ogDescription: "A B2B guide to common Gelcoat Resin applications in FRP moulded products and the information needed before selection.",
    },
    quickFacts: {
      "Used for": "The visible, mould-facing surface of an FRP product",
      "Applied before": "The glass-fibre laminate is built up behind it",
      "Published GP finish": "White and high gloss, as supplied",
      "Confirm before use": "Component, colour, moulding method and service requirement",
    },
    relatedSlugs: ["what-is-gel-coat-resin", "how-to-choose-gelcoat-resin-for-frp-products", "gelcoat-resin-problems-peeling-cracking-tackiness"],
    recommendedLinks: [
      { href: "/products/gp-gelcoat-resin/", label: "View GP Gelcoat Resin", description: "Review published product details, TDS, MOQ and pack sizes." },
      { href: "/applications/gelcoat-for-general-frp-mould-finishing/", label: "General FRP mould finishing", description: "Explore an existing gelcoat application page." },
      { href: "/applications/gelcoat-for-frp-bathware-sanitaryware/", label: "Bathware and sanitaryware", description: "Explore an existing moulded-FRP application page." },
    ],
    faqs: [
      { q: "Is Gelcoat Resin used as the structural part of an FRP product?", a: "No. Gelcoat is the mould-facing surface coating. The structural laminate is built behind it using the appropriate reinforcement and laminate resin system." },
      { q: "Which FRP products can use gelcoat?", a: "The site documents boat and marine hull finishing, bathware and sanitaryware, water-tank exteriors, general FRP mould finishing and automotive body panels. Suitability still depends on the specific component and service requirement." },
      { q: "Can the same Gelcoat Resin be assumed suitable for every application?", a: "No. Confirm the product's TDS and the actual moulding, finish, colour and service conditions before specifying a grade." },
    ],
    sections: [
      { heading: "The surface-finish role in FRP manufacturing", body: ["Gelcoat Resin is used at the mould-facing stage of an FRP build-up. It is applied to the mould first, then the reinforcement and structural laminate are built behind it. This arrangement gives the finished component its visible surface while allowing the laminate system to be selected for its separate role."] },
      { heading: "Published Gelcoat application areas", subsections: [
        { heading: "Boat and marine hull finishing", body: "For moulded boat and marine components where the surface-finish requirement should be assessed alongside the laminate and intended service." },
        { heading: "Bathware, sanitaryware and moulded components", body: "For FRP bathware, sanitaryware, furniture, panels and other moulded products where the visible surface is part of the finished-component requirement." },
        { heading: "Water-tank exteriors and automotive body panels", body: "For exterior or visible FRP surfaces where the exact service conditions, colour and finish requirement should be confirmed before selection." },
      ] },
      { heading: "What to confirm before procurement", body: ["Specify the FRP component, moulding method, colour or finish requirement, surface exposure, compatible laminate plan, quantity and delivery location. This gives the supplier enough context to distinguish a surface-finish requirement from the structural laminate requirement."] },
      { heading: "Use the product TDS as the final check", body: ["The published GP Gelcoat Resin TDS should be reviewed for the specific grade. Do not infer unlisted outdoor, chemical, water-immersion or certification performance from a general application category."] },
    ],
  },
  {
    slug: "how-to-choose-gelcoat-resin-for-frp-products",
    title: "How to Choose Gelcoat Resin for FRP Products",
    description: "A procurement guide for separating the FRP surface-finish requirement from the laminate requirement before selecting Gelcoat Resin.",
    category: "Buyer Guide",
    icon: "checklist",
    readingTime: "5 min read",
    publishDate: "2026-08-06",
    seo: {
      title: "How to Choose Gelcoat Resin for FRP Products",
      keywords: ["How to choose Gelcoat Resin", "Gelcoat Resin buying guide", "Gelcoat for FRP products", "GP Gelcoat Resin supplier", "FRP surface finish resin"],
      ogTitle: "How to Choose Gelcoat Resin for FRP Products",
      ogDescription: "A practical guide for FRP buyers choosing a Gelcoat Resin based on finish, process, laminate and service requirements.",
    },
    quickFacts: {
      "First decision": "Confirm that the requirement is the mould-facing surface, not the structural laminate",
      "Product data": "Review the exact grade's TDS before use",
      "Quote inputs": "Component, process, finish, quantity and delivery location",
      "Avoid": "Assuming one gelcoat fits every exposure or production method",
    },
    relatedSlugs: ["what-is-gel-coat-resin", "applications-of-gelcoat-resin-in-frp-manufacturing", "gelcoat-resin-vs-vinyl-ester-resin"],
    recommendedLinks: [
      { href: "/products/gp-gelcoat-resin/", label: "View GP Gelcoat Resin", description: "Review the product's published TDS, packaging and MOQ." },
      { href: "/resources/gp-resin-vs-gelcoat-resin/", label: "GP Resin vs Gelcoat Resin", description: "Separate the laminate role from the surface-coating role." },
      { href: "/contact/", label: "Discuss a Gelcoat Resin application", description: "Share the component and process before requesting a quote." },
    ],
    faqs: [
      { q: "What is the first question when choosing Gelcoat Resin?", a: "Confirm that the need is for the mould-facing surface finish, rather than the structural laminate built behind it." },
      { q: "What should be checked on the TDS?", a: "Check the specific grade's published resin type, cure system, application-relevant properties, packaging and other stated information. Do not assume data from another product applies." },
      { q: "What details help a supplier discuss the right product?", a: "The component, moulding method, required finish or colour, expected exposure, laminate plan, quantity and delivery location." },
    ],
    sections: [
      { heading: "Confirm the role in the FRP build-up", body: ["A Gelcoat Resin selection starts by confirming that the buyer needs the visible mould-facing surface of an FRP part. If the need is to wet out reinforcement and build structural thickness, that is a different laminate-resin discussion."] },
      { heading: "Match the discussion to the finished component", body: ["Document the component and its intended use. A boat component, bathware item, water-tank exterior, automotive panel and general moulding can all have different finish, process and service questions. The product category alone cannot resolve them."] },
      { heading: "Review process and finish requirements", body: ["Confirm the moulding method, whether the product needs a white or coloured finish, and the practical application method. GP Gelcoat Resin is published as a white, high-gloss polyester surface coating; colour and process decisions should be discussed against the actual production setup and TDS."] },
      { heading: "Keep the laminate requirement separate", body: ["A finished FRP product may require both a surface coating and a structural laminate. Where chemical, water-immersion or other demanding service is involved, describe it accurately and confirm the full build-up rather than assuming a gelcoat alone addresses it."] },
      { heading: "Prepare a quote-ready brief", body: ["Share the component, process, finish or colour, exposure, quantity and delivery location. Include the current resin or moulding issue if the enquiry follows a trial. This makes the quote and application discussion more focused without making unsupported performance assumptions."] },
    ],
  },
  {
    slug: "gelcoat-resin-problems-peeling-cracking-tackiness",
    title: "Gelcoat Problems: Peeling, Cracking and Tackiness",
    description: "A practical, safety-conscious framework for recording Gelcoat Resin peeling, cracking or tackiness concerns before a technical discussion.",
    category: "Troubleshooting Guide",
    icon: "info",
    readingTime: "5 min read",
    publishDate: "2026-08-06",
    seo: {
      title: "Gelcoat Problems: Peeling, Cracking and Tackiness",
      keywords: ["Gelcoat peeling", "Gelcoat cracking", "Gelcoat tackiness", "Gelcoat Resin troubleshooting", "FRP surface finish problems"],
      ogTitle: "Gelcoat Problems: Peeling, Cracking and Tackiness",
      ogDescription: "Record a Gelcoat Resin concern, review the product data and prepare the facts for a controlled technical discussion.",
    },
    quickFacts: {
      "First step": "Record the visible issue and the actual process facts",
      "Do not assume": "A single visible defect proves one root cause or a material fault",
      "Compare against": "The specific product TDS, batch, storage and process records",
      "Keep controlled": "Do not alter catalyst or other inputs by guesswork",
    },
    relatedSlugs: ["what-is-gel-coat-resin", "how-to-store-unsaturated-polyester-resin", "why-polyester-resin-remains-sticky-or-tacky"],
    recommendedLinks: [
      { href: "/products/gp-gelcoat-resin/", label: "View GP Gelcoat Resin", description: "Check the published product data and TDS for the exact grade." },
      { href: "/resources/how-to-store-unsaturated-polyester-resin/", label: "Read storage guidance", description: "Review handling and storage history as part of the record." },
      { href: "/contact/", label: "Discuss a documented concern", description: "Share the batch, process and observed result for a focused discussion." },
    ],
    faqs: [
      { q: "Does peeling prove that the Gelcoat Resin is defective?", a: "No. A visible result can involve mould condition, preparation, material condition, storage, process sequence, cure conditions or the complete FRP build-up. Record facts before drawing a conclusion." },
      { q: "Should a team change catalyst dosage to correct tackiness or cracking?", a: "Do not make unapproved changes by guesswork. Follow the specific product TDS and obtain technical guidance based on the actual process and batch." },
      { q: "What should be shared for a troubleshooting discussion?", a: "Share the product and batch, component, moulding sequence, ambient conditions, storage history, timing, photographs and the observed result." },
    ],
    sections: [
      { heading: "Treat the visible result as a signal", body: ["Peeling, cracking, tackiness or other surface variation should be treated as a signal to investigate, not as proof of one universal cause. An FRP surface depends on the mould, the surface-coating material, the application sequence, cure conditions and the laminate built behind it."] },
      { heading: "Record the concern before changing the process", subsections: [
        { heading: "For peeling or adhesion concerns", body: "Record the mould condition and preparation, application sequence, batch, cure timing, component and photographs. Avoid assuming the visible separation identifies a material cause without the full record." },
        { heading: "For cracking or crazing concerns", body: "Record where and when the result appeared, the component geometry, moulding sequence, laminate build-up, cure history and service context. A surface appearance alone cannot establish the cause." },
        { heading: "For tackiness concerns", body: "Record the gel and cure timing, batch, ambient conditions, storage history and all process inputs. Compare the documented process with the specific TDS rather than copying a catalyst practice from another grade." },
      ] },
      { heading: "Keep corrective actions controlled", body: ["Do not add chemicals or change catalyst, accelerator or process inputs by guesswork. Handling and cure requirements are product-specific. A controlled review of the product data and the actual records is safer and more useful than a generic corrective instruction."] },
      { heading: "Prepare a useful technical discussion", body: ["Share the product and batch, component, moulding method, preparation, process timing, ambient conditions, storage history, photographs and the observed result. This allows the conversation to focus on verifiable facts without offering unsupported repair claims."] },
    ],
  },
  {
    slug: "gelcoat-resin-storage-and-handling-guide",
    title: "Gelcoat Resin Storage and Handling Guide",
    description: "A general guide to documenting Gelcoat Resin storage and handling conditions while following the exact product data and safety instructions.",
    category: "Best Practices",
    icon: "drum",
    readingTime: "4 min read",
    publishDate: "2026-08-06",
    seo: {
      title: "Gelcoat Resin Storage and Handling Guide",
      keywords: ["Gelcoat Resin storage", "Gelcoat handling", "Gelcoat Resin shelf life", "GP Gelcoat Resin storage", "polyester gelcoat handling"],
      ogTitle: "Gelcoat Resin Storage and Handling Guide",
      ogDescription: "General storage and handling checks for Gelcoat Resin, with the exact product TDS and safety instructions as the controlling reference.",
    },
    quickFacts: {
      "Controlling reference": "The exact product TDS and applicable safety instructions",
      "Do not assume": "A universal storage temperature or shelf life for every gelcoat grade",
      "Document": "Batch, receipt date, storage history and container condition",
      "Separate": "Resin and catalyst handling in line with approved safety procedures",
    },
    relatedSlugs: ["how-to-store-unsaturated-polyester-resin", "gelcoat-resin-problems-peeling-cracking-tackiness", "what-is-gel-coat-resin"],
    recommendedLinks: [
      { href: "/products/gp-gelcoat-resin/", label: "View GP Gelcoat Resin", description: "Review its published product details and TDS." },
      { href: "/resources/how-to-store-unsaturated-polyester-resin/", label: "Polyester resin storage guide", description: "Read the existing general storage resource." },
      { href: "/contact/", label: "Discuss a product-specific question", description: "Share the product, batch and storage history for a focused discussion." },
    ],
    faqs: [
      { q: "What storage temperature should I use for Gelcoat Resin?", a: "Do not assume a universal number. Follow the exact product TDS and applicable safety instructions for the specific grade and batch." },
      { q: "How should a buyer track Gelcoat Resin stock?", a: "Record the product, batch, receipt date, stated shelf life, container condition and storage history, then rotate stock in line with the supplier's documented guidance." },
      { q: "Can storage history matter during troubleshooting?", a: "Yes. Storage history is useful context when a process result differs from normal. Record it alongside the product data and production conditions before drawing conclusions." },
    ],
    sections: [
      { heading: "Use the specific product information", body: ["Gelcoat grades are not interchangeable storage profiles. The product TDS and applicable safety instructions for the exact grade are the controlling references for storage, handling and shelf-life decisions. Do not apply a temperature, shelf life or catalyst procedure from another resin simply because both are polyester products."] },
      { heading: "Maintain a simple receiving record", body: ["At receipt, record the product name, batch, date, stated shelf life, container condition and storage location. For production teams holding more than one batch, this creates a traceable record that can support stock rotation and later technical discussion."] },
      { heading: "Protect product condition through controlled handling", body: ["Keep containers managed in line with the product instructions, prevent contamination and preserve batch identification. Handling of resin, catalyst and any other process materials must follow the approved product and safety procedure; do not infer a mixing or storage practice from this general guide."] },
      { heading: "Use storage history when reviewing a concern", body: ["If a process result changes, include the storage record with the batch, component, process sequence and ambient conditions. This helps a technical discussion focus on facts, while avoiding unsupported conclusions about the root cause."] },
    ],
  },
  {
    slug: "common-lamination-defects-in-frp",
    title: "Common Lamination Defects in FRP: Buyer and Process Checks",
    description: "A safety-conscious guide to documenting common FRP lamination concerns and preparing a useful technical discussion.",
    category: "Troubleshooting Guide",
    icon: "info",
    readingTime: "4 min read",
    publishDate: "2026-08-06",
    seo: {
      title: "Common Lamination Defects in FRP | Buyer and Process Checks",
      keywords: ["FRP lamination defects", "Lamination Resin troubleshooting", "LR Resin troubleshooting", "FRP lamination problems", "polyester resin process checks"],
      ogTitle: "Common Lamination Defects in FRP",
      ogDescription: "Document a lamination concern, review the product TDS and prepare the right information for a focused technical discussion.",
    },
    quickFacts: {
      "First response": "Pause and record the product, batch, process and observed result",
      "Do not assume": "A visible defect identifies the root cause or the resin grade at fault",
      "Check against": "The specific product TDS, storage history and process records",
      "Avoid": "Unapproved changes to catalyst, accelerator or process inputs",
    },
    relatedSlugs: ["what-is-lamination-resin", "understanding-gel-time-in-polyester-resin", "why-polyester-resin-remains-sticky-or-tacky"],
    recommendedLinks: [
      { href: "/products/lamination-resin/", label: "View Lamination Resin", description: "Review the published TDS and process-relevant product details." },
      { href: "/resources/why-polyester-resin-remains-sticky-or-tacky/", label: "Read the tacky-resin guide", description: "Review a specific existing troubleshooting resource." },
      { href: "/resources/how-to-store-unsaturated-polyester-resin/", label: "Read storage guidance", description: "Compare storage history with the product information." },
    ],
    faqs: [
      { q: "Does a visible FRP lamination defect prove the resin is defective?", a: "No. A visible concern can involve material condition, storage, process, ambient conditions, reinforcement, substrate or surface preparation. Record the facts before drawing a conclusion." },
      { q: "Should the production team change catalyst dosage to correct a defect?", a: "Do not make unapproved changes by guesswork. Follow the specific product TDS and obtain technical guidance for the actual process and batch." },
      { q: "What information should be shared for troubleshooting?", a: "Share the product and batch, process, substrate or reinforcement, ambient conditions, storage history, timing, photographs and the observed result." },
    ],
    sections: [
      { heading: "Treat the visible result as a signal", body: ["Surface variation, incomplete wet-out, a tacky result, air-related marks or timing variation can all be treated as process signals. A visible result alone does not identify a root cause, prove that a material is at fault or establish that one universal corrective action is appropriate."] },
      { heading: "Build a useful troubleshooting record", body: ["Before changing the process, record the product name and batch, the component, substrate or reinforcement, process sequence, ambient conditions, storage history, timing and photographs. Compare these details with the applicable product TDS and the normal line conditions."] },
      { heading: "Keep changes controlled", body: ["Do not add chemicals or change catalyst or accelerator inputs by guesswork. The cure system and safe handling requirements are product-specific. A controlled discussion based on the product data and the actual process is more useful than a generic fix."] },
      { heading: "When to contact the supplier", body: ["Contact the supplier when the documented process differs from the normal result, a batch or storage concern needs review, or the finished-component requirement is unclear. Include the records above so the application can be discussed without unsupported assumptions."] },
    ],
  },
];
