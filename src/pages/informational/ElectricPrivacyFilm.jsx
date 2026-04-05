import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import ContactFormSection from '@/components/contact/ContactFormSection';

const pageTitle = 'Electric Privacy Film Arizona | Switchable Smart Glass Film | ROC #314088';
const metaDescription = "Switchable electric privacy film installed in Phoenix AZ. Clear when off, frosted when on. Conference rooms, offices, residential. Licensed ROC #314088.";
const canonicalUrl = 'https://arizonahouseoffilm.com/electric-privacy-film-arizona';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does electric privacy film work?',
      acceptedAnswer: { '@type': 'Answer', text: 'Electric privacy film uses PDLC (Polymer Dispersed Liquid Crystal) technology. Microscopic liquid crystal droplets are suspended in a polymer layer between two conductive films. When no power is applied, the crystals are randomly oriented and scatter light, creating a frosted opaque appearance. When an electric current is applied (typically 48-65V AC), the crystals align and the film becomes transparent. Switching between states takes less than one second.' },
    },
    {
      '@type': 'Question',
      name: 'How much does switchable privacy film cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Switchable electric privacy film costs $50-120 per square foot installed in Arizona, including wiring and a wall switch or remote control. A standard conference room glass partition (40-60 sqft) typically runs $3,000-$7,000 installed. Premium integrations with smart home systems or automated scheduling add $500-$1,500 to the project cost. It is an order-in product with 2-3 week lead time.' },
    },
    {
      '@type': 'Question',
      name: 'Can switchable film be applied to existing glass?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Switchable PDLC film is a retrofit solution applied directly to existing glass — no glass replacement required. The film is applied to the interior surface of the glass with a thin wire lead routed to a power source. Installation requires a nearby electrical outlet or hard-wired connection. Most installations complete in one day per partition.' },
    },
    {
      '@type': 'Question',
      name: 'How long does electric privacy film last?',
      acceptedAnswer: { '@type': 'Answer', text: 'Quality PDLC switchable film lasts 10-15 years with normal use. The switching mechanism is rated for over 1 million cycles. Power consumption is minimal — approximately 5 watts per square meter when in the transparent state. The film requires no power to remain opaque (frosted), so it defaults to private when power is off, which is also a security advantage during power outages.' },
    },
    {
      '@type': 'Question',
      name: 'Is electric privacy film better than frosted film?',
      acceptedAnswer: { '@type': 'Answer', text: 'Electric privacy film provides on-demand switching between transparent and frosted states, while static frosted film is permanently frosted. Switchable film costs 3-8x more than static frosted film ($50-120/sqft vs $10-18/sqft). Choose electric film when you need both privacy and transparency at different times — conference rooms that alternate between private meetings and open collaboration. Choose static frosted film for permanently private applications like bathrooms and sidelights.' },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Electric Privacy Film Installation',
  description: metaDescription,
  provider: { '@type': 'LocalBusiness', name: 'Arizona House of Film', telephone: '+1-480-788-1591', address: { '@type': 'PostalAddress', streetAddress: '7007 W Flower St', addressLocality: 'Phoenix', addressRegion: 'AZ', postalCode: '85033' } },
  areaServed: { '@type': 'State', name: 'Arizona' },
};

const applications = [
  { title: 'Conference Rooms', desc: 'Switch from transparent to frosted during private meetings. Return to open and transparent for daily collaboration. Controlled by wall switch, remote, or calendar integration.', icon: '🏢' },
  { title: 'Office Partitions', desc: 'Glass-walled offices that shift between open-plan visibility and private focus. Individual control per partition. Compatible with existing glass walls — no replacement required.', icon: '🪟' },
  { title: 'Medical Facilities', desc: 'HIPAA-compliant privacy on demand for exam rooms, consultation areas, and patient-facing glass. Instant opaque mode during procedures. Clear for staff visibility between appointments.', icon: '🏥' },
  { title: 'Executive Offices', desc: 'High-end privacy solution for C-suite offices with glass walls. Maintains open aesthetic when desired, complete privacy when needed. Integration with smart home and building automation systems.', icon: '🏛️' },
  { title: 'Residential Bathrooms', desc: 'Exterior-facing bathroom windows that switch from transparent (natural light during day) to frosted (privacy when bathing). Eliminates the need for blinds or curtains in wet environments.', icon: '🏠' },
  { title: 'Retail Storefronts', desc: 'Display windows that convert to private after business hours. Protect merchandise visibility during off-hours. Create event-ready private spaces for after-hours functions.', icon: '🏪' },
];

const comparison = [
  { feature: 'Privacy mode', electric: 'On-demand switching', frosted: 'Permanent' },
  { feature: 'Transparency', electric: 'Fully clear when off', frosted: 'Always diffused' },
  { feature: 'Cost per sqft', electric: '$50-120', frosted: '$10-18' },
  { feature: 'Installation time', electric: '1 day + wiring', frosted: '2-4 hours' },
  { feature: 'Lead time', electric: '2-3 weeks order-in', frosted: 'Same week (in stock)' },
  { feature: 'Power required', electric: 'Yes (48-65V AC)', frosted: 'No' },
  { feature: 'Lifespan', electric: '10-15 years', frosted: '8-15 years' },
  { feature: 'Best for', electric: 'Variable-use spaces', frosted: 'Always-private areas' },
];

export default function ElectricPrivacyFilm() {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://arizonahouseoffilm.com/' }, { name: 'Electric Privacy Film', url: canonicalUrl }]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-purple-900 via-slate-900 to-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">Electric Privacy Film — Switchable Smart Glass Arizona</h1>
          <p className="text-xl text-purple-300 font-bold mb-4">Clear When Off. Frosted When On. Instant Privacy on Demand.</p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">PDLC switchable film transforms existing glass into smart glass — switch between fully transparent and frosted opaque in under one second. No glass replacement required. Installed by Arizona's licensed window film contractor.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-block bg-purple-500 hover:bg-purple-400 text-white font-black uppercase tracking-wide px-8 py-4 rounded-lg text-lg transition-colors">Get Switchable Film Quote →</Link>
            <Link to="/ai-window-film-estimator" className="inline-block border-2 border-white text-white hover:bg-white hover:text-slate-900 font-black uppercase px-8 py-4 rounded-lg text-lg transition-colors">Try AI Estimator</Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-8">How Switchable Electric Film Works</h2>
          <p className="text-lg text-slate-700 mb-6">Electric privacy film uses <strong>PDLC (Polymer Dispersed Liquid Crystal)</strong> technology. Microscopic liquid crystal droplets are suspended in a polymer layer between two conductive films laminated to your glass.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-100 rounded-xl p-6 border-t-4 border-slate-400">
              <h3 className="font-black text-lg text-slate-800 mb-2">Power Off = Frosted (Private)</h3>
              <p className="text-slate-700">When no power is applied, the liquid crystals are randomly oriented. They scatter incoming light in all directions, creating a frosted opaque appearance. No clear view is possible in either direction. This is the default state — your glass defaults to private during power outages.</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border-t-4 border-purple-500">
              <h3 className="font-black text-lg text-purple-800 mb-2">Power On = Clear (Transparent)</h3>
              <p className="text-slate-700">When an electric current (48-65V AC) is applied, the crystals align in parallel. Light passes straight through without scattering. The glass becomes fully transparent. Switching takes less than one second. Power consumption is approximately 5 watts per square meter.</p>
            </div>
          </div>
          <p className="text-lg text-slate-700">Control options include wall switches, wireless remotes, timers, occupancy sensors, and smart home integration (Alexa, Google Home, Crestron, Control4). Calendar-triggered automation is available for conference rooms — the glass frosts automatically when a meeting is scheduled.</p>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-8 text-center">Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app) => (
              <div key={app.title} className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="text-3xl mb-3">{app.icon}</div>
                <h3 className="font-black text-lg text-slate-900 mb-2">{app.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-6">Pricing & Lead Time</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-3xl font-black text-purple-700">$50-120</p>
              <p className="text-sm text-slate-700 mt-1">Per square foot installed</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-3xl font-black text-purple-700">2-3 Weeks</p>
              <p className="text-sm text-slate-700 mt-1">Order-in lead time</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
              <p className="text-3xl font-black text-purple-700">1 Day</p>
              <p className="text-sm text-slate-700 mt-1">Typical installation time</p>
            </div>
          </div>
          <p className="text-slate-700 mb-4">A standard conference room glass partition (40-60 sqft) typically runs <strong>$3,000-$7,000</strong> installed including wiring, wall switch, and remote control. Premium integrations with smart home or building automation systems add $500-$1,500.</p>
          <p className="text-slate-700">All installations include wiring, control hardware, and manufacturer warranty documentation. Arizona House of Film is licensed ROC #314088.</p>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-8">Electric Film vs Static Frosted Film</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-4 py-3 text-left font-bold">Feature</th>
                  <th className="px-4 py-3 text-left font-bold">Electric Switchable</th>
                  <th className="px-4 py-3 text-left font-bold">Static Frosted</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-bold text-slate-800">{row.feature}</td>
                    <td className="px-4 py-3 text-slate-700">{row.electric}</td>
                    <td className="px-4 py-3 text-slate-700">{row.frosted}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 mt-4">For permanent privacy applications like <Link to="/bathroom-privacy-window-film" className="text-blue-700 underline hover:text-blue-900">bathrooms</Link> and <Link to="/office-privacy-window-film" className="text-blue-700 underline hover:text-blue-900">office partitions</Link>, static frosted film is more cost-effective. For spaces that need to toggle between open and private, electric film is worth the investment.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-purple-700 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Ready for Smart Glass?</h2>
          <p className="text-purple-100 mb-6">Get a custom quote for switchable electric privacy film. We handle everything — film, wiring, controls, and integration.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-white text-purple-700 font-black uppercase px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors">Request Quote →</Link>
            <Link to="/day-and-night-privacy-window-film" className="border-2 border-white text-white font-black uppercase px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-purple-700 transition-colors">Compare Privacy Options</Link>
          </div>
          <p className="text-purple-300 text-xs mt-4">Licensed ROC #314088 | 713+ Projects | U.S. Navy Veteran Owned</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center text-slate-900 uppercase tracking-tight mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg">
                <summary className="cursor-pointer px-6 py-4 font-bold text-slate-900 flex items-center justify-between">
                  {faq.name}
                  <span className="text-purple-500 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}
