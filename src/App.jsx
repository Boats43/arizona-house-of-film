import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AnimatePresence } from 'framer-motion';
import { SpeedInsights } from '@vercel/speed-insights/react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import FloatingContactButton from '@/components/FloatingContactButton';
import { Toaster } from '@/components/ui/toaster';
import LegacyRedirect from '@/components/LegacyRedirect';

/* ---------------- LAZY PAGES ---------------- */

const Home = lazy(() => import('@/pages/Home'));
const Commercial = lazy(() => import('@/pages/Commercial'));
const Residential = lazy(() => import('@/pages/Residential'));
const Decorative = lazy(() => import('@/pages/Decorative'));
const Safety = lazy(() => import('@/pages/Safety'));
const EnergySaving = lazy(() => import('@/pages/EnergySaving'));
const Gallery = lazy(() => import('@/pages/Gallery'));
const Careers = lazy(() => import('@/pages/Careers'));
const Contact = lazy(() => import('@/pages/Contact'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const ThankYou = lazy(() => import('@/pages/ThankYou'));
const BookNow = lazy(() => import('@/pages/BookNow'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const Welcome = lazy(() => import('@/pages/Welcome'));
const CityPage = lazy(() => import('@/pages/CityPage'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogPost = lazy(() => import('@/pages/BlogPost'));
const ServiceAreas = lazy(() => import('@/pages/ServiceAreas'));
const FilmsHub = lazy(() => import('@/pages/FilmsHub'));
const FilmCategoryPage = lazy(() => import('@/pages/FilmCategoryPage'));
const FilmProductPage = lazy(() => import('@/pages/FilmProductPage'));
const BrandsHub = lazy(() => import('@/pages/BrandsHub'));
const BrandPage = lazy(() => import('@/pages/BrandPage'));
const FlexfilmPage = lazy(() => import('@/pages/brands/FlexfilmPage'));
const Store = lazy(() => import('@/pages/Store'));
const SupportingPage = lazy(() => import('@/pages/SupportingPage'));
const AntiGraffiti = lazy(() => import('@/pages/AntiGraffiti'));
const SecurityFilmPage = lazy(() => import('@/pages/films/SecurityFilmPage'));
const CasperCloakingPage = lazy(() => import('@/pages/films/CasperCloakingPage'));
const IndustriesPage = lazy(() => import('@/pages/IndustriesPage'));
const Success = lazy(() => import('@/pages/Success'));
const Solutions = lazy(() => import('@/pages/Solutions'));

/* ---------------- GLOBAL SCHEMA ---------------- */

const globalSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Arizona House of Film",
  "url": "https://arizonahouseoffilm.com"
};

/* ---------------- ROUTES ---------------- */

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense
        fallback={
          <div className="w-full h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
          </div>
        }
      >
        <Routes location={location} key={location.pathname}>

          <Route path="/index.php" element={<LegacyRedirect />} />
          <Route path="/" element={<Home />} />

          {/* MAIN SERVICES */}
          <Route path="/commercial" element={<Navigate to="/commercial-window-tinting" replace />} />
          <Route path="/commercial-window-tinting" element={<Commercial />} />

          <Route path="/residential" element={<Navigate to="/residential-window-tinting" replace />} />
          <Route path="/residential-window-tinting" element={<Residential />} />

          <Route path="/decorative" element={<Navigate to="/decorative-window-films" replace />} />
          <Route path="/decorative-window-films" element={<Decorative />} />

          <Route path="/safety-film" element={<Navigate to="/safety" replace />} />
          <Route path="/safety" element={<Safety />} />

          <Route path="/energy-saving" element={<Navigate to="/energy-saving-window-films" replace />} />
          <Route path="/energy-saving-window-films" element={<EnergySaving />} />

          <Route path="/anti-graffiti" element={<AntiGraffiti />} />
          <Route path="/solutions" element={<Solutions />} />

          {/* ---------------- SERVICE AREAS ---------------- */}

          {/* Hub FIRST */}
          <Route path="/service-areas" element={<ServiceAreas />} />

          {/* Short URL Version */}
          <Route path="/service-areas/:slug" element={<CityPage />} />

          {/* Long SEO Version */}
          <Route path="/:slug-window-tinting" element={<CityPage />} />

          {/* ---------------- SUPPORTING ---------------- */}

          <Route path="/industries/:slug" element={<IndustriesPage />} />
          <Route path="/:category/:slug" element={<SupportingPage />} />

          {/* ---------------- FILMS ---------------- */}

          <Route path="/films" element={<FilmsHub />} />
          <Route path="/films/security" element={<SecurityFilmPage />} />
          <Route path="/films/casper-cloaking" element={<CasperCloakingPage />} />
          <Route path="/films/:categorySlug" element={<FilmCategoryPage />} />
          <Route path="/films/:categorySlug/:productSlug" element={<FilmProductPage />} />

          {/* ---------------- BRANDS ---------------- */}

          <Route path="/brands" element={<BrandsHub />} />
          <Route path="/brands/flexfilm" element={<FlexfilmPage />} />
          <Route path="/brands/:slug" element={<BrandPage />} />

          {/* ---------------- MISC ---------------- */}

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/contact" element={<Contact />} />
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
    </AnimatePresence>
  );
}

/* ---------------- APP ---------------- */

function App() {
  const location = useLocation();
  const canonicalUrl = `https://arizonahouseoffilm.com${location.pathname}`;

  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <script type="application/ld+json">
          {JSON.stringify(globalSchema)}
        </script>
      </Helmet>

      <ScrollToTop />

      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
        <Toaster />
        <FloatingContactButton />
        <SpeedInsights />
      </div>
    </>
  );
}

/* ---------------- WRAPPER ---------------- */

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
