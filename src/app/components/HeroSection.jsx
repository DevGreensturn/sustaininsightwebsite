import React from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/header.module.css";

const HeroSection = () => {
  return (
    <div className={`${styles.heroSection_row}mx-auto row py-12 bg-light`}>
      <div className="d-flex flex-col lg:flex-row items-center justify-center">
        <div className=" flex-col justify-center items-center text-center lg:text-left mb-8 lg:mb-0">
          <h2 className={`text-4xl sm:text-5xl lg:text-8xl font-extrabold leading-normal ${styles.text}` }>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Elevating Sustainability: Your Trusted Platform for Impact
            </span>
          </h2>
          <p className={`text-[#ADB7BE] text-base sm:text-lg lg:text-xl font-light  mt-6 flex-col lg:mt-8 d-flex justify-content-start ${styles.p}`}>
            At SustainInsight we are committed to revolutionizing the construction 
            industry through innovative sustainability solutions. With a focus 
            on environmental responsibility and data-driven decision-making, we empower construction 
            companies, suppliers, and builders to achieve their sustainability goals with confidence.
          </p>
          <div className="mt-6 flex-col lg:mt-8 d-flex justify-content-start">
          <button type="submit" className={styles.subscribeButton } 
           style={{ 
            marginLeft: '60px'
          }}> Get Started</button>
          </div>
        </div>
        <div className={`col-lg-6 d-flex justify-content-center`}>
          <div className="image bg-[#181818] relative d-flex justify-content-center align-items-center">
            <Image
              src="/Images/homepage/home.png"
              alt="home image"
              width={740}
              height={600}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
