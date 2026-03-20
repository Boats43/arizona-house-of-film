import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '../../components/SEO/BreadcrumbSchema';
import { Link } from 'react-router-dom';
import EstimatorCTA from '../../components/EstimatorCTA';

export default function ShatterproofWindowFilm() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does shatterproof window film make glass unbreakable?",
        "acceptedAnswer": { "@type": "Answer", "text": "No. Shatterproof window film holds glass fragments in place when the glass breaks — it does not prevent breakage. A 4 mil film holds fragments on minor impact. A 12 mil film resists forced entry for several minutes. A 21 mil blast-rated film is specified for government facilities. The glass cracks but stays in the frame, maintaining a barrier." }
      },
      {
        "@type": "Question",
        "name": "What thickness shatterproof film do I need?",
        "acceptedAnswer": { "@type": "Answer", "text": "For residential entry points and doors, 4–8 mil is standard. For commercial storefronts and smash-and-grab prevention, 8–12 mil is recommended. For government, institutional, or blast mitigation applications, 12–21 mil is specified. Arizona House of Film assesses your glass and recommends the right specification. Licensed ROC #314088." }
      },
      {
        "@type": "Question",
        "name": "How much does shatterproof window film cost in Phoenix?",
        "acceptedAnswer": { "@type": "Answer", "text": "Shatterproof window film installation in Phoenix runs $10–$45 per square foot installed depending on film thickness and glass access. Residential entry points average $400–$900. Commercial storefronts average $800–$2,400. Free on-site estimates — call (480) 788-1591. Licensed ROC #314088." }
      },
      {
        "@type": "Question",
        "name": "Can shatterproof film be applied to existing windows?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Shatterproof window film is applied directly to existing glass — no replacement required. It works on single pane, dual pane, tempered, and laminated glass. Most installations are completed in one visit. Free on-site assessment available throughout Phoenix, Scottsdale, and the Arizona metro. Licensed ROC #314088." }
      },
      {
        "@type": "Question",
        "name": "Is shatterproof film the same as security film?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — shatterproof window film and security window film refer to the same product category. Safety film, impact film, and blast film are also common names for the same product family. The key specification is thickness — measured in mils. Arizona House of Film installs 4 mil through 21 mil security film. ROC #314088." }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Shatterproof Window Film Phoenix AZ | Safety Film | ROC #314088</title>
        <meta name="description" content="Shatterproof window film for homes and businesses in Phoenix AZ. 4–21 mil safety film holds glass fragments on impact — stops smash-and-grab, protects against break-ins. ROC #314088. Free estimates." />
        <link rel="canonical" href="https://arizonahouseoffilm.com/shatterproof-window-film" />
        <meta property="og:title" content="Shatterproof Window Film Phoenix AZ | Safety Film | ROC #314088" />
        <meta property="og:description" content="Shatterproof window film for homes and businesses in Phoenix AZ. 4–21 mil safety film holds glass fragments on impact. ROC #314088." />
        <meta property="og:url" content="https://arizonahouseoffilm.com/shatterproof-window-film" />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shatterproof Window Film Phoenix AZ | Safety Film | ROC #314088" />
        <meta name="twitter:description" content="Shatterproof window film for homes and businesses in Phoenix AZ. 4–21 mil safety film holds glass fragments on impact. ROC #314088." />
        <meta name="twitter:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://arizonahouseoffilm.com/' },
        { name: 'Security Window Film Phoenix', url: 'https://arizonahouseoffilm.com/security-window-film-phoenix' },
        { name: 'Shatterproof Window Film', url: 'https://arizonahouseoffilm.com/shatterproof-window-film' }
      ]} />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">Shatterproof Window Film — Safety Film for Glass</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">What "Shatterproof" Actually Means</h2>
          <p className="text-lg text-slate-700 mb-4">Window film doesn't make glass unbreakable. What it does is hold the fragments in place when glass breaks — from impact, attempted break-in, storm debris, or accidents. The glass cracks but stays in the frame, bonded to the film. That's what "shatterproof" means in practice.</p>
          <p className="text-lg text-slate-700">A <strong>4 mil</strong> film holds glass fragments. A <strong>12 mil</strong> film resists forced entry for several minutes. A <strong>21 mil</strong> blast-rated film is specified for government and institutional facilities.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Film Thickness Guide</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-300 text-left">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-3 font-black uppercase text-sm">Thickness</th>
                  <th className="border border-slate-300 px-4 py-3 font-black uppercase text-sm">Protection Level</th>
                  <th className="border border-slate-300 px-4 py-3 font-black uppercase text-sm">Application</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr><td className="border border-slate-300 px-4 py-3 font-semibold">4 mil</td><td className="border border-slate-300 px-4 py-3">Entry-level safety. Holds glass fragments on minor impact.</td><td className="border border-slate-300 px-4 py-3">Residential doors and windows.</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-3 font-semibold">8 mil</td><td className="border border-slate-300 px-4 py-3">Mid-grade safety. Resists smash-and-grab.</td><td className="border border-slate-300 px-4 py-3">Retail storefronts and residential entry points.</td></tr>
                <tr><td className="border border-slate-300 px-4 py-3 font-semibold">12 mil</td><td className="border border-slate-300 px-4 py-3">Heavy-duty safety. Delays forced entry 2–4 minutes.</td><td className="border border-slate-300 px-4 py-3">Commercial and high-value residential.</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-300 px-4 py-3 font-semibold">21 mil</td><td className="border border-slate-300 px-4 py-3">Blast mitigation grade.</td><td className="border border-slate-300 px-4 py-3">Government, institutional, and high-security facilities.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Where Shatterproof Window Film Is Used</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-black uppercase text-lg mb-3">Residential</h3>
              <ul className="space-y-2 text-slate-700">
                <li>Entry doors</li>
                <li>Sidelight windows</li>
                <li>Ground-floor windows</li>
                <li>Sliding glass doors</li>
                <li>Patio doors</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-black uppercase text-lg mb-3">Commercial</h3>
              <ul className="space-y-2 text-slate-700">
                <li>Storefronts</li>
                <li>Retail display windows</li>
                <li>Glass entry doors</li>
                <li>Lobby glass</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-black uppercase text-lg mb-3">Government / Institutional</h3>
              <ul className="space-y-2 text-slate-700">
                <li><Link to="/window-film-for-schools-arizona" className="text-blue-700 underline">Schools</Link></li>
                <li>Courthouses</li>
                <li>Medical facilities</li>
                <li>Military installations</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Shatterproof Film vs Tempered Glass</h2>
          <p className="text-lg text-slate-700 mb-4">Tempered glass shatters into small pieces on impact — designed to reduce injury but still allows immediate breach. Shatterproof film holds the glass in the frame, maintaining a barrier even after impact. Film can be applied to existing glass at a fraction of replacement cost. Most Arizona commercial and residential glass is not tempered — shatterproof film is the practical solution.</p>
          <p className="text-lg">
            <Link to="/security-film-vs-tempered-glass" className="text-blue-700 underline font-semibold">Read full comparison: Security Film vs Tempered Glass →</Link>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Shatterproof Window Film Cost — Phoenix</h2>
          <p className="text-lg text-slate-700 mb-4">Shatterproof window film installation in Phoenix runs <strong>$10–$45 per square foot</strong> installed depending on film thickness and glass access. Residential entry points average <strong>$400–$900</strong>. Commercial storefronts average <strong>$800–$2,400</strong>. Government and institutional projects are custom-quoted. All projects include free on-site assessment. Licensed ROC #314088.</p>
          <EstimatorCTA />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Get a Shatterproof Film Quote</h2>
          <p className="text-lg text-slate-700 mb-6">Free on-site assessment. We identify the right film thickness for your glass, exposure, and security requirement — then provide a documented quote. ROC #314088. Response within one business day.</p>
          <Link to="/contact" className="inline-block bg-blue-900 text-white font-black uppercase tracking-tight px-8 py-4 rounded hover:bg-blue-800 transition-colors text-lg">Request Free Estimate →</Link>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Related</h2>
          <ul className="space-y-2 text-lg">
            <li><Link to="/security-window-film-phoenix" className="text-blue-700 underline">Security Window Film Phoenix</Link></li>
            <li><Link to="/films/security-films" className="text-blue-700 underline">Security Film Products</Link></li>
            <li><Link to="/security-film-vs-tempered-glass" className="text-blue-700 underline">Security Film vs Tempered Glass</Link></li>
            <li><Link to="/window-film-for-schools-arizona" className="text-blue-700 underline">Window Film for Schools</Link></li>
            <li><Link to="/contact" className="text-blue-700 underline">Contact Us</Link></li>
          </ul>
        </section>
      </main>
    </>
  );
}
