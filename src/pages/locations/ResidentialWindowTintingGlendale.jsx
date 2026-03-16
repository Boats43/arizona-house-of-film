import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { Link } from 'react-router-dom';
import { Sun, Shield, Eye, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';

export default function ResidentialWindowTintingGlendale() {
  const rocNumber = '314088';
  const pageTitle = 'Residential Window Tinting Glendale AZ | Licensed Installer | ROC #314088';
  const metaDescription = 'Residential window tinting in Glendale AZ. Ceramic, solar, and privacy window film for homes. Licensed ROC #314088. Free estimates — (480) 788-1591.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/residential-window-tinting-glendale';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Window Tinting Glendale AZ',
    serviceType: 'Residential Window Film Installation',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://arizonahouseoffilm.com',
      name: 'Arizona House of Film',
    },
    areaServed: { '@type': 'City', name: 'Glendale', addressRegion: 'AZ' },
    description: metaDescription,
    url: canonicalUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you install residential window film in Glendale AZ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Arizona House of Film installs residential window tinting throughout Glendale for both older and newer homes. Licensed ROC #314088. Call (480) 788-1591 for a free home estimate.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does home window tinting cost in Glendale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Residential window film in Glendale runs $8–$18 per square foot installed. Most homes average $800–$2,500 depending on film type and window count. Free on-site estimates — call (480) 788-1591.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can window film be installed on older single-pane windows in Glendale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Single-pane windows are actually ideal for window film — lower thermal stress risk than dual-pane. Ceramic and carbon films install cleanly on single-pane glass and provide significant heat rejection for older Glendale homes.',
        },
      },
      {
        '@type': 'Question',
        name: 'What window film do you recommend for Glendale homes near the Cardinals stadium area?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For Glendale homes in the Westgate and stadium corridor area we recommend nano-ceramic film for maximum heat rejection on west-facing glass. The area faces intense afternoon sun exposure from the west — ceramic film eliminates the heat without darkening rooms.',
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
        { name: 'Residential Window Tinting Glendale', path: '/residential-window-tinting-glendale' },
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
                Residential Window Tinting Glendale AZ — Licensed Installer Since 2017
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Ceramic, solar, and privacy window film for Glendale homes. Heat rejection, UV protection, and options for both older single-pane and newer dual-pane windows. Licensed ROC #{rocNumber}.
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

        {/* RESIDENTIAL WINDOW TINTING SERVICES IN GLENDALE AZ */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Residential Window Tinting Services in Glendale AZ
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mb-4">
              Glendale has a wide mix of residential neighborhoods — from established communities near Arrowhead Ranch and downtown Glendale to newer developments near the Westgate and Loop 101 corridor. Older homes with single-pane windows and newer builds with dual-pane glass all face extreme Arizona solar exposure that heats interiors, spikes utility bills, fades furnishings, and degrades comfort.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Arizona House of Film installs residential window tinting throughout Glendale — ceramic, solar control, privacy, decorative, and security film for every home type. Licensed, bonded, insured — ROC #{rocNumber}. Free on-site estimates with glass assessment and film recommendations tailored to your home's orientation and needs.
            </p>
          </div>
        </section>

        {/* HOME WINDOW FILM GLENDALE */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Home Window Film Glendale
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
                  Glendale homes with south and west-facing glass experience extreme solar heat gain. The Westgate and stadium corridor area faces especially intense afternoon sun. Nano-ceramic film rejects up to 84% of solar heat — reducing AC load, lowering utility bills, and eliminating uncomfortable hot zones.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">UV Protection</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Residential window film blocks 99.9% of UV radiation — protecting hardwood floors, furniture, artwork, and window treatments from sun damage and fading. Critical for Glendale homes with large windows and open floor plans.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">Privacy Film</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Daytime one-way privacy, frosted, and decorative film for Glendale homes. Popular for bathrooms, sidelights, front-door glass, and street-facing windows. See out while blocking visibility in — without blackout blinds.
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

        {/* BEST WINDOW FILM FOR GLENDALE HOMES */}
        <section className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Best Window Film for Glendale Homes
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
            </div>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mx-auto mb-8">
              Nano-ceramic film is our top recommendation for Glendale homes. It rejects up to 84% of solar heat, blocks 99.9% UV, and does not interfere with GPS, WiFi, or cell signals — unlike older metallic films. Ceramic film maintains a natural glass appearance from both inside and outside, making it compatible with most Glendale HOA requirements.
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
              All pricing is per square foot installed. Most Glendale homes average $800–$2,500 total. Free on-site estimates.
            </p>
          </div>
        </section>

        {/* WINDOW FILM FOR OLDER AND NEWER GLENDALE HOMES */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Window Film for Older and Newer Glendale Homes
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mb-4">
              Glendale has a mix of older single-pane homes near downtown and newer dual-pane construction in Arrowhead Ranch and north Glendale. Single-pane windows are actually ideal for window film — lower thermal stress risk than dual-pane, and ceramic or carbon films install cleanly on single-pane glass with significant heat rejection.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              For newer dual-pane homes we assess glass type before installation and specify ceramic or spectrally selective films rated for dual-pane use in Arizona's high thermal load conditions. We review your specific glass and recommend the right film — no guesswork. Licensed ROC #{rocNumber}.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-950 uppercase tracking-tight mb-4">
                Residential Window Tinting FAQs — Glendale
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
              <Link to="/window-tinting-glendale" className="text-green-600 hover:underline">Window Tinting Glendale</Link>
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
              We serve residential properties throughout Glendale and the West Valley — including Peoria, Surprise, Avondale, Tolleson, and the full Phoenix metro. Same-day estimates available for most Glendale locations. Licensed, bonded, insured. ROC #{rocNumber}.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Glendale Residential Window Tinting Quote
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment. We evaluate your glass type, orientation, and film compatibility — then recommend the right spec. ROC #{rocNumber}.
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
