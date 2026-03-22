import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SecurityFilmPage = () => {
  const pageTitle = "Security Window Film Arizona | Arizona House of Film";
  const metaDescription = "High-performance security window film for Arizona homes and businesses. Deter break-ins, prevent injuries from shattered glass. Free quotes. ROC #314088.";
  const canonicalUrl = "https://arizonahouseoffilm.com/films/security";
  const ogImage = "https://arizonahouseoffilm.com/og-image.jpg";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Security Window Film Phoenix AZ",
    "description": "Licensed security window film installation in Phoenix AZ. 4–21 mil safety film for homes, businesses, schools, and government facilities. ROC #314088.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Arizona House of Film",
      "url": "https://arizonahouseoffilm.com",
      "@id": "https://arizonahouseoffilm.com/#business"
    },
    "areaServed": {
      "@type": "State",
      "name": "Arizona"
    },
    "url": "https://arizonahouseoffilm.com/films/security"
  };

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How does security window film work?", acceptedAnswer: { "@type": "Answer", text: "Security window film is a heavy-duty polyester film bonded to glass with a strong adhesive. When the glass breaks, the film holds the dangerous shards together, preventing easy entry for intruders and reducing the risk of injury from flying glass." } },
      { "@type": "Question", name: "Is security film bulletproof?", acceptedAnswer: { "@type": "Answer", text: "No, standard security window film is not bulletproof, but it is bullet-resistant. It is designed to delay entry and withstand significant impact from blunt objects and forced entry attempts." } },
      { "@type": "Question", name: "Can security film be installed on any window?", acceptedAnswer: { "@type": "Answer", text: "Yes, security window film can be professionally installed on most types of glass, including residential windows, commercial storefronts, and office partitions." } }
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
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="bg-gray-50">
        <header className="relative py-24 bg-gradient-to-br from-red-800 to-gray-900 text-white">
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold">Security Window Film Arizona</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-4 text-lg md:text-xl text-gray-200">Reinforce your first line of defense. Protect your property and assets with advanced security films.</motion.p>
          </div>
        </header>
        <main>
          <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900">Your Invisible Shield</h2>
              <p className="mt-4 text-lg text-gray-600">Our security window films are designed to be undetectable while providing powerful protection. They strengthen your windows against forced entry, accidents, and natural disasters by holding shattered glass in place.</p>
            </div>
            <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md"><Lock className="w-12 h-12 mx-auto text-red-600 mb-4" /><h3 className="text-xl font-semibold text-gray-900 mb-2">Deter Break-Ins</h3><p className="text-gray-600">Creates a tough barrier that significantly delays intruders, giving you valuable time for emergency services to respond.</p></div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md"><Shield className="w-12 h-12 mx-auto text-red-600 mb-4" /><h3 className="text-xl font-semibold text-gray-900 mb-2">Injury Prevention</h3><p className="text-gray-600">In the event of accidental impact or extreme weather, the film contains glass shards, preventing serious injury.</p></div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md"><Zap className="w-12 h-12 mx-auto text-red-600 mb-4" /><h3 className="text-xl font-semibold text-gray-900 mb-2">Combine with Solar Control</h3><p className="text-gray-600">Many of our security films also offer excellent heat and UV rejection, giving you safety and energy savings in one product.</p></div>
            </div>
          </section>
          <section className="py-20 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Secure Your Property?</h2>
              <p className="text-lg text-gray-600 mb-8">Contact us today for a free security consultation and learn how our window films can protect your home or business in Arizona.</p>
              <Button asChild size="lg"><Link to="/contact">Get a Free Security Film Quote <ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default SecurityFilmPage;
