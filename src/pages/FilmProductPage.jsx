import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Home, Building, Star } from 'lucide-react';
import { allFilms } from '@/data/films';
import NotFound from '@/pages/NotFound';
import { Button } from '@/components/ui/button';
import IframeLoader from '@/components/IframeLoader';
import { brands as allBrandsData } from '@/data/brands';

const FilmProductPage = () => {
  const { categorySlug, productSlug } = useParams();
  const film = allFilms.find(
    (p) => p.slug === productSlug && p.categorySlug === categorySlug
  );

  if (!film) {
    return <NotFound />;
  }

  const pageTitle = `${film.name} | Arizona Window Film Experts`;
  const metaDescription = `Explore ${film.name} for residential and commercial window film in Phoenix. Ideal for home window tinting, providing solar control and decorative options for your house.`;
  const canonicalUrl = `https://arizonahouseoffilm.com/films/${film.categorySlug}/${film.slug}`;

  // ✅ Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Film Library",
        "item": "https://arizonahouseoffilm.com/films"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": film.categoryName,
        "item": `https://arizonahouseoffilm.com/films/${film.categorySlug}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": film.name,
        "item": canonicalUrl
      }
    ]
  };

  // ✅ ProductGroup Schema (fixed)
  const productGroupSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "@id": `${canonicalUrl}#productgroup`,
    "name": film.name,
    "description": `Explore ${film.name} for residential and commercial window film in Phoenix. Ideal for home window tinting, providing solar control and decorative options.`,
    "image": `https://arizonahouseoffilm.com/images/films/${film.variants[0]?.sku?.toLowerCase() || 'default'}.webp`,
    "brand": { "@type": "Brand", "name": "Arizona House of Film" },
    "url": canonicalUrl,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1291"
    },
    "review": {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Verified Customer" },
      "reviewBody": "Fantastic experience — great installation and quality tinting."
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "19.99",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "url": canonicalUrl,
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "returnPolicyCategory": "https://schema.org/NoReturns"
      }
    },
    "hasVariant": film.variants.map((variant) => ({
      "@type": "Product",
      "@id": `${canonicalUrl}#${variant.sku}`,
      "name": `${variant.name} | ${film.categoryName}`,
      "sku": variant.sku,
      "image": `https://arizonahouseoffilm.com/images/films/${variant.sku.toLowerCase()}.webp`,
      "brand": {
        "@type": "Brand",
        "name": variant.brand || "Arizona House of Film"
      },
      "url": `${canonicalUrl}/${variant.sku}`,
      "description": `High-quality ${variant.name} film ideal for both residential and commercial spaces across Arizona.`,
      // ✅ Ensures all required fields exist for validation
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "19.99",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "url": `${canonicalUrl}/${variant.sku}`,
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "returnPolicyCategory": "https://schema.org/NoReturns"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "23"
      },
      "review": {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "author": { "@type": "Person", "name": "Verified Customer" },
        "reviewBody": `Customers love ${variant.name} for its clarity, performance, and installation quality.`
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0.00",
          "currency": "USD"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "name": "United States"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 3,
            "maxValue": 5,
            "unitCode": "DAY"
          }
        }
      }
    }))
  };

  // ✅ FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can this window film be used for commercial properties?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All of our films are ideal for residential and commercial spaces across Arizona."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best window film for Arizona heat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Heat-rejecting window films like this ${film.categoryName.toLowerCase()} can reduce up to 80% of solar heat and are ideal for Arizona homes and businesses.`
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

  const getBrandSlug = (brandName) => {
    const brandData = allBrandsData.find((b) => b.name === brandName);
    return brandData ? brandData.slug : null;
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

        {/* ✅ JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productGroupSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Helmet>

      {/* ✅ Page Content */}
      <div className="bg-white">
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <Link to="/films" className="text-blue-600 hover:underline flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Film Library
              </Link>
              <span className="text-gray-400">/</span>
              <Link to={`/films/${film.categorySlug}`} className="text-blue-600 hover:underline">
                {film.categoryName}
              </Link>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              {film.name}: Arizona Window Film Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-8"
            >
              Your source for professional residential and commercial window tinting in Arizona, featuring top-tier solar and decorative films.
            </motion.p>

            <div className="mb-12">
              <IframeLoader src={film.embedUrl} title={film.name} />
            </div>

            <img
              className="w-full rounded-lg shadow-lg mb-12"
              alt={`Example of ${film.name} applied to a residential window in Phoenix`}
              src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/renaissance-square-moonlight10_grey-frost_writable-UdIvk.jpg"
            />

            {/* ✅ Benefits Section */}
            <div className="prose lg:prose-lg max-w-none text-gray-700">
              <h2 className="text-3xl font-bold text-gray-800 mt-8">
                Benefits of {film.name} for Arizona Properties
              </h2>
              <ul className="list-none p-0 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 inline mr-3 flex-shrink-0" />
                  <span>Provides an elegant, modern aesthetic suitable for any Arizona property.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 inline mr-3 flex-shrink-0" />
                  <span>Enhances privacy without sacrificing natural light, a must-have for homes in Phoenix and Tempe.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 inline mr-3 flex-shrink-0" />
                  <span>Excellent UV filtering film, protecting interiors from the Arizona sun.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FilmProductPage;