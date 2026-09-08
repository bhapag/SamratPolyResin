# PROJECT_STATE_AND_COMPLETION.md

**Date:** 2026-09-09 · **Scope:** `samratpolyresins.in` only · **Delivery: local. Nothing pushed, merged or deployed.**

---

## 1. Verified current state — not assumed

Everything below was read from the repository, not carried over from an earlier session's notes.

| Fact | Value |
|---|---|
| Worktree | `C:\Users\harmy\samrat poly resins website\.claude\worktrees\cool-mendeleev-788c77` |
| Branch | `seo/batch-0-1-perf-and-gp-hub` |
| HEAD | `fe14ddd` |
| Remote | `https://github.com/bhapag/SamratPolyResin.git` |
| **`origin/main`** | **`19cddab`** ("feat: add Samrat Poly Resins brand film") |
| This branch vs `origin/main` | **8 ahead, 0 behind** |
| **Deployed state** | **`19cddab`.** None of the six commits below is in production |

### The six commits on this branch

| Commit | Subject | Deployed? |
|---|---|---|
| `f46988e` | perf+seo: load one hero encode, optimise poster, strengthen GP hub links | No |
| `9cf8923` | docs: correct Slow-4G and ranking-loss conclusions with measured evidence | No |
| `d2dcedc` | docs: withdraw six overstated conclusions and reconcile indexing totals | No |
| `0eff4c1` | perf+seo: Batch 2 — hero A+B, logo, document library, hub links, breadcrumbs | No |
| `22aaede` | design: spec-led product cards, catalogue-first homepage, video re-encodes | No |
| `28c1c4b` | design: make the Knowledge Centre navigable — compact rows and hub jump-nav | No |
| `fe14ddd` | design+tests: applications discovery, and cover for the buyer journey | No |

*(`f46988e` and `9cf8923` existed before this session; the rest were created in it.)*

### Other checkouts — checked before editing anything

| Path | Branch | State | Action taken |
|---|---|---|---|
| `C:\Users\harmy\samrat poly resins website` | `main` @ `21830d6` | **Dirty** — uncommitted brochure work | **Not touched.** |
| `C:\Users\harmy\samrat-poly-redesign` | `design/premium-refresh` @ `86bb580` | Clean; commit dated 2026-08-24 | **Not touched.** Verified `86bb580` is already an ancestor of `origin/main`, so it is finished work, not a competing worker |

No stash was pushed or popped. No branch other than `seo/batch-0-1-perf-and-gp-hub` was modified.

---

## 2. SEO completion table

**"Code exists", "returns 200", "schema parses" and "in the sitemap" are recorded as *completed locally* — never as *complete*.** Nothing can be verified in production while nothing is deployed.

| # | Requirement | Current evidence | Completed locally | Verified in production | Pending action | Dependency |
|---|---|---|---|---|---|---|
| 1 | Responsive hero loading, single encode | 1 video request at 390px, measured by CDP over 5 cold runs | ✅ `f46988e`, `0eff4c1` | ❌ | Deploy, then re-measure on production | Authorised deployment |
| 2 | Hero poster priority / no duplicate requests | Slow-4G LCP 13,200 → 7,412 ms; pre-LCP bytes 404,563 → 124,786 | ✅ `0eff4c1` | ❌ | Same | Authorised deployment |
| 3 | Compressed video | Deployed video 53.00 → 9.22 MB (−82.6%), SSIM 0.975–0.982, masters preserved byte-identically | ✅ `0eff4c1`, `22aaede` | ❌ | Owner sight-check of the re-encodes on a large screen | Owner review |
| 4 | Oversized header logo | 197,263 → 4,924 bytes on all 292 pages; `/logo.jpg` now 404 | ✅ `0eff4c1` | ❌ | Deploy | Authorised deployment |
| 5 | Other oversized images | Product thumbnails resized to their 88px slot; unreferenced 1.78 MB poster removed from `public/` | ✅ `0eff4c1`, `22aaede` | ❌ | Sweep remaining templates (application, resource) | Stage 2 of design work |
| 6 | GP resin hub | Rebuilt with a 7-grade comparison table read from `techSpecs` | ✅ `f46988e` | ❌ | Deploy | Authorised deployment |
| 7 | Other category hubs | Only `GP Resins` and `Epoxy & Casting` have hubs; both now linked from the homepage | ✅ `22aaede` | ❌ | **Decide** whether Fire Retardant (2) / Sheet Grade (2) / Hardeners (2) warrant hubs | §4 below — owner input |
| 8 | Contextual resource/application/product links | Both hubs had **0** contextual inlinks; now 4 each | ✅ `0eff4c1` | ❌ | Deploy, then watch whether hub impressions move | Authorised deployment |
| 9 | Application breadcrumb hierarchy | `Home > Applications > {page}`; visible trail and `BreadcrumbList` generated from one array | ✅ `0eff4c1` | ❌ | Deploy, then re-inspect in Search Console | Authorised deployment |
| 10 | Crawlable technical-document library | `/technical-documents/` lists all 50 TDS/SDS, in the sitemap, linked sitewide from the footer | ✅ `0eff4c1` | ❌ | Deploy, then observe whether the page or the PDFs earn the impressions | Authorised deployment |
| 11 | Sitemap / canonicals / indexability | 291 sitemap URLs, 291 canonicals, 0 `noindex`, 404 correctly excluded, 0 broken internal links across 34,388 | ✅ | ❌ | Refresh sitemap in Search Console **after** deploy | §5 — mandatory indexing phase |
| 12 | Private analytics export protection | `.seo-private/` and `.playwright-cli/` git-ignored; confirmed via `git check-ignore` | ✅ `d2dcedc` | n/a | — | — |
| 13 | GA4 event accuracy + key-event proposal | 17 events collected, **0 marked as key events**; 3 configured key events have never fired | ✅ audit only — `GA4_EVENT_AUDIT.md` | n/a | **Owner marks key events in GA4.** No GA4 change was made | Owner, GA4 Admin |
| 14 | URL-level indexing inventory | 290 sitemap vs 306 GSC-known reconciled: 51 PDFs (4 ranking, positions 4–20.5) + 3 legacy redirects | ⚠️ Partial — `INDEXING_INVENTORY.md` | ❌ | The **40** discovered/crawled-not-indexed URLs are known only as counts | GSC per-reason export |
| 15 | Real manufacturer evidence / factual gaps | See §4 | ❌ | ❌ | Owner must supply or confirm | Owner |

### What limited history can and cannot show

Search Console holds no data for this property before ~24 July / 1 August 2026, because the site was first committed 2026-07-16 and the property verified 2026-07-25. **That means the reported ranking decline can be neither confirmed nor disproved here — absence of data is not evidence of absence.** Corrected in full at `SEO_AUDIT_VALIDATION_ADDENDUM.md` §9-quater.

Every ranking figure in these documents now carries its scope: property, date range, search type, country, device and export source. India is analysed separately from other countries throughout — and the visible query slice is only **~24% of India clicks / ~22% of impressions**, because GSC anonymises the rest.

Downloads and contact clicks are recorded as **tracked lead-intent or engagement actions**, never as qualified leads.

---

## 3. Design work — direction and what changed

### The direction

**Restrained premium industrial, with the catalogue doing the talking.** The existing system (charcoal + deep navy base, one rationed champagne-gold accent, Oswald/Inter/JetBrains Mono, warm "ledger" surface for technical reading) is well built and documented in `global.css`; it did not need replacing. What it needed was for the *product data* to be as visible as the styling.

So the work is subtractive and informational, not a re-skin: remove what occupies space without informing, and promote the published values a buyer actually selects on.

### Concrete weaknesses found — each measured, not asserted

| # | Finding | Evidence |
|---|---|---|
| D1 | **Product imagery conveys nothing at card size.** All 31 images are complete marketing posters, not product photography. At ~300px they are unreadable micro-text and all read as the same light rectangle | All 31 rendered side by side at real card size |
| D2 | **No safe automatic crop exists.** Product sits left in some posters, right in others, centre in others, absent in several | Same contact sheet |
| D3 | **Homepage read as a small brochure.** 8 bare category labels + 6 of 31 grades | Homepage markup |
| D4 | **~500px of dead background** between the category grid and the next section, because a short grid sat beside a 9:16 portrait video | Desktop screenshot at y≈1,472 |
| D5 | **Extreme page lengths.** Homepage 21 mobile screens; products index 24; **resources index 113** | `fullPage` heights at 390×844 |
| D6 | **Homepage loaded four videos totalling 32 MB**, of which 25.9 MB was a 12-second silent clip in a 340px slot | CDP byte accounting, scrolled to bottom |
| D7 | A sticky TOC item can stay invisible after an anchor jump | Reveal test, `anchor-jump` mode |

### What was fixed in this stage

| Finding | Fix | Result |
|---|---|---|
| D1, D2 | Poster demoted to an 88px document thumbnail; two published TDS values promoted onto the card | 24 of 31 cards now show a differentiating figure |
| D3 | Category grid became the primary catalogue entry: 8 families, grade counts, example grades, hub links | Real breadth visible above the featured grid |
| D4 | Portrait video removed from that row; grid went full width | Dead space eliminated |
| D5 | Shorter cards | Products index −25% desktop / −38% mobile |
| D6 | Brand film re-encoded; unused clip moved out of `public/` | Homepage mobile 33.99 → 9.39 MB |

### Two claims I checked and did **not** make

- **Contrast.** An early automated pass reported dozens of WCAG failures. It was wrong: the visible page background is a fixed layer (`.ambient-bg`), not an ancestor, so the tool composited text against white. Re-run against the real `--bg`, the palette passes — `--ink-faint` #838a96 on #0d0f12 is ~5.5:1. Headings still report 1:1 because they use `background-clip: text`; their gradient runs #ffffff → #d9d6cf, all well above AA. **No contrast defect was found, and none is claimed.**
- **Invisible content.** The scroll-reveal system was tested under slow scroll, End-key jump and mid-page landing. It is progressive-enhancement only — nothing is hidden in CSS — and produced exactly one on-screen-but-invisible element in all three modes (D7). **There is no systemic invisible-content defect.**

---

## 4. Open factual questions — not resolved, not guessed

### "DP clear resin"

**Unresolved. Deliberately.** No `DP` product, grade, category, alias or redirect exists anywhere in this repository, and there is **no `dp` query in either Search Console export** (unfiltered or India-only, 2026-08-01 → 2026-09-06).

Candidate explanations, in no particular order: a mishearing or transcription of **GP Clear Resin** (a real grade with a real TDS); a customer's own shorthand; or a grade that exists commercially but is not on this site.

**No DP category was created, and "DP" was not silently mapped to "GP" anywhere.** Doing either would put an unverified product name on a manufacturer's website. **Please confirm which it is.**

### "Bisphenol resin"

The catalogue already handles this carefully, and I changed nothing:

| Product | Category | Recorded resin type |
|---|---|---|
| `bisphenol-resin` | **Industrial & Specialty Resins** — *not* Epoxy & Casting | "Bisphenol A & epichlorohydrin based (thermosetting) — current TDS wording" |
| `fiberglass-epoxy-resin` | Industrial & Specialty Resins | "Epoxy (current TDS); catalogue calls it Bisphenol-A Epoxy Resin" |

Bisphenol-A **plus epichlorohydrin** is epoxy chemistry; a bisphenol-A **fumarate** unsaturated polyester is a different product with a similar name. The recorded wording quotes the TDS rather than paraphrasing it, and the styrene content is recorded as "Not applicable" — consistent with an epoxy, not a polyester.

⚠️ **I could not re-read the source PDF to confirm this independently.** No PDF text extractor is available in this environment (`pdftoppm` absent; the PDF's text streams did not yield to a raw parse). The wording above is what `products.js` records as transcribed from the TDS. **Recorded as an open verification item, not as a confirmed finding.** It is also the reason a contextual link from `what-is-fiberglass-epoxy-resin` to `/products/epoxy-resins/` was **rejected**: that hub does not contain that product.

### Other business facts still required

Capacity, reactor count, laboratory scope, QC procedures, lead times, approvals, named technical reviewer, real facility photography, and the price policy (`DOMAIN_AND_PRICE_DECISIONS.md` Q1). **None was invented. No badge, testimonial, certification, award or customer logo was fabricated. No city or location page was created.**

---

## 5. Mandatory post-deployment indexing phase — still pending, still unauthorised

Recorded permanently at `SEO_AUDIT_AND_PLAN.md` §6-bis and `INDEXING_INVENTORY.md` §6. In summary: after an authorised deployment — crawl live production; validate status codes, canonicals, robots directives, redirects and **rendered** HTML; validate the sitemap contains only canonical indexable URLs; refresh it in Search Console; inspect the priority changed URLs; request indexing **only** for eligible pages and within quota; review intended-indexable pages individually where excluded.

**Record accepted submissions separately from confirmed indexing.** Never submit redirects, duplicates, intentional exclusions or low-value pages.

**Google's Indexing API must not be used here.** It is restricted to job-posting and livestream content — <https://developers.google.com/search/apis/indexing-api/v3/using-api>. These are resin product pages. Search Console's own workflow is the only correct route.

**No monitoring is scheduled**, and I am not claiming any is. Indexing cannot be forced; requesting it is a hint, not a guarantee, and no page is promised a ranking.

---

## 6. Release and rollback

**Local preview**

```bash
npm run build && npx astro preview --port 4399
```

**Verification at HEAD `fe14ddd`**

| Check | Result |
|---|---|
| `npm run build` | 292 pages |
| `npx playwright test` | **63/63 passed** (16 pre-existing + 47 added this session) |
| `node scripts/check-links.mjs` | 34,388 internal links, **0 broken** |
| Horizontal overflow, 15 pages × {390, 1440} | **0 px everywhere** |
| Sitemap / canonicals | 291 URLs, 291 canonicals, 0 `noindex`, 404 excluded |
| Slow-4G, 5 cold runs, medians | LCP 7,424 ms; pre-LCP 129,395 bytes; 1 video request |
| Reduced motion | 0 video requests; 0 elements left at opacity 0 |
| View Transitions | `phone_click` fires exactly once after 4 hops; `product_view` once per product |

### Page height, before → after (fullPage, same conditions)

| Page | Desktop 1440 | Mobile 390 |
|---|---|---|
| Homepage | 11,202 → **10,615** | 18,050 → **16,875** |
| Products index | 8,997 → **6,789** (−25%) | 20,409 → **12,647** (−38%) |
| Applications index | 9,922 → 9,977 | 20,967 → **10,454** (−50%) |
| Knowledge Centre | 44,140 → **23,581** (−47%) | 95,224 → **38,237** (−60%) |
| GP hub | 7,619 → 7,353 | 12,349 → **10,703** |
| Epoxy hub | 4,477 → 4,353 | 7,236 → **6,295** |

### Transfer, cold cache, scrolled to the bottom

| | Before | After |
|---|---|---|
| Homepage mobile | 33.99 MB | **9.39 MB** (−72%) |
| Homepage desktop | 38.12 MB | **12.83 MB** (−66%) |
| Deployed video total | 53.00 MB | **9.22 MB** (−82.6%) |

**Rollback.** Every commit is independently revertible; none rewrites history and none is deployed.

```bash
git revert 22aaede      # design stage 1 only
git revert 0eff4c1      # Batch 2 only
```

To abandon the whole branch, deploy `origin/main` (`19cddab`) — which is what production is already serving.

---

## 7. Explicitly not done

- **Nothing deployed, pushed or merged.** No DNS, Cloudflare, robots or CDN change.
- **No GA4 change.** `GA4_EVENT_AUDIT.md` recommends key events; none was marked.
- **No Search Console change.** No indexing request, no sitemap submission, no settings, users or permissions touched.
- **No change to `samratpolyresins.com` or any other Samrat domain**, and nothing copied from them.
- **No real-device iOS testing.** Chromium and emulated WebKit profiles only. The hero's autoplay behaviour is historically fragile on iOS and this batch removed `poster` attributes that earlier iOS work deliberately added. **Emulation is not an iPhone test and is not presented as one — this needs a real device before deployment.**
- **Product detail page (19,338 px mobile), resource-article template (26,797 px mobile) and the application detail template are not yet redesigned.** The Knowledge Centre index, applications index, products index and homepage are.

**Status: local implementation complete for the items marked ✅ above, and verified only by the checks listed in §6.** Everything else is unshipped, unverified, or waiting on a business fact.
