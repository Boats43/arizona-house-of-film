import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Lock, Shield, PenTool, SprayCan, ArrowRight, DollarSign, Eye, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const solutionsData = [
  {
    icon: Sun,
    title: "Comfort & Energy",
    description: "Reduce heat, cut glare, and lower your energy bills with our advanced solar control films.",
    link: "/energy-saving-window-films",
    color: "from-blue-500 to-sky-600",
    cta: "Explore Energy-Saving Films",
    note: "The most popular category for Arizona homes and offices — blocks solar heat without darkening glass."
  },
  {
    icon: Lock,
    title: "Privacy & Decorative",
    description: "Enhance privacy and style with a wide range of frosted, patterned, and custom decorative films.",
    link: "/decorative-window-films",
    color: "from-purple-500 to-pink-600",
    cta: "Explore Decorative Films",
    note: "From subtle frosted to bold custom graphics — installed clean with no bubbles, guaranteed."
  },
  {
    icon: Shield,
    title: "Safety & Security",
    description: "Strengthen your glass against break-ins, accidents, and storms with heavy-duty security films.",
    link: "/safety",
    color: "from-red-500 to-orange-600",
    cta: "Explore Security Films",
    note: "8–12 mil laminate film holds glass in place after impact — required in many Arizona commercial applications."
  },
  {
    icon: PenTool,
    title: "Graphics & Branding",
    description: "Turn your windows into a canvas with custom-cut logos and vibrant graphics to elevate your brand.",
    link: "/decorative-window-films",
    color: "from-green-500 to-emerald-600",
    cta: "Explore Branding Films",
    note: "Custom-cut vinyl and window graphics for storefronts, offices, and vehicles."
  },
  {
    icon: SprayCan,
    title: "Graffiti & Protection",
    description: "Protect your property from vandalism with sacrificial anti-graffiti films that are easy to replace.",
    link: "/anti-graffiti",
    color: "from-yellow-500 to-amber-600",
    cta: "Explore Anti-Graffiti Films",
    note: "Sacrificial film layer that takes the damage — peel and replace at fraction of glass replacement cost."
  },
];

const problemCards = [
  {
    icon: Sun,
    problem: "My rooms are unbearably hot in summer",
    context: "South and west-facing Arizona windows receive direct sun 8+ hours daily, turning rooms into ovens.",
    solution: "Solar Control Film",
    link: "/energy-saving-window-films",
  },
  {
    icon: DollarSign,
    problem: "My AC bill spikes every summer",
    context: "Unprotected glass allows 70–80% of solar heat to pass through. Film cuts that load by up to 84%.",
    solution: "Energy-Saving Film",
    link: "/energy-saving-window-films",
  },
  {
    icon: Eye,
    problem: "People can see directly into my space",
    context: "Street-level glass, conference rooms, and bathrooms need daytime privacy without losing natural light.",
    solution: "Frosted or One-Way Film",
    link: "/decorative-window-films",
  },
  {
    icon: Lock,
    problem: "I'm worried about break-ins or glass breakage",
    context: "Standard glass shatters into dangerous shards. Security film holds glass together after impact.",
    solution: "Safety & Security Film",
    link: "/safety",
  },
  {
    icon: SprayCan,
    problem: "My windows keep getting tagged with graffiti",
    context: "Glass etching and spray paint are costly to remove. A sacrificial film layer absorbs the damage.",
    solution: "Anti-Graffiti Film",
    link: "/anti-graffiti",
  },
  {
    icon: Sparkles,
    problem: "UV is fading my furniture and flooring",
    context: "Arizona UV index regularly hits 11+. Window film blocks up to 99.9% of UV rays — the #1 cause of fade.",
    solution: "UV-Blocking Film",
    link: "/energy-saving-window-films",
  },
];

const comparisonRows = [
  {
    filmType: "Ceramic Solar Control",
    link: "/energy-saving-window-films",
    heatRejection: "50–84%",
    uvBlock: "99.9%",
    glareReduction: "High",
    privacy: "None",
    bestFor: "Homes, offices, heat reduction",
  },
  {
    filmType: "Frosted / Decorative",
    link: "/decorative-window-films",
    heatRejection: "Moderate",
    uvBlock: "99%",
    glareReduction: "Moderate",
    privacy: "Full daytime",
    bestFor: "Bathrooms, conference rooms, branding",
  },
  {
    filmType: "Safety & Security",
    link: "/safety",
    heatRejection: "Varies",
    uvBlock: "99%",
    glareReduction: "Low",
    privacy: "None",
    bestFor: "Entry glass, storefronts, schools",
  },
  {
    filmType: "Dual-Purpose (Solar + Security)",
    link: "/safety",
    heatRejection: "40–60%",
    uvBlock: "99.9%",
    glareReduction: "High",
    privacy: "None",
    bestFor: "Commercial ground-floor, retail",
  },
  {
    filmType: "Anti-Graffiti",
    link: "/anti-graffiti",
    heatRejection: "Minimal",
    uvBlock: "Varies",
    glareReduction: "None",
    privacy: "None",
    bestFor: "Transit, retail, public buildings",
  },
  {
    filmType: "Decorative / Branding",
    link: "/decorative-window-films",
    heatRejection: "Low",
    uvBlock: "99%",
    glareReduction: "Varies",
    privacy: "Full",
    bestFor: "Storefronts, office branding",
  },
];

const faqs = [
  {
    q: "What's the most popular window film for Arizona homes?",
    a: "Ceramic solar control films are by far the most common choice — they reject 50–84% of solar heat without the reflective mirror look. They're non-conductive, work on tinted glass, and are backed by lifetime warranties."
  },
  {
    q: "Can I get window film for just one problem window?",
    a: "Absolutely. We install film on single windows, rooms, or entire properties. Many customers start with their worst west-facing windows and return to do the whole house once they feel the difference."
  },
  {
    q: "What's the difference between residential and commercial film?",
    a: "Commercial films are typically thicker, have higher heat rejection specs, and come in larger rolls for big glass facades. Performance-wise, both use the same ceramic and IR-blocking technology."
  },
  {
    q: "How long does window film last in Arizona's extreme heat?",
    a: "Quality ceramic films installed by a professional are rated 10–25 years in high-UV climates like Phoenix. Cheaper dyed films degrade faster, turning purple and bubbling. We only install warranty-backed, name-brand films."
  },
  {
    q: "Can window film be applied to already-tinted glass?",
    a: "Yes, in most cases. Our technicians assess your existing glass and tint level before recommending a compatible film. Applying the wrong film to factory-tinted glass can cause seal failure on dual-pane units — we check first."
  },
];

const Solutions = () => {
  const rocNumber = "314088";
  const pageTitle = "Window Film Solutions in Arizona | Arizona House of Film";
  const metaDescription = "Find the right window film for your problem — heat, glare, privacy, security, or graffiti. Licensed ROC #314088. Free estimates: (480) 788-1591.";
  const canonicalUrl = "https://arizonahouseoffilm.com/solutions";
  const ogImage = "https://arizonahouseoffilm.com/og-image.jpg";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: pageTitle,
    description: metaDescription,
    url: canonicalUrl,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Arizona House of Film",
      telephone: "+1-480-788-1591",
      url: "https://arizonahouseoffilm.com"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Window Film Solutions",
      itemListElement: solutionsData.map((s, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "Service", name: s.title, description: s.description }
      }))
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a }
    }))
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
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="bg-slate-950 min-h-screen">

        {/* SECTION 1: HERO */}
        <header className="relative py-32 flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-950 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950" />
          <div className="relative z-10 max-w-4xl px-6">
            <span className="inline-block px-4 py-1 bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-widest">
              Performance Grade Solutions • ROC #{rocNumber}
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none"
            >
              Window Film Solutions in Phoenix &amp; Scottsdale
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-xl text-slate-300 font-bold max-w-2xl mx-auto"
            >
              Arizona's climate is extreme. The right film solves specific problems. Find yours below.
            </motion.p>
          </div>
        </header>

        {/* SECTION 2: PROBLEM NAVIGATOR */}
        <section className="py-20 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 text-center">
              What Problem Are You Trying to Solve?
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto font-medium">
              Skip straight to the solution. Click the problem that matches your situation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {problemCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={card.link}
                    className="block bg-slate-950 border border-slate-700 p-6 hover:border-green-500 transition-all duration-300 group"
                  >
                    <card.icon className="w-8 h-8 text-green-500 mb-4" />
                    <p className="text-white font-black text-lg mb-2 group-hover:text-green-400 transition-colors leading-tight">
                      "{card.problem}"
                    </p>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed mb-4">
                      {card.context}
                    </p>
                    <span className="inline-flex items-center text-green-500 text-xs font-black uppercase tracking-widest">
                      → {card.solution}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: SOLUTION CATEGORIES */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 text-center">
              Browse by Film Category
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto font-medium">
              Five distinct film families — each engineered for a specific performance outcome.
            </p>
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
                    <div className={`w-20 h-20 bg-gradient-to-br ${solution.color} rounded-none flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform shadow-lg`}>
                      <solution.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-green-500 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-slate-300 font-medium leading-relaxed mb-8">
                      {solution.description}
                    </p>
                    <div className="flex items-center text-white font-black uppercase text-sm tracking-widest">
                      {solution.cta} <ArrowRight className="ml-2 w-5 h-5 text-green-500" />
                    </div>
                  </Link>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed mt-3 italic px-1">
                    {solution.note}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: ARIZONA CLIMATE CONTEXT */}
        <section className="py-20 bg-slate-900 border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-6">
              Why Film Choice Matters in Arizona
            </h2>
            <p className="text-slate-300 font-medium leading-relaxed mb-10">
              Standard window glass blocks less than 30% of solar heat. In Phoenix, where south and west-facing windows can receive direct sun for 8+ hours daily, unprotected glass turns rooms into ovens and drives AC costs through the roof. The right film — matched to your glass type, orientation, and goals — can reduce solar heat gain by 40–84%.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-slate-950 border border-slate-700 p-6 text-center">
                <p className="text-5xl font-black text-green-500 mb-2">105°F+</p>
                <p className="text-slate-300 text-sm font-bold uppercase tracking-wider">Average Summer High in Phoenix</p>
              </div>
              <div className="bg-slate-950 border border-slate-700 p-6 text-center">
                <p className="text-5xl font-black text-green-500 mb-2">11</p>
                <p className="text-slate-300 text-sm font-bold uppercase tracking-wider">Peak UV Index (Scale of 1–11+)</p>
              </div>
              <div className="bg-slate-950 border border-slate-700 p-6 text-center">
                <p className="text-5xl font-black text-green-500 mb-2">84%</p>
                <p className="text-slate-300 text-sm font-bold uppercase tracking-wider">Max Solar Heat Rejection from Film</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: FILM TYPE COMPARISON TABLE */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
              Film Type Comparison
            </h2>
            <p className="text-slate-400 font-medium mb-10">
              Use this table to match your primary goal to the right film category.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-800 text-left">
                    <th className="px-4 py-3 text-white font-black uppercase tracking-wider border border-slate-700">Film Type</th>
                    <th className="px-4 py-3 text-white font-black uppercase tracking-wider border border-slate-700">Heat Rejection</th>
                    <th className="px-4 py-3 text-white font-black uppercase tracking-wider border border-slate-700">UV Block</th>
                    <th className="px-4 py-3 text-white font-black uppercase tracking-wider border border-slate-700">Glare Reduction</th>
                    <th className="px-4 py-3 text-white font-black uppercase tracking-wider border border-slate-700">Privacy</th>
                    <th className="px-4 py-3 text-white font-black uppercase tracking-wider border border-slate-700">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-slate-900" : "bg-slate-950"}>
                      <td className="px-4 py-3 border border-slate-700">
                        <Link to={row.link} className="text-green-400 font-bold hover:underline">
                          {row.filmType}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-slate-300 border border-slate-700">{row.heatRejection}</td>
                      <td className="px-4 py-3 text-slate-300 border border-slate-700">{row.uvBlock}</td>
                      <td className="px-4 py-3 text-slate-300 border border-slate-700">{row.glareReduction}</td>
                      <td className="px-4 py-3 text-slate-300 border border-slate-700">{row.privacy}</td>
                      <td className="px-4 py-3 text-slate-300 border border-slate-700">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-xs mt-4 italic">
              Not sure which row fits? <Link to="/contact" className="text-green-400 underline">Ask us — free recommendations, no pressure.</Link>
            </p>
          </div>
        </section>

        {/* SECTION 6: FAQ */}
        <section className="py-20 bg-slate-900 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-12">
              Window Film Solutions — FAQ
            </h2>
            <div className="space-y-8">
              {faqs.map((faq, i) => (
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

        {/* SECTION 7: CTA */}
        <section className="py-24 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase italic">
              Ready to transform your glass?
            </h2>
            <p className="text-slate-400 font-medium mb-10">
              Licensed · Bonded · ROC #{rocNumber} | Call us at{" "}
              <a href="tel:4807881591" className="text-green-400 hover:underline font-bold">(480) 788-1591</a>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-400 text-slate-950 px-12 h-16 text-xl font-black rounded-none w-full sm:w-auto">
                <Link to="/contact">Request A Free Quote</Link>
              </Button>
              <a href="tel:4807881591" className="text-3xl font-black text-white hover:text-green-500 transition-colors">
                (480) 788-1591
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Solutions;
