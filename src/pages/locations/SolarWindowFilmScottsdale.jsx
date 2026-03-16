import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { Link } from 'react-router-dom';
import { Sun, Building, Home, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';

export default function SolarWindowFilmScottsdale() {
  const rocNumber = '314088';
  const pageTitle = 'Solar Window Film Scottsdale AZ | Licensed Installer | ROC #314088';
  const metaDescription = 'Solar window film installation in Scottsdale AZ. Nano-ceramic film blocks 84% solar heat. SRP rebate eligible. Licensed ROC #314088. Free estimates.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/solar-window-film-scottsdale';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Solar Window Film Scottsdale AZ',
    serviceType: 'Solar Window Film Installation',
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
        name: 'Do you install solar window film in Scottsdale AZ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Arizona House of Film installs nano-ceramic solar control window film for residential and commercial properties throughout Scottsdale. Licensed ROC #314088. Call (480) 788-1591 for a free estimate.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does solar window film cost in Scottsdale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Solar window film in Scottsdale runs $13–$18 per square foot installed for nano-ceramic film. Most Scottsdale homes average $1,500–$4,500 depending on window count and film specification. Premium Huper Optik and 3M Prestige specifications run at the higher end. Free on-site estimates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does solar window film qualify for SRP rebates in Scottsdale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Qualifying commercial solar window film installations in Scottsdale meet SRP Business Solutions rebate requirements. We provide NFRC-certified data sheets for rebate applications. Ask about qualifying films during your free estimate — call (480) 788-1591.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best solar window film for Scottsdale homes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "For Scottsdale homes leading nano-ceramic specifications for Scottsdale include 3M Prestige 70, Huper Optik Ceramic 40, and LLumar CTX depending on glass orientation and HOA requirements. All reject up to 84% solar heat, block 99.9% UV, maintain natural light, and carry HOA-safe exterior appearance. For Paradise Valley and North Scottsdale luxury properties, Huper Optik is our primary specification.",
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
        { name: 'Solar Window Film Scottsdale', path: '/solar-window-film-scottsdale' },
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
                Solar Window Film Scottsdale AZ — Licensed Installer Since 2017
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                Nano-ceramic solar film blocks 84% solar heat and 99.9% UV. SRP rebate-ready installations for Scottsdale homes and businesses. Licensed ROC #{rocNumber}.
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

        {/* SOLAR WINDOW FILM SERVICES IN SCOTTSDALE AZ */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Solar Window Film Services in Scottsdale AZ
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Arizona House of Film installs nano-ceramic solar control window film for residential and commercial properties throughout Scottsdale. Our films reject up to 84% of solar heat, block 99.9% of UV rays, and reduce annual cooling loads by $250–$725 for an average Scottsdale home. Licensed ROC #{rocNumber}. SRP rebate-ready installations.
            </p>
          </div>
        </section>

        {/* NANO-CERAMIC SOLAR FILM FOR SCOTTSDALE HOMES */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Nano-Ceramic Solar Film for Scottsdale Homes
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
            </div>
            <p className="text-slate-700 text-base leading-relaxed font-medium max-w-4xl mx-auto mb-8">
              Scottsdale homes face some of the highest solar heat loads in North America — particularly on south and west-facing glass. Nano-ceramic film rejects up to 84% of infrared heat without darkening glass or interfering with GPS, cell, or WiFi signals. For North Scottsdale and Paradise Valley luxury homes, top specifications for North Scottsdale and Paradise Valley luxury properties include Huper Optik Ceramic and 3M Prestige series — both provide maximum heat rejection with near-invisible exterior appearance critical for HOA compliance and view preservation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Sun className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">84% Heat Rejection</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Nano-ceramic film blocks up to 84% of total solar energy on south and west-facing glass — the primary heat gain surfaces on Scottsdale homes. Immediate comfort improvement and measurable utility savings from the first billing cycle.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Home className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">HOA-Safe Appearance</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Non-metallic ceramic films maintain a natural glass appearance with exterior reflectance under 15% — meeting the requirements of DC Ranch, McCormick Ranch, Gainey Ranch, Troon, and most Scottsdale HOAs. No mirror look. No signal interference.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Sun className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">99.9% UV Block</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Blocks 99.9% of UV radiation — protecting hardwood floors, furniture, artwork, and custom interiors from sun damage and fading. Critical investment protection for North Scottsdale and Paradise Valley luxury homes.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">Energy Savings</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Reduces annual cooling load by $250–$725 for an average Scottsdale home. Typical payback period of 18–36 months depending on window count and film specification. SRP energy efficiency rebates may further reduce net cost.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SOLAR FILM FOR SCOTTSDALE COMMERCIAL PROPERTIES */}
        <section className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Solar Film for Scottsdale Commercial Properties
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
            </div>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mx-auto mb-8">
              Scottsdale commercial properties along Scottsdale Road, the Airpark corridor, and Old Town face extreme solar heat gain that overloads HVAC systems, creates uncomfortable hot zones, and drives up operating costs. Solar window film is the highest-ROI energy improvement available — no window replacement, no construction, installed around your business schedule.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { label: 'Office Buildings', desc: 'Spectrally selective and nano-ceramic film for Class A offices along Scottsdale Road. Aggressive SHGC reduction with high VLT for open-plan environments.' },
                { label: 'Retail Storefronts', desc: 'Solar control film that rejects heat without darkening display areas. Protects merchandise from UV fading while maintaining visual merchandising clarity.' },
                { label: 'Medical & Professional', desc: 'Solar film for medical offices, dental practices, and professional buildings. Reduces patient discomfort and equipment heat exposure on south and west glass.' },
              ].map((item) => (
                <div key={item.label} className="bg-slate-900 border border-slate-800 p-8">
                  <h3 className="text-base font-black text-white uppercase mb-3">{item.label}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SRP REBATES */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              SRP Rebates for Solar Window Film in Scottsdale
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mb-4">
              Qualifying solar window film installations in Scottsdale meet SRP Business Solutions rebate requirements for commercial properties. We provide NFRC-certified data sheets required for rebate applications during your free estimate. Residential installations may also qualify depending on film specification and property type. Ask about current SRP rebate amounts during your estimate.
            </p>
          </div>
        </section>

        {/* BEST SOLAR FILM SPECIFICATIONS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                Best Solar Film Specifications for Scottsdale
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { label: 'Huper Optik Ceramic 40', range: '$15–$18 / sq ft', desc: 'Our primary specification for North Scottsdale and Paradise Valley luxury homes. Maximum heat rejection with near-invisible exterior. Lifetime residential warranty.' },
                { label: '3M Prestige 70', range: '$14–$17 / sq ft', desc: 'High VLT with aggressive heat rejection. Ideal for Scottsdale homes where maintaining natural light is the priority. 3M lifetime warranty.' },
                { label: 'LLumar CTX', range: '$13–$16 / sq ft', desc: 'Nano-ceramic film with strong heat rejection at a competitive price point. HOA-safe appearance. Manufacturer lifetime warranty.' },
              ].map((item) => (
                <div key={item.label} className="bg-slate-50 border-l-4 border-green-500 p-8">
                  <div className="text-xl font-black text-slate-950 mb-1">{item.range}</div>
                  <h3 className="text-green-600 font-black text-sm uppercase tracking-widest mb-3">{item.label}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm mt-6">
              All pricing is per square foot installed. Most Scottsdale homes average $1,500–$4,500 total. Free on-site estimates.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-slate-950">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-4">
                Solar Window Film FAQs — Scottsdale
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
              <Link to="/energy-saving-window-films" className="text-green-500 hover:underline">Energy Saving Window Films</Link>
              {' · '}
              <Link to="/solar-window-film-phoenix" className="text-green-500 hover:underline">Solar Film Phoenix</Link>
              {' · '}
              <Link to="/residential-window-tinting-scottsdale" className="text-green-500 hover:underline">Scottsdale Residential</Link>
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
              We install solar window film throughout Scottsdale — Old Town, North Scottsdale, DC Ranch, Gainey Ranch, McCormick Ranch, Kierland, Troon, Silverleaf, and Paradise Valley. Same-day estimates available for most Scottsdale locations. Licensed, bonded, insured. ROC #{rocNumber}.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Scottsdale Solar Film Quote
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment. We evaluate your glass orientation, HOA requirements, and recommend the optimal solar film specification. ROC #{rocNumber}.
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
