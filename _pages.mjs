import { chromium } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
const [file, outDir, scaleArg] = process.argv.slice(2);
const scale = Number(scaleArg || 1.3);
fs.mkdirSync(outDir, { recursive: true });
const b = await chromium.launch();
const page = await b.newPage({ viewport: { width: 1000, height: 1400 } });
await page.setContent('<body style="margin:0;background:#888"><canvas id="c"></canvas><script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script></body>');
await page.waitForFunction(() => !!window.pdfjsLib);
const b64 = fs.readFileSync(file).toString('base64');
const n = await page.evaluate(async (d) => {
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  window.__pdf = await pdfjsLib.getDocument({ data: Uint8Array.from(atob(d), (c) => c.charCodeAt(0)) }).promise;
  return window.__pdf.numPages;
}, b64);
for (let i = 1; i <= n; i++) {
  const dim = await page.evaluate(async ([i, s]) => {
    const p = await window.__pdf.getPage(i); const vp = p.getViewport({ scale: s });
    const c = document.getElementById('c'); c.width = vp.width; c.height = vp.height;
    await p.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise; return [vp.width, vp.height];
  }, [i, scale]);
  await page.setViewportSize({ width: Math.ceil(dim[0]), height: Math.ceil(dim[1]) });
  await page.locator('#c').screenshot({ path: path.join(outDir, `p${String(i).padStart(2, '0')}.png`) });
}
console.log('pages', n);
await b.close();
