import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import EstimatorCTA from '../../components/EstimatorCTA';
import { Button } from '@/components/ui/button';

const HuperOptikPage = () => {
  const pageTitle = 'H\u00fcper Optik Window Film Phoenix AZ | ROC #314088';
  const metaDescription = 'Licensed H\u00fcper Optik window film installer in Phoenix AZ. Ceramic 20-70, Select SECH & DREI, Safety CS series. German-engineered nano-ceramic technology. ROC #314088. Free estimate.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/brands/huper-optik';
  const ogImage = 'https://arizonahouseoffilm.com/og-image.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'H\u00fcper Optik Window Film Installation Phoenix AZ',
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
      question: 'What makes H\u00fcper Optik different from other ceramic films?',
      answer: 'H\u00fcper Optik uses multi-layer nano-ceramic technology with zero metal content. Unlike metallic or dyed films, H\u00fcper Optik will not interfere with GPS, cellular, or WiFi signals, and will not shift color over time. The nano-ceramic construction delivers high heat rejection with excellent optical clarity. All ceramic and select series films reject 99% of UV rays.',
    },
    {
      question: 'Is H\u00fcper Optik safe for dual-pane windows?',
      answer: 'Yes. H\u00fcper Optik ceramic films use PSA (pressure-sensitive adhesive) that is safe for dual-pane insulated glass units. Film selection for IGU windows requires SHGC compliance to avoid thermal stress \u2014 we confirm glass compatibility during your free on-site assessment. The Klar 85 and Ceramic 70 lines are particularly well-suited for dual-pane residential glass.',
    },
    {
      question: 'What H\u00fcper Optik film is best for Arizona heat?',
      answer: 'For maximum heat rejection, Select DREI rejects 67% of total solar energy at 35% VLT \u2014 the highest TSER in the H\u00fcper Optik lineup. For properties that need more visible light, Select SECH delivers 51% TSER at 61% VLT. For nearly-clear heat rejection, Klar 85 blocks 28% of solar energy while transmitting 82% of visible light. Arizona House of Film recommends specific films based on glass orientation, type, and performance goals.',
    },
    {
      question: 'Does H\u00fcper Optik qualify for SRP/APS rebates?',
      answer: 'Yes. Qualifying H\u00fcper Optik solar control films with SHGC of 0.45 or lower meet SRP residential rebate requirements of $1 per square foot. Commercial SRP customers qualify for $0.60 per square foot. APS customers may qualify for energy efficiency credits. Arizona House of Film provides all required NFRC documentation for rebate applications.',
    },
    {
      question: 'How long does H\u00fcper Optik film last in Arizona?',
      answer: 'H\u00fcper Optik ceramic and select series films carry manufacturer warranties and are engineered for high-UV, high-heat environments like Arizona. The nano-ceramic construction resists fading, bubbling, and delamination. With professional installation, H\u00fcper Optik film typically lasts 15\u201325+ years in Arizona conditions. Arizona House of Film has installed H\u00fcper Optik on commercial and residential properties across the Phoenix metro since 2017.',
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
        { name: 'H\u00fcper Optik Window Film', path: '/brands/huper-optik' },
      ]} />

      <main id="main-content" className="bg-slate-950 min-h-screen">
        {/* HERO */}
        <section className="py-24 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <span className="inline-block px-4 py-1 bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-widest">
              Authorized Dealer &bull; ROC #314088
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase leading-[0.85] tracking-tighter">
              H&uuml;per Optik Window Film — Phoenix AZ Licensed Installer
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-medium">
              German-engineered nano-ceramic window film. Multi-layer ceramic technology &mdash; no metal, no signal interference, no color shift. Arizona House of Film is an authorized H&uuml;per Optik dealer and installer. ROC #314088.
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
              About H&uuml;per Optik Window Film
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-4">
              H&uuml;per Optik is a German-engineered nano-ceramic window film brand that uses multi-layer ceramic particle technology to achieve high heat rejection without metal content. Unlike metallic or dyed films, H&uuml;per Optik maintains signal transparency for GPS, cellular, and WiFi &mdash; and does not shift color over the life of the film.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl">
              H&uuml;per Optik is one of the most technically advanced film lines available for residential and commercial applications. The product range spans from nearly-clear Klar 85 (82% VLT) to the high-rejection Select DREI (67% TSER). Arizona House of Film is an authorized H&uuml;per Optik dealer and installer serving Phoenix, Scottsdale, Chandler, Gilbert, Mesa, and all of Arizona. Licensed ROC #314088.
            </p>
          </div>
        </section>

        {/* CERAMIC SERIES */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              H&uuml;per Optik Ceramic Series
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              The core nano-ceramic line &mdash; available from 20% to 73% visible light transmission. All films reject 99% UV and use PSA adhesive safe for dual-pane glass.
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse bg-white rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-slate-900 text-white text-left">
                    <th className="px-4 py-3 font-black uppercase text-xs tracking-wider">Film</th>
                    <th className="px-4 py-3 font-black uppercase text-xs tracking-wider">VLT</th>
                    <th className="px-4 py-3 font-black uppercase text-xs tracking-wider">TSER</th>
                    <th className="px-4 py-3 font-black uppercase text-xs tracking-wider">UV Block</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { name: 'Ceramic 20', vlt: '20%', tser: '66%', uv: '99%' },
                    { name: 'Ceramic 30', vlt: '31%', tser: '60%', uv: '99%' },
                    { name: 'Ceramic 35', vlt: '35%', tser: '59%', uv: '99%' },
                    { name: 'Ceramic 40', vlt: '41%', tser: '53%', uv: '99%' },
                    { name: 'Ceramic 45', vlt: '43%', tser: '54%', uv: '99%' },
                    { name: 'Ceramic 50', vlt: '53%', tser: '45%', uv: '99%' },
                    { name: 'Ceramic 60', vlt: '61%', tser: '39%', uv: '99%' },
                    { name: 'Ceramic 70', vlt: '73%', tser: '44%', uv: '99%' },
                    { name: 'Klar 85', vlt: '82%', tser: '28%', uv: '99%' },
                  ].map((film, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-4 py-3 font-bold text-slate-900">{film.name}</td>
                      <td className="px-4 py-3 text-slate-700">{film.vlt}</td>
                      <td className="px-4 py-3 text-slate-700 font-semibold">{film.tser}</td>
                      <td className="px-4 py-3 text-green-700 font-semibold">{film.uv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-sm">VLT = Visible Light Transmission &bull; TSER = Total Solar Energy Rejected &bull; Higher TSER = more heat blocked</p>
          </div>
        </section>

        {/* SELECT SERIES */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              H&uuml;per Optik Select Series
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              Spectrally selective nano-ceramic films engineered for maximum performance. The Select line delivers the highest heat rejection in the H&uuml;per Optik range.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: 'Select SECH',
                  tag: 'Best Clarity + Performance',
                  desc: 'Spectrally selective nano-ceramic. High visible light with aggressive heat rejection. Ideal for residential and HOA-restricted properties where appearance matters.',
                  specs: '61% VLT \u00b7 51% TSER \u00b7 99% UV',
                },
                {
                  name: 'Select DREI',
                  tag: 'Maximum Heat Rejection',
                  desc: 'The highest-performing film in the H\u00fcper Optik lineup. Maximum total solar energy rejection for west and south-facing glass in Arizona\u2019s extreme heat.',
                  specs: '35% VLT \u00b7 67% TSER \u00b7 99% UV',
                },
              ].map((film, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-6 bg-slate-50">
                  <span className="text-xs font-black text-green-700 uppercase tracking-widest">{film.tag}</span>
                  <h3 className="font-black text-slate-900 text-xl mt-1 mb-2">{film.name}</h3>
                  <p className="text-slate-600 text-sm mb-3">{film.desc}</p>
                  <p className="text-xs text-slate-500 font-bold">{film.specs}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRADITIONAL SERIES */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              H&uuml;per Optik Traditional Series
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              Dual-reflective, metallic bronze, and high-reflectance silver films for commercial and industrial applications where maximum rejection and privacy are priorities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'Fusion Series', films: 'Fusion 10, 20, 28', desc: 'Dual-reflective construction \u2014 reflective exterior, neutral interior. Maximum daytime privacy with strong solar performance for commercial glass.' },
                { name: 'Bronze Series', films: 'Bronze 25, 40', desc: 'Traditional metallic bronze appearance. Warm-toned solar control for commercial properties and retrofits.' },
                { name: 'Silver Series', films: 'Silver 18, 30', desc: 'High-reflectance mirror finish. Maximum daytime privacy and solar rejection for industrial, warehouse, and high-security applications.' },
              ].map((series, i) => (
                <div key={i} className="bg-white border-l-4 border-green-500 p-6">
                  <h3 className="font-black text-slate-950 text-sm uppercase mb-1">{series.name}</h3>
                  <p className="text-xs text-slate-500 font-bold mb-2">{series.films}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{series.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SAFETY & SECURITY */}
        <section className="py-16 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              H&uuml;per Optik Safety &amp; Security Film
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-4xl mb-8">
              Clear Shield and Shield series safety films hold shattered glass in place on impact &mdash; protecting against forced entry, storms, and accidents.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { thickness: 'Clear Shield 4mil', label: 'Anti-Shatter', desc: 'Invisible safety film \u2014 88% VLT, 99% UV block. Holds glass fragments on impact. Residential sliding doors, skylights, and retail storefronts.' },
                { thickness: 'Clear Shield 8mil', label: 'Anti-Intrusion', desc: '88% VLT, 99% UV block. Resists forced entry and smash-and-grab attacks. Schools, medical facilities, ground-floor commercial.' },
                { thickness: 'Clear Shield 14mil', label: 'Maximum Security', desc: '88% VLT, 99% UV block. Maximum forced-entry resistance and blast mitigation. Government facilities, embassies, high-security commercial.' },
                { thickness: 'Shield 35 Neutral 8mil', label: 'Security + Solar', desc: '36% VLT, 55% TSER, 99% UV. Combines 8mil security with solar heat rejection. Tinted appearance with dual-purpose performance.' },
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
              H&uuml;per Optik Decorative Films
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              Privacy and design films for office partitions, conference rooms, storefronts, and residential glass.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Frost', desc: 'Mimics sandblasted glass. Full privacy with light diffusion. Office partitions, bathroom glass, conference rooms.' },
                { name: 'Dusted Crystal', desc: 'Subtle frosted texture with crystal effect. Decorative privacy for residential and commercial interiors.' },
                { name: 'Whiteout', desc: 'Full white opacity. Complete visual privacy for interior partitions, server rooms, and medical facilities.' },
                { name: 'Blackout', desc: 'Total light blocking. Media rooms, server rooms, and spaces requiring complete darkness and privacy.' },
              ].map((film, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-4 bg-white">
                  <h3 className="font-black text-slate-900 text-lg mb-2">{film.name}</h3>
                  <p className="text-slate-600 text-sm">{film.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY HUPER OPTIK */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-8">
              Why H&uuml;per Optik for Arizona Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Multi-Layer Nano-Ceramic', desc: 'Zero metal content. Ceramic particles layered for maximum heat rejection without signal interference.' },
                { title: 'No Signal Interference', desc: 'GPS, cellular, WiFi, and Bluetooth signals pass through unaffected \u2014 critical for smart homes and commercial buildings.' },
                { title: 'No Color Shift', desc: 'Nano-ceramic construction does not fade, purple, or shift color over time. Maintains original appearance for the life of the film.' },
                { title: 'Dual-Pane Safe', desc: 'PSA adhesive is approved for dual-pane insulated glass units when properly specified \u2014 no thermal stress risk.' },
                { title: '99% UV Rejection', desc: 'All ceramic and select series films block 99% of UV rays \u2014 protecting skin, furniture, flooring, and artwork.' },
                { title: 'NFRC Certified', desc: 'Films carry NFRC ratings required for SRP and APS rebate applications in Arizona.' },
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
              H&uuml;per Optik Applications by Property Type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { type: 'Office Buildings', film: 'Ceramic 40\u201360', desc: 'Balanced glare reduction and heat control for commercial office glass. Non-metallic \u2014 no interference with building WiFi or cellular systems.' },
                { type: 'Residential Homes', film: 'Klar 85 or Ceramic 70', desc: 'Nearly-clear heat rejection for homeowners who want solar benefits without changing the look of their glass. HOA-friendly.' },
                { type: 'Government & Compliance', film: 'Clear Shield 8mil or 14mil', desc: 'Safety and blast mitigation film for government facilities, schools, and buildings requiring code-compliant glazing protection.' },
                { type: 'Retail Storefronts', film: 'Select DREI', desc: 'Maximum heat rejection at 67% TSER. Reduces cooling costs and protects merchandise from UV damage while maintaining storefront visibility.' },
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
              H&uuml;per Optik Pricing &mdash; Phoenix AZ
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              All H&uuml;per Optik installations are custom-quoted based on glass type, square footage, film selection, and access. Contact us for exact installed pricing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { series: 'Ceramic Series', range: '$8\u2013$18/sq ft installed', note: 'Varies by VLT selection and project scope' },
                { series: 'Select Series', range: 'Premium \u2014 project quoted', note: 'SECH and DREI spectrally selective films' },
                { series: 'Safety & Security', range: '$12\u2013$25/sq ft installed', note: '4mil, 8mil, 14mil clear and tinted options' },
              ].map((tier, i) => (
                <div key={i} className="bg-white border-l-4 border-green-500 p-6">
                  <h3 className="font-black text-slate-950 text-sm uppercase mb-1">{tier.series}</h3>
                  <p className="text-green-700 font-black text-lg mb-1">{tier.range}</p>
                  <p className="text-slate-500 text-xs">{tier.note}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm font-medium">Free on-site estimate for all H&uuml;per Optik installations. Call <a href="tel:480-788-1591" className="text-green-700 font-bold">(480) 788-1591</a> or <Link to="/get-a-quote" className="text-green-700 font-bold underline">request a quote online</Link>.</p>
          </div>
        </section>

        {/* WHY AZHOF */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-8">
              Why Arizona House of Film for H&uuml;per Optik
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Licensed', desc: 'ROC #314088 \u2014 Arizona licensed window film contractor since 2017.' },
                { title: '713+ Projects', desc: 'Verified installations for Coca-Cola, Frank Lloyd Wright Foundation, U.S. Navy, and commercial clients across Arizona.' },
                { title: 'NFRC Documentation', desc: 'We provide all technical documentation required for SRP and APS rebate applications.' },
                { title: 'Free Assessment', desc: 'On-site measurement, glass compatibility check, and film recommendation \u2014 no obligation.' },
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
              Frequently Asked Questions &mdash; H&uuml;per Optik Window Film
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
              Get a Free H&uuml;per Optik Estimate
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment. H&uuml;per Optik film specified for your glass type and performance requirements. Licensed ROC #314088.
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
              <Link to="/commercial-window-tinting" className="text-green-700 underline">Commercial Window Film</Link>
              <Link to="/residential-window-tinting" className="text-green-700 underline">Residential Window Film</Link>
              <Link to="/films" className="text-green-700 underline">Film Catalog</Link>
              <Link to="/window-film-energy-rebates-arizona" className="text-green-700 underline">SRP Rebate Info</Link>
              <Link to="/brands/llumar" className="text-green-700 underline">LLumar Window Film</Link>
              <Link to="/brands/xpel" className="text-green-700 underline">XPEL Window Film</Link>
              <Link to="/brands" className="text-green-700 underline">All Film Brands</Link>
              <Link to="/get-a-quote" className="text-green-700 underline">Get a Quote</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HuperOptikPage;
