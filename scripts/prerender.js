/**
 * scripts/prerender.js
 * Vite SSR + renderToString static prerenderer.
 * No puppeteer. No Chrome. No new packages.
 * Works on Windows (local) and Linux (Vercel).
 */

import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server.js'
import { Routes, Route } from 'react-router-dom'
// HelmetProvider loaded via ssrLoadModule inside main() to share the same
// module instance as page components (prevents context identity mismatch)

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root     = path.resolve(__dirname, '..')
const distDir  = path.join(root, 'dist')

const ROUTES = [
  '/', '/commercial-window-tinting', '/residential-window-tinting',
  '/decorative-window-films', '/safety', '/energy-saving-window-films',
  '/solutions', '/gallery', '/service-areas', '/films', '/brands',
  '/contact', '/book-now', '/careers', '/industries', '/blog',
  '/films/security', '/films/casper-cloaking', '/brands/flexfilm',
  '/window-tinting-phoenix', '/window-tinting-chandler', '/window-tinting-gilbert',
  '/window-tinting-mesa', '/window-tinting-tempe', '/window-tinting-glendale',
  '/window-tinting-peoria', '/window-tinting-queen-creek',
  '/commercial-window-tinting-phoenix', '/commercial-window-tinting-scottsdale',
  '/residential-window-tinting-scottsdale', '/residential-window-tinting-phoenix',
  '/commercial-window-film-phoenix', '/anti-graffiti', '/anti-graffiti-film-phoenix',
  '/decorative-window-film-phoenix', '/solar-window-film-phoenix',
  '/security-window-film-phoenix', '/one-way-mirror-window-film',
  '/bathroom-privacy-window-film', '/office-privacy-window-film',
  '/storefront-window-film', '/entryway-window-film', '/sidelight-window-film',
  '/commercial-window-tinting/energy-cost-reduction',
  '/commercial-window-tinting/enhanced-privacy',
  '/commercial-window-tinting/anti-graffiti',
  '/residential-window-tinting/uv-protection',
  '/residential-window-tinting/energy-savings',
  '/residential-window-tinting/enhanced-privacy',
  '/residential-window-tinting/temperature-control',
  '/residential-window-tinting/glare-reduction',
  '/residential-window-tinting/increased-comfort',
  '/decorative-window-films/enhanced-privacy',
  '/decorative-window-films/aesthetic-appeal',
  '/decorative-window-films/design-flexibility',
  '/decorative-window-films/easy-maintenance',
  '/safety/break-in-deterrent', '/safety/accident-protection',
  '/safety/storm-protection', '/safety/clear-visibility',
  '/safety/ground-floor-windows', '/safety/sliding-glass-doors',
  '/safety/french-doors', '/safety/basement-windows',
  '/safety/storefronts', '/safety/office-buildings',
  '/safety/schools', '/safety/government-facilities',
  '/industries/office-buildings', '/industries/retail-stores',
  '/industries/restaurants', '/industries/medical-facilities',
  '/industries/educational-institutions', '/industries/government-buildings',
  '/industries/hotels-hospitality', '/industries/warehouses',
  '/blog/ultimate-guide-to-window-tinting-benefits-in-arizona',
  '/blog/slashing-your-energy-bills-with-window-film',
  '/blog/decorative-vs-privacy-film-which-is-right-for-you',
  '/blog/top-5-mistakes-to-avoid-when-tinting-your-home',
  '/blog/commercial-window-film-case-study-fedex-yuma',
  '/blog/car-vs-home-window-tinting-whats-the-difference',
  '/blog/faq-can-window-film-really-lower-my-ac-bill',
  '/blog/a-business-owners-guide-to-security-window-films',
  '/blog/why-phoenix-residents-swear-by-window-tinting',
  '/blog/the-secret-to-scottsdale-luxury-high-end-window-films',
  '/brands/3m', '/brands/eastman', '/brands/solar-gard', '/brands/avery-dennison',
  '/brands/xpel', '/brands/madico', '/brands/huper-optik', '/brands/johnson',
  '/brands/geoshield', '/brands/rayno', '/brands/global', '/brands/terminax',
  '/brands/motoshield', '/brands/gila', '/brands/artscape', '/brands/enerlogic',
  '/brands/concord', '/brands/bdf', '/brands/rockrose', '/brands/vkool',
  '/brands/decorative-films-llc', '/brands/smart-glass', '/brands/armor-glass',
  '/brands/hanitatek', '/brands/lintec', '/brands/garware', '/brands/reflek',
  '/brands/contra-vision', '/brands/vsmile', '/brands/solyx', '/brands/simglas',
  '/films/casper-films/casper-cloaking', '/films/casper-films/casper-graphic',
  '/films/colored-films/color-polyester', '/films/colored-films/color-vinyl',
  '/films/colored-films/color-translucent', '/films/colored-films/color-dichroic',
  '/films/colored-films/color-patterned', '/films/elegant-textured-films/cut-glass',
  '/films/elegant-textured-films/textured', '/films/elegant-textured-films/dichroic',
  '/films/exterior-films/exterior-frosted', '/films/exterior-films/exterior-opaque',
  '/films/exterior-films/exterior-patterned', '/films/exterior-films/exterior-solar',
  '/films/frosted-etched-films/simple-frosted', '/films/frosted-etched-films/frosted-colors',
  '/films/frosted-etched-films/opaque', '/films/frosted-etched-films/light-diffusing',
  '/films/frosted-etched-films/frosted-patterns',
  '/films/glasslike-distortion-films/sgc-crystal',
  '/films/glasslike-distortion-films/sgd-dusted',
  '/films/glasslike-distortion-films/sgv-frosted',
  '/films/glasslike-distortion-films/cleaner-polish',
  '/films/gradient-films/gradient-24', '/films/gradient-films/gradient-60',
  '/films/gradient-films/gradient-71',
  '/films/patterned-privacy-films/privacy-natural',
  '/films/patterned-privacy-films/privacy-stripes',
  '/films/patterned-privacy-films/privacy-squares',
  '/films/patterned-privacy-films/privacy-dots',
  '/films/patterned-privacy-films/privacy-rice-paper',
  '/films/specialty-films/anti-fog', '/films/specialty-films/anti-graffiti',
  '/films/specialty-films/ashley-cecil', '/films/specialty-films/bird-safety',
  '/films/specialty-films/rear-projection', '/films/specialty-films/writable',
  '/films/specialty-films/one-way', '/films/stained-glass-films/stained-static',
  '/films/stained-glass-films/stained-adhesive', '/films/squid-window-textile/squid',
  '/service-areas/phoenix', '/service-areas/scottsdale', '/service-areas/mesa',
  '/service-areas/chandler', '/service-areas/gilbert', '/service-areas/glendale',
  '/service-areas/tempe', '/service-areas/peoria', '/service-areas/surprise',
  '/service-areas/goodyear', '/service-areas/tucson', '/service-areas/flagstaff',
  '/service-areas/prescott', '/service-areas/yuma', '/service-areas/avondale',
  '/service-areas/buckeye', '/service-areas/queen-creek', '/service-areas/san-tan-valley',
  '/service-areas/fountain-hills', '/service-areas/paradise-valley',
  '/service-areas/cave-creek', '/service-areas/anthem', '/service-areas/laveen',
  '/service-areas/ahwatukee', '/service-areas/prescott-valley',
  '/service-areas/maricopa', '/service-areas/apache-junction',
  '/service-areas/casa-grande', '/service-areas/el-mirage', '/service-areas/florence',
  '/service-areas/gold-canyon', '/service-areas/litchfield-park',
  '/service-areas/new-river', '/service-areas/rio-verde', '/service-areas/sun-city',
  '/service-areas/sun-city-west', '/service-areas/sun-lakes', '/service-areas/tolleson',
  '/service-areas/youngtown', '/service-areas/sedona', '/service-areas/cottonwood',
  '/service-areas/camp-verde', '/service-areas/clarkdale', '/service-areas/jerome',
  '/service-areas/lake-havasu-city', '/service-areas/kingman',
  '/service-areas/bullhead-city', '/service-areas/payson', '/service-areas/globe',
  '/service-areas/miami', '/service-areas/show-low', '/service-areas/pinetop-lakeside',
  '/service-areas/winslow', '/service-areas/holbrook', '/service-areas/st-johns',
  '/service-areas/eagar', '/service-areas/springerville', '/service-areas/safford',
  '/service-areas/thatcher', '/service-areas/willcox', '/service-areas/benson',
  '/service-areas/sierra-vista', '/service-areas/bisbee', '/service-areas/douglas',
  '/service-areas/nogales', '/service-areas/green-valley', '/service-areas/sahuarita',
  '/service-areas/vail', '/service-areas/oro-valley', '/service-areas/marana',
  '/service-areas/catalina-foothills', '/service-areas/picture-rocks',
  '/service-areas/three-points', '/service-areas/arivaca', '/service-areas/tubac',
  '/service-areas/patagonia', '/service-areas/sonoita', '/service-areas/elgin',
  '/service-areas/wickenburg', '/service-areas/congress', '/service-areas/yarnell',
  '/service-areas/black-canyon-city', '/service-areas/dewey-humboldt',
  '/service-areas/mayer', '/service-areas/chino-valley', '/service-areas/paulden',
  '/service-areas/ash-fork', '/service-areas/williams',
  '/service-areas/grand-canyon-village', '/service-areas/tusayan',
  '/service-areas/page', '/service-areas/kayenta', '/service-areas/tuba-city',
  '/service-areas/window-rock', '/service-areas/chinle', '/service-areas/ganado',
  '/service-areas/parker', '/service-areas/quartzsite', '/service-areas/wellton',
  '/service-areas/somerton', '/service-areas/san-luis', '/service-areas/gadsden',
  '/service-areas/superior', '/service-areas/kearny', '/service-areas/hayden',
  '/service-areas/winkelman', '/service-areas/coolidge', '/service-areas/eloy',
  '/service-areas/arizona-city',
  '/window-tinting-tolleson', '/window-tinting-fountain-hills',
  '/window-tinting-avondale', '/high-rise-commercial-window-tinting-phoenix',
  '/countertop-protection-film-arizona',
  '/commercial-window-tinting-mesa', '/commercial-window-tinting-chandler',
  '/commercial-window-tinting-tempe', '/commercial-window-tinting-gilbert',
  '/residential-window-tinting-mesa', '/residential-window-tinting-chandler',
  '/residential-window-tinting-gilbert', '/residential-window-tinting-tempe',
  '/security-window-film-scottsdale', '/decorative-window-film-scottsdale',
  '/solar-window-film-scottsdale',
  '/commercial-window-tinting-peoria', '/commercial-window-tinting-glendale',
  '/commercial-window-tinting-queen-creek',
]

const PATTERN_MAP = [
  ['/films/security',                       '/src/pages/films/SecurityFilmPage.jsx'],
  ['/films/casper-cloaking',                '/src/pages/films/CasperCloakingPage.jsx'],
  ['/films/:categorySlug/:productSlug',     '/src/pages/FilmProductPage.jsx'],
  ['/films/:categorySlug',                  '/src/pages/FilmCategoryPage.jsx'],
  ['/films',                                '/src/pages/FilmsHub.jsx'],
  ['/brands/flexfilm',                      '/src/pages/brands/FlexfilmPage.jsx'],
  ['/brands/:slug',                         '/src/pages/BrandPage.jsx'],
  ['/brands',                               '/src/pages/BrandsHub.jsx'],
  ['/service-areas/:slug',                  '/src/pages/CityPage.jsx'],
  ['/service-areas',                        '/src/pages/ServiceAreas.jsx'],
  ['/industries/:slug',                     '/src/pages/IndustriesPage.jsx'],
  ['/industries',                           '/src/pages/Industries.jsx'],
  ['/blog/:slug',                           '/src/pages/BlogPost.jsx'],
  ['/blog',                                 '/src/pages/Blog.jsx'],
  ['/',                                     '/src/pages/Home.jsx'],
  ['/commercial-window-tinting',            '/src/pages/Commercial.jsx'],
  ['/commercial-window-tinting-scottsdale', '/src/pages/ScottsdaleCommercial.jsx'],
  ['/residential-window-tinting-scottsdale','/src/pages/ScottsdaleResidential.jsx'],
  ['/commercial-window-film-phoenix',       '/src/pages/CommercialPhoenix.jsx'],
  ['/commercial-window-tinting-phoenix',    '/src/pages/CommercialPhoenix.jsx'],
  ['/decorative-window-film-phoenix',       '/src/pages/DecorativePhoenix.jsx'],
  ['/residential-window-tinting-phoenix',   '/src/pages/ResidentialPhoenix.jsx'],
  ['/solar-window-film-phoenix',            '/src/pages/SolarPhoenix.jsx'],
  ['/residential-window-tinting',           '/src/pages/Residential.jsx'],
  ['/decorative-window-films',              '/src/pages/Decorative.jsx'],
  ['/safety',                               '/src/pages/Safety.jsx'],
  ['/energy-saving-window-films',           '/src/pages/EnergySaving.jsx'],
  ['/anti-graffiti',                        '/src/pages/AntiGraffiti.jsx'],
  ['/security-window-film-phoenix',         '/src/pages/SecurityPhoenix.jsx'],
  ['/anti-graffiti-film-phoenix',           '/src/pages/AntiGraffitiPhoenix.jsx'],
  ['/window-tinting-phoenix',               '/src/pages/WindowTintingPhoenix.jsx'],
  ['/solutions',                            '/src/pages/Solutions.jsx'],
  ['/bathroom-privacy-window-film',         '/src/pages/solutions/BathroomPrivacyFilm.jsx'],
  ['/office-privacy-window-film',           '/src/pages/solutions/OfficePrivacyFilm.jsx'],
  ['/storefront-window-film',               '/src/pages/solutions/StorefrontWindowFilm.jsx'],
  ['/entryway-window-film',                 '/src/pages/solutions/EntrywaySidelightFilm.jsx'],
  ['/sidelight-window-film',                '/src/pages/solutions/SidelightWindowFilm.jsx'],
  ['/one-way-mirror-window-film',           '/src/pages/solutions/OneWayMirrorFilm.jsx'],
  ['/window-tinting-chandler',              '/src/pages/locations/WindowTintingChandler.jsx'],
  ['/window-tinting-gilbert',               '/src/pages/locations/WindowTintingGilbert.jsx'],
  ['/window-tinting-peoria',                '/src/pages/locations/WindowTintingPeoria.jsx'],
  ['/window-tinting-queen-creek',           '/src/pages/locations/WindowTintingQueenCreek.jsx'],
  ['/window-tinting-mesa',                  '/src/pages/locations/WindowTintingMesa.jsx'],
  ['/window-tinting-tempe',                 '/src/pages/locations/WindowTintingTempe.jsx'],
  ['/window-tinting-glendale',              '/src/pages/locations/WindowTintingGlendale.jsx'],
  ['/window-tinting-tolleson',              '/src/pages/locations/WindowTintingTolleson.jsx'],
  ['/window-tinting-fountain-hills',        '/src/pages/locations/WindowTintingFountainHills.jsx'],
  ['/window-tinting-avondale',              '/src/pages/locations/WindowTintingAvondale.jsx'],
  ['/high-rise-commercial-window-tinting-phoenix', '/src/pages/informational/HighRiseCommercialWindowTintingPhoenix.jsx'],
  ['/countertop-protection-film-arizona',   '/src/pages/informational/CountertopProtectionFilmArizona.jsx'],
  ['/commercial-window-tinting-mesa',      '/src/pages/locations/CommercialWindowTintingMesa.jsx'],
  ['/commercial-window-tinting-chandler',  '/src/pages/locations/CommercialWindowTintingChandler.jsx'],
  ['/commercial-window-tinting-tempe',     '/src/pages/locations/CommercialWindowTintingTempe.jsx'],
  ['/commercial-window-tinting-gilbert',   '/src/pages/locations/CommercialWindowTintingGilbert.jsx'],
  ['/residential-window-tinting-mesa',    '/src/pages/locations/ResidentialWindowTintingMesa.jsx'],
  ['/residential-window-tinting-chandler','/src/pages/locations/ResidentialWindowTintingChandler.jsx'],
  ['/residential-window-tinting-gilbert', '/src/pages/locations/ResidentialWindowTintingGilbert.jsx'],
  ['/residential-window-tinting-tempe',   '/src/pages/locations/ResidentialWindowTintingTempe.jsx'],
  ['/security-window-film-scottsdale',   '/src/pages/locations/SecurityWindowFilmScottsdale.jsx'],
  ['/decorative-window-film-scottsdale', '/src/pages/locations/DecorativeWindowFilmScottsdale.jsx'],
  ['/solar-window-film-scottsdale',      '/src/pages/locations/SolarWindowFilmScottsdale.jsx'],
  ['/commercial-window-tinting-peoria',      '/src/pages/locations/CommercialWindowTintingPeoria.jsx'],
  ['/commercial-window-tinting-glendale',    '/src/pages/locations/CommercialWindowTintingGlendale.jsx'],
  ['/commercial-window-tinting-queen-creek', '/src/pages/locations/CommercialWindowTintingQueenCreek.jsx'],
  ['/gallery',                              '/src/pages/Gallery.jsx'],
  ['/contact',                              '/src/pages/Contact.jsx'],
  ['/book-now',                             '/src/pages/BookNow.jsx'],
  ['/privacy-policy',                       '/src/pages/PrivacyPolicy.jsx'],
  ['/careers',                              '/src/pages/Careers.jsx'],
  ['/store',                                '/src/pages/Store.jsx'],
  ['/welcome',                              '/src/pages/Welcome.jsx'],
  ['/:category/:slug',                      '/src/pages/SupportingPage.jsx'],
]

function matchRoute(url) {
  const urlSegs = url.split('/').filter(Boolean)
  for (const [pattern, src] of PATTERN_MAP) {
    const patSegs = pattern.split('/').filter(Boolean)
    if (urlSegs.length !== patSegs.length) continue
    const ok = patSegs.every((seg, i) => seg.startsWith(':') || seg === urlSegs[i])
    if (ok) return [pattern, src]
  }
  return null
}

async function main() {
  const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

  const vite = await createServer({
    root,
    server:   { middlewareMode: true },
    appType:  'custom',
    logLevel: 'error',
    ssr: {
      noExternal: ['react-helmet-async', 'react-helmet'],
    },
  })

  // Load HelmetProvider from same Vite module system as page components
  const helmetMod = await vite.ssrLoadModule('react-helmet-async')
  const HelmetProvider = helmetMod.HelmetProvider ?? helmetMod.default?.HelmetProvider

  const moduleCache = new Map()

  async function loadComponent(src) {
    if (moduleCache.has(src)) return moduleCache.get(src)
    const mod = await vite.ssrLoadModule(src)
    moduleCache.set(src, mod.default)
    return mod.default
  }

  let ok = 0, fail = 0
  const total = ROUTES.length

  for (let i = 0; i < total; i++) {
    const route = ROUTES[i]
    const match = matchRoute(route)

    if (!match) {
      console.warn(`⚠  ${route} — no pattern match, skipped`)
      fail++
      continue
    }

    const [pattern, src] = match

    try {
      const Component = await loadComponent(src)
      const helmetContext = {}

      const appHtml = renderToString(
        React.createElement(
          HelmetProvider, { context: helmetContext },
          React.createElement(
            StaticRouter, { location: route },
            React.createElement(
              Routes, null,
              React.createElement(Route, { path: pattern, element: React.createElement(Component) })
            )
          )
        )
      )

      let html = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      )

      const { helmet } = helmetContext
      if (helmet) {
        const headTags = [
          helmet.title.toString(),
          helmet.priority.toString(),
          helmet.meta.toString(),
          helmet.link.toString(),
          helmet.script.toString(),
        ].filter(Boolean).join('\n  ')
        if (headTags.trim()) {
          html = html.replace('</head>', `  ${headTags}\n</head>`)
        }
      }

      if (route === '/') {
        fs.writeFileSync(path.join(distDir, 'index.html'), html)
      } else {
        const segments = route.split('/').filter(Boolean)
        const dir = path.join(distDir, ...segments)
        fs.mkdirSync(dir, { recursive: true })
        fs.writeFileSync(path.join(dir, 'index.html'), html)
      }

      console.log(`✓ ${route} (${i + 1}/${total})`)
      ok++
    } catch (err) {
      console.error(`✗ ${route} — ${err.message}`)
      fail++
    }
  }

  await vite.close()
  console.log(`\nDone: ${ok} prerendered, ${fail} failed of ${total}`)
  if (fail > 0) process.exit(1)
}

main().catch((err) => {
  console.error('Fatal:', err)
  process.exit(1)
})
