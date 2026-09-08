# SEO_BASELINE.md — Samrat Poly Resins (samratpolyresins.in)

**Baseline captured:** 2026-09-08
**Audit mode:** Read-only. No production, DNS, CMS, analytics or indexing changes were made.
**Code audited:** `origin/main` @ `19cddab6fc36865230fcb507d9b33fe6f9b5fafe` (= live production at time of audit)
**Live host:** Cloudflare Pages, static Astro 7 build

---

## 1. What this baseline DOES and DOES NOT contain

This is important, and I want to be direct about it rather than pad the document.

### Measured with real evidence (trustworthy)
- Full 290-URL live crawl (status, titles, descriptions, canonicals, headings, schema, word counts, internal links)
- Live redirect/protocol/host/trailing-slash behaviour
- Live `robots.txt` (which differs from the repository file — see §6)
- Real production performance measured in-browser on the live site
- Real SERP evidence for target clusters (see `COMPETITOR_GAP_ANALYSIS.md`)
- Cross-domain brand-entity conflict (see §7 — the most consequential finding)

### NOT available — no credentials configured (verified, not assumed)
I checked for credentials/tooling rather than assuming. **None of the following are connected:**

| Data source | Status | What it blocks |
|---|---|---|
| Google Search Console | **Not connected** (site *is* verified — `google-site-verification` meta tag `OFsnvffAQ4QIkQX6p5GdUQ5asBnyE2PDzAwwtgj39Xw` is present, but I have no API access) | Impressions, clicks, CTR, average position, query-level data, ranking losses over 3–6 months, branded vs non-branded split, real query cannibalisation, indexed-vs-submitted coverage, crawl errors |
| GA4 | **Not connected** (tag `G-20DFSNPJ80` is installed and firing) | Organic sessions, conversions, qualified-lead attribution, device/landing-page performance |
| Ahrefs / Semrush | Not connected | Backlink profile, referring domains, lost links, competitor share of voice, keyword difficulty |
| Screaming Frog / Sitebulb | Not installed | (Substituted with a custom crawler — see §3; this covers the same ground for a 290-page site) |
| PageSpeed Insights API | Keyless quota exhausted | Lighthouse scores, CrUX **field** data (needs an API key) |
| Google Business Profile | Not connected | Map-pack visibility, local queries, review signals |

**Consequence — stated plainly:** the brief asks me to identify *"rankings lost during the previous three to six months"* and *"what caused or likely contributed to the ranking losses."* **I cannot answer that from evidence.** Any figure I produced would be invented. Section 7 contains a strong, evidence-backed *structural hypothesis*, but confirming it requires Search Console. Access request is in §8.

---

## 2. Site scale and composition (measured)

| Page type | Count | Median words (main content) |
|---|---|---|
| Homepage | 1 | 833 |
| Product detail | 31 | 1,774 |
| Category hub | **2** | **352** |
| Products index | 1 | 703 |
| Application pages | 37 | 741 |
| Applications index | 1 | 1,400 |
| Resource (Knowledge Hub) articles | **213** | 688 |
| Resources index | 1 | 9,515 |
| Static (about / contact / custom-resin-request) | 3 | 204 |
| **Total indexable (sitemap)** | **290** | — |

**Catalogue:** 31 products across 8 categories — GP Resins (7), FRP Allied Products (7), Industrial & Specialty Resins (6), Epoxy & Casting (4), Sheet Grade Resins (2), Fire Retardant Resins (2), Hardeners (2), GelCoat Resin (1).

**Composition ratio: informational : commercial = 6.3 : 1.**
213 informational articles support 34 commercial pages. For a business whose stated objective is commercial visibility (manufacturer / supplier / product / price queries), this is inverted.

---

## 3. Technical health (measured — this is genuinely good)

| Check | Result |
|---|---|
| HTTP status across all 290 sitemap URLs | **290 / 290 = 200 OK** |
| `http://` → `https://` | 301 ✅ |
| `www.` → apex | 301 ✅ |
| Non-trailing-slash → trailing slash | 308 ✅ |
| Legacy `_redirects` rules (4 rules) | All resolve correctly ✅ |
| Invalid URL | Correct 404 ✅ |
| Missing `<title>` | 0 |
| Duplicate `<title>` | 0 |
| Missing meta description | 0 |
| Duplicate meta description | 0 |
| Missing canonical | 0 |
| Canonical ≠ self | 0 |
| Missing H1 | 0 |
| Multiple H1 | 0 |
| Accidental `noindex` | 0 |
| Orphan pages (0 internal inlinks) | 0 |

**Conclusion:** classic technical SEO is not the bottleneck. I am not going to hand you a long list of trivial technical fixes to look busy — the build quality here is above average for the sector. The problems are *architectural, entity-level and commercial*, not crawl-level.

### Real technical defects that DO exist
| # | Issue | Evidence | Severity |
|---|---|---|---|
| T1 | **Both hero videos download on one page load** — `hero-background.mp4` (20,262 KB) *and* `hero-background-mobile.mp4` (4,521 KB) on a desktop load | Live Resource Timing capture | **High** |
| T2 | **Brand-film poster is a 1.7 MB unoptimised PNG** (`/videos/samrat-poly-resins-brand-film-still.png`, 941×1672) served from `public/`, bypassing Astro's image pipeline, into a ~340 px slot | Live Resource Timing capture | **High** |
| T3 | **First Contentful Paint 3,528 ms** on live production | Live Performance API | **High** |
| T4 | Sitemap has **no `<lastmod>`** on any of 290 URLs | Live sitemap | Medium |
| T5 | **32 titles exceed 60 chars** (truncate in SERP). The `Base.astro` guard only suppresses the brand suffix; it does not catch page titles already over budget | Crawl | Medium |
| T6 | **77 meta descriptions exceed 160 chars** | Crawl | Low–Medium |
| T7 | Category hubs carry **only `Organization` schema** — no `CollectionPage`/`ItemList`/`BreadcrumbList` | Crawl | Medium |
| T8 | `Product` schema has **no `offers`** node (no price, currency or availability) → limited Product rich-result eligibility | Live JSON-LD | Medium (see §7 price note) |
| T9 | `og:image:type` hardcoded `image/jpeg` even when a PNG is passed | `Base.astro` | Low |
| T10 | Organization schema lacks `sameAs`, `geo`, `areaServed`, `LocalBusiness` typing, `vatID`/`taxID` | Live JSON-LD | Medium (entity) |

---

## 4. Real production performance (measured live, not localhost)

Captured in-browser on `https://samratpolyresins.in/`:

| Metric | Value | Assessment |
|---|---|---|
| TTFB | 56 ms | Excellent (Cloudflare edge) |
| DOMContentLoaded | 476 ms | Excellent |
| `load` event | 1,236 ms | Good |
| **First Contentful Paint** | **3,528 ms** | **Poor** (Google "good" ≤ 1,800 ms) |
| Total transferred | **26,998 KB** | **Very heavy** |
| — of which video | **26,570 KB** | 98% of payload |
| Resource count | 18 | Low (good) |

**Important correction to a prior internal assumption:** earlier optimisation work measured FCP ≈ 216 ms — but that was against **localhost**, where a 26 MB video transfers instantly over loopback. On the real network FCP is **3,528 ms**. The `preload="metadata"` fix was still correct and worthwhile; it simply did not, and could not, address total payload weight. Localhost timings must not be quoted as production performance.

⚠️ **CrUX field data (what Google actually uses for the Core Web Vitals ranking signal) is unavailable** without a PSI API key. Lab data from one location is indicative, not authoritative.

---

## 5. Structured data coverage (measured)

| Page type | Schema present |
|---|---|
| Product (31) | `Organization`, `BreadcrumbList`, `Product`, `FAQPage` |
| Resource (213) | `Organization`, `BreadcrumbList`, `Article`, `FAQPage` |
| Application (37) | `Organization`, `BreadcrumbList`, `Article`, `FAQPage` |
| Home / indexes / static / **category hubs** | `Organization` only |

Coverage on products/resources/applications is genuinely strong. Gaps: category hubs, and no `offers` on Product.

---

## 6. `robots.txt` — live file ≠ repository file

The repository ships a simple allow-all. **Cloudflare is injecting a managed block** that the repo does not contain:

```
User-agent: *
Content-Signal: search=yes,ai-train=no,use=reference
Allow: /

User-agent: GPTBot            Disallow: /
User-agent: ClaudeBot         Disallow: /
User-agent: CCBot             Disallow: /
User-agent: Google-Extended   Disallow: /
User-agent: Amazonbot         Disallow: /
User-agent: Applebot-Extended Disallow: /
User-agent: Bytespider        Disallow: /
User-agent: meta-externalagent Disallow: /
```

**Accurate impact assessment (no scaremongering):**
- ✅ **Google Search rankings are NOT affected.** `Google-Extended` governs Gemini grounding/training only; Googlebot is unaffected and `Allow: /` stands.
- ⚠️ **AI assistant visibility IS affected.** ChatGPT (`GPTBot`), Claude (`ClaudeBot`), and Common Crawl-derived tools cannot retrieve the site. For a B2B chemical supplier in 2026, buyers increasingly shortlist suppliers via LLM assistants. Samrat is currently invisible in that channel.
- This is almost certainly a **Cloudflare default**, not a deliberate commercial decision. It is a one-toggle business decision for the owner, not a code change.
- Two `User-agent: *` groups now exist (Cloudflare's + the repo's). Google merges them; it is untidy but not harmful.

---

## 7. 🔴 Cross-domain brand-entity conflict — the most consequential finding

The brief asked me to check cannibalisation risk against `samratepoxyresins.com`. **I found a larger and more urgent problem: `samratpolyresins.com`.**

### Evidence
A brand query for *"Samrat Poly Resins Ludhiana polyester resin manufacturer"* returned:

| # | Result | Domain |
|---|---|---|
| 1 | ZoomInfo profile (Jaspal Singh, email `@samratpolyresins.com`) | zoominfo.com |
| 2 | Samrat Poly Resins — Manufacturer from Doraha | indiamart.com |
| 3 | **Manufacturer of Polyester Resins & GP Resin by Samrat Poly Resins** | **samratpolyresins.com** |
| 4 | **About Us** | **samratpolyresins.com** |
| 5 | **Fire Retardant Resin** | **samratpolyresins.com** |
| 6 | Samrat Poly Resins in Ludhiana Punjab | exportersindia.com |
| 7 | **FRP Polyester Pigment** | **samratpolyresins.com** |
| 8–10 | IndiaMART category pages, Justdial | indiamart / justdial |

**`samratpolyresins.in` did not appear at all in its own brand search.**

### What `samratpolyresins.com` actually is
Verified by direct fetch: a **live, indexed, IndiaMART-hosted site for the same business** ("Developed and Managed by IndiaMART InterMESH Limited"), same proprietor, same Doraha address, **same product catalogue**, and it **publishes prices**:

| Product | Price on `.com` |
|---|---|
| GP Clear Resin | ₹140/kg |
| LR / Laminating Resin | ₹140/kg |
| GP White Resin | ₹135/kg |
| Unsaturated Polyester Resin | ₹130/kg |
| GP Yellow Resin | ₹124/kg |
| Button Grade Polyester Resin | ₹175/kg |
| Clear Casting Resin | ₹700/kg |
| Epoxy Art Resin | ₹700/kg |

### Three conclusions that follow

1. **A documented internal assumption is now factually wrong.** `astro.config.mjs` states *"samratpolyresins.com currently blocks crawlers via robots.txt."* It does not — it is indexed and outranking `.in` for the brand. This assumption should not be relied on for any further decision.

2. **Two live sites for one business are splitting the entity.** Same NAP, same products, same identity. Google is currently resolving the brand to `.com`. Every trust signal `.in` earns is diluted.

3. **The "Price on Request" strategy on `.in` is already undermined.** Samrat's own `.com` site and IndiaMART listings publish exact prices. `.in` is the *only* place hiding them — while competitors ranking for "GP resin price" all show prices. This is a business decision to make deliberately, not a technical one (see `SEO_DECISIONS_LOG.md`, Open Question Q1).

**`samratepoxyresins.com`:** did not resolve during testing (connection failed). Cannot assess. Needs owner clarification on whether it is live, parked, or planned.

---

## 8. Access request — required to complete the baseline

Ranking-loss diagnosis and true performance baselining are blocked until these are provided:

| # | Access needed | Unblocks | Priority |
|---|---|---|---|
| A1 | **Search Console** (read-only, both `.in` **and** `.com` properties) | Ranking losses, query/landing data, cannibalisation, coverage, the entire "what caused the drop" question | **Critical** |
| A2 | **GA4** read access (`G-20DFSNPJ80`) | Organic sessions, conversions, qualified leads | **Critical** |
| A3 | PageSpeed Insights API key (free) | Lighthouse + CrUX **field** CWV | High |
| A4 | Ahrefs *or* Semrush seat (or a one-off export) | Backlinks, lost links, competitor share of voice, difficulty scoring | High |
| A5 | Google Business Profile manager access | Map-pack/local visibility, reviews | Medium |
| A6 | Decision/clarification on `samratpolyresins.com` and `samratepoxyresins.com` | Entity consolidation strategy | **Critical** |

Evidence needed from the business (for credibility claims — **nothing will be published unverified**) is listed in `ENTITY_AND_AUTHORITY_PLAN.md` §4.

---

## 9. Baseline snapshot to measure against

Frozen values for post-implementation comparison:

- Indexable URLs in sitemap: **290**
- Live HTTP 200 rate: **100%**
- Category hub pages: **2 of 8 categories** (avg 327 words, 1 internal inlink each)
- Commercial : informational ratio: **1 : 6.3**
- Titles > 60 chars: **32**
- Meta descriptions > 160 chars: **77**
- Homepage FCP (live, single-location lab): **3,528 ms**
- Homepage total transfer: **26,998 KB**
- Product pages with `offers` schema: **0 / 31**
- Pages with `lastmod` in sitemap: **0 / 290**
- Brand-search visibility for `.in`: **not present in top 10** (`.com` holds 4 positions)

> Traffic, ranking, conversion and backlink baselines are **deliberately left blank** pending A1/A2/A4. They will not be estimated.
