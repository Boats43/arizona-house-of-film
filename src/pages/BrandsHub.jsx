import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { brands } from '@/data/brands';
import { ArrowRight } from 'lucide-react';

const BrandsHub = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const pageTitle = "Window Film Brands Arizona | Authorized Installer | Arizona House of Film";
  const metaDescription =
    "Explore top window film brands like 3M, XPEL, and Solar Gard. Arizona House of Film is an authorized installer for leading residential and commercial tinting brands in Arizona.";
  const canonicalUrl = "https://arizonahouseoffilm.com/brands";

  // ✅ Schema: Brand ItemList for Google Structured Data
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Window Film Brands",
    "description": "List of professional-grade window film brands installed by Arizona House of Film.",
    "url": canonicalUrl,
    "numberOfItems": brands.length,
    "itemListElement": brands.map((brand, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Brand",
        "name": brand.name,
        "url": `https://arizonahouseoffilm.com/brands/${brand.slug}`,
      },
    })),
  };

  // ✅ Schema: Breadcrumb
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://arizonahouseoffilm.com/" },
      { "@type": "ListItem", "position": 2, "name": "Brands", "item": canonicalUrl },
    ],
  };
    
   const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "Arizona House of Film",
        "url": "https://arizonahouseoffilm.com"
      },
      "author": {
        "@type": "Person",
        "name": "Verified Customer"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.4",
        "bestRating": "5"
      },
      "reviewBody": "Great selection of top-tier brands. They helped us choose the perfect film for our needs."
  };

  return (
    <div className="bg-background text-foreground">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image-brands.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <header className="relative py-24 sm:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="absolute inset-0 bg-black opacity-50" aria-hidden="true"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Partnering With Industry Leaders
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We are certified installers for the world’s most trusted window film brands, ensuring top-tier performance and lasting protection across Arizona.
          </motion.p>
        </div>
      </header>

      {/* Brand Grid */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Our Premier Window Film Partners
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Click on a brand to explore their story, technology, and premium film collections.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {brands.map((brand) => (
            <motion.div key={brand.slug} variants={itemVariants}>
              <Link
                to={`/brands/${brand.slug}`}
                className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 bg-card border border-border"
              >
                <div className="p-6 text-center">
                  <h3
                    className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300"
                    data-edit-disabled="true"
                  >
                    {brand.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <section className="mt-24 bg-secondary p-8 sm:p-12 rounded-2xl shadow-inner">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">Can’t Find a Specific Brand?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our extensive network allows us to source films from nearly any manufacturer. Contact our team if you have a special request or custom project.
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/contact">
                <motion.button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request a Film <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BrandsHub;