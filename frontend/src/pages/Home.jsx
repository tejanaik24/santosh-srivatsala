import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import FounderSection from '../components/home/FounderSection';
import AkshayaTritiyaOffers from '../components/home/AkshayaTritiyaOffers';
import Categories from '../components/home/Categories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CustomizeSection from '../components/home/CustomizeSection';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="mt-32 md:mt-36">
        <HeroSlider />
        <AkshayaTritiyaOffers />
        <Categories />
        <FeaturedProducts />
        <CustomizeSection />
        <WhyChooseUs />
        <Testimonials />
        <FounderSection />
      </div>
    </div>
  );
};

export default Home;
