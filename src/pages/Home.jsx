import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Zap, Shield, Sun, Building, Home as HomeIcon, Star, Phone, ArrowRight, Server, Quote, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
const heroImages = [{
  src: "https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/fed-ex-tempe-window-tint-0tMQo.jpg",
  alt: "Modern commercial building with reflective window tint"
}, {
  src: "https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20250208_134934-ormq2-9uAkZ.webp",
  alt: "Luxurious residential home with large tinted windows"
}, {
  src: "https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20230911_131925-zkA4g.jpg",
  alt: "Elegant decorative frosted film on an office glass wall"
}];
const Home = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const pageTitle = "Phoenix Window Tinting | #1 Residential & Commercial Film Experts";
  const metaDescription = "Arizona House of Film is Phoenix's top-rated commercial & residential window tinting expert. Licensed, Bonded, Insured (ROC #315259). Get your free quote today for window film in Phoenix!";
  const canonicalUrl = "https://arizonahouseoffilm.com/";
  const testimonials = [{
    name: "Sarah L.",
    location: "Scottsdale, AZ",
    text: `"The team was professional and the results are amazing! My AC runs so much less now. Highly recommend!"`,
    rating: 5
  }, {
    name: "David M.",
    location: "Phoenix, AZ",
    text: `"Arizona House of Film transformed our office space. The privacy film looks fantastic and our employees love the reduced glare."`,
    rating: 5
  }, {
    name: "Jessica R.",
    location: "Mesa, AZ",
    text: `"I was worried about my furniture fading, but the UV protection film has given me total peace of mind. The installation was quick and clean."`,
    rating: 5
  }];
  const trustBadges = [{
    icon: Star,
    text: "4.4/5 on Google",
    subtext: "15+ Reviews"
  }, {
    icon: Award,
    text: "Licensed ROC #315259",
    subtext: "Bonded & Insured"
  }, {
    icon: Server,
    text: "Serving All of Arizona",
    subtext: "Local Experts"
  }, {
    icon: Clock,
    text: "Free Quotes",
    subtext: "Within 24 Hours"
  }];
  const services = [{
    name: 'Residential Tinting',
    icon: HomeIcon,
    path: '/residential-window-tinting',
    description: 'Transform your home with energy-efficient window films. Protect your family and furniture from harmful UV rays.',
    gradient: 'from-green-500 to-emerald-600'
  }, {
    name: 'Commercial Tinting',
    icon: Building,
    path: '/commercial-window-tinting',
    description: 'Professional solutions for offices, retail spaces, and commercial buildings. Reduce energy costs and enhance privacy.',
    gradient: 'from-blue-500 to-sky-600'
  }, {
    name: 'Decorative Films',
    icon: Zap,
    path: '/decorative-window-films',
    description: 'Add style and privacy with our extensive collection of decorative films, perfect for modern homes and offices.',
    gradient: 'from-purple-500 to-pink-600'
  }, {
    name: 'Safety & Security',
    icon: Shield,
    path: '/safety',
    description: 'Protect your property with security films that hold glass together during impact, deterring break-ins and accidents.',
    gradient: 'from-red-500 to-orange-600'
  }];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is the cost of window film in Phoenix?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prices for window tint in Phoenix vary by film type and project size, typically ranging from $6 to $18 per sq. ft. Contact us for a free, detailed quote on your commercial or residential window tinting project."
      }
    }, {
      "@type": "Question",
      "name": "What type of warranty do you provide for window film installation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Warranties vary by manufacturer and film type. Most interior residential films have a limited lifetime warranty, while commercial installations carry a 10-15 year warranty. Exterior films typically have a 5-7 year warranty."
      }
    }, {
      "@type": "Question",
      "name": "Will window film provide privacy at night?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most solar films provide daytime privacy but the effect reverses at night when interior lights are on. For nighttime privacy, we recommend decorative films like frosted or whiteout options, which provide 24/7 obscurity."
      }
    }]
  };
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": "Arizona House of Film",
      "url": "https://arizonahouseoffilm.com"
    },
    "reviewBody": "Testimonials for Arizona House of Film, a top-rated window tinting company in Phoenix.",
    "author": {
      "@type": "Person",
      "name": "Various Clients"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.4",
      "bestRating": "5"
    }
  };
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);
  return <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={metaDescription} />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:url" content={canonicalUrl} />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
            </Helmet>

            <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }}>
                {/* Hero Section */}
                <section className="relative text-white h-[70vh] flex items-center justify-center overflow-hidden">
                    <AnimatePresence>
                      <motion.div key={heroIndex} initial={{
            opacity: 0,
            scale: 1.1
          }} animate={{
            opacity: 1,
            scale: 1
          }} exit={{
            opacity: 0
          }} transition={{
            duration: 1.5,
            ease: "easeInOut"
          }} className="absolute inset-0">
                         <img alt={heroImages[heroIndex].alt} className="w-full h-full object-cover" src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/phoenix-window-tinting-sQw5T.jpg" fetchPriority="high" width="1920" height="1080" />
                      </motion.div>
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <motion.h1 initial={{
            y: 20,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.7,
            delay: 0.2
          }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">Phoenix Window Tinting At Its Best</motion.h1>
                        <motion.p initial={{
            y: 20,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.7,
            delay: 0.4
          }} className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">Licensed • Bonded • Insured | Arizona Contractor's License ROC # 314088</motion.p>
                        <motion.div initial={{
            y: 20,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.7,
            delay: 0.6
          }} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" asChild className="bg-white text-blue-800 hover:bg-gray-200 w-full sm:w-auto">
                                <a href="tel:480-788-1591"><Phone className="mr-2 h-5 w-5" /> Call (480) 788-1591</a>
                            </Button>
                            <Button size="lg" asChild className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto">
                                <Link to="/contact"><Quote className="mr-2 h-5 w-5" /> Request Quote</Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>
                
                {/* Trust Badges */}
                <section className="bg-gray-100 py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {trustBadges.map((badge, index) => <div key={index} className="flex flex-col items-center">
                                    <badge.icon className="w-10 h-10 text-blue-600 mb-2" />
                                    <p className="font-bold text-gray-800">{badge.text}</p>
                                    <p className="text-sm text-gray-500">{badge.subtext}</p>
                                </div>)}
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Our Window Film Services</h2>
                         <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 text-center">
                            Discover how our professional window tinting solutions can transform your space, reduce energy costs, and enhance comfort.
                        </p>
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => <motion.div key={service.name} className={`bg-white rounded-lg shadow-lg p-8 text-center border-t-4 border-transparent hover:shadow-2xl transition-all duration-300 card-hover group`} initial={{
              y: 30,
              opacity: 0
            }} whileInView={{
              y: 0,
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }}>
                                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform`}>
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                                    <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                                    <Button variant="link" asChild className="text-blue-600 font-bold">
                                        <Link to={service.path}>View More <ArrowRight className="ml-1 w-4 h-4" /></Link>
                                    </Button>
                                </motion.div>)}
                        </div>
                    </div>
                </section>
                
                {/* Philosophy Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="prose lg:prose-lg">
                                <h2>Our Philosophy</h2>
                                <p>At Arizona House of Film, our philosophy is built on three pillars: unparalleled quality, exceptional customer service, and lasting value. We believe that window film is more than just a product—it's an investment in your comfort, security, and energy efficiency. Learn more about the benefits on our <Link to="/blog">blog</Link>.</p>
                                <p>We are committed to using only the highest-grade materials from trusted <Link to="/brands">brands</Link> and employing the most skilled technicians in the state. Our goal is to deliver a flawless installation that not only meets but exceeds your expectations, ensuring your complete satisfaction for years to come.</p>
                            </div>
                             <div className="grid grid-cols-1 gap-6">
                                <img alt="Interior view of a modern living room with large tinted windows" className="rounded-lg shadow-2xl w-full h-64 object-cover" src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20200619_114001-B1yck.jpg" loading="lazy" width="800" height="600" />
                                <img alt="Exterior view of a commercial building in Arizona with reflective solar window film" className="rounded-lg shadow-2xl w-full h-64 object-cover" src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/resized_20220707_154807-43gwU.jpeg" loading="lazy" width="800" height="600" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">What Our Clients Say</h2>
                        <div className="relative max-w-3xl mx-auto h-48" ref={testimonialRef}>
                            <AnimatePresence>
                                <motion.div key={activeTestimonial} className="absolute w-full text-center" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} transition={{
                duration: 0.5
              }}>
                                        <p className="text-lg italic text-gray-600">"{testimonials[activeTestimonial].text}"</p>
                                        <p className="mt-4 font-bold text-gray-800">{testimonials[activeTestimonial].name}</p>
                                        <p className="text-sm text-gray-500">{testimonials[activeTestimonial].location}</p>
                                        <div className="flex justify-center mt-2">
                                            {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />)}
                                        </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </section>
            </motion.div>
        </>;
};
export default Home;