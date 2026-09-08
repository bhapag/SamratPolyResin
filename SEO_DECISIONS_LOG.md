# SEO_DECISIONS_LOG.md — Samrat Poly Resins

Append-only record of decisions, their evidence, and open questions.

---

## Decisions taken during the Phase 1 audit

| # | Date | Decision | Evidence | Status |
|---|---|---|---|---|
| D1 | 2026-09-08 | Audit `origin/main` @ `19cddab` via the clean worktree, **not** the primary checkout | Primary checkout is 29 commits behind and holds uncommitted brochure work; auditing it would describe code that is not live | Done |
| D2 | 2026-09-08 | **Do not** produce traffic/ranking/backlink baselines | No GSC/GA4/Ahrefs credentials configured (verified, not assumed). Inventing figures is explicitly forbidden | Done |
| D3 | 2026-09-08 | **Do not** ship a long list of trivial technical fixes | Measured: 290/290 × 200; 0 duplicate/missing titles, descriptions, canonicals, H1s; 0 orphans. Technical SEO is not the bottleneck | Done |
| D4 | 2026-09-08 | Identify the primary problem as **entity/architecture**, not content quality | `.in` ranks for informational queries but is absent from its own brand search; commercial hubs have 1 inlink and ~330 words | Done |
| D5 | 2026-09-08 | Reject a page-per-keyword build | ~90 seed keywords → ~20 distinct intents. Brief explicitly forbids thin/templated scale | Done |
| D6 | 2026-09-08 | Recommend **9 net-new pages**, not hundreds | Every one maps to an evidenced intent gap | Proposed |
| D7 | 2026-09-08 | Do **not** create city/location pages | Only Doraha/Ludhiana is a real facility; the rest would be doorway pages | Done |
| D8 | 2026-09-08 | Recommend **against** building `/products/gelcoat-resin/` | 1 grade cannot support a non-thin hub | Proposed |
| D9 | 2026-09-08 | Sequence homepage retitle **after** GSC access | It ranks today; changing it blind is unmeasurable and risky | Proposed |
| D10 | 2026-09-08 | Report the `Google-Extended` block accurately as **not** a Search-ranking issue | It governs Gemini grounding/training only; Googlebot remains allowed | Done |
| D11 | 2026-09-08 | Correct the localhost performance figure on record | Prior "FCP 216 ms" was localhost; live production FCP is **3,528 ms** | Done |
| D12 | 2026-09-08 | Touch nothing in the repo except adding these 11 planning documents | Brief: read-only until approval | Done |

---

## 🔴 Open questions — blocking, owner decision required

### Q1 · Publish prices on `.in`?
**Evidence:** every competitor ranking for GP/polyester resin price queries displays ₹/kg (₹80–111). **Samrat's own `samratpolyresins.com` already publishes ₹124–₹700/kg**, as do its IndiaMART listings. `.in` is the only Samrat surface hiding prices, and all 31 `Product` schemas lack `offers`.
**Options:** (a) publish indicative ₹/kg + `offers` schema — unlocks price queries and Product rich results; (b) publish "from ₹X/kg" ranges; (c) keep "Price on Request" and formally abandon price-query clusters.
**My view:** the confidentiality argument is already lost — the prices are public on Samrat's own properties. (a) or (b) is the consistent position. **But this is a commercial call, not mine.**

### Q2 · What is `samratepoxyresins.com`?
**Evidence:** did not resolve during testing. **Blocks** the epoxy keyword split and the `/products/epoxy-resins/` rebuild. `.in` currently ranks for `/products/bisphenol-resin/`, so `.in` owns Samrat's epoxy footprint in practice.

### Q3 · What happens to `samratpolyresins.com`? 🔴 **Highest priority**
**Evidence:** live, indexed, IndiaMART-managed, same business/products/NAP, **holds 4 of the top 10 brand results while `.in` holds none.**
**Options:** A) 301 → `.in` (max consolidation; may breach an IndiaMART contract) · B) keep as an IndiaMART storefront but canonicalise/link to `.in` as official · C) do nothing (ongoing loss).
**Needs:** contractual status with IndiaMART.

### Q4 · Unblock AI crawlers?
**Evidence:** Cloudflare's managed `robots.txt` disallows `GPTBot`, `ClaudeBot`, `CCBot`, `Google-Extended` and others — almost certainly a platform default, not a decision.
**Trade-off:** allowing them creates visibility in AI assistant answers (a growing B2B supplier-discovery channel) at the cost of content being used for model training. **No Google Search impact either way.**

### Q5 · Grant analytics access? (A1–A5)
Without GSC + GA4 there is no baseline, no regression detection, and no way to answer "what caused the ranking losses."

### Q6 · Who is the named technical reviewer?
Needed for author/reviewer attribution on technical pages (E-E-A-T) and to sign off chemical/safety copy.

---

## Assumptions corrected during this audit

| Assumption | Reality |
|---|---|
| *"samratpolyresins.com blocks crawlers via robots.txt"* (`astro.config.mjs`) | **False.** Indexed and outranking `.in` for the brand |
| *"Mobile hero performance is excellent (FCP ~216 ms)"* | **Localhost only.** Live production FCP is 3,528 ms with ~27 MB transfer |
| *"Only one hero video loads per device"* | **False.** Both download (~4.5 MB wasted) — the strip-src JS runs after fetch begins |
| *"The site has 0 orphan pages"* | Technically true, but produced by boilerplate nav links. The commercial hubs are functionally orphaned (1 contextual link) |
| Implied: *ranking problems stem from content quality* | Content quality is a **strength** — informational pages rank. The gap is commercial architecture and entity ownership |

---

## Change log (implementation)

*Superseded by the change log at the end of this document.*

---

## Decisions taken during the verification & correction phase (2026-09-08 → 2026-09-09)

| # | Date | Decision | Evidence | Status |
|---|---|---|---|---|
| D13 | 2026-09-08 | Fix the hero by assigning the video source **at parse time** via `is:inline`, not by stripping `src` later | `astro:page-load` fires no earlier than `window.load`; by then both encodes are already requested. Measured: mobile 35.93 MB → 7.15 MB | Done (`f46988e`) |
| D14 | 2026-09-08 | Introduce `CATEGORY_HUBS` in `products.js` as the single source of truth for which categories have hub pages | Breadcrumbs, mega-menu and mobile nav were each deciding this independently and disagreeing | Done (`f46988e`) |
| D15 | 2026-09-08 | Make mega-menu category headings links, and add an explicit "View all …" link inside the mobile `<ul>` — **not** by turning `<summary>` into a link | Turning `<summary>` into a link breaks the disclosure toggle and keyboard behaviour | Done (`f46988e`) |
| D16 | 2026-09-08 | Retract the "production FCP 3,528 ms" figure | Measured in a hidden/backgrounded browser pane, which suppresses paint. Real: desktop 244 ms, mobile 212 ms. **Supersedes D11** | Done |
| D17 | 2026-09-08 | Retract "the hero video starves the LCP poster on Slow-4G" | Resource Timing records only **completed** requests, so an in-flight 6.4 MB video read as 0 bytes. CDP request-lifecycle tracing shows **0 video bytes before LCP** | Done (addendum §9-bis) |
| D18 | 2026-09-08 | Adopt hero **Option A + Option B**; reject Option C | Option A (poster hygiene): Slow-4G LCP 13,200 → 8,308 ms (−37%), pre-LCP bytes −56%. Option B (re-encode): −16.9 MB desktop / −5.4 MB mobile, LCP change +24 ms (i.e. none). Both worth doing, for different reasons | Approved for Batch 2 |
| D19 | 2026-09-09 | Store all raw GSC/GA4 exports in `.seo-private/`, git-ignored, never in `public/` | Standing instruction: raw exports, cookies and account identifiers stay out of Git and out of the deployed site | Done |
| D20 | 2026-09-09 | Reconcile 290 sitemap URLs vs 306 GSC-known URLs rather than treating it as an error | GSC counts every URL it knows: 51 PDFs (4 confirmed earning impressions, none in the sitemap) plus 3 legacy redirect targets | Done (`INDEXING_INVENTORY.md`) |
| D21 | 2026-09-09 | **Change nothing** about PDF indexability, and do **not** add PDFs to the sitemap in this batch | They are already indexed and ranking at positions 4–8 without intervention; adding 51 PDFs now would confound measurement of the new `/technical-documents/` page | Done |
| D22 | 2026-09-09 | Withdraw six overstatements in writing before implementing Batch 2 | Listed individually in `SEO_AUDIT_VALIDATION_ADDENDUM.md` §9-quater (C1–C6) | Done |
| D23 | 2026-09-09 | Audit GA4 key events and **recommend only** — make no GA4 change | GA4 admin mutation is outside the authorised local-only scope | Done |
| D24 | 2026-09-09 | Record the post-deployment indexing phase as a permanent, mandatory, **not-yet-authorised** step | Standing instruction; recorded in `SEO_AUDIT_AND_PLAN.md` §6-bis and `INDEXING_INVENTORY.md` §6 | Done |

---

## Assumptions corrected during the verification phase

**These supersede the earlier "Assumptions corrected" table where they conflict.** Full reasoning in `SEO_AUDIT_VALIDATION_ADDENDUM.md` §9-bis, §9-ter and §9-quater.

| Earlier statement | Corrected statement | Where |
|---|---|---|
| *"Live production FCP is 3,528 ms"* (D11) | **Wrong — instrumentation artefact.** Measured in a hidden browser pane; paint is suppressed there. Real: desktop 244 ms, mobile 212 ms | §9-bis |
| *"The hero video starves the LCP poster on Slow-4G"* | **Wrong mechanism.** 0 video bytes transfer before LCP. The pre-LCP competitors are a duplicate 1920 px poster, a 197 KB logo rendered at 40×40, two below-fold posters and ~102 KB of fonts | §9-bis |
| *"There is no ranking loss"* | **Overstated.** The decline cannot be *observed* in a property whose history begins after the period in question. It can be neither confirmed nor disproved | §9-quater C1 |
| *"Samrat ranks 1.0–2.5 for head manufacturer terms"* | **Overstated.** Those 9 queries total **35 impressions / 1 click** over 36 days | §9-quater C2 |
| *"~20–25 leads per 28 days"* | **Wrong unit.** Roughly 20–25 tracked **lead-intent or engagement actions** — overlapping events, not confirmed leads | §9-quater C3 |
| *"AI-assistant traffic proves the crawler blocks cost nothing"* | **Overstated.** 22 sessions show the channel is not closed; no counterfactual was tested | §9-quater C4 |
| *"`.com` performance is permanently unmeasurable"* | **Overstated.** Only *Search Console* metrics need authorised access; SERP, backlink, referral and IndiaMART evidence remain available and uncollected | §9-quater C5 |
| *"The unreferenced `public/` poster is 1.78 MB fetched on every visit"* | **Wrong cost model.** It inflates repo, build and deployment size; it is **not** downloaded by visitors, because nothing references it | §9-quater C6 |
| *"9 net-new pages"* (D6) | **Arithmetic was inconsistent** — it counted 2 rebuilds as new, included a hub for a category that does not exist, and omitted one that does. The defensible range is **4–7** | addendum |

---

## Change log (implementation)

| Date | Batch | Commit | Scope | Verified | Rollback |
|---|---|---|---|---|---|
| 2026-09-08 | Batch 0 + 1 | `f46988e` | **21 files: 8 code files + 1 binary asset + 12 planning documents.** Hero parse-time source, `CATEGORY_HUBS`, mega-menu + mobile hub links, product breadcrumbs, GP hub rebuild, brand-film poster moved into the Astro pipeline (`src/assets/.../brand-film-still.png`, 1,782,443 bytes — the `public/` original was **not** removed, leaving a duplicate), 2 false code comments corrected. *(An earlier statement of "8 changed files" was wrong; it omitted the docs and the asset.)* | Build 291 pages · e2e 16/16 · link check 0 broken · schema validated · mobile payload 35.93 → 7.15 MB | `git revert f46988e` |
| 2026-09-08 | Verification | `9cf8923` | Documentation only: performance diagnosis, hero options, Batch 2 plan, domain/price decisions, addendum §9-bis/§9-ter | N/A — no code | `git revert 9cf8923` |

**Neither commit has been deployed.** Both are local to the `cool-mendeleev-788c77` worktree branch.
