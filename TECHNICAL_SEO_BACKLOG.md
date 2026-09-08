# TECHNICAL_SEO_BACKLOG.md — Samrat Poly Resins

**Date:** 2026-09-08
**Context:** Baseline technical health is **strong** (290/290 × 200; zero duplicate/missing titles, descriptions, canonicals, H1s; zero orphans; correct redirects and 404s). This backlog is therefore short and specific — there is no long tail of trivial fixes to invent.

**Effort:** S ≤ 1h · M ≈ half-day · L ≈ 1–2 days

---

## P0 — Performance (real, measured, user-facing)

### T1 · Both hero videos download on a single page load 🔴
**Evidence (live Resource Timing, desktop):**
| Resource | Transferred |
|---|---|
| `/videos/hero-background.mp4` | **20,262 KB** |
| `/videos/hero-background-mobile.mp4` | **4,521 KB** |
| **Wasted** | **~4.5 MB minimum** (one of the two is never displayed) |

**Root cause:** the mobile `<video>` carries a plain `src` (added deliberately to fix real iOS Safari autoplay failures). The JS that strips it off-mobile runs on `astro:page-load`, which fires at `window.load` — **after** the browser has already begun fetching. The guard can never win that race.

**Fix options (needs a decision, not a guess):**
- (a) Restore `<source media="…">` gating — *rejected previously* because real-iOS behaviour couldn't be verified without hardware
- (b) Give both videos `preload="none"` + assign `src` from `data-src` in an **`is:inline`** script that runs at parse time (same technique already proven for the nav-toggle fix) — **recommended**
- (c) Ship one adaptive encode instead of two

**Regression risk:** 🔴 High — this touches the approved hero and previously-fixed iOS Safari autoplay. Must be verified on real iOS hardware, not emulation.
**Effort:** M · **Impact:** High

### T2 · 1.7 MB unoptimised PNG poster 🔴
`/videos/samrat-poly-resins-brand-film-still.png` — 941×1672, **1,741 KB**, fetched at 100 ms (poster images are never lazy), rendered into a ~340 px slot. It sits in `public/`, so Astro's image pipeline never touches it.

**Fix:** generate WebP/AVIF derivatives at real display widths and use the optimised asset as `poster` + `<img>`. **Keep the original PNG byte-identical** (it is the approved master and its hash is recorded). Expected saving: **~1.5 MB**.
**Risk:** Low · **Effort:** S · **Impact:** High

### T3 · FCP 3,528 ms on live production 🔴
Consequence of T1+T2 — ~27 MB total transfer, 98% video. TTFB (56 ms) and DOMContentLoaded (476 ms) are excellent, so this is **payload contention, not server or code**.
**Fix:** T1 + T2, then re-measure. **Do not treat localhost numbers as production** — the earlier "FCP 216 ms" figure was localhost-only and is not comparable.
**Risk:** Low · **Effort:** — (follows T1/T2) · **Impact:** High

---

## P1 — Indexing & discovery

### T4 · Sitemap has no `<lastmod>` (0/290)
`@astrojs/sitemap` supports `lastmod`; Google uses it to schedule recrawls. On a 290-page site with an active content programme this measurably affects refresh speed.
**Fix:** emit `lastmod` from real content dates (`publishDate`/git mtime) — **never a build timestamp**, which would falsely mark all 290 pages as changed on every deploy.
**Risk:** Low · **Effort:** S · **Impact:** Medium

### T11 · TDS/SDS library is not crawlable
`/tds/`, `/sds/`, `/downloads/` contain published PDFs with **no HTML index** and no sitemap entries. Samrat's clearest differentiator over Revex is invisible to search.
**Fix:** build `/technical-documents/` (see `SITE_ARCHITECTURE_PLAN.md` §3.4); optionally add a PDF sitemap.
**Risk:** Low · **Effort:** M · **Impact:** Medium-High

---

## P2 — SERP presentation & structured data

### T5 · 32 titles exceed 60 characters
`Base.astro` only suppresses the ` — Samrat Poly Resins` suffix when it would breach 60; it does not catch page titles already over budget. Includes the **homepage** (62 chars).
**Fix:** rewrite the 32 offending titles (list derivable from the crawl output). ⚠️ Title changes affect ranking pages — **do not batch-edit before GSC baseline (A1)**.
**Risk:** Medium · **Effort:** M · **Impact:** Medium

### T6 · 77 meta descriptions exceed 160 characters
Median 148 (fine); max 244. Truncation costs CTR but not ranking.
**Risk:** Low · **Effort:** M · **Impact:** Low-Medium

### T7 · Category hubs carry only `Organization` schema
No `CollectionPage`, `ItemList` or `BreadcrumbList` — while products/resources/applications all have full coverage.
**Fix:** add during hub rebuild (Batch 1/3).
**Risk:** Low · **Effort:** S · **Impact:** Medium

### T8 · `Product` schema has no `offers`
All 31 products omit `offers` (price, currency, availability). Product rich results are largely gated behind `offers` or review data.
**Fix:** ⛔ **Blocked on Q1 (price disclosure).** If Q1 = no, consider `offers` with `priceSpecification` + `availability` and no price — partial benefit. **Never** publish invented prices or `AggregateRating`.
**Risk:** Low · **Effort:** S · **Impact:** Medium (conditional)

### T10 · Organization schema is thin for a manufacturer entity
Missing `sameAs` (IndiaMART, ExportersIndia, Justdial, LinkedIn — all confirmed to exist), `geo`, `areaServed`, `taxID`/`vatID` (GSTIN is already public on-site), `numberOfEmployees`, `award`/`hasCredential` (ISO 9001:2015 certificate is already published).
Consider `LocalBusiness`/`Manufacturer` typing for the real Doraha facility.
**Fix:** additive, uses only already-published facts.
**Risk:** Low · **Effort:** S · **Impact:** Medium (entity consolidation — see `ENTITY_AND_AUTHORITY_PLAN.md`)

### T9 · `og:image:type` hardcoded `image/jpeg`
Wrong when a PNG override is passed.
**Risk:** Low · **Effort:** S · **Impact:** Low

---

## P3 — Hygiene

### T12 · Image alt review (proportionate)
Crawl counts: 1,772 `<img>`; 291 without an `alt` attribute; 678 with `alt=""`.
**Verified by inspection:** most `alt=""` cases are **correct** (decorative ambient-background layers). The genuine items are a bare `<img>` element and one `alt` used as a valueless boolean attribute. **This is not the crisis a raw count implies** — real scope is small.
**Risk:** Low · **Effort:** S · **Impact:** Low

### T13 · Duplicate `User-agent: *` groups in live robots.txt
Cloudflare's managed block plus the repo's own. Google merges them; untidy, not harmful. Resolve alongside the Q4 AI-crawler decision.
**Risk:** Low · **Effort:** S · **Impact:** Low

### T14 · Repository/deployment hygiene (not SEO, but flagged)
The primary working copy is **29 commits behind** `origin/main` and holds uncommitted work (`package.json`, `package-lock.json`, plus untracked `brochure.astro`, `scripts/export-brochure.mjs`, `src/assets/brochure/`, `SPR_Approved_Fact_Sheet_Experiment_1.txt`). Risk of accidental stale deploy or lost work.
**Action:** owner should commit/branch the brochure work and sync. **I have not touched it.**
**Risk:** Medium (operational) · **Effort:** S

---

## Explicitly NOT recommended

| Rejected | Why |
|---|---|
| `npm audit fix` | 5 known build-tool advisories (postcss/svgo/nanoid). Pre-existing, build-time only, not runtime or SEO. Out of scope |
| Rewriting the 213 resource articles | They rank. Do not touch what works |
| Removing/`noindex`ing informational content | Nothing measured suggests thin-content harm; 213 pages median 688 words with full schema |
| Changing product URLs | They rank and carry history |
| Adding `FAQPage` to more pages | Google restricted FAQ rich results; existing coverage already generous |
| Migrating away from Astro/Cloudflare | Stack performs excellently (TTFB 56 ms) |
