import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, SprayCan, Building, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';

const AntiGraffiti = () => {
  const rocNumber = "315259";

  const benefits = [
    {
      icon: Shield,
      title: 'Sacrificial Barrier',
      description: 'Acts as a replaceable skin against spray paint, markers, and acid etching — saving your glass from permanent destruction.'
    },
    {
      icon: SprayCan,
      title: 'Rapid Restoration',
      description: 'Damaged film is peeled away and replaced in minutes, costing a fraction of full glass replacement.'
    },
    {
      icon: Building,
      title: 'Optically Invisible',
      description: 'Maintains 100% clarity. Vandals won’t even know the film is there until their damage fails to stick.'
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How does anti-graffiti film work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anti-graffiti film is a clear, durable layer applied to exterior glass. When vandalized, it is professionally removed—taking the paint or etching with it—and replaced with a fresh layer."
      }
    }, {
      "@type": "Question",
      "name": "Is it cheaper than replacing glass?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Anti-graffiti film typically costs 1/10th of the price of a commercial glass pane replacement."
      }
    }]
  };

  return (
    <>
      <Helmet>
        <title>Anti-Graffiti Window Film Arizona | Arizona House of Film</title>
        <meta name="description" content="Protect your property from vandalism with durable anti-graffiti films. An invisible shield against paint and etching for Phoenix and Scottsdale storefronts." />
        <link rel="canonical" href="https://arizonahouseoffilm.com/anti-graffiti" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="bg-slate-950">
        {/* --- HERO SECTION --- */}
        <section className="relative py-32 overflow-hidden text-white border-b border-white/10">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Storefront glass protected by anti-graffiti film" 
              className="w-full h-full object-cover opacity-30 grayscale" 
              src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/resized_20230803_085952-TigO4.jpeg" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="px-4 py-1 bg-red-600 text-white font-black text-xs mb-6 uppercase tracking-widest inline-block">
                Sacrificial Protection • ROC #{rocNumber}
              </span>
              <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase leading-[0.9] tracking-tighter">
                Vandalism <br /><span className="text-red-600 italic">Neutralized</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-10 font-bold italic leading-relaxed">
                Stop spending thousands on glass replacement. Protect your storefront with invisible, 4-8 mil sacrificial laminates.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white hover:bg-red-600 text-slate-950 hover:text-white px-10 h-16 text-xl font-black uppercase italic rounded-none transition-all">
                  <Link to="/contact">Get Free Audit</Link>
                </Button>
                <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all uppercase tracking-tighter">
                  480-788-1591
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- BENEFITS SECTION --- */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={benefit.title} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 p-10 border-l-8 border-slate-900 hover:border-red-600 transition-all shadow-sm"
                >
                  <benefit.icon className="w-12 h-12 text-red-600 mb-6" />
                  <h3 className="text-2xl font-black text-slate-950 mb-4 uppercase italic leading-none">{benefit.title}</h3>
                  <p className="text-slate-700 font-bold text-lg leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- TECHNICAL INFO SECTION --- */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic tracking-tighter leading-tight">
                Industrial <br/><span className="text-red-600">Defense Specs</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Ideal for Retail Storefronts & Mirrors",
                  "Protects against Acid Etching & Paint",
                  "Blocks 99% of Harmful UV Rays",
                  "Easily Removable Adhesive System",
                  "Thickness options: 4-mil to 8-mil"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 border-b border-white/10 pb-4">
                    <CheckCircle2 className="text-red-600 w-6 h-6 flex-shrink-0" />
                    <span className="font-bold uppercase tracking-tight text-lg italic">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative border-4 border-white/10 p-4">
               <img 
                src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/resized_20230803_085952-TigO4.jpeg" 
                alt="Anti-graffiti film installation" 
                className="grayscale hover:grayscale-0 transition-all duration-500 w-full"
              />
              <div className="absolute -bottom-8 -left-8 bg-red-600 p-8 font-black uppercase italic leading-none hidden md:block">
                Lower OpEx <br /> Costs
              </div>
            </div>
          </div>
        </section>

        <ContactFormSection />
      </main>
    </>
  );
};

export default AntiGraffiti;