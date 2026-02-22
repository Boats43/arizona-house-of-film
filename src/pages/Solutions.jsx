import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Lock, Shield, PenTool, SprayCan, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const solutionsData = [
  {
    icon: Sun,
    title: "Comfort & Energy",
    description: "Reduce heat, cut glare, and lower your energy bills with our advanced solar control films.",
    link: "/energy-saving-window-films",
    color: "from-blue-500 to-sky-600"
  },
  {
    icon: Lock,
    title: "Privacy & Decorative",
    description: "Enhance privacy and style with a wide range of frosted, patterned, and custom decorative films.",
    link: "/decorative-window-films",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Shield,
    title: "Safety & Security",
    description: "Strengthen your glass against break-ins, accidents, and storms with heavy-duty security films.",
    link: "/safety-security-films",
    color: "from-red-500 to-orange-600"
  },
  {
    icon: PenTool,
    title: "Graphics & Branding",
    description: "Turn your windows into a canvas with custom-cut logos and vibrant graphics to elevate your brand.",
    link: "/decorative-window-films",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: SprayCan,
    title: "Graffiti & Protection",
    description: "Protect your property from vandalism with sacrificial anti-graffiti films that are easy to replace.",
    link: "/anti-graffiti-window-film",
    color: "from-yellow-500 to-amber-600"
  }
];

const Solutions = () => {
  const rocNumber = "315259";

  return (
    <>
      <Helmet>
        <title>Window Film Solutions in Arizona | Arizona House of Film</title>
        <meta name="description" content="Explore our comprehensive window film solutions for energy savings, privacy, security, and branding. Serving Phoenix, Scottsdale, and all of Arizona." />
        <link rel="canonical" href="https://arizonahouseoffilm.com/solutions" />
      </Helmet>

      <main className="bg-slate-950 min-h-screen">
        {/* --- HERO SECTION --- */}
        <header className="relative py-32 flex items-center justify-center text-center overflow-hidden">
          <img 
            alt="Modern office with various window film applications" 
            className="absolute inset-0 w-full h-full object-cover opacity-30" 
            src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20230911_153938-DFysq.jpg" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/80 to-slate-950" />
          
          <div className="relative z-10 max-w-4xl px-6">
            <span className="inline-block px-4 py-1 bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-widest">
              Performance Grade Solutions • ROC #{rocNumber}
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none"
            >
              Our Window Film <br/>
              <span className="text-green-500 italic">Solutions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
              className="mt-6 text-xl text-slate-300 font-bold max-w-2xl mx-auto"
            >
              Find the perfect solution to meet your specific needs, from reducing energy costs to enhancing security and style.
            </motion.p>
          </div>
        </header>

        {/* --- SOLUTIONS GRID --- */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutionsData.map((solution, index) => (
                <motion.div 
                  key={solution.title} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: index * 0.1 }} 
                  className="group relative"
                >
                  <Link 
                    to={solution.link} 
                    className="block h-full bg-slate-900 border border-slate-800 p-10 hover:border-green-500 transition-all duration-300 relative z-10 overflow-hidden"
                  >
                    {/* Icon with Dynamic Gradient */}
                    <div className={`w-20 h-20 bg-gradient-to-br ${solution.color} rounded-none flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform shadow-lg`}>
                      <solution.icon className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-green-500 transition-colors">
                      {solution.title}
                    </h3>
                    
                    <p className="text-slate-300 font-medium leading-relaxed mb-8 flex-grow">
                      {solution.description}
                    </p>

                    <div className="flex items-center text-white font-black uppercase text-sm tracking-widest group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="ml-2 w-5 h-5 text-green-500" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-24 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 uppercase italic">Ready to transform your glass?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-400 text-slate-950 px-12 h-16 text-xl font-black rounded-none w-full sm:w-auto">
                <Link to="/contact">Request A Quote</Link>
              </Button>
              <a href="tel:480-788-1591" className="text-3xl font-black text-white hover:text-green-500 transition-colors">
                480-788-1591
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Solutions;