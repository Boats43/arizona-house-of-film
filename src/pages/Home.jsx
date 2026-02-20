import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Standardizing icon imports
import Award from "lucide-react/dist/esm/icons/award";
import Zap from "lucide-react/dist/esm/icons/zap";
import Shield from "lucide-react/dist/esm/icons/shield";
import Building from "lucide-react/dist/esm/icons/building";
import HomeIcon from "lucide-react/dist/esm/icons/home";
import Star from "lucide-react/dist/esm/icons/star";
import Phone from "lucide-react/dist/esm/icons/phone";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import Server from "lucide-react/dist/esm/icons/server";
import Quote from "lucide-react/dist/esm/icons/quote";
import Clock from "lucide-react/dist/esm/icons/clock";
import Heart from "lucide-react/dist/esm/icons/heart";

import { Button } from "@/components/ui/button";

const Home = () => {
  // 1. THIRD-PARTY SCRIPT DEFERRAL (Fixes the 300ms+ TBT from GTM)
  useEffect(() => {
    const loadDeferredScripts = () => {
      if (window.scriptsLoaded) return;

      // Load Google Tag Manager
      const gtmScript = document.createElement("script");
      gtmScript.src = "https://www.googletagmanager.com/gtm.js?id=GTM-MC2PDPFR";
      gtmScript.async = true;
      document.head.appendChild(gtmScript);

      // Load SnapWidget
      const snapScript = document.createElement("script");
      snapScript.src = "https://snapwidget.com/js/snapwidget.js";
      snapScript.defer = true;
      document.body.appendChild(snapScript);

      window.scriptsLoaded = true;
    };

    // Delay scripts by 3.5s or first user interaction to prioritize LCP
    const timer = setTimeout(loadDeferredScripts, 3500);
    const trigger = () => {
      loadDeferredScripts();
      clearTimeout(timer);
    };

    window.addEventListener("scroll", trigger, { once: true, passive: true });
    window.addEventListener("touchstart", trigger, { once: true, passive: true });

    return () => clearTimeout(timer);
  }, []);

  const services = [
    { name: "Residential Tinting", icon: HomeIcon, path: "/residential-window-tinting", description: "Transform your home with energy-efficient window films.", gradient: "from-blue-700 to-blue-900" },
    { name: "Commercial Tinting", icon: Building, path: "/commercial-window-tinting", description: "Professional solutions for offices and commercial buildings.", gradient: "from-slate-700 to-slate-900" },
    { name: "Decorative Films", icon: Zap, path: "/solutions", description: "Add style and privacy with decorative films.", gradient: "from-indigo-700 to-indigo-900" },
    { name: "Safety & Security", icon: Shield, path: "/solutions", description: "Security films that hold glass together during impact.", gradient: "from-gray-800 to-black" },
  ];

  return (
    <>
      <Helmet>
        <title>Phoenix Window Tinting | Residential & Commercial Experts</title>
        <meta name="description" content="Arizona House of Film: Phoenix's top-rated window tinting experts. Licensed, Bonded, and Insured ROC #315259." />
        <link rel="preload" as="image" href="/images/phoenix-window-tinting-sQw5T.webp" fetchpriority="high" />
      </Helmet>

      {/* 2. HERO SECTION - ASPECT RATIO BOX (Fixes the 0.379 CLS) */}
      <section 
        className="relative w-full bg-gray-900 overflow-hidden" 
        style={{ 
          aspectRatio: '1600/1066', // Matches your exact image dimensions
          minHeight: '450px', 
          maxHeight: '85vh',
          display: 'block' 
        }}
      >
        <img
          src="/images/phoenix-window-tinting-sQw5T.webp" 
          alt="Phoenix skyline with modern window-tinted buildings"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          width="1600"
          height="1066"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/45 z-10" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-20">
          <div className="text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight drop-shadow-2xl">
              Phoenix Window Tinting At Its Best
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-100 font-medium drop-shadow-md">
              Licensed • Bonded • Insured | ROC #315259
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-white text-blue-900 hover:bg-gray-100 font-bold shadow-2xl px-8">
                <a href="tel:480-788-1591" aria-label="Call Arizona House of Film">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (480) 788-1591
                </a>
              </Button>
              <Button size="lg" asChild className="bg-blue-700 text-white hover:bg-blue-800 font-bold shadow-2xl border-none px-8">
                <Link to="/contact" aria-label="Request a free window tinting quote">
                  <Quote className="mr-2 h-5 w-5" />
                  Request Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRUST BADGES */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Star, text: "4.4/5 on Google", subtext: "15+ Reviews" },
            { icon: Award, text: "Licensed ROC #315259", subtext: "Bonded & Insured" },
            { icon: Server, text: "Serving All Arizona", subtext: "Local Experts" },
            { icon: Clock, text: "Free Quotes", subtext: "24-Hour Response" },
          ].map((badge, index) => (
            <div key={index} className="flex flex-col items-center">
              <badge.icon className="w-8 h-8 text-blue-800 mb-3" aria-hidden="true" />
              <p className="font-bold text-gray-900">{badge.text}</p>
              <p className="text-sm text-gray-800 font-semibold">{badge.subtext}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Professional Film Solutions</h2>
            <div className="mt-4 h-1.5 w-24 bg-blue-700 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm p-8 text-center border border-gray-200 flex flex-col items-center hover:shadow-md transition-shadow"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-6 shadow-md`}>
                  <service.icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-800 mb-8 text-sm leading-relaxed flex-grow font-medium">{service.description}</p>
                <Button variant="outline" asChild className="w-full text-blue-800 border-blue-800 hover:bg-blue-50 font-bold">
                  <Link to={service.path} aria-label={`View details for ${service.name}`}>
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PHILOSOPHY SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 text-left">
              <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
                <Heart className="w-4 h-4 text-blue-700" aria-hidden="true" />
                <span className="text-blue-900 font-bold text-sm uppercase tracking-wider">Our Philosophy</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
                Protecting What Matters Most
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
                At Arizona House of Film, our approach is simple: We treat every home and business as if it were our own. In the intense Arizona heat, window tinting is a necessity for comfort and energy efficiency. 
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border-l-4 border-blue-700 pl-4">
                  <p className="font-bold text-gray-900 italic mb-1">Quality First</p>
                  <p className="text-sm text-gray-600">Premium films backed by ROC #315259 certification.</p>
                </div>
                <div className="border-l-4 border-blue-700 pl-4">
                  <p className="font-bold text-gray-900 italic mb-1">Expert Craft</p>
                  <p className="text-sm text-gray-600">Precision installation by licensed and insured professionals.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
                <div className="aspect-square bg-gray-100 rounded-2xl shadow-inner flex items-center justify-center p-8 border border-gray-100">
                    <Quote className="absolute top-4 left-4 w-12 h-12 text-blue-100" aria-hidden="true" />
                    <p className="text-2xl md:text-3xl font-bold text-blue-900 text-center leading-snug">
                       "Window film is the most cost-effective way to upgrade your building's performance."
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;