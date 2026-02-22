import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sun,
  Shield,
  Building,
  Briefcase,
  Utensils,
  School,
  Stethoscope,
  Hotel,
  Warehouse,
  ArrowRight,
  Phone,
  CheckCircle,
  Zap,
  ShieldCheck,
  TrendingDown
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cities } from '@/data/cities';
import ContactFormSection from '@/components/contact/ContactFormSection';

const Commercial = () => {
  /* ================= SEO & SCHEMA ================= */
  const rocNumber = "315259";
  const pageTitle = 'Commercial Window Tinting Phoenix | Arizona House of Film';
  const metaDescription = `Expert commercial window tinting in Phoenix, AZ. High-performance solar, security, and decorative films for offices and retail. Licensed ROC #${rocNumber}.`;
  const canonicalUrl = 'https://arizonahouseoffilm.com/commercial-window-tinting';
  const heroImageUrl = "https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/img_20240821_123937_469-jYOb9.jpg";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Window Tinting",
    "serviceType": "Commercial Window Film Installation",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Arizona House of Film",
      "url": "https://arizonahouseoffilm.com/",
      "telephone": "+1-480-788-1591",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "7007 W Flower St",
        "addressLocality": "Phoenix",
        "addressRegion": "AZ",
        "postalCode": "85033"
      }
    },
    "areaServed": { "@type": "State", "name": "Arizona" },
    "description": metaDescription
  };

  /* ================= DATA ================= */
  const benefits = [
    {
      icon: Zap,
      title: 'Energy Efficiency',
      description: 'Reduce HVAC load and cooling costs by up to 30% by rejecting solar heat before it enters the building.'
    },
    {
      icon: ShieldCheck,
      title: 'Security & Safety',
      description: 'Protect assets and personnel. Security films hold glass together during break-ins or accidental impact.'
    },
    {
      icon: Building,
      title: 'Professional Esthetics',
      description: 'Give your building a modern, uniform look while providing privacy and comfort for tenants.'
    }
  ];

  const industries = [
    { name: 'Office Buildings', icon: Briefcase, link: '/industries/office-buildings' },
    { name: 'Retail Stores', icon: Building, link: '/industries/retail-stores' },
    { name: 'Restaurants', icon: Utensils, link: '/industries/restaurants' },
    { name: 'Medical Facilities', icon: Stethoscope, link: '/industries/medical-facilities' },
    { name: 'Schools & Universities', icon: School, link: '/industries/educational-institutions' },
    { name: 'Hotels & Hospitality', icon: Hotel, link: '/industries/hotels-hospitality' },
    { name: 'Warehouses', icon: Warehouse, link: '/industries/warehouses' }
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <link rel="preload" as="image" href={heroImageUrl} />
      </Helmet>

      <main id="main-content">
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[75vh] flex items-center pt-24 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Modern commercial property in Phoenix" 
              className="w-full h-full object-cover opacity-40" 
              src={heroImageUrl} 
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="max-w-4xl">
              <span className="inline-block px-4 py-1 rounded-none bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-widest">
                Licensed • Bonded • ROC #{rocNumber}
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase leading-[0.85] tracking-tighter">
                Commercial <br/>
                <span className="text-green-500 italic">Window Tinting</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Industrial-grade solar and security solutions engineered for the Arizona climate. Protect your facility, reduce overhead, and enhance workplace productivity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl">
                  <Link to="/contact">Request Project Quote</Link>
                </Button>
                <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all text-lg">
                  480-788-1591
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- VALUE PROPOSITION --- */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 uppercase tracking-tight">The Bottom Line Investment</h2>
            <div className="w-24 h-2 bg-green-500 mx-auto mb-8" />
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              For Arizona businesses, window tinting is not an expense—it is a strategic asset with high ROI.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 rounded-none bg-slate-50 border-l-4 border-green-500 hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-green-600 transition-colors">
                  <benefit.icon className="w-8 h-8 text-green-600 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-950 mb-4 uppercase">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- INDUSTRIES (UNIFORM GRID) --- */}
        <section className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl font-black text-white mb-16 uppercase italic">Tailored for Every Industry</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {industries.map((ind) => (
                <Link 
                  key={ind.name} 
                  to={ind.link} 
                  className="flex flex-col items-center justify-center aspect-square p-4 bg-slate-900 border border-slate-800 rounded-none hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all group"
                >
                  <ind.icon className="w-10 h-10 mb-4 text-slate-500 group-hover:text-green-500 transition-colors" />
                  <span className="text-[10px] font-black text-slate-400 text-center uppercase tracking-tighter leading-tight group-hover:text-white">
                    {ind.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROCESS --- */}
        <section className="py-24 bg-white text-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase italic tracking-tight text-slate-950">Project Workflow</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { t: 'Analysis', d: 'Comprehensive solar and security assessment of your building envelope.' },
                { t: 'Execution', d: 'Project management and installation scheduled to avoid business disruption.' },
                { t: 'Longevity', d: 'Industry-best warranties and long-term performance monitoring.' }
              ].map((step, i) => (
                <div key={i} className="group">
                  <div className="text-7xl font-black text-slate-100 mb-6 group-hover:text-green-500/10 transition-colors">
                    0{i + 1}
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase text-green-600">{step.t}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SERVICE AREAS --- */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-sm font-black text-slate-500 mb-10 uppercase tracking-[0.3em]">Commercial Service Areas</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {cities.map(city => (
                <Link 
                  key={city.slug} 
                  to={`/${city.slug}-commercial-window-tinting`}
                  className="px-4 py-2 bg-white border border-slate-200 text-[10px] font-black text-slate-600 uppercase hover:border-green-500 hover:text-green-600 transition-all shadow-sm"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <div className="bg-white">
          <ContactFormSection />
        </div>
      </main>
    </>
  );
};

export default Commercial;