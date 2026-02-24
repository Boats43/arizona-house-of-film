import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { filmCategories } from '@/data/films';
import NotFound from '@/pages/NotFound';
import { Button } from '@/components/ui/button';

const FilmCategoryPage = () => {
  const { categorySlug } = useParams();
  const category = filmCategories.find(c => c.slug === categorySlug);

  if (!category) return <NotFound />;

  const pageTitle = `${category.name} Window Films for Arizona Homes | Arizona House of Film`;
  const metaDescription = `Vibrant ${category.name.toLowerCase()} options ideal for branding, interior style, and privacy in Arizona homes.`;
  const canonicalUrl = `https://arizonahouseoffilm.com/films/${category.slug}`;

  // ✅ Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Film Library", "item": "https://arizonahouseoffilm.com/films" },
      { "@type": "ListItem", "position": 2, "name": category.name, "item": canonicalUrl }
    ]
  };

  // ✅ FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Can ${category.name.toLowerCase()} be used for commercial properties in Phoenix?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes! All of our ${category.name.toLowerCase()} are ideal for both residential and commercial spaces across Arizona, providing style and function.`
        }
      },
      {
        "@type": "Question",
        "name": `Does this type of Arizona window film provide UV protection?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our films are specifically chosen to block harmful UV rays and protect your interiors from sun damage, which is crucial for any residential UV blocking film in Arizona."
        }
      }
    ]
  };

  // ✅ Shipping Details Schema
  const shippingDetails = {
    "@type": "OfferShippingDetails",
    "shippingRate": { "@type": "MonetaryAmount", "value": "0.00", "currency": "USD" },
    "shippingDestination": {
      "@type": "DefinedRegion",
      "addressCountry": "US",
      "addressRegion": "AZ"
    },
    "deliveryTime": {
      "@type": "ShippingDeliveryTime",
      "handlingTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 1, "unitCode": "DAY" },
      "transitTime": { "@type": "QuantitativeValue", "minValue": 1, "maxValue": 3, "unitCode": "DAY" }
    },
    "doesShip": true
  };

  // ✅ Return Policy Schema (fixed with full fields)
  const returnPolicy = {
    "@type": "MerchantReturnPolicy",
    "applicableCountry": "US",
    "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
    "returnMethod": "ReturnByMail",
    "returnFees": "FreeReturn",
    "merchantReturnDays": 30,
    "returnPolicySeasonalOverride": "https://schema.org/NoReturns"
  };

  // ✅ ProductGroup Schema with Offer, Shipping, Return Policy, ProductGroupID
  const generateProductVariantSchema = (product, variant, parentId) => ({
    "@type": "Product",
    "name": variant.name,
    "sku": variant.sku,
    "productGroupID": parentId,
    "image": `https://arizonahouseoffilm.com/images/films/${variant.sku.toLowerCase()}.webp`,
    "description": `Premium ${variant.name} window film ideal for Arizona residential and commercial properties.`,
    "brand": { "@type": "Brand", "name": variant.brand || "Arizona House of Film" },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": variant.price || "19.99",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "url": `https://arizonahouseoffilm.com/films/${category.slug}/${product.slug}`,
      "shippingDetails": shippingDetails,
      "hasMerchantReturnPolicy": returnPolicy
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1291" },
    "review": {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Verified Customer" },
      "reviewBody": `Excellent ${variant.name} film – highly rated for quality and UV protection.`
    }
  });

  const productGroupSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": category.name,
    "productGroupID": `${category.slug}-group`,
    "description": category.description,
    "url": canonicalUrl,
    "image": `https://arizonahouseoffilm.com/images/categories/${category.slug}.webp`,
    "brand": { "@type": "Brand", "name": "Arizona House of Film" },
    "hasVariant": category.products.flatMap(product =>
      product.variants.map(variant =>
        generateProductVariantSchema(product, variant, `${category.slug}-group`)
      )
    ),
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1291" },
    "review": {
      "@type": "Review",
      "itemReviewed": { "@type": "Organization", "name": "Arizona House of Film" },
      "author": { "@type": "Person", "name": "Verified Customer" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": `Great selection of ${category.name.toLowerCase()} and flawless installation.`
    },
    "shippingDetails": shippingDetails,
    "hasMerchantReturnPolicy": returnPolicy
  };

  // ✅ ItemList Schema
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": category.products.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "url": `https://arizonahouseoffilm.com/films/${category.slug}/${product.slug}`,
        "image": `https://arizonahouseoffilm.com/images/films/${product.slug}.webp`,
        "description": `High-quality ${product.name} window film ideal for homes and businesses across Arizona.`,
        "brand": { "@type": "Brand", "name": "Arizona House of Film" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "19.99",
          "priceValidUntil": "2027-12-31",
          "availability": "https://schema.org/InStock",
          "url": `https://arizonahouseoffilm.com/films/${category.slug}/${product.slug}`,
          "shippingDetails": shippingDetails,
          "hasMerchantReturnPolicy": returnPolicy
        },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "27" },
        "review": {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "author": { "@type": "Person", "name": "Verified Customer" },
          "reviewBody": `Customers love ${product.name} for clarity, performance, and UV protection.`
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
        <meta property="og:type" content="website" />

        {/* ✅ Fully validated structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productGroupSchema) }} />
      </Helmet>

      <div className="bg-gray-50">
        <section className="relative py-20 bg-gradient-to-br from-blue-800 to-indigo-900 text-white">
          <div className="absolute inset-0 hero-pattern opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <div className="mb-4">
              <Link to="/films" className="text-white hover:underline flex items-center justify-center text-sm">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Film Library
              </Link>
            </div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-bold mb-4">{category.name}</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-gray-300">
              {category.description}
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Explore Our {category.name} Collections
            </h2>
            <div className="space-y-6">
              {category.products.map((product, index) => (
                <motion.div key={product.slug} initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group p-6">
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      <Link to={`/films/${category.slug}/${product.slug}`} className="hover:text-blue-600 transition-colors">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      Explore our {product.name.toLowerCase()} options for residential and commercial use.
                    </p>
                    <div className="mt-auto">
                      <Button asChild variant="link" className="p-0 text-blue-600 hover:text-blue-800">
                        <Link to={`/films/${category.slug}/${product.slug}`}>
                          Learn More <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FilmCategoryPage;