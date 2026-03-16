import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { Link } from 'react-router-dom';
import { Sun, Shield, Eye, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';

export default function ResidentialWindowTintingQueenCreek() {
  const rocNumber = '314088';
  const pageTitle = 'Residential Window Tinting Queen Creek AZ | Licensed Installer | ROC #314088';
  const metaDescription = 'Residential window tinting in Queen Creek AZ. Ceramic, solar, and privacy window film for homes and new construction. Licensed ROC #314088. Free estimates.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/residential-window-tinting-queen-creek';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Window Tinting Queen Creek AZ',
    serviceType: 'Residential Window Film Installation',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://arizonahouseoffilm.com',
      name: 'Arizona House of Film',
    },
    areaServed: { '@type': 'City', name: 'Queen Creek', addressRegion: 'AZ' },
    description: metaDescription,
    url: canonicalUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you install residential window film in Queen Creek AZ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Arizona House of Film installs residential window tinting throughout Queen Creek and San Tan Valley for new construction and existing homes. Licensed ROC #314088. Call (480) 788-1591 for a free home estimate.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does home window tinting cost in Queen Creek?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Residential window film in Queen Creek runs $8–$18 per square foot installed. Most homes average $800–$2,500 depending on film type and window count. Ceramic film runs $13–$18/sq ft. Free on-site estimates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is window film recommended for new construction homes in Queen Creek?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes — especially for Queen Creek new builds with large window packages on south and west elevations. New construction glass is clean and smooth, making it ideal for film installation. Ceramic film from day one maximizes energy savings and UV protection throughout the home's life.",
        },
      },
      {
        '@type': 'Question',
        name: 'Does window film comply with HOA rules in Queen Creek communities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most Queen Creek HOAs allow ceramic and spectrally selective window film that maintains a natural glass appearance. We review HOA guidelines during your free estimate and specify films that meet exterior appearance requirements — no reflective or dark tints that would conflict with HOA standards.',
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
        { name: 'Residential Window Tinting Queen Creek', path: '/residential-window-tinting-queen-creek' },
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
                Residential Window Tinting Queen Creek AZ — Licensed Installer Since 2017
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Ceramic, solar, and privacy window film for Queen Creek homes and new construction. Heat rejection, UV protection, and HOA-compatible options. Licensed ROC #{rocNumber}.
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

        {/* RESIDENTIAL WINDOW TINTING SERVICES IN QUEEN CREEK AZ */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Residential Window Tinting Services in Queen Creek AZ
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mb-4">
              Queen Creek is one of the fastest-growing Southeast Valley communities — with extensive new construction, large-lot homes, and HOA-managed neighborhoods throughout. New builds with large window packages on south and west elevations face extreme Arizona solar exposure that heats interiors, spikes utility bills, fades furnishings, and degrades comfort from day one.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Arizona House of Film installs residential window tinting throughout Queen Creek and San Tan Valley — ceramic, solar control, privacy, decorative, and security film for new construction and existing homes. Licensed, bonded, insured — ROC #{rocNumber}. Free on-site estimates with glass assessment and film recommendations tailored to your home's orientation and needs.
            </p>
          </div>
        </section>

        {/* HOME WINDOW FILM QUEEN CREEK */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Home Window Film Queen Creek
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
                  Queen Creek homes face significant afternoon heat load — the Southeast Valley gets intense west-facing sun exposure. Nano-ceramic film rejects up to 84% of solar heat — reducing AC load, lowering utility bills, and eliminating uncomfortable hot zones in living rooms and bedrooms.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">UV Protection</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Residential window film blocks 99.9% of UV radiation — protecting hardwood floors, furniture, artwork, and window treatments from sun damage and fading. Critical for Queen Creek homes with large window packages and open floor plans.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">Privacy Film</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Daytime one-way privacy, frosted, and decorative film for Queen Creek homes. Popular for bathrooms, sidelights, front-door glass, and street-facing windows. See out while blocking visibility in — without blackout blinds.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">Safety & Security</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  8–12 mil safety film holds glass together on impact — protecting against break-ins, monsoon debris, and accidental breakage. Crystal clear with no tint or color shift. Popular for entry doors, sidelights, and ground-floor windows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WINDOW FILM FOR QUEEN CREEK NEW CONSTRUCTION */}
        <section className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Window Film for Queen Creek New Construction
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
            </div>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mx-auto mb-8">
              Queen Creek's rapid residential growth means new homes going up throughout the community. New construction glass is clean and smooth — ideal for window film installation. Installing ceramic film from day one maximizes energy savings and UV protection throughout the home's life, and eliminates the need to retrofit later.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { label: 'Ceramic Solar Film', range: '$13–$18 / sq ft', desc: 'Maximum heat rejection. HOA-safe neutral appearance. Lifetime warranty. Best for south and west glass.' },
                { label: 'Standard Solar Film', range: '$8–$12 / sq ft', desc: 'Good heat and UV rejection at lower cost. Slight exterior tint. Suitable for non-HOA or flexible HOA homes.' },
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
              All pricing is per square foot installed. Most Queen Creek homes average $800–$2,500 total. Free on-site estimates.
            </p>
          </div>
        </section>

        {/* HOA-COMPATIBLE FILM QUEEN CREEK */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              HOA-Compatible Film Queen Creek
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mb-4">
              Most Queen Creek communities are HOA-managed with exterior appearance restrictions. We specify ceramic and spectrally selective films that maintain a natural glass appearance with exterior reflectance under 15% — no reflective or dark tints that would conflict with HOA standards.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              We review your HOA guidelines during the free estimate and provide manufacturer spec sheets documenting reflectivity and appearance properties. Licensed ROC #{rocNumber} — full accountability for every installation.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-950 uppercase tracking-tight mb-4">
                Residential Window Tinting FAQs — Queen Creek
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
              We serve residential properties throughout Queen Creek, San Tan Valley, and the Southeast Valley — including Gilbert, Chandler, Mesa, Apache Junction, and the full Phoenix metro. Same-day estimates available for most Queen Creek locations. Licensed, bonded, insured. ROC #{rocNumber}.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Queen Creek Residential Window Tinting Quote
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
