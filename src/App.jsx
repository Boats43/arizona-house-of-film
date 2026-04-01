import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Helmet } from "react-helmet-async";

/* ----------------- GLOBAL LAYOUT ----------------- */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
const FloatingContactButton = lazy(() => import("@/components/FloatingContactButton"));
import ChatWidget from './components/ChatWidget';
import { Toaster } from "@/components/ui/toaster";
import LegacyRedirect from "@/components/LegacyRedirect";

/* ----------------- SEO ENGINE AUTO-INJECTOR ----------------- */
import SEOHead from "@/components/SEO/SEOEngine";

/* ----------- VERCEL ANALYTICS + SPEED INSIGHTS ----------- */
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

/* ---------------- LAZY PAGES ---------------- */
const Home = lazy(() => import("@/pages/Home"));
const Commercial = lazy(() => import("@/pages/Commercial"));
const ScottsdaleCommercial = lazy(() => import("@/pages/ScottsdaleCommercial"));
const RestaurantWindowFilm = lazy(() => import("@/pages/RestaurantWindowFilm"));
const OfficePartitionFilm = lazy(() => import("@/pages/OfficePartitionFilm"));
const UniversityWindowFilm = lazy(() => import("@/pages/UniversityWindowFilm"));
const Residential = lazy(() => import("@/pages/Residential"));
const Decorative = lazy(() => import("@/pages/Decorative"));
const Safety = lazy(() => import("@/pages/Safety"));
const EnergySaving = lazy(() => import("@/pages/EnergySaving"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const Careers = lazy(() => import("@/pages/Careers"));
const Contact = lazy(() => import("@/pages/Contact"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const ThankYou = lazy(() => import("@/pages/ThankYou"));
const BookNow = lazy(() => import("@/pages/BookNow"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Welcome = lazy(() => import("@/pages/Welcome"));
const CityPage = lazy(() => import("@/pages/CityPage"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const ServiceAreas = lazy(() => import("@/pages/ServiceAreas"));
const FilmsHub = lazy(() => import("@/pages/FilmsHub"));
const FilmCategoryPage = lazy(() => import("@/pages/FilmCategoryPage"));
const FilmProductPage = lazy(() => import("@/pages/FilmProductPage"));
const BrandsHub = lazy(() => import("@/pages/BrandsHub"));
const BrandPage = lazy(() => import("@/pages/BrandPage"));
const FlexfilmPage = lazy(() => import("@/pages/brands/FlexfilmPage"));
const LlumarPage = lazy(() => import("@/pages/brands/LlumarPage"));
const XPELPage = lazy(() => import("@/pages/brands/XPELPage"));
const MadicoPage = lazy(() => import("@/pages/brands/MadicoPage"));
const SunTekPage = lazy(() => import("@/pages/brands/SunTekPage"));
const FilmQuoteRequest = lazy(() => import("@/pages/FilmQuoteRequest"));
const Store = lazy(() => import("@/pages/Store"));
const SupportingPage = lazy(() => import("@/pages/SupportingPage"));
const AntiGraffiti = lazy(() => import("@/pages/AntiGraffiti"));
const SecurityFilmPage = lazy(() => import("@/pages/films/SecurityFilmPage"));
const CasperCloakingPage = lazy(() =>
  import("@/pages/films/CasperCloakingPage")
);
const IndustriesPage = lazy(() => import("@/pages/IndustriesPage"));
const Industries = lazy(() => import("@/pages/Industries"));
const Success = lazy(() => import("@/pages/Success"));
const Solutions = lazy(() => import("@/pages/Solutions"));
const SecurityPhoenix = lazy(() => import("@/pages/SecurityPhoenix"));
const ScottsdaleResidential = lazy(() => import("@/pages/ScottsdaleResidential"));
const CommercialPhoenix = lazy(() => import("@/pages/CommercialPhoenix"));
const DecorativePhoenix = lazy(() => import("@/pages/DecorativePhoenix"));
const ResidentialPhoenix = lazy(() => import("@/pages/ResidentialPhoenix"));
const SolarPhoenix = lazy(() => import("@/pages/SolarPhoenix"));
const AntiGraffitiPhoenix = lazy(() => import("@/pages/AntiGraffitiPhoenix"));
const WindowTintingPhoenix = lazy(() => import("@/pages/WindowTintingPhoenix"));
const BathroomPrivacyFilm = lazy(() => import("@/pages/solutions/BathroomPrivacyFilm"));
const OfficePrivacyFilm = lazy(() => import("@/pages/solutions/OfficePrivacyFilm"));
const StorefrontWindowFilm = lazy(() => import("@/pages/solutions/StorefrontWindowFilm"));
const EntrywaySidelightFilm = lazy(() => import("@/pages/solutions/EntrywaySidelightFilm"));
const SidelightWindowFilm = lazy(() => import("@/pages/solutions/SidelightWindowFilm"));
const OneWayMirrorFilm = lazy(() => import("@/pages/solutions/OneWayMirrorFilm"));
const WindowTintingChandler = lazy(() => import("@/pages/locations/WindowTintingChandler"));
const WindowTintingGilbert = lazy(() => import("@/pages/locations/WindowTintingGilbert"));
const WindowTintingPeoria = lazy(() => import("@/pages/locations/WindowTintingPeoria"));
const WindowTintingQueenCreek = lazy(() => import("@/pages/locations/WindowTintingQueenCreek"));
const WindowTintingMesa = lazy(() => import("@/pages/locations/WindowTintingMesa"));
const WindowTintingTempe = lazy(() => import("@/pages/locations/WindowTintingTempe"));
const WindowTintingGlendale = lazy(() => import("@/pages/locations/WindowTintingGlendale"));
const WindowFilmCostArizona = lazy(() => import("@/pages/informational/WindowFilmCostArizona"));
const BestWindowFilmArizonaHeat = lazy(() => import("@/pages/informational/BestWindowFilmArizonaHeat"));
const WindowFilmEnergyRebatesArizona = lazy(() => import("@/pages/informational/WindowFilmEnergyRebatesArizona"));
const SecurityFilmVsTemperedGlass = lazy(() => import("@/pages/informational/SecurityFilmVsTemperedGlass"));
const HowLongDoesWindowFilmLast = lazy(() => import("@/pages/informational/HowLongDoesWindowFilmLast"));
const CeramicVsDualReflectiveFilm = lazy(() => import("@/pages/informational/CeramicVsDualReflectiveFilm"));
const CountertopProtectionFilmArizona = lazy(() => import("@/pages/informational/CountertopProtectionFilmArizona"));
const WindowTintingTolleson = lazy(() => import("@/pages/locations/WindowTintingTolleson"));
const WindowTintingFountainHills = lazy(() => import("@/pages/locations/WindowTintingFountainHills"));
const WindowTintingAvondale = lazy(() => import("@/pages/locations/WindowTintingAvondale"));
const ResidentialWindowTintingMesa = lazy(() => import("@/pages/locations/ResidentialWindowTintingMesa"));
const ResidentialWindowTintingChandler = lazy(() => import("@/pages/locations/ResidentialWindowTintingChandler"));
const ResidentialWindowTintingGilbert = lazy(() => import("@/pages/locations/ResidentialWindowTintingGilbert"));
const ResidentialWindowTintingTempe = lazy(() => import("@/pages/locations/ResidentialWindowTintingTempe"));
const CommercialWindowTintingMesa = lazy(() => import("@/pages/locations/CommercialWindowTintingMesa"));
const CommercialWindowTintingChandler = lazy(() => import("@/pages/locations/CommercialWindowTintingChandler"));
const CommercialWindowTintingTempe = lazy(() => import("@/pages/locations/CommercialWindowTintingTempe"));
const CommercialWindowTintingGilbert = lazy(() => import("@/pages/locations/CommercialWindowTintingGilbert"));
const SecurityWindowFilmScottsdale = lazy(() => import("@/pages/locations/SecurityWindowFilmScottsdale"));
const DecorativeWindowFilmScottsdale = lazy(() => import("@/pages/locations/DecorativeWindowFilmScottsdale"));
const SolarWindowFilmScottsdale = lazy(() => import("@/pages/locations/SolarWindowFilmScottsdale"));
const CommercialWindowTintingPeoria = lazy(() => import("@/pages/locations/CommercialWindowTintingPeoria"));
const CommercialWindowTintingGlendale = lazy(() => import("@/pages/locations/CommercialWindowTintingGlendale"));
const CommercialWindowTintingQueenCreek = lazy(() => import("@/pages/locations/CommercialWindowTintingQueenCreek"));
const ResidentialWindowTintingPeoria = lazy(() => import("@/pages/locations/ResidentialWindowTintingPeoria"));
const ResidentialWindowTintingGlendale = lazy(() => import("@/pages/locations/ResidentialWindowTintingGlendale"));
const ResidentialWindowTintingQueenCreek = lazy(() => import("@/pages/locations/ResidentialWindowTintingQueenCreek"));
const ReduceHeatPhoenixWindows = lazy(() => import("@/pages/informational/ReduceHeatPhoenixWindows"));
const UVProtectionWindowFilmPhoenix = lazy(() => import("@/pages/informational/UVProtectionWindowFilmPhoenix"));
const PrivacyWindowFilmPhoenixHomes = lazy(() => import("@/pages/informational/PrivacyWindowFilmPhoenixHomes"));
const GlareReductionWindowFilmPhoenix = lazy(() => import("@/pages/informational/GlareReductionWindowFilmPhoenix"));
const HighRiseCommercialWindowTintingPhoenix = lazy(() => import("@/pages/informational/HighRiseCommercialWindowTintingPhoenix"));
const WindowFilmForSchoolsArizona = lazy(() => import("@/pages/informational/WindowFilmForSchoolsArizona"));
const WindowFilmForMedicalFacilitiesArizona = lazy(() => import("@/pages/informational/WindowFilmForMedicalFacilitiesArizona"));
const WindowFilmForRestaurantsArizona = lazy(() => import("@/pages/informational/WindowFilmForRestaurantsArizona"));
const WindowFilmForWarehousesArizona = lazy(() => import("@/pages/informational/WindowFilmForWarehousesArizona"));
const WindowFilmCostEstimator = lazy(() => import("@/pages/informational/WindowFilmCostEstimator"));
const ShatterproofWindowFilm = lazy(() => import("@/pages/informational/ShatterproofWindowFilm"));

/* ---------------- GLOBAL SCHEMA ---------------- */
const globalLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": "https://arizonahouseoffilm.com",
  name: "Arizona House of Film",
  url: "https://arizonahouseoffilm.com",
  telephone: "+1-480-788-1591",
  image: "https://arizonahouseoffilm.com/og-image.jpg",
  logo: {
    "@type": "ImageObject",
    "url": "https://arizonahouseoffilm.com/favicon-512.png",
    "width": 512,
    "height": 512,
  },
  priceRange: "$",
  foundingDate: "2017",
  description:
    "Licensed Arizona window film contractor. Residential, commercial, security, decorative, and solar window film. ROC #314088. Serving Phoenix, Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale, Peoria. Since 2017.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7007 W Flower St",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    postalCode: "85033",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.4484,
    longitude: -112.074,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "21",
    bestRating: "5",
  },
  sameAs: [
    "https://www.homeadvisor.com/rated.ArizonaHouseofFilm.101201526.html",
    "https://www.houzz.com/professionals/window-treatments/arizona-house-of-film-pfvwus-pf~688550776",
    "https://www.yelp.com/biz/arizona-house-of-film-phoenix",
    "https://www.bbb.org/us/az/phoenix/profile/window-tinting/arizona-house-of-film-1126-1000089782",
    "https://www.facebook.com/arizonahouseoffilm",
  ],
  areaServed: [
    "Phoenix, AZ", "Scottsdale, AZ", "Mesa, AZ", "Tempe, AZ",
    "Chandler, AZ", "Gilbert, AZ", "Glendale, AZ", "Peoria, AZ",
    "Surprise, AZ", "Avondale, AZ", "Tolleson, AZ",
  ],
};

/* ---------------- ROUTES ---------------- */
function AppRoutes() {
  const location = useLocation();

  return (
    <>
      {/* AUTO-INJECT SEO META ON EVERY ROUTE */}
      <SEOHead />

      <Suspense
        fallback={
          <div className="w-full h-screen flex items-center justify-center bg-white">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-900" />
          </div>
        }
      >
        <Routes location={location}>
          <Route path="/index.php" element={<LegacyRedirect />} />
          <Route path="/" element={<Home />} />

          {/* MAIN SERVICES */}
          <Route
            path="/commercial"
            element={<Navigate to="/commercial-window-tinting" replace />}
          />
          <Route path="/commercial-window-tinting" element={<Commercial />} />
          <Route path="/commercial-window-tinting-scottsdale" element={<ScottsdaleCommercial />} />
          <Route path="/restaurant-window-film" element={<RestaurantWindowFilm />} />
          <Route path="/office-partition-window-film" element={<OfficePartitionFilm />} />
          <Route path="/university-window-film" element={<UniversityWindowFilm />} />
          <Route path="/residential-window-tinting-scottsdale" element={<ScottsdaleResidential />} />
          <Route path="/commercial-window-film-phoenix" element={<CommercialPhoenix />} />
          <Route path="/decorative-window-film-phoenix" element={<DecorativePhoenix />} />
          <Route path="/residential-window-tinting-phoenix" element={<ResidentialPhoenix />} />
          <Route path="/solar-window-film-phoenix" element={<SolarPhoenix />} />
          <Route
            path="/residential"
            element={<Navigate to="/residential-window-tinting" replace />}
          />
          <Route path="/residential-window-tinting" element={<Residential />} />
          <Route
            path="/decorative"
            element={<Navigate to="/decorative-window-films" replace />}
          />
          <Route path="/decorative-window-films" element={<Decorative />} />
          <Route
            path="/safety-film"
            element={<Navigate to="/safety" replace />}
          />
          <Route path="/safety" element={<Safety />} />
          <Route
            path="/energy-saving"
            element={<Navigate to="/energy-saving-window-films" replace />}
          />
          <Route
            path="/energy-saving-window-films"
            element={<EnergySaving />}
          />
          <Route path="/anti-graffiti" element={<AntiGraffiti />} />
          <Route path="/security-window-film-phoenix" element={<SecurityPhoenix />} />
          <Route path="/anti-graffiti-film-phoenix" element={<AntiGraffitiPhoenix />} />
          <Route path="/window-tinting-phoenix" element={<WindowTintingPhoenix />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/bathroom-privacy-window-film" element={<BathroomPrivacyFilm />} />
          <Route path="/office-privacy-window-film" element={<OfficePrivacyFilm />} />
          <Route path="/storefront-window-film" element={<StorefrontWindowFilm />} />
          <Route path="/entryway-window-film" element={<EntrywaySidelightFilm />} />
          <Route path="/sidelight-window-film" element={<SidelightWindowFilm />} />
          <Route path="/one-way-mirror-window-film" element={<OneWayMirrorFilm />} />

          {/* LOCATION PAGES */}
          <Route path="/window-tinting-chandler" element={<WindowTintingChandler />} />
          <Route path="/window-tinting-gilbert" element={<WindowTintingGilbert />} />
          <Route path="/window-tinting-peoria" element={<WindowTintingPeoria />} />
          <Route path="/window-tinting-queen-creek" element={<WindowTintingQueenCreek />} />
          <Route path="/window-tinting-mesa" element={<WindowTintingMesa />} />
          <Route path="/window-tinting-tempe" element={<WindowTintingTempe />} />
          <Route path="/window-tinting-glendale" element={<WindowTintingGlendale />} />
          <Route path="/window-tinting-tolleson" element={<WindowTintingTolleson />} />
          <Route path="/window-tinting-fountain-hills" element={<WindowTintingFountainHills />} />
          <Route path="/window-tinting-avondale" element={<WindowTintingAvondale />} />
          <Route path="/commercial-window-tinting-mesa" element={<CommercialWindowTintingMesa />} />
          <Route path="/commercial-window-tinting-chandler" element={<CommercialWindowTintingChandler />} />
          <Route path="/commercial-window-tinting-tempe" element={<CommercialWindowTintingTempe />} />
          <Route path="/commercial-window-tinting-gilbert" element={<CommercialWindowTintingGilbert />} />
          <Route path="/residential-window-tinting-mesa" element={<ResidentialWindowTintingMesa />} />
          <Route path="/residential-window-tinting-chandler" element={<ResidentialWindowTintingChandler />} />
          <Route path="/residential-window-tinting-gilbert" element={<ResidentialWindowTintingGilbert />} />
          <Route path="/residential-window-tinting-tempe" element={<ResidentialWindowTintingTempe />} />
          <Route path="/security-window-film-scottsdale" element={<SecurityWindowFilmScottsdale />} />
          <Route path="/decorative-window-film-scottsdale" element={<DecorativeWindowFilmScottsdale />} />
          <Route path="/solar-window-film-scottsdale" element={<SolarWindowFilmScottsdale />} />
          <Route path="/commercial-window-tinting-peoria" element={<CommercialWindowTintingPeoria />} />
          <Route path="/commercial-window-tinting-glendale" element={<CommercialWindowTintingGlendale />} />
          <Route path="/commercial-window-tinting-queen-creek" element={<CommercialWindowTintingQueenCreek />} />
          <Route path="/residential-window-tinting-peoria" element={<ResidentialWindowTintingPeoria />} />
          <Route path="/residential-window-tinting-glendale" element={<ResidentialWindowTintingGlendale />} />
          <Route path="/residential-window-tinting-queen-creek" element={<ResidentialWindowTintingQueenCreek />} />

          {/* SERVICE AREAS */}
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/service-areas/:slug" element={<CityPage />} />
          <Route path="/:slug-window-tinting" element={<CityPage />} />

          {/* SUPPORTING */}
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustriesPage />} />
          <Route path="/:category/:slug" element={<SupportingPage />} />

          {/* FILMS */}
          <Route path="/films" element={<FilmsHub />} />
          <Route path="/films/security" element={<SecurityFilmPage />} />
          <Route path="/films/security-films" element={<SecurityFilmPage />} />
          <Route
            path="/films/casper-cloaking"
            element={<CasperCloakingPage />}
          />
          <Route path="/films/:categorySlug" element={<FilmCategoryPage />} />
          <Route
            path="/films/:categorySlug/:productSlug"
            element={<FilmProductPage />}
          />

          {/* BRANDS */}
          <Route path="/brands" element={<BrandsHub />} />
          <Route path="/brands/flexfilm" element={<FlexfilmPage />} />
          <Route path="/brands/llumar" element={<LlumarPage />} />
          <Route path="/brands/xpel" element={<XPELPage />} />
          <Route path="/brands/madico" element={<MadicoPage />} />
          <Route path="/brands/suntek" element={<SunTekPage />} />
          <Route path="/brands/:slug" element={<BrandPage />} />

          {/* INFORMATIONAL */}
          <Route path="/window-film-cost-arizona" element={<WindowFilmCostArizona />} />
          <Route path="/best-window-film-arizona-heat" element={<BestWindowFilmArizonaHeat />} />
          <Route path="/window-film-energy-rebates-arizona" element={<WindowFilmEnergyRebatesArizona />} />
          <Route path="/security-film-vs-tempered-glass" element={<SecurityFilmVsTemperedGlass />} />
          <Route path="/how-long-does-window-film-last" element={<HowLongDoesWindowFilmLast />} />
          <Route path="/ceramic-vs-dual-reflective-film" element={<CeramicVsDualReflectiveFilm />} />
          <Route path="/countertop-protection-film-arizona" element={<CountertopProtectionFilmArizona />} />
          <Route path="/reduce-heat-phoenix-windows" element={<ReduceHeatPhoenixWindows />} />
          <Route path="/uv-protection-window-film-phoenix" element={<UVProtectionWindowFilmPhoenix />} />
          <Route path="/privacy-window-film-phoenix-homes" element={<PrivacyWindowFilmPhoenixHomes />} />
          <Route path="/glare-reduction-window-film-phoenix" element={<GlareReductionWindowFilmPhoenix />} />
          <Route path="/high-rise-commercial-window-tinting-phoenix" element={<HighRiseCommercialWindowTintingPhoenix />} />
          <Route path="/window-film-for-schools-arizona" element={<WindowFilmForSchoolsArizona />} />
          <Route path="/window-film-for-medical-facilities-arizona" element={<WindowFilmForMedicalFacilitiesArizona />} />
          <Route path="/window-film-for-restaurants-arizona" element={<WindowFilmForRestaurantsArizona />} />
          <Route path="/window-film-for-warehouses-arizona" element={<WindowFilmForWarehousesArizona />} />
          <Route path="/window-film-cost-estimator" element={<WindowFilmCostEstimator />} />
          <Route path="/shatterproof-window-film" element={<ShatterproofWindowFilm />} />

          {/* MISC */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-a-quote" element={<FilmQuoteRequest />} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/book" element={<BookNow />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/success" element={<Success />} />
          <Route path="/store" element={<Store />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

/* ---------------- FLOATING ESTIMATOR ---------------- */
function FloatingEstimator() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <a
      href="/window-film-cost-estimator"
      style={{
        position: 'fixed',
        bottom: '80px',
        right: '16px',
        zIndex: 9998,
        background: '#16a34a',
        color: 'white',
        padding: '12px 16px',
        borderRadius: '50px',
        fontWeight: 'bold',
        fontSize: '13px',
        textDecoration: 'none',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        letterSpacing: '0.5px',
      }}
    >
      🧮 Get Estimate
    </a>
  );
}

/* ---------------- APP ---------------- */
function PageViewTracker() {
  const location = useLocation();
  useEffect(() => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: location.pathname,
        page_title: document.title,
      });
    }
  }, [location.pathname]);
  return null;
}

function App() {
  const location = useLocation();
  const canonicalUrl = `https://arizonahouseoffilm.com${location.pathname}`;
  const isProduction = import.meta.env.PROD;

  return (
    <>
      <PageViewTracker />
      {isProduction && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}

      {/* GLOBAL BASELINE HEAD TAGS */}
      <Helmet>
        <html lang="en" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />

        <script type="application/ld+json">
          {JSON.stringify(globalLocalBusinessSchema)}
        </script>
      </Helmet>

      <ScrollToTop />

      <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <div className="flex-1 w-full" id="main-content">
          <AppRoutes />
        </div>
        <Footer />
        <Toaster />
        <Suspense fallback={null}><FloatingContactButton /></Suspense>
        <FloatingEstimator />
      </div>
    </>
  );
}

/* ---------------- WRAPPER ---------------- */
function AppWrapper() {
  return (
    <Router>
      <App />
      <ChatWidget />
    </Router>
  );
}

export default AppWrapper;
