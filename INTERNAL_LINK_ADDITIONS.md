# INTERNAL_LINK_ADDITIONS.md — the eight contextual links, mapped before they were written

**Date:** 2026-09-09 · **Batch 2, item 8** · Mapping produced **before** any link was added, as required.

---

## 1. The measured deficit these links address

`INTERNAL_LINK_MAP.md` recorded that the category hubs are reachable almost entirely through boilerplate. Re-measured today against the current tree, at hub level:

| Hub | Navigation inlinks | Breadcrumb inlinks | **Contextual editorial inlinks** |
|---|---|---|---|
| `/products/gp-resins/` | every page (mega-menu + mobile nav) | 7 (its own grades) | **0** |
| `/products/epoxy-resins/` | every page (mega-menu + mobile nav) | 4 (its own grades) | **0** |

Method: `JSON.stringify()` of every non-draft entry in `resources.js` and every entry in `applications.js`, searched for each hub URL. Both returned zero.

**Boilerplate links are discounted; editorial links inside body copy are not.** Both hubs currently have none, which is precisely the gap.

## 2. Correction to the plan I proposed yesterday

`BATCH_2_PLAN.md` item 2 listed eight links. **Four of them already existed** and were not re-added:

| Planned link | Status when checked |
|---|---|
| `gp-resin-vs-lamination-resin` → `/products/lamination-resin/` | **Already present** |
| `what-is-lamination-resin` → `/products/lamination-resin/` | **Already present** |
| `gp-clear-resin-vs-gp-yellow-resin` → both GP product pages | **Already present** |
| `nc-thinner-vs-general-purpose-thinner` → `/products/nc-thinner/` | **Already present** |

Adding them again would have produced duplicate links and a misleading "8 links added" claim. The four slots were reallocated to the epoxy hub, which had the same zero-inlink problem and no coverage in the original list.

One further candidate was **rejected on accuracy grounds**: `what-is-fiberglass-epoxy-resin` → `/products/epoxy-resins/`. Fiberglass Epoxy Resin is **not** in the `Epoxy & Casting` category (that hub holds Epoxy Clear Casting Resin, Epoxy Art Resin, UV Resin and Epoxy Hardener), so the link would have pointed a reader at a page that does not list the product they were reading about.

## 3. The eight links, as implemented

Each is a single in-prose link, placed where the sentence already made the point the link supports. Anchors are varied — no repeated exact-match anchor text.

| # | Source page | Type | Destination | Anchor text | Editorial justification |
|---|---|---|---|---|---|
| 1 | `/resources/what-is-gp-polyester-resin/` | Resource | `/products/gp-resins/` | "the GP resin grades we manufacture" | The article defines the family; the hub is the only page that lists every grade in it. Highest-impression informational page on the site (301 impressions). |
| 2 | `/resources/how-to-select-polyester-resin-for-frp-manufacturing/` | Resource | `/products/gp-resins/` | "compare the GP grades side by side" | The article is about selection; the hub carries the actual side-by-side comparison table. |
| 3 | `/applications/resin-for-general-frp-lamination/` | Application | `/products/gp-resins/` | "the full range of GP grades" | The application already names one grade; the hub answers "what else could I use here". |
| 4 | `/applications/resin-for-water-tank-manufacturing/` | Application | `/products/gp-resins/` | "across the GP range" | Same reasoning; tank fabricators choose between grades by working time and viscosity, which the hub tabulates. |
| 5 | `/resources/what-is-epoxy-clear-casting-resin/` | Resource | `/products/epoxy-resins/` | "our epoxy and casting range" | Positions the grade within the family it belongs to. |
| 6 | `/resources/what-is-epoxy-art-resin/` | Resource | `/products/epoxy-resins/` | "the wider epoxy and casting range" | Art resin buyers frequently need the casting grade or the hardener instead — both are on the hub. |
| 7 | `/resources/epoxy-resin-vs-epoxy-hardener/` | Resource | `/products/epoxy-resins/` | "the epoxy systems we supply" | The article covers a resin **and** its hardener; the hub is the only page holding both. |
| 8 | `/resources/unsaturated-polyester-resin-vs-epoxy-resin/` | Resource | `/products/epoxy-resins/` | "the epoxy grades we actually stock" | A polyester-vs-epoxy comparison should be able to hand the reader the real epoxy options. |

## 4. Rules observed

- **≤2 commercial links added per article** — in practice exactly **one** per page.
- **No sitewide or footer link farms.** Every link sits inside body prose.
- **No repeated exact-match anchors.** Eight distinct anchor phrasings.
- **No existing ranking page was retargeted.** No title, description, heading or topic was changed on any source page. Items 1 and 2 touch pages that currently rank (301 and 47 impressions); a single added contextual link is the lowest-risk edit available.
- **No link was added to a page that does not list the subject.** See the rejected fiberglass-epoxy candidate above.
- **No draft article was edited** — every source page is live and non-draft.

## 5. Rendering change this required

Resource section paragraphs were rendered as `<p>{para}</p>`, which escapes HTML — so an inline anchor was impossible without a template change. `src/pages/resources/[slug].astro` now renders them with `set:html`.

**Safety of that change was measured, not assumed:** all **20,282** existing body paragraphs across every resource were scanned for `<`, `>` and HTML entities. **Zero matches.** No existing paragraph renders differently. The content is authored in-repo, never user-supplied, so there is no injection surface.

Application pages already used `set:html` for body copy; nothing changed there.

## 6. Result

| Hub | Contextual editorial inlinks before | After |
|---|---|---|
| `/products/gp-resins/` | 0 | **4** |
| `/products/epoxy-resins/` | 0 | **4** |

**What this does not claim.** Internal links do not produce rankings on their own. This makes two commercial pages reachable through editorial context rather than boilerplate alone, which is a prerequisite for them being treated as destinations — not a prediction that they will rank.
