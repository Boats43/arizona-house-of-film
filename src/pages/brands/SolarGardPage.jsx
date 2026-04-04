import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import EstimatorCTA from '../../components/EstimatorCTA';
import { Button } from '@/components/ui/button';

const SolarGardPage = () => {
  const pageTitle = 'Solar Gard Window Film Phoenix AZ | Licensed Installer | ROC #314088';
  const metaDescription = 'Licensed Solar Gard window film installer in Phoenix AZ. Commercial, residential and security film. ROC #314088. Free estimate.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/brands/solar-gard';
  const ogImage = 'https://arizonahouseoffilm.com/og-image.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Solar Gard Window Film Installation Phoenix AZ',
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
      question: 'What makes Solar Gard different from other window films?',
      answer: 'Solar Gard is engineered by Saint-Gobain, one of the world\'s largest building materials companies, with over 40 years of window film manufacturing. The Panorama ceramic series uses nano-ceramic technology with zero metal content, eliminating signal interference. The Sterling and Silver lines deliver proven solar control for commercial and residential applications.',
    },
    {
      question: 'Is Solar Gard safe for dual-pane windows?',
      answer: 'Yes. Solar Gard films use CDA (construction dry adhesive) that is safe for dual-pane insulated glass units. SHGC compliance is confirmed during your free on-site assessment to avoid thermal stress on IGU windows.',
    },
    {
      question: 'What Solar Gard film is best for Arizona heat?',
      answer: 'Panorama CX 30 rejects 61% of total solar energy at 32% VLT for maximum heat rejection. For properties that need more visible light, Panorama Hilite 70 delivers 41% TSER at 70% VLT with nearly-clear appearance. Arizona House of Film recommends specific films based on glass orientation, type, and performance goals.',
    },
    {
      question: 'Does Solar Gard qualify for SRP/APS rebates?',
      answer: 'Yes. Qualifying Solar Gard solar control films with SHGC of 0.45 or lower meet SRP residential rebate requirements of $1 per square foot. Commercial SRP customers qualify for $0.60 per square foot. APS customers may qualify for energy efficiency credits. Arizona House of Film provides all required NFRC documentation for rebate applications.',
    },
    {
      question: 'How long does Solar Gard film last in Arizona?',
      answer: 'Solar Gard films typically last 15\u201325+ years with professional installation in Arizona conditions. The manufacturer warranty covers fading, bubbling, and delamination. Saint-Gobain engineering ensures the films are designed for high-UV, high-heat environments.',
    },
    {
      question: 'What is the difference between Sterling and Panorama series?',
      answer: 'Sterling uses traditional dyed/metallized construction for budget-friendly solar control. Panorama uses nano-ceramic technology for superior heat rejection without metal content or signal interference. Panorama films also block 99.9% of UV rays compared to 99% for Sterling.',
    },
    {
      question: 'Does Solar Gard Armorcoat meet school safety requirements?',
      answer: 'Yes. Armorcoat 8mil and 12mil meet GSA and school safety glazing standards for blast mitigation and forced entry resistance. Arizona House of Film installs Armorcoat security film on schools and government buildings throughout Arizona.',
    },
    {
      question: 'Can Solar Gard film be installed on commercial high-rise glass?',
      answer: 'Yes. Sterling and Panorama series are specified for commercial high-rise applications with proper SHGC compliance. Solar Gard films are installed on commercial buildings worldwide by Saint-Gobain certified installers.',
    },
    {
      question: 'Does Solar Gard film interfere with GPS or WiFi?',
      answer: 'Panorama ceramic series has zero metal content and does not interfere with GPS, cellular, WiFi, or Bluetooth signals. Sterling metallic series may cause minor interference due to its metallized construction.',
    },
    {
      question: 'How much does Solar Gard film cost in Phoenix?',
      answer: 'Residential projects typically range $600\u2013$2,500 depending on film type, window count, and glass size. Commercial projects are quoted by scope. Free on-site estimates are available for all Solar Gard installations. Call (480) 788-1591 or request a quote online.',
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
        { name: 'Solar Gard Window Film', path: '/brands/solar-gard' },
      ]} />

      <main id="main-content" className="bg-slate-950 min-h-screen">
        {/* HERO */}
        <section className="py-24 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <span className="inline-block px-4 py-1 bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-widest">
              Authorized Dealer &bull; ROC #314088
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase leading-[0.85] tracking-tighter">
              Solar Gard Window Film — Phoenix AZ Licensed Installer
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-medium">
              Saint-Gobain engineered window film for commercial, residential, and security applications. Panorama ceramic technology &mdash; no metal, no signal interference. Arizona House of Film is a licensed Solar Gard installer. ROC #314088.
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
              About Solar Gard Window Film
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-4">
              Solar Gard is a Saint-Gobain brand with over 40 years of window film manufacturing. Known for the Panorama ceramic and Sterling solar control lines, Solar Gard films are engineered for commercial and residential applications in extreme climates like Arizona.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl">
              The product range spans from budget-friendly Sterling metallized films to the premium Panorama nano-ceramic series and Armorcoat security line. Arizona House of Film is a licensed Solar Gard installer serving Phoenix, Scottsdale, Chandler, Gilbert, Mesa, and all of Arizona. Licensed ROC #314088.
            </p>
          </div>
        </section>

        {/* SOLAR CONTROL SERIES */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              Solar Gard Solar Control Series
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              Silver, Sterling, and Panorama solar control films &mdash; from traditional metallized to advanced nano-ceramic. All films reject 99%+ UV rays.
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
                    { name: 'Silver AG 25', vlt: '22%', tser: '69%', uv: '99%' },
                    { name: 'Silver AG 35', vlt: '34%', tser: '62%', uv: '99%' },
                    { name: 'Stainless Steel 35', vlt: '34%', tser: '58%', uv: '99%' },
                    { name: 'Sterling 40', vlt: '38%', tser: '55%', uv: '99%' },
                    { name: 'Sterling 60', vlt: '59%', tser: '42%', uv: '99%' },
                    { name: 'Sterling 70', vlt: '68%', tser: '36%', uv: '99%' },
                    { name: 'Panorama Hilite 70', vlt: '70%', tser: '41%', uv: '99.9%' },
                    { name: 'Panorama CX 30', vlt: '32%', tser: '61%', uv: '99.9%' },
                    { name: 'Panorama CX 50', vlt: '49%', tser: '48%', uv: '99.9%' },
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

        {/* PANORAMA SERIES */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              Solar Gard Panorama Series
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              Premium nano-ceramic films with zero metal content. The Panorama line delivers the highest performance in the Solar Gard range with 99.9% UV rejection.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: 'Panorama CX',
                  tag: 'Ceramic Technology',
                  desc: 'Nano-ceramic construction with zero metal content and no signal interference. Maximum heat rejection for commercial and residential applications in Arizona\u2019s extreme heat.',
                  specs: '32\u201349% VLT \u00b7 48\u201361% TSER \u00b7 99.9% UV',
                },
                {
                  name: 'Panorama Hilite',
                  tag: 'Maximum Clarity',
                  desc: 'Nearly-clear heat rejection for HOA-restricted properties and homeowners who want solar benefits without changing the look of their glass. Premium nano-ceramic technology.',
                  specs: '70% VLT \u00b7 41% TSER \u00b7 99.9% UV',
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

        {/* SAFETY & SECURITY */}
        <section className="py-16 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Solar Gard Armorcoat Safety &amp; Security Film
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-4xl mb-8">
              Armorcoat safety and security films hold shattered glass in place on impact &mdash; protecting against forced entry, storms, blasts, and accidents.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { thickness: 'Armorcoat 4mil', label: 'Anti-Shatter', desc: 'Invisible safety film \u2014 88% VLT, 99% UV block. Holds glass fragments on impact. Residential sliding doors, skylights, and retail storefronts.' },
                { thickness: 'Armorcoat 8mil', label: 'Anti-Intrusion', desc: '88% VLT, 99% UV block. Resists forced entry and smash-and-grab attacks. Schools, medical facilities, ground-floor commercial.' },
                { thickness: 'Armorcoat 12mil', label: 'Maximum Security', desc: '88% VLT, 99% UV block. Maximum forced-entry resistance and blast mitigation. Government facilities, schools, and high-security commercial applications.' },
                { thickness: 'Armorcoat Solar Safety', label: 'Security + Solar', desc: 'Combines security film with solar heat rejection. Tinted appearance with dual-purpose performance for buildings requiring both protection and energy savings.' },
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
              Solar Gard Decorative Films
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              Privacy and design films for office partitions, conference rooms, storefronts, and residential glass.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Frost', desc: 'Mimics sandblasted glass. Full privacy with light diffusion. Office partitions, bathroom glass, conference rooms.' },
                { name: 'Dusted', desc: 'Subtle frosted texture with soft diffusion. Decorative privacy for residential and commercial interiors.' },
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

        {/* WHY SOLAR GARD */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-8">
              Why Solar Gard for Arizona Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Saint-Gobain Engineered', desc: 'Backed by one of the world\'s largest building materials companies with over 40 years of window film manufacturing expertise.' },
                { title: 'Panorama Ceramic Technology', desc: 'Zero metal content, no signal interference. Nano-ceramic construction delivers maximum heat rejection with optical clarity.' },
                { title: 'Armorcoat Security', desc: 'Full security film line from 4mil to 12mil. GSA and school safety compliant for blast mitigation and forced entry resistance.' },
                { title: 'Dual-Pane Safe', desc: 'CDA adhesive is approved for dual-pane insulated glass units when properly specified \u2014 no thermal stress risk.' },
                { title: '99.9% UV Rejection', desc: 'Panorama series blocks 99.9% of UV rays \u2014 protecting skin, furniture, flooring, and artwork from sun damage.' },
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
              Solar Gard Applications by Property Type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { type: 'Office Buildings', film: 'Sterling 40\u201360', desc: 'Balanced glare reduction and heat control for commercial office glass. Budget-friendly solar control with proven performance.' },
                { type: 'Residential Homes', film: 'Panorama Hilite 70', desc: 'Nearly-clear heat rejection for homeowners who want solar benefits without changing the look of their glass. HOA-friendly.' },
                { type: 'Government & Schools', film: 'Armorcoat 8\u201312mil', desc: 'Safety and blast mitigation film for government facilities, schools, and buildings requiring code-compliant glazing protection.' },
                { type: 'Retail Storefronts', film: 'Panorama CX 30', desc: 'Maximum heat rejection at 61% TSER. Reduces cooling costs and protects merchandise from UV damage while maintaining storefront visibility.' },
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
              Solar Gard Pricing &mdash; Phoenix AZ
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              All Solar Gard installations are custom-quoted based on glass type, square footage, film selection, and access. Contact us for exact installed pricing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { series: 'Sterling Series', range: '$7\u2013$15/sq ft installed', note: 'Varies by VLT selection and project scope' },
                { series: 'Panorama Series', range: 'Premium \u2014 project quoted', note: 'CX and Hilite nano-ceramic films' },
                { series: 'Armorcoat Security', range: '$10\u2013$22/sq ft installed', note: '4mil, 8mil, 12mil clear and solar safety options' },
              ].map((tier, i) => (
                <div key={i} className="bg-white border-l-4 border-green-500 p-6">
                  <h3 className="font-black text-slate-950 text-sm uppercase mb-1">{tier.series}</h3>
                  <p className="text-green-700 font-black text-lg mb-1">{tier.range}</p>
                  <p className="text-slate-500 text-xs">{tier.note}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm font-medium">Free on-site estimate for all Solar Gard installations. Call <a href="tel:480-788-1591" className="text-green-700 font-bold">(480) 788-1591</a> or <Link to="/get-a-quote" className="text-green-700 font-bold underline">request a quote online</Link>.</p>
          </div>
        </section>

        {/* WHY AZHOF */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-8">
              Why Arizona House of Film for Solar Gard
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
              Frequently Asked Questions &mdash; Solar Gard Window Film
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
              Get a Free Solar Gard Estimate
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment. Solar Gard film specified for your glass type and performance requirements. Licensed ROC #314088.
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
              <Link to="/brands/huper-optik" className="text-green-700 underline">H&uuml;per Optik Window Film</Link>
              <Link to="/brands" className="text-green-700 underline">All Film Brands</Link>
              <Link to="/get-a-quote" className="text-green-700 underline">Get a Quote</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SolarGardPage;
