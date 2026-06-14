import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema';
import { countertopRegions, baseFAQs } from '@/data/countertopRegions';

export default function CountertopProtectionPage() {
  const { regionSlug } = useParams();

  // Lookup region data
  const region = countertopRegions.find(r => r.slug === regionSlug);

  // If no region found, return null (will 404 in production via client-side routing)
  if (!region) {
    return null;
  }

  // Merge base FAQs with region-specific overrides
  const faqs = region.faqOverrides
    ? [...baseFAQs.slice(0, 3), ...region.faqOverrides, ...baseFAQs.slice(3)]
    : baseFAQs;

  // Take first 5 FAQs
  const displayFAQs = faqs.slice(0, 5);

  // Build FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": displayFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Related regions (nearest 3 by position in array)
  const currentIndex = countertopRegions.findIndex(r => r.slug === regionSlug);
  const relatedRegions = [
    countertopRegions[(currentIndex + 1) % countertopRegions.length],
    countertopRegions[(currentIndex + 2) % countertopRegions.length],
    countertopRegions[(currentIndex + 3) % countertopRegions.length]
  ].filter(r => r.slug !== regionSlug);

  const canonicalUrl = `https://arizonahouseoffilm.com/countertop-protection-film/${region.slug}`;
  const contactSubject = `Countertop Film ${region.regionName} Inquiry`;

  return (
    <>
      <Helmet>
        <title>{region.metaTitle}</title>
        <meta name="description" content={region.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={region.metaTitle} />
        <meta property="og:description" content={region.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={region.metaTitle} />
        <meta name="twitter:description" content={region.metaDescription} />
        <meta name="twitter:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://arizonahouseoffilm.com/' },
        { name: 'Countertop Film Supply', url: 'https://arizonahouseoffilm.com/countertop-protection-film-nationwide' },
        { name: region.regionName, url: `https://arizonahouseoffilm.com/countertop-protection-film/${region.slug}` }
      ]} />

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <h1 className="text-4xl font-black text-gray-900 mb-6">{region.h1}</h1>

        <p className="text-lg text-gray-700 mb-8">
          Arizona House of Film is a <strong>nationwide supplier</strong> of countertop protection film.
          We drop-ship {region.regionName === 'Arizona' ? 'and install' : ''} Nexfil and Solyx surface protection
          from our Phoenix, AZ warehouse to {region.primaryCities.join(', ')}, and all {region.stateName} metros.
          <strong> {region.fulfillmentNote}</strong>
        </p>

        {/* Regional Context */}
        <div className="mb-10 bg-blue-50 border-2 border-blue-400 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Why {region.regionName}?</h2>
          <p className="text-gray-700 mb-4">{region.regionalContext}</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {region.useCases.map((useCase, i) => (
              <li key={i}><strong>{useCase.split('—')[0]}</strong> — {useCase.split('—')[1] || useCase.split('—')[0]}</li>
            ))}
          </ul>
        </div>

        {/* What Is Countertop Protection Film */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Is Countertop Protection Film?</h2>
        <p className="text-gray-700 mb-4">
          Countertop protection film is a clear, sacrificial polyester film applied to stone, quartz, marble, granite,
          laminate, and solid-surface countertops. It absorbs scratches, stains, etching, and daily wear — then peels
          off cleanly and is replaced. Two specs we stock: <strong>Nexfil 4 mil anti-graffiti polyester</strong> (standard)
          and <strong>Solyx clear protective film lines</strong> (range of finishes and thicknesses). Both peel-and-replace,
          no adhesive residue when removed within the replacement window.
        </p>

        {/* Surface Compatibility Table */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Surface Compatibility — {region.regionName}</h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Surface Type</th>
                <th className="border border-gray-200 px-4 py-2 text-center">Compatible</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Quartz</td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {region.primarySurfaces.includes('quartz') ? '✓' : '○'}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {region.primarySurfaces.includes('quartz')
                    ? 'Scratch and stain protection without affecting color or sheen'
                    : 'Compatible — contact for recommendations'}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Granite</td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {region.primarySurfaces.includes('granite') ? '✓' : '○'}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {region.primarySurfaces.includes('granite')
                    ? 'Scratch protection and UV stabilization'
                    : 'Compatible — contact for recommendations'}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Marble</td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {region.primarySurfaces.includes('marble') ? '✓' : '○'}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {region.primarySurfaces.includes('marble')
                    ? 'Etch and stain protection from acids — lemon, wine, coffee'
                    : 'Compatible — contact for recommendations'}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Quartzite</td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {region.primarySurfaces.includes('quartzite') ? '✓' : '○'}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {region.primarySurfaces.includes('quartzite')
                    ? 'UV protection and liquid barrier for porous natural stone'
                    : 'Compatible — contact for recommendations'}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Laminate</td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {region.primarySurfaces.includes('laminate') ? '✓' : '○'}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {region.primarySurfaces.includes('laminate')
                    ? 'Surface protection for high-traffic commercial installations'
                    : 'Compatible — contact for recommendations'}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Butcher Block</td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {region.primarySurfaces.includes('butcher-block') ? '✓' : '○'}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {region.primarySurfaces.includes('butcher-block')
                    ? 'Moisture and stain barrier for wood countertops'
                    : 'Compatible — contact for recommendations'}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Concrete</td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {region.primarySurfaces.includes('concrete') ? '✓' : '○'}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {region.primarySurfaces.includes('concrete')
                    ? 'Stain protection for sealed concrete countertops'
                    : 'Compatible — contact for recommendations'}
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Soapstone</td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  {region.primarySurfaces.includes('soapstone') ? '✓' : '○'}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {region.primarySurfaces.includes('soapstone')
                    ? 'Scratch and oil stain protection for natural soapstone'
                    : 'Compatible — contact for recommendations'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* How It Works */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How It Works — Order to Protection</h2>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Submit an inquiry</strong> — Tell us your region ({region.regionName}), the film line,
            and the rough order scope (one countertop, a full kitchen, a hotel rollout, a fabricator supply contract).
          </li>
          <li>
            <strong>Receive a written quote</strong> — Pricing, ship method, lead time, and trade-account eligibility.
            Typically returned within one business day.
          </li>
          <li>
            <strong>Place the order</strong> — Payment via card, ACH, or approved trade-account terms.
          </li>
          <li>
            <strong>Drop-ship direct to jobsite</strong> — Tracking number emailed on ship date.
            Typical transit to {region.primaryCities[0]} and {region.stateName} is <strong>{region.shippingTime}</strong>.
          </li>
          <li>
            <strong>Install</strong> — Your contractor handles installation. Our supply team is available for
            technique questions during business hours.
          </li>
        </ol>

        {/* Shipping Details */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Shipping to {region.regionName}</h2>
        <p className="text-gray-700 mb-4">
          We drop-ship via FedEx or UPS ground from Phoenix, AZ. Typical ground transit to {region.primaryCities.join(', ')}
          is <strong>{region.shippingTime}</strong>. Expedited 2-day or overnight shipping available on request.
          Film ships either rolled in a protective tube or flat-packed in a sheet carton depending on your order.
          Drop-ship direct-to-jobsite is the default for contractor trade accounts.
        </p>

        {/* Trade Account Benefits */}
        <div className="mb-10 bg-amber-50 border-2 border-amber-400 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Trade Account Benefits — {region.regionName} Contractors</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Tiered volume pricing</strong> — rates drop as your recurring order volume grows</li>
            <li><strong>Net-30 terms</strong> — available after credit approval for qualifying contractor accounts</li>
            <li><strong>Priority ship queue</strong> — trade account orders ship same day when placed before 11am MST</li>
            <li><strong>Technique support</strong> — direct line to our install team for field questions</li>
            <li><strong>Sample kit replenishment</strong> — ongoing sample supply for your showroom or design portfolio</li>
          </ul>
          <a
            href={`/contact?subject=${encodeURIComponent(contactSubject)}`}
            className="inline-block mt-4 bg-amber-500 text-black font-bold px-6 py-3 rounded hover:bg-amber-600"
          >
            Request {region.regionName} Pricing →
          </a>
        </div>

        {/* FAQ Section */}
        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions — {region.regionName}</h2>
        <div className="space-y-6">
          {displayFAQs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 pb-4">
              <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Related Regions */}
        {relatedRegions.length > 0 && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Other Regions We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {relatedRegions.map(related => (
                <Link
                  key={related.slug}
                  to={`/countertop-protection-film/${related.slug}`}
                  className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition"
                >
                  <h3 className="font-bold text-gray-900 mb-1">{related.regionName}</h3>
                  <p className="text-sm text-gray-600 mb-2">{related.primaryCities.slice(0, 3).join(', ')}</p>
                  <p className="text-xs text-gray-500">Ship time: {related.shippingTime}</p>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* Internal Links */}
        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">More Resources</h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link to="/countertop-protection-film-nationwide" className="text-blue-600 font-semibold underline">
                Nationwide Countertop Film Supply Hub
              </Link> — All regions, specs, and trade account details
            </li>
            {region.slug !== 'arizona' && (
              <li>
                <Link to="/countertop-protection-film-arizona" className="text-blue-600 font-semibold underline">
                  Arizona Installation Services
                </Link> — Full-service install with W-2 crew (ROC #314088)
              </li>
            )}
            <li>
              <Link to="/solutions" className="text-blue-600 font-semibold underline">
                All Window Film Solutions
              </Link> — Solar, privacy, security, decorative, anti-graffiti
            </li>
            <li>
              <Link to="/contact" className="text-blue-600 font-semibold underline">
                Contact Us
              </Link> — Request a quote or ask a question
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Request {region.regionName} Pricing</h2>
          <p className="text-gray-700 mb-4">
            Tell us your project scope and preferred film line. We'll return a written quote, ship time,
            and trade-account eligibility — typically within one business day.
          </p>
          <a
            href={`/contact?subject=${encodeURIComponent(contactSubject)}`}
            className="inline-block bg-blue-600 text-white font-bold px-6 py-3 rounded hover:bg-blue-700"
          >
            Get {region.regionName} Quote →
          </a>
          <p className="text-sm text-gray-600 mt-3">
            Or call <a href="tel:4807881591" className="text-blue-600 font-semibold">(480) 788-1591</a>.
            Drop-ship to {region.primaryCities[0]} and all {region.stateName} metros.
          </p>
        </div>
      </main>
    </>
  );
}
