import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, MapPin, ArrowRight, Star } from 'lucide-react';

export default function WindowTintingGlendale() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does window tinting cost in Glendale AZ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Residential window tinting in Glendale typically runs $8–$18 per square foot installed depending on film type and glass size. A standard Glendale home with 10–15 windows averages $800–$2,500. West-facing glass is the highest-impact elevation and is included in every custom quote. Call (480) 788-1591 for a free on-site assessment." }
      },
      {
        "@type": "Question",
        "name": "Does window film help with heat in west-facing Glendale homes?",
        "acceptedAnswer": { "@type": "Answer", "text": "Glendale's west-facing elevations receive some of the most intense afternoon sun in the Phoenix metro. Solar control and reflective films reject 50–80% of heat gain on those exposures — the biggest single-install impact available to Glendale homeowners without replacing glass. Arrowhead Ranch and Westgate-area homes with open western exposures see the most dramatic comfort improvement." }
      },
      {
        "@type": "Question",
        "name": "Does Arizona House of Film do commercial window film near Westgate?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. We install commercial window film for retail, restaurant, and entertainment venue glass throughout the Westgate Entertainment District and State Farm Stadium corridor. Commercial projects are custom-quoted based on glass area and film selection." }
      },
      {
        "@type": "Question",
        "name": "Is window film HOA-approved in Arrowhead Ranch?",
        "acceptedAnswer": { "@type": "Answer", "text": "Arrowhead Ranch HOA permits neutral solar films that don't alter the exterior appearance of the home. Reflective or mirrored films may require HOA board approval. We advise clients on compliant film options before installation and can provide spec sheets for HOA submission if needed." }
      },
      {
        "@type": "Question",
        "name": "Does Arizona House of Film serve all of Glendale?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. We serve all Glendale zip codes including 85301–85310, covering neighborhoods from Historic Downtown Glendale to Arrowhead Ranch, Westgate, Thunderbird Ranch, and the Arrowhead Lakes area. We also serve Peoria, Surprise, Goodyear, and the full Northwest Valley." }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Window Tinting Glendale AZ",
    "description": "Professional residential and commercial window tinting in Glendale AZ. Solar, decorative, security, and privacy window film. Licensed ROC #314088.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Arizona House of Film",
      "telephone": "+14807881591",
      "address": { "@type": "PostalAddress", "streetAddress": "7007 W Flower St", "addressLocality": "Phoenix", "addressRegion": "AZ", "postalCode": "85033" }
    },
    "areaServed": { "@type": "City", "name": "Glendale", "containedInPlace": { "@type": "State", "name": "Arizona" } }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://arizonahouseoffilm.com" },
      { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://arizonahouseoffilm.com/service-areas" },
      { "@type": "ListItem", "position": 3, "name": "Window Tinting Glendale AZ", "item": "https://arizonahouseoffilm.com/window-tinting-glendale" }
    ]
  };

  const SERVICES = [
    { title: 'Residential Solar Film', desc: "Reject 50–80% of solar heat. Highest impact on Glendale's west-facing homes — Arrowhead Ranch, Westgate area, and Thunderbird Ranch see intense afternoon exposure.", link: '/residential-window-tinting' },
    { title: 'Commercial Window Film', desc: 'Westgate Entertainment District, State Farm Stadium corridor retail, office buildings, and industrial facilities throughout Glendale.', link: '/commercial-window-tinting' },
    { title: 'Decorative & Privacy Film', desc: 'Frosted, etched, and patterned films for Glendale homes and businesses. 600+ Solyx patterns available.', link: '/films' },
    { title: 'Security & Safety Film', desc: 'Shatter-resistant window film for Glendale businesses and homes. Slows forced entry, holds glass on impact.', link: '/safety' },
    { title: 'Energy Saving Film', desc: "Low-e and spectrally selective films that significantly reduce HVAC load on Glendale's west-facing residential and commercial glass.", link: '/energy-saving-window-films' },
    { title: 'Anti-Graffiti Film', desc: 'Sacrificial surface protection for Glendale retail glass and Westgate District commercial storefronts.', link: '/anti-graffiti' },
  ];

  const NEIGHBORHOODS = [
    'Arrowhead Ranch', 'Westgate District', 'Thunderbird Ranch', 'Arrowhead Lakes',
    'Vintage Hills', 'Sahuaro Ranch', 'Historic Downtown Glendale', 'Sunridge',
    'Paseo Ranch', 'Park West Area'
  ];

  return (
    <>
      <Helmet>
        <title>Window Tinting Glendale AZ | Residential & Commercial</title>
        <meta name="description" content="Window tinting Glendale AZ — solar, privacy, and commercial film. ROC #314088. Arrowhead, Westgate, Thunderbird Ranch. Free quote (480) 788-1591." />
        <meta name="keywords" content="window tinting glendale az, window tinting glendale, glendale window film, residential window tinting glendale az, commercial window tinting glendale, home window tinting glendale arizona" />
        <link rel="canonical" href="https://arizonahouseoffilm.com/window-tinting-glendale" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero */}
      <div className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-semibold">GLENDALE, ARIZONA</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Window Tinting Glendale AZ
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl">
            Residential and commercial window film for Glendale homes and businesses. Solar control, privacy, security, and decorative film — installed by Arizona's licensed professionals.
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
            Glendale is the anchor of the Northwest Valley — home to State Farm Stadium, Desert Diamond Arena, the Westgate Entertainment District, and a large residential market spanning established neighborhoods near downtown Glendale and master-planned communities around the Arrowhead area. Arizona House of Film installs window film for Glendale homes, commercial properties, retail storefronts, and entertainment venues. Glendale's west-facing residential corridors are among the most solar-exposed in the metro — solar control film is one of the highest-ROI upgrades available to Glendale homeowners.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Licensed ROC #314088, bonded, and insured. We carry Solyx, LLumar, 3M, and Huper Optik films. Every project is custom-quoted — no flat-rate gimmicks. Call (480) 788-1591 or request a quote online.
          </p>
        </section>

        {/* Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Window Film Services in Glendale AZ</h2>
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
          <h2 className="text-xl font-bold text-white mb-6">Why Glendale Chooses Arizona House of Film</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              '713+ projects completed since 2017',
              'Licensed ROC #314088 — bonded & insured',
              'Films we install: Solyx, LLumar, 3M, Huper Optik, Madico, Solar Gard',
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
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Glendale Neighborhoods We Serve</h2>
          <p className="text-gray-400 text-sm mb-5">We install window film throughout all of Glendale — no travel surcharge within the Phoenix metro.</p>
          <div className="flex flex-wrap gap-2">
            {NEIGHBORHOODS.map(n => (
              <span key={n} className="bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full">{n}</span>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Window Tinting Glendale AZ — FAQ</h2>
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
            <h2 className="font-bold text-gray-800">Also Serving the Northwest Valley & Beyond</h2>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {['Phoenix', 'Peoria', 'Surprise', 'Scottsdale', 'Avondale', 'Goodyear', 'El Mirage', 'Tolleson'].map(city => (
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
          <h2 className="text-2xl font-bold text-white mb-2">Get Window Tinting in Glendale AZ</h2>
          <p className="text-gray-300 text-sm mb-6">Arizona House of Film — licensed ROC #314088. Glendale's trusted window film installer since 2017.</p>
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
