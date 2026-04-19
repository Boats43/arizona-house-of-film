import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '../../components/SEO/BreadcrumbSchema';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, MapPin, ArrowRight } from 'lucide-react';
import { solyxProducts } from '@/data/solyxFilms';
import EstimatorCTA from '../../components/EstimatorCTA';

function toSlug(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const FROSTED_FILMS = solyxProducts.filter(p => p.category === 'frosted-etched').slice(0, 12);

const FAQS = [
  { q: 'What is a sidelight window?', a: 'A sidelight is a narrow vertical glass panel flanking a front door or interior door. Sidelights are common in Phoenix homes and are the most-requested location for privacy window film — they create a direct sightline from the street or walkway into the entryway.' },
  { q: 'Does frosted sidelight film block the view completely?', a: 'Yes. Quality frosted films block direct sightlines completely in both directions. You cannot see a clear image through frosted film — it diffuses light without allowing a viewable silhouette or image at normal distances.' },
  { q: 'Can film be applied to narrow sidelight panels?', a: 'Yes — sidelights are a specialty application for Arizona House of Film. We cut film precisely to narrow panel dimensions and install around frames and hardware with no visible gaps or seams.' },
  { q: 'How long does sidelight window film last in Arizona?', a: 'Interior-mounted frosted sidelight films last 10–15 years in Arizona conditions. We use Solyx films with UV-stable coatings rated for Arizona\'s high-UV environment.' },
  { q: 'What does sidelight window film cost in Phoenix?', a: 'Sidelight film installation runs $8–$15 per square foot. A standard sidelight pair typically costs $150–$400 installed. Call (480) 788-1591 for a free quote.' },
];

export default function SidelightWindowFilm() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Sidelight Window Film Installation Phoenix AZ",
    "description": "Privacy window film for door sidelights in Phoenix and Scottsdale homes. Frosted and etched film for narrow glass panels flanking front and back doors.",
    "provider": { "@type": "LocalBusiness", "name": "Arizona House of Film", "telephone": "+14807881591", "address": { "@type": "PostalAddress", "streetAddress": "7007 W Flower St", "addressLocality": "Phoenix", "addressRegion": "AZ", "postalCode": "85033" } },
    "areaServed": ["Phoenix", "Scottsdale", "Chandler", "Mesa", "Tempe", "Gilbert", "Glendale", "Peoria"],
    "offers": { "@type": "Offer", "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "USD", "description": "$8–$15 per square foot installed" } }
  };

  return (
    <>
      <Helmet>
        <title>Sidelight Window Film | Privacy Film for Door Sidelights | ROC #314088</title>
        <meta name="description" content="Privacy film for door sidelights — frosted, decorative, one-way, and stained-glass styles. Narrow panels flanking your front door, cut precisely and installed Arizona-wide. ROC #314088. Free quote." />
        <meta name="keywords" content="sidelight window film phoenix, door sidelight privacy film arizona, narrow window privacy film scottsdale, front door sidelight film phoenix, sidelight glass frosting arizona" />
        <link rel="canonical" href="https://arizonahouseoffilm.com/sidelight-window-film" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://arizonahouseoffilm.com/' },
        { name: 'Solutions', url: 'https://arizonahouseoffilm.com/solutions' },
        { name: 'Sidelight Window Film', url: 'https://arizonahouseoffilm.com/sidelight-window-film' }
      ]} />

      {/* Hero */}
      <div className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/30 rounded-full px-4 py-1.5 text-green-400 text-sm font-semibold mb-4">
            LICENSED ROC #314088 · PHOENIX & SCOTTSDALE
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Privacy Film for Door Sidelights — Frosted, Decorative &amp; One-Way</h1>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl">
            Privacy film for the narrow glass panels flanking your front door. Frosted for day-and-night coverage, decorative patterns, one-way mirror, and stained-glass styles — cut precisely to your sidelight dimensions.
          </p>
          <p className="text-gray-400 mb-8">Phoenix · Scottsdale · Chandler · Mesa · All Arizona</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="bg-green-600 hover:bg-green-500 text-white font-bold px-7 py-3 rounded-lg transition-colors">Get Free Quote</Link>
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
            Sidelight panels are the most common entry-privacy request we receive from Phoenix and Scottsdale homeowners. These narrow glass strips next to your front door create a clear line of sight from the street directly into your entryway — visible to anyone walking past, approaching your door, or looking in from the driveway.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Arizona House of Film installs frosted and decorative privacy film on sidelight panels throughout the Phoenix metro. Installation takes less than an hour per panel — and the result is complete privacy with natural light maintained into the foyer.
          </p>
        </section>

        {/* Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sidelight Applications We Install</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: 'Front Door Sidelights', desc: 'The most common application — narrow panels on either side of the front door facing the street or walkway.' },
              { title: 'Back Door Sidelights', desc: 'Rear entry privacy — especially important for homes with neighbor-facing back doors or alley-adjacent entries.' },
              { title: 'Garage Entry Sidelights', desc: 'Glass panels next to garage-to-house entry doors — block sightlines into the garage interior.' },
              { title: 'Interior French Door Panels', desc: 'Privacy film on glass panels in interior French doors — bedroom, office, and dining room doors.' },
              { title: 'Storm Door Glass', desc: 'Full-lite storm doors with privacy film — maintain light while blocking visibility.' },
              { title: 'Sidelight Pairs with Transom', desc: 'Coordinated film for sidelights plus the horizontal transom panel above the door — complete entryway privacy.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Film Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Four Film Styles for Sidelights</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Frosted — Day & Night Privacy', desc: 'Most popular sidelight choice. Diffuses light and obscures views in both directions at all hours — does not reverse at night like reflective films. Looks like etched or sandblasted glass.', link: '/films/frosted-etched-films', linkText: 'Browse frosted catalog →' },
              { title: 'Decorative / Etched Patterns', desc: 'Geometric, botanical, rice paper, linen, and custom patterns from the 618-SKU Solyx catalog. Privacy through visual complexity plus a designer look that complements the entryway.', link: '/films/patterned-privacy-films', linkText: 'Browse patterned catalog →' },
              { title: 'One-Way Mirror Film', desc: 'Daytime-only privacy with clear outward views. Creates a mirror on the exterior when sunlight is brighter outside. Reverses after dark — pair with interior treatments for nighttime use.', link: '/one-way-mirror-window-film', linkText: 'One-way film details →' },
              { title: 'Stained-Glass Style', desc: 'Colored and leaded-glass-look films for traditional or craftsman entryways. Adds character without the cost of replacing the sidelight with custom glass.', link: '/films/stained-glass-films', linkText: 'Stained-glass films →' },
            ].map((f, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-6 bg-white">
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed">{f.desc}</p>
                <Link to={f.link} className="text-blue-600 hover:underline text-sm font-semibold">{f.linkText}</Link>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4 text-sm text-gray-700">
            <strong>Typical sidelight size:</strong> 6–10 sqft each. Our $500 minimum job covers a sidelight pair plus transom — use the whole minimum on one entryway rather than paying for a single 6 sqft panel. <Link to="/ai-window-film-estimator" className="text-blue-700 underline hover:text-blue-900 font-semibold">Try the AI estimator →</Link>
          </div>
        </section>

        {/* Film grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Sidelight Film Options</h2>
          <p className="text-gray-400 text-sm mb-6">144+ frosted and etched patterns — all cut to exact sidelight dimensions</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {FROSTED_FILMS.map(p => (
              <Link key={p.sku} to={`/films/frosted-etched-films/${toSlug(p.sku)}`}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all">
                <div className="aspect-square overflow-hidden bg-gray-50">
                  <img src={p.img} alt={`${p.name} sidelight window film`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="p-2">
                  <p className="text-xs font-semibold text-gray-700 line-clamp-2 leading-snug">{p.name}</p>
                  <p className="text-xs text-gray-400 font-mono">{p.sku}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/films/frosted-etched-films" className="text-sm text-blue-600 hover:underline">View all frosted & etched films →</Link>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12 bg-slate-900 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">Why Film vs. Replacing Sidelight Glass</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Full privacy — blocks all street-view sightlines',
              'Natural light maintained into the foyer',
              'Cut precisely to narrow sidelight dimensions',
              'Installs in under 1 hour per panel',
              'Fraction of the cost of glass replacement',
              '99% UV protection',
              'Removable without glass damage',
              '10–15 year lifespan — rated for Arizona UV',
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200 text-sm">{b}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-12 bg-blue-50 border border-blue-100 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sidelight Film Cost — Phoenix & Scottsdale</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            {[
              { label: 'Single sidelight panel', range: '$80–$200', note: 'One narrow panel, frosted' },
              { label: 'Sidelight pair (standard)', range: '$150–$400', note: 'Two panels, matching film' },
              { label: 'Sidelights + transom', range: '$250–$600', note: 'Full entryway treatment' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-blue-100">
                <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                <p className="text-xl font-black text-gray-900">{item.range}</p>
                <p className="text-xs text-gray-400">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400">Film rate: $8–$15/sqft installed. All projects are custom-quoted. Call (480) 788-1591 for a free quote.</p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service area */}
        <section className="mb-12 border border-gray-100 rounded-2xl p-8">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-blue-600" />
            <h2 className="font-bold text-gray-800">Service Area — Sidelight Window Film Installation</h2>
          </div>
          <p className="text-gray-500 text-sm mb-4">Arizona House of Film installs sidelight window film for residential properties throughout the Phoenix metro and all of Arizona. Licensed ROC #314088. Bonded and insured.</p>
          <div className="flex flex-wrap gap-2">
            {['Phoenix', 'Scottsdale', 'Chandler', 'Mesa', 'Tempe', 'Gilbert', 'Glendale', 'Peoria', 'Surprise', 'Goodyear', 'Avondale', 'Paradise Valley', 'Cave Creek', 'Ahwatukee'].map(city => (
              <span key={city} className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">{city}</span>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Related Privacy Film Solutions</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { title: 'Entryway & Door Film', href: '/entryway-window-film', desc: 'Full entryway treatment — sidelights, transom, door panels.' },
              { title: 'Bathroom Privacy Film', href: '/bathroom-privacy-window-film', desc: 'Shower glass and bathroom window privacy.' },
              { title: 'One-Way Mirror Film', href: '/one-way-mirror-window-film', desc: 'Daytime privacy with solar control.' },
              { title: 'Frosted Film Catalog', href: '/films/frosted-etched-films', desc: '144+ frosted and etched patterns.' },
              { title: 'Residential Tinting', href: '/residential-window-tinting', desc: 'Full residential service overview.' },
              { title: 'All Films', href: '/films', desc: '618 Solyx films — browse the catalog.' },
            ].map((item, i) => (
              <Link key={i} to={item.href} className="flex items-start gap-3 p-4 border border-gray-100 rounded-xl hover:border-blue-200 hover:bg-blue-50 transition-all group">
                <ArrowRight className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <EstimatorCTA />

        {/* CTA */}
        <section className="bg-slate-900 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Get Sidelight Privacy Film Installed</h2>
          <p className="text-gray-300 text-sm mb-6">Arizona House of Film — licensed, bonded, ROC #314088. Phoenix & Scottsdale. Same-week installs available.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-lg transition-colors">Request Free Quote</Link>
            <a href="tel:4807881591" className="flex items-center gap-2 border border-white/20 text-white font-semibold px-6 py-4 rounded-lg hover:border-white/40 transition-colors">
              <Phone className="w-4 h-4" /> (480) 788-1591
            </a>
          </div>
        </section>

      </div>
    </>
  );
}
