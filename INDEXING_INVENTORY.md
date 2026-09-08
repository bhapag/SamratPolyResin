# INDEXING_INVENTORY.md — reconciliation and working inventory

**Date:** 2026-09-09 · **Source:** GSC Page Indexing (read-only) + GSC Performance export (2026-08-01 → 2026-09-06) + local build
**No indexing was requested. No sitemap was submitted. No robots directive was changed.**

---

## 1. The arithmetic, reconciled

| Figure | Value |
|---|---|
| URLs in live sitemap | **290** |
| GSC "Indexed" | **263** |
| GSC "Not indexed" | **43** |
| 263 + 43 | **306** |
| **Discrepancy vs sitemap** | **+16** |

**Cause: GSC Page Indexing counts every URL Google knows about — not just sitemap URLs.** Verified, not assumed:

| Source of extra known URLs | Evidence | Count |
|---|---|---|
| **PDFs** (`/tds/`, `/sds/`, `/downloads/`) | **51 exist** in the repo; **4 confirmed earning impressions** in the GSC Pages export, and they are **absent from the sitemap** | ≥4 known, up to 51 discoverable |
| **Legacy redirect URLs** | `public/_redirects` defines **3 redirect targets** (each with slash/no-slash variants). GSC reports exactly **"Page with redirect: 3"** | 3 |
| Other discovered variants | Not individually identifiable without the per-reason GSC export | remainder |

**Confirmed non-sitemap URLs earning search impressions:**

| URL | Clicks | Impr. | Position |
|---|---|---|---|
| `/sds/fiberglass-epoxy-resin-sds.pdf` | 0 | 2 | **4.0** |
| `/sds/pet-resin-sds.pdf` | 0 | 2 | **5.0** |
| `/tds/epoxy-art-resin-tds.pdf` | 0 | 1 | **8.0** |
| `/sds/lamination-resin-sds.pdf` | 0 | 2 | 20.5 |

**So the "denominator mismatch" is not an error — it is PDFs and legacy redirects being counted by GSC but not listed in the sitemap.**

⚠️ **Limitation:** the exact URL lists behind "Discovered – currently not indexed" (27) and "Crawled – currently not indexed" (13) require exporting those specific GSC reports. I have the aggregate counts and the mechanism, **not the 40 individual URLs.** They are listed as *unresolved* below rather than guessed at.

---

## 2. PDF indexability — answered

| Question | Answer | Evidence |
|---|---|---|
| Are PDFs indexable? | **Yes** | No `Disallow` in live robots.txt; **zero** `X-Robots-Tag` in `public/_headers` |
| Are PDFs actually indexed? | **Yes, at least 4** | They appear in the GSC Pages export with impressions |
| Are they in the sitemap? | **No** | 0 of 51 |
| Do they rank? | **Yes, well** | Positions 4, 5, 8, 20.5 |

**Recommendation: change nothing about PDF indexability.** They are already indexed and ranking at positions 4–8 without any intervention. **Do not block them, and do not add them to the sitemap in this batch** — first ship `/technical-documents/` as an HTML entry point and observe whether it, the PDFs, or both earn the impressions. Adding 51 PDFs to the sitemap now would confound that measurement.

---

## 3. Inventory of the URL classes

| Class | Count | In sitemap | Indexable | Should be indexed? | Action |
|---|---|---|---|---|---|
| Homepage | 1 | ✅ | ✅ | Yes | none |
| Product detail | 31 | ✅ | ✅ | Yes | none |
| Category hubs | 2 | ✅ | ✅ | Yes | none |
| Products index | 1 | ✅ | ✅ | Yes | none |
| Applications (+index) | 38 | ✅ | ✅ | Yes | breadcrumb fix (Batch 2) |
| Resources (+index) | 214 | ✅ | ✅ | Yes | none |
| Static (about/contact/custom-request) | 3 | ✅ | ✅ | Yes | none |
| **`/technical-documents/`** | **1 (new)** | will be | ✅ | **Yes** | created in Batch 2 |
| 404 | 1 | ❌ correctly | n/a | No | none |
| **TDS PDFs** | **25** | ❌ | ✅ | **Yes — already are** | **leave as-is** |
| **SDS PDFs** | **25** | ❌ | ✅ | **Yes — already are** | **leave as-is** |
| Catalogue PDF | 1 | ❌ | ✅ | Yes | leave as-is |
| **Legacy redirect URLs** | **3 targets (6 forms)** | ❌ correctly | 301 | **No** | **Never submit.** Correctly excluded |

### Legacy redirect URLs — confirmed correct exclusions
| URL | Redirects to | Verdict |
|---|---|---|
| `/products/crystal-clear-resin/` | `/products/gp-clear-resin/` | ✅ correct; do not submit |
| `/resources/pet-resin-technical-specifications-and-rfq/` | `/products/pet-resin/` | ✅ correct; do not submit |
| `/resources/bisphenol-resin-technical-data-and-document-check/` | `/products/bisphenol-resin/` | ✅ correct; do not submit |

These account for GSC's "Page with redirect: 3". **This is healthy, expected behaviour — not a defect.**

---

## 4. The 40 discretionary non-indexed pages

| Reason | Count | Interpretation |
|---|---|---|
| Discovered – currently not indexed | 27 | Google knows the URL, has not prioritised crawling it. Normal for an 8-week-old site with a 214-page content tail; usually resolves with time and internal links |
| Crawled – currently not indexed | 13 | Crawled, and Google chose not to index. Usually a perceived value/duplication signal |

**Not diagnosed to URL level** — that needs the GSC per-reason export.

**Explicitly not recommended:** do **not** assume these 40 should be indexed, do **not** request indexing for them, and do **not** `noindex` or delete them. The correct next step is to identify them, check whether each is genuinely distinct and internally linked, and improve or consolidate the few that are not.

**Working hypothesis (unverified):** they are concentrated in the resource tail — 245 of 290 pages earn impressions, so ~45 pages earn none, which overlaps plausibly with the 40. **Not confirmed.**

---

## 5. Pages earning impressions

| Metric | Value |
|---|---|
| Unique pages with ≥1 impression (36 days) | **245** |
| Of which are PDFs | 4 |
| HTML pages with impressions | 241 of 290 (**83%**) |

For a site first committed on **2026-07-16**, 83% of pages earning impressions within ~6 weeks is healthy coverage.

---

## 6. Deferred to the mandatory post-deployment indexing phase

Per the standing instruction, after deployment and production verification: crawl live, validate status/canonical/robots/rendered HTML, validate the sitemap contains only canonical indexable URLs, refresh the sitemap in GSC, inspect priority changed URLs, request indexing **only** for eligible priority pages, diagnose the discovered/crawled-not-indexed sets, never submit redirects or duplicates, and monitor coverage for several weeks.

**That phase is not authorised now and nothing here anticipates it.** Indexing cannot be forced; requesting it is a hint, not a guarantee.
