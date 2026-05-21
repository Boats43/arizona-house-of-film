import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Facebook, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Gallery images — actual project photos from public/images/gallery/
const galleryImages = [
  { src: "/images/gallery/20241212_132902.jpg", alt: "Arizona residential window tinting installation on modern home in Scottsdale" },
  { src: "/images/gallery/20250830_141748.jpg", alt: "Commercial office building with solar control film in Phoenix, AZ" },
  { src: "/images/gallery/20250619_100523.jpg", alt: "Decorative window film installation on patio doors in Mesa home" },
  { src: "/images/gallery/20250217_125430.jpg", alt: "Retail storefront with security film installation in Tempe, Arizona" },
  { src: "/images/gallery/20250217_120258.jpg", alt: "Privacy window film installation in Chandler residential project" },
  { src: "/images/gallery/White Frost  Salt Box.webp", alt: "White frost decorative film on Salt Box architecture in Phoenix area" },
];

const imageVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

const Gallery = () => {
  const pageTitle = "Window Tinting Project Gallery | Arizona House of Film";
  const metaDescription = "Window tinting project gallery — Phoenix, Scottsdale, and Arizona. Residential and commercial installations by Arizona House of Film. ROC #314088.";
  const canonicalUrl = "https://arizonahouseoffilm.com/gallery";
  const ogImage = "https://arizonahouseoffilm.com/og-image.jpg";

  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: pageTitle,
    description: metaDescription,
    url: canonicalUrl,
    author: { "@type": "LocalBusiness", "@id": "https://arizonahouseoffilm.com", name: "Arizona House of Film" }
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
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="relative py-20 bg-gradient-to-br from-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Window Film Installation Gallery | Phoenix &amp; Scottsdale Projects</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Browse Arizona House of Film's installation portfolio — residential homes, commercial offices, retail storefronts, and specialty applications across Phoenix, Scottsdale, and Arizona. Every project in this gallery was completed by our licensed installation team. ROC #314088.</p>
            <Button asChild size="lg" className="bg-white text-indigo-900 hover:bg-gray-100">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A showcase of our quality work on residential and commercial properties across Arizona.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((img, index) => (
              <motion.div key={index} variants={imageVariants} initial="hidden" whileInView="visible" transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}
                className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-200">
                <img alt={img.alt} className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300"
                  src={img.src} loading="lazy" width="640" height="320"
                  onError={(e) => { e.target.style.display='none'; e.target.parentNode.style.minHeight='320px'; }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Follow Our Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Check out our latest projects and see how we're transforming spaces across Phoenix.</p>
          </motion.div>
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all">
              <a href="https://www.instagram.com/arizonahouseoffilm" target="_blank" rel="noopener noreferrer"><Instagram className="mr-2 w-5 h-5" />Instagram</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
              <a href="https://www.facebook.com/Azwindowtint/" target="_blank" rel="noopener noreferrer"><Facebook className="mr-2 w-5 h-5" />Facebook</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition-all">
              <a href="https://g.co/kgs/hEuns6S" target="_blank" rel="noopener noreferrer"><Star className="mr-2 w-5 h-5" />Google Reviews</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-200 mb-8">Join our satisfied customers and transform your space with professional window film installation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4">
                <Link to="/contact">Get Your Free Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <a href="tel:480-788-1591" className="bg-white/10 text-white hover:bg-white hover:text-indigo-600 inline-flex items-center justify-center font-medium border border-white h-11 rounded-md px-8 transition-colors">
                Call 480-788-1591
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
