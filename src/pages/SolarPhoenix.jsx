import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Thermometer, Zap, Shield, Eye, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';

const SolarPhoenix = () => {
  const rocNumber = '314088';
  const pageTitle = 'Solar Window Film Phoenix AZ | Heat Rejection & Energy Savings | Arizona House of Film';
  const metaDescription = 'Phoenix solar window film installer. Block up to 80% solar heat, cut AC costs, protect interiors. Ceramic & dual-reflective film for homes and businesses. ROC #314088. Free quote.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/solar-window-film-phoenix';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';
  const heroImageUrl =
    'https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/img_20240821_123937_469-jYOb9.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Solar Window Film Installation Phoenix AZ',
    serviceType: 'Solar Window Film Installation',
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
        name: 'How much does solar window film cost in Phoenix?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Solar window film in Phoenix typically runs $6-$14 per square foot installed. A typical Phoenix home runs $800-$2,500 depending on window count and film type. Commercial jobs range from $1,500 to $15,000+ depending on building size and glass area. All projects are custom-quoted.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much heat does solar film block in Phoenix?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'High-performance solar window film blocks 50-80% of solar heat entering through glass. In Phoenix, where direct solar exposure regularly exceeds 1,000 watts per square meter in summer, this translates to dramatically lower interior temperatures on south and west-facing glass — often 10-20 degrees cooler at the glass surface.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between ceramic and standard solar window film?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ceramic solar film uses non-metallic ceramic particles to block infrared heat. It performs at or above the level of metallic films while being signal-transparent (no cell phone or WiFi interference), non-reflective on the exterior, and compatible with all glass types including low-e. Standard solar film uses metallic layers that are less expensive but can cause signal interference and have a more mirror-like exterior appearance. For Phoenix homes and commercial buildings, ceramic is the recommended spec.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does solar window film reduce electricity bills in Arizona?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. APS and SRP rates make solar heat gain expensive in Phoenix — cooling accounts for 50-70% of summer electricity use in untreated buildings. Solar window film reduces AC load 10-30% depending on glass area and orientation. Most Phoenix homeowners and building managers report measurable utility savings within the first billing cycle after installation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can solar film be applied to existing windows in Phoenix?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — solar film applies directly to existing glass without replacement. It works on single-pane, dual-pane, and most low-e glass (film selection must be compatible with existing low-e coating). We assess every glass type before installation to confirm film compatibility and avoid thermal stress issues with dual-pane units.',
        },
      },
    ],
  };

  const filmTypes = [
    {
      name: 'Ceramic Solar Film',
      rejection: 'Up to 80% heat rejection',
      best: 'Best for: Homes, offices, HOA communities',
      notes: 'No signal interference. No mirror exterior. Compatible with low-e glass. Top spec for Phoenix residential and commercial.',
    },
    {
      name: 'Dual-Reflective Solar Film',
      rejection: 'Up to 75% heat rejection',
      best: 'Best for: High-privacy applications, street-facing glass',
      notes: 'Mirror exterior in daylight. Preserves outward views from inside. Ideal for ground-floor privacy + heat control combination.',
    },
    {
      name: 'Neutral Solar Film',
      rejection: 'Up to 65% heat rejection',
      best: 'Best for: Historic buildings, low-reflectivity requirements',
      notes: 'Near-clear appearance. Minimal visible change to glass. Heat and UV rejection without altering architectural aesthetics.',
    },
    {
      name: 'High-Rejection Spectrally Selective',
      rejection: 'Up to 85% heat rejection',
      best: 'Best for: Maximum performance commercial',
      notes: 'Highest heat rejection available. Maintains visible light transmission. Premium spec for large commercial glass walls and atriums.',
    },
  ];

  const applications = [
    { icon: Sun,         title: 'Phoenix Homes',        body: 'South and west-facing residential glass. Full-home coverage or high-priority rooms first. HOA-compliant film specs available.' },
    { icon: Thermometer, title: 'Commercial Buildings', body: 'Office towers, retail, medical, industrial. Energy audit-driven installation. Utility rebate documentation available.' },
    { icon: Zap,         title: 'New Construction',     body: 'Builder glass solar control. Film at fraction of window upgrade cost. Pre-move-in or post-occupancy.' },
    { icon: Shield,      title: 'HOA Communities',      body: 'Multi-home coordinated installs. Uniform film spec. HOA approval support and documentation.' },
    { icon: Eye,         title: 'Retail & Restaurant',  body: 'Storefront solar control without excessive reflectivity. Patron comfort, merchandise UV protection, lower cooling costs.' },
    { icon: BarChart2,   title: 'Energy Audit Support', body: 'Before/after thermal documentation. APS/SRP utility rebate project support. Energy savings reporting.' },
  ];

  const projects = [
    {
      name: 'LA Fitness — Phoenix Location',
      category: 'Commercial Fitness — Phoenix',
      scope: 'Solar control film across full gym exterior glass. High foot-traffic fitness environment with large west-facing glass panels. Heat rejection focus for member comfort and HVAC efficiency.',
      film: 'High-rejection solar control',
      valueLabel: 'Client',
      value: 'LA Fitness',
    },
    {
      name: 'AutoZone — Phoenix Metro Stores',
      category: 'National Retail — Phoenix',
      scope: 'Solar control film on AutoZone retail locations across Phoenix metro. Storefront heat rejection and interior UV protection for automotive merchandise and customer comfort.',
      film: 'Ceramic solar control',
      valueLabel: 'Client',
      value: 'AutoZone',
    },
    {
      name: 'Frank Lloyd Wright Foundation — Taliesin West',
      category: 'Cultural Institution — Scottsdale',
      scope: 'Solar and decorative film for Frank Lloyd Wright Foundation campus. Film compatible with historic architectural glass. Solar performance without altering exterior appearance.',
      film: 'Neutral solar + decorative',
      valueLabel: 'Location',
      value: 'Taliesin West, Scottsdale',
    },
    {
      name: 'Coca-Cola — Phoenix Distribution Facility',
      category: 'National Brand — Commercial',
      scope: 'Solar control film on Coca-Cola Phoenix facility. Large-format commercial glass. Employee comfort and cooling cost reduction in extreme Phoenix heat environment.',
      film: 'High-rejection solar control',
      valueLabel: 'Client',
      value: 'Coca-Cola',
    },
    {
      name: 'Isagenix International — Phoenix Campus',
      category: 'Corporate Campus — Phoenix',
      scope: 'Solar and decorative film across Isagenix Phoenix headquarters. Glass office fronts and conference room solar control. Coordinated through facilities management.',
      film: 'Ceramic solar + decorative',
      valueLabel: 'Client',
      value: 'Isagenix International',
    },
    {
      name: 'Ahwatukee Full-Home — Phoenix',
      category: 'Residential — South Phoenix',
      scope: 'Full-home ceramic solar film. South and west exposure focus. Floor-to-ceiling living room glass and sliding doors. Homeowner reported 20%+ cooling cost reduction first summer.',
      film: 'Ceramic solar control',
      valueLabel: 'Location',
      value: 'Ahwatukee Foothills, Phoenix',
    },
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
              alt="Solar window film Phoenix AZ"
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
                Solar Window Film Phoenix AZ
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Block up to 80% solar heat. Cut AC costs. Protect interiors from UV fading. Ceramic and high-rejection solar film for Phoenix homes and commercial buildings. 700+ projects. ROC #{rocNumber}.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl">
                  <Link to="/contact">Get a Free Solar Film Quote</Link>
                </Button>
                <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all text-lg">
                  (480) 788-1591
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="py-12 bg-green-600">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { stat: 'Up to 80%', label: 'Solar Heat Rejected' },
                { stat: '99%',       label: 'UV Blocked' },
                { stat: '10-30%',    label: 'AC Load Reduction' },
                { stat: '700+',      label: 'Projects Completed' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl md:text-4xl font-black text-white">{s.stat}</div>
                  <div className="text-green-100 font-black text-xs uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 1 */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Solar Film in Phoenix — The ROI Case
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Phoenix averages 299 days of sunshine per year. Direct solar radiation through untreated glass forces AC systems to compensate for 200-400 BTUs per hour per square foot of south or west-facing glass. At APS and SRP peak summer rates, this is a significant and preventable cost. Solar window film is the highest-ROI retrofit available to Phoenix property owners — no construction, no replacement windows, installed in hours, immediate impact on the next billing cycle. Arizona House of Film has delivered solar control film to homes, national retail chains, corporate campuses, and commercial properties across Phoenix since 2017.
            </p>
          </div>
        </section>

        {/* FILM TYPES */}
        <section className="py-24 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Solar Film Options — Phoenix
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filmTypes.map((film, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 p-8">
                  <div className="text-green-400 font-black text-sm uppercase tracking-widest mb-2">{film.rejection}</div>
                  <h3 className="text-xl font-black text-white uppercase mb-2">{film.name}</h3>
                  <p className="text-green-300 text-sm font-bold mb-3">{film.best}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{film.notes}</p>
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
                Verified Solar Film Projects — Phoenix AZ
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto">
                Sample of completed solar window film installations drawn from verified project history.
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
                Solar Film Applications — Phoenix
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
                Solar Window Film Cost — Phoenix AZ
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-400 text-lg font-medium max-w-3xl mx-auto">
                All projects are custom-quoted. These ranges reflect real installed costs from our Phoenix solar film jobs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { label: 'Residential',      range: '$800 - $2,500',    note: 'Single-family home, 10-20 windows, ceramic or dual-reflective solar film' },
                { label: 'Small Commercial', range: '$1,500 - $6,000',  note: 'Retail storefront, medical office, small commercial building' },
                { label: 'Large Commercial', range: '$6,000 - $25,000+', note: 'Multi-story, large glass area, high-rejection spectrally selective film' },
              ].map((c) => (
                <div key={c.label} className="bg-slate-800 border border-slate-700 p-8">
                  <div className="text-2xl font-black text-white mb-1">{c.range}</div>
                  <div className="text-green-400 font-black text-sm uppercase tracking-widest mb-3">{c.label}</div>
                  <div className="text-slate-400 text-sm leading-relaxed">{c.note}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm">
              We do not publish flat per-sq-ft rates — every solar film project is custom-quoted after a free on-site assessment.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-950 uppercase tracking-tight mb-4">
                Solar Window Film FAQs — Phoenix
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
              <Link to="/residential-window-tinting-phoenix" className="text-green-600 hover:underline">Residential Window Tinting Phoenix</Link>
              {' · '}
              <Link to="/commercial-window-film-phoenix" className="text-green-600 hover:underline">Commercial Window Film Phoenix</Link>
              {' · '}
              <Link to="/security-window-film-phoenix" className="text-green-600 hover:underline">Security Window Film</Link>
            </div>
          </div>
        </section>

        {/* SERVICE AREA */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Phoenix Solar Film Service Coverage
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              We install solar window film across the full Phoenix metro — Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, Surprise, Goodyear, Queen Creek, and surrounding communities. Residential and commercial. Licensed, bonded, insured. ROC #{rocNumber}.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Phoenix Solar Window Film Quote
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment. We evaluate glass orientation, current film specs, and recommend the highest-ROI solar film for your property. Licensed ROC #{rocNumber}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl">
                <Link to="/contact">Request Free Solar Film Assessment</Link>
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

export default SolarPhoenix;
