import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import EstimatorCTA from '../../components/EstimatorCTA';
import { Button } from '@/components/ui/button';

const XPELPage = () => {
  const pageTitle = 'XPEL Window Film Phoenix AZ | VISION | ROC #314088';
  const metaDescription = 'Licensed XPEL VISION window film installer in Phoenix AZ. Solar control, security, decorative and specialty film for homes and businesses. Free estimates. ROC #314088.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/brands/xpel';
  const ogImage = 'https://arizonahouseoffilm.com/og-image.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'XPEL VISION Window Film Installation Phoenix AZ',
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
      question: 'Do you install XPEL window film in Phoenix AZ?',
      answer: 'Arizona House of Film installs XPEL VISION architectural window film for residential and commercial properties throughout Phoenix, Scottsdale, Chandler, Gilbert, Mesa, and the greater Valley. Licensed ROC #314088.',
    },
    {
      question: 'What is XPEL VISION window film?',
      answer: 'XPEL VISION is the architectural window film brand from XPEL Inc. — the Nasdaq-traded company known globally for automotive paint protection film. XPEL VISION includes solar control, safety and security, decorative, and specialty films for residential and commercial glass applications.',
    },
    {
      question: 'Which XPEL film is best for Arizona heat?',
      answer: "XPEL VISION Clear View Ceramic delivers the highest heat rejection — up to 75% — making it the top choice for Arizona's intense solar load. It's non-metallic, so it won't interfere with WiFi or cell signals, and maintains excellent clarity. For budget-conscious projects, Clear View Alloy delivers strong performance at a lower price point.",
    },
    {
      question: 'Does XPEL window film qualify for the SRP rebate?',
      answer: 'Yes — qualifying XPEL VISION solar control films with SHGC of 0.45 or lower qualify for the SRP residential rebate of $1 per square foot. Arizona House of Film provides all required NFRC documentation. Commercial SRP customers qualify for $0.60 per square foot.',
    },
    {
      question: 'How does XPEL window film compare to LLumar?',
      answer: "Both XPEL VISION and LLumar are premium architectural film brands with strong manufacturer warranties and NFRC testing. XPEL's ceramic line is particularly noted for its non-metallic construction and signal-friendly performance. LLumar's spectrally selective line offers comparable heat rejection with a slightly different optical profile. Arizona House of Film installs both — we recommend the best product for your specific glass type, orientation, and performance goals.",
    },
    {
      question: 'Is XPEL film good for double-pane windows?',
      answer: 'Yes — XPEL VISION films are compatible with single and double-pane glass. Film selection for insulated glass units (IGU) requires SHGC compliance to avoid thermal stress. We confirm glass compatibility and film suitability during your free on-site assessment.',
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
        { name: 'XPEL Window Film', path: '/brands/xpel' },
      ]} />

      <main id="main-content" className="bg-slate-950 min-h-screen">
        {/* HERO */}
        <section className="py-24 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <span className="inline-block px-4 py-1 bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-widest">
              XPEL VISION Professional Installer
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase leading-[0.85] tracking-tighter">
              XPEL Window Film Installation — Phoenix & Arizona
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-medium">
              Arizona House of Film installs the complete XPEL VISION architectural film lineup for residential and commercial properties across Phoenix, Scottsdale, and the Valley. ROC #314088.
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

        {/* ABOUT XPEL VISION */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              About XPEL VISION Window Film
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl">
              XPEL is best known as the global leader in automotive paint protection film (PPF), traded on Nasdaq under XPEL. In 2020 XPEL acquired Veloce Innovation and expanded into architectural window film under the XPEL VISION brand — bringing the same precision engineering and quality standards to residential and commercial glass. XPEL VISION films are NFRC-tested and carry manufacturer warranties backed by a publicly traded company. Arizona House of Film installs XPEL VISION for homes, offices, retail, and commercial properties across the Phoenix metro. Verified installations include properties for AutoZone, Starbucks, and commercial clients across Maricopa County.
            </p>
          </div>
        </section>

        {/* SOLAR CONTROL FILMS */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              XPEL VISION Solar Control Films
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              XPEL VISION solar control films reduce heat gain, block UV rays, and cut glare without darkening your space. Available in ceramic, alloy, and clear view options.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: 'VISION Clear View Ceramic',
                  tag: 'Top Performer',
                  desc: 'Premium ceramic technology for maximum heat rejection with exceptional clarity. Non-metallic — won\'t interfere with cell signals or electronics.',
                  specs: 'Heat rejection: up to 75% · UV block: 99.9% · Non-metallic',
                },
                {
                  name: 'VISION Clear View Alloy',
                  tag: 'Commercial Grade',
                  desc: 'Multi-layer alloy construction delivering strong solar performance at a mid-range price point. Ideal for commercial properties and multi-window residential.',
                  specs: 'Heat rejection: up to 65% · UV block: 99%+',
                },
                {
                  name: 'VISION Clear View Plus',
                  tag: 'Entry Solar',
                  desc: 'Entry-level solar control with reliable heat and UV rejection. Clear appearance maintains the natural look of existing glass.',
                  specs: 'Heat rejection: up to 50% · UV block: 99%+',
                },
              ].map((film, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-4 bg-white">
                  <span className="text-xs font-black text-green-700 uppercase tracking-widest">{film.tag}</span>
                  <h3 className="font-black text-slate-900 text-lg mt-1 mb-2">XPEL {film.name}</h3>
                  <p className="text-slate-600 text-sm mb-3">{film.desc}</p>
                  <p className="text-xs text-slate-500 font-medium">{film.specs}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SAFETY & SECURITY */}
        <section className="py-16 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              XPEL VISION Safety & Security Films
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-4xl mb-8">
              XPEL VISION security films hold glass together on impact — protecting against forced entry, smash-and-grab, and accidental breakage. Available in clear and tinted options.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  thickness: 'Clear Security',
                  label: 'Anti-Shatter',
                  desc: 'Invisible protection — holds glass fragments on impact without changing window appearance. Retail storefronts, residential sliding doors, skylights.',
                },
                {
                  thickness: '8 mil Silver',
                  label: 'Security + Solar',
                  desc: 'Combines 8 mil security performance with reflective solar control. Forced entry resistance plus heat rejection in one film.',
                },
                {
                  thickness: '8 mil Clear View Plus',
                  label: 'Security + Clarity',
                  desc: '8 mil protection with a nearly clear appearance. Maximum security with minimal tint for properties requiring clear sightlines.',
                },
                {
                  thickness: '8 mil Neutral',
                  label: 'Security + Neutral Tint',
                  desc: '8 mil security film with a neutral gray appearance. Subtle tint, strong protection for commercial and government applications.',
                },
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
              XPEL VISION Decorative Films
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              XPEL VISION decorative films add privacy and style to residential and commercial glass without sacrificing light.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'White Frost', desc: 'Mimics sandblasted or acid-etched glass. Diffuses light while providing complete privacy. Conference rooms, office partitions, bathroom glass.' },
                { name: 'White Out', desc: 'Full white opacity for complete privacy. Ideal for partitions, interior glass walls, and privacy panels.' },
                { name: 'Black Out', desc: 'Complete blackout for light control and privacy. Server rooms, media rooms, and high-privacy commercial applications.' },
                { name: 'Dusted Crystal', desc: 'Frosted appearance with a subtle crystal texture. Decorative privacy for residential and office glass.' },
              ].map((film, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-4 bg-white">
                  <h3 className="font-black text-slate-900 text-lg mb-2">XPEL {film.name}</h3>
                  <p className="text-slate-600 text-sm">{film.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ARIZONA CLIMATE */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              XPEL VISION for Arizona's Climate
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl">
              Arizona's intense solar environment — 299+ sunny days per year and sustained UV exposure — demands window film engineered for high-performance conditions. XPEL VISION's ceramic line delivers up to 75% heat rejection on west and south-facing glass where Arizona homes and commercial buildings absorb the most solar load. XPEL's non-metallic ceramic construction is particularly well-suited for Arizona properties with smart home systems, as ceramic film does not interfere with WiFi, cellular, or GPS signals. Arizona House of Film has installed XPEL VISION film on residential homes across Scottsdale, Chandler, and Gilbert, and commercial properties across the Phoenix metro. All XPEL installations include NFRC documentation for SRP rebate eligibility.
            </p>
          </div>
        </section>

        {/* WHY AZHOF */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-8">
              Why Arizona House of Film for XPEL Installation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Licensed', desc: 'ROC #314088, Arizona licensed contractor since 2017' },
                { title: '700+ Projects', desc: 'Verified installations for commercial and residential clients' },
                { title: 'NFRC Documentation', desc: 'All technical docs provided for SRP rebate applications' },
                { title: 'Free Estimates', desc: 'On-site assessment, exact measurements, no obligation' },
              ].map((card, i) => (
                <div key={i} className="border-l-4 border-green-500 p-6 bg-slate-50">
                  <h3 className="font-black text-slate-950 text-sm uppercase mb-2">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
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
              Frequently Asked Questions — XPEL Window Film
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
              Get a Free XPEL Film Estimate
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment. XPEL VISION film specified for your glass type and performance requirements. Licensed ROC #314088.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl"
              >
                <Link to="/get-a-quote">Request Quote</Link>
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
              <Link to="/residential-window-tinting" className="text-green-700 underline">Residential Window Film</Link>
              <Link to="/commercial-window-tinting" className="text-green-700 underline">Commercial Window Film</Link>
              <Link to="/security-window-film-phoenix" className="text-green-700 underline">Security Film Phoenix</Link>
              <Link to="/window-film-energy-rebates-arizona" className="text-green-700 underline">SRP Rebate Calculator</Link>
              <Link to="/brands/llumar" className="text-green-700 underline">LLumar Window Film</Link>
              <Link to="/brands" className="text-green-700 underline">All Film Brands</Link>
              <Link to="/get-a-quote" className="text-green-700 underline">Get a Quote</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default XPELPage;
