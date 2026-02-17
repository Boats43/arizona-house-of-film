import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Success = () => {
  return (
    <>
      <Helmet>
        <title>Order Successful! - Arizona House of Film</title>
        <meta name="description" content="Thank you for your order from Arizona House of Film. Your payment was successful." />
        <meta property="og:title" content="Order Successful! - Arizona House of Film" />
        <meta property="og:description" content="Thank you for your order. Your payment was successful." />
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
            Payment Successful!
          </h1>
          <p className="text-lg text-gray-600">
            Thank you for your purchase. Your order is being processed and you will receive a confirmation email shortly.
          </p>
          <div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/store">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Success;