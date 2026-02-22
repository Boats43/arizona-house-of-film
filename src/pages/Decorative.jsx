import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Palette, Eye, Sparkles, Home, Building, 
  ArrowRight, Phone, CheckCircle, ShieldCheck 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cities } from '@/data/cities';

const Decorative = () => {
  /* ================= SEO & SCHEMA ================= */
  // ROC Number verified from Google Dashboard: 315259
  const rocNumber = "315259"; 
  const pageTitle = "Decorative Window Film Arizona | Frosted & Custom Glass Designs";
  const metaDescription = `Expert decorative window film installation in Arizona. Transform glass with frosted, patterned, and custom designs. Licensed & Bonded ROC #${rocNumber}.`;
  const canonicalUrl = "https://arizonahouseoffilm.com/decorative-window-films";
  const ogImage = "https://arizonahouseoffilm.com/og-image-decorative.jpg";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Decorative Window Film Installation",
    "serviceType": "Decorative & Privacy Window Film",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Arizona House of Film",
      "url": "https://arizonahouseoffilm.com/",
      "telephone": "+1-480-788-1591",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "7007 W Flower St",
        "addressLocality": "Phoenix",
        "addressRegion": "AZ",
        "postalCode": "85033"
      }
    },
    "areaServed": { "@type": "State", "name": "Arizona" },
    "description": metaDescription,
    "url": canonicalUrl
  };

  /* ================= DATA ================= */
  const filmLibrary = [
    {
      category: 'Frosted Films',
      slug: 'frosted-etched-films',
      description: 'Classic etched glass appearance for high-end privacy.',
      patterns: ['Light Frost', 'Medium Frost', 'Heavy Frost', 'Crystal Frost']
    },
    {
      category: 'Geometric Patterns',
      slug: 'patterned-privacy-films',
      description: 'Modern lines and shapes for contemporary office spaces.',
      patterns: ['Squares', 'Diamonds', 'Hexagons', 'Triangles']
    },
    {
      category: 'Nature Inspired',
      slug: 'patterned-privacy-films',
      description: 'Organic motifs that bring the outdoors inside.',
      patterns: ['Bamboo', 'Rice Paper', 'Stone', 'Wood Grain']
    },
    {
      category: 'Abstract Designs',
      slug: 'elegant-textured-films',
      description: 'Contemporary artistic patterns for unique focal points.',
      patterns: ['Waves', 'Clouds', 'Bubbles', 'Swirls']
    },
    {
      category: 'Traditional Patterns',
      slug: 'stained-glass-films',
      description: 'Classic and timeless designs for a vintage aesthetic.',
      patterns: ['Victorian', 'Art Deco', 'Floral', 'Paisley']
    },
    {
      category: 'Custom Graphics',
      slug: 'specialty-films',
      description: 'Precision-cut branding and personalized artwork.',
      patterns: ['Company Logos', 'Custom Text', 'Artwork', 'Branding']
    }
  ];

  const benefits = [
    { icon: Eye, title: 'Enhanced Privacy', description: 'Create secluded spaces while maintaining natural light flow.' },
    { icon: Sparkles, title: 'Aesthetic Appeal', description: 'Transform plain glass into stunning design elements.' },
    { icon: Palette, title: 'Design Flexibility', description: 'Hundreds of patterns or fully custom branding.' },
    { icon: Home, title: 'Easy Maintenance', description: 'Durable, easy to clean, and simple to update.' }
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <main id="main-content">
        {/* --- HERO SECTION: CLEAN WHITE --- */}
        <section className="relative min-h-[70vh] flex items-center pt-24 bg-white overflow-hidden text-slate-900">
          <div className="absolute inset-0 z-0 opacity-15">
            <img 
              alt="Decorative window film pattern" 
              className="w-full h-full object-cover" 
              src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20221202_101145-IvRcT.jpg"
              fetchpriority="high"
            />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-slate-100 text-slate-600 font-black text-xs mb-6 border border-slate-200 uppercase tracking-widest">
                Licensed & Bonded • ROC #{rocNumber}
              </span>
              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] uppercase tracking-tighter text-slate-950">
                Decorative <br/><span className="text-indigo-600 italic">Window Film</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                Transform standard glass into a design statement. High-end privacy and custom branding for Arizona's most prestigious homes and offices.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-slate-950 hover:bg-indigo-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl">
                  <a href="#film-collection">The Collection</a>
                </Button>
                <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-16 border-2 border-slate-950 text-slate-950 font-black hover:bg-slate-950 hover:text-white transition-all text-lg">
                  480-788-1591
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- BENEFITS --- */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="p-8 border-l border-slate-100 hover:border-indigo-500 transition-all">
                <benefit.icon className="w-10 h-10 text-indigo-600 mb-6" />
                <h3 className="text-xl font-black text-slate-950 mb-4 uppercase">{benefit.title}</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- THE FILM COLLECTION SECTION --- */}
        <section id="film-collection" className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-5xl font-black text-slate-950 uppercase italic leading-none">The Film Collection</h2>
              <div className="w-24 h-2 bg-indigo-600 mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filmLibrary.map((category, idx) => (
                <div key={idx} className="p-8 bg-white border border-slate-200 hover:border-indigo-500 transition-all group shadow-sm hover:shadow-xl">
                  <Link to={`/films/${category.slug}`}>
                    <h3 className="text-2xl font-black mb-4 flex items-center justify-between group-hover:text-indigo-600 transition-colors uppercase">
                      {category.category}
                      <ArrowRight className="w-5 h-5 text-indigo-500 opacity-0 group-hover:opacity-100 transition-all" />
                    </h3>
                  </Link>
                  <p className="text-slate-500 mb-8 h-12 text-sm font-medium">{category.description}</p>
                  <div className="grid grid-cols-2 gap-3 border-t border-slate-100 pt-6">
                    {category.patterns.map((pattern, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                        {pattern}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CUSTOM DESIGN SECTION --- */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img 
                  alt="Custom branding film" 
                  className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" 
                  src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20210413_115512-1-Wb1kK.jpg" 
                  width="800" height="600" loading="lazy"
                />
              </div>
              <div>
                <h2 className="text-5xl font-black text-slate-950 mb-8 uppercase leading-tight">
                  Custom <span className="text-indigo-600 italic text-6xl block">Graphics</span>
                </h2>
                <p className="text-xl text-slate-800 mb-10 leading-relaxed font-medium">
                  Our in-house designers create precision-cut graphics, company logos, and custom-printed architectural elements.
                </p>
                <div className="space-y-4">
                  {['Precision-cut logos', 'Custom-printed opaque graphics', 'Safety markings', 'Bespoke architectural patterns'].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-slate-900 font-bold uppercase tracking-tight text-sm">
                      <CheckCircle className="w-5 h-5 text-indigo-600" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SITEMAP-ALIGNED SERVICE AREAS --- */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-sm font-black text-slate-400 mb-10 uppercase tracking-[0.3em]">Licensed Statewide Service</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {cities.map(city => (
                <Link 
                  key={city.slug} 
                  to={`/service-areas/${city.slug}`} // MATCHES SITEMAP DATA
                  className="px-4 py-2 bg-white border border-slate-200 text-[10px] font-black text-slate-500 uppercase hover:border-slate-950 hover:text-slate-950 transition-all shadow-sm"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-24 bg-slate-950 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-10 uppercase italic">Start Your Project</h2>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-12 h-20 text-2xl font-black transition-transform hover:scale-105 rounded-none">
                <Link to="/contact">Request A Quote</Link>
              </Button>
              <a href="tel:480-788-1591" className="text-3xl font-black hover:text-indigo-400 transition-colors">
                480-788-1591
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Decorative;