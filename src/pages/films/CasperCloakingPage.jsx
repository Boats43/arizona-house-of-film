import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EyeOff, Building, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CasperCloakingPage = () => {
  const pageTitle = "Casper Cloaking Film Arizona | Arizona House of Film";
  const metaDescription = "Casper Cloaking Film makes LED screens appear black from outside. Perfect for conference rooms and executive offices in Arizona. Free estimate.";
  const canonicalUrl = "https://arizonahouseoffilm.com/films/casper-cloaking";
  const ogImage = "https://arizonahouseoffilm.com/og-image.jpg";

  const productSchema = {
    "@context": "https://schema.org", "@type": "Product",
    name: "Casper Cloaking Film",
    description: "Casper Cloaking Film by Solyx is an architectural film for glass walls that obscures the light from large LED displays, making them appear as black screens to outside viewers.",
    brand: { "@type": "Brand", name: "Solyx" },
    offers: { "@type": "Offer", price: "0.00", priceCurrency: "USD", priceValidUntil: "2027-12-31", availability: "https://schema.org/InStock", url: canonicalUrl },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "8" }
  };

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What is Casper Cloaking Film?", acceptedAnswer: { "@type": "Answer", text: "Casper Cloaking Film is an innovative architectural window film applied to glass walls. It makes LED screens appear as black boxes to outside viewers while keeping the glass transparent for those inside." } },
      { "@type": "Question", name: "Where is Casper Cloaking Film most effective?", acceptedAnswer: { "@type": "Answer", text: "It is ideal for glass-walled conference rooms, executive offices, and meeting areas where data privacy on screens is a concern." } },
      { "@type": "Question", name: "Does Casper film work with all types of screens?", acceptedAnswer: { "@type": "Answer", text: "Casper is specifically engineered to cloak the light output from large LED displays. It is not designed for OLED screens, plasma screens, or some older projection screens." } }
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
      <div className="bg-white">
        <header className="relative py-24 bg-gray-900 text-white">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold">Casper Cloaking Film Arizona</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-4 text-lg md:text-xl text-gray-300">The Smart Shield for Data Privacy on Glass Walls.</motion.p>
          </div>
        </header>
        <main>
          <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Open-Office Design Without the Exposure</h2>
                <p className="mt-4 text-lg text-gray-600">Casper Cloaking Film is the revolutionary solution for maintaining data privacy in modern, glass-walled offices. It selectively blocks the light from LED screens, making them appear as nothing more than black rectangles to outside viewers. For those inside the room, the glass remains perfectly transparent.</p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start"><EyeOff className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Secures Confidential Information:</strong> Protects sensitive data on screens during meetings and presentations.</span></li>
                  <li className="flex items-start"><Building className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Maintains Transparency:</strong> Preserves the open, collaborative feel of glass-walled spaces.</span></li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500 text-center px-4">Casper Cloaking Film — Contact us for a live demo</p>
              </div>
            </div>
          </section>
          <section className="py-20 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Protect Your Digital Privacy?</h2>
              <p className="text-lg text-gray-600 mb-8">Contact us for a free consultation on Casper Cloaking Film for your Arizona office.</p>
              <Button asChild size="lg"><Link to="/contact">Get a Quote for Casper Film <ArrowRight className="ml-2 w-5 h-5" /></Link></Button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default CasperCloakingPage;
