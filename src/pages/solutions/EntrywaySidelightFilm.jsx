import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '../../components/SEO/BreadcrumbSchema';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, MapPin, ArrowRight } from 'lucide-react';
import { solyxProducts } from '@/data/solyxFilms';

function toSlug(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const FROSTED_FILMS = solyxProducts.filter(p => p.category === 'frosted-etched').slice(0, 12);
const STAINED_FILMS = solyxProducts.filter(p => p.category === 'stained-glass').slice(0, 6);

const FAQS = [
  { q: 'What is the best window film for front door sidelights in Phoenix?', a: 'Frosted film is the most popular choice for Phoenix entryway sidelights — it blocks street-view sightlines completely while allowing natural light into the foyer. Decorative etched and stained glass patterns are popular for homes wanting curb appeal in addition to privacy.' },
  { q: 'Can entryway window film be applied to narrow sidelight panels?', a: 'Yes. Sidelight panels are a specialty application — our installers cut film precisely to narrow panel dimensions with no gaps or visible seams.' },
  { q: 'How long does entryway privacy film last on Arizona front doors?', a: 'Interior-mounted films on entryway glass last 10–15 years. Front door sidelights often receive direct afternoon sun — we recommend UV-stabilized Solyx films rated for Arizona\'s high-UV environment.' },
  { q: 'Will entryway film reduce heat coming through the front door glass?', a: 'Standard frosted films reduce heat minimally — they are primarily privacy products. If heat reduction is a priority, we can pair a solar-control interlayer with the decorative top film. Call us to discuss your entryway glass situation.' },
  { q: 'What does entryway window film cost in Phoenix?', a: 'Entryway sidelight and door glass film installation typically runs $200–$600 for a full entryway depending on glass area and film selection. Call (480) 788-1591 for a free quote.' },
];

export default function EntrywaySidelightFilm() {
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
    "name": "Entryway Window Film Installation Phoenix AZ",
    "description": "Entryway and front door privacy window film for Phoenix and Scottsdale homes. Frosted, etched, and stained glass film for sidelights, transom glass, and door panels.",
    "provider": { "@type": "LocalBusiness", "name": "Arizona House of Film", "telephone": "+14807881591", "address": { "@type": "PostalAddress", "streetAddress": "7007 W Flower St", "addressLocality": "Phoenix", "addressRegion": "AZ", "postalCode": "85033" } },
    "areaServed": ["Phoenix", "Scottsdale", "Chandler", "Mesa", "Tempe", "Gilbert", "Glendale", "Peoria"],
    "offers": { "@type": "Offer", "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "USD", "description": "$8–$18 per square foot installed" } }
  };

  return (
    <>
      <Helmet>
        <title>Entryway Window Film Phoenix AZ | Front Door Privacy Film | Arizona House of Film</title>
        <meta name="description" content="Entryway privacy window film for Phoenix & Scottsdale homes. Frosted and decorative film for front door sidelights, transom glass, and door panels. ROC #314088. Free quote." />
        <meta name="keywords" content="entryway window film phoenix, front door privacy film arizona, entry sidelight film scottsdale, door glass privacy film phoenix, front door window frosting arizona" />
        <link rel="canonical" href="https://arizonahouseoffilm.com/entryway-window-film" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://arizonahouseoffilm.com/' },
        { name: 'Solutions', url: 'https://arizonahouseoffilm.com/solutions' },
        { name: 'Entryway & Door Film', url: 'https://arizonahouseoffilm.com/entryway-window-film' }
      ]} />

      {/* Hero */}
      <div className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/30 rounded-full px-4 py-1.5 text-green-400 text-sm font-semibold mb-4">
            LICENSED ROC #314088 · PHOENIX & SCOTTSDALE
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Entryway & Front Door Privacy Film</h1>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl">
            Block street-view sightlines into your Phoenix home's entryway — frosted and decorative film for sidelights, transom glass, and door panels.
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
            Front door sidelights are the most common privacy vulnerability in Phoenix homes — the narrow glass panels flanking your entry door offer a direct sightline into your foyer, living areas, and hallways for anyone approaching the front door or passing on the street.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Arizona House of Film installs frosted, etched, and decorative privacy films on entryway glass — sidelights, transom windows, door glass panels, and foyer windows — that eliminate sightlines while keeping your entryway bright with natural light. No curtains, no blinds, no glass replacement.
          </p>
        </section>

        {/* Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Entryway Glass Applications</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: 'Front Door Sidelights', desc: 'Narrow panels flanking the front door — the most common residential privacy application. Full privacy with natural light.' },
              { title: 'Transom Windows', desc: 'Glass panels above the door — decorative and privacy films for horizontal transom glass.' },
              { title: 'Door Glass Panels', desc: 'Glass insert panels in solid front doors — frosted or etched film for privacy without door replacement.' },
              { title: 'Entry Hall Windows', desc: 'Windows visible from the street in the entry hall — privacy without blocking foyer light.' },
              { title: 'Garage Entry Sidelights', desc: 'Glass sidelights on garage entry doors — prevents visibility into the garage interior.' },
              { title: 'Foyer Glass Walls', desc: 'Larger decorative glass features in open entryways — frosted or stained glass film for visual interest and privacy.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Decorative callout */}
        <section className="mb-12 bg-amber-50 border border-amber-200 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Decorative Options — Curb Appeal + Privacy</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Entryway glass is one of the most visible architectural features of your home. Beyond simple frosted privacy film, Arizona House of Film offers decorative etched patterns, cathedral stained glass designs, bevel simulations, and custom motifs that add significant curb appeal and visual character to your entry.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {['Etched pattern designs — scrollwork, geometric, botanical', 'Stained glass — cathedral, mosaic, jewel effects', 'Custom cut — initials, address numbers, monograms'].map((pt, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{pt}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Film grid - frosted */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Entryway Film Options</h2>
          <p className="text-gray-400 text-sm mb-4">Frosted & etched patterns for privacy — stained glass for decorative character</p>

          <p className="text-gray-700 font-semibold text-sm mb-3">Frosted & Etched — Privacy First</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-6">
            {FROSTED_FILMS.map(p => (
              <Link key={p.sku} to={`/films/frosted-etched-films/${toSlug(p.sku)}`}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all">
                <div className="aspect-square overflow-hidden bg-gray-50">
                  <img src={p.img} alt={`${p.name} entryway privacy film`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="p-2">
                  <p className="text-xs font-semibold text-gray-700 line-clamp-2 leading-snug">{p.name}</p>
                  <p className="text-xs text-gray-400 font-mono">{p.sku}</p>
                </div>
              </Link>
            ))}
          </div>

          {STAINED_FILMS.length > 0 && (
            <>
              <p className="text-gray-700 font-semibold text-sm mb-3">Stained Glass — Decorative & Character</p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {STAINED_FILMS.map(p => (
                  <Link key={p.sku} to={`/films/stained-glass-films/${toSlug(p.sku)}`}
                    className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all">
                    <div className="aspect-square overflow-hidden bg-gray-50">
                      <img src={p.img} alt={`${p.name} entryway stained glass film`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                    </div>
                    <div className="p-2">
                      <p className="text-xs font-semibold text-gray-700 line-clamp-2 leading-snug">{p.name}</p>
                      <p className="text-xs text-gray-400 font-mono">{p.sku}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </section>

        {/* Benefits */}
        <section className="mb-12 bg-slate-900 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">Why Film vs. Replacing Entryway Glass</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Full privacy — eliminates sightlines from street and walkway',
              'Maintains natural light into the foyer',
              'No glass replacement — fraction of the cost',
              'Installs in 1–2 hours — same-day results',
              'Decorative options add curb appeal',
              '99% UV protection — blocks sun damage in foyer',
              'Fully removable — no permanent glass modification',
              '10–15 year lifespan on quality Solyx films',
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">Entryway Film Cost — Phoenix & Scottsdale</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            {[
              { label: 'Sidelight pair (standard)', range: '$150–$350', note: 'Two narrow panels, frosted' },
              { label: 'Door + sidelights', range: '$300–$600', note: 'Full entryway package' },
              { label: 'Decorative stained glass', range: '$400–$900', note: 'Foyer + sidelights, patterned film' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-blue-100">
                <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                <p className="text-xl font-black text-gray-900">{item.range}</p>
                <p className="text-xs text-gray-400">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400">Film rate: $8–$18/sqft installed. Decorative and stained glass films are priced at a premium. All projects are custom-quoted — call (480) 788-1591.</p>
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
            <h2 className="font-bold text-gray-800">Service Area — Entryway Film Installation</h2>
          </div>
          <p className="text-gray-500 text-sm mb-4">Arizona House of Film installs entryway and front door privacy window film for residential properties throughout the Phoenix metro and all of Arizona. Licensed ROC #314088. Bonded and insured.</p>
          <div className="flex flex-wrap gap-2">
            {['Phoenix', 'Scottsdale', 'Chandler', 'Mesa', 'Tempe', 'Gilbert', 'Glendale', 'Peoria', 'Surprise', 'Goodyear', 'Paradise Valley', 'Cave Creek', 'Fountain Hills', 'Ahwatukee'].map(city => (
              <span key={city} className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">{city}</span>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Related Privacy Film Solutions</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { title: 'Sidelight Window Film', href: '/sidelight-window-film', desc: 'Dedicated page for door sidelight panels.' },
              { title: 'Bathroom Privacy Film', href: '/bathroom-privacy-window-film', desc: 'Shower glass and bathroom window privacy.' },
              { title: 'One-Way Mirror Film', href: '/one-way-mirror-window-film', desc: 'Daytime privacy — see out, they can\'t see in.' },
              { title: 'Frosted Film Catalog', href: '/films/frosted-etched-films', desc: '144+ frosted and etched patterns.' },
              { title: 'Stained Glass Films', href: '/films/stained-glass-films', desc: 'Decorative stained glass film options.' },
              { title: 'Residential Window Tinting', href: '/residential-window-tinting', desc: 'Full residential tinting service overview.' },
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

        {/* CTA */}
        <section className="bg-slate-900 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Get Entryway Privacy Film Installed</h2>
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
