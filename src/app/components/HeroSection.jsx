import React from "react";
import Image from "next/image";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/header.module.css";

const HeroSection = () => {
  return (
    <div className="mx-auto py-12 bg-light">
      <div className="d-flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-6/12 flex-col justify-center items-center text-center lg:text-left mb-8 lg:mb-0">
          <h2 className={`text-4xl sm:text-5xl lg:text-8xl font-extrabold leading-normal ${styles.text}` }>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Elevating Sustainability: Your Trusted Platform for Impact
            </span>
          </h2>
          <p className={`text-[#ADB7BE] text-base sm:text-lg lg:text-xl font-light text-left lg:text-justify ${styles.p}`}>
            At SustainInsight we are committed to revolutionizing the construction 
            industry through innovative sustainability solutions. With a focus 
            on environmental responsibility and data-driven decision-making, we empower construction 
            companies, suppliers, and builders to achieve their sustainability goals with confidence.
          </p>
          <div className="mt-6 lg:mt-8">
            <Link
              href="/#started"
              className={`button px-6 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white${styles.button_contact}`}
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className={`lg:w-6/12 flex justify-center items-center ${styles.image}`}>
          <div className="image bg-[#181818]  relative flex justify-center items-center">
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
