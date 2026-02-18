import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import {
  Shield,
  Building,
  Home as HomeIcon,
  Palette,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import NotFound from '@/pages/NotFound';
import { cities } from '@/data/cities';

const CityPage = () => {
  const params = useParams();

  /*
    This handles BOTH:
    /mesa-window-tinting
    /service-areas/mesa
  */

  let rawSlug =
    params.slug ||
    params.slugWindowTinting ||
    Object.values(params)[0]; // fallback safety

  if (!rawSlug) return <NotFound />;

  // Remove "-window-tinting" if present
  const cleanSlug = rawSlug.replace('-window-tinting', '');

  const city = cities.find(
    (c) => c.slug.toLowerCase() === cleanSlug.toLowerCase()
  );

  if (!city) return <NotFound />;

  const { name, geo } = city;

  const pageTitle = `#1 Window Tinting in ${name}, AZ | Arizona House of Film`;
  const metaDescription = `Expert window film installation in ${name}, AZ — residential and commercial services. Improve energy efficiency, reduce UV damage, and enhance privacy with professional window tinting.`;

  const canonicalUrl = `https://arizonahouseoffilm.com/${cleanSlug}-window-tinting`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "additionalType": "https://schema.org/WindowTreatmentStore",
    "name": `Arizona House of Film - Window Tinting ${name}`,
    "url": canonicalUrl,
    "logo": "https://arizonahouseoffilm.com/logo.png",
    "image": "https://arizonahouseoffilm.com/og-image.jpg",
    "telephone": "+14807881591",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": name,
      "addressRegion": "AZ",
      "addressCountry": "US"
    },
    ...(geo && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": geo.latitude,
        "longitude": geo.longitude
      }
    }),
    "areaServed": {
      "@type": "City",
      "name": name
    },
    "priceRange": "$$",
    "description": metaDescription
  };

  const services = [
    { name: 'Residential Tinting', icon: HomeIcon, link: '/residential-window-tinting' },
    { name: 'Commercial Tinting', icon: Building, link: '/commercial-window-tinting' },
    { name: 'Decorative Films', icon: Palette, link: '/decorative-window-films' },
    { name: 'Safety & Security', icon: Shield, link: '/safety' },
    { name: 'Energy-Saving Films', icon: Zap, link: '/energy-saving-window-films' }
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <div className="bg-gray-50">
        <section className="py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Window Film Installation in {name}, AZ
          </h1>
          <p className="text-lg mb-8">
            Your trusted local experts for residential and commercial window tinting in {name}.
          </p>
        </section>

        <section className="py-16 bg-white text-center">
          <h2 className="text-3xl font-bold mb-6">
            Our Services in {name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 px-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  className="p-6 border rounded-lg hover:shadow-md transition"
                >
                  <Icon className="mx-auto mb-4 w-8 h-8 text-blue-600" />
                  <h3 className="font-semibold">{service.name}</h3>
                </Link>
              );
            })}
          </div>

          <Button asChild size="lg">
            <Link to="/contact">Request Your Free Quote</Link>
          </Button>
        </section>
      </div>
    </>
  );
};

export default CityPage;
