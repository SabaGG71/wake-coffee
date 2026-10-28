# Wake Mobile Café

Catering site for Wake Mobile Café, the coffee truck and carts from Wake Coffee & Kitchen (Wall Township, NJ). Built by LocalEyes in the design language of Adam's Wake and Wavy's site drafts (10.13.26).

Stack: Next.js 16 (App Router, Turbopack), TypeScript, Tailwind CSS 4, shadcn/ui.

## Run it

```bash
npm install --registry=https://registry.npmjs.org
npm run dev
```

Open http://localhost:3000. The quote form is the client's FlashQuotes form (`src/components/home/flash-quotes.tsx`). FlashQuotes' embed script breaks on a `localhost` hostname (it points the iframe at the current origin), so on localhost the component renders the form's iframe directly; everywhere else the official script runs.

## Where things live

- `src/content/site.ts`: every phone number, link, social handle and the FlashQuotes form id. Nothing else should hard-code contact details.
- `src/content/home.ts`: homepage copy, lists and which photo goes where.
- `src/components/home/*`: one file per homepage section.
- `src/app/globals.css`: brand colours (sampled from Adam's designs and the brand guide) and shared utilities (`shell`, `eyebrow`, `display`, `hard-shadow`).

## Photos

- `public/photos/`: web versions (upright, max 2400px, WebP q80). Reference them by file name without the extension, e.g. `<Photo name="wake-iced-latte" … />`. A missing file shows a labelled placeholder instead of breaking.
- `media/originals/`: the full-size files as the client sent them. Git-ignored. Many were sideways or upside down (orientation data was lost on export), so do not copy them straight into `public`.
- `public/brand/`: mascot, WAKE wordmark, and the Mobile Café badge cut to transparent in light teal, brand teal and white.

## Map

`src/components/home/service-map.tsx` uses Leaflet with OpenStreetMap tiles: no API key, attribution required. (CARTO's basemaps now stamp "API KEY REQUIRED" on every tile.) The tiles are muted to warm grey in `globals.css`. Towns and coordinates live in `src/content/area.ts`.

## SEO

- H1 and title: "Coffee catering in Monmouth & Ocean County, NJ".
- JSON-LD (`src/components/json-ld.tsx`): LocalBusiness with areaServed, plus FAQPage built from `src/content/faq.ts`.
- FAQ answers stay in the HTML (native `<details>`), so search engines read them.
- Social image: `src/app/opengraph-image.jpg`.

## Still open

- Set `site.url` once the domain is known: canonical, OG image and JSON-LD switch to absolute URLs, and a sitemap/robots can be added.
- Adam to confirm the towns beyond the five on wakeck.com (`named: false` in `src/content/area.ts`).

- Production domain and DNS.
- Email for leads, if any besides FlashQuotes.
- Food photos for the "Coffee, plus a real menu" section.
- Whether the mobile café has its own Facebook page.
- Adam's sign-off on the draft lines in `src/content/home.ts` (event descriptions, step copy).
