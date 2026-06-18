import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import EstimatorCTA from '../../components/EstimatorCTA';
import { Button } from '@/components/ui/button';

const LlumarPage = () => {
  const pageTitle = 'LLumar Window Film Arizona | ROC #314088';
  const metaDescription = 'LLumar window film installation in Arizona. Solar control, safety, and decorative LLumar film for homes and businesses. Licensed ROC #314088. Free estimates.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/brands/llumar';
  const ogImage = 'https://arizonahouseoffilm.com/og-image.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'LLumar Window Film Installation Arizona',
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you install LLumar window film in Phoenix AZ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Arizona House of Film installs LLumar architectural window film on residential and commercial properties throughout Phoenix, Scottsdale, and Arizona. LLumar solar control, safety, security, and decorative film available. Licensed ROC #314088. Call (480) 788-1591.',
        },
      },
      {
        '@type': 'Question',
        name: 'What LLumar window film series do you install?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We install LLumar CTX Ceramic Series, AIR Series spectrally selective film, EW Series exterior film, Safety S Series (4–8 mil), ArmorCoat Security Series (8–14 mil), and LLumar Decorative Series. Film specified per project based on glass type, orientation, and performance requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does LLumar window film qualify for SRP or APS rebates in Arizona?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Qualifying LLumar solar control film installations meet SRP Business Solutions and APS energy efficiency rebate requirements. Arizona House of Film provides NFRC-rated data sheets for rebate applications. Customers submit directly to their utility provider.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does LLumar window film installation cost in Phoenix?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'LLumar window film installation in Phoenix runs $8–$18 per square foot for residential solar control film. Commercial projects are quoted by scope and square footage. All projects are custom-quoted on-site. Free estimates — call (480) 788-1591.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which LLumar film is best for Arizona heat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For Arizona\'s intense solar load, LLumar Dual Reflective and Spectrally Selective films perform best. Dual Reflective rejects up to 79% of solar heat — ideal for west and south-facing commercial glass. Spectrally Selective is the top choice for residential properties where a non-reflective appearance is required. Both block 99%+ of UV rays.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between LLumar film thicknesses for security?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'LLumar security films range from 4 mil (anti-shatter) to 13 mil (maximum anti-intrusion). The PS4 at 4 mil holds glass on impact and suits residential and retail applications. PS7 at 7 mil resists forced entry for commercial and school installations. PS8 at 8 mil meets blast mitigation requirements for government facilities. PS13 at 13 mil provides maximum forced-entry resistance for high-security applications.',
        },
      },
    ],
  };

  const filmSeries = [
    { name: 'LLumar CTX Ceramic Series', desc: 'Non-metallic ceramic film, maximum heat rejection, signal-safe' },
    { name: 'LLumar AIR Series', desc: 'Spectrally selective, high visible light transmission with aggressive heat rejection' },
    { name: 'LLumar EW Series', desc: 'Exterior window film for commercial applications' },
    { name: 'LLumar Safety S Series', desc: '4–8 mil safety film for residential and light commercial' },
    { name: 'LLumar ArmorCoat Security Series', desc: '8–14 mil forced-entry resistance for commercial and government' },
    { name: 'LLumar Decorative Series', desc: 'Frosted, patterned, and etched film for privacy applications' },
  ];

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
        { name: 'LLumar Window Film', path: '/brands/llumar' },
      ]} />

      <main id="main-content" className="bg-slate-950 min-h-screen">
        {/* HERO */}
        <section className="py-24 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <span className="inline-block px-4 py-1 bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-widest">
              Licensed • Bonded • ROC #314088
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase leading-[0.85] tracking-tighter">
              LLumar Window Film Installation — Phoenix & Arizona
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-medium">
              Authorized LLumar window film installer serving residential and commercial properties across Arizona. Licensed ROC #314088.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl"
              >
                <Link to="/contact">Get Free Estimate</Link>
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

        {/* ABOUT LLUMAR */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              About LLumar Window Film
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl">
              LLumar is an Eastman Chemical Company brand — one of the most specified window film brands in North America. LLumar architectural window film is available in solar control, safety, security, decorative, and specialty categories. Arizona House of Film installs LLumar film on commercial and residential properties throughout Phoenix, Scottsdale, and Arizona. Licensed ROC #314088.
            </p>
            <p className="text-slate-700 mb-4">Arizona House of Film installs the complete LLumar architectural film lineup for residential and commercial properties across Phoenix, Scottsdale, Chandler, Gilbert, Mesa, and the greater Valley. LLumar is manufactured by Eastman — one of the largest specialty film manufacturers in the world — and carries some of the strongest warranties in the industry. Verified installations include commercial properties for Coca-Cola, AutoZone, LA Fitness, City of Buckeye, and City of Mesa. Compare all LLumar film performance specs in our <Link to="/window-film-comparison" className="text-green-600 hover:text-green-700 underline font-semibold">window film comparison table</Link>.</p>
          </div>
        </section>

        {/* FILM SERIES */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-8">
              LLumar Film Series We Install
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filmSeries.map(({ name, desc }) => (
                <div key={name} className="bg-white border-l-4 border-green-500 p-6">
                  <h3 className="font-black text-slate-950 text-sm uppercase mb-2">{name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-8">
              {[
                { name: "Dual Reflective", tag: "Most Popular Commercial", desc: "Reflective exterior, neutral interior. 24-hour privacy with maximum solar control. Best for west and south-facing commercial glass.", specs: "Heat rejection: up to 79% · UV block: 99%+" },
                { name: "Spectrally Selective", tag: "Best for Residential", desc: "Maximum heat rejection with minimal tint. Preserves natural light and views. Ideal for HOA-restricted properties.", specs: "Heat rejection: up to 65% · UV block: 99%+" },
                { name: "Neutral Solar", tag: "Low Profile", desc: "Non-reflective gray appearance. Solar benefits with minimal change to glass aesthetics.", specs: "Heat rejection: up to 55% · UV block: 99%+" },
                { name: "Low-E", tag: "Year-Round Performance", desc: "Dual-season film — blocks heat in summer, retains warmth in winter. Non-reflective warm appearance.", specs: "Heat rejection: up to 46% · UV block: 99%+" },
                { name: "Reflective", tag: "Maximum Privacy", desc: "Mirror-like exterior. Maximum daytime privacy and heat rejection for residential and commercial.", specs: "Heat rejection: up to 82% · UV block: 99%+" },
                { name: "Exterior (Helios / NHE / RHE)", tag: "Exterior Application", desc: "Applied to outside glass surface. NHE 20, NHE 35 neutral and RHE 20, RHE 35, RHE 50 reflective options.", specs: "UV block: 99%+ · Single and double pane compatible" },
              ].map((film, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-4 bg-white">
                  <span className="text-xs font-black text-green-700 uppercase tracking-widest">{film.tag}</span>
                  <h3 className="font-black text-slate-900 text-lg mt-1 mb-2">LLumar {film.name}</h3>
                  <p className="text-slate-600 text-sm mb-3">{film.desc}</p>
                  <p className="text-xs text-slate-500 font-medium">{film.specs}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLAR CONTROL */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              LLumar Solar Control Film for Arizona
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl">
              LLumar solar control film is SRP and APS rebate eligible for qualifying Arizona installations. We provide NFRC documentation required for rebate applications. Customers submit directly to their utility provider. LLumar ceramic CTX series rejects up to 84% of solar heat without metallic content — compatible with GPS, WiFi, and cell signals.
            </p>
          </div>
        </section>

        {/* SAFETY & SECURITY */}
        <section className="py-16 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              LLumar Safety & Security Film
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-4xl">
              LLumar Safety S Series provides 4–8 mil protection for residential and light commercial glass — holding shattered glass in place during impacts, storms, and accidents. LLumar ArmorCoat Security Series delivers 8–14 mil forced-entry resistance rated for commercial, government, and high-security applications. Arizona House of Film installs both series across Arizona.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-8">
              {[
                { thickness: "4 mil (PS4)", label: "Anti-Shatter", desc: "Holds glass fragments on impact. Retail storefronts, residential sliding doors and skylights. Clear, neutral, or tinted options." },
                { thickness: "7 mil (PS7)", label: "Anti-Intrusion", desc: "Resists forced entry — slows intruder significantly. Recommended for ground-floor commercial, schools, and medical facilities." },
                { thickness: "8 mil (PS8)", label: "Blast Mitigation", desc: "Engineered for blast pressure resistance. Government and high-security facility standard." },
                { thickness: "13 mil (PS13)", label: "Anti-Intrusion+", desc: "Maximum forced entry resistance. High-security commercial, detention facilities, embassy-grade protection." },
              ].map((film, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-4 bg-white">
                  <span className="text-xs font-black text-blue-700 uppercase tracking-widest">{film.thickness}</span>
                  <h3 className="font-black text-slate-900 text-lg mt-1 mb-2">{film.label}</h3>
                  <p className="text-slate-600 text-sm">{film.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DECORATIVE */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              LLumar Decorative Film
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl">
              LLumar decorative film includes frosted, patterned, and etched options for privacy, branding, and aesthetic applications. Commonly installed in Scottsdale and Phoenix offices, medical facilities, conference rooms, and storefront glass. Custom-cut to any pattern or dimension.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-8">
              {[
                { name: "Frosted & Etched", desc: "Mimics sandblasted or acid-etched glass at a fraction of the cost. Conference rooms, office partitions, bathroom glass, and shower doors." },
                { name: "Gradient", desc: "Frosted-to-clear transition film. Architectural accent for conference rooms, reception areas, and interior partitions." },
                { name: "Colored & Tinted", desc: "Architectural color accents and branding applications. Available in multiple colors and opacities." },
                { name: "Custom Cut / Logos", desc: "Privacy patterns, company logos, and custom designs cut to specification. Installed on glass partitions, storefronts, and entry doors." },
              ].map((film, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-4 bg-white">
                  <h3 className="font-black text-slate-900 text-lg mb-2">LLumar {film.name}</h3>
                  <p className="text-slate-600 text-sm">{film.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY AZHOF */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-8">
              Why Arizona House of Film for LLumar Installation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Licensed', desc: 'ROC #314088 — Arizona licensed window film contractor since 2017.' },
                { title: '700+ Projects', desc: 'Verified installations for Coca-Cola, City of Mesa, LA Fitness, and commercial clients across Maricopa County.' },
                { title: 'NFRC Documentation', desc: 'We provide all technical documentation required for SRP rebate applications and architect specifications.' },
                { title: 'Free Assessment', desc: 'On-site measurement, glass compatibility check, and film recommendation — no obligation.' },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-green-500 p-6 bg-white">
                  <h3 className="font-black text-slate-950 text-sm uppercase mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <EstimatorCTA />

        {/* CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Free LLumar Film Estimate
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment. LLumar film specified for your glass type and performance requirements. Licensed ROC #314088.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl"
              >
                <Link to="/contact">Request Quote</Link>
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

        <section className="mt-10 border-t border-slate-200 pt-6 pb-4">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Related Resources</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link to="/residential-window-tinting" className="text-green-700 underline">Residential Window Film</Link>
              <Link to="/commercial-window-tinting" className="text-green-700 underline">Commercial Window Film</Link>
              <Link to="/security-window-film-phoenix" className="text-green-700 underline">Security Film Phoenix</Link>
              <Link to="/window-film-energy-rebates-arizona" className="text-green-700 underline">SRP Rebate Calculator</Link>
              <Link to="/decorative-window-films" className="text-green-700 underline">Decorative Films</Link>
              <Link to="/brands" className="text-green-700 underline">All Film Brands</Link>
              <Link to="/get-a-quote" className="text-green-700 underline">Get a Quote</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LlumarPage;
