import React from 'react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Bot, DollarSign, CheckCircle2, Shield, Eye, Sun, Ruler, Layers, Grid3X3, Building2, Home, Sparkles, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';

const pageTitle = 'AI Window Film Estimator Phoenix AZ | Photo Analysis | Instant Quote';
const metaDescription = "Arizona's only AI-powered window film estimator. Upload photos of your windows — our AI analyzes them and gives you an instant ballpark estimate. Free. No sales call needed. ROC #314088.";
const canonicalUrl = 'https://arizonahouseoffilm.com/ai-window-film-estimator';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How accurate is the AI estimate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our AI provides ballpark estimates within 15-25% of final pricing. It analyzes window dimensions, sun exposure, and film type from your photos. For exact pricing, we follow up with a free on-site measurement — but the AI gets you in the right range instantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the AI work for commercial buildings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our AI handles commercial projects including office buildings, retail storefronts, restaurants, medical facilities, and multi-story structures. Upload photos of each area and get an itemized commercial estimate with per-area pricing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I have French doors or divided lite windows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The AI detects French pane and divided lite windows automatically and applies the appropriate surcharge. These windows require more labor due to individual pane cutting, so the AI factors that into your estimate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the AI recommend security film?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Describe your security concern or upload photos and the AI will recommend the appropriate mil thickness (4-21 mil) with pricing for both in-stock and premium security film options.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between in-stock and order-in films?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In-stock films (SunTek, Madico, Flexfilm) are available for same-week installation at lower cost. Order-in films (Huper Optik, LLumar, 3M) are premium brands that take 1-2 weeks to arrive but offer superior specifications. The AI shows you both options.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many photos should I upload?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One photo per window area is ideal. For a whole-home estimate, photograph each room with windows. The AI tracks each area separately and gives you an itemized breakdown by location.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my photo stored after analysis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Photos are processed in real-time by our AI and are not permanently stored. They are used only for the duration of your chat session to generate your estimate.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum job size?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our minimum project size is $500. The AI will note this if your estimated square footage falls below our minimum threshold.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get an estimate for a multi-building project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Upload photos from multiple buildings and our AI will track each building separately, providing per-building and total project estimates with commercial pricing tiers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from a regular quote form?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A regular quote form collects your info and someone calls you back days later. Our AI analyzes your actual windows from photos and gives you a ballpark estimate in seconds — with specific film recommendations, two pricing tiers, and no waiting.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Window Film Estimator',
  description: metaDescription,
  provider: {
    '@type': 'LocalBusiness',
    name: 'Arizona House of Film',
    telephone: '+1-480-788-1591',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7007 W Flower St',
      addressLocality: 'Phoenix',
      addressRegion: 'AZ',
      postalCode: '85033',
    },
  },
  areaServed: {
    '@type': 'State',
    name: 'Arizona',
  },
  serviceType: 'Window Film Estimation',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free AI-powered window film estimate via photo analysis',
  },
};

const capabilities = [
  { icon: Ruler, title: 'Window type & dimensions' },
  { icon: Sun, title: 'Sun exposure & orientation' },
  { icon: Eye, title: 'Existing film or glass condition' },
  { icon: Building2, title: 'Residential vs commercial' },
  { icon: Grid3X3, title: 'French pane / divided lite detection' },
  { icon: Layers, title: 'Multi-area project scope' },
  { icon: Ruler, title: 'Square footage estimation' },
  { icon: Sparkles, title: 'Film category recommendation' },
  { icon: CheckCircle2, title: 'In-stock vs order-in options' },
  { icon: DollarSign, title: 'Budget tier options' },
];

const painPoints = [
  {
    question: 'How much does window tinting cost?',
    answer: "Stop guessing. Upload a photo and get a real ballpark in seconds — not days. Our AI estimates sqft, recommends film, and shows you two price options.",
  },
  {
    question: 'Not sure what film you need?',
    answer: "Ceramic? Reflective? Frosted? Security? Tell our AI your problem — hot room, nosy neighbors, privacy, safety — and it recommends the exact film for your situation.",
  },
  {
    question: 'Worried about getting the wrong film?',
    answer: "Arizona's extreme heat requires specific film specs. Our AI knows the difference between south-facing and north-facing glass and recommends accordingly.",
  },
  {
    question: 'Need a commercial quote fast?',
    answer: "Upload photos of your building. Get an itemized estimate per area — offices, retail, restaurants, medical facilities — with commercial pricing.",
  },
  {
    question: 'Security film for your business?',
    answer: "Describe your security concern or upload photos. Get mil-thickness recommendations and pricing for 4-21 mil security film.",
  },
  {
    question: 'Decorative film for privacy?',
    answer: "Browse 618 Solyx decorative patterns. Upload your window photo and see recommendations for your space.",
  },
];

const sampleEstimates = [
  {
    title: 'Residential Phoenix Home',
    details: [
      '2 west-facing living room windows (est. 30 sqft)',
      '+ 1 sliding door (est. 40 sqft)',
      'Total: ~70 sqft',
    ],
    fast: { label: 'SunTek ceramic, same week', price: '$700 - $1,050' },
    premium: { label: 'Huper Optik, 1-2 weeks', price: '$1,050 - $1,400' },
  },
  {
    title: 'Scottsdale Office',
    details: [
      '3 south-facing office windows (est. 60 sqft)',
      'Total: ~60 sqft commercial',
    ],
    fast: { label: 'Madico dual-reflective, same week', price: '$720 - $1,080' },
    premium: { label: 'LLumar CTX, 1-2 weeks', price: '$1,080 - $1,440' },
  },
  {
    title: 'French Doors',
    details: [
      '2 French pane doors (est. 35 sqft + surcharge)',
      'Base: 50 sqft minimum',
      'French pane surcharge applied',
    ],
    fast: { label: 'In-stock, same week', price: '$600 - $750' },
    premium: { label: 'Premium, 1-2 weeks', price: '$750 - $1,000' },
  },
];

function openChatWidget() {
  if (typeof window === 'undefined') return;
  // Primary: dispatch force-open event (idempotent — will not close an already-open chat)
  window.dispatchEvent(new CustomEvent('ahof:open-chat'));
  // Fallback: click the floating toggle if the event listener hasn't mounted yet
  const btn = document.querySelector('[data-chat-toggle]');
  if (btn && btn.getAttribute('aria-expanded') !== 'true') btn.click();
}

export default function AIWindowFilmEstimator() {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://arizonahouseoffilm.com/' },
          { name: 'AI Window Film Estimator', url: canonicalUrl },
        ]}
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
              AI Window Film Estimator — Phoenix AZ
            </h1>
            <p className="text-xl md:text-2xl font-bold text-green-400 mb-4">
              Get an Instant Window Film Estimate — Just Take a Photo
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Arizona's first AI-powered window film estimator analyzes your windows, identifies the right film, and gives you a ballpark estimate in seconds. No sales visit required.
            </p>
            <button
              onClick={openChatWidget}
              className="inline-block bg-green-500 hover:bg-green-400 text-white font-black uppercase tracking-wide px-10 py-5 rounded-lg text-xl transition-colors shadow-lg shadow-green-500/25"
            >
              Start AI Estimate →
            </button>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-400">
              <span>ROC #314088</span>
              <span>Licensed & Bonded</span>
              <span>713+ Projects</span>
              <span>U.S. Navy Veteran Owned</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center text-slate-900 uppercase tracking-tight mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Camera, step: '1', emoji: '', title: 'Take a Photo', desc: 'Photograph your windows from inside or outside. Our AI works with any phone camera.' },
              { icon: Bot, step: '2', emoji: '', title: 'AI Analyzes', desc: 'Our AI identifies window type, size, sun exposure, and recommends the right film for your situation.' },
              { icon: DollarSign, step: '3', emoji: '', title: 'Get Your Estimate', desc: 'Receive an itemized ballpark estimate with in-stock and premium options — immediately. No waiting.' },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-xl bg-slate-50 border border-slate-200"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-bold text-green-600 mb-2">STEP {item.step}</div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THE AI CAN IDENTIFY */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center text-slate-900 uppercase tracking-tight mb-12">
            What the AI Can Identify
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-lg p-4 text-center border border-slate-200 shadow-sm"
              >
                <cap.icon className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <p className="text-sm font-bold text-slate-800">{cap.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN POINTS SOLVED */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center text-slate-900 uppercase tracking-tight mb-12">
            Questions Our AI Answers Instantly
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-slate-900 rounded-xl p-6 text-white"
              >
                <HelpCircle className="w-6 h-6 text-green-400 mb-3" />
                <h3 className="text-lg font-black mb-3 text-green-400">"{point.question}"</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{point.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE AI ESTIMATOR WIDGET */}
      <section className="py-16 px-6 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-4">
            Try It Now — Upload Your Window Photos
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Tap the button below to open the AI estimator. Upload photos of your windows and get your instant estimate.
          </p>
          <button
            onClick={openChatWidget}
            className="inline-block bg-white text-green-700 font-black uppercase tracking-wide px-10 py-5 rounded-lg text-xl transition-colors hover:bg-green-50 shadow-lg"
          >
            Open AI Estimator
          </button>
        </div>
      </section>

      {/* SAMPLE ESTIMATES */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center text-slate-900 uppercase tracking-tight mb-4">
            Sample AI Estimates
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Here's what our AI identified for recent projects — including <Link to="/commercial-window-tinting-scottsdale" className="text-blue-600 underline hover:text-blue-800">Scottsdale office window film</Link> installations:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {sampleEstimates.map((est, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <div className="bg-slate-900 text-white px-6 py-4">
                  <h3 className="font-black text-lg">{est.title}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-1 mb-4">
                    {est.details.map((d, j) => (
                      <p key={j} className="text-sm text-gray-700">{d}</p>
                    ))}
                  </div>
                  <div className="border-t border-slate-200 pt-4 space-y-3">
                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="text-xs font-bold text-green-700 uppercase">Fast Option</p>
                      <p className="text-sm text-gray-700">{est.fast.label}</p>
                      <p className="text-lg font-black text-green-600">{est.fast.price}</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-xs font-bold text-blue-700 uppercase">Premium Option</p>
                      <p className="text-sm text-gray-700">{est.premium.label}</p>
                      <p className="text-lg font-black text-blue-600">{est.premium.price}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Estimator Banner */}
      <section className="py-8 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-gray-700 mb-3">
            Prefer a manual calculator? <Link to="/window-film-cost-estimator" className="text-blue-600 underline hover:text-blue-800 font-bold">Use our interactive cost estimator →</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-center text-slate-900 uppercase tracking-tight mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg">
                <summary className="cursor-pointer px-6 py-4 font-bold text-slate-900 flex items-center justify-between">
                  {faq.name}
                  <span className="text-green-500 group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-6">
            Trusted by Arizona's Leading Organizations
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-gray-400 text-sm">
            <div className="text-center">
              <p className="text-4xl font-black text-green-400">713+</p>
              <p>Projects Completed Since 2017</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-green-400">4.6</p>
              <p>Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-green-400">618</p>
              <p>Film SKUs Available</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            Licensed ROC #314088 | Bonded & Insured | U.S. Navy Veteran Owned
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 px-6 bg-green-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4">
            Ready for Your Free AI Estimate?
          </h2>
          <p className="text-green-100 mb-6">
            No forms. No sales calls. Just upload photos and get your estimate.
          </p>
          <button
            onClick={openChatWidget}
            className="inline-block bg-white text-green-700 font-black uppercase tracking-wide px-10 py-5 rounded-lg text-xl transition-colors hover:bg-green-50 shadow-lg"
          >
            Start AI Estimate →
          </button>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}
