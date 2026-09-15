import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="font-bold text-xl text-dark">Zaika Indian</span>
          </Link>

          {/* Menu Button (Mobile) */}
          <button
            id="mobile-menu-button"
            className="md:hidden flex items-center p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="#hero"
              className="nav-link text-gray-600 hover:text-primary transition-colors font-medium px-3 py-2 rounded-md"
              data-scroll
            >
              Home
            </Link>
            <Link
              to="#about"
              className="nav-link text-gray-600 hover:text-primary transition-colors font-medium px-3 py-2 rounded-md"
              data-scroll
            >
              About
            </Link>
            <Link
              to="#menu"
              className="nav-link text-gray-600 hover:text-primary transition-colors font-medium px-3 py-2 rounded-md"
              data-scroll
            >
              Menu
            </Link>
            <Link
              to="#chefs"
              className="nav-link text-gray-600 hover:text-primary transition-colors font-medium px-3 py-2 rounded-md"
              data-scroll
            >
              Chefs
            </Link>
            <Link
              to="#testimonials"
              className="nav-link text-gray-600 hover:text-primary transition-colors font-medium px-3 py-2 rounded-md"
              data-scroll
            >
              Testimonials
            </Link>
            <Link
              to="#booking"
              className="nav-link text-gray-600 hover:text-primary transition-colors font-medium px-3 py-2 rounded-md"
              data-scroll
            >
              Booking
            </Link>
          </div>

          {/* CTA Button (Visible on Desktop) */}
          <div className="hidden md:flex">
            <Link
              to="#booking"
              className="btn-primary px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              Book Table
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        id="mobile-menu"
        className="md:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="#hero"
            className="block px-3 py-2 rounded-md text-base font-medium nav-link text-gray-600 hover:text-primary"
            data-scroll
          >
            Home
          </Link>
          <Link
            to="#about"
            className="block px-3 py-2 rounded-md text-base font-medium nav-link text-gray-600 hover:text-primary"
            data-scroll
          >
            About
          </Link>
          <Link
            to="#menu"
            className="block px-3 py-2 rounded-md text-base font-medium nav-link text-gray-600 hover:text-primary"
            data-scroll
          >
            Menu
          </Link>
          <Link
            to="#chefs"
            className="block px-3 py-2 rounded-md text-base font-medium nav-link text-gray-600 hover:text-primary"
            data-scroll
          >
            Chefs
          </Link>
          <Link
            to="#testimonials"
            className="block px-3 py-2 rounded-md text-base font-medium nav-link text-gray-600 hover:text-primary"
            data-scroll
          >
            Testimonials
          </Link>
          <Link
            to="#booking"
            className="block px-3 py-2 rounded-md text-base font-medium nav-link text-gray-600 hover:text-primary"
            data-scroll
          >
            Booking
          </Link>
          
          <div className="pt-4 pb-5">
            <Link
              to="#booking"
              className="w-full btn-primary px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              Book Table
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;