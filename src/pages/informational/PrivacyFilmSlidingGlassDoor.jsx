import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import ContactFormSection from '@/components/contact/ContactFormSection';

const pageTitle = 'Privacy Film for Sliding Glass Doors Phoenix AZ | ROC #314088';
const metaDescription = "Window film for sliding glass doors in Phoenix — frosted, one-way, solar control, and decorative options. Licensed installer ROC #314088. Free estimate.";
const canonicalUrl = 'https://arizonahouseoffilm.com/privacy-film-sliding-glass-door';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you put window film on sliding glass doors?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Window film is one of the most popular applications for sliding glass doors in Arizona. The film is applied to the interior surface of the glass and does not interfere with the sliding mechanism. Standard sliding doors have 35-45 square feet of glass area. Arizona House of Film installs frosted, solar, decorative, security, and one-way film on sliding glass doors throughout the Phoenix metro.' },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to tint a sliding glass door?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sliding glass door window film typically costs $350-900 for a standard 35-45 sqft slider in Arizona. Budget solar film runs $350-500. Premium ceramic film runs $500-700. Frosted decorative film runs $400-800. Security film runs $500-900. Pricing includes professional installation, edge trimming, and cleanup. French pane sliding doors cost more due to individual pane cutting.' },
    },
    {
      '@type': 'Question',
      name: 'Does window film affect the sliding door mechanism?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Window film is applied to the interior glass surface only — it does not touch the frame, track, rollers, or any moving parts. The film adds less than 0.5mm of thickness to the glass surface. Arizona House of Film trims the film with a 1-2mm gap at the edges to ensure zero interference with the door seal and frame. The sliding mechanism operates identically after installation.' },
    },
    {
      '@type': 'Question',
      name: 'What is the best privacy film for sliding glass doors?',
      acceptedAnswer: { '@type': 'Answer', text: 'For 24/7 privacy, frosted film is the best choice — it works day and night and allows natural light. For daytime-only privacy with clear views, dual-reflective or one-way mirror film is effective but reverses at night. For partial privacy with maintained views, gradient film (frosted at bottom, clear at top) provides the best balance. For heat and privacy combined, ceramic film with a light tint provides both solar control and reduced interior visibility.' },
    },
    {
      '@type': 'Question',
      name: 'Is sliding door film HOA-approved in Arizona?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most Arizona HOAs allow window film on sliding glass doors as long as the exterior appearance remains neutral and non-reflective. Frosted, ceramic, and lightly tinted films are typically approved because they do not alter the exterior appearance significantly. Highly reflective mirror films may require HOA approval. Arizona House of Film helps homeowners select HOA-compliant film options and can provide product documentation for HOA submissions.' },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Sliding Glass Door Privacy Film Installation',
  description: metaDescription,
  provider: { '@type': 'LocalBusiness', name: 'Arizona House of Film', telephone: '+1-480-788-1591', address: { '@type': 'PostalAddress', streetAddress: '7007 W Flower St', addressLocality: 'Phoenix', addressRegion: 'AZ', postalCode: '85033' } },
  areaServed: { '@type': 'State', name: 'Arizona' },
};

const filmOptions = [
  {
    title: 'Frosted / Etched Film',
    desc: 'Consistent 24/7 privacy that diffuses light without blocking it. Available in simple frost, patterns, etched glass effects, and gradient styles. The most popular choice for sliding doors facing neighbors, pools, and streets.',
    price: '$400-800',
    bestFor: 'Bathrooms, bedrooms, pool-facing doors',
    privacy: 'Day & night',
    link: '/decorative-window-films',
    linkText: 'Browse frosted films',
  },
  {
    title: 'One-Way / Dual-Reflective Film',
    desc: 'Mirror-like exterior during the day provides privacy while maintaining clear outward views from inside. Excellent heat rejection. Reverses at night — interior becomes visible when lights are on and it is dark outside.',
    price: '$350-600',
    bestFor: 'Living rooms, dens, daytime entertaining',
    privacy: 'Daytime only',
    link: '/one-way-mirror-window-film',
    linkText: 'Learn about one-way film',
  },
  {
    title: 'Ceramic Solar Film',
    desc: 'Premium heat rejection (up to 84% infrared blocked) with a light neutral tint that reduces interior visibility from outside. Not full privacy — but significantly reduces how clearly outsiders can see in while maintaining your views.',
    price: '$500-700',
    bestFor: 'West-facing sliders, hot rooms, energy savings',
    privacy: 'Partial (reduced visibility)',
    link: '/residential-window-tinting',
    linkText: 'Residential window tinting',
  },
  {
    title: 'Gradient Film',
    desc: 'Frosted on the bottom portion, gradually transitioning to clear at the top. Provides privacy at eye level while preserving sky views and natural light through the upper portion. Popular for modern and minimalist aesthetics.',
    price: '$450-750',
    bestFor: 'Street-facing doors, modern homes, partial privacy',
    privacy: 'Day & night (lower portion)',
    link: '/films/gradient-films',
    linkText: 'View gradient films',
  },
  {
    title: 'Security Film',
    desc: 'Thick polyester film (4-14 mil) that holds glass together on impact. Does not provide visual privacy but prevents break-in through sliding glass — the most common residential entry point for burglars in Arizona.',
    price: '$500-900',
    bestFor: 'Ground-floor sliders, security-conscious homes',
    privacy: 'None (clear)',
    link: '/safety',
    linkText: 'Security film details',
  },
  {
    title: 'Decorative Pattern Film',
    desc: 'Hundreds of patterns — geometric, botanical, stained glass, rice paper, stripes. Privacy through visual complexity rather than opacity. Light still passes through. Available in 618+ Solyx SKUs.',
    price: '$450-800',
    bestFor: 'Design-focused homes, entryways, pool areas',
    privacy: 'Day & night (varies by pattern)',
    link: '/store',
    linkText: 'Browse 618 patterns',
  },
];

const considerations = [
  { title: 'Sliding Mechanism Clearance', text: 'Film is trimmed with a 1-2mm gap at all edges to ensure zero contact with the door frame, seal, and track. The sliding mechanism operates identically after installation. No modifications to the door are needed.' },
  { title: 'Dual-Pane Glass Assessment', text: 'Most modern sliding glass doors have dual-pane (insulated) glass. Arizona House of Film assesses your specific glass type to ensure the selected film will not cause thermal stress. We carry films rated safe for dual-pane installations in Arizona conditions.' },
  { title: 'HOA Compliance', text: 'Frosted, ceramic, and lightly tinted films maintain a neutral exterior appearance and are typically HOA-approved. Highly reflective or dark mirror films may require HOA submission. We provide product documentation for HOA approval processes.' },
  { title: 'French Pane Sliding Doors', text: 'Sliding doors with divided lites (French pane style) require individual cutting for each pane. This adds labor and a surcharge of approximately 25-40% over standard slider pricing. Our AI estimator detects French pane doors automatically from photos.' },
  { title: 'UV Protection', text: 'All film types — frosted, solar, decorative, security — block 99%+ of UV radiation through the sliding door. This prevents fading of flooring, furniture, and artwork near the door. UV damage is the primary cause of hardwood and carpet fading near Arizona sliding doors.' },
];

export default function PrivacyFilmSlidingGlassDoor() {
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
      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://arizonahouseoffilm.com/' }, { name: 'Privacy Film for Sliding Glass Doors', url: canonicalUrl }]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">Privacy Film for Sliding Glass Doors — Phoenix AZ</h1>
          <p className="text-xl text-blue-300 font-bold mb-4">Frosted, One-Way, Solar, Decorative — We Install All Types</p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">Sliding glass doors are the largest single pane of glass in most Arizona homes — and the biggest privacy and heat gain problem. Window film solves both without replacing the door or blocking the view.</p>
          <Link to="/ai-window-film-estimator" className="inline-block bg-green-500 hover:bg-green-400 text-white font-black uppercase tracking-wide px-10 py-4 rounded-lg text-lg transition-colors shadow-lg">Get Sliding Door Estimate →</Link>
          <p className="text-gray-400 text-sm mt-4">Standard sliding door: ~35-45 sqft | $350-900 installed</p>
        </div>
      </section>

      {/* FILM OPTIONS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-4 text-center">Film Options for Sliding Glass Doors</h2>
          <p className="text-center text-gray-600 mb-12">Six film categories — each solves a different sliding door problem.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {filmOptions.map((opt) => (
              <div key={opt.title} className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-slate-900 text-white px-6 py-4">
                  <h3 className="font-black text-lg">{opt.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-sm text-slate-700 mb-4 leading-relaxed">{opt.desc}</p>
                  <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                    <div><span className="font-bold text-slate-800">Price:</span> <span className="text-green-700 font-bold">{opt.price}</span></div>
                    <div><span className="font-bold text-slate-800">Privacy:</span> <span className="text-slate-600">{opt.privacy}</span></div>
                  </div>
                  <p className="text-xs text-slate-500 mb-3">Best for: {opt.bestFor}</p>
                  <Link to={opt.link} className="text-blue-700 underline text-sm font-semibold hover:text-blue-900">{opt.linkText} →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEASUREMENT */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-6">Sliding Door Sizing & Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
              <p className="text-3xl font-black text-blue-700">35-45 sqft</p>
              <p className="font-bold text-slate-800 mt-1">Standard Slider</p>
              <p className="text-xs text-slate-500 mt-1">6ft or 8ft wide, single panel</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
              <p className="text-3xl font-black text-blue-700">50-70 sqft</p>
              <p className="font-bold text-slate-800 mt-1">Multi-Panel Slider</p>
              <p className="text-xs text-slate-500 mt-1">10-12ft wide, 2-3 panels</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
              <p className="text-3xl font-black text-blue-700">15-25 sqft</p>
              <p className="font-bold text-slate-800 mt-1">French Pane Slider</p>
              <p className="text-xs text-slate-500 mt-1">Divided lites — surcharge applies</p>
            </div>
          </div>
          <p className="text-slate-700 mb-4">Most sliding door installations complete in <strong>1-2 hours</strong> per door. We measure precisely on-site to account for frame insets, handle hardware, and any manufacturer markings on the glass. Our $500 minimum covers a single standard slider with budget solar film.</p>
          <p className="text-slate-700">Want an instant ballpark? <Link to="/ai-window-film-estimator" className="text-blue-700 underline hover:text-blue-900">Upload a photo of your sliding door</Link> and our AI will estimate square footage and recommend film options with pricing.</p>
        </div>
      </section>

      {/* SPECIAL CONSIDERATIONS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-8">Installation Considerations</h2>
          <div className="space-y-6">
            {considerations.map((c) => (
              <div key={c.title} className="border-l-4 border-blue-500 pl-6">
                <h3 className="font-black text-lg text-slate-900 mb-2">{c.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-blue-700 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Ready to Film Your Sliding Door?</h2>
          <p className="text-blue-100 mb-6">Upload a photo for an instant AI estimate — or call for a free on-site measurement.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/ai-window-film-estimator" className="bg-white text-blue-700 font-black uppercase px-8 py-4 rounded-lg text-lg hover:bg-blue-50 transition-colors">Try AI Estimator →</Link>
            <a href="tel:4807881591" className="border-2 border-white text-white font-black uppercase px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-blue-700 transition-colors">(480) 788-1591</a>
          </div>
          <p className="text-blue-300 text-xs mt-4">Licensed ROC #314088 | 713+ Projects | U.S. Navy Veteran Owned</p>
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
                  <span className="text-blue-500 group-open:rotate-45 transition-transform text-xl">+</span>
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
