import React from 'react';
import { motion } from 'framer-motion';

const ContactHeader = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-teal-900 to-blue-900 overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to transform your space with professional window film? Contact us today for a free consultation and quote.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHeader;