import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LegacyRedirect = () => {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    let redirectTo = '/';

    const searchWord = searchParams.get('search_word');
    if (searchWord) {
      const word = searchWord.toLowerCase();
      if (word.includes('film')) {
        redirectTo = '/films';
      } else if (word.includes('commercial')) {
        redirectTo = '/commercial-window-tinting';
      } else if (word.includes('residential')) {
        redirectTo = '/residential-window-tinting';
      } else if (word.includes('decorative')) {
        redirectTo = '/decorative-window-films';
      } else if (word.includes('safety')) {
        redirectTo = '/safety';
      } else if (word.includes('energy')) {
        redirectTo = '/energy-saving-window-films';
      } else if (word.includes('contact')) {
        redirectTo = '/contact';
      } else if (word.includes('blog')) {
        redirectTo = '/blog';
      } else if (word.includes('brand')) {
        redirectTo = '/brands';
      } else if (word.includes('service')) {
        redirectTo = '/service-areas';
      }
    }

    // ✅ Add smooth redirect + analytics-friendly replace
    const fullUrl = `${window.location.origin}${redirectTo}`;
    window.location.replace(fullUrl);
  }, [location]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      <p className="mt-8 text-xl">Redirecting to our new website...</p>
      <p className="text-sm text-gray-400 mt-4">If you are not redirected automatically, please <a href="/" className="text-blue-400 underline">click here</a>.</p>
    </div>
  );
};

export default LegacyRedirect;