import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      name: 'Gold Necklaces',
      image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2V8ZW58MHx8fHwxNzc2NDk0MTE2fDA&ixlib=rb-4.1.0&q=85',
      path: '/shop/necklaces',
      description: 'Traditional designs',
    },
    {
      name: 'Earrings',
      image: 'https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBqZXdlbHJ5fGVufDB8fHx8MTc3NjQ5NDEyN3ww&ixlib=rb-4.1.0&q=85',
      path: '/shop/earrings',
      description: 'Elegant collection',
    },
    {
      name: 'Bangles',
      image: 'https://images.unsplash.com/flagged/photo-1570055349452-29232699cc63?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBqZXdlbHJ5fGVufDB8fHx8MTc3NjQ5NDEyN3ww&ixlib=rb-4.1.0&q=85',
      path: '/shop/bangles',
      description: 'Handcrafted beauty',
    },
    {
      name: 'Vaddanam',
      image: 'https://images.unsplash.com/photo-1740431377901-c2f28d50c759?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBqZXdlbHJ5fGVufDB8fHx8MTc3NjQ5NDEyN3ww&ixlib=rb-4.1.0&q=85',
      path: '/shop/vaddanam',
      description: 'Bridal special',
    },
    {
      name: 'Mangalsutra',
      image: 'https://images.unsplash.com/photo-1671642883395-0ab89c3ac890?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBqZXdlbHJ5fGVufDB8fHx8MTc3NjQ5NDEyN3ww&ixlib=rb-4.1.0&q=85',
      path: '/shop/mangalsutra',
      description: 'Sacred designs',
    },
    {
      name: 'Rings',
      image: 'https://images.unsplash.com/photo-1600862754152-80a263dd564f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxnb2xkJTIwbmVja2xhY2V8ZW58MHx8fHwxNzc2NDk0MTE2fDA&ixlib=rb-4.1.0&q=85',
      path: '/shop/rings',
      description: 'Modern & classic',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our exquisite collection of traditional Andhra gold jewelry
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                  <p className="text-xs text-gray-200 mb-2">{category.description}</p>
                  <div className="flex items-center text-amber-400 text-sm font-medium group-hover:text-amber-300 transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
