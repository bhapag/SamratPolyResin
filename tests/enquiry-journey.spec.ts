import { test, expect } from '@playwright/test';
import { site } from '../src/data/site.js';

// The buyer journey that actually produces revenue:
//   find a family -> pick a grade -> check its published properties ->
//   open its TDS/SDS -> request a quotation.
//
// SAFETY: src/data/site.js holds a LIVE Web3Forms key, so this page is not in
// demo mode and a real submit would email the production sales inbox. Every
// test below intercepts https://api.web3forms.com/** and answers locally.
// Nothing in this file can reach a production sales channel. Do not remove
// the route stub to "test it properly".

const STUB = 'https://api.web3forms.com/**';

async function stubEndpoint(page, body = { success: true, message: 'stubbed' }) {
  const seen: any[] = [];
  await page.route(STUB, async (route) => {
    seen.push(JSON.parse(route.request().postData() || '{}'));
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(body),
    });
  });
  return seen;
}

test.describe('contact routes are the real ones', () => {
  test('WhatsApp links point at the configured business number', async ({ page }) => {
    await page.goto('/');
    const hrefs = await page.locator('a[href*="wa.me"]').evaluateAll((links) =>
      links.map((a) => (a as HTMLAnchorElement).getAttribute('href') as string));

    expect(hrefs.length).toBeGreaterThan(0);
    for (const href of hrefs) {
      expect(href, `unexpected WhatsApp destination: ${href}`)
        .toContain(`wa.me/${site.whatsapp}`);
    }
  });

  test('every tel: link is a configured phone number', async ({ page }) => {
    await page.goto('/contact/');
    const dials = new Set(site.phones.map((p) => p.dial.replace(/\s+/g, '')));
    const hrefs = await page.locator('a[href^="tel:"]').evaluateAll((links) =>
      links.map((a) => (a as HTMLAnchorElement).getAttribute('href') as string));

    expect(hrefs.length).toBeGreaterThan(0);
    for (const href of hrefs) {
      expect(dials, `unexpected phone destination: ${href}`)
        .toContain(href.replace(/^tel:/, '').replace(/\s+/g, ''));
    }
  });
});

test.describe('enquiry form', () => {
  test('will not submit while required fields are empty', async ({ page }) => {
    const seen = await stubEndpoint(page);
    await page.goto('/contact/');

    await page.locator('#enquiryForm button[type="submit"]').click();
    // Native constraint validation must block it — no request may leave.
    await page.waitForTimeout(600);
    expect(seen, 'an incomplete enquiry was submitted').toHaveLength(0);

    const nameInvalid = await page.locator('#enquiryForm input[name="name"]')
      .evaluate((el: HTMLInputElement) => !el.checkValidity());
    expect(nameInvalid).toBe(true);
  });

  test('every visible control has a label a screen reader can use', async ({ page }) => {
    await page.goto('/contact/');
    const unlabelled = await page.locator('#enquiryForm input:not([type="hidden"]):not([name="botcheck"]), #enquiryForm select, #enquiryForm textarea')
      .evaluateAll((els) => els
        .filter((el) => {
          const id = el.getAttribute('id');
          const wrapped = el.closest('label');
          const aria = el.getAttribute('aria-label') || el.getAttribute('aria-labelledby');
          const forLabel = id ? document.querySelector(`label[for="${id}"]`) : null;
          return !wrapped && !aria && !forLabel;
        })
        .map((el) => el.getAttribute('name') || el.tagName));
    expect(unlabelled).toEqual([]);
  });

  test('a completed enquiry sends the buyer context with it', async ({ page }) => {
    const seen = await stubEndpoint(page);
    await page.goto('/products/lamination-resin/');

    const form = page.locator('#enquiryForm');
    await form.locator('input[name="name"]').fill('Test Buyer');
    await form.locator('input[name="phone"]').fill('9999999999');
    await form.locator('textarea[name="message"]').fill('Automated check — please ignore.');
    await form.locator('button[type="submit"]').click();

    await expect(page.locator('#enqStatus')).toHaveClass(/ok/, { timeout: 8000 });
    expect(seen).toHaveLength(1);

    const payload = seen[0];
    // The grade the buyer was reading must travel with the enquiry, or the
    // sales team gets a message with no product attached.
    expect(payload.product_slug).toBe('lamination-resin');
    expect(payload.product_name).toBeTruthy();
    expect(payload.current_page).toContain('/products/lamination-resin/');
    expect(payload.name).toBe('Test Buyer');
    expect(payload.message).toContain('Automated check');
    // The honeypot must be absent or empty on a genuine submission.
    expect(payload.botcheck ?? '').toBeFalsy();
  });

  test('a failed send tells the buyer how else to reach us', async ({ page }) => {
    await stubEndpoint(page, { success: false, message: 'stubbed failure' });
    await page.goto('/contact/');

    const form = page.locator('#enquiryForm');
    await form.locator('input[name="name"]').fill('Test Buyer');
    await form.locator('input[name="phone"]').fill('9999999999');
    await form.locator('textarea[name="message"]').fill('Automated check — please ignore.');
    await form.locator('button[type="submit"]').click();

    const status = page.locator('#enqStatus');
    await expect(status).toHaveClass(/err/, { timeout: 8000 });
    // A dead end is not acceptable — the failure must offer another route.
    await expect(status).toContainText(/call|whatsapp/i);
  });

  test('the status message is announced, not just displayed', async ({ page }) => {
    await page.goto('/contact/');
    const status = page.locator('#enqStatus');
    await expect(status).toHaveAttribute('role', 'status');
    await expect(status).toHaveAttribute('aria-live', 'polite');
  });

  test('the form is reachable and operable by keyboard alone', async ({ page }) => {
    await page.goto('/contact/');
    await page.locator('#enquiryForm input[name="name"]').focus();

    const order: string[] = [];
    for (let i = 0; i < 8; i++) {
      order.push(await page.evaluate(() => {
        const el = document.activeElement as HTMLElement | null;
        return el ? (el.getAttribute('name') || el.tagName.toLowerCase()) : 'none';
      }));
      await page.keyboard.press('Tab');
    }
    // Tab order must follow the visible field order; the hidden honeypot is
    // tabindex="-1" and must never appear.
    expect(order[0]).toBe('name');
    expect(order).toContain('phone');
    expect(order).toContain('message');
    expect(order).not.toContain('botcheck');
  });
});

test.describe('selection journey', () => {
  test('a buyer can go family -> grade -> documents without leaving the path', async ({ page }) => {
    await page.goto('/products/gp-resins/');

    // The hub compares grades on published values.
    await expect(page.locator('table').first()).toBeVisible();

    // Every grade on the hub links to its own page.
    const first = page.locator('table a[href^="/products/"]').first();
    const href = await first.getAttribute('href');
    expect(href).toBeTruthy();

    await page.goto(href as string);
    await expect(page.locator('h1')).toBeVisible();

    // And the grade page offers its documents and a quote route.
    await expect(page.locator('a[href^="/tds/"], a[href^="/sds/"]').first()).toBeVisible();
    await expect(page.locator('a[href*="wa.me"], #enquiryForm').first()).toBeVisible();
  });
});
