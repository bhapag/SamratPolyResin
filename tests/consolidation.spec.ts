import { test, expect } from '@playwright/test';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { resources } from '../src/data/resources.js';
import { RETIRE as RETIRE_1 } from '../scripts/consolidated-guides.mjs';
import { RETIRE as RETIRE_2 } from '../scripts/consolidation-2-plan.mjs';

// Both consolidation passes are held to the same rules by these tests.
const RETIRE = { ...RETIRE_1, ...RETIRE_2 };

// ---------------------------------------------------------------------------
// The September 2026 consolidation retired 59 thin articles behind 301s.
//
// These are structural checks against `public/_redirects` and the built
// `dist/`, NOT live HTTP checks: `_redirects` is a Cloudflare Pages feature and
// `astro preview` does not apply it, so asking preview for a retired URL would
// return 404 and prove nothing. The live 301s are verified against production
// after deployment; what these tests guarantee is that the redirect map itself
// can never silently rot — a destination that stops being built, a chain, a
// loop, or a retired URL creeping back into the sitemap all fail here.
// ---------------------------------------------------------------------------

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const redirectsFile = join(root, 'public/_redirects');

type Rule = { from: string; to: string; code: string };

function parseRedirects(): Rule[] {
  const text = readFileSync(redirectsFile, 'utf8');
  return text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'))
    .map((l) => {
      const [from, to, code] = l.split(/\s+/);
      return { from, to, code };
    });
}

function distHasPage(urlPath: string): boolean {
  const clean = urlPath.replace(/^\//, '').replace(/\/$/, '');
  if (!clean) return existsSync(join(dist, 'index.html'));
  return existsSync(join(dist, clean, 'index.html')) || existsSync(join(dist, `${clean}.html`));
}

function sitemapUrls(): string[] {
  const files = readdirSync(dist).filter((f) => f.startsWith('sitemap') && f.endsWith('.xml'));
  const urls: string[] = [];
  for (const f of files) {
    const xml = readFileSync(join(dist, f), 'utf8');
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) urls.push(m[1]);
  }
  return urls.filter((u) => !u.includes('sitemap'));
}

test.describe('content consolidation', () => {
  test('the build exists (run `npm run build` first)', () => {
    expect(existsSync(dist), 'dist/ not found — build before running these tests').toBe(true);
  });

  test('every retired article has a 301 for both slash and non-slash forms', () => {
    const rules = parseRedirects();
    const missing: string[] = [];

    for (const slug of Object.keys(RETIRE)) {
      const withSlash = `/resources/${slug}/`;
      const withoutSlash = `/resources/${slug}`;
      for (const form of [withSlash, withoutSlash]) {
        const rule = rules.find((r) => r.from === form);
        if (!rule) missing.push(`no rule for ${form}`);
        else if (rule.code !== '301') missing.push(`${form} is ${rule.code}, expected 301`);
      }
    }

    expect(missing, missing.join('\n')).toEqual([]);
  });

  test('every redirect destination is a page that actually got built', () => {
    const broken = parseRedirects()
      .filter((r) => !distHasPage(r.to))
      .map((r) => `${r.from} -> ${r.to} (destination not in dist/)`);

    expect(broken, broken.join('\n')).toEqual([]);
  });

  test('no redirect chains or loops', () => {
    const rules = parseRedirects();
    const bySource = new Map(rules.map((r) => [r.from, r.to]));
    const problems: string[] = [];

    for (const { from, to } of rules) {
      if (from === to) problems.push(`loop: ${from} -> itself`);
      // A destination that is itself a redirect source is a chain.
      if (bySource.has(to)) problems.push(`chain: ${from} -> ${to} -> ${bySource.get(to)}`);
    }

    expect(problems, problems.join('\n')).toEqual([]);
  });

  test('no retired URL is still in the sitemap', () => {
    const urls = sitemapUrls();
    const leaked = Object.keys(RETIRE).filter((slug) =>
      urls.some((u) => u.endsWith(`/resources/${slug}/`)),
    );
    expect(leaked, `retired URLs still in sitemap: ${leaked.join(', ')}`).toEqual([]);
  });

  test('no retired URL is still built as a page', () => {
    const stillBuilt = Object.keys(RETIRE).filter((slug) => distHasPage(`/resources/${slug}/`));
    expect(stillBuilt, `retired pages still in dist/: ${stillBuilt.join(', ')}`).toEqual([]);
  });

  test('every consolidated guide is substantial, not a stub', () => {
    // The point of the exercise was depth. If a guide ever drops back below
    // ~400 words of body prose it has been gutted and this should fail.
    const guides = [
      'what-is-nc-thinner',
      'what-is-soapstone-talc-powder',
      'what-is-styrene-monomer',
      'what-is-frp-mould-release-wax',
      'selecting-brushes-for-resin-and-gelcoat-application',
      'what-is-mekp-hardener',
      'what-is-cobalt-octoate',
      'what-is-glass-fiber-chopped-strand-mat',
      'what-is-frp-polyester-pigment',
      'what-is-lamination-resin',
      'what-is-gel-coat-resin',
      // pass 2
      'what-is-iso-fire-retardant-resin',
      'what-is-fire-retardant-resin',
      'what-is-gp-white-resin',
      'what-is-roof-light-sheet-grade-resin',
      'what-is-button-grade-resin',
      'what-is-epoxy-art-resin',
    ];

    const thin: string[] = [];
    for (const slug of guides) {
      const r = resources.find((x) => x.slug === slug);
      expect(r, `${slug} is missing from resources.js`).toBeTruthy();
      let words = 0;
      for (const s of r!.sections ?? []) {
        if (typeof s === 'string') continue;
        words += (s.heading ?? '').split(/\s+/).filter(Boolean).length;
        for (const b of s.body ?? []) words += b.split(/\s+/).filter(Boolean).length;
        for (const sub of (s as any).subsections ?? []) {
          words += `${sub.heading} ${sub.body}`.split(/\s+/).filter(Boolean).length;
        }
        for (const d of (s as any).definitions ?? []) {
          words += `${d.term} ${d.body}`.split(/\s+/).filter(Boolean).length;
        }
      }
      if (words < 400) thin.push(`${slug}: ${words} words`);
    }

    expect(thin, `guides below 400 body words:\n${thin.join('\n')}`).toEqual([]);
  });

  test('no published article references a slug that no longer exists', () => {
    const slugs = new Set(resources.map((r) => r.slug));
    const dangling: string[] = [];
    for (const r of resources.filter((x) => !x.draft)) {
      for (const s of r.relatedSlugs ?? []) {
        if (!slugs.has(s)) dangling.push(`${r.slug} -> ${s}`);
      }
    }
    expect(dangling, dangling.join('\n')).toEqual([]);
  });

  test('no article links to a retired /resources/ URL', () => {
    const retired = new Set(Object.keys(RETIRE));
    const offenders: string[] = [];
    const blob = JSON.stringify(resources);
    for (const m of blob.matchAll(/\/resources\/([a-z0-9-]+)\//g)) {
      if (retired.has(m[1])) offenders.push(m[1]);
    }
    expect([...new Set(offenders)], 'links to retired URLs remain in resources.js').toEqual([]);
  });
});

test.describe('reading time', () => {
  test('resource cards show the calculated figure, not a stored one', async ({ page }) => {
    // The stored `readingTime` field was wrong on 153 of 213 cards before it
    // was removed. It must not come back: a hand-written figure will drift.
    const withStoredField = resources.filter((r) => 'readingTime' in r).map((r) => r.slug);
    expect(withStoredField, 'readingTime is stored again on these entries').toEqual([]);

    await page.goto('/resources/');
    const firstCardTime = page.locator('.res-card-time').first();
    await expect(firstCardTime).toHaveText(/^\d+ min read$/);
  });

  test('a card and its article agree on reading time', async ({ page }) => {
    await page.goto('/resources/');
    const card = page.locator('.res-card').first();
    const cardTime = (await card.locator('.res-card-time').innerText()).trim();
    const href = await card.getAttribute('href');

    await page.goto(href!);
    const articleTime = await page
      .locator('.article-meta span, .article-hero span')
      .filter({ hasText: /min read/ })
      .first()
      .innerText();

    expect(articleTime.trim()).toBe(cardTime);
  });
});
