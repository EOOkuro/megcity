# MegCity Foundation

Leagues, clubs and incubation. Vite + React. Deploys as its own Vercel project.

## Run locally
```bash
npm install
npm run dev
npm run build
```

## Deploy
Import this repo in Vercel (framework: Vite). No settings needed. Optional environment variables:
- `VITE_WP_CONTENT_URL` — image host. Default `https://tekkerz.co/wp-content`.
- `VITE_TRAINING_URL` — address of the MegCity Futbol Training site. Adds a link in the footer.
- `VITE_SITE_BRAND` — overrides the site name.

## Where things live
- `src/data/content.js` — all the text: mission, leagues, incubation places, clubs, partners, FedOs link.
- `src/data/menu.js` — navigation.
- `src/data/pages.json` — the older MegCity league pages exported from WordPress.
