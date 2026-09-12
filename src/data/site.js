// ============================================================================
//  SITE SETTINGS  —  swap these placeholders for the real details
// ============================================================================
//
//  whatsapp: digits only, with country code, NO "+" or spaces.
//            India example: 919876543210
//  formEndpoint: paste your Web3Forms access key here (see CONTACT SETUP
//                in README). Until then the form runs in "demo" mode.
// ============================================================================

export const site = {
  name: "Samrat Poly Resins",
  tagline: "Coating & Composite Resins, Manufactured in Punjab",
  established: "2017",

  // Production domain — used for canonical/OG URLs and the sitemap.
  //
  // NOTE (engineering audit, 2026-07-19): this was previously set to
  // "https://samratpolyresins.com", but that domain currently returns a
  // robots.txt disallow to crawlers and is not the live site — samratpolyresins.in
  // is what's actually deployed and indexed today. Pointing canonical/OG tags at
  // a domain search engines can't crawl actively suppresses indexing of the
  // real pages. Set to the live .in domain until the .com migration (see
  // README → Deploy) is actually complete and crawlable, then switch this back.
  url: "https://samratpolyresins.in",

  // Default social-share image (absolute path resolved against `url` above).
  // 1200x630 share image composited from real factory/QC photography — see
  // scripts/build-og-image.mjs (re-run it if those source photos change).
  ogImage: "/og-image.jpg",

  // Single source of truth for every "Product Range" call-to-action across
  // the site (product pages, category hubs, Resources/Knowledge Centre,
  // Technical Documents, Contact page, footer). Changing the destination
  // later only means updating `url` and `title` here once.
  catalogue: {
    // The 2026-08 catalogue PDF was withdrawn on 2026-09-13: it still advertised
    // UV Resin (removed from the range), described PET Resin as thermoplastic
    // polyethylene terephthalate chips for bottles and packaging, and printed
    // "26 CHEMIST-VERIFIED PRODUCT GRADES" against a range that is now 33.
    // Every former catalogue call-to-action now points at the live product
    // range, which is always current. A replacement catalogue is separate work.
    url: "/products/",
    title: "Samrat Poly Resins Product Range",
    description: "The full published Samrat Poly Resins range — polyester resins, isophthalic grades, gelcoats, epoxy systems, hardeners and FRP allied materials.",
  },

  // --- CONTACT (swap these) ---
  phones: [
    { display: "+91 74638 81652", dial: "+917463881652" },
    { display: "+91 74638 81005", dial: "+917463881005" },
  ],
  whatsapp: "917463881005",            // digits only, country code, no +
  email: "info@samratpolyresins.in",

  address: {
    line1: "Oswal Road, Near GT Road",
    line2: "Doraha, Ludhiana",
    state: "Punjab, India",
    pin: "141421",
  },

  proprietor: "Jaspal Singh",
  gst: "03ALBPS3446G1ZB",

  // The official brand name is "Samrat Poly Resins" — used verbatim in the
  // Google Business Profile (verified 9 Sept 2026), the GST registration and
  // every page of this site. `alternateNames` lists spellings people actually
  // use, for WebSite schema only. It deliberately does NOT include the bare
  // word "Samrat": that is a common Indian given name and title with almost
  // entirely unrelated search intent, and claiming it as an alternate name for
  // this business would be both untrue and useless.
  alternateNames: ["Samrat Poly Resin", "Samrat Polyresins"],

  // The one certification the repository actually holds evidence for:
  // public/certificates/iso-9001-2015-certificate-current.jpg, linked from the
  // About page. The issuing body and certificate number are not readable from
  // the repository, so neither is claimed anywhere.
  certification: {
    name: "ISO 9001:2015",
    about: "Quality Management System",
    url: "/certificates/iso-9001-2015-certificate-current.jpg",
  },

  // --- sameAs: DELIBERATELY EMPTY -------------------------------------------
  //
  // `sameAs` tells Google which other web presences are the SAME entity. A
  // wrong or dead entry actively confuses the entity it is meant to clarify,
  // so nothing goes in here that has not been verified as (a) owned by this
  // business and (b) currently active.
  //
  // Audited 9 Sept 2026 — nothing qualified yet:
  //   - No social or directory profile is referenced anywhere in this
  //     repository, so there was nothing to verify against.
  //   - A verified Google Business Profile EXISTS ("Samrat Poly Resins",
  //     Oswal Road, Grand Trunk Road, Doraha, Punjab 141421). Its public Maps
  //     URL could not be read reliably from the Business Profile Manager, and
  //     guessing a place URL is exactly the kind of invention this comment
  //     exists to prevent. Paste the real "Share → Copy link" URL here.
  //   - www.samratpolyresins.com is unquestionably the same business (same GST
  //     03ALBPS3446G1ZB, same proprietor, same address). It is NOT listed here
  //     on purpose: the relationship between the two domains is an open
  //     business question, and asserting an entity link between them is the
  //     owner's decision to make, not a technical one.
  //
  // To populate: add full https URLs, one per profile, e.g. the Google Maps
  // share link, a company LinkedIn page, an official Facebook page.
  sameAs: [],

  // Google Maps embed query (place name or address). URL-encode spaces as +.
  mapsQuery: "Samrat+Poly+Resins+Doraha+Ludhiana",

  // States/regions the homepage claims to currently supply, plus export
  // markets. Single source of truth — both "Why Choose Us" and "Industries
  // We Serve" read from this array so they can't drift apart again.
  statesServed: ["Punjab", "Haryana", "Delhi", "Uttar Pradesh", "West Bengal", "Bihar", "Jharkhand", "Odisha", "Assam", "Andhra Pradesh", "Export Nepal", "Export Bangladesh"],

  // Standard packaging sizes as they actually appear across the catalog in
  // products.js (some grades ship in 200 kg drums, some 225 kg, PET resin in
  // 75 kg packs) — used wherever the site describes packaging in general
  // terms, instead of hardcoding one figure that contradicts the product
  // pages next to it.
  packagingRange: "200–225 kg",

  // Single label used everywhere a product price would otherwise show, so
  // the wording can't drift between the product grid, product pages and
  // related-product lists. `products.js` still stores each product's actual
  // last-known price for internal reference — it's just not rendered
  // publicly right now under the "Price on Request" strategy.
  priceLabel: "Price on Request",

  // --- ENQUIRY FORM ---
  // Get a free access key at https://web3forms.com (takes 1 minute).
  // Paste it here. Submissions then land in the owner's email inbox.
  formEndpoint: "57365b8e-fc31-4eec-ad7c-abfa5e563fb2",  // e.g. "a1b2c3d4-....." — leave "" for demo mode
};

// Shared canonical-URL builder — used by Base.astro (canonical link + og:url)
// and by any page that needs the same absolute URL for structured data.
export function buildCanonicalUrl(pathname) {
  return new URL(pathname, site.url).toString();
}

// ============================================================================
//  BRAND / ENTITY IDENTITY
// ============================================================================
//
//  One entity node, one @id, referenced from everywhere. Before this existed,
//  Base.astro and contact.astro each hand-built their own Organization and
//  LocalBusiness objects, which is exactly how the name, address or phone on
//  one page drifts away from another.
//
//  Search Console, 1 Aug – 6 Sept 2026, tells us what this is for. Only two
//  branded queries exist at all: `samrat poly resins` (136 impressions,
//  12 clicks, average position 2.4) and `samrat plastic` (1 impression).
//  Position 2.4 on the company's OWN name means something outranks the
//  official site for it. Entity clarity is the lever we actually control.
// ============================================================================

/** The single canonical identifier for the business across every page. */
export const ORGANIZATION_ID = `${site.url}/#organization`;
export const WEBSITE_ID = `${site.url}/#website`;

/**
 * Every field below is verifiable from this repository or from the published
 * About page. Deliberately absent, because nothing here verifies them:
 *   - numberOfEmployees, annual revenue, production capacity
 *   - opening hours and geo coordinates (see contact.astro)
 *   - awards, customer logos, testimonials
 *   - the ISO certificate's issuing body and certificate number, which are
 *     not readable from the repository — only the certification itself is
 *     claimed, with a link to the published certificate image.
 */
export function buildOrganizationSchema({ logoUrl, knowsAbout = [] } = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: site.name,
    url: site.url,
    slogan: site.tagline,
    description: `${site.name} is a ${site.address.state.replace(', India', '')}-based manufacturer of GP polyester, gelcoat, fire-retardant and specialty polyester resins, and supplier of epoxy systems, hardeners and FRP materials, serving FRP and composite manufacturers across India from ${site.address.line2}. Established ${site.established}.`,
    ...(logoUrl ? { logo: logoUrl, image: logoUrl } : {}),
    telephone: site.phones.map((phone) => phone.dial),
    email: site.email,
    foundingDate: site.established,
    founder: { '@type': 'Person', name: site.proprietor },
    // GST identification number — published on the About page and on the
    // business's own invoices, so this is a disclosed business identifier.
    taxID: site.gst,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.line1,
      addressLocality: 'Doraha, Ludhiana',
      addressRegion: 'Punjab',
      postalCode: site.address.pin,
      addressCountry: 'IN',
    },
    areaServed: site.statesServed
      .filter((s) => !s.startsWith('Export'))
      .map((s) => ({ '@type': 'AdministrativeArea', name: s })),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: site.phones[0].dial,
      email: site.email,
      areaServed: 'IN',
      availableLanguage: ['en', 'hi', 'pa'],
    },
    hasCertification: {
      '@type': 'Certification',
      name: site.certification.name,
      about: site.certification.about,
      url: buildCanonicalUrl(site.certification.url),
    },
    ...(knowsAbout.length ? { knowsAbout } : {}),
    // `sameAs` is intentionally omitted rather than left empty or guessed.
    // See site.sameAs below for why, and what would let it be populated.
    ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
  };
}

/** Names the site itself and ties it to the organisation that publishes it. */
export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: site.name,
    alternateName: site.alternateNames,
    url: site.url,
    inLanguage: 'en-IN',
    publisher: { '@id': ORGANIZATION_ID },
  };
}

// Shared WhatsApp message system — every WhatsApp CTA on the site should
// route through getWhatsAppMessage()/buildWhatsAppLink() rather than
// building its own text, so every message stays short and consistent.
// Four intents only:
//   generic       — no product context (floating button, nav, footer, Contact)
//   product       — a specific product is known ("Enquire"/"WhatsApp" CTAs)
//   quote         — a specific product's "Get/Request Quote" CTA
//   quoteFallback — a "Request Quote" CTA with no specific product
const whatsAppMessageBuilders = {
  generic: () => `Hello, I'd like to discuss a resin requirement.`,
  product: (productName) => `Hello, I'm interested in ${productName}. Please share details.`,
  quote: (productName) => `Hello, I'd like a quote for ${productName}.`,
  quoteFallback: () => `Hello, I'd like to discuss a quotation for resin materials.`,
};

export function getWhatsAppMessage(intent, productName) {
  return whatsAppMessageBuilders[intent](productName);
}

export function buildWhatsAppLink(intent, productName) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(getWhatsAppMessage(intent, productName))}`;
}
