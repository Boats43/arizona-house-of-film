import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { Link } from 'react-router-dom';
import { Building, Shield, Sun, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';
import EstimatorCTA from '../../components/EstimatorCTA';

export default function CommercialWindowTintingTempe() {
  const rocNumber = '314088';
  const pageTitle = 'Commercial Window Tinting Tempe AZ | Licensed Installer | ROC #314088';
  const metaDescription = 'Commercial window tinting in Tempe AZ. Solar control, security, and decorative film for offices, retail, and ASU-area properties. Licensed ROC #314088. Free estimates.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/commercial-window-tinting-tempe';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you install commercial window film in Tempe AZ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Arizona House of Film installs commercial window tinting throughout Tempe for office buildings, retail centers, restaurants, hotels, and ASU-area commercial properties. Licensed ROC #314088. Call (480) 788-1591 for a free commercial estimate.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does commercial window tinting cost in Tempe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Commercial window film in Tempe is quoted by scope. Small retail or restaurant projects start around $3,500. Larger office or mixed-use buildings run $15,000+. Free estimates with NFRC documentation provided.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you install window film on mixed-use and retail buildings in Tempe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We install solar control, decorative, privacy, and security window film for mixed-use, retail, restaurant, and hospitality properties throughout Tempe. Licensed commercial contractor ROC #314088.',
        },
      },
      {
        '@type': 'Question',
        name: "Does commercial window film help with Tempe's heat near the Town Lake?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Properties near Tempe Town Lake face significant solar heat load from east and west water reflections in addition to direct solar. Spectrally selective and nano-ceramic films reduce HVAC load, improve occupant comfort, and qualify for SRP Business Solutions rebates.',
        },
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Window Tinting Tempe AZ',
    serviceType: 'Commercial Window Film Installation',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://arizonahouseoffilm.com',
      name: 'Arizona House of Film',
    },
    areaServed: { '@type': 'City', name: 'Tempe', addressRegion: 'AZ' },
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
        { name: 'Commercial Window Tinting Tempe', path: '/commercial-window-tinting-tempe' },
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
                Commercial Window Tinting Tempe AZ — Licensed Installer Since 2017
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Solar control, security, and decorative window film for Tempe offices, retail, restaurants, hotels, and ASU-area commercial properties. Licensed ROC #{rocNumber}.
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

        {/* COMMERCIAL WINDOW TINTING SERVICES IN TEMPE AZ */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Commercial Window Tinting Services in Tempe AZ
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mb-4">
              Tempe is one of the most commercially dense cities in the Phoenix metro — ASU campus area, Mill Avenue corridor, Tempe Town Lake, and the light rail corridor drive a high concentration of retail, hospitality, office, and mixed-use properties. All face extreme Arizona solar exposure that degrades interiors, overloads HVAC, and drives up operating costs.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Arizona House of Film provides licensed commercial window tinting throughout Tempe — from restaurant storefronts on Mill Avenue to multi-story office buildings along the 101/202 corridor. We install solar control, security, decorative, and privacy film for every commercial property type. Licensed, bonded, insured — ROC #{rocNumber}. For <Link to="/blog/commercial-performance-window-film-phoenix" className="text-green-400 hover:text-green-300 underline">performance film for Tempe offices</Link>, see our Phoenix metro guide.
            </p>
          </div>
        </section>

        {/* SOLAR CONTROL FOR TEMPE OFFICE AND RETAIL */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Solar Control for Tempe Office and Retail
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
                  Tempe office buildings and retail along the Town Lake corridor face extreme solar heat gain amplified by water reflections. Spectrally selective and nano-ceramic films reject 50–80% of solar heat — reducing HVAC load and equalizing hot zones throughout interiors.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">Glare Reduction</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Restaurants, cafes, and retail storefronts along Mill Avenue face severe afternoon glare that drives customers away from window seating. Solar control film eliminates glare while preserving natural daylight and street visibility.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Building className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">Mixed-Use Buildings</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Tempe's growing mixed-use development market requires flexible film solutions — solar control for upper-floor offices, decorative and privacy film for ground-floor retail, and security film for building entries. We specify and install all film types in coordinated projects.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">SRP Rebates</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Qualifying commercial window film installations in Tempe meet SRP Business Solutions rebate requirements. We provide NFRC-rated data sheets and assist with rebate applications — reducing net project cost for Tempe commercial properties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ASU-AREA COMMERCIAL WINDOW FILM */}
        <section className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                ASU-Area Commercial Window Film
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
            </div>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mx-auto mb-8">
              The ASU campus area drives a dense cluster of commercial, retail, restaurant, and hospitality properties that all face high foot traffic and extreme solar exposure. Window film serves multiple functions in this market — solar heat rejection for restaurants and retail, privacy for medical and professional offices, security for ground-floor storefronts, and decorative film for branding and wayfinding.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { label: 'Restaurant & Hospitality', desc: 'Solar control and decorative film for restaurants, cafes, bars, and hotels near ASU and Mill Avenue. Reduce heat and glare while maintaining street appeal.' },
                { label: 'Retail & Mixed-Use', desc: 'Security, solar, and decorative film for ground-floor retail in mixed-use developments along the light rail corridor and University Drive.' },
                { label: 'Professional Office', desc: 'Solar control, privacy, and Casper Cloaking film for professional offices, co-working spaces, and medical facilities in the ASU innovation district.' },
              ].map((item) => (
                <div key={item.label} className="bg-slate-900 border border-slate-800 p-8">
                  <h3 className="text-base font-black text-white uppercase mb-3">{item.label}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECURITY AND PRIVACY FILM TEMPE */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Security and Privacy Film Tempe
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mb-4">
              Tempe retail and commercial properties face smash-and-grab, forced entry, and monsoon debris risks. Security window film holds shattered glass in place — delaying forced entry, reducing injury risk, and protecting inventory. Privacy film for conference rooms, patient areas, and HIPAA-sensitive zones provides visual separation without walls.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Casper Cloaking film is available for Tempe offices — switchable-privacy technology that renders screens opaque to outside viewers while maintaining in-room visibility. Ideal for co-working spaces and glass-walled conference rooms.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-950 uppercase tracking-tight mb-4">
                Commercial Window Tinting FAQs — Tempe
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
              <Link to="/window-tinting-tempe" className="text-green-600 hover:underline">Window Tinting Tempe</Link>
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
              We serve commercial properties throughout Tempe and the surrounding metro — including Scottsdale, Mesa, Chandler, Phoenix, and the full East Valley. Same-day estimates available for most Tempe locations. Licensed, bonded, insured. ROC #{rocNumber}.
            </p>
          </div>
        </section>

        <EstimatorCTA />

        {/* CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Tempe Commercial Window Tinting Quote
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
