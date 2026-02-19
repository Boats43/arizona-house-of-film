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
  Zap
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cities } from '@/data/cities';
import ContactFormSection from '@/components/contact/ContactFormSection';

/* ================= SEO & SCHEMA ================= */
const pageTitle = 'Commercial Window Tinting Phoenix | Arizona House of Film';
const metaDescription = 'Expert commercial window tinting in Phoenix, AZ. High-performance solar, security, and decorative films for offices, retail, and medical facilities. Lower overhead and improve comfort.';
const canonicalUrl = 'https://arizonahouseoffilm.com/commercial-window-tinting';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Commercial Window Tinting",
  "serviceType": "Commercial Window Film Installation",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "name": "Arizona House of Film",
    "url": "https://arizonahouseoffilm.com/",
    "telephone": "+1-480-788-1591"
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
    icon: Shield,
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

const Commercial = () => {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Modern commercial property in Phoenix" 
            className="w-full h-full object-cover opacity-30" 
            src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/img_20240821_123937_469-jYOb9.jpg" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase leading-tight">
              Commercial Window <br/>
              <span className="text-green-500 text-6xl md:text-8xl">Tinting Phoenix</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
              Industrial-grade solar and security solutions engineered for the Arizona climate. Protect your facility, reduce overhead, and enhance workplace productivity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 h-14 text-lg font-bold">
                <Link to="/contact">Request Project Quote</Link>
              </Button>
              <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-14 rounded-md border-2 border-white/30 text-white font-bold hover:bg-white hover:text-slate-900 transition-all">
                <Phone className="w-5 h-5" /> 480-788-1591
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- VALUE PROPOSITION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">The Bottom Line Investment</h2>
          <div className="w-24 h-2 bg-green-500 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For Arizona businesses, window tinting is not an expense—it is a strategic asset with a high ROI.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-green-600 transition-colors">
                <benefit.icon className="w-8 h-8 text-green-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- INDUSTRIES (UPGRADED) --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 mb-12 uppercase">Tailored for Every Industry</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {industries.map((ind) => (
              <Link 
                key={ind.name} 
                to={ind.link} 
                className="flex flex-col items-center justify-center aspect-square p-4 bg-white border border-slate-200 rounded-3xl hover:border-green-500 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <ind.icon className="w-10 h-10 mb-4 text-slate-400 group-hover:text-green-600 transition-colors" />
                <span className="text-sm font-black text-slate-700 text-center uppercase tracking-tighter leading-tight group-hover:text-slate-900">
                  {ind.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS (01-03 STYLING) --- */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase italic tracking-tight">Project Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { t: 'Analysis', d: 'Comprehensive solar and security assessment of your building envelope.' },
              { t: 'Execution', d: 'Project management and installation scheduled to avoid business disruption.' },
              { t: 'Longevity', d: 'Industry-best warranties and long-term performance monitoring.' }
            ].map((step, i) => (
              <div key={i} className="group">
                <div className="text-6xl font-black text-slate-800 mb-6 group-hover:text-green-500/20 transition-colors">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase text-green-500">{step.t}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICE AREAS (THE AUTHORITY LOOP) --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 uppercase tracking-widest">Commercial Service Areas</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map(city => (
              <Link 
                key={city.slug} 
                to={`/${city.slug}-window-tinting`}
                className="px-5 py-2 border border-slate-200 rounded-full text-xs font-black text-slate-500 uppercase hover:border-green-500 hover:text-green-600 transition-all"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <div className="bg-slate-50">
        <ContactFormSection />
      </div>
    </>
  );
};

export default Commercial;