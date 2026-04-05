import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import ContactFormSection from '@/components/contact/ContactFormSection';

const pageTitle = 'Day and Night Privacy Window Film Phoenix AZ | ROC #314088';
const metaDescription = "Privacy window film that works day AND night. One-way film reverses after dark — frosted film provides 24/7 privacy. We explain the difference and install both. ROC #314088.";
const canonicalUrl = 'https://arizonahouseoffilm.com/day-and-night-privacy-window-film';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does one-way window film work at night?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. One-way mirror film relies on a light differential — during the day the brighter exterior creates a reflective surface on the outside. At night when your interior lights are on, the brighter side is now inside your home, reversing the effect and making your interior visible from outside. No reflective film provides true one-way privacy in both day and night conditions.' },
    },
    {
      '@type': 'Question',
      name: 'What window film provides privacy day and night?',
      acceptedAnswer: { '@type': 'Answer', text: 'Frosted and etched window films provide consistent privacy day and night because they diffuse light rather than relying on reflectivity. They block clear views in both directions while still allowing natural light to pass through. For rooms where you need both privacy and a clear view, a dual-layer approach with frosted film on the lower half and solar film on the upper half is the most effective solution.' },
    },
    {
      '@type': 'Question',
      name: 'What is electric privacy film / switchable film?',
      acceptedAnswer: { '@type': 'Answer', text: 'Electric privacy film, also called switchable or smart glass film, uses PDLC (Polymer Dispersed Liquid Crystal) technology. When powered off, the film scatters light and appears frosted. When powered on, the liquid crystals align and the film becomes transparent. It is controlled by a wall switch, remote, or automation system. Installed cost in Arizona ranges from $50-120 per square foot.' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between frosted and one-way film?',
      acceptedAnswer: { '@type': 'Answer', text: 'Frosted film diffuses light and blocks clear views in both directions at all times — it works identically day and night. One-way (reflective) film creates a mirror effect on the brighter side, allowing the darker side to see through. One-way film provides daytime privacy with clear outward views but reverses at night. Frosted film is the choice for 24/7 privacy. One-way film is the choice for daytime privacy with views.' },
    },
    {
      '@type': 'Question',
      name: 'Can I get privacy without blocking my view?',
      acceptedAnswer: { '@type': 'Answer', text: 'During the day, yes — one-way mirror film and dual-reflective film provide privacy while maintaining clear outward views. At night, no film provides both full privacy and clear views simultaneously. The best compromise is a dual-layer approach: frosted film on the lower portion of the window for 24/7 privacy where it matters most, and solar or clear film on the upper portion to preserve your view and natural light.' },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Day and Night Privacy Window Film Installation',
  description: metaDescription,
  provider: { '@type': 'LocalBusiness', name: 'Arizona House of Film', telephone: '+1-480-788-1591', address: { '@type': 'PostalAddress', streetAddress: '7007 W Flower St', addressLocality: 'Phoenix', addressRegion: 'AZ', postalCode: '85033' } },
  areaServed: { '@type': 'State', name: 'Arizona' },
};

const solutions = [
  {
    label: 'Option A',
    title: 'Frosted Film',
    badge: 'Most Popular',
    points: [
      'Works day and night — always private',
      'Diffuses light — no clear view either direction',
      'Best for: bathrooms, sidelights, office partitions',
    ],
    price: '$10-18/sqft installed',
    color: 'green',
  },
  {
    label: 'Option B',
    title: 'Dual-Layer Approach',
    badge: 'Best Compromise',
    points: [
      'Frosted film on bottom half + solar film on top',
      'Privacy where needed, views maintained above',
      'Best for: street-facing windows, retail storefronts',
    ],
    price: '$12-20/sqft installed',
    color: 'blue',
  },
  {
    label: 'Option C',
    title: 'Switchable Electric Film',
    badge: 'Premium',
    points: [
      'Clear when off, frosted when on — instant privacy on demand',
      'Controlled by wall switch, remote, or smart home system',
      'Best for: conference rooms, high-end residential',
    ],
    price: '$50-120/sqft installed',
    note: 'Order-in, 2-3 week lead time',
    color: 'purple',
  },
  {
    label: 'Option D',
    title: 'Blackout Film',
    badge: 'Total Privacy',
    points: [
      'Complete opacity — no light transfer in either direction',
      'Blocks 100% of visible light through the glass',
      'Best for: bedrooms, media rooms, absolute privacy',
    ],
    price: '$10-15/sqft installed',
    color: 'slate',
  },
];

const recommendations = [
  { room: 'Bathroom', rec: 'Frosted film — 24/7 privacy, lets light in, moisture-resistant', link: '/bathroom-privacy-window-film' },
  { room: 'Bedroom', rec: 'Blackout or frosted — complete nighttime privacy without curtains', link: null },
  { room: 'Living room facing street', rec: 'Dual-layer (frosted lower + solar upper) or frosted lower half', link: null },
  { room: 'Office conference room', rec: 'Electric switchable film or static frosted — depends on budget', link: '/office-privacy-window-film' },
  { room: 'Storefront', rec: 'One-way mirror film — daytime privacy is sufficient during business hours', link: '/storefront-window-film' },
];

const colorMap = { green: 'border-green-500 bg-green-50', blue: 'border-blue-500 bg-blue-50', purple: 'border-purple-500 bg-purple-50', slate: 'border-slate-500 bg-slate-50' };
const badgeMap = { green: 'bg-green-600', blue: 'bg-blue-600', purple: 'bg-purple-600', slate: 'bg-slate-600' };

export default function DayAndNightPrivacyFilm() {
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
      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://arizonahouseoffilm.com/' }, { name: 'Day & Night Privacy Film', url: canonicalUrl }]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">Day and Night Privacy Window Film — Phoenix AZ</h1>
          <p className="text-xl text-green-400 font-bold mb-4">The #1 question we get: "Does one-way film work at night?"</p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">Standard one-way mirror film works during the day — outside sees reflection. At night when interior lights are on, the effect reverses — you become visible. This is the #1 complaint about one-way film. Here is what actually works for 24/7 privacy.</p>
          <Link to="/ai-window-film-estimator" className="inline-block bg-green-500 hover:bg-green-400 text-white font-black uppercase tracking-wide px-10 py-4 rounded-lg text-lg transition-colors shadow-lg">Get Privacy Film Estimate →</Link>
        </div>
      </section>

      {/* THE DAY/NIGHT PROBLEM */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-8">Why One-Way Film Fails at Night</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <h3 className="font-black text-lg text-green-800 mb-2">During the Day ✓</h3>
              <p className="text-slate-700">Bright sunlight outside creates a mirror effect on the exterior surface. People outside see their own reflection. You see clearly through the glass from inside. <Link to="/one-way-mirror-window-film" className="text-blue-700 underline hover:text-blue-900">One-way mirror film</Link> works exactly as expected.</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h3 className="font-black text-lg text-red-800 mb-2">After Dark ✗</h3>
              <p className="text-slate-700">When your interior lights are on and it's dark outside, the brighter side is now inside your home. The mirror effect reverses — people outside can see in, and you see your own reflection. This is physics, not a product defect. No reflective film solves this.</p>
            </div>
          </div>
          <div className="mt-8 bg-slate-100 rounded-xl p-6">
            <p className="text-slate-800 font-bold text-center">The rule is simple: the brighter side always sees a reflection. The darker side always sees through. No film changes this — but there are solutions that provide true 24/7 privacy.</p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-4 text-center">Solutions That Provide 24/7 Privacy</h2>
          <p className="text-center text-gray-600 mb-12">Four approaches that work day and night — no exceptions.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((sol) => (
              <div key={sol.label} className={`border-t-4 ${colorMap[sol.color]} rounded-xl p-6`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-slate-500 uppercase">{sol.label}</span>
                  <span className={`text-xs font-bold text-white px-3 py-1 rounded-full ${badgeMap[sol.color]}`}>{sol.badge}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{sol.title}</h3>
                <ul className="space-y-2 mb-4">
                  {sol.points.map((p, i) => (
                    <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span>{p}
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-black text-slate-900">{sol.price}</p>
                {sol.note && <p className="text-xs text-slate-500 mt-1">{sol.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT ONE-WAY FILM ACTUALLY DOES */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-6">What One-Way Film Actually Does</h2>
          <p className="text-lg text-slate-700 mb-4"><Link to="/one-way-mirror-window-film" className="text-blue-700 underline hover:text-blue-900">One-way mirror film</Link> (also called reflective, mirrored, or privacy film) creates a reflective surface on one side of the glass. Which side is reflective depends entirely on which side has more light — not on the film itself.</p>
          <p className="text-lg text-slate-700 mb-4">During the day, sunlight is brighter than your interior lighting, so the exterior side becomes a mirror. After dark with interior lights on, your interior is brighter, so the interior side becomes the mirror and outside observers can see through from their darker vantage point.</p>
          <p className="text-lg text-slate-700 mb-4">This is why we recommend <Link to="/decorative-window-films" className="text-blue-700 underline hover:text-blue-900">frosted or decorative films</Link> for any application requiring nighttime privacy. Frosted films diffuse light in both directions regardless of lighting conditions — they work identically at 2pm and 2am.</p>
          <p className="text-lg text-slate-700">For customers who want daytime views with nighttime privacy, the best solution is pairing one-way film with interior window treatments (blinds or curtains) for after-dark use, or choosing the dual-layer approach with frosted film on the lower portion of the window.</p>
        </div>
      </section>

      {/* RECOMMENDATION BY SITUATION */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-8">What We Recommend by Room</h2>
          <div className="space-y-4">
            {recommendations.map((r) => (
              <div key={r.room} className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col md:flex-row md:items-center gap-3">
                <span className="font-black text-slate-900 md:w-56 flex-shrink-0">{r.room}</span>
                <span className="text-slate-700 text-sm flex-1">{r.rec}</span>
                {r.link && <Link to={r.link} className="text-blue-700 underline text-sm font-semibold hover:text-blue-900 flex-shrink-0">Learn more →</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTIMATOR CTA */}
      <section className="py-12 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Not Sure Which Privacy Film You Need?</h2>
          <p className="text-gray-300 mb-6">Upload a photo of your window — our AI identifies the best privacy solution for your specific situation and gives you an instant estimate.</p>
          <Link to="/ai-window-film-estimator" className="inline-block bg-green-500 hover:bg-green-400 text-white font-black uppercase px-10 py-4 rounded-lg text-lg transition-colors">Try AI Estimator →</Link>
          <p className="text-gray-500 text-xs mt-4">Licensed ROC #314088 | 713+ Projects | U.S. Navy Veteran Owned</p>
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
                  <span className="text-green-500 group-open:rotate-45 transition-transform text-xl">+</span>
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
