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
  // Falls back to the logo — replace with a dedicated 1200×630 share image
  // when one exists.
  ogImage: "/logo.jpg",

  // --- CONTACT (swap these) ---
  phoneDisplay: "+91 74638 81005",     // shown on the page
  phoneDial: "+917463881005",          // used for the tel: link
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

  // States the homepage claims to currently supply. Single source of truth —
  // both "Why Choose Us" and "Industries We Serve" read from this array so
  // they can't drift apart again.
  //
  // AUDIT FLAG: the two homepage sections previously listed DIFFERENT sets
  // (one included Himachal Pradesh, one didn't) — a factual contradiction on
  // the same page. I could not verify which is correct, so this defaults to
  // the intersection (the 6 states both lists agreed on). Add Himachal
  // Pradesh back in only if it's confirmed as an actual served state.
  statesServed: ["Punjab", "Haryana", "Delhi", "Uttar Pradesh", "Maharashtra", "Andhra Pradesh"],

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

// Shared WhatsApp product-quote link builder — used by every per-product
// WhatsApp CTA (product page's "WhatsApp" and "Request Bulk Quote" buttons)
// so they always send the exact same message format for the exact same product.
export function buildProductQuoteLink(productName) {
  const message = `Hello,

I'm interested in ${productName}.

Please provide a quotation for:

Product: ${productName}
Quantity:

Thank you.`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
