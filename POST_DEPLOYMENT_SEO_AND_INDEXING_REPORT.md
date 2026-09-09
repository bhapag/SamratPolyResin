# POST_DEPLOYMENT_SEO_AND_INDEXING_REPORT.md

**Status: COMPLETE.** Deployed, verified live, sitemap refreshed, priority URLs submitted, GA4 key event configured.

**Date:** 2026-09-09 · **Property:** `sc-domain:samratpolyresins.in` · **GA4:** account `402547074`, property `547377291`

---

## 1. Release

| | |
|---|---|
| Branch | `seo/batch-0-1-perf-and-gp-hub` |
| **Commit deployed** | **`49172e09bee4ca5fe7791ea135d7a486ea5860ca`** |
| `origin/main` | `19cddab` → **`49172e0`** |
| Method | `git push origin HEAD:main` — **fast-forward, no force, no merge commit** |
| Deployment | Cloudflare Pages, automatic on push to `main` |
| Live URL | **https://samratpolyresins.in** |

The earlier push failure was Git Credential Manager being unable to reach the
stored credential from the Git Bash session. Resolved by running the push
through PowerShell with `-c credential.helper=wincred`, which reads the
existing Windows Credential Manager entry. **No credential was created,
entered or handled.**

---

## 2. Live verification

### Assets deliberately removed — all now 404 ✅

| URL | Result |
|---|---|
| `/logo.jpg` | **404** (197,263-byte master no longer served) |
| `/home-video.mp4` | **404** |
| `/videos/samrat-poly-resins-brand-film-still.png` | **404** |

### Optimised assets confirmed live ✅

| Asset | Live bytes | Before |
|---|---|---|
| Header logo `/_astro/logo.DKcYEhDd_WWBaR.webp` | **4,924** | 197,263 |
| `/videos/hero-background.mp4` | **4,055,473** | 20,747,904 |
| `/videos/samrat-poly-resins-brand-film.mp4` | **3,501,564** | 25,881,393 |

### Crawl — 16 templates × desktop and mobile

**0 bad status codes · 0 horizontal overflow · 0 invalid structured data ·
0 breadcrumb mismatches · 0 console errors** (the only two "errors" were the
expected 404 response on the deliberate 404 test URL).

Every visible breadcrumb matched its `BreadcrumbList` on all 9 pages that
carry one. **343 unique internal links crawled live — 0 broken.**

### Corrected specifications confirmed live ✅

| Page | Verified live |
|---|---|
| `/products/gp-clear-resin/` | 0 occurrences of "1.20 g/cm³"; shows "Not part of the published specification for this grade" — **in the visible table and the Product schema** |
| `/products/lamination-resin/` | "Not published in the current TDS" |
| `/products/sheet-grade-yellow-resin/` | 0 occurrences of a 99% purity claim; shows "Purity is not published on the current TDS for this grade — ask us if your specification requires it." |
| `/products/gp-gelcoat-resin/` | No cobalt octoate dosage claim (remaining mentions are nav links to the Cobalt Octoate **product**) |

### New features live ✅
`/technical-documents/` returns 200 with **50 TDS/SDS links**. Product pages
carry the in-page section navigation. Sitemap: **291 URLs**, includes
`/technical-documents/`, excludes the 404.

---

## 3. Search Console

### Pre-flight

| Check | Result |
|---|---|
| Manual actions | **No issues detected** |
| Security issues | **No issues detected** |
| HTTPS | Pages served over HTTPS |

### Coverage baseline (as of 04/09/2026, before this deployment is recrawled)

| | Pages |
|---|---|
| **Indexed** | **263** |
| **Not indexed** | **43** |
| — Page with redirect | 3 |
| — Discovered, currently not indexed | 27 |
| — Crawled, currently not indexed | 13 |

### Sitemap

| | |
|---|---|
| URL | `https://samratpolyresins.in/sitemap-index.xml` |
| Previously submitted | 25 Jul 2026 · Status **Success** · last read 8 Sept 2026 · 290 pages |
| **Action taken** | **Resubmitted** — "Sitemap submitted successfully" |
| Why | The sitemap changed: 290 → **291 URLs** (`/technical-documents/` added) |
| Existing entry | **Not removed.** Same URL, re-read triggered |

*(A first attempt with the relative path `sitemap-index.xml` was rejected —
this is a domain property and needs the absolute URL. Resubmitted correctly.)*

### URL Inspection and indexing requests

**10 unique high-value URLs inspected and submitted. All accepted:**
*"URL was added to a priority crawl queue."*

| # | URL | State before request | Requested |
|---|---|---|---|
| 1 | `/technical-documents/` | **URL is not on Google** — unknown to Google (new page) | ✅ |
| 2 | `/` | URL is on Google, indexed | ✅ |
| 3 | `/products/gp-resins/` | URL is on Google, indexed | ✅ |
| 4 | `/products/unsaturated-polyester-resin/` | On Google, **has issues** (Product snippets) | ✅ |
| 5 | `/products/gp-clear-resin/` | On Google, **has issues** (Product snippets) | ✅ |
| 6 | `/products/lamination-resin/` | On Google, **has issues** (Product snippets) | ✅ |
| 7 | `/products/epoxy-resins/` | URL is on Google, indexed | ✅ |
| 8 | `/products/` | URL is on Google, indexed | ✅ |
| 9 | `/resources/what-is-gp-polyester-resin/` | Indexed; **Breadcrumbs: 1 valid item** | ✅ |
| 10 | `/applications/` | URL is on Google, indexed | ✅ |

**Honest note:** `/` and `/products/gp-resins/` each received a *second*
request because a confirmation dialog was overlaying the page and my click
landed on the request control again. Google states explicitly that
"submitting a page multiple times will not change its queue position or
priority", so this wasted quota but changed nothing. Method corrected after
the second occurrence.

**Not submitted, deliberately:** the 3 legacy redirect URLs, the 404 page,
the 50 TDS/SDS PDFs, and the long tail of unchanged resource articles.
`/resources/` was not reached before the Search Console tab became
unresponsive; it is a lower-priority index page and is in the sitemap.

**The Google Indexing API was not used.** It is restricted to job-posting and
livestream content.

### New finding — Product snippet warnings

Product pages report **"Product snippets: 1 invalid item detected"**. This
does not block indexing (all affected pages are indexed) and is the expected
consequence of publishing `Product` schema without `offers`, `review` or
`aggregateRating` — correct for a "Price on Request" B2B catalogue, since
inventing a price would be false structured data. **No action taken.** If
product rich results are ever wanted, that requires the pricing decision in
`DOMAIN_AND_PRICE_DECISIONS.md` Q1 first.

---

## 4. GA4 — one change made

**Change:** `enquiry_form_submit` marked as a **key event**.

**Verified before marking:** it fires from `src/scripts/lead-attribution.ts`
on the `samrat:lead-submitted` custom event, which the enquiry form dispatches
**only after the Web3Forms endpoint returns `success: true`**. It carries the
buyer's name, phone, message and the product they were reading. It is a
delivered enquiry, not an intention to send one. `tests/enquiry-journey.spec.ts`
asserts this against a stubbed endpoint.

**Confirmed after marking:** the Key events tab lists 4 events, and
`enquiry_form_submit` is the **only one with an active stream** ("Harman").
The other three (`close_convert_lead`, `purchase`, `qualify_lead`) still show
"No stream data detected" — they are GA4 defaults that have never fired.

**Deliberately NOT marked:** `whatsapp_click`, `quote_request_click`,
`phone_click`, `catalogue_download`, `file_download`, `product_view`, and
every automatic engagement event. A click is an *attempt* to make contact,
not contact. Marking them would report roughly 20× the real enquiry count and
corrupt every downstream comparison. They remain fully reportable as ordinary
events.

**Expected measurement result:** roughly **1–3 conversions per 28 days** at
current volume. Key-event status is **not retroactive** — the baseline starts
today.

**Not changed:** the three never-firing default key events were left in place
(unmarking them was recommended in `GA4_EVENT_AUDIT.md` but not authorised in
this run). No audience, filter, custom dimension, data stream, Ads link or
property setting was altered. No Google Ads bidding or conversion import
exists or was touched.

---

## 5. What to expect, honestly

Submission puts URLs in a **priority crawl queue**. It does not force crawling,
does not force indexing, and has no effect on ranking. Google decides both,
on its own schedule — typically days to weeks. **No monitoring is scheduled**,
and none is claimed.

The 40 discretionary non-indexed URLs (27 discovered + 13 crawled, not
indexed) were **not** submitted. They are known only as counts; identifying
them needs the per-reason export, and requesting indexing is not a substitute
for fixing whatever made Google skip them.

---

## 6. Follow-up

| # | Item | Owner |
|---|---|---|
| 1 | **Three TDS PDFs carry a doubled text layer** — `gp-quartz-resin`, `iso-fire-retardant-resin`, `epoxy-clear-casting-resin`. Customers download these. Reissue with a single text layer. **No replacement values were invented.** | Business |
| 2 | **"DP clear resin"** — still unverified. No `DP` product, grade, alias or redirect exists, and no `dp` query appears in either Search Console export. Not invented, not mapped to GP. | Owner |
| 3 | **Real-iPhone check** — open the homepage on a physical iPhone, Low Power Mode on and off, confirm the hero shows the still frame and never a black rectangle. WebKit/iPhone-profile testing passed 5/5 but is not hardware. | Follow-up |
| 4 | Recheck coverage in ~1–2 weeks: did `/technical-documents/` get indexed, and did the 43 not-indexed move? | Follow-up |
| 5 | Consider unmarking the three never-firing default key events | Owner |
| 6 | Price policy, manufacturer evidence, whether 2-grade families warrant hubs | Owner |

---

## 7. Rollback

```bash
git revert 43b47f8 4b52ecb df64032 d5c6a4b fac0f89 28c1c4b 22aaede 0eff4c1
git push origin main
```

Or point Cloudflare Pages at `19cddab`, the previous production commit. No
history was rewritten; every commit reverts independently. Video masters are
preserved byte-identically in `src/assets/video-masters/` with SHA-256 hashes.

To undo the GA4 change: Admin → Events → Key events → unstar
`enquiry_form_submit`. Nothing else was touched.
