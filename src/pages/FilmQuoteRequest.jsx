import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema.jsx';
import { Calculator, Plus, Trash2, Loader2 } from 'lucide-react';

const filmCategories = [
  { id: 'solar', label: 'Solar Control', desc: 'Heat rejection, glare reduction' },
  { id: 'dual-reflective', label: 'Dual Reflective', desc: 'Daytime privacy + solar control' },
  { id: 'security', label: 'Security / Safety (4–21 mil)', desc: 'Break-in deterrence, blast mitigation' },
  { id: 'decorative', label: 'Decorative / Frosted', desc: 'Privacy, branding, aesthetic' },
  { id: 'anti-graffiti', label: 'Anti-Graffiti', desc: 'Sacrificial surface protection' },
  { id: 'cloaking', label: 'Cloaking (Casper/Quantum)', desc: 'Screen privacy for conference rooms' },
  { id: 'countertop', label: 'Countertop Protection', desc: 'Surface protection film' },
  { id: 'unsure', label: 'Not sure — need recommendation', desc: 'We\'ll help you choose' },
];


const emptyWindow = () => ({ id: Date.now(), description: '', width: '', height: '', quantity: '1' });

const FilmQuoteRequest = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [windows, setWindows] = useState([emptyWindow()]);

  const pageTitle = 'Get a Window Film Quote | Arizona House of Film | ROC #314088';
  const metaDescription = 'Request a window film quote from Arizona House of Film. Select your film type, enter measurements, and get a detailed quote within 24 hours. ROC #314088.';
  const canonicalUrl = 'https://arizonahouseoffilm.com/get-a-quote';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does it take to get a quote?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We review all quote requests and respond within 24 hours with detailed pricing based on your film selection and measurements.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need exact measurements?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Approximate measurements are fine for an initial quote. We confirm exact dimensions during the free on-site assessment before installation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I request a specific film brand?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We install 3M, LLumar, Madico, Solar Gard, Huper Optik, Solyx, and more. If you have a specific film in mind, note it in your request or select it from the film dropdown.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the quote free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All quotes from Arizona House of Film are free with no obligation. Licensed ROC #314088.',
        },
      },
    ],
  };

  const addWindow = () => setWindows((prev) => [...prev, emptyWindow()]);
  const removeWindow = (id) => setWindows((prev) => prev.length > 1 ? prev.filter((w) => w.id !== id) : prev);
  const updateWindow = (id, field, value) =>
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, [field]: value } : w)));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const fd = new FormData(form);

    const windowSummary = windows
      .map((w, i) => `Window ${i + 1}: ${w.description || 'No description'} — ${w.width}"W x ${w.height}"H x ${w.quantity} qty`)
      .join('\n');

    const payload = {
      name: `${fd.get('firstName') || ''} ${fd.get('lastName') || ''}`.trim(),
      phone: fd.get('phone') || '',
      email: fd.get('email') || '',
      company: fd.get('company') || '',
      address: fd.get('city') || '',
      propertyType: fd.get('propertyType') || '',
      filmCategory: selectedCategory || '',
      rollWidth: fd.get('rollWidth') || '',
      glassType: fd.get('glassType') || '',
      existingFilm: fd.get('existingFilm') || '',
      hoaRestrictions: fd.get('hoaRestrictions') || '',
      timeline: fd.get('timeline') || '',
      preferredContact: fd.get('preferredContact') || '',
      heardAboutUs: fd.get('heardAboutUs') || '',
      notes: fd.get('notes') || '',
      windowMeasurements: windowSummary,
      totalWindows: windows.length,
      source: 'film-quote-request',
      message: `Film Quote Request\n\nCategory: ${selectedCategory}\nProperty: ${fd.get('propertyType')}\nGlass: ${fd.get('glassType')}\nExisting film: ${fd.get('existingFilm')}\nHOA: ${fd.get('hoaRestrictions')}\nTimeline: ${fd.get('timeline')}\nRoll width: ${fd.get('rollWidth')}\nHeard about us: ${fd.get('heardAboutUs')}\n\nWindows:\n${windowSummary}\n\nNotes: ${fd.get('notes') || 'None'}`,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'generate_lead',
          form_source: 'film-quote-request',
          page_path: window.location.pathname,
        });

        form.reset();
        setWindows([emptyWindow()]);
        setSelectedCategory('');
        toast({
          title: 'Quote Request Received',
          description: "We'll contact you within 24 hours with detailed pricing.",
          className: 'bg-green-600 border-none text-white font-bold rounded-none',
        });
        setTimeout(() => navigate('/thank-you'), 1500);
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      toast({
        variant: 'destructive',
        title: 'Submission Error',
        description: 'Please call us directly at 480-788-1591',
        className: 'rounded-none font-bold',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = 'w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none';
  const labelClass = 'block text-sm font-bold text-slate-800 mb-1';

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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Get a Quote', path: '/get-a-quote' },
      ]} />

      <main id="main-content" className="bg-slate-50 min-h-screen">
        {/* HERO */}
        <section className="py-20 bg-slate-950 border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1 bg-green-500 text-slate-950 font-black text-xs mb-6 uppercase tracking-widest">
              Free Quote • No Obligation • ROC #314088
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
              Get a Window Film Quote
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Select your film type, enter your measurements, and receive a detailed quote within 24 hours. All quotes are free with no obligation.
            </p>
          </div>
        </section>

        {/* ESTIMATOR CTA — Quick Ballpark */}
        <section className="bg-gray-900 border-t-4 border-green-500 py-10 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <Calculator className="text-green-400 w-8 h-8" />
            </div>
            <h2 className="text-xl font-black text-white uppercase tracking-tight mb-2">
              Want a quick ballpark first?
            </h2>
            <p className="text-gray-400 mb-4 text-sm">
              Use our instant cost estimator for a rough price range before submitting a detailed quote request.
            </p>
            <a
              href="/window-film-cost-estimator"
              className="inline-block bg-green-500 hover:bg-green-400 text-white font-black uppercase tracking-wide px-6 py-3 rounded-lg text-base transition-colors"
            >
              Use the Cost Estimator
            </a>
          </div>
        </section>

        {/* FORM */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <form onSubmit={handleSubmit} className="space-y-12">
              <input type="text" name="website_url" style={{display:'none'}} tabIndex={-1} autoComplete="off" />

              {/* SECTION 1 — Contact Info */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <h2 className="text-xl font-black text-slate-950 uppercase tracking-tight mb-6 border-b border-slate-200 pb-3">
                  1. Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>First Name *</label>
                    <input name="firstName" type="text" required className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Last Name *</label>
                    <input name="lastName" type="text" required className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Phone *</label>
                    <input name="phone" type="tel" required className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input name="email" type="email" required className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Company (optional)</label>
                    <input name="company" type="text" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>City / Location *</label>
                    <input name="city" type="text" required className={inputClass} placeholder="e.g. Scottsdale, Phoenix" />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>Property Type *</label>
                    <select name="propertyType" required className={inputClass}>
                      <option value="">Select property type</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Government">Government</option>
                      <option value="New Construction">New Construction</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* SECTION 2 — Film Selection */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <h2 className="text-xl font-black text-slate-950 uppercase tracking-tight mb-6 border-b border-slate-200 pb-3">
                  2. Film Selection
                </h2>
                <label className={labelClass + ' mb-3'}>Film Category *</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {filmCategories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`text-left border rounded-lg p-3 transition-all ${
                        selectedCategory === cat.id
                          ? 'border-green-500 bg-green-50 ring-2 ring-green-500'
                          : 'border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      <div className="font-bold text-slate-900 text-sm">{cat.label}</div>
                      <div className="text-xs text-slate-500 mt-1">{cat.desc}</div>
                    </button>
                  ))}
                </div>

                {selectedCategory && (
                  <p className="text-sm text-slate-500 italic">We'll recommend the best film for your project during the on-site assessment.</p>
                )}
              </div>

              {/* SECTION 3 — Measurements */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <h2 className="text-xl font-black text-slate-950 uppercase tracking-tight mb-6 border-b border-slate-200 pb-3">
                  3. Window Measurements
                </h2>
                <p className="text-sm text-slate-500 mb-4">Approximate measurements are fine. We confirm exact dimensions on-site.</p>

                <div className="space-y-4">
                  {windows.map((w, idx) => (
                    <div key={w.id} className="flex flex-wrap items-end gap-3 bg-slate-50 border border-slate-200 rounded-lg p-4">
                      <div className="flex-1 min-w-[140px]">
                        <label className="text-xs font-bold text-slate-600">Description</label>
                        <input
                          type="text"
                          placeholder="e.g. Living room west wall"
                          value={w.description}
                          onChange={(e) => updateWindow(w.id, 'description', e.target.value)}
                          className={inputClass}
                        />
                      </div>
                      <div className="w-20">
                        <label className="text-xs font-bold text-slate-600">Width (in)</label>
                        <input
                          type="number"
                          min="1"
                          value={w.width}
                          onChange={(e) => updateWindow(w.id, 'width', e.target.value)}
                          className={inputClass}
                        />
                      </div>
                      <div className="w-20">
                        <label className="text-xs font-bold text-slate-600">Height (in)</label>
                        <input
                          type="number"
                          min="1"
                          value={w.height}
                          onChange={(e) => updateWindow(w.id, 'height', e.target.value)}
                          className={inputClass}
                        />
                      </div>
                      <div className="w-16">
                        <label className="text-xs font-bold text-slate-600">Qty</label>
                        <input
                          type="number"
                          min="1"
                          value={w.quantity}
                          onChange={(e) => updateWindow(w.id, 'quantity', e.target.value)}
                          className={inputClass}
                        />
                      </div>
                      {windows.length > 1 && (
                        <button type="button" onClick={() => removeWindow(w.id)} className="p-2 text-red-500 hover:bg-red-50 rounded">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={addWindow}
                  className="mt-4 flex items-center gap-2 text-sm font-bold text-green-700 hover:text-green-800 transition-colors"
                >
                  <Plus className="w-4 h-4" /> Add another window
                </button>

                <div className="mt-6">
                  <label className={labelClass}>Preferred Roll Width</label>
                  <select name="rollWidth" className={inputClass + ' max-w-xs'}>
                    <option value="No preference">No preference</option>
                    <option value="48 inches">48"</option>
                    <option value="60 inches">60"</option>
                    <option value="72 inches">72"</option>
                  </select>
                </div>
              </div>

              {/* SECTION 4 — Project Details */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
                <h2 className="text-xl font-black text-slate-950 uppercase tracking-tight mb-6 border-b border-slate-200 pb-3">
                  4. Project Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Glass Type</label>
                    <select name="glassType" className={inputClass}>
                      <option value="Unknown">Unknown</option>
                      <option value="Single pane">Single pane</option>
                      <option value="Dual pane">Dual pane</option>
                      <option value="Tempered">Tempered</option>
                      <option value="Low-E">Low-E</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Existing film to remove?</label>
                    <select name="existingFilm" className={inputClass}>
                      <option value="Unknown">Unknown</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>HOA restrictions?</label>
                    <select name="hoaRestrictions" className={inputClass}>
                      <option value="N/A">N/A</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Timeline</label>
                    <select name="timeline" className={inputClass}>
                      <option value="ASAP">ASAP</option>
                      <option value="Within 30 days">Within 30 days</option>
                      <option value="60-90 days">60–90 days</option>
                      <option value="Planning ahead">Planning ahead</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Preferred contact method</label>
                    <select name="preferredContact" className={inputClass}>
                      <option value="Phone call">Phone call</option>
                      <option value="Text">Text</option>
                      <option value="Email">Email</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>How did you hear about us?</label>
                    <select name="heardAboutUs" className={inputClass}>
                      <option value="">Select</option>
                      <option value="Google">Google</option>
                      <option value="Google Maps">Google Maps</option>
                      <option value="Referral">Referral</option>
                      <option value="Yelp">Yelp</option>
                      <option value="Returning customer">Returning customer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>Additional Notes</label>
                    <textarea name="notes" rows={4} className={inputClass} placeholder="Any additional details about your project..." />
                  </div>
                </div>
              </div>

              {/* SUBMIT */}
              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting || !selectedCategory}
                  className="bg-green-600 hover:bg-green-700 text-white px-12 h-16 text-xl font-black rounded-none transition-all shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2"><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</span>
                  ) : (
                    'Submit Quote Request'
                  )}
                </Button>
                <p className="text-slate-500 text-sm mt-3">Free quote. No obligation. We respond within 24 hours.</p>
              </div>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-black text-slate-950 uppercase tracking-tight mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, idx) => (
                <div key={idx} className="border-b border-slate-200 pb-4">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.name}</h3>
                  <p className="text-slate-600 text-sm">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FilmQuoteRequest;
