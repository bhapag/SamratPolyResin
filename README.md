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
- `price` — shown as-is (e.g. `"₹130 / kg"`). Leave `""` to show "Ask for price".

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
5. Add the real domain (`samratpolyresins.com`) under **Custom domains**.
   WARNING: this needs access to the domain's DNS. If IndiaMART currently controls
   the domain, sort that out first — you may need the registrar login or to move
   the domain to Cloudflare.

Netlify works identically (same build command / output dir) if you prefer it.

---

## Structure

```
src/
  data/
    products.js     <- THE product catalog (edit this)
    site.js         <- contact details + form key (edit this)
  components/
    ProductCard.astro
    EnquiryForm.astro
  layouts/
    Base.astro      <- header, footer, floating WhatsApp, SEO
  pages/
    index.astro     <- homepage
    404.astro
    products/[slug].astro  <- auto-generates one page per product
  styles/
    global.css      <- colors, fonts, design system
public/
  products/         <- product images (+ favicon)
```
