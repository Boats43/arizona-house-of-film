import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, MapPin, ArrowRight } from 'lucide-react';
import { solyxProducts } from '@/data/solyxFilms';

function toSlug(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const FROSTED_FILMS = solyxProducts.filter(p => p.category === 'frosted-etched').slice(0, 12);

const FAQS = [
  { q: 'Does bathroom window privacy film work on shower glass?', a: 'Yes. Frosted and privacy films adhere to smooth shower glass, tempered glass, and standard bathroom windows. They provide full privacy while allowing diffused natural light — no shower curtain needed.' },
  { q: 'Can privacy film be applied to textured bathroom glass?', a: 'Privacy film requires a smooth glass surface for proper adhesion. Heavily textured glass (like obscure or rain glass) is not suitable. Most standard bathroom windows and shower enclosures are smooth and compatible.' },
  { q: 'How long does bathroom window film last in Arizona?', a: 'Interior-mounted bathroom privacy films last 10–15 years in Arizona conditions. Bathroom humidity does not affect film longevity when properly installed by a licensed installer.' },
  { q: 'What is the cost of bathroom privacy window film in Phoenix?', a: 'Bathroom privacy film installation in Phoenix typically runs $8–$16 per square foot depending on film type and glass size. Most bathroom windows cost $150–$400 total installed. Call (480) 788-1591 for a free quote.' },
  { q: 'Can I see through bathroom privacy film from outside?', a: 'Quality frosted privacy films block direct sightlines completely from both directions. You cannot see through them — they diffuse light without transmitting a viewable image.' },
];

export default function BathroomPrivacyFilm() {
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
    "name": "Bathroom Privacy Window Film Installation Phoenix AZ",
    "description": "Professional bathroom privacy window film installation for Phoenix, Scottsdale, and all Arizona. Frosted, etched, and decorative films for shower glass and bathroom windows.",
    "provider": { "@type": "LocalBusiness", "name": "Arizona House of Film", "telephone": "+14807881591", "address": { "@type": "PostalAddress", "streetAddress": "7007 W Flower St", "addressLocality": "Phoenix", "addressRegion": "AZ", "postalCode": "85033" } },
    "areaServed": ["Phoenix", "Scottsdale", "Chandler", "Mesa", "Tempe", "Gilbert", "Glendale", "Peoria"],
    "offers": { "@type": "Offer", "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "USD", "description": "$8–$16 per square foot installed" } }
  };

  return (
    <>
      <Helmet>
        <title>Bathroom Privacy Window Film Phoenix AZ | Arizona House of Film | ROC #314088</title>
        <meta name="description" content="Bathroom privacy window film installation in Phoenix & Scottsdale AZ. Frosted film for shower glass, bathroom windows & sidelights. No blinds needed. Licensed ROC #314088. Free quote." />
        <meta name="keywords" content="bathroom privacy window film phoenix, frosted bathroom window film arizona, shower glass privacy film scottsdale, window frosting phoenix az, bathroom window film installation" />
        <link rel="canonical" href="https://arizonahouseoffilm.com/bathroom-privacy-window-film" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* Hero */}
      <div className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/30 rounded-full px-4 py-1.5 text-green-400 text-sm font-semibold mb-4">
            LICENSED ROC #314088 · PHOENIX & SCOTTSDALE
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Bathroom Privacy Window Film</h1>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl">
            Full bathroom privacy without blinds or curtains. Frosted and etched films for shower glass, bathroom windows, and sidelights — installed in hours.
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
            Bathroom privacy window film is the most cost-effective way to add privacy to shower enclosures, bathroom windows, and sidelights without replacing glass or installing blinds. Arizona House of Film installs premium Solyx frosted and etched films that block sightlines completely while allowing natural light to pass through — keeping your bathroom bright without sacrificing privacy.
          </p>
          <p className="text-gray-600 leading-relaxed">
            In Phoenix and Scottsdale, bathroom privacy film is especially popular for homes with street-facing bathrooms, ground-floor windows, and open shower enclosures. We carry 144+ frosted and etched film patterns ranging from simple matte white to decorative etched designs.
          </p>
        </section>

        {/* Comparison table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Film vs. Other Options</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left p-4 rounded-tl-xl">Option</th>
                  <th className="text-center p-4">Privacy</th>
                  <th className="text-center p-4">Natural Light</th>
                  <th className="text-center p-4">Cost</th>
                  <th className="text-center p-4 rounded-tr-xl">Removable</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { option: '🏆 Privacy Window Film', privacy: '✅ Full', light: '✅ Yes', cost: '$8–$16/sqft', removable: '✅ Yes' },
                  { option: 'Glass replacement', privacy: '✅ Full', light: '✅ Yes', cost: '$150–$600+/pane', removable: '❌ No' },
                  { option: 'Blinds / shades', privacy: '✅ When closed', light: '❌ Blocked', cost: '$50–$300', removable: '✅ Yes' },
                  { option: 'Curtains', privacy: '✅ When closed', light: '❌ Blocked', cost: '$30–$200', removable: '✅ Yes' },
                  { option: 'Spray frosting', privacy: '✅ Full', light: '✅ Yes', cost: '$10–$30 DIY', removable: '❌ Difficult' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-semibold text-gray-800">{row.option}</td>
                    <td className="p-4 text-center text-gray-600">{row.privacy}</td>
                    <td className="p-4 text-center text-gray-600">{row.light}</td>
                    <td className="p-4 text-center text-gray-600">{row.cost}</td>
                    <td className="p-4 text-center text-gray-600">{row.removable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Bathroom Applications We Install</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: 'Shower & Tub Enclosures', desc: 'Full-height or partial frosted film on frameless glass showers. Block visibility while preserving the open feel.' },
              { title: 'Bathroom Windows', desc: 'Street-facing and neighbor-facing bathroom windows — privacy without window replacement.' },
              { title: 'Toilet Area Glass', desc: 'Partial-height film at eye level, clear above — maximum privacy where needed, light above.' },
              { title: 'Frosted Door Panels', desc: 'Privacy film on bathroom door glass panels and sidelights.' },
              { title: 'Master Suite Glass', desc: 'Large window walls in master bathrooms and ensuite areas — frosted or patterned film.' },
              { title: 'Rental & Multi-Family', desc: 'Durable privacy film solution for apartments, condos, and rental properties across Phoenix.' },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Bathroom Privacy Film Options</h2>
          <p className="text-gray-400 text-sm mb-6">144+ frosted & etched patterns available — we install all of them</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {FROSTED_FILMS.map(p => (
              <Link key={p.sku} to={`/films/frosted-etched-films/${toSlug(p.sku)}`}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all">
                <div className="aspect-square overflow-hidden bg-gray-50">
                  <img src={p.img} alt={`${p.name} bathroom privacy film`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
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
          <h2 className="text-xl font-bold text-white mb-6">Why Choose Film Over Glass Replacement</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Installs in 1–3 hours — no demo, no permits',
              'Full privacy — blocks all sightlines',
              'Maintains natural light diffusion',
              'Fraction of the cost of glass replacement',
              '99% UV blocking — protects interiors',
              'Humidity-rated — safe for bathrooms and showers',
              'Fully removable — no glass damage',
              '10–15 year lifespan on Solyx films',
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">Bathroom Privacy Film Cost — Phoenix & Scottsdale</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            {[
              { label: 'Single bathroom window', range: '$150–$350', note: 'Approx. 3–5 sqft' },
              { label: 'Shower enclosure (full)', range: '$300–$700', note: 'Approx. 20–40 sqft' },
              { label: 'Multiple windows + shower', range: '$500–$1,200', note: 'Full bathroom package' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-blue-100">
                <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                <p className="text-xl font-black text-gray-900">{item.range}</p>
                <p className="text-xs text-gray-400">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400">All projects are custom-quoted. Prices vary by film spec, glass accessibility, and project scope. Call (480) 788-1591 for a free site assessment.</p>
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
            <h2 className="font-bold text-gray-800">Service Area — Bathroom Privacy Film Installation</h2>
          </div>
          <p className="text-gray-500 text-sm mb-4">Arizona House of Film installs bathroom privacy window film throughout the Phoenix metro and all of Arizona. Licensed ROC #314088. Bonded and insured.</p>
          <div className="flex flex-wrap gap-2">
            {['Phoenix', 'Scottsdale', 'Chandler', 'Mesa', 'Tempe', 'Gilbert', 'Glendale', 'Peoria', 'Surprise', 'Goodyear', 'Avondale', 'Cave Creek', 'Paradise Valley', 'Fountain Hills'].map(city => (
              <span key={city} className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">{city}</span>
            ))}
          </div>
        </section>

        {/* Related pages */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Related Privacy Film Solutions</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { title: 'Office Privacy Film', href: '/office-privacy-window-film', desc: 'Conference rooms, glass partitions, and workstations.' },
              { title: 'Entryway & Front Door Film', href: '/entryway-window-film', desc: 'Sidelights, transom glass, and entry door panels.' },
              { title: 'Sidelight Window Film', href: '/sidelight-window-film', desc: 'Narrow privacy glass panels next to doors.' },
              { title: 'One-Way Mirror Film', href: '/one-way-mirror-window-film', desc: 'Daytime privacy — see out, they can\'t see in.' },
              { title: 'Frosted Film Catalog', href: '/films/frosted-etched-films', desc: '144+ frosted patterns available to install.' },
              { title: 'All Decorative Films', href: '/films', desc: '618 Solyx films — browse the full catalog.' },
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
          <h2 className="text-2xl font-bold text-white mb-2">Get Bathroom Privacy Film Installed</h2>
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
