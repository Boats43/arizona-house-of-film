import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Hammer, ShieldCheck, Zap } from 'lucide-react';
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
        
        {/* PRELOAD THE UPDATED FILENAME */}
        <link 
          rel="preload" 
          as="image" 
          href="/images/Security Window Film Phoenix AZ.webp" 
          fetchpriority="high"
        />
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[60vh] flex items-center pt-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Security Window Film Phoenix AZ" 
            className="w-full h-full object-cover opacity-60" 
            src="/images/Security Window Film Phoenix AZ.webp" 
            fetchpriority="high" 
            loading="eager"
            decoding="async"
            width="1200"
            height="800"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase leading-tight tracking-tighter">
              Access <span className="text-red-600">Denial</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 max-w-2xl mb-10 leading-relaxed font-bold">
              Reinforcing Phoenix properties with industrial laminates. We turn standard glass into an impenetrable barrier.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-red-700 hover:bg-red-800 text-white px-8 h-16 text-xl font-black uppercase italic shadow-2xl">
                <Link to="/contact">Get Security Audit</Link>
              </Button>
              <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-16 rounded-md border-2 border-white/40 text-white font-black hover:bg-white hover:text-slate-900 transition-all uppercase tracking-tighter font-sans">
                <Phone className="w-6 h-6" /> 480-788-1591
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUE PROPS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Hammer, t: 'Forced Entry', d: 'Withstands repeated strikes from heavy tools and blunt force.' },
            { icon: ShieldCheck, t: 'Blast Mitigation', d: 'Holds glass shards in place during explosions or storms.' },
            { icon: Zap, t: 'Industrial Grade', d: '8-mil to 14-mil polyester construction with crystal clear optics.' }
          ].map((benefit, idx) => (
            <div key={idx} className="p-10 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 bg-red-700 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{benefit.t}</h2>
              <p className="text-slate-800 leading-relaxed font-semibold">{benefit.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SPECS SECTION --- */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic tracking-tighter text-white">
                Technical <span className="text-red-600 font-black">Defense</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                   <div className="text-red-600 font-black text-2xl italic">01</div>
                   <div>
                     <h3 className="text-xl font-bold uppercase text-white">C-Bond Technology</h3>
                     <p className="text-slate-200 mt-2 font-medium">Molecular glass enhancement that increases glass strength by up to 40%.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="text-red-600 font-black text-2xl italic">02</div>
                   <div>
                     <h3 className="text-xl font-bold uppercase text-white">Wet-Glaze Anchoring</h3>
                     <p className="text-slate-200 mt-2 font-medium">Chemical bonding to the frame ensures the entire pane stays locked in place.</p>
                   </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/Security Window Film Phoenix PD.webp" 
                alt="Phoenix PD Security Film Strength" 
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

      {/* --- SEO CITY LOOPS --- */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-black text-slate-900 mb-8 uppercase tracking-[0.3em]">Security Installations Arizona</p>
          <div className="flex flex-wrap justify-center gap-2">
            {cities.map(city => (
              <Link 
                key={city.slug} 
                to={`/${city.slug}-window-tinting`}
                className="px-3 py-1 bg-slate-100 rounded text-[10px] font-black text-slate-800 uppercase hover:bg-red-700 hover:text-white transition-all"
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