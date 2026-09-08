# Hero video masters — source of truth, never deployed

These are the **original, byte-identical** hero encodes as approved. They live
in `src/`, not `public/`, so they are kept under version control but are
**never copied into the build output** — nothing imports them, and Astro only
emits assets that something references.

| File | SHA-256 | Bytes | Resolution |
|---|---|---|---|
| `hero-background.master.mp4` | `4c977010c8438d200071920be112184d7291ecc948da5a1bbecce7e9b3591a92` | 20,747,904 | 1916×1080 |
| `hero-background-mobile.master.mp4` | `48dbc10046e181b9c450aa7291c2cd141f44c47dad9378bab19b2c44f157ecb6` | 6,372,726 | 1280×720 |

They were moved here with `git mv` from `public/videos/`. No re-save, no
re-mux, no metadata rewrite — the hashes above are the same ones the files
carried in `public/`.

## What is actually deployed

`public/videos/hero-background.mp4` and `public/videos/hero-background-mobile.mp4`
are re-encodes of these masters:

```
ffmpeg -i <master> -c:v libx264 -crf <N> -preset slow \
       -pix_fmt yuv420p -movflags +faststart -an <output>
```

| Deployed file | CRF | Resolution | Bytes | vs master | SSIM (Y) |
|---|---|---|---|---|---|
| `hero-background.mp4` | 28 | **1916×1080 — unchanged** | 4,055,473 | −80.5% | 0.9821 |
| `hero-background-mobile.mp4` | 30 | **1280×720 — unchanged** | 1,665,581 | −73.9% | 0.9746 |

**Combined saving: 21,399,576 bytes (~20.4 MB) per full-quality visit.**

Neither master carries an audio track, so `-an` removes nothing.

## Why neither encode was downscaled

`HERO_LOADING_OPTIONS.md` proposed a 960×540 mobile encode (1,050,519 bytes).
It was measured and rejected: against the master it scores **SSIM 0.9661**
versus **0.9746** for the same CRF at native 1280×720 — a real, measurable
quality loss on a hero that is the first thing a visitor sees, for a further
615 KB. A 390 px phone at 3× asks for ~1170 px of horizontal detail, which
1280 supplies and 960 does not.

The same reasoning already applied to desktop, where the plan explicitly
declined to reduce pixel dimensions without approval. Applying it to mobile
too keeps one rule instead of two.

## Restoring a master

```
git mv src/assets/video-masters/hero-background.master.mp4 public/videos/hero-background.mp4
```

Verify with `sha256sum` against the table above.
