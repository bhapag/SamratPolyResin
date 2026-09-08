# SEO_PERFORMANCE_DIAGNOSIS.md — Samrat Poly Resins

**Date:** 2026-09-08 · **Data source:** Google Search Console + GA4, read-only, accessed live
**Properties inspected:** `sc-domain:samratpolyresins.in`, `https://samratpolyresins.in/`, GA4 `547377291`
**Nothing was changed.** No indexing requested, no sitemap submitted, no settings/events/permissions altered.

---

## 1. The headline finding: there is no ranking loss to diagnose

**Search Console holds no data for `samratpolyresins.in` before ~1 August 2026.**

Verified directly: selecting **"Last 16 months"** returns the *identical* totals as "3 months" — 122 clicks / 5,108 impressions — and the chart axis still spans only **01/08/2026 → 06/09/2026**. The separate URL-prefix property (`https://samratpolyresins.in/`) reaches marginally further back, to **~24 July 2026** (131 clicks / 5,231 impressions). Page Indexing corroborates it: the indexed-pages curve rises from a near-zero base in **early August 2026**.

**Consequence, stated plainly:** the engagement's founding premise — *"rankings lost during the previous three to six months"* — **cannot be true for this property, because the property has only ~6 weeks of history.** There is no decline. There is no decline date. There are no queries that "lost" clicks.

This is not a data-access limitation. It is the answer.

**Three possible explanations, none of which I can confirm without you:**
1. The perceived decline relates to **`samratpolyresins.com`** (the IndiaMART-managed site), not `.in` — plausible, but **that property is not in this Google account** (see §6), so it cannot be checked here.
2. The perceived decline relates to **`samratfrptraders.com`** — that property *is* in the account, but it is the Nepal business and explicitly out of scope.
3. The impression of decline is based on observation rather than measurement.

**This finding invalidates a meaningful part of my own Phase 1 framing**, which reasoned about "authority not flowing" and implied lost ground. The correct framing is: **this is a ~6-week-old search presence that is starting from zero and performing respectably for its age.**

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

### 2.5 Queries — and a direct contradiction of my Phase 1 claim

I asserted in `COMPETITOR_GAP_ANALYSIS.md` that head commercial terms were directory-dominated and **"not winnable"**. **The data disproves that.**

| Query | Clicks | Impr. | CTR | **Position** |
|---|---|---|---|---|
| samrat poly resins *(brand)* | 12 | 136 | 8.8% | **2.4** |
| polyester resin manufacturers in india | 0 | — | — | **1.0** |
| polyester resin supplier | 0 | — | — | **1.0** |
| resin manufacturer in india | 0 | — | — | **1.0** |
| frp resin suppliers near me | 0 | — | — | **1.0** |
| plastic resin manufacturers | 0 | — | — | **1.8** |
| resin manufacturers in india | 1 | 8 | 12.5% | **1.8** |
| polyester resin manufacturers | 0 | — | — | **2.3** |
| polyester resin manufacturer | 0 | — | — | **2.5** |
| resin manufacturers | 0 | — | — | **2.5** |
| **lr resin price** | 1 | 14 | 7.1% | **3.1** |
| gp resin manufacturers in india | 1 | 3 | 33.3% | **5.7** |
| gp resin | 0 | — | — | 7.2 |
| polyester resin | 0 | — | — | 7.5 |
| lr resin | 1 | 18 | 5.6% | 7.8 |
| gp clear resin | 0 | — | — | 8.5 |
| lamination resin | 0 | — | — | 16.3 |
| unsaturated polyester resin | 0 | — | — | 27.1 |
| uv resin | 0 | — | — | 71.9 |

**Two conclusions that overturn earlier assumptions:**

1. **Samrat already ranks positions 1–3 for several manufacturer/supplier queries.** The constraint is not competitive difficulty — it is that these queries return only a handful of impressions each. The ceiling here is *demand volume*, not ranking ability.

2. **"lr resin price" ranks position 3.1 and earns clicks — with "Price on Request" on the page.** This materially weakens my Q1 argument that price queries are unwinnable without published prices. **Revised position in `DOMAIN_AND_PRICE_DECISIONS.md`.**

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
- Manufacturer/supplier queries already sit in positions 1–3
- Indexation is broad (246 pages earning impressions)
- India is 86% of clicks — targeting is correct

### 3.2 The real problem: **CTR and impression volume, not rankings**
Site-wide CTR is **2.4% at average position 14.4**. Two distinct sub-problems:

- **High-impression / low-CTR pages.** `/products/unsaturated-polyester-resin/` earns **337 impressions and 3 clicks (0.9%)**. That is the single clearest fixable loss in the dataset — it has the audience and fails to convert the impression.
- **Excellent positions with negligible impressions.** Position 1.0–2.5 on manufacturer queries yielding <10 impressions each means those exact phrases have very low search volume. Growth must come from *more queries*, not better positions on these.

### 3.3 Impression pollution
US delivers **413 impressions / 2 clicks**. The query list explains it: *"india unsaturated polyester resins market"* (pos 52), *"india pet resin market"* (pos 91), *"us vinyl ester market"* (pos 71), *"commercial boat composite material"* (pos 85). These are **market-research** queries, not buyer queries. They inflate impressions, depress site-wide CTR, and will never convert. Site CTR should be judged on India-filtered data, not the global figure.

### 3.4 🔴 The most valuable finding in GA4: conversions are not configured
GA4 collects **17 events**, including exactly the right ones:

| Event | Count (28d) | Users |
|---|---|---|
| `whatsapp_click` | 23 | **18** |
| `file_download` (TDS/SDS) | 65 | 14 |
| `catalogue_download` | 12 | 7 |
| `form_start` | 5 | 4 |
| `phone_click` | 2 | 2 |
| `quote_request_click` | 2 | 2 |
| `enquiry_form_submit` | 1 | 1 |

**None of the 17 is marked as a key event.** The three events that *are* flagged as key events — `close_convert_lead`, `purchase`, `qualify_lead` — are GA4 defaults and all show **"No stream data detected"**. They have never fired.

**So GA4 reports zero conversions while the site is in fact generating roughly 20–25 lead-intent actions per 28 days.** Any past judgement that "organic isn't converting" would have been based on a reporting artefact.

Also visible: **`form_start` 5 → `enquiry_form_submit` 1** — an 80% form-abandonment rate on 5 attempts. Small numbers, but worth watching.

### 3.5 Channel mix (GA4, 28d)
Organic Search **227** · Direct **170** · **AI Assistant 22** · Referral 12 · Organic Social 3.

**"AI Assistant" already delivers 22 sessions (~5%)** despite Cloudflare blocking training crawlers — empirical support for the corrected §7 of the addendum: blocking *training* crawlers does **not** remove a site from AI answers, because user-triggered retrieval agents remain allowed.

---

## 4. Likely causes, ranked by confidence

| # | Explanation | Confidence | Evidence |
|---|---|---|---|
| 1 | **The site is simply new.** ~6 weeks of search history, indexation still ramping | **High** | GSC data starts 24 Jul/1 Aug; indexing curve rises from early Aug |
| 2 | **Conversion measurement is broken**, so business results appear worse than reality | **High** | 3 key events with no data; 17 real events unflagged |
| 3 | **CTR under-performance on high-impression pages** | **High** | UPR page: 337 impr / 0.9% CTR |
| 4 | **Impression pollution from non-buyer market-research queries** | **Medium-High** | US 413 impr / 2 clicks |
| 5 | **Query demand for exact "manufacturer" phrases is small** | **Medium-High** | Position 1.0–2.5 yielding <10 impressions |
| 6 | Entity split with `samratpolyresins.com` | **Unresolved** | `.com` not in this account — cannot be measured |

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
- Its clicks, impressions, positions and backlinks **cannot be obtained here**
- The entity-cannibalisation hypothesis **remains unquantified and untestable** without IndiaMART granting access
- No domain action should be taken on speculation

---

## 7. Recommended actions (none executed)

**Immediate, high-confidence, low-risk — but requiring your authorisation:**

| # | Action | Where | Why |
|---|---|---|---|
| A | **Mark real key events** (`whatsapp_click`, `enquiry_form_submit`, `quote_request_click`, `phone_click`, `catalogue_download`) | GA4 Admin | Restores conversion measurement. Highest-value single fix available. *Admin change — not authorised in a read-only phase* |
| B | Optionally unflag the three never-firing default key events | GA4 Admin | Removes misleading zeros |
| C | Build `/technical-documents/` | Local | Proven demand (65 downloads), no new claims |
| D | Improve CTR on URLs 1, 3, 4 | Local | Largest measurable gaps |
| E | Request `.com` Search Console access from IndiaMART | Business | Only way to resolve Q3 |
| F | Re-baseline in 4 weeks | — | Current dataset is too young for confident change measurement |

---

## 8. Honest limitations

- **~6 weeks of data, 122 clicks.** Query-level figures are single-digit and statistically fragile. Treat positions as indicative.
- Period-over-period comparison (28d vs prior 28d, YoY) is **not meaningful** and was not manufactured.
- No backlink data (no Ahrefs/Semrush).
- No CrUX field data.
- Google Business Profile not inspected (no access requested).
- `.com` performance permanently unavailable in this account.
