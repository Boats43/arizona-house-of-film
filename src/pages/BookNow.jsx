import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const BookNow = () => {
  const pageTitle = "Book a Free Window Tinting Consultation | Arizona House of Film";
  const metaDescription = "Schedule your free, no-obligation consultation for window tinting in Arizona. Select a time that works for you and let our experts provide a tailored solution.";
  const canonicalUrl = "https://arizonahouseoffilm.com/book-now";
  const ogImage = "https://arizonahouseoffilm.com/og-image.jpg";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Free Window Tinting Consultation",
    description: metaDescription,
    url: canonicalUrl,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Arizona House of Film",
      telephone: "480-788-1591",
      url: "https://arizonahouseoffilm.com"
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Book Your Free Consultation</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Schedule a free, no-obligation consultation with our window film experts. Let's discuss your project and find the perfect solution for your home or business.</p>
          </motion.div>
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
