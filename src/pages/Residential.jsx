import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Sun, Shield, Thermometer, Eye, DollarSign, ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cities } from '@/data/cities';

const Residential = () => {
  const pageTitle = "#1 Home Window Tinting in Arizona | Arizona House of Film";
  const metaDescription = "Expert home window tinting across Arizona. Reduce UV damage, lower energy bills, and enhance privacy. Licensed, Bonded, and Insured Arizona experts.";
  const canonicalUrl = "https://arizonahouseoffilm.com/residential-window-tinting";
  const ogImage = "https://arizonahouseoffilm.com/images/default-og.jpg";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Residential Window Tinting",
    serviceType: "Home Window Film Installation",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Arizona House of Film",
      url: "https://arizonahouseoffilm.com",
      telephone: "+1-480-788-1591"
    },
    areaServed: { "@type": "State", name: "Arizona" },
    description: metaDescription,
    url: canonicalUrl
  };

  const benefits = [
    { icon: Sun, title: 'UV Protection', slug: 'uv-protection', description: 'Block up to 99.9% of harmful UV rays that cause furniture fading and skin damage while maintaining natural light.' },
    { icon: DollarSign, title: 'Energy Savings', slug: 'energy-savings', description: 'Reduce your AC cooling costs by up to 30% with our high-performance ceramic residential window films.' },
    { icon: Eye, title: 'Enhanced Privacy', slug: 'enhanced-privacy', description: 'Enjoy daytime privacy while maintaining your view of the outdoors with our advanced one-way visibility films.' },
    { icon: Thermometer, title: 'Temperature Control', slug: 'temperature-control', description: 'Eliminate hot spots and maintain consistent temperatures throughout your home for total year-round comfort.' },
    { icon: Shield, title: 'Glare Reduction', slug: 'glare-reduction', description: 'Reduce annoying glare on TV screens and monitors while preserving your beautiful Arizona views.' },
    { icon: Home, title: 'Increased Comfort', slug: 'increased-comfort', description: 'Create a cooler living environment by reducing total solar heat gain by up to 78%.' }
  ];

  const filmTypes = [
    { name: 'Ceramic Solar Films', link: '/energy-saving-window-films', description: 'Highest heat rejection without the "mirror" look.', features: ['Extreme Heat Rejection', 'Non-Reflective', 'GPS/Signal Friendly', 'Lifetime Warranty'] },
    { name: 'Privacy & Decorative', link: '/decorative-window-films', description: 'Style meets function for bathrooms and entryways.', features: ['Frosted Options', 'Textured Designs', 'Daytime Privacy', 'Custom Patterns'] },
    { name: 'Safety & Security', link: '/safety', description: 'Hold glass together during impact or break-in attempts.', features: ['Thick 8mil+ Film', 'Impact Resistant', 'Crystal Clear', 'UV Blocking'] }
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

      <main>
        {/* HERO */}
        <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-green-500/20 text-green-400 font-bold text-sm mb-6 border border-green-500/30 uppercase tracking-widest">
                Residential Specialists
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
                Home Window Tinting <span className="text-green-500">Arizona</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                Slash your cooling costs and protect your family from Arizona's intense UV rays. We deliver high-performance ceramic window film solutions for the modern home.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 h-14 text-lg">
                  <Link to="/contact">Get A Free Quote</Link>
                </Button>
                <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-14 rounded-md border-2 border-white/30 text-white font-bold hover:bg-white hover:text-slate-900 transition-all">
                  <Phone className="w-5 h-5" /> 480-788-1591
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase">Why Tint Your House?</h2>
                <p className="text-lg text-gray-600">
                  Arizona sun is relentless. Read our <Link to="/blog/ultimate-guide-to-window-tinting-benefits-in-arizona" className="text-green-600 font-bold hover:underline">Ultimate Guide</Link> or see the immediate benefits below.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <motion.div key={idx} whileHover={{ y: -5 }} className="p-8 rounded-3xl border border-gray-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all group">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                    <benefit.icon className="w-7 h-7 text-green-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{benefit.description}</p>
                  <Link to={`/residential-window-tinting/${benefit.slug}`} className="inline-flex items-center text-green-600 font-bold hover:gap-2 transition-all">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FILM TYPES */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase">The Residential Stack</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We only use industry-leading <Link to="/brands" className="text-green-400 hover:underline">brands</Link> like 3M and Madico, engineered for extreme heat.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filmTypes.map((film, idx) => (
              <div key={idx} className="bg-slate-800/50 border border-slate-700 p-10 rounded-3xl hover:border-green-500 transition-colors">
                <h3 className="text-2xl font-bold mb-4">{film.name}</h3>
                <p className="text-gray-400 mb-8 h-12">{film.description}</p>
                <ul className="space-y-4 mb-10">
                  {film.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full border-white/20 hover:bg-white hover:text-slate-900">
                  <Link to={film.link}>View Specifications</Link>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black text-slate-900 mb-12 uppercase leading-tight">
                Our Signature <br/><span className="text-green-600">Installation</span>
              </h2>
              <div className="space-y-12">
                {[
                  { n: '01', t: 'Precision Measure', d: 'We use laser-precision tools to ensure every window film is cut to the exact millimeter of your home glass.' },
                  { n: '02', t: 'Glass Preparation', d: 'A multi-stage mechanical decontamination of your glass ensures a lifetime bond without bubbles or peeling.' },
                  { n: '03', t: 'Expert Cure', d: 'Our technicians utilize specialized heat-forming techniques to ensure immediate clarity and performance.' }
                ].map((step, i) => (
                  <div key={i} className="flex gap-8">
                    <span className="text-5xl font-black text-slate-200">{step.n}</span>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{step.t}</h4>
                      <p className="text-gray-600 leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="py-24 bg-slate-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 uppercase tracking-tight">Serving Homes Across Arizona</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {cities.map(city => (
                <Link key={city.slug} to={`/${city.slug}-window-tinting`} className="px-6 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-slate-600 hover:border-green-500 hover:text-green-600 hover:shadow-md transition-all">
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-green-600 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase italic">Ready to cool your home?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-slate-900 text-white hover:bg-slate-800 px-12 h-16 text-xl">
                <Link to="/contact">Book Free Estimate</Link>
              </Button>
              <a href="tel:480-788-1591" className="flex items-center justify-center text-3xl font-black text-white hover:scale-105 transition-transform">
                <Phone className="mr-3 w-8 h-8" /> 480-788-1591
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Residential;
