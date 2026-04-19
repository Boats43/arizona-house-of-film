import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import ContactFormSection from '@/components/contact/ContactFormSection';

const pageTitle = 'Window Film Distributor Phoenix AZ | Nexfil, Solyx, Madico | ROC #314088';
const metaDescription = 'Phoenix window film distributor and installer — authorized dealer for Nexfil USA, Solyx (Decorative Films LLC), Madico, MaxPro, SunTek, and XPEL. Drop-ship, bulk pricing, ROC #314088 licensed installer for contractors, architects, and facility managers.';
const canonicalUrl = 'https://arizonahouseoffilm.com/window-film-distributor-phoenix';

const brandLines = [
  {
    brand: 'Nexfil USA',
    line: 'Solar control and automotive-grade architectural film manufactured in South Korea, stocked for Phoenix drop-ship.',
    segment: 'Solar / automotive / architectural',
    href: '/brands',
  },
  {
    brand: 'Solyx — Decorative Films LLC',
    line: '618 SKU decorative catalog: frosted, etched, gradient, colored, patterned privacy, stained-glass, bird-safety, and Casper cloaking films. Full library in stock.',
    segment: 'Decorative / privacy',
    href: '/films',
  },
  {
    brand: 'Madico',
    line: 'Commercial-grade solar, safety, and security films. A go-to for spec-driven commercial projects and LEED credit submissions.',
    segment: 'Commercial solar + security',
    href: '/brands/madico',
  },
  {
    brand: 'MaxPro',
    line: 'Contractor-pricing solar and safety line — a strong value option when project budgets will not carry premium ceramic.',
    segment: 'Mid-tier solar + safety',
    href: '/brands',
  },
  {
    brand: 'SunTek (Eastman Performance Films)',
    line: 'Flagship ceramic solar, safety, and paint-protection film. Widely specified by architects for Class-A commercial glazing.',
    segment: 'Premium ceramic + PPF',
    href: '/brands/suntek',
  },
  {
    brand: 'XPEL',
    line: 'PRIME series architectural film plus XPEL PPF for hospitality and high-end residential accounts. Factory-direct rolls for qualified volume buyers.',
    segment: 'Premium architectural + PPF',
    href: '/brands/xpel',
  },
];

const buyers = [
  { title: 'Commercial Contractors', body: 'Purchase rolls at contractor pricing or subcontract the install to our crews. We supply film, edge-seal, and documentation for LEED/sustainability scopes.' },
  { title: 'Architects & Designers', body: 'Spec the right film the first time. We supply sample books, SHGC/VLT data sheets, and submittal packages for commercial glazing specs.' },
  { title: 'Interior Designers', body: 'Pull from the 618-SKU Solyx decorative library for hospitality, residential, and workplace projects. Drop-ship to the jobsite or let us install.' },
  { title: 'Facility Managers', body: 'Bulk orders for multi-building portfolios — schools, medical, government. Volume pricing, scheduled installs, and a single licensed vendor (ROC #314088).' },
  { title: 'Sign & Graphics Shops', body: 'Wholesale Solyx frosted, color, and perforated films for fabricators who sell graphics to end clients but need dependable film supply in Phoenix.' },
  { title: 'Glass Shops', body: 'Partner pricing for glaziers who want to offer film without stocking it. We drop-ship matched rolls or install under your brand.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are you an authorized window film distributor?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Arizona House of Film is an authorized dealer and distributor for Nexfil USA, Solyx (Decorative Films LLC), Madico, MaxPro, SunTek, and XPEL. We stock rolls in Phoenix for same-week drop-ship across Arizona and can order-in any SKU in each line.' },
    },
    {
      '@type': 'Question',
      name: 'Do you sell wholesale or bulk window film to contractors?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We sell rolls at contractor pricing to licensed commercial installers, glass shops, sign fabricators, and general contractors. Pricing is volume-tiered — the more film in the quote, the lower the per-square-foot rate. We require a business license or ROC number on file for wholesale accounts.' },
    },
    {
      '@type': 'Question',
      name: 'Can you drop-ship window film to a jobsite in Arizona?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Arizona jobsite drop-ship is the default for contractor accounts. We deliver sealed rolls (48-inch and 60-inch widths are stocked; 72-inch and 84-inch on order-in) with a packing slip, data sheet, and a photo receipt. Same-day drop-ship is available in the Phoenix metro for orders placed before 11am.' },
    },
    {
      '@type': 'Question',
      name: 'Do you install film purchased from another distributor?',
      acceptedAnswer: { '@type': 'Answer', text: 'In limited cases, yes — we install owner-supplied film if the brand and product match what our crews are trained on (Nexfil, Solyx, Madico, MaxPro, SunTek, XPEL). We do not warranty owner-supplied film and install is quoted at a labor-only rate. For full warranty coverage, film and labor should come from the same vendor.' },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum order for wholesale film?',
      acceptedAnswer: { '@type': 'Answer', text: 'For in-stock Nexfil and Solyx rolls, the wholesale minimum is typically one full roll (60 inches by 100 feet = ~500 sqft). For order-in specialty SKUs, minimums follow the manufacturer\'s standard — usually one full roll. Project-scale orders qualify for volume pricing — request a quote with your annual or per-project volume and we\'ll return a tiered sheet.' },
    },
    {
      '@type': 'Question',
      name: 'Is your Phoenix location licensed for distribution and install?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Arizona House of Film operates under Arizona ROC #314088 — a licensed residential and commercial contractor for window film. We are located at 7007 W Flower St, Phoenix, AZ 85033. We are bonded, insured, and authorized to both distribute film and perform installations anywhere in Arizona.' },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Window Film Distribution Phoenix AZ',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Arizona House of Film',
    telephone: '480-788-1591',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7007 W Flower St',
      addressLocality: 'Phoenix',
      addressRegion: 'AZ',
      postalCode: '85033',
    },
  },
  serviceType: 'Window Film Distribution',
  areaServed: 'Phoenix, AZ',
  description: 'Authorized distributor for Nexfil USA, Solyx, Madico, MaxPro, SunTek and XPEL window films. Drop-ship available for licensed contractors.',
};

export default function WindowFilmDistributorPhoenix() {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://arizonahouseoffilm.com/' },
        { name: 'Window Film Distributor Phoenix', url: canonicalUrl },
      ]} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 font-bold uppercase tracking-wider text-sm mb-4">Authorized Distributor · Licensed Installer</p>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">Arizona House of Film — Window Film Distributor &amp; Installer Phoenix</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-4">Six authorized lines in stock — Nexfil, Solyx, Madico, MaxPro, SunTek, XPEL. Drop-ship across Arizona, bulk pricing for commercial contractors, and full-service install under ROC #314088.</p>
          <p className="text-sm text-gray-400 mb-8">7007 W Flower St · Phoenix, AZ 85033 · Licensed · Bonded · Insured</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/get-a-quote" className="bg-blue-500 hover:bg-blue-400 text-white font-black uppercase tracking-wide px-8 py-4 rounded-lg text-sm">Request Distributor Pricing →</Link>
            <Link to="/ai-window-film-estimator" className="border-2 border-white text-white font-black uppercase px-8 py-4 rounded-lg text-sm hover:bg-white hover:text-slate-900">AI Estimator →</Link>
          </div>
        </div>
      </section>

      {/* LINES WE CARRY */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-4 text-center">Authorized Lines We Distribute</h2>
          <p className="text-center text-gray-600 mb-12">Six manufacturers — one Phoenix warehouse. Stock and order-in across every major commercial and decorative category.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandLines.map((b) => (
              <div key={b.brand} className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-blue-500 transition-colors">
                <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">{b.segment}</p>
                <h3 className="text-lg font-black text-slate-900 mb-2">{b.brand}</h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">{b.line}</p>
                <Link to={b.href} className="text-blue-700 underline text-sm font-semibold hover:text-blue-900">Brand details →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-8 text-center">How We Support Contractors &amp; Designers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-t-4 border-blue-600 rounded-xl p-6">
              <p className="text-4xl font-black text-blue-700 mb-2">01</p>
              <h3 className="font-black text-slate-900 mb-2">Order Direct</h3>
              <p className="text-sm text-slate-700">Wholesale rolls at contractor pricing. Stocked 48" and 60" widths, 72" and 84" order-in. Same-week delivery in Phoenix metro, 1–3 day Arizona statewide.</p>
            </div>
            <div className="bg-white border-t-4 border-emerald-600 rounded-xl p-6">
              <p className="text-4xl font-black text-emerald-700 mb-2">02</p>
              <h3 className="font-black text-slate-900 mb-2">Drop-Ship to Jobsite</h3>
              <p className="text-sm text-slate-700">Sealed rolls delivered direct to your Arizona jobsite with data sheet and photo receipt. Default for commercial contractor accounts — no warehouse pickup required.</p>
            </div>
            <div className="bg-white border-t-4 border-purple-600 rounded-xl p-6">
              <p className="text-4xl font-black text-purple-700 mb-2">03</p>
              <h3 className="font-black text-slate-900 mb-2">Or Let Us Install</h3>
              <p className="text-sm text-slate-700">ROC #314088 licensed install team. Full commercial and residential coverage — mid-rise, high-rise, retail, hospitality, multi-building. Warranty on film + labor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-8 text-center">Who We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buyers.map((b) => (
              <div key={b.title} className="border border-slate-200 rounded-xl p-6">
                <h3 className="font-black text-slate-900 mb-2">{b.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LICENSE / CREDENTIALS */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-4xl font-black text-blue-400 mb-2">ROC #314088</p>
            <p className="text-sm text-gray-300">Arizona Registrar of Contractors — residential &amp; commercial.</p>
          </div>
          <div>
            <p className="text-4xl font-black text-blue-400 mb-2">6 lines</p>
            <p className="text-sm text-gray-300">Authorized dealer: Nexfil, Solyx, Madico, MaxPro, SunTek, XPEL.</p>
          </div>
          <div>
            <p className="text-4xl font-black text-blue-400 mb-2">85033</p>
            <p className="text-sm text-gray-300">Phoenix warehouse and install HQ. Arizona-wide drop-ship and install.</p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-6">Related Pages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { to: '/brands', title: 'All Brands We Carry', desc: '35 authorized brand pages with product lines and install scope.' },
              { to: '/films', title: 'Solyx Film Catalog', desc: '618 decorative SKUs available for order or drop-ship.' },
              { to: '/commercial-window-tinting', title: 'Commercial Install', desc: 'Full-service commercial install under ROC #314088.' },
              { to: '/get-a-quote', title: 'Request a Quote', desc: 'Distributor pricing, project bid, or install estimate.' },
            ].map((r) => (
              <Link key={r.to} to={r.to} className="block bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-lg p-5">
                <p className="font-bold text-slate-900 mb-1">{r.title}</p>
                <p className="text-sm text-slate-600">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center text-slate-900 uppercase tracking-tight mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg bg-white">
                <summary className="cursor-pointer px-6 py-4 font-bold text-slate-900 flex items-center justify-between">
                  {faq.name}
                  <span className="text-blue-500 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-blue-700 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Request Distributor Pricing</h2>
          <p className="text-blue-100 mb-6">Tell us your project volume, brand preference, and Arizona delivery ZIP — we'll return a tiered quote within one business day.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-a-quote" className="bg-white text-blue-700 font-black uppercase px-8 py-4 rounded-lg text-lg hover:bg-blue-50">Request Pricing →</Link>
            <a href="tel:4807881591" className="border-2 border-white text-white font-black uppercase px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-blue-700">(480) 788-1591</a>
          </div>
          <p className="text-blue-300 text-xs mt-4">Licensed ROC #314088 · Authorized for Nexfil, Solyx, Madico, MaxPro, SunTek, XPEL</p>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}
