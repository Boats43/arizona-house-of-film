import React from "react";
import { Helmet } from "react-helmet-async";
import BreadcrumbSchema from "@/components/SEO/BreadcrumbSchema.jsx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building,
  Zap,
  ShieldCheck,
  Shield,
  Stethoscope,
  Warehouse,
  ShoppingBag,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cities } from "@/data/cities";
import ContactFormSection from "@/components/contact/ContactFormSection";

const Commercial = () => {
  const rocNumber = "314088";
  const pageTitle =
    "Commercial Window Tinting Phoenix and Scottsdale AZ | 713 Projects Since 2017 | Arizona House of Film";
  const metaDescription = "Phoenix commercial window film. 713 projects since 2017. Trusted by Wespac, FCI, Skechers, Coca-Cola and ASU. ROC #314088. (480) 788-1591.";
  const canonicalUrl = "https://arizonahouseoffilm.com/commercial-window-tinting";
  const heroImageUrl =
    "https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/img_20240821_123937_469-jYOb9.jpg";
  const ogImage = "https://arizonahouseoffilm.com/images/default-og.jpg";

  const trustedNames = [
    "State of Arizona",
    "Skechers USA",
    "Grand Canyon University",
    "Valley Metro",
    "Coca-Cola",
    "Navy Recruitment Center",
    "PetSmart",
    "Love's Travel Stop",
    "Wespac Construction",
    "Renaissance Companies",
    "Delta Construction",
    "G3 Glass Granite Group",
    "Community Bridges Inc.",
    "Genuine Parts Company",
    "FCI Constructors",
    "Camden Development",
    "DNG Construction",
    "Willmeng Construction",
    "Banner Physical Therapy",
    "ASU / MacroTechnology Works",
    "Glendale Fire Station",
    "Frank Lloyd Wright Foundation",
    "Boeing",
    "Sherwin-Williams",
    "Clune Construction",
  ];

  const commercialFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does commercial window film installation take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most commercial projects are completed in 1–3 days depending on square footage. We work around your business hours to minimize disruption.",
        },
      },
      {
        "@type": "Question",
        name: "Do commercial window films meet building codes in Arizona?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We install films that comply with Arizona building codes and can provide documentation for permit applications when required.",
        },
      },
      {
        "@type": "Question",
        name: "What's the ROI on commercial window film?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typical commercial installations pay back within 2–5 years through energy savings alone. Security film adds additional insurance value.",
        },
      },
      {
        "@type": "Question",
        name: "Can window film be applied to any commercial glass?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most standard commercial glass accepts film. We assess your glass type during the free estimate to recommend the correct product and ensure warranty validity.",
        },
      },
      {
        "@type": "Question",
        name: "Have you worked on projects similar to mine?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With 713 completed commercial projects across Maricopa and Pima counties, the answer is almost certainly yes. From small storefronts to federal recruitment centers, university campuses, and large distribution facilities like Peyton's Distribution Center, we have documented experience across every commercial building type in Arizona.",
        },
      },
      {
        "@type": "Question",
        name: "Are you licensed for high-liability commercial environments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Arizona House of Film holds Arizona Registrar of Contractors license ROC #314088, is fully bonded and insured, and meets procurement requirements for government and institutional projects. We have completed work for the State of Arizona, Glendale Fire Station 152, Grand Canyon University, and ASU — environments where licensing documentation is mandatory.",
        },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Window Tinting",
    serviceType: "Commercial Window Film Installation",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://arizonahouseoffilm.com",
      name: "Arizona House of Film",
    },
    areaServed: { "@type": "State", name: "Arizona" },
    description: metaDescription,
  };

  const benefits = [
    {
      icon: Zap,
      title: "Energy Efficiency",
      description:
        "Reduce HVAC load and cooling costs by up to 30% by rejecting solar heat before it enters the building.",
    },
    {
      icon: ShieldCheck,
      title: "Security & Safety",
      description:
        "Protect assets and personnel. Security films hold glass together during break-ins or accidental impact.",
    },
    {
      icon: Building,
      title: "Professional Esthetics",
      description:
        "Give your building a modern, uniform look while providing privacy and comfort for tenants.",
    },
  ];

  const industrySolutions = [
    {
      icon: Building,
      title: "General Construction & Tenant Improvement",
      body: "Arizona House of Film is the preferred window film subcontractor for the Valley's leading general contractors. We work within your critical path schedule, coordinate directly with project managers, and meet all architectural specifications including LEED certification and Arizona energy codes. From ground-up builds to tenant improvement (TI) projects, we deliver on time and on spec.",
      partners: [
        "Wespac Construction",
        "Renaissance Companies",
        "Delta Construction",
        "G3 Glass Granite Group",
        "DNG Construction",
        "Clune Construction",
        "FCI Constructors",
        "Willmeng Construction",
        "ForeSite Design & Construction",
      ],
      solution:
        "Architectural solar films, decorative privacy glass, safety film for code compliance",
    },
    {
      icon: Shield,
      title: "Government, Military & Municipal Facilities",
      body: "Licensed, bonded, and experienced in high-security government environments. We provide fragmentation retention films, privacy solutions for sensitive infrastructure, and anti-graffiti protection for public-facing buildings. Our work meets GSA standards and Arizona procurement requirements — fully documented for compliance review.",
      partners: [
        "State of Arizona",
        "State of Arizona Department of Corrections",
        "Glendale Fire Station 152",
        "Navy Recruitment Center",
        "Valley Metro",
        "City of Buckeye",
        "City of Phoenix Facilities",
      ],
      solution:
        "Blast-mitigation films, GSA-compliant security film, anti-graffiti protection, privacy frosting",
    },
    {
      icon: Stethoscope,
      title: "Healthcare Facilities & Educational Institutions",
      body: "Privacy and safety are non-negotiable in medical and educational environments. We install HIPAA-compliant frosted and one-way privacy films for clinics, waiting rooms, and patient areas. For schools and childcare centers, our 8-mil and 12-mil security films hold shattered glass in place — a proven delay-of-entry barrier that gives students and staff critical time to reach safety.",
      partners: [
        "Community Bridges Inc.",
        "Yad B'Yad Children's Center",
        "Maxwell Preschool Academy",
        "Catalina Animal Hospital",
        "Humanities and Sciences Academy",
        "SDC Clinical",
        "Grand Canyon University",
        "ASU / MacroTechnology Works",
        "Banner Physical Therapy",
        "Applied Hearing Solutions",
        "Arizona Trauma Evaluations & Treatment",
      ],
      solution:
        "HIPAA-compliant privacy film, 8-mil and 12-mil security film, UV protection for sensitive equipment",
    },
    {
      icon: Warehouse,
      title: "Industrial Facilities, Warehouses & Distribution Centers",
      body: "Large industrial spaces in Phoenix face some of the highest solar heat loads in the country. Unprotected warehouse glass can raise interior temperatures 15–20°F above ambient — damaging inventory, straining HVAC systems, and creating unsafe working conditions. Our high-performance ceramic solar films reduce heat gain by up to 84%, protecting product and cutting energy costs significantly.",
      partners: [
        "Peyton's Distribution Center",
        "Genuine Parts Company",
        "Laser Components DG",
        "Isagenix International",
        "Central Freight Lines",
      ],
      solution:
        "High-performance ceramic solar film, safety film for OSHA compliance, UV protection for inventory",
    },
    {
      icon: ShoppingBag,
      title: "Retail, Hospitality & Food Service",
      body: "Arizona retail and hospitality businesses face a dual challenge: keeping customers comfortable in extreme heat while protecting merchandise and interiors from UV damage. Our solar control films reduce ambient temperature near windows, anti-glare films improve product visibility, and UV-blocking films protect inventory from fading. We minimize disruption with after-hours and weekend installation scheduling.",
      partners: [
        "Skechers USA",
        "PetSmart",
        "Love's Travel Stop",
        "Coca-Cola",
        "Heroes Pub and Grub",
        "Golden Thai Kitchen",
        "Super Chunk Sweets & Treats",
        "Best Dispensary",
        "A Bake Shop",
        "Yoga Six",
        "Glacier House Hotels",
        "Element Scottsdale at Skysong",
        "The Enclave at Gilbert Senior Living",
        "2nd Swing",
      ],
      solution:
        "Solar control film, anti-graffiti protection, decorative branding film, UV merchandise protection",
    },
    {
      icon: Home,
      title: "Property Management, HOA & Real Estate",
      body: "Arizona's property management sector requires consistent, professional window film solutions across multi-unit and commercial properties. We offer bulk project pricing, uniform film specification across all units, and coordination with building management to minimize tenant disruption. Our work for Camden Development, Menlo Group, and Associated Asset Management demonstrates our capability at scale.",
      partners: [
        "Camden Development",
        "Menlo Group Commercial Real Estate",
        "Associated Asset Management",
        "CRE Property Advisors",
        "North Scottsdale Dental",
        "Driggs Title Agency",
        "Parry Holdings",
        "Capital Accounting",
        "Sun Eagle Corporation",
      ],
      solution:
        "Bulk pricing for 10+ units, consistent ceramic film specification, SRP/APS energy rebates",
    },
  ];

  const specializedServices = [
    {
      title: "Custom Decorative & Branding Film",
      body: "We brand glass. From high-fidelity vinyl graphics to custom privacy frosting with logo cutouts, we transform plain glass into a marketing surface. Recent commercial branding projects: PetSmart glass graphic install, Yoga Six full privacy frosting, Super Chunk Sweets decorative entry film, Branded Group multi-location graphics rollout.",
      link: "/decorative-window-films",
      linkText: "View Decorative Film Services",
    },
    {
      title: "The Arizona Skylight Problem",
      body: "Skylights are heat magnets. In Phoenix and Scottsdale, unfilmed skylights can raise interior temperatures by 20°F+ during peak summer hours. We provide specialized skylight frosting and ceramic heat-blocking films that eliminate the midday heat spike without sacrificing natural light. Trusted by Menlo Group Commercial Real Estate and On Q Financial for skylight solutions.",
      link: "/energy-saving-window-films",
      linkText: "View Energy-Saving Film Solutions",
    },
    {
      title: "Anti-Graffiti & Public Works",
      body: "Protect storefront and public-facing glass from etching and spray paint with sacrificial anti-graffiti film. When vandalized, peel and replace the film — not the glass. Cost per incident drops from $800–$3,000 in glass replacement to under $200 in film replacement. Trusted by Valley Metro for transit infrastructure protection.",
      link: "/anti-graffiti",
      linkText: "View Anti-Graffiti Film",
    },
  ];

  const faqItems = [
    {
      q: "How long does commercial window film installation take?",
      a: "Most commercial projects are completed in 1–3 days depending on square footage. We work around your business hours to minimize disruption.",
    },
    {
      q: "Do commercial window films meet building codes in Arizona?",
      a: "Yes. We install films that comply with Arizona building codes and can provide documentation for permit applications when required.",
    },
    {
      q: "What's the ROI on commercial window film?",
      a: "Typical commercial installations pay back within 2–5 years through energy savings alone. Security film adds additional insurance value.",
    },
    {
      q: "Can window film be applied to any commercial glass?",
      a: "Most standard commercial glass accepts film. We assess your glass type during the free estimate to recommend the correct product and ensure warranty validity.",
    },
    {
      q: "Have you worked on projects similar to mine?",
      a: "With 713 completed commercial projects across Maricopa and Pima counties, the answer is almost certainly yes. From small storefronts to federal recruitment centers, university campuses, and large distribution facilities like Peyton's Distribution Center, we have documented experience across every commercial building type in Arizona.",
    },
    {
      q: "Are you licensed for high-liability commercial environments?",
      a: "Yes. Arizona House of Film holds Arizona Registrar of Contractors license ROC #314088, is fully bonded and insured, and meets procurement requirements for government and institutional projects. We have completed work for the State of Arizona, Glendale Fire Station 152, Grand Canyon University, and ASU — environments where licensing documentation is mandatory.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
        {/* Perf */}
        <link rel="preload" as="image" href={heroImageUrl} />
        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(commercialFaqSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Commercial Window Tinting', path: '/commercial-window-tinting' },
      ]} />

      <main id="main-content">
        {/* HERO */}
        <section className="relative min-h-[75vh] flex items-center pt-24 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Modern commercial property in Phoenix"
              className="w-full h-full object-cover opacity-40"
              src={heroImageUrl}
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="max-w-4xl">
              <span className="inline-block px-4 py-1 rounded-none bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-widest">
                Licensed • Bonded • ROC #{rocNumber}
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase leading-[0.85] tracking-tighter">
                Commercial Window Tinting Phoenix &amp; Scottsdale | Arizona House of Film
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Industrial-grade solar and <Link to="/safety" className="text-slate-200 underline">security</Link> solutions engineered for the Arizona climate. Protect your
                facility, reduce overhead, and enhance workplace productivity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl"
                >
                  <Link to="/contact">Request Project Quote</Link>
                </Button>
                <a
                  href="tel:480-788-1591"
                  className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all text-lg"
                >
                  480-788-1591
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* TRUSTED BY BAR */}
        <section className="py-10 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-6 text-center">
              Trusted by 713 Arizona Organizations
            </p>
            <div className="flex flex-wrap justify-center gap-y-3">
              {trustedNames.map((name, i) => (
                <React.Fragment key={name}>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide whitespace-nowrap px-3 py-1">
                    {name}
                  </span>
                  {i < trustedNames.length - 1 && (
                    <span className="text-slate-700 self-center select-none">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* AUTHORITY */}
        <section className="py-12 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium">
              Arizona House of Film is Phoenix's licensed commercial window film installer for offices, retail centers, medical facilities, schools, HOAs, and industrial properties. We've completed commercial installations across Maricopa and Pima Counties — from single-suite offices to multi-story buildings. Licensed ROC #314088. We source and install leading commercial window film brands including Madico, Solar Gard, LLumar, and 3M series — specified per project requirements.
            </p>
          </div>
        </section>

        {/* VALUE PROPOSITION */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 uppercase tracking-tight">
              The Bottom Line Investment
            </h2>
            <div className="w-24 h-2 bg-green-500 mx-auto mb-8" />
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              For Arizona businesses, window tinting is not an expense—it is a strategic asset with high ROI.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 rounded-none bg-slate-50 border-l-4 border-green-500 hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-green-600 transition-colors">
                  <benefit.icon className="w-8 h-8 text-green-600 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-black text-slate-950 mb-4 uppercase">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* INDUSTRY SOLUTIONS */}
        <section className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Commercial Window Film for Every Industry
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-400 text-lg font-medium max-w-3xl mx-auto">
                Arizona House of Film has completed 713 commercial projects across Maricopa and Pima counties since 2017. ROC #314088.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industrySolutions.map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="bg-slate-900 border border-slate-800 hover:border-green-500/50 p-8 transition-all group"
                >
                  <div className="flex items-start gap-5 mb-5">
                    <div className="w-12 h-12 bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-colors">
                      <card.icon className="w-6 h-6 text-green-500 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-black text-white uppercase leading-tight pt-1">{card.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 font-medium">{card.body}</p>
                  <div className="mb-5">
                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Key Partners</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{card.partners.join(" · ")}</p>
                  </div>
                  <div className="border-t border-slate-800 pt-4">
                    <p className="text-xs font-black text-green-500 uppercase tracking-wider mb-1">Solutions</p>
                    <p className="text-xs text-slate-400">{card.solution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SPECIALIZED SERVICES */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Specialized Commercial Film Services
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specializedServices.map((svc, idx) => (
                <div key={idx} className="bg-slate-50 border-l-4 border-green-500 p-8 flex flex-col">
                  <h3 className="text-xl font-black text-slate-950 uppercase mb-4">{svc.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium mb-6 flex-grow">{svc.body}</p>
                  <Link
                    to={svc.link}
                    className="text-green-600 font-black text-xs uppercase tracking-widest hover:text-green-700 transition-colors"
                  >
                    {svc.linkText} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENERGY SAVINGS DATA */}
        <section className="py-16 bg-green-600 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">Energy Savings for Arizona Businesses</h2>
            <p className="text-white/90 text-lg font-medium leading-relaxed max-w-4xl mb-10">
              Commercial buildings in Arizona can reduce cooling costs by 20–30% with solar control window film. For a 10,000 sq ft office building, that translates to $3,000–$8,000 in annual energy savings. SRP and APS offer commercial rebate programs for qualifying installations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { stat: "20–30%", label: "Cooling cost reduction" },
                { stat: "$3K–$8K", label: "Annual savings per 10,000 sq ft" },
                { stat: "2–5 yrs", label: "Typical ROI payback period" },
              ].map((item, i) => (
                <div key={i} className="text-center border border-white/20 p-8">
                  <p className="text-4xl font-black mb-2">{item.stat}</p>
                  <p className="text-white/80 font-bold uppercase text-xs tracking-widest">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI & BOTTOM LINE */}
        <section className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Why 713 Arizona Businesses Chose Arizona House of Film
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-400 text-lg font-medium">The numbers behind the decision</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[
                { stat: "713", label: "Commercial Projects Completed" },
                { stat: "ROC #314088", label: "Licensed & Bonded Since 2012" },
                { stat: "2–4 Year", label: "Average Payback on Solar Film" },
                { stat: "84%", label: "Maximum Solar Heat Rejection" },
              ].map((item, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 p-8 text-center">
                  <p className="text-3xl md:text-4xl font-black text-green-500 mb-2 leading-tight">{item.stat}</p>
                  <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-900 border border-slate-800 p-8">
                <h3 className="text-lg font-black text-white uppercase mb-4">Proven Payback</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  Installations for clients like Coca-Cola, Love's Travel Stop, and Peyton's Distribution Center typically pay for themselves in 2–4 years through documented energy savings. Arizona's 299 sunny days per year means your film works harder here than anywhere else in the country.
                </p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-8">
                <h3 className="text-lg font-black text-white uppercase mb-4">Utility Rebate Expertise</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  We help commercial clients navigate SRP and APS commercial rebate programs — often securing thousands in cash back for qualifying energy-efficient film upgrades. We handle the documentation and submit on your behalf.
                </p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-8">
                <h3 className="text-lg font-black text-white uppercase mb-4">Security as a Business Asset</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  Our 8-mil and 12-mil security films are an insurance-grade barrier against smash-and-grab crime — a documented deterrent for retail operations. Clients including Skechers USA and Best Dispensary have deployed our security film as part of their loss prevention strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24 bg-white text-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase italic tracking-tight text-slate-950">
              Project Workflow
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { t: "Analysis", d: "Comprehensive solar and security assessment of your building envelope." },
                { t: "Execution", d: "Project management and installation scheduled to avoid business disruption." },
                { t: "Longevity", d: "Industry-best warranties and long-term performance monitoring." },
              ].map((step, i) => (
                <div key={i} className="group">
                  <div className="text-7xl font-black text-slate-100 mb-6 group-hover:text-green-500/10 transition-colors">
                    0{i + 1}
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase text-green-600">{step.t}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-sm font-black text-slate-500 mb-10 uppercase tracking-[0.3em]">
              Commercial Service Areas
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/service-areas/${city.slug}`}
                  className="px-4 py-2 bg-white border border-slate-200 text-[10px] font-black text-slate-600 uppercase hover:border-green-500 hover:text-green-600 transition-all shadow-sm"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* COST TRANSPARENCY */}
        <section className="py-24 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Commercial Window Film Pricing — What Phoenix Projects Actually Cost
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-400 text-lg font-medium max-w-3xl mx-auto">
                Every commercial window film project is custom-quoted. There is no flat per-square-foot rate — a ground-floor retail storefront and a multi-story curtain wall building require different films, different equipment, and different scheduling. Pricing is determined after a site assessment. Below is a framework based on our 713 completed projects.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {[
                {
                  title: "Film Specification",
                  body: "Film type is the primary cost driver. Ceramic and spectrally selective films require precise application on specific glass types. Security film systems — particularly wet-glaze anchored multi-layer installs — require technical expertise beyond standard tint application. We do not specify entry-level films for commercial projects.",
                },
                {
                  title: "Building Access and Scheduling",
                  body: "Ground-floor glass completes in 1–2 days. Multi-story curtain wall and high-access projects require lift equipment, phased scheduling, and building management coordination. We execute night and weekend installs for occupied facilities, hospitals, schools, and active retail.",
                },
                {
                  title: "Glass Type and Compatibility",
                  body: "Single pane, dual pane, tempered, laminated, and coated glass each have different film compatibility requirements. Incorrect film on incompatible glass causes thermal stress failures and voids manufacturer warranties. We assess existing glass before specifying any film.",
                },
                {
                  title: "Project Scale",
                  body: "Multi-location national brand rollouts require documentation, brand-standard compliance, and coordinated scheduling across sites. We have executed multi-location projects for national retailers including Skechers USA and Genuine Parts Company across the Phoenix metro.",
                },
              ].map((card, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 p-8">
                  <h3 className="text-lg font-black text-green-500 uppercase mb-3">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">{card.body}</p>
                </div>
              ))}
            </div>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left text-xs font-black text-slate-400 uppercase tracking-widest py-3 pr-6">Project Type</th>
                    <th className="text-left text-xs font-black text-slate-400 uppercase tracking-widest py-3 pr-6">Typical Scope</th>
                    <th className="text-left text-xs font-black text-slate-400 uppercase tracking-widest py-3">Approach</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Retail Storefront", "500–2,500 sq ft", "Single mobilization, 1–2 days"],
                    ["Office Suite or TI", "1,000–6,000 sq ft", "1–3 days, phased if occupied"],
                    ["Multi-Story Office", "5,000–40,000 sq ft", "Phased, lift equipment required"],
                    ["Warehouse or Distribution", "10,000–80,000+ sq ft", "Multi-phase, coordinated with ops"],
                    ["Government or Institutional", "Variable", "Credentialed access, full documentation"],
                    ["Multi-Location National Brand", "Per-location", "Rollout coordination, brand standards"],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-800">
                      <td className="text-slate-300 font-semibold py-3 pr-6">{row[0]}</td>
                      <td className="text-slate-400 py-3 pr-6">{row[1]}</td>
                      <td className="text-slate-400 py-3">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              All projects quoted after free site assessment. Licensed ROC #314088. We provide NFRC documentation, energy rebate support for SRP and APS programs, and full project closeout packages for GC and institutional clients.
            </p>
          </div>
        </section>

        {/* VERIFIED PROJECTS */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Verified Project Scale — Selected Commercial Installations
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto">
                A sample of verified commercial projects from our invoice history. Scale and scope drawn from documented project records dating to 2017.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Skechers USA, Phoenix",
                  category: "National Retail Chain",
                  scope: "Multi-location solar and anti-graffiti film. Exterior ground-floor glass. Sacrificial anti-graffiti coating plus 8-mil security film. Multi-year phased deployment.",
                  film: "Solar + anti-graffiti + security",
                  value: "$68,000+",
                },
                {
                  name: "FCI Constructors Inc., Glendale",
                  category: "General Contractor — New Construction",
                  scope: "Solar film on commercial construction including Glendale Fire Station. Post-construction GC coordination. NFRC documentation for project closeout.",
                  film: "Solar control ceramic",
                  value: "$60,000+ across multiple projects",
                },
                {
                  name: "Renaissance Companies, Scottsdale",
                  category: "Commercial Construction — Repeat Client",
                  scope: "Security and decorative film across commercial TI projects. Eight separate project engagements spanning 2020–2025.",
                  film: "Security + decorative",
                  value: "$81,000+ across 8 projects",
                },
                {
                  name: "DNG Construction",
                  category: "General Contractor — Security Film Specialist",
                  scope: "Security film and glass services across multiple commercial construction projects. Single largest GC relationship by documented value.",
                  film: "Security + glass services",
                  value: "$80,000+",
                },
                {
                  name: "Glacier House Hotels + Element Scottsdale at Skysong + Camden Development",
                  category: "Hotel and Multifamily",
                  scope: "Solar and decorative film for hotel properties and apartment complexes. Glacier House Hotels single project: $15,000. Camden Development: 6+ mobilizations across multiple properties.",
                  film: "Solar + decorative",
                  value: "Hotel and multifamily residential",
                },
                {
                  name: "City of Buckeye + City of Mesa + Glendale Fire Station 152 + State of Arizona Dept of Corrections",
                  category: "Government and Municipal",
                  scope: "Solar and security film for city administration buildings, fire stations, and state correctional facilities. Credentialed access environments with full compliance documentation.",
                  film: "Solar + security",
                  value: "4 government entities",
                },
              ].map((project, idx) => (
                <div key={idx} className="bg-slate-50 border-l-4 border-green-500 p-8">
                  <p className="text-xs font-black text-green-600 uppercase tracking-widest mb-2">{project.category}</p>
                  <h3 className="text-base font-black text-slate-950 uppercase mb-3 leading-tight">{project.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{project.scope}</p>
                  <div className="border-t border-slate-200 pt-4 space-y-1">
                    <p className="text-xs text-slate-500"><span className="font-black text-slate-700 uppercase">Film:</span> {project.film}</p>
                    <p className="text-xs text-slate-500"><span className="font-black text-slate-700 uppercase">Documented value:</span> {project.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-950 uppercase tracking-tighter mb-12">Commercial Window Film FAQ</h2>
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

        {/* INTERNAL LINKS */}
        <section className="py-8 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              Also serving{" "}
              <Link to="/residential-window-tinting" className="text-blue-700 underline">residential clients</Link>.{" "}
              View our{" "}
              <Link to="/service-areas" className="text-blue-700 underline">Arizona service areas</Link>{" "}
              or explore{" "}
              <Link to="/safety" className="text-blue-700 underline">safety &amp; security films</Link>{" "}
              for your building.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <div className="bg-white">
          <ContactFormSection />
        </div>
      </main>
    </>
  );
};

export default Commercial;
