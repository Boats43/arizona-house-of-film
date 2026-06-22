import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '../../components/SEO/BreadcrumbSchema';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, MapPin, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { solyxProducts } from '@/data/solyxFilms';
import EstimatorCTA from '../../components/EstimatorCTA';

function toSlug(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const REFLECTIVE_FILMS = solyxProducts.filter(p => p.category === 'reflective-mirror').slice(0, 12);

const FAQS = [
  { q: 'Does one-way mirror window film work at night?', a: 'No. One-way mirror film relies on a light differential — it must be brighter outside than inside. During the day, strong exterior sunlight creates this differential naturally. At night, when interior lights are on, the effect reverses — people can see in. For 24-hour privacy, combine reflective film with interior shades or choose frosted film instead.' },
  { q: 'What about sliding glass doors?', a: 'For sliding glass doors specifically, frosted film provides 24/7 privacy without the nighttime reversal. One-way mirror film works during the day but reverses at night when patio lights are on. See our <a href="/privacy-film-sliding-glass-door" class="text-blue-600 hover:underline">sliding glass door privacy film guide</a> for a full comparison of frosted, one-way, and security film options for patio doors.' },
  { q: 'How much heat does one-way mirror film reject in Arizona?', a: 'Quality reflective films reject 50–80% of solar heat gain. In Phoenix, this is measurable — west and south-facing windows with reflective film can reduce cooling costs by 20–30% on heavily glazed elevations. We can provide heat rejection data for specific film specs.' },
  { q: 'What\'s the difference between reflective film and frosted film?', a: 'Reflective (one-way mirror) film maintains a clear view from inside while appearing mirrored from outside in daylight. It does not block views at night when interior lights are on. Frosted film permanently blocks sightlines in both directions at all times but does not allow a clear view from inside.' },
  { q: 'Will one-way mirror film make my home look commercial?', a: 'Residential-grade reflective films (bronze, pewter, light silver) have a subtle tinted appearance rather than a hard commercial mirror look. We help you select the right film tone for your home\'s aesthetic. Darker silver films are more reflective and have a more commercial appearance.' },
  { q: 'What does one-way mirror window film cost in Phoenix?', a: 'Reflective film installation runs $8–$15 per square foot. A typical single-family home with 4–6 treated windows costs $400–$1,200 installed. Call (480) 788-1591 for a free quote and site assessment.' },
];

export default function OneWayMirrorFilm() {
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
    "name": "One-Way Mirror Window Film Installation Phoenix AZ",
    "description": "One-way mirror and reflective window film for daytime privacy and solar heat rejection in Phoenix and Scottsdale homes and businesses.",
    "provider": { "@type": "LocalBusiness", "name": "Arizona House of Film", "telephone": "+14807881591", "address": { "@type": "PostalAddress", "streetAddress": "7007 W Flower St", "addressLocality": "Phoenix", "addressRegion": "AZ", "postalCode": "85033" } },
    "areaServed": ["Phoenix", "Scottsdale", "Chandler", "Mesa", "Tempe", "Gilbert", "Glendale", "Peoria"],
    "offers": { "@type": "Offer", "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "USD", "description": "$8–$15 per square foot installed" } }
  };

  return (
    <>
      <Helmet>
        <title>One-Way Mirror Window Film Phoenix AZ | Daytime Privacy Film | Arizona House of Film</title>
        <meta name="description" content="One-way mirror window film for Phoenix & Scottsdale homes and businesses. Daytime privacy — see out, they can't see in. Solar heat rejection included. ROC #314088. Free quote." />
        <meta name="keywords" content="one way mirror window film phoenix, one way mirror film arizona, window privacy film see out not in scottsdale, reflective window film phoenix, daytime privacy window film arizona" />
        <link rel="canonical" href="https://arizonahouseoffilm.com/one-way-mirror-window-film" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://arizonahouseoffilm.com/' },
        { name: 'Solutions', url: 'https://arizonahouseoffilm.com/solutions' },
        { name: 'One-Way Mirror Film', url: 'https://arizonahouseoffilm.com/one-way-mirror-window-film' }
      ]} />

      {/* Hero */}
      <div className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/30 rounded-full px-4 py-1.5 text-green-400 text-sm font-semibold mb-4">
            LICENSED ROC #314088 · PHOENIX & SCOTTSDALE
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">One-Way Mirror Window Film</h1>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl">
            See out, they can't see in — daytime privacy film for Phoenix homes and businesses. Solar heat rejection included.
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
            One-way mirror window film gives you the best of both worlds — an unobstructed view from inside during the day while presenting a reflective mirror surface to anyone looking in from outside. Combined with Arizona's intense sunlight, reflective film also provides significant solar heat rejection — reducing cooling costs while delivering privacy.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Arizona House of Film installs residential and commercial reflective films across Phoenix, Scottsdale, Chandler, and Mesa. Available in silver, bronze, gold, pewter, and chrome finishes — from subtle tints to full mirror-grade reflectivity.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Before choosing one-way film, understand the night limitation — read our complete guide: <Link to="/blog/one-way-window-film-day-and-night-guide" className="text-blue-600 hover:underline font-semibold">Does one-way window film work at night?</Link>
          </p>
        </section>

        {/* How it works */}
        <section className="mb-12 bg-slate-900 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">How One-Way Mirror Film Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center">
                  <Eye className="w-4 h-4 text-yellow-400" />
                </div>
                <h3 className="font-bold text-white">During the Day</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Strong exterior sunlight is more intense than interior lighting. The reflective layer reflects most of the exterior light — creating a mirror effect on the outside. From inside, you see through normally because light still passes inward. Result: clear view out, mirror surface visible from outside.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gray-400/20 rounded-full flex items-center justify-center">
                  <EyeOff className="w-4 h-4 text-gray-400" />
                </div>
                <h3 className="font-bold text-white">At Night</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                When interior lights are on at night, the light differential reverses — interior is now brighter than the dark exterior. The reflective layer now reflects interior light outward, making the interior visible from outside. For night privacy, use interior window coverings or choose frosted film instead. Read our complete <Link to="/blog/one-way-window-film-day-and-night-guide" className="text-green-400 hover:text-green-300 underline">one-way window film guide</Link> for technical details.
              </p>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Where Arizona Clients Use One-Way Mirror Film</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: 'Street-Facing Residential Windows', desc: 'Living room, dining room, and bedroom windows facing the street — daytime privacy without blinds.' },
              { title: 'Ground-Floor Office Glass', desc: 'Commercial lobbies and ground-floor glass — professional mirror exterior with visibility from inside.' },
              { title: 'Apartment Living Rooms', desc: 'Privacy for ground-floor and low-level apartment units in dense Phoenix neighborhoods.' },
              { title: 'Retail Storefronts', desc: 'Reflective storefront glass — solar control, professional appearance, and daytime privacy.' },
              { title: 'Restaurant Dining Areas', desc: 'Street-facing restaurant glass — diners maintain privacy while street view remains open.' },
              { title: 'West & South-Facing Glass', desc: 'Maximum heat rejection on the most solar-exposed elevations in Phoenix and Scottsdale.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Film grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Reflective Film Options</h2>
          <p className="text-gray-400 text-sm mb-6">Silver, bronze, gold, pewter, and chrome — we install all Solyx reflective films</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {REFLECTIVE_FILMS.map(p => (
              <Link key={p.sku} to={`/films/reflective-films/${toSlug(p.sku)}`}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all">
                <div className="aspect-square overflow-hidden bg-gray-50">
                  <img src={p.img} alt={`${p.name} one-way mirror window film`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="p-2">
                  <p className="text-xs font-semibold text-gray-700 line-clamp-2 leading-snug">{p.name}</p>
                  <p className="text-xs text-gray-400 font-mono">{p.sku}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/films/reflective-films" className="text-sm text-blue-600 hover:underline">View all reflective & mirror films →</Link>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12 bg-slate-900 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">One-Way Mirror Film Benefits for Arizona Properties</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Daytime privacy — see out, no one sees in',
              'Rejects up to 80% of solar heat gain',
              'Reduces glare on screens and work surfaces',
              '99% UV blocking — protects interiors from fading',
              'No loss of view from inside during daylight hours',
              'Available in subtle to full-mirror finishes',
              'Reduces cooling costs — measurable energy savings',
              'Works on single-pane and double-pane glass',
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">One-Way Mirror Film Cost — Phoenix & Scottsdale</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            {[
              { label: 'Single window', range: '$80–$250', note: 'Standard residential window' },
              { label: 'Home (4–6 windows)', range: '$400–$1,200', note: 'Street-facing windows treated' },
              { label: 'Commercial storefront', range: '$1,200–$5,000+', note: 'Retail or office glass facade' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-blue-100">
                <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                <p className="text-xl font-black text-gray-900">{item.range}</p>
                <p className="text-xs text-gray-400">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400">Film rate: $8–$15/sqft installed. All projects are custom-quoted — call (480) 788-1591 for a free site assessment.</p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
              </div>
            ))}
          </div>
        </section>

        {/* Service area */}
        <section className="mb-12 border border-gray-100 rounded-2xl p-8">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-blue-600" />
            <h2 className="font-bold text-gray-800">Service Area — One-Way Mirror Film Installation</h2>
          </div>
          <p className="text-gray-500 text-sm mb-4">Arizona House of Film installs one-way mirror and reflective window film for residential and commercial properties throughout Phoenix, Scottsdale, and all of Arizona. Licensed ROC #314088. Bonded and insured.</p>
          <div className="flex flex-wrap gap-2">
            {['Phoenix', 'Scottsdale', 'Chandler', 'Mesa', 'Tempe', 'Gilbert', 'Glendale', 'Peoria', 'Surprise', 'Goodyear', 'Avondale', 'Fountain Hills', 'Paradise Valley', 'Cave Creek'].map(city => (
              <span key={city} className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">{city}</span>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Related Privacy Film Solutions</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { title: 'Bathroom Privacy Film', href: '/bathroom-privacy-window-film', desc: 'All-day privacy — frosted blocks views at night too.' },
              { title: 'Office Privacy Film', href: '/office-privacy-window-film', desc: 'Conference rooms and glass office partitions.' },
              { title: 'Storefront Window Film', href: '/storefront-window-film', desc: 'Commercial solar control and branding.' },
              { title: 'Reflective Film Catalog', href: '/films/reflective-films', desc: 'All reflective and mirror film options.' },
              { title: 'Residential Tinting Phoenix', href: '/residential-window-tinting-phoenix', desc: 'Phoenix residential window tinting overview.' },
              { title: 'All Films', href: '/films', desc: '618 Solyx films — browse the full catalog.' },
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
          <h2 className="text-2xl font-bold text-white mb-2">Get One-Way Mirror Film Installed</h2>
          <p className="text-gray-300 text-sm mb-6">Arizona House of Film — licensed, bonded, ROC #314088. Serving Phoenix, Scottsdale, and all Arizona since 2017.</p>
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
