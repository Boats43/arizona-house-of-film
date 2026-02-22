import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  AlertTriangle, 
  Building, 
  Eye, 
  ArrowRight, 
  Phone, 
  Wind, 
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cities } from '@/data/cities';
import ContactFormSection from '@/components/contact/ContactFormSection';

const Safety = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Break-in Deterrent',
      slug: 'break-in-deterrent',
      description: 'Security films hold glass together when broken, making it extremely difficult for intruders to gain entry quickly.'
    },
    {
      icon: AlertTriangle,
      title: 'Accident Protection',
      slug: 'accident-protection',
      description: 'Prevent dangerous glass shards from scattering during accidents, protecting occupants from injury.'
    },
    {
      icon: Wind,
      title: 'Storm Protection',
      slug: 'storm-protection',
      description: 'Strengthen windows against severe weather, flying debris, and high winds for enhanced property protection.'
    },
    {
      icon: Eye,
      title: 'Clear Visibility',
      slug: 'clear-visibility',
      description: 'Maintain crystal-clear views while adding an invisible layer of protection to your windows.'
    }
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

  const pageTitle = "#1 Safety & Security Film in Arizona | Arizona House of Film";
  const metaDescription = "Expert safety & security film installation across Arizona—deter break-ins, prevent storm damage, and protect your property with industrial laminates.";
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
          "text": "Standard security window film is bullet-resistant. It is designed to delay entry and withstand significant impact from blunt objects."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        
        {/* LCP CRITICAL FIX */}
        <link rel="preload" as="image" href="/images/Security Window Film Phoenix AZ.webp" fetchpriority="high" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Helmet>

      {/* --- HERO SECTION --- */}
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
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase leading-tight tracking-tighter text-white">
              Access <span className="text-red-600">Denial</span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-2xl mb-10 leading-relaxed font-bold">
              Reinforcing Phoenix properties with industrial laminates. We turn standard glass into an impenetrable barrier.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-red-700 hover:bg-red-800 text-white px-8 h-16 text-xl font-black uppercase italic shadow-2xl border-none">
                <Link to="/contact">Get Security Audit</Link>
              </Button>
              <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-16 rounded-md border-2 border-white text-white font-black hover:bg-white hover:text-slate-900 transition-all uppercase tracking-tighter">
                <Phone className="w-6 h-6" aria-hidden="true" /> 480-788-1591
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter italic">Protection Benefits</h2>
            <p className="text-xl text-slate-600 mt-4 max-w-3xl mx-auto font-medium">
              Advanced security window films provide multiple layers of protection. Learn more in our <Link to="/blog/a-business-owners-guide-to-security-window-films" className="text-red-700 hover:underline">security film guide</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit.title} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/safety/${benefit.slug}`} className="block h-full bg-slate-50 rounded-3xl p-10 border border-slate-200 hover:border-red-600 transition-all shadow-sm hover:shadow-xl">
                  <div className="w-16 h-16 bg-red-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase group-hover:text-red-700 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed font-semibold italic text-lg">
                    {benefit.description}
                  </p>
                  <div className="mt-6 flex items-center text-red-700 font-black text-sm uppercase tracking-widest">
                    Explore Defense <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS: ENHANCED READABILITY --- */}
      <section className="py-24 bg-slate-950 text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic tracking-tighter leading-none text-white">
                How Security <br/><span className="text-red-600">Films Work</span>
              </h2>
              <div className="space-y-8">
                {[
                  { t: 'Impact Absorption', d: 'Absorbs and distributes strike energy across the entire pane surface.' },
                  { t: 'Glass Retention', d: 'High-bond adhesives hold shards in place, preventing injury and entry.' },
                  { t: 'Barrier Maintenance', d: 'Keeps the window intact as a physical barrier even after multiple hits.' }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-5">
                    <div className="text-red-600 font-black text-3xl italic">0{idx + 1}</div>
                    <div>
                      <h3 className="text-xl font-bold uppercase text-white">{step.t}</h3>
                      <p className="text-slate-200 mt-1 font-medium text-lg leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <img 
                src="/images/Security Window Film Phoenix PD.webp" 
                alt="Technical Diagram of Security Film Impact" 
                className="rounded-3xl shadow-2xl border border-white/20"
                loading="lazy"
                width="800"
                height="600"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TARGETED APPLICATIONS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic">Targeted Applications</h2>
            <div className="w-24 h-2 bg-red-600 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {applications.map((app) => (
              <motion.div key={app.name} whileHover={{ y: -5 }}>
                <Link to={`/safety/${app.slug}`} className="flex flex-col items-center justify-center p-8 bg-white border-2 border-slate-100 rounded-2xl shadow-sm hover:border-red-600 hover:shadow-md transition-all h-full text-center">
                  <Building className="w-8 h-8 text-red-700 mb-4" aria-hidden="true" />
                  <span className="font-black text-slate-900 uppercase text-xs tracking-tighter">{app.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURES & INSTALLATION --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase italic tracking-tighter">Security Film Features</h2>
            <div className="grid grid-cols-1 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                  <CheckCircle2 className="w-6 h-6 text-red-700 flex-shrink-0" aria-hidden="true" />
                  <span className="font-bold text-slate-800">{feature}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-slate-600 font-medium">
              We utilize top-tier brands like 3M and Madico to ensure maximum ROI and durability.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20210522_100207-HOphX.jpg" 
              alt="Technician installing security film in Phoenix" 
              className="rounded-3xl shadow-xl"
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
        </div>
      </section>

      {/* --- SEO CITY LOOP --- */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[10px] font-black text-slate-500 mb-8 uppercase tracking-[0.5em]">Safety Installations Statewide</p>
          <div className="flex flex-wrap justify-center gap-2">
            {cities.map(city => (
              <Link 
                key={city.slug} 
                to={`/${city.slug}-window-tinting`}
                className="px-3 py-1 bg-slate-50 border border-slate-200 rounded text-[10px] font-black text-slate-700 uppercase hover:bg-red-700 hover:text-white hover:border-red-700 transition-all shadow-sm"
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