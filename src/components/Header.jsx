import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Menu from "lucide-react/dist/esm/icons/menu";
import X from "lucide-react/dist/esm/icons/x";
import Star from "lucide-react/dist/esm/icons/star";
import ChevronDown from "lucide-react/dist/esm/icons/chevron-down";
import ChevronUp from "lucide-react/dist/esm/icons/chevron-up";

import { Button } from "@/components/ui/button";

const commercialLinks = [
  { name: "Commercial Phoenix", path: "/commercial-window-film-phoenix" },
  { name: "Commercial Scottsdale", path: "/commercial-window-tinting-scottsdale" },
];

const residentialLinks = [
  { name: "Residential Phoenix", path: "/residential-window-tinting-phoenix" },
  { name: "Residential Scottsdale", path: "/residential-window-tinting-scottsdale" },
];

const solutionsLinks = [
  { name: "Safety & Security", path: "/safety" },
  { name: "Anti-Graffiti", path: "/anti-graffiti" },
  { name: "Decorative Films", path: "/decorative-window-films" },
  { name: "Energy Saving", path: "/energy-saving-window-films" },
  { name: "Solar Film Phoenix", path: "/solar-window-film-phoenix" },
  { name: "Security Film Phoenix", path: "/security-window-film-phoenix" },
  { name: "Decorative Film Phoenix", path: "/decorative-window-film-phoenix" },
  { name: "AI Window Film Estimator", path: "/ai-window-film-estimator" },
  { name: "Window Film FAQ", path: "/window-film-faq" },
];

const industriesLinks = [
  { name: "All Industries", path: "/industries" },
  { name: "Office Buildings", path: "/industries/office-buildings" },
  { name: "Retail Stores", path: "/industries/retail-stores" },
  { name: "Restaurants", path: "/industries/restaurants" },
  { name: "Medical Facilities", path: "/industries/medical-facilities" },
  { name: "Schools", path: "/industries/educational-institutions" },
  { name: "Government", path: "/industries/government-buildings" },
  { name: "Hotels", path: "/industries/hotels-hospitality" },
  { name: "Warehouses", path: "/industries/warehouses" },
];

const mobileSections = [
  {
    id: "services",
    label: "Services",
    defaultOpen: true,
    links: [
      { name: "Commercial Window Tinting", path: "/commercial-window-tinting" },
      { name: "Commercial Phoenix", path: "/commercial-window-film-phoenix" },
      { name: "Commercial Scottsdale", path: "/commercial-window-tinting-scottsdale" },
      { name: "Residential Window Tinting", path: "/residential-window-tinting" },
      { name: "Residential Phoenix", path: "/residential-window-tinting-phoenix" },
      { name: "Residential Scottsdale", path: "/residential-window-tinting-scottsdale" },
      { name: "Safety & Security Film", path: "/safety" },
      { name: "Anti-Graffiti Film", path: "/anti-graffiti" },
      { name: "Decorative Window Films", path: "/decorative-window-films" },
      { name: "Energy Saving Films", path: "/energy-saving-window-films" },
      { name: "All Solutions", path: "/solutions" },
      { name: "AI Window Film Estimator", path: "/ai-window-film-estimator" },
      { name: "Window Film FAQ", path: "/window-film-faq" },
    ],
  },
  {
    id: "phoenix",
    label: "Phoenix Locations",
    defaultOpen: false,
    links: [
      { name: "Window Tinting Phoenix", path: "/window-tinting-phoenix" },
      { name: "Commercial Film Phoenix", path: "/commercial-window-film-phoenix" },
      { name: "Residential Film Phoenix", path: "/residential-window-tinting-phoenix" },
      { name: "Solar Film Phoenix", path: "/solar-window-film-phoenix" },
      { name: "Security Film Phoenix", path: "/security-window-film-phoenix" },
      { name: "Anti-Graffiti Phoenix", path: "/anti-graffiti-film-phoenix" },
      { name: "Decorative Film Phoenix", path: "/decorative-window-film-phoenix" },
    ],
  },
  {
    id: "industries",
    label: "Industries",
    defaultOpen: false,
    links: [
      { name: "All Industries", path: "/industries" },
      { name: "Office Buildings", path: "/industries/office-buildings" },
      { name: "Retail Stores", path: "/industries/retail-stores" },
      { name: "Medical Facilities", path: "/industries/medical-facilities" },
      { name: "Schools", path: "/industries/educational-institutions" },
      { name: "Government", path: "/industries/government-buildings" },
      { name: "Restaurants", path: "/industries/restaurants" },
      { name: "Hotels", path: "/industries/hotels-hospitality" },
      { name: "Warehouses", path: "/industries/warehouses" },
    ],
  },
  {
    id: "explore",
    label: "Explore",
    defaultOpen: false,
    links: [
      { name: "Films Library", path: "/films" },
      { name: "Brand Partners", path: "/brands" },
      { name: "Service Areas", path: "/service-areas" },
      { name: "Blog", path: "/blog" },
      { name: "Gallery", path: "/gallery" },
      { name: "Book Now", path: "/book-now" },
      { name: "Store", path: "/store" },
      { name: "Window Film Cost Arizona", path: "/window-film-cost-arizona" },
    ],
  },
  {
    id: "company",
    label: "Company",
    defaultOpen: false,
    links: [
      { name: "About Us", path: "/welcome" },
      { name: "Careers", path: "/careers" },
      { name: "Contact", path: "/contact" },
      { name: "Get a Quote", path: "/get-a-quote" },
    ],
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSections, setOpenSections] = useState(
    mobileSections.filter((s) => s.defaultOpen).map((s) => s.id)
  );

  const toggleSection = (id) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const closeMenu = () => setIsOpen(false);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-bold uppercase tracking-wider transition-colors ${
      isActive
        ? "text-blue-800 border-b-2 border-blue-800"
        : "text-gray-900 hover:text-blue-800"
    }`;

  const dropdownItemClass =
    "block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600";

  return (
    <>
      <header
        className="bg-white sticky top-0 z-50 border-b border-gray-200 shadow-sm h-20"
        role="banner"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" aria-label="Arizona House of Film - Back to Home">
                <img
                  src="/AHOF Logo.png"
                  alt="Arizona House of Film Logo"
                  className="h-12 w-auto"
                  width="120"
                  height="48"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center space-x-8"
              role="navigation"
              aria-label="Primary navigation"
            >
              {/* Commercial Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("commercial")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="flex items-center gap-1">
                  <NavLink to="/commercial-window-tinting" className={navLinkClass}>
                    Commercial
                  </NavLink>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                </div>
                {openDropdown === "commercial" && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg py-2 z-50 min-w-48">
                    {commercialLinks.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={dropdownItemClass}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Residential Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("residential")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="flex items-center gap-1">
                  <NavLink to="/residential-window-tinting" className={navLinkClass}>
                    Residential
                  </NavLink>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                </div>
                {openDropdown === "residential" && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg py-2 z-50 min-w-48">
                    {residentialLinks.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={dropdownItemClass}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("solutions")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="flex items-center gap-1">
                  <NavLink to="/solutions" className={navLinkClass}>
                    Solutions
                  </NavLink>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                </div>
                {openDropdown === "solutions" && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg py-2 z-50 min-w-48">
                    {solutionsLinks.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={dropdownItemClass}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Industries Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("industries")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-gray-900 hover:text-blue-800 transition-colors"
                >
                  Industries
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {openDropdown === "industries" && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg py-2 z-50 min-w-48">
                    {industriesLinks.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={dropdownItemClass}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <NavLink to="/brands" className={navLinkClass}>
                Brands
              </NavLink>

              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>

              <NavLink to="/get-a-quote" className={navLinkClass}>
                Get a Quote
              </NavLink>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center text-sm mr-2 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                <Star fill="#B45309" className="w-3.5 h-3.5 text-amber-700" />
                <span className="ml-1.5 text-gray-900 font-bold">
                  4.6 Google Rating
                </span>
              </div>
              <Button
                asChild
                className="bg-blue-800 hover:bg-blue-900 font-bold shadow-md px-6"
              >
                <Link
                  to="/contact"
                  aria-label="Get a free window tint estimate today"
                >
                  Request Quote
                </Link>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-md"
              aria-label="Open primary navigation menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu — Full Screen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-white overflow-y-auto flex flex-col">

          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
            <div>
              <img
                src="/AHOF Logo.png"
                alt="Arizona House of Film Logo"
                className="h-8 w-auto"
                width="80"
                height="32"
              />
              <p className="text-xs text-gray-500 font-medium mt-1">
                Phoenix Window Film Specialists — ROC #314088
              </p>
            </div>
            <button
              onClick={closeMenu}
              className="p-3 text-gray-900 hover:bg-gray-100 rounded-md"
              aria-label="Close navigation menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Accordion Navigation */}
          <nav className="flex-1" role="navigation">
            {mobileSections.map((section) => {
              const isExpanded = openSections.includes(section.id);
              return (
                <div key={section.id}>
                  <button
                    type="button"
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex justify-between items-center px-6 py-4 text-sm font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-100 hover:bg-gray-50"
                  >
                    {section.label}
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  {isExpanded && (
                    <div>
                      {section.links.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className="block px-8 py-3.5 text-base text-gray-800 hover:text-blue-600 hover:bg-blue-50 border-b border-gray-50"
                          onClick={closeMenu}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Bottom Bar — Sticky */}
          <div className="flex-shrink-0 bg-white border-t border-gray-200 px-6 py-4 space-y-3">
            <a
              href="tel:4807881591"
              className="block w-full text-center bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 rounded-lg transition-colors"
              onClick={closeMenu}
            >
              (480) 788-1591
            </a>
            <Link
              to="/contact"
              className="block w-full text-center border-2 border-blue-800 text-blue-800 font-bold py-4 rounded-lg hover:bg-blue-50 transition-colors"
              onClick={closeMenu}
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
