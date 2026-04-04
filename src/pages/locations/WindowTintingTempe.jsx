import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, MapPin, ArrowRight, Star } from 'lucide-react';

export default function WindowTintingTempe() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does window tinting cost in Tempe AZ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Residential window tinting in Tempe typically runs $8–$18 per square foot installed depending on film type and glass size. A standard Tempe home with 10–15 windows averages $800–$2,500. Commercial projects — office buildings, Mill Avenue retail, multifamily — are quoted by project scope. Call (480) 788-1591 for a free on-site assessment." }
      },
      {
        "@type": "Question",
        "name": "Can apartment and condo windows in Tempe be tinted?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, with landlord or property manager permission. Interior-mount films are fully removable with no damage to the glass or frame — making them popular for Tempe apartments and condos near ASU and Tempe Town Lake. Many Tempe property managers spec window film as a standard amenity upgrade." }
      },
      {
        "@type": "Question",
        "name": "Does window film reduce glare for home offices in Tempe?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Tempe's urban density means significant glass-to-glass glare from neighboring buildings and reflective surfaces. Solar and privacy films reduce screen glare significantly while maintaining natural light — a popular upgrade for Tempe's dense residential and mixed-use buildings." }
      },
      {
        "@type": "Question",
        "name": "Does Arizona House of Film do commercial window film in Tempe?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. We install commercial window film for office buildings throughout Tempe, retail along Mill Avenue, restaurants on Tempe Town Lake, high-rise glass, and multifamily properties. Commercial projects are custom-quoted based on glass area and film type." }
      },
      {
        "@type": "Question",
        "name": "How long does window film last in Tempe?",
        "acceptedAnswer": { "@type": "Answer", "text": "Interior-mounted films typically last 10–15 years with proper care. Tempe's urban heat island effect is somewhat moderated compared to outer suburbs, but UV exposure is identical statewide — 300+ days of direct sun per year. All films we install carry manufacturer warranties." }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Window Tinting Tempe AZ",
    "description": "Professional residential and commercial window tinting in Tempe AZ. Solar, privacy, decorative, and security window film. Licensed ROC #314088.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Arizona House of Film",
      "telephone": "+14807881591",
      "address": { "@type": "PostalAddress", "streetAddress": "7007 W Flower St", "addressLocality": "Phoenix", "addressRegion": "AZ", "postalCode": "85033" }
    },
    "areaServed": { "@type": "City", "name": "Tempe", "containedInPlace": { "@type": "State", "name": "Arizona" } }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://arizonahouseoffilm.com" },
      { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://arizonahouseoffilm.com/service-areas" },
      { "@type": "ListItem", "position": 3, "name": "Window Tinting Tempe AZ", "item": "https://arizonahouseoffilm.com/window-tinting-tempe" }
    ]
  };

  const SERVICES = [
    { title: 'Residential Solar Film', desc: 'Reject 50–80% of solar heat in Tempe homes and condos. High-rise and mid-rise glass especially benefits from spectrally selective film.', link: '/residential-window-tinting' },
    { title: 'Commercial Window Film', desc: "Mill Avenue retail, Town Lake restaurants, ASU-area office buildings, and multifamily properties throughout Tempe's dense urban core.", link: '/commercial-window-tinting' },
    { title: 'Decorative & Privacy Film', desc: 'Frosted and patterned films for Tempe apartments, offices, and retail. Popular in high-density buildings with close neighbor sightlines.', link: '/films' },
    { title: 'Security & Safety Film', desc: 'Shatter-resistant window film for Tempe businesses and residences. Slows forced entry, holds glass on impact.', link: '/safety' },
    { title: 'Energy Saving Film', desc: "Low-e and spectrally selective films that reduce HVAC load in Tempe's urban buildings — measurable savings in glass-heavy commercial properties.", link: '/energy-saving-window-films' },
    { title: 'Anti-Graffiti Film', desc: 'Sacrificial surface protection for Tempe retail glass along Mill Avenue and the Town Lake corridor.', link: '/anti-graffiti' },
  ];

  const NEIGHBORHOODS = [
    'Tempe Town Lake District', 'Mill Avenue Corridor', 'South Tempe', 'Kyrene Area',
    'Warner Ranch', 'The Lakes', 'Papago Park Area', 'Tempe Diablo',
    'ASU Area', 'McClintock Ranch'
  ];

  return (
    <>
      <Helmet>
        <title>Window Tinting Tempe AZ | Residential & Commercial</title>
        <meta name="description" content="Window tinting in Tempe AZ — solar film, commercial office film, university area rentals, privacy film. Licensed ROC #314088. Serving all Tempe neighborhoods. Free quote (480) 788-1591." />
        <meta name="keywords" content="window tinting tempe az, window tinting tempe, tempe window film, residential window tinting tempe, commercial window tinting tempe az, window film tempe arizona" />
        <link rel="canonical" href="https://arizonahouseoffilm.com/window-tinting-tempe" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero */}
      <div className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-semibold">TEMPE, ARIZONA</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Window Tinting Tempe AZ
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl">
            Residential and commercial window film for Tempe homes and businesses. Solar control, privacy, security, and decorative film — installed by Arizona's licensed professionals.
          </p>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="text-gray-300 text-sm">4.6 Google Rating · ROC #314088 · Since 2017</span>
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
            Tempe is one of the densest urban markets in the Phoenix metro — home to ASU's main campus, a dense commercial corridor along Mill Avenue and Tempe Town Lake, and a mix of older residential neighborhoods and new high-rise development. Arizona House of Film serves Tempe with residential solar film, commercial building film, privacy film for apartments and condos, and decorative film for retail and office glass. Tempe's urban density and abundance of glass-heavy commercial and multifamily buildings makes window film a standard spec for property managers and business owners.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Licensed ROC #314088, bonded, and insured. We carry Solyx, LLumar, 3M, and Huper Optik films. Every project is custom-quoted — no flat-rate gimmicks. Call (480) 788-1591 or request a quote online.
          </p>
        </section>

        {/* Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Window Film Services in Tempe AZ</h2>
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
          <h2 className="text-xl font-bold text-white mb-6">Why Tempe Chooses Arizona House of Film</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              '713+ projects completed since 2017',
              'Licensed ROC #314088 — bonded & insured',
              'Films we install: Solyx, LLumar, 3M, Huper Optik, Madico, Solar Gard',
              'Named clients: Coca-Cola, Starbucks, LA Fitness, AutoZone',
              '4.6 Google rating across 21 reviews',
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Tempe Neighborhoods We Serve</h2>
          <p className="text-gray-400 text-sm mb-5">We install window film throughout all of Tempe — no travel surcharge within the Phoenix metro.</p>
          <div className="flex flex-wrap gap-2">
            {NEIGHBORHOODS.map(n => (
              <span key={n} className="bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full">{n}</span>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Window Tinting Tempe AZ — FAQ</h2>
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
            {['Phoenix', 'Mesa', 'Chandler', 'Scottsdale', 'Gilbert', 'Ahwatukee', 'South Mountain', 'Phoenix Sky Harbor Area'].map(city => (
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
          <h2 className="text-2xl font-bold text-white mb-2">Get Window Tinting in Tempe AZ</h2>
          <p className="text-gray-300 text-sm mb-6">Arizona House of Film — licensed ROC #314088. Tempe's trusted window film installer since 2017.</p>
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
