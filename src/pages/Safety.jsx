import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Phone, 
  Hammer, 
  ShieldCheck, 
  Zap, 
  AlertTriangle, 
  Wind, 
  Eye, 
  ArrowRight,
  Building
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cities } from '@/data/cities';
import ContactFormSection from '@/components/contact/ContactFormSection';

const Safety = () => {
  /* ================= SEO DATA ================= */
  const pageTitle = "#1 Safety & Security Film in Arizona | Arizona House of Film";
  const metaDescription = "Expert safety & security film installation across Arizona—deter break-ins, prevent storm damage, and protect your property with 8-mil to 14-mil laminates.";
  const canonicalUrl = "https://arizonahouseoffilm.com/safety";

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Safety & Security Window Film",
    "image": "https://arizonahouseoffilm.com/images/Security Window Film Phoenix AZ.webp",
    "description": "Professional safety & security window film installation across Arizona for protection against break-ins, accidents, and storms.",
    "brand": { "@type": "Brand", "name": "Arizona House of Film" },
    "sku": "AHOF-SAFETY-001",
    "url": canonicalUrl,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "0.00",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "url": canonicalUrl
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "24" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does security window film work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Security window film is a heavy-duty polyester film bonded to glass with a strong adhesive. When the glass breaks, the film holds the dangerous shards together, preventing easy entry."
        }
      },
      {
        "@type": "Question",
        "name": "Is security film bulletproof?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard security film is bullet-resistant and designed to delay entry. For ballistic resistance, specialized higher-mil products are required."
        }
      }
    ]
  };

  const benefits = [
    { icon: Hammer, title: 'Break-in Deterrent', desc: 'Security films hold glass together when broken, making it extremely difficult for intruders to gain entry.' },
    { icon: AlertTriangle, title: 'Accident Protection', desc: 'Prevent dangerous glass shards from scattering during accidents, protecting families and employees.' },
    { icon: Wind, title: 'Storm Protection', desc: 'Strengthen windows against severe AZ weather, flying debris, and high monsoon winds.' },
    { icon: Eye, title: 'Clear Visibility', desc: 'Maintain crystal-clear views while adding an invisible layer of industrial-grade protection.' }
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        {/* PRELOAD LCP IMAGE */}
        <link rel="preload" as="image" href="/images/Security Window Film Phoenix AZ.webp" fetchpriority="high" />
      </Helmet>

      {/* --- HERO SECTION: NO ANIMATION FOR MAX SPEED --- */}
      <section className="relative min-h-[65vh] flex items-center pt-20 bg-slate-950 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Security Window Film Phoenix AZ" 
            className="w-full h-full object-cover opacity-50" 
            src="/images/Security Window Film Phoenix AZ.webp" 
            fetchpriority="high" 
            loading="eager"
            decoding="async"
            width="1200"
            height="800"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase leading-tight tracking-tighter">
              Access <span className="text-red-600">Denial</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 max-w-2xl mb-10 leading-relaxed font-bold">
              Protect your property and loved ones with advanced 8-mil to 14-mil security window films. Invisible protection that holds glass together during impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-red-700 hover:bg-red-800 text-white px-8 h-16 text-xl font-black uppercase italic shadow-2xl">
                <Link to="/contact">Get Security Audit</Link>
              </Button>
              <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-16 rounded-md border-2 border-white/40 text-white font-black hover:bg-white hover:text-slate-900 transition-all uppercase tracking-tighter">
                <Phone className="w-6 h-6" /> 480-788-1591
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENEFITS GRID --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">Protection Benefits</h2>
            <div className="w-24 h-2 bg-red-600 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-slate-50 border border-slate-200 rounded-3xl"
              >
                <div className="w-12 h-12 bg-red-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <b.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">{b.title}</h3>
                <p className="text-slate-700 font-medium leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS: TECHNICAL SPECS --- */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="/images/Security Window Film Phoenix PD.webp" 
                alt="Security Window Film Technical Diagram" 
                className="rounded-3xl shadow-2xl border border-white/10"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic tracking-tighter leading-none">
                How It <span className="text-red-600">Works</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-5">
                   <div className="text-red-600 font-black text-3xl italic">01</div>
                   <div>
                     <h3 className="text-xl font-bold uppercase text-white">Impact Absorption</h3>
                     <p className="text-slate-300 mt-2 font-medium">The film absorbs and distributes impact energy across the entire window surface, preventing localized failure.</p>
                   </div>
                </div>
                <div className="flex gap-5">
                   <div className="text-red-600 font-black text-3xl italic">02</div>
                   <div>
                     <h3 className="text-xl font-bold uppercase text-white">Glass Retention</h3>
                     <p className="text-slate-300 mt-2 font-medium">When glass breaks, the high-bond adhesive holds the pieces together, preventing dangerous shards from flying.</p>
                   </div>
                </div>
                <div className="flex gap-5">
                   <div className="text-red-600 font-black text-3xl italic">03</div>
                   <div>
                     <h3 className="text-xl font-bold uppercase text-white">C-Bond Enhancement</h3>
                     <p className="text-slate-300 mt-2 font-medium">Optional C-Bond solution works at a molecular level to increase glass strength by up to 40% before film application.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- APPLICATIONS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center text-slate-900 mb-12 uppercase tracking-widest">Targeted Applications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Ground Floor Windows', 'Sliding Glass Doors', 'French Doors', 'Basement Windows',
              'Storefronts', 'Office Buildings', 'Schools', 'Government Facilities'
            ].map((app, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-xl hover:bg-red-50 hover:border-red-200 transition-colors">
                <Building className="w-5 h-5 text-red-700" />
                <span className="font-bold text-slate-800 text-sm">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- AUTHORITY LOOP --- */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-black text-slate-900 mb-8 uppercase tracking-[0.3em]">Licensed Security Installations Arizona</p>
          <div className="flex flex-wrap justify-center gap-2">
            {cities.map(city => (
              <Link 
                key={city.slug} 
                to={`/${city.slug}-window-tinting`}
                className="px-3 py-1 bg-white border border-slate-200 rounded text-[10px] font-black text-slate-700 uppercase hover:bg-red-700 hover:text-white transition-all shadow-sm"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
};

export default Safety;