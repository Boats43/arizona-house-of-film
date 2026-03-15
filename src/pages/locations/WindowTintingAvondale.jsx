import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '../../components/SEO/BreadcrumbSchema';
import { Link } from 'react-router-dom';

export default function WindowTintingAvondale() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you install window film in Avondale AZ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Arizona House of Film installs residential and commercial window film throughout Avondale and the West Valley. Licensed ROC #314088. Call (480) 788-1591 for a free estimate." }
      },
      {
        "@type": "Question",
        "name": "How much does window tinting cost in Avondale?",
        "acceptedAnswer": { "@type": "Answer", "text": "Residential window film in Avondale runs $8–$18 per square foot installed. Most homes average $800–$2,500. Commercial projects are quoted by scope. We provide free on-site estimates." }
      },
      {
        "@type": "Question",
        "name": "What is the best window film for Avondale homes?",
        "acceptedAnswer": { "@type": "Answer", "text": "Nano-ceramic film is our primary recommendation for Avondale properties. West Valley homes face intense west-facing afternoon sun exposure — ceramic film rejects up to 84% solar heat without darkening glass or interfering with signals." }
      },
      {
        "@type": "Question",
        "name": "Do you serve commercial properties in Avondale?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. We install commercial solar control, security, and decorative window film for retail, office, and industrial properties in Avondale. Licensed commercial contractor ROC #314088." }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Window Tinting Avondale AZ | Licensed Installer | ROC #314088</title>
        <meta name="description" content="Professional window tinting in Avondale AZ. Residential and commercial window film installation. Licensed ROC #314088. Free estimates — call (480) 788-1591." />
        <link rel="canonical" href="https://arizonahouseoffilm.com/window-tinting-avondale" />
        <meta property="og:title" content="Window Tinting Avondale AZ | Licensed Installer | ROC #314088" />
        <meta property="og:description" content="Professional window tinting in Avondale AZ. Residential and commercial window film installation. Licensed ROC #314088. Free estimates — call (480) 788-1591." />
        <meta property="og:url" content="https://arizonahouseoffilm.com/window-tinting-avondale" />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Window Tinting Avondale AZ | Licensed Installer | ROC #314088" />
        <meta name="twitter:description" content="Professional window tinting in Avondale AZ. Residential and commercial window film installation. Licensed ROC #314088. Free estimates — call (480) 788-1591." />
        <meta name="twitter:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://arizonahouseoffilm.com/' },
        { name: 'Service Areas', url: 'https://arizonahouseoffilm.com/service-areas' },
        { name: 'Window Tinting Avondale', url: 'https://arizonahouseoffilm.com/window-tinting-avondale' }
      ]} />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">Window Tinting Avondale AZ — Licensed Installer Since 2017</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Window Tinting Services in Avondale AZ</h2>
          <p className="text-lg text-slate-700 mb-4">Arizona House of Film provides full-service window tinting for residential and commercial properties in Avondale AZ. Avondale is a West Valley city adjacent to Tolleson and Goodyear with a mix of residential subdivisions and commercial corridors along I-10 and Van Buren. Our licensed team installs solar control, security, decorative, and privacy window film throughout the area.</p>
          <p className="text-lg text-slate-700">Licensed ROC #314088, bonded, and insured. We carry Solyx, LLumar, 3M, and Huper Optik films. Call <a href="tel:4807881591" className="text-blue-600 hover:underline">(480) 788-1591</a> for a free estimate.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Residential Window Film Avondale</h2>
          <p className="text-lg text-slate-700 mb-4">Avondale homes face intense West Valley heat with brutal west-facing afternoon sun exposure. Ceramic and nano-ceramic window film rejects up to 84% of infrared heat while maintaining clear views and natural light — without darkening glass or interfering with cell and WiFi signals.</p>
          <p className="text-lg text-slate-700">Residential window film in Avondale costs $8–$18 per square foot installed. Most homes average $800–$2,500 depending on film type and window count. We provide free on-site estimates with film samples.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Commercial Window Tinting Avondale</h2>
          <p className="text-lg text-slate-700 mb-4">Avondale's commercial corridors along I-10 and Van Buren include retail storefronts, office buildings, and industrial facilities that benefit from solar control and security window film. Commercial film reduces HVAC load, improves occupant comfort, and provides shatter resistance for ground-floor glass.</p>
          <p className="text-lg text-slate-700">All commercial installs include NFRC documentation for energy rebate applications and COMcheck compliance.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Why Avondale Properties Need Window Film</h2>
          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-2">
            <li><strong>Extreme heat</strong> — West Valley temperatures exceed 115°F in summer. Ceramic film rejects up to 84% of solar heat.</li>
            <li><strong>West-facing exposure</strong> — Avondale subdivisions face intense afternoon sun. Film reduces heat gain on the most exposed windows.</li>
            <li><strong>UV protection</strong> — 99.9% UV rejection protects flooring, furniture, and interior finishes from fading.</li>
            <li><strong>Energy savings</strong> — Reduce cooling costs by 15–30% on heavily glazed elevations.</li>
            <li><strong>Security</strong> — Safety film holds glass in place on impact, slowing forced entry and protecting against shattered glass.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Service Area</h2>
          <p className="text-lg text-slate-700">Arizona House of Film serves Avondale and surrounding West Valley communities including Tolleson, Goodyear, Litchfield Park, Buckeye, and Phoenix. Licensed ROC #314088.</p>
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
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Get a Free Estimate in Avondale</h2>
          <p className="text-lg text-slate-700 mb-4">Arizona House of Film — licensed ROC #314088. Avondale's trusted window film installer since 2017. Free on-site estimates with film samples and written pricing.</p>
          <p className="text-lg font-bold mb-4">Call <a href="tel:4807881591" className="text-blue-600 hover:underline">(480) 788-1591</a> or <Link to="/contact" className="text-blue-600 hover:underline">schedule online</Link>.</p>
        </section>
      </main>
    </>
  );
}
