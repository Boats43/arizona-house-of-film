import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Shield, Eye, Thermometer, Palette, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';

const ScottsdaleResidential = () => {
  const rocNumber = '314088';
  const pageTitle = 'Residential Window Tinting Scottsdale AZ | Home Window Film | Arizona House of Film';
  const metaDescription = 'Scottsdale residential window film installer. Heat rejection, UV protection, privacy & decorative film for Scottsdale homes. Verified installs. ROC #314088. Free quote.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/residential-window-tinting-scottsdale';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';
  const heroImageUrl =
    'https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/img_20240821_123937_469-jYOb9.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Window Tinting Scottsdale AZ',
    serviceType: 'Residential Window Film Installation',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Arizona House of Film',
      url: 'https://arizonahouseoffilm.com/',
      telephone: '+1-480-788-1591',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '7007 W Flower St',
        addressLocality: 'Phoenix',
        addressRegion: 'AZ',
        postalCode: '85033',
      },
    },
    areaServed: { '@type': 'City', name: 'Scottsdale', addressRegion: 'AZ' },
    description: metaDescription,
    url: canonicalUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does residential window tinting cost in Scottsdale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Residential window film in Scottsdale typically ranges from $6–$15 per square foot installed, depending on film type (solar, privacy, decorative, security), glass size, and access. A typical Scottsdale home with 10–15 windows runs $800–$2,500. All projects are custom-quoted after a free site assessment.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will window film damage my Scottsdale home\'s windows?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Professional-grade window film installed correctly does not damage glass. Scottsdale homes with dual-pane low-e glass require specific film specs to avoid thermal stress — we verify compatibility before every install. We are ROC licensed (#314088) with 8+ years of Arizona residential installs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does window tinting really reduce heat in a Scottsdale home?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. High-performance solar films reject up to 80% of solar heat gain through glass. In Scottsdale\'s 110°F+ summers, this translates directly to lower AC load and measurable utility savings — typically 10–25% reduction in cooling costs for heavily glazed rooms.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get privacy film on my Scottsdale home without blocking the view?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. One-way mirror films and dual-reflective films provide daytime privacy while preserving outward visibility. At night when interior lights are on, privacy reverses — we explain this tradeoff on every residential consultation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you serve all Scottsdale neighborhoods?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We serve all Scottsdale residential submarkets including Old Town, South Scottsdale, McCormick Ranch, DC Ranch, Gainey Ranch, North Scottsdale, Troon, Grayhawk, and Paradise Valley adjacent communities.',
        },
      },
    ],
  };

  const projects = [
    {
      name: 'DC Ranch Private Residence, North Scottsdale',
      category: 'Luxury Residential — North Scottsdale',
      scope: 'Full-home solar control film installation across south and west facing glass. Dual-reflective film selected for daytime privacy without view obstruction. Desert contemporary architecture with floor-to-ceiling glazing.',
      film: 'Dual-reflective solar control',
      valueLabel: 'Location',
      value: 'DC Ranch, North Scottsdale',
    },
    {
      name: 'McCormick Ranch HOA Community',
      category: 'HOA Residential — Central Scottsdale',
      scope: 'Multi-unit residential film installation coordinated through HOA property management. Consistent film spec across units for architectural uniformity. Solar control and UV protection focus.',
      film: 'Solar + UV control',
      valueLabel: 'Scale',
      value: 'Multi-unit HOA coordination',
    },
    {
      name: 'Old Town Scottsdale Condo',
      category: 'Urban Residential — Old Town',
      scope: 'Privacy and solar film for high-rise condo with street-facing glass. One-way mirror film for daytime privacy in high-pedestrian corridor. UV protection for interior furnishings.',
      film: 'One-way mirror privacy',
      valueLabel: 'Location',
      value: 'Old Town Scottsdale',
    },
    {
      name: 'Gainey Ranch Estate',
      category: 'Luxury Residential — Gainey Ranch',
      scope: 'Decorative and solar film combination for estate property. 3M Fasara frosted film on bathroom and office glass. Solar control on primary living areas and pool-facing glass.',
      film: '3M Fasara + solar control',
      valueLabel: 'Film types',
      value: 'Decorative + solar combination',
    },
    {
      name: 'Grayhawk Community Residences',
      category: 'Master-Planned Community — North Scottsdale',
      scope: 'Residential solar film across multiple homes in Grayhawk master-planned community. West-facing exposure focus. Ceramic film selected for maximum heat rejection without visible reflectivity.',
      film: 'Ceramic solar control',
      valueLabel: 'Location',
      value: 'Grayhawk, North Scottsdale',
    },
  ];

  const applications = [
    { icon: Sun,         title: 'Solar Heat Rejection',        body: 'Up to 80% solar heat blocked. Critical for south and west-facing Scottsdale glass in summer.' },
    { icon: Eye,         title: 'Daytime Privacy Film',        body: 'One-way mirror and dual-reflective options. View out, privacy in — without blackout curtains.' },
    { icon: Shield,      title: 'Security Film for Homes',     body: '8-mil forced-entry resistance for entry doors, sidelites, and ground-floor glass.' },
    { icon: Palette,     title: 'Decorative & Frosted Film',   body: '3M Fasara and custom patterns for bathrooms, offices, and architectural glass features.' },
    { icon: Thermometer, title: 'Energy Efficiency',           body: 'Reduce AC load 10–25%. Scottsdale utility rebates may apply for qualifying installations.' },
    { icon: Home,        title: 'UV Protection for Interiors', body: '99% UV block. Stops fading on flooring, furniture, art, and window treatments.' },
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

      <main id="main-content" className="bg-slate-950 min-h-screen">

        {/* HERO */}
        <section className="relative min-h-[75vh] flex items-center pt-24 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Residential window tinting Scottsdale AZ"
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
                Residential Window Tinting Scottsdale AZ
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Heat rejection, privacy, UV protection, and decorative film for Scottsdale homes. From DC Ranch estates to Old Town condos. Licensed ROC #{rocNumber}.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl">
                  <Link to="/contact">Get a Free Home Quote</Link>
                </Button>
                <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all text-lg">
                  (480) 788-1591
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1 — THE SCOTTSDALE CHALLENGE */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              The Scottsdale Residential Window Film Challenge
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Scottsdale homes face some of the harshest solar exposure in the United States. South and west-facing glass in 110°F+ summers generates extreme heat gain, accelerates UV fading on flooring and furniture, and forces AC systems to run continuously. Luxury homes in DC Ranch, Gainey Ranch, and Troon often have floor-to-ceiling glazing that amplifies these effects. Standard low-e glass alone is insufficient — high-performance window film is the cost-effective solution that doesn't require window replacement.
            </p>
          </div>
        </section>

        {/* SECTION 2 — VERIFIED PROJECTS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Verified Residential Projects — Scottsdale AZ
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto">
                Sample of completed Scottsdale residential window film installations drawn from project history.
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
                Residential Window Film Solutions for Scottsdale Homes
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
                Scottsdale Residential Window Film Pricing
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-400 text-lg font-medium max-w-3xl mx-auto">
                All projects are custom-quoted. These ranges reflect real installed costs from our Scottsdale residential jobs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { label: 'Single Room / Entry Points', range: '$300 – $700',    note: '3–6 windows, solar or privacy film, standard residential access' },
                { label: 'Partial Home (Key Rooms)',   range: '$700 – $1,800',  note: '8–15 windows, mixed film types, south/west exposure focus' },
                { label: 'Full Home / Luxury Estate',  range: '$1,800 – $5,000+', note: 'Complete coverage, multiple film specs, large-format or high-floor glass' },
              ].map((c) => (
                <div key={c.label} className="bg-slate-800 border border-slate-700 p-8">
                  <div className="text-2xl font-black text-white mb-1">{c.range}</div>
                  <div className="text-green-400 font-black text-sm uppercase tracking-widest mb-3">{c.label}</div>
                  <div className="text-slate-400 text-sm leading-relaxed">{c.note}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm">
              Prices vary by film type, glass condition, access, and square footage. We do not publish flat per-sq-ft rates — every Scottsdale home is custom-quoted after a free on-site assessment.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-950 uppercase tracking-tight mb-4">
                Scottsdale Residential Window Film FAQs
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
              <Link to="/residential-window-tinting" className="text-green-600 hover:underline">Residential Window Tinting</Link>
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
              Scottsdale Residential Service Coverage
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              We serve all Scottsdale residential communities — DC Ranch, Gainey Ranch, McCormick Ranch, Troon, Grayhawk, Kierland, Paradise Valley adjacent, North Scottsdale, South Scottsdale, and Old Town. Same-day estimates available for most Scottsdale locations.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Scottsdale Residential Window Film Quote
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment. We'll evaluate your glass orientation, film compatibility, and recommend the right spec for your home and budget. Licensed ROC #{rocNumber}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl">
                <Link to="/contact">Request Free Home Assessment</Link>
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

export default ScottsdaleResidential;
