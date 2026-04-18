import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Vizag',
      rating: 5,
      text: 'Santosh Jewellers has been our family\'s go-to for all occasions. The quality and designs are exceptional. The traditional Andhra vaddanam I bought for my wedding was absolutely stunning!',
      date: 'March 2025',
    },
    {
      name: 'Rajesh Kumar',
      location: 'Visakhapatnam',
      rating: 5,
      text: 'Excellent service and authentic gold jewelry. Santosh sir personally guided us through the entire selection process. Very transparent in pricing and hallmarking. Highly recommended!',
      date: 'February 2025',
    },
    {
      name: 'Lakshmi Devi',
      location: 'MVP Colony',
      rating: 5,
      text: 'I customized a necklace design by sending a photo on WhatsApp. The craftsmanship exceeded my expectations! The free home delivery was very convenient. Thank you Santosh Jewellers!',
      date: 'January 2025',
    },
    {
      name: 'Venkat Rao',
      location: 'Beach Road',
      rating: 5,
      text: '15 years of trust is not just a tagline - it\'s reality! My entire family has been buying jewelry from here. The Akshaya Tritiya offers were amazing. Best gold shop in Vizag!',
      date: 'March 2025',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of families across Visakhapatnam
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-amber-200" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
                <p className="text-xs text-gray-500">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold border-2 border-white">
                P
              </div>
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold border-2 border-white">
                R
              </div>
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold border-2 border-white">
                L
              </div>
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold border-2 border-white">
                +
              </div>
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">10,000+ Happy Customers</p>
              <p className="text-sm text-gray-600">Join our satisfied family</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
