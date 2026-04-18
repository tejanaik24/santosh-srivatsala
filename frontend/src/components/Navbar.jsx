import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, MapPin, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: 'Gold Necklaces', path: '/shop/necklaces' },
    { name: 'Earrings', path: '/shop/earrings' },
    { name: 'Bangles', path: '/shop/bangles' },
    { name: 'Vaddanam', path: '/shop/vaddanam' },
    { name: 'Mangalsutra', path: '/shop/mangalsutra' },
    { name: 'Rings', path: '/shop/rings' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-2xl' : 'shadow-lg'
      }`}
      style={{ background: 'linear-gradient(135deg, #1a2332 0%, #2d3e5f 100%)' }}
    >
      {/* Top Bar - Gold */}
      <div className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 text-white py-2.5">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-amber-200 transition-colors font-medium">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>
            <Link to="/store-location" className="flex items-center gap-2 hover:text-amber-200 transition-colors font-medium">
              <MapPin className="w-4 h-4" />
              <span>Madhurawada, Vizag</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <span className="font-semibold">Free Home Delivery in Vizag | 15 Years of Trust</span>
          </div>
        </div>
      </div>

      {/* Main Navigation - Navy Blue */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo - Seamlessly Blended */}
          <Link to="/" className="flex items-center group">
            <div className="w-48 h-24 transition-transform group-hover:scale-105">
              <img
                src="https://customer-assets.emergentagent.com/job_tanishq-preview/artifacts/36qbwv5f_Screenshot%20from%202026-04-18%2013-22-59.png"
                alt="Srivatsala Silver House"
                className="w-full h-full object-contain"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(183, 110, 121, 0.3))' }}
              />
            </div>
          </Link>

          {/* Desktop Menu - Gold Text */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`font-semibold text-base transition-colors ${
                location.pathname === '/' ? 'text-amber-400' : 'text-amber-100 hover:text-amber-300'
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`font-semibold text-base transition-colors ${
                location.pathname.includes('/shop') ? 'text-amber-400' : 'text-amber-100 hover:text-amber-300'
              }`}
            >
              Shop All
            </Link>
            <Link
              to="/store-location"
              className={`font-semibold text-base transition-colors ${
                location.pathname === '/store-location' ? 'text-amber-400' : 'text-amber-100 hover:text-amber-300'
              }`}
            >
              Visit Store
            </Link>
          </div>

          {/* Search Button - Gold */}
          <div className="hidden lg:block">
            <button className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-full hover:from-amber-600 hover:to-yellow-700 transition-all flex items-center gap-2 font-semibold shadow-lg">
              <Search className="w-4 h-4" />
              <span>Search Jewelry</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-amber-300 hover:text-amber-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Categories Bar - Navy with Gold Text */}
        <div className="hidden lg:flex items-center justify-center gap-8 pb-4 border-t border-amber-800/30 pt-4">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className="text-sm text-amber-200 hover:text-amber-400 transition-colors font-medium"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden" style={{ background: 'linear-gradient(135deg, #1a2332 0%, #2d3e5f 100%)' }}>
          <div className="container mx-auto px-4 py-4 border-t border-amber-800/30">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-amber-100 hover:text-amber-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/shop" className="text-amber-100 hover:text-amber-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Shop All</Link>
              <div className="border-t border-amber-800/30 pt-4">
                <p className="text-sm font-semibold text-amber-300 mb-3">Categories</p>
                {categories.map((category) => (
                  <Link key={category.path} to={category.path} className="block py-2 text-sm text-amber-200 hover:text-amber-400" onClick={() => setIsMobileMenuOpen(false)}>
                    {category.name}
                  </Link>
                ))}
              </div>
              <Link to="/store-location" className="text-amber-100 hover:text-amber-300 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Visit Store</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;