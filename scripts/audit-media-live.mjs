// Live media, performance and menu checks on real production routes.
//   node scripts/audit-media-live.mjs
import { chromium, devices } from '@playwright/test';
const BASE = 'https://samratpolyresins.in';
const PAGES = ['/', '/products/gp-clear-resin/', '/products/polyester-putty-resin/', '/technical-documents/', '/catalogue/', '/products/epoxy-resins/'];
const b = await chromium.launch();

async function measure(url, profile) {
  const ctx = await b.newContext(profile === 'phone'
    ? { ...devices['Pixel 5'] }
    : { viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const cdp = await ctx.newCDPSession(page);
  if (profile === 'phone') {
    await cdp.send('Network.enable');
    await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: 1.6 * 1024 * 1024 / 8, uploadThroughput: 750 * 1024 / 8 });
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  }
  const media = []; let bytes = 0; const errors = [];
  page.on('response', async (r) => {
    const ct = r.headers()['content-type'] || '';
    const len = Number(r.headers()['content-length'] || 0);
    bytes += len;
    if (/video|mp4|webm/.test(ct) || /\.(mp4|webm)(\?|$)/.test(r.url())) media.push(`${r.status()} ${Math.round(len / 1024)}KB ${r.url().split('/').pop()}`);
  });
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 120)); });
  await page.addInitScript(() => {
    window.__lcp = 0; window.__cls = 0;
    new PerformanceObserver((l) => { for (const e of l.getEntries()) window.__lcp = e.startTime; }).observe({ type: 'largest-contentful-paint', buffered: true });
    new PerformanceObserver((l) => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__cls += e.value; }).observe({ type: 'layout-shift', buffered: true });
  });
  await page.goto(BASE + url, { waitUntil: 'load', timeout: 90000 });
  await page.waitForTimeout(3500);
  const r = await page.evaluate(() => {
    const v = document.querySelector('video');
    const imgs = [...document.querySelectorAll('main img')].filter((i) => i.getBoundingClientRect().width > 40);
    return {
      lcp: Math.round(window.__lcp), cls: +window.__cls.toFixed(3),
      video: v ? { paused: v.paused, readyState: v.readyState, src: (v.currentSrc || '').split('/').pop(), preload: v.preload } : null,
      brokenImgs: imgs.filter((i) => i.complete && i.naturalWidth === 0).length,
      distorted: imgs.filter((i) => { const r = i.getBoundingClientRect(); if (!i.naturalWidth || !r.height) return false; const fit = getComputedStyle(i).objectFit; if (fit === 'cover' || fit === 'contain') return false; return Math.abs(r.width / r.height - i.naturalWidth / i.naturalHeight) > 0.06; }).length,
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    };
  });
  await ctx.close();
  return { ...r, media, errors, kb: Math.round(bytes / 1024) };
}

for (const profile of ['phone', 'desktop']) {
  for (const url of PAGES) {
    const r = await measure(url, profile);
    console.log(`${profile.padEnd(7)} ${url.padEnd(36)} LCP=${String(r.lcp).padStart(5)}ms CLS=${r.cls} transfer~${r.kb}KB overflow=${r.overflow} brokenImg=${r.brokenImgs} distorted=${r.distorted} consoleErr=${r.errors.length}${r.video ? ` video[paused=${r.video.paused} ready=${r.video.readyState} preload=${r.video.preload} ${r.video.src}]` : ''}${r.media.length ? ` mediaRequests=${r.media.join(';')}` : ''}${r.errors.length ? ' ERR: ' + r.errors.join(' | ') : ''}`);
  }
}

// mobile menu: first real tap on a fresh live page, then after client-side navigation
const ctx = await b.newContext({ ...devices['Pixel 5'] });
const page = await ctx.newPage();
const results = [];
for (const url of ['/', '/products/iso-gelcoat/', '/technical-documents/']) {
  await page.goto(BASE + url, { waitUntil: 'load' });
  await page.tap('#navToggle');
  await page.waitForTimeout(400);
  results.push(`${url}: open=${await page.locator('#mobileNav').isVisible()} expanded=${await page.locator('#navToggle').getAttribute('aria-expanded')}`);
  await page.tap('#navToggle'); await page.waitForTimeout(300);
}
await page.goto(BASE + '/');
await page.tap('#navToggle'); await page.waitForTimeout(300);
await page.locator('#mobileNav a[href="/about/"]:visible').first().tap();
await page.waitForURL('**/about/'); await page.waitForTimeout(800);
await page.tap('#navToggle'); await page.waitForTimeout(400);
results.push(`after client-side nav to /about/: open=${await page.locator('#mobileNav').isVisible()}`);
console.log('\nmobile menu (Pixel 5 profile, real tap events, live):\n  ' + results.join('\n  '));
await b.close();
