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
- **Trigger**: `"postbuild": "node scripts/prerender.js && node scripts/generate-sitemaps.js"` in package.json — `generate-sitemaps.js` runs automatically on every build
- **Sitemap generation**: `scripts/generate-sitemaps.js` dynamically writes `public/sitemap-films.xml` (and `dist/sitemap-films.xml`) with all 618 Solyx SKU URLs + 8 category hubs (626 total) — never hand-edit sitemap-films.xml
- **Result**: 982 routes prerendered (~50KB each vs 6KB SPA shell) — includes all 618 Solyx SKU pages under `/films/:categorySlug/:productSlug` and all 8 canonical film category hubs at `/films/:categorySlug`
- **Key fix**: Load `HelmetProvider` via `vite.ssrLoadModule('react-helmet-async')` inside `main()`, NOT as a top-level import — prevents module identity mismatch
- **Vite config**: `ssr: { noExternal: ['react-helmet-async', 'react-helmet'] }` required in `createServer()`
- **SKU routes**: `scripts/prerender.js` imports `solyxProducts` + `solyxToFilmsCategory` from `src/data/solyxFilms.js` and spreads generated SKU URLs into `ROUTES` — never hand-list SKUs
- **SPA fallback**: `vercel.json` has `"rewrites": [{ "source": "/((?!api/).*)", "destination": "/index.html" }]` as a safety net for any route that escapes prerender

## Key Files
- `src/App.jsx` — All routes (95 explicit + 5 dynamic patterns)
- `scripts/prerender.js` — SSR prerender script (ROUTES array + PATTERN_MAP)
- `api/chat.js` — AI chat endpoint with rate limiting, CORS, bot detection, 618-SKU film search
- `api/contact.js` — Contact form endpoint
- `src/components/ChatWidget.jsx` — AI chat widget with page-context awareness
- `src/data/solyxFilms.js` — 618 Solyx film SKUs + `solyxToFilmsCategory` map. **Single source of truth** for category→URL mapping; imported by FilmsHub.jsx and scripts/prerender.js — never duplicate this map.
- `src/data/ewfFilms.js` — EWF architectural film catalog
- `src/data/nexfilFilms.js` — Nexfil USA architectural catalog (7 categories, ~38 SKUs: OnyVa IR90, Lux IR80, Centurion/HP Centurion carbon, Solar Bronze, Elegance/Prestigious/Twilight sputter, Silver Reflective, Safety 2-12mil, Anti-Graffiti 4mil, Decorative). Imported by `NexfilPage.jsx`.
- `src/data/films.js` — Film category definitions with FAQs
- `src/data/brands.js` — Brand data for dynamic BrandPage
- `src/data/cities.js` / `citiesData.js` — 100+ Arizona city definitions
- `vercel.json` — 84 redirects (incl. 16 legacy SKU category 301s + 4 stale category-alias 301s) + SPA rewrite fallback + security headers

## Page Counts
- **Total prerendered**: 982
- **Sitemap URLs**: 962 (across 8 sitemap files; sitemap-films.xml = 626 dynamically generated; sitemap-countertop.xml = 11)
- **Countertop regional pages**: 11 (dynamic via CountertopProtectionPage.jsx + countertopRegions.js)
- **Ahrefs health score**: 97
- **Page JSX files**: 114 (47 root + 27 locations + 22 informational + 6 solutions + 8 brands + 2 films) — `HomePage.jsx` and `ProductDetailPage.jsx` removed as dead code on 2026-04-19
- **Blog posts**: 38 (in blogPosts.jsx)
- **Components**: ~33 (16 top-level + 5 contact + 2 SEO + 10 ui)
- **Brand pages**: 36 (8 dedicated + 28 dynamic)
- **Service area pages**: 100+ (dynamic via CityPage)
- **Film SKUs**: 618 Solyx + EWF catalog

## Nexfil USA — Authorized Distributor
- **Brand page**: `/brands/nexfil` — dedicated page at `src/pages/brands/NexfilPage.jsx` (matches SolarGardPage pattern: Service + FAQPage schema, hero, brand story, featured products, 7-category overview, nano-ceramic + sputter performance table, safety range, decorative, pricing, FAQ, internal links).
- **Data source**: `src/data/nexfilFilms.js` — 7 categories, ~38 SKUs. Headline SKUs: OnyVa IR90 (90% IR, 5 VLT levels), Lux IR80 (80% IR, 4 VLT levels), Solar Bronze 20% (83.5% TSER).
- **brands.js entry**: present with `relatedFilms`, `specs`, `arizonaNote`, `bestFor`, `filmSeries`, `faqs` — matches existing shape so `/brands/:slug` dynamic page is compatible even without the explicit route.
- **Chat**: `api/chat.js` SYSTEM_PROMPT lists Nexfil under ORDER-IN (1-2 week lead from Gardena CA) with OnyVa/Lux/Solar Bronze/Elegance/Safety/Decorative coverage.
- **Wired into**: `App.jsx` (explicit `<Route path="/brands/nexfil">` before `:slug` catch-all), `scripts/prerender.js` (ROUTES + PATTERN_MAP), `public/sitemap-brands.xml` (priority 0.8).

## Countertop National Expansion (Phase 1 — 2026-06-03)
- **Template**: src/pages/CountertopProtectionPage.jsx (data-driven, follows CityPage pattern)
- **Data source**: src/data/countertopRegions.js — 12 region objects (11 live + mexico held pending cross-border shipping confirmation)
- **Route**: /countertop-protection-film/:regionSlug (slash structure required for SSR — see Important Conventions)
- **Live regions**: southeast-us, california (NorCal), northeast-us, midwest, utah, gulf-coast-texas-florida, chicago-illinois, las-vegas-nevada, southern-california, colorado, oregon-washington
- **Held**: mexico — filtered from ROUTES, sitemap, and nationwide grid via .filter(r => r.slug !== 'mexico'). Re-enable by removing filter in 3 files (prerender.js, generate-sitemaps.js, CountertopProtectionFilmNationwide.jsx)
- **Sitemap**: sitemap-countertop.xml auto-generated by generate-sitemaps.js — never hand-edit
- **Hub**: /countertop-protection-film-nationwide (hardcoded, hyphenated — NOT part of dynamic set) links to all 11 regions
- **AZ page**: /countertop-protection-film-arizona (hardcoded) = supply + installation. All regional pages = supply/drop-ship only.
- **Fulfillment**: Arizona installs via AHOF (ROC #314088); partnership with Surface Savers (Glendale) for AZ countertop install
- **Strategy**: National category domination, 1-2 year run. Phase 2 = surface-type axis (quartz/marble/granite pages). Phase 3 = metro saturation.

## API Security (api/chat.js)
- IP rate limiting: 20 req/IP/hour
- CORS: arizonahouseoffilm.com only (+ localhost in dev)
- Payload validation: 10KB max
- Bot detection: 8 prompt-injection regex patterns + honeypot field
- Spend protection: messages >20 truncated to last 10

## Important Conventions
- All routes must be added to BOTH `App.jsx` AND `scripts/prerender.js` (ROUTES + PATTERN_MAP)
- **Dynamic route params require slashes, not hyphens** (learned 2026-06-03): Any data-driven page using useParams() MUST use /category/:slug structure, NEVER /category-:slug. React Router SSR splits on slashes to match segments — a hyphenated single-segment URL cannot bind a :param. Failure mode is SILENT: prerender renders a 7.5KB SPA shell instead of full SSR HTML, no build error, ✓ shows in prerender log, but Google receives empty content with noindex. Working pattern: ROUTES use explicit slugs (/countertop-protection-film/southeast-us), PATTERN_MAP + App.jsx Route use the wildcard (/countertop-protection-film/:regionSlug).
- **Hero images MUST include width, height, AND style={{aspectRatio}}** — missing dimensions caused site-wide CLS 0.72 (2026-06-03). Use Home.jsx line 107 as the canonical hero pattern: `<img src={HERO_IMAGE} width="1600" height="1066" fetchpriority="high" loading="eager" style={{ aspectRatio: "1600/1066" }} />`. For CSS backgroundImage heroes, add aspectRatio to the container style. FloatingContactButton mobile CLS mitigated via body { padding-bottom: 60px } in index.html.
- **Logo**: /public/AHOF-logo.webp (240×96px, 3.1KB). Replaced /AHOF Logo.png (500×500px, 129KB) on 2026-06-04. Never revert to PNG. Used in Header.jsx (desktop + mobile) and Footer.jsx.
- Film category slugs in solyxFilms.js differ from route slugs — use `categoryRoutes` map in chat.js
- Node ESM: use `react-router-dom/server.js` (needs `.js` extension) for SSR
- Never expose API keys in client code — all secrets are server-side `process.env` only
- Build must pass 982/982 prerender before pushing

## Open Items (as of April 4, 2026)
- `/residential-window-tinting-phoenix` now internally linked from Home, Residential, and WindowFilmPhoenix — verify GSC pickup
- Solar Gard dedicated brand page added at `/brands/solar-gard` — monitor indexing
- 3 new blog posts targeting GSC query gaps: SRP rebate 2026, window tinting cost Phoenix, best film for Arizona heat 2026
- Location pages (Chandler, Gilbert, Glendale, Mesa, Peoria, Queen Creek, Tempe) had stale rating data (4.4/100+ reviews) — corrected to 4.6/21 reviews
- No "17 reviews" instances found — all review counts now consistent at 21
- `/ai-window-film-estimator` added — dedicated SEO page for AI estimator with auto-open chat, FAQPage + Service schema, sample estimates — monitor indexing + conversion
- `/window-film-faq` added — 33 FAQs across 8 sections targeting GSC featured snippets, FAQPage schema, 25+ internal links — monitor indexing + snippet acquisition
- `/day-and-night-privacy-window-film` added — targets trending day/night privacy queries (+120%), 5 FAQs, 4 solution options — monitor indexing
- `/electric-privacy-film-arizona` added — targets switchable smart glass queries (+70%), PDLC technology, 5 FAQs — monitor indexing
- `/privacy-film-sliding-glass-door` added — targets sliding door film queries (+8%), 6 film options, 5 FAQs — monitor indexing
- `/day-and-night-privacy-window-film` expanded — 3 new FAQs targeting GSC query variants (reflective at night, best two-way film, how day/night film works); 2 requested variants were already present verbatim so they were not duplicated. Added explicit internal links to `/films/frosted-etched-films` and `/electric-privacy-film-arizona`.
- `/solyx-bird-safety-film` added — dedicated SEO page for Solyx bird-safe collection (7 SKUs: BSFD, BSFV, BSFH, BSFT, BSFAC-01, BSFAC-02, SC672), FAQPage + Service schema, FLAP/ABC 2×4-rule references, LEED Pilot Credit 55 context, commercial + residential applications — monitor indexing for "solyx bird safety film" and "bird safety window film arizona"
- `/privacy-film-sliding-glass-door` strengthened (existed) — retitled to target "day & night" cluster, H1 rewritten to cover privacy + security + solar control, added French-door vs sliding-door comparison section and shatterproof-patio-door callout; targets 6 GSC query variants incl. "shatterproof film for patio doors" and "tint sliding glass doors"
- `/sidelight-window-film` strengthened (existed) — retitled and H1 rewritten to cover decorative/one-way/stained-glass styles, added 4-film-options section, minimum-job callout linking to AI estimator; sitemap priority bumped 0.7 → 0.8
- `/window-film-distributor-phoenix` added — new distributor/wholesale page for 6 authorized lines (Nexfil USA, Solyx, Madico, MaxPro, SunTek, XPEL), FAQPage + Organization/OfferCatalog schema, contractor drop-ship and bulk pricing, 6 buyer segments (GCs, architects, interior designers, facility managers, sign shops, glass shops). Schema later revised to single Service + LocalBusiness to clear GSC Product-without-offers warning.
- Nexfil USA full presence added — dedicated `/brands/nexfil` page (NexfilPage.jsx), `src/data/nexfilFilms.js` catalog (7 categories, ~38 SKUs), brands.js entry, and api/chat.js ORDER-IN inventory listing. Monitor indexing for "nexfil", "nexfil usa", "onyva ir90", and "lux ir80".
- Audit fixes 2026-04-19: (1) `/privacy-policy` added to prerender ROUTES (was served by SPA fallback only). (2) Backfilled 41 missing `<lastmod>` entries — 4 in sitemap-core, 37 long-tail cities in sitemap-service-areas. (3) `/brands/panorama` moved from sitemap-core to sitemap-brands. (4) LLumar and SunTek entries added to `brands.js` so the `/brands` hub iteration now covers all 8 dedicated brand pages. (5) Deleted dead-code orphans `src/pages/HomePage.jsx` (legacy Hostinger redirect) and `src/pages/ProductDetailPage.jsx` (old e-commerce UI).
- Last updated: June 4, 2026
- Last commit: 35baa9545 (logo PNG→WebP, 97.6% reduction)

## Performance Baselines (as of 2026-06-04)
- PageSpeed Desktop: 92 (CLS: 0.002, LCP: 1.4s, FCP: 0.7s)
- PageSpeed Mobile: 67 → pending logo fix measurement
- CLS history: 0.72 (Jun 1) → 0.431 mobile/0.729 desktop (after hero fix) → 0.002/0 (after SSR header fix Jun 4)
- Root causes fixed: hero image dimensions (mobile), header-reserve SSR mismatch (desktop), logo PNG (LCP)
- Vercel Speed Insights RES: 75 (field data, updating)
- Next target: Mobile Performance 75+, LCP <4s
