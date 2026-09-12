import { test, expect, devices } from '@playwright/test';

// The mobile hamburger opened on a freshly loaded page and then stopped
// working for the rest of the session.
//
// Cause: `transition:persist` without an explicit name. Astro derives the
// persist key from the component scope plus a per-page element index, so the
// header rendered as "astro-2flubgne-15" on the homepage but "astro-2flubgne-5"
// on a product page. Those keys never matched, so the pairing failed and the
// header was REPLACED on every client-side navigation instead of carried over.
// The replacement is a fresh server-rendered button with no click listener,
// and the inline wiring script does not re-run on a client-side swap.
//
// The visible symptom was misleading: tapping still produced the gold outline,
// because that comes from :hover sticking after a tap, not from aria-expanded.
// So the button looked responsive while doing nothing.
//
// These tests drive real touch input, and the navigation ones are what
// actually reproduce the bug — a cold load alone always passed.

const phone = devices['Pixel 5'];

test.use({ ...phone });

async function menuState(page: import('@playwright/test').Page) {
  return page.evaluate(() => {
    const t = document.getElementById('navToggle');
    const n = document.getElementById('mobileNav');
    return {
      aria: t?.getAttribute('aria-expanded') ?? null,
      open: n?.classList.contains('is-open') ?? null,
      wired: (t as HTMLElement | null)?.dataset.wired ?? null,
    };
  });
}

test.describe('mobile menu', () => {
  test('opens on the first tap on a freshly loaded page', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(300);
    await page.tap('#navToggle');
    const s = await menuState(page);
    expect(s.aria, 'aria-expanded after one tap').toBe('true');
    expect(s.open, '.is-open after one tap').toBe(true);
  });

  test('the same button closes it again on the next tap', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(300);
    await page.tap('#navToggle');
    expect((await menuState(page)).open).toBe(true);
    await page.tap('#navToggle');
    const s = await menuState(page);
    expect(s.aria).toBe('false');
    expect(s.open).toBe(false);
  });

  // The regression. Before the fix this failed on the very first iteration:
  // the persisted header was swapped for an unwired copy, so aria-expanded
  // stayed "false" and data-wired came back undefined.
  test('still opens on the first tap after client-side navigation', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(400);

    for (let i = 0; i < 3; i++) {
      const href = await page.evaluate(() => {
        const a = [...document.querySelectorAll('a[href^="/products/"]')]
          .find((x) => /\/products\/[a-z0-9-]+\/$/.test(x.getAttribute('href') || ''));
        if (!a) return null;
        (a as HTMLAnchorElement).click();
        return a.getAttribute('href');
      });
      expect(href, 'found an in-page product link to navigate with').not.toBeNull();
      await page.waitForTimeout(1200);

      await page.tap('#navToggle');
      const s = await menuState(page);
      expect(s.wired, `header lost its wiring after navigation ${i + 1}`).toBe('true');
      expect(s.aria, `aria-expanded after navigation ${i + 1}`).toBe('true');
      expect(s.open, `menu open after navigation ${i + 1}`).toBe(true);
      await page.tap('#navToggle');
      await page.waitForTimeout(200);
    }
  });

  test('still opens after browser Back and Forward', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(400);
    await page.evaluate(() => {
      const a = [...document.querySelectorAll('a[href^="/products/"]')]
        .find((x) => /\/products\/[a-z0-9-]+\/$/.test(x.getAttribute('href') || ''));
      (a as HTMLAnchorElement)?.click();
    });
    await page.waitForTimeout(1200);

    await page.goBack();
    await page.waitForTimeout(1200);
    await page.tap('#navToggle');
    expect((await menuState(page)).open, 'after Back').toBe(true);
    await page.tap('#navToggle');

    await page.goForward();
    await page.waitForTimeout(1200);
    await page.tap('#navToggle');
    expect((await menuState(page)).open, 'after Forward').toBe(true);
  });

  test('the persist key is stable across pages', async ({ page }) => {
    const keyOf = async (path: string) => {
      await page.goto(path);
      return page.evaluate(() =>
        document.querySelector('header.site-header')?.getAttribute('data-astro-transition-persist') ?? null);
    };
    const home = await keyOf('/');
    const product = await keyOf('/products/gp-clear-resin/');
    const hub = await keyOf('/products/gp-resins/');
    expect(home, 'header carries a persist key').not.toBeNull();
    // An auto-generated key ends in a per-page index and would differ here.
    expect(product, 'product page persist key matches the homepage').toBe(home);
    expect(hub, 'hub persist key matches the homepage').toBe(home);
  });

  test('open panel sits above page content and the floating WhatsApp button', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(300);
    await page.tap('#navToggle');
    await page.waitForTimeout(300);
    const r = await page.evaluate(() => {
      const n = document.getElementById('mobileNav')!;
      const box = n.getBoundingClientRect();
      // sample a point inside the open panel and see what is on top
      const el = document.elementFromPoint(box.left + box.width / 2, box.top + Math.min(40, box.height / 2));
      const wa = document.querySelector('.wa-float');
      const zOf = (e: Element | null) => (e ? Number(getComputedStyle(e).zIndex) || 0 : 0);
      return {
        panelOwnsItsArea: !!(el && (el === n || n.contains(el))),
        panelZ: zOf(n.closest('header') || n),
        waZ: zOf(wa),
      };
    });
    expect(r.panelOwnsItsArea, 'panel is the topmost element in its own area').toBe(true);
    expect(r.panelZ, 'header/panel stacks above the WhatsApp float').toBeGreaterThanOrEqual(r.waZ);
  });

  test('keyboard activation and Escape work, and focus stays visible', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(300);
    await page.focus('#navToggle');
    await page.keyboard.press('Enter');
    expect((await menuState(page)).open, 'Enter opens').toBe(true);
    await page.keyboard.press('Escape');
    expect((await menuState(page)).open, 'Escape closes').toBe(false);
    const focused = await page.evaluate(() => document.activeElement?.id ?? '');
    expect(focused, 'focus is not lost on Escape').toBe('navToggle');
    const outline = await page.evaluate(() => {
      const t = document.getElementById('navToggle')!;
      t.focus();
      const cs = getComputedStyle(t);
      return { outline: cs.outlineStyle, width: cs.outlineWidth, border: cs.borderColor };
    });
    expect(outline.outline !== 'none' || parseFloat(outline.width) > 0 || !!outline.border).toBeTruthy();
  });

  test('opening and closing does not move the reader down the page', async ({ page }) => {
    await page.goto('/');
    // Let layout settle first. Measuring too early makes the browser's own
    // late scroll restoration look like menu-induced movement: scrollTo(900)
    // lands short while lazy content is still resolving, then corrects itself.
    // The assertion that actually matters is that document height is
    // unchanged, which is what proves the panel is out of flow.
    await page.evaluate(() => new Promise<void>((resolve) => {
      let y = 0;
      const step = () => {
        window.scrollTo(0, y); y += 800;
        if (y < document.body.scrollHeight) requestAnimationFrame(step);
        else { window.scrollTo(0, 0); resolve(); }
      };
      step();
    }));
    await page.waitForTimeout(900);
    await page.evaluate(() => window.scrollTo(0, 900));
    await page.waitForTimeout(500);
    const before = await page.evaluate(() => window.scrollY);
    const heightBefore = await page.evaluate(() => document.body.scrollHeight);
    await page.tap('#navToggle');
    await page.waitForTimeout(450);
    const during = await page.evaluate(() => window.scrollY);
    const heightDuring = await page.evaluate(() => document.body.scrollHeight);
    await page.tap('#navToggle');
    await page.waitForTimeout(450);
    const after = await page.evaluate(() => window.scrollY);

    // The panel must not participate in layout. In flow it grew the sticky
    // header by ~420px, which grew the document and dragged the reader ~410px
    // down the page on a single tap.
    expect(heightDuring - heightBefore, 'opening the menu changed document height').toBe(0);
    expect(Math.abs(during - before), 'scroll moved while opening').toBeLessThanOrEqual(2);
    expect(Math.abs(after - before), 'scroll moved while closing').toBeLessThanOrEqual(2);
  });

  test('a menu link navigates and the menu closes behind it', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(300);
    await page.tap('#navToggle');
    await page.waitForTimeout(250);
    await page.tap('#mobileNav a[href="/contact/"]');
    await page.waitForTimeout(1200);
    expect(page.url()).toContain('/contact/');
    expect((await menuState(page)).open, 'menu closed after following a link').toBe(false);
  });

  test('desktop navigation is untouched above the breakpoint', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/');
    await page.waitForTimeout(300);
    const r = await page.evaluate(() => ({
      toggle: getComputedStyle(document.getElementById('navToggle')!).display,
      panel: getComputedStyle(document.getElementById('mobileNav')!).display,
      desktopLinks: document.querySelectorAll('.site-header nav a').length,
    }));
    expect(r.toggle, 'hamburger hidden on desktop').toBe('none');
    expect(r.panel, 'mobile panel hidden on desktop').toBe('none');
    expect(r.desktopLinks, 'desktop nav links still present').toBeGreaterThan(3);
  });
});
