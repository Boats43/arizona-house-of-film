import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { filmCategories } from '@/data/films';
import { Input } from '@/components/ui/input';
import ProductsList from '@/components/ProductsList';

const FilmsHub = () => {
  const pageTitle = "Window Film Library | Arizona's #1 Film Experts";
  const metaDescription = "Explore our complete library of residential & commercial window films. Find solar, decorative, security & privacy window films for your Arizona property.";
  const canonicalUrl = "https://arizonahouseoffilm.com/films";
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://arizonahouseoffilm.com"
    }, {
      "@type": "ListItem",
      "position": 2,
      "name": "Film Library",
      "item": canonicalUrl
    }]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Window Film Categories",
    "itemListElement": filmCategories.map((category, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": category.name,
        "image": "https://arizonahouseoffilm.com/og-image.jpg",
        "url": `https://arizonahouseoffilm.com/films/${category.slug}`,
        "description": category.description,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "0",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "url": `https://arizonahouseoffilm.com/films/${category.slug}`,
          "seller": { "@type": "LocalBusiness", "name": "Arizona House of Film" }
        }
      }
    }))
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
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>

      <div className="bg-gray-50">
        <section className="relative text-white py-20 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Window Film Library
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-8"
            >
              Your comprehensive guide to premium window films in Arizona.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="max-w-xl mx-auto"
            >
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search for a film by name or type..."
                  className="w-full p-4 pl-12 rounded-full bg-white/90 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-blue-400"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Browse by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filmCategories.map((category, index) => (
                <motion.div
                  key={category.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/films/${category.slug}`}
                    className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden h-full group p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <category.icon className="h-10 w-10 text-blue-600" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                        <p className="text-gray-600 mb-4">{category.description}</p>
                        <div className="text-blue-600 font-semibold inline-flex items-center group-hover:underline">
                          Explore Films <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              All Available Film Products
            </h2>
            <ProductsList />
          </div>
        </section>
      </div>
    </>
  );
};

export default FilmsHub;