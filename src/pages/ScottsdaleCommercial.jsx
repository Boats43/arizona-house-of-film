import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building, Shield, Stethoscope, Sun, Home, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';
import EstimatorCTA from '../components/EstimatorCTA';

const ScottsdaleCommercial = () => {
  const rocNumber = '314088';
  const pageTitle = 'Commercial Window Film Scottsdale AZ | Licensed Contractor | ROC #314088';
  const metaDescription = 'Licensed commercial window film contractor serving Scottsdale AZ. Offices, retail, medical, hospitality. Ceramic, solar control, security and decorative film. In-stock films available same week. Free estimate — ROC #314088.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/commercial-window-tinting-scottsdale';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';
  const heroImageUrl =
    'https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/img_20240821_123937_469-jYOb9.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Window Tinting Scottsdale AZ',
    serviceType: 'Commercial Window Film Installation',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://arizonahouseoffilm.com',
      name: 'Arizona House of Film',
    },
    areaServed: { '@type': 'City', name: 'Scottsdale', addressRegion: 'AZ' },
    description: metaDescription,
    url: canonicalUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does commercial window film cost in Scottsdale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Commercial window film in Scottsdale is custom-quoted per project scope, depending on film type, building height, and glass condition. Small storefronts run $500–$2,000. Large office buildings run $5,000–$25,000+. Free on-site estimates — call (480) 788-1591.',
        },
      },
      {
        '@type': 'Question',
        name: 'What commercial window film brands do you install in Scottsdale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We install 3M, Huper Optik, Vista, Solar Gard, LLumar, Madico, and Eastman films on Scottsdale commercial properties. For Old Town storefronts we typically specify 3M Fasara decorative series. North Scottsdale office corridors use Huper Optik Ceramic or Vista IS-series dual-reflective solar film for heat rejection without exterior mirror appearance. Film selection depends on glass type, building orientation, and HOA or design standard requirements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you serve North Scottsdale office buildings?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We serve all Scottsdale commercial submarkets including North Scottsdale, Old Town, DC Ranch, Gainey Ranch, Kierland, Scottsdale Quarter, and the Scottsdale Airpark industrial corridor. Same-day estimates available for most locations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can window film meet Scottsdale HOA or design standard requirements?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We select films based on Visible Light Reflectance (VLR) and appearance specifications required by Scottsdale HOAs and property managers. We provide spec sheets and can coordinate approvals with property management before installation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does commercial window tinting cost in Scottsdale AZ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Scottsdale commercial window film projects typically range from $3,500 for a small retail storefront to $45,000+ for a full office building installation. Film type, glass square footage, and access complexity drive the final cost. We provide free on-site assessments and detailed written quotes for all Scottsdale commercial projects. Call (480) 788-1591.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does commercial window film installation take in Scottsdale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most Scottsdale commercial installations complete in 1–3 days depending on square footage and building access. We work around tenant schedules and business hours to minimize disruption. Large North Scottsdale office buildings are typically scheduled across multiple days with floor-by-floor sequencing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you install commercial window film in Old Town Scottsdale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We have completed multiple commercial installations in Old Town Scottsdale including the Chipotle location at 8099 E McDowell Rd and several mixed-use retail properties in the Old Town corridor. Old Town projects often require decorative or low-reflectivity solar film to comply with design standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'What commercial areas in Scottsdale do you serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Arizona House of Film installs commercial window film throughout Scottsdale including Old Town, Scottsdale Quarter, Kierland Commons, DC Ranch Village, McCormick Ranch, Gainey Ranch, Scottsdale Airpark, the North Scottsdale medical and professional corridor, and SkySong. Licensed ROC #314088.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you install commercial window film for Scottsdale restaurants and hospitality?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Arizona House of Film installs commercial window film for Scottsdale restaurants, hotels, and hospitality properties. Solar control film eliminates heat in dining rooms, decorative and privacy film creates aesthetic transitions, and anti-graffiti film protects storefront glass. Free commercial estimate — (480) 788-1591.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does commercial window film in Scottsdale qualify for SRP or APS rebates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Qualifying commercial window film installations in Scottsdale meet SRP Business Solutions and APS energy efficiency rebate requirements. Arizona House of Film provides NFRC-rated data sheets required for rebate applications. Customers submit directly to their utility provider.',
        },
      },
      {
        '@type': 'Question',
        name: 'What commercial window film is best for Scottsdale offices?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ceramic solar film is the standard specification for Scottsdale office buildings. Huper Optik Ceramic 40 and 3M Prestige 70 are the most common selections — both block 60-75% of solar heat, reject 99% UV, and meet Scottsdale HOA low-reflectivity requirements. For conference rooms and glass-walled offices, add 3M Fasara decorative or Casper cloaking film for privacy without blocking natural light.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between solar control and decorative commercial film?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Solar control film blocks heat and UV from the sun — designed for energy savings and occupant comfort. Decorative film obscures visibility through glass for privacy or branding without heat rejection. Most Scottsdale commercial projects combine both: solar control on perimeter glass for heat management and decorative film on interior glass partitions for conference room privacy.',
        },
      },
    ],
  };

  const projects = [
    {
      name: 'Chipotle, 8099 E McDowell Rd Scottsdale AZ',
      category: 'National QSR Chain — Scottsdale',
      scope:
        '3M Fasara Luna decorative film on commercial storefront glass. Custom sizing across sidelights, transoms, and entry doors. Installed through Gable Family Builders as GC. Old Town Scottsdale corridor.',
      film: '3M Fasara Luna decorative',
      valueLabel: 'Location',
      value: '8099 E McDowell Rd Scottsdale',
    },
    {
      name: 'Renaissance Companies, Scottsdale',
      category: 'Commercial Construction — Repeat Client',
      scope:
        'Security and decorative film across multiple commercial TI projects in Scottsdale and Phoenix metro. Eight project engagements spanning 2020–2025. Ongoing relationship.',
      film: 'Security + decorative',
      valueLabel: 'Documented value',
      value: '$81,000+ across 8 projects',
    },
    {
      name: '2nd Swing, Scottsdale',
      category: 'Specialty Retail — Scottsdale',
      scope:
        'Security film for specialty retail location. High-value golf equipment inventory protection. Smash-and-grab deterrence deployment.',
      film: 'Security film',
      valueLabel: 'Documented value',
      value: '$13,600+',
    },
    {
      name: 'Frank Lloyd Wright Foundation, Scottsdale',
      category: 'Cultural Institution — Taliesin West',
      scope:
        'Window film installation at Frank Lloyd Wright Foundation Scottsdale campus. Preservation-sensitive environment requiring film selection compatible with historic architectural glass.',
      film: 'Solar + decorative',
      valueLabel: 'Location',
      value: 'Scottsdale AZ',
    },
    {
      name: 'Element Scottsdale at Skysong + North Scottsdale Dental',
      category: 'Hotel and Professional Office — Scottsdale',
      scope:
        'Solar and privacy film for Scottsdale hotel property and dental office. Patient privacy film for clinical environments. Skysong Innovation District location.',
      film: 'Solar + privacy',
      valueLabel: 'Scale',
      value: 'Hotel and professional office',
    },
  ];

  const applications = [
    {
      icon: ShoppingBag,
      title: 'Old Town Mixed-Use Retail',
      body: 'Solar + decorative, storefront orientation, design standard compliance',
    },
    {
      icon: Building,
      title: 'North Scottsdale Office Corridor',
      body: 'Dual-reflective solar, east-west exposure, LEED documentation',
    },
    {
      icon: Stethoscope,
      title: 'Scottsdale Medical and Dental',
      body: 'Privacy film, HIPAA-sensitive environments, patient area frosting',
    },
    {
      icon: Sun,
      title: 'Scottsdale Hotels and Hospitality',
      body: 'Solar control, guest comfort, UV protection for furnishings',
    },
    {
      icon: Shield,
      title: 'Scottsdale Schools and Childcare',
      body: '8-mil and 12-mil security, delay-of-entry, emergency protocol compliance',
    },
    {
      icon: Home,
      title: 'HOA and Property Management',
      body: 'Consistent film spec across units, tenant coordination, bulk pricing',
    },
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
        { name: 'Commercial Window Tinting', path: '/commercial-window-tinting' },
        { name: 'Scottsdale', path: '/commercial-window-tinting-scottsdale' },
      ]} />

      <main id="main-content" className="bg-slate-950 min-h-screen">
        {/* HERO */}
        <section className="relative min-h-[75vh] flex items-center pt-24 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Commercial window tinting Scottsdale AZ"
              className="w-full h-full object-cover opacity-40"
              src={heroImageUrl}
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="max-w-4xl">
              <span className="inline-block px-4 py-1 bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-widest">
                Licensed • Bonded • ROC #{rocNumber}
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase leading-[0.85] tracking-tighter">
                Commercial Window Tinting Scottsdale AZ
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Verified commercial installations across Scottsdale — from Old Town storefronts to North Scottsdale
                office complexes. ROC #{rocNumber}.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl"
                >
                  <Link to="/contact">Get Project Quote</Link>
                </Button>
                <a
                  href="tel:480-788-1591"
                  className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all text-lg"
                >
                  (480) 788-1591
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1 — THE SCOTTSDALE CHALLENGE */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              The Scottsdale Commercial Window Film Challenge
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Scottsdale commercial buildings face a specific combination of east-west solar exposure, high-end tenant
              expectations, and HOA or design standards that require film selection beyond standard solar control. North
              Scottsdale office corridors, Old Town mixed-use, and Scottsdale Fashion Square area retail each present
              different glass orientations and film specification requirements. We have completed verified commercial
              installations across all Scottsdale submarkets.
            </p>
          </div>
          <div className="prose max-w-none mb-10 mt-8">
            <p className="text-lg text-slate-300 mb-4">
              Scottsdale's commercial corridor — from the Scottsdale Quarter and Kierland Commons to the Old Town district and the 101 commercial spine — represents some of the most demanding commercial glass in Arizona. Floor-to-ceiling storefronts, glass-walled conference rooms, south and west-facing office towers, and high-end hospitality properties all require film specifications that perform under sustained 115°F exposure without compromising the architectural aesthetic Scottsdale properties demand.
            </p>
            <p className="text-lg text-slate-300 mb-4">
              Arizona House of Film has completed commercial window film installations across Scottsdale since 2017 — from single-story retail to multi-story professional office buildings. Licensed ROC #314088. Every project custom-quoted, documented, and installed by certified technicians.
            </p>
          </div>
        </section>

        {/* SECTION 2 — VERIFIED PROJECTS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Verified Commercial Projects — Scottsdale AZ
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto">
                Verified sample of completed Scottsdale commercial window film projects drawn from invoice history.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-slate-50 border-l-4 border-green-500 p-8">
                  <p className="text-xs font-black text-green-600 uppercase tracking-widest mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-base font-black text-slate-950 uppercase mb-3 leading-tight">{project.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{project.scope}</p>
                  <div className="border-t border-slate-200 pt-4 space-y-1">
                    <p className="text-xs text-slate-500">
                      <span className="font-black text-slate-700 uppercase">Film:</span> {project.film}
                    </p>
                    <p className="text-xs text-slate-500">
                      <span className="font-black text-slate-700 uppercase">{project.valueLabel}:</span>{' '}
                      {project.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6">Scottsdale Commercial Window Film — Service Areas</h2>
            <p className="text-slate-700 mb-6">We install commercial window film throughout the Scottsdale commercial market including:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {[
                { area: 'Old Town Scottsdale', desc: 'Storefronts, galleries, restaurants' },
                { area: 'Scottsdale Quarter', desc: 'Retail, office, hospitality' },
                { area: 'Kierland Commons', desc: 'Retail and commercial properties' },
                { area: 'DC Ranch Village', desc: 'Professional office and medical' },
                { area: 'McCormick Ranch', desc: 'Office parks and commercial centers' },
                { area: 'Gainey Ranch', desc: 'Corporate and hospitality properties' },
                { area: 'Scottsdale Airpark', desc: 'Industrial, warehouse, office' },
                { area: 'North Scottsdale Corridor', desc: 'Medical, professional, retail' },
                { area: 'SkySong Innovation Center', desc: 'Tech campus and office buildings' },
              ].map(({ area, desc }) => (
                <div key={area} className="border border-slate-200 rounded-lg p-3">
                  <div className="font-bold text-slate-900 text-sm">{area}</div>
                  <div className="text-xs text-slate-500 mt-1">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY SCOTTSDALE BUSINESSES CHOOSE CERAMIC FILM */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Why Scottsdale Businesses Choose Ceramic Film
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-black text-green-400 uppercase mb-3">Scottsdale HOA Restrictions on Reflective Film</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  North Scottsdale office parks, DC Ranch, and Gainey Ranch commercial properties frequently restrict mirror-finish or high-reflectivity films. Ceramic solar film delivers 60-80% heat rejection with low visible light reflectance (VLR under 10%) — compliant with most Scottsdale design standards while maintaining architectural aesthetics.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-black text-green-400 uppercase mb-3">Glass-Heavy Modern Architecture</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Scottsdale commercial buildings — from Scottsdale Quarter retail to North Scottsdale medical offices — feature floor-to-ceiling glass, curtain walls, and atriums. Ceramic film is specified for compatibility with all glass types including dual-pane low-e units and thermally sensitive insulated glass.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-black text-green-400 uppercase mb-3">West-Facing Afternoon Exposure</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  West-facing Scottsdale office buildings receive sustained 3-6pm solar load during peak business hours. Ceramic film blocks infrared heat without darkening interiors — employees maintain outward views and natural daylight while avoiding afternoon glare and thermal discomfort.
                </p>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <h3 className="text-lg font-black text-green-400 uppercase mb-3">LEED Documentation Requirements</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Scottsdale commercial properties pursuing LEED certification require NFRC-rated window film data for energy modeling and credits. Arizona House of Film provides manufacturer spec sheets, thermal performance data, and post-installation documentation for LEED Energy & Atmosphere submittals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — APPLICATIONS */}
        <section className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Commercial Window Film for Every Scottsdale Property Type
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((app, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="bg-slate-900 border border-slate-800 hover:border-green-500/50 p-8 transition-all group"
                >
                  <div className="w-12 h-12 bg-slate-800 flex items-center justify-center mb-5 group-hover:bg-green-600 transition-colors">
                    <app.icon className="w-6 h-6 text-green-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-black text-white uppercase mb-3 leading-tight">{app.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">{app.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — SERVICE AREA */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Scottsdale Commercial Service Coverage
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              We serve all Scottsdale commercial submarkets — Old Town, South Scottsdale, Central Scottsdale, North
              Scottsdale, DC Ranch, Gainey Ranch, McCormick Ranch, Kierland, Scottsdale Quarter, and the Scottsdale
              Airpark industrial corridor. Same-day estimates available for most Scottsdale locations.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mt-6">
              Scottsdale commercial window film projects completed by Arizona House of Film range from $3,500 small retail installs to $45,000+ full building specifications. Common film specifications for Scottsdale commercial include 3M Prestige 70 and Huper Optik Ceramic 40 for solar control, 3M Safety Series S140 for security applications, and 3M Fasara decorative series for privacy and branding. All Scottsdale commercial projects include written specification, manufacturer warranty, and ROC #314088 documentation.
            </p>

            {/* ── RESIDENTIAL CROSS-LINK ─────────────────────────── */}
            <div className="cross-link-banner bg-slate-800 border border-slate-700 rounded-lg px-6 py-4 max-w-3xl mx-auto mt-6 text-center">
              <p className="text-gray-300 text-sm">
                Looking for <strong className="text-white">residential</strong> window film for your Scottsdale home?{" "}
                <Link to="/residential-window-tinting-scottsdale" className="text-green-400 hover:text-green-300 font-semibold">
                  View Scottsdale residential window tinting →
                </Link>
              </p>
            </div>
          </div>
        </section>

        <EstimatorCTA />

        {/* PRICING & SPECIFICATIONS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6">Scottsdale Commercial Window Film — Pricing & Specifications</h2>
            <p className="text-slate-700 mb-4">All Scottsdale commercial window film projects are custom-quoted based on glass area, film specification, and access requirements. These ranges reflect installed costs across completed Scottsdale-area commercial jobs:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="font-black text-xl mb-1">$3,500–$8,000</div>
                <div className="font-bold text-slate-800 mb-2">Small Commercial</div>
                <div className="text-sm text-slate-600">Single-story storefront or office suite. 200–600 sq ft glass. Solar control or decorative film.</div>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="font-black text-xl mb-1">$8,000–$25,000</div>
                <div className="font-bold text-slate-800 mb-2">Mid-Size Commercial</div>
                <div className="text-sm text-slate-600">Multi-suite office, retail anchor, restaurant. 600–2,000 sq ft glass perimeter.</div>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="font-black text-xl mb-1">$25,000+</div>
                <div className="font-bold text-slate-800 mb-2">Large Commercial</div>
                <div className="text-sm text-slate-600">Multi-story office, full building perimeter, hospitality properties. Custom specification required.</div>
              </div>
            </div>
            <p className="text-slate-600 text-sm">SRP Business Solutions and APS energy efficiency rebates available for qualifying Scottsdale commercial installations. We provide NFRC documentation. Customers submit directly to their utility provider.</p>
          </div>
        </section>

        {/* SECTION 5 — CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Scottsdale Commercial Window Film Quote
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment. Custom specification for your glass type and building orientation. Licensed ROC
              #{rocNumber}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl"
              >
                <Link to="/contact">Request Quote</Link>
              </Button>
              <a
                href="tel:480-788-1591"
                className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all text-lg"
              >
                (480) 788-1591
              </a>
            </div>
          </div>
        </section>

        {/* SCOTTSDALE CROSS-LINKS */}
        <section className="py-14 bg-slate-900 border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">More Scottsdale Window Film Services</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <Link to="/decorative-window-film-scottsdale" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Decorative Window Film Scottsdale →</Link>
              <Link to="/solar-window-film-scottsdale" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Solar Window Film Scottsdale →</Link>
              <Link to="/security-window-film-scottsdale" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Security Window Film Scottsdale →</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <Link to="/commercial-window-tinting" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Commercial Window Tinting Arizona →</Link>
              <Link to="/industries/office-buildings" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Office Building Window Film →</Link>
              <Link to="/window-film-cost-arizona" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Window Film Cost Arizona →</Link>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/energy-saving-window-films" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Energy-Saving Window Films →</Link>
              <Link to="/blog/commercial-window-tinting-cost-phoenix-2026" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Commercial Window Tinting Cost Guide →</Link>
            </div>
          </div>
        </section>

        <ContactFormSection />
      </main>
    </>
  );
};

export default ScottsdaleCommercial;
