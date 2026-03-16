import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { Link } from 'react-router-dom';
import { Eye, Palette, Monitor, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';

export default function DecorativeWindowFilmScottsdale() {
  const rocNumber = '314088';
  const pageTitle = 'Decorative Window Film Scottsdale AZ | Licensed Installer | ROC #314088';
  const metaDescription = 'Decorative window film installation in Scottsdale AZ. Frosted, etched, Casper cloaking, and 600+ Solyx patterns. Licensed ROC #314088. Free estimates.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/decorative-window-film-scottsdale';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Decorative Window Film Scottsdale AZ',
    serviceType: 'Decorative Window Film Installation',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://arizonahouseoffilm.com',
      name: 'Arizona House of Film',
    },
    areaServed: { '@type': 'City', name: 'Scottsdale', addressRegion: 'AZ' },
    description: metaDescription,
    url: canonicalUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you install decorative window film in Scottsdale AZ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Arizona House of Film installs frosted, etched, Casper cloaking, and 600+ Solyx decorative patterns for residential and commercial properties throughout Scottsdale. Licensed ROC #314088. Call (480) 788-1591 for a free estimate.',
        },
      },
      {
        '@type': 'Question',
        name: 'What decorative window film options are available in Scottsdale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We install the full Solyx catalog — 600+ patterns including frosted, matte, rice paper, bamboo, linen, geometric, gradient, stained glass, and Casper cloaking. We carry pattern samples for on-site review during your free estimate.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does decorative window film cost in Scottsdale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Decorative window film in Scottsdale runs $10–$25 per square foot installed depending on pattern and complexity. Casper cloaking film runs $20–$35/sq ft. Most residential bathroom or entryway installations run $300–$800. Commercial conference room and office installations run $1,500–$6,000+.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can decorative film be removed without damaging glass in Scottsdale rentals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All decorative film installations are fully reversible — no adhesive residue and no glass damage on removal. This makes decorative film suitable for leased commercial spaces and rental properties throughout Scottsdale.',
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
        { name: 'Scottsdale', path: '/commercial-window-tinting-scottsdale' },
        { name: 'Decorative Window Film Scottsdale', path: '/decorative-window-film-scottsdale' },
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
                Decorative Window Film Scottsdale AZ — Licensed Installer Since 2017
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Frosted privacy film, etched glass film, Casper cloaking, and 600+ Solyx decorative patterns for Scottsdale homes and businesses. Licensed ROC #{rocNumber}.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl">
                  <Link to="/contact">Get Free Estimate</Link>
                </Button>
                <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all text-lg">
                  (480) 788-1591
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DECORATIVE WINDOW FILM SERVICES IN SCOTTSDALE AZ */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Decorative Window Film Services in Scottsdale AZ
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Arizona House of Film installs frosted privacy film, etched glass film, Casper cloaking film, and 600+ Solyx decorative patterns for residential and commercial properties throughout Scottsdale. From bathroom privacy film to conference room Casper installations to restaurant branding graphics, we specify and install every decorative film category. Licensed ROC #{rocNumber}.
            </p>
          </div>
        </section>

        {/* FROSTED AND PRIVACY FILM SCOTTSDALE */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Frosted and Privacy Film Scottsdale
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">Residential Privacy</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Frosted and etched glass film for Scottsdale home bathrooms, sidelights, entry doors, and street-facing windows. Diffused natural light with full privacy — without blackout blinds. Popular in North Scottsdale custom builds and DC Ranch community homes.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Building className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">Commercial Privacy</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Frosted and gradient privacy film for Scottsdale office conference rooms, medical patient areas, and HIPAA-sensitive zones. Custom-cut designs for branding, wayfinding, and ADA-compliant glass marking on interior partitions.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Palette className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">Patterned Film</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Rice paper, bamboo, linen, geometric, and abstract patterns from the full Solyx catalog. 600+ options available for residential and commercial applications. We carry samples for on-site review during your free estimate.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">Gradient Film</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Gradient privacy film transitions from opaque at the bottom to clear at the top — providing privacy at eye level while preserving natural light above. Popular for Scottsdale medical offices, spa environments, and luxury residential bathrooms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CASPER CLOAKING FILM SCOTTSDALE */}
        <section className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Casper Cloaking Film Scottsdale — Screen Privacy for Glass Offices
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
            </div>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mx-auto mb-8">
              Casper cloaking film is the premium specification for Scottsdale law firms, financial services, healthcare administration, and tech companies with glass-walled offices. It makes LED screens appear black from outside the glass while leaving screens fully visible from inside. Available in 8 Designtex patterns. We are an authorized Casper installer serving Scottsdale and North Scottsdale commercial properties.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { label: 'Law Firms', desc: 'Protect client data on screens visible through glass conference rooms and partner offices. Casper renders all LED/LCD screens opaque from outside the glass.' },
                { label: 'Financial Services', desc: 'Wealth management, banking, and financial advisory offices with sensitive portfolio data displayed on screens near glass partitions.' },
                { label: 'Healthcare Admin', desc: 'HIPAA-sensitive administrative offices with electronic health records visible on screens. Casper prevents screen visibility from hallways and common areas.' },
              ].map((item) => (
                <div key={item.label} className="bg-slate-900 border border-slate-800 p-8">
                  <h3 className="text-base font-black text-white uppercase mb-3">{item.label}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 600+ SOLYX DECORATIVE PATTERNS */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              600+ Solyx Decorative Patterns Available in Scottsdale
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mb-4">
              We install the full Solyx decorative film catalog — the industry's largest selection of architectural window film patterns. Categories include frosted and matte, rice paper and natural textures, bamboo and linen, geometric and modern, gradient and ombre, stained glass, and custom-printed graphics. Every pattern is available for residential and commercial installation in Scottsdale.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              We carry physical samples for on-site review during your free estimate. Interior designers, architects, and commercial tenants can request sample books for specification. All installations are fully reversible — no adhesive damage on removal.
            </p>
          </div>
        </section>

        {/* DECORATIVE FILM FOR SCOTTSDALE RESTAURANTS AND HOSPITALITY */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
                Decorative Film for Scottsdale Restaurants and Hospitality
              </h2>
              <p className="text-slate-700 text-base leading-relaxed font-medium mb-4">
                Scottsdale's restaurant and hospitality corridor — Old Town, Kierland, DC Ranch — uses decorative film for privacy partitions, branded entry glass, and patio enclosure panels. Solyx gradient, frosted, and stained glass patterns are standard specifications for restaurant and hotel interior design in Scottsdale.
              </p>
              <p className="text-slate-700 text-base leading-relaxed font-medium">
                Custom-printed graphics and branding film are available for Scottsdale restaurant entry doors, hostess partitions, and bar dividers. All installations are designed around your space and brand — we coordinate with interior designers and architects for specification-grade results.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-slate-950">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-4">
                Decorative Window Film FAQs — Scottsdale
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto" />
            </div>
            <div className="space-y-8">
              {faqSchema.mainEntity.map((q) => (
                <div key={q.name} className="border-b border-slate-800 pb-8">
                  <h3 className="text-lg font-black text-white mb-3 uppercase">{q.name}</h3>
                  <p className="text-slate-400 leading-relaxed">{q.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center text-slate-500 text-sm">
              Also see:{' '}
              <Link to="/decorative-window-films" className="text-green-500 hover:underline">Decorative Window Films</Link>
              {' · '}
              <Link to="/films/casper-cloaking" className="text-green-500 hover:underline">Casper Cloaking Film</Link>
              {' · '}
              <Link to="/commercial-window-tinting-scottsdale" className="text-green-500 hover:underline">Scottsdale Commercial</Link>
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
              We install decorative window film throughout Scottsdale — Old Town, North Scottsdale, DC Ranch, Gainey Ranch, McCormick Ranch, Kierland, and Paradise Valley. Same-day estimates available for most Scottsdale locations. Licensed, bonded, insured. ROC #{rocNumber}.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Scottsdale Decorative Film Quote
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site estimate with pattern samples. We bring the full Solyx catalog to your property. Licensed ROC #{rocNumber}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl">
                <Link to="/contact">Request Free Estimate</Link>
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
