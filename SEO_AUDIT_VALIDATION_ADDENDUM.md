# SEO_AUDIT_VALIDATION_ADDENDUM.md

**Date:** 2026-09-08
**Purpose:** Correct, downgrade or confirm the conclusions in `SEO_AUDIT_AND_PLAN.md` and `SEO_BASELINE.md` before implementation. Where those documents conflict with this one, **this document wins**.

**Evidence classes used below:**
- **[MF]** Measured fact — reproduced locally with a named method
- **[CF]** Corroborated fact — verified against an external source
- **[H]** Hypothesis — plausible, causation *not* established
- **[R]** Recommendation — a judgement call, not a finding
- **[U]** Unknown pending access

---

## 1. Facts vs hypotheses — and the `.com` causation claim

### 1.1 Retraction: I overstated the `.com` conclusion

**What the audit said:** *"Samrat is competing against itself — and losing"*, and that domain consolidation was *"the fastest genuine win"*.

**What is actually established:**

| Claim | Class | Status |
|---|---|---|
| `www.samratpolyresins.com` is live, indexed, IndiaMART-managed, same business/proprietor/address/catalogue, and publishes prices | **[CF]** | **Confirmed** — direct fetch + brand SERP |
| A brand query returned 4 `.com` results and 0 `.in` results | **[CF]** | **Confirmed** for that query, on a **US-locale** search tool, one point in time |
| Two live properties for one business create a **possible entity-consolidation / cannibalisation risk** | **[H]** | **Reasonable hypothesis** |
| `.com` is *causing* `.in` to lose rankings | ~~[MF]~~ → **[H]** | **DOWNGRADED. Causation is not demonstrated.** |
| Domain consolidation is "the fastest SEO win" | ~~[R]~~ | **WITHDRAWN** — cannot be asserted without the data below |

**Corrected wording to use from here on:** *"possible entity consolidation / cannibalisation risk between `samratpolyresins.in` and `samratpolyresins.com`, unquantified."*

**Why I was wrong to imply causation.** A US-locale SERP snapshot cannot establish what Indian users see, and brand-query composition alone cannot show that one property *displaces* another. `.in` may never have ranked for those queries; `.com` may hold them through age and IndiaMART's link profile; both may serve different query classes without conflict.

**Data required before any domain recommendation** (none currently held) — **[U]**:
1. `.com` clicks / impressions / positions (its own Search Console)
2. `.in` clicks / impressions / positions
3. Backlink profile of each domain
4. Leads/conversions attributable to each
5. IndiaMART contractual control — can `.com` even be redirected?
6. Historical ranking change over 6–12 months
7. Which domain Google treats as authoritative per query class

**Action taken: none.** Neither domain touched. A `DOMAIN_CONSOLIDATION_DECISION.md` comparing the four options you listed is deferred to the next batch, as it is a research deliverable, not an implementation one.

### 1.2 Classification of the other headline conclusions

| Conclusion | Class | Verdict after re-validation |
|---|---|---|
| Technical hygiene is strong (290/290 × 200, no dup/missing titles, descriptions, canonicals, H1s; correct redirects/404s) | **[MF]** | **Confirmed** |
| Both hero encodes downloaded on one page load | **[MF]** | **Confirmed and materially worse than reported** — see §4 |
| Brand-film poster shipped as a 1.7 MB unoptimised PNG | **[MF]** | **Confirmed** |
| Homepage FCP = 3,528 ms | ~~[MF]~~ | **RETRACTED — invalid measurement.** See §4.1 |
| Category hubs are thin and under-linked | **[MF]** | **Confirmed** (1 contextual inlink each, ~330 words) |
| Mega-menu bypasses hubs | **[MF]** | **Confirmed** — headings were `<span>` |
| `/products/` index does not link hubs | ~~[MF]~~ | **WRONG — it already did** (`familyPageSlugs`). Self-corrected in §5 |
| TDS/SDS library has no crawlable HTML surface | **[MF]** | **Confirmed** |
| Content:commercial ratio 6.3:1 *is a problem* | ~~[MF]~~ → **[H]** | **Downgraded** — the ratio is a fact, the harm is not. See §3.3 |
| `astro.config.mjs` comment about `.com` robots.txt is false | **[CF]** | **Confirmed** — corrected in code this batch |
| Cloudflare blocks several AI crawlers | **[MF]** | **Confirmed**; impact re-stated correctly in §7 |

---

## 2. Corrected site-architecture arithmetic

### 2.1 Reconciled category table

| # | Category (products.js) | Products | Existing hub | Proposal | Justification |
|---|---|---|---|---|---|
| 1 | GP Resins | **7** | `/products/gp-resins/` | **REBUILD** (done this batch) | Largest family; owns "GP resin" intent |
| 2 | Sheet Grade Resins | **2** | — | **CONDITIONAL** | Only 2 grades. Build only if sheet/roofing intent can be served beyond the 2 product pages |
| 3 | GelCoat Resin | **1** | — | **NO HUB** | A hub over 1 product is a thin duplicate. Strengthen `/products/gp-gelcoat-resin/` instead |
| 4 | Fire Retardant Resins | **2** | — | **CONDITIONAL** | ⚠️ Highest-risk copy on the site; fire claims must come only from TDS |
| 5 | FRP Allied Products | **7** | — | **NEW (recommended)** | 7 distinct non-resin items (pigment, glass fibre, styrene, thinner, brushes, soapstone, wax) |
| 6 | Epoxy & Casting | **4** | `/products/epoxy-resins/` | **REBUILD — BLOCKED (Q2)** | Deferred; second domain unresolved |
| 7 | Industrial & Specialty Resins | **6** | — | **NEW (recommended)** | **Omitted from the original plan — that was an error.** 2nd-largest category |
| 8 | Hardeners | **2** | — | **CONDITIONAL, as ONE hub** | MEKP (catalyst) + cobalt octoate (accelerator) are different functions but bought together for one job. One page, not two |
| | **Total** | **31** | **2** | | |

### 2.2 Corrected net-new page count

The original "nine net-new pages" was **internally inconsistent**. It counted 2 rebuilds as new, included a hub for a category that does not exist, and omitted a real category.

| Item | Net-new? |
|---|---|
| Rebuild `/products/gp-resins/` | **No** — page already existed |
| Rebuild `/products/epoxy-resins/` | **No** — already exists (and blocked) |
| New hub: FRP Allied Products | Yes (1) |
| New hub: Industrial & Specialty Resins | Yes (1) |
| Conditional hubs: Sheet Grade, Fire Retardant, Hardeners | 0–3 |
| GelCoat hub | **No — rejected** |
| "FRP Resins" hub | **No — reclassified**, see §2.3 |
| `/technical-documents/` | Yes (1) |
| `/manufacturing/` | Yes (1), evidence-blocked |
| **Corrected total** | **4 minimum → 7 maximum** (not 9) |

### 2.3 Why an "FRP Resins" hub was proposed — and why it is now withdrawn

**"FRP Resins" is not a category in `products.js`.** I proposed it as a *search-intent* page (`FRP resin`, `fiberglass resin`, `resin for FRP work`) while listing it among *category hubs* — conflating two different things. That was the inconsistency you identified.

FRP intent is already served across GP Resins, Sheet Grade, Fire Retardant and FRP Allied Products, plus 37 application pages. A cross-cutting hub would either duplicate `/products/` or cannibalise the GP hub.

**Withdrawn.** If FRP intent needs a dedicated owner, that is a separate, evidenced decision requiring Search Console data — not a category hub.

---

## 3. Unsupported scoring rules — removed

I applied several conventional "SEO rules" as if they were defects. They are not, and I am withdrawing them as findings.

### 3.1 Title length (32 pages > 60 chars)
**Withdrawn as a defect.** 60 characters is a rule of thumb, not a threshold; truncation is pixel-width dependent, and Google frequently rewrites titles regardless. Retained only as: *a list of candidates to review once Search Console CTR data exists* — assessed on rendered pixel width, query alignment, uniqueness, actual truncation and page value.
**No titles were mass-rewritten.** The rebuilt GP hub's title renders at **51 characters**, comfortably within budget, but that was a by-product, not the goal.

### 3.2 Meta description length (77 pages > 160 chars)
**Withdrawn as a defect.** Descriptions are not a ranking factor and Google rewrites them routinely. Deferred to CTR data. **None rewritten.**

### 3.3 The 6.3:1 informational:commercial ratio
**Downgraded from finding to observation.** The ratio is real; it does not by itself prove harm. What is actually demonstrable — and what justified this batch — is narrower and measurable:
- Commercial hubs had **1 contextual inlink each** **[MF]**
- Hubs contained **~330 words** with no grade comparison, no TDS links, no selection guidance **[MF]**
- The mega-menu — the most repeated template on the site — linked past them **[MF]**
- The TDS/SDS library had **no crawlable HTML entry point** **[MF]**

Those are concrete architecture and authority-flow defects. The ratio was rhetoric.

### 3.4 Sitemap `lastmod`
**Reclassified to low priority — and NOT implemented.** Investigation showed the data cannot support it honestly:
- 215 resource articles carry only **5 distinct `publishDate` values** (bulk publishes) **[MF]**
- Products and applications have **no date fields at all** **[MF]**
- Articles demonstrably edited after publication still carry the original `publishDate`

Emitting that as "last modified" would assert a false freshness signal. **To make this viable later:** add a maintained `lastUpdated` field per content entry, or derive per-entry dates from git history — then emit `lastmod` only for entries that have one.

### 3.5 Organization schema "missing" optional properties
**Withdrawn.** `sameAs`, `geo`, `areaServed`, `taxID` are optional. Adding them to enlarge the markup is not a benefit. Any future addition must be justified by a specific goal (e.g. entity disambiguation) and use only already-public facts. **Nothing added this batch.**

### 3.6 Product schema lacking `offers`
**Withdrawn as a defect.** With no public transactional pricing, omitting `offers` is **correct** — and the code comment already says so. Inventing price/availability would be false markup. Revisit only if the price policy changes.

---

## 4. Performance measurement — re-validated

### 4.1 The 3,528 ms FCP was invalid. Retracted.

**You were right to challenge it.** FCP (3,528 ms) exceeded `load` (1,236 ms), which is impossible in a normally-rendering foreground tab.

**Cause:** the measurement was taken through an automation browser pane that was **backgrounded/hidden**. Chromium suppresses paint in non-visible tabs, so the first paint timestamp was deferred until the tab became visible, while network and load events proceeded normally. Resource/network figures from that session remain valid; **all paint timings from it are void.**

### 4.2 Re-measurement method

Playwright + Chromium, **fresh browser context per run** (cold cache via `Network.setCacheDisabled`), `document.visibilityState === "visible"` asserted in every run, **3 runs per profile, medians reported**. Location: local machine (Ludhiana/IN), against the local production build at `http://localhost:4399`, 2026-09-08 ~17:31 UTC (BEFORE) / ~17:42 UTC (AFTER).
Profiles: **desktop-fast** 1440×900 unthrottled · **mobile-fast** 390×844 unthrottled · **mobile-slow4g** 390×844 @ 400 kbps / 400 ms RTT / 4× CPU.

⚠️ **Lab only.** These are not CrUX field data and are not the Core Web Vitals ranking signal. Localhost removes real network latency for same-origin assets, which is why throttled runs matter more than the fast ones.

### 4.3 Corrected BEFORE figures (base `19cddab`)

| Metric | desktop-fast | mobile-fast | mobile-slow4g |
|---|---|---|---|
| TTFB | 6 ms | 6 ms | 5 ms |
| **FCP** | **244 ms** | **212 ms** | 2,448 ms |
| **LCP** | 376 ms | 292 ms | **14,480 ms** |
| CLS | 0 | 0 | 0.038 |
| TBT (approx) | 0 | 0 | 0 |
| Requests | 19 | 17 | 7 |
| **Total bytes** | 23,104,624 | **35,925,603** | 234,493 |
| **Video bytes** | 20,747,904 | **33,493,356** | 0 (never completed) |
| Image bytes | 2,340,444 | 2,415,928 | 218,174 |

**So FCP was never the problem — the payload is.** Mobile pulled **35.9 MB**.

### 4.4 Double-video behaviour, confirmed per profile

| Profile | Requested | Initiator | Start | Transferred | Playback |
|---|---|---|---|---|---|
| **desktop** BEFORE | `hero-background.mp4` | HTML `<source src>` | 248 ms | 20,747,904 B (full) | ✅ |
| | `hero-background-mobile.mp4` | HTML `<source src>` | 248 ms | 0 B (**requested then aborted**) | — |
| **mobile** BEFORE | `hero-background.mp4` | HTML `<source src>` | 226 ms | **20,747,904 B (full)** | ❌ never displayed |
| | `hero-background-mobile.mp4` | HTML `<source src>` | 227 / 400 ms | 6,372,726 B (full) | ✅ |

**Mechanism [MF]:** both `<video>` elements shipped a resolved `<source src>`, so the browser began fetching both during HTML parse. `display:none` does **not** prevent an `autoplay`/`preload="metadata"` video from downloading. The existing JS that stripped the unused source ran on `astro:page-load` — i.e. after `window.load` — far too late.

A code comment asserted the opposite (*"a display:none `<video>` is never fetched or decoded by the browser"*). **That comment was false and has been corrected.**

**Worse than originally reported:** the original audit said mobile's file was wasted on desktop. The reverse is the serious case — **mobile devices downloaded the 20.7 MB desktop encode they can never display.**

### 4.5 AFTER figures (this batch)

| Metric | desktop-fast | Δ | mobile-fast | Δ | mobile-slow4g | Δ |
|---|---|---|---|---|---|---|
| FCP | 208 ms | −36 ms | 196 ms | −16 ms | 2,384 ms | −64 ms |
| LCP | 320 ms | −56 ms | 272 ms | −20 ms | 14,452 ms | −28 ms |
| CLS | 0 | — | 0 | — | 0.038 | — |
| Requests | 18 | −1 | 15 | −2 | 7 | — |
| **Video requests** | **1** | −1 | **1** | **−2** | 0 | — |
| **Video bytes** | 20,747,904 | 0 | **6,372,726** | **−27,120,630** | 0 | — |
| Image bytes | **690,015** | **−1,650,429** | **765,499** | **−1,650,429** | 218,174 | — |
| **Total bytes** | **21,454,250** | **−1,650,374** | **7,154,599** | **−28,771,004** | 234,548 | — |

**Headline: a mobile visitor now transfers 7.15 MB instead of 35.93 MB — 28.8 MB less, an 80% reduction.** On metered Indian mobile data that is a direct cost saving per visit, independent of any ranking effect.

Poster: **PNG 941×1672, 1,740 kB → WebP derivatives 29 kB / 83 kB / 128 kB** (served responsively; the video `poster` uses the 1020px WebP). Original PNG preserved byte-identical (SHA-256 `eb349919…c38cf26`) in both `public/videos/` and `src/assets/brand-film/`.

### 4.6 What this batch did **not** fix — stated plainly

**Slow-4G LCP is essentially unchanged: 14,480 ms → 14,452 ms.**
The LCP element is the hero poster image (`hero-video-poster-mobile…webp`) **[MF]**. On a 400 kbps link the hero video — even the smaller 6.4 MB encode — saturates the connection and starves the poster that *is* the LCP element. Cutting 28.8 MB does not help when the remaining 6.4 MB still exceeds what the link can deliver during load.

**This is the most important open performance problem, and it is out of scope for this batch.** Options for the next batch: defer the video request until after LCP; honour `Save-Data` / `navigator.connection`; re-encode to a smaller/AV1 variant; or serve a poster-only hero on slow connections. Each changes approved hero behaviour and needs your decision.

---

## 5. Internal-link conclusions — re-validated

### 5.1 Counting method (previously unstated)
Links were counted from the **built HTML** by locating `href="<target>"` and classifying each by the DOM region it appears in: **nav** (before `</header>`), **breadcrumb** (inside `.wrap.crumb`), **footer** (after last `<footer`), **contextual** (everything else = editorial body links). One count per region per source page.

### 5.2 Correction: `/products/` already linked the hubs
The audit listed "make `/products/` index headings link to hubs" as a needed fix. **It was already implemented** via `familyPageSlugs` in `products/index.astro`. That single link *was* the "1 inlink". Correction accepted; the code was refactored (shared `CATEGORY_HUBS`) rather than "fixed".

### 5.3 Before → after (measured)

| Target | Region | BEFORE | AFTER |
|---|---|---|---|
| `/products/gp-resins/` | nav (boilerplate) | **0** | **291** |
| | breadcrumb | 0 | **7** (the 7 GP grades) |
| | contextual (body) | **1** (`/products/`) | 1 |
| | footer | 0 | 0 |
| `/products/epoxy-resins/` | nav | **0** | **291** |
| | breadcrumb | 0 | **4** (the 4 Epoxy & Casting grades) |
| | contextual | **1** | 1 |

BEFORE verified directly against live production (= base commit): homepage 0, `/products/` 1, product pages 0.

**Honest reading:** the 291 is **boilerplate navigation**, which Google discounts. The genuinely meaningful gain is the **7 (and 4) breadcrumb up-links** — real hierarchical signals from grade pages to their family — plus the hubs now being reachable from every page rather than one. **Contextual body links are still 1 each.** Growing those requires editorial linking from resources/applications, which is a later batch.

### 5.4 "Zero orphan pages" — methodology corrected
The original figure came from crawling **sitemap-discovered URLs** and counting any `href` to them, **including sitewide header/footer links**. That makes "0 orphans" nearly tautological.

**Corrected statement:** no page is unreachable, but reachability was largely supplied by boilerplate. Before this batch the two hubs had **one contextual link each** and were *functionally* orphaned in editorial terms. A sitemap-discovered page with no crawlable contextual link remains an internal-linking problem — the original wording obscured that.

---

## 6. Structured data — quality-tested, not just counted

Representative pages parsed from the built output; JSON validity, canonical consistency, breadcrumb accuracy and **visible-content correspondence** checked.

| Page type | JSON valid | Types | Breadcrumb tail == canonical | FAQ Qs visible on page | Fabricated price/rating/review/availability |
|---|---|---|---|---|---|
| Home | ✅ | Organization | n/a | n/a | **none** |
| Product (GP Clear) | ✅ | Organization, BreadcrumbList, Product, FAQPage | ✅ | ✅ 7 Qs, visible | **none** |
| Resource | ✅ | Organization, Article, BreadcrumbList, FAQPage | ✅ | ✅ 9 Qs, visible | **none** |
| Application | ✅ | Organization, BreadcrumbList, Article, FAQPage | ✅ | ✅ 5 Qs, visible | **none** |
| Category hub (rebuilt) | ✅ | Organization, BreadcrumbList, CollectionPage | ✅ | n/a | **none** |
| About | ✅ | Organization | n/a | n/a | **none** |

**Findings:**
- Structured data quality is **good**. FAQ markup is legitimate — the questions are genuinely visible in the rendered page, not hidden markup.
- `Product` correctly omits `offers`; `url` matches canonical; 16 real `additionalProperty` spec values.
- **No `LocalBusiness`, `geo`, `areaServed`, `taxID`, `offers`, `AggregateRating` or `Review` were added.** Schema was not enlarged for its own sake.
- **New observation [MF]:** application pages emit the breadcrumb `Home > GP Clear Resin > Resin for General FRP Lamination` — it skips an "Applications" level and does not mirror the URL path. Logged for review; **not changed** (outside this batch's authorisation).
- On FAQ rich results: Google restricts FAQ rich results to authoritative government/health sites, so realistic SERP benefit is now **low**. The markup is harmless and accurate — no reason to remove it, no reason to extend it.

---

## 7. AI crawler user agents — factual correction

The original document implied blocking training crawlers makes the site "invisible in AI answers". **That is imprecise and is corrected here.** No Cloudflare setting was changed.

| User agent | Purpose | Live status | Effect of blocking |
|---|---|---|---|
| **Googlebot** | Google Search indexing | **Allowed** | — |
| **Google-Extended** | Gemini training / grounding | **Blocked** | **No effect on Google Search ranking or indexing.** Does not remove the site from AI Overviews, which are served via Googlebot |
| **GPTBot** | OpenAI model training | **Blocked** | Content not used for training. Does **not** by itself remove the site from ChatGPT browsing answers |
| **OAI-SearchBot** | Indexes for ChatGPT search results | **Not listed → allowed** | Site remains eligible to appear in ChatGPT search |
| **ChatGPT-User** | User-triggered live retrieval | **Not listed → allowed** | A user asking ChatGPT to open the page still works |
| **ClaudeBot** | Anthropic training crawler | **Blocked** | Training only |
| **Claude-User / Claude-SearchBot** | User-triggered fetch / search indexing | **Not listed → allowed** | Live retrieval still works |
| **CCBot** | Common Crawl (open dataset) | **Blocked** | Excluded from a dataset many downstream tools use |
| Bytespider, Amazonbot, Applebot-Extended, meta-externalagent | Training / vendor crawlers | **Blocked** | Training only |

**Corrected conclusion:** the current configuration blocks **training and dataset** crawlers while leaving **search-indexing and user-triggered retrieval** agents allowed. The practical loss is narrower than stated — mainly reduced presence in training corpora and Common Crawl-derived tools, not wholesale invisibility in AI answers. **This is a reasonable default and is not urgent.** Recommendation deferred; no change made.

---

## 8. Findings that survive validation (basis for this batch)

| Finding | Class | Action |
|---|---|---|
| Both hero encodes downloaded; mobile pulled 20.7 MB it cannot display | **[MF]** | **Fixed** |
| Brand-film poster 1.7 MB unoptimised PNG | **[MF]** | **Fixed** |
| Genuine category hubs unreachable from main navigation | **[MF]** | **Fixed** (only for hubs that exist) |
| GP hub thin: no comparison, no TDS links, no selection guidance | **[MF]** | **Fixed** from verified data |
| Grade pages had no up-link to their family | **[MF]** | **Fixed** via breadcrumb |
| `astro.config.mjs` `.com` robots claim false | **[CF]** | **Corrected** |
| TDS/SDS library not crawlable | **[MF]** | **Deferred** — next batch |
| Slow-4G LCP ≈ 14.5 s driven by hero poster starved by video | **[MF]** | **Open — not fixed** |

**On the TDS/SDS library:** it is *not* an advantage merely because Revex lacks one. It becomes an advantage only if it is crawlable (an HTML index, not bare PDFs), useful (grouped by family, each document tied to its grade), technically accurate (the documents already are), and connected to the commercial pages. The GP hub now links every grade's TDS **and** SDS directly — a first, concrete step.

---

## 9-bis. CORRECTION (2026-09-08, later same day) — the Slow-4G conclusion in §4.6 was wrong

§4.6 above states that Slow-4G LCP is driven by *"the hero video — even the smaller 6.4 MB encode — saturat[ing] the connection and starv[ing] the poster that is the LCP element."*

**That conclusion is retracted.** It was based on the same defective instrumentation that produced the original FCP error: **Resource Timing only records completed requests**, so a 6.4 MB video still in flight at the measurement cutoff appeared as `videoBytes: 0` / `videoReqs: []`. I then reported "0 → 0 video requests" and "0.23 MB total" while simultaneously claiming the video saturated the link — a contradiction that should not have survived review.

Re-measured with CDP request-lifecycle tracing (`Network.requestWillBeSent` / `dataReceived` / `loadingFinished` / `loadingFailed`), 5 cold runs, medians:

| Measurement | Value |
|---|---|
| Video requests initiated | **1** |
| Video bytes transferred **before LCP** | **0** |
| Video bytes at 20 s cutoff | ~63,750 (~1% of file) |
| Request state at cutoff | **in flight** (not cancelled, not failed) |
| Total bytes before LCP | 404,563 |

**The video contributes nothing to the pre-LCP critical path.** The real pre-LCP competitors are poster images — including a **duplicate of the LCP image itself** (the 1920 px variant, 85,804 bytes, requested by three `display:none` desktop-only elements on a 390 px viewport), a **197 KB `logo.jpg` rendered at 40×40**, two below-the-fold video `poster` attributes (132 KB + 47 KB, and posters are never lazy), and ~102 KB of cross-origin Google Fonts.

**Proof by intervention:** removing those duplicate/below-fold poster loads and prioritising the real LCP image (Option A in `HERO_LOADING_OPTIONS.md`) moved Slow-4G LCP from **13,200 ms → 8,308 ms (−37%)** and pre-LCP bytes from **404,563 → 179,117 (−56%)** — while re-encoding the video (Option B, −16.9 MB desktop / −5.4 MB mobile) changed LCP by **+24 ms, i.e. not at all**.

**Corrected statement:** the hero video is a **data-cost and post-LCP** problem, not a render-blocking one. The render problem is poster hygiene. Both are worth fixing, for different reasons.

Two further corrections to §8 of this document:
- *"Slow-4G LCP ≈ 14.5 s driven by hero poster starved by video"* → **wrong mechanism**. The poster is starved by *other posters and the logo*, not by the video.
- The Option-A finding also supersedes the implication in `TECHNICAL_SEO_BACKLOG.md` T3 that T1+T2 alone would fix FCP/LCP. They did not, and could not.

---

## 9-ter. CORRECTION — the "ranking loss" premise

Search Console access (obtained 2026-09-08) shows **no data for `samratpolyresins.in` before ~24 July / 1 August 2026**, confirmed by the "Last 16 months" range returning identical totals to "3 months". **There is no 3–6 month decline to diagnose; the property is ~6 weeks old.** Full evidence in `SEO_PERFORMANCE_DIAGNOSIS.md`.

This also corrects §1.2 of this document, which listed the `.com` entity risk as a live hypothesis for `.in` ranking loss: **there is no measured `.in` ranking loss for it to explain.** The entity-overlap risk remains real but is now unattached to any observed decline, and `samratpolyresins.com` is **not present in the Google account**, so it cannot be measured at all from here.

Finally, `COMPETITOR_GAP_ANALYSIS.md` §6 claimed head commercial terms were *"not realistic"* to win. Search Console shows Samrat already at **position 1.0–2.5** for *polyester resin manufacturers in india*, *polyester resin supplier*, *resin manufacturer in india*, *resin manufacturers in india* and *plastic resin manufacturers*. **That claim is withdrawn** — the constraint is query demand volume, not ranking ability.

---

## 9. Remaining unknowns requiring access

Unchanged from `SEO_BASELINE.md` §8 and still blocking: Search Console (`.in` **and** `.com`), GA4, backlink data, CrUX field data, Google Business Profile, and confirmation of `samratepoxyresins.com`. **Ranking-loss causation cannot be diagnosed without these, and I will not estimate it.**
