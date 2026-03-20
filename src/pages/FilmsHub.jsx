import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Phone, ExternalLink } from 'lucide-react';
import BreadcrumbSchema from '../components/SEO/BreadcrumbSchema';
import { solyxCategories, solyxProducts } from '@/data/solyxFilms';

function toSlug(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const solyxToFilmsCategory = {
  'casper-designtex': 'casper-films',
  'frosted-etched': 'frosted-etched-films',
  'stained-glass': 'stained-glass-films',
  'gradient': 'gradient-films',
  'colored-films': 'colored-films',
  'patterned-privacy': 'patterned-privacy-films',
  'reflective-mirror': 'reflective-films',
  'decorative': 'specialty-films',
  'specialty': 'specialty-films',
};

export default function FilmsHub() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    let products = solyxProducts;
    if (activeCategory !== 'all') {
      products = products.filter(p => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      products = products.filter(p =>
        p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q)
      );
    }
    return products;
  }, [activeCategory, searchQuery]);

  const activeDesc = solyxCategories.find(c => c.slug === activeCategory)?.description;

  return (
    <>
      <Helmet>
        <title>Window Film Catalog — 600+ Solyx Films | Phoenix AZ | Arizona House of Film</title>
        <meta name="description" content="Browse 600+ Solyx decorative and privacy window films. Frosted, etched, gradient, cloaking, stained glass, patterned privacy. Professional installation in Phoenix and Scottsdale. ROC #314088." />
        <link rel="canonical" href="https://arizonahouseoffilm.com/films" />
        <meta property="og:title" content="Window Film Types & Technologies | Arizona House of Film" />
        <meta property="og:description" content="Browse every window film type we install in Arizona — solar, security, decorative, privacy, and anti-graffiti films. Licensed ROC #314088." />
        <meta property="og:url" content="https://arizonahouseoffilm.com/films" />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Window Film Types & Technologies | Arizona House of Film" />
        <meta name="twitter:description" content="Browse every window film type we install in Arizona — solar, security, decorative, privacy, and anti-graffiti films. Licensed ROC #314088." />
        <meta name="twitter:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Decorative Window Film Catalog",
          "description": "600+ Solyx decorative window films available through Arizona House of Film",
          "url": "https://arizonahouseoffilm.com/films",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Arizona House of Film",
            "telephone": "+14807881591",
            "address": { "@type": "PostalAddress", "streetAddress": "7007 W Flower St", "addressLocality": "Phoenix", "addressRegion": "AZ", "postalCode": "85033" }
          }
        })}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://arizonahouseoffilm.com/' },
        { name: 'Window Film Catalog', url: 'https://arizonahouseoffilm.com/films' },
      ]} />

      <div className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/30 rounded-full px-4 py-1.5 text-green-400 text-sm font-semibold mb-4">
            LICENSED ROC #314088 · AUTHORIZED SOLYX INSTALLER
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Decorative Window Film Catalog
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            {solyxProducts.length}+ Solyx films — frosted, etched, stained glass, privacy patterns,
            gradients, and Casper cloaking. We install every film in this catalog.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/contact" className="bg-green-600 hover:bg-green-500 text-white font-bold px-7 py-3 rounded-lg transition-colors">
              Get Film Quote
            </Link>
            <a href="tel:4807881591" className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-7 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> (480) 788-1591
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Popular Privacy Applications */}
        <div className="mb-10 bg-gray-50 border border-gray-100 rounded-2xl p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Looking for a specific application?</p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Bathroom Privacy', href: '/bathroom-privacy-window-film' },
              { label: 'Office Glass', href: '/office-privacy-window-film' },
              { label: 'Storefront Film', href: '/storefront-window-film' },
              { label: 'Entryway & Door', href: '/entryway-window-film' },
              { label: 'Sidelight Panels', href: '/sidelight-window-film' },
              { label: 'One-Way Mirror', href: '/one-way-mirror-window-film' },
            ].map(item => (
              <Link
                key={item.href}
                to={item.href}
                className="inline-flex items-center gap-1.5 bg-white border border-gray-200 hover:border-blue-400 hover:bg-blue-50 text-gray-700 hover:text-blue-700 text-sm font-semibold px-4 py-2 rounded-full transition-all"
              >
                {item.label} →
              </Link>
            ))}
          </div>
        </div>

        {/* Search bar */}
        <div className="relative max-w-lg mx-auto mb-8">
          <Search className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by film name or SKU..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="absolute right-3.5 top-3.5 text-gray-400 hover:text-gray-600">✕</button>
          )}
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All Films ({solyxProducts.length})
          </button>
          {solyxCategories.map(cat => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat.slug
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Active category description */}
        {activeCategory !== 'all' && activeDesc && (
          <p className="text-center text-gray-500 text-sm mb-8 max-w-xl mx-auto">{activeDesc}</p>
        )}

        {/* Results count */}
        <p className="text-xs text-gray-400 text-center mb-6">
          Showing {filtered.length.toLocaleString()} film{filtered.length !== 1 ? 's' : ''}
          {activeCategory !== 'all' ? ` in ${solyxCategories.find(c => c.slug === activeCategory)?.name}` : ''}
          {searchQuery ? ` matching "${searchQuery}"` : ''}
        </p>

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {filtered.map(product => (
              <Link
                key={product.sku}
                to={`/films/${solyxToFilmsCategory[product.category] || 'specialty-films'}/${toSlug(product.sku)}`}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200"
                title={`${product.name} — ${product.sku}`}
              >
                <div className="aspect-square bg-gray-50 overflow-hidden">
                  <img
                    src={product.img}
                    alt={`${product.name} decorative window film — Arizona House of Film`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={e => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gray-100');
                    }}
                  />
                </div>
                <div className="p-2.5">
                  <p className="text-xs font-semibold text-gray-800 line-clamp-2 leading-snug">{product.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5 font-mono">{product.sku}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg font-semibold mb-2">No films found</p>
            <p className="text-sm">Try a different search or category</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">See a Film You Like?</h2>
          <p className="text-gray-300 mb-2">We install every Solyx film in this catalog.</p>
          <p className="text-gray-400 text-sm mb-6">Phoenix · Scottsdale · Chandler · Mesa · All Arizona · ROC #314088</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/contact" className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors">
              Request Film Quote
            </Link>
            <a
              href="https://solyxfilms.com/tag/33/Shop%20All"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/20 text-white font-semibold px-6 py-4 rounded-lg hover:border-white/40 transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Full Solyx Catalog
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
