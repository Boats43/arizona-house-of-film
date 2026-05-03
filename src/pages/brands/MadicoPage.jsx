import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import EstimatorCTA from '../../components/EstimatorCTA';
import { Button } from '@/components/ui/button';

const MadicoPage = () => {
  const pageTitle = 'Madico Window Film Phoenix AZ | Solar Control | ROC #314088';
  const metaDescription = 'Professional Madico window film installer in Phoenix AZ. Nova, Optivision, Solar Grey, Solar Bronze, anti-graffiti and decorative Madico film. Free estimates. ROC #314088.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/brands/madico';
  const ogImage = 'https://arizonahouseoffilm.com/og-image.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Madico Window Film Installation Phoenix AZ',
    serviceType: 'Window Film Installation',
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://arizonahouseoffilm.com',
      name: 'Arizona House of Film',
    },
    areaServed: { '@type': 'State', name: 'Arizona' },
    description: metaDescription,
    url: canonicalUrl,
  };

  const faqData = [
    {
      question: 'Do you install Madico window film in Phoenix AZ?',
      answer: 'Arizona House of Film installs Madico architectural window film — including the Nova, Optivision, Solar Grey, Solar Bronze, and Reflective series — for residential and commercial properties throughout Phoenix, Scottsdale, Chandler, Gilbert, Mesa, and the greater Valley. Licensed ROC #314088.',
    },
    {
      question: 'What Madico products does Arizona House of Film install?',
      answer: 'Arizona House of Film installs Madico solar control films including Nova, Optivision, Optivision Reflective, Reflective Silver, Solar Bronze, Solar Grey, and their exterior-applied variants. We also install Madico anti-graffiti film and decorative film for commercial and residential applications.',
    },
    {
      question: 'Which Madico film is best for Arizona heat?',
      answer: "For Arizona's intense solar environment, Madico Reflective Silver delivers maximum heat rejection with strong daytime privacy — ideal for west and south-facing commercial glass. Nova and Optivision are top choices where a non-reflective appearance is required. Solar Grey and Solar Bronze provide strong performance with distinctive aesthetic finishes for commercial properties.",
    },
    {
      question: 'Does Madico window film qualify for the SRP rebate?',
      answer: 'Yes — qualifying Madico solar control films with SHGC of 0.45 or lower qualify for the SRP residential rebate of $1 per square foot. Arizona House of Film provides all required NFRC documentation. Commercial SRP customers qualify for $0.60 per square foot.',
    },
    {
      question: 'What warranty does Madico window film carry?',
      answer: 'Madico architectural solar control films carry lifetime residential warranties on qualifying products. Commercial installations receive 10 or 15-year coverage. Decorative films are warranted for 7 years. Exterior films carry a 5-year warranty on vertical glass.',
    },
    {
      question: 'How does Madico compare to LLumar or XPEL?',
      answer: "Madico, LLumar, and XPEL are all premium architectural film brands with NFRC-tested performance and strong manufacturer warranties. Madico's 120+ year manufacturing heritage is unmatched in the industry. Arizona House of Film installs all three brands and recommends the best product based on your glass type, orientation, sun exposure, and budget.",
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
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
        { name: 'Brands', path: '/brands' },
        { name: 'Madico Window Film', path: '/brands/madico' },
      ]} />

      <main id="main-content" className="bg-slate-950 min-h-screen">
        {/* HERO */}
        <section className="py-24 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <span className="inline-block px-4 py-1 bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-widest">
              Madico Professional Installer &middot; Founded 1903
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase leading-[0.85] tracking-tighter">
              Madico Window Film Installation — Phoenix & Arizona
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-medium">
              Arizona House of Film installs Madico architectural window film — including the Nova, Optivision, Solar Grey and Solar Bronze series — for commercial and residential properties across Phoenix, Scottsdale, and the Valley. ROC #314088.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl"
              >
                <Link to="/get-a-quote">Get a Free Estimate &rarr;</Link>
              </Button>
              <a
                href="tel:480-788-1591"
                className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all text-lg"
              >
                Call (480) 788-1591
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT MADICO */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              About Madico Window Film
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl">
              Madico is one of the oldest window film manufacturers in the world — founded in 1903 and headquartered in Tampa Bay, Florida. With over 120 years of manufacturing experience and seven company-owned North American distribution centers, Madico produces architectural window films used in residential, commercial, government, and specialty applications worldwide. All Madico architectural films are NFRC-tested, carry manufacturer warranties, and are designed to meet the demands of high-solar environments like Arizona. Arizona House of Film installs Madico solar control, anti-graffiti, and decorative films for commercial and residential properties across the Phoenix metro.
            </p>
          </div>
        </section>

        {/* SOLAR CONTROL FILMS */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              Madico Solar Control Film Series
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              Madico's architectural solar control line blocks up to 99% UV and reduces solar heat gain across nine product options — from nearly clear to reflective finishes, interior and exterior applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: 'Nova',
                  tag: 'Premium Solar',
                  desc: "Madico's flagship solar control film. High heat rejection with a neutral, non-reflective appearance. Suitable for residential and commercial applications requiring subtle aesthetics with strong performance.",
                  specs: 'UV block: 99%+ · Non-reflective · Residential and commercial',
                },
                {
                  name: 'Optivision\u00AE',
                  tag: 'Optical Clarity',
                  desc: 'Engineered for maximum optical clarity with solar control performance. Maintains distortion-free views while reducing heat and UV exposure. Ideal for retail storefronts and view-sensitive residential applications.',
                  specs: 'UV block: 99%+ · High optical clarity · Solar heat reduction',
                },
                {
                  name: 'Optivision\u00AE Reflective',
                  tag: 'Clarity + Privacy',
                  desc: "Combines Optivision's optical clarity with a reflective finish for daytime privacy. Strong solar performance with mirror-like exterior appearance on west and south-facing glass.",
                  specs: 'UV block: 99%+ · Daytime privacy · Reflective exterior',
                },
                {
                  name: 'Reflective Silver',
                  tag: 'Maximum Rejection',
                  desc: 'Mirror-finish solar control film delivering maximum heat rejection and daytime privacy. Standard specification for high-solar commercial buildings and west-facing residential glass in Arizona.',
                  specs: 'UV block: 99%+ · Maximum heat rejection · Strong daytime privacy',
                },
                {
                  name: 'Reflective Silver Exterior',
                  tag: 'Exterior Application',
                  desc: 'Exterior-applied version of Reflective Silver. Applied to the outside glass surface — ideal for single-pane or retrofit applications where interior film is impractical.',
                  specs: 'Exterior application · UV block: 99%+ · 5-year warranty on vertical glass',
                },
                {
                  name: 'Solar Bronze',
                  tag: 'Warm Tone',
                  desc: 'Bronze-tinted solar control film with a warm architectural finish. Reduces heat and UV while adding a distinctive bronze aesthetic to residential and commercial glass.',
                  specs: 'UV block: 99%+ · Bronze appearance · Heat and glare reduction',
                },
                {
                  name: 'Solar Bronze Exterior',
                  tag: 'Exterior Bronze',
                  desc: 'Exterior-applied Solar Bronze for single-pane and retrofit glass. Delivers bronze aesthetics and solar performance applied to the outside surface.',
                  specs: 'Exterior application · Bronze finish · UV block: 99%+',
                },
                {
                  name: 'Solar Grey',
                  tag: 'Neutral Tone',
                  desc: 'Grey-tinted solar control film with a clean, professional appearance. Popular for commercial office buildings, retail properties, and HOA-restricted residential applications.',
                  specs: 'UV block: 99%+ · Neutral grey appearance · Commercial and residential',
                },
                {
                  name: 'Solar Grey Exterior',
                  tag: 'Exterior Grey',
                  desc: 'Exterior-applied Solar Grey for retrofit and single-pane applications. Grey aesthetics and solar performance without interior film installation.',
                  specs: 'Exterior application · Grey finish · UV block: 99%+',
                },
              ].map((film, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-4 bg-white">
                  <span className="text-xs font-black text-green-700 uppercase tracking-widest">{film.tag}</span>
                  <h3 className="font-black text-slate-900 text-lg mt-1 mb-2">Madico {film.name}</h3>
                  <p className="text-slate-600 text-sm mb-3">{film.desc}</p>
                  <p className="text-xs text-slate-500 font-medium">{film.specs}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ANTI-GRAFFITI */}
        <section className="py-16 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              Madico Anti-Graffiti Film
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-4xl mb-8">
              Madico anti-graffiti film is a sacrificial surface protection layer installed over existing glass, mirrors, stainless steel, and polished metal. When vandalized, the film is removed and replaced — protecting the underlying surface from permanent damage at a fraction of replacement cost.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { surface: 'Retail Storefronts', desc: 'Protects storefront glass from etching, scratching, and spray paint. Remove and replace after vandalism — no glass replacement needed.' },
                { surface: 'Restaurant & Hospitality', desc: 'Bathroom mirrors, decorative glass panels, bar surfaces. Sacrificial layer replaced on routine maintenance schedule.' },
                { surface: 'Municipal & Transit', desc: 'Bus shelters, light rail stations, government facilities, elevator panels. High-traffic public surfaces requiring regular protection.' },
              ].map((item, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-4 bg-white">
                  <h3 className="font-black text-slate-900 text-lg mb-2">{item.surface}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DECORATIVE */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              Madico Decorative Film
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              Madico decorative films add privacy, architectural accents, and branded elements to commercial and residential glass. 7-year manufacturer warranty.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Frosted & Etched', desc: 'Mimics sandblasted or acid-etched glass. Conference rooms, office partitions, bathroom glass, shower doors.' },
                { name: 'Patterned Privacy', desc: 'Geometric and organic patterns for architectural interest combined with privacy. Multiple designs and opacity levels.' },
                { name: 'UV Gard', desc: 'Near-clear UV protection with SPF equivalent of 1,937. Blocks UV deep into the visible spectrum. Museums, galleries, retail merchandise display.' },
                { name: 'Custom Applications', desc: 'Logo designs, brand elements, and privacy patterns cut to specification. Storefronts, office partitions, entry doors.' },
              ].map((film, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-4 bg-white">
                  <h3 className="font-black text-slate-900 text-lg mb-2">Madico {film.name}</h3>
                  <p className="text-slate-600 text-sm">{film.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ARIZONA CLIMATE */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              Madico Film for Arizona's Climate
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl">
              Arizona's 299+ sunny days per year, UV Index regularly exceeding 11, and summer temperatures above 110&deg;F make it one of the most demanding environments for window film in the United States. Madico's solar control line — Nova, Optivision, Solar Grey, Solar Bronze, and the Reflective series — is engineered to reduce solar heat gain by up to 80% on west and south-facing glass where Arizona homes and commercial buildings absorb the most solar load. All Madico architectural films block up to 99% of UV rays — a critical factor in Arizona where UV exposure is among the highest in the country. Arizona House of Film provides NFRC documentation for all qualifying Madico installations to support SRP rebate applications for eligible residential and commercial customers.
            </p>
          </div>
        </section>

        {/* WARRANTY */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              Madico Warranty Coverage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {[
                { type: 'Residential Solar', coverage: 'Lifetime*', detail: 'Qualifying solar control films — valid as long as you own the home' },
                { type: 'Commercial', coverage: '10-15 Years', detail: 'Architectural series commercial installations' },
                { type: 'Decorative', coverage: '7 Years', detail: 'All Madico decorative and specialty films' },
              ].map((w, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-6 bg-slate-50">
                  <h3 className="font-black text-slate-950 text-sm uppercase mb-1">{w.type}</h3>
                  <p className="text-3xl font-black text-green-700 mb-2">{w.coverage}</p>
                  <p className="text-slate-600 text-sm">{w.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500">*Lifetime warranty on qualifying residential Madico products. Warranty terms confirmed at time of installation.</p>
          </div>
        </section>

        {/* WHY AZHOF */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-8">
              Why Arizona House of Film for Madico Installation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Licensed', desc: 'ROC #314088, Arizona licensed contractor since 2017' },
                { title: '700+ Projects', desc: 'Verified residential and commercial installations across Maricopa County' },
                { title: 'NFRC Documentation', desc: 'All technical docs provided for SRP rebate applications' },
                { title: 'Free Assessment', desc: 'On-site measurement and film recommendation, no obligation' },
              ].map((card, i) => (
                <div key={i} className="border-l-4 border-green-500 p-6 bg-white">
                  <h3 className="font-black text-slate-950 text-sm uppercase mb-2">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <EstimatorCTA />

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-8">
              Frequently Asked Questions — Madico Window Film
            </h2>
            <div className="space-y-6 max-w-4xl">
              {faqData.map((faq, i) => (
                <div key={i} className="border-b border-slate-200 pb-6">
                  <h3 className="font-black text-slate-900 text-lg mb-2">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
              Get a Free Madico Film Estimate
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment. Madico film specified for your glass type and performance requirements. Licensed ROC #314088.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-10 h-16 text-xl font-black rounded-none transition-all shadow-xl"
              >
                <Link to="/get-a-quote">Request Quote</Link>
              </Button>
              <a
                href="tel:480-788-1591"
                className="flex items-center gap-3 px-8 h-16 border-2 border-white text-white font-black hover:bg-white hover:text-slate-950 transition-all text-lg"
              >
                (480) 788-1591
              </a>
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="mt-10 border-t border-slate-200 pt-6 pb-4">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Related Resources</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link to="/residential-window-tinting" className="text-green-700 underline">Residential Window Film</Link>
              <Link to="/commercial-window-tinting" className="text-green-700 underline">Commercial Window Film</Link>
              <Link to="/anti-graffiti-film-phoenix" className="text-green-700 underline">Anti-Graffiti Film</Link>
              <Link to="/window-film-energy-rebates-arizona" className="text-green-700 underline">SRP Rebate Calculator</Link>
              <Link to="/brands/llumar" className="text-green-700 underline">LLumar Window Film</Link>
              <Link to="/brands/xpel" className="text-green-700 underline">XPEL Window Film</Link>
              <Link to="/brands" className="text-green-700 underline">All Film Brands</Link>
              <Link to="/get-a-quote" className="text-green-700 underline">Get a Quote</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MadicoPage;
