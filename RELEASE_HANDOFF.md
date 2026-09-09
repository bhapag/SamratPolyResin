# RELEASE_HANDOFF.md — shipped to production

**Date:** 2026-09-09 · **Scope:** `samratpolyresins.in` only

| | |
|---|---|
| Branch | `seo/batch-0-1-perf-and-gp-hub` |
| HEAD | `49172e0` |
| `origin/main` | **`49172e0`** |
| Commits shipped | **15** |
| **Deployed** | ✅ **Yes — live at https://samratpolyresins.in** |
| **Live commit** | **`49172e0`** |

---

## 1. Release status: SHIPPED

`origin/main` moved `19cddab` → **`49172e0`** by fast-forward (no force, no
merge commit). Cloudflare Pages built and published it. Verified live: the
removed assets 404, the optimised assets serve at their new sizes, 343 internal
links resolve, and 16 templates crawl clean on desktop and mobile.

The earlier authentication blocker was resolved by pushing through PowerShell
with `-c credential.helper=wincred`, which reads the Windows Credential Manager
entry that Git Bash could not reach. No credential was created, entered or
handled.

Sitemap refreshed, 10 priority URLs submitted for indexing, and
`enquiry_form_submit` marked as a GA4 key event — full evidence in
`POST_DEPLOYMENT_SEO_AND_INDEXING_REPORT.md`.

## 2. Completion tracker

| Item | Local | Needs deploy | Needs business evidence | Needs external account | Needs indexing follow-up |
|---|---|---|---|---|---|
| Hero poster/video loading, single encode | ✅ | ✅ | — | — | — |
| Save-Data respected on all 4 video surfaces | ✅ | ✅ | — | — | — |
| Video re-encodes (53.0 → 9.2 MB deployed) | ✅ | ✅ | Owner sight-check | — | — |
| Logo 197 KB → 4.9 KB sitewide | ✅ | ✅ | — | — | — |
| Product cards: spec-led, TDS-verified | ✅ | ✅ | — | — | — |
| Homepage: catalogue-first hierarchy | ✅ | ✅ | — | — | — |
| Products index | ✅ | ✅ | — | — | — |
| Applications index (2-up mobile, jump nav) | ✅ | ✅ | — | — | — |
| Knowledge Centre (compact rows, 25-hub nav) | ✅ | ✅ | — | — | — |
| Product detail: in-page section navigation | ✅ | ✅ | — | — | — |
| Resource article template (sticky TOC already present) | ✅ | ✅ | — | — | — |
| Category hubs (GP, Epoxy) + homepage links | ✅ | ✅ | Whether 2-grade families warrant hubs | — | — |
| `/technical-documents/` library (50 docs) | ✅ | ✅ | — | — | ✅ |
| 8 contextual hub links | ✅ | ✅ | — | — | — |
| Application breadcrumbs | ✅ | ✅ | — | — | ✅ |
| 404 recovery page | ✅ | ✅ | — | — | — |
| Sitemap / canonicals / indexability | ✅ | ✅ | — | — | ✅ |
| **Numeric specs verified against TDS** | ✅ | ✅ | 3 PDFs need reissuing | — | — |
| Private export protection | ✅ | — | — | — | — |
| GA4 event audit + key-event plan | ✅ | — | — | ✅ **applied** | — |
| URL-level indexing inventory | ⚠️ partial | — | — | ✅ GSC per-reason export | ✅ |
| Manufacturer evidence / factual gaps | ❌ | — | ✅ **owner** | — | — |
| Push, deploy, live verification | ✅ | ✅ **done** | — | — | — |
| Sitemap refreshed + 10 URLs submitted | ✅ | ✅ **done** | — | — | ✅ recheck in 1–2 weeks |
| GA4 key event configured | ✅ | ✅ **done** | — | — | — |

---

## 3. What changed — 15 commits

| Commit | Subject |
|---|---|
| `f46988e` | perf+seo: load one hero encode, optimise poster, strengthen GP hub links |
| `9cf8923` | docs: correct Slow-4G and ranking-loss conclusions with measured evidence |
| `d2dcedc` | docs: withdraw six overstated conclusions and reconcile indexing totals |
| `0eff4c1` | perf+seo: Batch 2 — hero A+B, logo, document library, hub links, breadcrumbs |
| `22aaede` | design: spec-led product cards, catalogue-first homepage, video re-encodes |
| `28c1c4b` | design: make the Knowledge Centre navigable |
| `fe14ddd` | design+tests: applications discovery, buyer-journey cover |
| `3897c88` · `8a6a2e9` | docs: state and completion record |
| `fac0f89` | **fix: remove technical values that are not in their own TDS** |
| `d5c6a4b` | **fix: correct technical figures in prose and FAQ structured data** |
| `df64032` | design: product-page in-page section navigation |
| `4b52ecb` | perf+test: Save-Data, and prove the hero survives every failure mode |
| `43b47f8` | design: turn the 404 into a recovery page |
| `49172e0` | docs: release handoff, GA4 key-event plan, post-deployment runbook |

### Templates and pages changed
`src/pages/index.astro` · `products/[slug].astro` · `products/index.astro` · `products/gp-resins.astro` · `applications/[slug].astro` · `applications/index.astro` · `resources/[slug].astro` · `resources/index.astro` · `404.astro` · **`technical-documents.astro` (new)** · `layouts/Base.astro` · `components/ProductCard.astro` · `ResourceCard.astro` · `AmbientBackground.astro` · `home/BrandFilm.astro` · `CustomResinRequestForm.astro` · `data/products.js` · `data/resources.js` · `data/applications.js`

---

## 4. 🔴 The most important finding: published specifications did not match the TDS

Every numeric technical property on the site was checked against the PDF it claims to come from (`pdftotext -layout`, normalised both sides). **540 figures checked.** Seven statements were wrong and were rendering on live product pages — and four of them were also being emitted as **FAQPage structured data**:

| Product | Claim | The TDS actually says |
|---|---|---|
| GP Clear Resin | Specific gravity **1.20 g/cm³** | "…intentionally excluded" from the spec set |
| Unsaturated Polyester Resin | Specific gravity **1.20 g/cm³** | "…intentionally excluded" |
| Lamination Resin | Specific gravity **1.20–1.60 g/cm³** | "Not Provided" |
| Sheet Grade Yellow Resin | Purity **99%** | No purity row exists |
| GP Gelcoat Resin | Cobalt octoate **0.4%** | MEKP 1.5% only; no cobalt row |
| ISO Fire Retardant Resin | Purity **≥99%** | Row garbled; "≥" appears nowhere |

Each was replaced with what is true — "Not part of the published specification set for this grade", "Not published in the current TDS", "confirm the accelerator dosage with us" — rather than silently deleted, so a buyer learns something instead of finding a gap.

`npm run verify:specs` re-runs the whole check and **fails the build path** if an unsupported number reappears. Sixteen exceptions are listed in the script, each with the reason it was investigated and accepted.

### 🔴 Owner action: three TDS PDFs are defective

These files carry a **doubled text layer** — two revisions superimposed, so a single row extracts as two conflicting values:

| File | Symptom |
|---|---|
| `/tds/gp-quartz-resin-tds.pdf` | Viscosity reads as both 350–450 and 400–800 cPs |
| `/tds/iso-fire-retardant-resin-tds.pdf` | Viscosity, gel time and purity all doubled |
| `/tds/epoxy-clear-casting-resin-tds.pdf` | Several rows read both a value and "Not Provided" |

The site quotes the coherent product-specific layer in each case, so the pages are not wrong — **but customers download these files.** They should be reissued with a single text layer. I could not confirm whether the overlap is visible on screen as well as in the text layer: no PDF renderer is available in this environment.

---

## 5. GA4 — one change applied

**`enquiry_form_submit` is now a key event** (applied 2026-09-09, verified in the Key events tab as the only key event with an active stream). Evidence in `POST_DEPLOYMENT_SEO_AND_INDEXING_REPORT.md` §4. No other GA4 setting was altered. `GA4_EVENT_AUDIT.md` has the full trigger-by-trigger audit.

GA4 collects 17 events; **zero** are key events, while the three that *are* configured (`close_convert_lead`, `purchase`, `qualify_lead`) have never fired. So GA4 reports zero conversions while real enquiries occur.

**The change applied — exactly one event:**

| Event | Action | Why |
|---|---|---|
| `enquiry_form_submit` | ✅ **Marked as key event** | Fires only after Web3Forms returns `success: true`. A delivered enquiry with name, phone, message and the product being read. |

**Deliberately NOT marked:** `whatsapp_click`, `quote_request_click`, `phone_click`, `catalogue_download`. A click is an *attempt* to make contact, not contact. Marking all four would report ~20× the real enquiry count and corrupt every downstream comparison. They stay fully reportable as ordinary events; promote one only after reconciling a month of clicks against enquiries actually received.

Also worth doing: unmark the three never-firing defaults, and check Admin → Data Streams → internal traffic before trusting any figure.

Expected result: roughly **1–3 conversions per 28 days** at current volume. That low number is the correct one, and it is not retroactive — the baseline starts the day it is set.

⚠️ **Unresolved:** `view_3d_opened` / `view_3d_interaction_started` / `view_3d_closed` (18 events) **have no source in this repository** — no 3D viewer, no GTM container. If the same measurement ID is installed on another site, this property is mixing two websites' data. Test: break the event down by hostname in GA4.

---

## 6. Verification results (local)

| Check | Result |
|---|---|
| `npm run build` | **292 pages**, no errors |
| `npx playwright test` | **85/85 passed** |
| `node scripts/check-links.mjs` | **34,394 internal links, 0 broken** |
| `npm run verify:specs` | **540 figures verified**, 16 documented exceptions, 0 unexplained |
| Sitemap | 291 URLs · 291 canonicals · 404 `noindex` and excluded |
| Horizontal overflow | **0 px** across 15 pages × {390, 1440} |
| WebKit (Safari engine) | **5/5** — hero, mobile nav, console, overflow, reduced motion |

### Test suites added this session (69 new tests)
`batch-2` (27) · `knowledge-centre` (5) · `enquiry-journey` (9) · `motion-and-transitions` (6) · `product-page` (10) · `hero-resilience` (7) · `webkit-safari` (5)

---

## 7. Performance — local lab measurements, **not** production field data

**Slow-4G** (400 kbps / 400 ms RTT, 4× CPU, 390×844 DPR 3, cold cache, 5 runs, medians, CDP request-lifecycle tracing):

| | `f46988e` baseline | Now |
|---|---|---|
| LCP | 13,200 ms | **7,404 ms** (−44%) |
| Bytes before LCP | 404,563 | **127,895** (−68%) |
| FCP | 2,212 ms | 2,124 ms |
| CLS | 0.038 | 0.038 |
| Hero video requests | 1 | 1 |
| LCP element | hero poster WebP | hero poster WebP |

**Unthrottled localhost**, cold cache, scrolled to the bottom:

| Page | Initial viewport | Deferred media | Full page | FCP | LCP | CLS |
|---|---|---|---|---|---|---|
| Home (mobile) | 2.01 MB | 7.38 MB | **9.39 MB** | 240 ms | 328 ms | 0.000 |
| Home (desktop) | 3.23 MB | 10.11 MB | 13.34 MB | 192 ms | 436 ms | 0.000 |
| Products (mobile) | 2.12 MB | 0.38 MB | 2.50 MB | 184 ms | 212 ms | 0.000 |
| Product page (mobile) | 2.03 MB | 0.29 MB | 2.32 MB | 180 ms | 256 ms | 0.000 |
| Technical documents (mobile) | 1.95 MB | 0.00 MB | 1.95 MB | 180 ms | 208 ms | 0.000 |

Homepage mobile was **33.99 MB** before this work. Deployed video total: **53.0 → 9.2 MB (−82.6%)**.

*On unthrottled localhost the hero video finishes before LCP, which is why "bytes before LCP" looks large there; the Slow-4G figures are the ones that describe real mobile users.*

### Page height, before → after (fullPage)

| Page | Desktop | Mobile |
|---|---|---|
| Products index | 8,997 → **6,789** | 20,409 → **12,647** |
| Applications index | 9,922 → 9,977 | 20,967 → **10,454** |
| Knowledge Centre | 44,140 → **23,581** | 95,224 → **38,237** |
| Homepage | 11,202 → 10,615 | 18,050 → 16,875 |

---

## 8. Open owner questions

1. **"DP clear resin"** — **unresolved, and deliberately not acted on.** No `DP` product, grade, category, alias or redirect exists in the repository, and there is **no `dp` query in either Search Console export**. Most likely a mishearing of **GP Clear Resin**, but it was neither invented as a category nor silently mapped to GP. Please confirm.
2. **Reissue the three doubled-text-layer TDS PDFs** (§4).
3. **Bisphenol Resin classification** — left exactly as it was: filed under *Industrial & Specialty Resins*, not Epoxy, quoting the TDS wording ("Bisphenol A & epichlorohydrin based"). Not re-verified against the source PDF independently.
4. **Price policy** — still "Price on Request"; no `offers` schema. See `DOMAIN_AND_PRICE_DECISIONS.md` Q1.
5. **Manufacturer evidence** — capacity, reactors, lab scope, QC procedures, lead times, approvals, named technical reviewer, real facility photography. **None invented.** No badge, testimonial, certification, award or customer logo was fabricated; no city pages were created.
6. **Do 2-grade families warrant their own hubs?** (Fire Retardant, Sheet Grade, Hardeners.)

---

## 9. Real-device gap

WebKit — the engine Safari and every iOS browser use — is now installed and tested: 5/5 pass on an iPhone 13 profile, covering hero still-frame rendering, single-encode selection, no frameless video, mobile navigation, console errors, overflow and reduced motion.

**That is not an iPhone.** No real low-power mode, no real iOS media pipeline, no real touch hardware.

**The one device check still needed:** open the deployed homepage on a real iPhone, in Low Power Mode and again with it off, and confirm the hero shows the still frame immediately and never a black rectangle. Both hero `<video>` elements deliberately have no `poster`; the fallback is the eager `<Image>` plus opacity gating, which is tested against autoplay rejection, 404 and Save-Data in Chromium and WebKit.

---

## 10. Rollback

Every commit is independently revertible and none rewrites history.

```bash
git revert 43b47f8      # 404 recovery page
git revert 4b52ecb      # Save-Data + hero resilience tests
git revert df64032      # product-page section navigation
git revert d5c6a4b      # prose/FAQ specification corrections
git revert fac0f89      # techSpecs specification corrections
git revert 28c1c4b      # Knowledge Centre
git revert 22aaede      # product cards + homepage + video re-encodes
git revert 0eff4c1      # Batch 2
```

To abandon the release entirely after deploying, point Cloudflare Pages back at `19cddab` — the commit production is serving today.

Video masters are preserved byte-identically in `src/assets/video-masters/` with SHA-256 hashes and restore instructions in the README there.

---

## 11. Local preview

```bash
npm ci && npm run build && npx astro preview --port 4399
```

Then `http://localhost:4399/`. Useful checks: `npm run verify:specs`, `npm run check:links`, `npx playwright test`.
