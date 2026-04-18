import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      modelImage: 'https://images.unsplash.com/photo-1692992193981-d3d92fabd9cb?w=800',
      flowerBg: 'https://images.unsplash.com/photo-1622196312542-9532bda46864?w=1600',
      productImage: 'https://images.unsplash.com/photo-1758995115857-2de1eb6283d0?w=600',
      collection: 'Hues',
      subtitle: 'natural gemstones, vibrant colours'
    },
    {
      modelImage: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800',
      flowerBg: 'https://images.unsplash.com/photo-1637924925587-2551d0661c52?w=1600',
      productImage: 'https://images.unsplash.com/photo-1758995115518-26f90aa61b97?w=600',
      collection: 'Divine',
      subtitle: 'traditional Andhra jewellery'
    },
    {
      modelImage: 'https://images.unsplash.com/photo-1742287724816-4a8a1cc7ad5c?w=800',
      flowerBg: 'https://images.unsplash.com/photo-1600100397506-72b56634f9ca?w=1600',
      productImage: 'https://images.unsplash.com/photo-1758995116383-f51775896add?w=600',
      collection: 'Heritage',
      subtitle: 'temple gold designs'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[750px] md:h-[850px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Real Flower Background */}
          <div className="absolute inset-0">
            <img
              src={slide.flowerBg}
              alt="Flowers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-white/30"></div>
          </div>

          <div className="relative h-full container mx-auto px-4">
            <div className="h-full flex items-center">
              {/* Left - Model (50%) */}
              <div className="w-full md:w-1/2 h-full flex items-center">
                <div className="relative w-full h-[650px] md:h-[750px]">
                  <img
                    src={slide.modelImage}
                    alt="Model"
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>
              </div>

              {/* Center - Hanging Product (20%) */}
              <div className="hidden md:flex w-1/5 h-full items-center justify-center">
                <div className="relative">
                  <img
                    src={slide.productImage}
                    alt="Jewelry"
                    className="w-full max-w-[250px] h-auto object-contain drop-shadow-2xl"
                    style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
                  />
                </div>
              </div>

              {/* Right - Brand & Offers (30%) */}
              <div className="hidden md:flex w-3/10 h-full items-center justify-end pr-8">
                <div className="text-right">
                  {/* BIG BRAND NAME */}
                  <h1 className="text-8xl font-bold mb-4" style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#B76E79',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                    letterSpacing: '0.05em'
                  }}>
                    SRIVATSALA
                  </h1>
                  
                  <h2 className="text-5xl font-bold mb-3" style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: 'italic',
                    color: '#333'
                  }}>
                    {slide.collection}
                  </h2>
                  
                  <p className="text-lg italic mb-8" style={{ color: '#666' }}>
                    {slide.subtitle}
                  </p>

                  {/* Elegant Circular Offer Badges */}
                  <div className="flex flex-col gap-4 items-end mb-8">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 p-1 shadow-xl">
                      <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center">
                        <p className="text-3xl font-bold" style={{ color: '#059669' }}>₹201</p>
                        <p className="text-[10px] text-center px-2" style={{ color: '#065f46' }}>per gram<br/>on gold jewellery</p>
                      </div>
                    </div>
                    
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-600 to-red-600 p-1 shadow-xl">
                      <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center">
                        <p className="text-5xl font-black" style={{ color: '#dc2626' }}>20%</p>
                        <p className="text-xs font-bold" style={{ color: '#991b1b' }}>OFF</p>
                        <p className="text-[10px] text-center px-2" style={{ color: '#7f1d1d' }}>on making charges of gold jewellery</p>
                      </div>
                    </div>
                    
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 p-1 shadow-xl">
                      <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center">
                        <p className="text-sm font-bold text-center" style={{ color: '#9333ea' }}>FESTIVAL<br/>DISCOUNT</p>
                        <p className="text-[10px] text-center px-2 mt-1" style={{ color: '#7e22ce' }}>save up to 20%<br/>on select items</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm mb-6" style={{ color: '#666' }}>Offer period: 10th - 20th April, 2026</p>
                  
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-3 mb-6">
                    <p className="text-xs font-bold" style={{ color: '#065f46' }}>Gold Rate Protection</p>
                    <p className="text-[10px]" style={{ color: '#047857' }}>Book in advance and stay protected</p>
                  </div>

                  <button className="px-10 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-full text-lg hover:from-amber-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-xl">
                    Explore now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden absolute bottom-20 left-0 right-0 px-4">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl">
              <h1 className="text-5xl font-bold text-center mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#B76E79' }}>
                SRIVATSALA
              </h1>
              <h2 className="text-3xl font-bold text-center italic mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {slide.collection}
              </h2>
              <div className="flex justify-center gap-3 mb-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-600 to-red-600 p-1">
                  <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center">
                    <p className="text-4xl font-black text-red-600">20%</p>
                    <p className="text-xs font-bold text-red-800">OFF</p>
                  </div>
                </div>
              </div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-full">
                Explore now
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-xl z-20"
      >
        <ChevronLeft className="w-7 h-7 text-gray-800" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-xl z-20"
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