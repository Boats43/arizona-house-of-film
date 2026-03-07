/**
 * Custom static prerender script for Arizona House of Film.
 * Replaces react-snap which has a fatal highland stream bug with large route lists.
 * Uses Puppeteer (from react-snap's bundled install) with system Chrome.
 */
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync, copyFileSync } from 'fs';
import { join, extname } from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const puppeteer = require('puppeteer');

const DIST = join(process.cwd(), 'dist');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const PORT = 45789;
const BASE_URL = `http://localhost:${PORT}`;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const ROUTES = [
  '/',
  '/commercial-window-tinting',
  '/commercial-window-tinting-scottsdale',
  '/residential-window-tinting',
  '/decorative-window-films',
  '/safety',
  '/energy-saving-window-films',
  '/anti-graffiti',
  '/solutions',
  '/service-areas',
  '/industries',
  '/films',
  '/films/security',
  '/films/casper-cloaking',
  '/brands',
  '/brands/flexfilm',
  '/gallery',
  '/contact',
  '/book-now',
  '/privacy-policy',
  '/careers',
  '/blog',
  '/thank-you',
  '/store',
  '/welcome',
  '/service-areas/phoenix',
  '/service-areas/scottsdale',
  '/service-areas/mesa',
  '/service-areas/chandler',
  '/service-areas/gilbert',
  '/service-areas/glendale',
  '/service-areas/tempe',
  '/service-areas/peoria',
  '/service-areas/surprise',
  '/service-areas/goodyear',
  '/service-areas/tucson',
  '/service-areas/flagstaff',
  '/service-areas/prescott',
  '/service-areas/yuma',
  '/service-areas/avondale',
  '/service-areas/buckeye',
  '/service-areas/queen-creek',
  '/service-areas/san-tan-valley',
  '/service-areas/fountain-hills',
  '/service-areas/paradise-valley',
  '/service-areas/cave-creek',
  '/service-areas/anthem',
  '/service-areas/laveen',
  '/service-areas/ahwatukee',
  '/service-areas/prescott-valley',
  '/service-areas/maricopa',
  '/service-areas/apache-junction',
  '/service-areas/casa-grande',
  '/service-areas/el-mirage',
  '/service-areas/florence',
  '/service-areas/gold-canyon',
  '/service-areas/litchfield-park',
  '/service-areas/new-river',
  '/service-areas/rio-verde',
  '/service-areas/sun-city',
  '/service-areas/sun-city-west',
  '/service-areas/sun-lakes',
  '/service-areas/tolleson',
  '/service-areas/youngtown',
  '/service-areas/sedona',
  '/service-areas/cottonwood',
  '/service-areas/camp-verde',
  '/service-areas/clarkdale',
  '/service-areas/jerome',
  '/service-areas/lake-havasu-city',
  '/service-areas/kingman',
  '/service-areas/bullhead-city',
  '/service-areas/payson',
  '/service-areas/globe',
  '/service-areas/miami',
  '/service-areas/show-low',
  '/service-areas/pinetop-lakeside',
  '/service-areas/winslow',
  '/service-areas/holbrook',
  '/service-areas/st-johns',
  '/service-areas/eagar',
  '/service-areas/springerville',
  '/service-areas/safford',
  '/service-areas/thatcher',
  '/service-areas/willcox',
  '/service-areas/benson',
  '/service-areas/sierra-vista',
  '/service-areas/bisbee',
  '/service-areas/douglas',
  '/service-areas/nogales',
  '/service-areas/green-valley',
  '/service-areas/sahuarita',
  '/service-areas/vail',
  '/service-areas/oro-valley',
  '/service-areas/marana',
  '/service-areas/catalina-foothills',
  '/service-areas/picture-rocks',
  '/service-areas/three-points',
  '/service-areas/arivaca',
  '/service-areas/tubac',
  '/service-areas/patagonia',
  '/service-areas/sonoita',
  '/service-areas/elgin',
  '/service-areas/wickenburg',
  '/service-areas/congress',
  '/service-areas/yarnell',
  '/service-areas/black-canyon-city',
  '/service-areas/dewey-humboldt',
  '/service-areas/mayer',
  '/service-areas/chino-valley',
  '/service-areas/paulden',
  '/service-areas/ash-fork',
  '/service-areas/williams',
  '/service-areas/grand-canyon-village',
  '/service-areas/tusayan',
  '/service-areas/page',
  '/service-areas/kayenta',
  '/service-areas/tuba-city',
  '/service-areas/window-rock',
  '/service-areas/chinle',
  '/service-areas/ganado',
  '/service-areas/parker',
  '/service-areas/quartzsite',
  '/service-areas/wellton',
  '/service-areas/somerton',
  '/service-areas/san-luis',
  '/service-areas/gadsden',
  '/service-areas/superior',
  '/service-areas/kearny',
  '/service-areas/hayden',
  '/service-areas/winkelman',
  '/service-areas/coolidge',
  '/service-areas/eloy',
  '/service-areas/arizona-city',
  '/industries/office-buildings',
  '/industries/retail-stores',
  '/industries/restaurants',
  '/industries/medical-facilities',
  '/industries/educational-institutions',
  '/industries/government-buildings',
  '/industries/hotels-hospitality',
  '/industries/warehouses',
  '/films/casper-films',
  '/films/colored-films',
  '/films/elegant-textured-films',
  '/films/exterior-films',
  '/films/frosted-etched-films',
  '/films/glasslike-distortion-films',
  '/films/gradient-films',
  '/films/patterned-privacy-films',
  '/films/reflective-films',
  '/films/smart-spy-films',
  '/films/specialty-films',
  '/films/stained-glass-films',
  '/films/squid-window-textile',
  '/films/casper-films/casper-cloaking',
  '/films/casper-films/casper-graphic',
  '/films/colored-films/color-polyester',
  '/films/colored-films/color-vinyl',
  '/films/colored-films/color-translucent',
  '/films/colored-films/color-dichroic',
  '/films/colored-films/color-patterned',
  '/films/elegant-textured-films/cut-glass',
  '/films/elegant-textured-films/textured',
  '/films/elegant-textured-films/dichroic',
  '/films/exterior-films/exterior-frosted',
  '/films/exterior-films/exterior-opaque',
  '/films/exterior-films/exterior-patterned',
  '/films/exterior-films/exterior-solar',
  '/films/exterior-films/exterior-safety',
  '/films/frosted-etched-films/simple-frosted',
  '/films/frosted-etched-films/frosted-colors',
  '/films/frosted-etched-films/opaque',
  '/films/frosted-etched-films/light-diffusing',
  '/films/frosted-etched-films/frosted-patterns',
  '/films/glasslike-distortion-films/sgc-crystal',
  '/films/glasslike-distortion-films/sgd-dusted',
  '/films/glasslike-distortion-films/sgv-frosted',
  '/films/glasslike-distortion-films/cleaner-polish',
  '/films/gradient-films/gradient-24',
  '/films/gradient-films/gradient-60',
  '/films/gradient-films/gradient-71',
  '/films/patterned-privacy-films/privacy-natural',
  '/films/patterned-privacy-films/privacy-stripes',
  '/films/patterned-privacy-films/privacy-squares',
  '/films/patterned-privacy-films/privacy-dots',
  '/films/patterned-privacy-films/privacy-rice-paper',
  '/films/reflective-films/silver-reflective',
  '/films/smart-spy-films/smart-spy-film',
  '/films/specialty-films/anti-fog',
  '/films/specialty-films/anti-graffiti',
  '/films/specialty-films/bird-safety',
  '/films/specialty-films/rear-projection',
  '/films/specialty-films/writable',
  '/films/specialty-films/one-way',
  '/films/specialty-films/solar-films',
  '/films/specialty-films/security-films',
  '/films/specialty-films/custom-graphics',
  '/films/stained-glass-films/stained-static',
  '/films/stained-glass-films/stained-adhesive',
  '/films/squid-window-textile/squid',
  '/brands/3m',
  '/brands/eastman',
  '/brands/solar-gard',
  '/brands/avery-dennison',
  '/brands/xpel',
  '/brands/madico',
  '/brands/huper-optik',
  '/brands/johnson',
  '/brands/geoshield',
  '/brands/rayno',
  '/brands/global',
  '/brands/terminax',
  '/brands/motoshield',
  '/brands/gila',
  '/brands/artscape',
  '/brands/enerlogic',
  '/brands/concord',
  '/brands/bdf',
  '/brands/rockrose',
  '/brands/vkool',
  '/brands/decorative-films-llc',
  '/brands/smart-glass',
  '/brands/armor-glass',
  '/brands/hanitatek',
  '/brands/lintec',
  '/brands/garware',
  '/brands/reflek',
  '/brands/contra-vision',
  '/brands/vsmile',
  '/brands/flexfilm',
  '/brands/solyx',
  '/brands/simglas',
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
];

// Minimal static file server with SPA fallback
function startServer(spaShell) {
  return new Promise((resolve, reject) => {
    const server = createServer((req, res) => {
      const urlPath = decodeURIComponent(req.url.split('?')[0]);
      let filePath = urlPath === '/' ? DIST : join(DIST, urlPath);

      let served = false;
      try {
        const stat = statSync(filePath);
        if (stat.isFile()) {
          const content = readFileSync(filePath);
          const ct = MIME_TYPES[extname(filePath)] || 'application/octet-stream';
          res.writeHead(200, { 'Content-Type': ct });
          res.end(content);
          served = true;
        } else if (stat.isDirectory()) {
          const idx = join(filePath, 'index.html');
          if (existsSync(idx)) {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(readFileSync(idx));
            served = true;
          }
        }
      } catch {}

      if (!served) {
        // SPA fallback: always serve the clean shell so React Router can render the route
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(spaShell);
      }
    });
    server.on('error', reject);
    server.listen(PORT, '127.0.0.1', () => resolve(server));
  });
}

function saveRoute(route, html) {
  if (route === '/') {
    writeFileSync(join(DIST, 'index.html'), html, 'utf-8');
  } else {
    const parts = route.split('/').filter(Boolean);
    const dir = join(DIST, ...parts);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html, 'utf-8');
  }
}

async function prerender() {
  console.log(`\n🚀 Prerendering ${ROUTES.length} routes...\n`);

  // Snapshot the clean SPA shell before we start overwriting index.html
  const spaShell = readFileSync(join(DIST, 'index.html'), 'utf-8');
  // Also write it as 200.html for hosting fallback
  writeFileSync(join(DIST, '200.html'), spaShell, 'utf-8');

  const server = await startServer(spaShell);

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
    ],
  });

  let success = 0;
  let errors = 0;
  const failed = [];

  for (let i = 0; i < ROUTES.length; i++) {
    const route = ROUTES[i];
    const url = `${BASE_URL}${route}`;

    try {
      const page = await browser.newPage();

      // Suppress page errors from Horizons monitoring scripts etc.
      page.on('pageerror', () => {});

      // Block all third-party requests — only allow localhost and data URIs
      await page.setRequestInterception(true);
      page.on('request', (req) => {
        const u = req.url();
        if (u.startsWith(`http://localhost:${PORT}`) || u.startsWith('data:') || u.startsWith('blob:')) {
          req.continue();
        } else {
          req.abort();
        }
      });

      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      const html = await page.evaluate(() => '<!DOCTYPE html>' + document.documentElement.outerHTML);
      await page.close();

      saveRoute(route, html);
      success++;

      // Log progress every 25 routes and first/last few
      if (i < 3 || i >= ROUTES.length - 3 || (i + 1) % 25 === 0) {
        console.log(`  ✅ [${success}/${ROUTES.length}] ${route}`);
      }
    } catch (e) {
      errors++;
      failed.push(route);
      console.error(`  ❌ [${i + 1}/${ROUTES.length}] ${route}: ${e.message}`);
    }
  }

  await browser.close();
  server.close();

  console.log(`\n✨ Prerender complete: ${success} succeeded, ${errors} failed`);
  if (failed.length > 0) {
    console.error('Failed routes:', failed.join(', '));
  }
}

prerender().catch((e) => {
  console.error('Fatal prerender error:', e.message);
  process.exit(1);
});
