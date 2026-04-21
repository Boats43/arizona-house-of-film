import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CheckCircle2 from 'lucide-react/dist/esm/icons/check-circle-2';
import Phone from 'lucide-react/dist/esm/icons/phone';
import Star from 'lucide-react/dist/esm/icons/star';
import ExternalLink from 'lucide-react/dist/esm/icons/external-link';
import ClipboardCheck from 'lucide-react/dist/esm/icons/clipboard-check';
import CalendarCheck from 'lucide-react/dist/esm/icons/calendar-check';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import Building from 'lucide-react/dist/esm/icons/building';
import HomeIcon from 'lucide-react/dist/esm/icons/home';
import Film from 'lucide-react/dist/esm/icons/film';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import { Button } from '@/components/ui/button';

const ThankYou = () => {
  const pageTitle = "Thank You! - Arizona House of Film";
  const metaDescription = "Thank you for contacting Arizona House of Film. We have received your message and will get back to you shortly.";
  const canonicalUrl = "https://arizonahouseoffilm.com/thank-you";
  const ogImage = "https://arizonahouseoffilm.com/og-image.jpg";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    description: metaDescription,
    url: canonicalUrl,
    publisher: { "@type": "LocalBusiness", "@id": "https://arizonahouseoffilm.com", name: "Arizona House of Film" }
  };

  const steps = [
    { icon: ClipboardCheck, title: "We review your request", timeline: "Same day", description: "Our team evaluates your project details and prepares a tailored recommendation." },
    { icon: CalendarCheck, title: "We contact you to schedule", timeline: "Within 24 hours", description: "We'll reach out by phone or email to discuss your needs and set up a time." },
    { icon: MapPin, title: "Free on-site estimate", timeline: "No obligation", description: "A certified installer visits your property to measure and provide an exact quote." },
  ];

  const exploreLinks = [
    { title: "Commercial Window Tinting", icon: Building, path: "/commercial-window-tinting", description: "Energy savings and glare reduction for offices, storefronts, and buildings." },
    { title: "Residential Window Tinting", icon: HomeIcon, path: "/residential-window-tinting", description: "Heat rejection, UV protection, and privacy for Arizona homes." },
    { title: "View Film Catalog", icon: Film, path: "/films", description: "Browse 600+ films — solar, decorative, security, privacy, and specialty." },
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* SUCCESS HEADER */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl mx-auto text-center space-y-6">
          <div className="flex justify-center">
            <CheckCircle2 className="h-20 w-20 text-green-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Your Request Was Received</h1>
          <p className="text-lg text-gray-300">We'll contact you within 24 business hours. In the meantime, feel free to call us directly.</p>
          <div>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-6 rounded-lg">
              <a href="tel:+14807881591">
                <Phone className="mr-2 h-5 w-5" />
                (480) 788-1591
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* REVIEW REQUEST */}
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="max-w-xl mx-auto text-center space-y-6">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-7 w-7 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">While You Wait — Leave Us a Review</h2>
          <p className="text-gray-600 text-lg">Quick reviews help Arizona homeowners and businesses find trusted installers. Takes 30 seconds.</p>
          <div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-6 rounded-lg text-lg">
              <a href="https://g.page/r/CYL5MUtPTH4eEBM/review" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Leave a Google Review
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="bg-gray-50 py-16 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.25 }} className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">What Happens Next</motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center space-y-3">
                <div className="flex justify-center">
                  <div className="bg-slate-900 rounded-full p-3">
                    <step.icon className="h-6 w-6 text-green-400" />
                  </div>
                </div>
                <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">{step.timeline}</span>
                <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="text-2xl md:text-3xl font-bold text-center mb-4">Explore More</motion.h2>
          <p className="text-center text-gray-400 text-sm mb-12">Or <Link to="/" className="underline text-green-400 hover:text-green-300">return to the home page</Link>.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {exploreLinks.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.55 + i * 0.1 }}>
                <Link to={item.path} className="block bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl p-6 transition-colors group space-y-3">
                  <item.icon className="h-8 w-8 text-green-400" />
                  <h3 className="text-lg font-bold group-hover:text-green-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                  <span className="inline-flex items-center text-green-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
