import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building, Shield, Sun, Zap, Eye, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';

const CommercialPhoenix = () => {
  const rocNumber = '314088';
  const pageTitle = 'Commercial Window Film Phoenix AZ | ROC #314088';
  const metaDescription = 'Phoenix commercial window film installer. Solar control, security, privacy and decorative film for offices and retail. ROC #314088.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/commercial-window-film-phoenix';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';
  const heroImageUrl =
    'https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/img_20240821_123937_469-jYOb9.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Window Film Installation Phoenix AZ',
    serviceType: 'Commercial Window Film Installation',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://arizonahouseoffilm.com',
      name: 'Arizona House of Film',
    },
    areaServed: { '@type': 'City', name: 'Phoenix', addressRegion: 'AZ' },
    description: metaDescription,
    url: canonicalUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does commercial window film cost in Phoenix?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Commercial window film in Phoenix typically ranges from $6–$18 per square foot installed, depending on film type, building height, glass condition, and access requirements. Small storefronts run $500–$2,000. Large office buildings run $5,000–$25,000+. All projects are custom-quoted after a free site assessment.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best window film for Phoenix commercial buildings?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For Phoenix commercial buildings, dual-reflective solar control film is the most common choice — it rejects 50–70% of solar heat while reducing interior glare. East and west facing glass benefits most. High-rise buildings often require spectrally selective film to avoid thermal stress on existing low-e glass.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does commercial window film installation take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most small commercial jobs (storefronts, single-floor offices) are completed in one day. Large multi-floor office buildings typically take 2–5 days depending on square footage and access. We schedule around business hours to minimize disruption.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does commercial window film qualify for energy rebates in Arizona?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Some Arizona utility providers offer commercial energy efficiency rebates for qualifying window film installations. APS and SRP have had programs in the past. We can provide documentation of film specs and projected energy savings to support rebate applications.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you serve all Phoenix metro commercial properties?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We serve commercial properties across Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, Surprise, Goodyear, and the full metro area. Past clients include national chains, government facilities, medical campuses, and independent businesses.',
        },
      },
    ],
  };

  const projects = [
    {
      name: 'Coca-Cola — Phoenix Distribution Facility',
      category: 'National Brand — Industrial / Commercial',
      scope: 'Solar control and glare reduction film across large-format industrial glazing. Heat rejection focus for warehouse and office transition zones. High-volume facility with strict operational scheduling requirements.',
      film: 'Solar control',
      valueLabel: 'Client',
      value: 'Coca-Cola',
    },
    {
      name: 'AutoZone — Phoenix Metro Locations',
      category: 'National Retail Chain — Multi-Location',
      scope: 'Security and solar film across multiple Phoenix metro AutoZone retail locations. Smash-and-grab deterrence for high-inventory retail. Consistent film spec across locations.',
      film: 'Security + solar',
      valueLabel: 'Scale',
      value: 'Multi-location Phoenix metro',
    },
    {
      name: 'LA Fitness — Phoenix',
      category: 'Commercial Fitness — Large Format Glass',
      scope: 'Solar control film for large-format commercial gym glazing. Heat rejection for member comfort. Glare reduction on fitness floor. High-ceiling glass with east and west exposure.',
      film: 'Solar control',
      valueLabel: 'Client',
      value: 'LA Fitness Phoenix',
    },
    {
      name: 'Isagenix International — Phoenix Campus',
      category: 'Corporate Campus — Phoenix',
      scope: 'Corporate office window film across Isagenix Phoenix headquarters campus. Solar control and privacy film combination. Multi-floor installation coordinated with facilities management.',
      film: 'Solar + privacy',
      valueLabel: 'Client',
      value: 'Isagenix International',
    },
    {
      name: 'NAPA Auto Parts — Phoenix Locations',
      category: 'National Retail — Phoenix Metro',
      scope: 'Solar and security film for NAPA retail locations across Phoenix metro. Inventory protection and heat rejection for auto parts retail environment.',
      film: 'Solar + security',
      valueLabel: 'Scale',
      value: 'Multiple Phoenix locations',
    },
    {
      name: 'Starbucks — Phoenix Metro',
      category: 'National QSR — Phoenix Metro',
      scope: 'Decorative and solar film for Phoenix area Starbucks locations. 3M Fasara decorative film on interior glass partitions. Solar control on customer-facing storefront glass.',
      film: '3M Fasara + solar',
      valueLabel: 'Scale',
      value: 'Phoenix metro locations',
    },
  ];

  const applications = [
    { icon: Building,    title: 'Office Buildings',           body: 'Dual-reflective solar, east-west exposure, glare reduction for workspaces and conference rooms.' },
    { icon: ShoppingBag, title: 'Retail Storefronts',         body: 'Security film, solar control, decorative — smash-and-grab deterrence and brand-aligned aesthetics.' },
    { icon: Sun,         title: 'Industrial & Warehouse',     body: 'Large-format solar control for loading areas, mezzanine glass, and office-warehouse transitions.' },
    { icon: Eye,         title: 'Medical & Professional',     body: 'Privacy film for patient areas, HIPAA-sensitive zones, and professional office environments.' },
    { icon: Shield,      title: 'Government & Institutional', body: 'Security and blast-mitigation film. GSA-spec options. Schools, municipal buildings, courthouses.' },
    { icon: Zap,         title: 'Energy Efficiency Projects', body: 'Documented heat rejection for APS/SRP rebate applications. LEED support documentation available.' },
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
        <link rel="preload" as="image" href={heroImageUrl} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Commercial Window Tinting', path: '/commercial-window-tinting' },
        { name: 'Phoenix', path: '/commercial-window-film-phoenix' },
      ]} />

      <main id="main-content" className="bg-slate-950 min-h-screen">

        {/* HERO */}
        <section className="relative min-h-[75vh] flex items-center pt-24 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Commercial window film Phoenix AZ"
              className="w-full h-full object-cover opacity-40"
              src={heroImageUrl}
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="max-w-4xl">
              <span className="inline-block px-4 py-1 bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-widest">
                Licensed • Bonded • ROC #{rocNumber}
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase leading-[0.85] tracking-tighter">
                Commercial Window Film Phoenix AZ
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Solar control, security, privacy, and decorative film for Phoenix offices, retail, industrial, and institutional properties. Coca-Cola, AutoZone, LA Fitness, Starbucks. ROC #{rocNumber}.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl">
                  <Link to="/contact">Get a Commercial Quote</Link>
                </Button>
                <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all text-lg">
                  (480) 788-1591
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1 — THE PHOENIX CHALLENGE */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              The Phoenix Commercial Window Film Challenge
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Phoenix commercial buildings face 299+ days of sun annually with summer temperatures exceeding 115°F. East and west-facing glass generates extreme solar heat gain that overloads HVAC systems, creates uncomfortable hot zones for employees and customers, and accelerates UV degradation of interiors. Window film is the highest-ROI intervention available — no window replacement, no construction, installed around your business schedule. Arizona House of Film has completed 700+ commercial and residential projects across the Phoenix metro since 2017.
            </p>
          </div>
        </section>

        {/* SECTION 2 — VERIFIED PROJECTS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Verified Commercial Projects — Phoenix AZ
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto">
                Sample of completed Phoenix commercial window film installations drawn from verified project history.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-slate-50 border-l-4 border-green-500 p-8">
                  <p className="text-xs font-black text-green-600 uppercase tracking-widest mb-2">{project.category}</p>
                  <h3 className="text-base font-black text-slate-950 uppercase mb-3 leading-tight">{project.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{project.scope}</p>
                  <div className="border-t border-slate-200 pt-4 space-y-1">
                    <p className="text-xs text-slate-500"><span className="font-black text-slate-700 uppercase">Film:</span> {project.film}</p>
                    <p className="text-xs text-slate-500"><span className="font-black text-slate-700 uppercase">{project.valueLabel}:</span> {project.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — APPLICATIONS */}
        <section className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Commercial Window Film for Every Phoenix Property Type
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((app, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="bg-slate-900 border border-slate-800 hover:border-green-500/50 p-8 transition-all group"
                >
                  <div className="w-12 h-12 bg-slate-800 flex items-center justify-center mb-5 group-hover:bg-green-600 transition-colors">
                    <app.icon className="w-6 h-6 text-green-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-black text-white uppercase mb-3 leading-tight">{app.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">{app.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* COST TRANSPARENCY */}
        <section className="py-24 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Commercial Window Film Pricing — Phoenix AZ
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-400 text-lg font-medium max-w-3xl mx-auto">
                All projects are custom-quoted. These ranges reflect real installed costs from our Phoenix commercial jobs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { label: 'Small Storefront / Single Office', range: '$500 – $2,000',   note: 'Up to 300 sq ft glass, solar or security film, ground floor access' },
                { label: 'Mid-Size Commercial',              range: '$2,000 – $8,000', note: '300–1,000 sq ft, mixed film types, multi-entry or multi-floor' },
                { label: 'Large Office / Industrial',        range: '$8,000 – $30,000+', note: 'Full building perimeter, high-rise access, multiple film specs' },
              ].map((c) => (
                <div key={c.label} className="bg-slate-800 border border-slate-700 p-8">
                  <div className="text-2xl font-black text-white mb-1">{c.range}</div>
                  <div className="text-green-400 font-black text-sm uppercase tracking-widest mb-3">{c.label}</div>
                  <div className="text-slate-400 text-sm leading-relaxed">{c.note}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm">
              We do not publish flat per-sq-ft rates — every commercial project is custom-quoted after a free on-site assessment.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-950 uppercase tracking-tight mb-4">
                Commercial Window Film FAQs — Phoenix
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto" />
            </div>
            <div className="space-y-8">
              {faqSchema.mainEntity.map((q) => (
                <div key={q.name} className="border-b border-slate-200 pb-8">
                  <h3 className="text-lg font-black text-slate-950 mb-3 uppercase">{q.name}</h3>
                  <p className="text-slate-600 leading-relaxed">{q.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center text-slate-500 text-sm">
              Also see:{' '}
              <Link to="/commercial-window-tinting" className="text-green-600 hover:underline">Commercial Window Tinting</Link>
              {' · '}
              <Link to="/commercial-window-tinting-scottsdale" className="text-green-600 hover:underline">Scottsdale Commercial</Link>
              {' · '}
              <Link to="/security-window-film-phoenix" className="text-green-600 hover:underline">Security Window Film</Link>
            </div>
          </div>
        </section>

        {/* SERVICE AREA */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Phoenix Commercial Service Coverage
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              We serve commercial properties across the full Phoenix metro — Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, Surprise, Goodyear, Avondale, and Buckeye. Same-day estimates available for most Phoenix locations. Licensed, bonded, insured. ROC #{rocNumber}.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Phoenix Commercial Window Film Quote
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment. Custom specification for your building type, glass orientation, and performance requirements. Licensed ROC #{rocNumber}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl">
                <Link to="/contact">Request Commercial Quote</Link>
              </Button>
              <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all text-lg">
                (480) 788-1591
              </a>
            </div>
          </div>
        </section>

        <ContactFormSection />
      </main>
    </>
  );
};

export default CommercialPhoenix;
