import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Search, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cities } from '@/data/cities';

const ArrowRight = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const ServiceAreas = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const rocNumber = "314088";
  const pageTitle = "Arizona Window Tinting Service Areas | Arizona House of Film";
  const metaDescription = "We serve Phoenix, Tucson, Mesa, Scottsdale, and over 100 cities across Arizona. Find your local window tinting expert and get a free estimate today.";
  const canonicalUrl = "https://arizonahouseoffilm.com/service-areas";
  const ogImage = "https://arizonahouseoffilm.com/og-image.jpg";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Window Tinting Service Areas — Arizona",
    description: metaDescription,
    url: canonicalUrl,
    areaServed: { "@type": "State", name: "Arizona" },
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Arizona House of Film",
      telephone: "480-788-1591",
      url: "https://arizonahouseoffilm.com"
    }
  };

  const filteredCities = useMemo(() => {
    return cities.filter(city =>
      city.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchTerm]);

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
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <main className="bg-slate-950 min-h-screen">
        <section className="relative py-32 text-white border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1 bg-red-600 text-white font-black text-xs mb-6 uppercase tracking-[0.2em]">
                <ShieldCheck className="w-4 h-4" /> Statewide Deployment • ROC #{rocNumber}
              </span>
              <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase leading-none tracking-tighter">
                Arizona Window Tinting Service Areas | Phoenix, Scottsdale &amp; Statewide
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 font-bold italic">
                From Phoenix to Flagstaff, we provide industrial-grade window film for Arizona's most demanding environments.
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild size="lg" className="bg-white hover:bg-red-600 text-slate-950 hover:text-white px-10 h-16 text-xl font-black uppercase italic rounded-none transition-all">
                  <a href="tel:480-788-1591">Call Dispatch: 480-788-1591</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400 group-focus-within:text-red-600 transition-colors" />
                <Input type="text" placeholder="SEARCH YOUR CITY (e.g. SCOTTSDALE)..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-4 py-8 text-xl border-4 border-slate-900 focus:ring-0 focus:border-red-600 rounded-none font-black uppercase tracking-tighter placeholder:text-slate-300" />
              </div>
            </div>
            <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {filteredCities.map((city) => (
                <motion.div key={city.slug} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="group">
                  <Link to={`/service-areas/${city.slug}`} className="flex flex-col items-center justify-center text-center bg-slate-50 border-2 border-slate-100 p-6 group-hover:bg-slate-950 group-hover:border-slate-950 transition-all duration-300 h-full">
                    <MapPin className="w-5 h-5 mb-2 text-red-600 group-hover:text-white transition-colors" />
                    <span className="font-black text-slate-950 group-hover:text-white uppercase text-xs tracking-widest leading-tight">{city.name}</span>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-4 h-4 text-red-600" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            {filteredCities.length === 0 && (
              <div className="text-center py-20 border-4 border-dashed border-slate-100">
                <p className="text-slate-400 font-black uppercase tracking-tighter text-2xl">CITY NOT FOUND. WE LIKELY STILL SERVE YOUR AREA.</p>
                <Button asChild variant="link" className="text-red-600 font-black uppercase mt-4 underline">
                  <Link to="/contact">Confirm Coverage with Dispatch</Link>
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* METRO REGIONS */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-12">Service Coverage by Region</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { region: "Phoenix Metro", cities: "Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, Surprise, Goodyear, Avondale, Buckeye, Fountain Hills, Paradise Valley, Cave Creek, Anthem", note: "Our primary service area. Same-week installation typically available for all Phoenix Metro locations." },
                { region: "Tucson & Southern Arizona", cities: "Tucson, Oro Valley, Marana, Sahuarita, Green Valley, Sierra Vista, Nogales, Bisbee", note: "We make regular runs to Tucson and Southern Arizona. Contact us to schedule." },
                { region: "Central & Northern Arizona", cities: "Flagstaff, Prescott, Sedona, Cottonwood, Payson, Williams", note: "Available for commercial and larger residential projects. Contact us for scheduling." },
                { region: "Western Arizona", cities: "Yuma, Lake Havasu City, Kingman, Bullhead City, Quartzsite", note: "Available for commercial projects. Contact us to confirm scheduling availability." },
              ].map((area, i) => (
                <div key={i} className="border border-slate-700 p-8 hover:border-red-600 transition-colors">
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">{area.region}</h3>
                  <p className="text-slate-400 text-sm font-medium mb-4">{area.cities}</p>
                  <p className="text-slate-500 text-xs font-bold italic">{area.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATIC CITY DIRECTORY — crawlable links for every city page */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-950 uppercase tracking-tighter mb-4">
              All Arizona Cities We Serve
            </h2>
            <p className="text-sm text-slate-500 font-medium mb-10">
              {cities.length} cities across Arizona — click any city for local pricing, services, and availability.
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {[...cities].sort((a, b) => a.name.localeCompare(b.name)).map((city) => (
                <li key={city.slug}>
                  <Link
                    to={`/service-areas/${city.slug}`}
                    className="block px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 bg-white border border-slate-200 hover:bg-slate-950 hover:text-white hover:border-slate-950 transition-colors leading-tight"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SERVICE AREAS FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-950 uppercase tracking-tighter mb-12">Service Area FAQ</h2>
            <div className="space-y-8">
              {[
                { q: "Do you charge extra for driving outside Phoenix?", a: "Travel fees may apply for locations more than 60 miles from Phoenix. We'll disclose any travel fees during the estimate." },
                { q: "How quickly can you schedule in my area?", a: "Phoenix Metro: typically 1–5 business days. Tucson: weekly runs. Remote areas: by appointment." },
                { q: "Do you do mobile/on-site installation?", a: "Yes. We come to your home or business — you do not need to bring anything to us." },
              ].map((faq, i) => (
                <div key={i} className="border-b border-slate-200 pb-8">
                  <h3 className="font-black text-slate-950 uppercase text-sm mb-3">{faq.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.5em]">
              Arizona House of Film • Licensed ROC #{rocNumber} • Professional Installation Statewide
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServiceAreas;
