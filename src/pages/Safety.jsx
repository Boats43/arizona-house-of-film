import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, Home, Building, Lock, Eye, ArrowRight, Phone, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Safety = () => {
  const benefits = [{
    icon: Shield,
    title: 'Break-in Deterrent',
    slug: 'break-in-deterrent',
    description: 'Security films hold glass together when broken, making it extremely difficult for intruders to gain entry quickly.'
  }, {
    icon: AlertTriangle,
    title: 'Accident Protection',
    slug: 'accident-protection',
    description: 'Prevent dangerous glass shards from scattering during accidents, protecting occupants from injury.'
  }, {
    icon: Wind,
    title: 'Storm Protection',
    slug: 'storm-protection',
    description: 'Strengthen windows against severe weather, flying debris, and high winds for enhanced property protection.'
  }, {
    icon: Eye,
    title: 'Clear Visibility',
    slug: 'clear-visibility',
    description: 'Maintain crystal-clear views while adding an invisible layer of protection to your windows.'
  }];
  const applications = [{
    name: 'Ground Floor Windows',
    slug: 'ground-floor-windows'
  }, {
    name: 'Sliding Glass Doors',
    slug: 'sliding-glass-doors'
  }, {
    name: 'French Doors',
    slug: 'french-doors'
  }, {
    name: 'Basement Windows',
    slug: 'basement-windows'
  }, {
    name: 'Storefronts',
    slug: 'storefronts'
  }, {
    name: 'Office Buildings',
    slug: 'office-buildings'
  }, {
    name: 'Schools',
    slug: 'schools'
  }, {
    name: 'Government Facilities',
    slug: 'government-facilities'
  }];
  const features = ['Invisible protection - maintains natural appearance', 'Multiple thickness options available', 'Professional installation required', 'Long-term durability and performance', 'Compatible with existing window systems', 'Available in clear and tinted options'];
  const pageTitle = "#1 Safety & Security Film in Arizona | Arizona House of Film";
  const metaDescription = "Expert safety & security film installation across Arizona—deter break-ins, prevent storm damage, and protect your property.";
  const canonicalUrl = "https://arizonahouseoffilm.com/safety";
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Safety & Security Window Film",
    "image": "https://arizonahouseoffilm.com/images/films/safety-security-film.webp",
    "description": "Professional safety & security window film installation across Arizona for protection against break-ins, accidents, and storms.",
    "brand": {
      "@type": "Brand",
      "name": "Arizona House of Film"
    },
    "sku": "AHOF-SAFETY-001",
    "url": "https://arizonahouseoffilm.com/safety",
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
      "url": "https://arizonahouseoffilm.com/safety"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "24"
    },
    "review": [{
      "@type": "Review",
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
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How does security window film work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Security window film is a heavy-duty polyester film bonded to glass with a strong adhesive. When the glass breaks, the film holds the dangerous shards together, preventing easy entry for intruders and reducing the risk of injury from flying glass."
      }
    }, {
      "@type": "Question",
      "name": "Is security film bulletproof?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, standard security window film is not bulletproof, but it is bullet-resistant. It is designed to delay entry and withstand significant impact from blunt objects, forced entry attempts, and extreme weather. For ballistic resistance, specialized products are required."
      }
    }, {
      "@type": "Question",
      "name": "Can security film be installed on any window?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, security window film can be professionally installed on most types of glass, including residential windows, commercial storefronts, and office partitions. It is a cost-effective alternative to replacing windows with laminated glass."
      }
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
            <meta property="og:image" content="https://arizonahouseoffilm.com/og-image-safety.jpg" />
            <meta property="og:type" content="website" />
            <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
          </Helmet>
    
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-red-900 to-orange-900 overflow-hidden text-white">
            <div className="absolute inset-0 hero-pattern opacity-20"></div>
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
                    Safety and Security Window Films
                  </h1>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Protect your property and loved ones with our advanced security window films. Invisible protection that holds glass together during impact.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
                      <Link to="/contact">
                        Get Security Assessment
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                    <a href="tel:480-788-1591" className="bg-white/20 text-white hover:bg-white hover:text-red-900 inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white h-11 rounded-md px-8 text-lg">
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
                  <img alt="Shattered glass being held together by safety and security window film on an Arizona property" className="w-full h-96 object-cover rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1565046777382-cf5feec7e638" />
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
                  Protection Benefits
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our safety and security window films provide multiple layers of protection for your property and peace of mind. Learn more from our <Link to="/blog/a-business-owners-guide-to-security-window-films" className="text-blue-600 hover:underline">security film guide</Link>.
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
          }} className="bg-white rounded-2xl p-8 shadow-lg card-hover">
                     <Link to={`/safety/${benefit.slug}`} className="block">
                        <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
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
    
          {/* How It Works Section */}
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
                    How Security Films Work
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Security window films are made from multiple layers of polyester that create a strong, flexible barrier when applied to glass.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Impact Absorption</h3>
                        <p className="text-gray-600">The film absorbs and distributes impact energy across the entire window surface.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Glass Retention</h3>
                        <p className="text-gray-600">When glass breaks, the film holds the pieces together, preventing dangerous shards.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Barrier Maintenance</h3>
                        <p className="text-gray-600">The window remains intact as a barrier, deterring intruders and protecting occupants.</p>
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
                  <img alt="Diagram showing the layers of security window film and how it absorbs impact on glass" className="w-full h-96 object-cover rounded-2xl shadow-2xl" src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20200602_103708-wbnWL.jpg" />
                </motion.div>
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
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Perfect Applications
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Security films are ideal for a wide variety of residential and commercial applications requiring an extra layer of protection.
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
                            <Link to={`/safety/${application.slug}`} className="block bg-white p-4 rounded-lg shadow-md border border-red-200 hover:shadow-lg hover:border-red-400 transition-all">
                                <div className="flex items-center space-x-3">
                                    <Building className="w-5 h-5 text-red-600" />
                                    <span className="font-medium text-gray-900">{application.name}</span>
                                </div>
                            </Link>
                        </motion.div>)}
                </div>
            </div>
        </section>
    
          {/* Features Section */}
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
                  <img alt="Technician professionally installing clear security window film on a commercial storefront in Phoenix" className="w-full h-96 object-cover rounded-2xl shadow-2xl" src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20210522_100207-HOphX.jpg" />
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
                    Security Film Features
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Our security films from top brands like <Link to="/brands/3m" className="text-blue-600 hover:underline">3M</Link> and <Link to="/brands/madico" className="text-blue-600 hover:underline">Madico</Link> combine advanced technology with professional installation for maximum protection.
                  </p>
                  
                  <div className="space-y-4">
                    {features.map((feature, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: 20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} viewport={{
                once: true
              }} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-xs">✓</span>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>)}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
    
          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
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
                  Secure Your Property Today
                </h2>
                <p className="text-xl text-gray-200 mb-8">
                  Don't wait for an incident to occur. Contact us today for a security assessment and protect what matters most.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4">
                    <Link to="/contact">
                      Get Security Assessment
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <a href="tel:480-788-1591" className="bg-white/20 text-white hover:bg-white hover:text-red-600 inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white h-11 rounded-md px-8">
                    Call Now: 480-788-1591
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </>;
};
export default Safety;