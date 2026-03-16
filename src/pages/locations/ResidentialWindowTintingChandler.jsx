import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { Link } from 'react-router-dom';
import { Sun, Shield, Eye, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';

export default function ResidentialWindowTintingChandler() {
  const rocNumber = '314088';
  const pageTitle = 'Residential Window Tinting Chandler AZ | Licensed Installer | ROC #314088';
  const metaDescription = 'Residential window tinting in Chandler AZ. Ceramic, solar, and privacy window film for homes. Licensed ROC #314088. Free estimates — (480) 788-1591.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/residential-window-tinting-chandler';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Window Tinting Chandler AZ',
    serviceType: 'Residential Window Film Installation',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://arizonahouseoffilm.com',
      name: 'Arizona House of Film',
    },
    areaServed: { '@type': 'City', name: 'Chandler', addressRegion: 'AZ' },
    description: metaDescription,
    url: canonicalUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you install residential window film in Chandler AZ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Arizona House of Film installs residential window tinting throughout Chandler including HOA-managed communities. Licensed ROC #314088. Call (480) 788-1591 for a free home estimate.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is window film HOA-approved in Chandler communities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Many Chandler HOAs — including Ocotillo, Sun Lakes, and Fulton Ranch area communities — allow ceramic and spectrally selective window film that maintains a natural glass appearance. We review HOA guidelines during your free estimate and specify compliant films.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does home window tinting cost in Chandler?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Residential window film in Chandler runs $8–$18 per square foot installed. Most homes average $800–$2,500. Ceramic film runs $13–$18/sq ft. Free on-site estimates — call (480) 788-1591.',
        },
      },
      {
        '@type': 'Question',
        name: 'What window film is best for Chandler homes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nano-ceramic film is our primary recommendation for Chandler homes. West and south-facing windows in Chandler's master-planned communities benefit most — ceramic film rejects up to 84% solar heat without darkening glass or affecting exterior appearance for HOA compliance.",
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
        { name: 'Residential Window Tinting Chandler', path: '/residential-window-tinting-chandler' },
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
                Residential Window Tinting Chandler AZ — Licensed Installer Since 2017
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Ceramic, solar, and privacy window film for Chandler homes. HOA-compatible options for Ocotillo, Sun Lakes, Fulton Ranch, and all Chandler communities. Licensed ROC #{rocNumber}.
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

        {/* RESIDENTIAL WINDOW TINTING SERVICES IN CHANDLER AZ */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Residential Window Tinting Services in Chandler AZ
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mb-4">
              Chandler is one of the most HOA-dense residential markets in the Phoenix metro. Master-planned communities — Ocotillo, Sun Lakes, Fulton Ranch, Andersen Springs, and dozens more — enforce strict exterior appearance standards that make film selection critical. The wrong reflective or metallic film fails HOA review and must be removed at homeowner expense.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Arizona House of Film installs residential window tinting throughout Chandler — ceramic, solar control, privacy, decorative, and security film. We verify HOA compliance before every installation and specify films that meet appearance requirements while delivering maximum heat rejection. Licensed, bonded, insured — ROC #{rocNumber}.
            </p>
          </div>
        </section>

        {/* HOME WINDOW FILM CHANDLER */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Home Window Film Chandler
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
                  West and south-facing windows in Chandler master-planned communities absorb extreme solar heat during Arizona summers. Nano-ceramic film rejects up to 84% of solar heat without darkening glass — reducing AC load and utility bills while maintaining the natural appearance your HOA requires.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">UV Protection</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Residential window film blocks 99.9% of UV radiation — protecting hardwood floors, furniture, artwork, and window treatments from fading. Essential for Chandler homes with open floor plans and large windows facing south or west.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">Privacy Film</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Daytime one-way privacy, frosted, and decorative film for Chandler homes. Popular for bathrooms, sidelights, and street-facing windows — especially in communities with close lot spacing where privacy from neighbors is a priority.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">Safety & Security</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  8–12 mil safety film holds glass together on impact — protecting against break-ins, monsoon debris, and accidental breakage. Crystal clear with no tint. Popular for entry doors, sidelights, and ground-floor windows in Chandler homes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BEST WINDOW FILM FOR CHANDLER HOMES */}
        <section className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Best Window Film for Chandler Homes
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
            </div>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mx-auto mb-8">
              Nano-ceramic film is our primary recommendation for Chandler homes. It rejects up to 84% solar heat without darkening glass or affecting exterior appearance — making it the ideal choice for HOA-managed communities. No metallic content means no interference with GPS, WiFi, or cell signals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { label: 'Ceramic Solar Film', range: '$13–$18 / sq ft', desc: 'Maximum heat rejection. HOA-safe neutral appearance. Lifetime warranty. Best for Chandler master-planned communities.' },
                { label: 'Standard Solar Film', range: '$8–$12 / sq ft', desc: 'Effective heat and UV rejection. Slight exterior tint. Suitable for non-HOA or flexible-HOA Chandler homes.' },
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
              Most Chandler homes average $800–$2,500 total. Free on-site estimates — call (480) 788-1591.
            </p>
          </div>
        </section>

        {/* HOA-COMPATIBLE FILM FOR CHANDLER COMMUNITIES */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              HOA-Compatible Film for Chandler Communities
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mb-4">
              Chandler HOAs — including Ocotillo, Sun Lakes, Fulton Ranch, Andersen Springs, and Chandler Heights communities — typically restrict exterior reflectivity to under 15–20%. Metallic and reflective films fail compliance. We specify non-metallic ceramic films with documented exterior reflectance under HOA thresholds.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Every Chandler residential installation includes pre-installation HOA spec verification. We provide manufacturer documentation to your HOA management company on request. Licensed ROC #{rocNumber} — full accountability.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-950 uppercase tracking-tight mb-4">
                Residential Window Tinting FAQs — Chandler
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
              <Link to="/window-tinting-chandler" className="text-green-600 hover:underline">Window Tinting Chandler</Link>
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
              We serve residential properties throughout Chandler and the East Valley — including Gilbert, Mesa, Tempe, Scottsdale, and the full Phoenix metro. Same-day estimates available for most Chandler locations. Licensed, bonded, insured. ROC #{rocNumber}.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Chandler Residential Window Tinting Quote
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
