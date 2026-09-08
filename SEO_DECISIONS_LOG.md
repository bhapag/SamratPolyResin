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

*Empty — no production changes made. Entries added per batch after approval, each with commit SHA, URLs affected, verification result and rollback instruction.*

| Date | Batch | Commit | URLs | Verified | Rollback |
|---|---|---|---|---|---|
| — | — | — | — | — | — |
