import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '../../components/SEO/BreadcrumbSchema';
import { Link } from 'react-router-dom';

export default function SecurityFilmVsTemperedGlass() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is security film as effective as tempered glass?",
        "acceptedAnswer": { "@type": "Answer", "text": "For forced entry deterrence, security film often outperforms tempered glass. Tempered glass shatters into small pieces on impact — security film holds shattered glass in place, maintaining a barrier and slowing forced entry by 45–90 seconds. For blast retention, security film with wet-glaze anchoring is the preferred specification." }
      },
      {
        "@type": "Question",
        "name": "How much does security window film cost vs replacing glass?",
        "acceptedAnswer": { "@type": "Answer", "text": "Security film runs $15–$22 per sq ft installed — significantly less than tempered glass replacement at $50–$150+ per sq ft. For retrofitting existing windows on commercial properties, security film delivers better ROI." }
      },
      {
        "@type": "Question",
        "name": "Can security film be added to existing windows in Arizona?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — that's the primary advantage. Security film retrofits to existing glass without removing or replacing window frames. We assess your current glass, specify the correct mil thickness, and install with optional C-Bond nano-technology primer for maximum adhesion in Arizona's extreme heat." }
      },
      {
        "@type": "Question",
        "name": "What mil thickness security film do you recommend for Arizona?",
        "acceptedAnswer": { "@type": "Answer", "text": "For commercial smash-and-grab deterrence, 8-mil film is the standard specification. For high-security applications — dispensaries, schools, government buildings — we specify 12-mil film with Dow 995 wet-glaze anchoring. We assess your threat profile and recommend the appropriate specification during your free security consultation." }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Security Film vs Tempered Glass Arizona | Cost & Protection Comparison</title>
        <meta name="description" content="Security window film vs tempered glass — cost, protection, and retrofit options for Phoenix homes and businesses. Licensed installer ROC #314088." />
        <link rel="canonical" href="https://arizonahouseoffilm.com/security-film-vs-tempered-glass" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://arizonahouseoffilm.com/' },
        { name: 'Security Film vs Tempered Glass', url: 'https://arizonahouseoffilm.com/security-film-vs-tempered-glass' }
      ]} />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">Security Film vs Tempered Glass — Which Is Right for Your Arizona Property?</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">What Is Security Window Film?</h2>
          <p className="text-lg text-slate-700 mb-4">Security window film is a thick polyester laminate — typically <strong>8 to 12 mil</strong> — applied to existing glass. When glass breaks, the film holds the shattered pieces in place, maintaining a physical barrier against forced entry. Optional C-Bond nano-technology primer increases adhesion strength, and wet-glaze anchoring (Dow 995 structural silicone) bonds the film directly to the window frame for maximum security.</p>
          <p className="text-lg text-slate-700">Security film is a retrofit solution — it installs on your existing glass without replacement.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">What Is Tempered Glass?</h2>
          <p className="text-lg text-slate-700 mb-4">Tempered glass is heat-treated to be 4–5× stronger than standard annealed glass. When it breaks, it shatters into small, relatively safe pieces rather than sharp shards. However, once broken, tempered glass <strong>does not maintain a barrier</strong> — it falls away from the frame, leaving an open entry point.</p>
          <p className="text-lg text-slate-700">Replacing existing glass with tempered glass requires removing the entire window unit — significantly more expensive and disruptive than film installation.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Cost Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-300 text-left">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-3 font-black uppercase text-sm">Option</th>
                  <th className="border border-slate-300 px-4 py-3 font-black uppercase text-sm">Cost per Sq Ft</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr><td className="border border-slate-300 px-4 py-3">Security Film (8–12 mil)</td><td className="border border-slate-300 px-4 py-3">$15–$22 installed</td></tr>
                <tr><td className="border border-slate-300 px-4 py-3">Tempered Glass Replacement</td><td className="border border-slate-300 px-4 py-3">$50–$150+ installed</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Protection Comparison</h2>
          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-2">
            <li><strong>Security film</strong> — holds shattered glass together, maintains barrier, slows forced entry by 45–90 seconds, blast retention capable with wet-glaze anchoring</li>
            <li><strong>Tempered glass</strong> — breaks safely into small pieces but does not retain in frame, leaving an open entry point after impact</li>
          </ul>
          <p className="text-lg text-slate-700 mt-4">For forced entry deterrence and blast mitigation, security film with wet-glaze anchoring is the preferred specification.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">When to Choose Security Film</h2>
          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-2">
            <li>Retrofitting existing glass without full window replacement</li>
            <li>Budget-conscious security upgrades ($15–$22/sq ft vs $50–$150+)</li>
            <li>Schools and educational facilities requiring active shooter protection</li>
            <li>Dispensaries and high-value retail needing smash-and-grab deterrence</li>
            <li>Government and military facilities requiring blast mitigation</li>
            <li>Commercial properties needing combined security + solar benefits</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">When to Choose Tempered Glass</h2>
          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-2">
            <li>New construction where building code requires tempered glass</li>
            <li>Shower enclosures, glass doors, and other code-mandated locations</li>
            <li>When the existing glass is damaged and needs full replacement regardless</li>
          </ul>
        </section>

        <section className="bg-slate-100 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Free Security Consultation</h2>
          <p className="text-lg text-slate-700 mb-4">We assess your property's glass, threat profile, and budget to recommend the right security specification. Licensed ROC #314088.</p>
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
