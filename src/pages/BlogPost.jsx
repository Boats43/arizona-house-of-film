import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts.jsx';
import NotFound from '@/pages/NotFound';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return <NotFound />;

  const canonicalUrl = post.canonicalUrl
    ? `https://arizonahouseoffilm.com${post.canonicalUrl}`
    : `https://arizonahouseoffilm.com/blog/${post.slug}`;
  const { title, date, content, blogSchema, faqPageSchema, excerpt } = post;

  const pageTitle = `${title} | Arizona House of Film`;
  const metaDescription = excerpt || "Learn expert insights, case studies, and window film tips from Arizona House of Film.";
  
  const ogImageUrl = `https://arizonahouseoffilm.com/og-images/blog/${slug}.jpg`;

  const processedContent = content.replace(
    /<img alt="([^"]*)" src="[^"]*"\s*\/?>/g,
    (_, altText) =>
      `<img alt="${altText}" src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/placeholder-blog-image.jpg" class="w-full h-auto object-cover rounded-lg my-8 shadow-lg" loading="lazy">`
  );

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    "xpath": ["/html/head/title", "/html/body//h1"]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://arizonahouseoffilm.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://arizonahouseoffilm.com/blog" },
      { "@type": "ListItem", "position": 3, "name": title, "item": canonicalUrl }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />

        {blogSchema && <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>}
        {faqPageSchema && <script type="application/ld+json">{JSON.stringify(faqPageSchema)}</script>}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(speakableSchema)}</script>
      </Helmet>

      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <div className="mb-8">
              <Link to="/blog" className="text-blue-600 hover:underline flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-md text-gray-500 flex items-center">
              <Calendar className="w-4 h-4 mr-2" /> Published on {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </header>

          <div
            className="prose lg:prose-xl max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Continue Exploring</h3>
            <ul className="list-none p-0 space-y-2">
              <li>
                <Link to="/commercial-window-tinting" className="text-blue-600 hover:underline">
                  Explore commercial tinting options
                </Link>
              </li>
              <li>
                <Link to="/service-areas/phoenix" className="text-blue-600 hover:underline">
                  See local installs in Phoenix
                </Link>
              </li>
              <li>
                <Link to="/decorative-window-films" className="text-blue-600 hover:underline">
                  Compare decorative film types
                </Link>
              </li>
            </ul>
          </footer>
        </div>
      </motion.article>
    </>
  );
};

export default BlogPost;