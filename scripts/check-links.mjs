#!/usr/bin/env node
// Crawls a built `dist/` output and reports internal <a href> / <img src>
// references that don't resolve to an actual file in the build. Run after
// `npm run build`:
//
//   node scripts/check-links.mjs
//
// This is a floor-level check, not a full HTML validator: it extracts
// href/src attributes with a regex (good enough for this site's plain,
// hand-written markup) and only checks internal, same-origin links —
// external URLs, mailto:, tel:, and WhatsApp links are skipped entirely.

import { readdirSync, statSync, readFileSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';

const DIST = join(process.cwd(), 'dist');

if (!existsSync(DIST)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(1);
}

function walk(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (extname(entry.name) === '.html') files.push(full);
  }
  return files;
}

// Does `urlPath` (site-root-relative, e.g. "/products/" or "/logo.jpg")
// exist as a real file in dist/, following Astro's static-route convention
// (a route path maps to either an exact file or a directory's index.html)?
function resolves(urlPath) {
  const clean = urlPath.split('#')[0].split('?')[0];
  if (clean === '' || clean === '/') return existsSync(join(DIST, 'index.html'));

  const withoutLeadingSlash = clean.replace(/^\//, '');
  const direct = join(DIST, withoutLeadingSlash);
  if (existsSync(direct) && statSync(direct).isFile()) return true;

  const asIndex = join(DIST, withoutLeadingSlash, 'index.html');
  return existsSync(asIndex);
}

const ATTR_RE = /\s(?:href|src)="([^"]*)"/g;

function isInternal(url) {
  if (!url) return false;
  if (url.startsWith('#')) return false; // pure same-page anchor
  if (/^(https?:)?\/\//.test(url)) return false; // external / protocol-relative
  if (/^(mailto|tel|whatsapp|javascript|data):/i.test(url)) return false;
  return url.startsWith('/');
}

const htmlFiles = walk(DIST);
const broken = [];
let checked = 0;

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const pageRoute = '/' + file.slice(DIST.length + 1).replace(/\\/g, '/');
  let match;
  while ((match = ATTR_RE.exec(html))) {
    const url = match[1];
    if (!isInternal(url)) continue;
    checked++;
    if (!resolves(url)) broken.push({ page: pageRoute, url });
  }
}

console.log(`Checked ${checked} internal link(s) across ${htmlFiles.length} page(s).`);

if (broken.length === 0) {
  console.log('No broken internal links found.');
  process.exit(0);
}

console.log(`\n${broken.length} broken internal link(s):\n`);
for (const { page, url } of broken) {
  console.log(`  ${page}  ->  ${url}`);
}
process.exit(1);
