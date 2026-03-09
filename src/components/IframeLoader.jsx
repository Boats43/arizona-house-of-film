import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Film, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const IframeLoader = ({ src, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Cross-origin iframes block onLoad — auto-dismiss loader after timeout
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="relative w-full" style={{ paddingBottom: '75%' }}>
      {/* Loading State */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 rounded-lg"
        >
          <Film className="w-16 h-16 text-blue-300 mb-4" aria-hidden="true" />
          <p className="text-lg text-gray-500">Loading Film Catalog...</p>
        </motion.div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <AlertTriangle className="w-12 h-12 text-red-500 mb-4" aria-hidden="true" />
          <h3 className="text-xl font-semibold text-red-800">Could Not Load Preview</h3>
          <p className="text-red-700 mt-2 mb-4">
            The interactive film catalog could not be loaded. You can view the product directly on the supplier's website.
          </p>
          <Button asChild>
            <a href={src} target="_blank" rel="noopener noreferrer">
              View on DealerIframe
            </a>
          </Button>
        </div>
      )}

      {/* Iframe */}
      <iframe
        src={src}
        onLoad={handleLoad}
        title={title || 'Film Catalog'}
        loading="lazy"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        style={{ border: 0 }}
      />
    </div>
  );
};

export default IframeLoader;