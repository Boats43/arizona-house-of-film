import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import BreadcrumbSchema from "../../components/SEO/BreadcrumbSchema";
import EstimatorCTA from "../../components/EstimatorCTA";
import { FILM_TYPES } from "../informational/WindowFilmCostEstimator";

const qualifyingFilms = FILM_TYPES.filter((f) => f.srpEligible);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I qualify for a window film rebate in Arizona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — if you are an SRP or APS customer and install qualifying window film on west, south, or east-facing windows. Films must meet SHGC performance thresholds. North-facing windows do not qualify. Arizona House of Film identifies eligible windows and films during your free assessment.",
      },
    },
    {
      "@type": "Question",
      name: "How much is the SRP window film rebate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SRP offers $1.00 per square foot for residential customers and $0.60 per square foot for commercial customers on qualifying window film installations. The rebate is paid directly by SRP after you submit your application with NFRC documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Does APS offer a window film rebate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "APS does not currently offer a direct window film rebate. However, Arizona House of Film honors a $1.00 per square foot credit applied directly to your invoice for APS customers — both residential and commercial.",
      },
    },
    {
      "@type": "Question",
      name: "What films qualify for the SRP rebate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Films must have an NFRC-rated SHGC of 0.45 or lower. Ceramic films, dual reflective films, and spectrally selective films typically qualify. Dyed, carbon, decorative, and security-only films generally do not meet the SHGC threshold. We confirm eligibility during your free estimate.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for the SRP window film rebate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After installation, you submit a rebate application to SRP with NFRC-rated technical data sheets, proof of professional installation, and a paid invoice. Applications must be submitted within 6 months of installation. Arizona House of Film provides all required NFRC documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a federal tax credit for window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Under the Energy Efficient Home Improvement Credit (25C), qualifying window film may be eligible for a federal tax credit of 30% of installation cost, up to $600 per year. The film must meet ENERGY STAR requirements. Consult your tax advisor for eligibility.",
      },
    },
  ],
};

export default function WindowFilmEnergyRebatesArizona() {
  const [selectedUtility, setSelectedUtility] = useState(null);
  const [customerType, setCustomerType] = useState(null);
  const [orientations, setOrientations] = useState([]);
  const [sqFt, setSqFt] = useState("");
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [installCost, setInstallCost] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    notes: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const hasQualifyingOrientation = orientations.some((o) => o !== "north");
  const sqFtNum = parseFloat(sqFt) || 0;

  const rebatePerSqFt =
    selectedUtility === "srp" && customerType === "commercial"
      ? 0.6
      : 1.0;

  const rebateAmount = sqFtNum * rebatePerSqFt;

  const defaultInstallCost = sqFtNum * 14;
  const installCostNum = parseFloat(installCost) || defaultInstallCost;
  const federalCredit = Math.min(installCostNum * 0.3, 600);
  const totalSavings = rebateAmount + federalCredit;

  const toggleOrientation = (dir) => {
    setOrientations((prev) =>
      prev.includes(dir) ? prev.filter((o) => o !== dir) : [...prev, dir]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          phone: formData.phone,
          email: formData.email,
          address: formData.city,
          message: `Rebate inquiry. Utility: ${selectedUtility?.toUpperCase() || "Not selected"}. Type: ${customerType || "Not selected"}. Est sq ft: ${sqFtNum || "Not provided"}. Est rebate: $${rebateAmount.toFixed(2)}. Notes: ${formData.notes || "None"}`,
          source: "rebate-calculator",
          website_url: e.target.website_url?.value || "",
        }),
      });
      if (res.ok) setFormStatus("success");
      else setFormStatus("error");
    } catch {
      setFormStatus("error");
    }
  };

  const cardBase =
    "border-2 rounded-lg p-6 cursor-pointer transition-all text-left";
  const cardSelected = "border-green-500 bg-green-50";
  const cardUnselected = "border-slate-200 bg-white hover:border-slate-400";

  return (
    <>
      <Helmet>
        <title>SRP Window Film Rebate Calculator Arizona | $1/sq ft | ROC #314088</title>
        <meta
          name="description"
          content="SRP customers save $1 per sq ft on qualifying window film. APS customers — Arizona House of Film honors $1/sq ft directly. Calculate your rebate instantly. Licensed ROC #314088."
        />
        <link
          rel="canonical"
          href="https://arizonahouseoffilm.com/window-film-energy-rebates-arizona"
        />
        <meta property="og:title" content="SRP Window Film Rebate Calculator Arizona | $1/sq ft" />
        <meta
          property="og:description"
          content="SRP customers save $1 per sq ft on qualifying window film. APS customers — Arizona House of Film honors $1/sq ft directly. Calculate your rebate instantly."
        />
        <meta
          property="og:url"
          content="https://arizonahouseoffilm.com/window-film-energy-rebates-arizona"
        />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SRP Window Film Rebate Calculator Arizona | $1/sq ft" />
        <meta
          name="twitter:description"
          content="SRP customers save $1 per sq ft on qualifying window film. APS customers receive $1/sq ft AHOF credit. Calculate instantly."
        />
        <meta name="twitter:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arizonahouseoffilm.com/" },
          {
            name: "Window Film Energy Rebates Arizona",
            url: "https://arizonahouseoffilm.com/window-film-energy-rebates-arizona",
          },
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* ── HERO ── */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            Arizona Window Film Rebate Calculator
          </h1>
          <p className="text-lg text-slate-700 mb-6">
            SRP customers receive $1/sq ft from SRP. APS customers receive $1/sq ft directly from
            Arizona House of Film. Calculate your savings instantly.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="inline-block bg-green-100 text-green-800 font-bold text-sm px-4 py-2 rounded-full">
              SRP: $1/sq ft
            </span>
            <span className="inline-block bg-blue-100 text-blue-800 font-bold text-sm px-4 py-2 rounded-full">
              APS: $1/sq ft AHOF Credit
            </span>
          </div>
          <p className="text-sm text-slate-500 mb-4">
            Federal tax credit: 30% of installation cost, up to $600 additional savings
          </p>
          <div className="bg-amber-50 border border-amber-300 text-amber-800 rounded-lg px-5 py-3 text-sm font-semibold">
            ⚡ SRP deadline: April 30, 2026 — submit rebate within 6 months of installation
          </div>
        </section>

        {/* ── CALCULATOR ── */}
        <section className="mb-16">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-6">
            Calculate Your Rebate
          </h2>

          {/* Step 1 — Utility */}
          <div className="mb-8">
            <p className="font-bold text-slate-800 mb-3">Step 1 — Your Utility Provider</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                className={`${cardBase} ${selectedUtility === "srp" ? cardSelected : cardUnselected}`}
                onClick={() => setSelectedUtility("srp")}
              >
                <span className="block text-lg font-black">SRP Customer</span>
                <span className="block text-sm text-slate-600 mt-1">
                  Rebate paid by SRP — $1/sq ft on qualifying windows
                </span>
              </button>
              <button
                type="button"
                className={`${cardBase} ${selectedUtility === "aps" ? cardSelected : cardUnselected}`}
                onClick={() => setSelectedUtility("aps")}
              >
                <span className="block text-lg font-black">APS Customer</span>
                <span className="block text-sm text-slate-600 mt-1">
                  Rebate credited by Arizona House of Film — $1/sq ft applied to your invoice
                </span>
              </button>
            </div>
          </div>

          {/* Step 2 — Customer Type */}
          {selectedUtility && (
            <div className="mb-8">
              <p className="font-bold text-slate-800 mb-3">Step 2 — Customer Type</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  className={`${cardBase} ${customerType === "residential" ? cardSelected : cardUnselected}`}
                  onClick={() => setCustomerType("residential")}
                >
                  <span className="block text-lg font-black">Residential</span>
                  <span className="block text-sm text-slate-600 mt-1">
                    Single-family, townhome, condo, or mobile home
                  </span>
                </button>
                <button
                  type="button"
                  className={`${cardBase} ${customerType === "commercial" ? cardSelected : cardUnselected}`}
                  onClick={() => setCustomerType("commercial")}
                >
                  <span className="block text-lg font-black">Commercial</span>
                  <span className="block text-sm text-slate-600 mt-1">
                    Office, retail, restaurant, or commercial building
                  </span>
                </button>
              </div>
              {customerType === "commercial" && (
                <p className="text-sm text-slate-500 mt-3">
                  Commercial SRP rate: $0.60/sq ft from SRP | APS: $1/sq ft AHOF credit
                </p>
              )}
            </div>
          )}

          {/* Step 3 — Orientations */}
          {customerType && (
            <div className="mb-8">
              <p className="font-bold text-slate-800 mb-3">Step 3 — Window Orientation</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["west", "south", "east", "north"].map((dir) => {
                  const isNorth = dir === "north";
                  const checked = orientations.includes(dir);
                  return (
                    <label
                      key={dir}
                      className={`flex items-center gap-2 border rounded-lg px-4 py-3 cursor-pointer transition-all ${
                        isNorth
                          ? "border-slate-200 bg-slate-50 text-slate-400"
                          : checked
                          ? "border-green-500 bg-green-50 text-green-800"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
                      }`}
                      title={isNorth ? "North-facing windows do not qualify" : ""}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleOrientation(dir)}
                        className="accent-green-600"
                      />
                      <span className="font-semibold capitalize">{dir}-facing</span>
                    </label>
                  );
                })}
              </div>
              <p className="text-sm text-slate-500 mt-2">
                Only west, south, and east-facing windows qualify for the rebate
              </p>
            </div>
          )}

          {/* Step 4 — Square Footage */}
          {hasQualifyingOrientation && (
            <div className="mb-8">
              <p className="font-bold text-slate-800 mb-3">
                Step 4 — Total Qualifying Glass Area (sq ft)
              </p>
              <input
                type="number"
                min="1"
                value={sqFt}
                onChange={(e) => setSqFt(e.target.value)}
                placeholder="e.g. 200"
                className="border border-slate-300 rounded-lg px-4 py-3 w-full max-w-xs text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <p className="text-sm text-slate-500 mt-2">
                Approximate measurements are fine — we confirm exact dimensions on-site
              </p>
              <Link
                to="/window-film-cost-estimator"
                className="text-sm text-green-700 underline mt-1 inline-block"
              >
                Not sure? Use our cost estimator to calculate your window area →
              </Link>
            </div>
          )}

          {/* Step 5 — Film Selection */}
          {sqFtNum > 0 && (
            <div className="mb-8">
              <p className="font-bold text-slate-800 mb-3">Step 5 — Select a Qualifying Film</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {qualifyingFilms.map((film) => (
                  <button
                    key={film.id}
                    type="button"
                    className={`${cardBase} ${
                      selectedFilm?.id === film.id ? cardSelected : cardUnselected
                    }`}
                    onClick={() => setSelectedFilm(film)}
                  >
                    <span className="block text-lg font-black">{film.name}</span>
                    <span className="block text-sm text-slate-600 mt-1">{film.description}</span>
                    <span className="block text-xs text-slate-500 mt-2">
                      SHGC ≤ 0.45 · Heat rejection: {film.heatReduction}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── RESULTS ── */}
          {selectedFilm && sqFtNum > 0 && (
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 mb-10">
              <h3 className="text-2xl font-black uppercase tracking-tight mb-6 text-green-900">
                Your Estimated Rebate
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-lg">
                  <span className="text-slate-700">
                    {selectedUtility === "srp" ? "SRP" : "AHOF"}{" "}
                    {customerType === "commercial" ? "commercial" : "residential"} rebate
                  </span>
                  <span className="font-black text-green-800 text-xl">
                    {sqFtNum.toLocaleString()} sq ft × ${rebatePerSqFt.toFixed(2)} ={" "}
                    <span className="text-2xl">${rebateAmount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </span>
                </div>
                {selectedUtility === "srp" && (
                  <p className="text-sm text-slate-500">Paid by SRP after application approval</p>
                )}
                {selectedUtility === "aps" && (
                  <p className="text-sm text-slate-500">
                    Applied as a credit on your Arizona House of Film invoice
                  </p>
                )}
              </div>

              <div className="border-t border-green-300 pt-5 mb-6">
                <p className="font-bold text-slate-800 mb-2">Federal Tax Credit Estimate</p>
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  <label className="text-sm text-slate-600 whitespace-nowrap">
                    Estimated installation cost ($):
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={installCost || defaultInstallCost}
                    onChange={(e) => setInstallCost(e.target.value)}
                    className="border border-slate-300 rounded-lg px-3 py-2 w-40 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <p className="text-lg mt-3 text-slate-700">
                  Est. federal tax credit:{" "}
                  <span className="font-black text-green-800">
                    ${federalCredit.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>{" "}
                  <span className="text-sm text-slate-500">(30% of cost, capped at $600)</span>
                </p>
              </div>

              <div className="border-t border-green-300 pt-5">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-green-900">Total Estimated Savings</span>
                  <span className="text-3xl font-black text-green-800">
                    ${totalSavings.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-6">
                Rebate amounts are estimates. SRP rebate subject to program terms. Federal tax
                credit subject to IRS eligibility. Arizona House of Film provides NFRC documentation
                — customers submit rebate applications directly to SRP.
              </p>
            </div>
          )}
        </section>

        {/* ── LEAD CAPTURE FORM ── */}
        <section className="bg-slate-100 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-2">
            Claim Your Rebate — Schedule a Free Assessment
          </h2>
          <p className="text-slate-600 mb-6">
            We handle the measurements and provide the NFRC documentation you need for your rebate
            application.
          </p>

          {formStatus === "success" ? (
            <div className="bg-green-100 border border-green-400 rounded-lg p-6 text-green-900">
              <p className="font-bold text-lg mb-2">Thank you — we'll be in touch within 24 hours to schedule your free on-site assessment.</p>
              <p className="text-sm">
                In the meantime, download the SRP rebate application:{" "}
                <a
                  href="https://srpnet.com/energy-savings-rebates/home/rebates/shade-screen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold"
                >
                  srpnet.com/energy-savings-rebates/home/rebates/shade-screen
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">First Name *</label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="border border-slate-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Last Name *</label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="border border-slate-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border border-slate-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border border-slate-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">City / Location *</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="border border-slate-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Utility Provider</label>
                <select
                  value={selectedUtility || ""}
                  onChange={(e) => setSelectedUtility(e.target.value || null)}
                  className="border border-slate-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                >
                  <option value="">Select...</option>
                  <option value="srp">SRP</option>
                  <option value="aps">APS</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Customer Type</label>
                <select
                  value={customerType || ""}
                  onChange={(e) => setCustomerType(e.target.value || null)}
                  className="border border-slate-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                >
                  <option value="">Select...</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Approximate sq ft</label>
                <input
                  type="number"
                  min="0"
                  value={sqFt}
                  onChange={(e) => setSqFt(e.target.value)}
                  className="border border-slate-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-1">Message / Notes</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="border border-slate-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              {/* Honeypot */}
              <input
                type="text"
                name="website_url"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="bg-green-600 hover:bg-green-500 text-white font-black uppercase tracking-wide px-8 py-4 rounded-lg text-lg transition-colors disabled:opacity-50 w-full sm:w-auto"
                >
                  {formStatus === "submitting" ? "Submitting..." : "Schedule Free Assessment →"}
                </button>
                {formStatus === "error" && (
                  <p className="text-red-600 text-sm mt-2">
                    Something went wrong. Please call (480) 788-1591 instead.
                  </p>
                )}
              </div>
            </form>
          )}
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="mb-16">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-6">
            How the Arizona Window Film Rebate Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Schedule Assessment",
                text: "Free on-site measurement — we confirm qualifying windows and orientations.",
              },
              {
                step: "2",
                title: "Choose Your Film",
                text: "Select from SRP-approved films with SHGC ≤ 0.45. We recommend the best option for your glass.",
              },
              {
                step: "3",
                title: "We Handle the Paperwork",
                text: "We provide NFRC documentation, paid invoice, and installation proof. You submit to SRP.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="border border-slate-200 rounded-lg p-6 text-center"
              >
                <div className="w-10 h-10 bg-green-600 text-white font-black rounded-full flex items-center justify-center mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-black text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SRP vs APS TABLE ── */}
        <section className="mb-16">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-6">
            SRP vs APS — What's the Difference?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 font-black text-sm"></th>
                  <th className="border border-slate-200 px-4 py-3 font-black text-sm">SRP</th>
                  <th className="border border-slate-200 px-4 py-3 font-black text-sm">APS</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-700">
                <tr>
                  <td className="border border-slate-200 px-4 py-3 font-semibold">Residential film rebate</td>
                  <td className="border border-slate-200 px-4 py-3">$1/sq ft</td>
                  <td className="border border-slate-200 px-4 py-3">$1/sq ft AHOF credit</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 font-semibold">Commercial film rebate</td>
                  <td className="border border-slate-200 px-4 py-3">$0.60/sq ft</td>
                  <td className="border border-slate-200 px-4 py-3">$1/sq ft AHOF credit</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 font-semibold">Paid by</td>
                  <td className="border border-slate-200 px-4 py-3">SRP utility</td>
                  <td className="border border-slate-200 px-4 py-3">Arizona House of Film</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 font-semibold">Applied as</td>
                  <td className="border border-slate-200 px-4 py-3">Rebate check</td>
                  <td className="border border-slate-200 px-4 py-3">Invoice discount</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 font-semibold">Deadline</td>
                  <td className="border border-slate-200 px-4 py-3">April 30, 2026</td>
                  <td className="border border-slate-200 px-4 py-3">No deadline</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 font-semibold">Federal tax credit</td>
                  <td className="border border-slate-200 px-4 py-3">Yes — 30% up to $600</td>
                  <td className="border border-slate-200 px-4 py-3">Yes — 30% up to $600</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── QUALIFYING FILMS ── */}
        <section className="mb-16">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-6">
            Qualifying Films for the SRP Rebate
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualifyingFilms.map((film) => (
              <div
                key={film.id}
                className="border border-slate-200 rounded-lg p-5"
              >
                <h3 className="font-black text-lg">{film.name}</h3>
                <p className="text-sm text-slate-600 mt-1">{film.description}</p>
                <p className="text-xs text-slate-500 mt-2">
                  Heat rejection: {film.heatReduction} · UV block: {film.uvBlock}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mb-16">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-6">
            Frequently Asked Questions
          </h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <div key={i} className="mb-6 border-b border-slate-200 pb-6">
              <h3 className="text-lg font-bold mb-2">{faq.name}</h3>
              <p className="text-slate-700">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </section>

        {/* ── ESTIMATOR CTA ── */}
        <EstimatorCTA />

        {/* ── BOTTOM SERVICE LINKS ── */}
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <Link
            to="/residential-window-tinting"
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Residential Window Film →
          </Link>
          <Link
            to="/commercial-window-tinting"
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Commercial Window Film →
          </Link>
        </div>

        {/* ── INTERNAL LINKS ── */}
        <section className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">
            Related Resources
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link to="/window-film-cost-estimator" className="text-green-700 underline">Cost Estimator</Link>
            <Link to="/residential-window-tinting" className="text-green-700 underline">Residential Window Film</Link>
            <Link to="/commercial-window-tinting" className="text-green-700 underline">Commercial Window Film</Link>
            <Link to="/energy-saving-window-films" className="text-green-700 underline">Energy Saving Films</Link>
            <Link to="/get-a-quote" className="text-green-700 underline">Get a Quote</Link>
          </div>
        </section>
      </main>
    </>
  );
}
