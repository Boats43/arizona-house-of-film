import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Shield, Eye, Thermometer, Home, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';
import EstimatorCTA from '../components/EstimatorCTA';

const ScottsdaleResidential = () => {
  const rocNumber = '314088';
  const pageTitle = 'Residential Window Film Scottsdale AZ | Installation | ROC #314088';
  const metaDescription =
    "Residential window film installation in Scottsdale AZ. Ceramic, dual reflective, privacy, and security film for North Scottsdale homes. HOA compliant. ROC #314088. Free estimates — (480) 788-1591.";
  const canonicalUrl = 'https://arizonahouseoffilm.com/residential-window-tinting-scottsdale';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';
  const heroImageUrl = '/images/gallery/20250619_100523.webp';

  /* ── SCHEMAS ─────────────────────────────────────────────────────── */
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Window Tinting Scottsdale AZ',
    serviceType: 'Residential Window Film Installation',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://arizonahouseoffilm.com',
      name: 'Arizona House of Film',
    },
    areaServed: { '@type': 'City', name: 'Scottsdale', addressRegion: 'AZ' },
    description: metaDescription,
    url: canonicalUrl,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Scottsdale Residential Window Film Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ceramic Solar Window Film — Scottsdale Residential' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Privacy & Frosted Window Film — Scottsdale' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Safety & Security Window Film — Scottsdale Homes' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'HOA-Compliant Window Film — Scottsdale' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Skylight Film — North Scottsdale' } },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does residential window tinting cost in Scottsdale AZ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Scottsdale residential window tinting typically runs $10–$18 per square foot installed, depending on film type and glass complexity. Ceramic films for high-end homes range $12–$18/sq ft. A standard Scottsdale home with 15–20 windows typically runs $1,400–$3,200 complete. All projects include a free on-site estimate. Licensed ROC #314088.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is window film HOA compliant in Scottsdale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — Arizona House of Film installs only HOA-compliant films. Scottsdale HOAs (DC Ranch, McCormick Ranch, Gainey Ranch, Troon, and others) typically restrict reflectivity to under 15–20%. We verify compliance before every installation and provide documentation on request.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will window film damage my low-E glass in Scottsdale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not if the correct film is specified. We evaluate your existing low-E coating before recommending a film. Applying the wrong film to low-E glass can cause thermal stress fractures. Arizona House of Film uses manufacturer compatibility specifications for every project — including dual-pane and triple-pane low-E glass common in North Scottsdale custom builds.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does window film last in the Scottsdale heat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Quality ceramic films carry lifetime residential warranties from 3M and Madico — the two brands we install. Scottsdale\'s UV index and heat are factored into those warranties. Properly installed film lasts 15–20+ years in Arizona\'s climate.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Arizona House of Film serve all Scottsdale zip codes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We serve the full Scottsdale market: 85251, 85254, 85255, 85257, 85258, 85259, 85260, 85262, 85266, 85268, and surrounding areas including Paradise Valley and Fountain Hills.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you install window film for skylights in Scottsdale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Skylight film is a specialty installation — we use heat-blocking ceramic and frosted films sized and cut for skylights and clerestory windows. Popular in North Scottsdale custom builds where unfilmed skylights create 10–15°F hot spots.',
        },
      },
      {
        '@type': 'Question',
        name: 'What residential window film do you recommend for Scottsdale homes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For Scottsdale homes we most commonly specify Huper Optik Ceramic 40 or 3M Prestige 70 for south and west-facing glass. Both reject 50-60% of solar heat without darkening interiors. For DC Ranch and McCormick Ranch HOA-sensitive applications, Vista IS-series neutral tone films are popular. We assess each home\'s glass orientation and HOA requirements before recommending a specific film.',
        },
      },
      {
        '@type': 'Question',
        name: 'What window film is best for North Scottsdale homes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nano-ceramic film is the top specification for North Scottsdale custom homes. It rejects up to 84% of solar heat without the reflective appearance that most Scottsdale HOAs restrict. Leading specifications include Huper Optik Ceramic, 3M Crystalline, and LLumar CTX. Film is selected based on your glass type, exposure, and HOA requirements. Free on-site assessment — call (480) 788-1591. Licensed ROC #314088.",
        },
      },
      {
        '@type': 'Question',
        name: 'Do you install residential window film in all Scottsdale neighborhoods?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Arizona House of Film installs residential window film throughout Scottsdale including North Scottsdale, Old Town, DC Ranch, Silverleaf, McCormick Ranch, Gainey Ranch, Troon, Pinnacle Peak, Grayhawk, Desert Mountain, and all surrounding communities. Licensed ROC #314088. Free estimates — call (480) 788-1591.',
        },
      },
    ],
  };

  /* ── DATA ────────────────────────────────────────────────────────── */
  const neighborhoods = [
    { name: 'DC Ranch',                        note: 'Custom estates, HOA-compliant ceramic film' },
    { name: 'McCormick Ranch',                  note: 'Golf-course homes, west-facing glass' },
    { name: 'Gainey Ranch',                     note: 'Luxury homes, privacy + solar film' },
    { name: 'North Scottsdale / Troon',         note: 'High-desert custom builds, skylight film' },
    { name: 'Silverleaf',                       note: 'Premium installs, preservation-sensitive' },
    { name: 'Old Town Scottsdale',              note: 'Mid-century renovation, decorative film' },
    { name: 'Kierland / Scottsdale Quarter',    note: 'Mixed-use residential, high-rise units' },
    { name: 'Arcadia (Scottsdale border)',      note: 'Ranch homes, east-facing solar control' },
    { name: 'Fountain Hills',                   note: 'View preservation, low-reflectivity ceramic' },
    { name: 'Paradise Valley',                  note: 'Estate installs, dual-pane low-E compatibility' },
    { name: 'South Scottsdale',                 note: 'Mid-range homes, heat rejection priority' },
    { name: 'Scottsdale Airpark area',          note: 'Residential corridors, standard solar film' },
  ];

  const filmCards = [
    {
      icon: Sun,
      title: 'Ceramic Solar Films',
      body: 'Highest heat rejection without the mirror look. Non-metallic, GPS/signal-friendly, lifetime warranty. Blocks 84% of solar heat and 99.9% UV. The correct choice for west-facing great rooms, south-facing bedrooms, and glass walls in North Scottsdale custom builds.',
      bullets: [
        'Extreme heat rejection — up to 84%',
        'Non-reflective appearance — HOA compliant',
        'No signal interference (GPS, WiFi, cell)',
        'Lifetime residential warranty — 3M & Madico',
        'Low-E glass compatible (with evaluation)',
      ],
      to: '/energy-saving-window-films',
      cta: 'View Ceramic Film Specs →',
    },
    {
      icon: Eye,
      title: 'Privacy & Decorative Films',
      body: 'Frosted and textured films for bathrooms, entryway sidelights, and street-facing windows. Daytime privacy with natural light — without blackout blinds. Popular in Scottsdale transitional and modern architectural styles.',
      bullets: [
        'Frosted, textured, and patterned options',
        'Daytime one-way privacy',
        'Soft diffused natural light',
        'Custom pattern capability',
        'No view loss on outward-facing glass',
      ],
      to: '/decorative-window-films',
      cta: 'View Privacy Film Options →',
    },
    {
      icon: Shield,
      title: 'Safety & Security Films',
      body: '8-mil and 12-mil safety film holds glass together on impact — break-in attempt, windstorm, or accident. Popular in Scottsdale homes with large glass panels and entry doors. Crystal clear — no visual change to the window.',
      bullets: [
        '8-mil minimum for residential safety',
        'Impact and intrusion deterrence',
        'Crystal clear — no tint or color shift',
        'UV blocking included',
        'Haboob and storm debris protection',
      ],
      to: '/safety',
      cta: 'View Safety Film Options →',
    },
  ];

  const filmTable = [
    { type: 'Ceramic 5%',        heat: '84%',      uv: '99.9%', vlt: 'Low',      best: 'South/west-facing rooms, max heat rejection',      price: '$12/sq ft' },
    { type: 'Ceramic 35%',       heat: '74%',      uv: '99.9%', vlt: 'Moderate', best: 'Living rooms, balanced light and heat control',      price: '$10/sq ft' },
    { type: 'Ceramic 50%',       heat: '60%',      uv: '99.9%', vlt: 'High',     best: 'North-facing rooms, view preservation',             price: '$9/sq ft'  },
    { type: 'Privacy / Frosted', heat: 'Moderate', uv: '99%',   vlt: 'Diffused', best: 'Bathrooms, sidelights, entry glass',                price: '$8/sq ft'  },
    { type: 'Safety 8-mil',      heat: 'Minimal',  uv: '99%',   vlt: 'Clear',    best: 'Entry doors, large glass panels, impact zones',     price: '$10/sq ft' },
  ];

  const whyCards = [
    { title: '713+ Completed Projects',  body: '$1.16M+ in documented installations since 2017 across Phoenix metro, including verified Scottsdale residential and commercial work.' },
    { title: 'Licensed ROC #314088',     body: 'Arizona Registrar of Contractors licensed and bonded. Full liability coverage. Not a subcontractor or reseller — we own every install.' },
    { title: '3M & Madico Only',         body: "We install only the top two performance brands. No off-brand, wholesale, or budget film — Scottsdale's climate demands the real thing." },
    { title: '84% Heat Rejection',       body: 'Our ceramic film blocks 84% of total solar heat and 99.9% of UV — without a mirror look, without signal interference, without compromise.' },
    { title: 'HOA-Ready',                body: 'Every Scottsdale install is pre-verified for HOA reflectivity compliance. We provide documentation to your HOA management company.' },
    { title: 'Lifetime Warranty',        body: "Manufacturer lifetime warranty on all residential ceramic films. Arizona's UV index and extreme heat are factored into that warranty." },
  ];

  const hoaBullets = [
    'Pre-installation HOA spec verification',
    'Exterior reflectance under 15% (most Scottsdale HOAs)',
    'Non-metallic ceramic films — no mirror appearance',
    'Documentation provided on request',
    'Licensed ROC #314088 — full liability coverage',
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
        { name: 'Residential Window Tinting', path: '/residential-window-tinting' },
        { name: 'Scottsdale', path: '/residential-window-tinting-scottsdale' },
      ]} />

      <main id="main-content" className="bg-slate-950 min-h-screen">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex items-center pt-24 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Residential window tinting Scottsdale AZ — luxury home solar film"
              className="w-full h-full object-cover opacity-40"
              src={heroImageUrl}
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="max-w-4xl">
              <span className="inline-block px-4 py-1 bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-widest">
                Licensed · Bonded · ROC #{rocNumber}
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase leading-[0.85] tracking-tighter">
                Residential Window Tinting Scottsdale AZ
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Premium home window film for North Scottsdale estates, golf-course communities, and custom builds —
                installed by Arizona's licensed window film authority since 2017.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl">
                  <Link to="/contact">Get Free Home Quote</Link>
                </Button>
                <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all text-lg">
                  (480) 788-1591
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── AUTHORITY INTRO ──────────────────────────────────────────── */}
        <section className="py-14 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Arizona House of Film has completed residential window film installations across every Scottsdale
              submarket — from South Scottsdale mid-century homes to $3M+ custom builds in DC Ranch, Troon, and
              Silverleaf. With 713+ completed projects and $1.16M+ in documented installations since 2017, we
              are the most verified window film contractor operating in the Scottsdale market. Licensed ROC #{rocNumber}.
              Ceramic films only — 3M and Madico, the two brands built for Arizona's climate.
            </p>
          </div>
        </section>

        {/* ── THE SCOTTSDALE CHALLENGE ─────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              The Scottsdale Residential Window Film Challenge
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-slate-700 text-base leading-relaxed font-medium">
              <p>
                Scottsdale homes face a specific set of solar and architectural conditions that require film
                selection beyond generic solar control. West-facing great rooms in North Scottsdale see direct
                afternoon sun at 110°F+ ambient. Custom builds with floor-to-ceiling glass walls, clerestory
                windows, and skylights create intense heat concentration zones inside the home. HOAs in DC Ranch,
                McCormick Ranch, Gainey Ranch, Troon, and Kierland enforce strict reflectivity limits — meaning
                the wrong film fails HOA review and must be removed at homeowner expense.
              </p>
              <p>
                Low-E glass — standard in Scottsdale's post-2010 custom builds — requires manufacturer-verified
                film compatibility to prevent thermal stress fractures. We evaluate glass type, orientation, and
                HOA requirements before every Scottsdale installation. No assumptions. No guesswork.
              </p>
            </div>
            <div className="mt-10 max-w-4xl">
              <p className="text-lg text-slate-700 mb-4">
                Scottsdale residential window film installation requires a different approach than standard Phoenix metro work. North Scottsdale custom homes — many built with floor-to-ceiling glass on south and west exposures — need film specifications that balance maximum heat rejection with the aesthetic requirements of high-end architecture. HOA color restrictions in communities like DC Ranch, Silverleaf, Gainey Ranch, and McCormick Ranch add another layer of specification complexity.
              </p>
              <p className="text-lg text-slate-700 mb-4">
                Arizona House of Film has completed residential window film installations across Scottsdale since 2017. Every project is assessed on-site. Film is specified for the glass type, the orientation, the HOA requirements, and the homeowner's performance goals. No defaults. No one-size-fits-all specifications.
              </p>
            </div>
          </div>
        </section>

        {/* ── NEIGHBORHOOD GRID ────────────────────────────────────────── */}
        <section className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Scottsdale Neighborhoods We Serve
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-400 text-lg font-medium max-w-3xl mx-auto">
                We serve the full Scottsdale residential market. Primary installation zones include:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {neighborhoods.map((n) => (
                <div key={n.name} className="bg-slate-900 border border-slate-800 hover:border-green-500/50 p-6 transition-all">
                  <p className="font-black text-white text-sm uppercase tracking-wide mb-1">{n.name}</p>
                  <p className="text-slate-400 text-sm">{n.note}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-sm text-center">
              Scottsdale zip codes served: 85251, 85254, 85255, 85257, 85258, 85259, 85260, 85262, 85266, 85268.{' '}
              Same-day estimates available for most Scottsdale locations.
            </p>
            <div className="cross-link-banner bg-slate-800 border border-slate-700 rounded-lg px-6 py-4 mt-4 text-center">
              <p className="text-gray-300 text-sm">
                Need commercial window film for a Scottsdale business?{" "}
                <Link to="/commercial-window-tinting-scottsdale" className="text-green-400 hover:text-green-300 font-semibold">
                  View Scottsdale commercial window tinting →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ── RESIDENTIAL PRICING GRID ────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              Residential Window Film Pricing — Scottsdale AZ
            </h2>
            <p className="text-slate-700 mb-6 text-base leading-relaxed font-medium max-w-4xl">
              All Scottsdale residential window film projects are custom-quoted after on-site assessment. These ranges reflect actual installed costs across completed Scottsdale residential jobs:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="border border-slate-200 rounded-lg p-6">
                <div className="font-black text-xl mb-1 text-green-700">$8–$12/sq ft</div>
                <div className="font-bold text-slate-800 mb-2">Solar Control Film</div>
                <div className="text-sm text-slate-600">Standard solar control for Scottsdale residential. Blocks 50–65% of heat. Clear to lightly tinted appearance. HOA compliant in most Scottsdale communities.</div>
              </div>
              <div className="border border-slate-200 rounded-lg p-6">
                <div className="font-black text-xl mb-1 text-green-700">$12–$18/sq ft</div>
                <div className="font-bold text-slate-800 mb-2">Nano-Ceramic Film</div>
                <div className="text-sm text-slate-600">Premium specification for North Scottsdale custom homes. Rejects up to 84% of heat with no reflective appearance. Huper Optik, 3M Crystalline, LLumar CTX.</div>
              </div>
              <div className="border border-slate-200 rounded-lg p-6">
                <div className="font-black text-xl mb-1 text-green-700">$15–$28/sq ft</div>
                <div className="font-bold text-slate-800 mb-2">Security + Solar Combo</div>
                <div className="text-sm text-slate-600">8–12 mil security film with solar control properties. Entry doors, ground-floor windows, and sidelight glass. Full installation in one visit.</div>
              </div>
            </div>
            <p className="text-slate-600 text-sm">
              SRP and APS residential energy rebates available for qualifying Scottsdale film installations. We provide NFRC documentation. Customers submit directly to their utility provider.
            </p>
          </div>
        </section>

        {/* ── FILM STACK (3 CARDS) ─────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                The Scottsdale Residential Film Stack
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto">
                We spec three film categories for Scottsdale homes. Every project is custom-quoted — no flat rates.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {filmCards.map((card) => (
                <div key={card.title} className="bg-slate-50 border border-slate-200 hover:border-green-500 p-8 transition-all group">
                  <div className="w-12 h-12 bg-slate-100 flex items-center justify-center mb-5 group-hover:bg-green-600 transition-colors">
                    <card.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-black text-slate-950 uppercase mb-3 leading-tight">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{card.body}</p>
                  <ul className="space-y-2 mb-6">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to={card.to} className="text-green-600 font-black text-xs uppercase tracking-widest hover:underline">
                    {card.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FILM COMPARISON TABLE ────────────────────────────────────── */}
        <section className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Which Film Is Right for Your Scottsdale Home?
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-400 text-lg font-medium max-w-3xl mx-auto">
                Scottsdale homes need different films depending on window orientation and primary concern.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-green-600 text-slate-950">
                    <th className="px-5 py-4 font-black text-xs uppercase tracking-widest">Film Type</th>
                    <th className="px-5 py-4 font-black text-xs uppercase tracking-widest">Heat Blocked</th>
                    <th className="px-5 py-4 font-black text-xs uppercase tracking-widest">UV Blocked</th>
                    <th className="px-5 py-4 font-black text-xs uppercase tracking-widest">Visible Light</th>
                    <th className="px-5 py-4 font-black text-xs uppercase tracking-widest">Best For</th>
                    <th className="px-5 py-4 font-black text-xs uppercase tracking-widest">Starting Price</th>
                  </tr>
                </thead>
                <tbody>
                  {filmTable.map((row, idx) => (
                    <tr key={row.type} className={idx % 2 === 0 ? 'bg-slate-900 border-b border-slate-800' : 'bg-slate-800 border-b border-slate-700'}>
                      <td className="px-5 py-4 font-black text-white text-sm">{row.type}</td>
                      <td className="px-5 py-4 text-green-400 font-bold text-sm">{row.heat}</td>
                      <td className="px-5 py-4 text-slate-300 text-sm">{row.uv}</td>
                      <td className="px-5 py-4 text-slate-300 text-sm">{row.vlt}</td>
                      <td className="px-5 py-4 text-slate-300 text-sm">{row.best}</td>
                      <td className="px-5 py-4 text-green-400 font-bold text-sm">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-sm text-center mt-6">
              All pricing is starting price. Scottsdale custom builds with specialty glass, dual-pane,
              or complex framing are custom-quoted. Free on-site estimate included.
            </p>
          </div>
        </section>

        {/* ── HOA COMPLIANCE ───────────────────────────────────────────── */}
        <section className="py-20 bg-slate-900 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
                  HOA-Compliant Window Film — Scottsdale
                </h2>
                <p className="text-slate-300 text-base leading-relaxed font-medium mb-5">
                  Scottsdale's most active HOAs — DC Ranch, McCormick Ranch, Gainey Ranch, Troon North,
                  Kierland, and Scottsdale Mountain — enforce reflectivity restrictions typically between
                  10–20% exterior reflectance. Installing a reflective or metallic film that exceeds the
                  limit results in a violation notice and removal at homeowner cost.
                </p>
                <p className="text-slate-300 text-base leading-relaxed font-medium">
                  Every Arizona House of Film Scottsdale residential installation is specified for HOA
                  compliance before the job is booked. We carry manufacturer spec sheets and can provide
                  documentation to your HOA management company on request. ROC #{rocNumber} licensure means
                  full accountability — not a handshake from a guy with a van.
                </p>
              </div>
              <div className="space-y-3">
                {hoaBullets.map((b) => (
                  <div key={b} className="flex items-start gap-3 bg-slate-800 border border-slate-700 px-6 py-4">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-slate-300 text-sm font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SKYLIGHT SECTION ─────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
                Skylight Film — North Scottsdale Custom Homes
              </h2>
              <p className="text-slate-700 text-base leading-relaxed font-medium mb-5">
                Unfilmed skylights act as magnifying glasses in the Scottsdale desert sun — raising the
                room temperature beneath them 10–15°F and creating a permanent UV fade zone on floors,
                furniture, and artwork below. North Scottsdale custom builds frequently include clerestory
                windows and skylights that are the primary source of midday heat concentration.
              </p>
              <p className="text-slate-700 text-base leading-relaxed font-medium mb-5">
                Arizona House of Film installs specialized skylight frosting and heat-blocking ceramic
                films that eliminate the midday heat spike without eliminating the light. Recent skylight
                installations include residential properties across North Scottsdale.
              </p>
              <p className="text-slate-700 text-base leading-relaxed font-medium mb-8">
                <strong>Result:</strong> Lower AC demand. Eliminated sun-spot fading. Consistent room
                temperature year-round.
              </p>
              <Button asChild variant="outline" className="border-2 border-slate-950 text-slate-950 hover:bg-slate-950 hover:text-white rounded-none font-black px-8 h-12 transition-all">
                <Link to="/contact">Get Skylight Quote →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── WHY AHOF GRID ────────────────────────────────────────────── */}
        <section className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Why Scottsdale Homeowners Choose Arizona House of Film
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyCards.map((card) => (
                <motion.div
                  key={card.title}
                  whileHover={{ y: -4 }}
                  className="bg-slate-900 border border-slate-800 hover:border-green-500/50 p-8 transition-all"
                >
                  <h3 className="text-base font-black text-green-400 uppercase mb-3 leading-tight">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">{card.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ENERGY ROI ───────────────────────────────────────────────── */}
        <section className="py-20 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Energy ROI — Scottsdale Residential
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Scottsdale homeowners running APS or SRP for cooling see some of the highest energy bills
              in the country during peak summer months. A properly specified ceramic film installation
              on the primary west and south-facing glass of a Scottsdale home typically reduces cooling
              load by 20–30%. On a home running $300–$500/month in summer cooling costs, that is
              $60–$150/month in savings — a typical payback period of 18–36 months depending on
              installation scope. SRP and APS both offer energy efficiency rebates. Ask about
              rebate eligibility during your free on-site estimate.
            </p>
          </div>
        </section>

        {/* ── PRICING ──────────────────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Residential Window Tinting Cost — Scottsdale AZ
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto">
                All projects are custom-quoted after a free on-site assessment. No flat per-sq-ft rates.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { film: 'Ceramic solar film',    range: '$12–$18 / sq ft' },
                { film: 'Solar control film',    range: '$10–$12 / sq ft' },
                { film: 'Privacy / frosted film', range: '$8–$12 / sq ft' },
                { film: 'Safety 8-mil film',     range: '$10–$14 / sq ft' },
              ].map((c) => (
                <div key={c.film} className="bg-slate-50 border-l-4 border-green-500 p-6">
                  <div className="text-xl font-black text-slate-950 mb-1">{c.range}</div>
                  <div className="text-green-600 font-black text-xs uppercase tracking-widest">{c.film}</div>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-sm text-center">
              A standard Scottsdale home with 15–20 windows typically runs $1,400–$3,200 complete.
              Custom builds with specialty glass, dual-pane low-E, or large-format windows are custom-quoted.
              Manufacturer warranty + ROC #{rocNumber} workmanship guarantee included.
            </p>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
        <section className="py-24 bg-slate-950">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-4">
                Scottsdale Residential Window Film FAQ
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto" />
            </div>
            <div className="space-y-8">
              {faqSchema.mainEntity.map((q) => (
                <div key={q.name} className="border-b border-slate-800 pb-8">
                  <h3 className="text-lg font-black text-white mb-3 uppercase">{q.name}</h3>
                  <p className="text-slate-400 leading-relaxed">{q.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center text-slate-500 text-sm">
              Also see:{' '}
              <Link to="/residential-window-tinting" className="text-green-500 hover:underline">Residential Window Tinting</Link>
              {' · '}
              <Link to="/commercial-window-tinting-scottsdale" className="text-green-500 hover:underline">Scottsdale Commercial</Link>
              {' · '}
              <Link to="/residential-window-tinting-phoenix" className="text-green-500 hover:underline">Phoenix Residential</Link>
            </div>
          </div>
        </section>

        {/* ── COVERAGE STATEMENT ───────────────────────────────────────── */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Scottsdale Residential Window Film Service Coverage
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              We serve all Scottsdale residential submarkets — Old Town, South Scottsdale, Central
              Scottsdale, North Scottsdale, DC Ranch, Gainey Ranch, McCormick Ranch, Kierland,
              Troon, Silverleaf, Scottsdale Quarter, Fountain Hills, and the Scottsdale/Paradise
              Valley border corridor. Same-day estimates available for most Scottsdale locations.
              Licensed, bonded, insured. ROC #{rocNumber}.
            </p>
          </div>
        </section>

        <EstimatorCTA />

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Scottsdale Residential Window Film Quote
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment. We evaluate your glass orientation, HOA compliance requirements,
              and film compatibility — then recommend the right spec. ROC #{rocNumber}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl">
                <Link to="/contact">Request Free Home Assessment</Link>
              </Button>
              <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all text-lg">
                (480) 788-1591
              </a>
            </div>
          </div>
        </section>

        {/* SCOTTSDALE CROSS-LINKS */}
        <section className="py-14 bg-slate-900 border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">More Scottsdale Window Film Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/commercial-window-tinting-scottsdale" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Commercial Window Film Scottsdale →</Link>
              <Link to="/decorative-window-film-scottsdale" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Decorative Window Film Scottsdale →</Link>
              <Link to="/solar-window-film-scottsdale" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Solar Window Film Scottsdale →</Link>
              <Link to="/security-window-film-scottsdale" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Security Window Film Scottsdale →</Link>
              <Link to="/residential-window-tinting" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Residential Window Film Phoenix →</Link>
              <Link to="/service-areas/scottsdale" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Window Tinting Scottsdale →</Link>
              <Link to="/window-film-cost-estimator" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Window Film Cost Estimator →</Link>
              <Link to="/get-a-quote" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Get a Film Quote →</Link>
            </div>
          </div>
        </section>

        <ContactFormSection />
      </main>
    </>
  );
};

export default ScottsdaleResidential;
