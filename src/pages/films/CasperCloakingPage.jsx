import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '../../components/SEO/BreadcrumbSchema';

const CasperCloakingPage = () => {
  const pageTitle = "Casper Cloaking Film Arizona | From $4,500 | Screen Privacy Phoenix Offices | ROC #314088";
  const metaDescription = "Casper cloaking film installation Phoenix AZ — screen privacy for conference rooms and glass offices. From $4,500 for smaller applications; conference rooms start around $6,000. Free on-site consultation. ROC #314088.";
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
      { "@type": "Question", name: "How much does Casper cloaking film cost in Phoenix?", acceptedAnswer: { "@type": "Answer", text: "Casper cloaking film is custom quoted after a free on-site consultation. Smaller applications like door sidelights or a single glass panel start at $4,500. Standard conference rooms typically start around $6,000 and scale up based on glass dimensions, screen positions, and whether we need full or partial height coverage. Every Casper project begins with a physical site survey — wavelength alignment to your specific screen positions requires on-site measurement. Contact Arizona House of Film at (480) 788-1591 to schedule a consultation." } },
      { "@type": "Question", name: "Do you install Quantum Cloaking Film in Phoenix and Scottsdale?", acceptedAnswer: { "@type": "Answer", text: "Yes. Arizona House of Film installs Quantum Cloaking Film® as an alternative cloaking film specification. Quantum Cloaking is used by Wells Fargo, Chase Bank, hospitals, police stations, and government buildings. Both Quantum Cloaking and Casper by Designtex achieve identical results — screens appear completely black from outside while remaining fully visible inside. Specification is determined per project. Call (480) 788-1591 for a free commercial estimate." } },
      { "@type": "Question", name: "How is Casper cloaking film installed?", acceptedAnswer: { "@type": "Answer", text: "Casper cloaking film is installed using a wet application process similar to standard window film. The glass is thoroughly cleaned, the film is cut to exact dimensions, and applied with a slip solution for positioning. The critical difference is wavelength alignment — Casper must be positioned precisely relative to LED screen positions to achieve the cloaking effect. This requires on-site measurement and cannot be templated remotely. Installation typically takes 1-2 days depending on project scope. Licensed ROC #314088." } },
      { "@type": "Question", name: "Does Casper work on all glass types?", acceptedAnswer: { "@type": "Answer", text: "Casper cloaking film works on most standard commercial glass including single-pane, dual-pane, and tempered glass. It is not recommended for highly textured or patterned glass where the micro-louver structure cannot adhere uniformly. We assess glass type during the free on-site consultation to confirm compatibility before quoting. Casper also requires flat interior glass surfaces — exterior texture is acceptable but interior must be smooth for proper adhesion." } }
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
          <h2 className="text-2xl font-black uppercase tracking-tight mb-6">Casper vs Frosted vs PDLC — Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-300">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-3 text-left font-black text-sm uppercase">Feature</th>
                  <th className="border border-slate-300 px-4 py-3 text-left font-black text-sm uppercase">Casper Cloaking</th>
                  <th className="border border-slate-300 px-4 py-3 text-left font-black text-sm uppercase">Frosted Film</th>
                  <th className="border border-slate-300 px-4 py-3 text-left font-black text-sm uppercase">Electric PDLC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 px-4 py-3 font-bold text-slate-800">Privacy Type</td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-700">Screen privacy only</td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-700">Full opacity</td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-700">Switchable on demand</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-3 font-bold text-slate-800">Lighting Required</td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-700">Any lighting</td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-700">Any lighting</td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-700">Any lighting</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-4 py-3 font-bold text-slate-800">Price Range</td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-700">From $4,500</td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-700">From $500</td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-700">From $8,000+</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-3 font-bold text-slate-800">Power Required</td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-700">No power</td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-700">No power</td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-700">Requires electrical</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-4 py-3 font-bold text-slate-800">Best For</td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-700">Glass offices with sensitive screen content</td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-700">Full visual privacy, bathroom partitions</td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-700">Boardrooms requiring on-demand privacy control</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-6">Phoenix Casper Cloaking Projects</h2>
          <p className="text-lg text-slate-700 mb-6">Arizona House of Film installs Casper cloaking film across Phoenix and Scottsdale commercial offices. Typical applications and project scopes:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 border-l-4 border-green-600 p-6">
              <h3 className="text-base font-black text-slate-900 uppercase mb-3">Executive Office Suites</h3>
              <p className="text-sm text-slate-700 mb-3">Glass-walled C-suite offices in North Scottsdale and downtown Phoenix office towers. Typical scope: 50-150 sq ft perimeter glass. Screen privacy for financial data, legal documents, and proprietary dashboards.</p>
              <p className="text-xs text-slate-500 font-bold">Typical Project Range: $6,000–$12,000</p>
            </div>
            <div className="bg-slate-50 border-l-4 border-green-600 p-6">
              <h3 className="text-base font-black text-slate-900 uppercase mb-3">Conference Rooms</h3>
              <p className="text-sm text-slate-700 mb-3">Standard 10×12 to 15×20 conference rooms with presentation screens and video conferencing. Partial-height or full-height glass coverage depending on screen positions and sightlines.</p>
              <p className="text-xs text-slate-500 font-bold">Typical Project Range: $6,000–$18,000</p>
            </div>
            <div className="bg-slate-50 border-l-4 border-green-600 p-6">
              <h3 className="text-base font-black text-slate-900 uppercase mb-3">Financial Services & Legal Offices</h3>
              <p className="text-sm text-slate-700 mb-3">Law firms, financial planners, and accounting firms requiring client confidentiality. Multi-room installs with Casper on glass partitions separating workstations from lobby or corridor visibility.</p>
              <p className="text-xs text-slate-500 font-bold">Typical Project Range: $12,000–$35,000</p>
            </div>
            <div className="bg-slate-50 border-l-4 border-green-600 p-6">
              <h3 className="text-base font-black text-slate-900 uppercase mb-3">Door Sidelights & Small Applications</h3>
              <p className="text-sm text-slate-700 mb-3">Entry door sidelights, single glass panels, accent glazing. Smallest entry point for Casper screen privacy — ideal for testing the specification before full-room commitment.</p>
              <p className="text-xs text-slate-500 font-bold">Starting at: $4,500</p>
            </div>
          </div>
          <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-base font-black text-slate-900 uppercase mb-2">What the Consultation Process Looks Like</h3>
            <ol className="list-decimal pl-6 text-sm text-slate-700 space-y-2">
              <li><strong>Free on-site visit</strong> — We physically measure glass dimensions, photograph screen positions, and assess sightlines from outside the glass.</li>
              <li><strong>Wavelength alignment</strong> — Casper requires precise positioning relative to LED screen wavelengths. This cannot be quoted sight-unseen.</li>
              <li><strong>Pattern selection</strong> — We provide samples from the full Casper by Designtex collection and recommend the pattern that best matches your aesthetic.</li>
              <li><strong>Written quote</strong> — Detailed proposal with glass area, film pattern, installation timeline, and total project cost.</li>
              <li><strong>Scheduled install</strong> — Most Casper projects install in 1-2 days with minimal business disruption. Licensed ROC #314088.</li>
            </ol>
          </div>
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
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Installation Cost — Phoenix &amp; Scottsdale</h2>
          <p className="text-lg text-slate-700 mb-4">Casper cloaking is <strong>custom quoted after a free on-site consultation</strong>. Smaller applications like door sidelights or a single glass panel start at <strong>$4,500</strong>. Standard conference rooms typically start around <strong>$6,000</strong> and scale from there based on glass dimensions, screen positions, and whether we need full or partial height coverage.</p>
          <p className="text-lg text-slate-700 mb-4">Decorative Films LLC MSRP is $58/sqft film only. Professional installation by Arizona House of Film adds precision wavelength alignment, edge sealing, and a licensed contractor guarantee. Every Casper project begins with a free on-site consultation — ROC #314088.</p>
          <p className="text-lg text-slate-700">Call <a href="tel:4807881591" className="text-blue-600 hover:underline">(480) 788-1591</a> to schedule your consultation.</p>
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
          <p className="text-slate-700 mb-4">Every Casper project is custom-quoted after a free on-site consultation. Wavelength alignment to your specific screen positions and glass dimensions requires physical measurement — we do not quote Casper sight-unseen. Starting points by application scope:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="border border-slate-200 rounded-lg p-4">
              <div className="font-black text-xl mb-1 text-green-700">From $4,500</div>
              <div className="font-bold text-slate-800 mb-2">Small Applications</div>
              <div className="text-sm text-slate-600">Door sidelights 3–4 ft, single glass panels, accent glazing. Lowest entry point for Casper screen privacy.</div>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <div className="font-black text-xl mb-1 text-green-700">From $6,000</div>
              <div className="font-bold text-slate-800 mb-2">Conference Room</div>
              <div className="text-sm text-slate-600">Standard 50+ sq ft conference room or executive office. Scope-driven: $6,000–$20,000 typical for single-room projects.</div>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <div className="font-black text-xl mb-1 text-green-700">From $6,000 — scoped on-site</div>
              <div className="font-bold text-slate-800 mb-2">Full Floor / Multi-Room</div>
              <div className="text-sm text-slate-600">Large buildouts, 150–300+ sq ft, and full-floor projects. $20,000–$40,000+ range depending on glass count and screen layout.</div>
            </div>
          </div>
          <p className="text-slate-700 mb-4">Decorative Films LLC MSRP: $58/sqft film only. Professional installation by Arizona House of Film adds precision wavelength alignment, edge sealing, and a licensed contractor guarantee. Every Casper project begins with a free on-site consultation — ROC #314088.</p>
          <p className="text-slate-600 text-sm">Casper cloaking film is a premium specification. All projects are assessed on-site before quoting. Free consultation — call (480) 788-1591 or <a href="/get-a-quote" className="text-green-700 underline">submit a quote request</a>. Licensed ROC #314088.</p>
        </section>

        <section className="mb-12 bg-slate-900 rounded-lg p-8">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-6 text-white">Related Privacy & Commercial Film Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/electric-privacy-film-arizona" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">
              Electric Privacy Film (PDLC) →
            </Link>
            <Link to="/office-privacy-window-film" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">
              Office Privacy Window Film →
            </Link>
            <Link to="/commercial-window-tinting" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">
              Commercial Window Tinting →
            </Link>
            <Link to="/films/casper-films" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">
              Casper Films Catalog →
            </Link>
            <Link to="/blog/casper-cloaking-film-cost-phoenix" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors md:col-span-2">
              Casper Cloaking Film Cost Guide →
            </Link>
          </div>
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
