# SEO_MEASUREMENT_PLAN.md — Samrat Poly Resins

**Date:** 2026-09-08

> ⚠️ **This plan is not operational until A1 (Search Console) and A2 (GA4) are granted.** Without them there is no way to detect whether an approved change helped or hurt. Implementing ranking-sensitive changes (homepage title, hub rebuilds) while blind is a risk I recommend against — see Batch sequencing in `SITE_ARCHITECTURE_PLAN.md` §5.

---

## 1. KPI hierarchy

**Primary (business):** qualified organic enquiries — WhatsApp clicks, quote-form submissions, custom-resin requests, phone clicks, TDS downloads.
**Secondary (visibility):** non-branded organic clicks; ranking positions for Tier 1–2 clusters; brand-search ownership by `.in`.
**Diagnostic (health):** indexed vs submitted; CWV field data; crawl errors; internal-link distribution.

**Explicit anti-goal:** impressions and "keywords ranking" counts are *not* success metrics. A resin manufacturer needs enquiries, not traffic. Reporting will lead with leads.

---

## 2. Tracking gaps to close first

| Gap | Why it matters | Action |
|---|---|---|
| Conversion events in GA4 unverified | Cannot measure the primary KPI at all | Confirm/define events: `whatsapp_click`, `quote_submit`, `custom_request_submit`, `phone_click`, `tds_download`. A `lead-attribution.ts` script exists and already tracks `whatsapp_click` + CTA locations — needs verification against GA4 |
| GSC not connected | No query/position data | A1 |
| CrUX field CWV unavailable | Lab data ≠ ranking signal | A3 (PSI key) |
| No rank tracking (India-located) | US-locale search ≠ `google.co.in` | A4 |
| Offline lead attribution | Phone/WhatsApp enquiries convert offline | Ask sales to log "how did you find us" |

---

## 3. Baseline to compare against

Frozen in `SEO_BASELINE.md` §9. Traffic/ranking/backlink baselines **remain blank until access is granted** — and must be captured *before* Batch 4 (homepage retitle).

---

## 4. Operating plan

### First 30 days — instrument, protect, fix what is safe
| # | Action | Gate |
|---|---|---|
| 1 | Grant A1/A2/A3; capture true baseline (28d, prior 28d, 3mo, prior 3mo, YoY) | Owner |
| 2 | Decide Q3 (`.com`) and Q4 (AI crawlers) | Owner |
| 3 | Ship Batch 0 — T1/T2/T3 payload fixes | Approved |
| 4 | Ship Batch 1 — hub rebuild + L1–L6 internal linking | Approved |
| 5 | Ship Batch 2 — `/technical-documents/` | Approved |
| 6 | Verify: crawl re-run, 0 broken links, hub inlinks ≥ 20, no regressions | — |

**30-day success:** baseline captured · FCP < 2,000 ms · hub inlinks 1 → ≥ 20 · TDS library indexed · **no ranking regression**.
*Not expected yet:* ranking movement.

### Days 31–60 — commercial architecture
Batch 3 (new hubs), Batch 4 (homepage retitle + `/about/`, **only with baseline**), begin E1 `.com` consolidation, submit updated sitemap, inspect changed URLs.

**60-day success:** hubs indexed and ranking for *something* · `.in` appearing for brand queries · non-branded clicks trending up · enquiry volume flat-or-up (not down).

### Days 61–90 — entity & authority
`/manufacturing/` (if evidence supplied), Organization schema expansion, GBP optimisation, NAP canonicalisation, C13 buyer guide.

**90-day success:** `.in` owns brand search · Tier 1 clusters showing measurable position improvement · qualified enquiries measurably up vs baseline · GBP visibility established.

### Months 4–6 — compound
Extend application/comparison coverage where GSC shows genuine demand; ethical off-site programme; quarterly technical review of top pages; re-audit.

**6-month success:** sustained non-branded growth · multiple Tier 1–2 clusters on page 1 · TDS library a recognised entry point · **qualified enquiry growth is the headline number**.

---

## 5. Guardrails & rollback

| Trigger | Response |
|---|---|
| Any Tier 1 page loses > 20% clicks over 14 days post-change | Investigate; revert the specific change (each batch is a discrete commit) |
| Indexed pages drop > 5% | Check coverage, canonicals, sitemap |
| CWV field data regresses | Re-measure; revert payload changes |
| Enquiries fall while traffic rises | Conversion regression — audit CTAs |

Every batch is an isolated, revertible commit with recorded before/after. No batch bundles unrelated changes.

---

## 6. Reporting cadence

**Monthly**, leading with: qualified enquiries by source → non-branded clicks → Tier 1/2 cluster positions → brand-search ownership → technical health → what shipped → what's next → what's blocked.

**No vanity metrics.** If a change did not work, it will be reported as not having worked.

---

## 7. Honest expectation setting

- No ranking guarantees. The brief correctly rules them out.
- Directory dominance (IndiaMART et al.) on head commercial terms is **structural** — Samrat competes for positions 2–8, not #1.
- Revex's 40-year, 30,000 MT entity advantage cannot be matched in 6 months. The winning path is technical depth and document transparency.
- Brand-search recovery via E1 is the **fastest** realistic win (weeks, once decided).
- New hubs typically need 4–12 weeks to settle.
- "Near me" is proximity-bound — GBP work, not content work.
- Price queries stay unwinnable unless Q1 changes.
