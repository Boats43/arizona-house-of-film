import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield, SprayCan, Building, CheckCircle2,
  AlertTriangle, DollarSign, Tag, RotateCcw,
  ShoppingBag, Landmark, GraduationCap, Layers, Wrench
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';

const AntiGraffiti = () => {
  const rocNumber = "314088";
  const pageTitle = "Anti-Graffiti Window Film Phoenix AZ | Peel and Replace Protection | Arizona House of Film";
  const metaDescription = "Sacrificial anti-graffiti film for Phoenix storefronts, schools, and government facilities. Peel and replace vs glass replacement. ROC #314088. Free estimate.";
  const canonicalUrl = "https://arizonahouseoffilm.com/anti-graffiti";
  const ogImage = "https://arizonahouseoffilm.com/images/default-og.jpg";

  const benefits = [
    {
      icon: Shield,
      title: 'Sacrificial Barrier',
      description: 'Acts as a replaceable skin against spray paint, markers, and acid etching — saving your glass from permanent destruction.'
    },
    {
      icon: SprayCan,
      title: 'Rapid Restoration',
      description: 'Damaged film is peeled away and replaced in minutes, costing a fraction of full glass replacement.'
    },
    {
      icon: Building,
      title: 'Optically Invisible',
      description: "Maintains 100% clarity. Vandals won't even know the film is there until their damage fails to stick."
    }
  ];

  const problemCards = [
    {
      icon: AlertTriangle,
      title: 'Glass Etching',
      description: 'Typical glass replacement after acid etching ranges from $800–$3,000 per panel depending on size and glazing type. Sacrificial anti-graffiti film takes the damage instead — peel and replace for $3–$8 per square foot. The glass underneath is untouched.'
    },
    {
      icon: SprayCan,
      title: 'Spray Paint',
      description: 'Paint and permanent markers bond instantly to bare glass. Anti-graffiti film prevents adhesion — graffiti wipes clean with water and a cloth. No solvents, no scrubbing, no cleaning bills.'
    },
    {
      icon: Tag,
      title: 'Sticker Buildup',
      description: 'Promotional stickers, political posters, and adhesive residue bond permanently to unprotected glass. Film provides a sacrificial surface — when covered, peel and replace.'
    },
    {
      icon: RotateCcw,
      title: 'Repeat Targeting',
      description: 'Vandals return to easy targets. A protected surface that cleans in minutes removes the incentive. Protected storefronts see repeat vandalism rates drop significantly.'
    },
    {
      icon: DollarSign,
      title: 'Cleaning Costs',
      description: 'Commercial graffiti cleaning runs $150–$500 per incident. For high-frequency locations like transit stops and downtown retail, annual cleaning costs exceed film installation within months.'
    }
  ];

  const proofCards = [
    {
      icon: ShoppingBag,
      title: 'Retail Storefronts',
      description: 'Ground-floor retail glass in Phoenix and Scottsdale faces consistent vandalism exposure. We install anti-graffiti film for national retail brands and local storefronts as part of a combined security package.'
    },
    {
      icon: Landmark,
      title: 'Government and Transit',
      description: 'Public-facing glass at transit stops, municipal buildings, and government facilities faces the highest vandalism frequency. Trusted by Arizona public facilities to reduce maintenance costs.'
    },
    {
      icon: GraduationCap,
      title: 'Schools and Educational',
      description: "School entry glass and campus points are frequent vandalism targets. Installed for Phoenix-area educational institutions and children's centers without altering glass appearance."
    }
  ];

  const typeCards = [
    {
      icon: Layers,
      title: 'Sacrificial Film',
      subtitle: 'Recommended for Glass',
      description: 'Clear polyester film applied directly to glass. When vandalized, peel and replace — the glass underneath is untouched. Cost: $3–$8 per square foot installed. Best for: storefronts, transit glass, school windows, entry doors.'
    },
    {
      icon: Wrench,
      title: 'Permanent Coating',
      subtitle: 'Non-Glass Surfaces',
      description: 'Chemical coating for concrete, brick, metal, and signage. Graffiti removes with solvent cleaners. Multiple cleaning cycles before recoating required. Best for: walls, pillars, metal doors, concrete surfaces.'
    }
  ];

  const faqItems = [
    {
      q: "Does anti-graffiti film work against acid etching?",
      a: "Yes. It's specifically designed to protect against acid etching, which permanently damages unprotected glass."
    },
    {
      q: "How often does the film need to be replaced?",
      a: "Film is only replaced after an incident — otherwise it lasts 5–10 years. Many locations go years without needing replacement."
    },
    {
      q: "Can it be applied to mirrors and other surfaces?",
      a: "We primarily install on glass surfaces. Contact us about specific surface types."
    },
    {
      q: "How long does anti-graffiti film last before replacement?",
      a: "Undamaged film typically lasts 2–5 years in Arizona sun. When vandalized, only the affected panel needs replacement — not the full installation."
    },
    {
      q: "Can anti-graffiti film be combined with security or solar film?",
      a: "Yes. We install anti-graffiti film over existing security or solar film. The anti-graffiti layer sits outermost and is replaced independently without disturbing underlying film."
    },
    {
      q: "Does anti-graffiti film change the appearance of the glass?",
      a: "Standard clear film is virtually invisible. A slight sheen may be visible in direct sunlight at certain angles but there is no significant appearance change."
    },
    {
      q: "What surfaces can anti-graffiti film be applied to?",
      a: "Film is designed for flat glass — windows, doors, mirrors, and glass partitions. For brick, concrete, metal, and signage we use permanent anti-graffiti coatings."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(faq => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
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
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="bg-slate-950">

        {/* HERO */}
        <section className="relative py-32 overflow-hidden text-white border-b border-white/10">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="px-4 py-1 bg-red-600 text-white font-black text-xs mb-6 uppercase tracking-widest inline-block">
                Sacrificial Protection • ROC #{rocNumber}
              </span>
              <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase leading-[0.9] tracking-tighter">
                Vandalism <br /><span className="text-red-600 italic">Neutralized</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-6 font-bold italic leading-relaxed">
                Arizona storefronts face daily vandalism exposure. Sacrificial anti-graffiti film takes the damage — peel and replace for dollars, not thousands. Trusted by Phoenix retail, transit, and government facilities. ROC #314088.
              </p>
              <p className="text-base md:text-lg text-slate-400 max-w-2xl mb-10 font-medium leading-relaxed">
                Anti-graffiti window film in Phoenix is most commonly installed on ground-floor retail storefronts, transit shelters, school entry glass, and municipal buildings where repeated vandalism exposure is expected.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white hover:bg-red-600 text-slate-950 hover:text-white px-10 h-16 text-xl font-black uppercase italic rounded-none transition-all">
                  <Link to="/contact">Get Free Audit</Link>
                </Button>
                <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all uppercase tracking-tighter">
                  480-788-1591
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* OPENING AUTHORITY */}
        <section className="py-12 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
              Anti-graffiti window film is a cost-effective alternative to glass replacement after vandalism. A thin sacrificial film layer takes the damage — permanent markers, acid etching, spray paint — and peels away to reveal undamaged glass beneath. Arizona House of Film installs anti-graffiti film for storefronts, transit shelters, elevators, and commercial glass across Phoenix, Scottsdale, and Greater Arizona. Licensed ROC #314088.
            </p>
          </div>
        </section>

        {/* SECTION 2 — PROBLEM-FIRST */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter mb-12">
              What Does Anti-Graffiti Film Solve?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {problemCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 p-8 border-l-4 border-red-600"
                >
                  <card.icon className="w-10 h-10 text-red-600 mb-4" />
                  <h3 className="text-xl font-black text-slate-950 uppercase mb-3">{card.title}</h3>
                  <p className="text-slate-700 text-sm font-medium leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 p-10 border-l-8 border-slate-900 hover:border-red-600 transition-all shadow-sm"
                >
                  <benefit.icon className="w-12 h-12 text-red-600 mb-6" />
                  <h3 className="text-2xl font-black text-slate-950 mb-4 uppercase italic leading-none">{benefit.title}</h3>
                  <p className="text-slate-700 font-bold text-lg leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — PROOF */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">
              Where We Deploy Anti-Graffiti Film in Arizona
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {proofCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800 p-8 border border-slate-700 hover:border-red-600 transition-all"
                >
                  <card.icon className="w-10 h-10 text-red-600 mb-4" />
                  <h3 className="text-xl font-black uppercase mb-3 text-white">{card.title}</h3>
                  <p className="text-slate-300 text-sm font-medium leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — COST TABLE */}
        <section className="py-24 bg-slate-950 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">
              Anti-Graffiti Film vs. Traditional Glass Repair
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-red-600 text-left">
                    <th className="px-4 py-3 text-white font-black uppercase tracking-wider border border-red-700">Solution</th>
                    <th className="px-4 py-3 text-white font-black uppercase tracking-wider border border-red-700">Cost Per Incident</th>
                    <th className="px-4 py-3 text-white font-black uppercase tracking-wider border border-red-700">Permanent Fix</th>
                    <th className="px-4 py-3 text-white font-black uppercase tracking-wider border border-red-700">Repeat Protection</th>
                    <th className="px-4 py-3 text-white font-black uppercase tracking-wider border border-red-700">Downtime</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { solution: 'Anti-Graffiti Film (peel and replace)', cost: '$3–$8/sq ft', permanent: 'Yes', repeat: 'Yes', downtime: 'Hours', highlight: true },
                    { solution: 'Professional Graffiti Cleaning', cost: '$150–$500', permanent: 'No', repeat: 'No', downtime: '1–2 Days', highlight: false },
                    { solution: 'Glass Replacement after etching', cost: '$800–$3,000 per panel', permanent: 'Yes', repeat: 'No', downtime: '1–2 Weeks', highlight: false },
                    { solution: 'Sandblasting / Resurfacing', cost: '$200–$600', permanent: 'Partial', repeat: 'No', downtime: '3–5 Days', highlight: false },
                  ].map((row, i) => (
                    <tr key={i} className={row.highlight ? 'bg-red-600/20 border-l-4 border-l-red-600' : (i % 2 === 0 ? 'bg-slate-900' : 'bg-slate-800')}>
                      <td className={`px-4 py-3 border border-slate-700 font-bold ${row.highlight ? 'text-red-400' : 'text-white'}`}>{row.solution}</td>
                      <td className="px-4 py-3 text-slate-300 border border-slate-700">{row.cost}</td>
                      <td className="px-4 py-3 text-slate-300 border border-slate-700">{row.permanent}</td>
                      <td className="px-4 py-3 text-slate-300 border border-slate-700">{row.repeat}</td>
                      <td className="px-4 py-3 text-slate-300 border border-slate-700">{row.downtime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-400 font-medium text-sm mt-6">
              Anti-graffiti film pays for itself after a single prevented glass replacement. For high-frequency locations, ROI is typically achieved within 60–90 days.
            </p>
          </div>
        </section>

        {/* SECTION 5 — TECHNICAL: TWO TYPES */}
        <section className="py-24 bg-slate-900 text-white border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">
              Two Types of Anti-Graffiti Protection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {typeCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800 p-10 border border-slate-700 hover:border-red-600 transition-all"
                >
                  <card.icon className="w-12 h-12 text-red-600 mb-6" />
                  <h3 className="text-2xl font-black uppercase mb-1 leading-none">{card.title}</h3>
                  <p className="text-red-400 font-bold uppercase text-xs tracking-widest mb-4">{card.subtitle}</p>
                  <p className="text-slate-300 font-medium leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 — COMBINATION CALLOUT */}
        <section className="py-20 bg-red-600 text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">
              Security Film + Anti-Graffiti: The Complete Protection System
            </h3>
            <p className="text-white/90 font-medium leading-relaxed text-lg mb-10 max-w-3xl mx-auto">
              For high-risk storefronts and ground-floor commercial glass, we combine{' '}
              <Link to="/safety" className="text-white underline font-black">8-mil security film</Link>{' '}
              with sacrificial anti-graffiti coating in a single installation. Security film holds shattered glass together against forced entry. Anti-graffiti film protects the surface from vandalism. One install — dual protection.
            </p>
            <Button asChild size="lg" className="bg-white hover:bg-slate-950 text-red-600 hover:text-white px-12 h-16 text-xl font-black uppercase italic rounded-none transition-all">
              <Link to="/contact">Get Security + Anti-Graffiti Quote →</Link>
            </Button>
          </div>
        </section>

        {/* SECTION 7 — FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-950 uppercase tracking-tighter mb-12">Anti-Graffiti Film FAQ</h2>
            <div className="space-y-8">
              {faqItems.map((faq, i) => (
                <div key={i} className="border-b border-slate-200 pb-8">
                  <h3 className="font-black text-slate-950 uppercase text-sm mb-3">{faq.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactFormSection />
      </main>
    </>
  );
};

export default AntiGraffiti;
