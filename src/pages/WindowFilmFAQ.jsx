import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import ContactFormSection from '@/components/contact/ContactFormSection';

const pageTitle = 'Window Film FAQ Phoenix AZ | Questions Answered | ROC #314088';
const metaDescription = "Answers to the most common window film questions in Arizona — cost, types, installation, brands, rebates. Licensed ROC #314088. Free estimates.";
const canonicalUrl = 'https://arizonahouseoffilm.com/window-film-faq';

const sections = [
  {
    id: 'cost',
    title: 'Cost & Pricing',
    faqs: [
      {
        q: 'How much does residential window tinting cost in Phoenix?',
        a: <>Residential window tinting in Phoenix typically ranges from <strong>$8-15 per square foot</strong> installed. Most homes average $800-$2,500 total depending on film type, window count, and access. Our minimum job is $500. Ceramic films cost more than standard solar films but last 15-20 years in Arizona's heat. We provide <Link to="/contact" className="text-blue-700 underline hover:text-blue-900">free on-site estimates</Link> for exact pricing.</>,
      },
      {
        q: 'How much does commercial window tinting cost?',
        a: <>Commercial window film in Phoenix ranges from <strong>$12-18 per square foot</strong> installed. Small storefronts run $750-$2,500. Large office buildings run $5,000-$25,000+. All commercial projects are custom-quoted after a free site assessment. See <Link to="/commercial-window-tinting" className="text-blue-700 underline hover:text-blue-900">commercial window tinting</Link> for details. ROC #314088.</>,
      },
      {
        q: 'What is the cost to install window film per square foot?',
        a: <>Window film installation costs <strong>$8-25 per square foot</strong> in Arizona depending on film type. Budget solar film starts at $8-10/sqft. Premium ceramic runs $13-18/sqft. Security film runs $15-25/sqft. Decorative and <Link to="/films/casper-cloaking" className="text-blue-700 underline hover:text-blue-900">Casper cloaking film</Link> runs $20-50/sqft. All quotes include professional installation by licensed technicians. See our full <Link to="/window-film-cost-arizona" className="text-blue-700 underline hover:text-blue-900">window film cost breakdown</Link>.</>,
      },
      {
        q: 'What is the minimum cost for window film installation?',
        a: <>Our minimum job size is <strong>$500</strong>, which covers approximately 50 square feet at base rates. This covers mobilization, setup, cutting, and professional installation. Small single-window jobs and French pane doors typically fall in the $500-$750 range.</>,
      },
      {
        q: 'How much does Casper cloaking film cost?',
        a: <><Link to="/films/casper-cloaking" className="text-blue-700 underline hover:text-blue-900">Casper cloaking film</Link> costs <strong>$30-50 per square foot</strong> installed in Arizona. It is a premium specialty film that makes LED screens invisible from outside while remaining transparent from inside. Most conference room installations run $1,500-$5,000 depending on glass area. It is an order-in product with 1-2 week lead time.</>,
      },
      {
        q: 'Does window film add value to a home?',
        a: <>Yes. Window film typically pays for itself within 2-4 years in Arizona through reduced cooling costs alone. Quality ceramic film lasts 15-20 years, provides 99.9% UV protection that prevents furniture and flooring fading, and adds security and privacy value. Most Arizona homeowners report immediate comfort improvement and lower utility bills within the first billing cycle. Learn more about <Link to="/residential-window-tinting" className="text-blue-700 underline hover:text-blue-900">residential window tinting</Link>.</>,
      },
    ],
  },
  {
    id: 'types',
    title: 'Film Types',
    faqs: [
      {
        q: 'What is the difference between ceramic and regular window film?',
        a: <>Ceramic films reject heat through infrared blocking rather than darkness, maintaining natural light while blocking up to 84% of solar heat. Standard dyed films fade over time and reduce heat primarily by darkening the glass. In Arizona's 115°F climate, ceramic film is the top choice because it blocks heat without interfering with GPS, cellular, or WiFi signals and does not create a mirror appearance. See our <Link to="/ceramic-vs-dual-reflective-film" className="text-blue-700 underline hover:text-blue-900">ceramic vs dual-reflective comparison</Link>.</>,
      },
      {
        q: 'What is dual-reflective window film?',
        a: <>Dual-reflective film has a mirror-like exterior appearance during daylight hours while allowing clear views from inside. It provides strong heat rejection (50-70%) and daytime privacy — neighbors see their reflection rather than into your space. At night when interior lights are on, the effect reverses. It is available in silver, bronze, and neutral finishes.</>,
      },
      {
        q: 'What is one-way mirror window film?',
        a: <><Link to="/one-way-mirror-window-film" className="text-blue-700 underline hover:text-blue-900">One-way mirror film</Link> creates a reflective exterior surface that prevents outside visibility during the day while allowing full outward views from inside. It works on light differential — the brighter side sees a reflection. At night with interior lights on, the effect reverses and inside becomes visible. Best for offices, storefronts, and homes facing streets or neighbors.</>,
      },
      {
        q: 'What is Casper cloaking film?',
        a: <><Link to="/films/casper-cloaking" className="text-blue-700 underline hover:text-blue-900">Casper cloaking film</Link> by Designtex makes LED screens completely invisible from outside a glass partition while the glass remains visually transparent. It is designed specifically for glass-walled conference rooms and boardrooms where screen content must remain private. It has no effect on views or natural light. Arizona House of Film is an authorized installer.</>,
      },
      {
        q: 'What is security window film?',
        a: <><Link to="/safety" className="text-blue-700 underline hover:text-blue-900">Security window film</Link> is a thick polyester film (4-21 mil) applied to glass to hold shattered pieces together on impact. It significantly slows forced entry, contains blast debris, and reduces injury from broken glass. Thicknesses range from 4 mil for basic safety to 21 mil for blast mitigation in government facilities. See our <Link to="/security-window-film-phoenix" className="text-blue-700 underline hover:text-blue-900">Phoenix security film</Link> page.</>,
      },
      {
        q: 'What is anti-graffiti window film?',
        a: <><Link to="/anti-graffiti" className="text-blue-700 underline hover:text-blue-900">Anti-graffiti film</Link> is a clear sacrificial surface layer applied over glass, mirrors, and polished metal. When a surface is tagged, scratched, or acid-etched, the damage occurs on the film not the glass. The film is peeled off and replaced at a fraction of glass replacement cost. Arizona House of Film has installed anti-graffiti programs for Valley Metro, City of Phoenix, and commercial properties across the metro.</>,
      },
      {
        q: 'What is decorative window film?',
        a: <><Link to="/decorative-window-films" className="text-blue-700 underline hover:text-blue-900">Decorative window film</Link> includes frosted, etched, gradient, stained glass, colored, and patterned films applied to glass for privacy and aesthetics. Arizona House of Film carries <Link to="/store" className="text-blue-700 underline hover:text-blue-900">618+ Solyx decorative film SKUs</Link> for residential and commercial applications. It provides privacy without blocking natural light and installs without permanent glass modification.</>,
      },
      {
        q: 'What is EnerLogic window film?',
        a: <><Link to="/brands/enerlogic" className="text-blue-700 underline hover:text-blue-900">EnerLogic</Link> is a low-emissivity window film that reduces heat transfer in both summer and winter. Unlike standard solar films that only block summer heat, EnerLogic also improves insulation by reducing winter heat loss. It is one of the few window films that improves year-round energy efficiency. Available as an order-in product with 1-2 week lead time.</>,
      },
    ],
  },
  {
    id: 'installation',
    title: 'Installation',
    faqs: [
      {
        q: 'How long does window film last in Arizona?',
        a: <>Quality ceramic films last <strong>15-25 years</strong> in Arizona conditions. Standard solar films last 10-15 years. Decorative films last 8-15 years depending on sun exposure. Arizona's extreme UV environment accelerates degradation of lower-grade films. Arizona House of Film installs only manufacturer-certified films backed by written warranties. Read more: <Link to="/how-long-does-window-film-last" className="text-blue-700 underline hover:text-blue-900">How long does window film last?</Link></>,
      },
      {
        q: 'Is window film safe for dual-pane windows?',
        a: <>Yes, when the right film is selected. Arizona House of Film assesses your specific glass type before recommending a film to ensure no risk of thermal stress cracking. Certain high-absorption films can cause thermal stress on dual-pane glass if not properly matched to the glass specifications. We carry Arizona-engineered ceramic and spectrally selective films rated safe for dual-pane installations.</>,
      },
      {
        q: 'How long does window film installation take?',
        a: <>Most residential installations complete in <strong>3-6 hours</strong>. A standard home with 10-15 windows typically takes one day. Large commercial projects take 1-5 days depending on square footage and access requirements. We schedule around business hours for commercial installs to minimize disruption.</>,
      },
      {
        q: 'Can window film be removed?',
        a: <>Yes. Window film can be professionally removed without damaging the glass in most cases. Removal involves softening the adhesive with heat and carefully peeling the film. Older films that have deteriorated may leave adhesive residue requiring additional cleaning. Removal is priced separately at $3-5 per square foot.</>,
      },
      {
        q: 'Is window film safe for HOA-restricted properties?',
        a: <>Many Arizona HOAs restrict reflective or dark exterior appearances. Non-reflective ceramic films and lightly tinted films are typically HOA-compliant because they maintain a neutral or clear appearance from outside. We work with homeowners to select films that meet both performance needs and HOA requirements.</>,
      },
    ],
  },
  {
    id: 'rebates',
    title: 'Rebates & Energy',
    faqs: [
      {
        q: 'What is the SRP window film rebate?',
        a: <>SRP Business Solutions offers <strong>$1 per square foot</strong> on qualifying solar film installations for commercial properties. Film must meet SHGC ≤ 0.45 and be NFRC-rated. Arizona House of Film provides the required NFRC technical data sheets for rebate applications. The current deadline is April 30, 2026. Learn more on our <Link to="/window-film-energy-rebates-arizona" className="text-blue-700 underline hover:text-blue-900">energy rebates page</Link>.</>,
      },
      {
        q: 'Does window film qualify for APS rebates?',
        a: <>APS offers energy efficiency credits for qualifying window film installations. Arizona House of Film honors $1 per square foot APS credit on invoice for qualifying commercial projects. Film must meet energy efficiency thresholds. We provide NFRC-rated documentation required for APS rebate applications.</>,
      },
      {
        q: 'Does window film qualify for the federal tax credit?',
        a: <>Qualifying energy-efficient window film may be eligible for the <strong>federal 30% energy efficiency tax credit</strong> up to $600 for residential installations. The film must meet IRS energy efficiency requirements. Consult your tax advisor to confirm eligibility for your specific installation.</>,
      },
      {
        q: 'What NFRC rating is needed for SRP rebates?',
        a: <>SRP requires a Solar Heat Gain Coefficient (SHGC) of <strong>0.45 or lower</strong> for rebate eligibility. Most quality solar control films meet this threshold. Arizona House of Film provides the NFRC-certified technical data sheets required for your rebate application submission directly to SRP.</>,
      },
    ],
  },
  {
    id: 'brands',
    title: 'Brands',
    faqs: [
      {
        q: 'What window film brands do you install?',
        a: <>Arizona House of Film installs <Link to="/brands/llumar" className="text-blue-700 underline hover:text-blue-900">LLumar</Link>, <Link to="/brands/madico" className="text-blue-700 underline hover:text-blue-900">Madico</Link>, <Link to="/brands/suntek" className="text-blue-700 underline hover:text-blue-900">SunTek</Link>, <Link to="/brands/xpel" className="text-blue-700 underline hover:text-blue-900">XPEL</Link>, <Link to="/brands/huper-optik" className="text-blue-700 underline hover:text-blue-900">Hüper Optik</Link>, <Link to="/brands/solar-gard" className="text-blue-700 underline hover:text-blue-900">Solar Gard</Link>, Solyx, <Link to="/brands/flexfilm" className="text-blue-700 underline hover:text-blue-900">Flexfilm</Link>, <Link to="/brands/enerlogic" className="text-blue-700 underline hover:text-blue-900">EnerLogic</Link>, and Casper by Designtex. Madico, SunTek, and MaxPro are in-stock for same-week installation. Other brands are order-in with 1-2 week lead time. Browse all <Link to="/brands" className="text-blue-700 underline hover:text-blue-900">brand partners</Link>.</>,
      },
      {
        q: 'What is Hüper Optik window film?',
        a: <><Link to="/brands/huper-optik" className="text-blue-700 underline hover:text-blue-900">Hüper Optik</Link> is a German-engineered multi-layer nano-ceramic window film. It contains no metal, causing no signal interference with GPS, cellular, or WiFi. The Ceramic series ranges from 20% to 73% VLT with 99% UV rejection across all products. Arizona House of Film became an authorized Hüper Optik dealer in April 2026.</>,
      },
      {
        q: 'What is LLumar window film?',
        a: <><Link to="/brands/llumar" className="text-blue-700 underline hover:text-blue-900">LLumar</Link> is one of the leading architectural window film brands, manufactured by Eastman Chemical. Arizona House of Film installs LLumar's full product line including the CTX ceramic series, ATC nano-ceramic, and safety film lines. LLumar films carry manufacturer warranties and NFRC certifications for rebate applications.</>,
      },
      {
        q: 'What is SunTek window film?',
        a: <><Link to="/brands/suntek" className="text-blue-700 underline hover:text-blue-900">SunTek</Link> is a premium window film brand known for its CXP ceramic series and carbon films. Arizona House of Film carries SunTek in stock for same-week residential and commercial installations. SunTek films are NFRC-certified and SRP/APS rebate eligible.</>,
      },
    ],
  },
  {
    id: 'locations',
    title: 'Locations',
    faqs: [
      {
        q: 'Do you install window film in Scottsdale?',
        a: <>Yes. Arizona House of Film is one of Scottsdale's most active commercial and residential window film installers. We have completed projects for major Scottsdale commercial properties, luxury residential homes, and medical facilities. See <Link to="/commercial-window-tinting-scottsdale" className="text-blue-700 underline hover:text-blue-900">Scottsdale commercial window tinting</Link> and <Link to="/residential-window-tinting-scottsdale" className="text-blue-700 underline hover:text-blue-900">Scottsdale residential window tinting</Link>. Licensed ROC #314088.</>,
      },
      {
        q: 'Do you serve Queen Creek and Gilbert?',
        a: <>Yes. Arizona House of Film regularly installs window film in <Link to="/window-tinting-queen-creek" className="text-blue-700 underline hover:text-blue-900">Queen Creek</Link>, <Link to="/window-tinting-gilbert" className="text-blue-700 underline hover:text-blue-900">Gilbert</Link>, and the entire East Valley. We have completed hundreds of residential and commercial projects in both cities. Same-week installation available with in-stock film options.</>,
      },
      {
        q: 'What cities do you service in Arizona?',
        a: <>Arizona House of Film serves <Link to="/window-tinting-phoenix" className="text-blue-700 underline hover:text-blue-900">Phoenix</Link>, <Link to="/service-areas/scottsdale" className="text-blue-700 underline hover:text-blue-900">Scottsdale</Link>, <Link to="/window-tinting-mesa" className="text-blue-700 underline hover:text-blue-900">Mesa</Link>, <Link to="/window-tinting-chandler" className="text-blue-700 underline hover:text-blue-900">Chandler</Link>, <Link to="/window-tinting-gilbert" className="text-blue-700 underline hover:text-blue-900">Gilbert</Link>, <Link to="/window-tinting-peoria" className="text-blue-700 underline hover:text-blue-900">Peoria</Link>, <Link to="/window-tinting-glendale" className="text-blue-700 underline hover:text-blue-900">Glendale</Link>, <Link to="/window-tinting-tempe" className="text-blue-700 underline hover:text-blue-900">Tempe</Link>, <Link to="/window-tinting-queen-creek" className="text-blue-700 underline hover:text-blue-900">Queen Creek</Link>, Fountain Hills, Avondale, Tolleson, and <Link to="/service-areas" className="text-blue-700 underline hover:text-blue-900">all of Arizona</Link>. We have completed projects statewide including government and commercial work in Flagstaff, Tucson, and rural Arizona communities.</>,
      },
    ],
  },
  {
    id: 'comparisons',
    title: 'Comparisons',
    faqs: [
      {
        q: 'Is security window film better than tempered glass?',
        a: <>Security film and tempered glass serve different purposes. Tempered glass shatters into small pieces on impact but does not hold together. Security film holds shattered glass in place, preventing penetration and containment of debris. For existing windows, security film is significantly more cost-effective at $15-25 per square foot versus full glass replacement. Many government and school installations use both. Read our full <Link to="/security-film-vs-tempered-glass" className="text-blue-700 underline hover:text-blue-900">security film vs tempered glass comparison</Link>.</>,
      },
      {
        q: 'What is the difference between solar screens and window film?',
        a: <>Solar screens are exterior mesh screens that block sunlight before it reaches the glass. Window film is applied directly to the glass interior surface. Film provides UV protection, glare reduction, and security benefits that screens do not. Film is invisible from inside and does not affect views. Screens require exterior hardware and maintenance. Film is the preferred solution for commercial applications and sealed windows.</>,
      },
      {
        q: 'What is the difference between window tint and window film?',
        a: <>Window tint and window film refer to the same product in residential and commercial contexts. The terms are used interchangeably. Both describe a thin polyester laminate applied to glass for solar control, privacy, security, or decorative purposes. Arizona House of Film installs both <Link to="/residential-window-tinting" className="text-blue-700 underline hover:text-blue-900">residential window tinting</Link> and <Link to="/commercial-window-tinting" className="text-blue-700 underline hover:text-blue-900">commercial window film</Link>.</>,
      },
    ],
  },
  {
    id: 'ai-estimator',
    title: 'AI Estimator',
    faqs: [
      {
        q: 'How does the AI window film estimator work?',
        a: <>Arizona House of Film's <Link to="/ai-window-film-estimator" className="text-blue-700 underline hover:text-blue-900">AI estimator</Link> analyzes photos of your windows to identify window types, estimate square footage, and recommend the right film for your situation. Upload photos through the chat widget on any page, type "estimate" after uploading, and receive an itemized ballpark with in-stock and premium pricing options. No sales visit required for the initial estimate.</>,
      },
      {
        q: 'How accurate is an AI window film estimate?',
        a: <>AI estimates are typically accurate within <strong>10-20%</strong> of final installed pricing. The estimate accounts for window type, approximate square footage, film category, and applicable surcharges such as French pane windows. Exact pricing requires a free on-site assessment where we measure precisely, assess glass condition, and confirm film specifications.</>,
      },
    ],
  },
];

const allFaqs = sections.flatMap(s => s.faqs);

function faqText(node) {
  if (typeof node === 'string') return node;
  if (!node?.props) return '';
  const { children } = node.props;
  if (!children) return '';
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(faqText).join('');
  return faqText(children);
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: faqText(f.a) },
  })),
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Window Film Installation FAQ',
  description: metaDescription,
  provider: {
    '@type': 'LocalBusiness',
    name: 'Arizona House of Film',
    telephone: '+1-480-788-1591',
    address: { '@type': 'PostalAddress', streetAddress: '7007 W Flower St', addressLocality: 'Phoenix', addressRegion: 'AZ', postalCode: '85033' },
  },
  areaServed: { '@type': 'State', name: 'Arizona' },
};

function EstimatorBanner() {
  return (
    <div className="bg-slate-900 rounded-xl p-6 my-10 text-center">
      <p className="text-gray-300 text-sm mb-4">
        Want an instant cost estimate? Use our free cost estimator or upload photos for AI analysis.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          to="/window-film-cost-estimator"
          className="inline-block bg-green-500 hover:bg-green-400 text-white font-black uppercase tracking-wide px-6 py-3 rounded-lg text-sm transition-colors"
        >
          Cost Estimator →
        </Link>
        <Link
          to="/ai-window-film-estimator"
          className="inline-block border border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-black uppercase tracking-wide px-6 py-3 rounded-lg text-sm transition-colors"
        >
          AI Photo Estimator →
        </Link>
      </div>
    </div>
  );
}

export default function WindowFilmFAQ() {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://arizonahouseoffilm.com/' },
          { name: 'Window Film FAQ', url: canonicalUrl },
        ]}
      />

      {/* HERO */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Window Film Questions — Answered by Arizona's Licensed Installer
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
            {allFaqs.length} answers to the most common window film questions in Phoenix and Arizona. Cost, types, installation, brands, rebates — from a licensed contractor (ROC #314088).
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-xs font-bold text-gray-300 uppercase hover:border-green-500 hover:text-green-400 transition-colors">
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTIONS */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {sections.map((section, si) => (
          <React.Fragment key={section.id}>
            <section id={section.id} className="scroll-mt-24">
              <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 border-b-2 border-green-500 pb-2">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.faqs.map((faq, fi) => (
                  <details key={fi} className="group border border-slate-200 rounded-lg">
                    <summary className="cursor-pointer px-6 py-4 font-bold text-slate-900 flex items-center justify-between">
                      {faq.q}
                      <span className="text-green-500 group-open:rotate-45 transition-transform text-xl flex-shrink-0 ml-4">+</span>
                    </summary>
                    <div className="px-6 pb-5 text-gray-700 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>
            <EstimatorBanner />
          </React.Fragment>
        ))}
      </div>

      {/* TRUST */}
      <section className="py-12 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-3xl font-black mb-2">713+</p>
          <p className="text-gray-400 mb-4">Projects Completed Since 2017</p>
          <p className="text-gray-500 text-sm">Licensed ROC #314088 | Bonded & Insured | U.S. Navy Veteran Owned</p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link to="/contact" className="bg-green-500 hover:bg-green-400 text-white font-black uppercase px-8 py-3 rounded-lg text-sm transition-colors">Get Free Estimate</Link>
            <Link to="/ai-window-film-estimator" className="border border-white text-white hover:bg-white hover:text-slate-900 font-black uppercase px-8 py-3 rounded-lg text-sm transition-colors">Try AI Estimator</Link>
          </div>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}
