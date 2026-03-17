import { useState } from "react";
import { Helmet } from "react-helmet-async";
import BreadcrumbSchema from "../../components/SEO/BreadcrumbSchema";
import { Link } from "react-router-dom";

const FILM_TYPES = [
  {
    id: "solar-standard",
    name: "Solar Control Film",
    description: "Reduces heat, blocks UV — standard specification",
    pricePerSqFt: { low: 10, high: 13 },
    heatReduction: "50–70%",
    uvBlock: "99%",
    srpEligible: true,
    apsEligible: true,
    savings: { low: 180, high: 420 },
  },
  {
    id: "solar-ceramic",
    name: "Ceramic Solar Film",
    description: "Maximum heat rejection, signal-safe, HOA-compatible",
    pricePerSqFt: { low: 13, high: 18 },
    heatReduction: "70–84%",
    uvBlock: "99.9%",
    srpEligible: true,
    apsEligible: true,
    savings: { low: 250, high: 725 },
  },
  {
    id: "security",
    name: "Security Film",
    description: "8–12 mil safety film, holds glass on impact",
    pricePerSqFt: { low: 15, high: 22 },
    heatReduction: "30–50%",
    uvBlock: "99%",
    srpEligible: false,
    apsEligible: false,
    savings: null,
  },
  {
    id: "decorative",
    name: "Decorative / Privacy Film",
    description: "Frosted, etched, patterned — 600+ options",
    pricePerSqFt: { low: 12, high: 20 },
    heatReduction: "20–40%",
    uvBlock: "99%",
    srpEligible: false,
    apsEligible: false,
    savings: null,
  },
  {
    id: "anti-graffiti",
    name: "Anti-Graffiti Film",
    description: "Sacrificial peel-and-replace storefront protection",
    pricePerSqFt: { low: 8, high: 12 },
    heatReduction: "10–20%",
    uvBlock: "95%",
    srpEligible: false,
    apsEligible: false,
    savings: null,
  },
];

const WINDOW_SIZES = [
  { id: "small", label: "Small (2×3)", sqFt: 6, example: "Bathroom, sidelight" },
  { id: "medium", label: "Medium (3×4)", sqFt: 12, example: "Bedroom, office" },
  { id: "standard", label: "Standard (4×5)", sqFt: 20, example: "Living room" },
  { id: "large", label: "Large (5×5)", sqFt: 25, example: "Sliding door, picture window" },
  { id: "xlarge", label: "XL (6×6)", sqFt: 36, example: "Commercial, floor-to-ceiling" },
];

const btnStyle = (bg, color = "#fff") => ({
  background: bg,
  color,
  border: "none",
  borderRadius: "6px",
  padding: "14px 28px",
  fontSize: "14px",
  fontWeight: "bold",
  cursor: "pointer",
  flex: 1,
  letterSpacing: "0.5px",
});

const statCard = {
  background: "#12121a",
  border: "1px solid #2a2a35",
  borderRadius: "8px",
  padding: "16px",
  textAlign: "center",
};

export default function WindowFilmCostEstimator() {
  const [step, setStep] = useState(1);
  const [windowCount, setWindowCount] = useState(14);
  const [selectedSize, setSelectedSize] = useState(WINDOW_SIZES[2]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [propertyType, setPropertyType] = useState("residential");

  const totalSqFt = windowCount * selectedSize.sqFt;
  const estimate = selectedFilm
    ? {
        low: Math.round(totalSqFt * selectedFilm.pricePerSqFt.low),
        high: Math.round(totalSqFt * selectedFilm.pricePerSqFt.high),
      }
    : null;

  const rebateNote =
    selectedFilm?.srpEligible || selectedFilm?.apsEligible
      ? "SRP & APS rebates may apply — reducing your net cost."
      : null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does window film cost in Arizona?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Window film installation in Arizona typically costs $8–$22 per square foot depending on the film type. Solar control film runs $10–$13/sq ft, ceramic solar film $13–$18/sq ft, security film $15–$22/sq ft, and decorative/privacy film $12–$20/sq ft. Use our free estimator for a personalized quote.",
        },
      },
      {
        "@type": "Question",
        name: "Are there rebates for window film in Arizona?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — SRP and APS both offer energy rebates for qualifying solar control and ceramic window film installations. These rebates can significantly reduce your net cost. Arizona House of Film helps customers apply for all available utility rebates.",
        },
      },
      {
        "@type": "Question",
        name: "How much can I save on energy bills with window film?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Arizona homeowners typically save $180–$725 per year on cooling costs after installing solar or ceramic window film, depending on the number of windows, film type, and home size. Ceramic solar film offers the highest savings at $250–$725/year.",
        },
      },
      {
        "@type": "Question",
        name: "What type of window film is best for Arizona heat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ceramic solar film is the top choice for Arizona heat, rejecting 70–84% of solar heat while blocking 99.9% of UV rays. It's signal-safe (won't interfere with Wi-Fi or cell signals) and HOA-compatible since it maintains a neutral appearance.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Window Film Cost Estimator — Arizona Pricing Calculator | ROC #314088</title>
        <meta
          name="description"
          content="Estimate your window film installation cost in Arizona. Compare solar, ceramic, security, and decorative film pricing per sq ft. SRP & APS rebate eligible. Free calculator."
        />
        <link rel="canonical" href="https://arizonahouseoffilm.com/window-film-cost-estimator" />
        <meta property="og:title" content="Window Film Cost Estimator — Arizona Pricing Calculator" />
        <meta
          property="og:description"
          content="Estimate your window film installation cost in Arizona. Compare solar, ceramic, security, and decorative film pricing per sq ft."
        />
        <meta property="og:url" content="https://arizonahouseoffilm.com/window-film-cost-estimator" />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Window Film Cost Estimator — Arizona Pricing Calculator" />
        <meta
          name="twitter:description"
          content="Estimate your window film installation cost in Arizona. Compare solar, ceramic, security, and decorative film pricing per sq ft."
        />
        <meta name="twitter:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://arizonahouseoffilm.com/" },
          { name: "Window Film Cost Arizona", url: "https://arizonahouseoffilm.com/window-film-cost-arizona" },
          { name: "Cost Estimator", url: "https://arizonahouseoffilm.com/window-film-cost-estimator" },
        ]}
      />

      <div
        style={{
          fontFamily: "'Georgia', serif",
          background: "#0a0a0f",
          minHeight: "100vh",
          color: "#f0ede8",
          padding: "0",
        }}
      >
        {/* Header */}
        <div
          style={{
            borderBottom: "1px solid #2a2a35",
            padding: "20px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "3px",
                color: "#6b8f71",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              Arizona House of Film
            </div>
            <div style={{ fontSize: "20px", fontWeight: "bold", letterSpacing: "-0.5px" }}>
              Window Film Cost Estimator
            </div>
          </div>
          <div style={{ fontSize: "11px", color: "#555", letterSpacing: "2px" }}>
            ROC #314088 · (480) 788-1591
          </div>
        </div>

        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "40px 32px" }}>
          {/* Progress */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "48px" }}>
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                style={{
                  height: "3px",
                  flex: 1,
                  background: s <= step ? "#6b8f71" : "#1e1e2a",
                  borderRadius: "2px",
                  transition: "background 0.3s",
                }}
              />
            ))}
          </div>

          {/* STEP 1 — Property Type */}
          {step === 1 && (
            <div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#6b8f71",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Step 1 of 4
              </div>
              <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "8px", lineHeight: 1.1 }}>
                What type of property?
              </h2>
              <p style={{ color: "#888", marginBottom: "36px", fontSize: "15px" }}>
                Pricing and film recommendations vary by application.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                  marginBottom: "40px",
                }}
              >
                {["residential", "commercial"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setPropertyType(type)}
                    style={{
                      padding: "24px",
                      background: propertyType === type ? "#6b8f71" : "#12121a",
                      border: `1px solid ${propertyType === type ? "#6b8f71" : "#2a2a35"}`,
                      borderRadius: "8px",
                      color: propertyType === type ? "#fff" : "#aaa",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginBottom: "4px",
                        textTransform: "capitalize",
                      }}
                    >
                      {type}
                    </div>
                    <div style={{ fontSize: "13px", opacity: 0.7 }}>
                      {type === "residential" ? "Home, condo, apartment" : "Office, retail, industrial"}
                    </div>
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(2)} style={btnStyle("#6b8f71")}>
                Continue →
              </button>
            </div>
          )}

          {/* STEP 2 — Window Count + Size */}
          {step === 2 && (
            <div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#6b8f71",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Step 2 of 4
              </div>
              <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "8px", lineHeight: 1.1 }}>
                How many windows?
              </h2>
              <p style={{ color: "#888", marginBottom: "36px", fontSize: "15px" }}>
                Count all glass pieces to be filmed. Average{" "}
                {propertyType === "residential" ? "home has 12–16" : "office floor has 20–40"}.
              </p>

              {/* Window count slider */}
              <div style={{ marginBottom: "36px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                  <span style={{ fontSize: "14px", color: "#aaa" }}>Number of windows</span>
                  <span style={{ fontSize: "28px", fontWeight: "bold", color: "#6b8f71" }}>{windowCount}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={propertyType === "residential" ? 30 : 100}
                  value={windowCount}
                  onChange={(e) => setWindowCount(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "#6b8f71" }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "11px",
                    color: "#444",
                    marginTop: "4px",
                  }}
                >
                  <span>1</span>
                  <span>{propertyType === "residential" ? "30" : "100"}</span>
                </div>
              </div>

              {/* Window size */}
              <div style={{ marginBottom: "36px" }}>
                <div style={{ fontSize: "14px", color: "#aaa", marginBottom: "12px" }}>
                  Typical window size (use your largest)
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  {WINDOW_SIZES.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size)}
                      style={{
                        padding: "14px 16px",
                        background: selectedSize.id === size.id ? "#1a2a1e" : "#12121a",
                        border: `1px solid ${selectedSize.id === size.id ? "#6b8f71" : "#2a2a35"}`,
                        borderRadius: "6px",
                        color: selectedSize.id === size.id ? "#6b8f71" : "#888",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "all 0.2s",
                      }}
                    >
                      <div style={{ fontWeight: "bold", fontSize: "14px" }}>{size.label}</div>
                      <div style={{ fontSize: "11px", opacity: 0.6, marginTop: "2px" }}>{size.example}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Running total */}
              <div
                style={{
                  background: "#12121a",
                  border: "1px solid #2a2a35",
                  borderRadius: "8px",
                  padding: "16px 20px",
                  marginBottom: "32px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "#888", fontSize: "13px" }}>Total glass area</span>
                <span style={{ fontSize: "22px", fontWeight: "bold" }}>{totalSqFt} sq ft</span>
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <button onClick={() => setStep(1)} style={btnStyle("#1e1e2a", "#888")}>
                  ← Back
                </button>
                <button onClick={() => setStep(3)} style={btnStyle("#6b8f71")}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 — Film Type */}
          {step === 3 && (
            <div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#6b8f71",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Step 3 of 4
              </div>
              <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "8px", lineHeight: 1.1 }}>
                What's your primary goal?
              </h2>
              <p style={{ color: "#888", marginBottom: "36px", fontSize: "15px" }}>
                Select the film category that matches your need. Exact film specified during your free estimate.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
                {FILM_TYPES.map((film) => (
                  <button
                    key={film.id}
                    onClick={() => setSelectedFilm(film)}
                    style={{
                      padding: "18px 20px",
                      background: selectedFilm?.id === film.id ? "#1a2a1e" : "#12121a",
                      border: `1px solid ${selectedFilm?.id === film.id ? "#6b8f71" : "#2a2a35"}`,
                      borderRadius: "8px",
                      color: "#f0ede8",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: "bold", fontSize: "15px", marginBottom: "2px" }}>{film.name}</div>
                      <div style={{ fontSize: "12px", color: "#888" }}>{film.description}</div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "16px" }}>
                      <div style={{ fontSize: "13px", color: "#6b8f71", fontWeight: "bold" }}>
                        ${film.pricePerSqFt.low}–${film.pricePerSqFt.high}/sq ft
                      </div>
                      {(film.srpEligible || film.apsEligible) && (
                        <div style={{ fontSize: "10px", color: "#4a7a52", marginTop: "2px" }}>
                          SRP/APS rebate eligible
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <button onClick={() => setStep(2)} style={btnStyle("#1e1e2a", "#888")}>
                  ← Back
                </button>
                <button
                  onClick={() => selectedFilm && setStep(4)}
                  style={btnStyle(selectedFilm ? "#6b8f71" : "#2a2a35", selectedFilm ? "#fff" : "#555")}
                  disabled={!selectedFilm}
                >
                  See Estimate →
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 — Result */}
          {step === 4 && estimate && (
            <div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#6b8f71",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Your Estimate
              </div>
              <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "32px", lineHeight: 1.1 }}>
                Here's what to expect
              </h2>

              {/* Main estimate */}
              <div
                style={{
                  background: "#12121a",
                  border: "1px solid #6b8f71",
                  borderRadius: "12px",
                  padding: "32px",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "13px", color: "#888", marginBottom: "8px", letterSpacing: "1px" }}>
                  ESTIMATED INSTALLATION COST
                </div>
                <div style={{ fontSize: "52px", fontWeight: "bold", color: "#6b8f71", lineHeight: 1 }}>
                  ${estimate.low.toLocaleString()}–${estimate.high.toLocaleString()}
                </div>
                <div style={{ fontSize: "13px", color: "#666", marginTop: "8px" }}>
                  {windowCount} windows · {totalSqFt} sq ft · {selectedFilm.name}
                </div>
              </div>

              {/* Breakdown cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <div style={statCard}>
                  <div style={{ fontSize: "11px", color: "#888", marginBottom: "4px" }}>Heat Reduction</div>
                  <div style={{ fontSize: "18px", fontWeight: "bold", color: "#6b8f71" }}>
                    {selectedFilm.heatReduction}
                  </div>
                </div>
                <div style={statCard}>
                  <div style={{ fontSize: "11px", color: "#888", marginBottom: "4px" }}>UV Block</div>
                  <div style={{ fontSize: "18px", fontWeight: "bold", color: "#6b8f71" }}>
                    {selectedFilm.uvBlock}
                  </div>
                </div>
                <div style={statCard}>
                  <div style={{ fontSize: "11px", color: "#888", marginBottom: "4px" }}>Per Sq Ft</div>
                  <div style={{ fontSize: "18px", fontWeight: "bold", color: "#6b8f71" }}>
                    ${selectedFilm.pricePerSqFt.low}–${selectedFilm.pricePerSqFt.high}
                  </div>
                </div>
              </div>

              {/* Savings estimate */}
              {selectedFilm.savings && (
                <div
                  style={{
                    background: "#0d1a0f",
                    border: "1px solid #2a4a2e",
                    borderRadius: "8px",
                    padding: "16px 20px",
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "13px", color: "#6b8f71", fontWeight: "bold" }}>
                      Estimated Annual Energy Savings
                    </div>
                    <div style={{ fontSize: "11px", color: "#555", marginTop: "2px" }}>
                      Based on average Arizona cooling costs
                    </div>
                  </div>
                  <div style={{ fontSize: "20px", fontWeight: "bold", color: "#6b8f71" }}>
                    ${selectedFilm.savings.low}–${selectedFilm.savings.high}/yr
                  </div>
                </div>
              )}

              {/* Rebate note */}
              {rebateNote && (
                <div
                  style={{
                    background: "#0a1a12",
                    border: "1px solid #2a4a2e",
                    borderRadius: "8px",
                    padding: "14px 18px",
                    marginBottom: "28px",
                    fontSize: "13px",
                    color: "#5a9a62",
                  }}
                >
                  ⚡ {rebateNote}
                </div>
              )}

              <div
                style={{
                  background: "#12121a",
                  border: "1px solid #2a2a35",
                  borderRadius: "8px",
                  padding: "16px 20px",
                  marginBottom: "28px",
                  fontSize: "12px",
                  color: "#555",
                  lineHeight: 1.6,
                }}
              >
                This estimate is based on average installation costs for {propertyType} properties in Arizona.
                Final pricing depends on glass condition, access difficulty, and exact film specification. All
                projects are custom-quoted. Licensed ROC #314088.
              </div>

              {/* CTA */}
              <div style={{ display: "flex", gap: "12px", flexDirection: "column" }}>
                <a
                  href="tel:4807881591"
                  style={{
                    ...btnStyle("#6b8f71"),
                    textDecoration: "none",
                    textAlign: "center",
                    display: "block",
                    fontSize: "16px",
                    padding: "18px",
                  }}
                >
                  Call (480) 788-1591 — Get Exact Quote
                </a>
                <a
                  href={`/contact?windows=${windowCount}&size=${selectedSize.label}&film=${selectedFilm.name}&estimate=${estimate.low}-${estimate.high}`}
                  style={{
                    ...btnStyle("#1e1e2a", "#aaa"),
                    textDecoration: "none",
                    textAlign: "center",
                    display: "block",
                    border: "1px solid #2a2a35",
                  }}
                >
                  Submit for Free On-Site Estimate →
                </a>
              </div>

              <button
                onClick={() => {
                  setStep(1);
                  setSelectedFilm(null);
                }}
                style={{
                  marginTop: "16px",
                  background: "none",
                  border: "none",
                  color: "#555",
                  cursor: "pointer",
                  fontSize: "13px",
                }}
              >
                ← Start over
              </button>
            </div>
          )}
        </div>

        {/* Related links */}
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "0 32px 48px",
            textAlign: "center",
            fontSize: "13px",
          }}
        >
          <span style={{ color: "#555" }}>Also see: </span>
          <Link to="/window-film-cost-arizona" style={{ color: "#6b8f71", textDecoration: "none" }}>
            Window Film Cost Arizona
          </Link>
          <span style={{ color: "#333" }}> · </span>
          <Link to="/window-film-energy-rebates-arizona" style={{ color: "#6b8f71", textDecoration: "none" }}>
            SRP & APS Rebates
          </Link>
          <span style={{ color: "#333" }}> · </span>
          <Link to="/best-window-film-arizona-heat" style={{ color: "#6b8f71", textDecoration: "none" }}>
            Best Film for Arizona Heat
          </Link>
        </div>
      </div>
    </>
  );
}
