import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HeroSecond from "./components/HeroSecond";
import HeroThird from "./components/HeroThird";
import ValueImpact from "./components/ValueImpact";
import "../app/page.module.css"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className=" mt-24 mx-auto px-12">
      <HeroSection />
      <HeroSecond/>
      <HeroThird/>
      <ValueImpact />
      </div>
    </main>
  );
}
