// Generates public/sitemap-films.xml with all Solyx SKU URLs + category hubs.
// Run AFTER prerender.js as part of the build pipeline.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { solyxProducts, solyxToFilmsCategory } from '../src/data/solyxFilms.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const ORIGIN = 'https://arizonahouseoffilm.com'
const TODAY = new Date().toISOString().slice(0, 10)

function toSlug(str) {
  return String(str).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function urlEntry({ loc, changefreq, priority }) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

// Unique category hub routes from the canonical map
const categoryHubs = Array.from(new Set(Object.values(solyxToFilmsCategory)))

// Only include indexed SKU routes (gradient-films only)
// All other SKUs are noindexed and should not appear in sitemap
const skuRoutes = solyxProducts
  .filter(p => {
    const cat = solyxToFilmsCategory[p.category] || 'specialty-films'
    return cat === 'gradient-films'
  })
  .map(p => `/films/gradient-films/${toSlug(p.sku)}`)
// De-dupe just in case
const uniqueSkuRoutes = Array.from(new Set(skuRoutes))

const entries = [
  ...categoryHubs.map(c => urlEntry({
    loc: `${ORIGIN}/films/${c}`,
    changefreq: 'weekly',
    priority: '0.7',
  })),
  ...uniqueSkuRoutes.map(r => urlEntry({
    loc: `${ORIGIN}${r}`,
    changefreq: 'monthly',
    priority: '0.5',
  })),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`

const outPaths = [
  path.join(ROOT, 'public', 'sitemap-films.xml'),
  path.join(ROOT, 'dist', 'sitemap-films.xml'),
]

for (const out of outPaths) {
  try {
    if (!fs.existsSync(path.dirname(out))) continue
    fs.writeFileSync(out, xml, 'utf8')
    console.log(`✓ wrote ${path.relative(ROOT, out)} — ${categoryHubs.length} hubs + ${uniqueSkuRoutes.length} SKUs = ${entries.length} URLs`)
  } catch (e) {
    console.error(`✗ failed to write ${out}:`, e.message)
  }
}
