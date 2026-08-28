import { test, expect, type Page } from '@playwright/test';

const route = '/custom-resin-request/';

async function fillMinimum(page: Page, contact: 'phone' | 'email' | 'both' = 'phone') {
  await page.locator('#requestName').fill('Aman Verma');
  await page.locator('#requestProduct').selectOption({ label: 'GP Clear Resin' });
  if (contact === 'phone' || contact === 'both') await page.locator('#requestPhone').fill('+91 98765 43210');
  if (contact === 'email' || contact === 'both') await page.locator('#requestEmail').fill('aman@example.com');
}

async function preventNavigation(page: Page, selector: string) {
  await page.locator(selector).evaluate((element) => {
    element.addEventListener('click', (event) => event.preventDefault(), { capture: true });
  });
}

test.beforeEach(async ({ page }) => {
  await page.goto(route, { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#requestReference')).toHaveText(/^CRSR-\d{8}-[A-Z0-9]{4}$/);
});

test('empty request is blocked and explains the required fields', async ({ page }) => {
  await expect(page.locator('#sendWhatsapp')).toHaveAttribute('href', '#');
  await expect(page.locator('#sendEmail')).toHaveAttribute('href', '#');
  await preventNavigation(page, '#sendWhatsapp');
  await page.locator('#sendWhatsapp').click();
  await expect(page.locator('#requestStatus')).toContainText('Please complete the required fields');
  await expect(page.locator('#requestName')).toBeFocused();
});

test('phone-only request builds a selective WhatsApp message', async ({ page }) => {
  await fillMinimum(page, 'phone');
  await page.locator('#requestApplication').fill('FRP enclosure');
  const href = await page.locator('#sendWhatsapp').getAttribute('href');
  expect(href).toContain('https://wa.me/917463881005?text=');
  expect(href).not.toContain('917463881652');
  const message = new URL(href!).searchParams.get('text')!;
  expect(message).toContain('Request Reference: CRSR-');
  expect(message).toContain('Name: Aman Verma');
  expect(message).toContain('Phone: +91 98765 43210');
  expect(message).toContain('Product: GP Clear Resin');
  expect(message).toContain('Application: FRP enclosure');
  expect(message).not.toContain('Email:');
  expect(message).not.toContain('Requested Viscosity:');
  expect(message).toContain('Submission does not constitute acceptance');

  await preventNavigation(page, '#sendWhatsapp');
  await page.locator('#sendWhatsapp').click();
  await expect(page.locator('#requestStatus')).toContainText('WhatsApp compose opened');
});

test('email-only and combined contact requests validate and encode correctly', async ({ page }) => {
  await fillMinimum(page, 'email');
  await page.locator('#requestCompany').fill('A&B + Composites');
  let href = await page.locator('#sendEmail').getAttribute('href');
  expect(href).toContain('mailto:info@samratpolyresins.in');
  expect(href).toContain('%26');
  expect(href).toContain('%2B');
  let emailUrl = new URL(href!);
  expect(emailUrl.searchParams.get('subject')).toMatch(/^Custom Resin Specification Request — GP Clear Resin — CRSR-/);
  expect(emailUrl.searchParams.get('body')).toContain('Company: A&B + Composites');
  expect(emailUrl.searchParams.get('body')).toContain('Email: aman@example.com');
  expect(emailUrl.searchParams.get('body')).not.toContain('Phone:');

  await page.locator('#requestPhone').fill('+91 99999 00000');
  href = await page.locator('#sendEmail').getAttribute('href');
  emailUrl = new URL(href!);
  expect(emailUrl.searchParams.get('body')).toContain('Phone: +91 99999 00000');
  expect(emailUrl.searchParams.get('body')).toContain('Email: aman@example.com');

  await preventNavigation(page, '#sendEmail');
  await page.locator('#sendEmail').click();
  await expect(page.locator('#requestStatus')).toContainText('Email draft opened');
});

test('technical recommendation, custom rows and advanced targets serialize only completed values', async ({ page }) => {
  await fillMinimum(page, 'both');
  await page.locator('#requestRecommendation').check();
  await page.locator('#requestViscosity').fill('Customer target: 450–550 cPs');
  await page.locator('#addCustomRequirement').click();
  const row = page.locator('.custom-requirement-row');
  await row.locator('[name="custom_property[]"]').fill('Reduced shrinkage');
  await row.locator('[name="custom_target[]"]').fill('Please recommend achievable range');
  await page.locator('.advanced-requirements summary').click();
  await page.locator('#requestFire').fill('Review project fire-retardant requirement');
  await page.locator('#requestPackaging').fill('Smaller pack preferred');

  let message = new URL((await page.locator('#sendWhatsapp').getAttribute('href'))!).searchParams.get('text')!;
  expect(message).toContain('Technical Team to Recommend: Yes');
  expect(message).toContain('Requested Viscosity: Customer target: 450–550 cPs');
  expect(message).toContain('Custom Requirement — Reduced shrinkage: Please recommend achievable range');
  expect(message).toContain('Fire-Retardant Requirement: Review project fire-retardant requirement');
  expect(message).toContain('Packaging Preference: Smaller pack preferred');
  expect(message).not.toContain('Specific Gravity:');
  expect(message).not.toMatch(/UL 94|fireproof|certified performance/i);

  await row.locator('.remove-requirement').click();
  message = new URL((await page.locator('#sendWhatsapp').getAttribute('href'))!).searchParams.get('text')!;
  expect(message).not.toContain('Reduced shrinkage');
  await expect(page.locator('#addCustomRequirement')).toBeFocused();
});

test('request reference persists across reloads', async ({ page }) => {
  const firstReference = await page.locator('#requestReference').textContent();
  await page.reload({ waitUntil: 'domcontentloaded' });
  await expect(page.locator('#requestReference')).toHaveText(firstReference!);
});

test('print summary shows completed groups, branding and disclaimer only', async ({ page }) => {
  await page.evaluate(() => {
    window.print = () => { document.body.dataset.printCalled = 'true'; };
  });
  await fillMinimum(page, 'phone');
  await page.locator('#requestNotes').fill('Need improved flow for a complex mould.');
  await page.locator('#printRequest').click();
  await expect(page.locator('body')).toHaveAttribute('data-print-called', 'true');
  await page.emulateMedia({ media: 'print' });
  await expect(page.locator('#printSummary')).toBeVisible();
  await expect(page.locator('#customResinRequestForm')).toBeHidden();
  const summary = page.locator('#printSummary');
  await expect(summary).toContainText('Samrat Poly Resins');
  await expect(summary).toContainText('GP Clear Resin');
  await expect(summary).toContainText('Need improved flow for a complex mould.');
  await expect(summary).toContainText('+91 74638 81652');
  await expect(summary).toContainText('+91 74638 81005');
  await expect(summary).toContainText('info@samratpolyresins.in');
  await expect(summary).toContainText('customer-requested target specifications only');
  await expect(summary).not.toContainText('Specific Gravity');
});

test('keyboard order follows the visible form flow', async ({ page }) => {
  await page.locator('#requestName').focus();
  await page.keyboard.press('Tab');
  await expect(page.locator('#requestCompany')).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.locator('#requestLocation')).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.locator('#requestPhone')).toBeFocused();
});

for (const width of [360, 390, 430]) {
  test(`${width}px mobile layout has no horizontal overflow`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(route, { waitUntil: 'domcontentloaded' });
    await fillMinimum(page, 'phone');
    await page.locator('#addCustomRequirement').click();
    await page.locator('.advanced-requirements summary').click();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
    const buttons = page.locator('.send-actions .btn');
    await expect(buttons).toHaveCount(3);
    for (const button of await buttons.all()) {
      const box = await button.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.x).toBeGreaterThanOrEqual(0);
      expect(box!.x + box!.width).toBeLessThanOrEqual(width);
      expect(box!.height).toBeGreaterThanOrEqual(44);
    }
  });
}

test('desktop layout, catalogue source and entry-point CTAs remain intact', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(route, { waitUntil: 'domcontentloaded' });
  const nameBox = await page.locator('#requestName').boundingBox();
  const companyBox = await page.locator('#requestCompany').boundingBox();
  expect(nameBox?.y).toBe(companyBox?.y);
  expect(companyBox!.x).toBeGreaterThan(nameBox!.x);
  expect(await page.locator('#requestProduct option').allTextContents()).toContain('PET Resin / Polyester Putty Resin');
  await expect(page.locator('body')).not.toContainText('Samrat FRP Traders');
  await expect(page.locator('body')).not.toContainText('+977 9805526904');

  await page.goto('/products/', { waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('link', { name: 'Request Custom Resin Specification' })).toHaveAttribute('href', '/custom-resin-request/');
  await page.goto('/contact/', { waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('link', { name: 'Request Custom Resin Specification' })).toHaveAttribute('href', '/custom-resin-request/');
  await expect(page.locator('a[href="tel:+917463881652"]')).toHaveCount(2);
  await expect(page.locator('a[href="tel:+917463881005"]')).toHaveCount(2);
  await expect(page.locator('.foot-nav a[href="/custom-resin-request/"]')).toHaveCount(1);
});

test('custom request route logs no app-origin console errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto(route, { waitUntil: 'domcontentloaded' });
  await fillMinimum(page, 'phone');
  await page.locator('#addCustomRequirement').click();
  await page.locator('.advanced-requirements summary').click();
  expect(errors).toEqual([]);
});
