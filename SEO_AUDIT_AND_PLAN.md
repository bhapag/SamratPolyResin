# SEO_AUDIT_AND_PLAN.md — Samrat Poly Resins

**Date:** 2026-09-08 · **Scope:** `samratpolyresins.in` only · **Mode:** Read-only audit — no production changes made

**Companion documents:** `SEO_BASELINE.md` · `COMPETITOR_GAP_ANALYSIS.md` · `KEYWORD_INTENT_MAP.md` · `SITE_ARCHITECTURE_PLAN.md` · `INTERNAL_LINK_MAP.md` · `CONTENT_PRODUCTION_QUEUE.md` · `TECHNICAL_SEO_BACKLOG.md` · `ENTITY_AND_AUTHORITY_PLAN.md` · `SEO_MEASUREMENT_PLAN.md` · `SEO_DECISIONS_LOG.md`

---

## 1. Executive summary

**The website is well built. That is not the problem.**

Measured across all 290 live URLs: 100% return HTTP 200; there are zero duplicate or missing titles, meta descriptions, canonicals or H1s; zero orphan pages; correct protocol, host and trailing-slash normalisation; working legacy redirects; and comprehensive `Product`, `Article`, `FAQPage` and `BreadcrumbList` structured data. Technically this site is above average for its sector.

**Three findings explain the commercial visibility gap, in order of importance:**

### 🔴 1. Samrat is competing against itself — and losing
A brand search for *"Samrat Poly Resins Ludhiana polyester resin manufacturer"* returns `samratpolyresins.**com**` four times (homepage, About, two product pages). **`samratpolyresins.in` does not appear in the top 10 at all.**

`.com` is a live, indexed, **IndiaMART-managed site for the same business** — same proprietor, same Doraha address, same product catalogue — and it publishes prices (GP Clear ₹140/kg, UPR ₹130/kg, GP Yellow ₹124/kg…). Two sites for one business are splitting the entity, and Google has resolved the brand to the weaker one.

A documented assumption in `astro.config.mjs` — *"samratpolyresins.com currently blocks crawlers via robots.txt"* — **is factually wrong** and should not be relied on again.

### 🔴 2. The site's authority has nowhere commercial to flow
The Knowledge Hub **works**: `/resources/gp-resin-vs-lamination-resin/`, `/resources/applications-of-gp-polyester-resin/`, `/applications/resin-for-general-frp-lamination/` and `/products/bisphenol-resin/` all rank. Content quality is a genuine strength.

But the pages built to capture *commercial* intent are starved:
- Only **2 of 8** product categories have a hub page
- Both hubs — `/products/gp-resins/` and `/products/epoxy-resins/`, targeting *"GP Resin Manufacturer in India"* and *"Epoxy Resin Manufacturer in India"* — are **301–352 words** and receive **exactly one internal link each**
- The mega-menu links straight to individual products, **bypassing the hubs entirely** (category headings are `<span>` labels, not links)
- The 37 application pages receive **2 internal links each**
- No manufacturer/capability page exists; `/about/` is **204 words**
- The TDS/SDS library — the one asset Revex does *not* have — has **no crawlable HTML surface**

Content : commercial ratio is **6.3 : 1** (213 informational articles vs 34 commercial pages). For a business whose objective is manufacturer and product visibility, that is inverted.

### 🔴 3. Real, measured performance problem on production
Live measurement (not localhost): **FCP 3,528 ms**, **26,998 KB transferred**, of which **26,570 KB is video**. Both hero videos download on a single page load — `hero-background.mp4` (20,262 KB) *and* `hero-background-mobile.mp4` (4,521 KB) — plus a **1.7 MB unoptimised PNG** poster into a ~340 px slot.

⚠️ A prior internal figure of "FCP ~216 ms" was measured on **localhost**, where 26 MB transfers instantly. It is not a production number and should not be cited as one.

---

## 2. What I could not determine (and will not guess)

The brief asks what caused the ranking losses of the last 3–6 months. **I cannot answer that from evidence.** No Search Console, GA4, Ahrefs, Semrush or Screaming Frog access is configured — I verified this rather than assuming it.

Blocked without access: organic traffic and conversions · impressions/clicks/CTR/position · which pages lost rankings and when · branded vs non-branded split · real query cannibalisation · indexed-vs-submitted coverage · backlink profile and lost links · competitor share of voice · CrUX field Core Web Vitals · Google Business Profile/local visibility.

Finding #1 above is a strong, evidence-backed **structural hypothesis** for brand-query loss. Confirming it — and diagnosing anything else — requires access (`SEO_BASELINE.md` §8).

One further limitation, stated plainly: my search tool returns **US-locale** results. The competitor set and SERP *page-type patterns* were corroborated across multiple queries and are reliable; **exact Indian rank positions are not.**

---

## 3. The competitors that matter

Head commercial terms are dominated by **directories** — IndiaMART, TradeIndia, ExportersIndia, Aajjo, Dial4Trade. Below them sit established manufacturers: **Revex** (1981, 30,000 MT capacity, ARAI/IRS/IS-6746 approvals, third plant in development), ORCPL (1998), Crystic (1971), Ruia (1978), Kanoria Chembond.

**Revex is the benchmark.** Its ranking page is its *homepage*, titled **keyword-first**: *"FRP GP Resin & Unsaturated Polyester Manufacturer India"*, H1 *"India's Trusted Manufacturer of FRP Resin & Unsaturated Polyester Since 1981"*. Samrat's homepage is **brand-first**: *"Samrat Poly Resins | Polyester, Epoxy & FRP Resin Manufacturer"* — spending its most valuable SERP pixels on a brand that has no non-branded pull yet.

**Where Samrat genuinely wins:** a full TDS/SDS library (Revex publishes none), 213 technical articles, 37 application pages, and better UX. That is a real, defensible edge — and it is currently under-exploited.

**Where Samrat cannot win, and shouldn't try:** founded 2017 vs 1981; no published capacity; ISO 9001 (a QMS certificate) vs named product approvals. Those gaps close with evidence or not at all — never with invented claims.

---

## 4. Strategy

**Do not try to become Revex.** Become *the most technically documented resin supplier in India*, then convert that documentation advantage into commercial pages that currently don't exist or can't be reached.

Four moves, in order:
1. **Reclaim the brand** — resolve the `.com` conflict (fastest, cheapest win available)
2. **Connect existing authority to commerce** — build the missing hubs, link them properly, expose the TDS library
3. **Prove the manufacturer entity** — a real `/manufacturing/` page, evidence-gated
4. **Extend what already works** — application and comparison depth, guided by real GSC demand

**Nine net-new pages. Not hundreds.** The ~90 seed keywords in the brief resolve to roughly 20 distinct intents, most already served.

---

## 5. Pages to create, improve, consolidate — and not create

**Create (9):** `/manufacturing/` · `/technical-documents/` · 7 category hubs (`frp-resins`, `frp-allied-products`, `sheet-grade-resins`, `fire-retardant-resins`, `hardeners-accelerators`, plus rebuilds of `gp-resins` and `epoxy-resins`)

**Improve:** homepage title/H1 (copy only) · `/about/` (204w → entity-grade) · 32 over-length titles · 77 over-length descriptions · category-hub schema · internal linking throughout

**Consolidate:** `lamination resin` / `laminating resin` / `GP lamination resin` → one page · `GP resin` variants → `/products/gp-resins/` · `UPR`/`polyester resin` variants → `/products/unsaturated-polyester-resin/`

**Deliberately NOT creating:** city/location pages (doorway) · one page per keyword · `/products/gelcoat-resin/` (1 grade — would be thin) · "best resin manufacturer" self-declaration · an "FRP composite work" service page (contractor intent, not material supply) · capacity/certification pages (no verified evidence)

---

## 6. Prioritised roadmap

| Tier | Work | Why now | Risk |
|---|---|---|---|
| **1** | Q3 `.com` decision · A1/A2 access · T1–T3 payload fixes · hub rebuild + internal linking (L1–L6) | Brand recovery + unblock measurement + fix a real UX defect | Low–Med |
| **2** | `/technical-documents/` · 5 new hubs · homepage retitle *(post-baseline)* · `/about/` | Builds the missing commercial layer on evidence that already exists | Med |
| **3** | `/manufacturing/` · Organization schema · GBP · NAP · buyer guide | Entity credibility — gated on owner evidence | Med |
| **4** | Price/`offers` rollout (Q1) · epoxy split (Q2) · off-site programme | Conditional on business decisions | Varies |

---

## 6-bis. MANDATORY POST-DEPLOYMENT INDEXING PHASE — permanent standing requirement

**Status: mandatory, and not authorised before deployment.** Recorded here permanently so it cannot be lost between sessions. It runs **after** the code changes reach production and production has been verified — never before, and never as part of a local batch.

**Standing constraint:** nothing in this phase may run while work is local-only. It is gated on (a) the changes being deployed, and (b) production being verified live.

### The required sequence

| # | Step | Rule |
|---|---|---|
| 1 | **Crawl the live production site** | Real production URLs, not localhost, not a preview deployment |
| 2 | **Validate every URL** | HTTP status, canonical tag, `robots` meta and `X-Robots-Tag`, and the **rendered** HTML (not just the source) |
| 3 | **Validate the sitemap** | It must contain **only canonical, indexable** URLs — no redirects, no duplicates, no `noindex`, no 404s |
| 4 | **Refresh the sitemap in Search Console** | Resubmit so Google re-reads it after the deployment |
| 5 | **Inspect priority changed URLs** | URL Inspection on the pages the batch actually changed |
| 6 | **Request indexing — selectively** | **Only** for eligible priority pages: canonical, indexable, genuinely changed or genuinely new. Never bulk-submit |
| 7 | **Diagnose the non-indexed sets** | The "Discovered – currently not indexed" and "Crawled – currently not indexed" URLs, to URL level, from the per-reason export |
| 8 | **Monitor coverage** | Over several weeks, not days — indexation is not immediate |

### Hard prohibitions in this phase

- **Never** submit redirect URLs, duplicates, or non-canonical variants
- **Never** request indexing as a substitute for fixing a page that Google chose not to index
- **Never** bulk-request; the quota is finite and the request is a **hint, not a guarantee**
- **Never** interpret "URL is not on Google" immediately after a request as a failure — it is expected

### Honest expectation

**Indexing cannot be forced.** Requesting indexing asks Google to re-crawl sooner; it does not oblige Google to index, and it does not affect ranking. Pages that are thin, duplicative or poorly linked will still not be indexed after a request — the fix for those is the page, not the request.

### Cross-references

Working inventory, the 290-vs-306 reconciliation, PDF indexability findings and the unresolved 40 non-indexed URLs are in **`INDEXING_INVENTORY.md`**.

---

## 7. First implementation batch — proposed for approval

**Batch 0 + Batch 1 only.** Deliberately low-risk, no URL changes, no new claims, fully revertible.

| # | Change | Files | Risk |
|---|---|---|---|
| 1 | Stop both hero videos downloading (parse-time `is:inline` source assignment) | `src/pages/index.astro` | 🔴 Med-High — touches approved hero + iOS autoplay fix. **Needs real-iOS verification** |
| 2 | Optimised WebP/AVIF derivative for the brand-film poster (original PNG untouched) | `src/components/home/BrandFilm.astro` | Low |
| 3 | `lastmod` in sitemap from real content dates | `astro.config.mjs` | Low |
| 4 | **Mega-menu category headings become links to hubs** | `src/layouts/Base.astro` | Low — *highest-leverage single change in the plan* |
| 5 | `/products/` index category headings link to hubs | `src/pages/products/index.astro` | Low |
| 6 | Rebuild `/products/gp-resins/` (352w → ~900w, grade table, `CollectionPage`+`ItemList` schema) using only existing `products.js` + TDS data | `src/pages/products/gp-resins.astro` | Low |
| 7 | Product → hub up-links + product → application links | `src/pages/products/[slug].astro` | Low |
| 8 | Correct the false `.com` robots.txt comment | `astro.config.mjs` | None |

**Excluded from batch 1 on purpose:** homepage retitle (needs baseline), epoxy hub (needs Q2), `/manufacturing/` (needs evidence), price/`offers` (needs Q1), title/description rewrites (need baseline).

**Verification before/after each batch:** full 290-URL re-crawl · `npm run build` (291 pages) · e2e suite (16/16) · link check (628 links, 0 broken) · schema validation · live performance re-measure · mobile 360/390/430 · no regression in existing rankings.

---

## 8. What I need from you

**Decisions (blocking):**
- **Q3** — `samratpolyresins.com`: redirect to `.in`, canonicalise to `.in`, or leave? *(Needs IndiaMART contract status. Highest-value single decision.)*
- **Q1** — publish prices on `.in`? *(They are already public on your `.com` and IndiaMART.)*
- **Q2** — is `samratepoxyresins.com` live, parked or planned? *(It did not resolve.)*
- **Q4** — unblock `GPTBot`/`ClaudeBot` etc.? *(No Google Search impact; affects AI-assistant visibility only.)*

**Access:** Search Console (`.in` **and** `.com`) · GA4 · PSI API key · Ahrefs/Semrush · Google Business Profile

**Evidence:** the 18-item checklist in `ENTITY_AND_AUTHORITY_PLAN.md` §4 — capacity, reactors, lab, QC, lead times, approvals, photography, named technical reviewer

**Approval:** to proceed with Batch 0 + Batch 1 above.

---

## 9. Honest expectations

No ranking guarantees. Directory dominance on head terms is structural — realistic targets are positions 2–8, not #1. Revex's 40-year entity advantage will not be matched in six months. The fastest genuine win is **brand-search recovery** via Q3, measurable in weeks once decided. New hubs typically take 4–12 weeks to settle. "Near me" is proximity-driven and moves through Google Business Profile, not pages. Price queries stay out of reach unless Q1 changes.

**Success will be reported as qualified enquiries — not impressions.**
