import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Palette, Eye, Sparkles, Home, Building, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Decorative = () => {
  const pageTitle = "#1 Decorative Window Film in Arizona | Arizona House of Film";
  const metaDescription = "Expert decorative window film installation across Arizona—transform glass into art with frosted, patterned, and custom designs for privacy and style.";
  const canonicalUrl = "https://arizonahouseoffilm.com/decorative-window-films";
  const filmLibrary = [{
    category: 'Frosted Films',
    slug: 'frosted-etched-films',
    description: 'Classic etched glass appearance',
    patterns: ['Light Frost', 'Medium Frost', 'Heavy Frost', 'Crystal Frost']
  }, {
    category: 'Geometric Patterns',
    slug: 'patterned-privacy-films',
    description: 'Modern geometric designs',
    patterns: ['Squares', 'Diamonds', 'Hexagons', 'Triangles']
  }, {
    category: 'Nature Inspired',
    slug: 'patterned-privacy-films',
    description: 'Organic and natural motifs',
    patterns: ['Bamboo', 'Rice Paper', 'Stone', 'Wood Grain']
  }, {
    category: 'Abstract Designs',
    slug: 'elegant-textured-films',
    description: 'Contemporary artistic patterns',
    patterns: ['Waves', 'Clouds', 'Bubbles', 'Swirls']
  }, {
    category: 'Traditional Patterns',
    slug: 'stained-glass-films',
    description: 'Classic and timeless designs',
    patterns: ['Victorian', 'Art Deco', 'Floral', 'Paisley']
  }, {
    category: 'Custom Graphics',
    slug: 'specialty-films',
    description: 'Personalized designs and logos',
    patterns: ['Company Logos', 'Custom Text', 'Artwork', 'Branding']
  }];
  const benefits = [{
    icon: Eye,
    title: 'Enhanced Privacy',
    slug: 'enhanced-privacy',
    description: 'Create private spaces while maintaining natural light flow throughout your property.'
  }, {
    icon: Sparkles,
    title: 'Aesthetic Appeal',
    slug: 'aesthetic-appeal',
    description: 'Transform plain glass into stunning design elements that complement your décor.'
  }, {
    icon: Palette,
    title: 'Design Flexibility',
    slug: 'design-flexibility',
    description: 'Choose from hundreds of patterns or create custom designs to match your vision.'
  }, {
    icon: Home,
    title: 'Easy Maintenance',
    slug: 'easy-maintenance',
    description: 'Decorative films are easy to clean and maintain, lasting for years with proper care.'
  }];
  const applications = [{
    name: 'Conference Room Glass',
    slug: 'industries/office-buildings'
  }, {
    name: 'Bathroom Windows',
    slug: 'decorative-window-films/enhanced-privacy'
  }, {
    name: 'Front Doors',
    slug: 'safety/french-doors'
  }, {
    name: 'Shower Enclosures',
    slug: 'decorative-window-films/enhanced-privacy'
  }, {
    name: 'Office Partitions',
    slug: 'industries/office-buildings'
  }, {
    name: 'Retail Storefronts',
    slug: 'industries/retail-stores'
  }, {
    name: 'Restaurant Dividers',
    slug: 'industries/restaurants'
  }, {
    name: 'Home Windows',
    slug: 'residential-window-tinting'
  }];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What types of decorative window film do you offer in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer a vast selection of decorative window films, including frosted films, etched glass patterns, geometric designs, nature-inspired textures, and fully custom-printed graphics. Our films can mimic the look of expensive specialty glass for a fraction of the cost."
      }
    }, {
      "@type": "Question",
      "name": "Can decorative film be used for privacy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, decorative films are an excellent solution for enhancing privacy. Frosted and patterned films obscure the view while still allowing natural light to pass through, making them perfect for bathrooms, conference rooms, and front doors."
      }
    }, {
      "@type": "Question",
      "name": "Is it possible to get a custom logo printed on window film?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We specialize in creating custom decorative films, including company logos, branding elements, and unique graphics. This is a popular choice for commercial clients looking to enhance their storefront or office space."
      }
    }]
  };
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Decorative Window Film",
    "image": "https://arizonahouseoffilm.com/images/films/decorative-window-film.webp",
    "description": "Professional decorative window film installation in Arizona. Transform glass with frosted, patterned, and custom designs for privacy and style.",
    "brand": {
      "@type": "Brand",
      "name": "Arizona House of Film"
    },
    "sku": "AHOF-DECORATIVE-001",
    "url": "https://arizonahouseoffilm.com/decorative-window-films",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "0.00",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "US",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 30,
        "returnFees": "https://schema.org/FreeReturn"
      },
      "url": "https://arizonahouseoffilm.com/decorative-window-films"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "24"
    },
    "review": [{
      "@type": "Review",
      "itemReviewed": {
        "@type": "Organization",
        "name": "Arizona House of Film"
      },
      "author": {
        "@type": "Person",
        "name": "Verified Customer"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Excellent quality tint and professional installation."
    }]
  };
  return <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image-decorative.jpg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden text-white">
        <div className="absolute inset-0">
            <img alt="Elegant decorative window film with a frosted pattern on a glass door" className="w-full h-full object-cover" src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20221202_101145-IvRcT.jpg" />
            <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Decorative Window Film Arizona
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Transform ordinary glass into stunning design elements. Our extensive decorative film library offers endless possibilities for privacy and style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
                  <a href="#film-library">
                    View Our Library
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <a href="tel:480-788-1591" className="bg-white/20 text-white hover:bg-white hover:text-purple-900 inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white h-11 rounded-md px-8 text-lg">
                  <Phone className="mr-2 w-5 h-5" /> Call 480-788-1591
                </a>
              </div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="relative">
              <img alt="Close-up of a custom decorative film with a nature-inspired pattern" className="w-full h-96 object-cover rounded-2xl shadow-2xl" src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/united-airlines-sky-harbor-window-tint-Ye98m.jpg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Film Library Section */}
      <section id="film-library" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Decorative Film Library
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our extensive collection of decorative window films, featuring hundreds of patterns and the option for custom designs. See our full <Link to="/films" className="text-blue-600 hover:underline">film library</Link> or films from <Link to="/brands/3m" className="text-blue-600 hover:underline">3M Fasara</Link>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filmLibrary.map((category, index) => <motion.div key={category.category} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="bg-white rounded-2xl p-8 shadow-lg card-hover">
                <Link to={`/films/${category.slug}`}>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                    <Palette className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600">
                    {category.category}
                    </h3>
                </Link>
                <p className="text-gray-600 mb-6">
                  {category.description}
                </p>
                <div className="space-y-2">
                  {category.patterns.map((pattern, patternIndex) => <div key={patternIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">{pattern}</span>
                    </div>)}
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how decorative window films can enhance both the functionality and aesthetics of your space.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200 card-hover">
                <Link to={`/decorative-window-films/${benefit.slug}`} className="block">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600">
                    {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                    </p>
                </Link>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Applications Section */}
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Perfect Applications</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Decorative window films are ideal for a wide variety of residential and commercial applications.
                    </p>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {applications.map((application, index) => <motion.div key={application.name} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }}>
                            <Link to={`/${application.slug}`} className="block bg-white p-4 rounded-lg shadow-md border border-purple-200 hover:shadow-lg hover:border-purple-400 transition-all">
                                <div className="flex items-center space-x-3">
                                    <Building className="w-5 h-5 text-purple-600" />
                                    <span className="font-medium text-gray-900">{application.name}</span>
                                </div>
                            </Link>
                        </motion.div>)}
                </div>
            </div>
        </section>

      {/* Custom Design Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="relative">
              <img alt="Custom decorative window film with a company logo on a Phoenix storefront" className="w-full h-96 object-cover rounded-2xl shadow-2xl" src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20210413_115512-1-Wb1kK.jpg" />
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Custom Design Services
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Can't find what you're looking for in our library? We offer custom design services to create unique decorative films tailored to your specific needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Company logos and branding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Custom artwork and graphics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Personalized text and messaging</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Architectural design elements</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Explore our decorative film library and discover the perfect design for your project. Contact us for a consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4">
                <Link to="/contact">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <a href="tel:480-788-1591" className="bg-white/20 text-white hover:bg-white hover:text-purple-600 inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white h-11 rounded-md px-8">
                Call Now: 480-788-1591
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>;
};
export default Decorative;