# Video masters — source of truth, never deployed

Everything in this folder is kept under version control but is **never copied
into the build output**: nothing imports it, and Astro only emits assets that
something references. Files here are byte-identical to what was previously in
`public/` — each was moved with `git mv`, never re-saved, re-muxed or
re-encoded, so the hashes below are the ones the files already carried.

| File | SHA-256 | Bytes | Resolution |
|---|---|---|---|
| `hero-background.master.mp4` | `4c977010c8438d200071920be112184d7291ecc948da5a1bbecce7e9b3591a92` | 20,747,904 | 1916×1080 |
| `hero-background-mobile.master.mp4` | `48dbc10046e181b9c450aa7291c2cd141f44c47dad9378bab19b2c44f157ecb6` | 6,372,726 | 1280×720 |
| `samrat-poly-resins-brand-film.master.mp4` | `f23ee32bf749bd1968bbcb128c29e59a7ae88044553148e59c1a8146a513fa1f` | 25,881,393 | 1080×1916 |
| `home-video.unused.mp4` | `f37eda0fed0b9e890e5c78b8b6f41295c6cfaf00ec37d302aeca79467d81338f` | 3,067,288 | 576×1024 |

## What is actually deployed

Three re-encodes of the masters above, all produced with:

```
ffmpeg -i <master> -c:v libx264 -crf <N> -preset slow \
       -pix_fmt yuv420p -movflags +faststart -an <output>
```

| Deployed file | CRF | Resolution | Bytes | vs master | SSIM (Y) |
|---|---|---|---|---|---|
| `public/videos/hero-background.mp4` | 28 | **1916×1080 — unchanged** | 4,055,473 | −80.5% | 0.9821 |
| `public/videos/hero-background-mobile.mp4` | 30 | **1280×720 — unchanged** | 1,665,581 | −73.9% | 0.9746 |
| `public/videos/samrat-poly-resins-brand-film.mp4` | 28 | **1080×1916 — unchanged** | 3,501,564 | −86.5% | 0.9797 |

**Deployed video total: 53,001,823 → 9,222,618 bytes (−82.6%, 41.8 MB saved).**

None of the masters carries an audio track, so `-an` removes nothing.

## Why nothing was downscaled

`HERO_LOADING_OPTIONS.md` proposed a 960×540 mobile hero encode (1,050,519
bytes). It was measured and rejected: against its master it scores **SSIM
0.9661** versus **0.9746** for the same CRF at native 1280×720 — a real,
measurable quality loss on the first thing a visitor sees, to save a further
615 KB. A 390 px phone at 3× asks for ~1170 px of horizontal detail, which
1280 supplies and 960 does not.

The brand film renders into a slot capped at 340 CSS px (300 px on mobile),
which is ~1020 px at 3× — so its native 1080 px width is already the right
size and only the bitrate was excessive (17.2 Mbps for a 12-second silent
clip).

The same rule now applies everywhere: **re-encode, never resize.**

## `home-video.unused.mp4` — kept, not deleted

This 9:16 clip used to sit beside the homepage category grid. It was removed
from the layout because it forced that row to the video's height (leaving
roughly 500 px of empty background next to a short grid), added 3.07 MB to a
page that already loaded three other videos, and carried no information the
grid beside it did not.

**It is not referenced by any page.** It lives here rather than in `public/`
so it is preserved in the repository without being uploaded to the CDN on
every deploy. Nothing about the file changed.

## Restoring anything

```
git mv src/assets/video-masters/hero-background.master.mp4 public/videos/hero-background.mp4
```

Then verify with `sha256sum` against the table above. Restoring
`home-video.unused.mp4` additionally needs its `<video class="lazy-video">`
markup putting back in `src/pages/index.astro` — the file alone does nothing.
