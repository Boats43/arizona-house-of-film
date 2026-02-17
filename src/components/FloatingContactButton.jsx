import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingContactButton = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, delay: 1 }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
    >
      <div className="bg-gray-900/95 backdrop-blur-sm p-2 flex justify-around items-center border-t border-gray-700">
        <a 
          href="tel:480-788-1591" 
          className="flex-1 text-center py-2 px-4 flex items-center justify-center font-semibold rounded-md hover:bg-gray-700 transition-colors text-white"
          itemProp="telephone"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call / Quote
        </a>
        <div className="border-l border-gray-600 h-8 mx-2"></div>
        <Link 
          to="/contact"
          className="flex-1 text-center py-2 px-4 flex items-center justify-center font-semibold bg-blue-600 rounded-md hover:bg-blue-700 transition-colors text-white"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          Get a Free Quote
        </Link>
      </div>
    </motion.div>
  );
};

export default FloatingContactButton;