import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '../../components/SEO/BreadcrumbSchema';
import { Link } from 'react-router-dom';

export default function HighRiseCommercialWindowTintingPhoenix() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you install window film on high-rise buildings in Phoenix?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Arizona House of Film installs solar control, security, and blast mitigation window film on multi-story and high-rise commercial buildings in Phoenix and Scottsdale. We coordinate with building management for phased installations. Licensed ROC #314088." }
      },
      {
        "@type": "Question",
        "name": "What is blast mitigation window film?",
        "acceptedAnswer": { "@type": "Answer", "text": "Blast mitigation film is heavy-gauge security film (typically 3M S140 or S600) installed with wet-glaze anchoring that bonds the film to the window frame. In an explosive event, the film holds shattered glass fragments in place, significantly reducing secondary fragmentation injury. Specified for government buildings, federal facilities, and critical infrastructure." }
      },
      {
        "@type": "Question",
        "name": "Does high-rise window film qualify for energy rebates in Arizona?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Qualifying commercial films installed on high-rise buildings can qualify for SRP Business Solutions and APS energy efficiency rebate programs. We provide NFRC-certified documentation required for rebate applications." }
      },
      {
        "@type": "Question",
        "name": "How is high-rise window film installation different from standard commercial?",
        "acceptedAnswer": { "@type": "Answer", "text": "High-rise installation requires scaffold or lift access coordination, building management scheduling, consistent film specification across multiple elevations, and phased installation planning. We handle all coordination and provide full NFRC documentation packages for building owners and property managers." }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>High-Rise Commercial Window Tinting Phoenix | Multi-Story Buildings | ROC #314088</title>
        <meta name="description" content="High-rise and multi-story commercial window tinting in Phoenix. Security film, blast mitigation, solar control for government and commercial buildings. ROC #314088." />
        <link rel="canonical" href="https://arizonahouseoffilm.com/high-rise-commercial-window-tinting-phoenix" />
        <meta property="og:title" content="High-Rise Commercial Window Tinting Phoenix | Multi-Story Buildings" />
        <meta property="og:description" content="Solar control, security film, and blast mitigation for Phoenix high-rise and government buildings. Licensed ROC #314088. Free commercial assessment." />
        <meta property="og:url" content="https://arizonahouseoffilm.com/high-rise-commercial-window-tinting-phoenix" />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="High-Rise Commercial Window Tinting Phoenix | Multi-Story Buildings" />
        <meta name="twitter:description" content="Solar control, security film, and blast mitigation for Phoenix high-rise and government buildings. Licensed ROC #314088. Free commercial assessment." />
        <meta name="twitter:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://arizonahouseoffilm.com/' },
        { name: 'Commercial Window Tinting', url: 'https://arizonahouseoffilm.com/commercial-window-tinting' },
        { name: 'High-Rise Commercial Phoenix', url: 'https://arizonahouseoffilm.com/high-rise-commercial-window-tinting-phoenix' }
      ]} />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">High-Rise Commercial Window Tinting in Phoenix — Multi-Story & Government Buildings</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">High-Rise Window Tinting Challenges in Phoenix</h2>
          <p className="text-lg text-slate-700 mb-4">Multi-story buildings face unique installation challenges — scaffold access, consistent SHGC specification across hundreds of units, wind load at elevation, and building management coordination. Arizona House of Film coordinates with building management and general contractors for phased high-rise installations across the Phoenix metro.</p>
          <p className="text-lg text-slate-700">Licensed ROC #314088, bonded, and insured. Call <a href="tel:4807881591" className="text-blue-600 hover:underline">(480) 788-1591</a> for a free commercial assessment.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Solar Control for Commercial High-Rises</h2>
          <p className="text-lg text-slate-700 mb-4">Large glass facades on Phoenix high-rises generate extreme heat loads. Spectrally selective films — Solar Gard Panorama, LLumar commercial series — provide aggressive SHGC reduction while maintaining natural light and exterior appearance. NFRC-certified documentation provided for energy code compliance.</p>
          <p className="text-lg text-slate-700">Qualifying films meet SRP Business Solutions and APS energy efficiency rebate requirements. We identify rebate-eligible specifications during your free commercial assessment.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Security and Blast Mitigation Film for Government Buildings</h2>
          <p className="text-lg text-slate-700 mb-4">Government facilities, federal buildings, and critical infrastructure require blast-resistant window film specifications. We install 3M Safety Series S40, S70, S140, and S600 films with wet-glaze anchoring systems. Blast retention film holds shattered glass in place during explosive events, reducing injury from secondary fragmentation.</p>
          <p className="text-lg text-slate-700">Documented installations for City of Phoenix facilities and State of Arizona properties.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Multi-Story Installation Process</h2>
          <p className="text-lg text-slate-700 mb-4">High-rise window film installation requires coordination beyond a standard residential or single-story commercial project. Our process:</p>
          <ol className="list-decimal pl-6 text-lg text-slate-700 space-y-2">
            <li>Building management coordination and scheduling</li>
            <li>Glass type and condition assessment across all elevations</li>
            <li>Film specification for consistent SHGC and VLT across the facade</li>
            <li>Phased installation to minimize business disruption</li>
            <li>NFRC documentation for rebate and compliance submission</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Films We Specify for High-Rise Phoenix Buildings</h2>
          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-2">
            <li><strong>Solar Gard Quantum</strong> — nano-ceramic for glass-heavy facades</li>
            <li><strong>LLumar commercial spectrally selective</strong> — for SHGC compliance</li>
            <li><strong>3M Safety Series</strong> — for government and blast mitigation</li>
            <li><strong>Huper Optik Dual Reflective</strong> — for privacy + maximum heat rejection on west elevations</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Cost — Commercial High-Rise Window Film</h2>
          <p className="text-lg text-slate-700 mb-4">High-rise and multi-story commercial window film projects are quoted by scope, square footage, and access requirements. Projects typically range from $15,000 for mid-rise buildings to $100,000+ for large commercial towers.</p>
          <p className="text-lg text-slate-700">We provide free commercial assessments with NFRC documentation. Call <a href="tel:4807881591" className="text-blue-600 hover:underline">(480) 788-1591</a>.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-6">Frequently Asked Questions</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <div key={i} className="mb-6 border-b border-slate-200 pb-6">
              <h3 className="text-lg font-bold mb-2">{faq.name}</h3>
              <p className="text-slate-700">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </section>

        <section className="bg-slate-100 p-8 rounded-lg">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Free Commercial Assessment</h2>
          <p className="text-lg text-slate-700 mb-4">Arizona House of Film — licensed ROC #314088. High-rise and multi-story commercial window film for Phoenix metro buildings. Free on-site assessment with NFRC documentation.</p>
          <p className="text-lg font-bold mb-4">Call <a href="tel:4807881591" className="text-blue-600 hover:underline">(480) 788-1591</a> or <Link to="/contact" className="text-blue-600 hover:underline">request a commercial assessment online</Link>.</p>
        </section>
      </main>
    </>
  );
}
