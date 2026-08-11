type Attribution = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  initial_landing_page: string;
  referrer: string;
  first_touch_channel: string;
};

type TrackingDetails = Record<string, string | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const storageKey = 'samrat_lead_attribution_v1';
const maxFieldLength = 240;

const clean = (value: unknown, maxLength = maxFieldLength) => (
  typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
);

const currentPagePath = () => clean(window.location.pathname || '/', 180);

const sanitisedReferrer = () => {
  if (!document.referrer) return '';

  try {
    const referrer = new URL(document.referrer);
    // The site already knows its own navigation. Keep only an external
    // origin/path and strip query strings and fragments from marketing data.
    if (referrer.origin === window.location.origin) return '';
    return clean(`${referrer.origin}${referrer.pathname}`);
  } catch {
    return '';
  }
};

const sourceFrom = (utmSource: string, referrer: string) => {
  if (utmSource) return `utm:${utmSource}`;
  if (!referrer) return 'direct_or_unknown';

  try {
    const hostname = new URL(referrer).hostname.toLowerCase();
    if (hostname.includes('google.')) return 'google_referral';
    if (hostname.includes('indiamart')) return 'indiamart_referral';
  } catch {
    // Keep the generic referral label below if the browser supplied a value
    // that cannot be parsed as a URL.
  }

  return 'referral';
};

const readStoredAttribution = (): Attribution | null => {
  try {
    const raw = window.sessionStorage.getItem(storageKey);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Attribution>;
    if (!parsed.initial_landing_page) return null;

    return {
      utm_source: clean(parsed.utm_source),
      utm_medium: clean(parsed.utm_medium),
      utm_campaign: clean(parsed.utm_campaign),
      utm_content: clean(parsed.utm_content),
      utm_term: clean(parsed.utm_term),
      initial_landing_page: clean(parsed.initial_landing_page, 180),
      referrer: clean(parsed.referrer),
      first_touch_channel: clean(parsed.first_touch_channel),
    };
  } catch {
    return null;
  }
};

const getAttribution = (): Attribution => {
  const stored = readStoredAttribution();
  if (stored) return stored;

  const query = new URLSearchParams(window.location.search);
  const referrer = sanitisedReferrer();
  const attribution: Attribution = {
    utm_source: clean(query.get('utm_source')),
    utm_medium: clean(query.get('utm_medium')),
    utm_campaign: clean(query.get('utm_campaign')),
    utm_content: clean(query.get('utm_content')),
    utm_term: clean(query.get('utm_term')),
    initial_landing_page: currentPagePath(),
    referrer,
    first_touch_channel: '',
  };
  attribution.first_touch_channel = sourceFrom(attribution.utm_source, referrer);

  try {
    // Session storage keeps first-touch context while a buyer researches
    // several pages, without creating a long-lived marketing identifier.
    window.sessionStorage.setItem(storageKey, JSON.stringify(attribution));
  } catch {
    // Attribution still works for the current page when storage is blocked.
  }

  return attribution;
};

const getProductContext = (source?: Element | null): TrackingDetails => {
  const form = source?.closest<HTMLFormElement>('[data-lead-form]');
  const productSlug = clean(form?.dataset.productSlug || document.body.dataset.productSlug);
  const productName = clean(form?.dataset.productName || document.body.dataset.productName);

  return {
    product_slug: productSlug,
    product_name: productName,
    page_context: clean(form?.dataset.pageContext || (productSlug ? 'product' : window.location.pathname.split('/').filter(Boolean)[0] || 'home')),
  };
};

const setHiddenField = (form: HTMLFormElement, name: string, value: string | undefined) => {
  const field = form.querySelector<HTMLInputElement>(`input[name="${name}"]`);
  if (field) field.value = clean(value);
};

const populateForm = (form: HTMLFormElement) => {
  const attribution = getAttribution();
  const context = getProductContext(form);
  const fields: TrackingDetails = {
    ...attribution,
    current_page: currentPagePath(),
    ...context,
  };

  Object.entries(fields).forEach(([name, value]) => setHiddenField(form, name, value));
};

const ctaLocation = (anchor: HTMLAnchorElement) => {
  const explicit = anchor.dataset.ctaLocation || anchor.closest<HTMLElement>('[data-cta-location]')?.dataset.ctaLocation;
  if (explicit) return clean(explicit, 80);

  const locations: Array<[string, string]> = [
    ['.wa-float', 'floating_whatsapp'],
    ['.prod-quote', 'product_quote_panel'],
    ['.prod-cta', 'product_cta'],
    ['.contact-catalogue-note', 'contact_catalogue'],
    ['.contact-info', 'contact_details'],
    ['.hero-cta', 'homepage_hero'],
    ['.contact-teaser', 'homepage_contact_teaser'],
    ['.kc-downloads', 'resource_hub_catalogue'],
    ['.kc-focus-actions', 'resource_hub_focus'],
    ['.site-header', 'header_navigation'],
    ['.site-footer', 'footer'],
  ];

  return locations.find(([selector]) => anchor.closest(selector))?.[1] ?? 'page_content';
};

const trackEvent = (eventName: string, details: TrackingDetails = {}) => {
  const attribution = getAttribution();
  const payload: TrackingDetails = {
    page_path: currentPagePath(),
    initial_landing_page: attribution.initial_landing_page,
    first_touch_channel: attribution.first_touch_channel,
    ...details,
  };

  Object.keys(payload).forEach((key) => {
    if (!payload[key]) delete payload[key];
  });

  // The existing GA4 tag accepts gtag events. The dataLayer fallback keeps
  // the event contract available if a future deployment changes the tag.
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload);
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...payload });
  }
};

const isQuoteRequest = (anchor: HTMLAnchorElement, url: URL) => {
  if (anchor.classList.contains('prod-quote-cta') || url.hash === '#enquire') return true;
  if (url.origin !== window.location.origin || url.pathname !== '/contact/') return false;
  if (anchor.closest('nav')) return false;
  return /quote|enquir|discuss|contact/i.test(anchor.textContent || '');
};

const trackCtaClick = (anchor: HTMLAnchorElement) => {
  const rawHref = anchor.getAttribute('href') || '';
  const baseDetails: TrackingDetails = {
    ...getProductContext(anchor),
    cta_location: ctaLocation(anchor),
    cta_label: clean(anchor.textContent, 100),
  };

  if (rawHref.startsWith('tel:')) {
    trackEvent('phone_click', baseDetails);
    return;
  }

  let url: URL;
  try {
    url = new URL(anchor.href, window.location.href);
  } catch {
    return;
  }

  if (url.hostname === 'wa.me' || url.hostname.endsWith('.wa.me') || url.hostname === 'api.whatsapp.com') {
    trackEvent('whatsapp_click', {
      ...baseDetails,
      cta_intent: isQuoteRequest(anchor, url) ? 'quote_request' : undefined,
    });
    return;
  }

  if (url.pathname === '/downloads/samrat-poly-resins-product-catalogue.pdf') {
    trackEvent('catalogue_download', baseDetails);
    return;
  }

  if (isQuoteRequest(anchor, url)) trackEvent('quote_request_click', baseDetails);
};

let lastProductView = '';
const initialisePage = () => {
  getAttribution();
  document.querySelectorAll<HTMLFormElement>('[data-lead-form]').forEach(populateForm);

  const productSlug = clean(document.body.dataset.productSlug);
  if (productSlug && productSlug !== lastProductView) {
    lastProductView = productSlug;
    trackEvent('product_view', getProductContext());
  }
};

document.addEventListener('click', (event) => {
  const target = event.target as Element | null;
  const anchor = target?.closest<HTMLAnchorElement>('a[href]');
  if (anchor) trackCtaClick(anchor);
});

document.addEventListener('samrat:prepare-lead-form', (event) => {
  const form = (event as CustomEvent<{ form?: HTMLFormElement }>).detail?.form;
  if (form) populateForm(form);
});

document.addEventListener('samrat:lead-submitted', (event) => {
  const form = (event as CustomEvent<{ form?: HTMLFormElement }>).detail?.form;
  if (form) trackEvent('enquiry_form_submit', { ...getProductContext(form), cta_location: 'enquiry_form' });
});

document.addEventListener('astro:page-load', initialisePage);
initialisePage();
