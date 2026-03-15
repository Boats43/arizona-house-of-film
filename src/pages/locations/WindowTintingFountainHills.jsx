import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '../../components/SEO/BreadcrumbSchema';
import { Link } from 'react-router-dom';

export default function WindowTintingFountainHills() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you install window film in Fountain Hills AZ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Arizona House of Film installs residential and commercial window film in Fountain Hills and the surrounding East Valley. Licensed ROC #314088. Call (480) 788-1591 for a free estimate." }
      },
      {
        "@type": "Question",
        "name": "Is window film HOA-approved in Fountain Hills?",
        "acceptedAnswer": { "@type": "Answer", "text": "Many Fountain Hills HOAs allow ceramic and spectrally selective window film that maintains a natural glass appearance. We review HOA guidelines during your free estimate and specify films that meet exterior appearance requirements." }
      },
      {
        "@type": "Question",
        "name": "What window film is best for Fountain Hills luxury homes?",
        "acceptedAnswer": { "@type": "Answer", "text": "Huper Optik Ceramic and 3M Prestige series are our top specifications for Fountain Hills luxury homes. Both provide up to 84–98% IR rejection while maintaining near-invisible exterior appearance — critical for HOA compliance and view preservation." }
      },
      {
        "@type": "Question",
        "name": "How much does window film cost in Fountain Hills?",
        "acceptedAnswer": { "@type": "Answer", "text": "Residential window film in Fountain Hills runs $13–$18 per square foot for ceramic film. Most homes average $1,500–$4,000 depending on window count and film specification. We provide free on-site estimates." }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Window Tinting Fountain Hills AZ | Licensed Installer | ROC #314088</title>
        <meta name="description" content="Professional window tinting in Fountain Hills AZ. Ceramic, security, and decorative window film. Licensed ROC #314088. Free estimates — call (480) 788-1591." />
        <link rel="canonical" href="https://arizonahouseoffilm.com/window-tinting-fountain-hills" />
        <meta property="og:title" content="Window Tinting Fountain Hills AZ | Licensed Installer | ROC #314088" />
        <meta property="og:description" content="Professional window tinting in Fountain Hills AZ. Ceramic, security, and decorative window film. Licensed ROC #314088. Free estimates — call (480) 788-1591." />
        <meta property="og:url" content="https://arizonahouseoffilm.com/window-tinting-fountain-hills" />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Window Tinting Fountain Hills AZ | Licensed Installer | ROC #314088" />
        <meta name="twitter:description" content="Professional window tinting in Fountain Hills AZ. Ceramic, security, and decorative window film. Licensed ROC #314088. Free estimates — call (480) 788-1591." />
        <meta name="twitter:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://arizonahouseoffilm.com/' },
        { name: 'Service Areas', url: 'https://arizonahouseoffilm.com/service-areas' },
        { name: 'Window Tinting Fountain Hills', url: 'https://arizonahouseoffilm.com/window-tinting-fountain-hills' }
      ]} />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">Window Tinting Fountain Hills AZ — Licensed Installer Since 2017</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Window Tinting Services in Fountain Hills AZ</h2>
          <p className="text-lg text-slate-700 mb-4">Arizona House of Film provides professional window tinting for homes and businesses in Fountain Hills AZ. Fountain Hills is an upscale East Valley community known for luxury homes, desert views, and the famous fountain. Strong demand for ceramic and low-reflectivity film drives our work throughout the area.</p>
          <p className="text-lg text-slate-700">Licensed ROC #314088, bonded, and insured. We carry Huper Optik, 3M Prestige, Solyx, and LLumar films. Call <a href="tel:4807881591" className="text-blue-600 hover:underline">(480) 788-1591</a> for a free estimate.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Residential Window Film Fountain Hills</h2>
          <p className="text-lg text-slate-700 mb-4">Fountain Hills luxury homes feature large glass facades with panoramic desert and mountain views. Ceramic and spectrally selective window films protect these interiors from extreme solar heat and UV damage without darkening glass or obstructing views.</p>
          <p className="text-lg text-slate-700">Residential window film in Fountain Hills runs $13–$18 per square foot for ceramic film. Most homes average $1,500–$4,000 depending on window count and film specification. We provide free on-site estimates with film samples.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">HOA-Compliant Window Film</h2>
          <p className="text-lg text-slate-700 mb-4">Fountain Hills is an HOA-heavy community with strict exterior appearance guidelines. Many HOAs prohibit reflective or mirrored films but allow ceramic and spectrally selective options that maintain a natural glass appearance. We review your HOA's CC&Rs during the free estimate and specify films that meet all exterior appearance requirements.</p>
          <p className="text-lg text-slate-700">Huper Optik Ceramic and 3M Prestige series are our top specifications for HOA-compliant installations. Both provide 84–98% infrared rejection with near-invisible exterior appearance.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Why Fountain Hills Homes Need Window Film</h2>
          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-2">
            <li><strong>Desert heat</strong> — Summer temperatures exceed 115°F. Ceramic film rejects up to 84–98% of infrared heat.</li>
            <li><strong>UV protection</strong> — 99.9% UV rejection protects luxury furnishings, hardwood floors, and artwork from fading.</li>
            <li><strong>View preservation</strong> — Spectrally selective films maintain clear desert and mountain views while blocking heat.</li>
            <li><strong>HOA compliance</strong> — Near-invisible ceramic films meet strict Fountain Hills HOA exterior appearance requirements.</li>
            <li><strong>Glare reduction</strong> — Reduce glare on west-facing windows without darkening interior spaces.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Service Area</h2>
          <p className="text-lg text-slate-700">Arizona House of Film serves Fountain Hills and surrounding East Valley communities including Scottsdale, Rio Verde, Carefree, and Cave Creek. Licensed ROC #314088.</p>
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
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Get a Free Estimate in Fountain Hills</h2>
          <p className="text-lg text-slate-700 mb-4">Arizona House of Film — licensed ROC #314088. Fountain Hills' trusted window film installer since 2017. Free on-site estimates with film samples and written pricing.</p>
          <p className="text-lg font-bold mb-4">Call <a href="tel:4807881591" className="text-blue-600 hover:underline">(480) 788-1591</a> or <Link to="/contact" className="text-blue-600 hover:underline">schedule online</Link>.</p>
        </section>
      </main>
    </>
  );
}
