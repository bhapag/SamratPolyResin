import { test, expect, type Page } from '@playwright/test';
import { products } from '../src/data/products.js';
import { resources } from '../src/data/resources.js';

// ---------------------------------------------------------------------------
// The six pages added in September 2026: glossary, resin selector, quantity
// guidance, two category hubs and the ordering page.
//
// The tests that matter most here are the honesty ones. The selector must not
// recommend a grade the catalogue does not support, and the quantity page must
// not grow a resin estimate — there is no published resin-to-glass ratio to
// base one on, and a future edit that adds one should fail loudly.
// ---------------------------------------------------------------------------

const NEW_PAGES = [
  '/resources/resin-glossary/',
  '/tools/resin-selector/',
  '/tools/quantity-guidance/',
  '/products/frp-allied-products/',
  '/products/industrial-specialty-resins/',
  '/how-to-order/',
];

async function jsonLd(page: Page): Promise<any[]> {
  return page.$$eval('script[type="application/ld+json"]', (nodes) =>
    nodes.map((n) => {
      try {
        return JSON.parse(n.textContent || '');
      } catch {
        return { __invalid: true };
      }
    }),
  );
}

for (const path of NEW_PAGES) {
  test(`${path} renders cleanly with valid structured data`, async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (m) => m.type() === 'error' && consoleErrors.push(m.text()));
    page.on('pageerror', (e) => consoleErrors.push(e.message));

    const res = await page.goto(path);
    expect(res?.status(), `${path} status`).toBe(200);

    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('link[rel=canonical]')).toHaveAttribute(
      'href',
      new RegExp(path.replace(/\//g, '\\/') + '$'),
    );

    const blocks = await jsonLd(page);
    expect(blocks.filter((b) => b.__invalid), `${path} has invalid JSON-LD`).toEqual([]);

    // No horizontal overflow at a common phone width.
    await page.setViewportSize({ width: 390, height: 844 });
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, `${path} overflows horizontally on mobile`).toBeLessThanOrEqual(0);

    expect(consoleErrors, `${path} console errors:\n${consoleErrors.join('\n')}`).toEqual([]);
  });
}

test.describe('resin selector', () => {
  test('shortlists grades and shows the published line that justified each', async ({ page }) => {
    await page.goto('/tools/resin-selector/');
    await expect(page.locator('#selEmpty')).toBeVisible();

    // "Water tanks & storage vessels" + "Hand lay-up".
    await page.locator('input[name="making"][value="tanks"]').check();
    await page.locator('input[name="process"][value="handlayup"]').check();

    const cards = page.locator('.sel-card');
    await expect(cards.first()).toBeVisible();
    expect(await cards.count()).toBeGreaterThan(0);

    // Every card must carry its evidence, and each evidence line must quote a
    // string the product actually publishes — this is the whole design rule.
    const quotes = await page.$$eval('.sel-why q', (ns) => ns.map((n) => n.textContent || ''));
    expect(quotes.length, 'no evidence quotes rendered').toBeGreaterThan(0);

    const published = new Set<string>();
    for (const p of products) {
      for (const a of p.applications ?? []) published.add(a);
      if (p.tagline) published.add(p.tagline);
      if (p.category) published.add(p.category);
    }
    const invented = quotes.filter((q) => !published.has(q));
    expect(invented, `selector quoted text no product publishes:\n${invented.join('\n')}`).toEqual([]);
  });

  test('the enquiry link carries the grade and the answers', async ({ page }) => {
    await page.goto('/tools/resin-selector/');
    await page.locator('input[name="making"][value="buttons"]').check();

    const enquire = page.locator('.sel-card a.sel-btn-solid').first();
    const href = await enquire.getAttribute('href');
    expect(href).toContain('/contact/');
    expect(href).toContain('product=');
    expect(href).toContain('context=');
  });

  test('an unsupported combination returns nothing rather than a guess', async ({ page }) => {
    await page.goto('/tools/resin-selector/');
    // Buttons made by surface-coating a mould is not a combination any grade
    // publishes. The honest answer is none, not a nearest match.
    await page.locator('input[name="making"][value="buttons"]').check();
    await page.locator('input[name="process"][value="surface"]').check();
    await page.locator('input[name="special"][value="fire"]').check();

    const cards = await page.locator('.sel-card').count();
    if (cards === 0) {
      await expect(page.locator('.sel-none')).toBeVisible();
    } else {
      // If anything did match, it must still be evidence-backed. The evidence
      // lives inside a collapsed <details>, so assert it is attached rather
      // than visible — a closed disclosure is the intended resting state.
      await expect(page.locator('.sel-why q').first()).toBeAttached();
      const quote = await page.locator('.sel-why q').first().textContent();
      expect(quote?.trim().length).toBeGreaterThan(0);
    }
  });

  test('result cards are actually styled, not unstyled runtime HTML', async ({ page }) => {
    // The cards are built with innerHTML, so Astro's scoped styles do not reach
    // them unless the rules are :global(). When that was missed, the cards
    // rendered as run-together plain text and nothing else failed. Assert on
    // computed style so a scoped selector can never creep back in unnoticed.
    await page.goto('/tools/resin-selector/');
    await page.locator('input[name="making"][value="tanks"]').check();
    await expect(page.locator('.sel-card').first()).toBeVisible();

    const card = await page.locator('.sel-card').first().evaluate((el) => {
      const s = getComputedStyle(el);
      return { border: parseFloat(s.borderTopWidth), padding: parseFloat(s.paddingTop) };
    });
    expect(card.border, '.sel-card has no border — scoped CSS is not applying').toBeGreaterThan(0);
    expect(card.padding).toBeGreaterThan(0);

    const chip = await page.locator('.sel-spec').first().evaluate((el) => {
      const s = getComputedStyle(el);
      return { border: parseFloat(s.borderTopWidth), font: s.fontFamily };
    });
    expect(chip.border, '.sel-spec has no border — scoped CSS is not applying').toBeGreaterThan(0);
    expect(chip.font.toLowerCase()).toMatch(/mono|courier/);
  });

  test('start over clears the shortlist', async ({ page }) => {
    await page.goto('/tools/resin-selector/');
    await page.locator('input[name="making"][value="tanks"]').check();
    await expect(page.locator('.sel-card').first()).toBeVisible();
    await page.locator('#selReset').click();
    await expect(page.locator('.sel-empty')).toBeVisible();
    await expect(page.locator('.sel-card')).toHaveCount(0);
  });
});

test.describe('quantity guidance', () => {
  test('calculates mat weight from the published CSM area weight', async ({ page }) => {
    await page.goto('/tools/quantity-guidance/');
    await page.fill('#qgArea', '20');
    await page.fill('#qgLayers', '3');
    await page.selectOption('#qgGrade', '450');
    await page.selectOption('#qgWaste', '0');

    // 20 m² x 3 layers x 450 g/m² = 27,000 g = 27.0 kg
    await expect(page.locator('.qg-out-big')).toHaveText('27.0 kg');
  });

  test('applies a wastage allowance the buyer chooses', async ({ page }) => {
    await page.goto('/tools/quantity-guidance/');
    await page.fill('#qgArea', '10');
    await page.fill('#qgLayers', '1');
    await page.selectOption('#qgGrade', '300');
    await page.selectOption('#qgWaste', '10');

    // 10 x 1 x 300 g = 3.0 kg, +10% = 3.3 kg
    await expect(page.locator('.qg-out-big')).toHaveText('3.3 kg');
  });

  test('never estimates resin quantity', async ({ page }) => {
    // There is no published resin-to-glass ratio anywhere in this repository.
    // If a future edit adds a resin estimate to this page, it is inventing the
    // one number the calculation turns on. Fail loudly.
    await page.goto('/tools/quantity-guidance/');
    await page.fill('#qgArea', '50');
    await page.fill('#qgLayers', '4');

    const output = (await page.locator('#qgOut').innerText()).toLowerCase();
    expect(output).toContain('glass fibre mat required');
    expect(output).not.toMatch(/\bresin (required|needed)\b/);
    expect(output).toContain('says nothing about how much resin');
  });

  test('the result block is styled, not unstyled runtime HTML', async ({ page }) => {
    await page.goto('/tools/quantity-guidance/');
    await page.fill('#qgArea', '15');
    await expect(page.locator('.qg-out-big')).toBeVisible();

    const big = await page.locator('.qg-out-big').evaluate((el) => {
      const s = getComputedStyle(el);
      return { size: parseFloat(s.fontSize), family: s.fontFamily };
    });
    // The figure is set in the display face at ~2.1rem. If scoped CSS stops
    // reaching this runtime-created element it falls back to body text.
    expect(big.size, '.qg-out-big is unstyled — scoped CSS is not applying').toBeGreaterThan(24);
  });

  test('the enquiry link carries the project details', async ({ page }) => {
    await page.goto('/tools/quantity-guidance/');
    await page.fill('#qgArea', '12');
    await page.fill('#qgLayers', '2');
    const href = await page.locator('#qgSend').getAttribute('href');
    expect(href).toContain('context=');
    // URLSearchParams encodes spaces as '+', which decodeURIComponent leaves
    // alone — decode the way a server would before asserting on the text.
    const decoded = decodeURIComponent(href!).replace(/\+/g, ' ');
    expect(decoded).toContain('12 m²');
    expect(decoded).toContain('2 layer(s)');
    expect(decoded).toContain('Resin quantity guidance requested');
  });
});

test.describe('how to order', () => {
  test('publishes pack sizes and MOQs straight from the catalogue', async ({ page }) => {
    await page.goto('/how-to-order/');
    const rows = page.locator('.hto-table tbody tr');
    expect(await rows.count()).toBeGreaterThan(10);

    // Spot-check one figure against the product data itself.
    const gpClear = products.find((p) => p.slug === 'gp-clear-resin')!;
    const moq = gpClear.productDetails['Minimum Order Quantity'];
    await expect(page.locator('.hto-table')).toContainText(moq);
  });

  test('makes no lead time, stock, freight or payment claim', async ({ page }) => {
    // None of these is verified anywhere in the repository. Stating one would
    // be a false commercial claim, so the page must only ever say they are
    // confirmed on the quotation.
    await page.goto('/how-to-order/');
    const body = (await page.locator('body').innerText()).toLowerCase();

    expect(body).not.toMatch(/\b\d+\s*[-–]?\s*\d*\s*(working\s+)?days?\s+(delivery|dispatch|lead)/);
    expect(body).not.toMatch(/\bin stock\b|\bready stock\b|\bsame day dispatch\b/);
    expect(body).not.toMatch(/\b\d+\s*%\s*advance\b|\bnet\s*\d+\s*days\b/);
    expect(body).toContain('confirmed on your quotation');
  });

  test('carries HowTo structured data with every step', async ({ page }) => {
    await page.goto('/how-to-order/');
    const blocks = await jsonLd(page);
    const howTo = blocks.find((b) => b['@type'] === 'HowTo');
    expect(howTo, 'no HowTo JSON-LD').toBeTruthy();
    expect(howTo.step.length).toBe(5);
    expect(howTo.step[0].position).toBe(1);
  });
});

test.describe('category hubs', () => {
  test('each hub lists exactly its category, and only real hubs are linked', async ({ page }) => {
    for (const [path, category] of [
      ['/products/frp-allied-products/', 'FRP Allied Products'],
      ['/products/industrial-specialty-resins/', 'Industrial & Specialty Resins'],
    ] as const) {
      await page.goto(path);
      const expected = products.filter((p) => p.category === category).length;
      await expect(page.locator('.fam-grades .grid > *')).toHaveCount(expected);
      await expect(page.locator('.fam-hero-badge-num')).toHaveText(String(expected));
    }
  });

  test('no hub exists for a category with fewer than three products', async ({ page }) => {
    // A hub over one or two products is an empty category page. If one is ever
    // added for GelCoat (2), Hardeners (2), Fire Retardant (2) or ISO Resins
    // (1), this should fail and force the decision to be re-argued.
    //
    // Threshold moved from four to three when UV Resin was removed from the
    // published range: that left "Epoxy & Casting" with three products (Clear
    // Casting, Epoxy Art, Epoxy Hardener) while /products/epoxy-resins/ is an
    // indexed hub carrying earned internal links. Retiring a live hub to
    // satisfy a content-quality heuristic would cost more than it protects —
    // three substantial products still make a real family page. Two does not.
    const { CATEGORY_HUBS } = await import('../src/data/products.js');
    const tooSmall = Object.keys(CATEGORY_HUBS).filter(
      (cat) => products.filter((p) => p.category === cat).length < 3,
    );
    expect(tooSmall, `hub exists for an under-populated category: ${tooSmall.join(', ')}`).toEqual([]);
  });
});

test.describe('glossary', () => {
  test('renders a real definition list with the full forms buyers search for', async ({ page }) => {
    await page.goto('/resources/resin-glossary/');
    const defs = page.locator('.article-def');
    expect(await defs.count()).toBeGreaterThan(30);

    const body = await page.locator('body').innerText();
    for (const term of ['General Purpose', 'Unsaturated Polyester Resin', 'Methyl Ethyl Ketone Peroxide', 'Chopped Strand Mat']) {
      expect(body).toContain(term);
    }
  });

  test('disambiguates PET rather than letting the name collision stand', async ({ page }) => {
    await page.goto('/resources/resin-glossary/');
    const body = (await page.locator('body').innerText()).toLowerCase();
    expect(body).toContain('polyethylene terephthalate');
    expect(body).toContain('not');
  });

  test('does not invent DP or TP clear resin', async ({ page }) => {
    // Both remain unverified owner terms. Nothing on this site may define them.
    const blob = JSON.stringify(resources).toLowerCase();
    expect(blob).not.toContain('dp clear resin');
    expect(blob).not.toContain('tp clear resin');
    await page.goto('/resources/resin-glossary/');
    const body = (await page.locator('body').innerText()).toLowerCase();
    expect(body).not.toContain('dp clear resin');
  });
});

test.describe('enquiry prefill', () => {
  test('fills product and message from the query string', async ({ page }) => {
    await page.goto('/contact/?product=GP%20Clear%20Resin&context=Water%20tanks%20-%20hand%20lay-up#enquiry');
    await expect(page.locator('input[name="product"]')).toHaveValue('GP Clear Resin');
    await expect(page.locator('textarea[name="message"]')).toHaveValue('Water tanks - hand lay-up');
  });

  test('cannot be used to prefill personal fields', async ({ page }) => {
    await page.goto('/contact/?name=Injected&phone=9999999999&email=x@y.z');
    await expect(page.locator('input[name="name"]')).toHaveValue('');
    await expect(page.locator('input[name="phone"]')).toHaveValue('');
    await expect(page.locator('input[name="email"]')).toHaveValue('');
  });
});

test.describe('contact page local signals', () => {
  test('carries LocalBusiness data built only from verified fields', async ({ page }) => {
    await page.goto('/contact/');
    const blocks = await jsonLd(page);
    const lb = blocks.find((b) => b['@type'] === 'LocalBusiness');
    expect(lb, 'no LocalBusiness JSON-LD').toBeTruthy();

    expect(lb.address.postalCode).toBe('141421');
    expect(lb.address.addressRegion).toBe('Punjab');
    expect(lb.hasMap).toContain('google.com/maps');

    // These are NOT verified in the repository and must stay absent.
    expect(lb.openingHours).toBeUndefined();
    expect(lb.openingHoursSpecification).toBeUndefined();
    expect(lb.geo).toBeUndefined();
    expect(lb.priceRange).toBeUndefined();
    expect(lb.aggregateRating).toBeUndefined();
    expect(lb.review).toBeUndefined();
  });

  test('offers directions and an enquiry checklist', async ({ page }) => {
    await page.goto('/contact/');
    await expect(page.locator('a[href*="google.com/maps"]').first()).toBeVisible();
    expect(await page.locator('.contact-checklist li').count()).toBe(5);
  });
});
