import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Palette,
  Eye,
  Sparkles,
  Home,
  ArrowRight,
  CheckCircle,
  Building,
  Stethoscope,
  ShoppingBag,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cities } from '@/data/cities';
import EstimatorCTA from '../components/EstimatorCTA';

const Decorative = () => {
  const rocNumber = "314088";
  const pageTitle = "Decorative Window Film Phoenix AZ | ROC #314088";
  const metaDescription = "Decorative window film Phoenix and Scottsdale. Frosted glass, privacy film, gradient film, custom graphics. 30+ collections. ROC #314088. Free estimate.";
  const canonicalUrl = "https://arizonahouseoffilm.com/decorative-window-films";
  const heroImageUrl = "https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20221202_101145-IvRcT.jpg";
  const ogImage = "https://arizonahouseoffilm.com/images/default-og.jpg";

  const allFaqItems = [
    {
      q: "Can decorative film be removed without damaging the glass?",
      a: "Yes. Professionally installed decorative films can be removed cleanly without leaving residue or damaging glass when done correctly.",
    },
    {
      q: "How long does decorative film last?",
      a: "Quality decorative films last 7–15 years depending on sun exposure and film type. Exterior films have shorter lifespans than interior applications.",
    },
    {
      q: "Can you match a specific pattern or print?",
      a: "Yes. We have worked with design-focused firms including Coventry Design and Build and AZ Pro Group to match specific brand aesthetics across multiple locations. Whether it is a specific gradient, a custom-cut geometric pattern, or a precise brand color match, we replicate it consistently at scale.",
    },
    {
      q: "Does decorative film reduce heat as well as provide privacy?",
      a: "Many decorative films include solar control properties that block UV rays and moderate heat. Frosted films provide moderate heat reduction. If heat control is your primary concern, we recommend combining decorative film with a ceramic solar layer on south and west-facing windows.",
    },
    {
      q: "Can decorative film be applied to curved or textured glass?",
      a: "Flat glass surfaces are ideal for decorative film. Lightly textured glass can accept certain film types. Heavily textured, wired, or curved glass requires assessment — contact us for a free consultation.",
    },
    {
      q: "How do you clean decorative window film?",
      a: "Use a soft cloth or squeegee with mild soapy water. Avoid abrasive cleaners, ammonia-based products, and razor blades. Most decorative films are easy to maintain and resist fingerprints and smudging.",
    },
    {
      q: "Can I use decorative film on my front door glass or sidelights?",
      a: "Yes. Sidelights, transom windows, and door glass panels are among the most common residential applications. Privacy film on entry door glass prevents visibility into your home while maintaining the appearance of your entryway.",
    },
    {
      q: "Do you offer design consultation for custom graphics?",
      a: "Yes. For custom logos, branded graphics, and bespoke architectural patterns, we provide a free design consultation. Bring your artwork files or work with our team to develop something custom. We handle everything from design to precision installation.",
    },
    {
      q: "Do you work with general contractors on new builds and tenant improvements?",
      a: "Regularly. Arizona House of Film is a licensed subcontractor (ROC #314088) and a frequent partner for Renaissance Companies, Willmeng, and FCI Constructors. We coordinate directly with project managers to install decorative and privacy film during the final phase of tenant improvement buildouts.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Decorative Window Film Installation Phoenix AZ",
    serviceType: "Decorative & Privacy Window Film",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://arizonahouseoffilm.com",
      name: "Arizona House of Film",
    },
    areaServed: { "@type": "State", name: "Arizona" },
    description: metaDescription,
    url: canonicalUrl,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const filmLibrary = [
    {
      category: 'Frosted & Etched',
      slug: 'frosted-etched-films',
      description: 'Classic etched glass and white matte frost for total privacy. Featuring 3M Fasara series.',
      patterns: ['Simple Frosted', 'Frosted Colors', 'Opaque White', 'Light Diffusing', 'Milky Frost'],
    },
    {
      category: 'Casper Cloaking',
      slug: 'specialty-films',
      description: 'Specialty film that obscures LED screens while maintaining glass transparency.',
      patterns: ['Conference Rooms', 'IT Suites', 'Office Security', 'Screen Privacy'],
    },
    {
      category: 'Patterned Privacy',
      slug: 'patterned-privacy-films',
      description: 'Geometric and organic textures like rice paper and rain glass from Madico and Solyx.',
      patterns: ['Glasslike Distortion', 'Bamboo', 'Rice Paper', 'Rain Glass'],
    },
    {
      category: 'Geometric Designs',
      slug: 'patterned-privacy-films',
      description: 'Modern lines and shapes for contemporary Arizona office spaces.',
      patterns: ['Squares', 'Hexagons', 'Triangles', 'Linear Stripes'],
    },
    {
      category: 'Gradient Films',
      slug: 'elegant-textured-films',
      description: 'Seamless transitions from solid frosted privacy to clear glass.',
      patterns: ['Bottom-Up', 'Center-Band', 'Dual-Taper', 'Custom Gradients'],
    },
    {
      category: 'Custom Graphics',
      slug: 'specialty-films',
      description: 'Precision-cut branding, company logos, and bespoke architectural artwork.',
      patterns: ['Company Logos', 'Custom Text', 'Branding', 'Sandblast Effects'],
    },
  ];

  const benefits = [
    { icon: Eye, title: 'Enhanced Privacy', description: 'Create secluded spaces while maintaining natural light flow.' },
    { icon: Sparkles, title: 'Aesthetic Appeal', description: 'Transform plain glass into stunning design elements.' },
    { icon: Palette, title: 'Design Flexibility', description: 'Hundreds of patterns or fully custom branding.' },
    { icon: Home, title: 'Easy Maintenance', description: 'Durable, easy to clean, and simple to update.' },
  ];

  const problemCards = [
    {
      title: "I need privacy but don\u2019t want to block natural light",
      copy: "Blinds and curtains block light entirely. Frosted and privacy films diffuse light while blocking views — you keep full brightness inside with zero visibility from outside during the day. Perfect for street-facing windows, bathrooms, and ground-floor offices.",
      cta: 'See Frosted Films',
      link: '#film-collection',
      external: false,
    },
    {
      title: 'My office conference rooms have no privacy',
      copy: "Glass conference rooms look modern but expose every meeting to the open office. Frosted, gradient, and Casper Cloaking films create visual privacy while maintaining the open feel. HIPAA-compliant options available for medical spaces.",
      cta: 'Medical & Office Solutions',
      link: '/industries/medical-facilities',
      external: false,
    },
    {
      title: 'My glass looks plain and dated',
      copy: "Specialty etched or sandblasted glass costs $75–$200 per square foot. Decorative film delivers the same frosted, patterned, or etched look for $8–$18 per square foot — installed. Easy to update when your design changes.",
      cta: 'Get a Free Estimate',
      link: '/contact',
      external: false,
    },
    {
      title: 'I need branded graphics or a logo on my storefront glass',
      copy: "Custom-cut vinyl and printed films turn plain storefront glass into high-value marketing surfaces. We've executed precision branding rollouts for national and local leaders — from custom-cut logos for PetSmart and Yoga Six to decorative entry films for Super Chunk Sweets. We handle design, production, and installation end to end.",
      cta: 'Commercial Branding Solutions',
      link: '/commercial-window-tinting',
      external: false,
    },
    {
      title: 'My bathroom or bedroom windows face neighbors or the street',
      copy: "One-way and frosted residential privacy films give you full daytime privacy without darkening your rooms. See out, nobody sees in — without blinds or curtains.",
      cta: 'Residential Privacy Films',
      link: '/residential-window-tinting',
      external: false,
    },
  ];

  const useCases = [
    {
      icon: Building,
      title: 'Office & Corporate',
      uses: [
        'Conference room privacy',
        'Lobby branding',
        'Partition glass',
        'Executive suite frosting',
        'Casper Cloaking for screen security',
      ],
      trusted: 'Trusted by: Wespac Construction, DNG Construction, On Q Financial, ASM America, Delta Construction, Menlo Group Commercial Real Estate, Transact Commercial Interiors',
      link: '/industries/office-buildings',
    },
    {
      icon: Stethoscope,
      title: 'Medical & Healthcare',
      uses: [
        'Patient room privacy',
        'HIPAA-compliant exam room frosting',
        'Waiting area glass',
        'Reception partitions',
      ],
      trusted: 'Trusted by: Community Bridges Inc. (CBI), Banner Physical Therapy, Arizona Trauma Evaluations — HIPAA-compliant privacy frosting for clinical exam rooms and patient waiting areas.',
      link: '/industries/medical-facilities',
    },
    {
      icon: ShoppingBag,
      title: 'Retail & Storefront',
      uses: [
        'Storefront branding',
        'Window graphics',
        'Product display privacy',
        'Anti-graffiti + decorative combo',
      ],
      link: '/industries/retail-stores',
    },
    {
      icon: Home,
      title: 'Residential',
      uses: [
        'Bathroom windows',
        'Sidelights',
        'Entryway glass',
        'Bedroom privacy',
        'Sliding door frosting',
      ],
      trusted: 'Trusted by: Camden Development, DMC Builders — clubhouse bathroom frosting, custom shower window privacy, entry sidelight privacy across North Scottsdale.',
      link: '/residential-window-tinting',
    },
  ];

  const costRows = [
    { solution: 'Decorative Window Film', cost: '$8–$18', removable: 'Yes', updatable: 'Yes', time: 'Hours' },
    { solution: 'Etched Glass', cost: '$75–$150', removable: 'No', updatable: 'No', time: 'Days' },
    { solution: 'Sandblasted Glass', cost: '$100–$200', removable: 'No', updatable: 'No', time: 'Days' },
    { solution: 'Frosted Glass Replacement', cost: '$150–$400', removable: 'No', updatable: 'No', time: 'Weeks' },
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
        <link rel="preload" as="image" href={heroImageUrl} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Decorative Window Films', path: '/decorative-window-films' },
      ]} />

      <main id="main-content">
        {/* HERO */}
        <section className="relative min-h-[70vh] flex items-center pt-24 bg-white overflow-hidden text-slate-900">
          <div className="absolute inset-0 z-0 opacity-15">
            <img alt="Decorative window film pattern installation" className="w-full h-full object-cover" src={heroImageUrl} fetchpriority="high" width="1920" height="1080" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-slate-100 text-slate-800 font-black text-xs mb-6 border border-slate-200 uppercase tracking-widest">
                Licensed & Bonded • ROC #{rocNumber}
              </span>
              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] uppercase tracking-tighter text-slate-950">
                Decorative <br/><span className="text-indigo-600 italic">Window Film</span>
              </h1>
              <p className="text-xl text-slate-700 mb-10 leading-relaxed font-medium">
                The applications are endless: conference rooms, lobbies, and glass partitions. Transform any glass surface into a design statement with professional-grade privacy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-slate-950 hover:bg-indigo-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl">
                  <a href="#film-collection">Explore The Library</a>
                </Button>
                <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-16 border-2 border-slate-950 text-slate-950 font-black hover:bg-slate-950 hover:text-white transition-all text-lg">
                  480-788-1591
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* OPENING AUTHORITY */}
        <section className="py-10 bg-slate-100 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
              Decorative window film transforms ordinary glass into a design element — without the cost of specialty glass replacement. Arizona House of Film installs frosted, patterned, gradient, and custom graphic films for homes, offices, and retail spaces across Phoenix, Scottsdale, and Arizona. Licensed ROC #314088.
            </p>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="p-8 border-l border-slate-100 hover:border-indigo-500 transition-all">
                <benefit.icon className="w-10 h-10 text-indigo-600 mb-6" />
                <h3 className="text-xl font-black text-slate-950 mb-4 uppercase">{benefit.title}</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-16">
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2">Certified Green Building Materials</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Our Solyx&reg; decorative films carry <strong>Intertek Clean Air Gold</strong> certification &mdash; the highest standard for low VOC emissions. The <strong>UltraGreen&reg;</strong> collection goes further with a completely VOC-free coating and PVC-free base material, supporting LEED Low-Emitting Materials credits. Full certification documentation is provided for green building submissions.
              </p>
            </div>
          </div>
        </section>

        {/* PROBLEM-FIRST SECTION */}
        <section className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                What Problem Are You Solving With Decorative Film?
              </h2>
              <div className="w-24 h-2 bg-indigo-600 mx-auto mb-6" />
              <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto">
                Every decorative film project starts with a specific need. Find yours.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {problemCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 hover:border-indigo-500/50 p-8 transition-all group"
                >
                  <h3 className="text-base font-black text-white uppercase mb-3 leading-snug">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium mb-5">{card.copy}</p>
                  {card.link.startsWith('#') ? (
                    <a
                      href={card.link}
                      className="text-indigo-400 font-black text-xs uppercase tracking-widest hover:text-indigo-300 transition-colors"
                    >
                      {card.cta} →
                    </a>
                  ) : (
                    <Link
                      to={card.link}
                      className="text-indigo-400 font-black text-xs uppercase tracking-widest hover:text-indigo-300 transition-colors"
                    >
                      {card.cta} →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FILM COLLECTION */}
        <section id="film-collection" className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-5xl font-black text-white uppercase italic leading-none">The Film Collection</h2>
                <div className="w-24 h-2 bg-indigo-600 mt-4" />
              </div>
              <p className="max-w-md text-slate-300 font-medium text-sm leading-relaxed">
                Explore hundreds of patterns from premium architectural brands like <strong className="text-white">3M Fasara</strong> and <strong className="text-white">Madico</strong>.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filmLibrary.map((category, idx) => (
                <div key={idx} className="p-8 bg-white border border-slate-200 hover:border-indigo-500 transition-all group shadow-sm hover:shadow-xl flex flex-col justify-between">
                  <div>
                    <Link to={`/films/${category.slug}`}>
                      <h3 className="text-2xl font-black mb-4 flex items-center justify-between group-hover:text-indigo-600 transition-colors uppercase">
                        {category.category}
                        <ArrowRight className="w-5 h-5 text-indigo-500 opacity-0 group-hover:opacity-100 transition-all" />
                      </h3>
                    </Link>
                    <p className="text-slate-600 mb-8 text-sm font-medium leading-relaxed">{category.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 border-t border-slate-100 pt-6">
                    {category.patterns.map((pattern, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-700">
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

        {/* USE CASES */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Where Arizona Customers Use Decorative Film
              </h2>
              <div className="w-24 h-2 bg-indigo-600 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((uc, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-slate-50 border border-slate-100 hover:border-indigo-500 hover:shadow-lg transition-all group flex flex-col"
                >
                  <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-colors">
                    <uc.icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-black text-slate-950 uppercase mb-4">{uc.title}</h3>
                  <ul className="space-y-2 mb-4 flex-grow">
                    {uc.uses.map((use, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 shrink-0" />
                        {use}
                      </li>
                    ))}
                  </ul>
                  {uc.trusted && (
                    <p className="text-[11px] text-slate-500 italic leading-relaxed mb-5 border-t border-slate-200 pt-4">
                      {uc.trusted}
                    </p>
                  )}
                  <Link
                    to={uc.link}
                    className="text-indigo-600 font-black text-xs uppercase tracking-widest hover:text-indigo-800 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPECIALTY FROSTING CALLOUT */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="border-l-4 border-blue-500 pl-8">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2 uppercase tracking-tight">
                Beyond Standard Frost: Specialized Privacy Solutions
              </h2>
              <div className="w-16 h-1 bg-blue-500 mb-10" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-sm font-black text-blue-400 uppercase tracking-widest mb-3">Clubhouses &amp; Locker Rooms</h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-medium">
                    High-moisture resistant films for pool houses, gyms, and wet areas. Recently completed for Yoga Six across multiple Arizona locations.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-black text-blue-400 uppercase tracking-widest mb-3">Glass Partition Privacy Bands</h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-medium">
                    Modern center-band frosting provides privacy while seated but keeps the office feeling open — no full blackout. Executed for Transact Commercial Interiors tenant improvement projects. <Link to="/office-partition-window-film" className="text-blue-400 underline hover:text-blue-300">Learn more about office partition window film →</Link>
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-black text-blue-400 uppercase tracking-widest mb-3">Bathroom &amp; Shower Upgrades</h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-medium">
                    Avoid the $500+ cost of glass replacement. Architectural frost provides 100% moisture-safe privacy for shower windows and bathroom doors. Recently completed for residential clients across North Scottsdale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COST COMPARISON */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Decorative Film vs. Specialty Glass — Real Cost Comparison
              </h2>
              <div className="w-24 h-2 bg-indigo-600 mx-auto" />
            </div>
            <div className="overflow-x-auto shadow-sm">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-950 text-white">
                    <th className="text-left px-5 py-4 font-black uppercase text-xs tracking-wider">Solution</th>
                    <th className="text-left px-5 py-4 font-black uppercase text-xs tracking-wider">Cost Per Sq Ft</th>
                    <th className="text-left px-5 py-4 font-black uppercase text-xs tracking-wider">Removable</th>
                    <th className="text-left px-5 py-4 font-black uppercase text-xs tracking-wider">Updatable</th>
                    <th className="text-left px-5 py-4 font-black uppercase text-xs tracking-wider">Install Time</th>
                  </tr>
                </thead>
                <tbody>
                  {costRows.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-slate-200 transition-colors ${
                        i === 0
                          ? 'bg-indigo-50 border-indigo-100'
                          : i % 2 === 0
                          ? 'bg-white'
                          : 'bg-slate-50'
                      } hover:bg-indigo-50`}
                    >
                      <td className={`px-5 py-4 font-black whitespace-nowrap ${i === 0 ? 'text-indigo-700' : 'text-slate-900'}`}>
                        {row.solution}
                        {i === 0 && (
                          <span className="ml-2 text-[10px] font-black bg-indigo-600 text-white px-2 py-0.5 uppercase tracking-wide">
                            Best Value
                          </span>
                        )}
                      </td>
                      <td className={`px-5 py-4 font-bold whitespace-nowrap ${i === 0 ? 'text-indigo-600' : 'text-slate-700'}`}>
                        {row.cost}
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <span className={`font-black text-xs uppercase ${row.removable === 'Yes' ? 'text-green-600' : 'text-red-500'}`}>
                          {row.removable}
                        </span>
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <span className={`font-black text-xs uppercase ${row.updatable === 'Yes' ? 'text-green-600' : 'text-red-500'}`}>
                          {row.updatable}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-slate-600 whitespace-nowrap">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-600 mt-6 leading-relaxed font-medium max-w-3xl">
              Decorative film delivers the same visual result as specialty glass at 5–10% of the cost — with the added benefit of being removable and updatable as your space evolves. ROC #314088.
            </p>
          </div>
        </section>

        {/* CUSTOM DESIGN */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-black text-slate-950 mb-8 uppercase leading-tight">
                  Custom <span className="text-indigo-600 italic text-6xl block">Graphics</span>
                </h2>
                <p className="text-xl text-slate-800 mb-10 leading-relaxed font-medium">
                  Mimic the look of expensive specialty glass at a fraction of the cost. Our in-house designers create precision-cut graphics, company logos, and bespoke architectural patterns.
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

        {/* SERVICE AREAS */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-sm font-black text-slate-600 mb-10 uppercase tracking-[0.3em]">Licensed Statewide Service</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {cities.map(city => {
                const dedicatedRoutes = {
                  'phoenix': '/window-tinting-phoenix',
                  'chandler': '/window-tinting-chandler',
                  'gilbert': '/window-tinting-gilbert',
                  'peoria': '/window-tinting-peoria',
                  'queen-creek': '/window-tinting-queen-creek',
                  'mesa': '/window-tinting-mesa',
                  'tempe': '/window-tinting-tempe',
                  'glendale': '/window-tinting-glendale',
                  'tolleson': '/window-tinting-tolleson',
                  'fountain-hills': '/window-tinting-fountain-hills',
                  'avondale': '/window-tinting-avondale',
                };
                const to = dedicatedRoutes[city.slug] || `/service-areas/${city.slug}`;
                return (
                <Link key={city.slug} to={to} className="px-4 py-2 bg-white border border-slate-200 text-[10px] font-black text-slate-600 uppercase hover:border-slate-950 hover:text-slate-950 transition-all shadow-sm">
                  {city.name}
                </Link>
                );
              })}
            </div>
          </div>
        </section>

        <EstimatorCTA />

        <section className="mt-12 mb-8 border-t border-slate-200 pt-8">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Related Decorative Film Resources</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/decorative-window-film-phoenix" className="text-green-700 underline text-sm">Decorative Window Film Phoenix</Link>
            <Link to="/decorative-window-films/aesthetic-appeal" className="text-green-700 underline text-sm">Aesthetic Appeal Films</Link>
            <Link to="/decorative-window-films/design-flexibility" className="text-green-700 underline text-sm">Design Flexibility Films</Link>
            <Link to="/decorative-window-films/easy-maintenance" className="text-green-700 underline text-sm">Easy Maintenance Films</Link>
            <Link to="/decorative-window-films/enhanced-privacy" className="text-green-700 underline text-sm">Enhanced Privacy Films</Link>
            <Link to="/solyx-bird-safety-film" className="text-green-700 underline text-sm">Solyx Bird Safety Window Film</Link>
            <Link to="/films" className="text-green-700 underline text-sm">Full Film Catalog</Link>
            <Link to="/store" className="text-green-700 underline text-sm">Order Film Direct</Link>
          </div>
        </section>

        {/* DECORATIVE FAQ */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-950 uppercase tracking-tighter mb-12">Decorative Film FAQ</h2>
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
        <section className="py-24 bg-slate-950 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-10 uppercase italic text-white">Ready to Transform Your Glass?</h2>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-12 h-20 text-2xl font-black transition-transform hover:scale-105 rounded-none">
                <Link to="/contact">Request A Quote</Link>
              </Button>
              <a href="tel:480-788-1591" className="text-3xl font-black text-white hover:text-indigo-400 transition-colors">
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
