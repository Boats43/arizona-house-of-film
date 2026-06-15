import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Eye, Grid, Layers, Building, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';
import EstimatorCTA from '../components/EstimatorCTA';

const DecorativePhoenix = () => {
  const rocNumber = '314088';
  const pageTitle = 'Decorative Window Film Phoenix AZ | Patterns & Frosted';
  const metaDescription = 'Phoenix decorative window film installer. Frosted glass, privacy film, 3M Fasara, Solyx patterns. Free estimate. ROC #314088.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/decorative-window-film-phoenix';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';
  const heroImageUrl = '/images/gallery/20250619_100523.webp';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Decorative Window Film Installation Phoenix AZ',
    serviceType: 'Decorative Window Film Installation',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://arizonahouseoffilm.com',
      name: 'Arizona House of Film',
    },
    areaServed: { '@type': 'City', name: 'Phoenix', addressRegion: 'AZ' },
    description: metaDescription,
    url: canonicalUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does decorative window film cost in Phoenix?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Decorative window film in Phoenix typically ranges from $7–$20 per square foot installed depending on film type, pattern complexity, and glass size. Simple frosted film for a bathroom window runs $150–$400. Custom 3M Fasara patterns for commercial glass walls run $2,000–$8,000+. All projects are custom-quoted.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between frosted film and privacy film?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Frosted film diffuses light and blocks visibility from both directions at all times — used for permanent privacy in bathrooms, offices, and glass doors. Privacy film (one-way mirror) blocks visibility from one direction during daylight only — used where outward visibility is desired. We recommend the right type based on your specific use case.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can decorative film be removed or changed later?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Quality decorative window film is removable without damaging the glass — unlike etched or sandblasted glass which is permanent. This makes film ideal for renters, businesses that rebrand, or anyone who wants flexibility. Removal typically takes 1–2 hours per window.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you install 3M Fasara film in Phoenix?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We install 3M Fasara decorative glass film — one of the most extensive decorative film lines available. 3M Fasara includes frosted, patterned, textured, and translucent designs. We have installed 3M Fasara at Chipotle, Starbucks, and numerous commercial and residential projects across Phoenix.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can decorative film go on any window or glass surface?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Decorative film works on most flat glass surfaces — windows, glass doors, shower enclosures, glass partitions, mirrors, and glass walls. It cannot be applied to textured, wired, or curved glass. We assess glass compatibility on every project before installation.',
        },
      },
    ],
  };

  const projects = [
    {
      name: 'Chipotle — 3M Fasara Luna, Scottsdale',
      category: 'National QSR Chain — Decorative',
      scope: '3M Fasara Luna decorative film on commercial storefront glass. Custom sizing across sidelights, transoms, and entry doors. Installed through Gable Family Builders as GC. Old Town Scottsdale corridor.',
      film: '3M Fasara Luna',
      valueLabel: 'Location',
      value: '8099 E McDowell Rd Scottsdale',
    },
    {
      name: 'Starbucks — Phoenix Metro Locations',
      category: 'National QSR — Interior Decorative',
      scope: '3M Fasara decorative film on interior glass partitions at Phoenix area Starbucks locations. Pattern film for brand-consistent aesthetic on partition and door glass.',
      film: '3M Fasara patterned',
      valueLabel: 'Scale',
      value: 'Phoenix metro locations',
    },
    {
      name: 'Frank Lloyd Wright Foundation — Taliesin West',
      category: 'Cultural Institution — Preservation Sensitive',
      scope: 'Decorative and solar film at Frank Lloyd Wright Foundation Scottsdale campus. Film selection compatible with historic architectural glass. Preservation-sensitive environment.',
      film: 'Solar + decorative',
      valueLabel: 'Location',
      value: 'Taliesin West, Scottsdale',
    },
    {
      name: 'North Scottsdale Dental Office',
      category: 'Medical / Professional — Privacy Film',
      scope: 'Patient privacy film for clinical environments at Scottsdale dental office. Frosted film on treatment room glass and reception partition. HIPAA-sensitive zone compliance.',
      film: 'Frosted privacy',
      valueLabel: 'Application',
      value: 'Patient privacy, HIPAA zones',
    },
    {
      name: 'Phoenix Corporate Office — Glass Partition Suite',
      category: 'Corporate Interior — Phoenix',
      scope: 'Decorative film across full glass partition suite for Phoenix corporate client. Etched-look frosted film on conference room glass. Privacy film on executive office sidelites.',
      film: 'Etched frosted + privacy',
      valueLabel: 'Application',
      value: 'Full partition suite',
    },
    {
      name: 'Isagenix International — Phoenix Campus',
      category: 'Corporate Campus — Phoenix',
      scope: 'Decorative and privacy film combination across Isagenix Phoenix headquarters. Glass office fronts, conference rooms, and lobby glass. Coordinated with facilities management.',
      film: 'Decorative + privacy',
      valueLabel: 'Client',
      value: 'Isagenix International',
    },
  ];

  const applications = [
    { icon: Eye,      title: 'Frosted & Privacy Glass',  body: 'Bathrooms, offices, glass doors. Permanent frosted look without etching — removable and repositionable.' },
    { icon: Sparkles, title: '3M Fasara Patterns',       body: 'Geometric, floral, linen, and custom patterns. Commercial-grade decorative film used by national brands.' },
    { icon: Grid,     title: 'Glass Partitions & Walls', body: 'Corporate interiors, conference rooms, reception glass. Full or partial coverage with clean edge cuts.' },
    { icon: Layers,   title: 'Custom Cut Designs',       body: 'Logo cutouts, stripe patterns, gradient frost. Precision-cut film for branded or architectural applications.' },
    { icon: Building, title: 'Commercial Storefronts',   body: 'Brand-aligned decorative film for retail, restaurant, and office storefronts. Compliant with most HOA and landlord requirements.' },
    { icon: Home,     title: 'Residential Decorative',   body: 'Shower glass, sidelites, French doors, skylights. Decorative film that looks custom without the custom price.' },
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
        { name: 'Phoenix', path: '/decorative-window-film-phoenix' },
      ]} />

      <main id="main-content" className="bg-slate-950 min-h-screen">

        {/* HERO */}
        <section className="relative min-h-[75vh] flex items-center pt-24 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Decorative window film Phoenix AZ"
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
                Decorative Window Film Phoenix AZ
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Frosted glass film, 3M Fasara patterns, custom privacy film, and decorative glass solutions for Phoenix homes and businesses. Chipotle, Starbucks, Frank Lloyd Wright Foundation. ROC #{rocNumber}.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl">
                  <Link to="/contact">Get a Free Decorative Film Quote</Link>
                </Button>
                <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all text-lg">
                  (480) 788-1591
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* INTENT REFRAME */}
        <section className="bg-blue-950 border-l-4 border-blue-500 p-6 mb-10 rounded-r-lg">
          <h2 className="text-xl font-bold text-white mb-2">Looking for Decorative Window Tinting in Phoenix?</h2>
          <p className="text-gray-300 text-sm leading-relaxed">Many Phoenix homeowners and businesses search for "decorative window tinting" — what they're looking for is professional decorative window film installation. Arizona House of Film installs frosted, patterned, etched, and custom decorative glass films that provide privacy, style, and lasting performance. Licensed ROC #314088. No DIY — professional installation only.</p>
        </section>

        {/* SECTION 1 */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Decorative Window Film vs. Etched Glass
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Etched and sandblasted glass is permanent, expensive, and requires full pane replacement to change. Decorative window film achieves the same frosted, patterned, or textured look at a fraction of the cost — and it is removable. For commercial tenants, renters, and businesses that evolve, film is the only practical option. Arizona House of Film has installed decorative film for national chains, corporate offices, medical facilities, and luxury residences across Phoenix since 2017. For office glass partitions and conference rooms, see our <Link to="/blog/casper-cloaking-film-cost-phoenix" className="text-green-400 hover:text-green-300 underline">Casper cloaking film cost</Link> breakdown.
            </p>
          </div>
        </section>

        {/* VERIFIED PROJECTS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Verified Decorative Film Projects — Phoenix AZ
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto">
                Sample of completed decorative and privacy film installations drawn from verified project history.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-slate-50 border-l-4 border-green-500 p-8">
                  <p className="text-xs font-black text-green-600 uppercase tracking-widest mb-2">{project.category}</p>
                  <h3 className="text-base font-black text-slate-950 uppercase mb-3 leading-tight">{project.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{project.scope}</p>
                  <div className="border-t border-slate-200 pt-4 space-y-1">
                    <p className="text-xs text-slate-500"><span className="font-black text-slate-700 uppercase">Film:</span> {project.film}</p>
                    <p className="text-xs text-slate-500"><span className="font-black text-slate-700 uppercase">{project.valueLabel}:</span> {project.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APPLICATIONS */}
        <section className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Decorative Film Applications — Phoenix
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

        {/* PATTERN GALLERY */}
        <section className="py-24 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                618+ Decorative Film Patterns — Installed in Phoenix
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-400 text-lg font-medium max-w-3xl mx-auto">
                Arizona House of Film installs the full Solyx and 3M Fasara decorative film catalog. Select a style below to request a quote.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Frosted & Sandblast', desc: 'Clean, diffused privacy without visible pattern.', examples: ['Dusted Crystal', 'Clear Sandblast', 'Fine Cast Sandblast'], param: 'Frosted' },
                { name: 'Geometric Patterns', desc: 'Structured lines, grids, dots, and repeating shapes.', examples: ['Gotham', 'Wire Glass', 'Dot Screen 16'], param: 'Geometric' },
                { name: 'Organic & Textured', desc: 'Natural textures — linen, cotton, bamboo, leaf.', examples: ['Organic Cotton', 'Dusted Leaf', 'Rattan Matte'], param: 'Organic' },
                { name: 'Gradient & Fade', desc: 'Top-to-bottom or dual fade for conference glass and partitions.', examples: ['Horizon Ether', 'Feather Gradient', 'Dual Feather Gradient'], param: 'Gradient' },
                { name: 'Simulated Art Glass', desc: 'Reeded, ribbed, wavy — architectural glass looks without replacement.', examples: ['Reeded Glass 1/2"', 'Wavy Glass', 'Ribbed Glass Clear'], param: 'ArtGlass' },
                { name: 'Stained Glass & Color', desc: 'Decorative color film for feature glass, doors, and accent panels.', examples: ['Persian Stained Glass', 'Venetian Stained Glass', 'Azure Blue'], param: 'StainedGlass' },
                { name: 'Etched & Acid Etch', desc: 'Precise etched patterns for corporate and architectural applications.', examples: ['Sateen Etch', 'Asian Grass Etch', 'Crosshatch Etch'], param: 'Etched' },
                { name: 'Cloaking & Specialty', desc: 'Screen-blocking privacy for conference rooms and glass offices.', examples: ['Casper Cloaking', 'Clear Holographic', 'One Way Perforated'], param: 'Cloaking' },
              ].map((cat) => (
                <div key={cat.name} className="bg-slate-800 border border-slate-700 hover:border-green-500/50 p-8 transition-all flex flex-col">
                  <h3 className="text-base font-black text-white uppercase mb-3 leading-tight">{cat.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium mb-4">{cat.desc}</p>
                  <ul className="text-slate-500 text-xs space-y-1 mb-6">
                    {cat.examples.map((ex) => (
                      <li key={ex}>• {ex}</li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button asChild size="sm" className="bg-green-600 hover:bg-green-700 text-white font-black rounded-none w-full">
                      <Link to={`/contact?film=${cat.param}`}>Get Quote for This Style</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-400 text-sm mt-10">
              Don't see what you're looking for?{' '}
              <Link to="/films" className="text-green-400 hover:underline font-bold">Browse all 618 films →</Link>
            </p>
          </div>
        </section>

        {/* COST */}
        <section className="py-24 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Decorative Window Film Pricing — Phoenix AZ
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-400 text-lg font-medium max-w-3xl mx-auto">
                All projects are custom-quoted. These ranges reflect real installed costs from our Phoenix decorative film jobs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { label: 'Residential / Single Glass',    range: '$150 – $600',     note: 'Bathroom window, shower enclosure, sidelite, or single door panel' },
                { label: 'Office / Commercial Interior',  range: '$600 – $3,000',   note: 'Conference room, partition wall, reception glass, medical privacy zones' },
                { label: 'Commercial Storefront / Custom', range: '$2,000 – $10,000+', note: 'Full storefront, 3M Fasara pattern, custom cut logo or brand design' },
              ].map((c) => (
                <div key={c.label} className="bg-slate-800 border border-slate-700 p-8">
                  <div className="text-2xl font-black text-white mb-1">{c.range}</div>
                  <div className="text-green-400 font-black text-sm uppercase tracking-widest mb-3">{c.label}</div>
                  <div className="text-slate-400 text-sm leading-relaxed">{c.note}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm">
              We do not publish flat per-sq-ft rates — every decorative film project is custom-quoted after a free on-site assessment.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-950 uppercase tracking-tight mb-4">
                Decorative Window Film FAQs — Phoenix
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto" />
            </div>
            <div className="space-y-8">
              {faqSchema.mainEntity.map((q) => (
                <div key={q.name} className="border-b border-slate-200 pb-8">
                  <h3 className="text-lg font-black text-slate-950 mb-3 uppercase">{q.name}</h3>
                  <p className="text-slate-600 leading-relaxed">{q.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center text-slate-500 text-sm">
              Also see:{' '}
              <Link to="/decorative-window-films" className="text-green-600 hover:underline">Decorative Window Films</Link>
              {' · '}
              <Link to="/residential-window-tinting" className="text-green-600 hover:underline">Residential Window Tinting</Link>
              {' · '}
              <Link to="/commercial-window-tinting" className="text-green-600 hover:underline">Commercial Window Tinting</Link>
            </div>
          </div>
        </section>

        {/* SERVICE AREA */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Phoenix Decorative Film Service Coverage
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              We install decorative and privacy window film across the full Phoenix metro — Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, Surprise, and surrounding communities. Residential and commercial. Licensed, bonded, insured. ROC #{rocNumber}.
            </p>
          </div>
        </section>

        <EstimatorCTA />

        {/* CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Phoenix Decorative Window Film Quote
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment. We will evaluate your glass, recommend the right film, and provide a custom quote. Licensed ROC #{rocNumber}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl">
                <Link to="/contact">Request Free Assessment</Link>
              </Button>
              <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all text-lg">
                (480) 788-1591
              </a>
            </div>
          </div>
        </section>

        <ContactFormSection />
      </main>
    </>
  );
};

export default DecorativePhoenix;
