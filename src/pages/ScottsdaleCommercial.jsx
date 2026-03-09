import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building, Shield, Stethoscope, Sun, Home, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';

const ScottsdaleCommercial = () => {
  const rocNumber = '314088';
  const pageTitle = 'Commercial Window Tinting Scottsdale AZ | Verified Projects | Arizona House of Film';
  const metaDescription = 'Scottsdale commercial window film. Verified projects: Chipotle, Renaissance Companies, 2nd Swing, Frank Lloyd Wright Foundation. ROC #314088. (480) 788-1591.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/commercial-window-tinting-scottsdale';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';
  const heroImageUrl =
    'https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/img_20240821_123937_469-jYOb9.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Window Tinting Scottsdale AZ',
    serviceType: 'Commercial Window Film Installation',
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

  const projects = [
    {
      name: 'Chipotle, 8099 E McDowell Rd Scottsdale AZ',
      category: 'National QSR Chain — Scottsdale',
      scope:
        '3M Fasara Luna decorative film on commercial storefront glass. Custom sizing across sidelights, transoms, and entry doors. Installed through Gable Family Builders as GC. Old Town Scottsdale corridor.',
      film: '3M Fasara Luna decorative',
      valueLabel: 'Location',
      value: '8099 E McDowell Rd Scottsdale',
    },
    {
      name: 'Renaissance Companies, Scottsdale',
      category: 'Commercial Construction — Repeat Client',
      scope:
        'Security and decorative film across multiple commercial TI projects in Scottsdale and Phoenix metro. Eight project engagements spanning 2020–2025. Ongoing relationship.',
      film: 'Security + decorative',
      valueLabel: 'Documented value',
      value: '$81,000+ across 8 projects',
    },
    {
      name: '2nd Swing, Scottsdale',
      category: 'Specialty Retail — Scottsdale',
      scope:
        'Security film for specialty retail location. High-value golf equipment inventory protection. Smash-and-grab deterrence deployment.',
      film: 'Security film',
      valueLabel: 'Documented value',
      value: '$13,600+',
    },
    {
      name: 'Frank Lloyd Wright Foundation, Scottsdale',
      category: 'Cultural Institution — Taliesin West',
      scope:
        'Window film installation at Frank Lloyd Wright Foundation Scottsdale campus. Preservation-sensitive environment requiring film selection compatible with historic architectural glass.',
      film: 'Solar + decorative',
      valueLabel: 'Location',
      value: 'Scottsdale AZ',
    },
    {
      name: 'Element Scottsdale at Skysong + North Scottsdale Dental',
      category: 'Hotel and Professional Office — Scottsdale',
      scope:
        'Solar and privacy film for Scottsdale hotel property and dental office. Patient privacy film for clinical environments. Skysong Innovation District location.',
      film: 'Solar + privacy',
      valueLabel: 'Scale',
      value: 'Hotel and professional office',
    },
  ];

  const applications = [
    {
      icon: ShoppingBag,
      title: 'Old Town Mixed-Use Retail',
      body: 'Solar + decorative, storefront orientation, design standard compliance',
    },
    {
      icon: Building,
      title: 'North Scottsdale Office Corridor',
      body: 'Dual-reflective solar, east-west exposure, LEED documentation',
    },
    {
      icon: Stethoscope,
      title: 'Scottsdale Medical and Dental',
      body: 'Privacy film, HIPAA-sensitive environments, patient area frosting',
    },
    {
      icon: Sun,
      title: 'Scottsdale Hotels and Hospitality',
      body: 'Solar control, guest comfort, UV protection for furnishings',
    },
    {
      icon: Shield,
      title: 'Scottsdale Schools and Childcare',
      body: '8-mil and 12-mil security, delay-of-entry, emergency protocol compliance',
    },
    {
      icon: Home,
      title: 'HOA and Property Management',
      body: 'Consistent film spec across units, tenant coordination, bulk pricing',
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
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Commercial Window Tinting', path: '/commercial-window-tinting' },
        { name: 'Scottsdale', path: '/commercial-window-tinting-scottsdale' },
      ]} />

      <main id="main-content" className="bg-slate-950 min-h-screen">
        {/* HERO */}
        <section className="relative min-h-[75vh] flex items-center pt-24 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Commercial window tinting Scottsdale AZ"
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
                Commercial Window Tinting Scottsdale AZ
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Verified commercial installations across Scottsdale — from Old Town storefronts to North Scottsdale
                office complexes. ROC #{rocNumber}.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl"
                >
                  <Link to="/contact">Get Project Quote</Link>
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

        {/* SECTION 1 — THE SCOTTSDALE CHALLENGE */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              The Scottsdale Commercial Window Film Challenge
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Scottsdale commercial buildings face a specific combination of east-west solar exposure, high-end tenant
              expectations, and HOA or design standards that require film selection beyond standard solar control. North
              Scottsdale office corridors, Old Town mixed-use, and Scottsdale Fashion Square area retail each present
              different glass orientations and film specification requirements. We have completed verified commercial
              installations across all Scottsdale submarkets.
            </p>
          </div>
        </section>

        {/* SECTION 2 — VERIFIED PROJECTS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Verified Commercial Projects — Scottsdale AZ
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto">
                Verified sample of completed Scottsdale commercial window film projects drawn from invoice history.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-slate-50 border-l-4 border-green-500 p-8">
                  <p className="text-xs font-black text-green-600 uppercase tracking-widest mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-base font-black text-slate-950 uppercase mb-3 leading-tight">{project.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{project.scope}</p>
                  <div className="border-t border-slate-200 pt-4 space-y-1">
                    <p className="text-xs text-slate-500">
                      <span className="font-black text-slate-700 uppercase">Film:</span> {project.film}
                    </p>
                    <p className="text-xs text-slate-500">
                      <span className="font-black text-slate-700 uppercase">{project.valueLabel}:</span>{' '}
                      {project.value}
                    </p>
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
                Commercial Window Film for Every Scottsdale Property Type
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

        {/* SECTION 4 — SERVICE AREA */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Scottsdale Commercial Service Coverage
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              We serve all Scottsdale commercial submarkets — Old Town, South Scottsdale, Central Scottsdale, North
              Scottsdale, DC Ranch, Gainey Ranch, McCormick Ranch, Kierland, Scottsdale Quarter, and the Scottsdale
              Airpark industrial corridor. Same-day estimates available for most Scottsdale locations.
            </p>
          </div>
        </section>

        {/* SECTION 5 — CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Scottsdale Commercial Window Film Quote
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment. Custom specification for your glass type and building orientation. Licensed ROC
              #{rocNumber}.
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

        <ContactFormSection />
      </main>
    </>
  );
};

export default ScottsdaleCommercial;
