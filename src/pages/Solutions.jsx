import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Lock, Shield, PenTool, SprayCan, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const solutionsData = [
  { icon: Sun, title: "Comfort & Energy", description: "Reduce heat, cut glare, and lower your energy bills with our advanced solar control films.", link: "/energy-saving-window-films", color: "from-blue-500 to-sky-600", cta: "Explore Energy-Saving Films", note: "The most popular category for Arizona homes and offices — blocks solar heat without darkening glass." },
  { icon: Lock, title: "Privacy & Decorative", description: "Enhance privacy and style with a wide range of frosted, patterned, and custom decorative films.", link: "/decorative-window-films", color: "from-purple-500 to-pink-600", cta: "Explore Decorative Films", note: "From subtle frosted to bold custom graphics — installed clean with no bubbles, guaranteed." },
  { icon: Shield, title: "Safety & Security", description: "Strengthen your glass against break-ins, accidents, and storms with heavy-duty security films.", link: "/safety-security-films", color: "from-red-500 to-orange-600", cta: "Explore Security Films", note: "8–12 mil laminate film holds glass in place after impact — required in many Arizona commercial applications." },
  { icon: PenTool, title: "Graphics & Branding", description: "Turn your windows into a canvas with custom-cut logos and vibrant graphics to elevate your brand.", link: "/decorative-window-films", color: "from-green-500 to-emerald-600", cta: "Explore Branding Films", note: "Custom-cut vinyl and window graphics for storefronts, offices, and vehicles." },
  { icon: SprayCan, title: "Graffiti & Protection", description: "Protect your property from vandalism with sacrificial anti-graffiti films that are easy to replace.", link: "/anti-graffiti-window-film", color: "from-yellow-500 to-amber-600", cta: "Explore Anti-Graffiti Films", note: "Sacrificial film layer that takes the damage — peel and replace at fraction of glass replacement cost." },
];

const Solutions = () => {
  const rocNumber = "314088";
  const pageTitle = "Window Film Solutions in Arizona | Arizona House of Film";
  const metaDescription = "Explore our comprehensive window film solutions for energy savings, privacy, security, and branding. Serving Phoenix, Scottsdale, and all of Arizona.";
  const canonicalUrl = "https://arizonahouseoffilm.com/solutions";
  const ogImage = "https://arizonahouseoffilm.com/og-image.jpg";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: pageTitle,
    description: metaDescription,
    url: canonicalUrl,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Arizona House of Film",
      telephone: "480-788-1591",
      url: "https://arizonahouseoffilm.com"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Window Film Solutions",
      itemListElement: solutionsData.map((s, i) => ({
        "@type": "Offer", position: i + 1,
        itemOffered: { "@type": "Service", name: s.title, description: s.description }
      }))
    }
  };

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
        <header className="relative py-32 flex items-center justify-center text-center overflow-hidden">
          {/* Replaced broken CDN image with gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-950 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950" />
          <div className="relative z-10 max-w-4xl px-6">
            <span className="inline-block px-4 py-1 bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-widest">
              Performance Grade Solutions • ROC #{rocNumber}
            </span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              Window Film Solutions in Phoenix &amp; Scottsdale | Arizona House of Film
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-xl text-slate-300 font-bold max-w-2xl mx-auto">
              Find the perfect solution to meet your specific needs, from reducing energy costs to enhancing security and style.
            </motion.p>
          </div>
        </header>

        {/* INTRO */}
        <section className="py-12 bg-slate-900 border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium text-center">
              Arizona's climate demands more from window film than almost anywhere else in the country. With average summer highs above 105°F, UV index levels reaching 11, and energy costs climbing, the right film solution makes a measurable difference. Arizona House of Film offers five categories of professional window film — each engineered for specific performance outcomes. Licensed ROC #314088.
            </p>
          </div>
        </section>

        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutionsData.map((solution, index) => (
                <motion.div key={solution.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group relative">
                  <Link to={solution.link} className="block h-full bg-slate-900 border border-slate-800 p-10 hover:border-green-500 transition-all duration-300 relative z-10 overflow-hidden">
                    <div className={`w-20 h-20 bg-gradient-to-br ${solution.color} rounded-none flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform shadow-lg`}>
                      <solution.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-green-500 transition-colors">{solution.title}</h3>
                    <p className="text-slate-300 font-medium leading-relaxed mb-8">{solution.description}</p>
                    <div className="flex items-center text-white font-black uppercase text-sm tracking-widest">
                      {solution.cta} <ArrowRight className="ml-2 w-5 h-5 text-green-500" />
                    </div>
                  </Link>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed mt-3 italic px-1">{solution.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ARIZONA CLIMATE CONTEXT */}
        <section className="py-20 bg-slate-900 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8">Why Film Choice Matters in Arizona</h2>
            <p className="text-slate-300 font-medium leading-relaxed mb-6">
              Standard window glass blocks less than 30% of solar heat. In Phoenix, where south and west-facing windows can receive direct sun for 8+ hours daily, unprotected glass turns rooms into ovens and drives AC costs through the roof. The right film — matched to your glass type, orientation, and goals — can reduce solar heat gain by 40–84%.
            </p>
          </div>
        </section>

        {/* SOLUTIONS FAQ */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-12">Window Film Solutions — FAQ</h2>
            <div className="space-y-8">
              {[
                { q: "What's the most popular window film for Arizona homes?", a: "Ceramic solar control films are by far the most common choice — they reject 50–84% of solar heat without the reflective mirror look." },
                { q: "Can I get window film for just one problem window?", a: "Absolutely. We install film on single windows, rooms, or entire properties. Many customers start with their worst west-facing windows." },
                { q: "What's the difference between residential and commercial film?", a: "Commercial films are typically thicker, have higher heat rejection specs, and come in larger rolls for big glass facades. Performance-wise, both use the same ceramic and IR-blocking technology." },
              ].map((faq, i) => (
                <div key={i} className="border-b border-slate-700 pb-8">
                  <h3 className="font-black text-white uppercase text-sm mb-3">{faq.q}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mt-10">
              Ready to install?{" "}
              <Link to="/residential-window-tinting" className="text-green-400 underline">Explore residential tinting</Link>{" "}
              or{" "}
              <Link to="/commercial-window-tinting" className="text-green-400 underline">commercial tinting services</Link>.{" "}
              Not sure which film is right?{" "}
              <Link to="/contact" className="text-green-400 underline">Contact us for a free recommendation</Link>.
            </p>
          </div>
        </section>

        <section className="py-24 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 uppercase italic">Ready to transform your glass?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-400 text-slate-950 px-12 h-16 text-xl font-black rounded-none w-full sm:w-auto">
                <Link to="/contact">Request A Quote</Link>
              </Button>
              <a href="tel:480-788-1591" className="text-3xl font-black text-white hover:text-green-500 transition-colors">480-788-1591</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Solutions;
