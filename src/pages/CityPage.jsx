import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  Shield,
  Building,
  Home as HomeIcon,
  Phone,
  ArrowRight,
  ArrowLeft,
  Palette,
  Zap,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import NotFound from '@/pages/NotFound';
import { cities } from '@/data/cities';

const CityPage = ({ slug: propSlug }) => {
  const params = useParams();
  const slug = propSlug || params.slug;
  const city = cities.find(c => c.slug === slug);

  if (!city) return <NotFound />;

  const { name, geo } = city;
  
  const testimonials = [
      {
          name: "Jessica R.",
          city: "Mesa, AZ",
          text: `"I was worried about my furniture fading, but the UV protection film has given me total peace of mind. The installation was quick and clean."`,
          rating: 5,
      },
      {
          name: "David M.",
          city: "Phoenix, AZ",
          text: `"Arizona House of Film transformed our office space. The privacy film looks fantastic and our employees love the reduced glare."`,
          rating: 5,
      },
      {
          name: "Sarah L.",
          city: "Scottsdale, AZ",
          text: `"The team was professional and the results are amazing! My AC runs so much less now. Highly recommend!"`,
          rating: 5,
      }
  ];

  const services = [
    { name: 'Residential Tinting', icon: HomeIcon, link: '/residential-window-tinting' },
    { name: 'Commercial Tinting', icon: Building, link: '/commercial-window-tinting' },
    { name: 'Decorative Films', icon: Palette, link: '/decorative-window-films' },
    { name: 'Safety & Security', icon: Shield, link: '/safety' },
    { name: 'Energy-Saving Films', icon: Zap, link: '/energy-saving-window-films' }
  ];

  const pageTitle = `#1 Window Tinting in ${name}, AZ | Arizona House of Film`;
  const metaDescription = `Expert window film installation in ${name}, AZ — residential & commercial. Save energy with heat rejection film, reduce UV damage, and enhance privacy.`;
  const canonicalUrl = `https://arizonahouseoffilm.com/${slug}-window-tinting`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Arizona House of Film - Window Tinting ${name}`,
    "image": "https://arizonahouseoffilm.com/assets/logo.png",
    "url": canonicalUrl,
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
    "areaServed": { "@type": "City", "name": name },
    "priceRange": "$$",
    "description": metaDescription
  };
  
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <div className="bg-gray-50">
        <section className="relative py-20 text-white">
          <div className="absolute inset-0">
             <img alt={`Skyline of ${name}, Arizona`} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1700354611488-c7fc20ea5c07" />
             <div className="absolute inset-0 bg-black/50"></div>
           </div>
           <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
             <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Window Film Installation in {name}, AZ</h1>
             <p className="text-lg md:text-xl text-gray-200 mb-8">
                Your trusted local experts for residential and commercial window tinting in {name}.
             </p>
           </div>
        </section>
        
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 prose lg:prose-xl">
                <h2>Your {name} Window Tinting Experts</h2>
                <p>
                    For residents and business owners in {name}, controlling the intense Arizona sun is a top priority. Arizona House of Film provides professional window film installation services tailored to the {name} community. Our premium films are designed to deliver exceptional heat rejection, block 99% of harmful UV rays, and significantly lower your energy bills. Whether you need <Link to="/commercial-window-tinting">commercial tinting for your {name} business</Link> or <Link to="/residential-window-tinting">residential window film for your {name} home</Link>, our team of licensed and insured experts is ready to help you enhance your property's comfort, privacy, and efficiency.
                </p>

                <div className="not-prose mt-12">
                    <h3 className="text-2xl font-bold text-center mb-6">Our Services in {name}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {services.map(service => (
                            <Link key={service.name} to={service.link} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                                <service.icon className="w-8 h-8 mx-auto text-blue-600 mb-2"/>
                                <span className="font-semibold text-gray-800 text-sm">{service.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>

         <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Client Testimonial</h2>
                 <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                    <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />)}
                    </div>
                    <blockquote className="text-lg text-gray-700 italic">
                        {testimonials.find(t => t.city.includes(name))?.text || testimonials[1].text}
                    </blockquote>
                    <p className="text-right mt-4 font-semibold text-gray-800">- {testimonials.find(t => t.city.includes(name))?.name || testimonials[1].name}, {name}, AZ</p>
                </div>
            </div>
        </section>

        <section className="py-20 bg-blue-600 text-white text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4">Get a Free Estimate in {name}</h2>
                <p className="text-lg text-blue-100 mb-8">
                    Contact us today for a free, no-obligation quote for your {name} property.
                </p>
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-200">
                    <Link to="/contact">Request Your Free Quote</Link>
                </Button>
            </div>
        </section>

      </div>
    </>
  );
};

export default CityPage;