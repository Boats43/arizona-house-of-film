import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SecurityFilmPage = () => {
    const pageTitle = "Security Window Film Arizona | Arizona House of Film";
    const metaDescription = "Protect your Arizona property with high-performance security window film. Deter break-ins, prevent injuries from shattered glass, and enhance safety for homes and businesses. Free quotes!";
    const canonicalUrl = "https://arizonahouseoffilm.com/films/security";

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Security Window Film",
        "image": "https://arizonahouseoffilm.com/images/security-film.webp",
        "description": "Professional-grade security window film designed to protect against break-ins, accidents, and natural disasters by holding shattered glass together.",
        "brand": { "@type": "Brand", "name": "Arizona House of Film" },
        "offers": {
          "@type": "Offer",
          "price": "0.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "priceValidUntil": "2026-12-31",
          "url": "https://arizonahouseoffilm.com/films/security"
        },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "15" },
        "review": [{
          "@type": "Review",
          "author": "Verified Business Owner",
          "datePublished": "2025-02-15",
          "reviewBody": "The security film gave us incredible peace of mind for our storefront. The installation was fast and professional.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
        }]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does security window film work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Security window film is a heavy-duty polyester film bonded to glass with a strong adhesive. When the glass breaks, the film holds the dangerous shards together, preventing easy entry for intruders and reducing the risk of injury from flying glass."
          }
        },
        {
          "@type": "Question",
          "name": "Is security film bulletproof?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, standard security window film is not bulletproof, but it is bullet-resistant. It is designed to delay entry and withstand significant impact from blunt objects, forced entry attempts, and extreme weather. For ballistic resistance, specialized products are required."
          }
        },
        {
          "@type": "Question",
          "name": "Can security film be installed on any window?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, security window film can be professionally installed on most types of glass, including residential windows, commercial storefronts, and office partitions. It is a cost-effective alternative to replacing windows with laminated glass."
          }
        }
      ]
    };
    
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={metaDescription} />
                <link rel="canonical" href={canonicalUrl} />
                <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>
            <div className="bg-gray-50">
                <header className="relative py-24 bg-gradient-to-br from-red-800 to-gray-900 text-white">
                    <div className="absolute inset-0 hero-pattern opacity-10"></div>
                    <div className="relative max-w-4xl mx-auto px-4 text-center">
                        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold">
                            Security Window Film Arizona
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-4 text-lg md:text-xl text-gray-200">
                            Reinforce your first line of defense. Protect your property and assets with advanced security films.
                        </motion.p>
                    </div>
                </header>

                <main>
                    <section className="py-20 px-4">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-gray-900">Your Invisible Shield</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Our security window films are designed to be undetectable while providing powerful protection. They strengthen your windows against forced entry, accidents, and natural disasters by holding shattered glass in place.
                            </p>
                        </div>
                        <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center p-6 bg-white rounded-lg shadow-md">
                                <Lock className="w-12 h-12 mx-auto text-red-600 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Deter Break-Ins</h3>
                                <p className="text-gray-600">Creates a tough barrier that significantly delays intruders, giving you valuable time for emergency services to respond.</p>
                            </div>
                            <div className="text-center p-6 bg-white rounded-lg shadow-md">
                                <Shield className="w-12 h-12 mx-auto text-red-600 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Injury Prevention</h3>
                                <p className="text-gray-600">In the event of accidental impact or extreme weather, the film contains glass shards, preventing serious injury.</p>
                            </div>
                            <div className="text-center p-6 bg-white rounded-lg shadow-md">
                                <Zap className="w-12 h-12 mx-auto text-red-600 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Combine with Solar Control</h3>
                                <p className="text-gray-600">Many of our security films also offer excellent heat and UV rejection, giving you safety and energy savings in one product.</p>
                            </div>
                        </div>
                    </section>

                    <section className="py-20 bg-white px-4">
                        <div className="max-w-5xl mx-auto">
                             <div className="text-center">
                                <h2 className="text-3xl font-bold text-gray-900">Ideal for Any Property</h2>
                                <p className="mt-4 text-lg text-gray-600">
                                    Security film is a critical investment for both homes and businesses.
                                </p>
                            </div>
                            <div className="mt-8 flex flex-wrap justify-center gap-6">
                                <Link to="/commercial-window-tinting" className="text-blue-600 font-semibold text-lg hover:underline">Commercial Properties</Link>
                                <Link to="/residential-window-tinting" className="text-blue-600 font-semibold text-lg hover:underline">Residential Homes</Link>
                            </div>
                        </div>
                    </section>
                    
                    <section className="py-20 text-center">
                        <div className="max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Secure Your Property?</h2>
                            <p className="text-lg text-gray-600 mb-8">Don't wait for a disaster to happen. Contact us today for a free security consultation and learn how our window films can protect your home or business in Arizona.</p>
                             <Button asChild size="lg">
                                <Link to="/contact">
                                    Get a Free Security Film Quote
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default SecurityFilmPage;