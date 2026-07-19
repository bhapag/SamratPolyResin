import { test, expect } from '@playwright/test';
import { products } from '../src/data/products.js';
import { resources } from '../src/data/resources.js';

// Floor-level checks, not full coverage: catch a page that silently 404s,
// throws during render, or errors in the browser console. Run against a
// built `dist/` via `astro preview` (see playwright.config.ts) — build
// first with `npm run build`.

const sampleProductSlug = products[0].slug;
const samplePublishedResourceSlug = resources.find((r) => !r.draft).slug;

const pagesToCheck = [
  { label: 'homepage', path: '/' },
  { label: 'products index', path: '/products/' },
  { label: 'a product page', path: `/products/${sampleProductSlug}/` },
  { label: 'a resource article', path: `/resources/${samplePublishedResourceSlug}/` },
];

for (const { label, path } of pagesToCheck) {
  test(`${label} (${path}) returns 200 and logs no console errors`, async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    page.on('pageerror', (err) => consoleErrors.push(err.message));

    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();

    expect(consoleErrors, `console errors on ${path}:\n${consoleErrors.join('\n')}`).toEqual([]);
  });
}
