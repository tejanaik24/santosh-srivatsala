import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=Hi, I want to inquire about jewelry', '_blank');
  };

  return (
    <footer className="text-white" style={{ background: 'linear-gradient(135deg, #1a2332 0%, #2d3e5f 100%)' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-6">
              <img
                src="https://customer-assets.emergentagent.com/job_tanishq-preview/artifacts/36qbwv5f_Screenshot%20from%202026-04-18%2013-22-59.png"
                alt="Srivatsala"
                className="w-40 h-20 object-contain"
              />
            </div>
            <p className="text-amber-100 text-sm leading-relaxed mb-4">
              Trusted for 15 years in Vizag, we bring you the finest Andhra traditional gold & silver jewelry with authentic designs and exceptional craftsmanship.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-amber-600/20 rounded-full flex items-center justify-center hover:bg-amber-600/40 transition-colors">
                <Facebook className="w-5 h-5 text-amber-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-amber-600/20 rounded-full flex items-center justify-center hover:bg-amber-600/40 transition-colors">
                <Instagram className="w-5 h-5 text-amber-300" />
              </a>
              <button onClick={handleWhatsApp} className="w-10 h-10 bg-amber-600/20 rounded-full flex items-center justify-center hover:bg-amber-600/40 transition-colors">
                <MessageCircle className="w-5 h-5 text-amber-300" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-amber-100 hover:text-amber-300 transition-colors text-sm">Shop All Jewelry</Link></li>
              <li><Link to="/shop/necklaces" className="text-amber-100 hover:text-amber-300 transition-colors text-sm">Gold Necklaces</Link></li>
              <li><Link to="/shop/earrings" className="text-amber-100 hover:text-amber-300 transition-colors text-sm">Earrings</Link></li>
              <li><Link to="/shop/bangles" className="text-amber-100 hover:text-amber-300 transition-colors text-sm">Bangles</Link></li>
              <li><Link to="/store-location" className="text-amber-100 hover:text-amber-300 transition-colors text-sm">Visit Our Store</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-300">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/shop/vaddanam" className="text-amber-100 hover:text-amber-300 transition-colors text-sm">Vaddanam (Waist Belt)</Link></li>
              <li><Link to="/shop/mangalsutra" className="text-amber-100 hover:text-amber-300 transition-colors text-sm">Mangalsutra</Link></li>
              <li><Link to="/shop/rings" className="text-amber-100 hover:text-amber-300 transition-colors text-sm">Rings</Link></li>
              <li><a href="#akshaya" className="text-amber-100 hover:text-amber-300 transition-colors text-sm">Akshaya Tritiya Offers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-300">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-amber-100 text-sm">
                  Opposite Gayathri Clinic, Revallapalem Road<br />
                  Madhurawada, Visakhapatnam - 530048<br />
                  Andhra Pradesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-amber-100 hover:text-amber-300 transition-colors text-sm">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href="mailto:contact@srivatsalajewellers.com" className="text-amber-100 hover:text-amber-300 transition-colors text-sm">contact@srivatsalajewellers.com</a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-amber-600/20 rounded-lg border border-amber-600/30">
              <p className="text-amber-300 text-xs font-semibold mb-1">Free Home Delivery</p>
              <p className="text-amber-100 text-xs">Available across Vizag</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-800/30 mt-8 pt-6 text-center">
          <p className="text-amber-200 text-sm">
            © 2025 Srivatsala Jewellers - Silver House. All rights reserved. | 15 Years of Trust & Quality
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;