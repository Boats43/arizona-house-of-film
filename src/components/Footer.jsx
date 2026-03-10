import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Linkedin, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const mainLinks = [
    { name: 'Commercial', path: '/commercial-window-tinting' },
    { name: 'Commercial Scottsdale', path: '/commercial-window-tinting-scottsdale' },
    { name: 'Residential', path: '/residential-window-tinting' },
    { name: 'Residential Scottsdale', path: '/residential-window-tinting-scottsdale' },
    { name: 'Safety & Security', path: '/safety' },
    { name: 'Anti-Graffiti', path: '/anti-graffiti' },
    { name: 'Decorative Films', path: '/decorative-window-films' },
    { name: 'Energy Saving', path: '/energy-saving-window-films' },
    { name: 'All Solutions', path: '/solutions' },
  ];

  const phoenixLinks = [
    { name: 'Window Tinting Phoenix', path: '/window-tinting-phoenix' },
    { name: 'Commercial Film Phoenix', path: '/commercial-window-film-phoenix' },
    { name: 'Residential Film Phoenix', path: '/residential-window-tinting-phoenix' },
    { name: 'Solar Film Phoenix', path: '/solar-window-film-phoenix' },
    { name: 'Security Film Phoenix', path: '/security-window-film-phoenix' },
    { name: 'Anti-Graffiti Phoenix', path: '/anti-graffiti-film-phoenix' },
    { name: 'Decorative Film Phoenix', path: '/decorative-window-film-phoenix' },
  ];

  const secondaryLinks = [
    { name: 'Films', path: '/films' },
    { name: 'Brands', path: '/brands' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Book Now', path: '/book-now' },
    { name: 'Store', path: '/store' },
    { name: 'Contact', path: '/contact' },
  ];

  const industriesLinks = [
    { name: 'All Industries', path: '/industries' },
    { name: 'Office Buildings', path: '/industries/office-buildings' },
    { name: 'Retail Stores', path: '/industries/retail-stores' },
    { name: 'Restaurants', path: '/industries/restaurants' },
    { name: 'Medical Facilities', path: '/industries/medical-facilities' },
    { name: 'Schools', path: '/industries/educational-institutions' },
    { name: 'Government', path: '/industries/government-buildings' },
    { name: 'Hotels', path: '/industries/hotels-hospitality' },
    { name: 'Warehouses', path: '/industries/warehouses' },
  ];

  const privacyLinks = [
    { name: 'Bathroom Privacy Film', path: '/bathroom-privacy-window-film' },
    { name: 'Office Privacy Film', path: '/office-privacy-window-film' },
    { name: 'Storefront Window Film', path: '/storefront-window-film' },
    { name: 'Entryway & Door Film', path: '/entryway-window-film' },
    { name: 'Sidelight Window Film', path: '/sidelight-window-film' },
    { name: 'One-Way Mirror Film', path: '/one-way-mirror-window-film' },
  ];

  const companyLinks = [
    { name: 'About Us', path: '/welcome' },
    { name: 'Careers', path: '/careers' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, path: 'https://www.facebook.com/arizonahouseoffilm' },
    { name: 'Instagram', icon: Instagram, path: 'https://www.instagram.com/arizonahouseoffilm/' },
    { name: 'YouTube', icon: Youtube, path: 'https://www.youtube.com/@arizonahouseoffilm' },
    { name: 'LinkedIn', icon: Linkedin, path: 'https://www.linkedin.com/company/arizona-house-of-film' },
  ];

  const linkClass = "text-sm text-gray-400 hover:text-white transition-colors";
  const headingClass = "text-sm font-semibold tracking-wider uppercase text-gray-300";

  return (
    <footer className="bg-gray-900 text-white" itemScope itemType="https://schema.org/WPFooter">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">

          {/* Company Info */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/untitled-design-4-Jg0bh.png"
                alt="Arizona House of Film secondary logo"
                className="h-12 w-auto bg-white p-1 rounded-sm"
                loading="lazy"
                width="48"
                height="48"
              />
              <span className="font-bold text-xl">Arizona House of Film</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Arizona's trusted, licensed partner for professional window tinting solutions. ROC # 314088
            </p>
            <div className="mt-6 flex items-center space-x-1 text-yellow-400">
              <Star fill="currentColor" className="w-4 h-4" />
              <Star fill="currentColor" className="w-4 h-4" />
              <Star fill="currentColor" className="w-4 h-4" />
              <Star fill="currentColor" className="w-4 h-4" />
              <Star fill="currentColor" className="w-4 h-4" />
              <span className="text-white ml-2 text-sm">4.4 Stars (16 Reviews)</span>
            </div>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map(item => (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label={item.name}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className={headingClass}>Services</p>
            <ul className="mt-4 space-y-2">
              {mainLinks.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className={linkClass}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mt-5 mb-2">Privacy Solutions</p>
            <ul className="space-y-2">
              {privacyLinks.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className={linkClass}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Phoenix Locations */}
          <div>
            <p className={headingClass}>Phoenix</p>
            <ul className="mt-4 space-y-2">
              {phoenixLinks.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className={linkClass}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <p className={headingClass}>Explore</p>
            <ul className="mt-4 space-y-2">
              {secondaryLinks.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className={linkClass}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <p className={headingClass}>Industries</p>
            <ul className="mt-4 space-y-2">
              {industriesLinks.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className={linkClass}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className={headingClass}>Company</p>
            <ul className="mt-4 space-y-2">
              {companyLinks.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className={linkClass}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-gray-400">
            <p>&copy; {currentYear} Arizona House of Film. All Rights Reserved. ROC #314088</p>
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <a href="tel:4807881591" className="hover:text-white">
                Phone: (480) 788-1591
              </a>
              <a href="mailto:arizonahouseoffilm@gmail.com" className="hover:text-white">
                arizonahouseoffilm@gmail.com
              </a>
              <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="streetAddress">7007 W Flower St</span>,{' '}
                <span itemProp="addressLocality">Phoenix</span>,{' '}
                <span itemProp="addressRegion">AZ</span>{' '}
                <span itemProp="postalCode">85033</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
