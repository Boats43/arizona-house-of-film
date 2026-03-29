import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Shield, Eye, Thermometer, Palette, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';
import EstimatorCTA from '../components/EstimatorCTA';

const ResidentialPhoenix = () => {
  const rocNumber = '314088';
  const pageTitle = 'Residential Window Tinting Phoenix AZ | ROC #314088';
  const metaDescription = 'Licensed residential window tinting in Phoenix AZ — heat rejection, UV protection, privacy & security film for homes. LLumar, Madico, SunTek, XPEL. 700+ projects. ROC #314088. Free quote.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/residential-window-tinting-phoenix';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';
  const heroImageUrl =
    'https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/img_20240821_123937_469-jYOb9.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Window Tinting Phoenix AZ',
    serviceType: 'Residential Window Film Installation',
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
        name: 'How much does residential window tinting cost in Phoenix?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Residential window tinting in Phoenix typically ranges from $6-$15 per square foot installed, depending on film type, glass size, and access. A typical Phoenix home with 10-15 windows runs $800-$2,500. Ceramic films cost more than standard solar films. All projects are custom-quoted after a free site assessment.',
        },
      },
      {
        '@type': 'Question',
        name: 'What window tint is best for Phoenix homes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For Phoenix homes, ceramic solar control film is the top choice — it rejects up to 80% of solar heat with no metal content, meaning no interference with electronics and no mirror-like exterior appearance. Dual-reflective film is ideal for privacy without sacrificing outward views. We recommend film based on your glass orientation, HOA requirements, and budget.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does window tinting help with the Phoenix heat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — significantly. Phoenix homes with south and west-facing glass experience extreme solar heat gain through untreated windows. High-performance window film reduces solar heat entry by 50-80%, directly lowering AC load. Most Phoenix homeowners report noticeable comfort improvement within days of installation and measurable utility savings within the first billing cycle.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will window tint void my window warranty in Phoenix?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It depends on your window manufacturer and the film selected. Some dual-pane window warranties are voided by certain films that cause thermal stress. We verify glass compatibility and film specs before every installation to avoid warranty issues. We only recommend films rated safe for your specific glass type.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does residential window film last in Arizona?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Quality residential window film in Arizona typically lasts 10-15 years with proper installation. Arizona intensity UV exposure can shorten lifespan of lower-grade films. We install commercial-grade film with manufacturer warranties — typically 10 years on residential applications.',
        },
      },
      {
        '@type': 'Question',
        name: 'What window film brands do you install for Phoenix homes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We install LLumar, Madico, SunTek, and XPEL window films for residential projects in Phoenix. Each brand offers ceramic, solar, privacy, and security options — we match the right film to your home\'s needs and budget.',
        },
      },
    ],
  };

  const projects = [
    {
      name: 'Ahwatukee Foothills Residence — Phoenix',
      category: 'Single Family — South Phoenix',
      scope: 'Full-home ceramic solar film installation. South and west exposure focus. Floor-to-ceiling living room glass and master bedroom sliding doors. Homeowner reported 20%+ reduction in cooling costs first summer.',
      film: 'Ceramic solar control',
      valueLabel: 'Location',
      value: 'Ahwatukee Foothills, Phoenix',
    },
    {
      name: 'Arcadia District Home — Phoenix',
      category: 'Luxury Residential — Arcadia',
      scope: 'Dual-reflective solar film for Arcadia area home. Privacy film on street-facing glass. UV protection for hardwood flooring and custom furniture. Pool-facing glass on west exposure.',
      film: 'Dual-reflective + UV',
      valueLabel: 'Location',
      value: 'Arcadia, Phoenix',
    },
    {
      name: 'Laveen Village New Construction',
      category: 'New Construction — Southwest Phoenix',
      scope: 'Solar control film on new construction home prior to move-in. Builder glass upgrade alternative — film provides comparable heat rejection to upgraded glass at fraction of replacement cost.',
      film: 'Solar control',
      valueLabel: 'Application',
      value: 'New construction pre-move-in',
    },
    {
      name: 'Desert Ridge Area HOA Community',
      category: 'HOA Residential — North Phoenix',
      scope: 'Multi-home film installation coordinated through HOA property management. Consistent ceramic film spec across units. HOA-approved film selected to maintain architectural uniformity.',
      film: 'Ceramic solar — HOA approved',
      valueLabel: 'Scale',
      value: 'Multi-home HOA coordination',
    },
    {
      name: 'Sunnyslope Historic Home — Phoenix',
      category: 'Historic Residential — Central Phoenix',
      scope: 'Privacy and UV film for older single-pane windows in historic Phoenix home. Film selected to avoid thermal stress on older glass. UV protection for period-appropriate interior furnishings.',
      film: 'UV + privacy',
      valueLabel: 'Application',
      value: 'Historic single-pane glass',
    },
  ];

  const applications = [
    { icon: Sun,         title: 'Solar Heat Rejection', body: 'Up to 80% solar heat blocked. Essential for south and west-facing Phoenix glass in 110F+ summers.' },
    { icon: Thermometer, title: 'Energy Efficiency',    body: 'Reduce AC load 10-25%. Lower utility bills from first billing cycle. No window replacement needed.' },
    { icon: Eye,         title: 'Privacy Film',         body: 'Daytime one-way mirror film. See out, block visibility in — without blackout curtains or blinds.' },
    { icon: Shield,      title: 'Security Film',        body: '8-mil forced-entry resistance for entry doors, sidelites, and ground-floor glass.' },
    { icon: Palette,     title: 'Decorative & Frosted', body: 'Bathroom glass, shower enclosures, sidelites. Frosted look without permanent etching.' },
    { icon: Home,        title: 'UV Protection',        body: '99% UV block. Stops fading on flooring, furniture, art, and window treatments.' },
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
        { name: 'Residential Window Tinting', path: '/residential-window-tinting' },
        { name: 'Phoenix', path: '/residential-window-tinting-phoenix' },
      ]} />

      <main id="main-content" className="bg-slate-950 min-h-screen">

        {/* HERO */}
        <section className="relative min-h-[75vh] flex items-center pt-24 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Residential window tinting Phoenix AZ"
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
                Residential Window Tinting Phoenix AZ
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Heat rejection, UV protection, privacy, and security film for Phoenix homes. Ceramic, dual-reflective, and decorative options. 700+ projects since 2017. ROC #{rocNumber}.
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

        {/* SECTION 1 */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Why Phoenix Homes Need Window Film
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Phoenix receives over 299 days of sun per year with summer highs regularly exceeding 115F. Standard dual-pane windows — even low-e glass — allow significant solar heat into your home through south and west-facing glass. This forces AC systems to run continuously, spikes utility bills, and fades flooring, furniture, and window treatments. Window film is the highest-ROI home improvement available for Phoenix homeowners — installed in hours, no construction, immediate results.
            </p>
          </div>
        </section>

        {/* VERIFIED PROJECTS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Verified Residential Projects — Phoenix AZ
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto">
                Sample of completed Phoenix residential window film installations drawn from project history.
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

        {/* APPLICATIONS */}
        <section className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Residential Window Film Solutions — Phoenix
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

        {/* COST */}
        <section className="py-24 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Residential Window Tinting Cost — Phoenix AZ
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-400 text-lg font-medium max-w-3xl mx-auto">
                All projects are custom-quoted. These ranges reflect real installed costs from our Phoenix residential jobs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { label: 'Single Room / Entry Points', range: '$300 - $700',    note: '3-6 windows, solar or privacy film, standard residential access' },
                { label: 'Partial Home (Key Rooms)',   range: '$700 - $1,800',  note: '8-15 windows, mixed film types, south/west exposure focus' },
                { label: 'Full Home',                  range: '$1,800 - $4,500+', note: 'Complete coverage, ceramic or dual-reflective, large-format or multi-story' },
              ].map((c) => (
                <div key={c.label} className="bg-slate-800 border border-slate-700 p-8">
                  <div className="text-2xl font-black text-white mb-1">{c.range}</div>
                  <div className="text-green-400 font-black text-sm uppercase tracking-widest mb-3">{c.label}</div>
                  <div className="text-slate-400 text-sm leading-relaxed">{c.note}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm">
              We do not publish flat per-sq-ft rates — every Phoenix home is custom-quoted after a free on-site assessment.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-950 uppercase tracking-tight mb-4">
                Residential Window Tinting FAQs — Phoenix
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
              <Link to="/residential-window-tinting-scottsdale" className="text-green-600 hover:underline">Scottsdale Residential</Link>
              {' · '}
              <Link to="/security-window-film-phoenix" className="text-green-600 hover:underline">Security Window Film</Link>
              {' · '}
              <Link to="/films/ceramic" className="text-green-600 hover:underline">Ceramic Window Film</Link>
              {' · '}
              <Link to="/brands/llumar" className="text-green-600 hover:underline">LLumar Window Film</Link>
            </div>
          </div>
        </section>

        {/* SERVICE AREA */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Phoenix Residential Service Coverage
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              We serve residential properties across all Phoenix neighborhoods and surrounding cities — Arcadia, Ahwatukee, Desert Ridge, Laveen, Sunnyslope, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, Surprise, Goodyear, and beyond. Same-day estimates available for most Phoenix locations. Licensed, bonded, insured. ROC #{rocNumber}.
            </p>
          </div>
        </section>

        <EstimatorCTA />

        {/* CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Phoenix Residential Window Tinting Quote
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment. We evaluate your glass orientation, film compatibility, and recommend the right spec for your home and budget. Licensed ROC #{rocNumber}.
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

export default ResidentialPhoenix;
