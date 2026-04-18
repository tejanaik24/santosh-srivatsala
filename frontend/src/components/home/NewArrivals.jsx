import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const NewArrivals = () => {
  const arrivals = [
    {
      title: 'Silver Idols',
      image: 'https://images.unsplash.com/photo-1708164841103-197b4c8831bc?w=600',
      bg: 'bg-gradient-to-br from-red-900 to-red-800',
      link: '/shop'
    },
    {
      title: 'Station Mangalsutra',
      image: 'https://images.unsplash.com/photo-1672646858147-2f9ddb140191?w=600',
      bg: 'bg-gradient-to-br from-amber-100 to-yellow-50',
      link: '/shop/mangalsutra'
    }
  ];

  return (
    <section className="py-16 md:py-20 relative overflow-hidden" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1611107683227-e9060eccd846?w=1600)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="absolute inset-0 bg-gradient-to-r from-amber-50/95 via-white/90 to-orange-50/95"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-amber-700" />
            <span className="text-amber-800 font-bold text-sm">500+ New Items</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            New Arrivals
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            New Arrivals Dropping Daily, Monday through Friday.<br />
            Explore the Latest Launches Now!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl">
          {arrivals.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group relative h-[350px] overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className={`absolute inset-0 ${item.bg}`}></div>
              <div className="relative h-full flex items-center justify-center p-8">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;