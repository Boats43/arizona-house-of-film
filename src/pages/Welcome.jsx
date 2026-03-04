import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Shield, Building, Home as HomeIcon, Palette, Phone, ArrowRight, Zap, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cities } from '@/data/cities';
const Welcome = () => {
  const services = [{
    name: 'Residential Tinting',
    icon: HomeIcon,
    link: '/residential'
  }, {
    name: 'Commercial Tinting',
    icon: Building,
    link: '/commercial'
  }, {
    name: 'Decorative Films',
    icon: Palette,
    link: '/decorative'
  }, {
    name: 'Safety & Security',
    icon: Shield,
    link: '/safety'
  }, {
    name: 'Energy-Saving Films',
    icon: Zap,
    link: '/energy-saving'
  }];
  const faqs = [{
    question: "Do you serve all of Arizona?",
    answer: "Yes, we provide statewide coverage. Whether you're in a major metro area like Phoenix or Tucson, or a smaller community, our team is ready to deliver professional window film installation services to your location."
  }, {
    question: "How quickly can installation be scheduled?",
    answer: "We can typically schedule an installation within 1-3 business days, depending on your location and the scope of the project. Contact us for the most accurate scheduling information."
  }, {
    question: "Do you offer warranties?",
    answer: "Yes, we use premium films that come with robust manufacturer warranties, covering issues like bubbling, peeling, and discoloration. We also guarantee our installation quality."
  }, {
    question: "Can window film reduce my AC bills?",
    answer: "Yes. By rejecting a significant amount of solar heat, our energy-saving films can reduce the load on your air conditioning system, leading to savings of up to 30% on your cooling costs."
  }];
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Arizona House of Film",
    "url": "https://www.arizonahouseoffilm.com/welcome",
    "telephone": "480-788-1591",
    "email": "arizonahouseoffilm@gmail.com",
    "description": "Professional residential & commercial window tinting across Phoenix, Tucson, Mesa, and statewide.",
    "areaServed": cities.map(city => ({
      "@type": "City",
      "name": city.name
    })),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Phoenix",
      "addressRegion": "AZ",
      "addressCountry": "US"
    },
    "sameAs": ["https://www.facebook.com/Azwindowtint/", "https://www.instagram.com/arizonahouseoffilm", "https://g.co/kgs/hEuns6S"]
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  return <>
      <Helmet>
        <title>Welcome to Arizona House of Film | Statewide Tinting Service</title>
        <meta name="description" content="Professional residential & commercial window tinting across Phoenix, Tucson, Mesa, and statewide." />
        <link rel="canonical" href="https://arizonahouseoffilm.com/welcome" />
        <meta property="og:title" content="Welcome to Arizona House of Film | Statewide Tinting Service" />
        <meta property="og:description" content="Professional residential & commercial window tinting across Phoenix, Tucson, Mesa, and statewide." />
        <meta property="og:url" content="https://arizonahouseoffilm.com/welcome" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image-welcome.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-gray-50 text-gray-800">
        <section className="relative py-20 text-white">
          <img alt="Arizona desert landscape at sunset, representing statewide service area" className="absolute inset-0 w-full h-full object-cover" src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20180711_125559-jwffm.jpg" fetchPriority="high" width="1920" height="1080" />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7
          }} className="text-4xl md:text-6xl font-bold text-white mb-4">
              Welcome to Arizona House of Film
            </motion.h1>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.2
          }} className="text-lg md:text-xl text-gray-200 mb-8">
              Your statewide experts in window tinting solutions for cooling, UV protection, energy savings, and security.
            </motion.p>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.4
          }}>
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-200">
                <a href="tel:480-788-1591">Call 480-788-1591 for a free estimate<Phone className="ml-2 h-5 w-5" /></a>
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Comprehensive Window Film Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {services.map((service, index) => <motion.div key={service.name} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <Link to={service.link} className="flex flex-col items-center">
                    <service.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 hover:text-blue-700 transition-colors">{service.name}</h3>
                  </Link>
                </motion.div>)}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Proudly Serving Communities Across Arizona</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {cities.map((city, index) => <motion.div key={city.slug} initial={{
              opacity: 0,
              scale: 0.8
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: index * 0.05
            }} viewport={{
              once: true
            }}>
                  <Link to={`/service-areas/${city.slug}`} className="flex items-center bg-gray-700 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full transition-colors duration-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    {city.name}
                  </Link>
                </motion.div>)}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>)}
            </div>
          </div>
        </section>
      </div>
    </>;
};
export default Welcome;