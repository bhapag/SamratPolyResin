# HERO_LOADING_OPTIONS.md — measured options for the hero (nothing implemented)

**Date:** 2026-09-08 · **Base:** commit `f46988e` · **Status:** all variants tested locally, then **fully reverted**. The committed implementation is unchanged.

---

## 1. First: the premise of this task was wrong, and I proved it wrong

I previously wrote that *"even the 6.4 MB encode saturates the connection and starves the poster that is the LCP element."*

**That is false.** Measured over 5 cold Slow-4G runs with full CDP request-lifecycle tracing:

| Measurement | Value |
|---|---|
| Video requests **initiated** | 1 |
| Video bytes transferred **before LCP** | **0** |
| Video bytes at 20 s cutoff | ~63,750 (≈1% of the file) |
| Video request state at cutoff | **still in flight** |
| Resource Timing entries for video | **none** (entry only appears on completion) |
| Bytes before LCP (total) | 404,563 |

**The video contributes zero bytes before LCP.** The earlier "0 → 0 video requests / 0.23 MB total" line came from Resource Timing, which only records *completed* requests — so an in-flight 6.4 MB download appeared as "0". That was a measurement artefact, and my interpretation built on it was wrong.

**The actual pre-LCP competitors were poster images**, including a duplicate of the LCP image itself:

| Resource | Bytes | Before LCP | Why it loaded |
|---|---|---|---|
| `hero-video-poster-mobile…_2uYfUj.webp` (1280w) | 85,804 | 85,804 | **The LCP element** |
| `hero-video-poster-mobile…_Z1EF7gW.webp` (1920w) | 85,804 | 85,804 | 🔴 **Duplicate** — requested by 3 *desktop-only, `display:none`* elements on a 390 px screen |
| `logo.jpg` | 197,263 | 83,326 | Header logo — **1254×1254 JPEG rendered at 40×40** |
| `samrat-poly-resins-brand-film-still…webp` | 132,014 | 77,326 | Brand-film `poster` — **~6,000 px below the fold** (posters are never lazy) |
| `applications-video-poster.jpg` | 46,566 | 46,566 | Another below-fold `poster` |
| 3 × Google Fonts woff2 | 101,986 | most | Cross-origin, extra RTT on a 400 ms link |

The 1920 px duplicate is requested by: the ambient `<img class="ambient-poster ambient-desktop">`, `#ambientVideoDesktop`'s `poster`, and `.hero-video-desktop`'s `poster` — all `display:none` at 390 px. **`display:none` prevents neither `<img>` nor `poster` downloads.**

---

## 2. Test conditions (identical for every variant)

Chromium via Playwright · fresh context per run (**cold cache**, `Network.setCacheDisabled`) · `visibilityState: "visible"` asserted · **5 runs, medians** · Slow-4G **400 kbps / 400 ms RTT / 4× CPU** · 390×844 @ DPR 3 · Android Chrome UA · autoplay policy `no-user-gesture-required` · fixed 20 s termination · no service worker · local production build. **Lab only — not CrUX field data.**

---

## 3. Results

| Variant | Slow-4G LCP | Δ | Bytes before LCP | Desktop total | Mobile total |
|---|---|---|---|---|---|
| **Committed (`f46988e`)** | **13,200 ms** | — | 404,563 | 21.45 MB | 7.15 MB |
| **Option A** — poster-first | **8,308 ms** | **−4,892 (−37%)** | **179,117 (−56%)** | 21.45 MB | 7.15 MB |
| **Option B** — re-encode | 13,224 ms | +24 (none) | 406,063 | **4.54 MB** | **1.75 MB** |
| **Option C** — A + B combined | *(not separately run — see §6)* | | | | |

Option A LCP across the 5 runs: 8,676 / 8,260 / 8,308 / 8,316 / 8,304 ms — tight and repeatable.

### Option A — poster-first (what I changed)
`fetchpriority="high"` on the hero base image · removed both hero `<video poster>` attributes (the eager `<Image>` base layer already renders the same frame) · ambient poster switched to `<picture><source media>` so only one derivative downloads · removed ambient video posters · below-fold posters (`logo.jpg`, `applications-video-poster.jpg`, brand film) moved to `data-poster`, applied by JS on activation.

**Result: the single biggest LCP lever, and it does not touch the video at all.**

### Option B — re-encode (masters preserved byte-identically)

| Asset | Master | Re-encoded | Saving | Bitrate |
|---|---|---|---|---|
| Desktop 1916×1080 | 20.75 MB | **3.87 MB** (CRF 28, same resolution) | **−80.5%** | 11,032 → 2,154 kb/s |
| Desktop 1536×866 | 20.75 MB | 2.11 MB (CRF 30) | −89.3% | 1,175 kb/s |
| Mobile 960×540 | 6.08 MB | **1.00 MB** (CRF 30) | **−83.5%** | 3,386 → 556 kb/s |
| Mobile 854×480 | 6.08 MB | 0.66 MB (CRF 32) | −89.1% | 367 kb/s |

Settings: `libx264 -crf N -preset slow -pix_fmt yuv420p -movflags +faststart -an`. Both masters already contain **no audio track**.

**Visual check:** a matched frame (t=6 s) from master vs CRF 28 at full resolution is **visually indistinguishable** — reactors, floor markings, logo panel and lighting all reproduce cleanly, with no blocking or banding. The hero additionally applies `filter: contrast(1.08) brightness(1.28)` and a scrim, which masks residual artefacts further. Side-by-side evidence generated at `scratchpad/encodes/compare-desktop.png`.

**No LCP benefit** (as expected — video isn't in the pre-LCP path), but it removes **~17 MB desktop / ~5 MB mobile** per visit.

### Option C — hybrid (designed, not separately measured)
Reduced-motion → no video (already true). `Save-Data: on` → no autoplay. Slow connection → poster only, video on interaction. Capable connection → current premium autoplay. Fallback for Safari/browsers without Network Information API → treat as capable (never degrade a premium experience on a false negative).

---

## 4. Recommendation

**Adopt Option A + Option B together. Treat Option C as a later refinement.**

| Criterion | A | B | C |
|---|---|---|---|
| Slow-4G LCP | **−37%** | none | −37% (inherits A) |
| Desktop bytes | none | **−16.9 MB** | −16.9 MB |
| Mobile bytes | none | **−5.4 MB** | −5.4 MB |
| Time-to-motion | unchanged | **faster** (smaller file) | slower on slow links (deliberate) |
| Visual quality | unchanged | indistinguishable at CRF 28 | unchanged |
| Safari/iOS risk | **Medium** — ambient poster removal needs real-device checking | **Low** — standard H.264 | **Medium-High** — connection API unsupported; needs fallback |
| Accessibility | improved (reduced-motion gets no video) | neutral | best |
| Complexity | Low-Medium | **Low** | High |

**Why not C first:** `navigator.connection` is unsupported in Safari, so a connection-gated hero would behave differently on iOS than everywhere else — for a premium brand hero that is a design regression risk, and it needs your visual sign-off.

**Recommended encode:** desktop **CRF 28 at native 1916×1080** (3.87 MB) and mobile **CRF 30 at 960×540** (1.00 MB). This keeps desktop resolution untouched — I would not reduce the desktop hero's pixel dimensions without your approval.

**Bonus finding, independent of all three options:** `/logo.jpg` is a **1254×1254, 197 KB JPEG rendered at 40×40** in the header of **all 291 pages**. An optimised ~120 px WebP would be roughly 5 KB — about **190 KB saved on every page view sitewide**. Cheapest win in this document.

---

## 5. Risks and open items before any of this ships

1. **iOS/Safari is untested** — no real device available. The hero's autoplay behaviour is historically fragile on iOS; Option A removes `poster` attributes the earlier work deliberately added.
2. **Ambient black-box regression risk.** A code comment records that a sourceless `<video>` with no poster paints an opaque black rectangle. In my Chromium test the ambient background still rendered correctly — but this must be confirmed on Safari before shipping.
3. Removing hero `poster` attributes relies on the base `<Image>` layer being present and eager. It is — but it is now the only fallback.
4. Slow-4G LCP at 8.3 s is **still poor**. Option A is a large improvement, not a solution. Reaching "good" (≤2.5 s) needs font strategy, the logo fix, and probably deferring more below-fold imagery.

---

## 6. What I did not do

- Did not implement any option in the committed tree — **all variants reverted**, masters restored and hash-verified.
- Did not run a separate combined A+B measurement (A and B act on independent resources; their effects are additive, but I have **not** measured the combination and will not present a combined figure as if measured).
- Did not produce WebM/AV1 variants — H.264 already achieves ~80% reduction with universal support; adding formats increases complexity for modest further gain.
- Did not test on real iOS hardware.
