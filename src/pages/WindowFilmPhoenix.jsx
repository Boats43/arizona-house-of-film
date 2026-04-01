import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { motion } from 'framer-motion';
import { Sun, Shield, Palette, Layers, Eye, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EstimatorCTA from '../components/EstimatorCTA';
import ContactFormSection from '@/components/contact/ContactFormSection';

const WindowFilmPhoenix = () => {
  const pageTitle = 'Window Film Phoenix AZ | Licensed Installer | All Film Types | ROC #314088';
  const metaDescription = 'Window film installation in Phoenix AZ \u2014 solar control, security, decorative, privacy and anti-graffiti film. Licensed ROC #314088. 713+ projects. Free estimate (480) 788-1591.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/window-film-phoenix';
  const ogImage = 'https://arizonahouseoffilm.com/og-image.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Window Film Installation Phoenix AZ',
    serviceType: 'Window Film Installation',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://arizonahouseoffilm.com',
      name: 'Arizona House of Film',
    },
    areaServed: { '@type': 'City', name: 'Phoenix', addressRegion: 'AZ' },
    description: metaDescription,
    url: canonicalUrl,
  };

  const faqData = [
    {
      question: 'How much does window film cost in Phoenix AZ?',
      answer: 'Residential window film in Phoenix typically runs $600\u2013$2,500 for a whole-home installation depending on the number of windows and film type. Commercial projects range from $2,500\u2013$15,000+. Government and specialty projects are custom quoted. All projects include a free on-site estimate \u2014 call (480) 788-1591.',
    },
    {
      question: 'What types of window film do you install in Phoenix?',
      answer: 'We install solar control film (ceramic, dual-reflective, spectrally selective), security and safety film (4\u201321 mil), decorative and privacy film (frosted, gradient, Casper cloaking), anti-graffiti film, reflective one-way film, and energy-saving film. All major brands including LLumar, H\u00fcper Optik, XPEL, Madico, SunTek, and Solyx.',
    },
    {
      question: 'Does window film really help with Phoenix heat?',
      answer: 'Yes. Quality ceramic and spectrally selective window film blocks 45\u201384% of solar heat entering through glass. On west and south-facing windows in Phoenix \u2014 where surface temperatures reach 150\u00b0F+ in summer \u2014 window film can reduce indoor temperatures by 10\u201315\u00b0F and cut cooling costs by 10\u201330%.',
    },
    {
      question: 'Does window film qualify for SRP or APS rebates in Phoenix?',
      answer: 'Yes. SRP residential customers may qualify for $1 per square foot on qualifying solar films. SRP commercial customers qualify for $0.60 per square foot. APS customers may qualify for energy efficiency credits. Arizona House of Film provides all NFRC documentation required for rebate applications.',
    },
    {
      question: 'How long does window film last in Phoenix?',
      answer: 'Professional-grade window film installed by a licensed contractor typically lasts 15\u201325+ years in Phoenix conditions. Quality ceramic films resist fading, bubbling, and delamination even under sustained 115\u00b0F heat and high UV exposure. Cheap films from big-box stores often fail within 3\u20135 years in Arizona.',
    },
    {
      question: 'Is window film safe for dual-pane windows?',
      answer: 'Yes \u2014 when properly specified. Film selection for dual-pane insulated glass units requires SHGC compliance to avoid thermal stress. We confirm glass compatibility during every free on-site assessment. Most ceramic and spectrally selective films are dual-pane safe with PSA adhesive.',
    },
    {
      question: 'What window film is best for Arizona heat?',
      answer: 'For maximum heat rejection, ceramic and spectrally selective films perform best. H\u00fcper Optik Select DREI rejects 67% of total solar energy. LLumar dual-reflective rejects up to 79%. For nearly-clear options, H\u00fcper Optik Klar 85 or XPEL Clear View Ceramic deliver heat rejection without darkening your view. We recommend specific films based on glass orientation and property type.',
    },
    {
      question: 'Do you install security film in Phoenix?',
      answer: 'Yes. We install 4\u201321 mil safety and security film for residential, commercial, and government properties in Phoenix. Security film holds shattered glass in place on impact \u2014 protecting against forced entry, smash-and-grab, storms, and blast events. Brands include LLumar ArmorCoat, H\u00fcper Optik Clear Shield, and XPEL VISION Security.',
    },
    {
      question: 'How long does window film installation take?',
      answer: 'Most residential installations in Phoenix complete in 2\u20134 hours. Commercial projects take 1\u20133 days depending on square footage and building access. We work around business hours and tenant schedules to minimize disruption.',
    },
    {
      question: 'Are you a licensed window film installer in Phoenix?',
      answer: 'Yes. Arizona House of Film holds Arizona ROC license #314088 \u2014 licensed, bonded, and insured since 2017. 713+ completed projects including installations for Coca-Cola, Grand Canyon University, U.S. Navy, Frank Lloyd Wright Foundation, and government facilities across Phoenix.',
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

  const filmTypes = [
    {
      icon: Sun,
      title: 'Solar Control Film',
      desc: 'Ceramic, dual-reflective, and spectrally selective films blocking 45\u201384% of solar heat. Reduces cooling costs 10\u201330%. 99% UV protection.',
      link: '/residential-window-tinting',
      linkText: 'Residential Solar Film \u2192',
    },
    {
      icon: Shield,
      title: 'Security & Safety Film',
      desc: '4\u201321 mil thickness. Holds glass on impact \u2014 forced entry protection, blast mitigation, storm resistance. Schools, government, commercial.',
      link: '/safety',
      linkText: 'Security Film Details \u2192',
    },
    {
      icon: Palette,
      title: 'Decorative & Privacy Film',
      desc: 'Frosted, gradient, etched, stained glass, and Casper cloaking film. Conference rooms, bathrooms, office partitions, storefronts.',
      link: '/decorative-window-films',
      linkText: 'Decorative Films \u2192',
    },
    {
      icon: Layers,
      title: 'Anti-Graffiti Film',
      desc: 'Sacrificial surface protection for storefronts, transit stations, and public buildings. Damaged film replaced without glass replacement.',
      link: '/anti-graffiti',
      linkText: 'Anti-Graffiti Details \u2192',
    },
    {
      icon: Eye,
      title: 'Reflective & One-Way Film',
      desc: 'Mirror-like daytime privacy with maximum solar rejection. Ideal for ground-floor residential and commercial properties.',
      link: '/films',
      linkText: 'Browse All Films \u2192',
    },
    {
      icon: Zap,
      title: 'Energy Saving Film',
      desc: 'NFRC-certified films qualifying for SRP and APS energy rebates. Reduces HVAC load and extends equipment life.',
      link: '/energy-saving-window-films',
      linkText: 'Energy Film & Rebates \u2192',
    },
  ];

  const neighborhoods = [
    { name: 'Downtown Phoenix', desc: 'High-rise offices, government buildings, mixed-use retail' },
    { name: 'Arcadia', desc: 'Luxury residential, mid-century homes, large glass areas' },
    { name: 'Ahwatukee', desc: 'Residential communities, HOA properties, dual-pane homes' },
    { name: 'Desert Ridge', desc: 'Master-planned community, retail centers, new construction' },
    { name: 'Laveen', desc: 'Growing residential, schools, commercial development' },
    { name: 'Sunnyslope', desc: 'Medical corridor, residential, small commercial' },
    { name: 'North Phoenix', desc: 'Residential subdivisions, strip retail, office parks' },
    { name: 'Biltmore', desc: 'Luxury residential and commercial, high-end retail' },
    { name: 'Camelback Corridor', desc: 'Office towers, hospitality, mixed-use commercial' },
  ];

  const projects = [
    {
      name: 'Coca-Cola Consolidated',
      category: 'National Brand \u2014 Commercial',
      scope: 'Solar control and security film across Coca-Cola commercial facility in the Phoenix metro. Multi-phase installation covering warehouse, office, and customer-facing glass.',
      film: 'Solar + security film',
    },
    {
      name: 'FCI Constructors',
      category: 'Commercial Construction',
      scope: 'Window film installation for FCI Constructors commercial projects across the Phoenix metro. Repeat client engagement spanning multiple commercial build-outs.',
      film: 'Solar + decorative film',
    },
    {
      name: 'Glendale Fire Station 152',
      category: 'Government \u2014 Municipal',
      scope: 'Security and solar control film for Glendale Fire Department Station 152. Government specification compliance. UV and heat protection for apparatus bays and crew quarters.',
      film: 'Security + solar film',
    },
    {
      name: 'Grand Canyon University',
      category: 'Higher Education',
      scope: 'Window film installation across Grand Canyon University campus buildings. Solar heat rejection for classrooms, administrative offices, and student-facing facilities.',
      film: 'Solar control film',
    },
    {
      name: 'U.S. Navy Recruitment Center',
      category: 'Federal Government',
      scope: 'Security film installation for U.S. Navy recruitment facility in the Phoenix metro. Federal security specification compliance. Anti-intrusion and blast mitigation glazing protection.',
      film: 'Security film \u2014 federal spec',
    },
  ];

  const brands = [
    { name: 'LLumar', path: '/brands/llumar', desc: 'Eastman CTX Ceramic, AIR Series, ArmorCoat Security' },
    { name: 'H\u00fcper Optik', path: '/brands/huper-optik', desc: 'Nano-ceramic Ceramic 20\u201370, Select DREI & SECH' },
    { name: 'XPEL', path: '/brands/xpel', desc: 'VISION Clear View Ceramic, Security, Decorative' },
    { name: 'Madico', path: '/brands/madico', desc: 'Wincos Ceramic, SafetyShield, Sunscape' },
    { name: 'SunTek', path: '/brands/suntek', desc: 'CIR Ceramic, CXP Carbon, Symphony Decorative' },
    { name: 'Solyx', path: '/films', desc: '618+ decorative patterns \u2014 frosted, etched, stained glass' },
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
        { name: 'Service Areas', path: '/service-areas' },
        { name: 'Window Film Phoenix', path: '/window-film-phoenix' },
      ]} />

      <main id="main-content" className="bg-slate-950 min-h-screen">
        {/* HERO */}
        <section className="py-24 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="max-w-4xl">
              <span className="inline-block px-4 py-1 bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-widest">
                Licensed &bull; Bonded &bull; ROC #314088
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase leading-[0.85] tracking-tighter">
                Window Film Phoenix AZ &mdash; Licensed Installer Since 2017
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mb-4 leading-relaxed font-medium">
                Every type of window film for every type of property. Solar control, security, decorative, privacy, and anti-graffiti film installed by Arizona&rsquo;s licensed window film contractor. 713+ completed projects. U.S. Navy Veteran owned.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-400 font-medium mb-10">
                <span>Solar Control</span><span>&bull;</span>
                <span>Security &amp; Safety</span><span>&bull;</span>
                <span>Decorative &amp; Privacy</span><span>&bull;</span>
                <span>Anti-Graffiti</span><span>&bull;</span>
                <span>Energy Saving</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl"
                >
                  <Link to="/get-a-quote">Get Free Estimate &rarr;</Link>
                </Button>
                <a
                  href="tel:480-788-1591"
                  className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all text-lg"
                >
                  (480) 788-1591
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* WHY PHOENIX NEEDS WINDOW FILM */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Why Phoenix Properties Need Window Film
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-4xl mb-6">
              Phoenix is one of the most demanding climates for glass in the United States. With 299+ sunny days per year, sustained summer temperatures above 115&deg;F, and a UV index that regularly hits 11 &mdash; unprotected glass creates massive heat gain, UV damage to interiors, and energy costs that strain every budget. Window film is the single most cost-effective upgrade for existing glass in Phoenix.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {[
                { stat: '115\u00b0F+', label: 'Peak Summer Temps', desc: 'West-facing glass absorbs extreme solar load June\u2013September' },
                { stat: 'UV 11', label: 'Extreme UV Index', desc: 'Fades furniture, flooring, artwork, and damages skin' },
                { stat: '30%', label: 'Cooling Cost Savings', desc: 'Quality film reduces HVAC load and extends equipment life' },
                { stat: '99%', label: 'UV Blocked', desc: 'Professional ceramic films block 99% of harmful UV rays' },
              ].map((item, i) => (
                <div key={i} className="bg-slate-800 border border-slate-700 p-6 rounded-lg">
                  <div className="text-3xl font-black text-green-500 mb-1">{item.stat}</div>
                  <div className="text-white font-bold text-sm uppercase mb-2">{item.label}</div>
                  <p className="text-slate-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ALL FILM TYPES */}
        <section className="py-24 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Every Type of Window Film &mdash; Installed in Phoenix
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filmTypes.map((film, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="bg-slate-900 border border-slate-800 hover:border-green-500/50 p-8 transition-all group"
                >
                  <div className="w-12 h-12 bg-slate-800 flex items-center justify-center mb-5 group-hover:bg-green-600 transition-colors">
                    <film.icon className="w-6 h-6 text-green-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-black text-white uppercase mb-3 leading-tight">{film.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium mb-4">{film.desc}</p>
                  <Link to={film.link} className="text-green-500 text-sm font-bold hover:text-green-400 transition-colors">
                    {film.linkText}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PHOENIX NEIGHBORHOODS */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              Phoenix Neighborhoods We Serve
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              Arizona House of Film installs window film across all Phoenix neighborhoods and surrounding cities. Same-day estimates available for most locations.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {neighborhoods.map(({ name, desc }) => (
                <div key={name} className="border border-slate-200 rounded-lg p-4 bg-white">
                  <div className="font-bold text-slate-900 text-sm">{name}</div>
                  <div className="text-xs text-slate-500 mt-1">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VERIFIED PROJECTS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Verified Phoenix Projects
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto">
                Sample of completed window film projects from our Phoenix metro invoice history. 713+ total projects since 2017.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <div key={i} className="bg-slate-50 border-l-4 border-green-500 p-8">
                  <p className="text-xs font-black text-green-600 uppercase tracking-widest mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-base font-black text-slate-950 uppercase mb-3 leading-tight">{project.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{project.scope}</p>
                  <div className="border-t border-slate-200 pt-4">
                    <p className="text-xs text-slate-500">
                      <span className="font-black text-slate-700 uppercase">Film:</span> {project.film}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BRANDS */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-8">
              Window Film Brands We Install in Phoenix
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {brands.map((brand, i) => (
                <Link key={i} to={brand.path} className="bg-white border border-slate-200 rounded-lg p-6 hover:border-green-500 transition-colors group">
                  <h3 className="font-black text-slate-900 text-lg mb-1 group-hover:text-green-700 transition-colors">{brand.name}</h3>
                  <p className="text-slate-500 text-sm">{brand.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              Window Film Pricing &mdash; Phoenix AZ
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              All projects are custom-quoted based on glass area, film type, and access. These ranges reflect typical installed pricing across completed Phoenix projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { tier: 'Residential', range: '$600\u2013$2,500', desc: 'Whole-home solar, privacy, or UV protection. 5\u201325 windows. Ceramic and spectrally selective film.', note: 'Most homes fall in the $800\u2013$1,500 range' },
                { tier: 'Commercial', range: '$2,500\u2013$15,000', desc: 'Offices, retail, restaurants, medical. Solar control, security, decorative, or combination.', note: 'Larger buildings quoted by scope' },
                { tier: 'Government & Specialty', range: 'Project Quoted', desc: 'Blast mitigation, federal spec security, multi-building campus installations. Custom specification required.', note: 'Call (480) 788-1591 for government projects' },
              ].map((tier, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-6">
                  <div className="font-black text-xl text-green-700 mb-1">{tier.range}</div>
                  <div className="font-bold text-slate-900 mb-2">{tier.tier}</div>
                  <p className="text-sm text-slate-600 mb-3">{tier.desc}</p>
                  <p className="text-xs text-slate-400 italic">{tier.note}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm">
              SRP and APS energy rebates available for qualifying installations. Free on-site estimate &mdash; call{' '}
              <a href="tel:480-788-1591" className="text-green-700 font-bold">(480) 788-1591</a> or{' '}
              <Link to="/get-a-quote" className="text-green-700 font-bold underline">request a quote online</Link>.
            </p>
          </div>
        </section>

        <EstimatorCTA />

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-8">
              Frequently Asked Questions &mdash; Window Film Phoenix AZ
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
              Get a Free Window Film Estimate in Phoenix
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment for residential, commercial, and government properties. Film specified for your glass type and performance requirements. Licensed ROC #314088.
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

        {/* PHOENIX CROSS-LINKS */}
        <section className="py-14 bg-slate-900 border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">More Phoenix Window Film Services</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Link to="/commercial-window-film-phoenix" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Commercial Window Film Phoenix &rarr;</Link>
              <Link to="/residential-window-tinting-phoenix" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Residential Window Tinting Phoenix &rarr;</Link>
              <Link to="/solar-window-film-phoenix" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Solar Window Film Phoenix &rarr;</Link>
              <Link to="/security-window-film-phoenix" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Security Window Film Phoenix &rarr;</Link>
              <Link to="/decorative-window-film-phoenix" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Decorative Window Film Phoenix &rarr;</Link>
              <Link to="/anti-graffiti-film-phoenix" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Anti-Graffiti Film Phoenix &rarr;</Link>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="border-t border-slate-200 pt-6 pb-4 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Related Resources</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link to="/commercial-window-tinting" className="text-green-700 underline">Commercial Window Tinting</Link>
              <Link to="/residential-window-tinting" className="text-green-700 underline">Residential Window Tinting</Link>
              <Link to="/safety" className="text-green-700 underline">Safety &amp; Security Film</Link>
              <Link to="/decorative-window-films" className="text-green-700 underline">Decorative Films</Link>
              <Link to="/films" className="text-green-700 underline">Film Catalog</Link>
              <Link to="/brands" className="text-green-700 underline">All Brands</Link>
              <Link to="/window-tinting-phoenix" className="text-green-700 underline">Window Tinting Phoenix</Link>
              <Link to="/service-areas" className="text-green-700 underline">All Service Areas</Link>
              <Link to="/get-a-quote" className="text-green-700 underline">Get a Quote</Link>
            </div>
          </div>
        </section>

        <ContactFormSection />
      </main>
    </>
  );
};

export default WindowFilmPhoenix;
