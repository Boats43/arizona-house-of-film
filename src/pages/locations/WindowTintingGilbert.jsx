import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, MapPin, ArrowRight, Star } from 'lucide-react';

export default function WindowTintingGilbert() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does window tinting cost in Gilbert AZ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Residential window tinting in Gilbert typically runs $8–$18 per square foot installed depending on film type and glass size. A standard Gilbert home with 10–15 windows averages $800–$2,500. Commercial projects in Gilbert's Higley Tech Corridor and SanTan corridor are custom-quoted. Call (480) 788-1591 for a free on-site assessment." }
      },
      {
        "@type": "Question",
        "name": "Does window film help with Arizona heat in Gilbert?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Quality solar control films reject 50–80% of solar heat gain. Gilbert homes — especially newer builds in Power Ranch, Morrison Ranch, and Val Vista Lakes with large glazed surfaces — see the biggest benefit. Measurable cooling cost reductions of 15–30% are typical on heavily glazed elevations." }
      },
      {
        "@type": "Question",
        "name": "Is window film allowed by HOAs in Gilbert like Power Ranch and Morrison Ranch?",
        "acceptedAnswer": { "@type": "Answer", "text": "Most Gilbert HOAs — including Power Ranch and Morrison Ranch — permit neutral-tone solar films that preserve the exterior appearance of the home. Reflective or mirrored films may require HOA board approval. We advise clients on HOA-compliant film options before any installation and can provide spec sheets for HOA submission." }
      },
      {
        "@type": "Question",
        "name": "How long does window film installation take in Gilbert?",
        "acceptedAnswer": { "@type": "Answer", "text": "A typical Gilbert residential install takes 4–8 hours depending on window count and film type. Commercial projects along the Higley Tech Corridor and SanTan corridor are scheduled based on scope. We work around your business hours to minimize disruption." }
      },
      {
        "@type": "Question",
        "name": "Does Arizona House of Film serve all of Gilbert?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. We serve all Gilbert neighborhoods including Power Ranch, Val Vista Lakes, Morrison Ranch, Trilogy at Power Ranch, Greenfield Lakes, the Heritage District, and the Higley Tech Corridor. We also serve Chandler, Mesa, Queen Creek, Tempe, and the full East Valley." }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Window Tinting Gilbert AZ",
    "description": "Professional residential and commercial window tinting in Gilbert AZ. Solar, decorative, security, and privacy window film. Licensed ROC #314088.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Arizona House of Film",
      "telephone": "+14807881591",
      "address": { "@type": "PostalAddress", "streetAddress": "7007 W Flower St", "addressLocality": "Phoenix", "addressRegion": "AZ", "postalCode": "85033" }
    },
    "areaServed": { "@type": "City", "name": "Gilbert", "containedInPlace": { "@type": "State", "name": "Arizona" } }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://arizonahouseoffilm.com" },
      { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://arizonahouseoffilm.com/service-areas" },
      { "@type": "ListItem", "position": 3, "name": "Window Tinting Gilbert AZ", "item": "https://arizonahouseoffilm.com/window-tinting-gilbert" }
    ]
  };

  const SERVICES = [
    { title: 'Residential Solar Film', desc: 'Reject 50–80% of solar heat. Lower cooling bills on Gilbert homes — especially new builds in Power Ranch and Morrison Ranch with large glass elevations.', link: '/residential-window-tinting' },
    { title: 'Commercial Window Film', desc: 'Office buildings in the Higley Tech Corridor, SanTan retail storefronts, and industrial facilities. Energy savings + professional appearance.', link: '/commercial-window-tinting' },
    { title: 'Decorative & Privacy Film', desc: 'Frosted, etched, and patterned films for Gilbert homes and offices. 600+ Solyx patterns available.', link: '/films' },
    { title: 'Security & Safety Film', desc: 'Shatter-resistant window film for Gilbert businesses and homes. Slows forced entry, holds glass on impact.', link: '/safety' },
    { title: 'Energy Saving Film', desc: "Low-e and spectrally selective films that reduce HVAC load year-round in Gilbert's rapidly growing residential communities.", link: '/energy-saving-window-films' },
    { title: 'Anti-Graffiti Film', desc: 'Sacrificial surface protection for Gilbert retail glass and commercial storefronts along the SanTan corridor.', link: '/anti-graffiti' },
  ];

  const NEIGHBORHOODS = [
    'Power Ranch', 'Val Vista Lakes', 'Morrison Ranch', 'Trilogy at Power Ranch',
    'Greenfield Lakes', 'Higley Tech Corridor', 'Downtown Gilbert (Heritage District)',
    'San Tan Ranch', 'Seville', 'Waters Edge'
  ];

  return (
    <>
      <Helmet>
        <title>Window Tinting Gilbert AZ | Residential & Commercial | Arizona House of Film</title>
        <meta name="description" content="Window tinting in Gilbert AZ — residential solar film, commercial window film, privacy & decorative film. Licensed ROC #314088. Serving all Gilbert neighborhoods. Free quote (480) 788-1591." />
        <meta name="keywords" content="window tinting gilbert az, window tinting gilbert, gilbert window film, residential window tinting gilbert, commercial window tinting gilbert az, premium house window tinting gilbert" />
        <link rel="canonical" href="https://arizonahouseoffilm.com/window-tinting-gilbert" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero */}
      <div className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-semibold">GILBERT, ARIZONA</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Window Tinting Gilbert AZ
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl">
            Residential and commercial window film for Gilbert homes and businesses. Solar control, privacy, security, and decorative film — installed by Arizona's licensed professionals.
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
            Arizona House of Film serves Gilbert with the full range of residential and commercial window film solutions. Gilbert's explosive growth — from master-planned communities like Power Ranch, Val Vista Lakes, and Morrison Ranch to the thriving Higley Tech Corridor and SanTan commercial corridor — has created enormous demand for solar control, privacy, and energy-saving window film. New construction homes in Gilbert feature large glass elevations that absorb significant heat without film protection.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Licensed ROC #314088, bonded, and insured. We carry Solyx, LLumar, 3M, and Huper Optik films. Every project is custom-quoted — no flat-rate gimmicks. Call (480) 788-1591 or request a quote online.
          </p>
        </section>

        {/* Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Window Film Services in Gilbert AZ</h2>
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
          <h2 className="text-xl font-bold text-white mb-6">Why Gilbert Chooses Arizona House of Film</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Gilbert Neighborhoods We Serve</h2>
          <p className="text-gray-400 text-sm mb-5">We install window film throughout all of Gilbert — no travel surcharge within the Phoenix metro.</p>
          <div className="flex flex-wrap gap-2">
            {NEIGHBORHOODS.map(n => (
              <span key={n} className="bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full">{n}</span>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Window Tinting Gilbert AZ — FAQ</h2>
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
            {['Chandler', 'Mesa', 'Queen Creek', 'Tempe', 'Scottsdale', 'Ahwatukee', 'San Tan Valley', 'Phoenix'].map(city => (
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
          <h2 className="text-2xl font-bold text-white mb-2">Get Window Tinting in Gilbert AZ</h2>
          <p className="text-gray-300 text-sm mb-6">Arizona House of Film — licensed ROC #314088. Gilbert's trusted window film installer since 2017.</p>
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
