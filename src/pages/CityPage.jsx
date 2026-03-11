import React from "react";
import { Helmet } from "react-helmet-async";
import BreadcrumbSchema from "@/components/SEO/BreadcrumbSchema.jsx";
import { Link, useParams } from "react-router-dom";
import {
  Shield,
  Building,
  Home as HomeIcon,
  Palette,
  Zap,
  Sun,
  Thermometer,
  CheckCircle,
  Phone,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import NotFound from "@/pages/NotFound";
import { cities } from "@/data/cities";

const CityPage = () => {
  const { slug } = useParams();

  /* ======================================================
     HARD FIREWALL — BLOCK BEFORE PAGE RENDER
     This guarantees Google cannot index ghost HTML.
  ====================================================== */
  if (!slug) {
    return (
      <>
        <Helmet>
          <meta name="robots" content="index, follow" />
        </Helmet>
        <NotFound />
      </>
    );
  }

  // Normalize slug
  const cleanSlug = slug.replace("-window-tinting", "");

  // Validate against actual cities
  const city = cities.find(
    (c) => c.slug.toLowerCase() === cleanSlug.toLowerCase()
  );

  // Graceful fallback: derive name from slug if city is not in the data file
  const name = city
    ? city.name
    : cleanSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const geo = city?.geo || null;

  /* ======================================================
     SEO — CLEAN CANONICAL
  ====================================================== */
  const pageTitle = `Window Tinting ${name} AZ | Solar, Privacy & Security Film`;
  const metaDescription = `Professional window film in ${name}, AZ. Ceramic heat rejection, security film, decorative glass. Residential and commercial. ROC #314088. (480) 788-1591.`;
  const canonicalUrl = `https://arizonahouseoffilm.com/service-areas/${cleanSlug}`;

  /* ======================================================
     SERVICE SCHEMA
  ====================================================== */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Window Tinting in ${name}, AZ`,
    serviceType: "Window Film Installation",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://arizonahouseoffilm.com",
      name: "Arizona House of Film",
    },
    areaServed: {
      "@type": "City",
      name,
      addressRegion: "AZ",
      addressCountry: "US",
      ...(geo && {
        geo: {
          "@type": "GeoCoordinates",
          latitude: geo.latitude,
          longitude: geo.longitude,
        },
      }),
    },
    description: metaDescription,
  };

  /* ======================================================
     FAQ SCHEMA
  ====================================================== */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How much does window tinting cost in ${name}, AZ?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Window tinting in ${name} typically ranges from $5 to $12 per sq ft depending on film type and project size. We offer free on-site estimates.`,
        },
      },
      {
        "@type": "Question",
        name: `Is window tinting worth it in ${name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. With Arizona’s extreme sun exposure, window film in ${name} reduces heat, blocks UV rays, prevents fading, and lowers AC costs.`,
        },
      },
    ],
  };

  /* ======================================================
     PAGE CONTENT
  ====================================================== */
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
        <meta
          property="og:image"
          content="https://arizonahouseoffilm.com/og-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          name="twitter:image"
          content="https://arizonahouseoffilm.com/og-image.jpg"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Service Areas', path: '/service-areas' },
        { name, path: `/service-areas/${cleanSlug}` },
      ]} />

      {/* HERO */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20240727_093255-hCWXg.jpg"
            alt={`${name} Arizona landscape`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Window Tinting <span className="text-green-400">{name}, AZ</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Professional heat rejection and UV protection for {name} homes and
            businesses. Save on energy while improving comfort and privacy.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link to="/contact">
                Get A Free Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <a
              href="tel:480-788-1591"
              className="flex items-center justify-center px-8 py-3 rounded-md border-2 border-white font-bold hover:bg-white hover:text-slate-900 transition-all"
            >
              <Phone className="mr-2 w-5 h-5" /> 480-788-1591
            </a>
          </div>
        </div>
      </section>

      {/* CLIMATE SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Combating the {name} Heat with Advanced Window Film
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Living in <strong>{name}, Arizona</strong> means facing extreme
                sunlight and intense heat year-round.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Our high-performance ceramic window films are engineered specifically for
                the {name} climate — blocking up to 99% UV and cutting heat by up to 84%.
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                {[
                  "99% UV Protection",
                  "Up to 25% Energy Savings",
                  "Glare Reduction",
                  "Interior Preservation",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-gray-800 font-medium"
                  >
                    <CheckCircle className="text-green-600 mr-2 w-5 h-5" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative bg-gray-100 rounded-3xl p-8 overflow-hidden shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <Sun className="text-orange-500 w-8 h-8" />
                  <span className="font-bold text-xl uppercase tracking-widest text-gray-500">
                    {name} UV Index
                  </span>
                </div>
                <div className="bg-red-500 text-white px-4 py-1 rounded-full font-bold">
                  EXTREME
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                Ceramic window film reduces thermal load dramatically — keeping your{" "}
                {name} property cooler without excessive AC usage.
              </p>

              <img
                src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/20250308_084212-1-aYIad.jpg"
                alt="Interior cooling comfort"
                className="rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Expert Window Film Solutions for {name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                n: "Residential Window Tinting",
                i: HomeIcon,
                l: "/residential-window-tinting",
                d: `Protect your family and furniture in ${name} from harsh sun.`,
              },
              {
                n: "Commercial Window Tinting",
                i: Building,
                l: "/commercial-window-tinting",
                d: `Lower overhead and improve comfort in your ${name} office.`,
              },
              {
                n: "Energy-Saving Films",
                i: Zap,
                l: "/energy-saving-window-films",
                d: "Highly cost-effective upgrade for desert climates.",
              },
              {
                n: "Safety & Security Films",
                i: Shield,
                l: "/safety",
                d: "Invisible protection against break-ins and impacts.",
              },
              {
                n: "Decorative & Frosted Films",
                i: Palette,
                l: "/decorative-window-films",
                d: "Enhance privacy and style with frosted patterns.",
              },
              {
                n: "Privacy Films",
                i: Thermometer,
                l: "/residential-window-tinting",
                d: "Maintain views while blocking outside visibility.",
              },
            ].map((s, idx) => (
              <Link
                key={idx}
                to={s.l}
                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <s.i className="w-12 h-12 mx-auto mb-6 text-green-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">{s.n}</h3>
                <p className="text-gray-500">{s.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL CTA */}
      <section className="py-20 bg-green-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">
            Ready to cool down your {name} property?
          </h2>
          <p className="text-xl mb-10 opacity-80">
            Join homeowners and business owners across {name} and the surrounding
            valley. We offer free, on-site estimates and professional installation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-green-900 hover:bg-gray-200"
            >
              <Link to="/contact">Book Your {name} Estimate</Link>
            </Button>

            <a
              href="tel:480-788-1591"
              className="text-2xl font-bold flex items-center justify-center"
            >
              <Phone className="mr-3 text-green-400" /> 480-788-1591
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CityPage;