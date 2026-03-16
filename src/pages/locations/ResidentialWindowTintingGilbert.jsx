import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { Link } from 'react-router-dom';
import { Sun, Shield, Eye, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';

export default function ResidentialWindowTintingGilbert() {
  const rocNumber = '314088';
  const pageTitle = 'Residential Window Tinting Gilbert AZ | Licensed Installer | ROC #314088';
  const metaDescription = 'Residential window tinting in Gilbert AZ. Ceramic, solar, and privacy window film for homes. Licensed ROC #314088. Free estimates — (480) 788-1591.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/residential-window-tinting-gilbert';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Window Tinting Gilbert AZ',
    serviceType: 'Residential Window Film Installation',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://arizonahouseoffilm.com',
      name: 'Arizona House of Film',
    },
    areaServed: { '@type': 'City', name: 'Gilbert', addressRegion: 'AZ' },
    description: metaDescription,
    url: canonicalUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you install residential window film in Gilbert AZ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Arizona House of Film installs residential window tinting throughout Gilbert including new construction and HOA communities. Licensed ROC #314088. Call (480) 788-1591 for a free home estimate.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is window film approved for Gilbert HOA communities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many Gilbert HOAs — including Power Ranch, Val Vista Lakes, and Trilogy communities — allow ceramic window film that maintains natural glass appearance. We review your HOA guidelines during the free estimate and specify approved films.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does home window tinting cost in Gilbert?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Residential window film in Gilbert runs $8–$18 per square foot installed. Most homes average $800–$2,500. Premium ceramic film runs $13–$18/sq ft. Free on-site estimates — call (480) 788-1591.',
        },
      },
      {
        '@type': 'Question',
        name: 'What window film do you recommend for new construction homes in Gilbert?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For Gilbert new construction we specify nano-ceramic film — it installs cleanly on new glass without adhesive issues and provides the maximum heat rejection and UV protection from day one. Does not affect builder warranties on dual-pane glass when correctly specified.',
        },
      },
    ],
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
        { name: 'Residential Window Tinting', path: '/residential-window-tinting' },
        { name: 'Residential Window Tinting Gilbert', path: '/residential-window-tinting-gilbert' },
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
                Residential Window Tinting Gilbert AZ — Licensed Installer Since 2017
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Ceramic, solar, and privacy window film for Gilbert homes. HOA-compatible options for Power Ranch, Val Vista Lakes, Trilogy, and all Gilbert communities. Licensed ROC #{rocNumber}.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl">
                  <Link to="/contact">Get Free Home Quote</Link>
                </Button>
                <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all text-lg">
                  (480) 788-1591
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* RESIDENTIAL WINDOW TINTING SERVICES IN GILBERT AZ */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Residential Window Tinting Services in Gilbert AZ
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mb-4">
              Gilbert is one of the fastest-growing East Valley suburbs with extensive new construction and established HOA communities — Power Ranch, Val Vista Lakes, Trilogy at Power Ranch, Seville, and dozens more. New construction homes ship with builder-grade glass that allows significant solar heat gain. Established homes face the same challenge with aging windows and no film protection.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Arizona House of Film installs residential window tinting throughout Gilbert — ceramic, solar control, privacy, decorative, and security film for both new and existing homes. We verify HOA compliance before every installation and specify films optimized for Gilbert's glass types and solar exposure. Licensed, bonded, insured — ROC #{rocNumber}.
            </p>
          </div>
        </section>

        {/* HOME WINDOW FILM GILBERT */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Home Window Film Gilbert
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Sun className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">Solar Heat Rejection</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Gilbert homes — especially new construction with large windows — face extreme solar heat gain on south and west elevations. Nano-ceramic film rejects up to 84% of solar heat without darkening glass, reducing AC load and utility bills from the first day.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">UV Protection</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Residential window film blocks 99.9% of UV radiation — protecting new flooring, furniture, and finishes from sun damage. Especially important for Gilbert new builds where homeowners want to protect their investment from day one.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">Privacy Film</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Daytime one-way privacy, frosted, and decorative film for Gilbert homes. Popular for bathrooms, sidelights, and street-facing windows — especially in newer communities with close lot spacing where privacy from neighbors is essential.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">New Construction Film</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Nano-ceramic film installs cleanly on new glass without adhesive issues and provides maximum heat rejection and UV protection from day one. Does not affect builder warranties on dual-pane glass when correctly specified. Ideal for Gilbert new builds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BEST WINDOW FILM FOR GILBERT HOMES */}
        <section className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Best Window Film for Gilbert Homes
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
            </div>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mx-auto mb-8">
              For Gilbert homes — especially new construction — we recommend nano-ceramic film. It delivers the highest heat rejection available without metallic content, maintains a natural glass appearance for HOA compliance, and does not interfere with GPS, WiFi, or cell signals. For established homes with older glass, we assess compatibility before specifying any film.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { label: 'Ceramic Solar Film', range: '$13–$18 / sq ft', desc: 'Maximum heat rejection. HOA-safe. Lifetime warranty. Ideal for new construction and HOA communities.' },
                { label: 'Standard Solar Film', range: '$8–$12 / sq ft', desc: 'Effective heat and UV rejection at lower cost. Suitable for non-HOA homes or budget-conscious projects.' },
                { label: 'Privacy / Frosted Film', range: '$8–$12 / sq ft', desc: 'Bathroom, sidelight, and entry glass. Diffused natural light with full daytime privacy.' },
              ].map((item) => (
                <div key={item.label} className="bg-slate-900 border border-slate-800 p-8">
                  <div className="text-xl font-black text-white mb-1">{item.range}</div>
                  <h3 className="text-green-400 font-black text-sm uppercase tracking-widest mb-3">{item.label}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm mt-6">
              Most Gilbert homes average $800–$2,500 total. Free on-site estimates — call (480) 788-1591.
            </p>
          </div>
        </section>

        {/* HOA-COMPATIBLE FILM GILBERT */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              HOA-Compatible Film Gilbert
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mb-4">
              Gilbert HOAs — including Power Ranch, Val Vista Lakes, Trilogy, Seville, and Agritopia — typically restrict exterior reflectivity and prohibit metallic or mirror-finish films. We specify non-metallic ceramic films with documented exterior reflectance under HOA thresholds, maintaining the natural glass appearance your community requires.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Every Gilbert residential installation includes pre-installation HOA spec verification. We provide manufacturer documentation to your HOA management company on request. Licensed ROC #{rocNumber} — full accountability.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-950 uppercase tracking-tight mb-4">
                Residential Window Tinting FAQs — Gilbert
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
              <Link to="/residential-window-tinting" className="text-green-600 hover:underline">Residential Window Tinting</Link>
              {' · '}
              <Link to="/residential-window-tinting-phoenix" className="text-green-600 hover:underline">Phoenix Residential</Link>
              {' · '}
              <Link to="/window-tinting-gilbert" className="text-green-600 hover:underline">Window Tinting Gilbert</Link>
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
              We serve residential properties throughout Gilbert and the East Valley — including Chandler, Mesa, Queen Creek, San Tan Valley, and the full Phoenix metro. Same-day estimates available for most Gilbert locations. Licensed, bonded, insured. ROC #{rocNumber}.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Gilbert Residential Window Tinting Quote
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment. We evaluate your glass orientation, HOA requirements, and film compatibility — then recommend the right spec. ROC #{rocNumber}.
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

        <ContactFormSection />
      </main>
    </>
  );
}
