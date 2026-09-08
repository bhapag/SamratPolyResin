# ENTITY_AND_AUTHORITY_PLAN.md — Samrat Poly Resins

**Date:** 2026-09-08

---

## 1. The core entity problem

Google resolves "Samrat Poly Resins" to **`samratpolyresins.com`**, not `samratpolyresins.in`.

Measured brand-search result (top 10): `.com` × 4 · IndiaMART × 2 · ExportersIndia · ZoomInfo · Justdial · IndiaMART category. **`.in` = 0 results.**

The brand's digital identity is currently distributed across at least six third-party surfaces plus a second owned domain — and the *best* asset (`.in`) is the one Google trusts least for the brand.

| Surface | Controlled? | Currently ranks for brand |
|---|---|---|
| `samratpolyresins.in` | ✅ Owned | ❌ No |
| `samratpolyresins.com` (IndiaMART-managed) | ✅ Owned | ✅ 4 results |
| IndiaMART profile | Partially | ✅ |
| ExportersIndia | Partially | ✅ |
| Justdial | Partially | ✅ |
| ZoomInfo | ❌ Third-party | ✅ (lists `@samratpolyresins.com` email) |
| `samratepoxyresins.com` | ✅ Owned? | ❓ Did not resolve |

**This is the highest-ROI fix available.** Brand traffic is the cheapest, highest-converting traffic a manufacturer gets, and it is currently being routed to a templated IndiaMART microsite instead of the premium site.

---

## 2. Verified entity facts (usable immediately — already public)

| Fact | Value | Source |
|---|---|---|
| Legal/trading name | Samrat Poly Resins | Site + IndiaMART + Justdial |
| Proprietor | Jaspal Singh | `site.js`, ZoomInfo, IndiaMART |
| Founded | 2017 | Site + IndiaMART |
| Address | Oswal Road, Near GT Road, Doraha, Ludhiana, Punjab 141421 | Site + directories |
| Phones | +91 74638 81652 · +91 74638 81005 | Site |
| Email | info@samratpolyresins.in | Site |
| GSTIN | 03ALBPS3446G1ZB | Published on site |
| ISO 9001:2015 | Certificate image published | `/certificates/` |
| Structure / turnover | Proprietorship, ₹5–25 Cr | IndiaMART profile |
| Packaging | 200–225 kg drums | `site.js` + TDS |
| Catalogue | 31 grades, 8 families | `products.js` |
| TDS/SDS library | Published PDFs | `/tds/`, `/sds/` |

⚠️ **NAP inconsistency detected:** the site's canonical email is `info@samratpolyresins.in` while ZoomInfo and the `.com` site carry `@samratpolyresins.com` addresses. Directory addresses also vary ("Doraha" vs "Ludhiana", "Opposite Bedi Steel" vs "Near GT Road"). NAP consistency is a direct local-ranking factor and needs a single canonical string.

---

## 3. Entity consolidation plan (all steps require approval)

### E1 · Resolve `samratpolyresins.com` 🔴 **Priority 1**
Options — a **commercial** decision (an IndiaMART package may be paid), not purely technical:

| Option | Action | Effect | Risk |
|---|---|---|---|
| **A — Consolidate (recommended)** | 301 `.com` → matching `.in` URLs | Consolidates all brand equity into `.in` | May breach/terminate an IndiaMART contract; loses IndiaMART lead flow |
| **B — Differentiate** | Keep `.com` as an IndiaMART storefront; canonical/link it to `.in` as the official site | Keeps IndiaMART leads, gradually shifts authority | Slower; some cannibalisation persists |
| **C — Do nothing** | — | `.in` keeps losing its own brand | Ongoing loss |

**Recommendation: A, or B if the IndiaMART contract must continue.** Do not proceed without confirming contractual position.

### E2 · Fix the documented false assumption 🟢
`astro.config.mjs` asserts *".com currently blocks crawlers via robots.txt."* **It does not** — it is indexed and outranking `.in`. Correct the comment so no future decision inherits the error.

### E3 · Strengthen `Organization` schema 🟢
Add, using **only already-public facts**: `sameAs` (IndiaMART, ExportersIndia, Justdial, `.com` — pending E1), `taxID` (GSTIN), `hasCredential` (ISO 9001:2015), `geo`, `areaServed`, `foundingDate`, `founder`. Consider `LocalBusiness`/`Manufacturer` typing for the Doraha facility. *(= T10)*

### E4 · Canonicalise NAP 🟡
Agree one exact name/address/phone/email string; align `.in`, `.com`, GBP, IndiaMART, ExportersIndia, Justdial, ZoomInfo.

### E5 · Google Business Profile 🟡 **Requires A5**
Not auditable without access. Once granted: verify categories (*Resin manufacturer / Chemical manufacturer*), real photos, hours, service areas, review acquisition from genuine customers. **This — not new pages — is what moves "resin manufacturer near me."**

### E6 · `/manufacturing/` page ⛔
See `CONTENT_PRODUCTION_QUEUE.md` C10. Blocked on evidence.

---

## 4. 📋 Evidence request to the business owner

**Nothing below will be published until supplied and confirmed. If an item cannot be evidenced, the corresponding claim is omitted — not softened.**

### Manufacturing capability (unblocks `/manufacturing/`)
1. Installed capacity — MT/year, or batch size × batches/month
2. Number and capacity of reactors
3. Year plant commissioned; expansions since
4. In-house lab equipment list (viscometer, oven, balance, etc.)
5. QC parameters tested per batch + whether a CoA is issued
6. Typical dispatch lead time (stock vs made-to-order)
7. States genuinely supplied + any real export markets
8. Approximate employee count

### Credentials
9. Any product/industry approvals beyond ISO 9001:2015 (BIS/IS, ARAI, IRS, fire classification…) — **or explicit confirmation there are none**
10. ISO certificate number, issuing body, validity dates
11. Trade association memberships

### Commercial
12. **Q1 decision — publish prices?** (`.com` already shows ₹124–₹700/kg)
13. Real MOQ per family
14. Named customers/case studies **with written consent** — or confirmation none can be named

### Media
15. Rights-cleared plant, reactor, lab, QC and dispatch photographs
16. Named technical reviewer (person + title) for E-E-A-T author/reviewer attribution

### Domains
17. `samratpolyresins.com` — contractual status with IndiaMART; may it be redirected?
18. `samratepoxyresins.com` — live, parked or planned? (did not resolve)

---

## 5. Off-site authority — ethical plan only

**Assets Samrat genuinely has** (no fabrication needed): a real TDS/SDS library, 213 technical articles, 37 application guides, a real plant, a real ISO certificate, and a real custom-formulation request tool.

| Tactic | Basis | Approval |
|---|---|---|
| Claim/optimise existing profiles (IndiaMART, ExportersIndia, Justdial, ZoomInfo) | Already exist | Owner |
| Trade-association membership pages | Requires real membership | Owner |
| Composites/FRP industry directories | Legitimate listings | Owner |
| Technical resource outreach to fabricators/institutes | Genuine useful content | ⚠️ Separate permission — brief forbids external contact without it |
| Exhibition/trade-show listings | If genuinely attending | Owner |
| Supplier/distributor reciprocal listings | Real relationships only | Owner |

**Explicitly excluded:** bought links, PBNs, automated outreach, paid guest posts, fake reviews, directory spam, parasite SEO, disavow without evidence.

⚠️ **Backlink audit cannot be performed** — no Ahrefs/Semrush access (A4). Lost-link analysis, toxic-link review and competitor gap remain **unassessed**, and I will not guess at them.
