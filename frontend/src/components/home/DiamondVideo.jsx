import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

const DiamondVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 md:py-20 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Styling 101 With Diamonds
          </h2>
          <p className="text-xl text-gray-300">
            Trendsetting diamond jewellery suited for every occasion
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Video Thumbnail */}
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1762337383928-ed5e352977d2?w=1200"
              alt="Diamond Jewelry"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Play Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all transform hover:scale-110 shadow-2xl group"
            >
              {isPlaying ? (
                <Pause className="w-10 h-10 text-amber-800 ml-0" />
              ) : (
                <Play className="w-10 h-10 text-amber-800 ml-1" />
              )}
            </button>

            {/* Overlay Text */}
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white text-lg md:text-xl font-medium">
                Find the perfect diamond that makes you dazzle from AM to PM
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-lg">
              Explore the world of natural and rare diamonds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiamondVideo;
