import { test, expect, type Page } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

// Trust, privacy and accessibility release checks (2026-09-13).

const externalHosts = (page: Page) => {
  const hosts = new Set<string>();
  page.on('request', (r) => {
    const u = new URL(r.url());
    if (!['localhost', '127.0.0.1'].includes(u.hostname)) hosts.add(u.hostname);
  });
  return hosts;
};

test.describe('analytics consent', () => {
  test('nothing from Google loads before a choice, and the banner offers equal choices', async ({ page }) => {
    const hosts = externalHosts(page);
    await page.route(/google|gstatic|googletagmanager/, (r) => r.abort());
    await page.goto('/');
    const banner = page.locator('#analyticsConsent');
    await expect(banner).toBeVisible();
    const allow = banner.getByRole('button', { name: 'Allow analytics' });
    const deny = banner.getByRole('button', { name: /Don.t allow/ });
    const [a, d] = [await allow.boundingBox(), await deny.boundingBox()];
    expect(Math.abs(a!.width - d!.width)).toBeLessThan(2);
    expect(Math.abs(a!.height - d!.height)).toBeLessThan(2);
    await page.waitForTimeout(1000);
    expect([...hosts].filter((h) => /google|gstatic/.test(h)), 'Google contacted before consent').toEqual([]);
    expect((await page.context().cookies()).map((c) => c.name)).toEqual([]);
  });

  test('"Don\'t allow" keeps Google Analytics off across pages; the footer reopens the choice', async ({ page }) => {
    const hosts = externalHosts(page);
    await page.route(/google|gstatic|googletagmanager/, (r) => r.abort());
    await page.goto('/');
    await page.getByRole('button', { name: /Don.t allow/ }).click();
    await page.goto('/products/');
    await expect(page.locator('#analyticsConsent')).toBeHidden();
    expect([...hosts].filter((h) => /googletagmanager|google-analytics/.test(h))).toEqual([]);
    await page.getByRole('button', { name: 'Analytics settings' }).click();
    await expect(page.locator('#analyticsConsent')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Allow analytics' })).toBeFocused();
  });

  test('"Allow analytics" loads Google Analytics only then', async ({ page }) => {
    const requested: string[] = [];
    await page.route(/googletagmanager|google-analytics/, (r) => { requested.push(r.request().url()); return r.abort(); });
    await page.goto('/');
    expect(requested).toEqual([]);
    await page.getByRole('button', { name: 'Allow analytics' }).click();
    await expect.poll(() => requested.some((u) => u.includes('gtag/js?id=G-20DFSNPJ80'))).toBe(true);
  });
});

test('fonts are self-hosted and the contact map loads only on request', async ({ page }) => {
  const hosts = externalHosts(page);
  await page.route(/google|gstatic/, (r) => r.abort());
  await page.goto('/contact/');
  await page.waitForTimeout(1000);
  expect([...hosts].filter((h) => /fonts\.g|maps|google/.test(h))).toEqual([]);
  await expect(page.locator('#mapEmbed iframe')).toHaveCount(0);
  await page.getByRole('button', { name: 'Show Google Map' }).click();
  await expect(page.locator('#mapEmbed iframe')).toHaveAttribute('title', /Google Map/);
});

test.describe('policy pages', () => {
  for (const [url, h1] of [['/privacy-policy/', 'Privacy Policy'], ['/cookie-policy/', 'Cookie Policy'], ['/terms/', 'Website Terms']]) {
    test(`${url} is published, linked from the footer, indexable and in the sitemap`, async ({ page }) => {
      const res = await page.goto(url);
      expect(res!.status()).toBe(200);
      await expect(page.locator('h1')).toHaveText(h1);
      await expect(page.locator('meta[name="robots"][content*="noindex"]')).toHaveCount(0);
      await expect(page.locator(`.foot-legal a[href="${url}"]`)).toHaveCount(1);
      await expect(page.locator('.legal-dates')).toContainText('Effective');
      const sitemap = fs.readFileSync(path.resolve('dist/sitemap-0.xml'), 'utf8');
      expect(sitemap).toContain(`https://samratpolyresins.in${url}`);
    });
  }

  test('the cookie policy lists exactly the storage the site uses', async ({ page }) => {
    await page.goto('/cookie-policy/');
    const text = await page.locator('main').innerText();
    for (const name of ['spr_analytics_consent_v1', 'samrat_lead_attribution_v1', 'samrat-custom-resin-request-reference', '_ga_20DFSNPJ80', 'Cloudflare Web Analytics']) {
      expect(text).toContain(name);
    }
  });
});

test.describe('enquiry form', () => {
  test('errors are announced, focus moves to the first problem, and email alone is enough', async ({ page }) => {
    let posted: any = null;
    await page.route('https://api.web3forms.com/submit', async (route) => {
      posted = JSON.parse(route.request().postData() || '{}');
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ success: true }) });
    });
    await page.goto('/contact/');
    await page.getByRole('button', { name: /Don.t allow/ }).click();
    const form = page.locator('#enquiryForm');
    await expect(form.locator('.enq-privacy')).toContainText('Web3Forms');
    await expect(form.locator('.enq-privacy a[href="/privacy-policy/"]')).toHaveCount(1);
    await expect(form.locator('input[type="checkbox"]:checked')).toHaveCount(0);
    await form.getByRole('button', { name: 'Send enquiry' }).click();
    await expect(form.locator('input[name="name"]')).toBeFocused();
    await expect(form.locator('#enqNameError')).toBeVisible();
    await form.locator('input[name="name"]').fill('Test Buyer');
    await form.locator('textarea[name="message"]').fill('Test message from the automated check.');
    await form.getByRole('button', { name: 'Send enquiry' }).click();
    await expect(form.locator('#enqContactError')).toBeVisible();
    await form.locator('input[name="email"]').fill('buyer@example.com');
    await form.getByRole('button', { name: 'Send enquiry' }).click();
    await expect(page.locator('#enqStatus')).toContainText('Enquiry sent');
    expect(posted.email).toBe('buyer@example.com');
    expect(posted.phone).toBe('');
    expect(page.url()).not.toContain('buyer%40example.com');
  });
});

test.describe('keyboard and reflow', () => {
  test('the first Tab reaches the skip link, which moves to the main content', async ({ page }) => {
    await page.goto('/about/');
    await page.keyboard.press('Tab');
    const skip = page.locator('.skip-link');
    await expect(skip).toBeFocused();
    const outline = await skip.evaluate((e) => getComputedStyle(e).outlineStyle + '|' + getComputedStyle(e).visibility);
    expect(outline).not.toContain('hidden');
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/#main-content$/);
  });

  test('pages reflow at 320 CSS px (400% zoom) without sideways scrolling', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 640 });
    for (const url of ['/', '/products/', '/products/gp-clear-resin/', '/contact/', '/privacy-policy/', '/cookie-policy/', '/technical-documents/', '/resources/what-is-gp-polyester-resin/']) {
      await page.goto(url);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, url).toBeLessThanOrEqual(1);
    }
  });
});

test('no fabricated ratings or reviews in structured data, and every image has an alt attribute', async ({ page }) => {
  for (const url of ['/', '/products/gp-clear-resin/', '/contact/', '/about/']) {
    await page.goto(url);
    const ld = (await page.locator('script[type="application/ld+json"]').allTextContents()).join(' ');
    expect(ld, url).not.toMatch(/AggregateRating|"Review"|ratingValue|reviewCount/);
    const missing = await page.locator('img:not([alt])').count();
    expect(missing, url).toBe(0);
  }
});
