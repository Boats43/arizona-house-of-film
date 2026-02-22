import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, DollarSign, Thermometer, Zap, Shield, ArrowRight, Phone, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EnergySaving = () => {
  const rocNumber = "315259";
  const canonicalUrl = "https://arizonahouseoffilm.com/energy-saving-window-films";

  const benefits = [
    {
      icon: DollarSign,
      title: '30% HVAC Reduction',
      description: 'Dramatically lower cooling costs by neutralizing primary solar heat gain before it enters.'
    },
    {
      icon: Thermometer,
      title: 'Thermal Stability',
      description: 'Eliminate interior hot spots and maintain consistent temperatures across large glass perimeters.'
    },
    {
      icon: Shield,
      title: '99% UV Intercept',
      description: 'Industrial-grade protection for assets, flooring, and inventory against UV degradation.'
    },
    {
      icon: Activity,
      title: 'Precision Clarity',
      description: 'Advanced spectrally selective technology offers heat rejection without sacrificing natural light.'
    }
  ];

  // Schema objects remain the same as your source
  const faqSchema = { /* ... your FAQ schema ... */ };
  const productSchema = { /* ... your Product schema ... */ };

  return (
    <>
      <Helmet>
        <title>#1 Energy-Saving Window Film Arizona | ROC #315259</title>
        <meta name="description" content="Reduce cooling costs by 30% with professional energy-saving window film. Expert installation across Arizona. ROC #315259." />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="bg-slate-950 text-white min-h-screen">
        {/* --- PERFORMANCE HERO --- */}
        <section className="relative py-24 border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent opacity-50" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block px-3 py-1 bg-red-600 text-white font-black text-xs uppercase tracking-widest mb-6">
                  Performance Grade Window Film
                </div>
                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                  Thermal <span className="text-red-600 italic">Defense</span>
                </h1>
                <p className="text-xl text-slate-400 font-bold uppercase tracking-wide mb-10 border-l-4 border-red-600 pl-6">
                  Engineered for the Arizona climate. Stop the heat. Save the equipment. Lower the bills.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-slate-950 hover:bg-red-600 hover:text-white rounded-none h-16 px-10 text-xl font-black uppercase italic transition-all">
                    <Link to="/contact">Request Energy Audit</Link>
                  </Button>
                  <a href="tel:480-788-1591" className="inline-flex items-center justify-center border-2 border-white/20 hover:border-red-600 px-8 h-16 text-xl font-black uppercase italic transition-all">
                    <Phone className="mr-3 w-6 h-6 text-red-600" /> 480-788-1591
                  </a>
                </div>
              </motion.div>

              <div className="relative border-2 border-white/10 p-2 bg-slate-900">
                <img 
                  alt="Industrial window film performance" 
                  className="w-full grayscale hover:grayscale-0 transition-all duration-700" 
                  src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20210626_114245-K8xAB.jpg" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- PERFORMANCE METRICS --- */}
        <section className="py-24 bg-white text-slate-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-slate-950 pb-8">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
                Efficiency <span className="text-red-600">Specs</span>
              </h2>
              <span className="font-bold uppercase tracking-widest text-slate-400">ROC #{rocNumber}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-slate-50 p-8 border border-slate-200 hover:border-red-600 transition-all group">
                  <benefit.icon className="w-10 h-10 text-red-600 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-4">{benefit.title}</h3>
                  <p className="text-slate-600 font-bold uppercase text-xs leading-tight tracking-widest">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- INDUSTRIAL CTA --- */}
        <section className="py-24 bg-red-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8">
              Stop Thermal Leakage
            </h2>
            <p className="text-xl font-bold uppercase tracking-widest mb-12 opacity-90">
              Get an expert energy assessment for your facility today.
            </p>
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-slate-950 hover:text-white rounded-none h-20 px-16 text-3xl font-black uppercase italic transition-all shadow-2xl">
              <Link to="/contact tracking-tighter">Get a Free Quote</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default EnergySaving;