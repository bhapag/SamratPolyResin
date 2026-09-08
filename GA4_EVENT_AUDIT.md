# GA4_EVENT_AUDIT.md — what each event is, and what should be a key event

**Date:** 2026-09-09 · **Property:** GA4 `547377291` (account `samratpolyresin`, property name "Jaspal Singh") · **Measurement ID:** `G-20DFSNPJ80`
**Data window:** 2026-08-12 → 2026-09-08 (28 days), All Users, from the *Events by event name* CSV export.

> ⛔ **Nothing in GA4 was changed.** No event was marked or unmarked as a key event, no conversion, audience, filter, property setting, data stream, user or permission was altered. Everything below is a recommendation for you to apply, or not.

---

## 1. The finding, stated precisely

**GA4 collects 17 event names. Zero of them are marked as key events.**

Meanwhile the three events that *are* configured as key events — `close_convert_lead`, `purchase`, `qualify_lead` — are GA4 defaults that **have never fired** ("No stream data detected").

So every GA4 report that shows conversions shows **zero**, while the site is in fact recording contact attempts. Any past read of "organic isn't converting" was, at least in part, reading a reporting artefact rather than reality.

**This is a configuration gap, not a tracking bug.** The events fire correctly; they are simply not classified.

---

## 2. Every collected event, its source, and how it fires

Source column verified by reading the code, not inferred. `src/scripts/lead-attribution.ts` is imported once, in `src/layouts/Base.astro`, so it is present on all 292 pages.

| Event | 28d count | Users | Source | How it fires |
|---|---|---|---|---|
| `page_view` | 1,558 | 309 | gtag automatic | `gtag('config', …)` plus SPA-style page views on Astro View Transitions |
| `session_start` | 487 | 304 | gtag automatic | Session initialisation |
| `user_engagement` | 448 | 135 | gtag automatic | Engagement heartbeat |
| `first_visit` | 300 | 295 | gtag automatic | First session for a client id |
| `product_view` | 275 | 92 | **custom** — `lead-attribution.ts:235` | On `astro:page-load`, when `document.body[data-product-slug]` is present and differs from the last one seen. Guarded by `lastProductView`, so a re-render cannot double-fire it |
| `scroll` | 138 | 78 | **enhanced measurement** | 90% scroll depth |
| `file_download` | 68 | 16 | **enhanced measurement** | Any click on a link whose URL ends in a tracked file extension — here, every TDS, SDS and the catalogue PDF |
| `whatsapp_click` | 26 | 21 | **custom** — `:212` | Delegated `click` on any `<a>` resolving to `wa.me` / `api.whatsapp.com` |
| `click` | 25 | 20 | **enhanced measurement** | Outbound click (a link to another domain) |
| `catalogue_download` | 12 | 7 | **custom** — `:220` | Click on `/downloads/samrat-poly-resins-product-catalogue.pdf` specifically |
| `view_3d_opened` | 7 | 2 | ⚠️ **no source in this repository** | See §5 |
| `view_3d_interaction_started` | 6 | 2 | ⚠️ **no source in this repository** | See §5 |
| `form_start` | 5 | 4 | **enhanced measurement** | First interaction with a form |
| `view_3d_closed` | 5 | 2 | ⚠️ **no source in this repository** | See §5 |
| `phone_click` | 2 | 2 | **custom** — `:200` | Click on any `href^="tel:"` |
| `quote_request_click` | 2 | 2 | **custom** — `:224` | Click matching `isQuoteRequest()`: `.prod-quote-cta`, `#enquire`, or a same-origin `/contact/` link whose text matches `/quote\|enquir\|discuss\|contact/i` and which is **not** inside a `<nav>` |
| `enquiry_form_submit` | 1 | 1 | **custom** — `:252` | The `samrat:lead-submitted` custom event, dispatched by the enquiry form on successful submission |

### Parameters sent with every custom event

From `trackEvent()` (`:161`), empty values stripped before sending:

| Parameter | Meaning |
|---|---|
| `page_path` | Path the event fired on |
| `initial_landing_page` | First page of the session (first-touch attribution) |
| `first_touch_channel` | Channel that started the session |
| `cta_location` | Which region of the page the link sat in — `homepage_hero`, `header_navigation`, `footer`, `resource_hub_catalogue`, `enquiry_form`, … |
| `cta_label` | The link's own text, trimmed to 100 characters |
| `cta_intent` | On `whatsapp_click` only: `quote_request` when the link also matched the quote-intent test |
| product context | Product slug / name, from `data-product-slug` / `data-product-name` on `<body>` or the nearest form |

**These are custom parameters.** They are collected, but they will not appear in standard reports until they are registered as **custom dimensions** in GA4 Admin. That is a separate, also-unmade change.

---

## 3. Known accuracy problems in the current data

### 3.1 The catalogue is counted twice
A click on the catalogue PDF fires **`catalogue_download`** (custom, path match) **and** **`file_download`** (enhanced measurement, extension match). The same action, two events. So `file_download` (68) **includes** the 12 catalogue clicks; the two must never be added together.

**Documents-only figure: 68 − 12 = 56 TDS/SDS downloads.**

### 3.2 `file_download` counts clicks, not downloads
Enhanced measurement fires on the click. It cannot know whether the file arrived, whether the visitor opened it, or whether the same person clicked twice. At 68 events across 16 users, that is **4.25 clicks per user** — consistent with people opening several sheets, or the same sheet more than once.

### 3.3 Event counts are not people, and the sets overlap
The six lead-intent/engagement events cover 16, 21, 7, 2, 2 and 1 users respectively. **Those sets overlap and cannot be summed.** One buyer downloading two TDS files and clicking WhatsApp appears in three of them. The defensible aggregate is *"roughly 20–25 tracked lead-intent or engagement actions per 28 days"*, and even that is an upper bound on **contact attempts**, not a count of enquiries received.

### 3.4 A click is not a conversation
`whatsapp_click` records that a WhatsApp link was clicked. It cannot see whether the chat opened, whether a message was sent, or whether anyone replied. `phone_click` cannot see whether the call connected. **Real lead volume is only knowable by reconciling against the inbox, the WhatsApp Business account and the phone log.** That reconciliation has not been done and cannot be done from GA4.

### 3.5 `quote_request_click` is probably undercounting
`isQuoteRequest()` excludes any link inside a `<nav>` and requires same-origin `/contact/` plus matching text. Legitimate quote CTAs that live outside `.prod-quote-cta` and do not point at `/contact/` are not counted. Two events in 28 days is low enough to suspect the rule, not only the traffic.

### 3.6 Internal traffic is not excluded — verify before trusting any figure
No internal-traffic filter was observed on this property, and no IP list was configured. With 309 users in 28 days, a handful of sessions from the office or from this engagement's own testing is a material percentage. **Check Admin → Data Streams → Configure tag settings → Define internal traffic before treating any of these counts as customer behaviour.** This is stated as a *check to perform*, not a defect confirmed.

### 3.7 Spam / bot traffic
GA4 excludes known bots automatically, which catches most of it. The US impression pattern in Search Console (413 impressions for market-research queries, ~0 clicks) is a **search** artefact, not analytics spam, and does not affect these numbers. No referral-spam pattern was observed in the channel mix.

### 3.8 Google Ads
No linked Google Ads account was observed, and no Ads conversion import exists. **If Ads is ever run, key events must be marked first** — an unmarked event cannot be imported as a conversion, and Ads cannot optimise toward it.

---

## 4. The key-event plan — deliberately narrow

**Revised 2026-09-09 to a stricter rule: a key event marks a *success*, not an *attempt*.**

An earlier draft of this document proposed marking `whatsapp_click`,
`quote_request_click` and `phone_click` as key events too. That is withdrawn. A
click is an *attempt to make contact*; it is not evidence that contact happened,
and nothing on this site currently verifies that it did. Marking four attempt
events as conversions produces a conversion count roughly 20x the real enquiry
count, and every downstream decision — channel comparison, landing-page value,
any future Ads bidding — inherits that inflation.

### Mark now

| Event | Classification | Why |
|---|---|---|
| `enquiry_form_submit` | ✅ **Key event — primary** | Fires on `samrat:lead-submitted`, dispatched only after Web3Forms returns `success: true`. It is a completed form with the buyer's name, phone, message and the product they were reading. This is a delivered enquiry, not an intention to send one. |

**That is the entire "mark now" list — one event.**

### Keep as lead-intent signals, NOT key events

| Event | Classification | What would justify promoting it |
|---|---|---|
| `quote_request_click` | Lead intent | Its detection rule under-reports (§3.5). Fix the rule first, then reconcile a month of clicks against enquiries actually received. |
| `whatsapp_click` | Lead intent | Reconcile against the WhatsApp Business account: how many of these clicks became a real conversation? Until that number exists, this is an attempt. |
| `phone_click` | Lead intent | Reconcile against the call log. A tap is not a connected call. |
| `catalogue_download` | Engagement | Interest, several steps before a purchase decision. |

These remain fully reportable — GA4 charts, compares and segments ordinary
events perfectly well. Not marking them costs nothing analytically; it only
keeps them out of the "conversions" number.

### Never mark

| Event | Why |
|---|---|
| `file_download` | Engagement, and it double-counts the catalogue (§3.1). |
| `product_view` | A page view by another name — 275 events would swamp every real signal. |
| `scroll`, `click`, `form_start`, `user_engagement`, `page_view`, `session_start`, `first_visit` | Automatic engagement instrumentation. |
| `view_3d_opened`, `view_3d_interaction_started`, `view_3d_closed` | Provenance unresolved — see §5. Do not build measurement on an event whose source is unknown. |

### Expected measurement result of marking `enquiry_form_submit`

GA4 will report **roughly 1–3 conversions per 28 days** at current volume,
against the ~20–25 tracked lead-intent actions in the same window. That
low number is the correct one, and it is the point: it is a real, defensible
baseline that can be grown and compared against. It is **not** retroactive —
it applies from the moment it is set, so the sooner it is set the sooner a
baseline exists.

### Also recommended, in the same session
1. **Unmark the three never-firing defaults** (`close_convert_lead`, `purchase`, `qualify_lead`). They have never fired and never will — nothing on this site sends them — so they contribute only a misleading row of zeros. Fully reversible.
2. **Register the custom parameters as custom dimensions** — `cta_location`, `cta_label`, `first_touch_channel`, `initial_landing_page`, product slug. Without this the parameters are collected but unreportable, which is most of their value lost.
3. **Define internal traffic** (§3.6) before using any of these numbers as a baseline.

### What marking key events will and will not do
It **will** make GA4 report conversions instead of zero, make the Search Console ↔ GA4 join meaningful, and let a future Ads account optimise toward something real.

It **will not** change traffic, rankings or the number of enquiries, and it **is not retroactive** — key-event status applies from the moment it is set. **Today is therefore the cheapest day to set it**, since every day of delay is a day without a comparable baseline.

---

## 5. ⚠️ Unresolved: three events with no source in this repository

`view_3d_opened`, `view_3d_interaction_started` and `view_3d_closed` (18 events, 2 users) **do not exist anywhere in this codebase.** Verified: no `model-viewer`, no Three.js, no 3D viewer component, no `gtag('event', 'view_3d…')` call, and **no Google Tag Manager container** — `Base.astro` loads `gtag.js` directly and nothing else.

Possible explanations, none confirmed:

1. The same measurement ID `G-20DFSNPJ80` is installed on **another property** — most plausibly `samratpolyresins.com` — in which case this GA4 property is mixing two websites' data and **every figure in this document is contaminated to an unknown degree**.
2. A 3D viewer existed on an earlier version of this site and the events are historical. *(Weak: the export window is the last 28 days.)*
3. A browser extension or a tag injected outside this repository.

**This matters more than its 18 events suggest.** Explanation 1 would undermine the whole dataset. It is cheap to test:

- Open `samratpolyresins.com`, view source, and search for `G-20DFSNPJ80`.
- In GA4, break `view_3d_opened` down by `page_location` / hostname — if it reports a hostname that is not `samratpolyresins.in`, explanation 1 is confirmed.

**Neither test was run here**, because both require account access beyond the read-only scope of this phase, and the second is a report configuration change. **Recorded as an open item, not as a finding.**

---

## 6. Where the events are wired, for whoever changes them next

| Concern | File |
|---|---|
| All custom events, parameters, attribution | `src/scripts/lead-attribution.ts` |
| Where that script is mounted (once, sitewide) | `src/layouts/Base.astro:415` |
| gtag snippet and measurement ID | `src/layouts/Base.astro:127-134` |
| Product context source | `<body data-product-slug data-product-name>` in `Base.astro` |
| Form submission hook | `samrat:lead-submitted` custom event, dispatched by the enquiry form |

**Handler duplication across View Transitions was checked.** The delegated `click` listener is registered once at module scope, not inside `astro:page-load`, so client-side navigation cannot stack duplicates. `initialisePage()` does run twice on a cold load (once at module evaluation, once on the first `astro:page-load`), but `product_view` is guarded by `lastProductView` and therefore cannot double-fire.
