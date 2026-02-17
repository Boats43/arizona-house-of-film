import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Facebook, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Gallery = () => {
  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return <>
      <Helmet>
        <title>Window Tinting Project Gallery | Arizona House of Film</title>
        <meta name="description" content="View our gallery of residential and commercial window tinting projects in Arizona. See the quality and craftsmanship of Arizona House of Film's work in Phoenix, Scottsdale, and beyond. Get inspired for your next project." />
        <link rel="canonical" href="https://arizonahouseoffilm.com/gallery" />
        <meta property="og:title" content="Window Tinting Project Gallery | Arizona House of Film" />
        <meta property="og:description" content="View our gallery of residential and commercial window tinting projects in Arizona. See the quality and craftsmanship of Arizona House of Film's work in Phoenix, Scottsdale, and beyond. Get inspired for your next project." />
        <meta property="og:url" content="https://arizonahouseoffilm.com/gallery" />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image-gallery.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Project Gallery
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore our portfolio of successful window film installations. See the difference professional installation makes.
            </p>
            <Button asChild size="lg" className="bg-white text-indigo-900 hover:bg-gray-100">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Section */}
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
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of our quality work on residential and commercial properties across Arizona.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={imageVariants} initial="hidden" whileInView="visible" transition={{
            duration: 0.5,
            delay: 0.1
          }} viewport={{
            once: true
          }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img alt="Arizona residential window tinting on a modern home in Scottsdale" className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300" src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20250208_134934-ORmq2.jpg" loading="lazy" width="640" height="320" />
            </motion.div>
            <motion.div variants={imageVariants} initial="hidden" whileInView="visible" transition={{
            duration: 0.5,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img alt="Commercial office building with privacy film in Phoenix, AZ" className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300" src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20250225_113206-In3Fg.png" loading="lazy" width="640" height="320" />
            </motion.div>
            <motion.div variants={imageVariants} initial="hidden" whileInView="visible" transition={{
            duration: 0.5,
            delay: 0.3
          }} viewport={{
            once: true
          }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img alt="Living room with decorative window film on patio doors in a Mesa home" className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300" src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20250218_123715-7cClG.jpg" loading="lazy" width="640" height="320" />
            </motion.div>
            <motion.div variants={imageVariants} initial="hidden" whileInView="visible" transition={{
            duration: 0.5,
            delay: 0.4
          }} viewport={{
            once: true
          }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img alt="Retail storefront with anti-graffiti security film in Tempe" className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300" src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20250123_110601-xIYWZ.jpg" loading="lazy" width="640" height="320" />
            </motion.div>
            <motion.div variants={imageVariants} initial="hidden" whileInView="visible" transition={{
            duration: 0.5,
            delay: 0.5
          }} viewport={{
            once: true
          }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img alt="Kitchen with UV protection window film to prevent fading in a Chandler kitchen" className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300" src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/img-20241126-wa0005-Ofhn6.jpeg" loading="lazy" width="640" height="320" />
            </motion.div>
            <motion.div variants={imageVariants} initial="hidden" whileInView="visible" transition={{
            duration: 0.5,
            delay: 0.6
          }} viewport={{
            once: true
          }} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img alt="Conference room with frosted privacy film for an office in downtown Phoenix" className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300" src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/img_20240824_120025_082-L30ZP.jpg" loading="lazy" width="640" height="320" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Links Section */}
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
              Follow Our Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check out our latest projects and see how we're transforming spaces across Phoenix.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                <a href="https://www.instagram.com/arizonahouseoffilm" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 w-5 h-5" />
                  Instagram
                </a>
              </Button>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }}>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                <a href="https://www.facebook.com/Azwindowtint/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="mr-2 w-5 h-5" />
                  Facebook
                </a>
              </Button>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: 0.6
          }}>
               <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                <a href="https://g.co/kgs/hEuns6S" target="_blank" rel="noopener noreferrer">
                  <Star className="mr-2 w-5 h-5" />
                  Google Reviews
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Join our satisfied customers and transform your space with professional window film installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4">
                <Link to="/contact">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <a href="tel:480-788-1591" className="bg-white/10 text-white hover:bg-white hover:text-indigo-600 inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white h-11 rounded-md px-8">
                Call 480-788-1591
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>;
};
export default Gallery;