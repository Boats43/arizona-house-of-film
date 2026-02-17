import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react';
import { brands } from '@/data/brands';
import { filmCategories } from '@/data/films';
import { blogPosts } from '@/data/blogPosts.jsx';
import { cities } from '@/data/cities';
import NotFound from '@/pages/NotFound';
import { Button } from '@/components/ui/button';

const BrandPage = () => {
  const { slug } = useParams();
  const brand = brands.find(b => b.slug === slug);

  if (!brand) return <NotFound />;

  const pageTitle = `${brand.name} Window Films | Arizona House of Film`;
  const metaDescription = `Learn about ${brand.name} window films and their advantages for Arizona homes and businesses. Arizona House of Film installs ${brand.name} products across Phoenix, Scottsdale, and beyond.`;
  const canonicalUrl = `https://arizonahouseoffilm.com/brands/${brand.slug}`;

  // ✅ Schema: Breadcrumb
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://arizonahouseoffilm.com/" },
      { "@type": "ListItem", "position": 2, "name": "Brands", "item": "https://arizonahouseoffilm.com/brands" },
      { "@type": "ListItem", "position": 3, "name": brand.name, "item": canonicalUrl }
    ]
  };

  // ✅ Schema: Organization + Brand
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Arizona House of Film",
    "url": "https://arizonahouseoffilm.com",
    "logo": "https://arizonahouseoffilm.com/logo.png",
    "description": "Arizona’s trusted installer of high-quality window films for residential and commercial properties.",
    "brand": {
      "@type": "Brand",
      "name": brand.name,
      "url": canonicalUrl,
      "logo": `https://arizonahouseoffilm.com/og-image-brand-${brand.slug}.jpg`,
      "description": brand.description
    }
  };

  // ✅ Schema: FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Are you an authorized installer for ${brand.name} films in Arizona?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, Arizona House of Film is a certified installer of ${brand.name} films, offering manufacturer-backed warranties and expert installation services.`
        }
      },
      {
        "@type": "Question",
        "name": `What types of ${brand.name} films are available?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `We provide a range of ${brand.name} solutions for solar control, decorative enhancement, and security protection — ideal for Arizona’s climate.`
        }
      },
      {
        "@type": "Question",
        "name": `What warranties are available for ${brand.name} films?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${brand.name} warranties typically include lifetime coverage for residential installs and up to 15 years for commercial projects, depending on the product line.`
        }
      },
      {
        "@type": "Question",
        "name": `Why choose ${brand.name} over other brands?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${brand.name} is recognized for superior heat rejection, UV defense, and optical clarity. Their proprietary adhesive and coating technology outperform most competitors.`
        }
      }
    ]
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
        "name": "Verified Client"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": `We chose ${brand.name} for our office and Arizona House of Film did an excellent installation job.`
  };


  // ✅ Find related films + blog posts
  const relatedFilmCategories = filmCategories.filter(cat =>
    brand.relatedFilms.some(rf => cat.slug.includes(rf))
  );

  const relatedBlogPosts = blogPosts
    .filter(post => post.brandMentions?.includes(brand.name))
    .slice(0, 3);

  const majorCities = cities.slice(0, 5);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Twitter */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`https://arizonahouseoffilm.com/og-image-brand-${brand.slug}.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
      </Helmet>

      <div className="bg-white">
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back link */}
            <div className="mb-8">
              <Link to="/brands" className="text-blue-600 hover:underline flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Brands
              </Link>
            </div>

            {/* Title & Description */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              {brand.name} Window Films
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl"
            >
              {brand.description}
            </motion.p>

            {brand.url !== "#" && (
              <Button asChild variant="outline">
                <a href={brand.url} target="_blank" rel="noopener noreferrer">
                  Visit Official Website <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            )}

            {/* Main Content */}
            <div className="prose lg:prose-lg max-w-none text-gray-700 mt-12">
              <h2 className="text-3xl font-bold text-gray-800">
                Your Authorized {brand.name} Installer in Arizona
              </h2>
              <p>
                Arizona House of Film is proud to offer professional installation of {brand.name} window films — engineered for superior heat rejection, glare reduction, and UV protection. Our installers are factory-trained to ensure every {brand.name} film performs to manufacturer standards.
              </p>
              <p>
                {brand.name} films combine advanced nanotechnology, durable adhesives, and clear optical quality, making them ideal for Arizona’s climate. Whether you’re upgrading your home, storefront, or office, our experts can guide you to the right film for your project.
              </p>

              {/* Related Films & Blogs */}
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Related {brand.name} Film Categories
                  </h3>
                  {relatedFilmCategories.length ? (
                    <ul className="list-none p-0 space-y-3 mt-4">
                      {relatedFilmCategories.map(cat => (
                        <li key={cat.slug} className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                          <Link to={`/films/${cat.slug}`} className="font-semibold hover:underline">
                            {cat.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No specific film categories are currently highlighted for this brand.</p>
                  )}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Mentioned in Our Blog
                  </h3>
                  {relatedBlogPosts.length ? (
                    <ul className="list-none p-0 space-y-3 mt-4">
                      {relatedBlogPosts.map(post => (
                        <li key={post.slug}>
                          <Link to={`/blog/${post.slug}`} className="font-semibold hover:underline">
                            {post.title.replace(/ v\d+$/, '')}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>
                      Read our <Link to="/blog" className="font-semibold hover:underline">blog</Link> for more window film insights.
                    </p>
                  )}
                </div>
              </div>

              {/* Gallery Link */}
              <div className="mt-8">
                <Link to="/gallery" className="text-blue-600 hover:underline font-semibold">
                  View our gallery of {brand.name} installations
                </Link>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6 max-w-4xl mx-auto">
                {faqSchema.mainEntity.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-6 rounded-lg shadow-sm"
                  >
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">{faq.name}</h3>
                    <p className="text-gray-700">{faq.acceptedAnswer.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-blue-50 p-8 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-blue-800">
                Get a Quote for {brand.name} Films
              </h3>
              <p className="mt-2 text-blue-700 text-lg">
                Contact us today for a free, no-obligation estimate on {brand.name} window film installation.
              </p>
              <Button asChild size="lg" className="mt-6 px-8 py-3 text-lg">
                <Link to="/contact">Get My Free Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BrandPage;