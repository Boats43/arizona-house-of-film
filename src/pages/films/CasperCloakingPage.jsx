import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '../../components/SEO/BreadcrumbSchema';

const CasperCloakingPage = () => {
  const pageTitle = "Casper Cloaking Film Arizona | Screen Privacy for Phoenix Offices | ROC #314088";
  const metaDescription = "Casper cloaking film installation Phoenix AZ — plus Quantum Cloaking Film, our preferred partner brand. Screen privacy for conference rooms & glass offices. $20–$35/sq ft. ROC #314088.";
  const canonicalUrl = "https://arizonahouseoffilm.com/films/casper-cloaking";
  const ogImage = "https://arizonahouseoffilm.com/og-image.jpg";

  const productSchema = {
    "@context": "https://schema.org", "@type": "Product",
    name: "Casper Cloaking Film",
    description: "Casper Cloaking Film by Solyx is an architectural film for glass walls that obscures the light from large LED displays, making them appear as black screens to outside viewers.",
    brand: { "@type": "Brand", name: "Solyx" },
    image: "https://arizonahouseoffilm.com/og-image.jpg",
    offers: { "@type": "Offer", price: "0.00", priceCurrency: "USD", priceValidUntil: "2027-12-31", availability: "https://schema.org/InStock", url: canonicalUrl },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "8" }
  };

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What is Casper Cloaking Film?", acceptedAnswer: { "@type": "Answer", text: "Casper cloaking film is a specialty privacy film that makes LED and OLED screens appear completely black from outside a glass partition or window, while people inside see screens normally with no change to brightness, color accuracy, or clarity. It is the standard specification for law firms, financial services, healthcare administration, tech companies, and any organization with screens displaying sensitive or proprietary information." } },
      { "@type": "Question", name: "How does Casper cloaking film work?", acceptedAnswer: { "@type": "Answer", text: "Casper film uses a micro-louver optical technology that controls the angle at which light passes through the film. Light traveling straight through — from a person inside looking at a screen — passes normally. Light reflecting off the screen at an angle — visible from outside the glass — is blocked. The result is that screens are invisible from outside while remaining fully visible from inside." } },
      { "@type": "Question", name: "Does Casper film affect screen brightness or color from inside?", acceptedAnswer: { "@type": "Answer", text: "No. Casper cloaking film has zero measurable impact on screen visibility, color accuracy, or brightness for people inside the office. It does not require any adjustment to screen brightness settings." } },
      { "@type": "Question", name: "What types of screens does Casper film work with?", acceptedAnswer: { "@type": "Answer", text: "Casper film works with LED and OLED screens — the standard in modern commercial environments. It is effective on monitors, presentation screens, video walls, and laptop displays. It is not designed for older fluorescent backlit LCD screens." } },
      { "@type": "Question", name: "How much does Casper cloaking film cost in Phoenix?", acceptedAnswer: { "@type": "Answer", text: "Casper and Quantum Cloaking Film both run $20–$35 per square foot installed depending on glass area and accessibility. Most single conference room installations run $1,500–$4,000. Quantum Cloaking Film is our preferred partner brand. Contact Arizona House of Film at (480) 788-1591 for a free commercial estimate." } },
      { "@type": "Question", name: "Do you install Quantum Cloaking Film in Phoenix and Scottsdale?", acceptedAnswer: { "@type": "Answer", text: "Yes. Arizona House of Film installs Quantum Cloaking Film® as an alternative cloaking film specification. Quantum Cloaking is used by Wells Fargo, Chase Bank, hospitals, police stations, and government buildings. Both Quantum Cloaking and Casper by Designtex achieve identical results — screens appear completely black from outside while remaining fully visible inside. Specification is determined per project. Call (480) 788-1591 for a free commercial estimate." } }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://arizonahouseoffilm.com/' },
        { name: 'Films', url: 'https://arizonahouseoffilm.com/films' },
        { name: 'Casper Cloaking Film', url: 'https://arizonahouseoffilm.com/films/casper-cloaking' }
      ]} />
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">Casper Cloaking Film Arizona — Screen Privacy for Glass Offices</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">What Is Casper Cloaking Film?</h2>
          <p className="text-lg text-slate-700 mb-4">Casper cloaking film is a specialty optical privacy film designed for glass-walled offices with LED screens. It uses micro-louver technology to block screen content from outside view while leaving the glass visually transparent and screens fully visible from inside. People outside see only clear glass. People inside see screens normally with zero impact on brightness or color.</p>
          <p className="text-lg text-slate-700">Arizona House of Film installs Casper cloaking film serving Phoenix, Scottsdale, and the Arizona metro. Licensed ROC #314088.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">How Casper Film Works</h2>
          <p className="text-lg text-slate-700">Standard frosted or privacy film obscures both the glass and what's behind it. Casper film works differently — it controls light by angle. Light passing straight through the film (the viewing angle from inside) passes unobstructed. Light reflecting off screens at an outward angle (visible from outside the glass) is blocked by the micro-louver structure. The glass remains optically clear while screens become invisible from the outside.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Where Casper Cloaking Film Is Specified</h2>
          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-2">
            <li><strong>Law firms</strong> — client confidentiality on document screens and case management systems</li>
            <li><strong>Financial services</strong> — trading screens, portfolio data, client financial information</li>
            <li><strong>Healthcare administration</strong> — HIPAA-compliant visual privacy for patient data screens</li>
            <li><strong>Technology companies</strong> — IP protection for development screens and proprietary interfaces</li>
            <li><strong>Executive boardrooms</strong> — presentation privacy during sensitive strategy sessions</li>
            <li><strong>Government and defense contractors</strong> — classified screen content protection</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Casper Film vs Standard Frosted Privacy Film</h2>
          <p className="text-lg text-slate-700 mb-4">Standard frosted film solves visual privacy by diffusing all light through the glass — obscuring both the view and the screen behind it. Casper film is specified when you need screen privacy without losing glass transparency. The glass wall stays visually open and maintains natural light flow. The only thing blocked is screen content from outside view.</p>
          <p className="text-lg text-slate-700">For conference rooms where the glass should remain clear but screen content must be protected, Casper is the only film that delivers both simultaneously.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Available Casper Cloaking Film Patterns</h2>
          <p className="text-lg text-slate-700 mb-4">Arizona House of Film installs the full Casper by Designtex collection:</p>
          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-2">
            <li>Casper Original (PF001-801-48)</li>
            <li>Big Dot by Designtex (PF002-801)</li>
            <li>Little Dot by Designtex (PF003-801)</li>
            <li>Aksel by Designtex (PF005-801)</li>
            <li>Grid by Designtex (PF006-801)</li>
            <li>Plus by Designtex (PF007-801)</li>
            <li>Cell by Designtex (PF008-801)</li>
            <li>Pixel by Designtex (PF009-801)</li>
          </ul>
        </section>

        <section style={{ background: '#0a1a12', border: '1px solid #2a4a2e', borderRadius: '8px', padding: '32px', margin: '40px 0' }}>
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4" style={{ color: '#6b8f71' }}>
            Quantum Cloaking Film® — Alternative Specification
          </h2>
          <p className="text-gray-300 mb-4">
            Arizona House of Film also installs Quantum Cloaking Film® — a patent-pending cloaking film specification with verified installations at Wells Fargo, Chase Bank, hospitals, police stations, and government buildings nationwide.
          </p>
          <p className="text-gray-300 mb-4">
            Both Casper by Designtex and Quantum Cloaking Film® achieve the same result: LED and OLED screens appear completely black from outside the glass while maintaining a fully clear view from inside the room. Film specification is determined per project based on glass type, scope, and installation requirements.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '24px' }}>
            <div style={{ background: '#12121a', padding: '16px', borderRadius: '6px' }}>
              <div style={{ fontSize: '13px', color: '#6b8f71', fontWeight: 'bold', marginBottom: '8px' }}>QUANTUM CLOAKING ADVANTAGES</div>
              <ul style={{ color: '#aaa', fontSize: '13px', lineHeight: '1.8', listStyle: 'disc', paddingLeft: '16px' }}>
                <li>Same-day adjacent panel installation</li>
                <li>Moisture-resistant patent-pending adhesive</li>
                <li>No acclimatization period required</li>
                <li>Stores loosely rolled without tunneling</li>
                <li>Used by Wells Fargo, Chase Bank, government facilities</li>
              </ul>
            </div>
            <div style={{ background: '#12121a', padding: '16px', borderRadius: '6px' }}>
              <div style={{ fontSize: '13px', color: '#6b8f71', fontWeight: 'bold', marginBottom: '8px' }}>BOTH FILMS DELIVER</div>
              <ul style={{ color: '#aaa', fontSize: '13px', lineHeight: '1.8', listStyle: 'disc', paddingLeft: '16px' }}>
                <li>Screens invisible from outside the glass</li>
                <li>Fully clear view from inside the room</li>
                <li>Compatible with LED and OLED displays</li>
                <li>Commercial and government grade</li>
                <li>Custom-quoted per project scope</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Also Installing Quantum Cloaking Film — Our Preferred Partner</h2>
          <p className="text-lg text-slate-700 mb-4">Quantum Cloaking Film is our preferred partner brand for screen privacy installations. Engineered with Cellulose Triacetate chemistry, 7 mil thickness, Class A ASTM E84 fire rating, and less than 1% UV transmission. Available in four widths (48″, 56.25″, 59.25″, 70.25″) and backed by a 3-year material warranty when installed to spec.</p>
          <p className="text-lg text-slate-700 font-medium">Casper vs Quantum — both deliver screen privacy for glass offices. We carry and install both. Ask us which is right for your space.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Installation Cost — Phoenix & Scottsdale</h2>
          <p className="text-lg text-slate-700 mb-4">Cloaking film (Casper and Quantum) runs $20–$35 per square foot installed — priced at a premium over standard privacy film due to the specialty optical technology. Most single conference room installations (40–120 sq ft of glass) run $1,500–$4,000. Full office floor projects are quoted by scope.</p>
          <p className="text-lg text-slate-700">All installations include a site assessment to confirm glass type compatibility and screen placement angles. Call <a href="tel:4807881591" className="text-blue-600 hover:underline">(480) 788-1591</a> for a free commercial estimate.</p>
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

        <section className="mb-12 bg-slate-50 rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Casper Cloaking Film Cost — Phoenix AZ</h2>
          <p className="text-slate-700 mb-4">Casper cloaking film installation in Phoenix and Scottsdale is custom-quoted per project. Pricing is based on glass square footage, access difficulty, and project scope. These ranges reflect completed Arizona installations:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="border border-slate-200 rounded-lg p-4">
              <div className="font-black text-xl mb-1 text-green-700">$20–$35/sq ft</div>
              <div className="font-bold text-slate-800 mb-2">Conference Room Glass</div>
              <div className="text-sm text-slate-600">Single conference room, 100–300 sq ft of glass. Most common Casper installation.</div>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <div className="font-black text-xl mb-1 text-green-700">$15,000–$45,000</div>
              <div className="font-bold text-slate-800 mb-2">Full Office Floor</div>
              <div className="text-sm text-slate-600">Multiple conference rooms and glass partitions. Tech campus and corporate office standard.</div>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <div className="font-black text-xl mb-1 text-green-700">Custom Quote</div>
              <div className="font-bold text-slate-800 mb-2">Multi-Floor / Custom</div>
              <div className="text-sm text-slate-600">High-rise office buildings, custom glass configurations, and broadcast/media facilities.</div>
            </div>
          </div>
          <p className="text-slate-600 text-sm">Casper cloaking film is a premium specification. All projects are assessed on-site before quoting. Free assessment — call (480) 788-1591 or <a href="/get-a-quote" className="text-green-700 underline">submit a quote request</a>. Licensed ROC #314088.</p>
        </section>

        <section className="bg-slate-100 p-8 rounded-lg">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Get a Free Casper Film Estimate</h2>
          <p className="text-lg text-slate-700 mb-4">Arizona House of Film — licensed ROC #314088. Authorized Casper cloaking film installer for Phoenix, Scottsdale, and Arizona commercial offices.</p>
          <p className="text-lg font-bold mb-4">Call <a href="tel:4807881591" className="text-blue-600 hover:underline">(480) 788-1591</a> or <Link to="/contact" className="text-blue-600 hover:underline">request a commercial estimate online</Link>.</p>
        </section>
      </main>
    </>
  );
};

export default CasperCloakingPage;
