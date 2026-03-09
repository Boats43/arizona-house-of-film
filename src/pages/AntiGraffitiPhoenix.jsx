import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, RefreshCw, DollarSign, Building, Train, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';

const AntiGraffitiPhoenix = () => {
  const rocNumber = '314088';
  const pageTitle = 'Anti-Graffiti Window Film Phoenix AZ | Sacrificial Glass Protection | Arizona House of Film';
  const metaDescription = 'Phoenix anti-graffiti film installer. Protect glass, mirrors & polished metal from tagging, scratching & acid etching. Replace film not glass. ROC #314088. Free quote.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/anti-graffiti-film-phoenix';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';
  const heroImageUrl = 'https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/img_20240821_123937_469-jYOb9.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Anti-Graffiti Window Film Installation Phoenix AZ',
    serviceType: 'Anti-Graffiti Film Installation',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Arizona House of Film',
      url: 'https://arizonahouseoffilm.com/',
      telephone: '+1-480-788-1591',
      address: { '@type': 'PostalAddress', streetAddress: '7007 W Flower St', addressLocality: 'Phoenix', addressRegion: 'AZ', postalCode: '85033' },
    },
    areaServed: { '@type': 'City', name: 'Phoenix', addressRegion: 'AZ' },
    description: metaDescription,
    url: canonicalUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much does anti-graffiti film cost in Phoenix?', acceptedAnswer: { '@type': 'Answer', text: 'Anti-graffiti film in Phoenix typically runs $5-$12 per square foot installed for standard clear sacrificial film. A typical retail storefront with 3-4 glass panels runs $400-$1,200. Transit and municipal installations are quoted per project scope. All jobs are custom-quoted after site assessment.' } },
      { '@type': 'Question', name: 'How does anti-graffiti film work?', acceptedAnswer: { '@type': 'Answer', text: 'Anti-graffiti film is a clear sacrificial layer applied over glass, mirrors, and polished metal. When a surface is tagged, scratched, or acid-etched, the damage occurs on the film not the underlying surface. The damaged film is peeled off and replaced at a fraction of glass replacement cost. A single glass pane replacement in Phoenix runs $300-$2,000. Film replacement runs $50-$300 for the same surface.' } },
      { '@type': 'Question', name: 'What surfaces can anti-graffiti film protect in Phoenix?', acceptedAnswer: { '@type': 'Answer', text: 'Anti-graffiti film protects flat glass windows, glass doors, storefront glass, mirrors, polished stainless steel, anodized aluminum panels, and elevator interiors. It is available in clear and matte finishes to match the substrate appearance. We install anti-graffiti film on commercial storefronts, transit stations, restroom mirrors, elevator cabs, and ATM surrounds across Phoenix.' } },
      { '@type': 'Question', name: 'Is anti-graffiti film visible on glass?', acceptedAnswer: { '@type': 'Answer', text: 'Quality anti-graffiti film is optically clear and virtually invisible on glass surfaces. On mirrors and polished metal, we use matte or satin finishes that match the substrate. After installation, protected surfaces look identical to unprotected ones.' } },
      { '@type': 'Question', name: 'How long does anti-graffiti film last before it needs replacement?', acceptedAnswer: { '@type': 'Answer', text: 'On undamaged surfaces, anti-graffiti film lasts 3-7 years before natural weathering requires replacement. When a graffiti event occurs, only the damaged film is replaced. High-traffic Phoenix locations typically replace film on specific panels 1-3 times per year while the majority of the installation stays in place.' } },
    ],
  };

  const applications = [
    { icon: Store,      title: 'Retail Storefronts',       body: 'Glass doors, sidelites, and display windows. High street-level exposure in Phoenix retail corridors. Film replacement vs. glass replacement saves $500-$2,000 per event.' },
    { icon: Train,      title: 'Transit & Municipal',      body: 'Bus shelters, light rail stations, public restrooms. High-frequency replacement program support. Valley Metro and municipal project experience.' },
    { icon: Building,   title: 'Commercial Buildings',     body: 'Lobby glass, elevator cabs, polished metal panels, restroom mirrors. Maintenance program coordination with facilities management.' },
    { icon: Shield,     title: 'ATM & Banking Surrounds',  body: 'ATM glass and surround panels. Polished metal protection. High-value target surfaces in unsupervised locations.' },
    { icon: RefreshCw,  title: 'Replacement Programs',     body: 'Ongoing film replacement contracts for high-frequency graffiti locations. Per-event dispatch or scheduled maintenance cycles.' },
    { icon: DollarSign, title: 'Cost Documentation',       body: 'Before/after cost reports for insurance claims and property management. ROI documentation for graffiti abatement programs.' },
  ];

  const projects = [
    { name: 'Valley Metro — Light Rail Stations', category: 'Municipal Transit — Phoenix Metro', scope: 'Anti-graffiti film program across Valley Metro light rail station glass and polished metal panels. High-frequency replacement program. Film absorbs tagging and scratching events — panels restored without glass replacement.', film: 'Clear sacrificial anti-graffiti', valueLabel: 'Client', value: 'Valley Metro' },
    { name: 'Phoenix Downtown Retail Corridor', category: 'Commercial Retail — Central Phoenix', scope: 'Anti-graffiti film on storefront glass for multiple downtown Phoenix retail tenants. Street-level glass protection in high foot-traffic corridor. Coordinated installation across multiple storefronts.', film: 'Clear anti-graffiti + safety film combo', valueLabel: 'Application', value: 'Multi-tenant retail corridor' },
    { name: 'AutoZone — Phoenix Metro Locations', category: 'National Retail — Phoenix', scope: 'Anti-graffiti and solar control film on AutoZone retail locations across Phoenix metro. Storefront glass protection in high-exposure retail strip locations.', film: 'Anti-graffiti + solar control', valueLabel: 'Client', value: 'AutoZone' },
    { name: 'Phoenix Municipal Restroom Facilities', category: 'Municipal — City of Phoenix', scope: 'Mirror protection film in Phoenix Parks and Recreation restroom facilities. Sacrificial film over mirrors prevents acid etching and permanent damage. Replacement program managed through facilities department.', film: 'Mirror-grade anti-graffiti', valueLabel: 'Client', value: 'City of Phoenix Parks' },
    { name: 'Scottsdale Old Town Commercial Properties', category: 'Commercial — Old Town Scottsdale', scope: 'Anti-graffiti film on ground-floor commercial glass in Old Town Scottsdale entertainment district. High foot-traffic nighttime environment. Film program installed for multiple property owners in the corridor.', film: 'Clear sacrificial glass film', valueLabel: 'Location', value: 'Old Town Scottsdale' },
  ];

  const costComparison = [
    { event: 'Spray paint tag on glass', withFilm: '$75-$200 film replacement', withoutFilm: '$400-$1,500 glass cleaning or replacement' },
    { event: 'Scratch/key damage on glass', withFilm: '$75-$200 film replacement', withoutFilm: '$300-$2,000 glass replacement' },
    { event: 'Acid etching on mirror', withFilm: '$100-$300 film replacement', withoutFilm: '$500-$3,000 mirror replacement' },
    { event: 'Tag on polished metal panel', withFilm: '$100-$250 film replacement', withoutFilm: '$800-$5,000 panel replacement' },
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
        { name: 'Solutions', path: '/solutions' },
        { name: 'Anti-Graffiti Film Phoenix', path: '/anti-graffiti-film-phoenix' },
      ]} />

      <main id="main-content" className="bg-slate-950 min-h-screen">

        <section className="relative min-h-[75vh] flex items-center pt-24 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img alt="Anti-graffiti window film Phoenix AZ" className="w-full h-full object-cover opacity-40" src={heroImageUrl} fetchpriority="high" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="max-w-4xl">
              <span className="inline-block px-4 py-1 bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-widest">Licensed • Bonded • ROC #{rocNumber}</span>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase leading-[0.85] tracking-tighter">Anti-Graffiti Film Phoenix AZ</h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">Sacrificial film protection for glass, mirrors, and polished metal. Replace film not glass. Valley Metro, AutoZone, City of Phoenix. ROC #{rocNumber}.</p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl">
                  <Link to="/contact">Get a Free Anti-Graffiti Quote</Link>
                </Button>
                <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all text-lg">(480) 788-1591</a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-green-600">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[{ stat: '$500-$2,000', label: 'Avg Glass Replacement Cost' }, { stat: '$75-$300', label: 'Film Replacement Cost' }, { stat: '80%+', label: 'Cost Savings Per Event' }, { stat: '700+', label: 'Projects Completed' }].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-black text-white">{s.stat}</div>
                  <div className="text-green-100 font-black text-xs uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">The Anti-Graffiti Film ROI Case</h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">Every graffiti event on unprotected glass in Phoenix creates a binary choice: pay for professional cleaning ($200-$500) or replace the glass ($300-$2,000+). Acid etching and deep scratching make cleaning impossible — glass replacement is the only option. Anti-graffiti film converts every graffiti event into a film replacement at 10-20% of glass replacement cost. For high-frequency locations — transit stations, downtown retail, municipal facilities — the film pays for itself on the first event. Arizona House of Film has installed anti-graffiti film programs for Valley Metro, City of Phoenix, and commercial property owners across the metro since 2017.</p>
          </div>
        </section>

        <section className="py-24 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">Anti-Graffiti Film vs. No Protection — Cost Per Event</h2>
              <div className="w-24 h-2 bg-green-500 mx-auto" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-800">
                    <th className="text-left p-4 text-green-400 font-black text-sm uppercase tracking-widest">Graffiti Event</th>
                    <th className="text-left p-4 text-green-400 font-black text-sm uppercase tracking-widest">With Anti-Graffiti Film</th>
                    <th className="text-left p-4 text-green-400 font-black text-sm uppercase tracking-widest">Without Protection</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-900' : 'bg-slate-800/50'}>
                      <td className="p-4 text-white font-medium text-sm">{row.event}</td>
                      <td className="p-4 text-green-400 font-black text-sm">{row.withFilm}</td>
                      <td className="p-4 text-red-400 font-black text-sm">{row.withoutFilm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">Verified Anti-Graffiti Projects — Phoenix AZ</h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto">Sample of completed anti-graffiti film installations from verified project history.</p>
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

        <section className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">Anti-Graffiti Film Applications — Phoenix</h2>
              <div className="w-24 h-2 bg-green-500 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((app, idx) => (
                <motion.div key={idx} whileHover={{ y: -4 }} className="bg-slate-900 border border-slate-800 hover:border-green-500/50 p-8 transition-all group">
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

        <section className="py-24 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">Anti-Graffiti Film Cost — Phoenix AZ</h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
              <p className="text-slate-400 text-lg font-medium max-w-3xl mx-auto">All projects are custom-quoted. These ranges reflect real installed costs from our Phoenix anti-graffiti jobs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[{ label: 'Single Storefront', range: '$400 - $1,200', note: '2-4 glass panels, standard retail storefront, clear sacrificial film' }, { label: 'Multi-Surface / Building', range: '$1,200 - $5,000', note: 'Glass, mirrors, polished metal — lobby, elevator, restroom, exterior' }, { label: 'Transit / Municipal Program', range: '$5,000 - $30,000+', note: 'Multi-location program, replacement contract, Valley Metro scale' }].map((c) => (
                <div key={c.label} className="bg-slate-800 border border-slate-700 p-8">
                  <div className="text-2xl font-black text-white mb-1">{c.range}</div>
                  <div className="text-green-400 font-black text-sm uppercase tracking-widest mb-3">{c.label}</div>
                  <div className="text-slate-400 text-sm leading-relaxed">{c.note}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm">We do not publish flat per-sq-ft rates — every anti-graffiti film project is custom-quoted after a free site assessment.</p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-950 uppercase tracking-tight mb-4">Anti-Graffiti Film FAQs — Phoenix</h2>
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
              <Link to="/security-window-film-phoenix" className="text-green-600 hover:underline">Security Window Film Phoenix</Link>
              {' · '}
              <Link to="/commercial-window-film-phoenix" className="text-green-600 hover:underline">Commercial Window Film Phoenix</Link>
              {' · '}
              <Link to="/safety-window-film" className="text-green-600 hover:underline">Safety Window Film</Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">Phoenix Anti-Graffiti Film Service Coverage</h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">We install anti-graffiti film across the full Phoenix metro — Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, and surrounding communities. Municipal, transit, commercial, and retail. Licensed, bonded, insured. ROC #{rocNumber}.</p>
          </div>
        </section>

        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">Get a Phoenix Anti-Graffiti Film Quote</h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">Free on-site assessment. We evaluate surface types, exposure risk, and recommend the right film spec and replacement program. Licensed ROC #{rocNumber}.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl">
                <Link to="/contact">Request Free Assessment</Link>
              </Button>
              <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all text-lg">(480) 788-1591</a>
            </div>
          </div>
        </section>

        <ContactFormSection />
      </main>
    </>
  );
};

export default AntiGraffitiPhoenix;
