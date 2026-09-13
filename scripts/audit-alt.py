"""Audit rendered <img> alt text across the built site (dist/).

    python scripts/audit-alt.py

Reports: missing alt, alt equal to a filename, very long alts, alts repeating
an adjacent figcaption, and product alts that claim manufacture for items the
site does not evidence as manufactured. Output is a summary plus a unique list
of (alt text -> pages) so every distinct alt can be read by a person.
"""
import glob, html, io, os, re, sys, collections
sys.stdout.reconfigure(encoding='utf-8')
ROOT = 'dist'
img_re = re.compile(r'<img\b[^>]*>', re.I)
attr = lambda tag, name: (re.search(r'\s' + name + r'\s*=\s*"([^"]*)"', tag) or re.search(r'\s' + name + r"\s*=\s*'([^']*)'", tag))
UNEVIDENCED = re.compile(r'(epoxy|hardener|bisphenol|vinyl ester|glass fib|fibre glass|styrene|thinner|brush|soap ?stone|wax|cobalt|mekp|pigment)', re.I)
alts = collections.defaultdict(set)
problems = collections.defaultdict(list)
count = 0
for f in glob.glob(os.path.join(ROOT, '**', 'index.html'), recursive=True):
    page = f.replace(os.sep, '/')[len(ROOT):-len('index.html')]
    h = io.open(f, encoding='utf-8').read()
    h = re.sub(r'<!--.*?-->', '', h, flags=re.S)
    for m in img_re.finditer(h):
        tag = m.group(0); count += 1
        a = attr(tag, 'alt'); src = (attr(tag, 'src') or [None, ''])[1]
        if a is None and re.search(r'\salt(\s|/?>)', tag):
            alts[''].add(page); continue
        if a is None:
            problems['missing alt'].append((page, src[-60:])); continue
        alt = html.unescape(a.group(1)).strip()
        alts[alt].add(page)
        if re.search(r'\.(jpe?g|png|webp|svg|gif)\b', alt, re.I) or re.fullmatch(r'[\w-]+', alt or ' ') and '-' in alt:
            problems['filename-like alt'].append((page, alt))
        if len(alt) > 150:
            problems['long alt (>150 chars)'].append((page, alt[:160]))
        if alt and re.search(r'manufactur', alt, re.I) and UNEVIDENCED.search(alt):
            problems['manufacture wording on non-evidenced item'].append((page, alt))
        after = h[m.end():m.end() + 600]
        cap = re.search(r'<figcaption[^>]*>(.*?)</figcaption>', after, re.S)
        if cap and alt:
            captext = re.sub(r'<[^>]+>', ' ', cap.group(1)); captext = re.sub(r'\s+', ' ', html.unescape(captext)).strip()
            if captext and (alt.lower() == captext.lower()):
                problems['alt duplicates caption'].append((page, alt))
print('images scanned:', count, '| distinct alt texts:', len(alts))
for k, v in problems.items():
    print(f'\n## {k}: {len(v)}')
    for p in v[:40]: print('  ', p)
print('\n## empty alt (decorative) pages:', len(alts.get('', [])))
print('\n## distinct alts')
for alt, pages in sorted(alts.items(), key=lambda x: -len(x[1])):
    if alt: print(f'  [{len(pages)}] {alt}')
