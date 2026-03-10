import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, MapPin, ArrowRight } from 'lucide-react';
import { solyxProducts } from '@/data/solyxFilms';

function toSlug(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const FROSTED_FILMS = solyxProducts.filter(p => p.category === 'frosted-etched').slice(0, 12);
const CASPER_FILMS = solyxProducts.filter(p => p.category === 'casper-designtex').slice(0, 8);

const FAQS = [
  { q: 'Does office privacy window film affect natural light?', a: 'Frosted and etched films diffuse natural light rather than blocking it — glass-walled offices stay bright. Casper cloaking film is fully transparent with no effect on light transmission.' },
  { q: 'Can office window film be removed for renovation?', a: 'Yes. All film installs are fully reversible. Arizona House of Film can remove and reinstall during office renovations without glass damage or adhesive residue.' },
  { q: 'Does Casper film affect screen brightness from inside?', a: 'No. Casper cloaking film has zero measurable impact on screen visibility, color accuracy, or brightness for people inside the office.' },
  { q: 'How long does office window film installation take?', a: 'A single conference room glass wall typically installs in 2–4 hours. Larger projects (full floor, multiple rooms) are scheduled over 1–2 days depending on scope.' },
  { q: 'What is the cost of office privacy window film in Phoenix?', a: 'Office privacy film runs $10–$25 per square foot installed depending on film type and accessibility. Conference rooms typically run $800–$3,500 depending on glass area. Contact us for a site assessment and quote.' },
];

export default function OfficePrivacyFilm() {
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
    "name": "Office Privacy Window Film Installation Phoenix AZ",
    "description": "Commercial office privacy window film for conference rooms, glass partitions, and workstations in Phoenix & Scottsdale. Frosted, Casper cloaking, and gradient films.",
    "provider": { "@type": "LocalBusiness", "name": "Arizona House of Film", "telephone": "+14807881591", "address": { "@type": "PostalAddress", "streetAddress": "7007 W Flower St", "addressLocality": "Phoenix", "addressRegion": "AZ", "postalCode": "85033" } },
    "areaServed": ["Phoenix", "Scottsdale", "Chandler", "Mesa", "Tempe", "Gilbert", "Glendale", "Peoria"],
    "offers": { "@type": "Offer", "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "USD", "description": "$10–$25 per square foot installed" } }
  };

  return (
    <>
      <Helmet>
        <title>Office Privacy Window Film Phoenix AZ | Conference Room Glass Film | Arizona House of Film</title>
        <meta name="description" content="Office privacy window film for conference rooms, glass partitions, and workstations in Phoenix & Scottsdale. Frosted, Casper cloaking, and gradient films. ROC #314088." />
        <meta name="keywords" content="office privacy window film phoenix, conference room glass film arizona, office glass partition film scottsdale, commercial privacy film phoenix, casper cloaking film office" />
        <link rel="canonical" href="https://arizonahouseoffilm.com/office-privacy-window-film" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* Hero */}
      <div className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/30 rounded-full px-4 py-1.5 text-green-400 text-sm font-semibold mb-4">
            LICENSED ROC #314088 · COMMERCIAL INSTALLER
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Office Privacy Window Film</h1>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl">
            Conference rooms, glass offices, and open-plan partitions — privacy film that installs in hours without disrupting your business.
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
            Glass-walled offices are the standard in modern commercial design — but they create privacy, security, and glare problems that hurt productivity and client confidentiality. Arizona House of Film solves this with professional-grade privacy film installation for Phoenix and Scottsdale offices of all sizes.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From simple frosted partitions for open-plan floor separation to Casper cloaking film for screen-sensitive boardrooms, we carry and install every film option for commercial glass. Licensed ROC #314088. No business disruption — most installs complete outside business hours on request.
          </p>
        </section>

        {/* Casper Callout */}
        <section className="mb-12 bg-blue-900 rounded-2xl p-8">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-3 py-1 text-blue-300 text-xs font-semibold mb-4">
            SPECIALTY PRODUCT
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Casper Cloaking Film — Block Screen Content from Outside</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Designed specifically for glass offices with LED screens, Casper cloaking film blocks screen content from outside view while leaving the glass visually transparent. People inside see screens normally. People outside see only clear glass. Standard specification for law firms, financial services, healthcare administration, and tech companies with IP to protect.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {['Blocks LED & OLED screens', 'Glass stays fully clear', 'No impact on screen brightness'].map((pt, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-200 text-sm">{pt}</span>
              </div>
            ))}
          </div>
          <Link to="/films/casper-films/sx-ccf" className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-5 py-2.5 rounded-lg text-sm hover:bg-blue-50 transition-colors">
            Learn About Casper Cloaking Film <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Office Applications We Install</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: 'Conference Rooms', desc: 'Full glass-wall privacy for meeting rooms — frosted, gradient, or Casper depending on your needs.' },
              { title: 'Glass Partition Walls', desc: 'Open-plan floor separation — frosted lower panels with clear upper sections for light and openness.' },
              { title: 'Executive Offices', desc: 'Premium frosted or etched film for C-suite glass — privacy without darkening executive spaces.' },
              { title: 'Reception Areas', desc: 'Branded etched or decorative film on lobby glass — privacy and identity combined.' },
              { title: 'Open-Plan Workstations', desc: 'Low partition glass panels with frosted film at seated eye level — no sightlines across the floor.' },
              { title: 'Healthcare Administration', desc: 'HIPAA-compliant visual privacy for glass-walled nursing stations, admin areas, and consultation rooms.' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Frosted film grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Office Privacy Film Options</h2>
          <p className="text-gray-400 text-sm mb-6">Frosted & etched patterns for conference rooms and glass partitions</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-6">
            {FROSTED_FILMS.map(p => (
              <Link key={p.sku} to={`/films/frosted-etched-films/${toSlug(p.sku)}`}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all">
                <div className="aspect-square overflow-hidden bg-gray-50">
                  <img src={p.img} alt={`${p.name} office privacy film`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                </div>
                <div className="p-2">
                  <p className="text-xs font-semibold text-gray-700 line-clamp-2 leading-snug">{p.name}</p>
                  <p className="text-xs text-gray-400 font-mono">{p.sku}</p>
                </div>
              </Link>
            ))}
          </div>

          {CASPER_FILMS.length > 0 && (
            <>
              <p className="text-gray-500 text-sm font-semibold mb-3 mt-6">Casper Cloaking Films — Screen Privacy</p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {CASPER_FILMS.map(p => (
                  <Link key={p.sku} to={`/films/casper-films/${toSlug(p.sku)}`}
                    className="group bg-white border border-blue-100 rounded-xl overflow-hidden hover:shadow-md transition-all">
                    <div className="aspect-square overflow-hidden bg-gray-50">
                      <img src={p.img} alt={`${p.name} casper cloaking film`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
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
          <h2 className="text-xl font-bold text-white mb-6">Why Phoenix Offices Choose Arizona House of Film</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Installs outside business hours — no workflow disruption',
              'Licensed commercial contractor ROC #314088',
              'Frosted, gradient, Casper, and etched film options',
              'Maintains full natural light in office spaces',
              'Casper film: blocks screens without affecting clarity',
              'Removes cleanly — no glass damage for lease compliance',
              'Commercial warranty on all Solyx film products',
              'Phoenix, Scottsdale, and all Arizona service area',
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">Office Privacy Film Cost — Phoenix & Scottsdale</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            {[
              { label: 'Single conference room', range: '$800–$3,500', note: 'Approx. 40–200 sqft glass' },
              { label: 'Glass partition wall', range: '$400–$1,500', note: 'Per wall, frosted film' },
              { label: 'Full office floor', range: '$3,000–$12,000+', note: 'Multi-room commercial project' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-blue-100">
                <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                <p className="text-xl font-black text-gray-900">{item.range}</p>
                <p className="text-xs text-gray-400">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400">Film rate: $10–$25/sqft installed depending on film type. Casper cloaking film is priced at a premium. All projects are custom-quoted — call (480) 788-1591.</p>
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
            <h2 className="font-bold text-gray-800">Service Area — Commercial Office Film Installation</h2>
          </div>
          <p className="text-gray-500 text-sm mb-4">Arizona House of Film installs office privacy window film for commercial properties throughout Phoenix, Scottsdale, and all of Arizona. Licensed ROC #314088. Bonded and insured.</p>
          <div className="flex flex-wrap gap-2">
            {['Phoenix', 'Scottsdale', 'Chandler', 'Mesa', 'Tempe', 'Gilbert', 'Glendale', 'Peoria', 'Surprise', 'Goodyear', 'Avondale', 'Fountain Hills', 'Paradise Valley', 'Cave Creek'].map(city => (
              <span key={city} className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">{city}</span>
            ))}
          </div>
        </section>

        {/* Related pages */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Related Privacy Film Solutions</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { title: 'Bathroom Privacy Film', href: '/bathroom-privacy-window-film', desc: 'Shower glass, bathroom windows, and sidelights.' },
              { title: 'Storefront Window Film', href: '/storefront-window-film', desc: 'Solar control and branding for retail glass.' },
              { title: 'One-Way Mirror Film', href: '/one-way-mirror-window-film', desc: 'Daytime privacy — see out, they can\'t see in.' },
              { title: 'Casper Film Detail', href: '/films/casper-films', desc: 'Full Casper cloaking film product pages.' },
              { title: 'Frosted Film Catalog', href: '/films/frosted-etched-films', desc: '144+ frosted and etched patterns.' },
              { title: 'Commercial Window Tinting', href: '/commercial-window-tinting', desc: 'Full commercial service overview.' },
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
          <h2 className="text-2xl font-bold text-white mb-2">Get Office Privacy Film Installed</h2>
          <p className="text-gray-300 text-sm mb-6">Arizona House of Film — licensed commercial installer ROC #314088. Phoenix & Scottsdale. After-hours installs available.</p>
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
