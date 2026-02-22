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
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import Server from "lucide-react/dist/esm/icons/server";
import Clock from "lucide-react/dist/esm/icons/clock";
import CheckCircle from "lucide-react/dist/esm/icons/check-circle";
import HelpCircle from "lucide-react/dist/esm/icons/help-circle";

import { Button } from "@/components/ui/button";

const Home = () => {
  // IMAGE PATHS - Uniform local filenames
  const HERO_IMAGE = "/images/phoenix- arizona -window-tinting-Arizona House of Film.webp";
  const LOGO_IMAGE = "/images/Arizona House of Film.webp";

  // PageSpeed Optimization: Script Deferral
  useEffect(() => {
    const loadDeferredScripts = () => {
      if (window.scriptsLoaded) return;
      const gtmScript = document.createElement("script");
      gtmScript.src = "https://www.googletagmanager.com/gtm.js?id=GTM-MC2PDPFR";
      gtmScript.async = true;
      document.head.appendChild(gtmScript);
      window.scriptsLoaded = true;
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(() => setTimeout(loadDeferredScripts, 3500));
    } else {
      setTimeout(loadDeferredScripts, 3500);
    }

    const trigger = () => { loadDeferredScripts(); };
    window.addEventListener("scroll", trigger, { once: true, passive: true });
    return () => window.removeEventListener("scroll", trigger);
  }, []);

  const services = [
    { 
      name: "Residential Window Tinting", 
      icon: HomeIcon, 
      path: "/residential-window-tinting", 
      description: "Advanced home window tinting using ceramic films that block 84% of solar heat and 99.9% of UV rays while maintaining crystal-clear views.", 
    },
    { 
      name: "Commercial Window Tinting", 
      icon: Building, 
      path: "/commercial-window-tinting", 
      description: "Industrial-grade solar control solutions for Phoenix offices designed to lower HVAC loads and improve employee comfort.", 
    },
    { 
      name: "Decorative & Privacy Films", 
      icon: Zap, 
      path: "/solutions", 
      description: "Custom frosted patterns and privacy glass films for Scottsdale interiors, providing modern design without the cost of etched glass.", 
    },
    { 
      name: "Safety & Security Film", 
      icon: Shield, 
      path: "/solutions", 
      description: "Impact-resistant 8-mil safety films designed to mitigate smash-and-grab threats and reinforce glass against high-velocity impacts.", 
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does residential window tinting cost in Phoenix?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Home window tinting pricing depends on film technology (Ceramic vs. Traditional). Most Arizona homeowners see a return on investment within 2-3 years via energy savings."
        }
      },
      {
        "@type": "Question",
        "name": "Does window film really lower electric bills in Arizona?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. High-rejection solar films can block up to 84% of infrared heat, reducing cooling costs by $250-$725 annually depending on the property size."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Window Tinting Phoenix | Residential & Commercial | Arizona House of Film</title>
        <meta name="description" content="Phoenix's authority in ceramic window tinting for 20+ years. Licensed ROC #315259. We specialize in solar control, privacy, and security films. Get a free estimate!" />
        <link rel="preload" as="image" href={HERO_IMAGE} fetchpriority="high" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section 
        className="relative w-full bg-gray-900 overflow-hidden" 
        style={{ aspectRatio: '1600/1066', minHeight: '500px', maxHeight: '85vh', display: 'block' }}
      >
        <img
          src={HERO_IMAGE} 
          alt="Commercial and Residential Window Tinting Phoenix Arizona"
          className="absolute inset-0 w-full h-full object-cover"
          width="1600" height="1066" fetchPriority="high" loading="eager" decoding="async"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-20">
          <div className="text-center max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] uppercase tracking-tighter drop-shadow-2xl">
                Phoenix <span className="text-blue-500 italic">Window Tinting</span> <br/> 
                <span className="text-3xl md:text-5xl block mt-4 font-bold tracking-normal normal-case">Residential & Commercial Specialists</span>
              </h1>
              <p className="mt-8 text-xl md:text-2xl text-gray-100 font-medium max-w-3xl mx-auto leading-relaxed">
                Expert <span className="text-white font-bold underline decoration-blue-500">Nano-Ceramic</span> solar control for the Arizona climate. Licensed, Bonded, and Insured ROC #315259.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild className="bg-blue-600 text-white hover:bg-blue-700 font-black h-16 px-10 rounded-none border-none">
                  <Link to="/contact">GET A FREE QUOTE</Link>
                </Button>
                <Button size="lg" asChild variant="outline" className="text-white border-white hover:bg-white hover:text-black font-black h-16 px-10 rounded-none">
                  <a href="tel:480-788-1591">CALL (480) 788-1591</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TRUST STACK --- */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Star, text: "Top Rated Google", sub: "15+ Local Reviews" },
            { icon: Award, text: "ROC #315259", sub: "Licensed & Bonded" },
            { icon: Server, text: "480,000+ Sq Ft", sub: "Installed Valley-Wide" },
            { icon: Clock, text: "Free Estimates", sub: "24-Hour Response" },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <item.icon className="w-8 h-8 text-blue-800 mx-auto mb-3" />
              <p className="font-black text-gray-900 uppercase text-xs tracking-tighter">{item.text}</p>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- STRUCTURED AUTHORITY TEXT --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-black text-gray-900 uppercase leading-none mb-8">
                The Standard for <br/><span className="text-blue-700">Arizona Solar Control</span>
              </h2>
              <div className="prose prose-slate prose-lg">
                <p className="text-gray-700 font-medium leading-relaxed mb-6">
                  Since 2012, Arizona House of Film has served as the leading provider of <strong>residential and commercial window tinting in Phoenix, Scottsdale, and Tempe</strong>.
                </p>
                <p className="text-gray-700 font-medium leading-relaxed mb-6">
                  Our advanced <strong>Nano-Ceramic window films</strong> can reduce annual air conditioning loads by <strong>$250–$725</strong>. By targeting the infrared spectrum, we achieve up to 84% Total Solar Energy Rejection (TSER).
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {['SRP & APS Rebate Ready', '99.9% UV Protection', 'Glare Mitigation', 'Dual-Pane Safe'].map((check) => (
                    <div key={check} className="flex items-center gap-2 font-black text-xs uppercase italic text-blue-900">
                      <CheckCircle className="w-4 h-4" /> {check}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-10 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <HelpCircle className="w-6 h-6 text-blue-700" />
                <h3 className="text-2xl font-black text-gray-900 uppercase">Window Tinting FAQ</h3>
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="font-black text-gray-900 uppercase text-sm mb-2">How much does home window tinting cost in Phoenix?</h4>
                  <p className="text-sm text-gray-600 font-medium">Pricing varies based on square footage and film technology. We provide precise <Link to="/contact" className="text-blue-700 underline">free estimates</Link> and lifetime warranties on all residential installs.</p>
                </div>
                <div>
                  <h4 className="font-black text-gray-900 uppercase text-sm mb-2">Is tinting safe for dual-pane windows?</h4>
                  <p className="text-sm text-gray-600 font-medium">Yes. We use films specifically engineered for the high thermal stress of the Arizona desert to ensure your glass remains safe and effective.</p>
                </div>
                <div className="pt-6 border-t border-gray-200 flex justify-center">
                   <img src={LOGO_IMAGE} alt="Arizona House of Film Official Logo" className="h-12 w-auto grayscale opacity-70" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-white">Our Expertise</h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-4" />
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.name} className="bg-white/5 p-8 border border-white/10 hover:border-blue-500 transition-all group">
              <s.icon className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-black uppercase mb-4 tracking-tighter text-white">{s.name}</h3>
              <p className="text-sm text-gray-100 font-medium leading-relaxed mb-8">{s.description}</p>
              <Button variant="link" asChild className="p-0 text-blue-300 hover:text-white uppercase font-black text-xs">
                <Link to={s.path}>
                  Learn about {s.name} <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;