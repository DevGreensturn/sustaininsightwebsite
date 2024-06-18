import React from "react";
import Image from "next/image";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';


const HeroSection = () => {
  return (
    <div className="mx-auto py-12 bg-light">
      <div className="  col-12 d-flex items-center justify-center">
        <div className="col-6 flex-col justify-center items-center text-center lg:text-left">
          <h2 className="text mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Elevating Sustainability: Your Trusted Platform for Impact
            </span>
            <br />
          </h2>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            At SustainInsight we are committed to revolutionizing the construction 
            industry through innovative sustainability solutions. With a focus 
            on environmental responsibility and data-driven decision-making, we empower construction 
            companies, suppliers, and builders to achieve their sustainability goals with confidence.
          </p>
          <div className="d-flex justify-content-between">
            <Link
              href="/#contact"
              className="button px-6 inline-block py-3 w-full sm:w-auto rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="col-6 justify-center items-center">
          <div className="image bg-[#181818] w-full lg:w-[400px] h-auto lg:h-[400px] relative flex justify-center items-center">
            <Image
              src="/images/home.png"
              alt="home image"
              width={740}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
