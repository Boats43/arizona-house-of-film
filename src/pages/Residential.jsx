import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Sun, Shield, Thermometer, Eye, DollarSign, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Residential = () => {
  const benefits = [{
    icon: Sun,
    title: 'UV Protection',
    slug: 'uv-protection',
    description: 'Block up to 99% of harmful UV rays that cause furniture fading and skin damage while maintaining natural light.'
  }, {
    icon: DollarSign,
    title: 'Energy Savings',
    slug: 'energy-savings',
    description: 'Reduce your cooling costs by up to 25% with our energy-efficient residential window films.'
  }, {
    icon: Eye,
    title: 'Enhanced Privacy',
    slug: 'enhanced-privacy',
    description: 'Enjoy privacy during the day while maintaining your view of the outdoors with one-way visibility films.'
  }, {
    icon: Thermometer,
    title: 'Temperature Control',
    slug: 'temperature-control',
    description: 'Eliminate hot spots and maintain consistent temperatures throughout your home for year-round comfort.'
  }, {
    icon: Shield,
    title: 'Glare Reduction',
    slug: 'glare-reduction',
    description: 'Reduce annoying glare on TV screens and computer monitors while preserving natural light.'
  }, {
    icon: Home,
    title: 'Increased Comfort',
    slug: 'increased-comfort',
    description: 'Create a more comfortable living environment by reducing heat buildup and temperature fluctuations.'
  }];
  const filmTypes = [{
    name: 'Solar Control Films',
    link: '/energy-saving-window-films',
    description: 'Reduce heat and glare while maintaining visibility',
    features: ['Heat rejection', 'Glare reduction', 'UV protection', 'Energy savings']
  }, {
    name: 'Decorative & Frosted Films',
    link: '/decorative-window-films',
    description: 'Add privacy and style with a variety of designs',
    features: ['Daytime privacy', 'Maintains view', 'Decorative options', 'Easy maintenance']
  }, {
    name: 'Security Films',
    link: '/films/security',
    description: 'Hold glass together during impact',
    features: ['Break-in deterrent', 'Storm protection', 'Accident prevention', 'Clear visibility']
  }];
  const pageTitle = "#1 Home Window Tinting in Arizona | Arizona House of Film";
  const metaDescription = "Expert home window tinting across Arizona—reduce UV damage, lower energy bills, and enhance privacy and comfort in your house.";
  const canonicalUrl = "https://arizonahouseoffilm.com/residential-window-tinting";
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How much does home window tinting cost in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of home window tinting in Arizona depends on the film type, window size, and total square footage. On average, homeowners can expect to pay between $5 to $12 per square foot. We offer free, detailed estimates for an exact quote."
      }
    }, {
      "@type": "Question",
      "name": "Is home window tinting worth it in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. In Arizona's sunny climate, home window tinting is a valuable investment. It can reduce cooling costs by up to 30%, block over 99% of harmful UV rays to prevent furniture fading, and significantly improve indoor comfort by reducing heat and glare."
      }
    }, {
      "@type": "Question",
      "name": "What is the best window tint for homes in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best window tints for Arizona homes are typically high-performance solar control films, such as ceramic or spectrally-selective films. These films offer excellent heat rejection without significantly darkening your windows, preserving natural light."
      }
    }]
  };
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Residential Window Tinting Film",
    "image": "https://arizonahouseoffilm.com/images/films/residential-window-film.webp",
    "description": "Professional residential window film installation across Arizona for energy savings, UV protection, and privacy in your house.",
    "brand": {
      "@type": "Brand",
      "name": "Arizona House of Film"
    },
    "sku": "AHOF-RESIDENTIAL-001",
    "url": "https://arizonahouseoffilm.com/residential-window-tinting",
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
      "url": "https://arizonahouseoffilm.com/residential-window-tinting"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "24"
    },
    "review": [{
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
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Excellent quality tint and professional installation for my home."
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
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image-residential.jpg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 text-white">
        <div className="absolute inset-0">
          <img alt="Modern Arizona home with large tinted windows" className="w-full h-full object-cover" src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20240727_093255-hCWXg.jpg" />
          <div className="absolute inset-0 bg-black/50"></div>
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
                Home Window Tinting Arizona
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Protect your family and home with professional residential window tinting. Enjoy energy savings, UV protection, and enhanced comfort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-green-900 hover:bg-gray-100">
                  <Link to="/contact">
                    Get Free Estimate
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <a href="tel:480-788-1591" className="bg-white/20 text-white hover:bg-white hover:text-green-900 inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white h-11 rounded-md px-8 text-lg">
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
              <img alt="Interior of a comfortable living room with tinted windows" className="w-full h-96 object-cover rounded-2xl shadow-2xl" src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20250308_084212-1-aYIad.jpg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Benefits of Home Window Tinting in Arizona
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your home into a more comfortable, energy-efficient, and protected living space. Read our <Link to="/blog/ultimate-guide-to-window-tinting-benefits-in-arizona" className="text-blue-600 hover:underline">ultimate guide</Link> for more details.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          }} className="bg-white rounded-2xl p-8 shadow-lg card-hover">
               <Link to={`/residential-window-tinting/${benefit.slug}`} className="block">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 hover:text-blue-600">
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

      {/* Film Types Section */}
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
              Types of Residential Window Films
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our selection of high-quality window films from top <Link to="/brands" className="text-blue-600 hover:underline">brands</Link> designed specifically for residential applications. We serve all areas, including <Link to="/service-areas/scottsdale" className="text-blue-600 hover:underline">Scottsdale</Link>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filmTypes.map((film, index) => <motion.div key={film.name} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.2
          }} viewport={{
            once: true
          }} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                <Link to={film.link}><h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600">
                  {film.name}
                </h3></Link>
                <p className="text-gray-600 mb-6">
                  {film.description}
                </p>
                <ul className="space-y-3">
                  {film.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>)}
                </ul>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Featuring Top Residential Brands
          </h2>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We install high-quality residential films from trusted manufacturers to ensure your home gets the best protection and performance.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            <Link to="/brands/3m" className="font-semibold text-gray-600 hover:text-blue-600 transition-colors text-xl">3M</Link>
            <Link to="/brands/gila" className="font-semibold text-gray-600 hover:text-blue-600 transition-colors text-xl">Gila</Link>
            <Link to="/brands/artscape" className="font-semibold text-gray-600 hover:text-blue-600 transition-colors text-xl">Artscape</Link>
            <Link to="/brands/enerlogic" className="font-semibold text-gray-600 hover:text-blue-600 transition-colors text-xl">EnerLogic</Link>
            <Link to="/brands/madico" className="font-semibold text-gray-600 hover:text-blue-600 transition-colors text-xl">Madico</Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
          }}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Installation Process
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Consultation</h3>
                    <p className="text-gray-600">We assess your needs and recommend the best window film solutions for your home.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Measurement</h3>
                    <p className="text-gray-600">Precise measurements ensure perfect fit and optimal performance of your window films.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Installation</h3>
                    <p className="text-gray-600">Our certified technicians install your window films with precision and care.</p>
                  </div>
                </div>
              </div>
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
          }} className="relative">
              <img alt="Professional technician installing residential window film" className="w-full h-96 object-cover rounded-2xl shadow-2xl" src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20250821_144115-zLE7k.jpg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
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
              Ready to Enhance Your Home?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact us today for a free consultation and discover how residential window tinting can transform your living space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4">
                <Link to="/contact">
                  Get Your Free Estimate
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <a href="tel:480-788-1591" className="bg-white/20 text-white hover:bg-white hover:text-green-600 inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white h-11 rounded-md px-8">
                Call Now: 480-788-1591
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>;
};
export default Residential;