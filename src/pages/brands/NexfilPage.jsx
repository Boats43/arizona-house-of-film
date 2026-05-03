import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import EstimatorCTA from '../../components/EstimatorCTA';
import { Button } from '@/components/ui/button';
import { nexfilCategories, nexfilProducts } from '@/data/nexfilFilms';

const NexfilPage = () => {
  const pageTitle = 'Nexfil USA Window Film Phoenix AZ | OnyVa IR90 | ROC #314088';
  const metaDescription = 'Authorized Nexfil USA window film distributor and installer in Phoenix AZ. OnyVa IR90 90% IR rejection, Lux IR80 nano-ceramic, Solar Bronze 83.5% TSER, full safety range. ROC #314088. Free estimate.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/brands/nexfil';
  const ogImage = 'https://arizonahouseoffilm.com/og-image.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Nexfil USA Window Film Installation Phoenix AZ',
    serviceType: 'Window Film Installation',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://arizonahouseoffilm.com',
      name: 'Arizona House of Film',
    },
    areaServed: { '@type': 'State', name: 'Arizona' },
    description: metaDescription,
    url: canonicalUrl,
  };

  const faqData = [
    {
      question: 'What is Nexfil OnyVa IR90?',
      answer: 'OnyVa IR90 is Nexfil USA\u2019s flagship nano-ceramic film with 90% IR (infrared) rejection \u2014 among the highest in the architectural film market. It is non-metallic, so it does not interfere with GPS, cellular, WiFi, or Bluetooth signals. OnyVa is offered in VLT levels from 5% to 70%, so you can pick the exact darkness while keeping the same 90% IR performance. In Arizona heat, OnyVa IR90 70% is the nearly-invisible option, and 20\u201335% VLT are the most-specified residential and commercial choices.',
    },
    {
      question: 'How does Nexfil compare to LLumar and H\u00fcper Optik?',
      answer: 'All three are professional architectural film manufacturers. Nexfil OnyVa IR90 rejects 90% of IR \u2014 comparable to H\u00fcper Optik Ceramic and LLumar IRX at a better wholesale price point, which is why we specify it on cost-sensitive commercial jobs. H\u00fcper Optik still leads on optical neutrality for high-end residential, and LLumar has broader NFRC rebate documentation coverage. For most Arizona projects, the three lines are interchangeable by spec \u2014 Arizona House of Film picks based on availability, price, and rebate eligibility.',
    },
    {
      question: 'Is Nexfil available for same-week installation in Phoenix?',
      answer: 'Most Nexfil architectural SKUs ship from Gardena, California in 1\u20132 weeks. We stock the highest-volume OnyVa IR90 and Lux IR80 rolls in Phoenix, so same-week installation is routine for those SKUs. Specialty colors, non-stocked VLT levels, and safety films 7 mil and above are order-in only. We confirm lead time for your selected SKU during the free on-site estimate.',
    },
    {
      question: 'What is the difference between Lux IR80 and OnyVa IR90?',
      answer: 'Both are non-metallic nano-ceramic films with no signal interference. Lux IR80 rejects 80% of IR and is the value-tier nano-ceramic option \u2014 it works well on interior rooms and north/east exposures where heat load is moderate. OnyVa IR90 rejects 90% of IR (a 10-point jump) and is the premium nano-ceramic \u2014 the right spec for west- and south-facing glass in Phoenix where IR load is at its worst. OnyVa also holds TSER performance better across the VLT range.',
    },
    {
      question: 'Does Arizona House of Film install Nexfil film?',
      answer: 'Yes. Arizona House of Film is an authorized Nexfil USA distributor and installer. Every install is performed by our W-2 crews under Arizona ROC #314088. We carry the full Nexfil architectural line \u2014 OnyVa IR90, Lux IR80, Centurion and HP Centurion carbon, Solar Bronze, Elegance, Prestigious Silver, Twilight dual reflective, Silver Reflective 05\u201350%, Safety Film 2\u201312 mil, Anti-Graffiti 4 mil, and the decorative range (Blackout, Whiteout, White Frost, Silver Matte).',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const featured = [
    nexfilProducts.find((p) => p.sku === 'NF-ONYVA-IR90-20'),
    nexfilProducts.find((p) => p.sku === 'NF-SOLAR-BRONZE-20'),
  ].filter(Boolean);

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
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Brands', path: '/brands' },
        { name: 'Nexfil USA Window Film', path: '/brands/nexfil' },
      ]} />

      <main id="main-content" className="bg-slate-950 min-h-screen">
        {/* HERO */}
        <section className="py-24 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <span className="inline-block px-4 py-1 bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-widest">
              Authorized Distributor &bull; ROC #314088
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase leading-[0.85] tracking-tighter">
              Nexfil USA Window Film &mdash; Arizona House of Film Authorized Distributor
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-medium">
              Professional window film manufactured in Gardena, California. Featuring <strong className="text-green-400">OnyVa IR90 &mdash; 90% IR rejection</strong> and <strong className="text-green-400">Lux IR80 &mdash; 80% IR rejection</strong> nano-ceramic films. Arizona House of Film is an authorized Nexfil distributor and installer. ROC #314088.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl"
              >
                <Link to="/get-a-quote">Get a Free Estimate &rarr;</Link>
              </Button>
              <a
                href="tel:480-788-1591"
                className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all text-lg"
              >
                Call (480) 788-1591
              </a>
            </div>
          </div>
        </section>

        {/* BRAND STORY */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              About Nexfil USA
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-4">
              Nexfil USA is a professional window film manufacturer headquartered in Gardena, California. The company produces a full architectural line &mdash; sputter metalized, nano-ceramic, carbon color-stable, silver reflective, safety, anti-graffiti, and decorative films &mdash; engineered for U.S. climate conditions including the extreme heat and UV load of the Arizona Southwest.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl">
              Arizona House of Film is an authorized Nexfil distributor and installer. We stock the highest-volume OnyVa IR90 and Lux IR80 SKUs in Phoenix for same-week residential and commercial installation, and order-in the full catalog with 1&ndash;2 week lead time directly from Gardena.
            </p>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              Featured Nexfil Films
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              Two Nexfil SKUs we specify most often on Arizona projects &mdash; one for maximum clarity with top-tier IR rejection, one for maximum solar control on hot exposures.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map((p) => (
                <div key={p.sku} className="border border-slate-200 rounded-lg p-6 bg-white">
                  <span className="text-xs font-black text-green-700 uppercase tracking-widest">{p.sku}</span>
                  <h3 className="font-black text-slate-900 text-2xl mt-1 mb-3">{p.name}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{p.description}</p>
                  <div className="grid grid-cols-4 gap-2 text-center text-xs">
                    <div className="bg-slate-50 p-2 rounded"><p className="text-slate-400 font-bold">VLT</p><p className="text-slate-900 font-black">{p.vlt}%</p></div>
                    <div className="bg-slate-50 p-2 rounded"><p className="text-slate-400 font-bold">TSER</p><p className="text-slate-900 font-black">{p.tser}%</p></div>
                    <div className="bg-slate-50 p-2 rounded"><p className="text-slate-400 font-bold">IRR</p><p className="text-slate-900 font-black">{p.irr ?? '—'}%</p></div>
                    <div className="bg-slate-50 p-2 rounded"><p className="text-slate-400 font-bold">UV</p><p className="text-green-700 font-black">{p.uvr}%</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CATEGORY OVERVIEW */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              Seven Nexfil Product Categories
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              The full Nexfil architectural range &mdash; from premium OnyVa IR90 nano-ceramic down to the 12 mil safety line and decorative whites/blacks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {nexfilCategories.map((c) => {
                const count = nexfilProducts.filter((p) => p.category === c.id).length;
                return (
                  <div key={c.id} className="border-l-4 border-green-500 p-6 bg-slate-50">
                    <h3 className="font-black text-slate-950 text-lg mb-2">{c.name}</h3>
                    <p className="text-slate-600 text-sm mb-3 leading-relaxed">{c.description}</p>
                    <p className="text-xs font-black text-green-700 uppercase tracking-widest">{count} SKU{count === 1 ? '' : 's'} available</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SOLAR CONTROL TABLE */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              Nexfil Nano-Ceramic &amp; Sputter Performance
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              Published performance specs on the most-specified Nexfil architectural films. All films block 99%+ UV.
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse bg-white rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-900 text-white text-left">
                    <th className="px-4 py-3 font-black uppercase text-xs tracking-wider">Film</th>
                    <th className="px-4 py-3 font-black uppercase text-xs tracking-wider">VLT</th>
                    <th className="px-4 py-3 font-black uppercase text-xs tracking-wider">TSER</th>
                    <th className="px-4 py-3 font-black uppercase text-xs tracking-wider">IR Rejection</th>
                    <th className="px-4 py-3 font-black uppercase text-xs tracking-wider">UV</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {nexfilProducts
                    .filter((p) => ['nano-ceramic', 'sputter-metalized'].includes(p.category))
                    .map((p, i) => (
                      <tr key={p.sku} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-4 py-3 font-bold text-slate-900">{p.name}</td>
                        <td className="px-4 py-3 text-slate-700">{p.vlt}%</td>
                        <td className="px-4 py-3 text-slate-700 font-semibold">{p.tser}%</td>
                        <td className="px-4 py-3 text-slate-700 font-semibold">{p.irr ?? '—'}%</td>
                        <td className="px-4 py-3 text-green-700 font-semibold">{p.uvr}%</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-sm">VLT = Visible Light Transmission &bull; TSER = Total Solar Energy Rejected &bull; IR Rejection = Infrared heat blocked &bull; Higher TSER/IRR = more heat blocked</p>
          </div>
        </section>

        {/* SAFETY & SECURITY */}
        <section className="py-16 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Nexfil Safety &amp; Anti-Graffiti Films
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-4xl mb-8">
              Full safety range from 2 mil entry-level to 12 mil blast mitigation. Plus 4 mil exterior anti-graffiti for tagged glass.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {nexfilProducts
                .filter((p) => ['safety-film', 'anti-graffiti'].includes(p.category))
                .map((p) => (
                  <div key={p.sku} className="border border-slate-200 rounded-lg p-4 bg-white">
                    <span className="text-xs font-black text-blue-700 uppercase tracking-widest">{p.sku}</span>
                    <h3 className="font-black text-slate-900 text-lg mt-1 mb-2">{p.name}</h3>
                    <p className="text-slate-600 text-sm">{p.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* DECORATIVE */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              Nexfil Decorative Films
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              Privacy and decorative films for office partitions, server rooms, storefronts, and residential glass.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {nexfilProducts
                .filter((p) => p.category === 'decorative')
                .map((p) => (
                  <div key={p.sku} className="border border-slate-200 rounded-lg p-4 bg-white">
                    <h3 className="font-black text-slate-900 text-lg mb-2">{p.name}</h3>
                    <p className="text-slate-600 text-sm">{p.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* WHY NEXFIL */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-8">
              Why Nexfil for Arizona Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'OnyVa IR90 \u2014 90% IR', desc: 'Among the highest IR rejection rates available in architectural film. Non-metallic \u2014 no signal interference. Five VLT levels (5\u201370%) cover every HOA, commercial, and privacy scenario.' },
                { title: 'Lux IR80 Nano-Ceramic', desc: '80% IR rejection at mid price point. The right spec for interior rooms, north/east exposures, and budget-sensitive residential where full OnyVa is over-spec.' },
                { title: 'Solar Bronze 83.5% TSER', desc: 'Highest TSER in the Nexfil sputter line. Copper construction with warm bronze exterior. Purpose-built for west- and south-facing Arizona commercial glazing.' },
                { title: 'Full Safety Range', desc: '2 mil, 4 mil, 7 mil, 8 mil, and 12 mil safety films. Covers everything from retail storefronts to government blast mitigation specifications.' },
                { title: 'Authorized Distributor', desc: 'Arizona House of Film is an authorized Nexfil distributor \u2014 direct-from-manufacturer pricing, drop-ship available to licensed contractors across Arizona.' },
                { title: 'Gardena CA Manufacturer', desc: 'Made in the U.S. at Nexfil\u2019s Gardena, California facility. 1\u20132 week lead time on order-in SKUs; stocked OnyVa and Lux ship same-week in Phoenix.' },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-green-500 p-6 bg-white">
                  <h3 className="font-black text-slate-950 text-sm uppercase mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECT APPLICATIONS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-8">
              Nexfil Applications by Property Type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { type: 'Residential Premium', film: 'OnyVa IR90 35%', desc: 'Clear appearance with 90% IR rejection. HOA-friendly. The right spec for west-facing living rooms, primary bedrooms, and any glass where heat comfort matters more than darkness.' },
                { type: 'Residential Value', film: 'Lux IR80 35%', desc: 'Non-reflective nano-ceramic at the value tier. 80% IR rejection with no metallic look and no signal interference. Most popular residential SKU in the Nexfil line.' },
                { type: 'Commercial High-Rise', film: 'Twilight 10 / Solar Bronze 20%', desc: 'Maximum privacy and TSER. Dual reflective grey or copper-based bronze. Purpose-built for high-solar-load west and south perimeters.' },
                { type: 'Schools & Government', film: 'Safety 8\u201312 mil', desc: 'Blast mitigation and forced-entry resistance for schools, government facilities, and high-security commercial. 12 mil meets military-grade applications.' },
              ].map((app, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-6 bg-slate-50">
                  <span className="text-xs font-black text-green-700 uppercase tracking-widest">{app.film}</span>
                  <h3 className="font-black text-slate-900 text-lg mt-1 mb-2">{app.type}</h3>
                  <p className="text-slate-600 text-sm">{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              Nexfil Installed Pricing &mdash; Phoenix AZ
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              All Nexfil installations are custom-quoted based on glass type, square footage, film selection, and access. Contact us for exact installed pricing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { series: 'Lux IR80 Nano-Ceramic', range: '$8\u2013$14/sq ft installed', note: 'Residential value-tier nano-ceramic' },
                { series: 'OnyVa IR90 Nano-Ceramic', range: '$10\u2013$18/sq ft installed', note: 'Premium 90% IR rejection \u2014 5 VLT levels' },
                { series: 'Safety 4\u201312 mil', range: '$10\u2013$25/sq ft installed', note: 'Clear safety film \u2014 blast mitigation optional' },
              ].map((tier, i) => (
                <div key={i} className="bg-white border-l-4 border-green-500 p-6">
                  <h3 className="font-black text-slate-950 text-sm uppercase mb-1">{tier.series}</h3>
                  <p className="text-green-700 font-black text-lg mb-1">{tier.range}</p>
                  <p className="text-slate-500 text-xs">{tier.note}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm font-medium">Free on-site estimate for all Nexfil installations. Call <a href="tel:480-788-1591" className="text-green-700 font-bold">(480) 788-1591</a>, <Link to="/get-a-quote" className="text-green-700 font-bold underline">request a quote online</Link>, or try our <Link to="/ai-window-film-estimator" className="text-green-700 font-bold underline">AI window film estimator</Link>.</p>
          </div>
        </section>

        {/* WHY AZHOF */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-8">
              Why Arizona House of Film for Nexfil
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Authorized Distributor', desc: 'Direct-from-Gardena pricing. Drop-ship available to licensed Arizona contractors through our distributor program.' },
                { title: 'Licensed', desc: 'ROC #314088 \u2014 Arizona licensed window film contractor. W-2 crews, full workers\u2019 comp, commercial GL.' },
                { title: 'Stocked in Phoenix', desc: 'OnyVa IR90 and Lux IR80 highest-volume SKUs stocked locally \u2014 same-week install. Full catalog order-in at 1\u20132 weeks.' },
                { title: 'AI Estimator', desc: 'Upload a photo of your glass \u2014 our AI identifies the right Nexfil SKU and returns installed pricing in seconds.' },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-green-500 p-6 bg-slate-50">
                  <h3 className="font-black text-slate-950 text-sm uppercase mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <EstimatorCTA />

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-8">
              Frequently Asked Questions &mdash; Nexfil Window Film
            </h2>
            <div className="space-y-6 max-w-4xl">
              {faqData.map((faq, i) => (
                <div key={i} className="border-b border-slate-200 pb-6">
                  <h3 className="font-black text-slate-900 text-lg mb-2">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Free Nexfil Estimate
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment. Nexfil film specified for your glass type and performance goals. Or try the AI estimator for instant pricing. Licensed ROC #314088.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl"
              >
                <Link to="/get-a-quote">Request Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-slate-950 px-10 h-16 text-xl font-black rounded-none transition-all"
              >
                <Link to="/ai-window-film-estimator">AI Estimator &rarr;</Link>
              </Button>
              <a
                href="tel:480-788-1591"
                className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all text-lg"
              >
                (480) 788-1591
              </a>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="mt-10 border-t border-slate-200 pt-6 pb-4">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Related Resources</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link to="/brands" className="text-green-700 underline">All Film Brands</Link>
              <Link to="/energy-saving-window-films" className="text-green-700 underline">Energy-Saving Window Films</Link>
              <Link to="/window-film-distributor-phoenix" className="text-green-700 underline">Window Film Distributor Phoenix</Link>
              <Link to="/commercial-window-tinting" className="text-green-700 underline">Commercial Window Film</Link>
              <Link to="/residential-window-tinting" className="text-green-700 underline">Residential Window Film</Link>
              <Link to="/brands/huper-optik" className="text-green-700 underline">H&uuml;per Optik Window Film</Link>
              <Link to="/brands/llumar" className="text-green-700 underline">LLumar Window Film</Link>
              <Link to="/ai-window-film-estimator" className="text-green-700 underline">AI Estimator</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NexfilPage;
