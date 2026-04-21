import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import ContactFormSection from '@/components/contact/ContactFormSection';

const pageTitle = 'Bird Safety Window Film Arizona | Solyx Bird Safe | ROC #314088';
const metaDescription = 'Solyx bird safety window film installed across Arizona — UV-visible dot, vertical, horizontal, and trellis patterns that help prevent window strikes. FLAP-referenced spacing, commercial and residential. ROC #314088.';
const canonicalUrl = 'https://arizonahouseoffilm.com/solyx-bird-safety-film';

const birdSkus = [
  {
    sku: 'SX-BSFD-72',
    name: 'BSFD Frost Dot Bird Safety Film',
    url: '/films/frosted-etched-films/sx-bsfd-72',
    pattern: 'Frosted dots on a 2"×2" grid',
    use: 'Most broadly applicable pattern — meets common 2×4 spacing guidance referenced by ABC and FLAP for reducing strikes on reflective glass.',
    segment: 'Commercial + Residential',
  },
  {
    sku: 'SX-BSFV-72',
    name: 'BSFV Bird Safety Film — Vertical',
    url: '/films/specialty-films/sx-bsfv-72',
    pattern: 'Vertical lines spaced for strike-prevention',
    use: 'Preferred for large storefront and curtain-wall glazing where vertical sight lines read cleanly into the architecture.',
    segment: 'Commercial / storefront',
  },
  {
    sku: 'SX-BSFH-70',
    name: 'BSFH Bird Safety Film — Horizontal',
    url: '/films/specialty-films/sx-bsfh-70',
    pattern: 'Horizontal lines spaced for strike-prevention',
    use: 'Used when vertical mullions already break up the view — horizontal spacing completes the deterrent grid.',
    segment: 'Commercial + Residential',
  },
  {
    sku: 'SX-BSFT-60',
    name: 'BSFT Trellis Bird Safety Film',
    url: '/films/specialty-films/sx-bsft-60',
    pattern: 'Decorative trellis / lattice weave',
    use: 'For residential and hospitality glazing where the owner wants a designer look in addition to strike prevention.',
    segment: 'Residential / hospitality',
  },
  {
    sku: 'SX-BSFAC-01',
    name: 'Color Bird Safety Film — Ashley Cecil',
    url: '/films/colored-films/sx-bsfac-01',
    pattern: 'Illustrated vines in full color (artist series)',
    use: 'Nature-center, school, and museum glazing where the graphic doubles as educational artwork. Designed by conservation artist Ashley Cecil.',
    segment: 'Institutional / museum',
  },
  {
    sku: 'SX-BSFAC-02',
    name: 'Frost Bird Safety Film — Ashley Cecil',
    url: '/films/frosted-etched-films/sx-bsfac-02',
    pattern: 'Frosted vines on clear (artist series, neutral)',
    use: 'Same vine graphic as BSFAC-01 in frosted-only format — blends with any interior palette.',
    segment: 'Commercial + Residential',
  },
  {
    sku: 'SX-SC672',
    name: 'Humming Bird Chips',
    url: '/films/specialty-films/sx-sc672',
    pattern: 'Decorative hummingbird silhouettes',
    use: 'Residential accent for smaller lites, French doors, and entry sidelights. Decorative film with bird-imagery deterrent value.',
    segment: 'Residential accent',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is bird safety window film?',
      acceptedAnswer: { '@type': 'Answer', text: 'Bird safety window film is a visual-marker film applied to glass to break up the mirror-like reflections of sky and foliage that cause birds to collide with windows. Patterns are spaced tightly enough that birds perceive the glass as a solid surface and alter their flight path. Solyx bird safety films use dots, vertical lines, horizontal lines, trellis patterns, or illustrated artwork — all at spacing informed by FLAP and American Bird Conservancy testing.' },
    },
    {
      '@type': 'Question',
      name: 'Is Solyx bird safety film FLAP certified?',
      acceptedAnswer: { '@type': 'Answer', text: 'Solyx bird safety patterns are designed to the spacing guidance published by FLAP Canada (Fatal Light Awareness Program) and the American Bird Conservancy — most notably the 2"×4" rule for dot patterns and the 2"×2" rule for smaller songbirds. Testing status varies by specific SKU and year; if your project (LEED Pilot Credit 55, Bird-Safe Design, or a municipal bird-safe building ordinance) requires a specific certification, we verify the exact SKU against the most current tested-product list before specifying.' },
    },
    {
      '@type': 'Question',
      name: 'How does UV-visible bird safety film work?',
      acceptedAnswer: { '@type': 'Answer', text: 'Some bird safety films use a UV-reflective or UV-absorbing component in the pattern, taking advantage of the fact that many birds see into the near-ultraviolet range that is invisible to human eyes. The intent is a pattern birds can see clearly while the glass appears nearly clear to people. In practice, UV-only patterns degrade faster and do not work for every species, so most current bird-safe specifications — including Solyx patterns — favor visible markers (frosted dots, lines, trellis, or art) installed on the exterior or between panes.' },
    },
    {
      '@type': 'Question',
      name: 'Can bird safety film be used on residential windows?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Homes with large picture windows, glass sunrooms, sliding doors, or windows that reflect vegetation are common strike locations. The Solyx BSFD dot pattern and the SC672 hummingbird chip pattern are popular residential choices — they reduce strikes while reading as decorative film rather than industrial signage. Arizona homes backing to washes, golf courses, or native landscaping see the highest benefit.' },
    },
    {
      '@type': 'Question',
      name: 'Does bird safety film qualify for LEED credit?',
      acceptedAnswer: { '@type': 'Answer', text: 'Bird-safe glazing contributes to LEED v4/v4.1 Pilot Credit 55 — Bird Collision Deterrence. The credit requires that exterior glazing meet a maximum "Threat Factor" using ABC-tested materials or equivalent patterns at the 2×4 or tighter spacing. We supply documentation packets (pattern spacing, installation photos, SKU data sheets) for project teams pursuing the credit on Arizona commercial buildings.' },
    },
    {
      '@type': 'Question',
      name: 'Why is bird safety film especially relevant in Arizona?',
      acceptedAnswer: { '@type': 'Answer', text: 'Arizona sits on two of the major North American flyways — the Pacific and Central — and hosts year-round species plus seasonal migrants. Reflective glass on commercial towers, hillside homes, and desert-adjacent campuses creates strike hot spots during fall and spring migration. Phoenix, Tucson, Sedona, and Flagstaff all see meaningful residential and commercial strike volume that the right visible-marker film measurably reduces.' },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bird Safety Window Film Installation — Arizona',
  description: metaDescription,
  provider: { '@type': 'LocalBusiness', name: 'Arizona House of Film', telephone: '+1-480-788-1591', address: { '@type': 'PostalAddress', streetAddress: '7007 W Flower St', addressLocality: 'Phoenix', addressRegion: 'AZ', postalCode: '85033' } },
  areaServed: { '@type': 'State', name: 'Arizona' },
  serviceType: 'Bird collision deterrent window film installation',
};

export default function SolyxBirdSafetyFilm() {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://arizonahouseoffilm.com/' },
        { name: 'Bird Safety Window Film', url: canonicalUrl },
      ]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-emerald-400 font-bold uppercase tracking-wider text-sm mb-4">Solyx Bird Safe Collection</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">Bird Safety Window Film — Arizona</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-4">Visible-marker films that prevent window strikes on storefronts, hillside homes, schools, and museums across Arizona. Seven Solyx patterns in stock — dots, lines, trellis, and illustrated series — spaced to FLAP and ABC guidance.</p>
          <p className="text-sm text-gray-400 mb-8">Licensed ROC #314088 · U.S. Navy veteran owned · Arizona-wide install</p>
          <Link to="/get-a-quote" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-black uppercase tracking-wide px-10 py-4 rounded-lg text-lg transition-colors shadow-lg">Request Bird Safe Quote →</Link>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-8">Why Bird Safety Film Is Needed</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg">
              <p className="text-3xl font-black text-emerald-700 mb-2">Up to 1B</p>
              <p className="text-sm text-slate-700">Birds estimated to die annually in the U.S. from window strikes (American Bird Conservancy).</p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <p className="text-3xl font-black text-amber-700 mb-2">2 flyways</p>
              <p className="text-sm text-slate-700">Arizona sits on the Pacific and Central migratory flyways — elevated strike risk during spring and fall migration.</p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-3xl font-black text-blue-700 mb-2">2×4 rule</p>
              <p className="text-sm text-slate-700">Pattern spacing referenced by FLAP Canada — no gap larger than 2" vertical × 4" horizontal.</p>
            </div>
          </div>
          <p className="mt-8 text-slate-700 text-lg">Reflective glass mirrors sky, trees, and cactus. Birds see the reflection as continuous habitat and strike the glass at flight speed. Visible-marker film breaks the reflection with a pattern dense enough that birds perceive a solid surface and redirect before impact.</p>
        </div>
      </section>

      {/* SKU GRID */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-4 text-center">Solyx Bird Safety Film Patterns</h2>
          <p className="text-center text-gray-600 mb-12">Seven SKUs in stock — each links to the product page with full spec sheet and imagery.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {birdSkus.map((s) => (
              <div key={s.sku} className="bg-white border border-slate-200 rounded-xl p-6 hover:border-emerald-500 transition-colors">
                <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">{s.sku}</p>
                <h3 className="text-lg font-black text-slate-900 mb-3">{s.name}</h3>
                <p className="text-sm text-slate-600 mb-2"><span className="font-bold text-slate-800">Pattern:</span> {s.pattern}</p>
                <p className="text-sm text-slate-600 mb-2"><span className="font-bold text-slate-800">Best for:</span> {s.use}</p>
                <p className="text-xs text-slate-500 mb-4">Segment: {s.segment}</p>
                <Link to={s.url} className="text-emerald-700 underline text-sm font-semibold hover:text-emerald-900">View product →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UV-VISIBLE EXPLAINER */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-6">UV-Visible vs Visible-Marker Patterns</h2>
          <p className="text-lg text-slate-700 mb-4">Some bird safety products rely on UV-reflective ink that is visible to birds but nearly invisible to humans. The approach works in theory — most bird species see into the near-ultraviolet range — but UV-only markers degrade faster in Arizona UV, are not visible to all species, and do not meet the most current ABC tested-product criteria.</p>
          <p className="text-lg text-slate-700 mb-4">Solyx bird-safe patterns use visible markers — frosted dots, lines, trellis geometry, or illustrated artwork — installed on the interior surface. Visible markers are species-agnostic, last the life of the film, and are what current LEED Pilot Credit 55 guidance actually rewards.</p>
          <p className="text-lg text-slate-700">For sensitive-design projects where the client still wants a "disappearing" pattern, BSFD frosted dots or BSFAC-02 frosted vines read as decorative from normal viewing distance while remaining dense enough to deter strikes.</p>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-8 text-center">Where We Install Bird Safety Film</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-black text-slate-900 mb-3">Commercial</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Storefronts, lobbies, and curtain-wall glazing</li>
                <li>• Corporate campuses pursuing LEED Pilot Credit 55</li>
                <li>• Municipal buildings subject to bird-safe ordinances</li>
                <li>• Schools, universities, and research facilities</li>
                <li>• Museums, nature centers, and visitor centers</li>
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-black text-slate-900 mb-3">Residential</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Large picture windows and sliding glass doors</li>
                <li>• Glass sunrooms and atrium glazing</li>
                <li>• Hillside homes with heavy reflective-glass exposure</li>
                <li>• Homes adjacent to washes, golf courses, native habitat</li>
                <li>• Second-home retrofits after confirmed strike incidents</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6">Related Film Categories</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/films/specialty-films/bird-safety" className="block bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-lg p-5">
              <p className="font-bold text-slate-900">Bird Safety Category Hub</p>
              <p className="text-sm text-slate-600">Full Solyx bird-safe category page with every SKU in stock.</p>
            </Link>
            <Link to="/films/frosted-etched-films" className="block bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-lg p-5">
              <p className="font-bold text-slate-900">Frosted & Etched Films</p>
              <p className="text-sm text-slate-600">BSFD dots, BSFAC-02 frosted vines, and the full frosted catalog.</p>
            </Link>
            <Link to="/films/specialty-films" className="block bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-lg p-5">
              <p className="font-bold text-slate-900">Specialty Films</p>
              <p className="text-sm text-slate-600">Decorative bird patterns — vertical, horizontal, trellis, chips.</p>
            </Link>
            <Link to="/films/colored-films" className="block bg-slate-50 hover:bg-emerald-50 border border-slate-200 rounded-lg p-5">
              <p className="font-bold text-slate-900">Colored Films</p>
              <p className="text-sm text-slate-600">Ashley Cecil full-color illustrated bird-safety series.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center text-slate-900 uppercase tracking-tight mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg bg-white">
                <summary className="cursor-pointer px-6 py-4 font-bold text-slate-900 flex items-center justify-between">
                  {faq.name}
                  <span className="text-emerald-500 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-emerald-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Ready to Spec Bird Safe Film for Your Project?</h2>
          <p className="text-gray-200 mb-6">We'll match the SKU to your building type, confirm pattern spacing against the current ABC/FLAP guidance, and supply LEED documentation where required.</p>
          <Link to="/get-a-quote" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-black uppercase px-10 py-4 rounded-lg text-lg">Request a Quote →</Link>
          <p className="text-gray-400 text-xs mt-4">Licensed ROC #314088 · Arizona-wide · Commercial + residential</p>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}
