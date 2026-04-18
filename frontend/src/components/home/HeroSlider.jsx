import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      modelImage: 'https://images.unsplash.com/photo-1717835806988-3739f9e55926?w=1200',
      productImage: 'https://images.unsplash.com/photo-1758995115857-2de1eb6283d0?w=600',
      badge: 'SRIVATSALA COLLECTIONS',
      title: 'Hues',
      subtitle: 'natural gemstones, vibrant colours',
      bgGradient: 'from-pink-100 via-purple-50 to-blue-100'
    },
    {
      modelImage: 'https://images.unsplash.com/photo-1688382654723-a7366006519b?w=1200',
      productImage: 'https://images.unsplash.com/photo-1758995115518-26f90aa61b97?w=600',
      badge: 'BRIDAL COLLECTION',
      title: 'Divine',
      subtitle: 'Traditional Andhra Jewellery',
      bgGradient: 'from-emerald-100 via-teal-50 to-cyan-100'
    },
    {
      modelImage: 'https://images.unsplash.com/photo-1763017707718-3bee341d1e65?w=1200',
      productImage: 'https://images.unsplash.com/photo-1758995116383-f51775896add?w=600',
      badge: 'AKSHAYA TRITIYA SPECIAL',
      title: 'Heritage',
      subtitle: 'Exquisite temple gold designs',
      bgGradient: 'from-amber-100 via-yellow-50 to-orange-100'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[700px] md:h-[800px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`}></div>

          {/* Decorative Shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-white/40 to-transparent rounded-full blur-3xl"></div>

          <div className="relative h-full container mx-auto px-4">
            <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left - Full Model Image */}
              <div className="relative h-full flex items-center justify-center">
                <div className="relative w-full h-[600px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={slide.modelImage}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Badge on Model */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <div className="bg-white/95 backdrop-blur-md px-8 py-3 rounded-full shadow-xl border-2 border-amber-200">
                      <span className="text-amber-800 font-bold text-sm tracking-wider">{slide.badge}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Offers Card */}
              <div className="relative">
                <div className="bg-white/98 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl">
                  {/* Brand */}
                  <div className="text-center mb-6">
                    <h2 className="text-5xl md:text-6xl font-bold" style={{ 
                      fontFamily: "'Playfair Display', serif",
                      background: 'linear-gradient(135deg, #B76E79 0%, #D4AF37 50%, #B76E79 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      SRIVATSALA
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>
                      {slide.title}
                    </h3>
                    <p className="text-lg text-gray-600 italic mt-1">{slide.subtitle}</p>
                  </div>

                  {/* Product Image */}
                  <div className="mb-8 relative">
                    <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6 shadow-lg">
                      <img
                        src={slide.productImage}
                        alt="Product"
                        className="w-full h-48 object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>

                  {/* BIG 20% OFFER - MOST PROMINENT */}
                  <div className="mb-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform">
                    <div className="text-center">
                      <p className="text-7xl md:text-8xl font-black text-white drop-shadow-lg">20%</p>
                      <p className="text-2xl font-bold text-white mt-2">OFF</p>
                      <p className="text-lg text-white/90">on making charges of gold jewellery</p>
                    </div>
                  </div>

                  {/* Other Offers */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border-2 border-green-200">
                      <p className="text-3xl font-bold text-green-700">₹201</p>
                      <p className="text-xs text-green-600">per gram on gold jewellery</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200">
                      <p className="text-lg font-bold text-purple-700">FESTIVAL</p>
                      <p className="text-xs text-purple-600">save up to 20%</p>
                    </div>
                  </div>

                  {/* Gold Rate */}
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-4 border-2 border-amber-200 mb-6">
                    <p className="text-sm font-bold text-amber-800">Gold Rate Protection</p>
                    <p className="text-xs text-amber-700">15 Years of Trust | Free Home Delivery in Vizag</p>
                  </div>

                  {/* CTA */}
                  <button className="w-full px-8 py-5 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-full text-xl hover:from-amber-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-xl">
                    Explore now
                  </button>

                  <p className="text-center text-sm text-gray-600 mt-4">Offer period: 10th - 20th April, 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-xl z-20"
      >
        <ChevronLeft className="w-7 h-7 text-gray-800" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-xl z-20"
      >
        <ChevronRight className="w-7 h-7 text-gray-800" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide ? 'w-12 bg-amber-600' : 'w-3 bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;