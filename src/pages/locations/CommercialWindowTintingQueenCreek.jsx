import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { Link } from 'react-router-dom';
import { Building, Shield, Sun, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';

export default function CommercialWindowTintingQueenCreek() {
  const rocNumber = '314088';
  const pageTitle = 'Commercial Window Tinting Queen Creek AZ | Licensed Installer | ROC #314088';
  const metaDescription = 'Commercial window tinting in Queen Creek AZ. Solar control, security, and decorative film for offices and retail. Licensed ROC #314088. Free estimates — (480) 788-1591.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/commercial-window-tinting-queen-creek';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you install commercial window film in Queen Creek AZ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Arizona House of Film installs commercial window tinting throughout Queen Creek and the San Tan Valley for office buildings, retail centers, and medical facilities. Licensed ROC #314088. Call (480) 788-1591 for a free estimate.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does commercial window tinting cost in Queen Creek?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Commercial window film in Queen Creek is quoted by scope. Small office or medical projects start around $3,500. Larger commercial perimeters run $15,000+. Free estimates with NFRC documentation provided.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you serve new commercial construction in Queen Creek?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We install window film on new commercial construction throughout Queen Creek and San Tan Valley. We coordinate with general contractors and building management for phased installations on new builds. Licensed ROC #314088.',
        },
      },
      {
        '@type': 'Question',
        name: 'What commercial window film do you recommend for Queen Creek properties?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For Queen Creek commercial properties we recommend spectrally selective solar control film for east and west-facing glass — the Southeast Valley gets significant afternoon heat load. All specifications include NFRC documentation for SRP rebate applications.',
        },
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Window Tinting Queen Creek AZ',
    serviceType: 'Commercial Window Film Installation',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://arizonahouseoffilm.com',
      name: 'Arizona House of Film',
    },
    areaServed: { '@type': 'City', name: 'Queen Creek', addressRegion: 'AZ' },
    description: metaDescription,
    url: canonicalUrl,
  };

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
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Commercial Window Tinting', path: '/commercial-window-tinting' },
        { name: 'Commercial Window Tinting Queen Creek', path: '/commercial-window-tinting-queen-creek' },
      ]} />

      <main id="main-content" className="bg-slate-950 min-h-screen">

        {/* HERO */}
        <section className="relative flex items-center pt-24 pb-16 bg-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-1 bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-widest">
                Licensed • Bonded • ROC #{rocNumber}
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase leading-[0.85] tracking-tighter">
                Commercial Window Tinting Queen Creek AZ — Licensed Installer Since 2017
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Solar control, security, and decorative window film for Queen Creek offices, retail centers, medical facilities, and new commercial construction. Licensed ROC #{rocNumber}.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl">
                  <Link to="/contact">Get a Commercial Quote</Link>
                </Button>
                <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all text-lg">
                  (480) 788-1591
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* COMMERCIAL WINDOW TINTING SERVICES IN QUEEN CREEK AZ */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Commercial Window Tinting Services in Queen Creek AZ
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mb-4">
              Queen Creek is one of the fastest-growing communities in the Southeast Valley with significant new commercial development — the Ellsworth Road corridor, San Tan Valley area, and expanding retail, medical, and office buildout. New construction and existing commercial properties alike face extreme Arizona solar exposure that degrades interiors, overloads HVAC, and drives up operating costs.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Arizona House of Film provides licensed commercial window tinting throughout Queen Creek and San Tan Valley — from new construction to existing building retrofits. We install solar control, security, decorative, and privacy film for every commercial property type in the Queen Creek market. Licensed, bonded, insured — ROC #{rocNumber}.
            </p>
          </div>
        </section>

        {/* SOLAR CONTROL FOR QUEEN CREEK OFFICE AND RETAIL */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Solar Control for Queen Creek Office and Retail
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Sun className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">Heat Rejection</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Queen Creek commercial buildings along the Ellsworth Road corridor and Rittenhouse Road face extreme east-west solar exposure — the Southeast Valley gets significant afternoon heat load. Spectrally selective and nano-ceramic films reject 50–80% of solar heat without darkening interiors.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">Glare Reduction</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Conference rooms, medical offices, and open-plan workspaces suffer from screen glare and occupant discomfort. Solar control film eliminates glare while maintaining natural daylight — improving productivity without blinds or shades.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Building className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">Energy Rebates</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Qualifying commercial window film installations in Queen Creek meet SRP energy efficiency rebate requirements. We provide NFRC-rated data sheets and assist with rebate applications — documenting projected energy savings for your building.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">UV Protection</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Commercial solar film blocks 99%+ of UV radiation — protecting furnishings, flooring, merchandise, and medical equipment from sun damage. Critical for Queen Creek properties with south and west exposure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECURITY FILM FOR QUEEN CREEK COMMERCIAL */}
        <section className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Security Film for Queen Creek Commercial
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
            </div>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mx-auto mb-8">
              Queen Creek retail centers and commercial storefronts along Ellsworth Road and the San Tan Valley corridor face smash-and-grab, forced entry, and storm damage risks. Security window film holds shattered glass in place — delaying forced entry, reducing injury risk, and protecting inventory.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { label: 'Smash-and-Grab Deterrence', desc: '8–14 mil security film holds glass in frame after impact — critical delay for retail with high-value inventory.' },
                { label: 'Storm & Debris Protection', desc: 'Monsoon-driven debris and wind loads shatter unprotected glass. Security film keeps shards contained.' },
                { label: 'New Construction', desc: 'Security film specified during new construction for Queen Creek commercial, medical, and retail developments. Coordination with GCs available.' },
              ].map((item) => (
                <div key={item.label} className="bg-slate-900 border border-slate-800 p-8">
                  <h3 className="text-base font-black text-white uppercase mb-3">{item.label}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW CONSTRUCTION COMMERCIAL FILM QUEEN CREEK */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              New Construction Commercial Film Queen Creek
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mb-4">
              Queen Creek's rapid commercial growth means new buildings going up throughout the Ellsworth corridor and San Tan Valley. We install window film on new commercial construction — coordinating with general contractors and building management for phased installations on new builds. Solar control film specified during construction eliminates the need for costly retrofits later.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              We also install decorative, privacy, and branded film for new Queen Creek commercial properties — frosted partitions, conference room privacy, HIPAA-compliant medical zones, and custom branding for retail storefronts. Licensed ROC #{rocNumber}.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-950 uppercase tracking-tight mb-4">
                Commercial Window Tinting FAQs — Queen Creek
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
              <Link to="/commercial-window-tinting" className="text-green-600 hover:underline">Commercial Window Tinting</Link>
              {' · '}
              <Link to="/commercial-window-film-phoenix" className="text-green-600 hover:underline">Phoenix Commercial</Link>
              {' · '}
              <Link to="/window-tinting-queen-creek" className="text-green-600 hover:underline">Window Tinting Queen Creek</Link>
            </div>
          </div>
        </section>

        {/* SERVICE AREA */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Service Area
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              We serve commercial properties throughout Queen Creek, San Tan Valley, and the Southeast Valley — including Gilbert, Chandler, Mesa, Apache Junction, and the full Phoenix metro. Same-day estimates available for most Queen Creek locations. Licensed, bonded, insured. ROC #{rocNumber}.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Queen Creek Commercial Window Tinting Quote
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment. Custom specification for your building type, glass orientation, and performance requirements. Licensed ROC #{rocNumber}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl">
                <Link to="/contact">Request Commercial Quote</Link>
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
}
