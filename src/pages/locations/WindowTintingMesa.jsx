import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, MapPin, ArrowRight, Star } from 'lucide-react';

export default function WindowTintingMesa() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does window tinting cost in Mesa AZ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Residential window tinting in Mesa typically runs $8–$18 per square foot installed depending on film type and glass size. A standard Mesa home with 10–15 windows averages $800–$2,500. Commercial projects are custom-quoted. Call (480) 788-1591 for a free on-site assessment." }
      },
      {
        "@type": "Question",
        "name": "Does window film help with heat in Mesa's east-facing homes?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. East and west exposures in Mesa see the highest solar gain during morning and afternoon hours. Quality solar control films reject 50–80% of solar heat on those elevations — measurable reduction in cooling costs, typically 15–30% on heavily glazed east and west walls." }
      },
      {
        "@type": "Question",
        "name": "Can window film be applied to older single-pane windows in Mesa?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Film works on older single-pane glass common in Mesa's established neighborhoods. In fact, single-pane windows benefit most from film — they transfer heat directly with no insulating gap. Adding solar film to single-pane glass can dramatically reduce heat gain and UV exposure without replacing the glass." }
      },
      {
        "@type": "Question",
        "name": "Is window tinting allowed in Mesa HOAs?",
        "acceptedAnswer": { "@type": "Answer", "text": "Most Mesa HOAs permit neutral solar films that don't alter exterior appearance. Las Sendas, Red Mountain Ranch, and Eastmark HOAs typically allow non-reflective films. We advise clients on HOA-compliant options before installation and can provide spec sheets for HOA submission." }
      },
      {
        "@type": "Question",
        "name": "Does Arizona House of Film serve all of Mesa?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. We serve all Mesa zip codes including 85201–85215, covering neighborhoods from Downtown Mesa to Las Sendas, Red Mountain Ranch, Eastmark, and Superstition Springs. We also serve Gilbert, Chandler, Tempe, and Queen Creek." }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Window Tinting Mesa AZ",
    "description": "Professional residential and commercial window tinting in Mesa AZ. Solar, decorative, security, and privacy window film. Licensed ROC #314088.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Arizona House of Film",
      "telephone": "+14807881591",
      "address": { "@type": "PostalAddress", "streetAddress": "7007 W Flower St", "addressLocality": "Phoenix", "addressRegion": "AZ", "postalCode": "85033" }
    },
    "areaServed": { "@type": "City", "name": "Mesa", "containedInPlace": { "@type": "State", "name": "Arizona" } }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://arizonahouseoffilm.com" },
      { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://arizonahouseoffilm.com/service-areas" },
      { "@type": "ListItem", "position": 3, "name": "Window Tinting Mesa AZ", "item": "https://arizonahouseoffilm.com/window-tinting-mesa" }
    ]
  };

  const SERVICES = [
    { title: 'Residential Solar Film', desc: 'Reject 50–80% of solar heat. High impact on Mesa homes with east and west-facing glass exposure across all neighborhoods.', link: '/residential-window-tinting' },
    { title: 'Commercial Window Film', desc: 'Office buildings, retail storefronts, and industrial facilities throughout Mesa. Energy savings + professional appearance.', link: '/commercial-window-tinting' },
    { title: 'Decorative & Privacy Film', desc: 'Frosted, etched, and patterned films for Mesa homes and offices. 600+ Solyx patterns available.', link: '/films' },
    { title: 'Security & Safety Film', desc: 'Shatter-resistant window film for Mesa businesses and homes. Slows forced entry, holds glass on impact.', link: '/safety' },
    { title: 'Energy Saving Film', desc: "Low-e and spectrally selective films that reduce HVAC load year-round — especially impactful on Mesa's older single-pane residential stock.", link: '/energy-saving-window-films' },
    { title: 'Anti-Graffiti Film', desc: 'Sacrificial surface protection for Mesa retail glass, transit stops, and commercial storefronts.', link: '/anti-graffiti' },
  ];

  const NEIGHBORHOODS = [
    'Las Sendas', 'Red Mountain Ranch', 'Eastmark', 'Dobson Ranch',
    'Superstition Springs', 'Mesa Grande', 'Hawes Crossing', 'Downtown Mesa',
    'Dreamland Villa', 'Power Ranch Mesa'
  ];

  return (
    <>
      <Helmet>
        <title>Window Tinting Mesa AZ | Residential & Commercial | Arizona House of Film</title>
        <meta name="description" content="Window tinting in Mesa AZ — residential solar film, commercial window film, privacy & decorative film. Licensed ROC #314088. Serving all Mesa neighborhoods. Free quote (480) 788-1591." />
        <meta name="keywords" content="window tinting mesa az, window tinting mesa, mesa window film, residential window tinting mesa az, commercial window tinting mesa, home window tinting mesa arizona" />
        <link rel="canonical" href="https://arizonahouseoffilm.com/window-tinting-mesa" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero */}
      <div className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-semibold">MESA, ARIZONA</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Window Tinting Mesa AZ
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl">
            Residential and commercial window film for Mesa homes and businesses. Solar control, privacy, security, and decorative film — installed by Arizona's licensed professionals.
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
            Mesa is Arizona's third-largest city and one of the most diverse markets for window film — from historic downtown neighborhoods with older single-pane glass to new master-planned communities along the 202 and Ellsworth corridors with modern large-window construction. Arizona House of Film has completed residential and commercial window film projects throughout Mesa since 2017. Mesa's intense summer heat, heavy east-west traffic corridors, and mix of residential ages make solar control film a high-ROI upgrade for homeowners and businesses alike.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Licensed ROC #314088, bonded, and insured. We carry Solyx, LLumar, 3M, and Huper Optik films. Every project is custom-quoted — no flat-rate gimmicks. Call (480) 788-1591 or request a quote online.
          </p>
        </section>

        {/* Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Window Film Services in Mesa AZ</h2>
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
          <h2 className="text-xl font-bold text-white mb-6">Why Mesa Chooses Arizona House of Film</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Mesa Neighborhoods We Serve</h2>
          <p className="text-gray-400 text-sm mb-5">We install window film throughout all of Mesa — no travel surcharge within the Phoenix metro.</p>
          <div className="flex flex-wrap gap-2">
            {NEIGHBORHOODS.map(n => (
              <span key={n} className="bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full">{n}</span>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Window Tinting Mesa AZ — FAQ</h2>
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
            {['Chandler', 'Gilbert', 'Tempe', 'Scottsdale', 'Queen Creek', 'Apache Junction', 'Fountain Hills', 'Peoria', 'Glendale', 'Phoenix'].map(city => (
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
          <h2 className="text-2xl font-bold text-white mb-2">Get Window Tinting in Mesa AZ</h2>
          <p className="text-gray-300 text-sm mb-6">Arizona House of Film — licensed ROC #314088. Mesa's trusted window film installer since 2017.</p>
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
