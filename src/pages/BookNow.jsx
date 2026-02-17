import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const BookNow = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Book a Free Consultation | Arizona House of Film</title>
        <meta name="description" content="Schedule your free, no-obligation consultation for window tinting in Arizona. Select a time that works for you and let our experts provide a tailored solution." />
        <link rel="canonical" href="https://www.arizonahouseoffilm.com/book-now" />
        <meta property="og:title" content="Book a Free Consultation | Arizona House of Film" />
        <meta property="og:description" content="Schedule your free, no-obligation consultation for window tinting in Arizona. Select a time that works for you and let our experts provide a tailored solution." />
        <meta property="og:url" content="https://www.arizonahouseoffilm.com/book-now" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-teal-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Calendar className="w-16 h-16 mx-auto text-white mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Book Your Free Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Schedule a free, no-obligation consultation with our window film experts. Let's discuss your project and find the perfect solution for your home or business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calendly Embed Section */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/arizonahouseoffilm"
                style={{ minWidth: '320px', height: '700px' }}
            ></div>
        </div>
      </section>
    </>
  );
};

export default BookNow;