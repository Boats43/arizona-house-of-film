import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { brands } from '@/data/brands';
import { ArrowRight, MapPin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BreadcrumbSchema from '../components/SEO/BreadcrumbSchema';
import EstimatorCTA from '../components/EstimatorCTA';

const canonicalUrl = "https://arizonahouseoffilm.com/brands";

const pageTitle = "Window Film Brands Phoenix AZ | 30+ Lines | ROC #314088";
const metaDescription = "Arizona House of Film installs 30+ window film brands — LLumar, XPEL, SunTek, Madico, 3M, Huper Optik, Solar Gard, Solyx and more. Licensed ROC #314088. Free estimates across Phoenix, Scottsdale, and the Valley.";

// ── Helper: look up a brand slug from brands.js by name fragment ──────────────
const findSlug = (nameFragment) => {
  const match = brands.find((b) =>
    b.name.toLowerCase().includes(nameFragment.toLowerCase())
  );
  return match ? match.slug : null;
};

// ── Category section definitions ─────────────────────────────────────────────
const categories = [
  {
    id: 'ceramic',
    heading: 'Ceramic & Spectrally Selective Films',
    body: 'Nano-ceramic and sputtered metallic films represent the highest tier of solar control technology. These manufacturers engineer films that block infrared heat at the molecular level — without the mirror appearance of older reflective films. In Arizona\'s extreme UV environment, spectrally selective technology is the only solution that delivers heat rejection without sacrificing clarity or signal interference.',
    arizonaNote: 'We specify ceramic films from this group for south and west-facing Phoenix and Scottsdale installations where surface temperatures exceed 160°F.',
    brandNames: [
      { display: '3M', slug: '3m' },
      { display: 'Hüper Optik', slug: 'huper-optik' },
      { display: 'V-KOOL', slug: 'vkool' },
      { display: 'Rayno', slug: 'rayno' },
      { display: 'Madico', slug: 'madico' },
      { display: 'EnerLogic', slug: 'enerlogic' },
      { display: 'Solar Gard (Saint-Gobain)', slug: 'solar-gard' },
      { display: 'LLumar', slug: 'llumar' },
    ],
  },
  {
    id: 'safety',
    heading: 'Safety, Security & Blast Mitigation Films',
    body: 'High-mil safety films are engineered for access denial, blast mitigation, and occupant protection. Film thickness, attachment system, and frame anchoring all determine real-world performance. These manufacturers produce films tested to GSA and DOD standards — the same specifications we apply for schools, government facilities, and high-value retail.',
    arizonaNote: 'We combine these films with wet-glaze anchoring (Dow 995) and C-Bond glass primer for maximum access denial performance — the system we deployed for U.S. Navy Recruitment Centers and Grand Canyon University.',
    brandNames: [
      { display: 'Armor Glass International', slug: 'armor-glass' },
      { display: 'Hanita (Avery Dennison)', slug: 'avery-dennison' },
      { display: 'Smart Glass Technologies', slug: 'smart-glass' },
      { display: 'Lintec', slug: 'lintec' },
      { display: 'XPEL', slug: 'xpel' },
      { display: 'Madico', slug: 'madico' },
    ],
  },
  {
    id: 'decorative',
    heading: 'Decorative, Privacy & Architectural Films',
    body: 'Decorative film technology has advanced beyond basic frosting. Modern architectural films replicate etched glass, sandblasted surfaces, printed patterns, and custom graphics at a fraction of specialty glass cost. These manufacturers supply the films we use for HIPAA-compliant medical privacy, conference room partitions, and branded storefront graphics across Arizona.',
    arizonaNote: 'Trusted for projects with PetSmart, Yoga Six, Wespac Construction, and Transact Commercial Interiors.',
    brandNames: [
      { display: 'Decorative Films LLC', slug: 'decorative-films-llc' },
      { display: 'Solyx', slug: 'solyx' },
      { display: 'Contra Vision', slug: 'contra-vision' },
      { display: 'Artscape', slug: 'artscape' },
      { display: 'BuyDecorativeFilm (BDF)', slug: 'bdf' },
      { display: '3M Fasara', slug: '3m' },
      { display: 'Flexfilm', slug: 'flexfilm' },
    ],
  },
  {
    id: 'commercial',
    heading: 'Commercial Solar Control & Energy Optimization',
    body: 'Large-footprint commercial installations require films with documented SHGC ratings, NFRC certification, and LEED-compatible performance data. These manufacturers provide the technical documentation required for COMcheck compliance, SRP/APS rebate applications, and green building certification submissions.',
    arizonaNote: 'We provide NFRC data sheets and performance specs across this entire category for GC and architect specifications — relevant for projects with Willmeng, FCI Constructors, and Renaissance Companies.',
    brandNames: [
      { display: 'Eastman', slug: 'eastman' },
      { display: 'Saint-Gobain / Solar Gard', slug: 'solar-gard' },
      { display: 'Garware Polyester', slug: 'garware' },
      { display: 'Global Window Films', slug: 'global' },
      { display: 'EnerLogic', slug: 'enerlogic' },
      { display: 'Rockrose', slug: 'rockrose' },
      { display: 'TERMINAX', slug: 'terminax' },
      { display: 'SunTek', slug: 'suntek' },
    ],
  },
];

// ── Schema ────────────────────────────────────────────────────────────────────
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Window Film Brands",
  "description": "List of professional-grade window film brands installed by Arizona House of Film.",
  "url": canonicalUrl,
  "numberOfItems": brands.length,
  "itemListElement": brands.map((brand, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Brand",
      "name": brand.name,
      "url": `https://arizonahouseoffilm.com/brands/${brand.slug}`,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://arizonahouseoffilm.com/" },
    { "@type": "ListItem", "position": 2, "name": "Brands", "item": canonicalUrl },
  ],
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "LocalBusiness",
    "@id": "https://arizonahouseoffilm.com",
    "name": "Arizona House of Film"
  },
  "author": { "@type": "Person", "name": "Verified Customer" },
  "reviewRating": { "@type": "Rating", "ratingValue": "4.6", "bestRating": "5" },
  "reviewBody": "Great selection of top-tier brands. They helped us choose the perfect film for our needs."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What window film brands does Arizona House of Film install?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Arizona House of Film installs 30+ window film brands including LLumar, XPEL, SunTek, Madico, 3M, Huper Optik, Solar Gard, Solyx, Flexfilm, EnerLogic, and more. We select film based on your project's SHGC requirements, glass type, and aesthetic preferences — not brand loyalty."
      }
    },
    {
      "@type": "Question",
      "name": "Does Arizona House of Film install 3M window film?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Arizona House of Film works with 3M window film products for residential and commercial installations across Phoenix and Scottsdale. Contact us to discuss your project requirements and film specifications."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between ceramic and reflective window film?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ceramic window film uses nano-ceramic particles to block infrared heat without a mirror appearance and without interfering with WiFi, cellular, or GPS signals. Reflective film uses sputtered metal to reflect solar energy — delivering higher heat rejection but with a mirror-like exterior appearance. Arizona House of Film installs both types and recommends based on your glass orientation, HOA requirements, and performance targets."
      }
    },
    {
      "@type": "Question",
      "name": "Which window film brands qualify for the SRP rebate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Any window film with an NFRC-rated SHGC of 0.45 or lower qualifies for the SRP residential rebate of $1 per square foot. Qualifying products are available across multiple brands we install including LLumar, XPEL, SunTek, Madico, and Solar Gard. Arizona House of Film provides all required NFRC documentation for rebate submissions."
      }
    },
    {
      "@type": "Question",
      "name": "Can Arizona House of Film source specialty or custom window film?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. With access to 30+ manufacturers including Contra Vision, Garware, Global Window Films, Rockrose, and specialty decorative suppliers, Arizona House of Film can source custom film specifications for non-standard applications, architect specifications, and custom projects."
      }
    },
    {
      "@type": "Question",
      "name": "How does Arizona House of Film select which brand to install?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We evaluate every project based on glass type, solar exposure, SHGC targets, structural requirements, HOA appearance standards, and budget. We are not locked into any single manufacturer relationship — our access to 30+ brands means we select the optimal film for each application."
      }
    }
  ]
};

// ── Component ─────────────────────────────────────────────────────────────────
const BrandsHub = () => (
  <div className="bg-white text-gray-900">
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(reviewSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <BreadcrumbSchema items={[
      { name: 'Home', url: 'https://arizonahouseoffilm.com/' },
      { name: 'Window Film Brands', url: 'https://arizonahouseoffilm.com/brands' },
    ]} />

    {/* ── HERO ────────────────────────────────────────────────────────────── */}
    <header className="relative py-24 sm:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center max-w-4xl">
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          30+ Window Film Brands — Phoenix &amp; Arizona
        </motion.h1>
        <motion.p
          className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 font-medium leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Arizona House of Film installs film from 30+ manufacturers. We evaluate every project independently — selecting film based on glass type, solar exposure, SHGC targets, and structural requirements. Not brand loyalty.
        </motion.p>
      </div>
    </header>

    {/* ── CATEGORY SECTIONS ────────────────────────────────────────────────── */}
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-6xl space-y-24">

      {categories.map((cat, catIdx) => (
        <section key={cat.id}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-gray-900 mb-4">
              {cat.heading}
            </h2>
            <div className="h-1 w-16 bg-blue-600 mb-6" />
            <p className="text-gray-700 font-medium leading-relaxed mb-4 max-w-3xl">
              {cat.body}
            </p>
            <div className="flex items-start gap-2 mb-8 bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 max-w-3xl">
              <MapPin className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-800 font-medium leading-relaxed">
                <span className="font-black uppercase text-xs tracking-widest mr-2">Arizona:</span>
                {cat.arizonaNote}
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cat.brandNames.map((b, i) => (
              <motion.div
                key={`${cat.id}-${b.slug}-${i}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                <Link
                  to={`/brands/${b.slug}`}
                  className="group block rounded-lg border border-gray-200 bg-gray-50 hover:border-blue-500 hover:bg-white hover:shadow-md transition-all duration-200 p-4 text-center h-full"
                >
                  <span className="text-sm font-bold text-gray-800 group-hover:text-blue-700 transition-colors leading-snug">
                    {b.display}
                  </span>
                  <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-blue-500 mx-auto mt-2 transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      ))}

      {/* ── EXPERT QUOTE BLOCK ────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-l-4 border-blue-600 bg-gray-950 text-white px-8 py-10 rounded-r-lg"
      >
        <blockquote className="text-lg sm:text-xl font-medium leading-relaxed text-gray-200 italic mb-4">
          "We do not work for manufacturers — we work for the glass. Our access to 30+ brands means we select the film that fits your NFRC requirements, your HOA appearance standards, and your climate exposure. Not just what is in stock."
        </blockquote>
        <p className="text-sm font-black uppercase tracking-widest text-blue-400">
          Arizona House of Film — Installation Team
        </p>
      </motion.section>

      {/* ── SPECIFIER SECTION ─────────────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gray-50 border border-gray-200 rounded-xl p-8 sm:p-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-6 h-6 text-blue-700 flex-shrink-0" />
          <h2 className="text-2xl font-black uppercase tracking-tighter text-gray-900">
            Custom Specifications &amp; Architect Support
          </h2>
        </div>
        <p className="text-gray-700 font-medium leading-relaxed mb-6 max-w-3xl">
          Most window film contractors are locked into 1–2 manufacturer relationships. Our access to 30+ certified brands means we evaluate each project on its technical requirements — SHGC targets, glass type, frame construction, and compliance needs — then select the optimal film.
        </p>
        <p className="text-sm font-black uppercase tracking-widest text-gray-500 mb-3">
          We provide GCs and architects with:
        </p>
        <ul className="space-y-2 mb-8 max-w-xl">
          {[
            'NFRC-rated data sheets for any film in our network',
            'COMcheck and LEED documentation support',
            'Multi-location specification consistency',
            'Custom film sourcing for non-standard applications',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700 font-medium text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0 mt-2" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-600 font-medium mb-8 text-sm">
          Contact us to discuss project specifications.
        </p>
        <Button asChild className="bg-blue-700 text-white hover:bg-blue-800 font-black uppercase tracking-wide rounded-none px-8 h-12">
          <Link to="/contact">
            Request Spec Sheet <ArrowRight className="inline-block ml-2 w-4 h-4" />
          </Link>
        </Button>
      </motion.section>

      {/* ── FEATURED BRAND PAGES ────────────────────────────────────────── */}
      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-black text-slate-900 mb-2">Featured Brand Pages</h2>
        <p className="text-slate-600 mb-6">We've built comprehensive product guides for our most-installed brands — covering every product line, NFRC specs, and SRP rebate eligibility.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { brand: 'LLumar', slug: 'llumar', desc: 'Dual Reflective, Spectrally Selective, Low-E, Exterior, PS4\u2013PS13 Security, and Decorative lines. Eastman / LLumar professional installer.', tag: 'Solar \u00B7 Security \u00B7 Decorative' },
            { brand: 'XPEL', slug: 'xpel', desc: 'VISION Clear View Ceramic, Alloy, and Clear View Plus solar. Security Clear, 8mil Silver, Neutral. White Frost, White Out, Black Out decorative.', tag: 'Solar \u00B7 Security \u00B7 Decorative' },
            { brand: 'Madico', slug: 'madico', desc: 'Nova, Optivision, Reflective Silver, Solar Bronze, Solar Grey series. Anti-graffiti 4M and 6M. UV Gard specialty film.', tag: 'Solar \u00B7 Anti-Graffiti \u00B7 Decorative' },
            { brand: 'SunTek', slug: 'suntek', desc: 'Ultra-Vision, Symphony, Infinity, Silver DS, Dual-Reflective \u2014 20+ SKUs with exact NFRC specs. 10 SRP-eligible films listed.', tag: 'Solar \u00B7 Specialty' },
            { brand: 'Flexfilm', slug: 'flexfilm', desc: 'Architectural decorative and specialty films. Pattern, frosted, gradient, and privacy applications.', tag: 'Decorative \u00B7 Privacy' },
          ].map((b, i) => (
            <Link key={i} to={`/brands/${b.slug}`} className="border border-slate-200 rounded-lg p-4 bg-white hover:border-green-500 hover:shadow-md transition-all group">
              <span className="text-xs font-black text-green-700 uppercase tracking-widest">{b.tag}</span>
              <h3 className="font-black text-slate-900 text-lg mt-1 mb-2 group-hover:text-green-700">{b.brand} Window Film &rarr;</h3>
              <p className="text-slate-600 text-sm">{b.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <EstimatorCTA />

      {/* ── EXISTING CTA ──────────────────────────────────────────────────── */}
      <section className="bg-gray-900 text-white p-8 sm:p-12 rounded-xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-4">
            Can't Find a Specific Brand?
          </h2>
          <p className="text-gray-300 font-medium mb-8 max-w-xl mx-auto">
            Our extensive network allows us to source films from nearly any manufacturer. Contact our team if you have a special request or custom project.
          </p>
          <Button asChild className="bg-blue-600 text-white hover:bg-blue-700 font-black uppercase tracking-wide rounded-none px-8 h-12">
            <Link to="/contact">
              Request a Film <ArrowRight className="inline-block ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ── INTERNAL LINKS ──────────────────────────────────────────────── */}
      <section className="mt-10 border-t border-slate-200 pt-6 pb-4">
        <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Explore By Service</p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link to="/residential-window-tinting" className="text-green-700 underline">Residential Window Film</Link>
          <Link to="/commercial-window-tinting" className="text-green-700 underline">Commercial Window Film</Link>
          <Link to="/security-window-film-phoenix" className="text-green-700 underline">Security Film</Link>
          <Link to="/decorative-window-films" className="text-green-700 underline">Decorative Films</Link>
          <Link to="/anti-graffiti-film-phoenix" className="text-green-700 underline">Anti-Graffiti Film</Link>
          <Link to="/window-film-energy-rebates-arizona" className="text-green-700 underline">SRP Rebate Calculator</Link>
          <Link to="/get-a-quote" className="text-green-700 underline">Get a Quote</Link>
        </div>
      </section>

    </main>
  </div>
);

export default BrandsHub;
