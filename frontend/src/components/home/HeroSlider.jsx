import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      bgImage: 'https://images.unsplash.com/photo-1769500809146-953b80aaa98e?w=1200',
      badge: 'SRIVATSALA COLLECTIONS',
      productImage: 'https://images.unsplash.com/photo-1758995115857-2de1eb6283d0?w=600',
      title: 'Hues',
      subtitle: 'natural gemstones, vibrant colours',
      bgColor: 'from-pink-200 via-purple-100 to-blue-200',
      flowers: true
    },
    {
      bgImage: 'https://images.unsplash.com/photo-1654764746221-7bc58ef4dbad?w=1200',
      badge: 'BRIDAL COLLECTION',
      productImage: 'https://images.unsplash.com/photo-1758995115518-26f90aa61b97?w=600',
      title: 'Divine',
      subtitle: 'Traditional Andhra Bridal Jewellery',
      bgColor: 'from-red-200 via-orange-100 to-yellow-200',
      flowers: true
    },
    {
      bgImage: 'https://images.unsplash.com/photo-1760461804494-c39017a52e6b?w=1200',
      badge: 'AKSHAYA TRITIYA SPECIAL',
      productImage: 'https://images.unsplash.com/photo-1758995116383-f51775896add?w=600',
      title: 'Heritage',
      subtitle: 'Exquisite temple gold designs',
      bgColor: 'from-green-200 via-teal-100 to-cyan-200',
      flowers: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[650px] md:h-[750px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
          }`}
        >
          {/* Vibrant Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor}`}></div>
          
          {/* Animated Flower Overlays */}
          {slide.flowers && (
            <>
              <div className="absolute top-0 left-0 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
              <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-yellow-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>
            </>
          )}

          {/* Content Grid */}
          <div className="relative h-full container mx-auto px-4">
            <div className="h-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              {/* Left Side - Model Image */}
              <div className="relative h-full flex items-center animate-fade-in">
                <div className="relative w-full h-[500px] md:h-[650px]">
                  {/* A TATA PRODUCT Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border-2 border-amber-200">
                      <p className="text-xs font-bold text-gray-800 tracking-wider">A TATA PRODUCT</p>
                    </div>
                  </div>

                  {/* Model Image with Premium Border */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                    <img
                      src={slide.bgImage}
                      alt={slide.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>

                  {/* Brand Badge */}
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="bg-white/95 backdrop-blur-md px-6 py-3 rounded-full border-2 border-amber-300 shadow-xl">
                      <span className="text-amber-800 font-bold text-sm tracking-wider">{slide.badge}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Product Showcase */}
              <div className="relative animate-fade-in delay-300">
                <div className="bg-gradient-to-br from-white/98 to-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-white/60">
                  {/* Brand Name */}
                  <div className="text-center mb-6">
                    <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-rose-500 to-amber-600" style={{ fontFamily: "'Playfair Display', serif" }}>
                      SRIVATSALA
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>
                      {slide.title}
                    </h3>
                    <p className="text-lg text-gray-600 mt-2" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>
                      {slide.subtitle}
                    </p>
                  </div>

                  {/* Product Image */}
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl transform rotate-3"></div>
                    <div className="relative bg-gradient-to-br from-teal-200 to-cyan-200 rounded-2xl p-6">
                      <img
                        src={slide.productImage}
                        alt="Featured Product"
                        className="w-full h-56 object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>

                  {/* Offers in Elegant Circles */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="relative">
                      <div className="aspect-square rounded-full bg-gradient-to-br from-green-600 to-emerald-600 p-1">
                        <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center">
                          <p className="text-2xl font-bold text-emerald-700">₹201</p>
                          <p className="text-xs text-emerald-600 text-center px-2">per gram on gold jewellery</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="aspect-square rounded-full bg-gradient-to-br from-amber-600 to-orange-600 p-1">
                        <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center">
                          <p className="text-3xl font-bold text-amber-700">20%</p>
                          <p className="text-xs text-amber-600 text-center px-2">OFF</p>
                          <p className="text-xs text-amber-600 text-center px-2">on making charges of gold jewellery</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="aspect-square rounded-full bg-gradient-to-br from-purple-600 to-pink-600 p-1">
                        <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center">
                          <p className="text-sm font-bold text-purple-700 text-center">FESTIVAL DISCOUNT</p>
                          <p className="text-xs text-purple-600 text-center px-2 mt-1">save up to 20% on select items</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Validity */}
                  <div className="text-center mb-4">
                    <p className="text-sm font-semibold text-gray-700">Offer period: 10th - 20th April, 2026</p>
                  </div>

                  {/* Gold Rate Protection */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border-2 border-green-200 mb-6">
                    <p className="text-sm font-bold text-green-800 mb-1">Gold Rate Protection</p>
                    <p className="text-xs text-green-700">Book in advance and stay protected against increasing rates and gold price</p>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-full hover:from-amber-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-xl text-lg">
                    Explore now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all group z-20 shadow-xl"
      >
        <ChevronLeft className="w-7 h-7 text-gray-800 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all group z-20 shadow-xl"
      >
        <ChevronRight className="w-7 h-7 text-gray-800 group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all shadow-lg ${
              index === currentSlide 
                ? 'w-12 bg-gradient-to-r from-amber-600 to-rose-500' 
                : 'w-3 bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;