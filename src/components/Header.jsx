import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown, User, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCookie, setShowCookie] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookie-accepted');
    if (!cookieAccepted) {
      setShowCookie(true);
    }
  }, []);
  const handleAcceptCookie = () => {
    localStorage.setItem('cookie-accepted', 'true');
    setShowCookie(false);
  };
  const navLinks = [{
    name: 'Commercial',
    path: '/commercial-window-tinting'
  }, {
    name: 'Residential',
    path: '/residential-window-tinting'
  }, {
    name: 'Solutions',
    path: '/solutions'
  }, {
    name: 'Resources',
    path: '#',
    dropdown: [{
      name: 'All Films',
      path: '/films'
    }, {
      name: 'All Brands',
      path: '/brands'
    }, {
      name: 'Gallery',
      path: '/gallery'
    }]
  }, {
    name: 'Company',
    path: '#',
    dropdown: [{
      name: 'About Us',
      path: '/welcome'
    }, {
      name: 'Service Areas',
      path: '/service-areas'
    }, {
      name: 'Blog',
      path: '/blog'
    }, {
      name: 'Careers',
      path: '/careers'
    }]
  }, {
    name: 'Contact Us',
    path: '/contact'
  }];
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20
    },
    open: {
      opacity: 1,
      y: 0
    }
  };
  const NavItem = ({
    item
  }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    if (item.dropdown) {
      return <div className="relative group" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
          <button className="flex items-center text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors" aria-haspopup="true" aria-expanded={isDropdownOpen}>
            {item.name}
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
          <AnimatePresence>
            {isDropdownOpen && <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: 10
          }} className="absolute z-20 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-100">
                {item.dropdown.map(subItem => <NavLink key={subItem.name} to={subItem.path} className={({
              isActive
            }) => `block px-4 py-2 text-sm ${isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-900 hover:bg-gray-100'}`}>
                    {subItem.name}
                  </NavLink>)}
              </motion.div>}
          </AnimatePresence>
        </div>;
    }
    return <NavLink to={item.path} className={({
      isActive
    }) => `text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors ${isActive ? 'font-bold text-blue-600' : ''}`}>
        {item.name}
      </NavLink>;
  };
  return <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200" role="banner">
      <AnimatePresence>
      {showCookie && <motion.div initial={{
        y: -50,
        opacity: 0
      }} animate={{
        y: 0,
        opacity: 1
      }} exit={{
        y: -50,
        opacity: 0
      }} className="bg-gray-800 text-white text-sm text-center p-3">
            This website stores cookies on your computer to ensure you get the best experience. To learn more, see our{' '}
            <Link to="/privacy-policy" className="underline hover:text-blue-300">Privacy Policy</Link>.
            <Button size="sm" onClick={handleAcceptCookie} className="ml-4 bg-white text-gray-800 hover:bg-gray-200">Accept</Button>
          </motion.div>}
      </AnimatePresence>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-gray-900" aria-label="Arizona House of Film Home">
              <img src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/untitled-design-4-IrbHI.png" alt="Arizona House of Film primary logo" className="h-14 w-auto" width="56" height="56" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
            {navLinks.map(item => <NavItem key={item.name} item={item} />)}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
             <div className="text-right">
                <div className="flex items-center text-sm text-yellow-500">
                    <Star fill="currentColor" className="w-4 h-4" />
                    <Star fill="currentColor" className="w-4 h-4" />
                    <Star fill="currentColor" className="w-4 h-4" />
                    <Star fill="currentColor" className="w-4 h-4" />
                    <Star fill="currentColor" className="w-4 h-4" />
                    <span className="ml-1 text-gray-600 font-semibold">15+ Reviews</span>
                </div>
                 <p className="text-xs text-gray-500">Rating: 4.4</p>
            </div>
            <Button asChild>
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Button asChild variant="outline" size="sm">
              <Link to="/contact">Quote</Link>
            </Button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900" aria-label="Toggle navigation menu" aria-expanded={isOpen}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && <motion.div variants={mobileMenuVariants} initial="closed" animate="open" exit="closed" className="lg:hidden bg-white border-t border-gray-200" role="dialog" aria-modal="true">
            <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map(item => item.dropdown ? <div key={item.name}>
                    <p className="px-3 py-2 text-base font-medium text-gray-500">
                      {item.name}
                    </p>
                    {item.dropdown.map(subItem => <NavLink key={subItem.name} to={subItem.path} onClick={() => setIsOpen(false)} className={({
              isActive
            }) => `block rounded-md py-2 px-3 text-base font-medium ml-4 ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900'}`}>
                        {subItem.name}
                      </NavLink>)}
                  </div> : <NavLink key={item.name} to={item.path} onClick={() => setIsOpen(false)} className={({
            isActive
          }) => `block rounded-md py-2 px-3 text-base font-medium ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900'}`}>
                    {item.name}
                  </NavLink>)}
            </nav>
            <div className="pt-4 pb-3 border-t border-gray-200 px-5">
              <a href="tel:480-788-1591" className="mt-3 flex items-center justify-center text-base font-medium text-gray-900 hover:text-blue-600">
                <Phone className="w-4 h-4 mr-2" />
                (480) 788-1591
              </a>
            </div>
          </motion.div>}
      </AnimatePresence>
    </header>;
};
export default Header;