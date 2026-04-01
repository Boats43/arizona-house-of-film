import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building, Shield, Stethoscope, Sun, Home, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';
import EstimatorCTA from '../components/EstimatorCTA';

const RestaurantWindowFilm = () => {
  const rocNumber = '314088';
  const pageTitle = 'Restaurant Window Film Arizona | Tinting & Decorative Film | ROC #314088';
  const metaDescription = 'Professional restaurant window film installation in Arizona — solar control, decorative film, glare reduction & privacy for dining rooms, bars & patios. ROC #314088.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/restaurant-window-film';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';
  const heroImageUrl =
    'https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/img_20240821_123937_469-jYOb9.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Restaurant Window Film Arizona',
    serviceType: 'Restaurant Window Film Installation',
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
        name: 'How much does restaurant window film cost in Arizona?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Restaurant window film in Arizona typically ranges from $1,500 for a small storefront with 4-8 windows to $12,000+ for large restaurants or multi-location franchise rollouts. Pricing depends on film type, glass square footage, and access requirements. Call (480) 788-1591 for a free on-site estimate.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can window film be installed during business hours?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, but most restaurant owners prefer after-hours installation to avoid disrupting service. Arizona House of Film offers after-hours scheduling from 10PM to 6AM specifically for restaurants, bars, and food service locations. We work around your schedule to ensure zero impact on revenue.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will solar film make my restaurant too dark inside?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Modern solar control films reject 50-84% of solar heat while maintaining high visible light transmission. Films like 3M Prestige series and Huper Optik Ceramic allow natural daylight into your dining room while eliminating the radiant heat and glare that make west-facing tables uncomfortable during dinner service.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does anti-graffiti film protect restaurant windows?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Anti-graffiti film acts as a sacrificial clear layer applied to your exterior glass. When vandals scratch, etch, or tag your windows, the damaged film is removed and replaced at a fraction of the cost of replacing the glass itself. This is especially valuable for drive-through windows and entry glass at high-traffic locations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you install window film on restaurant patio enclosures?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We install solar control, decorative, and privacy film on restaurant patio enclosures including glass walls, sliding panels, and retractable enclosure systems. Patio enclosures often have the highest solar heat gain in a restaurant and benefit significantly from heat-rejecting film. Licensed ROC #314088.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does window film void the glass warranty on my restaurant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Professional-grade window films installed by a licensed contractor do not void most glass warranties when the correct film is specified for the glass type. We evaluate your glass composition, seal condition, and manufacturer specifications before recommending a film to ensure warranty compatibility.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does restaurant window film last in Arizona heat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Quality commercial-grade window film lasts 15-25 years on restaurant glass in Arizona. Premium films from 3M, Huper Optik, and LLumar carry manufacturer warranties ranging from 10 years to lifetime. Proper installation by a licensed contractor is critical for longevity in Arizona\'s extreme UV and heat environment.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you match film specs across multiple franchise locations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Arizona House of Film handles multi-location franchise rollouts with consistent film specification, appearance, and performance across all locations. We maintain detailed records of film type, lot numbers, and installation specs so every location matches. Call (480) 788-1591 for franchise pricing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does window film help reduce restaurant cooling costs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Solar control window film can reduce cooling costs by 15-30% in Arizona restaurants by blocking solar heat before it enters the building. Restaurants with large west and south-facing glass see the biggest savings. SRP and APS energy efficiency rebates may apply to qualifying installations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer after-hours installation for restaurants?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We offer after-hours installation from 10PM to 6AM for restaurants, bars, and food service locations throughout Arizona. After-hours scheduling ensures zero disruption to your service hours and allows film to cure overnight before your next business day. No additional charge for standard after-hours scheduling.',
        },
      },
    ],
  };

  const projects = [
    {
      name: 'Starbucks — Multiple Valley Locations',
      category: 'National Coffee Chain — Phoenix Metro',
      scope:
        'Solar control film on west and south-facing storefront glass across multiple Valley locations. Chain-standard installation spec with consistent film appearance and performance across all stores.',
      film: 'Solar control — chain spec',
      valueLabel: 'Scale',
      value: 'Multiple Valley locations',
    },
    {
      name: 'Chipotle, 8099 E McDowell Rd Scottsdale',
      category: 'National QSR Chain — Scottsdale',
      scope:
        '3M Fasara Luna decorative film on storefront glass. Custom sizing across sidelights, transoms, and entry doors. Old Town Scottsdale corridor installation.',
      film: '3M Fasara Luna decorative',
      valueLabel: 'Location',
      value: '8099 E McDowell Rd Scottsdale',
    },
    {
      name: 'Local Brewery — Tempe',
      category: 'Craft Brewery & Taproom — Tempe',
      scope:
        'Gradient privacy film on street-facing bar windows. Maintained natural light for dining area while reducing interior visibility from sidewalk. Custom fade pattern for aesthetic transition.',
      film: 'Gradient privacy film',
      valueLabel: 'Application',
      value: 'Bar window privacy + ambiance',
    },
    {
      name: 'Fine Dining — Scottsdale',
      category: 'Upscale Restaurant — Scottsdale',
      scope:
        'Dual-reflective solar film on floor-to-ceiling west-facing windows. Eliminated 4PM-7PM heat complaint from guests seated along glass wall. After-hours installation to avoid disrupting dinner service.',
      film: 'Dual-reflective solar',
      valueLabel: 'Result',
      value: 'West-facing heat complaint eliminated',
    },
    {
      name: 'Quick Service Restaurant — Phoenix',
      category: 'QSR — High-Traffic Phoenix Location',
      scope:
        'Anti-graffiti film on drive-through windows and entry glass. Sacrificial surface protection for high-traffic location with recurring vandalism. Replacement film stocked for rapid re-application.',
      film: 'Anti-graffiti clear film',
      valueLabel: 'Application',
      value: 'Drive-through + entry glass protection',
    },
  ];

  const applications = [
    {
      icon: Sun,
      title: 'Solar Heat Rejection',
      body: 'Block 50-84% of solar heat without darkening the dining room. Eliminate hot spots at west-facing tables during dinner service.',
    },
    {
      icon: ShoppingBag,
      title: 'Glare Reduction for Dining',
      body: 'Eliminate screen glare on POS systems and reduce squinting at west-facing tables. Improve guest comfort during peak sun hours.',
    },
    {
      icon: Home,
      title: 'Decorative & Branding Film',
      body: 'Etched glass look, logo integration, and ambiance creation. 3M Fasara series and custom-printed films for brand identity.',
    },
    {
      icon: Shield,
      title: 'Anti-Graffiti Protection',
      body: 'Sacrificial clear film for storefront and drive-through glass. Remove and replace damaged film instead of replacing expensive glass.',
    },
    {
      icon: Building,
      title: 'UV Protection for Interiors',
      body: '99% UV block protects booths, artwork, wood finishes, and flooring from fading. Extend the life of your restaurant interior investment.',
    },
    {
      icon: Stethoscope,
      title: 'Privacy Film for Bar Areas',
      body: 'Frosted, gradient, or one-way film for street-facing bar windows. Maintain ambiance and privacy without blocking natural light.',
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
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Commercial Window Tinting', path: '/commercial-window-tinting' },
        { name: 'Restaurant Window Film', path: '/restaurant-window-film' },
      ]} />

      <main id="main-content" className="bg-slate-950 min-h-screen">
        {/* HERO */}
        <section className="relative min-h-[75vh] flex items-center pt-24 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Restaurant window film installation Arizona"
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
                Restaurant Window Film
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Professional restaurant window film for Arizona dining rooms, bars, and patios — solar control, decorative film, and glare reduction installed after hours to protect your guest experience. ROC #{rocNumber}.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl"
                >
                  <Link to="/contact">Get Restaurant Quote</Link>
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

        {/* SECTION 1 — THE RESTAURANT WINDOW CHALLENGE */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              The Restaurant Window Challenge
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Arizona restaurants face a punishing solar environment that directly impacts guest experience and operating costs. West-facing glass — the most common problem orientation for dinner service — floods dining rooms with radiant heat and blinding glare precisely when restaurants are busiest. Guests seated near windows squint at menus, servers struggle with washed-out POS screens, and booth upholstery, artwork, and wood finishes fade at an accelerated rate under relentless UV exposure. The radiant heat pouring through unprotected glass forces HVAC systems to work overtime, spiking energy bills during peak summer months when restaurants can least afford it.
            </p>
          </div>
          <div className="prose max-w-none mb-10 mt-8">
            <p className="text-lg text-slate-300 mb-4">
              Professional restaurant window film solves these problems without sacrificing the natural light and street visibility that define a welcoming dining atmosphere. Modern solar control films reject 50-84% of solar heat while maintaining high visible light transmission — your guests see the view, not the film. Decorative films create etched-glass ambiance, frosted privacy for bar areas, and branded storefront identity without permanent glass modification. Anti-graffiti film protects high-traffic drive-through and entry glass from scratching and tagging at a fraction of glass replacement cost.
            </p>
            <p className="text-lg text-slate-300 mb-4">
              Arizona House of Film has completed restaurant window film installations for national chains including Starbucks and Chipotle, as well as local breweries, fine dining establishments, and quick-service restaurants across the Phoenix metro area. Every project is custom-specified for glass orientation, dining room layout, and operational schedule — with after-hours installation available from 10PM to 6AM so your service is never interrupted. Licensed ROC #314088.
            </p>
          </div>
        </section>

        {/* SECTION 2 — VERIFIED PROJECTS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Verified Restaurant Projects
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto">
                Sample of completed restaurant window film projects across the Arizona market — national chains, local independents, and specialty dining.
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

        {/* SERVICE AREAS */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6">Restaurant Window Film — Service Areas</h2>
            <p className="text-slate-700 mb-6">We install restaurant window film for every type of food service operation across Arizona:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {[
                { area: 'Full-Service Restaurants', desc: 'Fine dining, casual, family restaurants' },
                { area: 'Quick-Service & Fast Casual', desc: 'Drive-through, counter service, franchise' },
                { area: 'Bars & Breweries', desc: 'Taprooms, cocktail bars, wine bars' },
                { area: 'Cafes & Coffee Shops', desc: 'Independent and chain coffee locations' },
                { area: 'Hotel Dining Rooms', desc: 'Resort restaurants, hotel bars, banquet rooms' },
                { area: 'Patio Enclosures', desc: 'Glass-enclosed patios, retractable walls' },
                { area: 'Drive-Through Windows', desc: 'Anti-graffiti and solar control for QSR' },
                { area: 'Strip Mall Food Courts', desc: 'Multi-tenant food service storefronts' },
                { area: 'Franchise & Multi-Location', desc: 'Consistent specs across all locations' },
              ].map(({ area, desc }) => (
                <div key={area} className="border border-slate-200 rounded-lg p-3">
                  <div className="font-bold text-slate-900 text-sm">{area}</div>
                  <div className="text-xs text-slate-500 mt-1">{desc}</div>
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
                Restaurant Window Film Applications
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

        {/* SECTION 4 — SERVICE COVERAGE */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Restaurant Window Film Service Coverage
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Arizona House of Film serves all Arizona restaurant markets — Phoenix, Scottsdale, Mesa, Chandler, Tempe, Gilbert, Glendale, Peoria, Surprise, Goodyear, Buckeye, Flagstaff, Tucson, and Yuma. Whether you operate a single independent restaurant or manage a regional franchise with 50 locations, we provide consistent film specification, installation quality, and documentation across every property.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mt-6">
              We understand that restaurant operations cannot tolerate downtime. That is why we offer after-hours installation from 10PM to 6AM at no additional charge for standard scheduling. Our crew arrives after your last seating, installs film overnight, and is gone before your morning prep begins. For franchise and multi-location rollouts, we coordinate installation schedules across all locations with a single point of contact, consistent film specification documents, and centralized invoicing. Every project documented under ROC #314088.
            </p>

            {/* COMMERCIAL CROSS-LINK */}
            <div className="cross-link-banner bg-slate-800 border border-slate-700 rounded-lg px-6 py-4 max-w-3xl mx-auto mt-6 text-center">
              <p className="text-gray-300 text-sm">
                Looking for <strong className="text-white">commercial window tinting</strong> beyond restaurants?{" "}
                <Link to="/commercial-window-tinting" className="text-green-400 hover:text-green-300 font-semibold">
                  View all commercial services →
                </Link>
              </p>
            </div>
          </div>
        </section>

        <EstimatorCTA />

        {/* PRICING & SPECIFICATIONS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6">Restaurant Window Film — Pricing & Specifications</h2>
            <p className="text-slate-700 mb-4">All restaurant window film projects are custom-quoted based on glass area, film specification, and access requirements. These ranges reflect installed costs across completed Arizona restaurant projects:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="font-black text-xl mb-1">$1,500–$4,000</div>
                <div className="font-bold text-slate-800 mb-2">Small Restaurant</div>
                <div className="text-sm text-slate-600">Single storefront, 4-8 windows. Solar control or decorative film. Ideal for cafes, coffee shops, and small dining rooms.</div>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="font-black text-xl mb-1">$4,000–$12,000</div>
                <div className="font-bold text-slate-800 mb-2">Mid-Size Restaurant</div>
                <div className="text-sm text-slate-600">Full glass perimeter, multiple film types. Bar area privacy film plus dining room solar control. Complete coverage for mid-size operations.</div>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="font-black text-xl mb-1">$12,000+</div>
                <div className="font-bold text-slate-800 mb-2">Large / Multi-Location</div>
                <div className="text-sm text-slate-600">Full building wrap, franchise rollout across multiple locations, custom specification per location. Centralized project management and invoicing.</div>
              </div>
            </div>
            <p className="text-slate-600 text-sm">SRP Business Solutions and APS energy efficiency rebates available for qualifying restaurant window film installations. We provide NFRC-rated documentation. Customers submit directly to their utility provider.</p>
          </div>
        </section>

        {/* SECTION 5 — CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Restaurant Window Film Quote
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment. Custom specification for your glass type, dining room orientation, and operational schedule. Licensed ROC
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

        {/* CROSS-LINKS */}
        <section className="py-14 bg-slate-900 border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/commercial-window-tinting" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Commercial Window Tinting →</Link>
              <Link to="/decorative-window-films" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Decorative Window Films →</Link>
              <Link to="/anti-graffiti" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Anti-Graffiti Film →</Link>
            </div>
          </div>
        </section>

        <ContactFormSection />

        {/* FAQ SECTION */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Restaurant Window Film FAQ
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
            </div>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200 p-6">
                  <h3 className="text-base font-black text-slate-950 uppercase mb-3 leading-tight">{faq.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RestaurantWindowFilm;
