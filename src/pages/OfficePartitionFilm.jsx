import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building, Shield, Eye, Monitor, Lock, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';
import EstimatorCTA from '../components/EstimatorCTA';

const OfficePartitionFilm = () => {
  const rocNumber = '314088';
  const pageTitle = 'Office Partition Window Film | Glass Privacy Solutions | ROC #314088';
  const metaDescription = 'Professional office partition window film installation — Casper cloaking, frosted, gradient & switchable films for glass walls, conference rooms & open offices. ROC #314088.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/office-partition-window-film';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';
  const heroImageUrl =
    'https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/img_20240821_123937_469-jYOb9.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Office Partition Window Film Installation',
    serviceType: 'Office Partition Window Film Installation',
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
        name: 'How much does office partition window film cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Office partition window film typically costs $8–$22 per square foot installed, depending on film type and partition count. Standard frosted film runs $2,500–$6,000 for a small office with 4–8 partitions. Casper cloaking and switchable smart film are premium products that start at $35–$85 per square foot. Call (480) 788-1591 for a free on-site quote.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Casper cloaking film for office glass?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Casper cloaking film is a patented technology that makes LED and LCD screens invisible from the hallway side of glass partitions while maintaining full visibility for people inside the room. It works by filtering the specific wavelengths emitted by digital displays. This is ideal for conference rooms where sensitive presentations, financial data, or proprietary content is displayed on screens visible through glass walls.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you install film on existing glass partitions without removing them?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All office partition film is applied directly to existing glass without removing panels, frames, or hardware. Installation requires no construction, no permits, and no modification to the partition system. The glass stays in place throughout the entire process, and most offices remain fully operational during installation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does frosted film block light in offices?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Frosted window film transmits 85–95% of ambient light while completely obscuring direct line-of-sight visibility. This is one of the primary advantages over solid walls or blinds — you maintain the open, light-filled environment that glass partitions create while adding the privacy your team needs for focused work and confidential meetings.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does office partition film installation take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A typical small office with 4–8 glass partitions takes 4–6 hours. Mid-size offices with full-floor glass partitions and multiple conference rooms complete in 1–2 days. Large corporate installations spanning multiple floors are scheduled across 3–5 days with floor-by-floor sequencing to minimize disruption to daily operations.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can partition film be removed later without damaging glass?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Professional-grade partition film is fully removable without damage to glass surfaces. This makes it ideal for leased office spaces where tenants need privacy solutions that do not permanently modify the landlord\'s property. Removal takes approximately half the time of installation, and glass surfaces are cleaned to original condition. ROC #314088.',
        },
      },
      {
        '@type': 'Question',
        name: 'What\'s the difference between frosted film and switchable smart film?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Frosted film is a static product — once applied, it provides permanent privacy at a cost of $8–$15 per square foot installed. Switchable smart film is an electrically powered product that toggles between clear and opaque with a switch, remote, or app, costing $50–$85 per square foot installed. Smart film requires a low-voltage power connection to each panel and is best suited for conference rooms and executive offices where on-demand privacy is needed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you install office partition film after hours?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We offer after-hours, weekend, and overnight installation for office partition film projects that require zero disruption to business operations. Many corporate clients and law firms request after-hours scheduling to avoid any interference with daily workflow. After-hours installations are quoted at the same rates with no premium. Call (480) 788-1591 to schedule.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does office partition film help with HIPAA compliance?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Frosted partition film is a common solution for medical offices that need to prevent visual access to patient information displayed on screens or visible through glass intake windows. While film alone does not constitute full HIPAA compliance, it addresses the visual privacy component required under the Privacy Rule. We have completed HIPAA-related partition film projects for medical offices, dental practices, and behavioral health facilities across the Phoenix metro area.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you match film across different glass thicknesses in one office?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Office environments often have mixed glass — 3/8" partitions, 1/2" conference room walls, and 1/4" sidelights — all requiring a consistent visual appearance. We spec and source film that delivers uniform frosting, gradient, or cloaking appearance regardless of underlying glass thickness. Color and opacity matching across mixed substrates is a standard part of our specification process.',
        },
      },
    ],
  };

  const projects = [
    {
      name: 'Grand Canyon University — Administrative Offices',
      category: 'Higher Education — Campus Administration',
      scope:
        'Casper cloaking film on conference room glass walls across campus administrative offices. Screen privacy for faculty presentations and board meetings. Multiple buildings completed in phased rollout.',
      film: 'Casper cloaking',
      valueLabel: 'Application',
      value: 'Screen privacy for presentations',
    },
    {
      name: 'LA Fitness Corporate — Scottsdale',
      category: 'Corporate Fitness — Manager Offices',
      scope:
        'Frosted band film on glass office partitions for manager offices requiring visual privacy without blocking overhead light. Clean horizontal band pattern across 16 glass panels in corporate suite.',
      film: 'Frosted band',
      valueLabel: 'Scale',
      value: '16 glass panels',
    },
    {
      name: 'Tech Startup — Scottsdale Airpark',
      category: 'Technology — Open Plan Office',
      scope:
        'Full-height gradient film on open-plan glass dividers across 2,400 sq ft of interior glass. Modern fade-to-clear aesthetic creating defined privacy zones without eliminating sightlines or natural light in collaborative workspace.',
      film: 'Gradient privacy',
      valueLabel: 'Glass area',
      value: '2,400 sq ft',
    },
    {
      name: 'Medical Office — Tempe',
      category: 'Healthcare — Patient Intake',
      scope:
        'HIPAA-compliant frosted film on patient intake partitions. 12 glass panels with full privacy below 5 ft and clear glass above for ambient light and air circulation. Front desk, intake windows, and exam room sidelights.',
      film: 'Frosted — HIPAA specification',
      valueLabel: 'Scale',
      value: '12 glass panels',
    },
    {
      name: 'Law Firm — Downtown Phoenix',
      category: 'Legal — Conference & Attorney Offices',
      scope:
        'Dual-zone Casper cloaking and frosted film on conference room glass walls. Screen cloaking for client presentations and case review. Attorney-client privilege areas with full visual privacy from reception corridor.',
      film: 'Casper cloaking + frosted',
      valueLabel: 'Application',
      value: 'Attorney-client privilege areas',
    },
  ];

  const applications = [
    {
      icon: Monitor,
      title: 'Casper Cloaking Technology',
      body: 'Makes LED/LCD screens invisible from the hallway side of glass partitions while maintaining full in-room visibility. Ideal for conference rooms displaying financial data, client presentations, or proprietary content.',
    },
    {
      icon: Eye,
      title: 'Frosted & Etched Privacy',
      body: '200+ frosted and etched patterns available. Partial-height bands, full-coverage frosting, or custom-cut designs. Maintains 85–95% light transmission while eliminating direct line-of-sight.',
    },
    {
      icon: Layers,
      title: 'Gradient Privacy Bands',
      body: 'Smooth fade from fully frosted to fully clear. Conference room favorite that provides seated-height privacy with clear glass above. Available in white, gray, and bronze tint gradients.',
    },
    {
      icon: Lock,
      title: 'Switchable Smart Film',
      body: 'Electric on/off privacy — instant transition from clear to opaque via wall switch, remote, or smartphone app. Low-voltage powered. Perfect for boardrooms and executive offices requiring on-demand privacy.',
    },
    {
      icon: Shield,
      title: 'One-Way Mirror Film',
      body: 'Daytime directional privacy for manager offices and HR suites. Allows interior occupants to see out while preventing hallway visibility in. Performance depends on lighting differential.',
    },
    {
      icon: Building,
      title: 'Custom Branded Films',
      body: 'Corporate logo integration, mission statements, wayfinding graphics, and branded patterns applied directly to glass partitions. Full-color print capability on frosted or clear carrier film.',
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
        { name: 'Office Partition Window Film', path: '/office-partition-window-film' },
      ]} />

      <main id="main-content" className="bg-slate-950 min-h-screen">
        {/* HERO */}
        <section className="relative min-h-[75vh] flex items-center pt-24 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Office partition window film installation"
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
                Office Partition Window Film
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Professional glass privacy solutions for offices, conference rooms, and open floor plans — Casper cloaking, frosted, gradient, and switchable films that replace walls without construction. ROC #{rocNumber}.
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

        {/* SECTION 1 — THE OFFICE GLASS PARTITION CHALLENGE */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              The Office Glass Partition Challenge
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Modern offices are built on glass. Floor-to-ceiling glass walls separate conference rooms from open workspaces. Glass partitions divide manager offices from hallways. Glass-walled huddle rooms and phone booths dot open floor plans. The design intent is collaboration, transparency, and natural light — but the operational reality is fishbowl conference rooms where every screen is visible from the hallway, manager offices with zero visual privacy, and hot-desking areas where employees feel exposed from every angle. Sensitive presentations, confidential client calls, and HR meetings happen behind glass walls that hide nothing.
            </p>
          </div>
          <div className="prose max-w-none mb-10 mt-8">
            <p className="text-lg text-slate-300 mb-4">
              Window film solves the glass partition privacy problem without construction, permits, or permanent modification to your office. Unlike blinds that block light, curtains that look residential, or frosted glass replacement that costs tens of thousands, partition film is applied directly to existing glass panels — maintaining the open aesthetic your architect designed while adding the visual privacy your team actually needs. Installation takes hours, not weeks. Film is fully removable for lease-end restoration. And the cost is a fraction of reglazing or installing solid walls. Arizona House of Film has completed office partition film projects across the Phoenix metro for corporate towers, medical offices, law firms, tech companies, and co-working spaces — from single conference rooms to full multi-floor glass partition programs.
            </p>
            <p className="text-lg text-slate-300 mb-4">
              Whether you need Casper cloaking technology to hide screens from hallway view, frosted bands for seated-height privacy, gradient film for a modern aesthetic transition, or switchable smart film that goes from clear to opaque at the press of a button — we specify, source, and install the right product for every glass partition in your office. Licensed ROC #314088. Every project custom-quoted based on your specific glass inventory, partition system, and privacy requirements.
            </p>
          </div>
        </section>

        {/* SECTION 2 — VERIFIED PROJECTS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Verified Office Partition Projects
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto">
                Sample of completed office partition window film projects across the Phoenix metro area.
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
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6">Office Partition Film — Service Areas</h2>
            <p className="text-slate-700 mb-6">We install office partition window film for every type of commercial interior glass environment:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {[
                { area: 'Corporate Office Towers', desc: 'Full-floor glass partitions, executive suites' },
                { area: 'Conference Rooms', desc: 'Casper cloaking, frosted, gradient privacy' },
                { area: 'Co-Working Spaces', desc: 'Hot-desk dividers, phone booths, meeting pods' },
                { area: 'Medical Office Suites', desc: 'HIPAA-compliant privacy, intake partitions' },
                { area: 'Law Firm Offices', desc: 'Attorney-client privilege, screen cloaking' },
                { area: 'Tech Company Open Plans', desc: 'Glass dividers, collaborative privacy zones' },
                { area: 'Executive Suites', desc: 'One-way mirror, switchable smart film' },
                { area: 'Huddle Rooms & Phone Booths', desc: 'Full-wrap frosted, gradient bands' },
                { area: 'Reception & Lobby Glass', desc: 'Branded film, wayfinding, decorative patterns' },
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
                Office Partition Film Applications
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
              Office Partition Film Service Coverage
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Arizona House of Film installs office partition window film throughout the Phoenix metropolitan area and all of Arizona. We serve corporate office markets in Downtown Phoenix, Tempe, Scottsdale, Chandler, Mesa, Gilbert, Glendale, Peoria, and the entire East Valley and West Valley. From single-tenant office suites to Class A corporate towers, we provide on-site glass surveys, film specification, and professional installation for every office partition environment.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mt-6">
              Our office partition film projects range from single conference rooms to full multi-floor corporate glass programs. We work with facility managers, tenant improvement contractors, interior designers, and office managers to specify the right film product for each partition — matching appearance across mixed glass types, coordinating with existing interior finishes, and delivering installation on schedule with minimal disruption to daily operations. Licensed ROC #314088. Free on-site assessments for all Arizona office partition projects.
            </p>

            {/* ── COMMERCIAL CROSS-LINK ─────────────────────────── */}
            <div className="cross-link-banner bg-slate-800 border border-slate-700 rounded-lg px-6 py-4 max-w-3xl mx-auto mt-6 text-center">
              <p className="text-gray-300 text-sm">
                Looking for <strong className="text-white">full commercial window tinting</strong>?{" "}
                <Link to="/commercial-window-tinting" className="text-green-400 hover:text-green-300 font-semibold">
                  View commercial window tinting services →
                </Link>
              </p>
            </div>
          </div>
        </section>

        <EstimatorCTA />

        {/* PRICING & SPECIFICATIONS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6">Office Partition Window Film — Pricing & Specifications</h2>
            <p className="text-slate-700 mb-4">All office partition film projects are custom-quoted based on glass count, partition dimensions, film type, and access requirements. These ranges reflect installed costs across completed office partition projects:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="font-black text-xl mb-1">$2,500–$6,000</div>
                <div className="font-bold text-slate-800 mb-2">Small Office</div>
                <div className="text-sm text-slate-600">4–8 glass partitions, single conference room, frosted or gradient film. Ideal for small office suites and startup spaces.</div>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="font-black text-xl mb-1">$6,000–$15,000</div>
                <div className="font-bold text-slate-800 mb-2">Mid-Size Office</div>
                <div className="text-sm text-slate-600">Full-floor glass partitions, multiple conference rooms, Casper cloaking and frosted combination. Corporate suites and professional offices.</div>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="font-black text-xl mb-1">$15,000+</div>
                <div className="font-bold text-slate-800 mb-2">Large Commercial</div>
                <div className="text-sm text-slate-600">Multi-floor corporate office, full building glass partition program, custom specification and phased installation schedule.</div>
              </div>
            </div>
            <p className="text-slate-600 text-sm">SRP Business Solutions and APS energy efficiency rebates may apply to qualifying office partition film installations that include solar control properties. We provide NFRC documentation. Customers submit directly to their utility provider.</p>
          </div>
        </section>

        {/* SECTION 5 — CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get an Office Partition Film Quote
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site glass survey. Custom specification for your partition system and privacy requirements. Licensed ROC
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

        {/* RELATED SERVICES CROSS-LINKS */}
        <section className="py-14 bg-slate-900 border-t border-slate-800">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link to="/films/casper-cloaking" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Casper Cloaking Film →</Link>
              <Link to="/commercial-window-tinting" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Commercial Window Tinting →</Link>
              <Link to="/decorative-window-films" className="border border-slate-700 rounded-lg p-4 text-green-400 font-semibold hover:border-green-500 transition-colors">Decorative Window Films →</Link>
            </div>
          </div>
        </section>

        <ContactFormSection />

        {/* FAQ SECTION */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-10 text-center">
              Office Partition Window Film FAQ
            </h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, idx) => (
                <div key={idx} className="border-b border-slate-200 pb-6">
                  <h3 className="text-lg font-black text-slate-900 mb-2">{faq.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default OfficePartitionFilm;
