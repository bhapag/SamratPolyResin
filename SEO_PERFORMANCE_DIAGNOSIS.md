# SEO_PERFORMANCE_DIAGNOSIS.md — Samrat Poly Resins

**Date:** 2026-09-08 · **Data source:** Google Search Console + GA4, read-only, accessed live
**Properties inspected:** `sc-domain:samratpolyresins.in`, `https://samratpolyresins.in/`, GA4 `547377291`
**Nothing was changed.** No indexing requested, no sitemap submitted, no settings/events/permissions altered.

---

> ⚠️ **This document was corrected on 2026-09-09.** Several conclusions below were overstated in the original version. The corrections are applied inline and summarised in `SEO_AUDIT_VALIDATION_ADDENDUM.md` §9-quater. Where this document previously said *"there is no ranking loss"*, read §1 as now written.

## 1. The headline finding: the reported decline can be neither confirmed nor disproved

**Search Console holds no data for `samratpolyresins.in` before ~1 August 2026.**

Verified directly: selecting **"Last 16 months"** returns the *identical* totals as "3 months" — 122 clicks / 5,108 impressions — and the chart axis still spans only **01/08/2026 → 06/09/2026**. The separate URL-prefix property (`https://samratpolyresins.in/`) reaches marginally further back, to **~24 July 2026** (131 clicks / 5,231 impressions). Page Indexing corroborates it: the indexed-pages curve rises from a near-zero base in **early August 2026**.

**Consequence, stated correctly:** Search Console **cannot confirm or disprove** your report that rankings were stronger before that period. **Absence of historical data is not evidence that no decline occurred.** The measurement window simply does not reach back far enough to contain the period in question.

*(An earlier version of this document said "there is no ranking loss." That was an overstatement and is withdrawn.)*

### Why the history is short — established from repository evidence, not guessed

| Date | Event | Source |
|---|---|---|
| **2026-07-16** | First commit: *"Initial commit: Samrat Poly Resins catalog site"* | `516e1a5` |
| 2026-07-19 | Canonical/site URL set to `samratpolyresins.in` (previously pointed at `.com`) | `cb46669` |
| **2026-07-25** | Google Search Console verification meta tag added | `81447f5` |
| ~2026-07-24 / 2026-08-01 | First GSC data (URL-prefix / domain property) | GSC |

**Cause: a recent website launch combined with recent property verification.** This `.in` site is ~8 weeks old and its GSC property was verified 2026-07-25 — so no earlier data can exist in it. This is **not** a migration of an established `.in` site, and **not** a tracking misconfiguration.

**Important distinction:** the *business* dates from 2017 and `samratpolyresins.com` long predates this site. A decline in the business's overall search visibility — on `.com`, on IndiaMART listings, or in aggregate — is entirely possible and **would not appear in this property at all**. That remains an open, testable question (see §6), not a closed one.

---

## 2. What the data actually shows (all figures measured)

### 2.1 Totals — entire available history (24 Jul / 1 Aug → 6 Sep 2026)

| Metric | Domain property | URL-prefix property |
|---|---|---|
| Clicks | **122** | 131 |
| Impressions | **5,108** | 5,231 |
| CTR | **2.4%** | 2.5% |
| Avg position | **14.4** | 14.4 |

Last 28 days: **103 clicks · 4,420 impressions · 2.3% CTR · position 14.3** — i.e. ~84% of all clicks fell in the most recent 28 days. **The trend is upward, not downward.**

### 2.2 Geography

| Country | Clicks | Impressions | Note |
|---|---|---|---|
| **India** | **105** | 3,495 | 86% of clicks — correct target market |
| UAE | 3 | 65 | |
| **United States** | **2** | **413** | 8% of impressions, ~0 clicks — see §3.3 |
| Kenya | 2 | 4 | |
| UK | 1 | 127 | |
| Bangladesh | 1 | 64 | |

### 2.3 Devices

| Device | Clicks | Impressions | CTR |
|---|---|---|---|
| **Mobile** | **64** | 2,365 | 2.7% |
| Desktop | 57 | 2,725 | 2.1% |
| Tablet | 1 | 18 | 5.6% |

**Mobile is 52% of clicks.** This directly justifies the mobile payload work in commit `f46988e` (35.9 MB → 7.15 MB) as a commercial decision, not just a technical one.

### 2.4 Top landing pages (246 of 290 pages have impressions)

| Page | Clicks | Impr. | CTR | Read |
|---|---|---|---|---|
| `/` | 28 | 728 | 3.8% | Brand + generic entry |
| `/products/lamination-resin/` | 10 | 221 | 4.5% | **Best commercial performer** |
| `/resources/what-is-gp-polyester-resin/` | 8 | 301 | 2.7% | Informational works |
| `/resources/what-is-lamination-resin/` | 6 | 65 | 9.2% | **Highest CTR** |
| `/products/fiberglass-epoxy-resin/` | 4 | 64 | 6.3% | |
| `/products/button-grade-resin/` | 4 | 51 | 7.8% | |
| `/products/dmc-smc-resin/` | 4 | 27 | 14.8% | Very high CTR, low volume |
| **`/products/unsaturated-polyester-resin/`** | **3** | **337** | **0.9%** | 🔴 **Worst CTR at high volume** |
| `/products/gp-yellow-resin/` | 3 | 60 | 5.0% | |
| `/resources/nc-thinner-vs-general-purpose-thinner/` | 3 | 47 | 6.4% | |

### 2.5 Queries — with the full context that was missing

**Scope of every figure in this section:** property `sc-domain:samratpolyresins.in`, **date range 2026-08-01 → 2026-09-06 (36 days)**, search type Web, **country = India**, **all devices**, from the CSV export (not the UI). Landing page is not attributable per-query in this export.

⚠️ **Coverage caveat — important.** GSC anonymises low-volume queries. The India query table lists **264 queries totalling 25 clicks / 783 impressions**, against India totals of **105 clicks / 3,495 impressions**. **The visible query slice therefore represents only ~24% of clicks and ~22% of impressions.** Conclusions drawn from it describe a minority of traffic.

| Query | Branded? | Clicks | Impr. | CTR | Position |
|---|---|---|---|---|---|
| samrat poly resins | **Branded** | 12 | 133 | 9.0% | 2.4 |
| resin manufacturers in india | Non-brand | 1 | **8** | 12.5% | 1.75 |
| polyester resin manufacturers | Non-brand | 0 | **11** | 0% | 2.27 |
| plastic resin manufacturers | Non-brand | 0 | **6** | 0% | 1.83 |
| polyester resin manufacturers in india | Non-brand | 0 | **2** | 0% | 1.0 |
| polyester resin manufacturer | Non-brand | 0 | **2** | 0% | 2.5 |
| resin manufacturers | Non-brand | 0 | **2** | 0% | 2.5 |
| frp resin suppliers near me | Non-brand | 0 | **2** | 0% | 1.0 |
| polyester resin supplier | Non-brand | 0 | **1** | 0% | 1.0 |
| resin manufacturer in india | Non-brand | 0 | **1** | 0% | 1.0 |
| gp resin manufacturers in india | Non-brand | 1 | 3 | 33.3% | 5.67 |

**Correction — my earlier claim was an overstatement.** I previously wrote that Samrat *"already ranks positions 1–3 for several manufacturer/supplier queries"*, implying category-level visibility. **Those nine non-branded manufacturer queries together account for 35 impressions and 1 click.** An "average position 1.0" derived from **a single impression** is not evidence of category visibility — it means Samrat appeared once, in one search, in first place. **The claim is withdrawn.** What can be said: *on the small number of occasions Samrat surfaced for these phrases, it surfaced high — which is encouraging but statistically fragile.*

**Where the real, better-evidenced signal is** — page-1 positions in India with meaningful impressions and **zero clicks**:

| Query | Clicks | Impr. | Position |
|---|---|---|---|
| gp clear resin | **0** | 19 | 8.32 |
| gp resin | **0** | 14 | 7.43 |
| gp resin full form | **0** | 14 | 7.14 |
| mekp hardener | **0** | 14 | 10.71 |
| polyester resin | **0** | 12 | 6.83 |

These are ranking near page 1 for commercially relevant terms and converting **none** of it. That is a stronger, better-supported CTR finding than the position-1.0 anecdotes.

**On price queries:** "lr resin price" — India, 36 days, **1 click / 14 impressions / 7.14% CTR / position 3.14** — ranks and earns clicks with "Price on Request" on the page. On this single data point, published prices are **not** a precondition for ranking on price intent. My earlier Q1 argument is weakened, though one query at 14 impressions is thin evidence either way.

### 2.6 Indexing

| State | Pages |
|---|---|
| **Indexed** | **263** |
| Discovered – currently not indexed | 27 |
| Crawled – currently not indexed | 13 |
| Page with redirect | 3 *(expected — the `_redirects` rules)* |

263/290 indexed at ~6 weeks old is **good**. The 40 discretionary non-indexed pages are the normal pattern for a young site with a large content tail.

---

## 3. Diagnosis

### 3.1 What is genuinely working
- Informational content ranks and converts to clicks (`what-is-lamination-resin` at 9.2% CTR)
- Product pages hold strong positions for grade-level queries
- Manufacturer/supplier queries have surfaced high on the few occasions they surfaced at all — **9 queries, 35 impressions, 1 click in 36 days**; encouraging, but far too thin to call category visibility (see §2.5)
- Indexation is broad (246 pages earning impressions)
- India is 86% of clicks — targeting is correct

### 3.2 The real problem: **CTR and impression volume, not rankings**
Site-wide CTR is **2.4% at average position 14.4**. Two distinct sub-problems:

- **High-impression / low-CTR pages.** `/products/unsaturated-polyester-resin/` earns **337 impressions and 3 clicks (0.9%)**. That is the single clearest fixable loss in the dataset — it has the audience and fails to convert the impression.
- **Apparently excellent positions, on negligible impressions.** The manufacturer-query positions (1.0–2.5) each rest on 1–11 impressions, so they are **not reliable position estimates** — an average over one impression is a single observation. Two readings are consistent with the data: those phrases have very low volume, *or* Samrat surfaces for them only rarely. Either way, growth must come from *more queries*, not from optimising these.

### 3.3 Impression pollution
US delivers **413 impressions / 2 clicks**. The query list explains it: *"india unsaturated polyester resins market"* (pos 52), *"india pet resin market"* (pos 91), *"us vinyl ester market"* (pos 71), *"commercial boat composite material"* (pos 85). These are **market-research** queries, not buyer queries. They inflate impressions, depress site-wide CTR, and will never convert. Site CTR should be judged on India-filtered data, not the global figure.

### 3.4 🔴 The most valuable finding in GA4: conversions are not configured

**Scope of every GA4 figure in §3.4–§3.5:** property `547377291`, **All Users**, **2026-08-12 → 2026-09-08 (28 days)**, from the *Events by event name* CSV export. (Two counts in an earlier draft — `whatsapp_click` 23/18 and `file_download` 65/14 — were read off the UI mid-window and have been replaced with the export's figures.)

GA4 collects **17 distinct events**, including exactly the right ones:

| Event | Count (28d) | Users |
|---|---|---|
| `whatsapp_click` | 26 | **21** |
| `file_download` (TDS/SDS) | 68 | 16 |
| `catalogue_download` | 12 | 7 |
| `form_start` | 5 | 4 |
| `phone_click` | 2 | 2 |
| `quote_request_click` | 2 | 2 |
| `enquiry_form_submit` | 1 | 1 |

**None of the 17 is marked as a key event.** The three events that *are* flagged as key events — `close_convert_lead`, `purchase`, `qualify_lead` — are GA4 defaults and all show **"No stream data detected"**. They have never fired.

**So GA4 reports zero conversions while the site is in fact recording roughly 20–25 tracked lead-intent or engagement actions per 28 days.** Any past judgement that "organic isn't converting" would have been based partly on a reporting artefact.

⚠️ **These are not leads, and must not be counted as leads.** From the CSV export (12 Aug – 8 Sep 2026):

| Action | Events | **Users** | What it actually evidences |
|---|---|---|---|
| `enquiry_form_submit` | 1 | **1** | A form was submitted — closest to a real lead, still unverified for quality/spam |
| `quote_request_click` | 2 | **2** | A quote CTA was *clicked* — not a submitted quotation |
| `whatsapp_click` | 26 | **21** | A WhatsApp link was *clicked* — no evidence a conversation started |
| `phone_click` | 2 | **2** | A tel: link was *clicked* — no evidence a call connected |
| `catalogue_download` | 12 | **7** | Catalogue downloaded — interest, not intent to buy |
| `file_download` | 68 | **16** | Any file (TDS/SDS) — engagement, weakest signal |

**Why these cannot be summed into a lead count:** the user sets **overlap** (one person may click WhatsApp, download a TDS and open the catalogue), `whatsapp_click` averages **1.24 events per user** so the same person clicks more than once, a click is not a conversation, and none of it is verified against actual enquiries received. The honest statement is: **21 users clicked WhatsApp, 1 submitted the enquiry form, 2 clicked phone, 2 clicked a quote CTA, 7 downloaded the catalogue — with unknown overlap and unknown conversion to real conversations.**

Confirming true lead volume requires reconciling against enquiries actually received (inbox, WhatsApp Business, phone log). That has not been done.

Also visible: **`form_start` 5 → `enquiry_form_submit` 1** — an 80% form-abandonment rate on 5 attempts. Small numbers, but worth watching.

### 3.5 Channel mix (GA4, 28d)
Organic Search **227** · Direct **170** · **AI Assistant 22** · Referral 12 · Organic Social 3.

**GA4 attributed 22 sessions (~5%) to its "AI Assistant" channel** in this 28-day window, while Cloudflare blocks several training crawlers.

⚠️ **What this does and does not show.** It shows that *some* AI-assistant referral traffic reaches the site. It does **not** show comprehensive visibility across AI assistants, does not measure how often Samrat is cited without a click, does not identify which assistants these were, and does **not** prove the crawler rules have no effect — an unblocked configuration might produce more. GA4's channel attribution is also heuristic. The narrow, defensible claim is: *AI-assistant referral traffic exists and is currently small.*

---

## 4. Likely causes, ranked by confidence

| # | Explanation | Confidence | Evidence |
|---|---|---|---|
| 1 | **The site is simply new.** ~6 weeks of search history, indexation still ramping | **High** | GSC data starts 24 Jul/1 Aug; indexing curve rises from early Aug |
| 2 | **Conversion measurement is broken**, so business results appear worse than reality | **High** | 3 key events with no data; 17 real events unflagged |
| 3 | **CTR under-performance on high-impression pages** | **High** | UPR page: 337 impr / 0.9% CTR |
| 4 | **Impression pollution from non-buyer market-research queries** | **Medium-High** | US 413 impr / 2 clicks |
| 5 | **Query demand for exact "manufacturer" phrases is small — or Samrat surfaces for them rarely** | **Medium** (downgraded: 35 impressions total is a thin base) | 9 queries / 35 impr / 1 click over 36 days |
| 6 | Entity split with `samratpolyresins.com` | **Unresolved** | `.com` not in this account — no Search Console data; **partial evidence obtainable by other means, not yet collected** (§6) |

**Alternative explanations I cannot exclude:** a pre-August history existing in a different Google account; the `.com` genuinely declining; seasonality (impossible to assess with 6 weeks); or the perception originating from off-Google channels.

**Correlation vs causation:** commit `19cddab` (brand film) and the August indexing ramp are close in time. I am **not** claiming a causal link — the ramp is far better explained by normal indexing of a new property.

---

## 5. Ten highest-opportunity URLs (evidence-scored)

Scored on: existing impressions · current position · CTR gap · business relevance · conversion potential · internal-link deficit · evidence confidence.

| # | URL | Impr. | Clicks | CTR | Pos | Action | Rationale |
|---|---|---|---|---|---|---|---|
| 1 | `/products/unsaturated-polyester-resin/` | **337** | 3 | **0.9%** | ~27 | **IMPROVE** | Largest CTR gap on site. Has the audience, fails the click. Title/description/snippet work — **after** we can measure it |
| 2 | `/` | 728 | 28 | 3.8% | — | **INVESTIGATE** | Holds pos 1–2.5 for several manufacturer queries. Retitle is *tempting* but risky; needs query-level before/after. **Not yet authorised** |
| 3 | `/products/lamination-resin/` | 221 | 10 | 4.5% | ~16 | **IMPROVE** | Best commercial page. "lr resin" 7.8, "lr resin price" 3.1, "lamination resin" 16.3 — real headroom |
| 4 | `/resources/what-is-gp-polyester-resin/` | 301 | 8 | 2.7% | ~24 | **IMPROVE** | High impressions, weak CTR; strongest informational asset |
| 5 | `/products/gp-clear-resin/` | low | 0 | — | 8.5 | **IMPROVE** | Pos 8.5 on "gp clear resin" — page-1 push is realistic |
| 6 | **`/technical-documents/`** | — | — | — | — | **CREATE** | `file_download` = 65 events/14 users with **no crawlable index**. Proven demand, zero new claims |
| 7 | `/products/gp-resins/` | new | — | — | — | **RETAIN + measure** | Rebuilt in `f46988e`. "gp resin" 7.2, "gp resin manufacturers in india" 5.7. Needs 4–6 weeks of data |
| 8 | `/products/uv-resin/` | low | 0 | — | **71.9** | **INVESTIGATE** | Position 72 despite 6 UV articles — worst gap between content investment and result |
| 9 | `/products/fiberglass-epoxy-resin/` | 64 | 4 | 6.3% | ~10.5 | **IMPROVE** | Already converting; small push to page 1 |
| 10 | 27 "Discovered – not indexed" pages | — | — | — | — | **INVESTIGATE** | Identify which; likely thin tail. Improve or consolidate — **no deletions without review** |

**Explicitly not recommended now:** no redirects, no consolidations, no `noindex`, no homepage retitle. With only ~6 weeks of data and ~120 clicks, changes to ranking pages are not yet safely measurable.

---

## 6. Cross-domain status (Q3) — partially resolved

The Google account contains exactly **three** properties:
1. `samratfrptraders.com` *(Nepal business — out of scope)*
2. `samratpolyresins.in` *(domain property)*
3. `https://samratpolyresins.in/` *(URL-prefix property)*

**`samratpolyresins.com` is NOT in this account.** Therefore:
- Its **Search Console** metrics (clicks, impressions, positions) cannot be obtained without authorised property access
- The entity-cannibalisation hypothesis **remains unquantified** — but it is **not unmeasurable**. Partial evidence is obtainable without IndiaMART: public SERP checks for brand and category queries, third-party backlink/visibility tools, referral traffic from `.com` to `.in` in GA4, IndiaMART's own lead/enquiry reporting, and indexed-page counts via public search
- **What can be collected now, without IndiaMART:** brand and category SERP checks, `site:samratpolyresins.com` footprint, `.com` → `.in` referral sessions in GA4, third-party backlink/visibility estimates, and repeated brand-SERP capture over time. **None of this has been done yet** — it is the cheapest next step and requires no permission
- No domain action should be taken on speculation

---

## 7. Recommended actions (none executed)

**Immediate, high-confidence, low-risk — but requiring your authorisation:**

| # | Action | Where | Why |
|---|---|---|---|
| A | **Mark real key events** (`whatsapp_click`, `enquiry_form_submit`, `quote_request_click`, `phone_click`, `catalogue_download`) | GA4 Admin | Restores conversion measurement. Highest-value single fix available. *Admin change — not authorised in a read-only phase* |
| B | Optionally unflag the three never-firing default key events | GA4 Admin | Removes misleading zeros |
| C | Build `/technical-documents/` | Local | Measured demand (68 `file_download` events, 16 users, 28d), no new factual claims |
| D | Improve CTR on URLs 1, 3, 4 | Local | Largest measurable gaps |
| E | Request `.com` Search Console access from IndiaMART | Business | Only way to resolve Q3 |
| F | Re-baseline in 4 weeks | — | Current dataset is too young for confident change measurement |

---

## 8. Honest limitations

- **~6 weeks of data, 122 clicks.** Query-level figures are single-digit and statistically fragile. Treat positions as indicative, **not as evidence of category standing** (see §2.5).
- **The visible query slice is ~24% of India clicks and ~22% of India impressions** — GSC anonymises the rest. Every query-level conclusion describes a minority of traffic.
- **The reported ranking decline can be neither confirmed nor disproved** from this property; its history starts after the events in question (§1).
- Period-over-period comparison (28d vs prior 28d, YoY) is **not meaningful** and was not manufactured.
- No backlink data (no Ahrefs/Semrush).
- No CrUX field data.
- Google Business Profile not inspected (no access requested).
- `.com` Search Console metrics unavailable in this account; partial external evidence is still obtainable (see §6).
