"""List vague link and button names across the built site.

    python scripts/audit-links.py

Accessible name = aria-label if present, else visible text (tags stripped).
Flags names that do not say where the link goes or what the button does.
"""
import glob, html, io, os, re, sys, collections
sys.stdout.reconfigure(encoding='utf-8')
VAGUE = re.compile(r'^(learn more|read more|click here|here|more|details|view|view more|download|open|see more|go|link|this page|find out more|know more|explore)[\s→›»:.]*$', re.I)
tag_re = re.compile(r'<(a|button)\b([^>]*)>(.*?)</\1>', re.S | re.I)
found = collections.defaultdict(set)
empty = collections.defaultdict(set)
for f in glob.glob(os.path.join('dist', '**', 'index.html'), recursive=True):
    page = f.replace(os.sep, '/')[4:-10]
    h = io.open(f, encoding='utf-8').read()
    h = re.sub(r'<!--.*?-->|<script[\s\S]*?</script>|<style[\s\S]*?</style>|<template[\s\S]*?</template>', '', h)
    for m in tag_re.finditer(h):
        attrs, inner = m.group(2), m.group(3)
        al = re.search(r'aria-label="([^"]*)"', attrs)
        lb = re.search(r'aria-labelledby="([^"]*)"', attrs)
        inner_nosr = inner
        text = html.unescape(re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', inner_nosr))).strip()
        if not text:
            alt = re.search(r'<img[^>]*alt="([^"]+)"', inner)
            text = alt.group(1) if alt else ''
        name = html.unescape(al.group(1)).strip() if al else text
        if not name and not lb:
            empty[(m.group(1), attrs.strip()[:90])].add(page)
        elif VAGUE.match(name):
            href = re.search(r'href="([^"]*)"', attrs)
            found[(m.group(1), name, href.group(1)[:60] if href else '')].add(page)
print('## vague names')
for k, v in sorted(found.items(), key=lambda x: -len(x[1])):
    print(f'  [{len(v)}] {k}  e.g. {sorted(v)[0]}')
print('\n## no accessible name')
for k, v in sorted(empty.items(), key=lambda x: -len(x[1]))[:40]:
    print(f'  [{len(v)}] {k}  e.g. {sorted(v)[0]}')
