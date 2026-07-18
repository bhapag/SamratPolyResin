// ============================================================================
//  KNOWLEDGE CENTRE — technical resource articles
// ============================================================================
//
//  This is a structured technical resource centre, not a blog. Each entry
//  below defines one article's metadata and its section outline (the
//  `sections` array becomes the Table of Contents and the H2 headings on
//  the article page). Section bodies are intentionally left as a
//  placeholder note until real technical content is written — no invented
//  facts, figures or specs are used as filler.
//
//  Fields:
//    slug          unique url-friendly id
//    title         article title (used as the page H1)
//    description   one-sentence summary, shown on the resource card and
//                  used as the page meta description
//    icon          one of: info, grid, checklist, layers, shield, tank,
//                  roof, door, clock, drum (see ResourceIcon.astro)
//    category      short label shown on cards and in the article hero
//                  (e.g. "Product Guide", "Application Guide")
//    readingTime   fallback only — the article template calculates actual
//                  reading time from content via getReadingTime() below.
//                  Kept for the resource-card grid, which shows it without
//                  loading full section content.
//    publishDate   ISO date string, shown on the article page and used in
//                  the Schema.org Article JSON-LD
//    sections      ordered list of section headings for the article body
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
        imagePlaceholder: { type: "factory", label: "Factory photograph — coming soon" },
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
        imagePlaceholder: { type: "product", label: "Product photograph — coming soon" },
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
        imagePlaceholder: { type: "process", label: "Manufacturing process photograph — coming soon" },
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
    sections: [
      "Overview of GP Polyester Resin Applications",
      "FRP Manufacturing and Moulding",
      "Construction and Building Products",
      "Marine and Industrial Fabrication",
      "Selecting the Right Application-Specific Grade",
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
    sections: [
      "Understanding FRP Manufacturing Processes",
      "Resin Viscosity and Wet-Out Considerations",
      "Gel Time and Cure Requirements",
      "Matching Resin Type to Moulding Method",
      "Common Selection Mistakes to Avoid",
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
    sections: [
      "What Is Gel Coat Resin?",
      "How Gel Coat Differs From Laminating Resin",
      "Surface Finish and Protective Properties",
      "Application Methods and Best Practices",
      "Common Uses in Composite Manufacturing",
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
    sections: [
      "What Makes a Resin Fire Retardant?",
      "Flammability Ratings and Standards",
      "Industries That Require Fire Retardant Resin",
      "Halogenated vs Halogen-Free Formulations",
      "Key Benefits for Industrial Buyers",
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
    sections: [
      "Why FRP Is Used for Water Storage Tanks",
      "Resin Properties That Matter for Tank Manufacturing",
      "Manufacturing Process Overview",
      "Durability and Chemical Resistance",
      "Maintenance and Service Life Considerations",
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
    sections: [
      "Role of Resin in FRP Roofing Sheets",
      "Weather and UV Resistance Requirements",
      "Strength and Load-Bearing Performance",
      "Translucent and Roof Light Sheet Applications",
      "Manufacturing Considerations for Roofing Grades",
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
    sections: [
      "What Are FRP Door Skins?",
      "Why Manufacturers Choose Polyester Resin",
      "Strength-to-Weight Considerations",
      "Surface Finish and Moulding Detail",
      "Durability in Interior and Exterior Use",
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
    sections: [
      "What Is Gel Time?",
      "Factors That Influence Gel Time",
      "Gel Time and Production Scheduling",
      "Adjusting Gel Time With Catalyst Ratio",
      "Common Gel Time Issues and Causes",
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
    sections: [
      "Recommended Storage Conditions",
      "Shelf Life and Temperature Sensitivity",
      "Handling Precautions",
      "Signs of Resin Degradation",
      "Stock Rotation Best Practices",
    ],
  },
];
