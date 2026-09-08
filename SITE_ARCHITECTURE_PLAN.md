# SITE_ARCHITECTURE_PLAN.md — Samrat Poly Resins

**Date:** 2026-09-08

---

## 1. Current architecture (measured)

```
/                                   home (833w)
├── /products/                      index (703w) — links all 31 products + 2 hubs
│   ├── /products/gp-resins/        HUB (352w, 1 inlink)   ◀── starved
│   ├── /products/epoxy-resins/     HUB (301w, 1 inlink)   ◀── starved
│   └── /products/[slug]/           31 products (median 1,774w)  ✅ strong
├── /applications/                  index (1,400w)
│   └── /applications/[slug]/       37 pages (median 741w, 2 inlinks each) ◀── weak support
├── /resources/                     index (9,515w)
│   └── /resources/[slug]/          213 articles (median 688w) ✅ ranking
├── /about/                         204w  ◀── credibility gap
├── /contact/                       114w
├── /custom-resin-request/          555w  ✅ good conversion asset
└── /tds/, /sds/, /downloads/       PDF files — no HTML index, not in sitemap ◀── invisible asset
```

### The structural diagnosis
Authority enters through 213 informational articles and **has nowhere commercial to flow**:
- 6 of 8 categories have **no hub at all**
- The 2 hubs that exist are thin and receive **1 internal link each**
- The mega-menu links straight to individual products, **bypassing hubs entirely**
- No manufacturer/capability page exists (the `/about/` page is 204 words)
- The TDS/SDS library — Samrat's single clearest differentiator vs Revex — has **no crawlable HTML surface at all**

---

## 2. Proposed architecture

Additions marked **NEW**. Nothing is deleted; nothing existing is redirected.

```
/                                          ◀── RETITLE (category-first, not brand-first)
│
├── /manufacturing/                        ★ NEW — manufacturer entity page
│   └── (capability, QC, plant, dispatch — evidence-gated)
│
├── /products/                             ◀── UPDATE: surface all 8 hubs
│   ├── /products/gp-resins/               ◀── REBUILD (hub)
│   ├── /products/frp-resins/              ★ NEW hub
│   ├── /products/gelcoat-resin/           ★ NEW hub
│   ├── /products/fire-retardant-resins/   ★ NEW hub
│   ├── /products/sheet-grade-resins/      ★ NEW hub
│   ├── /products/frp-allied-products/     ★ NEW hub
│   ├── /products/hardeners-accelerators/  ★ NEW hub
│   ├── /products/epoxy-resins/            ◀── REBUILD (hub) — gated on Q2
│   └── /products/[slug]/                  31 products (unchanged URLs)
│
├── /technical-documents/                  ★ NEW — crawlable TDS/SDS index
│
├── /applications/                         (unchanged)
│   └── /applications/[slug]/              37 pages — re-linked from products/hubs
│
├── /resources/                            (unchanged — 213 articles)
│
├── /about/                                ◀── EXPAND (entity/credibility)
├── /contact/                              (unchanged)
└── /custom-resin-request/                 (unchanged)
```

**Net new indexable pages: 8** (7 hubs + 1 manufacturing page) + 1 document index = **9**.
Not 100. Not 1,000. Every one maps to a distinct, evidenced commercial intent in `KEYWORD_INTENT_MAP.md`.

---

## 3. Page specifications

### 3.1 `/` — Homepage (UPDATE)
| Field | Value |
|---|---|
| Primary intent | C/T — `polyester resin manufacturer India`, `resin manufacturers in India` |
| Audience | FRP fabricators, procurement buyers |
| Funnel | Mid/bottom |
| Change | **Title/H1 only** — category-first, mirroring the ranking pattern Revex uses. Design, hero, brand film untouched |
| Proposed title | `Polyester, Epoxy & FRP Resin Manufacturer in India — Samrat Poly Resins` (**must stay ≤60 chars rendered**; final wording in batch review) |
| Evidence needed | None (restates existing verified positioning) |
| Conversion | Quote / WhatsApp / catalogue |
| Index | Yes |
| Why it deserves to exist | Already exists — currently spending its title on a brand with no non-branded pull |

### 3.2 `/manufacturing/` — ★ NEW
| Field | Value |
|---|---|
| Primary intent | C — `resin manufacturing company in India`, `industrial resin manufacturer` |
| Supporting | manufacturing process, QC, batch consistency, capacity, dispatch |
| Funnel | Mid |
| Content | Real plant photography, reactor/process description, QC parameters actually tested (viscosity, gel time, acid value, colour), batch control, packaging (200–225 kg drums), dispatch/logistics reach |
| **Evidence gate** | ⛔ **Blocked until owner supplies**: installed capacity (MT/yr), reactor count/size, batch size, lab equipment list, QC test list, dispatch lead times, states genuinely served. **Nothing published unverified** |
| Conversion | Quote / plant-visit request |
| Why it deserves to exist | This is the page that answers "is this a real manufacturer?" — the single biggest entity gap vs Revex. `/about/` at 204 words cannot carry it |

### 3.3 Category hubs ×7 (`/products/<category>/`)
| Field | Value |
|---|---|
| Primary intent | C/T — `<category> manufacturer india`, `<category> supplier` |
| Template | 700–1,100 words: what the family is → **grade comparison table** (viscosity, gel time, colour, pack size, typical use) → where used (→ applications) → how to select (→ resources) → TDS links → enquiry CTA |
| Schema | `CollectionPage` + `ItemList` + `BreadcrumbList` (fixes T7) |
| Evidence needed | Only data already in `products.js` + published TDS. **No new claims** |
| Conversion | Quote / grade-selection enquiry |
| Index | Yes |
| Why they deserve to exist | Each aggregates a real multi-grade family and targets category+manufacturer intent that no current page owns. **Hubs with <3 genuinely distinct grades are not built** — GelCoat (1 product) is therefore built as a *product-led* hub, not padded |

⚠️ **Guard against thin duplication:** if a hub cannot say something the product pages don't, it must not ship. GelCoat (1 grade) and Hardeners (2 grades) are the two at risk — they will be reviewed at batch stage and dropped if they'd be filler.

### 3.4 `/technical-documents/` — ★ NEW
| Field | Value |
|---|---|
| Primary intent | C/I — `polyester resin TDS`, `resin technical data sheet`, `resin SDS` |
| Content | Crawlable, filterable index of every existing TDS/SDS PDF, grouped by family, each linked to its product |
| Evidence needed | **None — documents already exist and are already published** |
| Conversion | Download → enquiry |
| Why it deserves to exist | Revex has **no** TDS library. This is Samrat's clearest, cheapest, fully-evidenced differentiator and it is currently invisible to search |

### 3.5 `/about/` (EXPAND)
Company story, proprietor, founding (2017), legal identity (GSTIN already public), ISO 9001:2015 (certificate already published), locations, markets served. **Evidence-gated** for anything new.

---

## 4. Pages deliberately NOT created

| Not building | Reason |
|---|---|
| City/state landing pages | Doorway pages. Only Doraha/Ludhiana is real |
| One page per seed keyword (~90) | ~20 distinct intents exist. Rest are variants → canonical pages |
| Separate `laminating resin` / `GP lamination resin` pages | Same intent as `/products/lamination-resin/` |
| "Best resin manufacturer in India" self-declaration | Unsubstantiated superlative |
| "FRP composite work" service page | Contractor intent — Samrat supplies material, not fabrication services |
| Capacity/certification pages | **No verified evidence yet.** Will not fabricate |
| Blog/news section | No sustainable publishing input identified; would decay |

---

## 5. Sequencing

| Batch | Scope | Risk | Depends on |
|---|---|---|---|
| **0** | Technical fixes T1–T4 (video payload, PNG, FCP, `lastmod`) | Low — no URL/content change | — |
| **1** | Rebuild 2 existing hubs + wire hubs into nav/mega-menu + internal linking | Low–Med | Batch 0 |
| **2** | `/technical-documents/` index | Low | — |
| **3** | 5 new category hubs (data-driven only) | Med | Batch 1 pattern approved |
| **4** | Homepage retitle + `/about/` expansion | **Med–High** (homepage ranks now) | **A1 GSC baseline first** |
| **5** | `/manufacturing/` | Med | **Owner evidence** |
| **6** | Epoxy hub rebuild | Med | **Q2 domain decision** |

⚠️ **Batch 4 must not run before Search Console access.** Retitling a homepage that currently ranks, with no baseline and no ability to detect regression, is exactly the kind of unmeasurable change the brief prohibits.
