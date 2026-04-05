# Arizona House of Film — Project Context

## Stack
- **Framework**: Vite 7 + React 18 SPA, deployed to Vercel
- **Routing**: react-router-dom v6 with `StaticRouter` for SSR
- **SEO**: `react-helmet-async` for per-page meta/schema, auto-injected via `SEOHead`
- **Styling**: Tailwind CSS 3 + Radix UI primitives + Framer Motion
- **AI Chat**: Anthropic Claude API (`claude-sonnet-4-20250514`) via `api/chat.js`
- **Email**: Resend API via `api/contact.js` and `api/chat.js` (lead handler)
- **Analytics**: Vercel Analytics + Speed Insights + GTM dataLayer

## Prerendering
- **Method**: `scripts/prerender.js` — Vite SSR + `renderToString`, no Puppeteer
- **Trigger**: `"postbuild": "node scripts/prerender.js"` in package.json
- **Result**: 318 routes prerendered (~50KB each vs 6KB SPA shell)
- **Key fix**: Load `HelmetProvider` via `vite.ssrLoadModule('react-helmet-async')` inside `main()`, NOT as a top-level import — prevents module identity mismatch
- **Vite config**: `ssr: { noExternal: ['react-helmet-async', 'react-helmet'] }` required in `createServer()`

## Key Files
- `src/App.jsx` — All routes (95 explicit + 5 dynamic patterns)
- `scripts/prerender.js` — SSR prerender script (ROUTES array + PATTERN_MAP)
- `api/chat.js` — AI chat endpoint with rate limiting, CORS, bot detection, 618-SKU film search
- `api/contact.js` — Contact form endpoint
- `src/components/ChatWidget.jsx` — AI chat widget with page-context awareness
- `src/data/solyxFilms.js` — 618 Solyx film SKUs (sku, name, img, category)
- `src/data/ewfFilms.js` — EWF architectural film catalog
- `src/data/films.js` — Film category definitions with FAQs
- `src/data/brands.js` — Brand data for dynamic BrandPage
- `src/data/cities.js` / `citiesData.js` — 100+ Arizona city definitions
- `vercel.json` — 70 redirects + SPA rewrite fallback + security headers

## Page Counts
- **Total prerendered**: 318
- **Sitemap URLs**: 336 (across 7 sitemap files)
- **Page JSX files**: 107 (47 root + 27 locations + 18 informational + 6 solutions + 7 brands + 2 films)
- **Components**: ~33 (16 top-level + 5 contact + 2 SEO + 10 ui)
- **Brand pages**: 35 (7 dedicated + 28 dynamic)
- **Service area pages**: 100+ (dynamic via CityPage)
- **Film SKUs**: 618 Solyx + EWF catalog

## API Security (api/chat.js)
- IP rate limiting: 20 req/IP/hour
- CORS: arizonahouseoffilm.com only (+ localhost in dev)
- Payload validation: 10KB max
- Bot detection: 8 prompt-injection regex patterns + honeypot field
- Spend protection: messages >20 truncated to last 10

## Important Conventions
- All routes must be added to BOTH `App.jsx` AND `scripts/prerender.js` (ROUTES + PATTERN_MAP)
- Film category slugs in solyxFilms.js differ from route slugs — use `categoryRoutes` map in chat.js
- Node ESM: use `react-router-dom/server.js` (needs `.js` extension) for SSR
- Never expose API keys in client code — all secrets are server-side `process.env` only
- Build must pass 318/318 prerender before pushing

## Open Items (as of April 4, 2026)
- `/residential-window-tinting-phoenix` now internally linked from Home, Residential, and WindowFilmPhoenix — verify GSC pickup
- Solar Gard dedicated brand page added at `/brands/solar-gard` — monitor indexing
- 3 new blog posts targeting GSC query gaps: SRP rebate 2026, window tinting cost Phoenix, best film for Arizona heat 2026
- Location pages (Chandler, Gilbert, Glendale, Mesa, Peoria, Queen Creek, Tempe) had stale rating data (4.4/100+ reviews) — corrected to 4.6/21 reviews
- No "17 reviews" instances found — all review counts now consistent at 21
- `/ai-window-film-estimator` added — dedicated SEO page for AI estimator with auto-open chat, FAQPage + Service schema, sample estimates — monitor indexing + conversion
- Last updated: April 4, 2026
