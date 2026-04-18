import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1769706039344-7ad8d7ec2442?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHw0fHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGdvbGQlMjBqZXdlbHJ5fGVufDB8fHx8MTc3NjQ5NDEwOHww&ixlib=rb-4.1.0&q=85',
      title: 'Timeless Elegance',
      subtitle: 'Discover Andhra Traditional Gold Jewelry',
      description: 'Exquisite designs crafted with passion',
    },
    {
      image: 'https://images.unsplash.com/photo-1758995115857-2de1eb6283d0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGdvbGQlMjBqZXdlbHJ5fGVufDB8fHx8MTc3NjQ5NDEwOHww&ixlib=rb-4.1.0&q=85',
      title: 'Bridal Collection',
      subtitle: 'Make Your Special Day Memorable',
      description: 'Premium wedding jewelry sets',
    },
    {
      image: 'https://images.unsplash.com/photo-1760786933663-327c858d5434?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwzfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGdvbGQlMjBqZXdlbHJ5fGVufDB8fHx8MTc3NjQ5NDEwOHww&ixlib=rb-4.1.0&q=85',
      title: 'Heritage Designs',
      subtitle: 'Traditional Craftsmanship',
      description: '15 Years of Excellence',
    },
    {
      image: 'https://images.unsplash.com/photo-1758995115518-26f90aa61b97?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MTN8MHwxfHNlYXJjaHwyfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGdvbGQlMjBqZXdlbHJ5fGVufDB8fHx8MTc3NjQ5NDEwOHww&ixlib=rb-4.1.0&q=85',
      title: 'Divine Beauty',
      subtitle: 'Celebrate Every Occasion',
      description: 'Stunning temple jewelry designs',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div className="max-w-2xl text-white space-y-6 animate-fade-in">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-amber-400" />
                <span className="text-amber-400 font-medium uppercase tracking-wider text-sm">
                  {slide.subtitle}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                {slide.description}
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="/shop"
                  className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-full hover:from-amber-700 hover:to-amber-800 transition-all transform hover:scale-105 shadow-lg"
                >
                  Explore Collection
                </a>
                <a
                  href="/store-location"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/30"
                >
                  Visit Store
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all group z-10"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all group z-10"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-amber-500' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
