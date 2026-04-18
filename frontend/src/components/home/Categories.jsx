import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    {
      name: 'EARRINGS',
      image: 'https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?w=400',
      path: '/shop/earrings',
      bg: 'bg-gradient-to-br from-teal-600 to-teal-700'
    },
    {
      name: 'FINGER RINGS',
      image: 'https://images.unsplash.com/photo-1608508644127-ba99d7732fee?w=400',
      path: '/shop/rings',
      bg: 'bg-gradient-to-br from-teal-500 to-cyan-600'
    },
    {
      name: 'PENDANTS',
      image: 'https://images.unsplash.com/photo-1763256614647-14abbc578252?w=400',
      path: '/shop',
      bg: 'bg-gradient-to-br from-emerald-600 to-teal-600'
    },
    {
      name: 'MANGALSUTRA',
      image: 'https://images.unsplash.com/photo-1672646858147-2f9ddb140191?w=400',
      path: '/shop/mangalsutra',
      bg: 'bg-gradient-to-br from-teal-600 to-emerald-700'
    },
    {
      name: 'BRACELETS',
      image: 'https://images.unsplash.com/photo-1611107683227-e9060eccd846?w=400',
      path: '/shop/bangles',
      bg: 'bg-gradient-to-br from-cyan-600 to-teal-600'
    },
    {
      name: 'BANGLES',
      image: 'https://images.unsplash.com/photo-1650455221359-3aebf920bcc5?w=400',
      path: '/shop/bangles',
      bg: 'bg-gradient-to-br from-teal-700 to-emerald-600'
    },
    {
      name: 'CHAINS',
      image: 'https://images.unsplash.com/photo-1708672920549-c67fc91d897a?w=400',
      path: '/shop/necklaces',
      bg: 'bg-gradient-to-br from-emerald-500 to-teal-600'
    },
    {
      name: 'VIEW ALL',
      icon: '10+',
      subtitle: 'Categories to chose from',
      path: '/shop',
      bg: 'bg-gradient-to-br from-white to-amber-50',
      textColor: 'text-amber-800'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Find Your Perfect Match
          </h2>
          <p className="text-lg text-gray-600">Shop by Categories</p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {category.image ? (
                <>
                  <div className={`absolute inset-0 ${category.bg}`}></div>
                  <div className="relative h-full flex items-center justify-center p-6">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-bold text-lg text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {category.name}
                    </h3>
                  </div>
                </>
              ) : (
                <div className={`${category.bg} h-full flex flex-col items-center justify-center p-6 border-2 border-amber-200`}>
                  <p className={`text-6xl font-bold ${category.textColor} mb-2`}>{category.icon}</p>
                  <p className={`text-sm ${category.textColor} text-center font-medium`}>{category.subtitle}</p>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;