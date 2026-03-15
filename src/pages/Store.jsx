import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ProductsList from '@/components/ProductsList';

const storeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are your window films available for installation in Phoenix?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we serve Phoenix, Scottsdale, and the surrounding Arizona metro areas with professional film installation for all products listed here. We are the top choice for commercial window film and residential decorative film."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best window film for Arizona heat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Heat-rejecting window films like exterior and reflective tints can reduce up to 80% of solar heat and are ideal for Arizona homes. Browse our Energy Saving films for top recommendations."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get Phoenix window film quotes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply click 'Request Info' on any films you're interested in. You will be redirected to our contact form, where our team will provide a free estimate for your home or commercial window tinting project."
      }
    }
  ]
};

const Store = () => {
  return (
    <>
      <Helmet>
        <title>Arizona Window Film Catalog | UV, Decorative & Privacy Films</title>
        <meta name="description" content="Browse UV, decorative, and privacy films for homes and offices in Arizona. Get a free quote for residential and commercial window tinting today." />
        <meta property="og:title" content="Window Film Store | Arizona House of Film" />
        <meta property="og:description" content="Shop window film products and installation supplies from Arizona House of Film. Licensed ROC #314088." />
        <meta property="og:url" content="https://arizonahouseoffilm.com/store" />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://arizonahouseoffilm.com/store" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Window Film Store | Arizona House of Film" />
        <meta name="twitter:description" content="Shop window film products and installation supplies from Arizona House of Film. Licensed ROC #314088." />
        <meta name="twitter:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(storeFaqSchema)}</script>
      </Helmet>
      <div className="bg-gray-100 text-gray-800 min-h-screen">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative py-20 md:py-32 bg-white"
        >
          <div className="absolute inset-0 bg-[url('https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/hero-pattern-J1a9X.svg')] opacity-[0.02]"></div>
          <div className="relative container mx-auto px-4 text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Arizona Window Film Catalog
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-600"
            >
             Browse our complete selection of UV, decorative, and privacy films. Click "Request Info" on any film to get a free, no-obligation quote for your project.
            </motion.p>
          </div>
        </motion.section>

        <main className="container mx-auto px-4 py-12 md:py-16">
          <ProductsList />
        </main>
      </div>
    </>
  );
};

export default Store;