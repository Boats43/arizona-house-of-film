import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts.jsx';

// ✅ Renamed component for clarity and minifier safety
const BlogPage = () => {
  const pageTitle = "Window Tinting Arizona Blog | Arizona House of Film";
  const metaDescription = "Expert tips on window tinting in Arizona. Energy savings, UV protection, decorative films, and brands like 3M and SunTek. Phoenix and Scottsdale coverage.";
  const canonicalUrl = "https://arizonahouseoffilm.com/blog";

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What topics does the Arizona House of Film blog cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Our blog covers topics such as energy-saving window films, UV protection, decorative vs privacy films, installation tips, and local Arizona case studies including Phoenix, Scottsdale, and Tempe."
        }
      }
    ]
  };

  const breadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://arizonahouseoffilm.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": canonicalUrl
      }
    ]
  };

  // ✅ Avoid reusing “post” name — minifier-safe
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Arizona House of Film Blog",
    "url": canonicalUrl,
    "description": metaDescription,
    "publisher": {
      "@type": "Organization",
      "name": "Arizona House of Film",
      "logo": {
        "@type": "ImageObject",
        "url": "https://arizonahouseoffilm.com/images/Arizona-House-of-Film.webp"
      }
    },
    "blogPost": blogPosts.map(entry => ({
      "@type": "BlogPosting",
      "headline": entry.title,
      "url": `https://arizonahouseoffilm.com/blog/${entry.slug}`,
      "datePublished": entry.date,
      "author": {
        "@type": "Organization",
        "name": "Arizona House of Film"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Arizona House of Film"
      }
    }))
  };

  const sortedEntries = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://arizonahouseoffilm.com/og-image-blog.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbListSchema)}
        </script>
      </Helmet>

      <div className="bg-gray-50">
        {/* Hero Section */}
        <header className="relative py-20 text-white">
          <div className="absolute inset-0">
            <img
              alt="Person writing on a notepad, symbolizing blog content creation"
              className="w-full h-full object-cover"
              src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20231104_094145-5v8TT.jpg"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Window Tinting Arizona Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
            >
              Your source for expert insights, energy-saving tips, and the latest
              film technology across Arizona.
            </motion.p>
          </div>
        </header>

        {/* Blog Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedEntries.map((entry, index) => (
                <motion.article
                  key={entry.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-all"
                >
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-gray-500 flex items-center mb-2">
                      <Calendar className="w-4 h-4 mr-2" />{" "}
                      {new Date(entry.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}
                    </p>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 flex-grow">
                      <Link
                        to={`/blog/${entry.slug}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {entry.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4 text-sm">{entry.excerpt}</p>
                    <div className="mt-auto">
                      <Link
                        to={`/blog/${entry.slug}`}
                        className="text-blue-600 hover:text-blue-800 inline-flex items-center font-semibold"
                      >
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;