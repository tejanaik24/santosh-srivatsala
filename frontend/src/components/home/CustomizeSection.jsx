import React from 'react';
import { Camera, MessageCircle, Heart } from 'lucide-react';

const CustomizeSection = () => {
  const handleWhatsAppCustomize = () => {
    window.open(
      'https://wa.me/919876543210?text=Hi, I want to customize a jewelry design. I will send you a photo.',
      '_blank'
    );
  };

  const handleWhatsAppBook = () => {
    window.open(
      'https://wa.me/919876543210?text=Hi, I would like to book an appointment at your store.',
      '_blank'
    );
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Customize Your Dream Jewelry
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Send us a photo of your favorite design on WhatsApp, and we'll create it for you
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Customize Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-green-100">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Camera className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Send Photo to Customize
            </h3>
            <p className="text-gray-600 mb-6 text-center leading-relaxed">
              Have a design in mind? Simply send us a photo on WhatsApp, and our expert craftsmen will bring your vision to life with precision and care.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Personalized designs tailored to your preference</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Expert consultation and design suggestions</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Premium quality craftsmanship guaranteed</span>
              </li>
            </ul>
            <button
              onClick={handleWhatsAppCustomize}
              className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              Send Photo on WhatsApp
            </button>
          </div>

          {/* Book Appointment Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-amber-100">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Book WhatsApp Appointment
            </h3>
            <p className="text-gray-600 mb-6 text-center leading-relaxed">
              Schedule a visit to our store via WhatsApp. Our team will assist you in finding the perfect jewelry for your special occasion.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Convenient appointment scheduling</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Personalized in-store consultation</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">View our complete collection</span>
              </li>
            </ul>
            <button
              onClick={handleWhatsAppBook}
              className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-full hover:from-amber-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              Book on WhatsApp
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
            <MessageCircle className="w-5 h-5 text-green-600" />
            <span className="text-gray-800 font-medium">Quick Response | Available 24/7 on WhatsApp</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizeSection;
