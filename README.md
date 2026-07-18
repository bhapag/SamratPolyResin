# Samrat Poly Resins — website

A fast, static catalog site built with [Astro](https://astro.build). No database,
no server to maintain, free to host. Products are edited in one plain file.

---

## Run it locally

You need [Node.js](https://nodejs.org) (v18+). Then:

```bash
npm install       # first time only
npm run dev        # start local preview at http://localhost:4321
npm run build      # build the final site into /dist
```

---

## Add / edit / remove a product

Everything lives in **`src/data/products.js`**.

To **add** a product: copy one existing block (from `{` to `},`), paste it below,
and change the fields. To **remove** one: delete its block. To **edit**: change
the text. No other file needs touching.

Important fields:

- `slug` — the URL id. Lowercase, dashes, no spaces, must be unique.
- `category` — must exactly match one of the `CATEGORIES` listed at the top.
- `image` — a filename inside `public/products/`. Drop the photo there first.
- `price` — kept for internal reference only (last-known price per product).
  **Not currently shown publicly** — every page displays `site.priceLabel`
  ("Price on Request") instead, since resin pricing moves too often to keep
  hardcoded page prices accurate. If you want to show real prices again,
  wire `product.price` back into `ProductCard.astro` and
  `products/[slug].astro` (search for `site.priceLabel` in both) and add a
  fallback to `site.priceLabel` for any product where `price` is `""`.

After editing, commit and push — the live site rebuilds automatically.

### Product photos
Placeholder images are in `public/products/`. Replace them with real photos using
the **same filename** (keep them ~4:3, ~800x600px, JPG). Better photos make a real
difference for B2B buyers — worth getting proper ones.

---

## Set the contact details

Open **`src/data/site.js`** and replace the placeholders:

- `phoneDisplay`, `phoneDial` — the shop phone number
- `whatsapp` — digits only, with country code, **no + or spaces** (e.g. `919876543210`)
- `email` — where enquiries should go
- `address`, `gst`, `proprietor` — business details
- `mapsQuery` — the Google Maps search term for the map embed
- `url` — the live, crawlable production domain. Used for canonical/OG tags,
  the sitemap and structured data. **Must match `site` in `astro.config.mjs`
  and must actually resolve and allow crawling** — pointing this at a domain
  that isn't live yet or blocks crawlers (check its `/robots.txt`) actively
  suppresses indexing of the real site.
- `ogImage` — default social-share image, falls back to the logo.
- `statesServed` — single source of truth for the states listed on the
  homepage ("Why Choose Us" and "Industries We Serve" both read this array),
  so the two sections can't drift into showing different lists again.
- `packagingRange` — general packaging-size copy for aggregate mentions.
  Individual products still show their own exact pack size under `specs`
  in `products.js`.
- `priceLabel` — the single string shown everywhere a price would otherwise
  appear. Change it in one place if the pricing strategy changes.

---

## Knowledge Centre articles (`src/data/resources.js`)

Each article's `sections` array is either plain heading strings (an outline
with no body copy yet) or rich objects with real `body` content. **Any
article still using plain-string sections must be marked `draft: true`.**
Draft articles are automatically excluded from `/resources/`, from the
sitemap, and don't get a built page at all — this is what stops an
unfinished outline from ever going live showing placeholder filler text to
a real visitor or to Google. Write the real content, then remove the
`draft` flag to publish it.

---

## Make the enquiry form send email (2 minutes)

The form works in **demo mode** until connected. To make enquiries land in the
owner's inbox:

1. Go to **[web3forms.com](https://web3forms.com)** -> enter the owner's email ->
   get a free **Access Key** (emailed instantly).
2. Paste it into `formEndpoint` in **`src/data/site.js`**:
   ```js
   formEndpoint: "your-access-key-here",
   ```
3. Rebuild / redeploy. Every enquiry now emails the owner, and the message
   includes which product they were looking at.

Web3Forms free tier covers 250 submissions/month — plenty for this.

---

## Deploy (free, on Cloudflare Pages)

1. Push this folder to a GitHub repo.
2. On [Cloudflare Pages](https://pages.cloudflare.com): **Create project ->
   Connect to Git -> pick the repo.**
3. Build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy. You get a free `*.pages.dev` URL immediately.
5. Add the real domain (`samratpolyresins.com`) under **Custom domains**,
   then update `site.url` in `src/data/site.js` **and** `site` in
   `astro.config.mjs` to match it, and redeploy. Until that domain is live
   and crawlable, leave both pointed at whichever domain is actually serving
   the site — `sitemap.xml` and `robots.txt` are generated from these values
   automatically on every build, so a stale domain here means Google is
   told the wrong canonical URLs.
   WARNING: adding a custom domain needs access to the domain's DNS. If IndiaMART currently controls
   the domain, sort that out first — you may need the registrar login or to move
   the domain to Cloudflare.

Netlify works identically (same build command / output dir) if you prefer it.

---

## Structure

```
src/
  data/
    products.js     <- THE product catalog (edit this)
    resources.js     <- Knowledge Centre articles (edit this — see draft-flag note above)
    site.js         <- contact details + form key + SEO domain (edit this)
  components/
    ProductCard.astro
    EnquiryForm.astro
    ...              <- Knowledge Centre building blocks (DataTable, Callout, FaqAccordion, etc.)
  layouts/
    Base.astro      <- header, footer, floating WhatsApp, SEO, structured data
  pages/
    index.astro     <- homepage
    404.astro
    products/[slug].astro   <- auto-generates one page per product
    resources/[slug].astro  <- auto-generates one page per published (non-draft) article
  styles/
    global.css      <- colors, fonts, design system
public/
  products/         <- product images (+ favicon)
  robots.txt        <- points crawlers at the sitemap
```

`sitemap.xml` is generated automatically at build time by `@astrojs/sitemap`
(configured in `astro.config.mjs`) from whatever pages actually get built —
draft resource articles are excluded automatically since they never become
real pages.
