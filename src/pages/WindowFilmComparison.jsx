import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { Button } from '@/components/ui/button';

const FILMS = [
  // CERAMIC
  {name:"Ceramic 35",brand:"Vista",cat:"Ceramic",heat:55,glare:60,vlt:36,uv:99},
  {name:"Ceramic 45",brand:"Vista",cat:"Ceramic",heat:45,glare:46,vlt:49,uv:99},
  {name:"Ceramic 55",brand:"Vista",cat:"Ceramic",heat:41,glare:36,vlt:57,uv:99},
  {name:"Ceramic 65",brand:"Vista",cat:"Ceramic",heat:33,glare:27,vlt:66,uv:99},
  // SPECTRALLY-SELECTIVE
  {name:"VS20",brand:"LLumar",cat:"Spectrally-Selective",heat:78,glare:75,vlt:23,uv:99},
  {name:"VS30",brand:"LLumar",cat:"Spectrally-Selective",heat:75,glare:68,vlt:29,uv:99},
  {name:"VS50",brand:"LLumar",cat:"Spectrally-Selective",heat:62,glare:43,vlt:51,uv:99},
  {name:"VS60",brand:"LLumar",cat:"Spectrally-Selective",heat:55,glare:27,vlt:66,uv:99},
  {name:"VS61",brand:"LLumar",cat:"Spectrally-Selective",heat:50,glare:32,vlt:61,uv:99},
  {name:"VS70",brand:"LLumar",cat:"Spectrally-Selective",heat:53,glare:22,vlt:70,uv:99},
  // NEUTRAL
  {name:"N1020",brand:"LLumar",cat:"Neutral",heat:63,glare:74,vlt:23,uv:99},
  {name:"N1020B Bronze",brand:"LLumar",cat:"Neutral",heat:75,glare:77,vlt:20,uv:99},
  {name:"N1035B Bronze",brand:"LLumar",cat:"Neutral",heat:64,glare:59,vlt:36,uv:99},
  {name:"N1040",brand:"LLumar",cat:"Neutral",heat:52,glare:59,vlt:36,uv:99},
  {name:"N1050",brand:"LLumar",cat:"Neutral",heat:44,glare:45,vlt:48,uv:99},
  {name:"N1065",brand:"LLumar",cat:"Neutral",heat:31,glare:24,vlt:67,uv:99},
  // DUAL-REFLECTIVE (Vista)
  {name:"V33 Soft Horizons",brand:"Vista",cat:"Dual-Reflective",heat:54,glare:62,vlt:34,uv:99},
  {name:"V45 Dayview",brand:"Vista",cat:"Dual-Reflective",heat:45,glare:49,vlt:46,uv:99},
  {name:"V58 Crystal Elegance",brand:"Vista",cat:"Dual-Reflective",heat:34,glare:33,vlt:60,uv:99},
  // REFLECTIVE
  {name:"R15G Gray",brand:"LLumar",cat:"Reflective",heat:75,glare:93,vlt:6,uv:99},
  {name:"R15B Bronze",brand:"LLumar",cat:"Reflective",heat:78,glare:91,vlt:8,uv:99},
  {name:"R15BL Blue",brand:"LLumar",cat:"Reflective",heat:78,glare:90,vlt:9,uv:99},
  {name:"R15GO Gold",brand:"LLumar",cat:"Reflective",heat:80,glare:86,vlt:13,uv:99},
  {name:"R20 Silver",brand:"LLumar",cat:"Reflective",heat:79,glare:83,vlt:15,uv:99},
  {name:"R35 Silver",brand:"LLumar",cat:"Reflective",heat:68,glare:67,vlt:29,uv:99},
  {name:"R50 Silver",brand:"LLumar",cat:"Reflective",heat:54,glare:47,vlt:47,uv:99},
  {name:"RN07G One-Way Mirror",brand:"LLumar",cat:"Reflective",heat:82,glare:93,vlt:6,uv:99},
  // EXTERIOR HPR
  {name:"RHE20 Silver",brand:"LLumar",cat:"Exterior",heat:81,glare:83,vlt:15,uv:99},
  {name:"RHE35 Silver",brand:"LLumar",cat:"Exterior",heat:71,glare:68,vlt:28,uv:99},
  {name:"RHE50 Silver",brand:"LLumar",cat:"Exterior",heat:54,glare:44,vlt:49,uv:99},
  {name:"NHE20 Neutral",brand:"LLumar",cat:"Exterior",heat:65,glare:74,vlt:23,uv:99},
  {name:"NHE35 Neutral",brand:"LLumar",cat:"Exterior",heat:52,glare:58,vlt:38,uv:99},
  {name:"RXA20",brand:"Vista",cat:"Exterior",heat:80,glare:82,vlt:16,uv:99},
  {name:"RXA35",brand:"Vista",cat:"Exterior",heat:70,glare:68,vlt:29,uv:99},
  {name:"RXA50",brand:"Vista",cat:"Exterior",heat:52,glare:46,vlt:49,uv:99},
  {name:"NXA20",brand:"Vista",cat:"Exterior",heat:64,glare:74,vlt:23,uv:99},
  {name:"NXA35",brand:"Vista",cat:"Exterior",heat:51,glare:58,vlt:38,uv:99},
  {name:"VXA14",brand:"Vista",cat:"Exterior",heat:83,glare:89,vlt:10,uv:99},
  // CLEAR / SAFETY
  {name:"AIR80 Nearly Clear",brand:"LLumar",cat:"Clear/Safety",heat:44,glare:14,vlt:76,uv:99},
  {name:"AIR90 Clear",brand:"LLumar",cat:"Clear/Safety",heat:28,glare:6,vlt:85,uv:99},
  {name:"AU85 UV Clear",brand:"LLumar",cat:"Clear/Safety",heat:16,glare:1,vlt:89,uv:99},
  {name:"SHE CL PS4",brand:"LLumar",cat:"Clear/Safety",heat:15,glare:1,vlt:89,uv:99},
  {name:"SHE CL PS7",brand:"LLumar",cat:"Clear/Safety",heat:16,glare:1,vlt:89,uv:99},
  {name:"SXA CL PS4",brand:"Vista",cat:"Clear/Safety",heat:15,glare:1,vlt:89,uv:99},
  {name:"SXA CL PS7",brand:"Vista",cat:"Clear/Safety",heat:16,glare:1,vlt:89,uv:99},
  {name:"THE80 Clear",brand:"LLumar",cat:"Clear/Safety",heat:43,glare:13,vlt:78,uv:99},
  {name:"TXA80",brand:"Vista",cat:"Clear/Safety",heat:43,glare:13,vlt:53,uv:99},
];

const WindowFilmComparison = () => {
  const pageTitle = 'Window Film Performance Comparison — LLumar & Vista | Arizona House of Film';
  const metaDescription = 'Compare 47 LLumar and Vista window films by heat rejection, glare reduction, and visible light. Eastman-verified data. Arizona licensed installer ROC #314088.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/window-film-comparison';
  const ogImage = 'https://arizonahouseoffilm.com/og-image.jpg';

  const [categoryFilter, setCategoryFilter] = useState('All');
  const [brandFilter, setBrandFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({ col: 'heat', dir: 'desc' });

  const categories = ['All', 'Ceramic', 'Spectrally-Selective', 'Neutral', 'Dual-Reflective', 'Reflective', 'Exterior', 'Clear/Safety'];
  const brands = ['All', 'LLumar', 'Vista'];

  const filteredFilms = useMemo(() => {
    let filtered = FILMS;
    if (categoryFilter !== 'All') {
      filtered = filtered.filter(f => f.cat === categoryFilter);
    }
    if (brandFilter !== 'All') {
      filtered = filtered.filter(f => f.brand === brandFilter);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(f => f.name.toLowerCase().includes(q));
    }
    return filtered;
  }, [categoryFilter, brandFilter, searchQuery]);

  const sortedFilms = useMemo(() => {
    const sorted = [...filteredFilms];
    const { col, dir } = sortConfig;
    sorted.sort((a, b) => {
      let aVal = a[col];
      let bVal = b[col];
      if (col === 'name' || col === 'brand') {
        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
        return dir === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      return dir === 'asc' ? aVal - bVal : bVal - aVal;
    });
    return sorted;
  }, [filteredFilms, sortConfig]);

  const handleSort = (col) => {
    setSortConfig(prev => ({
      col,
      dir: prev.col === col && prev.dir === 'desc' ? 'asc' : 'desc'
    }));
  };

  const getHeatBadgeClass = (heat) => {
    if (heat >= 70) return 'bg-green-100 text-green-800';
    if (heat >= 50) return 'bg-yellow-100 text-yellow-800';
    return 'bg-slate-100 text-slate-700';
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Window Film Performance Comparison',
    description: metaDescription,
    url: canonicalUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does window film reduce energy costs in Arizona homes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. According to U.S. Department of Energy data, solar heat gain through windows accounts for approximately one-third of a building\'s cooling costs. In Arizona\'s extreme climate, window film reducing solar heat gain directly reduces air conditioning demand and operating costs. Most residential installations in Phoenix produce measurable AC savings within the first summer.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can LLumar film be installed on dual-pane Low-E glass in Phoenix new construction homes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, with film selection verified for compatibility. Queen Creek, Chandler, and Gilbert homes built after 2015 typically have Low-E dual-pane glass as standard. LLumar and Vista films include options tested and approved for dual-pane Low-E applications. Arizona House of Film assesses your glass type during the free on-site estimate and recommends only compatible films to prevent thermal stress issues.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long do LLumar and Vista window films last in Arizona\'s climate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'LLumar and Vista films are engineered for long-term installation and carry Eastman-backed limited warranties. Arizona\'s intense UV exposure and heat are within the design parameters for these films. Durability depends on film type, glass type, and installation conditions. Arizona House of Film installs factory-backed films with manufacturer warranty documentation provided at project completion.',
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Window Film Comparison', path: '/window-film-comparison' },
      ]} />

      <main id="main-content" className="bg-slate-950 min-h-screen">
        {/* HERO */}
        <section className="py-24 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase leading-[0.85] tracking-tighter">
              Window Film Performance Comparison
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mb-6 leading-relaxed font-medium">
              47 <Link to="/brands/llumar" className="text-green-400 hover:text-green-300 underline">LLumar architectural films</Link> and Vista films ranked by heat rejection, glare reduction, and visible light. Eastman-verified data. Arizona installation by ROC #314088 licensed contractor.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-black text-slate-300 uppercase tracking-wide">
              <span>47 Films</span>
              <span className="text-slate-600">|</span>
              <span>LLumar + Vista</span>
              <span className="text-slate-600">|</span>
              <span>99% UV Block</span>
              <span className="text-slate-600">|</span>
              <a href="tel:480-788-1591" className="text-green-400 hover:text-green-300">Free Estimate (480) 788-1591</a>
            </div>
          </div>
        </section>

        {/* ARIZONA RECOMMENDATION CARDS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-8">
              Arizona Climate Recommendations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="border-l-4 border-green-500 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-black text-slate-950 uppercase">Maximum Heat Rejection</h3>
                </div>
                <p className="text-sm text-slate-600 font-semibold mb-3">Best for: West-facing Phoenix windows, extreme summer heat exposure</p>
                <p className="text-slate-900 font-bold mb-2">Top pick: <span className="text-green-700">VXA14 — 83% heat rejection</span></p>
                <p className="text-sm text-slate-700 mb-2">Runner up: RHE20 — 81%, R15GO — 80%</p>
                <p className="text-xs text-slate-500 italic">Ideal for afternoon sun on south/west glass</p>
              </div>

              {/* Card 2 */}
              <div className="border-l-4 border-green-500 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  </div>
                  <h3 className="text-xl font-black text-slate-950 uppercase">HOA-Compliant + High Clarity</h3>
                </div>
                <p className="text-sm text-slate-600 font-semibold mb-3">Best for: Master-planned communities, dual-pane Low-E new builds</p>
                <p className="text-slate-900 font-bold mb-2">Top pick: <span className="text-green-700">VS70 — 53% heat, 70% visible light</span></p>
                <p className="text-sm text-slate-700 mb-2">Runner up: VS60 — 55% heat, 66% VLT</p>
                <p className="text-xs text-slate-500 italic">Non-reflective ceramic appearance, HOA-approved in most QC/Scottsdale communities</p>
              </div>

              {/* Card 3 */}
              <div className="border-l-4 border-green-500 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                  </div>
                  <h3 className="text-xl font-black text-slate-950 uppercase">Maximum Privacy + Heat</h3>
                </div>
                <p className="text-sm text-slate-600 font-semibold mb-3">Best for: Pool-facing doors, street-facing windows, commercial storefronts</p>
                <p className="text-slate-900 font-bold mb-2">Top pick: <span className="text-green-700">RN07G One-Way Mirror — 82% heat, 93% glare reduction</span></p>
                <p className="text-xs text-slate-500 italic">Daytime privacy only — reverses at night when interior lights are on</p>
              </div>

              {/* Card 4 */}
              <div className="border-l-4 border-green-500 bg-slate-50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <h3 className="text-xl font-black text-slate-950 uppercase">Maximum Glare Reduction</h3>
                </div>
                <p className="text-sm text-slate-600 font-semibold mb-3">Best for: Home offices, TV rooms, south-facing dining areas</p>
                <p className="text-slate-900 font-bold mb-2">Top pick: <span className="text-green-700">R15G / RN07G — both 93% glare reduction</span></p>
                <p className="text-sm text-slate-700 mb-2">Runner up: R15B — 91%, R15BL — 90%</p>
                <p className="text-xs text-slate-500 italic">Darker VLT = more glare reduction. Best for screen-heavy rooms</p>
              </div>
            </div>
          </div>
        </section>

        {/* PERFORMANCE TABLE */}
        <section className="py-16 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-8">
              Full Performance Data
            </h2>

            {/* Filter Bar */}
            <div className="mb-6 space-y-4">
              {/* Category Filter */}
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase mb-2">Category</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setCategoryFilter(cat)}
                      className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${
                        categoryFilter === cat
                          ? 'bg-green-600 text-white'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase mb-2">Brand</p>
                <div className="flex flex-wrap gap-2">
                  {brands.map(brand => (
                    <button
                      key={brand}
                      onClick={() => setBrandFilter(brand)}
                      className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${
                        brandFilter === brand
                          ? 'bg-green-600 text-white'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase mb-2">Search</p>
                <input
                  type="text"
                  placeholder="Filter by film name..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full max-w-md px-4 py-2 bg-slate-800 border border-slate-700 rounded-md text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full bg-slate-900 text-slate-200 text-sm">
                <thead className="bg-slate-800">
                  <tr>
                    <th
                      onClick={() => handleSort('name')}
                      className="sticky left-0 z-10 bg-slate-800 px-4 py-3 text-left font-black uppercase text-xs cursor-pointer hover:bg-slate-700"
                    >
                      Film Name {sortConfig.col === 'name' && (sortConfig.dir === 'desc' ? '↓' : '↑')}
                    </th>
                    <th
                      onClick={() => handleSort('brand')}
                      className="px-4 py-3 text-left font-black uppercase text-xs cursor-pointer hover:bg-slate-700"
                    >
                      Brand {sortConfig.col === 'brand' && (sortConfig.dir === 'desc' ? '↓' : '↑')}
                    </th>
                    <th
                      onClick={() => handleSort('heat')}
                      className="px-4 py-3 text-left font-black uppercase text-xs cursor-pointer hover:bg-slate-700"
                    >
                      Heat Rejection % {sortConfig.col === 'heat' && (sortConfig.dir === 'desc' ? '↓' : '↑')}
                    </th>
                    <th
                      onClick={() => handleSort('glare')}
                      className="px-4 py-3 text-left font-black uppercase text-xs cursor-pointer hover:bg-slate-700"
                    >
                      Glare Reduction % {sortConfig.col === 'glare' && (sortConfig.dir === 'desc' ? '↓' : '↑')}
                    </th>
                    <th
                      onClick={() => handleSort('vlt')}
                      className="px-4 py-3 text-left font-black uppercase text-xs cursor-pointer hover:bg-slate-700"
                    >
                      Visible Light % {sortConfig.col === 'vlt' && (sortConfig.dir === 'desc' ? '↓' : '↑')}
                    </th>
                    <th className="px-4 py-3 text-left font-black uppercase text-xs">UV %</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedFilms.length > 0 ? (
                    sortedFilms.map((film, idx) => (
                      <tr key={idx} className="border-t border-slate-800 hover:bg-slate-800/50">
                        <td className="sticky left-0 z-10 bg-slate-900 px-4 py-3 font-semibold">{film.name}</td>
                        <td className="px-4 py-3 text-slate-400">{film.brand}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-block px-2 py-1 rounded-md text-xs font-bold ${getHeatBadgeClass(film.heat)}`}>
                            {film.heat}%
                          </span>
                        </td>
                        <td className="px-4 py-3">{film.glare}%</td>
                        <td className="px-4 py-3">{film.vlt}%</td>
                        <td className="px-4 py-3 text-slate-400">{film.uv}%</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="px-4 py-8 text-center text-slate-500">
                        No films match your filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* GLOSSARY */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-8">
              Performance Metrics Explained
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 bg-slate-50 p-6">
                <h3 className="text-xl font-black text-slate-950 mb-3">Heat Rejection %</h3>
                <p className="text-slate-700 leading-relaxed">
                  In Phoenix's 115°F+ summers, solar heat through unfilmed west-facing glass can push interior temps 8-15°F above thermostat setting. Heat rejection % measures how much solar energy the film blocks before it enters the room. A film with 70% heat rejection stops 70 units of heat for every 100 that would enter through unfilmed glass. Higher % = more relief for your AC system.
                </p>
              </div>

              <div className="border-l-4 border-green-500 bg-slate-50 p-6">
                <h3 className="text-xl font-black text-slate-950 mb-3">Glare Reduction %</h3>
                <p className="text-slate-700 leading-relaxed">
                  Measures reduction in visible light intensity (not total light). Important for home offices, rooms with TVs, and any space where screen glare causes eye strain. A 90% glare reduction film significantly cuts harsh brightness while still allowing natural light into the room.
                </p>
              </div>

              <div className="border-l-4 border-green-500 bg-slate-50 p-6">
                <h3 className="text-xl font-black text-slate-950 mb-3">Visible Light Transmittance (VLT) %</h3>
                <p className="text-slate-700 leading-relaxed">
                  The percentage of visible light passing through the film. Higher VLT = brighter room, clearer view, less tint appearance. Lower VLT = more privacy, more glare reduction, darker appearance. HOA communities typically require VLT above 35%. Most LLumar and Vista solar films range from 6% (very dark) to 89% (nearly clear).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-slate-950">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h3 className="text-lg font-black text-white mb-3">Does window film reduce energy costs in Arizona homes?</h3>
                <p className="text-slate-300 leading-relaxed">
                  Yes. According to U.S. Department of Energy data, solar heat gain through windows accounts for approximately one-third of a building's cooling costs. In Arizona's extreme climate, window film reducing solar heat gain directly reduces air conditioning demand and operating costs. Most <Link to="/residential-window-tinting-phoenix" className="text-green-400 hover:text-green-300 underline">residential installations in Phoenix</Link> produce measurable AC savings within the first summer.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h3 className="text-lg font-black text-white mb-3">Can LLumar film be installed on dual-pane Low-E glass in Phoenix new construction homes?</h3>
                <p className="text-slate-300 leading-relaxed">
                  Yes, with film selection verified for compatibility. Queen Creek, Chandler, and Gilbert homes built after 2015 typically have Low-E dual-pane glass as standard. LLumar and Vista films include options tested and approved for dual-pane Low-E applications. Arizona House of Film assesses your glass type during the free on-site estimate and recommends only compatible films to prevent thermal stress issues.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h3 className="text-lg font-black text-white mb-3">How long do LLumar and Vista window films last in Arizona's climate?</h3>
                <p className="text-slate-300 leading-relaxed">
                  LLumar and Vista films are engineered for long-term installation and carry Eastman-backed limited warranties. Arizona's intense UV exposure and heat are within the design parameters for these films. Durability depends on film type, glass type, and installation conditions. Arizona House of Film installs factory-backed films with manufacturer warranty documentation provided at project completion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-green-600">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4">
              Get a Free Film Recommendation
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Tell us your glass orientation, HOA requirements, and primary goal — heat rejection, privacy, glare reduction, or security. We'll recommend the specific LLumar or Vista film that fits your Arizona home or business and provide a written quote.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-slate-100 text-green-700 px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl"
              >
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <a
                href="tel:480-788-1591"
                className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-green-700 transition-all text-lg"
              >
                Call (480) 788-1591
              </a>
            </div>
            <p className="text-sm text-white/70 mt-6">
              Also available: <Link to="/commercial-window-tinting" className="underline hover:text-white">Commercial window film installation</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default WindowFilmComparison;
