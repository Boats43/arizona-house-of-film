import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, MapPin, ArrowRight, Sun } from 'lucide-react';
import { solyxProducts } from '@/data/solyxFilms';

function toSlug(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const REFLECTIVE_FILMS = solyxProducts.filter(p => p.category === 'reflective-mirror').slice(0, 12);
const FROSTED_FILMS = solyxProducts.filter(p => p.category === 'frosted-etched').slice(0, 6);
const COLORED_FILMS = solyxProducts.filter(p => p.category === 'colored-films').slice(0, 6);

const FAQS = [
  { q: 'Does storefront window film affect product visibility from outside?', a: 'Reflective and lightly tinted films maintain visibility of products and interiors from outside while reducing glare and heat. Frosted films block sightlines — we help you select the right spec for your storefront.' },
  { q: 'Can I put my logo on storefront window film?', a: 'Yes — custom-cut frosted or colored film can be applied in logo shapes, text, and graphic patterns. This is a cost-effective branding solution for retail storefront glass.' },
  { q: 'How much heat does commercial window film reject in Phoenix?', a: 'Quality reflective commercial films reject 50–80% of solar heat gain. For Phoenix storefronts with significant west or south glass exposure, this can reduce HVAC costs by 20–35% on glazed areas.' },
  { q: 'How long does storefront window film last in Arizona?', a: 'Commercial-grade exterior and interior films are rated for 7–15 years in Arizona\'s high-UV climate depending on film spec and sun exposure. We use only commercial-grade Solyx films with manufacturer warranties.' },
  { q: 'Does storefront film require permits in Phoenix?', a: 'Window film application does not require building permits in Phoenix or Scottsdale. Some commercial leases require landlord approval — check your lease before proceeding. We provide documentation for approval requests.' },
];

export default function StorefrontWindowFilm() {
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
    "name": "Storefront Window Film Installation Phoenix AZ",
    "description": "Commercial storefront window film for Phoenix and Scottsdale retail locations. Solar control, branding, privacy, and security film for business glass.",
    "provider": { "@type": "LocalBusiness", "name": "Arizona House of Film", "telephone": "+14807881591", "address": { "@type": "PostalAddress", "streetAddress": "7007 W Flower St", "addressLocality": "Phoenix", "addressRegion": "AZ", "postalCode": "85033" } },
    "areaServed": ["Phoenix", "Scottsdale", "Chandler", "Mesa", "Tempe", "Gilbert", "Glendale", "Peoria"],
    "offers": { "@type": "Offer", "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "USD", "description": "$8–$20 per square foot installed" } }
  };

  return (
    <>
      <Helmet>
        <title>Storefront Window Film Phoenix AZ | Commercial Window Film | Arizona House of Film</title>
        <meta name="description" content="Storefront window film for Phoenix & Scottsdale retail and commercial properties. Solar control, branding, privacy, and security film. Licensed ROC #314088. Free quote." />
        <meta name="keywords" content="storefront window film phoenix, commercial window film scottsdale, retail window film arizona, business window film phoenix, commercial window tinting arizona" />
        <link rel="canonical" href="https://arizonahouseoffilm.com/storefront-window-film" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* Hero */}
      <div className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/30 rounded-full px-4 py-1.5 text-green-400 text-sm font-semibold mb-4">
            LICENSED ROC #314088 · COMMERCIAL INSTALLER
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Storefront Window Film</h1>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl">
            Solar control, branding, security, and privacy film for Phoenix and Scottsdale retail storefronts and commercial buildings.
          </p>
          <p className="text-gray-400 mb-8">Phoenix · Scottsdale · Chandler · Mesa · All Arizona</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="bg-green-600 hover:bg-green-500 text-white font-bold px-7 py-3 rounded-lg transition-colors">Get Commercial Quote</Link>
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
            Phoenix storefronts face one of the harshest solar environments in the country — west and south-facing glass can add thousands of dollars annually to cooling costs and create unbearable glare for customers and employees. Arizona House of Film installs commercial window film that cuts heat, controls glare, adds privacy, and improves the appearance of your storefront glass.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We work with retail stores, restaurants, office buildings, medical practices, drive-thru locations, and mall kiosks across Phoenix and Scottsdale. Licensed commercial contractor ROC #314088 — we handle projects of any scale.
          </p>
        </section>

        {/* Solar control callout */}
        <section className="mb-12 bg-amber-50 border border-amber-200 rounded-2xl p-8">
          <div className="flex items-start gap-3 mb-4">
            <Sun className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
            <h2 className="text-xl font-bold text-gray-900">Solar Control — Arizona's Biggest Commercial Film ROI</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            Phoenix receives 299 days of sunshine per year. West and south-facing storefront glass without film is a direct energy drain — solar heat enters freely, overloading HVAC and creating hot zones that drive customers away. Commercial reflective and solar films reject 50–80% of incoming solar heat before it enters your space.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { stat: 'Up to 80%', label: 'Solar heat rejected' },
              { stat: '20–35%', label: 'HVAC cost reduction on glazed areas' },
              { stat: '99%', label: 'UV blocking — protects inventory' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-amber-100 text-center">
                <p className="text-2xl font-black text-amber-600 mb-1">{item.stat}</p>
                <p className="text-xs text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Storefront Applications We Install</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: 'Retail Storefronts', desc: 'Reflective or tinted film on retail glass — solar control plus professional exterior appearance.' },
              { title: 'Restaurant Windows', desc: 'Reduce glare in dining areas while maintaining street visibility and ambiance.' },
              { title: 'Office Building Facades', desc: 'Multi-floor commercial film installs for maximum heat rejection and uniform exterior appearance.' },
              { title: 'Signage & Branding Glass', desc: 'Custom-cut frosted or colored film for logo display and branded glass treatments.' },
              { title: 'Drive-Thru Windows', desc: 'Solar control on service windows — reduce heat for staff and prevent glare on POS screens.' },
              { title: 'Mall Kiosks & Retail Units', desc: 'Privacy and solar film for open retail kiosk glass — reduce heat in high-traffic enclosed areas.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Film grids */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Storefront Film Options</h2>
          <p className="text-gray-400 text-sm mb-6">Reflective, frosted, and colored films — installed on any commercial glass</p>

          <p className="text-gray-700 font-semibold text-sm mb-3">Reflective & Mirror Films — Solar Control + Privacy</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-6">
            {REFLECTIVE_FILMS.map(p => (
              <Link key={p.sku} to={`/films/reflective-films/${toSlug(p.sku)}`}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all">
                <div className="aspect-square overflow-hidden bg-gray-50">
                  <img src={p.img} alt={`${p.name} storefront window film`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="p-2">
                  <p className="text-xs font-semibold text-gray-700 line-clamp-2 leading-snug">{p.name}</p>
                  <p className="text-xs text-gray-400 font-mono">{p.sku}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 font-semibold text-sm mb-3">Frosted Films — Branding & Privacy</p>
              <div className="grid grid-cols-3 gap-3">
                {FROSTED_FILMS.map(p => (
                  <Link key={p.sku} to={`/films/frosted-etched-films/${toSlug(p.sku)}`}
                    className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all">
                    <div className="aspect-square overflow-hidden bg-gray-50">
                      <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                    </div>
                    <div className="p-1.5">
                      <p className="text-xs font-semibold text-gray-700 line-clamp-2 leading-snug">{p.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-700 font-semibold text-sm mb-3">Colored Films — Brand Color Glass</p>
              <div className="grid grid-cols-3 gap-3">
                {COLORED_FILMS.map(p => (
                  <Link key={p.sku} to={`/films/colored-films/${toSlug(p.sku)}`}
                    className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all">
                    <div className="aspect-square overflow-hidden bg-gray-50">
                      <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                    </div>
                    <div className="p-1.5">
                      <p className="text-xs font-semibold text-gray-700 line-clamp-2 leading-snug">{p.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12 bg-slate-900 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">Why Phoenix Businesses Choose Arizona House of Film</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Licensed commercial contractor — ROC #314088',
              'Rejects up to 80% solar heat — measurable HVAC savings',
              '99% UV blocking — protects merchandise and flooring',
              'Reduces glare for customers and staff',
              'Custom branding options — logo and graphic cuts',
              'Night install available — no business disruption',
              'Commercial warranty on all film installations',
              'Serving Phoenix, Scottsdale, and all Arizona since 2017',
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">Storefront Window Film Cost — Phoenix & Scottsdale</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            {[
              { label: 'Small retail storefront', range: '$1,200–$3,000', note: 'Approx. 100–200 sqft glass' },
              { label: 'Medium commercial space', range: '$3,000–$6,000', note: 'Approx. 200–400 sqft glass' },
              { label: 'Large building facade', range: '$6,000–$20,000+', note: 'Multi-floor commercial' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-blue-100">
                <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                <p className="text-xl font-black text-gray-900">{item.range}</p>
                <p className="text-xs text-gray-400">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400">Film rate: $8–$20/sqft installed. Exterior-rated films carry a premium. All projects are custom-quoted — call (480) 788-1591.</p>
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
            <h2 className="font-bold text-gray-800">Service Area — Commercial Storefront Film Installation</h2>
          </div>
          <p className="text-gray-500 text-sm mb-4">Arizona House of Film installs storefront window film for commercial properties throughout the Phoenix metro and all of Arizona. Licensed ROC #314088. Bonded and insured.</p>
          <div className="flex flex-wrap gap-2">
            {['Phoenix', 'Scottsdale', 'Chandler', 'Mesa', 'Tempe', 'Gilbert', 'Glendale', 'Peoria', 'Surprise', 'Goodyear', 'Avondale', 'Fountain Hills', 'Paradise Valley', 'Yuma'].map(city => (
              <span key={city} className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">{city}</span>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Related Commercial Film Solutions</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { title: 'Office Privacy Film', href: '/office-privacy-window-film', desc: 'Conference rooms, glass partitions, and workstations.' },
              { title: 'One-Way Mirror Film', href: '/one-way-mirror-window-film', desc: 'Daytime privacy — see out, they can\'t see in.' },
              { title: 'Commercial Window Tinting', href: '/commercial-window-tinting', desc: 'Full commercial service overview.' },
              { title: 'Commercial Film Phoenix', href: '/commercial-window-film-phoenix', desc: 'Phoenix-specific commercial page.' },
              { title: 'Reflective Film Catalog', href: '/films/reflective-films', desc: 'All reflective and mirror film options.' },
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

        {/* CTA */}
        <section className="bg-slate-900 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Get Storefront Window Film Installed</h2>
          <p className="text-gray-300 text-sm mb-6">Arizona House of Film — licensed commercial contractor ROC #314088. Phoenix & Scottsdale. Night and weekend installs available.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-lg transition-colors">Request Commercial Quote</Link>
            <a href="tel:4807881591" className="flex items-center gap-2 border border-white/20 text-white font-semibold px-6 py-4 rounded-lg hover:border-white/40 transition-colors">
              <Phone className="w-4 h-4" /> (480) 788-1591
            </a>
          </div>
        </section>

      </div>
    </>
  );
}
