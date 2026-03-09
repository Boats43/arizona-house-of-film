import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DollarSign, Thermometer, Shield, Activity, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EnergySaving = () => {
  const rocNumber = "314088";
  const pageTitle = "Energy Saving Window Film Phoenix AZ | HVAC Reduction & SRP Rebates | Arizona House of Film";
  const metaDescription = "Reduce cooling costs by 30% with professional energy-saving window film. Expert installation across Arizona. Licensed ROC #314088.";
  const canonicalUrl = "https://arizonahouseoffilm.com/energy-saving-window-films";
  const ogImage = "https://arizonahouseoffilm.com/images/default-og.jpg";

  const benefits = [
    { icon: DollarSign, title: '30% HVAC Reduction', description: 'Dramatically lower cooling costs by neutralizing primary solar heat gain before it enters.' },
    { icon: Thermometer, title: 'Thermal Stability', description: 'Eliminate interior hot spots and maintain consistent temperatures across large glass perimeters.' },
    { icon: Shield, title: '99% UV Intercept', description: 'Industrial-grade protection for assets, flooring, and inventory against UV degradation.' },
    { icon: Activity, title: 'Precision Clarity', description: 'Advanced spectrally selective technology offers heat rejection without sacrificing natural light.' }
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Energy-Saving Window Film Installation",
    serviceType: "Energy Efficient Window Film",
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

  const allFaqItems = [
    { q: "How much can window film reduce my APS or SRP bill?", a: "Most Arizona homeowners see 15–30% reductions in cooling costs. The exact amount depends on window orientation, size, and existing glass type." },
    { q: "Do I need to tell my utility company I'm installing window film?", a: "Only if you're claiming a rebate. We can help with the paperwork." },
    { q: "Does energy-saving film work in winter too?", a: "Yes. Low-e films also retain interior heat in winter, making them beneficial year-round even in Arizona." },
    { q: "Does window film actually pay for itself in Arizona?", a: "Yes — and faster than anywhere else in the country. For a 10,000 sq ft commercial facility, energy savings alone typically cover installation cost within 18–36 months. When you factor in extended HVAC equipment life from reduced duty cycles, the total ROI is significantly higher. Arizona homeowners typically see payback in 2–4 years versus 8–12 years in northern climates." },
    { q: "How do SRP and APS rebates work for window film?", a: "Both utilities recognize window film as a qualifying energy upgrade. We are familiar with SRP Business Solutions and APS Peak Player program requirements. We identify qualifying films based on SHGC ratings, provide the required technical data sheets, and assist with the rebate application process. Ask about current rebate amounts during your free estimate — eligibility and amounts change seasonally." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
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
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Energy Saving Window Film', path: '/energy-saving-window-films' },
      ]} />

      <main className="bg-slate-950 text-white min-h-screen">
        {/* HERO */}
        <section className="relative py-24 border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent opacity-50" />
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-block px-3 py-1 bg-red-600 text-white font-black text-xs uppercase tracking-widest mb-6">
                  Performance Grade Window Film
                </div>
                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                  Thermal <span className="text-red-600 italic">Defense</span>
                </h1>
                <p className="text-xl text-slate-400 font-bold uppercase tracking-wide mb-10 border-l-4 border-red-600 pl-6">
                  Engineered for the Arizona climate. Stop the heat. Save the equipment. Lower the bills.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-slate-950 hover:bg-red-600 hover:text-white rounded-none h-16 px-10 text-xl font-black uppercase italic transition-all">
                    <Link to="/contact">Request Energy Audit</Link>
                  </Button>
                  <a href="tel:480-788-1591" className="inline-flex items-center justify-center border-2 border-white/20 hover:border-red-600 px-8 h-16 text-xl font-black uppercase italic transition-all">
                    <Phone className="mr-3 w-6 h-6 text-red-600" /> 480-788-1591
                  </a>
                </div>
              </motion.div>
              <div className="relative border-2 border-white/10 p-2 bg-slate-900 min-h-64 flex items-center justify-center">
                <p className="text-slate-600 text-sm">Image coming soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* OPENING AUTHORITY */}
        <section className="py-12 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
              In Phoenix, windows are thermal holes in your building envelope. For large-scale facilities like Peyton&rsquo;s Distribution Center and Genuine Parts Company, unprotected glass is not just a comfort issue &mdash; it is a massive line-item expense on every utility bill. Arizona House of Film installs ceramic and spectrally selective films that neutralize solar heat at the source, protecting your HVAC investment and your bottom line. SRP and APS customers may qualify for rebates on qualifying installations. Licensed ROC #314088.
            </p>
          </div>
        </section>

        {/* PERFORMANCE METRICS */}
        <section className="py-24 bg-white text-slate-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-4 border-slate-950 pb-8">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
                Efficiency <span className="text-red-600">Specs</span>
              </h2>
              <span className="font-bold uppercase tracking-widest text-slate-400">ROC #{rocNumber}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-slate-50 p-8 border border-slate-200 hover:border-red-600 transition-all group">
                  <benefit.icon className="w-10 h-10 text-red-600 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-4">{benefit.title}</h3>
                  <p className="text-slate-600 font-bold uppercase text-xs leading-tight tracking-widest">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI + REBATE */}
        <section className="py-16 bg-slate-950 text-white border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 text-red-600">ROI Estimates</h2>
              <div className="space-y-4 text-slate-300 font-medium text-sm">
                <p className="font-black text-white uppercase text-xs tracking-widest">Average Arizona Home:</p>
                <p>• Annual energy savings: $200–$600</p>
                <p>• Typical installation cost: $1,200–$2,400</p>
                <p>• Payback period: 2–4 years</p>
                <p>• Film lifespan: 15–25 years</p>
                <p className="font-black text-white uppercase text-xs tracking-widest mt-6">Commercial Building (10,000 sq ft):</p>
                <p>• Annual energy savings: $3,000–$8,000</p>
                <p>• Payback period: 1–3 years</p>
              </div>
            </div>
            <div className="bg-red-600 p-10">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-4">SRP &amp; APS Rebate Program</h3>
              <p className="text-white/90 font-medium leading-relaxed text-sm mb-6">
                Arizona utility companies SRP and APS offer rebates for energy-efficient window film on qualifying properties. Rebate amounts and eligibility change seasonally — ask us during your free estimate whether your installation qualifies.
              </p>
              <Button asChild size="lg" className="bg-white text-red-600 hover:bg-slate-950 hover:text-white rounded-none font-black px-8">
                <Link to="/contact">Check Rebate Eligibility</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* PROVEN EFFICIENCY SECTION */}
        <section className="py-24 bg-slate-900 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Proven Efficiency at Scale
              </h2>
              <div className="w-24 h-2 bg-red-600 mx-auto mb-6" />
              <p className="text-slate-400 text-lg font-bold uppercase tracking-wide">
                Real Arizona projects. Real utility savings.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  headline: "Industrial Heat Load Reduction",
                  label: "Warehousing & Distribution",
                  copy: "Large-footprint facilities with unprotected glass see interior temperatures 15°F+ above set point during peak sun hours — forcing HVAC units into extended recovery cycles. Our ceramic films neutralize heat at the glass before it enters the building envelope.",
                  proof: "Completed for Peyton's Distribution Center and Laser Components DG across Phoenix metro warehouse facilities.",
                },
                {
                  headline: "Eliminating Thermostat Wars",
                  label: "Corporate Office Hubs",
                  copy: "Glass-heavy office perimeters create hot spots that drive constant thermostat conflicts and uneven comfort across floors. Spectrally selective films balance temperature across the entire footprint without reducing natural light.",
                  proof: "Installed for On Q Financial and Capital Accounting — full-perimeter solar control across multi-floor office environments.",
                },
                {
                  headline: "The Horizontal Glass Problem",
                  label: "Skylights & High-Heat Zones",
                  copy: "Skylights are the number one cause of thermal leakage in Arizona buildings. Vertical glass receives direct sun for hours — horizontal glass receives it all day. We have solved uncoolable rooms by treating the glass others ignore.",
                  proof: "Skylight film installations for LDS Church facilities and residential estates in Paradise Valley and North Scottsdale.",
                },
              ].map((card, i) => (
                <div key={i} className="border-l-4 border-blue-500 bg-slate-950 p-8">
                  <p className="text-blue-400 font-black text-xs uppercase tracking-widest mb-2">{card.label}</p>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4">{card.headline}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium mb-6">{card.copy}</p>
                  <p className="text-slate-500 text-xs leading-relaxed italic">{card.proof}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LEED & COMPLIANCE SECTION */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Energy Compliance &amp; LEED Support
              </h2>
              <div className="w-24 h-2 bg-blue-500 mx-auto mb-6" />
              <p className="text-slate-400 text-base font-medium max-w-2xl mx-auto">
                Technical documentation for green building initiatives and code compliance.
              </p>
            </div>
            <div className="bg-gray-900 border border-blue-700 p-8 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "LEED Certification Credits",
                    copy: "Our films contribute to LEED credits under Energy & Atmosphere and Indoor Environmental Quality categories. We provide the technical documentation required for certification submissions. Relevant for projects with Wespac Construction, Willmeng, and FCI Constructors.",
                  },
                  {
                    title: "COMcheck & Building Code Compliance",
                    copy: "Arizona construction requires meeting strict SHGC (Solar Heat Gain Coefficient) thresholds. We provide film specs and NFRC-rated data sheets that satisfy COMcheck requirements for new construction and major renovations.",
                  },
                  {
                    title: "Asset Protection Documentation",
                    copy: "By rejecting 99% of UV, our films extend the life of interior assets. We provide UV rejection certifications for asset protection documentation — relevant for inventory-heavy facilities, showrooms, and historically significant interiors.",
                  },
                ].map((item, i) => (
                  <div key={i} className="border-t border-blue-700/50 pt-6 first:border-t-0 first:pt-0 md:border-t-0 md:pt-0 md:border-l md:border-blue-700/50 md:pl-8 first:pl-0">
                    <h3 className="text-white font-black text-sm uppercase tracking-wide mb-3">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ENERGY FAQ */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-black text-slate-950 uppercase tracking-tighter mb-12">Energy Film FAQ</h2>
            <div className="space-y-8">
              {allFaqItems.map((faq, i) => (
                <div key={i} className="border-b border-slate-200 pb-8">
                  <h3 className="font-black text-slate-950 uppercase text-sm mb-3">{faq.q}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-red-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8">
              Request an Energy Performance Audit
            </h2>
            <p className="text-xl font-bold uppercase tracking-widest mb-12 opacity-90">
              Do not guess at your savings. We provide a comprehensive assessment of your glass orientation, current thermal leakage, and projected ROI &mdash; at no charge.
            </p>
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-slate-950 hover:text-white rounded-none h-20 px-16 text-3xl font-black uppercase italic transition-all shadow-2xl">
              <Link to="/contact">Get My Energy Audit &rarr;</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default EnergySaving;
