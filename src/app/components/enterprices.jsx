// components/FeaturesList.js

import React from 'react';
import Image from 'next/image';
import styles from "../styles/header.module.css";

const Enterprices = () => {
  const features = [
    "Assess an unlimited number of suppliers",
    "Add unlimited users",
    "Enjoy a dedicated project manager",
    "Receive support in 10 languages",
    "Annual fees vary according to company size",
    "(Additional services upon request)"
  ];

  return (
    <div className={`text-center ${styles.featuresList}  shadow-lg p-4 rounded`}>
        <h4 className='mb-4 mt-4 font-weight-bold'>Enterprise Subscription Benefits</h4>
      <Image
        src="/Images/homepage/permission.png" 
        alt="Features"
        width={100} 
        height={100}
        className="mb-4"
      />
      <ul className="list-unstyled text-center ">
        {features.map((feature, index) => (
          <li key={index} className="d-flex align-items-center mb-3">
            <span className="text-success mr-2">&#10003;</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="btn btn-success mt-4">REQUEST A QUOTE</button>
    </div>
  );
};

export default Enterprices;
