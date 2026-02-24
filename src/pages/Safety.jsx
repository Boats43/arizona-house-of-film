import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, Building, Eye, ArrowRight, Wind, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cities } from '@/data/cities';
import ContactFormSection from '@/components/contact/ContactFormSection';

const Safety = () => {
  const rocNumber = "314088";
  const pageTitle = "#1 Safety & Security Film in Arizona | Arizona House of Film";
  const metaDescription = "Expert safety & security film installation across Arizona—deter break-ins, prevent storm damage, and protect your property with industrial laminates. ROC #314088.";
  const canonicalUrl = "https://arizonahouseoffilm.com/safety";
  const ogImage = "https://arizonahouseoffilm.com/images/default-og.jpg";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Safety & Security Window Film",
    serviceType: "Security Window Film Installation",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Arizona House of Film",
      url: "https://arizonahouseoffilm.com/",
      telephone: "+1-480-788-1591"
    },
    areaServed: { "@type": "State", name: "Arizona" },
    description: metaDescription,
    url: canonicalUrl
  };

  const benefits = [
    { icon: Shield, title: 'Break-in Deterrent', slug: 'break-in-deterrent', description: 'Security films hold glass together when broken, making it extremely difficult for intruders to gain entry quickly.' },
    { icon: AlertTriangle, title: 'Accident Protection', slug: 'accident-protection', description: 'Prevent dangerous glass shards from scattering during accidents, protecting occupants from injury.' },
    { icon: Wind, title: 'Storm Protection', slug: 'storm-protection', description: 'Strengthen windows against severe weather, flying debris, and high winds for enhanced property protection.' },
    { icon: Eye, title: 'Clear Visibility', slug: 'clear-visibility', description: 'Maintain crystal-clear views while adding an invisible layer of protection to your windows.' }
  ];

  const applications = [
    { name: 'Ground Floor Windows', slug: 'ground-floor-windows' },
    { name: 'Sliding Glass Doors', slug: 'sliding-glass-doors' },
    { name: 'French Doors', slug: 'french-doors' },
    { name: 'Basement Windows', slug: 'basement-windows' },
    { name: 'Storefronts', slug: 'storefronts' },
    { name: 'Office Buildings', slug: 'office-buildings' },
    { name: 'Schools', slug: 'schools' },
    { name: 'Government Facilities', slug: 'government-facilities' }
  ];

  const features = [
    'Invisible protection - maintains natural appearance',
    'Multiple thickness options (8-mil to 14-mil)',
    'Professional Wet-Glaze anchoring available',
    'Long-term durability and impact performance',
    'Compatible with C-Bond glass strengthener',
    'Available in clear and solar-control options'
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <main className="bg-slate-950 min-h-screen">
        {/* HERO */}
        <section className="relative min-h-[75vh] flex items-center pt-20 overflow-hidden text-white">
          <div className="absolute inset-0 z-0">
            <img alt="Security Window Film Phoenix AZ" className="w-full h-full object-cover opacity-40 grayscale" src="/images/Security Window Film Phoenix AZ.webp" fetchpriority="high" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="inline-block px-4 py-1 bg-red-600 text-white font-black text-xs mb-6 uppercase tracking-widest">
                Force Entry Resistance • ROC #{rocNumber}
              </span>
              <h1 className="text-6xl md:text-9xl font-black mb-6 uppercase leading-[0.85] tracking-tighter text-white">
                Access <span className="text-red-600 italic underline decoration-4 underline-offset-8">Denial</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-bold italic">
                Reinforcing Phoenix properties with industrial laminates. We turn standard glass into an impenetrable barrier.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white hover:bg-red-600 text-slate-950 hover:text-white px-10 h-16 text-xl font-black uppercase italic rounded-none shadow-2xl transition-all">
                  <Link to="/contact">Get Security Audit</Link>
                </Button>
                <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all uppercase tracking-tighter">
                  480-788-1591
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter italic">Defensive Capabilities</h2>
              <div className="w-24 h-2 bg-red-600 mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group">
                  <Link to={`/safety/${benefit.slug}`} className="block h-full bg-slate-50 p-10 border-l-8 border-slate-200 group-hover:border-red-600 transition-all shadow-sm hover:shadow-xl">
                    <div className="w-16 h-16 bg-slate-950 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-950 mb-4 uppercase italic tracking-tight">{benefit.title}</h3>
                    <p className="text-slate-700 leading-relaxed font-bold text-lg italic">{benefit.description}</p>
                    <div className="mt-6 flex items-center text-red-600 font-black text-sm uppercase tracking-widest">
                      Explore Spec Sheets <ArrowRight className="ml-2 w-5 h-5" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SPECS */}
        <section className="py-24 bg-slate-950 text-white border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic tracking-tighter leading-none">
              Laminate <br/><span className="text-red-600">Performance</span>
            </h2>
            <div className="space-y-6 mt-12">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 border-b border-slate-800 font-bold uppercase text-sm tracking-tighter">
                  <CheckCircle2 className="w-6 h-6 text-red-600" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APPLICATIONS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic">Statewide Deployment</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {applications.map((app) => (
                <Link key={app.name} to={`/safety/${app.slug}`} className="flex flex-col items-center justify-center p-6 border-2 border-slate-100 hover:border-red-600 transition-all text-center">
                  <Building className="w-8 h-8 text-slate-950 mb-4" />
                  <span className="font-black text-slate-900 uppercase text-[10px] tracking-widest leading-none">{app.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactFormSection />
      </main>
    </>
  );
};

export default Safety;
