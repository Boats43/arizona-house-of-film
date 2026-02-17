import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, DollarSign, Thermometer, Zap, Shield, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
const EnergySaving = () => {
  const pageTitle = "#1 Energy-Saving Window Film in Arizona | Arizona House of Film";
  const metaDescription = "Expert energy-saving window film installation across Arizona—reduce heat, lower AC bills, and protect your interiors from UV damage. Free quotes available.";
  const canonicalUrl = "https://arizonahouseoffilm.com/energy-saving-window-films";
  const benefits = [{
    icon: DollarSign,
    title: 'Lower Energy Bills',
    description: 'Reduce cooling costs by up to 30% by blocking solar heat and improving HVAC efficiency.'
  }, {
    icon: Sun,
    title: 'Enhanced Comfort',
    description: 'Eliminate hot spots and maintain consistent indoor temperatures year-round.'
  }, {
    icon: Shield,
    title: 'UV Protection',
    description: 'Block over 99% of harmful UV rays, protecting furniture, flooring, and artwork from fading.'
  }, {
    icon: Zap,
    title: 'Glare Reduction',
    description: 'Minimize harsh glare on screens and surfaces, improving visibility and reducing eye strain.'
  }];
  const filmTypes = [{
    name: 'Ceramic Films',
    features: ['High heat rejection', 'Optically clear', 'Non-metallized', 'Blocks UV']
  }, {
    name: 'Spectrally Selective Films',
    features: ['Maximize visible light', 'Block heat', 'Low reflectivity', 'Blocks UV']
  }, {
    name: 'Dual-Reflective Films',
    features: ['Excellent glare control', 'Good daytime privacy', 'High heat rejection', 'Blocks UV']
  }];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How much energy can window film save in Arizona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Energy-saving window films can reduce cooling costs by up to 30% by blocking a significant portion of solar heat gain. This leads to a more efficient HVAC system and noticeable savings on your utility bills, especially in Arizona's hot climate."
      }
    }, {
      "@type": "Question",
      "name": "Will energy-saving film make my home dark?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, not necessarily. Many advanced energy-saving films, especially ceramic and spectrally selective options, are designed to be optically clear or very lightly tinted. They can block heat and UV rays effectively without significantly altering the amount of natural light or your view."
      }
    }, {
      "@type": "Question",
      "name": "Do energy-saving window films qualify for rebates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some energy-efficient window films may qualify for local utility rebates or tax credits in Arizona, depending on the specific film's performance and current programs. We recommend checking with your local energy provider or a tax professional for current incentives."
      }
    }]
  };
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Energy-Saving Window Film",
    "image": "https://arizonahouseoffilm.com/images/films/energy-saving-window-film.webp",
    "description": "Professional energy-saving window film installation across Arizona—reduce heat, lower AC bills, and protect your interiors from UV damage.",
    "brand": {
      "@type": "Brand",
      "name": "Arizona House of Film"
    },
    "sku": "AHOF-ENERGY-001",
    "url": canonicalUrl,
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
      "url": canonicalUrl
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
      "reviewBody": "Excellent energy savings and improved comfort."
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
                <meta property="og:image" content="https://arizonahouseoffilm.com/og-image-energy-saving.jpg" />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-blue-900 to-green-900 overflow-hidden text-white">
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
                                Energy-Saving Window Films
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Dramatically reduce your energy bills and enhance comfort with our high-performance solar control films, engineered for Arizona's climate.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
                                    <Link to="/contact">
                                        Get a Free Energy Audit
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                                <a href="tel:480-788-1591" className="bg-white/20 text-white hover:bg-white hover:text-blue-900 inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white h-11 rounded-md px-8 text-lg">
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
                            <img alt="Modern building with energy-efficient tinted windows reflecting the sky" className="w-full h-96 object-cover rounded-2xl shadow-2xl" src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20210626_114245-K8xAB.jpg" />
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
                            Key Benefits of Energy-Saving Films
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our advanced window films are designed to provide maximum performance in Arizona's extreme heat, benefiting both your wallet and your comfort. Learn more from our blog about <Link to="/blog/slashing-your-energy-bills-with-window-film" className="text-blue-600 hover:underline">slashing your energy bills</Link>.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-6">
                                    <benefit.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
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
                            Advanced Film Technologies
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We offer a variety of cutting-edge energy-saving films from top <Link to="/brands" className="text-blue-600 hover:underline">brands</Link>, each designed for specific performance and aesthetic needs.
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
          }} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-200">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {film.name}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    These films are engineered to maximize performance without sacrificing natural light or aesthetics.
                                </p>
                                <ul className="space-y-3">
                                    {film.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center space-x-3">
                                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                                <span className="text-white font-bold text-xs">✓</span>
                                            </div>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>)}
                                </ul>
                            </motion.div>)}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
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
                            Start Saving on Energy Today!
                        </h2>
                        <p className="text-xl text-gray-200 mb-8">
                            Contact us for a free energy assessment and discover how much you can save with our professional energy-saving window film installation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4">
                                <Link to="/contact">
                                    Request Your Free Quote
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                            <a href="tel:480-788-1591" className="bg-white/20 text-white hover:bg-white hover:text-blue-600 inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white h-11 rounded-md px-8">
                                Call Now: 480-788-1591
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>;
};
export default EnergySaving;