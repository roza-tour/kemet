# Kemet — Luxury Egypt Travel (Astro)

A statically-generated, English-only marketing site for **Kemet**, a luxury
Egypt travel brand. Built with **Astro** (static output, `build.format: "file"`)
so it deploys as plain `.html` files to shared hosting such as cPanel /
`public_html`. SEO / GEO / AEO-ready, accessible, responsive and fast.

## Quick start

```bash
npm install      # install dependencies
npm run dev      # http://localhost:4321
npm run check    # astro check — type-check every page/component (0 errors)
npm run build    # static output -> ./dist
npm run preview  # serve ./dist locally to sanity-check every route
```

Optional deploy-time configuration lives in environment variables — copy
`.env.example` to `.env` and fill in the live domain, WhatsApp number and
contact details. Without a `.env`, the build falls back to the placeholders in
`src/config/site.ts` so it always runs.

## Deploy (cPanel / shared hosting)

1. `npm run build`.
2. Upload the **contents of `dist/`** into `public_html/` (not the folder
   itself). Because the build emits flat `.html` files and all internal links
   end in `.html`, the site works on any static host with no rewrite rules.

## Architecture

Pages are **data-driven** — there is no duplicated markup. Each directory has a
single, clear responsibility, so future growth means *adding files*, not
restructuring. Imports use the `@/*` alias (→ `src/*`, configured in
`tsconfig.json`).

```
src/
  config/
    site.ts          # site identity, contact, domain (env-driven) + named constants
  data/              # pure content — no presentation, no helpers
    tours.ts         # all 12 tours (itineraries, prices, inclusions, FAQs)
    identities.ts    # the 8 cultural identities
    activities.ts    # 8 signature activities
    cuisine.ts       # savoury dishes + sweets
    culture.ts       # symbols/gods + living crafts
  types/
    index.ts         # every shared interface/type (Tour, Identity, …) — one source of truth
  utils/
    links.ts         # whatsappLink, mailtoLink, canonical
    format.ts        # formatPrice, pad2
  schemas/
    jsonld.ts        # JSON-LD builders (site, breadcrumb, tour)
  scripts/
    enhance.ts       # progressive-enhancement client script (inlined by Base)
  layouts/
    Base.astro       # shell: head/meta/OG, fonts, JSON-LD, nav, footer, CTA, script
  components/        # Nav, Footer, CTA, Hero, PageHero, SectionHeader, TourCard,
                     # ActivityCard, Frieze, Faq, SymbolIcon, BrandMark, Placeholder, SvgDefs
  pages/
    index, tours, identities, activities, cuisine, culture (6 main routes)
    [slug].astro     # one template → all 12 tour-*.html detail pages
  styles/
    global.css       # the full design system (black / gold / cream)
  assets/            # future processed imagery (kept empty for now)
```

### 18 routes

- **Main (6):** `index.html`, `tours.html`, `identities.html`,
  `activities.html`, `cuisine.html`, `culture.html`.
- **Tour detail (12):** rendered from `src/pages/[slug].astro` —
  `tour-10-day`, `tour-7-day`, `tour-4-day`, `tour-3-day`, `tour-fayoum`,
  `tour-giza-museum`, `tour-saqqara`, `tour-religious-citadel`,
  `tour-cairo-museums`, `tour-alexandria`, `tour-giza-sphinx`, `tour-cairo-food`.

## Pricing

> **All prices are the source-operator price already marked up by +20%**,
> shown in **EUR, per person.** Where an original figure is given it is shown
> struck-through next to the current price. To change the markup, edit the
> values in `src/data/tours.ts` (the `price` / `was` fields).

## SEO / GEO / AEO

- Unique `<title>` + `<meta name="description">` per page; Open Graph + Twitter
  Card tags; `<link rel="canonical">`; `<html lang="en">`.
- **JSON-LD:** site-wide `TravelAgency` + `WebSite` (in `Base`); each tour page
  carries `TouristTrip` (with an `ItemList` itinerary) + `Offer` (EUR) +
  `FAQPage` + `BreadcrumbList`; main pages carry `BreadcrumbList`.
- Each tour's visible **"Good to know"** FAQ mirrors its `FAQPage` schema, with
  concise answers written for answer engines to quote.
- `public/robots.txt` + an auto sitemap via `@astrojs/sitemap`
  (`sitemap-index.xml`).

> Validate the tour schema with Google's Rich Results Test once the site is
> live (or by pasting a built `dist/tour-*.html` file's JSON-LD).

## Accessibility & performance

- Semantic HTML, real `alt`/labels, keyboard navigation, visible focus rings,
  AA contrast, and `prefers-reduced-motion` fully respected (starfield, tilt
  and scroll-reveal all disable).
- Minimal inline JS, lazy/zero-layout-shift placeholders, fluid `clamp()` type,
  mobile-first layout with a working hamburger menu.

## Placeholders — replace before / soon after launch

All photography is currently a styled gradient placeholder labelled **"Image"**.
The following still need **real values / assets**:

| What | Where |
| --- | --- |
| **Live domain** | `PUBLIC_SITE_URL` in `.env` (read by both `astro.config.mjs` and `src/config/site.ts`); fallback `https://kemetvoyages.com` |
| **WhatsApp number** | `PUBLIC_WHATSAPP` in `.env`, or the fallback in `src/config/site.ts` (international format, digits only) |
| **Contact email / phone** | `PUBLIC_CONTACT_EMAIL` / `PUBLIC_CONTACT_PHONE` in `.env`, or fallbacks in `src/config/site.ts` |
| **Photography** | drop real images into `public/` (or `src/assets/`) and replace the `<Placeholder>` blocks (add descriptive `alt`, `width`/`height`, `loading="lazy"`) |
| **OG share image** | `public/og.jpg` — **1200×630** (referenced by every page's Open Graph / Twitter tags) |

After setting `PUBLIC_SITE_URL`, re-run `npm run build` so canonical URLs, OG
URLs, the sitemap and JSON-LD pick up the real domain.
# kemet
