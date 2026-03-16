import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { Link } from 'react-router-dom';
import { Shield, Building, Home, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';

export default function SecurityWindowFilmScottsdale() {
  const rocNumber = '314088';
  const pageTitle = 'Security Window Film Scottsdale AZ | Licensed Installer | ROC #314088';
  const metaDescription = 'Security window film installation in Scottsdale AZ. 8–12 mil safety film for homes, retail, and commercial properties. Licensed ROC #314088. Free estimates.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/security-window-film-scottsdale';
  const ogImage = 'https://arizonahouseoffilm.com/images/default-og.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Security Window Film Scottsdale AZ',
    serviceType: 'Security Window Film Installation',
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
        name: 'Do you install security window film in Scottsdale AZ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Arizona House of Film installs 8 mil and 12 mil security window film for residential and commercial properties throughout Scottsdale. Licensed ROC #314088. Call (480) 788-1591 for a free security assessment.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does security window film cost in Scottsdale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Security window film in Scottsdale runs $15–$22 per square foot installed for 8 mil film. 12 mil film and C-Bond installations are priced at a premium. Most residential ground-floor installations run $1,200–$4,000. Commercial projects are quoted by scope.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does security film stop break-ins at Scottsdale retail properties?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Security film does not prevent glass from breaking but holds shattered glass in place — significantly slowing forced entry. 8 mil film typically adds 45–90 seconds to breach time, which is sufficient to trigger alarm response. For maximum deterrence we install 12 mil film with C-Bond anchoring on high-risk storefronts.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is C-Bond glass strengthening and is it available in Scottsdale?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'C-Bond is a nano-technology primer applied before security film installation that chemically bonds the film to the glass at the molecular level — increasing overall glass-film system strength by up to 400%. Available for all Scottsdale residential and commercial security film installations.',
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
        { name: 'Security Window Film Scottsdale', path: '/security-window-film-scottsdale' },
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
                Security Window Film Scottsdale AZ — Licensed Installer Since 2017
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-medium">
                8 mil and 12 mil security window film for Scottsdale homes, retail, and commercial properties. C-Bond glass strengthening available. Licensed ROC #{rocNumber}.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl">
                  <Link to="/contact">Get Security Assessment</Link>
                </Button>
                <a href="tel:480-788-1591" className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all text-lg">
                  (480) 788-1591
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECURITY WINDOW FILM SERVICES IN SCOTTSDALE AZ */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Security Window Film Services in Scottsdale AZ
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              Arizona House of Film installs 8 mil and 12 mil security window film for residential and commercial properties throughout Scottsdale. Security film holds shattered glass in place during forced entry attempts, impact events, and blast scenarios — significantly increasing time-to-breach and reducing secondary fragmentation injury. Licensed ROC #{rocNumber}. Documented installations for commercial and government clients throughout the Scottsdale and Phoenix metro.
            </p>
          </div>
        </section>

        {/* 8 MIL AND 12 MIL SAFETY FILM */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                8 Mil and 12 Mil Safety Film for Scottsdale Properties
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">8 Mil Safety Film</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Standard residential and commercial specification. Holds shattered glass in frame after impact. Adds 45–90 seconds to breach time. Crystal clear with no tint or color shift. UV blocking included. Our most common specification for Scottsdale homes and retail storefronts.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">12 Mil Security Film</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Premium security specification for high-risk commercial, financial, and luxury residential properties. Maximum impact resistance and forced entry delay. Recommended for ground-floor storefronts, jewelry stores, financial services offices, and high-value Scottsdale retail.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">C-Bond Enhancement</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  C-Bond nano-technology primer bonds security film to glass at the molecular level — increasing overall glass-film system strength by up to 400%. Available as an add-on for any 8 mil or 12 mil installation. Maximum deterrence for high-security Scottsdale properties.
                </p>
              </div>
              <div className="bg-slate-50 border-l-4 border-green-500 p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Building className="w-6 h-6 text-green-600" />
                  <h3 className="text-base font-black text-slate-950 uppercase">Blast Mitigation</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  GSA-rated blast mitigation film for government, institutional, and high-security Scottsdale properties. Meets federal blast resistance standards for building envelope protection. Available for both new construction and retrofit applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECURITY FILM FOR SCOTTSDALE RETAIL AND COMMERCIAL */}
        <section className="py-24 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Security Film for Scottsdale Retail and Commercial
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
            </div>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mx-auto mb-8">
              Scottsdale's Old Town corridor, Kierland Commons, and Fashion Square area retail properties face smash-and-grab exposure. We install 8 mil safety film and 12 mil security film on storefront glass, entry doors, and display windows. Optional C-Bond nano-technology primer bonds film to glass at the molecular level — increasing the glass-film system strength by up to 400%.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { label: 'Retail Storefronts', desc: 'Smash-and-grab deterrence for Old Town, Kierland, and Fashion Square area retail. 8 mil standard, 12 mil for high-value inventory.' },
                { label: 'Financial Services', desc: 'Security film for bank branches, wealth management offices, and financial advisory firms throughout Scottsdale. Forced entry delay and fragmentation protection.' },
                { label: 'Medical Offices', desc: 'Safety film for medical office ground-floor glass and pharmacy windows. Meets safety glazing requirements for healthcare facilities.' },
              ].map((item) => (
                <div key={item.label} className="bg-slate-900 border border-slate-800 p-8">
                  <h3 className="text-base font-black text-white uppercase mb-3">{item.label}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECURITY FILM FOR SCOTTSDALE LUXURY HOMES */}
        <section className="py-16 bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Security Film for Scottsdale Luxury Homes
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl mb-4">
              North Scottsdale and Paradise Valley luxury homes use security film on ground-floor entry glass, sliding doors, and garage windows. 8 mil film is our standard residential specification — it holds glass in place and slows forced entry by 45–90 seconds, which is sufficient to trigger alarm response in most cases.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-medium max-w-4xl">
              For high-value properties in DC Ranch, Silverleaf, Troon, and Paradise Valley, we recommend 12 mil film with C-Bond anchoring on all ground-floor and accessible glass. Crystal clear — no visual change to windows. Compatible with existing alarm and camera systems.
            </p>
          </div>
        </section>

        {/* C-BOND GLASS STRENGTHENING */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 uppercase tracking-tight">
                C-Bond Glass Strengthening — Scottsdale
              </h2>
              <div className="w-24 h-2 bg-green-500 mx-auto mb-6" />
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-slate-700 text-base leading-relaxed font-medium mb-6">
                C-Bond is a nano-technology primer applied to glass before security film installation. It chemically bonds the film to the glass at the molecular level rather than relying on adhesive alone. The result is a glass-film system that is up to 400% stronger than film installed with standard adhesive.
              </p>
              <p className="text-slate-700 text-base leading-relaxed font-medium mb-8">
                C-Bond is available for all Scottsdale residential and commercial security film installations. It is particularly recommended for high-value retail, financial services offices, luxury homes, and any property where maximum forced entry deterrence is required. The application adds no visible change to the glass or film.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Up to 400% stronger glass-film bond', desc: 'Molecular-level adhesion vs. standard pressure-sensitive adhesive.' },
                  { label: 'No visual change', desc: 'Crystal clear application — no tint, haze, or color shift on any glass type.' },
                  { label: 'Compatible with 8 mil and 12 mil', desc: 'Works with all security film thicknesses for residential and commercial applications.' },
                  { label: 'Available for all Scottsdale properties', desc: 'Residential, commercial, retail, institutional — any property type.' },
                ].map((item) => (
                  <div key={item.label} className="bg-slate-50 border-l-4 border-green-500 p-6">
                    <h3 className="text-sm font-black text-slate-950 uppercase mb-2">{item.label}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-slate-950">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-4">
                Security Window Film FAQs — Scottsdale
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
              <Link to="/safety" className="text-green-500 hover:underline">Safety & Security Film</Link>
              {' · '}
              <Link to="/security-window-film-phoenix" className="text-green-500 hover:underline">Security Film Phoenix</Link>
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
              We install security window film throughout Scottsdale — Old Town, North Scottsdale, DC Ranch, Gainey Ranch, McCormick Ranch, Kierland, Troon, Silverleaf, and Paradise Valley. Same-day estimates available for most Scottsdale locations. Licensed, bonded, insured. ROC #{rocNumber}.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Scottsdale Security Film Quote
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site security assessment. We evaluate your glass, access points, and risk profile — then recommend the right film specification. ROC #{rocNumber}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl">
                <Link to="/contact">Request Security Assessment</Link>
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
