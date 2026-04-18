import React from 'react';
import { Shield, Award, Gem, Truck, RefreshCw, ThumbsUp } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Certified Gold',
      description: '100% BIS hallmarked jewelry with purity guarantee',
      color: 'from-amber-500 to-yellow-500',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: '15 Years Trust',
      description: 'Serving Vizag with excellence since 2010',
      color: 'from-orange-500 to-amber-600',
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: 'Traditional Designs',
      description: 'Authentic Andhra craftsmanship and heritage',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Free Delivery',
      description: 'Complimentary home delivery across Vizag',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: '100% Exchange',
      description: 'Full value for your old gold jewelry',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      title: 'Lifetime Support',
      description: 'Free maintenance and cleaning services',
      color: 'from-red-500 to-rose-500',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Why Choose Santosh Jewellers?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of tradition, quality, and trust
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-200 transform hover:-translate-y-1"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
