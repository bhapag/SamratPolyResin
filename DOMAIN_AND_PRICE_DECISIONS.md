# DOMAIN_AND_PRICE_DECISIONS.md — analysis for your decision (nothing changed)

**Date:** 2026-09-08 · Covers the three decisions you deferred: **Q1 pricing**, **Q3 `.com` domain**, **Q4 AI crawlers**.
No domain, DNS, Cloudflare, robots, pricing or schema change has been made.

---

## Q1 — Price strategy

### New evidence that changes my earlier advice

In Phase 1 I argued price queries were **unwinnable** without published prices. **Search Console contradicts that:**

| Query | Position | Clicks | CTR |
|---|---|---|---|
| **lr resin price** | **3.1** | 1 | 7.1% |
| uv resin price | 41.2 | 0 | — |
| mekp hardener price | 11.0 | 0 | — |

`/products/lamination-resin/` ranks **position 3** for a price query **while showing "Price on Request"** — and earns clicks. So price transparency is **not a precondition** for ranking on price intent. My earlier claim was wrong and is withdrawn.

What remains true: Samrat's prices are **already public** on its own IndiaMART-managed `.com` (GP Clear ₹140/kg, LR ₹140/kg, GP White ₹135/kg, UPR ₹130/kg, GP Yellow ₹124/kg, Button ₹175/kg, Clear Casting ₹700/kg, Epoxy Art ₹700/kg) and on IndiaMART listings. So confidentiality is *already* not preserved.

### The six options

| Option | Ranking effect | Lead quality | Rich results | Ops burden | Risk |
|---|---|---|---|---|---|
| **A. Fixed public prices** | Small positive on price queries | ↑ volume, ↓ qualification | `offers` eligible | **High** — must track raw-material volatility | Stale price = lost trust; competitors see exact numbers |
| **B. "Starting from ₹X/kg"** | Similar to A | Good balance | `offers` with `lowPrice` | Medium | Anchoring low; still needs review |
| **C. Price range (₹X–₹Y/kg)** | Similar to A | **Best qualification** | `AggregateOffer` | Medium | Wide ranges look evasive |
| **D. MOQ-dependent ("from ₹X at 200 kg")** | Similar | **Highest** — self-filters small buyers | `offers` + `eligibleQuantity` | Medium-High | Complexity in copy |
| **E. "Request current quote" (status quo)** | **Already ranking pos 3** | High qualification, lower volume | Not eligible | **None** | Some buyers bounce to price-showing competitors |
| **F. Hide entirely** | — | — | — | None | Worse than E; no reason to choose |

### Factors you asked me to weigh
- **Raw-material volatility** — UPR pricing tracks styrene/glycol/phthalic anhydride. Fixed public prices (A) create a standing accuracy liability. Ranges (C) or "from" (B) absorb volatility.
- **Order quantity** — packaging is 200–225 kg drums; per-kg price is quantity-sensitive, which argues for **D**.
- **GST and freight** — prices would need an explicit "ex-works, exclusive of GST and freight" qualifier, or they will be read as delivered prices and generate disputes.
- **Grade differences** — the catalogue spans ₹124 → ₹700/kg. A single site-wide claim is impossible; this must be per-grade.
- **Lead quality** — E produces fewer, better-qualified enquiries. With only ~20–25 lead actions/28 days, **volume is currently the scarcer input**, which mildly favours B/C/D.
- **Product schema** — `offers` requires a real price. Under E, omitting `offers` is correct and the existing code comment already says so.
- **`.com` already shows prices** — so A–D leak nothing new; they mainly *align* Samrat's own properties.

### Recommendation
**Option C or D, per-grade, with an explicit "ex-works, excluding GST and freight, subject to confirmation" qualifier** — implemented only after you confirm the commercial policy and supply the ranges. **Not A** (volatility liability). **E is a perfectly defensible status quo** and is already ranking; there is no urgency.

⛔ **No price or `offers` markup will be added until you confirm.**

---

## Q3 — `samratpolyresins.com`

### Decisive new fact
The Google account contains **three** properties: `samratfrptraders.com`, `samratpolyresins.in` (domain), `https://samratpolyresins.in/` (URL-prefix). **`samratpolyresins.com` is not among them.**

Therefore its clicks, impressions, positions, backlinks and conversions **cannot be measured from here at all**. Every option below is unquantified until IndiaMART grants access.

### The four options

| # | Option | Pros | Cons | Data needed first |
|---|---|---|---|---|
| **1** | **Keep both, clearly differentiated roles** (`.com` = IndiaMART storefront/lead-gen; `.in` = authoritative technical site) | No contract risk; keeps IndiaMART lead flow; reversible | Entity ambiguity persists; brand SERP still shows `.com` | `.com` traffic + lead volume |
| **2** | **Reduce commercial duplication** — trim `.com` to a profile/contact presence, keep depth on `.in` | Cuts overlap without severing IndiaMART | Requires IndiaMART cooperation; partial benefit | Which `.com` pages actually earn traffic |
| **3** | **Migrate `.com` → `.in`** (301s) | Maximum consolidation; single entity | **May be contractually impossible**; forfeits IndiaMART lead flow; irreversible if botched | Contract terms; `.com` backlinks; redirect capability |
| **4** | **Leave `.com` purely as an IndiaMART lead property** | Zero effort; keeps a working lead source | `.in` keeps losing brand SERP real estate | `.com` lead volume vs `.in` |

### Required before deciding
1. `.com` Search Console access (clicks, impressions, positions)
2. `.com` lead volume/quality — how many enquiries actually arrive via IndiaMART?
3. IndiaMART contract: is redirection or de-indexing even permitted?
4. Backlink profile of each domain
5. Whether IndiaMART would migrate content or only host it

### Recommendation
**Option 1 now; revisit 2 or 3 only with data.** Given `.in` is ~6 weeks old and already ranks 1–3 for several manufacturer queries, there is **no evidence of harm** urgent enough to justify touching a paid lead-generation asset. My earlier "fastest SEO win" framing was unsupported and is withdrawn.

⛔ **No domain action taken or recommended for execution.**

---

## Q4 — AI crawler access

### Correct user-agent taxonomy (this matters — the categories are routinely conflated)

| User agent | Purpose | Live status | Consequence of the current block |
|---|---|---|---|
| **Googlebot** | Google Search crawling/indexing | **Allowed** | — |
| **Google-Extended** | Gemini model training & grounding | **Blocked** | **No effect on Google Search ranking or indexing.** Does not remove the site from AI Overviews (served via Googlebot) |
| **GPTBot** | OpenAI *model training* | **Blocked** | Content excluded from training corpora only |
| **OAI-SearchBot** | Indexes pages for **ChatGPT search results** | **Not listed → allowed** | Site remains eligible in ChatGPT search |
| **ChatGPT-User** | **User-triggered** live fetch | **Not listed → allowed** | A user asking ChatGPT to open the page still works |
| **ClaudeBot** | Anthropic *training* crawler | **Blocked** | Training only |
| **Claude-User / Claude-SearchBot** | User-triggered fetch / search index | **Not listed → allowed** | Live retrieval still works |
| **CCBot** | Common Crawl (open dataset) | **Blocked** | Excluded from a dataset many downstream tools derive from |
| Bytespider, Amazonbot, Applebot-Extended, meta-externalagent | Vendor training crawlers | **Blocked** | Training only |

### Empirical evidence
GA4 (28 days) reports an **"AI Assistant" channel with 22 sessions (~5% of all sessions)** — despite the training-crawler blocks. This is direct evidence for the corrected position: **blocking training crawlers does not make a site invisible in AI answers**, because search-indexing and user-triggered agents remain allowed.

My earlier statement that Samrat is *"currently invisible in that channel"* was **wrong** and is retracted.

### Recommendation
**Leave the current configuration unchanged.** It blocks *training/dataset* use while permitting *search and user-triggered retrieval* — a coherent, defensible default, and the measured AI-assistant traffic proves it is not costing visibility. Revisit only if you specifically want the content used for model training.

**Minor tidy-up (optional, cosmetic):** the live file contains two `User-agent: *` groups (Cloudflare's managed block plus the repo's own). Google merges them; it is untidy but harmless.

⛔ **No Cloudflare or robots.txt change made.**
