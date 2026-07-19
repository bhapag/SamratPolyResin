#!/usr/bin/env node
// Composites a real 1200x630 social-share image from existing factory/
// quality-control photography, so the site stops reusing the round logo
// (a poor fit for a wide share-card crop) as its OG/Twitter image.
//
// Run manually when the source photos change:
//   node scripts/build-og-image.mjs
//
// Output: public/og-image.jpg — referenced directly by site.js `ogImage`.
// Source photos stay real, unedited crops; no invented imagery is added.

import sharp from 'sharp';
import { join } from 'node:path';

const ROOT = process.cwd();
const WIDTH = 1200;
const HEIGHT = 630;
const PANEL_WIDTH = WIDTH / 2;

const left = await sharp(join(ROOT, 'src/assets/facility/production-infrastructure.jpg'))
  .resize(PANEL_WIDTH, HEIGHT, { fit: 'cover', position: 'centre' })
  .toBuffer();

const right = await sharp(join(ROOT, 'src/assets/quality/qc-laboratory.jpg'))
  .resize(PANEL_WIDTH, HEIGHT, { fit: 'cover', position: 'centre' })
  .toBuffer();

// Subtle bottom-edge darkening on each panel for visual depth — a plain
// SVG gradient rectangle, not text, so the output has no runtime font
// dependency and renders identically on any machine that runs this script.
const gradient = Buffer.from(
  `<svg width="${WIDTH}" height="${HEIGHT}">
     <defs>
       <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
         <stop offset="55%" stop-color="#000000" stop-opacity="0" />
         <stop offset="100%" stop-color="#0d0f12" stop-opacity="0.55" />
       </linearGradient>
     </defs>
     <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#g)" />
   </svg>`
);

const outPath = join(ROOT, 'public/og-image.jpg');

await sharp({
  create: { width: WIDTH, height: HEIGHT, channels: 3, background: '#0d0f12' },
})
  .composite([
    { input: left, left: 0, top: 0 },
    { input: right, left: PANEL_WIDTH, top: 0 },
    { input: gradient, left: 0, top: 0 },
  ])
  .jpeg({ quality: 85 })
  .toFile(outPath);

console.log(`Wrote ${outPath} (${WIDTH}x${HEIGHT})`);
