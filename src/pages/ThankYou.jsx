import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ThankYou = () => {
  return (
    <>
      <Helmet>
        <title>Thank You! - Arizona House of Film</title>
        <meta name="description" content="Thank you for contacting Arizona House of Film. We have received your message and will get back to you shortly." />
        <meta property="og:title" content="Thank You! - Arizona House of Film" />
        <meta property="og:description" content="Thank you for contacting Arizona House of Film. We have received your message and will get back to you shortly." />
      </Helmet>

      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full space-y-8 text-center bg-white p-10 rounded-2xl shadow-lg"
        >
          <div className="flex justify-center">
            <CheckCircle className="h-20 w-20 text-green-500" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900">
            Thank You!
          </h1>
          <p className="text-lg text-gray-600">
            Your message has been successfully sent. We appreciate you contacting us and will be in touch shortly.
          </p>
          <div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Return to Homepage
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ThankYou;