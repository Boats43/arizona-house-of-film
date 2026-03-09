import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, Building, Eye, ArrowRight, Wind, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cities } from '@/data/cities';
import ContactFormSection from '@/components/contact/ContactFormSection';

const Safety = () => {
  const rocNumber = "314088";
  const pageTitle = "Security Window Film Phoenix AZ | Safety Film Installers | Arizona House of Film";
  const metaDescription = "Security window film Phoenix AZ. 8–12 mil holds glass on impact. Stops smash-and-grab. Deployed for U.S. Navy and GCU. ROC #314088. (480) 788-1591.";
  const canonicalUrl = "https://arizonahouseoffilm.com/safety";
  const ogImage = "https://arizonahouseoffilm.com/images/default-og.jpg";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Does security film stop someone from breaking a window?", acceptedAnswer: { "@type": "Answer", text: "It doesn't prevent breakage — it holds the broken glass in place, making entry dramatically slower and louder. Most smash-and-grab attempts are abandoned within 60 seconds." } },
      { "@type": "Question", name: "Can safety film be combined with tinting?", acceptedAnswer: { "@type": "Answer", text: "Yes. We offer tinted safety films that provide both heat rejection and impact resistance in one product." } },
      { "@type": "Question", name: "Is safety film visible?", acceptedAnswer: { "@type": "Answer", text: "Clear safety films are nearly invisible. Lightly tinted options are also available if heat rejection is also a goal." } },
      { "@type": "Question", name: "Does security film make glass bulletproof?", acceptedAnswer: { "@type": "Answer", text: "No — and that is an important distinction. While 12-mil film provides some ballistic resistance, our goal is Access Denial, not bulletproofing. Our 12-mil installations are designed to keep an attacker outside the building by holding glass together through multiple impacts, providing the 60–120 seconds of delay time needed for lockdown or emergency response. This is the standard we apply for schools and government facilities." } },
      { "@type": "Question", name: "What is the difference between 4-mil and 8-mil security film?", acceptedAnswer: { "@type": "Answer", text: "4-mil is primarily a Safety film — it prevents glass shards from scattering during accidents and provides basic impact resistance. 8-mil is a Security film — it is designed to prevent a person from crawling through the opening after impact. For commercial clients like Skechers USA and Peyton's Distribution, 8-mil is our standard recommendation for effective smash-and-grab deterrence. 12-mil is reserved for schools, government, and high-risk facilities requiring blast mitigation." } },
    ],
  };

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
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Safety & Security Window Film', path: '/safety' },
      ]} />

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
                Security &amp; Safety Window Film Phoenix | Arizona House of Film
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-bold italic">
                Buy Critical Time When Seconds Count. Turning Arizona glass from a vulnerability into a defensive barrier. Trusted for school safety, military recruitment centers, and high-value retail.
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

        {/* OPENING AUTHORITY */}
        <section className="py-12 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
              Security window film is one of the fastest-growing segments of the window film industry — and for good reason. In Arizona, both residential and commercial properties benefit from film that holds shattered glass in place after impact. Arizona House of Film installs 4-mil through 12-mil safety films across Phoenix, Scottsdale, and the Greater Arizona market. Licensed ROC #314088.
            </p>
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

        {/* WALL OF PROOF */}
        <section className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Proven Protection Across Arizona
              </h2>
              <div className="w-24 h-2 bg-red-600 mx-auto mb-6" />
              <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto">
                713 installations. Trusted by schools, government agencies, and high-value retail.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-l-4 border-blue-500 bg-slate-900 p-8">
                <h3 className="text-sm font-black text-blue-400 uppercase tracking-widest mb-3">Educational Facilities</h3>
                <p className="text-lg font-black text-white uppercase mb-4 leading-tight">Delay of Entry for Schools &amp; Childcare</p>
                <p className="text-slate-400 text-sm leading-relaxed font-medium mb-5">
                  Security film is a frontline component of modern school safety protocols. Our 8–12 mil installations hold glass intact through multiple impacts, providing the 60–120 seconds needed for lockdown and emergency response.
                </p>
                <p className="text-xs text-slate-500 italic">
                  Trusted by Yad B&apos;Yad Children&apos;s Center, Maxwell Preschool Academy, and Grand Canyon University.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 bg-slate-900 p-8">
                <h3 className="text-sm font-black text-blue-400 uppercase tracking-widest mb-3">Government &amp; Military</h3>
                <p className="text-lg font-black text-white uppercase mb-4 leading-tight">GSA-Compliant Security Installations</p>
                <p className="text-slate-400 text-sm leading-relaxed font-medium mb-5">
                  High-specification security film for government and military facilities requires precise product selection, licensed installation, and documented compliance. Arizona House of Film is cleared for these installations.
                </p>
                <p className="text-xs text-slate-500 italic">
                  Documented installations for the U.S. Navy Recruitment Center and the State of Arizona.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 bg-slate-900 p-8">
                <h3 className="text-sm font-black text-blue-400 uppercase tracking-widest mb-3">High-Value Retail &amp; Loss Prevention</h3>
                <p className="text-lg font-black text-white uppercase mb-4 leading-tight">Smash-and-Grab Deterrence for Retail</p>
                <p className="text-slate-400 text-sm leading-relaxed font-medium mb-5">
                  8-mil security film holds shattered glass in place, turning a 10-second smash-and-grab into a 60+ second forced entry. Most retail theft attempts are abandoned when quick entry is denied.
                </p>
                <p className="text-xs text-slate-500 italic">
                  Deployed for Skechers USA and Best Dispensary to protect high-theft inventory.
                </p>
              </div>
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

        {/* FILM THICKNESS GUIDE */}
        <section className="py-16 bg-slate-900 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-10">Film Thickness Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { mil: "4 Mil", label: "Entry-Level Safety", body: "Good for residential and light commercial use. Holds glass together after standard impact." },
                { mil: "8 Mil", label: "Mid-Grade", body: "Standard for retail storefronts and medical offices. Significant smash-and-grab deterrence." },
                { mil: "12 Mil", label: "Heavy-Duty", body: "Used in schools, government buildings, and high-risk commercial. Meets blast mitigation specifications." },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-slate-800 border border-slate-700 hover:border-red-600 transition-colors">
                  <p className="text-4xl font-black text-red-600 mb-2">{item.mil}</p>
                  <p className="font-black text-white uppercase text-sm mb-4">{item.label}</p>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WET-GLAZE ANCHORING */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-600 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-white uppercase tracking-tight">The Wet-Glaze Advantage</h2>
                  <p className="text-slate-400 text-sm font-medium mt-1">Film alone is not enough for high-security installations.</p>
                </div>
              </div>
              <p className="text-slate-300 text-base leading-relaxed font-medium mb-6">
                Security film is only as strong as its bond to the window frame. For high-security projects, Arizona House of Film offers Wet-Glaze Anchoring using Dow 995 structural silicone. This industrial-grade system bonds the film and glass directly to the frame — even if the glass is shattered by a sledgehammer, the pane stays in the opening and completely denies entry.
              </p>
              <div className="bg-slate-800 border-l-4 border-red-600 p-5 mb-6">
                <p className="text-xs font-black text-red-500 uppercase tracking-widest mb-2">Recommended for</p>
                <p className="text-slate-300 text-sm font-medium">Schools, dispensaries, jewelry stores, and government facilities.</p>
              </div>
              <p className="text-white font-black uppercase text-sm tracking-wide">
                This system is the difference between glass that holds together and glass that stays in the wall.
              </p>
            </div>
          </div>
        </section>

        {/* C-BOND CALLOUT */}
        <section className="py-16 bg-blue-950 border border-blue-700">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-2xl font-black text-white uppercase tracking-tight">
                    Enhanced Glass Strength with C-Bond Systems
                  </h2>
                  <span className="shrink-0 px-3 py-1 text-[10px] font-black bg-blue-500 text-white uppercase tracking-widest">
                    Certified Installer
                  </span>
                </div>
                <p className="text-blue-200 text-sm leading-relaxed font-medium max-w-3xl">
                  Arizona House of Film is a certified installer of C-Bond glass-strengthening primers. This nanotechnology solution increases the structural integrity of existing glass by up to 100%, creating the ultimate foundation for security laminates. C-Bond is applied before film installation and is invisible once cured — no change to appearance, significant change to performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INSTALLERS CALLOUT */}
        <section className="py-16 bg-slate-900 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Phoenix Security Window Film Installers
            </h2>
            <p className="text-slate-300 text-base leading-relaxed font-medium max-w-3xl">
              Arizona House of Film installs security and safety window film across the Phoenix metro — commercial buildings, schools, government facilities, and residential properties.
            </p>
          </div>
        </section>

        {/* COST TRANSPARENCY */}
        <section className="py-20 bg-slate-900 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              How Much Does Security Window Film Cost in Phoenix?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed font-medium max-w-3xl mb-12">
              Security film projects are custom-quoted based on film specification, square footage, glass type, and anchoring system. There is no flat rate — a single storefront and a school campus require completely different specifications. Below is a framework based on our 713 completed installations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
              {[
                { title: 'Film Specification', body: '4-mil safety film, 8-mil security film, and 12-mil blast-mitigation film each carry different material costs. C-Bond primer and wet-glaze anchoring add to project cost but are mandatory for high-security environments. We specify the correct system for each application — not the cheapest option.' },
                { title: 'Anchoring System', body: 'Film-only installations are faster and lower cost. Wet-glaze anchored systems using Dow 995 structural silicone require additional labor and cure time but are the only system that keeps glass in the opening after a sledgehammer impact. Required for schools, government facilities, and dispensaries.' },
                { title: 'Project Scale', body: 'Single storefront installs complete in 1 day. School campus and government facility projects are phased across multiple mobilizations with credentialing and documentation requirements. Multi-location retail deployments require coordinated scheduling across sites.' },
              ].map((card, i) => (
                <div key={i} className="p-8 bg-slate-800 border border-slate-700 hover:border-red-600 transition-colors">
                  <p className="font-black text-white uppercase text-sm mb-4 tracking-widest">{card.title}</p>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b-2 border-red-600">
                    <th className="py-3 pr-6 font-black text-white uppercase tracking-widest text-xs">Application</th>
                    <th className="py-3 pr-6 font-black text-white uppercase tracking-widest text-xs">Film Spec</th>
                    <th className="py-3 font-black text-white uppercase tracking-widest text-xs">Approach</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Single Storefront', '8-mil security', '1 day, custom quoted'],
                    ['Medical or Dental Office', '8-mil security + privacy', '1–2 days, custom quoted'],
                    ['School or Childcare', '12-mil + wet-glaze', 'Phased, full documentation'],
                    ['Government Facility', '12-mil + wet-glaze + C-Bond', 'Credentialed access, full compliance'],
                    ['Dispensary or Jewelry', '8-mil to 12-mil + wet-glaze', 'Custom assessed'],
                    ['Multi-Location Retail', '8-mil to 12-mil (varies)', 'Coordinated scheduling, custom quoted'],
                  ].map(([app, spec, approach], i) => (
                    <tr key={i} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                      <td className="py-4 pr-6 text-white font-bold">{app}</td>
                      <td className="py-4 pr-6 text-slate-300 font-medium">{spec}</td>
                      <td className="py-4 text-slate-400 font-medium">{approach}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SAFETY FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-950 uppercase tracking-tighter mb-12">Security Film FAQ</h2>
            <div className="space-y-8">
              {[
                { q: "Does security film stop someone from breaking a window?", a: "It doesn't prevent breakage — it holds the broken glass in place, making entry dramatically slower and louder. Most smash-and-grab attempts are abandoned within 60 seconds." },
                { q: "Can safety film be combined with tinting?", a: "Yes. We offer tinted safety films that provide both heat rejection and impact resistance in one product." },
                { q: "Is safety film visible?", a: "Clear safety films are nearly invisible. Lightly tinted options are also available if heat rejection is also a goal." },
                { q: "Does security film make glass bulletproof?", a: "No — and that is an important distinction. While 12-mil film provides some ballistic resistance, our goal is Access Denial, not bulletproofing. Our 12-mil installations are designed to keep an attacker outside the building by holding glass together through multiple impacts, providing the 60–120 seconds of delay time needed for lockdown or emergency response. This is the standard we apply for schools and government facilities." },
                { q: "What is the difference between 4-mil and 8-mil security film?", a: "4-mil is primarily a Safety film — it prevents glass shards from scattering during accidents and provides basic impact resistance. 8-mil is a Security film — it is designed to prevent a person from crawling through the opening after impact. For commercial clients like Skechers USA and Peyton's Distribution, 8-mil is our standard recommendation for effective smash-and-grab deterrence. 12-mil is reserved for schools, government, and high-risk facilities requiring blast mitigation." },
              ].map((faq, i) => (
                <div key={i} className="border-b border-slate-200 pb-8">
                  <h3 className="font-black text-slate-950 uppercase text-sm mb-3">{faq.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mt-10">
              Also explore our{" "}
              <Link to="/commercial-window-tinting" className="text-red-600 underline font-bold">commercial window tinting services</Link>,{" "}
              <Link to="/residential-window-tinting" className="text-red-600 underline font-bold">residential tinting</Link>, or{" "}
              <Link to="/anti-graffiti" className="text-red-600 underline font-bold">anti-graffiti film</Link>{" "}
              for storefronts.
            </p>
          </div>
        </section>

        <ContactFormSection />
      </main>
    </>
  );
};

export default Safety;
