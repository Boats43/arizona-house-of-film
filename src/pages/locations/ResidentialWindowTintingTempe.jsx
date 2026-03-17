import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { Link } from 'react-router-dom';
import { Sun, Shield, Eye, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';
import EstimatorCTA from '../../components/EstimatorCTA';

export default function ResidentialWindowTintingTempe() {
  const rocNumber = '314088';
  const pageTitle = 'Residential Window Tinting Tempe AZ | Licensed Installer | ROC #314088';
  const metaDescription = 'Residential window tinting in Tempe AZ. Ceramic, solar, and privacy window film for homes and condos. Licensed ROC #314088. Free estimates — (480) 788-1591.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/residential-window-tinting-tempe';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Window Tinting Tempe AZ',
    serviceType: 'Residential Window Film Installation',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://arizonahouseoffilm.com',
      name: 'Arizona House of Film',
    },
    areaServed: { '@type': 'City', name: 'Tempe', addressRegion: 'AZ' },
    description: metaDescription,
    url: canonicalUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you install residential window film in Tempe AZ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Arizona House of Film installs residential window tinting throughout Tempe for single-family homes, condos, and apartments. Licensed ROC #314088. Call (480) 788-1591 for a free estimate.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can window film be installed in Tempe condos and apartments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Window film installs on the interior glass surface — no exterior access required. Most condo and apartment lease agreements permit interior window film installations. We confirm compatibility with your building management during the estimate process.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does home window tinting cost in Tempe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Residential window film in Tempe runs $8–$18 per square foot installed. Most homes and condos average $600–$2,000. Free on-site estimates — call (480) 788-1591.',
        },
      },
      {
        '@type': 'Question',
        name: 'What window film works best for Tempe homes near ASU?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For Tempe properties near ASU and the Town Lake corridor, we recommend nano-ceramic film for maximum heat rejection on south and west exposures. For condos requiring privacy film we specify frosted or one-way mirror film depending on floor level and orientation.',
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
        { name: 'Residential Window Tinting Tempe', path: '/residential-window-tinting-tempe' },
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
                Residential Window Tinting Tempe AZ — Licensed Installer Since 2017
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Ceramic, solar, and privacy window film for Tempe homes, condos, and apartments. ASU-area, Town Lake, and all Tempe neighborhoods. Licensed ROC #{rocNumber}.
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

        {/* RESIDENTIAL WINDOW TINTING SERVICES IN TEMPE AZ */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Residential Window Tinting Services in Tempe AZ
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mb-4">
              Tempe has a unique residential mix — established single-family neighborhoods, high-density condos and apartments near ASU and Mill Avenue, and newer townhome developments along the Town Lake and light rail corridors. Each property type faces the same Arizona solar challenge but requires different film solutions.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Arizona House of Film installs residential window tinting throughout Tempe — ceramic, solar control, privacy, decorative, and security film for single-family homes, condos, and apartments. Interior installation requires no exterior access, making it ideal for upper-floor condos and apartments. Licensed, bonded, insured — ROC #{rocNumber}.
            </p>
          </div>
        </section>

        {/* HOME WINDOW FILM TEMPE */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Home Window Film Tempe
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
                  Tempe homes and condos near the Town Lake corridor face amplified solar heat from both direct sun and water reflections. Nano-ceramic film rejects up to 84% of solar heat — reducing AC load, lowering utility bills, and eliminating hot zones near south and west-facing glass.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">UV Protection</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Residential window film blocks 99.9% of UV radiation — protecting floors, furniture, and artwork from sun damage and fading. Critical for Tempe properties with large windows and open floor plans that receive all-day sun exposure.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">Privacy Film</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Daytime one-way privacy, frosted, and decorative film for Tempe homes and condos. Popular for ground-floor units, street-facing windows, and bathrooms. Frosted and one-way mirror film provide visual separation without blackout blinds — maintaining natural light.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">Safety & Security</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  8–12 mil safety film holds glass together on impact — protecting against break-ins, monsoon debris, and accidental breakage. Crystal clear with no tint. Popular for entry doors, sliding glass doors, and ground-floor windows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WINDOW FILM FOR TEMPE CONDOS AND APARTMENTS */}
        <section className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Window Film for Tempe Condos and Apartments
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
            </div>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mx-auto mb-8">
              Tempe's high-density condo and apartment market near ASU, Mill Avenue, and Town Lake presents unique window film needs. Interior-applied film requires no exterior access — perfect for upper-floor units. Most condo and apartment lease agreements permit interior window film installations. We confirm compatibility with your building management during the estimate process.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { label: 'Condo Solar Film', desc: 'Nano-ceramic film for condos with large glass facades. Reduces heat without altering exterior appearance — critical for buildings with uniform appearance requirements.' },
                { label: 'Apartment Privacy Film', desc: 'Ground-floor and street-facing apartments benefit from one-way privacy or frosted film. See out during the day while blocking visibility in. No blackout blinds needed.' },
                { label: 'Upper-Floor Heat Control', desc: 'Upper-floor condos with west exposure face the worst heat gain. Ceramic film on these units delivers the highest comfort improvement and utility savings.' },
              ].map((item) => (
                <div key={item.label} className="bg-slate-900 border border-slate-800 p-8">
                  <h3 className="text-base font-black text-white uppercase mb-3">{item.label}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEST WINDOW FILM FOR TEMPE HOMES */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Best Window Film for Tempe Homes
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mb-4">
              For Tempe single-family homes we recommend nano-ceramic film — maximum heat rejection, 99.9% UV block, no signal interference, and a natural glass appearance. For condos near ASU and Town Lake requiring privacy, we specify frosted or one-way mirror film depending on floor level and window orientation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
              {[
                { label: 'Ceramic Solar Film', range: '$13–$18 / sq ft', desc: 'Maximum heat rejection. Natural appearance. Lifetime warranty. Best for south and west glass.' },
                { label: 'Standard Solar Film', range: '$8–$12 / sq ft', desc: 'Good heat and UV rejection at lower cost. Suitable for homes and condos with flexible appearance requirements.' },
                { label: 'Privacy / Frosted Film', range: '$8–$12 / sq ft', desc: 'Bathroom, sidelight, and ground-floor glass. Diffused natural light with full daytime privacy.' },
              ].map((item) => (
                <div key={item.label} className="bg-slate-800 border border-slate-700 p-8">
                  <div className="text-xl font-black text-white mb-1">{item.range}</div>
                  <h3 className="text-green-400 font-black text-sm uppercase tracking-widest mb-3">{item.label}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm mt-6">
              Most Tempe homes and condos average $600–$2,000 total. Free on-site estimates — call (480) 788-1591.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-950 uppercase tracking-tight mb-4">
                Residential Window Tinting FAQs — Tempe
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
              We serve residential properties throughout Tempe and the surrounding metro — including Scottsdale, Mesa, Chandler, Phoenix, and the full East Valley. Same-day estimates available for most Tempe locations. Licensed, bonded, insured. ROC #{rocNumber}.
            </p>
          </div>
        </section>

        <EstimatorCTA />

        {/* CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Tempe Residential Window Tinting Quote
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment. We evaluate your glass orientation, building requirements, and film compatibility — then recommend the right spec. ROC #{rocNumber}.
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
