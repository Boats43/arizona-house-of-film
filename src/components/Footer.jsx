import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Linkedin, Star } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const mainLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Commercial',
    path: '/commercial-window-tinting'
  }, {
    name: 'Residential',
    path: '/residential-window-tinting'
  }, {
    name: 'Decorative',
    path: '/decorative-window-films'
  }, {
    name: 'Safety',
    path: '/safety'
  }, {
    name: 'Energy Saving',
    path: '/energy-saving-window-films'
  }];
  const secondaryLinks = [{
    name: 'Films',
    path: '/films'
  }, {
    name: 'Brands',
    path: '/brands'
  }, {
    name: 'Service Areas',
    path: '/service-areas'
  }, {
    name: 'Gallery',
    path: '/gallery'
  }, {
    name: 'Blog',
    path: '/blog'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  const legalLinks = [{
    name: 'About Us',
    path: '/welcome'
  }, {
    name: 'Privacy Policy',
    path: '/privacy-policy'
  }, {
    name: 'Careers',
    path: '/careers'
  }];
  const socialLinks = [{
    name: 'Facebook',
    icon: Facebook,
    path: 'https://www.facebook.com/arizonahouseoffilm'
  }, {
    name: 'Instagram',
    icon: Instagram,
    path: 'https://www.instagram.com/arizonahouseoffilm/'
  }, {
    name: 'YouTube',
    icon: Youtube,
    path: 'https://www.youtube.com/@arizonahouseoffilm'
  }, {
    name: 'LinkedIn',
    icon: Linkedin,
    path: 'https://www.linkedin.com/company/arizona-house-of-film'
  }];
  return <footer className="bg-gray-900 text-white" itemScope itemType="https://schema.org/WPFooter">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <img src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/untitled-design-4-Jg0bh.png" alt="Arizona House of Film secondary logo" className="h-12 w-auto bg-white p-1 rounded-sm" loading="lazy" width="48" height="48" />
              <span className="font-bold text-xl">Arizona House of Film</span>
            </Link>
            <p className="mt-4 text-gray-400">Arizona's trusted, licensed partner for professional window tinting solutions. ROC # 314088</p>
            <div className="mt-6 flex items-center space-x-2 text-yellow-400">
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <Star fill="currentColor" className="w-5 h-5" />
              <span className="text-white ml-2">4.4 Stars (15+ Reviews)</span>
            </div>
             <div className="mt-6 flex space-x-4">
              {socialLinks.map(item => <a key={item.name} href={item.path} target="_blank" rel="noopener noreferrer nofollow" aria-label={item.name} className="text-gray-400 hover:text-white transition-colors">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>)}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold tracking-wider uppercase text-gray-300">Services</p>
            <ul className="mt-4 space-y-4">
              {mainLinks.slice(1).map(item => <li key={item.name}>
                  <Link to={item.path} className="text-base text-gray-400 hover:text-white">
                    {item.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <p className="text-sm font-semibold tracking-wider uppercase text-gray-300">Explore</p>
            <ul className="mt-4 space-y-4">
              {secondaryLinks.map(item => <li key={item.name}>
                  <Link to={item.path} className="text-base text-gray-400 hover:text-white">
                    {item.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-semibold tracking-wider uppercase text-gray-300">Company</p>
            <ul className="mt-4 space-y-4">
              {legalLinks.map(item => <li key={item.name}>
                  <Link to={item.path} className="text-base text-gray-400 hover:text-white">
                    {item.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <p className="text-sm font-semibold tracking-wider uppercase text-gray-300">Contact Us</p>
            <ul className="mt-4 space-y-4 text-gray-400">
              <li>
                Phone:{' '}
                <a href="tel:480-788-1591" className="hover:text-white">
                  (480) 788-1591
                </a>
              </li>
              <li>
                Email:{' '}
                <a href="mailto:arizonahouseoffilm@gmail.com" className="hover:text-white">
								arizonahouseoffilm@gmail.com
                </a>
              </li>
              <li itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="streetAddress">7007 W Flower St</span><br />
                <span itemProp="addressLocality">Phoenix</span>, <span itemProp="addressRegion">AZ</span> <span itemProp="postalCode">85033</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-base text-gray-400">
            &copy; {currentYear} Arizona House of Film. All Rights Reserved. Arizona Contractor's License: ROC 315259.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;