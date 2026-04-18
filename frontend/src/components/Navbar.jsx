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
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-amber-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>
            <Link to="/store-location" className="flex items-center gap-2 hover:text-amber-200 transition-colors">
              <MapPin className="w-4 h-4" />
              <span>Vizag</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <span className="font-medium">Free Home Delivery in Vizag | 15 Years of Trust</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-amber-800">Santosh Jewellers</h1>
              <p className="text-xs text-gray-600">Traditional Andhra Designs</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-amber-700 ${
                location.pathname === '/' ? 'text-amber-700' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`font-medium transition-colors hover:text-amber-700 ${
                location.pathname.includes('/shop') ? 'text-amber-700' : 'text-gray-700'
              }`}
            >
              Shop All
            </Link>
            <Link
              to="/store-location"
              className={`font-medium transition-colors hover:text-amber-700 ${
                location.pathname === '/store-location' ? 'text-amber-700' : 'text-gray-700'
              }`}
            >
              Visit Store
            </Link>
          </div>

          {/* Search Button */}
          <div className="hidden lg:block">
            <button className="px-6 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-all flex items-center gap-2">
              <Search className="w-4 h-4" />
              <span>Search Jewelry</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-amber-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Categories Bar */}
        <div className="hidden lg:flex items-center justify-center gap-6 pb-4 border-t border-gray-100 pt-4">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className="text-sm text-gray-600 hover:text-amber-700 transition-colors font-medium"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-amber-700 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-gray-700 hover:text-amber-700 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop All
              </Link>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm font-semibold text-gray-700 mb-3">Categories</p>
                {categories.map((category) => (
                  <Link
                    key={category.path}
                    to={category.path}
                    className="block py-2 text-sm text-gray-600 hover:text-amber-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              <Link
                to="/store-location"
                className="text-gray-700 hover:text-amber-700 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Visit Store
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
