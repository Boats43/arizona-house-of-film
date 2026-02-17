import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Shield, Building, ArrowRight, Phone, Star, Briefcase, Utensils, School, Stethoscope, Hotel, Warehouse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactFormSection from '@/components/contact/ContactFormSection';

const Commercial = () => {
  const pageTitle = "Commercial Window Tinting Phoenix | Arizona House of Film";
  const metaDescription = "Expert commercial window tinting in Phoenix, AZ. We offer solar, security, and decorative films for offices, retail, and more. Licensed & Insured. Get a free quote!";
  const canonicalUrl = "https://arizonahouseoffilm.com/commercial-window-tinting";

  const benefits = [
    { icon: Sun, title: "Energy Savings", description: "Reduce cooling costs by up to 30% by rejecting solar heat." },
    { icon: Shield, title: "Enhanced Security", description: "Strengthen glass against break-ins and accidents." },
    { icon: Building, title: "Improved Comfort", description: "Eliminate hot spots and reduce glare for employees and customers." },
  ];

  const industries = [
    { name: 'Office Buildings', icon: Briefcase, link: '/industries/office-buildings' },
    { name: 'Retail Stores', icon: Building, link: '/industries/retail-stores' },
    { name: 'Restaurants', icon: Utensils, link: '/industries/restaurants' },
    { name: 'Medical Facilities', icon: Stethoscope, link: '/industries/medical-facilities' },
    { name: 'Schools & Universities', icon: School, link: '/industries/educational-institutions' },
    { name: 'Hotels & Hospitality', icon: Hotel, link: '/industries/hotels-hospitality' },
    { name: 'Warehouses', icon: Warehouse, link: '/industries/warehouses' },
  ];

  const processSteps = [
    { title: "Book a Free Consultation", description: "We start with a free, on-site consultation to understand your needs and assess your property." },
    { title: "Contact Us for Professional Measurement", description: "Our experts take precise measurements to ensure a perfect, seamless fit for your windows." },
    { title: "Contact Us for Expert Installation", description: "Our certified technicians install your film with minimal disruption to your business operations." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does commercial window tinting cost in Phoenix?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Commercial window tinting costs in Phoenix typically range from $7 to $20 per square foot, depending on the type of film (solar, security, decorative) and the complexity of the installation. We provide free, detailed estimates for all projects."
        }
      },
      {
        "@type": "Question",
        "name": "What is the warranty on commercial window film?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most commercial window films come with a manufacturer's warranty of 10 to 15 years, which covers issues like bubbling, peeling, and discoloration. Arizona House of Film also guarantees the quality of our installation."
        }
      },
      {
        "@type": "Question",
        "name": "Can you install window film after business hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer flexible scheduling, including after-hours and weekend installations, to minimize any disruption to your business operations. Our goal is to work around your schedule."
        }
      }
    ]
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
        <meta property="og:image" content="https://arizonahouseoffilm.com/og-commercial.jpg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="relative py-24 bg-gray-900 text-white">
          <div className="absolute inset-0">
            <img alt="Modern office building with tinted windows in Phoenix" className="w-full h-full object-cover" src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/img_20240821_123937_469-jYOb9.jpg" />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-extrabold text-white text-shadow-lg">
              Commercial Window Tinting in Phoenix
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-4 max-w-2xl mx-auto text-lg text-gray-200 text-shadow-md">
              Protect your assets, reduce energy costs, and enhance the comfort of your commercial space with our professional window film solutions.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-8">
              <Button asChild size="lg">
                <Link to="/contact">Get a Free Commercial Quote</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">A Smart Investment for Your Business</h2>
              <p className="mt-4 text-lg text-gray-600">Window film is more than an upgrade—it's a strategic business decision.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div key={benefit.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Solutions for Every Industry</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">We provide tailored window film solutions for a wide range of commercial sectors throughout Arizona.</p>
            </div>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {industries.map(industry => (
                <Link key={industry.name} to={industry.link} className="flex flex-col items-center justify-center text-center p-4 bg-gray-50 hover:bg-blue-100 rounded-lg transition-colors duration-300">
                  <industry.icon className="w-8 h-8 text-blue-600 mb-2" />
                  <span className="font-medium text-gray-800">{industry.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Our Installation Process</h2>
              <p className="mt-4 text-lg text-gray-600">A seamless experience from start to finish.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {processSteps.map((step, index) => (
                <motion.div key={step.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white p-8 rounded-lg shadow-md flex flex-col">
                  <div className="text-3xl font-bold text-blue-600 mb-4">0{index + 1}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 flex-grow">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <Button asChild className="mt-auto">
                    <Link to="/contact">{step.title.startsWith("Book") ? "Book Now" : "Contact Us"}</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <ContactFormSection />
      </div>
    </>
  );
};

export default Commercial;