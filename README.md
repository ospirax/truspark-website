# TruSpark website

Single-page marketing site. React, Vite and Tailwind CSS.

## Running it

```bash
npm install
npm run dev      # http://localhost:5180, also on your LAN IP for phone testing
npm run build    # static files into dist/
npm run preview  # serve dist/ locally
```

## Layout

```
index.html         title, meta and Open Graph tags, font <link>
src/
  main.jsx         mounts React onto #root
  App.jsx          section order
  index.css        colour tokens and base styles
  components/      one file per section
  lib/site.js      all copy, contact details and image list
public/photos/     the photography
```

All content lives in `src/lib/site.js` — copy changes should not touch a
component. Contact details are at the top of that file; if the phone number
changes, update both `phoneDisplay` (shown) and `phoneHref` (dialled).

`@/...` imports resolve to `src/`, aliased in `vite.config.js`.

## Deploying

`npm run build` writes `dist/`, a plain folder of static files that needs no
Node runtime. Upload its contents to the web root, or point a host's build
command at `npm run build` and its publish directory at `dist`.

`public/.htaccess` sets gzip and cache headers for Apache hosts. It is a hidden
file — make sure your upload tool includes it.
