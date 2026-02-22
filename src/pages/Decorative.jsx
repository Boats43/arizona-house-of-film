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
  const pageTitle = "Decorative Window Film Arizona | Frosted & Custom Glass Designs";
  const metaDescription = "Expert decorative window film installation in Arizona. Transform glass with frosted, patterned, and custom designs for privacy and style. Licensed & Bonded ROC #314088.";
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
    "areaServed": {
      "@type": "State",
      "name": "Arizona"
    },
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
    {
      icon: Eye,
      title: 'Enhanced Privacy',
      description: 'Create secluded spaces while maintaining natural light flow throughout your property.'
    },
    {
      icon: Sparkles,
      title: 'Aesthetic Appeal',
      description: 'Transform plain glass into stunning design elements that complement your interior décor.'
    },
    {
      icon: Palette,
      title: 'Design Flexibility',
      description: 'Choose from hundreds of patterns or collaborate with us for a fully custom vision.'
    },
    {
      icon: Home,
      title: 'Easy Maintenance',
      description: 'Our films are durable, easy to clean, and simple to update if your style changes.'
    }
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
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />

        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* --- ACCESSIBILITY: SKIP LINK --- */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-indigo-600 focus:text-white focus:p-4 focus:outline-none"
      >
        Skip to main content
      </a>

      <main id="main-content">
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[75vh] flex items-center pt-20 bg-slate-950 overflow-hidden text-white">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Elegant decorative window film on glass door" 
              className="w-full h-full object-cover opacity-40" 
              src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20221202_101145-IvRcT.jpg"
              width="1920"
              height="1080"
              loading="eager"
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/70 to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-sm mb-6 border border-indigo-500/30 uppercase tracking-widest">
                ROC #314088 • Design & Privacy Specialists
              </span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] uppercase">
                Decorative <br/><span className="text-indigo-400">Window Film</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed font-medium">
                Elevate your glass surfaces with sophisticated frosted, patterned, and custom-printed films. Mimic the look of expensive specialty glass at a fraction of the cost.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 h-14 text-lg font-bold transition-all shadow-lg hover:shadow-indigo-500/20">
                  <a href="#film-library">Explore The Library</a>
                </Button>
                <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-14 rounded-md border-2 border-white/40 text-white font-bold hover:bg-white hover:text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <Phone className="w-5 h-5" /> 480-788-1591
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- BENEFITS GRID --- */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-6 uppercase">Form Meets Function</h2>
            <div className="w-24 h-2 bg-indigo-500 mx-auto mb-8" />
            <p className="text-xl text-slate-800 max-w-2xl mx-auto font-medium">
              Our decorative solutions provide more than just beauty—they solve privacy and branding challenges for Arizona homes and offices.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-2xl transition-all group text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 mx-auto group-hover:bg-indigo-600 transition-colors">
                  <benefit.icon className="w-8 h-8 text-indigo-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-4 tracking-tight">{benefit.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- FILM LIBRARY SECTION --- */}
        <section id="film-library" className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-3xl">
                <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase italic">The Film Collection</h2>
                <p className="text-xl text-gray-300 leading-relaxed font-medium">
                  Explore hundreds of patterns from premium brands like{" "}
                  <Link to="/brands/3m" className="text-indigo-400 hover:underline font-bold">3M Fasara</Link>{" "}
                  and{" "}
                  <Link to="/brands/madico" className="text-indigo-400 hover:underline font-bold">Madico</Link>.
                </p>
              </div>
              <Button asChild variant="outline" className="border-indigo-500 text-indigo-400 hover:bg-indigo-600 hover:text-white font-bold">
                <Link to="/films">View All Specifications</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filmLibrary.map((category, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500 transition-colors group">
                  <Link to={`/films/${category.slug}`}>
                    <h3 className="text-2xl font-bold mb-4 flex items-center justify-between group-hover:text-indigo-300 transition-colors">
                      {category.category}
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all text-indigo-500 translate-x-[-10px] group-hover:translate-x-0" />
                    </h3>
                  </Link>
                  <p className="text-gray-300 mb-8 h-12 text-sm font-medium">{category.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {category.patterns.map((pattern, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs font-bold text-gray-200">
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
              <div className="relative order-2 lg:order-1">
                <img 
                  alt="Custom company logo window film in Phoenix storefront" 
                  className="rounded-3xl shadow-2xl relative z-10" 
                  src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20210413_115512-1-Wb1kK.jpg" 
                  width="800"
                  height="600"
                  loading="lazy"
                />
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-indigo-500/10 rounded-full z-0 blur-3xl" />
              </div>
              
              <div className="order-1 lg:order-2">
                <h2 className="text-5xl font-black text-slate-950 mb-8 uppercase leading-tight">
                  Custom <span className="text-indigo-600 italic">Graphics</span> & Branding
                </h2>
                <p className="text-xl text-slate-800 mb-10 leading-relaxed font-medium">
                  Need something unique? Our in-house designers create precision-cut graphics, company logos, and custom-printed architectural elements tailored to your brand identity.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Precision-cut company logos and branding',
                    'Custom-printed opaque or translucent graphics',
                    'Personalized text, messaging, and safety markings',
                    'Bespoke architectural patterns and gradients'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-slate-900 font-bold uppercase tracking-tight text-sm">
                      <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- AUTHORITY LOOP --- */}
        <section className="py-20 bg-slate-100 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-black text-slate-950 mb-10 uppercase">Serving All of Arizona</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {cities.map(city => (
                <Link 
                  key={city.slug} 
                  to={`/${city.slug}-window-tinting`}
                  className="px-6 py-2 bg-white border border-slate-300 rounded-full text-xs font-black text-slate-800 uppercase hover:border-indigo-600 hover:text-indigo-600 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-24 bg-gradient-to-r from-indigo-800 to-purple-900 text-center text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic leading-tight">Ready to transform your glass?</h2>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button asChild size="lg" className="bg-white text-indigo-950 hover:bg-slate-100 px-12 h-16 text-xl font-black shadow-2xl transition-transform hover:scale-105">
                <Link to="/contact">Get Free Project Quote</Link>
              </Button>
              <a href="tel:480-788-1591" className="flex items-center justify-center text-3xl font-black text-white hover:text-indigo-200 transition-colors">
                <Phone className="mr-3 w-8 h-8 text-indigo-400" /> 480-788-1591
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Decorative;