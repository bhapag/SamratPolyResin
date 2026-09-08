# CONTENT_PRODUCTION_QUEUE.md — Samrat Poly Resins

**Date:** 2026-09-08

**Governing rule:** no page enters production until its evidence gate is satisfied. Where evidence is missing, the item stays **BLOCKED** rather than being written around with vague copy. Verified facts already published on the site or in existing TDS/SDS are reusable immediately; anything else requires owner sign-off.

**Status:** 🟢 Ready · 🟡 Partial evidence · ⛔ Blocked

---

## Queue 1 — Rebuild existing hubs (Batch 1)

### C1 · `/products/gp-resins/` — rebuild 🟢
| | |
|---|---|
| Target intent | `GP resin`, `GP resin manufacturer`, `general purpose polyester resin` (C/T) |
| Current | 352 words, 1 internal inlink, `Organization` schema only |
| Target | 800–1,100 words + grade comparison table + `CollectionPage`/`ItemList` schema |
| **Evidence required** | ✅ All available: 7 GP grades in `products.js` (viscosity, gel time, colour, packaging) + published TDS |
| New claims | **None** |
| Author/review | Technical review by Samrat before publish |
| Conversion | Quote / grade-selection enquiry |

### C2 · `/products/epoxy-resins/` — rebuild ⛔
Same template as C1. **Blocked on Q2** (`samratepoxyresins.com` status). Building epoxy authority on `.in` before the domain split is decided risks engineering cannibalisation.

---

## Queue 2 — Technical document index (Batch 2)

### C3 · `/technical-documents/` 🟢
| | |
|---|---|
| Target intent | `polyester resin TDS`, `resin technical data sheet`, `resin SDS` (C/I) |
| **Evidence required** | ✅ None new — indexes PDFs already published under `/tds/`, `/sds/`, `/downloads/` |
| Why first | Highest evidence-to-value ratio in the plan. Zero new claims, zero risk, and it exposes the one asset Revex lacks |
| Conversion | Download → enquiry |

---

## Queue 3 — New category hubs (Batch 3)

Template identical to C1. **All content derives from existing `products.js` data + published TDS — no new claims.**

| # | Page | Grades | Status | Note |
|---|---|---|---|---|
| C4 | `/products/frp-resins/` | cross-family | 🟢 | Highest-value new hub. Must be **curated**, not a duplicate of `/products/` |
| C5 | `/products/frp-allied-products/` | 7 | 🟢 | Pigment, glass fibre, styrene, NC thinner, brushes, soapstone, wax |
| C6 | `/products/sheet-grade-resins/` | 2 | 🟡 | Only 2 grades — must earn its place via sheet/roofing application depth |
| C7 | `/products/fire-retardant-resins/` | 2 | 🟡 | ⚠️ **Fire claims are the highest-risk copy on the site.** Only wording already present in TDS. No performance/classification claim without documentation |
| C8 | `/products/hardeners-accelerators/` | 2 | 🟡 | ⚠️ MEKP is a hazardous organic peroxide — safety wording strictly from SDS |
| C9 | `/products/gelcoat-resin/` | 1 | ⛔ | **Recommend NOT building.** One grade cannot support a non-thin hub. Strengthen `/products/gp-gelcoat-resin/` instead |

> C6–C8 are **conditional**: if at batch review a hub cannot say something its product pages don't already say, it does not ship. Better 5 strong hubs than 7 with 2 filler pages.

---

## Queue 4 — Entity pages (Batches 4–5)

### C10 · `/manufacturing/` ⛔ **BLOCKED — owner evidence required**
| | |
|---|---|
| Target intent | `resin manufacturing company in India`, `industrial resin manufacturer` (C) |
| Why it matters | The single largest entity gap vs Revex (who publish 30,000 MT capacity, ARAI/IRS/IS-6746 approvals, 1981 founding) |
| **Evidence gate — none of this may be estimated** | ① installed capacity (MT/yr or batch × frequency) ② number/size of reactors ③ lab equipment list ④ QC parameters actually tested per batch ⑤ typical dispatch lead time ⑥ states genuinely supplied ⑦ any product approvals beyond ISO 9001:2015 ⑧ employee count ⑨ rights-cleared plant/lab photographs |
| Already verified (reusable now) | ISO 9001:2015 certificate (published), GSTIN `03ALBPS3446G1ZB` (published), founding 2017, Doraha address, proprietor Jaspal Singh, 200–225 kg drum packaging, existing plant/QC photography |
| Risk if rushed | Publishing unverifiable capability claims is precisely what the brief forbids |

### C11 · `/about/` expansion 🟡
Expand from 204 words using ✅ already-verified facts; anything beyond inherits C10's gate.

### C12 · Homepage retitle 🟢 (but sequence-gated)
Copy change only — no new claims. ⚠️ **Must not ship before GSC baseline (A1).** Retitling a currently-ranking homepage without measurement is unjustifiable.

---

## Queue 5 — Tier 4 / conditional

| # | Item | Status |
|---|---|---|
| C13 | "How to evaluate a resin supplier in India" — objective buyer guide | 🟢 Ethical alternative to a "we're the best" page; the listicle format demonstrably ranks |
| C14 | Price-transparency rollout across products + `offers` schema | ⛔ **Q1 decision** |
| C15 | Case studies from real customers | ⛔ Requires named customer consent |
| C16 | Capacity/certification pages | ⛔ Requires C10 evidence |

---

## Content standards (all items)

Every page must carry: a direct answer to its query · verified specs only (TDS/SDS-sourced) · selection guidance · genuine internal links per `INTERNAL_LINK_MAP.md` · a clear conversion action · truthful schema · technical review by a named Samrat representative before publish.

**Never:** invented specs, capacity, certifications, prices, MOQs, lead times, customers, testimonials, reviews, `AggregateRating`, or safety instructions not traceable to an approved SDS/TDS.

---

## Realistic throughput

**9 net-new pages** (7 hubs − 1 rejected + `/technical-documents/` + `/manufacturing/`) plus 2 rebuilds and 2 expansions — **13 units of work**, gated across 6 batches.

This is deliberately small. The brief's ~90 seed keywords resolve to roughly 20 distinct intents, most already served by existing pages. **Adding volume is not the lever here — connecting and converting existing authority is.**
