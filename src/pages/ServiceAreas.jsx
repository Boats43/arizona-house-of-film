import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cities } from '@/data/cities';

const ServiceAreas = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCities = useMemo(() => {
    return cities.filter(city =>
      city.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchTerm]);

  const pageTitle = "Arizona Window Tinting Service Areas | Arizona House of Film";
  const metaDescription = "We serve Phoenix, Tucson, Mesa, Scottsdale, and over 100 other cities across Arizona. Find your city and get a free window tinting estimate today for your home or business. We are your local experts.";
  const canonicalUrl = "https://arizonahouseoffilm.com/service-areas";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Arizona House of Film",
    "url": canonicalUrl,
    "telephone": "480-788-1591",
    "email": "arizonahouseoffilm@gmail.com",
    "description": metaDescription,
    "areaServed": cities.map(city => ({ "@type": "City", "name": city.name })),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Phoenix",
      "addressRegion": "AZ",
      "addressCountry": "US"
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
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image-service-areas.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>

      <div className="bg-gray-50">
        <section className="relative py-20 text-white bg-gray-900">
          <div className="absolute inset-0 hero-pattern opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Our Arizona Service Areas
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-200 mb-8">
              We provide expert window film installation for homes and businesses across the entire state of Arizona. Find your city below.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-200">
                <a href="tel:480-788-1591">Call for a Free Estimate <Phone className="ml-2 h-5 w-5" /></a>
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for your city..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 text-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-full"
                />
              </div>
            </div>

            <motion.div 
              layout
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredCities.map((city) => (
                <motion.div
                  key={city.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to={`/service-areas/${city.slug}`} className="flex items-center justify-center text-center bg-white hover:bg-blue-600 hover:text-white text-blue-700 font-medium py-3 px-4 rounded-lg shadow-md transition-all duration-300 border border-gray-200 h-full underline hover:no-underline">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="flex-grow">{city.name}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            {filteredCities.length === 0 && (
              <p className="text-center text-gray-500 mt-8 text-lg">No cities found. We likely still serve your area! Please contact us to confirm.</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceAreas;