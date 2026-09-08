// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Must match `site.url` in src/data/site.js — samratpolyresins.in is the
  // live, crawlable domain today.
  //
  // CORRECTION (verified 2026-09-08): an earlier comment here stated that
  // "samratpolyresins.com currently blocks crawlers via robots.txt". That is
  // not true. www.samratpolyresins.com is live, indexed, and served by an
  // IndiaMART-managed template; a brand search returns several of its pages.
  // Do not rely on the old assumption when planning any migration.
  // The two properties overlap on business identity and catalogue, which is a
  // known entity-consolidation question — deliberately unresolved here and
  // tracked separately. No domain change is implied by this comment.
  site: 'https://samratpolyresins.in',
  integrations: [sitemap()],
});
