import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThankYou = () => {
  const pageTitle = "Thank You! - Arizona House of Film";
  const metaDescription = "Thank you for contacting Arizona House of Film. We have received your message and will get back to you shortly.";
  const canonicalUrl = "https://arizonahouseoffilm.com/thank-you";
  const ogImage = "https://arizonahouseoffilm.com/og-image.jpg";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    description: metaDescription,
    url: canonicalUrl,
    publisher: {
      "@type": "HomeAndConstructionBusiness",
      name: "Arizona House of Film",
      url: "https://arizonahouseoffilm.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 py-12 px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-md w-full space-y-8 text-center bg-white p-10 rounded-2xl shadow-lg">
          <div className="flex justify-center">
            <CheckCircle className="h-20 w-20 text-green-500" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900">Thank You!</h1>
          <p className="text-lg text-gray-600">Your message has been successfully sent. We appreciate you contacting us and will be in touch shortly.</p>
          <div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/"><Home className="mr-2 h-5 w-5" />Return to Homepage</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ThankYou;
