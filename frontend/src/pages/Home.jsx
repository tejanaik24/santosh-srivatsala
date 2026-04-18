import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import AkshayaTritiyaOffers from '../components/home/AkshayaTritiyaOffers';
import TanishqWorld from '../components/home/TanishqWorld';
import NewArrivals from '../components/home/NewArrivals';
import Categories from '../components/home/Categories';
import Collections from '../components/home/Collections';
import FeaturedProducts from '../components/home/FeaturedProducts';
import DiamondVideo from '../components/home/DiamondVideo';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CustomizeSection from '../components/home/CustomizeSection';
import Testimonials from '../components/home/Testimonials';
import FounderSection from '../components/home/FounderSection';
import LocationBanner from '../components/home/LocationBanner';

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="mt-32 md:mt-36">
        <HeroSlider />
        <AkshayaTritiyaOffers />
        <TanishqWorld />
        <NewArrivals />
        <Categories />
        <Collections />
        <FeaturedProducts />
        <DiamondVideo />
        <WhyChooseUs />
        <CustomizeSection />
        <Testimonials />
        <FounderSection />
        <LocationBanner />
      </div>
    </div>
  );
};

export default Home;