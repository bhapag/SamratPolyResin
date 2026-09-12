import { test, expect } from '@playwright/test';
import { products } from '../src/data/products.js';
import { resources } from '../src/data/resources.js';
import { resourceProductLinks } from '../src/data/resourceProductLinks.js';

// A product can only have one published identity. Samrat's Polyester Putty
// Resin had two: the corrected product page describes the liquid base resin
// sold to putty and body-filler manufacturers, while six live guide articles
// still described the same grade as a "PET-modified liquid unsaturated
// polyester sheet grade" for PET sheets, fibre sheets and FRP panel
// lamination, citing a TDS the product page no longer publishes. Those
// articles were retired on 2026-09-12 and redirect to the corrected pages.
//
// These tests do not assert what the grade is made of — whether it carries
// polyethylene-terephthalate content is an open question for the chemist, and
// nothing here should be read as answering it. They assert only that the site
// publishes ONE answer to "what is this product", and that no page sells it on
// sheet-grade applications that its own documents do not support.

const live = resources.filter((r) => !r.draft);
const putty = products.find((p) => p.slug === 'polyester-putty-resin')!;

test.describe('Polyester Putty Resin has a single published identity', () => {
  test('the retired sheet-grade articles are gone from the data', async () => {
    const retired = [
      'what-is-pet-modified-polyester-resin',
      'pet-resin-liquid-grade-vs-thermoplastic-pet',
      'pet-resin-applications-sheet-lamination-and-panels',
      'pet-resin-vs-gp-resin',
      'pet-resin-vs-lamination-resin',
      'marble-resin-vs-pet-resin',
      'pet-resin-technical-specifications-and-rfq',
    ];
    const back = retired.filter((slug) => resources.some((r) => r.slug === slug));
    expect(back, `retired article(s) reintroduced: ${back.join(', ')}`).toEqual([]);
  });

  test('no live page sells this grade on sheet, panel or fibre-sheet applications', async ({ page }) => {
    // The claim, not the word. "PET packaging" is a legitimate pack size on
    // many grades and must not trip this.
    const claims = [
      /PET[- ]modified/i,
      /sheet grade/i,
      /fibre sheet|fiber sheet/i,
      /FRP sheet lamination/i,
    ];
    const urls = [
      '/products/polyester-putty-resin/',
      '/resources/what-is-polyester-putty-resin/',
      '/resources/polyester-putty-fillers-and-rheology/',
      '/resources/polyester-putty-troubleshooting/',
      '/resources/polyester-putty-cure-systems-bpo-and-mekp/',
      '/products/marble-resin/',
    ];
    // Two elements legitimately carry these words. Both are excluded by
    // selector rather than by a "is there a 'not' nearby" heuristic — that
    // heuristic silently swallowed a real regression during a mutation check,
    // because the disclaimer's own "not" sat within range of the headline.
    //
    //   .article-prevnext / related cards — titles of OTHER articles
    //   .marble-image-note — the note disowning the old poster, which says in
    //                        so many words that the sheet-grade material is
    //                        not this product
    //   .prod-faq — the FAQ is where the two-names history is EXPLAINED to a
    //               buyer who arrives searching the old name, so it has to be
    //               able to say the words. What must not claim the sheet grade
    //               is the sales copy: hero, description, features, specs and
    //               applications. Those are what this scan covers.
    //   script/style — innerText on a DETACHED clone degrades to
    //                  textContent, which would otherwise read the FAQPage
    //                  JSON-LD as if it were visible page copy.
    const problems: string[] = [];
    for (const url of urls) {
      await page.goto(url);
      const text = await page.evaluate(() => {
        const main = document.querySelector('main')!.cloneNode(true) as HTMLElement;
        main.querySelectorAll(
          'script, style, .article-prevnext, .resources-grid, .rel-grid, nav, a[href^="/resources/"], .marble-image-note, .prod-faq',
        ).forEach((n) => n.remove());
        return main.innerText;
      });
      for (const claim of claims) {
        for (const hit of text.matchAll(new RegExp(claim.source, claim.flags + 'g'))) {
          const at = hit.index ?? 0;
          const around = text.slice(Math.max(0, at - 160), at + 160).replace(/\s+/g, ' ').trim();
          if (!/putty/i.test(around)) continue;
          problems.push(`${url}: "${hit[0]}" — ${around}`);
        }
      }
    }
    expect(problems, problems.join('\n')).toEqual([]);
  });

  test('the product page does not offer the sheet-grade documents', async ({ page }) => {
    // Until the chemist confirms whether the putty base resin and the sheet
    // grade are one grade or two, SPR-TDS-PET must not be published as this
    // product's controlling document.
    expect(putty.tdsUrl, 'a TDS was attached to Polyester Putty Resin').toBeFalsy();
    expect(putty.sdsUrl, 'an SDS was attached to Polyester Putty Resin').toBeFalsy();
    await page.goto('/products/polyester-putty-resin/');
    await expect(page.locator('a[href^="/tds/"], a[href^="/sds/"]')).toHaveCount(0);
  });
});

test.describe('every article offers a route to the product it is about', () => {
  test('the resource-to-product map points only at live articles and real products', async () => {
    const liveSlugs = new Set(live.map((r) => r.slug));
    const productSlugs = new Set(products.map((p) => p.slug));
    const problems: string[] = [];
    for (const [article, product] of Object.entries(resourceProductLinks)) {
      if (!liveSlugs.has(article)) problems.push(`${article}: no such live article`);
      if (!productSlugs.has(product)) problems.push(`${article} → ${product}: no such product`);
    }
    expect(problems, problems.join(' | ')).toEqual([]);
  });

  test('every product is the declared subject of at least one article', async () => {
    const covered = new Set(Object.values(resourceProductLinks));
    const orphans = products.map((p) => p.slug).filter((s) => !covered.has(s));
    expect(orphans, `product(s) no article claims as its subject: ${orphans.join(', ')}`).toEqual([]);
  });

  test('no live article is a dead end', async () => {
    // An article with neither a subject CTA nor a recommended link gives the
    // reader nowhere to go and earns the site nothing for ranking it.
    const dead = live
      .filter((r) => !resourceProductLinks[r.slug])
      .filter((r) => !(r.recommendedLinks || []).some((l: { href: string }) => l.href.startsWith('/products/')))
      .map((r) => r.slug);
    expect(dead, `article(s) with no route to any product: ${dead.join(', ')}`).toEqual([]);
  });
});
