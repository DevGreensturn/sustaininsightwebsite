"use client";

import React from 'react';
import styles from "../styles/header.module.css";

const HeroThird = () => {
  return (
    <section className={styles.whatWeDoSection}>
      `<div className={`d-flex flex-row ${styles.container}`}>
        <div className={`p-2 ${styles.imageContainer}`}>
          <img src="/Images/home-1.png" alt="Laptop showing SustainInsight dashboard" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h2>What we do?</h2>
          <p className="text-light">
            Promotes more sustainable practices within the construction industry. Comprehensive data capture system that leverages the power of artificial intelligence and blockchain technology. This innovative system will automatically collect critical data from construction sites, encompassing metrics like carbon emissions, material usage, water and energy consumption, waste recycling rates, worker welfare compliance, and even the In-Country Value (ICV) score. These crucial data points will be seamlessly integrated onto a secure blockchain platform, ensuring immutability and eliminating the risk of manipulation. To guarantee data accuracy, a designated verifier will then meticulously review all captured information. Finally, the system will employ advanced algorithms to automatically calculate each contractor's sustainability rating, generating detailed scorecards that provide a clear and objective assessment of their environmental and social performance. This groundbreaking approach empowers stakeholders to make informed decisions based on verifiable data, ultimately driving positive change towards a more sustainable construction industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroThird;
