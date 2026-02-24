import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supportingPagesData } from '@/data/supportingPagesData';

/* ============================================================
   SupportingPage — FULL SEO FIREWALL + CANONICAL CORRECTION
   This prevents WordPress ghost URLs from being indexed.
============================================================ */
const SupportingPage = () => {
  const { category, slug } = useParams();

  // Only build key if both parts exist
  const pageKey = category && slug ? `${category}/${slug}` : null;
  let pageData = pageKey ? supportingPagesData[pageKey] : null;

  /* ============================================================
     FIREWALL LAYER 1 — Invalid Nested Route (/category/slug)
  ============================================================ */
  if (!pageData) {
    // FIREWALL LAYER 2 — Old single-slug structure (legacy WP URLs)
    const singleSlugData = slug ? supportingPagesData[slug] : null;

    if (singleSlugData) {
      return <SingleSlugRedirect data={singleSlugData} />;
    }

    // FIREWALL LAYER 3 — Fully block fake URLs
    return (
      <>
        <Helmet>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <Navigate to="/404" replace />
      </>
    );
  }

  /* ============================================================
     DATA EXTRACTION (Safe because validation passed)
  ============================================================ */
  const { title, metaDescription, canonicalUrl, hero, content, faqs } = pageData;

  /* ============================================================
     SCHEMAS
  ============================================================ */
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://arizonahouseoffilm.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: hero.parent,
        item: `https://arizonahouseoffilm.com${hero.parentLink}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title.split('|')[0].trim(),
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema =
    faqs && faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs,
        }
      : null;

  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: title,
    description: metaDescription,
    brand: { '@type': 'Brand', name: 'Arizona House of Film' },
    url: canonicalUrl,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '0.00',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      url: canonicalUrl,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '18',
    },
  };

  /* ============================================================
     PAGE RENDER
  ============================================================ */
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}

        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      <div className="bg-white">
        {/* ================= HERO ================= */}
        <header className={`relative py-20 text-white ${hero.gradient}`}>
          {hero.imageUrl && (
            <img
              alt={hero.imageAlt}
              className="absolute inset-0 w-full h-full object-cover"
              src={hero.imageUrl}
            />
          )}

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <div className="mb-4">
              <Link
                to={hero.parentLink}
                className="text-white hover:underline flex items-center justify-center text-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to {hero.parent}
              </Link>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              {hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
            >
              {hero.subtitle}
            </motion.p>
          </div>
        </header>

        {/* ================= CONTENT ================= */}
        <main className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose lg:prose-lg max-w-none text-gray-800"
            >
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </motion.div>
          </div>
        </main>

        {/* ================= FAQ ================= */}
        {faqSchema && (
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">
                      {faq.name}
                    </h3>
                    <p className="text-gray-700">
                      {faq.acceptedAnswer.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ================= CTA ================= */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Enhance Your Property?
            </h2>

            <p className="text-lg text-blue-100 mb-8">
              Contact Arizona House of Film today for a free, no-obligation estimate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-200 font-semibold"
              >
                <Link to="/contact">Request Your Free Quote</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold"
              >
                <a href="tel:480-788-1591">
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

/* ============================================================
   Redirect Legacy Single-Slug URLs (old WP structure)
============================================================ */
const SingleSlugRedirect = ({ data }) => {
  const newPath = data.canonicalUrl.replace(
    'https://arizonahouseoffilm.com',
    ''
  );
  return <Navigate to={newPath} replace />;
};

export default SupportingPage;
