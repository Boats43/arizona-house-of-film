import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactFormSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Large Text - Fixed Visibility */}
      <div className="absolute top-10 left-10 pointer-events-none select-none opacity-[0.04] z-0">
        <h2 className="text-[12vw] font-black uppercase leading-none text-slate-900">
          PHOENIX <br /> WINDOW <br /> TINTING
        </h2>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-24 items-start">
          
          {/* Left Info Column */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-6xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-[0.85] mb-8">
              Request <br /> Your Free <br />
              <span className="text-green-600 italic">Audit</span>
            </h2>
            <div className="h-3 w-32 bg-green-600 mb-10" />
            <p className="text-xl text-slate-600 font-bold mb-10 max-w-md">
              Fill out the form for a detailed quote on your commercial or residential project.
            </p>
            
            <div className="space-y-4">
               {["Detailed quote within 24 hours", "Licensed, bonded, and insured", "Professional installation guarantee"].map((text, i) => (
                 <div key={i} className="flex items-center gap-4">
                   <CheckCircle2 className="text-green-600 w-6 h-6" />
                   <span className="font-black uppercase text-xs tracking-widest text-slate-900">{text}</span>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Right Form Column - Fixed Width */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-white border-2 border-slate-100 p-8 md:p-12 shadow-[20px_20px_0px_0px_rgba(241,245,249,1)] lg:shadow-[40px_40px_0px_0px_rgba(241,245,249,1)]">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;