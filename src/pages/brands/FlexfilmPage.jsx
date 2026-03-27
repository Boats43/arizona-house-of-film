import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import EstimatorCTA from '../../components/EstimatorCTA';
import { Button } from '@/components/ui/button';

const FlexfilmPage = () => {
  const pageTitle = 'Flexfilm Window Film Phoenix AZ | Dualflex & Decorative | Licensed Installer | ROC #314088';
  const metaDescription = 'Professional Flexfilm window film installer in Phoenix AZ. Dualflex dual reflective, Panashield ceramic, Safetyflex security, and decorative film for homes and businesses. Free estimates. ROC #314088.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/brands/flexfilm';
  const ogImage = 'https://arizonahouseoffilm.com/og-image.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Flexfilm Window Film Installation Phoenix AZ',
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
      question: 'Do you install Flexfilm window film in Phoenix AZ?',
      answer: 'Arizona House of Film installs Flexfilm architectural window film — including Dualflex, Panashield, Chromoflex, Safetyflex, and specialty decorative films — for residential and commercial properties throughout Phoenix, Scottsdale, Chandler, Gilbert, Mesa, and the greater Valley. Licensed ROC #314088.',
    },
    {
      question: 'What is Flexfilm Dualflex window film?',
      answer: "Dualflex is Flexfilm's flagship dual reflective architectural film. It features a metallized outer layer that reflects solar energy and a carbon inner layer that provides natural warm appearance with excellent interior visibility. Carbon construction means no fading or color change over time. Dualflex is compatible with all glass types and is one of the most popular architectural film technologies in the industry.",
    },
    {
      question: 'Does Flexfilm make a non-reflective window film?',
      answer: "Yes — Flexfilm's Panashield and Nanoshield ceramic series provide solar heat control without a reflective appearance. These nano-ceramic films absorb rather than reflect solar energy, delivering heat rejection with high visible light transmission and a clear, natural look. Ideal for HOA-restricted properties and retail environments.",
    },
    {
      question: 'Does Flexfilm window film qualify for the SRP rebate?',
      answer: 'Qualifying Flexfilm solar control films with SHGC of 0.45 or lower may qualify for the SRP residential rebate of $1 per square foot. Arizona House of Film provides NFRC performance documentation for qualifying installations. Contact us to confirm rebate eligibility for specific Flexfilm products.',
    },
    {
      question: 'What is the difference between Flexfilm and major brands like LLumar or SunTek?',
      answer: 'Flexfilm operates as an independent manufacturer without the exclusive dealer network requirements of brands like LLumar (Eastman) or SunTek (Eastman). This means Flexfilm products are accessible without minimum purchase commitments or geographic restrictions. Performance and quality are comparable to major brands — Flexfilm\'s Dualflex and ceramic lines rival premium manufacturer offerings.',
    },
    {
      question: 'Is Flexfilm safe for double-pane windows?',
      answer: 'Film selection for insulated glass units (IGU/double-pane) requires SHGC compliance to avoid thermal stress. Arizona House of Film conducts on-site glass assessment to confirm Flexfilm product compatibility with your specific glass type before installation. We will not install film on glass that poses thermal stress risk.',
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
        { name: 'Flexfilm Window Film', path: '/brands/flexfilm' },
      ]} />

      <main id="main-content" className="bg-slate-950 min-h-screen">
        {/* HERO */}
        <section className="py-24 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <span className="inline-block px-4 py-1 bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-widest">
              Flexfilm Professional Installer &middot; Founded 1987
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase leading-[0.85] tracking-tighter">
              Flexfilm Window Film Installation — Phoenix & Arizona
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-medium">
              Arizona House of Film installs Flexfilm architectural window film — including Dualflex, Panashield ceramic, Safetyflex security, and specialty decorative films — for residential and commercial properties across Phoenix, Scottsdale, and the Valley. ROC #314088.
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

        {/* ABOUT FLEXFILM */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              About Flexfilm Window Film
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl">
              Flexfilm has been manufacturing professional-grade window film since 1987 — founded by Ralph Van Pelt in a driveway that became one of the window film industry's most respected independent brands. Unlike manufacturer-aligned brands, Flexfilm operates without buy-ins, quotas, or dealer exclusivity requirements — delivering professional-grade film that rivals and often outperforms major brands. Flexfilm's architectural lineup includes dual reflective, ceramic, silver reflective, sputtered, security, and decorative films for flat glass applications. Arizona House of Film installs Flexfilm architectural film for commercial and residential properties across the Phoenix metro.
            </p>
          </div>
        </section>

        {/* SOLAR CONTROL FILMS */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              Flexfilm Solar Control Films
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              Flexfilm solar control films block up to 99% of UV rays and reduce solar heat gain across multiple technology types — from reflective to ceramic. Available for interior application on residential and commercial flat glass.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: 'Dualflex \u2014 Dual Reflective',
                  tag: 'Most Popular',
                  desc: "Flexfilm's flagship architectural film. Mirror exterior, clear interior — carbon inner layer delivers natural warm appearance with no fade or color change. Compatible with all glass types. The most popular architectural film technology in the industry.",
                  specs: 'UV block: 99% \u00B7 Dual reflective \u00B7 Interior application \u00B7 All glass types compatible \u00B7 Carbon inner layer \u2014 no fading',
                },
                {
                  name: 'Panashield \u2014 Ceramic',
                  tag: 'Non-Reflective Ceramic',
                  desc: 'Nano-ceramic technology delivering heat rejection without reflective appearance. High visible light transmission with solar heat control \u2014 ideal for residential properties and retail where a clear, non-mirror look is required.',
                  specs: 'UV block: 99% \u00B7 Non-reflective appearance \u00B7 High VLT \u00B7 Ceramic technology',
                },
                {
                  name: 'Nanoshield \u2014 Ceramic',
                  tag: 'Ceramic Series',
                  desc: 'Nano-ceramic solar control for applications requiring subtle aesthetics. Absorbs rather than reflects solar energy \u2014 delivering heat control without the mirror finish of metallized films.',
                  specs: 'UV block: 99% \u00B7 Absorption technology \u00B7 Low reflectivity \u00B7 Ceramic construction',
                },
                {
                  name: 'Chromoflex \u2014 Silver Reflective',
                  tag: 'Maximum Rejection',
                  desc: 'High-reflectivity silver film for maximum heat rejection and daytime privacy. Mirror-like exterior provides strong solar performance for west and south-facing commercial glass.',
                  specs: 'UV block: 99% \u00B7 High heat rejection \u00B7 Maximum daytime privacy \u00B7 Reflective silver',
                },
                {
                  name: 'Sputterflex \u2014 Sputtered Metal',
                  tag: 'Unique Color Tones',
                  desc: 'Sputtered metal construction offering unique color tones and solar performance. Available in warm and neutral finishes for properties requiring distinctive architectural aesthetics.',
                  specs: 'UV block: 99% \u00B7 Sputtered construction \u00B7 Multiple color tones \u00B7 Commercial and residential',
                },
                {
                  name: 'Silver Reflective Series',
                  tag: 'Classic Solar',
                  desc: 'Classic high-reflective energy control film. Strong heat rejection with a traditional silver mirror appearance. Reliable specification for commercial buildings and high-solar residential applications.',
                  specs: 'UV block: 99% \u00B7 High reflectivity \u00B7 Classic silver appearance \u00B7 Proven technology',
                },
              ].map((film, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-4 bg-white">
                  <span className="text-xs font-black text-green-700 uppercase tracking-widest">{film.tag}</span>
                  <h3 className="font-black text-slate-900 text-lg mt-1 mb-2">Flexfilm {film.name}</h3>
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
              Flexfilm Safety & Security Film
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-4xl mb-8">
              Flexfilm Safetyflex security film reinforces existing glass against breakage — holding fragments together on impact to protect occupants from glass hazards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Safetyflex Security', desc: 'Virtually clear safety film holding glass fragments on impact. UV protection, interior application, suitable for most glass types. Retail storefronts, residential sliding doors, skylights, and commercial entry glass.' },
                { name: 'Safety + Solar Combination', desc: 'Security film combined with solar control properties — protection against breakage plus heat and UV reduction in one film layer.' },
              ].map((film, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-4 bg-white">
                  <h3 className="font-black text-slate-900 text-lg mb-2">Flexfilm {film.name}</h3>
                  <p className="text-slate-600 text-sm">{film.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DECORATIVE & SPECIALTY */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              Flexfilm Decorative & Specialty Films
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              Flexfilm specialty films add privacy, blackout, and decorative elements to residential and commercial glass applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'White Frost', desc: 'Translucent frosted glass appearance. 55% VLT — diffuses light while providing privacy. Conference rooms, office partitions, bathroom glass, shower doors.' },
                { name: 'White Out', desc: 'Full white opacity for complete privacy partitions. Glossy white appearance for interior glass walls, office partitions, and design applications.' },
                { name: 'Black Out', desc: '100% opaque — no visibility in or out. Complete light blockage and total privacy. Server rooms, media rooms, blackout applications. Solid black matte finish.' },
                { name: 'Custom & Specialty', desc: 'Flexfilm offers customized window film solutions for non-standard applications — specialized performance requirements, unique glass types, and custom project specifications.' },
              ].map((film, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-4 bg-white">
                  <h3 className="font-black text-slate-900 text-lg mb-2">Flexfilm {film.name}</h3>
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
              Flexfilm for Arizona's Climate
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl">
              Arizona's sustained UV exposure, 299+ sunny days per year, and summer surface temperatures exceeding 160&deg;F on west-facing glass make solar control film selection critical. Flexfilm's Dualflex dual reflective series is particularly well-suited for Arizona's climate — carbon inner layer construction eliminates the fading and color shift common in dye-based films exposed to Arizona's intense UV. The Panashield ceramic series is the choice for residential applications where a non-reflective appearance is required by HOA standards. For maximum heat rejection on commercial west and south-facing glass, Flexfilm's Chromoflex and Silver Reflective series deliver high-performance solar control with proven durability. Arizona House of Film provides professional installation assessment for all Flexfilm products — confirming glass compatibility, orientation requirements, and SHGC performance before installation.
            </p>
          </div>
        </section>

        {/* WHY AZHOF */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-8">
              Why Arizona House of Film for Flexfilm Installation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Licensed', desc: 'ROC #314088, Arizona licensed contractor since 2017' },
                { title: '700+ Projects', desc: 'Verified residential and commercial installations' },
                { title: 'Glass Assessment', desc: 'We confirm film-to-glass compatibility on-site before installation' },
                { title: 'Free Estimate', desc: 'On-site measurement and film recommendation, no obligation' },
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
              Frequently Asked Questions — Flexfilm Window Film
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
              Get a Free Flexfilm Estimate
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment. Flexfilm specified for your glass type and performance requirements. Licensed ROC #314088.
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
              <Link to="/security-window-film-phoenix" className="text-green-700 underline">Security Film</Link>
              <Link to="/decorative-window-films" className="text-green-700 underline">Decorative Films</Link>
              <Link to="/window-film-energy-rebates-arizona" className="text-green-700 underline">SRP Rebate Calculator</Link>
              <Link to="/brands/llumar" className="text-green-700 underline">LLumar Window Film</Link>
              <Link to="/brands/madico" className="text-green-700 underline">Madico Window Film</Link>
              <Link to="/brands" className="text-green-700 underline">All Film Brands</Link>
              <Link to="/get-a-quote" className="text-green-700 underline">Get a Quote</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FlexfilmPage;
