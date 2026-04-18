import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';

const LocationBanner = () => {
  const handleGetDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=17.7833,83.3833`,
      '_blank'
    );
  };

  return (
    <section className="py-16 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Visit Our Store
            </h2>
            <p className="text-xl text-amber-100">Experience luxury jewelry in person</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border-2 border-white/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Location</h3>
                  <p className="text-amber-100 text-sm leading-relaxed">
                    Opposite Gayathri Clinic<br />
                    Revallapalem Road, Madhurawada<br />
                    Visakhapatnam - 530048<br />
                    Andhra Pradesh
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Contact</h3>
                  <a href="tel:+919876543210" className="text-amber-100 hover:text-white transition-colors text-lg font-semibold block">
                    +91 98765 43210
                  </a>
                  <p className="text-amber-100 text-sm mt-1">Call us anytime</p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Timings</h3>
                  <p className="text-amber-100 text-sm leading-relaxed">
                    Mon-Sat: 10 AM - 8 PM<br />
                    Sunday: 10 AM - 6 PM
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleGetDirections}
                className="px-8 py-4 bg-white text-amber-800 font-bold rounded-full hover:bg-amber-50 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </button>
              <Link
                to="/store-location"
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/30 transition-all border-2 border-white/40 flex items-center justify-center gap-3"
              >
                <MapPin className="w-5 h-5" />
                View on Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationBanner;
