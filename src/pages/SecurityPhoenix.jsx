import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle2, AlertTriangle, Building2, Home, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';
import EstimatorCTA from '../components/EstimatorCTA';

const rocNumber = 'ROC #314088';
const pageTitle = 'Security Window Film Phoenix AZ | 4–21 Mil | ROC #314088';
const metaDescription = 'Licensed security window film installers in Phoenix AZ. 4-21 mil thickness, blast mitigation, forced entry protection. Trusted by U.S. Navy. Free estimate.';
const canonicalUrl = 'https://arizonahouseoffilm.com/security-window-film-phoenix';
const heroImageUrl = '/images/Security Window Film Phoenix AZ.webp';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does security window film cost in Phoenix?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Security window film in Phoenix typically ranges from $8–$18 per square foot installed, depending on film thickness (4–14 mil), glass size, and access difficulty. Commercial projects with large spans or high-floor access cost more. We provide custom quotes after a site assessment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does security film make glass shatterproof?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Security film does not make glass unbreakable, but it holds shattered glass fragments together on impact — significantly slowing forced entry and reducing injury risk from glass shards. Thicker films (12–14 mil) provide the highest resistance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between safety film and security film?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Safety film (4–8 mil) is designed to hold glass together after breakage, reducing injury risk. Security film (8–14 mil) adds forced-entry resistance — it slows an intruder significantly beyond just holding glass. For burglary deterrence, 8 mil minimum is recommended.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can security film be applied to existing windows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Security film is a retrofit solution applied directly to existing glass — no window replacement required. Installation is complete in hours with no structural changes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you install security film for businesses in Phoenix?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We install commercial security film across Phoenix, Scottsdale, Tempe, Mesa, Chandler, and the greater metro area. Past commercial clients include government facilities, retail locations, and corporate campuses.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does security window film installation take in Phoenix?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Phoenix residential security film installations complete in 4–8 hours. Commercial security film installation in Phoenix typically takes 1–3 days depending on square footage and building access. We schedule around business hours to minimize disruption. Same-week scheduling available for most Phoenix metro locations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What security window film brands do you install in Phoenix?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We install LLumar ArmorCoat, Madico SafetyShield, SunTek Safety & Security, and XPEL Vision Security series on Phoenix properties. For forced entry deterrence industry-standard specifications include 12–14 mil film with mechanical attachment system. For blast mitigation on Phoenix government and commercial buildings top specifications include LLumar ArmorCoat and Madico SafetyShield series. All films are installed by ROC #314088 licensed technicians.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you install security film for commercial buildings in Phoenix?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Arizona House of Film installs security window film for Phoenix commercial buildings including retail stores, office buildings, schools, government facilities, medical offices, and warehouses. Commercial security film installation in Phoenix is quoted on a per-project basis. We have completed security film installations for national retailers, Phoenix municipal facilities, and private commercial developers. Call (480) 788-1591 for a free commercial assessment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What security film brands do you install?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Arizona House of Film installs security and safety film from LLumar ArmorCoat (Eastman), Madico SafetyShield, SunTek Safety & Security, XPEL Vision Security, Vista Safety Film, Solar Gard Armorzone, and EWF Safety & Security series. Film specification is determined per project based on glass type, application, and performance requirements — not brand preference. Licensed ROC #314088.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you install blast-rated security film in Phoenix?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Arizona House of Film installs blast-mitigation grade window film including 21 mil specifications from LLumar, Madico, and SunTek for government, municipal, and institutional facilities in Phoenix and across Arizona. Blast-rated installations require mechanical attachment systems and NFRC-rated documentation — we provide both. Past projects include City of Phoenix and U.S. Navy facilities. For Arizona government facility specifications, see our blast mitigation film guide for government buildings. Licensed ROC #314088.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is security window film better than tempered glass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Security film and tempered glass serve different purposes. Tempered glass shatters into small pieces on impact but doesn\'t hold together — security film holds shattered glass in place, preventing penetration and injury. For existing windows, security film is significantly more cost-effective at $12-25/sq ft installed versus full tempered glass replacement. Many government and school installations use both — tempered glass with security film overlay for maximum protection. Arizona House of Film installs 4-21 mil security film on both standard and tempered glass.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can security film be combined with solar control or privacy film?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dual-performance films combine safety or security grade thickness with solar heat rejection and UV blocking. This is one of the most common specifications in Arizona — the heat load requires solar control, and the security requirement is addressed simultaneously. We specify dual-performance films from LLumar, Madico, SunTek, and XPEL for residential and commercial applications. Licensed ROC #314088.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Security Window Film Installation Phoenix',
  provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://arizonahouseoffilm.com',
    name: 'Arizona House of Film',
  },
  areaServed: { '@type': 'City', name: 'Phoenix', addressRegion: 'AZ' },
  description: metaDescription,
  serviceType: 'Security Window Film',
};

const benefits = [
  {
    icon: Shield,
    title: 'Forced-Entry Resistance',
    description: 'Thick security film holds glass intact under repeated impact — dramatically slowing smash-and-grab entry attempts and burglaries.',
  },
  {
    icon: AlertTriangle,
    title: 'Shatter Containment',
    description: 'On impact, fragments bond to the film rather than spraying inward. Critical for earthquake zones, storm events, and accident liability.',
  },
  {
    icon: Lock,
    title: 'Blast Mitigation',
    description: 'Government-spec films tested to GSA/ANSI standards reduce flying glass debris in explosion events — used in federal and municipal facilities.',
  },
  {
    icon: CheckCircle2,
    title: 'UV + Heat Rejection',
    description: 'Most security films block 99% of UV and provide measurable solar heat rejection — functional security with thermal performance.',
  },
];

const milGuide = [
  {
    mil: '4–6 mil',
    label: 'Safety Grade',
    color: 'border-yellow-500',
    use: 'Residential interior glass, shower enclosures, retail display cases. Holds fragments, reduces injury risk.',
  },
  {
    mil: '8 mil',
    label: 'Security Grade',
    color: 'border-orange-500',
    use: 'Residential entry points, storefronts, office perimeter. Standard forced-entry deterrent. Most common install.',
  },
  {
    mil: '12–14 mil',
    label: 'High-Security Grade',
    color: 'border-red-600',
    use: 'Government, schools, banks, jewelry, dispensaries. Maximum forced-entry resistance. Blast-rated options available.',
  },
  {
    mil: '21 mil',
    label: 'Blast Mitigation Grade',
    color: 'border-purple-600',
    use: 'Government, federal, and high-security institutional. Tested to GSA/ANSI blast standards. Specified for courthouses, military facilities, and critical infrastructure. Custom quoted per project.',
  },
];

const applications = [
  { name: 'Storefronts', slug: '/commercial-window-tinting' },
  { name: 'Government Buildings', slug: '/industries/government-buildings' },
  { name: 'Schools & Universities', slug: '/commercial-window-tinting' },
  { name: 'Residential Entry Glass', slug: '/residential-window-tinting' },
  { name: 'Retail & Dispensaries', slug: '/commercial-window-tinting' },
  { name: 'Banks & Financial', slug: '/commercial-window-tinting' },
  { name: 'Medical Facilities', slug: '/commercial-window-tinting' },
  { name: 'Auto Dealerships', slug: '/commercial-window-tinting' },
];

const proofPoints = [
  {
    stat: '700+',
    label: 'Projects completed',
    detail: 'Since 2017 across residential and commercial.',
  },
  {
    stat: '$1M+',
    label: 'Gross revenue',
    detail: 'Proven scale — not a startup operation.',
  },
  {
    stat: '8+ years',
    label: 'Phoenix metro experience',
    detail: 'We know Arizona glass, heat, and code.',
  },
  {
    stat: 'Named',
    label: 'Verified clients',
    detail: '2nd Swing Scottsdale, Renaissance Companies, City of Phoenix facilities, national retail.',
  },
];

const brandSpecs = [
  {
    brand: 'SunTek Safety & Security',
    films: 'SunTek Safety 4 mil, 8 mil, 14 mil',
    bestFor: 'Residential entry points, retail storefronts, commercial facilities',
    note: 'Eastman-manufactured safety and security line — strong optical clarity with high-performance adhesive system.',
  },
  {
    brand: 'LLumar ArmorCoat',
    films: 'SC40, SC70, SC140 series',
    bestFor: 'Commercial storefronts, schools, medical facilities',
    note: "ArmorCoat is Eastman's professional security film line — specified for forced-entry deterrence and UV rejection simultaneously.",
  },
  {
    brand: 'Madico Safety Series',
    films: 'SafetyShield 4 mil, 8 mil, 12 mil',
    bestFor: 'Residential and light commercial applications',
    note: 'Strong adhesive system — good performance on older single-pane glass common in Phoenix residential stock.',
  },
  {
    brand: 'Vista Safety Film',
    films: 'VS4, VS8, VS12',
    bestFor: 'Residential and commercial across Phoenix metro',
    note: 'Safety and security performance with neutral appearance — frequently specified for HOA-sensitive properties.',
  },
  {
    brand: 'Solar Gard Safety Series',
    films: 'Armorzone 4, 8, 14 mil',
    bestFor: 'Commercial and institutional',
    note: 'Saint-Gobain manufactured — strong thermal + safety combination.',
  },
  {
    brand: 'EWF Safety & Security',
    films: 'EWF safety line 4–21 mil',
    bestFor: 'Commercial and custom specifications',
    note: 'Custom cut available — ideal for non-standard glass dimensions.',
  },
];

const buildingTypes = [
  {
    type: 'Residential',
    threats: 'burglary, storm damage, accidents',
    spec: '8 mil on entry doors, sidelights, and ground-floor windows. Solar-control + safety combo films available for dual performance. HOA color restrictions accommodated. See our shatter-resistant film for patio doors guide for sliding door security.',
    link: '/residential-window-tinting',
    linkText: 'Residential Window Film →',
  },
  {
    type: 'Retail & Storefronts',
    threats: 'smash-and-grab, vandalism, forced entry',
    spec: '8–12 mil on storefront glass. Anti-graffiti sacrificial overlay available for glass-adjacent surfaces. After-hours installation standard.',
    link: '/commercial-window-tinting',
    linkText: 'Commercial Window Film →',
  },
  {
    type: 'Schools & Universities',
    threats: 'forced entry, blast events, vandalism',
    spec: '12–14 mil with mechanical attachment. Documentation for district compliance provided. We have installed security film at Grand Canyon University and U.S. Navy facilities.',
    link: '/window-film-for-schools-arizona',
    linkText: 'Window Film for Schools →',
  },
  {
    type: 'Medical Facilities',
    threats: 'patient privacy, forced entry, HIPAA considerations',
    spec: '8–12 mil security with privacy overlay options. We have completed installations at Banner Health facilities.',
    link: '/window-film-for-medical-facilities-arizona',
    linkText: 'Window Film for Medical Facilities →',
  },
  {
    type: 'Government & Municipal',
    threats: 'blast, forced entry, ballistic',
    spec: '14–21 mil blast-rated with GSA-compliant attachment system. NFRC documentation provided. Security clearance coordination available. Past clients include City of Phoenix and U.S. Navy Recruitment Centers.',
    link: '/safety/government-facilities',
    linkText: 'Government Security Film →',
  },
  {
    type: 'Restaurants & Hospitality',
    threats: 'smash-and-grab, vandalism, UV damage to interior',
    spec: '8 mil security + solar control combo. Minimal aesthetic impact — film appearance approved for premium environments including Renaissance Hotels.',
    link: '/window-film-for-restaurants-arizona',
    linkText: 'Window Film for Restaurants →',
  },
];

const relatedLinks = [
  { text: 'Shatterproof Window Film — what the term means and when to use it', href: '/shatterproof-window-film' },
  { text: 'Security Film vs Tempered Glass — full comparison', href: '/security-film-vs-tempered-glass' },
  { text: 'Window Film for Schools Arizona', href: '/window-film-for-schools-arizona' },
  { text: 'Window Film for Medical Facilities Arizona', href: '/window-film-for-medical-facilities-arizona' },
  { text: 'Government Security Film Phoenix', href: '/safety/government-facilities' },
  { text: 'Commercial Window Tinting Phoenix', href: '/commercial-window-tinting' },
  { text: 'Anti-Graffiti Film Phoenix', href: '/anti-graffiti-film-phoenix' },
  { text: 'Window Film Cost Estimator', href: '/window-film-cost-estimator' },
];

export default function SecurityPhoenix() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={heroImageUrl} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Safety & Security Window Film', path: '/safety' },
        { name: 'Security Window Film Phoenix', path: '/security-window-film-phoenix' },
      ]} />

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-950 opacity-80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImageUrl})`, aspectRatio: '1600/1066' }}
        />
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Licensed Security Film Installer · {rocNumber}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Security Window Film<br />
              <span className="text-red-400">Phoenix, AZ</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              4 mil to 21 mil safety and security film for residential, commercial, government, and institutional glass. We install every major security film specification on the market — specified for your glass, your threat level, and your budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-10 h-14 font-black rounded-none transition-all">
                <Link to="/contact">Get a Free Security Assessment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-950 px-10 h-14 font-black rounded-none transition-all">
                <Link to="/safety">View Safety Film Options</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AUTHORITY OPENER */}
      <section className="bg-slate-900 py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-slate-300 leading-relaxed">
            Most Phoenix windows offer zero resistance to forced entry. A standard single-pane or dual-pane window fails in under 10 seconds. Security window film doesn't replace glass — it converts it into a forced-entry barrier, buying critical time and containing hazardous shards. Arizona House of Film has installed security film in government facilities, retail locations, schools, and residences across Phoenix since 2017.
          </p>
        </div>
      </section>

      {/* BENEFITS — What Security Film Does */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            What Security Film Does
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Arizona House of Film installs safety and security window film across every thickness available — 4 mil, 8 mil, 12 mil, 14 mil, and 21 mil — from every leading manufacturer including LLumar, Madico, SunTek, XPEL, Solar Gard, Vista, and EWF. Every project is specified to the glass type, the threat level, and the application. We don't default to one brand or one thickness — we specify what the job actually requires.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  whileHover={{ y: -4 }}
                  className="flex gap-5 p-6 rounded-xl border border-slate-200 hover:border-red-400 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <Icon className="w-8 h-8 text-red-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{b.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="bg-slate-950 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Verified Track Record
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {proofPoints.map((p) => (
              <div key={p.stat} className="border border-blue-500 rounded-xl p-8 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{p.stat}</div>
                <div className="text-white font-semibold mb-1">{p.label}</div>
                <div className="text-slate-400 text-sm">{p.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MIL THICKNESS GUIDE */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Film Thickness Guide
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Not all security film is equal. Thickness (mil) determines resistance level. We recommend the right spec for your threat model and budget.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milGuide.map((m) => (
              <div key={m.mil} className={`border-t-4 ${m.color} bg-slate-800 rounded-xl p-8`}>
                <div className="text-2xl font-bold text-white mb-1">{m.mil}</div>
                <div className="text-sm font-semibold text-slate-300 uppercase tracking-widest mb-4">{m.label}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{m.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Where We Install Security Film
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {applications.map((a) => (
              <Link
                key={a.name}
                to={a.slug}
                className="border border-slate-200 rounded-lg p-4 text-center text-sm font-medium text-slate-700 hover:border-red-400 hover:text-red-600 transition-colors"
              >
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY FILM SPECIFICATIONS WE INSTALL */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Security Film Specifications We Install
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Arizona House of Film installs security and safety film from all leading manufacturers. Film is selected based on your glass type, building use, threat environment, and budget — not brand preference or margin.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandSpecs.map((b) => (
              <div key={b.brand} className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-3">{b.brand}</h3>
                <div className="mb-3">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Films:</span>
                  <p className="text-slate-300 text-sm mt-1">{b.films}</p>
                </div>
                <div className="mb-3">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Best for:</span>
                  <p className="text-slate-300 text-sm mt-1">{b.bestFor}</p>
                </div>
                <p className="text-slate-500 text-sm italic">{b.note}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm text-center mt-10 max-w-3xl mx-auto">
            Film specification is determined after on-site assessment. We do not default to one manufacturer. The right film for your glass and your threat environment is what gets installed. Licensed {rocNumber}.
          </p>
        </div>
      </section>

      {/* COST TRANSPARENCY */}
      <section className="bg-slate-950 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Security Film Pricing in Phoenix
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            All projects are custom-quoted. These ranges reflect real installed costs across our Phoenix-area jobs.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { label: 'Residential Entry Points', range: '$400 – $900', note: 'Typical front door sidelites + 2–3 windows, 8 mil' },
              { label: 'Small Commercial Storefront', range: '$800 – $2,400', note: '200–400 sq ft glass, 8 mil security grade' },
              { label: 'Large Commercial / Government', range: '$3,000 – $12,000+', note: 'Full perimeter, 12–14 mil, multi-entry' },
            ].map((c) => (
              <div key={c.label} className="bg-slate-900 rounded-xl p-8 border border-slate-700">
                <div className="text-xl font-bold text-white mb-1">{c.range}</div>
                <div className="text-red-400 font-semibold text-sm mb-3">{c.label}</div>
                <div className="text-slate-400 text-sm">{c.note}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm">
            Prices vary by film spec, glass condition, access difficulty, and square footage. Contact us for a free on-site quote.
          </p>
        </div>
      </section>

      {/* SECURITY FILM BY BUILDING TYPE */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Security Film by Building Type
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Every building type has different glass configurations, different threat profiles, and different code requirements. Here's how we approach each:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildingTypes.map((bt) => (
              <div key={bt.type} className="border border-slate-200 rounded-xl p-6 hover:border-red-400 transition-colors">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{bt.type}</h3>
                <p className="text-sm text-slate-500 mb-3"><strong>Primary threats:</strong> {bt.threats}</p>
                <p className="text-sm text-slate-600 mb-4"><strong>Standard spec:</strong> {bt.spec}</p>
                <Link to={bt.link} className="text-red-600 font-semibold text-sm hover:underline">{bt.linkText}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Security Film FAQs
          </h2>
          <div className="space-y-8">
            {faqSchema.mainEntity.map((q) => (
              <div key={q.name} className="border-b border-slate-200 pb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{q.name}</h3>
                <p className="text-slate-600 leading-relaxed">{q.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center text-slate-500 text-sm">
            Also see:{' '}
            <Link to="/blog/blast-mitigation-film-government-buildings-arizona" className="text-red-600 hover:underline">Blast Mitigation Film for Government Buildings</Link>
            {' · '}
            <Link to="/safety" className="text-red-600 hover:underline">Safety Window Film</Link>
            {' · '}
            <Link to="/privacy-film-sliding-glass-door" className="text-red-600 hover:underline">Security Film for Patio Doors</Link>
            {' · '}
            <Link to="/hurricane-window-film-arizona" className="text-red-600 hover:underline">Hurricane Window Film Arizona</Link>
            {' · '}
            <Link to="/commercial-window-tinting" className="text-red-600 hover:underline">Commercial Window Tinting</Link>
            {' · '}
            <Link to="/residential-window-tinting" className="text-red-600 hover:underline">Residential Window Film</Link>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-slate-900 py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Serving Phoenix and the Greater Metro Area
          </h2>
          <p className="text-slate-400">
            We install security window film across Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, Surprise, and surrounding communities. Licensed, bonded, and insured. {rocNumber}.
          </p>
        </div>
      </section>

      <EstimatorCTA />

      {/* RELATED RESOURCES */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Related Resources
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedLinks.map((rl) => (
              <Link
                key={rl.href}
                to={rl.href}
                className="border border-slate-200 rounded-lg p-4 text-sm font-medium text-slate-700 hover:border-red-400 hover:text-red-600 transition-colors"
              >
                → {rl.text}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Harden Your Glass?
          </h2>
          <p className="text-slate-400 mb-8">
            Free on-site security assessment. We'll identify your highest-risk glass and recommend the right film specification for your property. Licensed {rocNumber}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-10 h-14 font-black rounded-none transition-all">
              <Link to="/contact">Get a Free Security Assessment</Link>
            </Button>
            <a
              href="tel:480-788-1591"
              className="flex items-center justify-center gap-3 px-8 h-14 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all"
            >
              (480) 788-1591
            </a>
          </div>
        </div>
      </section>

      <ContactFormSection />
    </div>
  );
}
