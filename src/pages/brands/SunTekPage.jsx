import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import EstimatorCTA from '../../components/EstimatorCTA';
import { Button } from '@/components/ui/button';

const SunTekPage = () => {
  const pageTitle = 'SunTek Window Film Phoenix AZ | CIR Ceramic | ROC #314088';
  const metaDescription = 'Professional SunTek window film installer in Phoenix AZ. Ultra-Vision, Symphony, Infinity, Silver and Dual-Reflective series for homes and businesses. Free estimates. ROC #314088.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/brands/suntek';
  const ogImage = 'https://arizonahouseoffilm.com/og-image.jpg';

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SunTek Window Film Installation Phoenix AZ',
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
      question: 'Do you install SunTek window film in Phoenix AZ?',
      answer: 'Arizona House of Film installs SunTek architectural window film — including Ultra-Vision, Symphony, Infinity, Silver DS, and Dual-Reflective series — for residential and commercial properties throughout Phoenix, Scottsdale, Chandler, Gilbert, Mesa, and the greater Valley. Licensed ROC #314088.',
    },
    {
      question: 'What is the difference between SunTek film series?',
      answer: "SunTek offers five solar control series. Ultra-Vision DS is spectrally selective with the highest visible light transmission — ideal for residential and retail. Symphony DS and Dual-Reflective DS use dual-reflective technology for neutral interiors with solar-reflective exteriors. Infinity DS uses sputtered metal construction in neutral and bronze finishes. Silver DS delivers the highest total solar energy rejection — up to 92% — for maximum performance on commercial glass.",
    },
    {
      question: 'Which SunTek film qualifies for the SRP rebate?',
      answer: 'Multiple SunTek films qualify for the SRP $1/sq ft residential rebate, including ULVDS 40 (SHGC 0.44), DRDS 25 (SHGC 0.39), SYDS 25 (SHGC 0.38), SDS 35 (SHGC 0.28), IDS 20 (SHGC 0.36), and IDS 20 Bronze (SHGC 0.25). Arizona House of Film provides all required NFRC documentation for rebate applications.',
    },
    {
      question: 'Is SunTek the same as LLumar?',
      answer: 'SunTek and LLumar are both owned by Eastman Performance Films but are separate product brands with distinct product lines and warranties. Both are premium architectural film brands. Arizona House of Film installs both SunTek and LLumar and recommends based on your specific performance requirements and aesthetic preferences.',
    },
    {
      question: 'What warranty does SunTek window film carry?',
      answer: "SunTek architectural films carry a manufacturer's limited warranty. Warranty terms vary by product and application type — residential solar control films carry longer coverage than commercial or specialty films. Confirm specific warranty terms at time of estimate.",
    },
    {
      question: 'How does SunTek CIR ceramic compare to standard solar film?',
      answer: "SunTek CIR (Ceramic IR) film uses non-metallic ceramic construction to reject infrared heat without the mirror appearance of reflective films. It delivers high heat rejection while remaining signal-friendly — no interference with WiFi, cellular, or GPS. Standard solar films use metal sputtering which can affect signal strength. CIR is the preferred choice for smart homes and tech-forward commercial spaces.",
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
        { name: 'SunTek Window Film', path: '/brands/suntek' },
      ]} />

      <main id="main-content" className="bg-slate-950 min-h-screen">
        {/* HERO */}
        <section className="py-24 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <span className="inline-block px-4 py-1 bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-widest">
              SunTek Professional Installer &middot; Eastman Performance Films
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase leading-[0.85] tracking-tighter">
              SunTek Window Film Installation — Phoenix & Arizona
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-medium">
              Arizona House of Film installs the complete SunTek architectural window film lineup — Ultra-Vision, Symphony, Infinity, Silver DS, and Dual-Reflective series — for residential and commercial properties across Phoenix, Scottsdale, and the Valley. ROC #314088.
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

        {/* ABOUT SUNTEK */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              About SunTek Window Film
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl">
              SunTek is a premium architectural window film brand manufactured by Eastman Performance Films — the same parent company behind LLumar. SunTek architectural films are engineered with spectrally selective, dual-reflective, sputtered neutral, and reflective metal technologies to reduce interior temperatures, control glare, and block 98-99% of UV rays. SunTek has earned The Skin Cancer Foundation's Seal of Recommendation on products with 99% or greater UV protection. Arizona House of Film installs the full SunTek solar control lineup for residential and commercial properties across the Phoenix metro.
            </p>
          </div>
        </section>

        {/* SOLAR FILM SERIES */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              SunTek Solar Film Series — 5 Product Lines
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              SunTek solar films are available in five distinct series — each engineered for different aesthetic and performance requirements. All series block 98-99% UV and carry manufacturer limited warranties.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {[
                {
                  series: 'Ultra-Vision\u2122 DS Series',
                  tag: 'Spectrally Selective \u2014 Barely Visible Solar',
                  desc: "SunTek's clearest solar control technology. Spectrally selective construction delivers strong heat rejection while maintaining the highest visible light transmission in the SunTek lineup. Preferred for residential applications and retail storefronts where natural appearance is required.",
                  products: 'ULVDS 70 (69% VLT) \u00B7 ULVDS 50 (57% VLT) \u00B7 ULVDS 40 (38% VLT) \u00B7 ULV EXT 50 (exterior)',
                  specs: 'TSER: 44-56% \u00B7 UV block: 97-99%+ \u00B7 SHGC: 0.44-0.56 \u00B7 Neutral appearance',
                },
                {
                  series: 'Symphony\u2122 DS Series',
                  tag: 'Dual-Reflective \u2014 Crisp & Cool Solar',
                  desc: 'Dual-reflective technology with a neutral appearance. Reflective exterior reduces heat gain while the neutral interior maintains comfortable sightlines. Strong performance range from light to dark VLT options.',
                  products: 'SYDS 50 (46% VLT) \u00B7 SYDS 35 (40% VLT) \u00B7 SYDS 25 (33% VLT) \u00B7 SYDS 15 (10% VLT)',
                  specs: 'TSER: 44-82% \u00B7 UV block: 97-99%+ \u00B7 SHGC: 0.18-0.56 \u00B7 Dual-reflective',
                },
                {
                  series: 'Infinity\u2122 DS Series',
                  tag: 'Sputtered Neutral & Bronze \u2014 Warm and Professional',
                  desc: "Sputtered metal construction in neutral and bronze finishes. The IDS Bronze series adds distinctive warm architectural tones while delivering among the highest TSER ratings in the SunTek lineup — up to 89% total solar energy rejection.",
                  products: 'IDS 50 \u00B7 IDS 35 \u00B7 IDS 20 \u00B7 IDS 35 Bronze \u00B7 IDS 20 Bronze \u00B7 IXT 35 \u00B7 IXT 20',
                  specs: 'TSER: 34-89% \u00B7 UV block: 98-99%+ \u00B7 SHGC: 0.25-0.66 \u00B7 Neutral and bronze',
                },
                {
                  series: 'Silver\u2122 DS Series',
                  tag: 'Reflective Silver \u2014 Maximum Solar Rejection',
                  desc: "High-reflectivity silver films delivering maximum heat rejection and daytime privacy. The SilverDS series achieves up to 92% total solar energy rejection — the highest performance tier in the SunTek lineup. Standard specification for west-facing commercial glass in Arizona.",
                  products: 'SDS 35 (26% VLT) \u00B7 SDS 20 (15% VLT) \u00B7 SXT 50 \u00B7 SXT 35 \u00B7 SXT 20',
                  specs: 'TSER: 48-92% \u00B7 UV block: 98-99%+ \u00B7 SHGC: 0.19-0.52 \u00B7 Reflective silver',
                },
                {
                  series: 'Dual-Reflective\u2122 DS Series',
                  tag: 'Warm & Neutral Dual-Reflective',
                  desc: 'Dual-reflective construction with warm neutral tones. Reflective exterior for solar performance, neutral interior for comfortable viewing. Available in 35%, 25%, and 15% VLT.',
                  products: 'DRDS 35 (36% VLT) \u00B7 DRDS 25 (23% VLT) \u00B7 DRDS 15 (15% VLT)',
                  specs: 'TSER: 50-71% \u00B7 UV block: 97-98%+ \u00B7 SHGC: 0.29-0.50 \u00B7 Dual-reflective warm',
                },
              ].map((s, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-5 bg-white">
                  <span className="text-xs font-black text-green-700 uppercase tracking-widest">{s.tag}</span>
                  <h3 className="font-black text-slate-900 text-xl mt-2 mb-2">{s.series}</h3>
                  <p className="text-slate-600 text-sm mb-3">{s.desc}</p>
                  <p className="text-xs text-slate-500 font-medium mb-1"><span className="font-black text-slate-700">Products:</span> {s.products}</p>
                  <p className="text-xs text-slate-500 font-medium"><span className="font-black text-slate-700">Performance:</span> {s.specs}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ANTI-GRAFFITI */}
        <section className="py-16 bg-slate-950 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-6">
              SunTek Anti-Graffiti Film
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-4xl mb-8">
              SunTek anti-graffiti film provides sacrificial surface protection for glass, mirrors, and metal surfaces. Remove and replace after vandalism — no glass replacement required.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { thickness: '4 Mil Anti-Graffiti', desc: 'Near-clear sacrificial surface protection. 89% visible light transmission — virtually invisible on glass. Retail storefronts, restaurant bathrooms, elevator panels.', specs: '89% VLT \u00B7 96% UV block \u00B7 SHGC 0.85' },
                { thickness: '6 Mil Anti-Graffiti', desc: 'Thicker sacrificial protection with 99% UV block. Enhanced durability for high-traffic public surfaces, transit facilities, and municipal applications.', specs: '89% VLT \u00B7 99% UV block \u00B7 SHGC 0.84' },
              ].map((item, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-4 bg-white">
                  <h3 className="font-black text-slate-900 text-lg mb-2">SunTek {item.thickness}</h3>
                  <p className="text-slate-600 text-sm mb-2">{item.desc}</p>
                  <p className="text-xs text-slate-500 font-medium">{item.specs}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPECIALTY FILMS */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              SunTek Specialty Films
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              Beyond solar control, SunTek offers specialty films for privacy, blackout, and security applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Black Out', desc: 'Complete blackout — 0% VLT, 99%+ UV block. Server rooms, media rooms, storage, and complete privacy applications. SHGC 0.30.' },
                { name: 'White Out / White Matte', desc: 'Full white opacity for complete privacy partitions. Interior glass walls, office partitions, and privacy panels.' },
                { name: 'DRMPS / DRMDS Security', desc: '7% VLT security films with 92% TSER and 99%+ UV block. Combined security and maximum solar control in one film.' },
                { name: 'Crystal PET / Crystal Vinyl', desc: 'Clear specialty films for surface protection and UV control without altering glass appearance.' },
              ].map((film, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-4 bg-white">
                  <h3 className="font-black text-slate-900 text-lg mb-2">SunTek {film.name}</h3>
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
              SunTek Film for Arizona's Climate — Performance by Series
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl mb-8">
              Arizona's combination of extreme UV index, 299+ sunny days, and summer temperatures above 110&deg;F requires window film engineered for sustained high-solar performance. SunTek's Silver DS series delivers up to 92% total solar energy rejection — making it the specification choice for west and south-facing commercial glass in Phoenix and Scottsdale. For residential applications where a non-reflective appearance is required, the Ultra-Vision DS spectrally selective series provides 44-56% TSER while maintaining the highest visible light transmission in the lineup. The Infinity DS Bronze series is ideal for Arizona properties seeking warm architectural tones with up to 89% TSER. All qualifying SunTek solar control films with SHGC of 0.45 or lower qualify for the SRP residential rebate of $1 per square foot — Arizona House of Film provides all required NFRC documentation.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-black text-green-800 text-sm uppercase tracking-widest mb-3">SRP Rebate Eligible Films (SHGC &le; 0.45)</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                ULVDS 40 (SHGC 0.44) &middot; DRDS 25 (SHGC 0.39) &middot; DRDS 15 (SHGC 0.29) &middot; SYDS 25 (SHGC 0.38) &middot; SYDS 15 (SHGC 0.18) &middot; SDS 35 (SHGC 0.28) &middot; SDS 20 (SHGC 0.19) &middot; IDS 20 (SHGC 0.36) &middot; IDS 35 Bronze (SHGC 0.40) &middot; IDS 20 Bronze (SHGC 0.25)
              </p>
            </div>
          </div>
        </section>

        {/* SKIN CANCER FOUNDATION */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-6">
              The Skin Cancer Foundation Seal of Recommendation
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed max-w-4xl">
              SunTek products with 99% or greater UV protection (wavelengths 300-380nm) have been awarded The Skin Cancer Foundation's Seal of Recommendation — an independent validation of UV protection performance. In Arizona where UV Index regularly exceeds 11, this certification is particularly meaningful for homeowners and commercial tenants seeking measurable health protection alongside energy savings.
            </p>
          </div>
        </section>

        {/* WHY AZHOF */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter mb-8">
              Why Arizona House of Film for SunTek Installation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Licensed', desc: 'ROC #314088, Arizona licensed contractor since 2017' },
                { title: '700+ Projects', desc: 'Verified residential and commercial installations' },
                { title: 'NFRC Documentation', desc: 'Provided for all qualifying SRP rebate applications' },
                { title: 'Free Assessment', desc: 'On-site measurement and film recommendation' },
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
              Frequently Asked Questions — SunTek Window Film
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
              Get a Free SunTek Film Estimate
            </h2>
            <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto mb-10">
              Free on-site assessment. SunTek film specified for your glass type and performance requirements. Licensed ROC #314088.
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
              <Link to="/window-film-energy-rebates-arizona" className="text-green-700 underline">SRP Rebate Calculator</Link>
              <Link to="/brands/llumar" className="text-green-700 underline">LLumar Window Film</Link>
              <Link to="/brands/xpel" className="text-green-700 underline">XPEL Window Film</Link>
              <Link to="/brands/madico" className="text-green-700 underline">Madico Window Film</Link>
              <Link to="/brands" className="text-green-700 underline">All Film Brands</Link>
              <Link to="/get-a-quote" className="text-green-700 underline">Get a Quote</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SunTekPage;
