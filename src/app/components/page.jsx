import React from 'react';
import HeroSecond from './HeroSecond';
import HeroSection from './HeroSection';
import HeroThird from './HeroThird';
import ValueImpact from './ValueImpact';
import NewsSection from './NewsSection';
import PricingSection from './pricingsection';


const Page = () => {
  return (
    <>
    <HeroSection />
    <HeroSecond />
      <HeroThird/>
      <ValueImpact />
      <NewsSection/>
     <PricingSection/>
    </>
  );
  
}

export default Page;
