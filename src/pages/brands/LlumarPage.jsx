import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import EstimatorCTA from '../../components/EstimatorCTA';
import { Button } from '@/components/ui/button';

const LlumarPage = () => {
  const pageTitle = 'LLumar Window Film Arizona | Licensed Installer | ROC #314088';
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
      </main>
    </>
  );
};

export default LlumarPage;
