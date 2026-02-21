import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Phone, Hammer, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cities } from '@/data/cities';
import ContactFormSection from '@/components/contact/ContactFormSection';

const Safety = () => {
  return (
    <>
      <Helmet>
        <title>Security Window Film Phoenix | Forced Entry Protection AZ</title>
        <meta name="description" content="High-performance security window film installation in Phoenix. 8-mil to 14-mil forced entry protection. Access denial experts for AZ homes and businesses." />
        <link rel="canonical" href="https://arizonahouseoffilm.com/safety" />
        {/* PRELOAD CRITICAL ASSET */}
        <link rel="preload" as="image" href="/images/Security Window Film Phoenix.webp" />
      </Helmet>

      {/* --- HERO SECTION: NO ANIMATION FOR MAX LCP SCORE --- */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Security Window Film Phoenix" 
            className="w-full h-full object-cover opacity-50" 
            src="/images/Security Window Film Phoenix.webp" 
            fetchpriority="high" 
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase leading-tight tracking-tighter">
              Access <span className="text-red-600">Denial</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 max-w-2xl mb-10 leading-relaxed font-bold">
              Reinforcing Phoenix properties with 8-mil to 14-mil industrial laminates. We turn standard glass into an impenetrable security barrier.
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

      {/* --- VALUE PROPS: ANIMATE THESE AS THEY ARE BELOW THE FOLD --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Hammer, t: 'Access Denial', d: 'Turn standard glass into a high-strength barrier. Designed to withstand repeated strikes from heavy tools.' },
            { icon: ShieldCheck, t: 'Blast Mitigation', d: 'In the event of high-impact explosions, film holds glass shards in place to prevent secondary injury.' },
            { icon: Zap, t: 'Invisible Strength', d: 'Crystal clear optics with industrial-grade polyester construction. Protection without compromise.' }
          ].map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-slate-50 border border-slate-200"
            >
              <div className="w-16 h-16 bg-red-700 rounded-2xl flex items-center justify-center mb-8">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{benefit.t}</h3>
              <p className="text-slate-800 leading-relaxed font-semibold">{benefit.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SPECS: TEXT FIRST FOR ACCESSIBILITY AND SEO --- */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic tracking-tighter text-white">
                Industrial <span className="text-red-600 font-black">Specs</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                   <div className="text-red-600 font-black text-2xl italic">01</div>
                   <div>
                     <h4 className="text-xl font-bold uppercase tracking-tight text-white underline decoration-red-600 decoration-4">C-Bond Technology</h4>
                     <p className="text-slate-200 mt-2 font-medium">Molecular glass enhancement that increases glass strength by up to 40% before the film is even applied.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="text-red-600 font-black text-2xl italic">02</div>
                   <div>
                     <h4 className="text-xl font-bold uppercase tracking-tight text-white underline decoration-red-600 decoration-4">Wet-Glaze Anchoring</h4>
                     <p className="text-slate-200 mt-2 font-medium">The film is chemically bonded to the window frame, ensuring the glass stays in the frame under heavy attack.</p>
                   </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/Phoenix PD Security Film.webp" 
                alt="Phoenix PD Grade Security Film" 
                className="rounded-3xl shadow-2xl border border-white/10"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- CITY LINKS: DARKER TEXT FOR CONTRAST SCORE --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-sm font-black text-slate-900 mb-10 uppercase tracking-[0.3em]">Security Deployments Across Arizona</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {cities.map(city => (
              <Link 
                key={city.slug} 
                to={`/${city.slug}-window-tinting`}
                className="px-4 py-2 bg-slate-200 rounded-md text-[10px] font-black text-slate-900 uppercase hover:bg-red-700 hover:text-white transition-all"
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