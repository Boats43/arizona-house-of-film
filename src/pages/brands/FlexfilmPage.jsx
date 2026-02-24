import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const FlexfilmPage = () => {
  const pageTitle = "Flexfilm Window Films | Authorized Installers in Arizona";
  const metaDescription = "Arizona House of Film are experienced installers of Flexfilm window films. Advanced ceramic and carbon technology for automotive, residential, and commercial applications.";
  const canonicalUrl = "https://arizonahouseoffilm.com/brands/flexfilm";
  const ogImage = "https://arizonahouseoffilm.com/og-image.jpg";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: pageTitle,
    description: metaDescription,
    url: canonicalUrl,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Arizona House of Film",
      telephone: "480-788-1591",
      url: "https://arizonahouseoffilm.com"
    }
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
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Flexfilm Window Films</h1>
        <p className="mt-4">Flexfilm offers a comprehensive line of professional-grade window films. While well-known for their automotive tints, they also provide excellent solutions for residential and commercial applications.</p>
        <h2 className="text-2xl font-bold mt-6">Why Choose Flexfilm?</h2>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Advanced ceramic and carbon technology.</li>
          <li>Superior heat rejection and UV protection.</li>
          <li>Variety of shades and finishes available.</li>
        </ul>
        <p className="mt-4">As experienced installers of Flexfilm products, we can help you choose the best film for your needs and ensure a flawless application.</p>
        <div className="mt-6 flex gap-4">
          <a href="https://flexfilm.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Learn more on the official Flexfilm website.</a>
          <Link to="/contact" className="text-blue-600 hover:underline">Get a free quote →</Link>
        </div>
      </div>
    </>
  );
};

export default FlexfilmPage;
