import React from 'react';
import { Link } from 'react-router-dom';

const Collections = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Srivatsala Collections
          </h2>
          <p className="text-lg text-gray-600">Explore our newly launched collection</p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Large Left Card */}
          <Link
            to="/shop"
            className="group relative h-[600px] overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <img
              src="https://images.unsplash.com/photo-1708672920549-c67fc91d897a?w=800"
              alt="Sub 50k Collection"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-800/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-4xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Sub 50k</h3>
              <p className="text-lg opacity-90">Affordable luxury for everyone</p>
            </div>
          </Link>

          {/* Right Side - Two Stacked Cards */}
          <div className="flex flex-col gap-6">
            {/* Top Card */}
            <Link
              to="/shop/earrings"
              className="group relative h-[290px] overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <img
                src="https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?w=800"
                alt="Stunning Every Ear"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 via-amber-800/50 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Stunning<br />Every Ear
                  </h3>
                </div>
              </div>
            </Link>

            {/* Bottom Card */}
            <Link
              to="/shop"
              className="group relative h-[290px] overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <img
                src="https://images.unsplash.com/photo-1608508644127-ba99d7732fee?w=800"
                alt="18Kt Jewellery"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-800/50 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h3 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>18Kt Jewellery</h3>
                  <p className="text-sm opacity-90 mt-2">Premium gold collection</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;