// Reproduce the homepage brand-film (front video) behaviour on phones.
//   node scripts/audit-brand-film.mjs <baseUrl> <outDir> <label>
// Chromium with Android device profiles, WebKit with iPhone profiles.
// Emulation, not a physical device.
import { chromium, webkit, devices } from '@playwright/test';
import fs from 'node:fs';
const [base = 'https://samratpolyresins.in', out = '.', label = 'run'] = process.argv.slice(2);
fs.mkdirSync(out, { recursive: true });

const PROFILES = [
  ['android-360', chromium, { ...devices['Galaxy S9+'], viewport: { width: 360, height: 740 } }],
  ['android-390', chromium, { ...devices['Pixel 5'], viewport: { width: 390, height: 844 } }],
  ['android-430', chromium, { ...devices['Pixel 7'], viewport: { width: 430, height: 932 } }],
  ['iphone-390', webkit, { ...devices['iPhone 13'] }],
  ['iphone-430', webkit, { ...devices['iPhone 14 Pro Max'] }],
  ['desktop-1440', chromium, { viewport: { width: 1440, height: 900 } }],
];

for (const [name, engine, profile] of PROFILES) {
  const browser = await engine.launch();
  const ctx = await browser.newContext(profile);
  const page = await ctx.newPage();
  let filmBytes = 0; const filmReqs = [];
  page.on('response', async (r) => {
    if (!/samrat-poly-resins-brand-film\.mp4/.test(r.url())) return;
    filmReqs.push(`${r.status()} range=${r.request().headers().range || '-'}`);
    try { filmBytes += (await r.body()).length; } catch { /* aborted range */ }
  });
  const errors = []; page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 100)); });

  await page.goto(base + '/', { waitUntil: 'load', timeout: 90000 });
  await page.waitForTimeout(1500);
  const loadBytes = filmBytes;
  const state = async () => page.evaluate(() => {
    const f = document.getElementById('brandFilmFrame');
    const v = document.getElementById('brandFilmVideo');
    if (!f || !v) return { missing: true };
    const r = f.getBoundingClientRect();
    const cs = getComputedStyle(f);
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    const topEl = (r.width && r.height && cy > 0 && cy < innerHeight) ? document.elementFromPoint(cx, cy) : null;
    return {
      w: Math.round(r.width), h: Math.round(r.height), pageY: Math.round(r.top + scrollY), docH: document.documentElement.scrollHeight,
      display: cs.display, visibility: cs.visibility, opacity: cs.opacity,
      videoActive: v.classList.contains('is-active'), paused: v.paused, readyState: v.readyState, currentTime: +v.currentTime.toFixed(2),
      hasSrc: !!(v.currentSrc || v.querySelector('source')?.getAttribute('src')), controls: v.controls,
      playButton: (() => { const b = f.querySelector('.brandfilm-play'); return b ? getComputedStyle(b).display !== 'none' : false; })(), mode: f.dataset.mode, st: f.dataset.state,
      topElement: topEl ? `${topEl.tagName}.${String(topEl.className).split(' ')[0]}` : null,
    };
  });
  const before = await state();
  await page.locator('#brandFilmFrame').scrollIntoViewIfNeeded().catch(() => {});
  await page.waitForTimeout(3000);
  const inView = await state();
  const scrollBytes = filmBytes;
  await page.screenshot({ path: `${out}/${label}-${name}-inview.png` });
  // real tap / click in the centre of the frame
  const box = await page.locator('#brandFilmFrame').boundingBox();
  if (box && box.height > 10) {
    if (profile.hasTouch) await page.touchscreen.tap(box.x + box.width / 2, box.y + box.height / 2);
    else await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
  }
  await page.waitForTimeout(4000);
  const afterTap = await state();
  const t1 = afterTap.currentTime; await page.waitForTimeout(1500); const t2 = (await state()).currentTime;
  await page.screenshot({ path: `${out}/${label}-${name}-aftertap.png` });
  console.log(`\n${label} ${name} (${engine.name()})`);
  console.log('  on load  :', JSON.stringify(before));
  console.log('  in view  :', JSON.stringify(inView));
  console.log('  after tap:', JSON.stringify(afterTap), `moving=${t2 > t1} (${t1}->${t2})`);
  console.log(`  film bytes: load=${Math.round(loadBytes / 1024)}KB scrolled=${Math.round(scrollBytes / 1024)}KB afterTap=${Math.round(filmBytes / 1024)}KB requests=${filmReqs.join(' | ') || 'none'} consoleErrors=${errors.length}`);
  await browser.close();
}
