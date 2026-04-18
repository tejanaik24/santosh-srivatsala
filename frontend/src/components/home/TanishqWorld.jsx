import React from 'react';
import { Link } from 'react-router-dom';

const TanishqWorld = () => {
  const worlds = [
    {
      title: 'Gold',
      image: 'https://images.unsplash.com/photo-1650455221359-3aebf920bcc5?w=800',
      description: 'Traditional craftsmanship',
      link: '/shop/necklaces',
      gradient: 'from-amber-900/80 via-amber-800/70 to-transparent'
    },
    {
      title: 'Dailywear',
      image: 'https://images.unsplash.com/photo-1608508644127-ba99d7732fee?w=800',
      description: 'Elegant everyday pieces',
      link: '/shop/earrings',
      gradient: 'from-orange-900/80 via-orange-800/70 to-transparent'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Srivatsala World
          </h2>
          <p className="text-lg text-gray-600">A companion for every occasion</p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {worlds.map((world, index) => (
            <Link
              key={index}
              to={world.link}
              className="group relative h-[400px] overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={world.image}
                alt={world.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${world.gradient}`}></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-4xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{world.title}</h3>
                <p className="text-lg opacity-90">{world.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TanishqWorld;