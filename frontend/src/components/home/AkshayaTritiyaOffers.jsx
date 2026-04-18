import React from 'react';
import { Gift, Sparkles, TrendingUp, Tag } from 'lucide-react';

const AkshayaTritiyaOffers = () => {
  const offers = [
    {
      icon: <Tag className="w-8 h-8" />,
      title: 'Flat 20% Off',
      description: 'On making charges for all gold jewelry',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Free Gold Coin',
      description: 'On purchases above ₹1,00,000',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Exchange Offer',
      description: '100% value for your old gold',
      color: 'from-amber-600 to-yellow-600',
    },
  ];

  return (
    <section id="akshaya" className="py-16 md:py-20 bg-gradient-to-br from-amber-900 via-orange-800 to-amber-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-amber-400 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-yellow-200 font-semibold uppercase tracking-wider text-sm">
              Limited Time Offer
            </span>
            <Sparkles className="w-5 h-5 text-yellow-300" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Akshaya Tritiya Special
          </h2>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto">
            Celebrate the auspicious day with exclusive offers on traditional gold jewelry
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${offer.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:rotate-12 transition-transform`}>
                {offer.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{offer.title}</h3>
              <p className="text-amber-100 text-lg">{offer.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Offer Valid Till: 30th April 2025
          </h3>
          <p className="text-lg text-amber-800 mb-6">
            Visit our store or call us to avail these special Akshaya Tritiya offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/store-location"
              className="px-8 py-4 bg-amber-900 text-white font-semibold rounded-full hover:bg-amber-950 transition-all transform hover:scale-105 shadow-lg"
            >
              Visit Our Store
            </a>
            <a
              href="tel:+919876543210"
              className="px-8 py-4 bg-white text-amber-900 font-semibold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Call: +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AkshayaTritiyaOffers;
