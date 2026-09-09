# Release record — content consolidation and buyer tools

**Date:** 9 September 2026
**Live commit:** `a7cf3ca`
**Previous production commit:** `aef988f`
**Deployment:** Cloudflare Pages, automatic on push to `main`
**Live URL:** https://samratpolyresins.in

---

## What shipped

| | Before | After |
|---|---:|---:|
| Sitemap URLs | 291 | **238** |
| Resource articles | 213 published | **155** published |
| Median body prose per article | 227 words | — |
| Consolidated guides | — | **11**, averaging ~930 body words |
| Retired URLs behind 301s | — | **59** |
| Automated tests | 85 | **124** |

Four commits, in order:

1. `0e4e21c` — consolidate 59 thin articles into 11 substantial guides
2. `f3de438` — fix the pages that rank and are not clicked
3. `fcd355a` — glossary, resin selector, two category hubs, ordering and quantity pages
4. `a7cf3ca` — tests, plus a runtime-CSS defect they surfaced

---

## Live verification

`node scripts/verify-live.mjs` — **23 checks, 0 failures**, run against production
after deployment:

- All **59** retired URLs return 301 to a live 200 destination. No chains, no loops.
- Non-slash forms redirect too.
- All 6 new pages: 200, correct canonical, exactly one `h1`, valid JSON-LD.
- Sitemap: 238 URLs, **every one returns 200**; no retired URL present; 404 absent.
- `robots.txt`: `User-agent: *` is `Allow: /` — search crawling is not blocked.
- All 6 retitled pages carry their new metadata.
- `LocalBusiness` present with no unverified fields.
- The withdrawn `1.20 g/cm³` specific-gravity claim has not returned.

`npm run check:links`: 30,773 internal links, 0 broken.
`npm run verify:specs`: every published numeric property still supported by its
own technical data sheet.

---

## Search Console

| Action | Result |
|---|---|
| Sitemap resubmitted | `https://samratpolyresins.in/sitemap-index.xml` — Status **Success** |
| Indexing requested | **13 URLs accepted** into the priority crawl queue |
| Daily quota | **Exhausted on the 14th request** — "Quota exceeded… try again tomorrow" |
| Manual actions | **No issues detected** |
| Security issues | **No issues detected** |

**Requested (13):** `/how-to-order/`, `/tools/resin-selector/`,
`/resources/resin-glossary/`, `/products/frp-allied-products/`,
`/products/industrial-specialty-resins/`, `/tools/quantity-guidance/`,
`/products/`, `/products/unsaturated-polyester-resin/`, `/`,
`/products/gp-clear-resin/`, `/products/lamination-resin/`, `/contact/`,
`/products/gp-resins/`.

**Not requested — quota:** `/products/epoxy-resins/` and the consolidated guides.
All are in the resubmitted sitemap; no request is needed for Google to find them.

### Two things to expect, so they do not look like faults

1. **"Page with redirect" will rise from 3 to roughly 62.** That is the 59 retired
   URLs being recrawled and found to be 301s. It is the intended outcome of the
   consolidation, not a regression.
2. **The sitemap still reports 290 discovered pages.** That is Google's count from
   its *previous* read. It will fall to 238 when Google re-reads.

Indexing is Google's decision on Google's schedule — typically days to weeks.
Submission puts a URL in a priority crawl queue. It does not force crawling,
does not force indexing, and has no effect on ranking.

---

## GA4 — verified, not changed

Property `547377291`. **No GA4 setting was altered in this release.**

| Event | Key event? | Stream data |
|---|---|---|
| `enquiry_form_submit` | **Yes** | **Active ("Harman")** |
| `close_convert_lead` | Yes | None — has never fired |
| `qualify_lead` | Yes | None — has never fired |
| `purchase` | No | None |

`enquiry_form_submit` is the **only key event that receives any data**, and it
fires only inside `if (data.success)` after the Web3Forms endpoint confirms a
delivered submission — verified in `src/scripts/lead-attribution.ts:252` and
asserted by `tests/enquiry-journey.spec.ts` against a stubbed endpoint.

It is **not** literally the only *marked* key event: two GA4 defaults
(`close_convert_lead`, `qualify_lead`) are still starred despite never having
fired. Unmarking them remains an owner decision and was not made here.

---

## Google Business Profile — audited, not changed

A **verified** profile exists: *Samrat Poly Resins, Oswal Road, Grand Trunk Road,
Doraha, Punjab 141421*. NAP is consistent with the site (the site writes "Near GT
Road"; GBP writes "Grand Trunk Road" — the same road).

**One pending "Google update" was found and deliberately left for the owner.**
Accepting a Google-suggested update can silently change public business facts,
and there was no evidence available to judge it against.

No new evidence-backed improvement was available to make: the repository holds
no opening hours and no new facility photography.

---

## Rollback

```bash
git revert a7cf3ca fcd355a f3de438 0e4e21c
git push origin main
```

Or point Cloudflare Pages at `aef988f`. No history was rewritten and every
commit reverts independently. Reverting also removes the 59 redirects, which
would restore the retired URLs as 404s until the revert redeploys — revert all
four commits together, not just the first.
