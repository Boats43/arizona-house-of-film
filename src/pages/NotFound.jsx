import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Building, Home, Sparkles, ArrowRight } from 'lucide-react';

const NotFound = () => {
  const suggestedPages = [
    {
      title: 'Commercial Films',
      description: 'Solutions for businesses.',
      link: '/commercial-window-tinting',
      icon: Building,
    },
    {
      title: 'Residential Films',
      description: 'Enhance your home.',
      link: '/residential-window-tinting',
      icon: Home,
    },
    {
      title: 'Decorative Films',
      description: 'Style and privacy.',
      link: '/decorative-window-films',
      icon: Sparkles,
    },
  ];

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Arizona House of Film</title>
        <meta name="description" content="The page you are looking for does not exist. It might have been moved or deleted. Please explore our main services." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-[calc(100vh-400px)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <AlertTriangle className="mx-auto h-16 w-16 text-red-500" />
            <h1 className="mt-6 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              404 - Page Not Found
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Oops! The page you're looking for doesn't seem to exist. It might have been moved or deleted.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <Button asChild size="lg">
              <Link to="/">
                Go to Homepage
              </Link>
            </Button>
          </motion.div>

          <div className="mt-10 pt-10 border-t border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700">Or explore our main services:</h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {suggestedPages.map((page, index) => (
                <motion.div
                  key={page.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Link to={page.link} className="group block p-4 border border-transparent rounded-lg hover:shadow-lg hover:border-gray-300 transition-all duration-300 bg-white">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <page.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-md font-semibold text-gray-900">{page.title}</p>
                        <p className="text-sm text-gray-500">{page.description}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;