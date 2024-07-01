import HeroSection from "./components/HeroSection";
import HeroSecond from "./components/HeroSecond";
import HeroThird from "./components/HeroThird";
import ValueImpact from "./components/ValueImpact";
import NewsSection from "./components/NewsSection";
import PricingSection from "./components/pricingsection";
// import "../app/page.module.css"

export default function Home() {
  return (
      <div className=" mt-24 mx-auto px-12">
      <HeroSection />
      <HeroSecond/>
      <HeroThird/>
      <ValueImpact />
      <NewsSection/>
     <PricingSection/>
      </div>
  );
}
