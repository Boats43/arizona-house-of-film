import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Using a timeout to ensure the scroll happens after the new page transition is complete.
    const timer = setTimeout(() => {
        try {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        } catch (e) {
            // Fallback for older browsers
            window.scrollTo(0, 0);
        }
    }, 100); // 100ms delay can be adjusted if needed

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;