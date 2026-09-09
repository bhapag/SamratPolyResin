// Appends the resin glossary to src/data/resources.js.
// Every definition is drawn from terminology already published and verified
// elsewhere on this site. No specification, dosage or performance figure is
// introduced, and no product the catalogue does not sell is named.
// Run once: node scripts/add-glossary.mjs   (idempotent)

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const p = join(root, 'src/data/resources.js');
let s = readFileSync(p, 'utf8').replace(/\r\n/g, '\n');

if (s.includes('slug: "resin-glossary"')) {
  console.log('glossary already present — nothing to do');
  process.exit(0);
}

const entry = `  {
    slug: "resin-glossary",
    title: "Resin & FRP Glossary: Full Forms and Terms Explained",
    description:
      "GP, UPR, LR, MEKP, CSM, FRP and the rest — what each abbreviation stands for and what the term actually means in polyester and epoxy work, in plain language.",
    category: "Reference",
    icon: "info",
    publishDate: "2026-09-09",

    seo: {
      title: "Resin Glossary: GP, UPR, MEKP, FRP and CSM Full Forms",
      keywords: [
        "gp resin full form",
        "upr full form",
        "nc thinner full form",
        "mekp full form",
        "frp full form",
        "csm full form",
        "resin terminology",
        "what is gel time",
        "mek vs mekp",
      ],
      ogTitle: "Resin & FRP Glossary",
      ogDescription:
        "What GP, UPR, LR, MEKP, FRP, CSM and the other abbreviations stand for, and what each term means in practice.",
    },

    quickFacts: {
      "GP": "General Purpose",
      "UPR": "Unsaturated Polyester Resin",
      "LR": "Lamination Resin",
      "FRP": "Fibre-Reinforced Plastic",
      "MEKP": "Methyl Ethyl Ketone Peroxide",
      "CSM": "Chopped Strand Mat",
    },

    sections: [
      {
        heading: "Why this page exists",
        body: [
          "Resin buying runs on abbreviations, and the same material often has three or four names depending on who is talking. A fabricator asking for \\"hardener\\" might mean the peroxide catalyst or the accelerator; \\"thinner\\" could mean an NC blend or a general-purpose solvent; and GP, UPR and LR are all polyester resins with different jobs. Ordering the wrong one costs a batch.",
          "This glossary defines the terms as they are used across this site and its product documentation. Where a term has a genuine ambiguity in the trade, that ambiguity is stated rather than smoothed over. Nothing here replaces a product's own technical data sheet — for any figure that matters to your process, the TDS for the actual grade is the controlling reference.",
        ],
      },
      {
        heading: "Product and material abbreviations",
        definitions: [
          { term: "GP", also: "general purpose", body: "General Purpose. The everyday polyester resin grade that most FRP work starts from, as distinct from a specialist isophthalic, fire-retardant or vinyl ester grade chosen for a particular requirement." },
          { term: "UPR", also: "UP resin, unsaturated polyester", body: "Unsaturated Polyester Resin. The thermosetting resin family used across FRP and composite manufacturing. It is supplied as a liquid already dissolved in styrene, and cures at room temperature once a peroxide catalyst and accelerator are added." },
          { term: "LR", also: "lamination resin", body: "Lamination Resin. On this site, the transparent orthophthalic polyester grade positioned for door lamination, plywood lamination and FRP bonding — a narrower role than a general-purpose GP grade." },
          { term: "FRP", also: "fiberglass, GRP", body: "Fibre-Reinforced Plastic. A composite made by wetting out glass reinforcement with a liquid resin and curing the two into a single structural laminate. Sometimes written GRP (glass-reinforced plastic)." },
          { term: "CSM", also: "chopped strand mat", body: "Chopped Strand Mat. A non-woven glass reinforcement mat made from chopped strands held together with a binder. Sold by area weight — this catalogue publishes CSM 300 (300 g/m²) and CSM 450 (450 g/m²)." },
          { term: "E-Glass", body: "The glass type used for the published chopped strand mat. It describes the glass chemistry, not a resin, a gelcoat or a finished-laminate performance level." },
          { term: "MEKP", also: "MEK peroxide, catalyst, hardener", body: "Methyl Ethyl Ketone Peroxide. The organic peroxide catalyst / initiator that starts the curing reaction in polyester, vinyl ester and gelcoat systems. Not the same thing as MEK (methyl ethyl ketone), which is a solvent, not a catalyst." },
          { term: "NC", also: "nitrocellulose", body: "Nitrocellulose. NC thinner is a solvent blend formulated specifically for nitrocellulose lacquer systems — not interchangeable with a general-purpose thinner intended for oil-based paints." },
          { term: "PVA", also: "polyvinyl alcohol", body: "Polyvinyl alcohol release agent. A water-soluble liquid film sprayed or brushed onto a mould, generally as a single-use sacrificial release layer, often over a wax base." },
          { term: "DMC / SMC", body: "Dough Moulding Compound and Sheet Moulding Compound. Two closed-mould compound formats, distinct from open-mould hand lay-up work." },
          { term: "PET Resin (as used in this catalogue)", body: "On this site, PET Resin refers to the polyester putty resin grade, and is listed as PET Resin / Polyester Putty Resin. It is NOT polyethylene terephthalate — the thermoplastic used for beverage bottles and packaging film, which this catalogue does not sell. If you are sourcing bottle-grade PET, this is not the product." },
          { term: "TDS", body: "Technical Data Sheet. The controlling published reference for a product's specifications, packaging and system context. Values on a TDS are typical, not performance guarantees." },
          { term: "SDS", also: "MSDS", body: "Safety Data Sheet. The controlling reference for handling, storage, PPE and emergency guidance. Always read the current SDS for the actual material before use." },
          { term: "MOQ", body: "Minimum order quantity. Published per product where it exists — for example 25 kg for MEKP Hardener, 100 kg for FRP Polyester Pigment and 500 kg for Glass Fiber Mat." },
          { term: "VOC", body: "Volatile Organic Compound. Styrene is volatile and evaporates during open processing before the resin cures, which is why some resin systems are formulated as low-styrene or low-VOC." },
        ],
      },
      {
        heading: "The four material roles in a cure system",
        body: [
          "Most ordering confusion in this trade comes from one word — \\"hardener\\" — being used for two different products that do two different jobs. These four roles are distinct and not interchangeable.",
        ],
        definitions: [
          { term: "Resin", body: "The base liquid that binds everything together and becomes the matrix of the finished laminate. GP, UPR, LR, vinyl ester and gelcoat are all resins with different roles." },
          { term: "Catalyst / initiator", also: "hardener", body: "The organic peroxide — MEKP in polyester work — that decomposes to generate the free radicals which start cross-linking. Strictly it is an initiator, since it is consumed by the reaction, but \\"catalyst\\" and \\"hardener\\" are both standard shop-floor terms for it." },
          { term: "Accelerator / promoter", body: "Cobalt octoate in most polyester systems. It does not cure resin on its own; it activates the peroxide so the reaction runs fast enough at room temperature to be usable. Ordering only an accelerator, with no peroxide, means the resin will not cure at all." },
          { term: "Reinforcement", body: "Glass fibre, usually chopped strand mat, which carries the mechanical load. A mineral filler is not a substitute for it — see filler below." },
        ],
      },
      {
        heading: "Properties on a technical data sheet",
        definitions: [
          { term: "Gel time", also: "working time", body: "The period between adding catalyst and the point at which the resin stops being a free-flowing liquid and becomes a soft gel. It is the working window in which lay-up must be finished. Governed by catalyst and accelerator dosage, ambient temperature, resin formulation and inhibitor level." },
          { term: "Viscosity", body: "How readily the resin flows, usually published in centipoise (cPs). Lower viscosity generally wets out reinforcement more easily; it is not simply maximised, because viscosity is balanced against cure behaviour and finished properties." },
          { term: "Cure time", body: "The broader period over which a catalysed resin develops its final hardness and properties, after the gel point has passed. Distinct from gel time." },
          { term: "Exotherm", body: "The heat a polyester or epoxy system generates as it cures. Relevant to thick sections and large batches." },
          { term: "Thixotropic", body: "A liquid formulated to resist sagging on a vertical surface while still flowing when worked. Gelcoat is thixotropic so it stays put on a mould face rather than running." },
          { term: "Shelf life", body: "The published storage period for unopened product under the stated conditions — for example 6 months for MEKP Hardener, 12 months for FRP Polyester Pigment and 24 months for Glass Fiber Mat. Always read against the actual TDS and storage conditions." },
        ],
      },
      {
        heading: "Process terms",
        definitions: [
          { term: "Hand lay-up", body: "The manual open-mould process: reinforcement is placed against a mould and resin is worked into it by brush or roller, often in several passes. The working window before gel governs how much can be completed per batch." },
          { term: "Spray-up", body: "An open-mould process in which chopped reinforcement and catalysed resin are deposited together by spray gun, then consolidated by roller." },
          { term: "Wet-out", body: "Resin fully penetrating and surrounding the reinforcement fibres so none are left dry or resin-starved. Incomplete wet-out shows as dry, whitish or matte patches and is a weak point in the finished laminate." },
          { term: "Gelcoat", body: "The thin polyester surface coating applied against the mould face before lamination. It becomes the visible outer surface of the demoulded part. It carries no reinforcement and is not a structural resin." },
          { term: "Release agent", also: "parting wax, mould release", body: "The barrier applied to a mould before gelcoat so the cured part separates cleanly. Paste wax forms a durable buffable film; PVA is a sacrificial single-use film, sometimes used over wax." },
          { term: "Demoulding", body: "Removing the cured part from the mould. A release failure at this stage can damage the part, the mould, or both." },
          { term: "Print-through", body: "The reinforcement pattern behind the gelcoat becoming visible on the finished surface. Applying the laminate before the gelcoat has adequately cured is one contributing factor among several." },
          { term: "Blushing", body: "A cloudy, milky-white haze in a drying nitrocellulose lacquer film, caused by moisture condensing into the film when fast solvent evaporation cools the surface below the dew point. Addressed through application conditions, not treated as a lacquer defect." },
          { term: "Filler", also: "extender", body: "An inert mineral powder such as soapstone blended into a resin, putty or coating to add bulk, adjust working properties or reduce cost. It does not react chemically and does not provide the structural reinforcement that glass fibre does." },
        ],
      },
      {
        heading: "Resin chemistries",
        definitions: [
          { term: "Orthophthalic", also: "ortho", body: "The general-purpose polyester chemistry used for the GP and lamination grades in this catalogue." },
          { term: "Isophthalic", also: "ISO", body: "A polyester chemistry reviewed where a project states a requirement a general-purpose grade does not cover. In this catalogue it appears in the ISO Fire Retardant grade. Note that \\"ISO\\" here means isophthalic, not the ISO 9001 standard." },
          { term: "Vinyl ester", body: "A separate resin family reviewed where a project has a stated chemical- or corrosion-resistance requirement. Suitability must be confirmed against the grade's own published data." },
          { term: "Bisphenol resin", body: "Listed and classified in this catalogue strictly according to its own verified product document. Do not infer its chemistry, properties or applications from the name alone or from another supplier's product of a similar name." },
          { term: "Reactive diluent", body: "A thinning agent that also takes part in the curing reaction rather than evaporating away. Styrene fills this role in unsaturated polyester resin: it lowers viscosity and copolymerises into the cured network." },
          { term: "Thermoset", body: "A material that cures irreversibly into a cross-linked network and cannot be melted and reformed. Polyester and epoxy resins are thermosets; PET bottle resin is a thermoplastic, which can be." },
        ],
      },
    ],

    faqs: [
      { q: "What is the full form of GP resin?", a: "GP stands for General Purpose. GP polyester resin is the everyday unsaturated polyester grade used for most FRP work, as distinct from a specialist isophthalic, fire-retardant or vinyl ester grade." },
      { q: "What is the full form of UPR?", a: "Unsaturated Polyester Resin. It is sometimes written UP resin." },
      { q: "What is the full form of NC thinner?", a: "NC stands for nitrocellulose. NC thinner is a solvent blend formulated specifically for nitrocellulose lacquer systems." },
      { q: "Is MEK the same as MEKP?", a: "No. MEK is methyl ethyl ketone, a solvent. MEKP is methyl ethyl ketone peroxide, the catalyst that initiates polyester cure. They are different materials and are not interchangeable." },
      { q: "What is the difference between a catalyst and an accelerator?", a: "The catalyst (MEKP) starts the curing reaction. The accelerator (cobalt octoate) makes that reaction proceed fast enough at room temperature to be practical. A room-temperature polyester cure normally needs both, unless the resin is supplied pre-accelerated." },
      { q: "Does PET Resin here mean bottle-grade PET?", a: "No. In this catalogue PET Resin refers to the polyester putty resin grade. Polyethylene terephthalate — the thermoplastic used for beverage bottles and packaging film — is a different material and is not sold here." },
    ],

    relatedSlugs: [
      "what-is-gp-polyester-resin",
      "understanding-gel-time-in-polyester-resin",
      "what-is-cobalt-octoate",
      "what-is-glass-fiber-chopped-strand-mat",
    ],

    recommendedLinks: [
      { href: "/tools/resin-selector/", label: "Find the right grade", description: "Answer four questions and see the grades that match." },
      { href: "/products/", label: "Browse all products", description: "31 resin grades and FRP raw materials with published specifications." },
      { href: "/technical-documents/", label: "All TDS & SDS", description: "Download the controlling document for any grade." },
    ],
  },
];
`;

s = s.replace(/\n\];\s*$/, '\n' + entry);
writeFileSync(p, s);
console.log('glossary appended');
