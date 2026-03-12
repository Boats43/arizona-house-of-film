import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '../../components/SEO/BreadcrumbSchema';
import { Link } from 'react-router-dom';

export default function HowLongDoesWindowFilmLast() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does window film last in Arizona's heat?",
        "acceptedAnswer": { "@type": "Answer", "text": "Quality ceramic window film lasts 15–25 years in Arizona conditions. Spectrally selective films last 15–20 years. Carbon films 10–15 years. Standard dyed films typically fail in 5–7 years in Arizona's extreme UV and heat — they purple, bubble, and peel significantly faster than in northern climates." }
      },
      {
        "@type": "Question",
        "name": "Why does window film fail faster in Arizona?",
        "acceptedAnswer": { "@type": "Answer", "text": "Arizona's combination of 115°F ambient temperatures, UV index 11 (extreme), and daily thermal cycling puts extreme stress on window film adhesive. Low-quality or incorrectly specified films can fail in 2–3 years. Professional installation with the correct film for your glass type is critical." }
      },
      {
        "@type": "Question",
        "name": "How do I know if my window film is failing?",
        "acceptedAnswer": { "@type": "Answer", "text": "Four signs: (1) bubbling between film and glass, (2) purple or brown color shift on previously clear or gray film, (3) peeling at edges or corners, (4) hazy or milky appearance. Any of these indicate adhesive failure — the film should be removed and replaced with a higher-specification product." }
      },
      {
        "@type": "Question",
        "name": "Does professional installation affect how long window film lasts?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — significantly. Professional installation includes glass surface preparation, contamination removal, proper squeegee technique to eliminate moisture pockets, and dual-pane thermal assessment. Improper installation is the #1 cause of premature film failure in Arizona, regardless of film quality." }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>How Long Does Window Film Last in Arizona? | Lifespan by Film Type</title>
        <meta name="description" content="Window film lifespan in Arizona — ceramic lasts 15–25 years, dyed 5–7 years. Heat, UV, and installation quality all affect durability. ROC #314088." />
        <link rel="canonical" href="https://arizonahouseoffilm.com/how-long-does-window-film-last" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://arizonahouseoffilm.com/' },
        { name: 'How Long Does Window Film Last', url: 'https://arizonahouseoffilm.com/how-long-does-window-film-last' }
      ]} />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">How Long Does Window Film Last in Arizona?</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Window Film Lifespan by Type</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-300 text-left">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-3 font-black uppercase text-sm">Film Type</th>
                  <th className="border border-slate-300 px-4 py-3 font-black uppercase text-sm">Arizona Lifespan</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr><td className="border border-slate-300 px-4 py-3">Ceramic</td><td className="border border-slate-300 px-4 py-3">15–25 years</td></tr>
                <tr><td className="border border-slate-300 px-4 py-3">Spectrally Selective</td><td className="border border-slate-300 px-4 py-3">15–20 years</td></tr>
                <tr><td className="border border-slate-300 px-4 py-3">Security (8–12 mil)</td><td className="border border-slate-300 px-4 py-3">12–20 years</td></tr>
                <tr><td className="border border-slate-300 px-4 py-3">Carbon</td><td className="border border-slate-300 px-4 py-3">10–15 years</td></tr>
                <tr><td className="border border-slate-300 px-4 py-3">Dyed</td><td className="border border-slate-300 px-4 py-3">5–7 years</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Why Arizona Is Harder on Window Film</h2>
          <p className="text-lg text-slate-700 mb-4">Arizona's desert climate creates a uniquely hostile environment for window film. With 115°F ambient temperatures, UV index 11 (classified as "extreme"), and daily thermal cycling that stresses adhesive bonds, films that perform well in northern climates often fail prematurely in Phoenix and Scottsdale.</p>
          <p className="text-lg text-slate-700">The combination of sustained high heat and extreme UV degrades adhesive chemistry faster than any other climate factor. This is why film specification — choosing the right technology for Arizona conditions — is critical.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Signs Your Window Film Is Failing</h2>
          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-2">
            <li><strong>Bubbling</strong> — air or moisture pockets between film and glass indicate adhesive breakdown</li>
            <li><strong>Purple or brown tint</strong> — color shift on previously clear or gray film signals UV-induced dye degradation</li>
            <li><strong>Peeling edges</strong> — adhesive failure starting at corners and edges, progressing inward</li>
            <li><strong>Haziness</strong> — milky or cloudy appearance indicates molecular breakdown of the film substrate</li>
          </ul>
          <p className="text-lg text-slate-700 mt-4">If you notice any of these signs, the film should be professionally removed and replaced with a higher-specification product rated for Arizona conditions.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">What Extends Film Lifespan</h2>
          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-2">
            <li><strong>Professional installation</strong> — proper surface preparation, squeegee technique, and moisture elimination</li>
            <li><strong>Dual-pane assessment</strong> — verifying thermal compatibility prevents heat stress failure</li>
            <li><strong>Quality film specification</strong> — ceramic and spectrally selective films outlast dyed and carbon by 2–3×</li>
            <li><strong>Proper cleaning</strong> — ammonia-free cleaner, soft cloth, no abrasive pads</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Warranty Coverage</h2>
          <p className="text-lg text-slate-700 mb-4">Manufacturer warranties vary by film type and brand. Ceramic films typically carry 15-year to lifetime residential warranties. Commercial warranties are generally 10–15 years. We install only manufacturer-certified films with full warranty documentation and back every installation with our own workmanship guarantee.</p>
        </section>

        <section className="bg-slate-100 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Get Film That Lasts in Arizona</h2>
          <p className="text-lg text-slate-700 mb-4">We install only manufacturer-certified films with full warranty documentation. Free estimates with film samples — see and feel the difference before you commit. Licensed ROC #314088.</p>
          <p className="text-lg font-bold">Call <a href="tel:4807881591" className="text-blue-600 hover:underline">(480) 788-1591</a> or <Link to="/contact" className="text-blue-600 hover:underline">schedule online</Link>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black uppercase tracking-tight mb-6">Frequently Asked Questions</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <div key={i} className="mb-6 border-b border-slate-200 pb-6">
              <h3 className="text-lg font-bold mb-2">{faq.name}</h3>
              <p className="text-slate-700">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
