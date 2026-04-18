import React from 'react';
import { Award, Heart, Shield, Users } from 'lucide-react';

const FounderSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-white to-orange-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Meet Our Founder
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Founder Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
            <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
              <img
                src="https://customer-assets.emergentagent.com/job_tanishq-preview/artifacts/lt04dx6t_image.png"
                alt="Santosh - Founder"
                className="w-full h-auto rounded-2xl object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg">
                <p className="text-2xl font-bold text-amber-900">Santosh</p>
                <p className="text-sm text-gray-600">Founder & Master Jeweler</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-amber-100 rounded-full">
              <span className="text-amber-800 font-semibold text-sm">15 Years of Excellence</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              A Legacy Built on <span className="text-amber-700">Trust & Craftsmanship</span>
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              With over 15 years of dedicated experience in the gold and silver jewelry business, Santosh has established 
              himself as a trusted name in Visakhapatnam. His passion for traditional Andhra designs and 
              commitment to quality has made Srivatsala Jewellers - Silver House the preferred destination for families across generations.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Every piece of jewelry is crafted with meticulous attention to detail, blending age-old techniques 
              with contemporary aesthetics. From exquisite gold necklaces to intricate silver pieces, Santosh believes 
              in creating not just jewelry, but cherished memories that last a lifetime.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-shadow">
                <Users className="w-8 h-8 text-amber-600 mb-3" />
                <p className="text-3xl font-bold text-amber-900">10,000+</p>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-shadow">
                <Award className="w-8 h-8 text-amber-600 mb-3" />
                <p className="text-3xl font-bold text-amber-900">15 Years</p>
                <p className="text-sm text-gray-600">Of Excellence</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-shadow">
                <Shield className="w-8 h-8 text-amber-600 mb-3" />
                <p className="text-3xl font-bold text-amber-900">100%</p>
                <p className="text-sm text-gray-600">Certified Gold</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-shadow">
                <Heart className="w-8 h-8 text-amber-600 mb-3" />
                <p className="text-3xl font-bold text-amber-900">100%</p>
                <p className="text-sm text-gray-600">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
