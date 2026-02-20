import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Menu from "lucide-react/dist/esm/icons/menu";
import X from "lucide-react/dist/esm/icons/x";
import Star from "lucide-react/dist/esm/icons/star";

import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
                src="https://horizons-cdn.hostinger.com/500f9a0e-19d5-4ed7-98ea-cc353ce878bb/untitled-design-4-IrbHI.png"
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
          >
            {[
              { name: "Commercial", path: "/commercial-window-tinting" },
              { name: "Residential", path: "/residential-window-tinting" },
              { name: "Solutions", path: "/solutions" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? "text-blue-800 border-b-2 border-blue-800"
                      : "text-gray-900 hover:text-blue-800"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-sm mr-2 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
              <Star
                fill="#B45309"
                className="w-3.5 h-3.5 text-amber-700"
              />
              <span className="ml-1.5 text-gray-900 font-bold">
                4.4 Google Rating
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
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-900 hover:bg-gray-100 rounded-md"
            aria-label="Open primary navigation menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 🔥 Mobile Menu (Absolute — Does NOT Push Layout) */}
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 lg:hidden bg-white border-t border-gray-200 shadow-xl z-[60]">
          <nav className="px-4 py-6 space-y-4">
            <Link
              to="/commercial-window-tinting"
              className="block text-lg font-bold text-gray-900 border-b border-gray-50 pb-2"
              onClick={() => setIsOpen(false)}
            >
              Commercial
            </Link>

            <Link
              to="/residential-window-tinting"
              className="block text-lg font-bold text-gray-900 border-b border-gray-50 pb-2"
              onClick={() => setIsOpen(false)}
            >
              Residential
            </Link>

            <Link
              to="/contact"
              className="block text-lg font-bold text-blue-800"
              onClick={() => setIsOpen(false)}
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;