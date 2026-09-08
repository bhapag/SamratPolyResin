# BATCH_2_PLAN.md — proposed, not implemented

**Date:** 2026-09-08 · **Base:** `f46988e` · **Status:** plan only. No code written, nothing deployed.
**Evidence base:** `SEO_PERFORMANCE_DIAGNOSIS.md` (live GSC/GA4) and `HERO_LOADING_OPTIONS.md` (measured).

---

## Item 1 — `/technical-documents/` (crawlable TDS/SDS library)

**Why, with evidence:** GA4 records **65 `file_download` events from 14 users in 28 days** — real, measured demand for documents that currently have **no crawlable HTML entry point** at all. Zero new factual claims required: every document already exists and is already published.

**Page spec**

| Field | Decision |
|---|---|
| URL | `/technical-documents/` |
| Intent | C/I — "polyester resin TDS", "resin technical data sheet", "resin SDS" |
| Index | **Index** the HTML library page |
| PDFs | Leave as-is. **Do not** add PDFs to the sitemap in this batch — measure the library page first |
| Schema | `BreadcrumbList` + `CollectionPage` only. **No** `Product`, no invented `DigitalDocument` metadata |
| Conversion | Download → enquiry CTA |

**Per-row data model — only fields that genuinely exist in the repo:**

| Column | Source | Rule |
|---|---|---|
| Document type | Derived from path (`/tds/` → TDS, `/sds/` → SDS) | Mechanical |
| Applicable product | `products.js` → `tdsUrl` / `sdsUrl` | 1:1 mapping already exists |
| Product family | `product.category` | Existing field |
| Document URL | `tdsUrl` / `sdsUrl` | Verbatim, stable |
| Product page link | `/products/{slug}/` | Existing |
| Accessible label | `"Download {Product} Technical Data Sheet (PDF)"` | Explicit type + format |
| **Revision / effective date** | **OMIT** | ⛔ No date field exists in `products.js`. **Will not be invented.** If you want dates, they must be read from inside each PDF and stored explicitly |
| Obsolete/replaced docs | **OMIT** | No supersession data exists. If a document is replaced, the old URL should 301 to the new one — a future decision |

**Coverage check required before build:** confirm every `tdsUrl`/`sdsUrl` in `products.js` resolves 200, and list any product lacking a document (those rows simply won't appear — no placeholder rows).

---

## Item 2 — Contextual links from resources/applications to commercial pages

**Why:** hub inlinks are currently **291 navigation + 7 breadcrumb + 1 contextual**. Boilerplate is discounted; contextual editorial links are what actually matter, and there is essentially one.

**Proposed links — each editorially justified, no bulk anchors:**

| # | Source | Destination | Anchor (natural, varied) |
|---|---|---|---|
| 1 | `/resources/what-is-gp-polyester-resin/` | `/products/gp-resins/` | "the GP resin grades we manufacture" |
| 2 | `/resources/gp-resin-vs-lamination-resin/` | `/products/lamination-resin/` | "Lamination Resin (LR)" |
| 3 | `/resources/what-is-lamination-resin/` | `/products/lamination-resin/` | "our lamination resin grade" |
| 4 | `/resources/how-to-select-polyester-resin-for-frp-manufacturing/` | `/products/gp-resins/` | "compare the GP grades side by side" |
| 5 | `/resources/gp-clear-resin-vs-gp-yellow-resin/` | `/products/gp-clear-resin/` + `/products/gp-yellow-resin/` | product names |
| 6 | `/applications/resin-for-general-frp-lamination/` | `/products/gp-resins/` | "suitable GP grades" |
| 7 | `/applications/resin-for-water-tank-manufacturing/` | `/products/gp-resins/` | "the GP range" |
| 8 | `/resources/nc-thinner-vs-general-purpose-thinner/` | `/products/nc-thinner/` | "NC Thinner" |

**Rules:** ≤2 commercial links per article, placed where they genuinely help · no repeated exact-match anchors · **no sitewide footer links** · no retargeting of existing ranking pages · every link manually reviewed.

⚠️ Items 1–4 touch pages that currently rank (`what-is-gp-polyester-resin` 301 impressions; `what-is-lamination-resin` 9.2% CTR). Adding a contextual link is low-risk; **changing their titles or focus is not proposed.**

---

## Item 3 — Application breadcrumbs

**Measured defect:** `/applications/resin-for-general-frp-lamination/` emits `Home > GP Clear Resin > Resin for General FRP Lamination` — it skips a level and does not mirror the URL path.

**Proposed:** `Home > Applications > {Application}`, with the parent product kept as an in-body contextual link rather than a breadcrumb step. Visible breadcrumb and `BreadcrumbList` updated together, as elsewhere.

**Risk:** low. **Caveat:** 37 pages affected; they currently receive few clicks, so impact is small either way.

---

## Item 4 — Hero loading (from `HERO_LOADING_OPTIONS.md`)

**Recommended: Option A + Option B.**

| Sub-item | Change | Measured effect | Risk |
|---|---|---|---|
| 4a | Poster hygiene + `fetchpriority` (Option A) | Slow-4G LCP **−37%**, pre-LCP bytes **−56%** | Medium — **needs real iOS testing** |
| 4b | Re-encoded video (CRF 28 desktop @ native res, CRF 30 mobile @ 960) | Desktop **−16.9 MB**, mobile **−5.4 MB** | Low |
| 4c | `/logo.jpg` 1254×1254 197 KB → optimised ~120 px WebP | **~190 KB saved on all 291 pages** | Low |

Masters preserved byte-identically in both cases. **4a must not ship without iOS verification** — it removes `poster` attributes that earlier iOS work deliberately added.

---

## Item 5 — Fixes directly supported by Search Console

| # | Fix | Evidence | Note |
|---|---|---|---|
| 5a | Improve CTR on `/products/unsaturated-polyester-resin/` | **337 impressions, 3 clicks, 0.9% CTR** | Largest measurable gap on the site |
| 5b | Improve CTR on `/products/lamination-resin/` and `/resources/what-is-gp-polyester-resin/` | 221 impr @ 4.5%; 301 impr @ 2.7% | Both already earn clicks |
| 5c | Investigate the 27 "Discovered – not indexed" pages | GSC Page indexing | **Diagnose only.** No deletions/noindex without review |
| 5d | Investigate `/products/uv-resin/` at position **71.9** | 6 UV articles exist yet the product page ranks ~72 | Possible cannibalisation — needs analysis, not action |

⛔ **Not in this batch:** homepage retitle, any redirect, any consolidation, any `noindex`, any price/`offers` markup, any domain or crawler change.

---

## Item 6 — Outside the repo (your decision, not code)

| # | Action | Why |
|---|---|---|
| 6a | **Mark real GA4 key events** (`whatsapp_click`, `enquiry_form_submit`, `quote_request_click`, `phone_click`, `catalogue_download`) | GA4 currently reports **zero conversions** while ~20–25 lead actions occur per 28 days. Highest-value fix available anywhere in this engagement |
| 6b | Request `.com` Search Console access from IndiaMART | Only way to resolve the entity question |
| 6c | Re-baseline in 4 weeks | Current data is ~6 weeks old and too thin for confident change measurement |

---

## Sequencing and gates

| Order | Item | Gate |
|---|---|---|
| 1 | 4c (logo) | None — trivially safe |
| 2 | 1 (`/technical-documents/`) | Document coverage check |
| 3 | 2 (contextual links) | Link list approved above |
| 4 | 3 (breadcrumbs) | — |
| 5 | 4b (re-encode) | Your visual approval of CRF 28 |
| 6 | 4a (poster hygiene) | **Real iOS device test** |
| 7 | 5a/5b (CTR) | Ideally after 6a, so effects are measurable |

**Verification for every item:** build (291 pages) · e2e (16/16) · link check (0 broken) · crawl of affected URLs · schema validation · Slow-4G re-measure for item 4 · no unrelated file changed · single revertible commit per batch.
