import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Shield, Eye, Thermometer, Palette, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';
import EstimatorCTA from '../components/EstimatorCTA';

const WindowTintingPhoenix = () => {
  const rocNumber = '314088';
  const pageTitle = 'Window Tinting Phoenix AZ | ROC #314088';
  const metaDescription =
    'Phoenix window tinting experts since 2017. Residential & commercial window tinting for homes, offices, and storefronts. ROC #314088. Ceramic, solar, security, decorative. Free quote.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/window-tinting-phoenix';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';
  const heroImageUrl = '/images/gallery/20250619_100523.webp';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Window Tinting',
    name: 'Window Tinting Phoenix AZ',
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
        name: 'How much does window tinting cost in Phoenix?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Phoenix window tinting costs vary by project type. Residential window tinting for a standard home runs $400–$1,800 depending on square footage, film type, and number of windows. Commercial window tinting for office buildings and retail storefronts runs $800–$15,000+ depending on building size and film spec. Ceramic window tinting runs higher than standard solar film. All jobs are custom-quoted after a free site assessment. We do not publish flat per-sq-ft rates. ROC #314088.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best window tint for homes in Phoenix?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "For Phoenix's extreme heat, ceramic window tint is the top-performing option for homes. Ceramic film rejects up to 80% of infrared heat without the mirror look of older reflective films. It works in both directions — reducing heat coming in during summer and retaining warmth in winter. For privacy, dual-reflective films work well. For HOA-restricted homes, neutral or low-reflectivity films meet most CC&R requirements. We match film type to your specific exposure, orientation, and HOA rules.",
        },
      },
      {
        '@type': 'Question',
        name: 'How long does home window tinting take in Phoenix?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A typical Phoenix home window tinting installation takes 1–2 days depending on home size and number of windows. A standard 3-bedroom home with 15–20 windows takes approximately 6–8 hours. Larger homes or homes requiring specialty film on difficult-to-access glass may require a second day. We schedule most residential installations Monday–Friday with same-week availability in most cases.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does window tinting reduce air conditioning costs in Phoenix?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Quality window tinting reduces solar heat gain through glass, which is one of the largest sources of cooling load in Phoenix homes. High-performance solar control films can reduce heat gain through glass by 50–80%, directly lowering air conditioning demand during peak summer months. Some Arizona utility providers including SRP and APS offer rebates for qualifying energy-efficient window film installations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is commercial window tinting worth it for Phoenix businesses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Commercial window tinting in Phoenix directly reduces energy costs by cutting solar heat gain through storefront and office glass. It reduces glare for employees and customers, lowers liability from glass breakage, and can enhance exterior branding with decorative or frosted film. Most Phoenix commercial clients see ROI within 2–4 years from energy savings alone. We have completed commercial window tinting for national brands including AutoZone, Starbucks, Coca-Cola, and LA Fitness.',
        },
      },
    ],
  };

  const services = [
    {
      icon: Sun,
      title: 'Residential Window Tinting',
      body: 'Homes, condos, HOA communities. Ceramic, solar, privacy film.',
      to: '/residential-window-tinting',
    },
    {
      icon: Building2,
      title: 'Commercial Window Tinting',
      body: 'Office buildings, retail, storefronts, national brands.',
      to: '/commercial-window-tinting',
    },
    {
      icon: Shield,
      title: 'Security Window Film',
      body: 'Forced entry resistance, blast mitigation, safety glass.',
      to: '/security-window-film-phoenix',
    },
    {
      icon: Palette,
      title: 'Decorative Window Film',
      body: 'Frosted, 3M Fasara, branded glass.',
      to: '/decorative-window-films',
    },
    {
      icon: Thermometer,
      title: 'Solar Window Film',
      body: 'Heat rejection, glare control, energy savings.',
      to: '/solar-window-film-phoenix',
    },
    {
      icon: Eye,
      title: 'Anti-Graffiti Film',
      body: 'Sacrificial film for transit, retail, municipal.',
      to: '/anti-graffiti-film-phoenix',
    },
  ];

  const filmTypes = [
    { type: 'Ceramic', heat: 'Up to 80%', light: 'Clear to light tint', best: 'Homes, HOA-friendly' },
    { type: 'Dual-Reflective', heat: 'Up to 75%', light: 'Mirror exterior', best: 'Privacy + heat' },
    { type: 'Solar Control', heat: 'Up to 65%', light: 'Neutral', best: 'Commercial buildings' },
    { type: 'Safety / Security', heat: 'Varies', light: 'Clear', best: 'Glass protection' },
    { type: 'Decorative / Frosted', heat: 'Varies', light: 'Opaque', best: 'Privacy, branding' },
  ];

  const clients = [
    'AutoZone',
    'Coca-Cola',
    'LA Fitness',
    'Starbucks',
    'Valley Metro',
    'Isagenix',
    'City of Phoenix',
    'Frank Lloyd Wright Foundation',
  ];

  const serviceAreas = [
    'Phoenix',
    'Scottsdale',
    'Tempe',
    'Mesa',
    'Chandler',
    'Gilbert',
    'Glendale',
    'Peoria',
    'Surprise',
    'Avondale',
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
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Window Tinting', path: '/window-tinting-phoenix' },
          { name: 'Phoenix', path: '/window-tinting-phoenix' },
        ]}
      />

      <main id="main-content" className="bg-slate-950 min-h-screen">

        {/* HERO */}
        <section className="relative min-h-[75vh] flex items-center pt-24 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Window tinting Phoenix AZ — residential and commercial window film"
              className="w-full h-full object-cover opacity-40"
              src={heroImageUrl}
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="max-w-4xl">
              <span className="inline-block px-4 py-1 bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-widest">
                Licensed · Bonded · ROC #{rocNumber}
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase leading-[0.85] tracking-tighter">
                Window Tinting Phoenix AZ
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Residential &amp; commercial window tinting for Phoenix homes, offices, and storefronts. ROC #{rocNumber} since 2017.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl"
                >
                  <Link to="/contact">Get Free Quote</Link>
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

        {/* STATS BAR */}
        <section className="py-6 bg-green-600">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-slate-950 font-black text-sm uppercase tracking-widest">
              <span>700+ Projects</span>
              <span className="hidden sm:inline text-slate-950/40">·</span>
              <span>Since 2017</span>
              <span className="hidden sm:inline text-slate-950/40">·</span>
              <span>ROC #{rocNumber}</span>
              <span className="hidden sm:inline text-slate-950/40">·</span>
              <span>Phoenix Based</span>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Window Tinting Services — Phoenix AZ
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto">
                Home window tinting, commercial window tinting, and specialty film for every application in the Phoenix metro.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="bg-slate-50 border border-slate-200 hover:border-green-500 p-8 transition-all group"
                >
                  <div className="w-12 h-12 bg-slate-100 flex items-center justify-center mb-5 group-hover:bg-green-600 transition-colors">
                    <svc.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-black text-slate-950 uppercase mb-3 leading-tight">{svc.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{svc.body}</p>
                  <Link
                    to={svc.to}
                    className="text-green-600 font-black text-xs uppercase tracking-widest hover:underline"
                  >
                    Learn More →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY PHOENIX NEEDS WINDOW TINTING */}
        <section className="py-20 bg-slate-900 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Why Phoenix Homes &amp; Businesses Need Window Tinting
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-black text-green-400 uppercase tracking-widest mb-4">Residential</h3>
                <p className="text-slate-300 text-base leading-relaxed font-medium">
                  Arizona's 300+ days of sun and 115°F summer peaks push untreated residential glass to the breaking point. South and west-facing windows can radiate intense heat into living spaces, forcing air conditioning systems to run continuously. Window tinting for homes in Phoenix cuts solar heat gain by 50–80%, reducing AC demand, lowering utility bills, blocking 99% of UV rays that fade flooring and furniture, and eliminating hot spots near glass. House window tinting is one of the highest-ROI home improvements available in the Phoenix market — installed in hours, no construction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-black text-green-400 uppercase tracking-widest mb-4">Commercial</h3>
                <p className="text-slate-300 text-base leading-relaxed font-medium">
                  Phoenix commercial buildings with large storefront or curtain wall glass face extreme solar exposure that drives energy costs and creates uncomfortable conditions for employees and customers. Commercial window tinting reduces solar heat gain, controls glare, improves occupant comfort, and lowers HVAC demand across office buildings, retail storefronts, restaurants, medical facilities, and warehouses. Phoenix's UV index — among the highest in the US — also accelerates merchandise fading and interior material degradation, which window film directly mitigates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FILM TYPES TABLE */}
        <section className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Window Tint Film Types — Phoenix
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-400 text-lg font-medium max-w-3xl mx-auto">
                We match film specification to your glass orientation, use case, and HOA requirements.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-green-600 text-slate-950">
                    <th className="px-6 py-4 font-black text-sm uppercase tracking-widest">Film Type</th>
                    <th className="px-6 py-4 font-black text-sm uppercase tracking-widest">Heat Rejection</th>
                    <th className="px-6 py-4 font-black text-sm uppercase tracking-widest">Visible Light</th>
                    <th className="px-6 py-4 font-black text-sm uppercase tracking-widest">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {filmTypes.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-slate-900 border-b border-slate-800' : 'bg-slate-800 border-b border-slate-700'}
                    >
                      <td className="px-6 py-4 font-black text-white text-sm">{row.type}</td>
                      <td className="px-6 py-4 text-green-400 font-bold text-sm">{row.heat}</td>
                      <td className="px-6 py-4 text-slate-300 text-sm">{row.light}</td>
                      <td className="px-6 py-4 text-slate-300 text-sm">{row.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* VERIFIED CLIENTS */}
        <section className="py-16 bg-slate-900 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-8">
              Verified Commercial Clients
            </p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {clients.map((client) => (
                <span key={client} className="text-slate-300 font-black text-sm uppercase tracking-wide">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* COST */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Window Tinting Cost — Phoenix AZ
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto">
                No flat per-sq-ft rates. All jobs are custom-quoted after a free site assessment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
              {[
                {
                  label: 'Residential Window Tinting',
                  range: '$400 – $1,800',
                  note: 'Standard home, varies by square footage, film type, and number of windows.',
                },
                {
                  label: 'Commercial Window Tinting',
                  range: '$800 – $15,000+',
                  note: 'Office buildings, retail, storefronts — varies by building size and film spec.',
                },
              ].map((c) => (
                <div key={c.label} className="bg-slate-50 border-l-4 border-green-500 p-8">
                  <div className="text-3xl font-black text-slate-950 mb-1">{c.range}</div>
                  <div className="text-green-600 font-black text-xs uppercase tracking-widest mb-3">{c.label}</div>
                  <div className="text-slate-600 text-sm leading-relaxed">{c.note}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm">
              Ceramic window tinting runs higher than standard solar film. All projects include free on-site assessment. ROC #{rocNumber}.
            </p>
          </div>
        </section>

        {/* SERVICE AREA */}
        <section className="py-20 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Phoenix Window Tinting Service Area
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mb-8">
              We provide residential and commercial window tinting throughout the Phoenix metro. Same-week scheduling available for most locations. Licensed, bonded, insured. ROC #{rocNumber}.
            </p>
            <div className="flex flex-wrap gap-3">
              {serviceAreas.map((city) => (
                <span
                  key={city}
                  className="px-4 py-2 bg-slate-800 border border-slate-700 text-slate-300 font-black text-xs uppercase tracking-widest"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-950 uppercase tracking-tight mb-4">
                Window Tinting Phoenix — FAQ
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
              <Link to="/residential-window-tinting-phoenix" className="text-green-600 hover:underline">
                Residential Window Tinting Phoenix
              </Link>
              {' · '}
              <Link to="/commercial-window-film-phoenix" className="text-green-600 hover:underline">
                Commercial Window Film Phoenix
              </Link>
              {' · '}
              <Link to="/privacy-film-sliding-glass-door" className="text-green-600 hover:underline">
                Sliding Glass Door Tinting
              </Link>
              {' · '}
              <Link to="/window-film-phoenix" className="text-green-600 hover:underline">
                Window Film Phoenix AZ
              </Link>
              {' · '}
              <Link to="/security-window-film-phoenix" className="text-green-600 hover:underline">
                Security Window Film Phoenix
              </Link>
            </div>
          </div>
        </section>

        <EstimatorCTA />

        {/* CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Phoenix Window Tinting Quote
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment for residential and commercial window tinting in Phoenix AZ. ROC #{rocNumber}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl"
              >
                <Link to="/contact">Request Free Quote</Link>
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

export default WindowTintingPhoenix;
