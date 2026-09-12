import { test, expect, devices } from '@playwright/test';

// Two phone regressions measured on production on 2026-09-13.
test.use({ ...devices['Pixel 5'] });

test('inner pages on a phone do not download the ambient background video', async ({ page }) => {
  // Previously a Pixel 5 streamed the 1.6 MB looping video behind every product
  // and document page. The poster already carries the look.
  const videoRequests: string[] = [];
  page.on('request', (r) => { if (/\.mp4(\?|$)/.test(r.url())) videoRequests.push(r.url()); });
  for (const url of ['/products/gp-clear-resin/', '/technical-documents/', '/catalogue/']) {
    await page.goto(url, { waitUntil: 'load' });
    await page.waitForTimeout(2500);
  }
  expect(videoRequests).toEqual([]);
  await expect(page.locator('.ambient-poster')).toHaveCount(1);
});

test('the homepage hero video on a phone is unchanged', async ({ page }) => {
  await page.goto('/', { waitUntil: 'load' });
  await expect(page.locator('#heroVideoMobile')).toHaveCount(1);
});

test('product breadcrumbs keep one line whatever the font state', async ({ page }) => {
  // The longest trail wrapped when the mono web font swapped in, shifting the
  // masthead 29px (CLS 0.157 on Polyester Putty Resin).
  for (const slug of ['polyester-putty-resin', 'uv-stabilized-sheet-grade-yellow-resin', 'iso-fire-retardant-resin']) {
    await page.setViewportSize({ width: 360, height: 740 });
    await page.goto(`/products/${slug}/`);
    const lineHeight = await page.locator('.crumb .cur').evaluate((e) => e.getBoundingClientRect().height);
    const crumbInner = await page.locator('.crumb').evaluate((e) => {
      const s = getComputedStyle(e); return e.getBoundingClientRect().height - parseFloat(s.paddingTop) - parseFloat(s.paddingBottom);
    });
    expect(crumbInner, slug).toBeLessThanOrEqual(lineHeight + 2);
    // truncation is visual only: the full name stays in the DOM for assistive tech
    expect((await page.locator('.crumb .cur').textContent())!.length, slug).toBeGreaterThan(10);
  }
});
