import React from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/header.module.css";

const HeroSection = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        
        <div className="col-lg-6">

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

          {/* <div className="mt-6 flex-col lg:mt-8 d-flex justify-content-start">
          <button type="submit" className={styles.subscribeButton } 
           style={{ 
            marginLeft: '60px'
          }}> Get Started</button>
          </div> */}
        </div>

        <div className="col-lg-6 d-flex flex-row-reverse">
          <div className="">
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
