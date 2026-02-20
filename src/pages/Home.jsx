import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import {
  Award,
  Zap,
  Shield,
  Building,
  Home as HomeIcon,
  Star,
  Phone,
  ArrowRight,
  Server,
  Quote,
  Clock,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

const heroImage =
  "https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/phoenix-window-tinting-sQw5T.jpg";

const Home = () => {

  const pageTitle =
    "Phoenix Window Tinting | #1 Residential & Commercial Film Experts";

  const metaDescription =
    "Arizona House of Film is Phoenix's top-rated commercial & residential window tinting expert. Licensed, Bonded, Insured (ROC #315259). Get your free quote today.";

  const canonicalUrl = "https://arizonahouseoffilm.com/";

  const testimonials = [
    {
      name: "Sarah L.",
      location: "Scottsdale, AZ",
      text: "The team was professional and the results are amazing!",
      rating: 5
    },
    {
      name: "David M.",
      location: "Phoenix, AZ",
      text: "Arizona House of Film transformed our office space.",
      rating: 5
    },
    {
      name: "Jessica R.",
      location: "Mesa, AZ",
      text: "The UV protection film has given me total peace of mind.",
      rating: 5
    }
  ];

  const trustBadges = [
    { icon: Star, text: "4.4/5 on Google", subtext: "15+ Reviews" },
    { icon: Award, text: "Licensed ROC #315259", subtext: "Bonded & Insured" },
    { icon: Server, text: "Serving All of Arizona", subtext: "Local Experts" },
    { icon: Clock, text: "Free Quotes", subtext: "Within 24 Hours" }
  ];

  const services = [
    {
      name: 'Residential Tinting',
      icon: HomeIcon,
      path: '/residential-window-tinting',
      description: 'Energy-efficient window films for your home.',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Commercial Tinting',
      icon: Building,
      path: '/commercial-window-tinting',
      description: 'Professional solutions for offices and retail spaces.',
      gradient: 'from-blue-500 to-sky-600'
    },
    {
      name: 'Decorative Films',
      icon: Zap,
      path: '/decorative-window-films',
      description: 'Add style and privacy with decorative film.',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Safety & Security',
      icon: Shield,
      path: '/safety',
      description: 'Impact-resistant security films.',
      gradient: 'from-red-500 to-orange-600'
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      {/* HERO — NO FRAMER MOTION HERE */}
      <section className="relative text-white h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Phoenix residential and commercial window tinting"
          className="absolute inset-0 w-full h-full object-cover"
          width="1920"
          height="1080"
          fetchPriority="high"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Phoenix Window Tinting At Its Best
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Licensed • Bonded • Insured | ROC # 314088
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="bg-white text-blue-800 hover:bg-gray-200">
              <a href="tel:480-788-1591">
                <Phone className="mr-2 h-5 w-5" />
                Call (480) 788-1591
              </a>
            </Button>

            <Button size="lg" asChild className="bg-blue-600 text-white">
              <Link to="/contact">
                <Quote className="mr-2 h-5 w-5" />
                Request Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* BELOW THE FOLD CAN STILL USE MOTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >

        {/* TRUST BADGES */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex flex-col items-center">
                  <badge.icon className="w-10 h-10 text-blue-600 mb-2" />
                  <p className="font-bold text-gray-800">{badge.text}</p>
                  <p className="text-sm text-gray-500">{badge.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Our Window Film Services
            </h2>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map(service => (
                <div key={service.name} className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <service.icon className="w-8 h-8 mx-auto text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold">{service.name}</h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {service.description}
                  </p>
                  <Button variant="link" asChild>
                    <Link to={service.path}>
                      View More <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              What Our Clients Say
            </h2>

            <p className="text-lg italic text-gray-600">
              "{testimonials[activeTestimonial].text}"
            </p>

            <p className="mt-4 font-bold">
              {testimonials[activeTestimonial].name}
            </p>

            <div className="flex justify-center mt-2">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
            </div>
          </div>
        </section>

      </motion.div>
    </>
  );
};

export default Home;