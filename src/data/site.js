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

  // Placeholder production domain (per README) — used for canonical/OG URLs.
  // Update once the real domain is live.
  url: "https://samratpolyresins.com",

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
