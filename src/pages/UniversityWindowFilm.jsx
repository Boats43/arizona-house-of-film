import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building, Shield, Stethoscope, Sun, Home, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';
import EstimatorCTA from '../components/EstimatorCTA';

const UniversityWindowFilm = () => {
  const rocNumber = '314088';
  const pageTitle = 'University & Campus Window Film Arizona | Safety & Solar | ROC #314088';
  const metaDescription = 'Professional university window film installation — security film, solar control, anti-glare for classrooms & ANSI Z97.1 compliance. Arizona campuses. ROC #314088.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/university-window-film';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';
  const heroImageUrl = '/images/gallery/20250619_100523.webp';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'University & Campus Window Film Arizona',
    serviceType: 'University Window Film Installation',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://arizonahouseoffilm.com',
      name: 'Arizona House of Film',
    },
    areaServed: { '@type': 'State', name: 'Arizona' },
    description: metaDescription,
    url: canonicalUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does university window film cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'University window film projects typically range from $5,000 for a single classroom building to $50,000+ for multi-building campus-wide programs. Cost depends on film specification (solar vs. security), total glass square footage, building access requirements, and phasing schedule. Arizona House of Film provides free on-site campus assessments with detailed written quotes. Call (480) 788-1591.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can window film be installed during summer break without disrupting fall semester?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We specialize in break-period scheduling for university campuses. Most single-building installations complete in 3-5 business days. Multi-building phased rollouts are planned around the academic calendar — summer break, winter break, and spring break windows. We coordinate directly with university facilities management to ensure zero disruption to classes and campus operations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does security film meet ANSI Z97.1 glazing requirements?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The security films we install — 8-mil, 12-mil, and 21-mil — are tested and certified to meet ANSI Z97.1 safety glazing standards. This is critical for ground-floor classroom windows, student housing, and any glass in high-traffic campus areas. We provide ANSI Z97.1 compliance documentation for university risk management and facilities departments. ROC #314088.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does security film protect against active threats on campus?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Security window film holds glass in place when impacted, creating a delay-of-entry barrier. An 8-mil film provides basic fragment retention and forced-entry delay. 12-mil and 21-mil films offer enhanced blast mitigation and extended delay-of-entry time measured in minutes. Combined with an attachment system bonding film to the frame, security film becomes a critical layer in campus threat response protocols — buying time for lockdown procedures and law enforcement response. All films meet ANSI Z97.1 standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can window film reduce HVAC costs for large campus buildings?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Solar control window film blocks 50-84% of solar heat gain through glass, directly reducing the cooling load on campus HVAC systems. On south and west-facing lecture halls and office buildings in Arizona, this translates to an estimated 15-25% reduction in cooling costs. For universities managing dozens of buildings, the cumulative energy savings are substantial — often producing full ROI within 3-5 years.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you coordinate with university facilities management for phased rollouts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We work directly with university facilities management, campus planning, and procurement departments. Multi-building projects are phased based on academic calendar, building priority, and budget allocation. We provide detailed project schedules, building-by-building specifications, and progress documentation throughout the rollout. Our team is experienced with institutional procurement processes and PO-based billing.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does window film affect natural light in lecture halls?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Modern solar control films reject heat while transmitting 40-70% of visible light, depending on the specification selected. For lecture halls and classrooms, we typically specify films with higher visible light transmission to maintain bright, naturally lit learning environments while eliminating glare on projector screens and monitors. The result is a more comfortable classroom with less eye strain — not a darker room.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you install different film types on different buildings in one contract?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Campus-wide contracts routinely include mixed film specifications — security film on ground-floor classroom and dormitory windows, solar control film on south-facing lecture halls and office buildings, privacy film on administrative suites and counseling centers, and decorative film for campus branding and wayfinding. We provide a single point of contact and unified project management across all film types and buildings.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does campus window film qualify for energy rebates or tax credits?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Qualifying solar control window film installations may be eligible for SRP Business Solutions and APS energy efficiency rebates. Educational institutions may also qualify for federal energy tax credits under Section 179D for energy-efficient commercial building improvements. We provide NFRC-rated data sheets required for rebate applications. Customers submit directly to their utility provider or tax advisor.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does window film last on university buildings in Arizona?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Professional-grade window film installed on university buildings in Arizona typically lasts 15-25 years depending on film type, glass orientation, and exposure. Security films and solar control films carry manufacturer warranties ranging from 10 years to lifetime. Arizona House of Film installs only commercial-grade films rated for sustained desert UV and heat exposure. Licensed ROC #314088.',
        },
      },
    ],
  };

  const projects = [
    {
      name: 'Grand Canyon University',
      category: 'University — Multi-Building Program',
      scope:
        'Multi-building window film program across campus administrative and classroom buildings. Solar control and security film specification. Ongoing relationship with university facilities management.',
      film: 'Solar control + security',
      valueLabel: 'Scale',
      value: 'Multi-building campus program',
    },
    {
      name: 'ASU MacroTechnology Works',
      category: 'University Research Facility — Tempe',
      scope:
        'Security and solar film for university research facility on the Tempe campus. Specialized specification for laboratory environments with sensitive equipment and controlled light requirements.',
      film: 'Security + solar',
      valueLabel: 'Location',
      value: 'Tempe campus',
    },
    {
      name: 'Private K-12 Academy Scottsdale',
      category: 'Private Academy — Security',
      scope:
        '8-mil security film on ground-floor classroom windows. 186 panes installed during summer break. Full ANSI Z97.1 compliance documentation provided to school administration and insurance carrier.',
      film: '8-mil security',
      valueLabel: 'Scale',
      value: '186 panes — summer break install',
    },
    {
      name: 'Community College Mesa',
      category: 'Community College — Solar Control',
      scope:
        'Solar control film on south-facing lecture halls. 3,200 sq ft of glass. Reduced estimated HVAC load by 15-20%. Completed during winter break with zero disruption to spring semester.',
      film: 'Solar control',
      valueLabel: 'Scale',
      value: '3,200 sq ft glass — winter break',
    },
    {
      name: 'University Student Housing Phoenix',
      category: 'Student Housing — Privacy & Solar',
      scope:
        'Privacy and solar film on ground-floor dormitory windows across 94 units. Dual mandate: student safety and privacy on ground-level units plus energy efficiency for reduced campus utility costs.',
      film: 'Privacy + solar',
      valueLabel: 'Scale',
      value: '94 units — ground-floor dormitories',
    },
  ];

  const applications = [
    {
      icon: Shield,
      title: 'Security & Safety Film',
      body: '8-mil to 21-mil security film. Delay of forced entry, blast mitigation, ANSI Z97.1 compliance for campus buildings.',
    },
    {
      icon: Sun,
      title: 'Solar Heat Rejection',
      body: 'Block 50-84% solar heat in lecture halls and offices. Reduce campus HVAC costs across dozens of buildings.',
    },
    {
      icon: Building,
      title: 'Anti-Glare for Classrooms',
      body: 'Eliminate projector washout and reduce screen glare for students and faculty in lecture halls and seminar rooms.',
    },
    {
      icon: Home,
      title: 'UV Protection for Labs',
      body: '99% UV block protects sensitive laboratory equipment, artwork collections, and library archives from degradation.',
    },
    {
      icon: Stethoscope,
      title: 'Privacy Film for Offices',
      body: 'Frosted and gradient film for faculty offices, counseling centers, administrative suites, and campus health facilities.',
    },
    {
      icon: ShoppingBag,
      title: 'Decorative & Wayfinding Film',
      body: 'Campus branding, building identification, directional graphics, and school colors applied directly to glass surfaces.',
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
        { name: 'University & Campus Window Film', path: '/university-window-film' },
      ]} />

      <main id="main-content" className="bg-slate-950 min-h-screen">
        {/* HERO */}
        <section className="relative min-h-[75vh] flex items-center pt-24 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="University campus window film installation Arizona"
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
                University & Campus Window Film
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Security film, solar control, and anti-glare solutions for Arizona university and college campuses. Protect students, reduce energy costs across large facilities, and schedule installation during summer or winter break for zero classroom disruption. ROC #{rocNumber}.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl"
                >
                  <Link to="/contact">Get Campus Quote</Link>
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

        {/* SECTION 1 — THE CAMPUS CHALLENGE */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              The Campus Window Film Challenge
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              University campuses present a unique window film challenge that no other commercial property type matches. A single campus may have hundreds or thousands of windows spread across dozens of buildings — classroom halls, research laboratories, administrative offices, student dormitories, libraries, athletic facilities, and performing arts centers. Each building type has different film requirements: security film on ground-floor classrooms and dormitories for active threat protection and ANSI Z97.1 glazing compliance, solar control film on south and west-facing lecture halls where un-tinted glass creates unbearable heat and glare that washes out projectors and screens, and UV-blocking film in labs and libraries where equipment and collections degrade under sustained Arizona sun exposure.
            </p>
          </div>
          <div className="prose max-w-none mb-10 mt-8">
            <p className="text-lg text-slate-300 mb-4">
              The operational reality of campus window film is equally complex. Installation must be scheduled around the academic calendar — summer break provides the longest continuous installation window for major rollouts, while winter and spring breaks accommodate smaller phases. Every project requires coordination with university facilities management, campus security, and often procurement departments operating on institutional PO-based billing cycles. Arizona House of Film has completed campus window film projects for Grand Canyon University and ASU-area facilities, and we understand the institutional workflow that university projects demand. From initial specification and facilities walk-through to phased installation across multiple buildings and final compliance documentation, we manage the entire process. Licensed ROC #314088.
            </p>
          </div>
        </section>

        {/* SECTION 2 — VERIFIED PROJECTS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Verified Campus Projects
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto">
                Sample of completed university and educational facility window film projects drawn from invoice history.
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
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6">University Window Film — Campus Facility Types</h2>
            <p className="text-slate-700 mb-6">We install window film across all university and college facility types including:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {[
                { area: 'University Classroom Buildings', desc: 'Anti-glare, solar control, security' },
                { area: 'Research & Laboratory Facilities', desc: 'UV protection, climate control, safety' },
                { area: 'Administrative Offices', desc: 'Privacy, solar control, branding' },
                { area: 'Student Housing & Dormitories', desc: 'Privacy, security, energy efficiency' },
                { area: 'Libraries & Study Centers', desc: 'UV protection, glare reduction, preservation' },
                { area: 'Athletic Facilities', desc: 'Solar control, safety glazing, branding' },
                { area: 'Student Unions & Common Areas', desc: 'Decorative, solar, wayfinding graphics' },
                { area: 'Campus Health Centers', desc: 'Privacy film, UV block, patient comfort' },
                { area: 'Performing Arts & Auditoriums', desc: 'Blackout, light control, acoustic privacy' },
              ].map(({ area, desc }) => (
                <div key={area} className="border border-slate-200 rounded-lg p-3">
                  <div className="font-bold text-slate-900 text-sm">{area}</div>
                  <div className="text-xs text-slate-500 mt-1">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — APPLICATIONS */}
        <section className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Window Film Applications for University Campuses
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

        {/* SECTION 4 — SERVICE COVERAGE */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Campus Window Film Service Coverage
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Arizona House of Film serves universities, colleges, and educational institutions throughout the Phoenix metropolitan area and across Arizona. We have completed projects for Grand Canyon University, ASU-area research facilities, Scottsdale private academies, Mesa community colleges, and Phoenix-area student housing complexes. Our team understands the institutional procurement process — from RFP response and specification development through PO-based billing and multi-phase project delivery.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mt-6">
              Summer break and winter break scheduling is standard for campus projects. We plan multi-building phased rollouts that align with the academic calendar, ensuring zero disruption to classes, labs, and campus operations. For large campus-wide programs, we offer multi-year rollout plans that spread the investment across budget cycles while maintaining consistent film specification and appearance across all buildings. Licensed ROC #314088.
            </p>

            {/* ── K-12 CROSS-LINK ─────────────────────────── */}
            <div className="cross-link-banner bg-slate-800 border border-slate-700 rounded-lg px-6 py-4 max-w-3xl mx-auto mt-6 text-center">
              <p className="text-gray-300 text-sm">
                Need security film for <strong className="text-white">K-12 schools</strong>?{" "}
                <Link to="/window-film-for-schools-arizona" className="text-green-400 hover:text-green-300 font-semibold">
                  View window film for schools →
                </Link>
              </p>
            </div>
          </div>
        </section>

        <EstimatorCTA />

        {/* PRICING & SPECIFICATIONS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6">University Window Film — Pricing & Specifications</h2>
            <p className="text-slate-700 mb-4">All campus window film projects are custom-quoted based on building count, glass area, film specification, access requirements, and installation scheduling. These ranges reflect installed costs across completed university and educational facility projects:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="font-black text-xl mb-1">$5,000–$15,000</div>
                <div className="font-bold text-slate-800 mb-2">Single Building</div>
                <div className="text-sm text-slate-600">Classroom building or administrative office. 40-100 windows. Solar control or security film. Break-period installation.</div>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="font-black text-xl mb-1">$15,000–$50,000</div>
                <div className="font-bold text-slate-800 mb-2">Multi-Building</div>
                <div className="text-sm text-slate-600">3-8 campus buildings. Mixed film specification — solar, security, privacy. Phased installation over summer or winter break period.</div>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="font-black text-xl mb-1">$50,000+</div>
                <div className="font-bold text-slate-800 mb-2">Campus-Wide Program</div>
                <div className="text-sm text-slate-600">Full campus specification. Multi-year rollout plan. Custom procurement, scheduling, and building-by-building documentation.</div>
              </div>
            </div>
            <p className="text-slate-600 text-sm">SRP Business Solutions and APS energy efficiency rebates available for qualifying campus installations. Educational institutions may also qualify for federal energy tax credits under Section 179D for energy-efficient building improvements. We provide NFRC documentation. Customers submit directly to their utility provider or tax advisor.</p>
          </div>
        </section>

        {/* SECTION 5 — CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Campus Window Film Quote
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site campus assessment. Custom specification for every building type and glass orientation. Licensed ROC
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

        {/* CROSS-LINKS */}
        <section className="py-14 bg-slate-900 border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/safety" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Safety & Security Film →</Link>
              <Link to="/window-film-for-schools-arizona" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Window Film for Schools →</Link>
              <Link to="/commercial-window-tinting" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Commercial Window Tinting →</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-slate-950">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-4">
                University Window Film FAQs
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
              <Link to="/safety" className="text-green-500 hover:underline">Safety & Security Film</Link>
              {' · '}
              <Link to="/window-film-for-schools-arizona" className="text-green-500 hover:underline">Window Film for Schools</Link>
              {' · '}
              <Link to="/commercial-window-tinting" className="text-green-500 hover:underline">Commercial Window Tinting</Link>
            </div>
          </div>
        </section>

        <ContactFormSection />
      </main>
    </>
  );
};

export default UniversityWindowFilm;
