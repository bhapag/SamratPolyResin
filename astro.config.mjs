// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Must match `site.url` in src/data/site.js — samratpolyresins.in is the
  // live, crawlable domain today. samratpolyresins.com currently blocks
  // crawlers via robots.txt; switch both back once that migration is done.
  site: 'https://samratpolyresins.in',

  integrations: [sitemap()],
  adapter: cloudflare(),
});