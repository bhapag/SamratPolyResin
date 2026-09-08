# POST_DEPLOYMENT_SEO_AND_INDEXING_REPORT.md

**Status: NOT STARTED — deployment has not happened.**

`origin/main` is still `19cddab`. The push failed on GitHub authentication
(`fatal: could not read Username for 'https://github.com'`) — full detail in
`RELEASE_HANDOFF.md` §1. Nothing partial was pushed.

**No Search Console action was taken, and none should be taken yet.** Submitting
or refreshing the sitemap now would submit the *current* live site, which does
not contain any of this work: 291 URLs that Google already has, minus the one
new page. Requesting indexing for unchanged pages achieves nothing and spends
quota. Every step below is written to run *after* a successful deployment.

---

## Step 0 — deploy (blocked)

```bash
cd "C:/Users/harmy/samrat poly resins website/.claude/worktrees/cool-mendeleev-788c77" && git push origin HEAD:main
```

Fast-forward onto `origin/main`; no force, no merge, no conflict. Cloudflare
Pages builds from `main` automatically. Wait for the build to finish before
anything below.

**Confirm the deployed commit is live** before proceeding — compare the
Cloudflare Pages deployment SHA against `git rev-parse HEAD`.

---

## Step 1 — crawl the live site and verify it renders

Re-point the existing harnesses at production instead of localhost:

```bash
node scripts/check-links.mjs                 # after building from the deployed commit
node scripts/verify-tds-specs.mjs            # specifications still match their PDFs
```

Then verify by hand or by script, on `https://samratpolyresins.in`:

| Check | Expected |
|---|---|
| Homepage, `/products/`, `/products/gp-resins/`, `/products/epoxy-resins/`, `/technical-documents/`, `/resources/`, `/applications/` | HTTP 200, rendered content present |
| `/logo.jpg` | **404** — moved into the image pipeline |
| `/home-video.mp4` | **404** — moved out of `public/` |
| `/videos/samrat-poly-resins-brand-film-still.png` | **404** — duplicate removed |
| `/videos/hero-background.mp4` | 200, **~4.06 MB** (was 20.7 MB) |
| `/videos/samrat-poly-resins-brand-film.mp4` | 200, **~3.50 MB** (was 25.9 MB) |
| The 3 legacy redirects in `public/_redirects` | still 301 to their targets |
| `robots.txt` | unchanged; no new `Disallow` |
| Canonicals | 291 pages, self-referencing, `https://samratpolyresins.in` |
| `/404` behaviour | `noindex`, absent from sitemap |
| Structured data | `BreadcrumbList` matches the visible trail; `FAQPage` answers match visible copy |

**The 404s above are intended.** They are files deliberately removed from the
deployed bundle; nothing links to them.

---

## Step 2 — Search Console review (read first, act second)

Property: `sc-domain:samratpolyresins.in`. Check, in this order:

1. **Manual Actions** and **Security Issues** — must both be clean before anything else.
2. **Indexing → Pages** — record the current Indexed / Not-indexed split as the pre-deploy baseline (last recorded: **263 indexed / 43 not indexed**).
3. **Sitemaps** — what is submitted, when it was last read, and its status.
4. **Core Web Vitals** and **HTTPS** — record current state; CWV is field data and will lag any deployment by weeks.
5. **Links** and **Performance** — snapshot for later comparison.

---

## Step 3 — sitemap

The live site generates `https://samratpolyresins.in/sitemap-index.xml`, which
points at `sitemap-0.xml`.

- **291 URLs.** Every one canonical and indexable; the 404 is excluded; no redirects, no duplicates.
- It gains exactly **one** new URL versus the current live sitemap: `/technical-documents/`.
- **Do not remove the existing sitemap.** It is the same file at the same address.
- Submit it only if it is not already submitted; otherwise use *Refresh*/resubmit so Search Console re-reads it.

**The 50 TDS/SDS PDFs are deliberately NOT in the sitemap.** Four already rank on
their own (positions 4–20.5). Adding them now would confound the measurement of
whether `/technical-documents/` earns those impressions instead. Revisit after
one full measurement cycle — reasoning in `INDEXING_INVENTORY.md` §2.

---

## Step 4 — URL Inspection, then indexing requests

Inspect first. Request only where the URL is eligible (canonical, indexable,
genuinely changed). Priority order:

| # | URL | Why it is a priority |
|---|---|---|
| 1 | `/` | Homepage rebuilt around the catalogue; 28 clicks / 728 impressions |
| 2 | `/products/gp-resins/` | Category hub; gained its first contextual inlinks |
| 3 | `/technical-documents/` | **New page** — not yet known to Google |
| 4 | `/products/unsaturated-polyester-resin/` | 337 impressions at 0.9% CTR — largest measurable gap; specifications corrected |
| 5 | `/products/gp-clear-resin/` | Specifications corrected; section navigation added |
| 6 | `/products/lamination-resin/` | Best commercial performer (10 clicks / 221 impressions); specifications corrected |
| 7 | `/products/epoxy-resins/` | Category hub; gained its first contextual inlinks |
| 8 | `/products/` | Products index rebuilt |
| 9 | `/resources/` | Knowledge Centre rebuilt |
| 10 | `/resources/what-is-gp-polyester-resin/` | Highest-impression article (301); gained a contextual hub link |
| 11 | `/applications/` | Applications index rebuilt |
| 12 | `/products/sheet-grade-yellow-resin/`, `/products/gp-gelcoat-resin/`, `/products/iso-fire-retardant-resin/` | Incorrect specifications removed — worth recrawling promptly |

**Do not request:** the 3 legacy redirect URLs, the 404, the PDFs, or the
long tail of unchanged resource articles.

---

## Step 5 — investigate exclusions

**40 URLs** are currently discretionary non-indexed: *Discovered – currently not
indexed* (27) and *Crawled – currently not indexed* (13). They are known only as
counts; the per-reason export is needed to identify them.

For each, check whether it is genuinely distinct, internally linked and
substantial. **Do not** request indexing as a substitute for fixing the page,
and **do not** `noindex` or delete them without review.

---

## Step 6 — record the outcome

| URL | Inspected | Requested | Google's response | Status |
|---|---|---|---|---|
| *(to be filled after deployment)* | | | | |

Record **requested**, **accepted for recrawl**, **indexed**, **excluded** and
**pending** separately. A request is a hint, not a guarantee — crawling,
indexing and ranking cannot be forced, and this document will not claim
otherwise.

---

## Step 7 — GA4 after deployment

1. Confirm `enquiry_form_submit` is marked as a key event (see `GA4_EVENT_AUDIT.md` §4 — it is the **only** event recommended for that status).
2. On the live site, verify each event still fires with the correct trigger: enquiry submission, quote-request click, WhatsApp click, phone click, catalogue download, generic file download.
3. **Do not send a real enquiry to production to test.** Use GA4 DebugView with the tag assistant, or verify against a genuine visitor event.
4. Confirm the three never-firing defaults (`close_convert_lead`, `purchase`, `qualify_lead`) have been unmarked.
5. Break `view_3d_*` down by hostname to resolve whether this property is receiving another site's data (`GA4_EVENT_AUDIT.md` §5).

---

## Restrictions that apply throughout

- **Never** use Google's Indexing API for these pages — it is restricted to job-posting and livestream content. Search Console sitemap submission and URL Inspection are the only correct routes.
- **Never** submit redirects, duplicates, `noindex` pages or low-value URLs.
- **Never** claim that submission forces indexing or ranking.
- Monitoring is only "scheduled" if someone actually schedules it. Nothing here is.
