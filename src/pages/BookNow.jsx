import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const BookNow = () => {
  const pageTitle = "Book a Free Window Tinting Consultation | Arizona House of Film";
  const metaDescription = "Schedule your free window tinting consultation in Arizona. Same-week appointments available. Licensed ROC #314088 — (480) 788-1591.";
  const canonicalUrl = "https://arizonahouseoffilm.com/book-now";
  const ogImage = "https://arizonahouseoffilm.com/og-image.jpg";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Free Window Tinting Consultation",
    description: metaDescription,
    url: canonicalUrl,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://arizonahouseoffilm.com",
      name: "Arizona House of Film",
    },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free no-obligation consultation" }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

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

      <section className="relative py-20 bg-gradient-to-br from-teal-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Calendar className="w-16 h-16 mx-auto text-white mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Schedule Your Free Window Film Estimate | Arizona House of Film</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Book a free, no-obligation estimate for your home or business. Arizona House of Film serves Phoenix, Scottsdale, and communities statewide. Licensed ROC #314088. Most estimates are scheduled within 1–3 business days.</p>
          </motion.div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
            {[
              { label: "Licensed & Bonded", sub: "ROC #314088" },
              { label: "4.5 Google Rating", sub: "17 Verified Reviews" },
              { label: "Free Estimates", sub: "No Obligation" },
              { label: "Warranty Included", sub: "On All Installs" },
            ].map((item, i) => (
              <div key={i} className="p-4 border border-gray-100 bg-gray-50">
                <p className="font-black text-gray-900 text-sm uppercase tracking-tight">{item.label}</p>
                <p className="text-xs text-gray-500 font-medium mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-8">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { n: "01", t: "Submit Your Request", d: "Tell us your property type and what you're trying to solve — heat, privacy, security, or decorative." },
              { n: "02", t: "Get Your Estimate", d: "We'll contact you within 24 hours to schedule a site visit or provide a phone estimate for smaller projects." },
              { n: "03", t: "Installation Day", d: "Our licensed crew arrives on time, installs cleanly, and leaves your space exactly as they found it." },
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-4xl font-black text-gray-200">{step.n}</span>
                <div>
                  <h3 className="font-black text-gray-900 uppercase text-sm mb-2">{step.t}</h3>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="calendly-inline-widget" data-url="https://calendly.com/arizonahouseoffilm" style={{ minWidth: '320px', height: '700px' }}></div>
        </div>
      </section>
    </>
  );
};

export default BookNow;
