import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://arizonahouseoffilm.com";

export default function SEOHead({
  title,
  description,
  canonical,
  image,
  schema,
  noindex = false,
}) {
  const { pathname } = useLocation();

  // -------- CANONICAL URL ----------
  const canonicalUrl =
    canonical || `${SITE_URL}${pathname === "/" ? "" : pathname}`;

  // -------- TITLE ----------
  const finalTitle = title
    ? `${title} | Arizona House of Film`
    : "Arizona House of Film | Commercial & Residential Window Film Experts";

  // -------- DESCRIPTION ----------
  const finalDescription =
    description ||
    "Arizona House of Film provides premium commercial and residential window tinting across Arizona with 15 years of experience.";

  // -------- OG IMAGE ----------
  const finalImage =
    image || "https://arizonahouseoffilm.com/images/default-og.jpg";

  // -------- SCHEMA ----------
  // LocalBusiness is injected globally by App.jsx — pages supply their own schema via props
  const finalSchema = schema ? JSON.stringify(schema) : null;

  return (
    <Helmet>
      {/* TITLE */}
      <title>{finalTitle}</title>

      {/* DESCRIPTION */}
      <meta name="description" content={finalDescription} />

      {/* CANONICAL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* INDEX / NOINDEX POLICY */}
      {noindex ? (
        <>
          <meta name="robots" content="noindex, nofollow" />
          <meta name="googlebot" content="noindex, nofollow" />
        </>
      ) : (
        <>
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
        </>
      )}

      {/* OPEN GRAPH */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:type" content="website" />

      {/* TWITTER CARD */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />

      {/* SCHEMA */}
      {finalSchema && <script type="application/ld+json">{finalSchema}</script>}
    </Helmet>
  );
}
