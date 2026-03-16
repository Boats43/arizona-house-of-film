import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { Link } from 'react-router-dom';
import { Building, Shield, Sun, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';

export default function CommercialWindowTintingChandler() {
  const rocNumber = '314088';
  const pageTitle = 'Commercial Window Tinting Chandler AZ | Licensed Installer | ROC #314088';
  const metaDescription = 'Commercial window tinting in Chandler AZ. Solar control, security, and decorative film for offices and retail. Licensed ROC #314088. Free estimates — (480) 788-1591.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/commercial-window-tinting-chandler';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you install commercial window film in Chandler AZ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Arizona House of Film installs commercial window tinting throughout Chandler for office buildings, tech campuses, retail centers, and medical facilities. Licensed ROC #314088. Call (480) 788-1591 for a free commercial estimate.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does commercial window tinting cost in Chandler?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Commercial window film in Chandler is quoted by scope and square footage. Small office projects start around $3,500. Large commercial perimeters — tech campuses, Class A office — run $15,000–$45,000+. Free estimates with NFRC documentation provided.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you serve corporate and tech campus buildings in Chandler?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We install solar control, security, decorative, and privacy window film for corporate office buildings and tech campuses in Chandler. Licensed commercial contractor ROC #314088. We coordinate with building management and general contractors for phased installations.',
        },
      },
      {
        '@type': 'Question',
        name: 'What window film is recommended for Chandler Class A office buildings?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For Class A office buildings in Chandler we specify LLumar commercial spectrally selective or Solar Gard Panorama series — both deliver aggressive SHGC reduction with high VLT, maintaining natural light for open-plan offices while qualifying for SRP Business Solutions rebates.',
        },
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Window Tinting Chandler AZ',
    serviceType: 'Commercial Window Film Installation',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://arizonahouseoffilm.com',
      name: 'Arizona House of Film',
    },
    areaServed: { '@type': 'City', name: 'Chandler', addressRegion: 'AZ' },
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
        { name: 'Commercial Window Tinting Chandler', path: '/commercial-window-tinting-chandler' },
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
                Commercial Window Tinting Chandler AZ — Licensed Installer Since 2017
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Solar control, security, and decorative window film for Chandler offices, tech campuses, retail centers, and medical facilities. Wespac Construction — verified commercial GC partner. Licensed ROC #{rocNumber}.
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

        {/* COMMERCIAL WINDOW TINTING SERVICES IN CHANDLER AZ */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Commercial Window Tinting Services in Chandler AZ
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mb-4">
              Chandler is a major tech corridor in the Phoenix metro — home to Intel, PayPal, Wells Fargo campus operations, and a dense concentration of Class A office, corporate campus, retail, and medical properties. The demand for commercial window film in Chandler is driven by large glass facades, aggressive solar exposure, and corporate energy efficiency mandates.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Arizona House of Film provides licensed commercial window tinting throughout Chandler — from single-suite professional offices to multi-building corporate campuses. Wespac Construction, a verified commercial general contractor operating in the Chandler corridor, is an AHOF partner. We install solar control, security, decorative, and privacy film for every commercial property type. Licensed, bonded, insured — ROC #{rocNumber}.
            </p>
          </div>
        </section>

        {/* SOLAR CONTROL FOR CHANDLER OFFICE AND TECH CAMPUS BUILDINGS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Solar Control for Chandler Office and Tech Campus Buildings
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
                  Chandler tech campus buildings along the Price Corridor and Loop 101 face extreme solar heat gain on east and west glass. Spectrally selective and nano-ceramic films reject 50–80% of solar heat while maintaining high visible light transmission — critical for open-plan offices and campus environments.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">Glare Reduction</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Large glass facades on Class A office buildings create severe screen glare and occupant discomfort. Solar control film eliminates glare while preserving natural daylight — improving productivity across large floor plates without blinds.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Building className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">SHGC Compliance</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Corporate campuses in Chandler often require documented SHGC (Solar Heat Gain Coefficient) improvement for energy code compliance and LEED certification. We provide NFRC-rated film specifications and COMcheck documentation for building compliance.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">SRP Rebates</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Qualifying commercial window film installations in Chandler meet SRP Business Solutions rebate requirements. We provide NFRC-rated data sheets and assist with rebate applications — reducing net project cost for Chandler commercial properties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECURITY FILM FOR CHANDLER RETAIL */}
        <section className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Security Film for Chandler Retail
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
            </div>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mx-auto mb-8">
              Chandler retail centers along Chandler Boulevard, Arizona Avenue, and the Chandler Fashion Center corridor face smash-and-grab, forced entry, and storm damage risks. Security window film holds shattered glass in place — delaying forced entry, reducing injury risk, and protecting inventory.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { label: 'Smash-and-Grab Deterrence', desc: '8–14 mil security film holds glass in frame after impact — critical delay for retail with high-value inventory.' },
                { label: 'Corporate Campus Security', desc: 'Security film for corporate lobbies, ground-floor glass, and sensitive areas. Phased installation coordinated with building management.' },
                { label: 'Blast Mitigation', desc: 'GSA-rated blast mitigation film available for government, institutional, and high-security Chandler properties.' },
              ].map((item) => (
                <div key={item.label} className="bg-slate-900 border border-slate-800 p-8">
                  <h3 className="text-base font-black text-white uppercase mb-3">{item.label}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DECORATIVE AND PRIVACY FILM CHANDLER */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Decorative and Privacy Film Chandler
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mb-4">
              Frosted, gradient, patterned, and branded decorative film for Chandler offices, tech campuses, medical facilities, and retail. Privacy film for conference rooms, patient areas, and HIPAA-sensitive zones. Custom-cut designs for branding, wayfinding, and code-compliant glass marking.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Casper Cloaking film is available for Chandler tech offices and corporate campuses — switchable-privacy technology that renders screens opaque to outside viewers while maintaining in-room visibility. Ideal for open-plan offices with glass-walled conference rooms.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-950 uppercase tracking-tight mb-4">
                Commercial Window Tinting FAQs — Chandler
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
              We serve commercial properties throughout Chandler and the East Valley — including Mesa, Gilbert, Tempe, Scottsdale, and the full Phoenix metro. Same-day estimates available for most Chandler locations. Licensed, bonded, insured. ROC #{rocNumber}.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Chandler Commercial Window Tinting Quote
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
