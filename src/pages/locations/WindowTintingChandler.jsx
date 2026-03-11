import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, MapPin, ArrowRight, Star } from 'lucide-react';

export default function WindowTintingChandler() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does window tinting cost in Chandler AZ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Residential window tinting in Chandler typically runs $8–$18 per square foot installed depending on film type and glass size. A standard Chandler home with 10–15 windows averages $800–$2,500. Commercial projects are custom-quoted. Call (480) 788-1591 for a free on-site assessment." }
      },
      {
        "@type": "Question",
        "name": "Does window film help with Arizona heat in Chandler?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Quality solar control films reject 50–80% of solar heat gain. Chandler homes with west and south-facing glass see the most benefit — measurable reduction in cooling costs, typically 15–30% on heavily glazed elevations." }
      },
      {
        "@type": "Question",
        "name": "Is window film allowed by HOAs in Chandler?",
        "acceptedAnswer": { "@type": "Answer", "text": "Most Chandler HOAs permit neutral-tone solar films that don't alter the exterior appearance of the home. Reflective or mirrored films may require HOA approval. We advise clients on HOA-compliant film options before installation." }
      },
      {
        "@type": "Question",
        "name": "How long does window film installation take in Chandler?",
        "acceptedAnswer": { "@type": "Answer", "text": "A typical Chandler residential install takes 4–8 hours depending on window count and film type. Commercial projects are scheduled based on scope. We work around your business hours to minimize disruption." }
      },
      {
        "@type": "Question",
        "name": "Does Arizona House of Film serve all of Chandler?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. We serve all Chandler neighborhoods including Ocotillo, Fulton Ranch, Sun Lakes, Arden Park, Carino Estates, Layton Lakes, and surrounding areas. We also serve Gilbert, Mesa, Tempe, and the full East Valley." }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Window Tinting Chandler AZ",
    "description": "Professional residential and commercial window tinting in Chandler AZ. Solar, decorative, security, and privacy window film. Licensed ROC #314088.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Arizona House of Film",
      "telephone": "+14807881591",
      "address": { "@type": "PostalAddress", "streetAddress": "7007 W Flower St", "addressLocality": "Phoenix", "addressRegion": "AZ", "postalCode": "85033" }
    },
    "areaServed": { "@type": "City", "name": "Chandler", "containedInPlace": { "@type": "State", "name": "Arizona" } }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://arizonahouseoffilm.com" },
      { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://arizonahouseoffilm.com/service-areas" },
      { "@type": "ListItem", "position": 3, "name": "Window Tinting Chandler AZ", "item": "https://arizonahouseoffilm.com/window-tinting-chandler" }
    ]
  };

  const SERVICES = [
    { title: 'Residential Solar Film', desc: 'Reject 50–80% of solar heat. Lower cooling bills on Chandler homes with heavy west and south-facing glass exposure.', link: '/residential-window-tinting' },
    { title: 'Commercial Window Film', desc: 'Office buildings, retail storefronts, and industrial facilities in Chandler. Energy savings + professional appearance.', link: '/commercial-window-tinting' },
    { title: 'Decorative & Privacy Film', desc: 'Frosted, etched, and patterned films for Chandler homes and offices. 600+ Solyx patterns available.', link: '/films' },
    { title: 'Security & Safety Film', desc: 'Shatter-resistant window film for Chandler businesses and homes. Slows forced entry, holds glass on impact.', link: '/safety' },
    { title: 'Energy Saving Film', desc: "Low-e and spectrally selective films that reduce HVAC load year-round in Chandler's desert climate.", link: '/energy-saving-window-films' },
    { title: 'Anti-Graffiti Film', desc: 'Sacrificial surface protection for Chandler retail glass, transit stops, and commercial storefronts.', link: '/anti-graffiti' },
  ];

  const NEIGHBORHOODS = [
    'Ocotillo', 'Fulton Ranch', 'Sun Lakes', 'Arden Park', 'Carino Estates',
    'Layton Lakes', 'Chandler Fashion Center Area', 'Downtown Chandler',
    'Dobson Ranch', 'Warner Ranch'
  ];

  return (
    <>
      <Helmet>
        <title>Window Tinting Chandler AZ | Residential & Commercial</title>
        <meta name="description" content="Window tinting in Chandler AZ — residential solar film, commercial window film, privacy & decorative film. Licensed ROC #314088. Serving all Chandler neighborhoods. Free quote (480) 788-1591." />
        <meta name="keywords" content="window tinting chandler az, window tinting chandler, chandler window film, residential window tinting chandler, commercial window tinting chandler az, window film chandler arizona" />
        <link rel="canonical" href="https://arizonahouseoffilm.com/window-tinting-chandler" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero */}
      <div className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-semibold">CHANDLER, ARIZONA</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Window Tinting Chandler AZ
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl">
            Residential and commercial window film for Chandler homes and businesses. Solar control, privacy, security, and decorative film — installed by Arizona's licensed professionals.
          </p>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="text-gray-300 text-sm">4.5 Google Rating · ROC #314088 · Since 2017</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="bg-green-600 hover:bg-green-500 text-white font-bold px-7 py-3 rounded-lg transition-colors">
              Get Free Quote
            </Link>
            <a href="tel:4807881591" className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-7 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" /> (480) 788-1591
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* Intro */}
        <section className="mb-12 max-w-3xl">
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Arizona House of Film serves Chandler with the full range of residential and commercial window film solutions. Chandler's extreme summer heat — with temperatures regularly exceeding 110°F — makes solar control film one of the highest-ROI home improvements available. We've completed projects across Chandler's master-planned communities, commercial corridors, and retail storefronts since 2017.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Licensed ROC #314088, bonded, and insured. We carry Solyx, LLumar, 3M, and Huper Optik films. Every project is custom-quoted — no flat-rate gimmicks. Call (480) 788-1591 or request a quote online.
          </p>
        </section>

        {/* Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Window Film Services in Chandler AZ</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {SERVICES.map((s, i) => (
              <Link key={i} to={s.link} className="group bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 rounded-xl p-5 transition-all">
                <h3 className="font-bold text-gray-800 text-sm mb-1 group-hover:text-blue-700">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Why AHOF */}
        <section className="mb-12 bg-slate-900 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">Why Chandler Chooses Arizona House of Film</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              '713+ projects completed since 2017',
              'Licensed ROC #314088 — bonded & insured',
              'Authorized installer: Solyx, LLumar, 3M, Huper Optik',
              'Named clients: Coca-Cola, Starbucks, LA Fitness, AutoZone',
              '4.4 Google rating across 100+ reviews',
              'Commercial and residential — same licensed crew',
              'No subcontractors — direct install by our team',
              'Same-week scheduling available',
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200 text-sm">{b}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Chandler Neighborhoods We Serve</h2>
          <p className="text-gray-400 text-sm mb-5">We install window film throughout all of Chandler — no travel surcharge within the Phoenix metro.</p>
          <div className="flex flex-wrap gap-2">
            {NEIGHBORHOODS.map(n => (
              <span key={n} className="bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full">{n}</span>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Window Tinting Chandler AZ — FAQ</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-2">{faq.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Surrounding cities */}
        <section className="mb-12 bg-blue-50 border border-blue-100 rounded-2xl p-8">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-blue-600" />
            <h2 className="font-bold text-gray-800">Also Serving the Phoenix Metro</h2>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Gilbert', 'Mesa', 'Tempe', 'Scottsdale', 'Queen Creek', 'Ahwatukee', 'Sun Lakes', 'Maricopa', 'Phoenix'].map(city => (
              <span key={city} className="bg-white border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">{city}</span>
            ))}
          </div>
        </section>

        {/* Related links */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Explore Film Solutions</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { title: 'Residential Window Tinting', href: '/residential-window-tinting' },
              { title: 'Commercial Window Film', href: '/commercial-window-tinting' },
              { title: 'Bathroom Privacy Film', href: '/bathroom-privacy-window-film' },
              { title: 'Office Privacy Film', href: '/office-privacy-window-film' },
              { title: 'Security Window Film', href: '/safety' },
              { title: 'Browse 618 Film Options', href: '/films' },
            ].map((item, i) => (
              <Link key={i} to={item.href} className="flex items-center gap-2 p-4 border border-gray-100 rounded-xl hover:border-blue-200 hover:bg-blue-50 transition-all group">
                <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
                <span className="font-semibold text-gray-700 text-sm">{item.title}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Get Window Tinting in Chandler AZ</h2>
          <p className="text-gray-300 text-sm mb-6">Arizona House of Film — licensed ROC #314088. Chandler's trusted window film installer since 2017.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-lg transition-colors">
              Request Free Quote
            </Link>
            <a href="tel:4807881591" className="flex items-center gap-2 border border-white/20 text-white font-semibold px-6 py-4 rounded-lg hover:border-white/40 transition-colors">
              <Phone className="w-4 h-4" /> (480) 788-1591
            </a>
          </div>
        </section>

      </div>
    </>
  );
}
