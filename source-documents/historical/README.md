# Historical source documents

Kept for the record. Nothing in this folder is served by the website: it sits
outside `public/`, so Astro does not copy it into the build.

## historical-spr-tds-pet-pet-resin-original.pdf

- Doc. Ref: SPR-TDS-PET, Rev. 01, July 2026
- Title: "PET Resin / Polyester Putty Resin" — PET-modified unsaturated polyester
  resin, sheet grade
- Formerly public at `/tds/pet-resin-tds.pdf` (unlinked since the product was
  renamed). That URL now redirects to `/technical-documents/`.

This sheet describes a sheet grade for PET sheets, fibre sheets and FRP sheet
lamination. It is **not** the Technical Data Sheet for Polyester Putty Resin,
and PET Resin is not a current product. Whether the putty base resin and this
sheet grade are one grade or two has not been established. Do not link this
file from any product page.

The matching historical SDS (`public/sds/pet-resin-sds.pdf`) was left untouched
when this TDS was moved.

## superseded-file-*-tds-with-hidden-layer.pdf (replaced 2026-09-13)

The first-issued files for three TDS carried a stale text layer beneath the
printed sheet, which copy-paste, search engines and screen readers read:

| Served URL | Printed (unchanged) | Hidden layer removed | Previous SHA-256 | Replacement SHA-256 |
| --- | --- | --- | --- | --- |
| `/tds/gp-quartz-resin-tds.pdf` | SPR-TDS-GQR Rev. 01, July 2026 | GP Clear Resin sheet (SPR-TDS-GCR) | `00b9896f830292e745b70c8a4b672ba11544977902899cb7284f8c0678289dc2` | `5af4dd012a124513efd202e245194e8c181d68047b31b88da1f52875906a72bd` |
| `/tds/iso-fire-retardant-resin-tds.pdf` | SPR-TDS-IFR Rev. 01, July 2026 | GP Clear Resin sheet (SPR-TDS-GCR) | `3537e4111adfc4e46391483db84c968ea9dd5e1c40682f31cd4e9fcc41a9f7c9` | `64b8c343b86907f5867d445da85ec89848d7c004292484056ad26d7e36e4e481` |
| `/tds/epoxy-clear-casting-resin-tds.pdf` | SPR-TDS-CCR Rev. 01, July 2026 | earlier draft of the same ref (1:1 mix, "Not Provided") | `956fd1a1bda547479d982eeec8ce3eff765a2457ee55f6620a69eceea347b590` | `97968f27b5c35bd40926c10f04aa146d795d2101d6fdbe399e4cf7f567c6e82f` |

Method: only text objects in the underlying layer that a later opaque
rectangle of the printed sheet fully covers were deleted; nothing was added to
what is drawn. A ToUnicode map was added for the bullet (ZapfDingbats) and the
"≥" (Symbol) glyphs so extracted text matches the print. Verification: both
versions rendered with PDF.js at 3x — Clear Casting 0 differing pixels; GP
Quartz and ISO FR 4 pixels each, a faint anti-aliased trace of the removed GP
Clear descender that showed through a white patch edge. Extracted text was
compared row by row with the rendered sheet. Because the printed document is
unchanged, the Doc. Ref, Rev. and date were not changed.
