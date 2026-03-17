import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import BreadcrumbSchema from "../../components/SEO/BreadcrumbSchema";
import { Link } from "react-router-dom";

const FILM_TYPES = [
  {
    id: "solar-standard",
    name: "Solar Control Film",
    description: "Heat and UV reduction — entry to mid-range solar film",
    pricePerSqFt: { low: 10, high: 18 },
    heatReduction: "50–70%",
    uvBlock: "99%",
    srpEligible: true,
    apsEligible: true,
    savings: { low: 180, high: 420 },
    note: "Average per sq ft. Final price depends on film spec and access.",
  },
  {
    id: "dual-reflective",
    name: "Dual Reflective / Ceramic Film",
    description: "Maximum heat rejection + daytime privacy — commercial and west-facing glass",
    pricePerSqFt: { low: 14, high: 25 },
    heatReduction: "70–91%",
    uvBlock: "99.9%",
    srpEligible: true,
    apsEligible: true,
    savings: { low: 250, high: 725 },
    note: "Premium specification. Range varies by film grade and project scope.",
  },
  {
    id: "security",
    name: "Security / Safety Film",
    description: "4 mil to 21 mil impact-resistant film — holds glass on impact",
    pricePerSqFt: { low: 10, high: 45 },
    heatReduction: "30–50%",
    uvBlock: "99%",
    srpEligible: false,
    apsEligible: false,
    savings: null,
    note: "Wide range — 4 mil entry spec to 21 mil blast/government grade. Average based on mil thickness and scope.",
  },
  {
    id: "decorative",
    name: "Decorative / Privacy Film",
    description: "Frosted, etched, patterned — 600+ options, residential and commercial",
    pricePerSqFt: { low: 10, high: 35 },
    heatReduction: "20–40%",
    uvBlock: "99%",
    srpEligible: false,
    apsEligible: false,
    savings: null,
    note: "High variability — pattern complexity, custom cuts, and installation difficulty affect final price.",
  },
  {
    id: "anti-graffiti",
    name: "Anti-Graffiti Film",
    description: "Sacrificial peel-and-replace surface and glass protection",
    pricePerSqFt: { low: 8, high: 18 },
    heatReduction: "10–20%",
    uvBlock: "95%",
    srpEligible: false,
    apsEligible: false,
    savings: null,
    note: "Includes countertop, glass, and surface protection film. Replace as needed.",
  },
  {
    id: "countertop",
    name: "Countertop Protection Film",
    description: "4 mil sacrificial film for stone, quartz, and laminate surfaces",
    pricePerSqFt: { low: 12, high: 28 },
    heatReduction: "N/A",
    uvBlock: "UV inhibitor",
    srpEligible: false,
    apsEligible: false,
    savings: null,
    note: "Pricing varies by surface type, edge detail, and cutout complexity.",
  },
];

const PROPERTY_TYPES = [
  { id: "residential", label: "Residential", description: "Home, condo, apartment" },
  { id: "commercial", label: "Commercial", description: "Office, retail, industrial" },
  { id: "government", label: "Government / Institutional", description: "Schools, municipal, federal, military" },
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
  const [selectedFilms, setSelectedFilms] = useState([]);
  const [propertyType, setPropertyType] = useState("residential");
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth < 640 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSqFt = windowCount * selectedSize.sqFt;

  const toggleFilm = (film) => {
    setSelectedFilms((prev) =>
      prev.some((f) => f.id === film.id) ? prev.filter((f) => f.id !== film.id) : [...prev, film]
    );
  };

  const filmEstimates = selectedFilms.map((film) => ({
    film,
    low: Math.round(totalSqFt * film.pricePerSqFt.low),
    high: Math.round(totalSqFt * film.pricePerSqFt.high),
  }));

  const combinedEstimate =
    filmEstimates.length > 0
      ? {
          low: filmEstimates.reduce((sum, e) => sum + e.low, 0),
          high: filmEstimates.reduce((sum, e) => sum + e.high, 0),
        }
      : null;

  const anyRebateEligible = selectedFilms.some((f) => f.srpEligible || f.apsEligible);

  const bestSavings = selectedFilms.reduce(
    (best, f) => {
      if (!f.savings) return best;
      if (!best) return f.savings;
      return f.savings.high > best.high ? f.savings : best;
    },
    null
  );

  const filmQueryParam = selectedFilms.map((f) => f.name).join(", ");
  const estimateQueryParam = combinedEstimate ? `${combinedEstimate.low}-${combinedEstimate.high}` : "";

  const sliderMax =
    propertyType === "residential" ? 30 : propertyType === "commercial" ? 100 : 60;
  const windowHint =
    propertyType === "residential"
      ? "home has 12–16"
      : propertyType === "government"
        ? "facility has 30–50"
        : "office floor has 20–40";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does window film cost in Arizona?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Window film installation in Arizona averages $8–$45 per square foot depending on film type and specification. Solar control film averages $10–$18/sq ft, dual reflective/ceramic $14–$25/sq ft, security film $10–$45/sq ft (4 mil to 21 mil), and decorative film $10–$35/sq ft. Use our free estimator for a personalized range.",
        },
      },
      {
        "@type": "Question",
        name: "Are there rebates for window film in Arizona?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SRP and APS rebate programs may apply to qualifying solar control and dual reflective film installations. We provide the NFRC documentation required for rebate applications. Ask about eligible films during your free estimate.",
        },
      },
      {
        "@type": "Question",
        name: "How much can I save on energy bills with window film?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Arizona homeowners typically save $180–$725 per year on cooling costs after installing solar or dual reflective window film, depending on the number of windows, film type, and home size. Dual reflective ceramic film offers the highest savings at $250–$725/year.",
        },
      },
      {
        "@type": "Question",
        name: "What type of window film is best for Arizona heat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dual reflective ceramic film is the top choice for Arizona heat, rejecting 70–91% of solar heat while blocking 99.9% of UV rays. It provides daytime privacy and is ideal for west-facing glass and commercial applications.",
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
          content="Estimate your window film installation cost in Arizona. Compare solar, dual reflective, security, and decorative film average pricing per sq ft. SRP & APS rebate eligible. Free calculator."
        />
        <link rel="canonical" href="https://arizonahouseoffilm.com/window-film-cost-estimator" />
        <meta property="og:title" content="Window Film Cost Estimator — Arizona Pricing Calculator" />
        <meta
          property="og:description"
          content="Estimate your window film installation cost in Arizona. Compare solar, dual reflective, security, and decorative film average pricing per sq ft."
        />
        <meta property="og:url" content="https://arizonahouseoffilm.com/window-film-cost-estimator" />
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-image.jpg" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Window Film Cost Estimator — Arizona Pricing Calculator" />
        <meta
          name="twitter:description"
          content="Estimate your window film installation cost in Arizona. Compare solar, dual reflective, security, and decorative film average pricing per sq ft."
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
          padding: isMobile ? "0 0 80px 0" : "0",
        }}
      >
        {/* Header */}
        <div
          style={{
            borderBottom: "1px solid #2a2a35",
            padding: isMobile ? "16px 16px" : "20px 32px",
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
          <div style={{ fontSize: "11px", color: "#555", letterSpacing: "2px", display: isMobile ? "none" : "block" }}>
            ROC #314088 · (480) 788-1591
          </div>
        </div>

        <div style={{ maxWidth: "760px", margin: "0 auto", padding: isMobile ? "24px 16px" : "40px 32px" }}>
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
              <h2 style={{ fontSize: isMobile ? "24px" : "32px", fontWeight: "bold", marginBottom: "8px", lineHeight: 1.1 }}>
                What type of property?
              </h2>
              <p style={{ color: "#888", marginBottom: "36px", fontSize: "15px" }}>
                Pricing and film recommendations vary by application.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
                  gap: "12px",
                  marginBottom: "40px",
                }}
              >
                {PROPERTY_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setPropertyType(type.id)}
                    style={{
                      padding: "24px",
                      background: propertyType === type.id ? "#6b8f71" : "#12121a",
                      border: `1px solid ${propertyType === type.id ? "#6b8f71" : "#2a2a35"}`,
                      borderRadius: "8px",
                      color: propertyType === type.id ? "#fff" : "#aaa",
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
                      }}
                    >
                      {type.label}
                    </div>
                    <div style={{ fontSize: "13px", opacity: 0.7 }}>
                      {type.description}
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
              <h2 style={{ fontSize: isMobile ? "24px" : "32px", fontWeight: "bold", marginBottom: "8px", lineHeight: 1.1 }}>
                How many windows?
              </h2>
              <p style={{ color: "#888", marginBottom: "36px", fontSize: "15px" }}>
                Count all glass pieces to be filmed. Average {windowHint}.
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
                  max={sliderMax}
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
                  <span>{sliderMax}</span>
                </div>
              </div>

              {/* Window size */}
              <div style={{ marginBottom: "36px" }}>
                <div style={{ fontSize: "14px", color: "#aaa", marginBottom: "12px" }}>
                  Typical window size (use your largest)
                </div>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "8px" }}>
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

              <div style={{ display: "flex", gap: "12px", flexDirection: isMobile ? "column" : "row" }}>
                <button onClick={() => setStep(1)} style={btnStyle("#1e1e2a", "#888")}>
                  ← Back
                </button>
                <button onClick={() => setStep(3)} style={btnStyle("#6b8f71")}>
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 — Film Type (multi-select) */}
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
              <h2 style={{ fontSize: isMobile ? "24px" : "32px", fontWeight: "bold", marginBottom: "8px", lineHeight: 1.1 }}>
                What's your primary goal?
              </h2>
              <p style={{ color: "#888", marginBottom: "36px", fontSize: "15px" }}>
                Select one or more film categories. Exact film specified during your free estimate.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
                {FILM_TYPES.map((film) => {
                  const isSelected = selectedFilms.some((f) => f.id === film.id);
                  return (
                    <button
                      key={film.id}
                      onClick={() => toggleFilm(film)}
                      style={{
                        padding: "18px 20px",
                        background: isSelected ? "#1a2a1e" : "#12121a",
                        border: `1px solid ${isSelected ? "#6b8f71" : "#2a2a35"}`,
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
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "4px",
                            border: `2px solid ${isSelected ? "#6b8f71" : "#444"}`,
                            background: isSelected ? "#6b8f71" : "transparent",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "12px",
                            color: "#fff",
                            flexShrink: 0,
                          }}
                        >
                          {isSelected ? "✓" : ""}
                        </div>
                        <div>
                          <div style={{ fontWeight: "bold", fontSize: "15px", marginBottom: "2px" }}>
                            {film.name}
                          </div>
                          <div style={{ fontSize: "12px", color: "#888" }}>{film.description}</div>
                        </div>
                      </div>
                      <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "16px" }}>
                        <div style={{ fontSize: "13px", color: "#6b8f71", fontWeight: "bold" }}>
                          ${film.pricePerSqFt.low}–${film.pricePerSqFt.high}/sq ft
                        </div>
                        <div style={{ fontSize: "10px", color: "#555", marginTop: "2px" }}>avg. installed</div>
                        {(film.srpEligible || film.apsEligible) && (
                          <div style={{ fontSize: "10px", color: "#4a7a52", marginTop: "2px" }}>
                            SRP/APS rebate eligible
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
              {selectedFilms.length > 0 && (
                <div
                  style={{
                    fontSize: "12px",
                    color: "#888",
                    marginBottom: "16px",
                    textAlign: "center",
                  }}
                >
                  {selectedFilms.length} film{selectedFilms.length > 1 ? " types" : " type"} selected
                </div>
              )}
              <div style={{ display: "flex", gap: "12px", flexDirection: isMobile ? "column" : "row" }}>
                <button onClick={() => setStep(2)} style={btnStyle("#1e1e2a", "#888")}>
                  ← Back
                </button>
                <button
                  onClick={() => selectedFilms.length > 0 && setStep(4)}
                  style={btnStyle(
                    selectedFilms.length > 0 ? "#6b8f71" : "#2a2a35",
                    selectedFilms.length > 0 ? "#fff" : "#555"
                  )}
                  disabled={selectedFilms.length === 0}
                >
                  See Estimate →
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 — Result */}
          {step === 4 && combinedEstimate && (
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
              <h2 style={{ fontSize: isMobile ? "24px" : "32px", fontWeight: "bold", marginBottom: "32px", lineHeight: 1.1 }}>
                Here's what to expect
              </h2>

              {/* Per-film breakdown (if multiple selected) */}
              {filmEstimates.length > 1 && (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                  {filmEstimates.map((e) => (
                    <div
                      key={e.film.id}
                      style={{
                        background: "#12121a",
                        border: "1px solid #2a2a35",
                        borderRadius: "8px",
                        padding: "14px 18px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: "bold", fontSize: "14px" }}>{e.film.name}</div>
                        <div style={{ fontSize: "11px", color: "#888", marginTop: "2px" }}>
                          {e.film.heatReduction} heat reduction · {e.film.uvBlock} UV
                        </div>
                      </div>
                      <div style={{ fontSize: "16px", fontWeight: "bold", color: "#6b8f71" }}>
                        ${e.low.toLocaleString()}–${e.high.toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Main combined estimate */}
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
                  {filmEstimates.length > 1 ? "COMBINED ESTIMATED COST" : "ESTIMATED INSTALLATION COST"}
                </div>
                <div style={{ fontSize: isMobile ? "38px" : "52px", fontWeight: "bold", color: "#6b8f71", lineHeight: 1 }}>
                  ${combinedEstimate.low.toLocaleString()}–${combinedEstimate.high.toLocaleString()}
                </div>
                <div style={{ fontSize: "13px", color: "#666", marginTop: "8px" }}>
                  {windowCount} windows · {totalSqFt} sq ft · {selectedFilms.map((f) => f.name).join(" + ")}
                </div>
              </div>

              {/* Stat cards — show for single film, or summary for multi */}
              {filmEstimates.length === 1 && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
                    gap: "10px",
                    marginBottom: "20px",
                  }}
                >
                  <div style={statCard}>
                    <div style={{ fontSize: "11px", color: "#888", marginBottom: "4px" }}>Heat Reduction</div>
                    <div style={{ fontSize: "18px", fontWeight: "bold", color: "#6b8f71" }}>
                      {selectedFilms[0].heatReduction}
                    </div>
                  </div>
                  <div style={statCard}>
                    <div style={{ fontSize: "11px", color: "#888", marginBottom: "4px" }}>UV Block</div>
                    <div style={{ fontSize: "18px", fontWeight: "bold", color: "#6b8f71" }}>
                      {selectedFilms[0].uvBlock}
                    </div>
                  </div>
                  <div style={statCard}>
                    <div style={{ fontSize: "11px", color: "#888", marginBottom: "4px" }}>Avg. Per Sq Ft</div>
                    <div style={{ fontSize: "18px", fontWeight: "bold", color: "#6b8f71" }}>
                      ${selectedFilms[0].pricePerSqFt.low}–${selectedFilms[0].pricePerSqFt.high}
                    </div>
                  </div>
                </div>
              )}

              {/* Film-specific note */}
              {filmEstimates.length === 1 && selectedFilms[0].note && (
                <div
                  style={{
                    background: "#12121a",
                    border: "1px solid #2a2a35",
                    borderRadius: "8px",
                    padding: "12px 16px",
                    marginBottom: "20px",
                    fontSize: "12px",
                    color: "#888",
                    fontStyle: "italic",
                  }}
                >
                  {selectedFilms[0].note}
                </div>
              )}

              {/* Savings estimate */}
              {bestSavings && (
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
                    ${bestSavings.low}–${bestSavings.high}/yr
                  </div>
                </div>
              )}

              {/* Rebate note */}
              {anyRebateEligible && (
                <div
                  style={{
                    background: "#0a1a12",
                    border: "1px solid #2a4a2e",
                    borderRadius: "8px",
                    padding: "14px 18px",
                    marginBottom: "12px",
                    fontSize: "13px",
                    color: "#5a9a62",
                  }}
                >
                  ⚡ SRP & APS rebate programs may apply to qualifying film installations — ask about eligible
                  films during your free estimate.
                </div>
              )}

              {anyRebateEligible && (
                <div
                  style={{
                    background: "#12121a",
                    border: "1px solid #2a2a35",
                    borderRadius: "8px",
                    padding: "12px 16px",
                    marginBottom: "28px",
                    fontSize: "12px",
                    color: "#666",
                  }}
                >
                  We provide NFRC documentation required for rebate applications.
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
                This estimate reflects average installation costs for {propertyType} properties in Arizona.
                Final pricing depends on glass condition, access difficulty, exact film specification, and
                project scope. All projects are custom-quoted on-site. Licensed ROC #314088.
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
                  href={`/contact?windows=${windowCount}&size=${selectedSize.label}&film=${encodeURIComponent(filmQueryParam)}&estimate=${estimateQueryParam}`}
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
                  setSelectedFilms([]);
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
