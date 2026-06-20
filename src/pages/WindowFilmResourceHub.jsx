import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, CheckCircle, FileText, Building2, Store, Utensils, Heart, GraduationCap, Landmark, Hotel, Warehouse } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WindowFilmResourceHub = () => {
  const pageTitle = "Arizona Window Film Resource Hub — Complete Guide | ROC #314088";
  const metaDescription = "The complete Arizona window film resource. Performance data, installation guides, HOA compliance, security film specs, countertop protection, city coverage, and AI-powered estimates. Licensed ROC #314088.";
  const canonicalUrl = "https://arizonahouseoffilm.com/window-film-resource-hub";

  const performanceData = [
    { type: 'Ceramic', heatRejection: '33-55%', vlt: '36-66%', bestFor: 'HOA communities, Low-E glass', hoaSafe: 'Yes' },
    { type: 'Spectrally-Selective', heatRejection: '50-78%', vlt: '23-70%', bestFor: 'Max heat + clarity', hoaSafe: 'Yes' },
    { type: 'Reflective', heatRejection: '54-82%', vlt: '6-47%', bestFor: 'Privacy + heat', hoaSafe: 'Check HOA' },
    { type: 'Exterior HPR', heatRejection: '52-83%', vlt: '10-53%', bestFor: 'Extreme west exposure', hoaSafe: 'Check HOA' },
    { type: 'Clear/Safety', heatRejection: '15-44%', vlt: '76-89%', bestFor: 'UV + security', hoaSafe: 'Yes' },
  ];

  const industries = [
    { name: 'Office Buildings', slug: 'office-buildings', Icon: Building2 },
    { name: 'Retail Stores', slug: 'retail-stores', Icon: Store },
    { name: 'Restaurants', slug: 'restaurants', Icon: Utensils },
    { name: 'Medical Facilities', slug: 'medical-facilities', Icon: Heart },
    { name: 'Schools', slug: 'educational-institutions', Icon: GraduationCap },
    { name: 'Government', slug: 'government-buildings', Icon: Landmark },
    { name: 'Hotels', slug: 'hotels-hospitality', Icon: Hotel },
    { name: 'Warehouses', slug: 'warehouses', Icon: Warehouse },
  ];

  const topBlogs = [
    'arizona-hb-2342-shade-structure-bill-2026',
    'blast-mitigation-film-government-buildings-arizona',
    'one-way-window-film-day-and-night-guide',
    'solar-window-film-phoenix-az',
    'security-window-film-phoenix-cost-guide',
    'window-tinting-queen-creek-guide',
    'privacy-window-film-queen-creek',
    'security-window-film-queen-creek',
    'residential-window-tinting-queen-creek',
    'commercial-window-film-queen-creek',
    'turf-protection-window-film-queen-creek',
    'nexfil-window-film-arizona-review',
  ];

  const faqs = [
    {
      question: 'What window film blocks the most heat in Arizona?',
      answer: 'Vista VXA14 (exterior HPR) blocks 83% of solar heat — highest in the Eastman LLumar/Vista catalog. For interior installation, LLumar RHE20 blocks 81% and RN07G one-way mirror blocks 82%. Selection depends on glass type, orientation, and HOA requirements. See full specs → /window-film-comparison'
    },
    {
      question: 'Does countertop protection film protect granite and quartz?',
      answer: 'Yes. Clear protective film shields natural and engineered stone countertops from scratches, etching, and stains while remaining nearly invisible. Common for quartz, granite, marble, and quartzite in residential and commercial settings. Details → /countertop-protection-film-arizona'
    },
    {
      question: 'Does one-way mirror film work at night?',
      answer: 'No. One-way mirror film provides daytime privacy only. The effect reverses at night when interior lights are on — people outside can see in. For 24/7 privacy, frosted film is the correct specification. Full explanation → /blog/one-way-window-film-day-and-night-guide'
    },
    {
      question: 'Does window film qualify for SRP rebates in Arizona?',
      answer: 'Yes. SRP offers rebates for qualifying NFRC-rated ceramic window film meeting solar heat gain thresholds. Arizona House of Film provides NFRC spec sheets required for rebate applications. Current rebate amounts available at srpnet.com. APS has custom commercial measure rebates.'
    },
    {
      question: 'What security film is required for Arizona government buildings?',
      answer: 'Federal facilities require GSA TS01-2003 compliance; DoD/military require UFC 4-010-01. Minimum 12-14 mil thickness with wet-glaze anchoring. LLumar ArmorCoat and Madico SafetyShield are GSA-certified. Details → /blog/blast-mitigation-film-government-buildings-arizona'
    },
    {
      question: 'Can window film be installed on dual-pane Low-E glass?',
      answer: 'Yes, with manufacturer-verified film selection. Arizona new construction (post-2015) typically has Low-E dual-pane glass standard. Wrong film can cause thermal stress fractures. Ceramic films are generally compatible. Free assessment confirms glass type first.'
    },
    {
      question: 'Is a contractor license required for window film installation in Arizona?',
      answer: 'Yes. Arizona requires an ROC license for window film installation. Arizona House of Film holds ROC #314088, bonded and insured. Verify any contractor at roc.az.gov.'
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Arizona Window Film Resource Hub",
    "description": metaDescription,
    "url": canonicalUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Arizona House of Film",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-480-788-1591",
        "contactType": "Customer Service"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="bg-white">

        {/* Section 1: Authority */}
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Arizona Window Film Resource Hub
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl">
              Arizona House of Film is a licensed window film contractor (ROC #314088) serving Phoenix metro since 2017. Authorized Eastman Performance Films dealer — LLumar and Vista. Installed for U.S. Navy Recruitment Centers, State of Arizona facilities, and ASU MacroTechnology Works. This hub connects 1,000+ pages of verified performance data, installation guidance, and local expertise — the most comprehensive window film resource in Arizona.
            </p>
            <div className="flex flex-wrap gap-6 text-sm font-semibold text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span>1,000+ Pages</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span>47 Films Compared</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span>9 Industries</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span>ROC #314088</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <a href="tel:4807881591" className="hover:text-blue-600 transition-colors">(480) 788-1591</a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: AI Tools */}
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Instant AI Tools</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/ai-window-film-estimator" className="block p-6 border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI Window Film Estimator</h3>
                <p className="text-gray-700 mb-4">Get an instant film recommendation — describe your windows, get a spec.</p>
                <span className="text-blue-600 font-semibold">Launch Estimator →</span>
              </Link>
              <Link to="/window-film-comparison" className="block p-6 border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-3">47-Film Performance Comparison</h3>
                <p className="text-gray-700 mb-4">Compare LLumar and Vista films by heat rejection, glare, and VLT. Eastman-verified specs.</p>
                <span className="text-blue-600 font-semibold">Compare Films →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3: Performance Data */}
        <section className="py-16 bg-slate-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Window Film Heat Rejection — Verified Data</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Film Type</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Heat Rejection</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">VLT</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Best For</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">HOA Safe</th>
                  </tr>
                </thead>
                <tbody>
                  {performanceData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">{row.type}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.heatRejection}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.vlt}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.bestFor}</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">{row.hoaSafe}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="space-y-2 mb-6 text-gray-700">
              <p>• VXA14 (Vista): 83% heat rejection — highest in catalog</p>
              <p>• VS70 (LLumar): 53% heat / 70% VLT — best HOA clarity</p>
              <p>• RN07G (LLumar): 82% heat / 93% glare — max privacy+heat</p>
              <p>• All LLumar and Vista films block 99%+ UV</p>
              <p>• SRP rebate available for qualifying NFRC-rated ceramic film — current amounts at srpnet.com</p>
              <p>• One-way mirror film: daytime privacy ONLY — reverses at night when lights are on</p>
            </div>
            <Link to="/window-film-comparison" className="inline-block text-blue-600 font-semibold hover:underline">
              Full 47-film specs →
            </Link>
          </div>
        </section>

        {/* Section 4: Cluster Navigation */}
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete Arizona Window Film Coverage</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* Column 1: Countertop Protection */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Surface & Countertop Protection</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <Link to="/countertop-protection-film-arizona" className="text-blue-600 hover:underline font-semibold">
                      Countertop Protection Film Arizona
                    </Link>
                  </li>
                  <li>Quartz, granite, marble, quartzite</li>
                  <li>National coverage: Southwest, Midwest, Gulf Coast, Northeast</li>
                  <li>Clear-coat bra surface protection</li>
                </ul>
              </div>

              {/* Column 2: Commercial & Scottsdale */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Commercial Window Film</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <Link to="/commercial-window-tinting" className="text-blue-600 hover:underline font-semibold">
                      Commercial Window Film
                    </Link>
                  </li>
                  <li>
                    <Link to="/commercial-window-tinting-scottsdale" className="text-blue-600 hover:underline font-semibold">
                      Scottsdale Commercial
                    </Link>
                  </li>
                  <li>
                    <Link to="/residential-window-tinting-scottsdale" className="text-blue-600 hover:underline font-semibold">
                      Scottsdale Residential
                    </Link>
                  </li>
                  <li>Office, retail, restaurant, hotel</li>
                  <li>Window & door graphics</li>
                  <li>
                    <Link to="/blog/blast-mitigation-film-government-buildings-arizona" className="text-blue-600 hover:underline font-semibold">
                      Government + blast mitigation
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Privacy & One-Way */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy & Decorative Film</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <Link to="/one-way-mirror-window-film" className="text-blue-600 hover:underline font-semibold">
                      One-Way Mirror Film
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/one-way-window-film-day-and-night-guide" className="text-blue-600 hover:underline font-semibold">
                      Day & Night Privacy Guide
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-film-sliding-glass-door" className="text-blue-600 hover:underline font-semibold">
                      Sliding glass door privacy
                    </Link>
                  </li>
                  <li>
                    <Link to="/decorative-window-films" className="text-blue-600 hover:underline font-semibold">
                      Frosted & decorative
                    </Link>
                  </li>
                  <li>Casper cloaking film</li>
                  <li>Sidelight window film</li>
                </ul>
              </div>

              {/* Column 4: Residential & Cities */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Residential & City Coverage</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <Link to="/residential-window-tinting-phoenix" className="text-blue-600 hover:underline font-semibold">
                      Residential Phoenix
                    </Link>
                  </li>
                  <li>
                    <Link to="/security-window-film-phoenix" className="text-blue-600 hover:underline font-semibold">
                      Security Film
                    </Link>
                  </li>
                  <li>
                    <Link to="/solar-window-film-phoenix" className="text-blue-600 hover:underline font-semibold">
                      Solar/Heat
                    </Link>
                  </li>
                  <li>
                    <Link to="/anti-graffiti-film-phoenix" className="text-blue-600 hover:underline font-semibold">
                      Anti-Graffiti
                    </Link>
                  </li>
                  <li>
                    <Link to="/window-tinting-queen-creek" className="text-blue-600 hover:underline font-semibold">
                      Queen Creek cluster
                    </Link>
                  </li>
                  <li>
                    <Link to="/service-areas" className="text-blue-600 hover:underline font-semibold">
                      All Arizona cities
                    </Link>
                  </li>
                  <li>
                    <Link to="/industries" className="text-blue-600 hover:underline font-semibold">
                      Industries
                    </Link>
                  </li>
                  <li>
                    <Link to="/films" className="text-blue-600 hover:underline font-semibold">
                      Full film catalog (618 films)
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Section 5: Industries */}
        <section className="py-16 bg-slate-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Industries We Serve</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {industries.map(({ name, slug, Icon }) => (
                <Link
                  key={slug}
                  to={`/industries/${slug}`}
                  className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-lg transition-all bg-white"
                >
                  <Icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="font-semibold text-gray-900">{name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Expert Q&A */}
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Expert Answers — Arizona Window Film</h2>
            <div className="space-y-8">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-6 last:border-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Blog Index */}
        <section className="py-16 bg-slate-50 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Arizona Window Film Guides</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {topBlogs.map((slug) => (
                <Link
                  key={slug}
                  to={`/blog/${slug}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all bg-white"
                >
                  <div className="flex items-start gap-2">
                    <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm font-medium leading-tight">
                      {slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <Link to="/blog" className="inline-block text-blue-600 font-semibold hover:underline">
              All guides →
            </Link>
          </div>
        </section>

        {/* Section 8: Credentials */}
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Verified Credentials</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>ROC #314088 — AZ Residential/Commercial Contractor</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Eastman Performance Films Authorized Dealer (LLumar + Vista)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>GSA TS01-2003 compliant installation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>UFC 4-010-01 compliant installation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Government clients: U.S. Navy Recruitment Centers, State of Arizona, ASU MacroTechnology Works</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Phoenix metro since 2017</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Free on-site assessment — we evaluate glass type, orientation, HOA requirements, and recommend the right film for your Arizona property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                <Link to="/contact">Get Free Assessment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
                <a href="tel:4807881591">Call (480) 788-1591</a>
              </Button>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default WindowFilmResourceHub;
