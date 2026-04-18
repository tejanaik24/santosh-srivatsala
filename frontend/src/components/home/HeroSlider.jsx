import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      bgImage: 'https://images.unsplash.com/photo-1769706039344-7ad8d7ec2442?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHw0fHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGdvbGQlMjBqZXdlbHJ5fGVufDB8fHx8MTc3NjQ5NDEwOHww&ixlib=rb-4.1.0&q=85',
      productImage: 'https://images.unsplash.com/photo-1665703156759-8b8f66ff0397?w=500',
      badge: 'AKSHAYA TRITIYA SPECIAL',
      title: 'Hues',
      subtitle: 'natural gemstones, vibrant colours',
      offers: [
        { label: '₹201', desc: 'per gram on gold jewellery' },
        { label: '20%', desc: 'on making charges of gold jewellery' },
        { label: 'FESTIVAL DISCOUNT', desc: 'save up to 20% on select items' }
      ],
      offerValidity: 'Offer period: 10th - 20th April, 2026',
      goldRate: 'Gold Rate Protection',
      goldDesc: 'Book in advance and stay protected against increasing rates and gold price'
    },
    {
      bgImage: 'https://images.unsplash.com/photo-1767249627720-5c6128c6b005?w=1200',
      productImage: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=500',
      badge: 'SRIVATSALA COLLECTIONS',
      title: 'Timeless',
      subtitle: 'Traditional Andhra Gold Jewelry',
      offers: [
        { label: 'FLAT 20%', desc: 'Off on making charges' },
        { label: 'FREE', desc: 'Gold coin on ₹1L+' },
        { label: '100%', desc: 'Exchange value' }
      ],
      offerValidity: 'Limited time offer',
      goldRate: '15 Years of Trust',
      goldDesc: 'Serving Vizag families with authentic Andhra designs'
    },
    {
      bgImage: 'https://images.unsplash.com/photo-1767249622607-b459764215ff?w=1200',
      productImage: 'https://images.unsplash.com/photo-1763256614647-14abbc578252?w=500',
      badge: 'BRIDAL COLLECTION',
      title: 'Wedding',
      subtitle: 'Exquisite bridal jewelry sets',
      offers: [
        { label: 'SPECIAL', desc: 'Bridal packages' },
        { label: 'CUSTOM', desc: 'Design available' },
        { label: 'FREE', desc: 'Home delivery' }
      ],
      offerValidity: 'Book your appointment today',
      goldRate: 'Premium Quality',
      goldDesc: 'BIS hallmarked 22K gold with lifetime warranty'
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
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-blue-50">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background with Model */}
          <div className="absolute inset-0">
            <img
              src={slide.bgImage}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/30"></div>
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-4">
            <div className="h-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              {/* Left Side - Text */}
              <div className="text-left space-y-4 animate-fade-in">
                <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                  <span className="text-white text-sm font-semibold tracking-wider">{slide.badge}</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {slide.title}
                </h1>
                <p className="text-2xl md:text-3xl text-white/90 italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {slide.subtitle}
                </p>
              </div>

              {/* Right Side - Product Card */}
              <div className="relative">
                <div className="bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50">
                  {/* Product Image */}
                  <div className="mb-6">
                    <img
                      src={slide.productImage}
                      alt="Featured Product"
                      className="w-full h-64 object-contain"
                    />
                  </div>

                  {/* Offers */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {slide.offers.map((offer, idx) => (
                      <div key={idx} className="text-center p-3 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                        <p className="text-xl font-bold text-amber-800">{offer.label}</p>
                        <p className="text-xs text-amber-600 mt-1">{offer.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Validity */}
                  <div className="text-center mb-4">
                    <p className="text-sm font-semibold text-gray-700">{slide.offerValidity}</p>
                  </div>

                  {/* Gold Rate */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                    <p className="text-sm font-bold text-green-800 mb-1">{slide.goldRate}</p>
                    <p className="text-xs text-green-700">{slide.goldDesc}</p>
                  </div>

                  {/* CTA */}
                  <button className="w-full mt-6 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-full hover:from-amber-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg">
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
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all group z-20"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all group z-20"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;