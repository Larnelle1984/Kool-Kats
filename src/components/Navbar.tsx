import React, { useEffect, useState } from 'react';
import { navLinks } from '../data/navLinks';
import { Menu, X, ArrowUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  const isActive = (path: string | undefined) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollPercentage = (scrollY / document.body.scrollHeight) * 100;

      setShowNavbar(scrollPercentage < 10);
      setShowScrollTop(scrollPercentage >= 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-500 ${
          showNavbar ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 flex justify-between items-center bg-transparent">
          {/* Logo */}
          <Link to="/" className="md:ml-11">
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="h-28 md:h-32 object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex md:mr-11 gap-8 text-white">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path || '#'}
                className={`text-lg md:text-2xl relative group font-semibold transition-colors duration-300 ${
                  isActive(link.path) ? 'text-primary' : 'hover:text-primary'
                }`}
                onClick={(e) => {
                  if (link.name === 'Contact Us') {
                    e.preventDefault();
                    const el = document.getElementById('contact-form');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-300 origin-left"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden z-50 px-4">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="text-primary w-7 h-7" />
              ) : (
                <Menu className="text-primary w-7 h-7" />
              )}
            </button>
          </div>

          {/* Mobile Nav */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-black h-[90vh] text-white flex flex-col px-6 pt-24 space-y-8 z-40 animate-slideIn">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path || '#'}
                  className={`text-xl font-medium relative inline-block group ${
                    isActive(link.path)
                      ? 'text-primary'
                      : 'hover:text-primary'
                  }`}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    if (link.name === 'Contact Us') {
                      e.preventDefault();
                      const el = document.getElementById('contact-form');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-300 origin-left"></span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary hover:bg-opacity-90 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default Navbar;
