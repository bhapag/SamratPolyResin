# INTERNAL_LINK_MAP.md — Samrat Poly Resins

**Date:** 2026-09-08
**Source:** measured internal-link graph from the 290-URL live crawl

---

## 1. Current link distribution (measured)

| Page | Internal inlinks | Note |
|---|---|---|
| `/`, `/about/`, `/contact/`, `/products/`, `/applications/`, `/custom-resin-request/` | **290** | Header/footer sitewide |
| All 31 `/products/[slug]/` | **290** | In mega-menu sitewide |
| `/resources/[slug]/` (213) | varies, well-linked | Cross-linked cluster |
| `/applications/[slug]/` (37) | **2** | ◀ severely under-supported |
| **`/products/gp-resins/`** | **1** | ◀ from `/products/` only |
| **`/products/epoxy-resins/`** | **1** | ◀ from `/products/` only |

**Orphans: 0** — but this is misleading. "0 orphans" is produced by sitewide header/footer links, not by editorial linking. The two commercial hubs are *functionally* orphaned: one contextual link each.

### The flow problem, stated simply
```
213 resources ──(strong)──▶ 31 products ──▶ (dead end)
                                 │
   category hubs ◀──(1 link)── /products/   ◀ authority never reaches them
   37 applications ◀──(2 links)── ...        ◀ nearly isolated
```
Samrat's authority is concentrated in informational content and terminates at product pages. The pages built to capture category + manufacturer intent sit outside the flow.

---

## 2. Target hub-and-spoke model

```
                          /  (home)
                            │
              ┌─────────────┼──────────────┐
              ▼             ▼              ▼
       /manufacturing/  /products/   /technical-documents/
                            │
        ┌───────────────────┼───────────────────┐
        ▼                   ▼                   ▼
  /products/gp-resins/  /products/frp-resins/  …6 more hubs
        │  ▲                │  ▲
        ▼  │                ▼  │
   grade product pages ─────────┘
        │  ▲
        ▼  │
  /applications/[slug]/  ◀──▶  /resources/[slug]/
```

**Rule: every link must be reciprocal-aware.** A hub links down to its grades; each grade links back up to its hub via breadcrumb + an in-body contextual link.

---

## 3. Link rules by page type

| From | To | Placement | Anchor style | Max |
|---|---|---|---|---|
| Header mega-menu | **8 category hubs** (new) + products | Nav | Category name | 8 hubs |
| `/products/` index | All 8 hubs (prominent) + 31 products | Category headings become **links** | `GP Resins`, `FRP Resins` | — |
| Category hub | Its own grades | Comparison table rows | Grade name | = grades in family |
| Category hub | 2–4 relevant applications | "Where it's used" | `Resin for FRP water tanks` | 4 |
| Category hub | 2–3 selection guides | "How to choose" | Article title | 3 |
| Category hub | TDS files + `/technical-documents/` | Documents block | `Download <grade> TDS` | — |
| Product page | Parent hub | Breadcrumb **+** one in-body link | `GP Resin range` | 2 |
| Product page | 2–4 applications | "Applications" | Application name | 4 |
| Product page | 3–6 resources | Knowledge block *(exists)* | Article title | 6 |
| Application page | Parent product(s) | Intro + CTA | Product name | 3 |
| Application page | Parent hub | Breadcrumb | Category | 1 |
| Resource article | Linked product | `ProductCTA` *(exists)* | Product name | 1–2 |
| Resource article | Related resources | Related block *(exists)* | Title | 6 |
| `/manufacturing/` | Hubs + `/technical-documents/` + `/about/` | Body | Descriptive | 8 |

**Anti-patterns forbidden:** no automated "related links" blocks emitting hundreds of links; no exact-match anchor repetition sitewide; no footer link farm; no more than ~100 editorial internal links per page.

---

## 4. Specific fixes (Batch 1)

| # | Fix | Current → Target | Impact |
|---|---|---|---|
| L1 | Mega-menu category headings become **links to hubs** (currently plain `<span>` labels) | 1 → ~290 inlinks per hub | 🔴 **Highest-leverage single change in this plan** |
| L2 | `/products/` index category headings link to hubs | reinforces L1 | High |
| L3 | Each product page links up to its hub (breadcrumb + body) | 0 → 31 contextual up-links | High |
| L4 | Each hub links down to its grades | new | High |
| L5 | Products link to their applications | 37 apps: 2 → ~5–6 inlinks | Medium-High |
| L6 | Applications link back to parent product + hub | strengthens both | Medium |
| L7 | `/technical-documents/` linked from header/footer + every hub | new | Medium |
| L8 | `/manufacturing/` linked from home + about + footer | new | Medium |

**L1 detail (verified in code):** in `Base.astro` the mega-menu renders each category as `<p class="nav-mega-col-head"><span>{cat.name}</span>…</p>` — a non-linked label. Making that heading an anchor to its hub converts the site's most-repeated template into hub authority. This alone moves each hub from 1 to sitewide inlinks.

⚠️ **Caveat:** sitewide links pass diluted value and Google may treat them as boilerplate. L1 is necessary but **not sufficient** — L2–L6 (contextual, in-body, editorially placed) are what make hubs genuinely competitive. Do not expect L1 alone to move rankings.

---

## 5. Verification after implementation

Re-run the crawler and confirm:
- Every hub: **≥ 20** internal inlinks (≥ 5 contextual, non-boilerplate)
- Every application page: **≥ 5** inlinks
- Every product: ≥ 1 up-link to its hub
- Orphans: still 0
- Max click depth from `/`: **≤ 3**
- No page exceeds ~100 internal links
- No broken internal links (currently **628 links / 0 broken** — must stay 0)
