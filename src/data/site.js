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

  // Sitewide product catalogue PDF — single source of truth for every
  // "Download Product Catalogue" link across the site (product pages,
  // Resources/Knowledge Centre, Contact page, footer). Swapping the file
  // later only means updating `url` (and `sizeLabel`) here once.
  catalogue: {
    url: "/downloads/samrat-poly-resins-product-catalogue.pdf",
    title: "Samrat Poly Resins Product Catalogue",
    description: "Complete industrial product catalogue covering polyester resins, epoxy systems, gelcoats, catalysts, glass fiber, pigments and FRP composite raw materials.",
    sizeLabel: "1.1 MB",
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
