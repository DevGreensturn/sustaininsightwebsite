// src/app/components/HeroThird.jsx

import React from 'react';
import Image from 'next/image';
import styles from '../page.module.css';

const HeroThird = () => {
  return (
    <div className={`container-fluid ${styles.page} pt-5`}>
      <div className="row ">
        <div className="col-md-6 d-flex  p-0 ml-0 pl-0">
          <div className={`${styles.imageContainer} p-0 ml-0 pl-0`}>
            <Image
              src="/Images/home-1.png" // Update the path to your image
              alt="Laptop with dashboard"
              width={800}
              height={600}
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className={styles.textContainer}>
            <h2 className="text-white">What we do?</h2>
            <p className="text-white">
              Promotes more sustainable practices within the construction industry. Comprehensive data capture system that leverages the power of artificial intelligence and blockchain technology. This innovative system will automatically collect critical data from construction sites, encompassing metrics like carbon emissions, material usage, water and energy consumption, waste recycling rates, worker welfare compliance, and even the in-Country Value (ICV) score. These crucial data points will be seamlessly integrated onto a secure blockchain platform, ensuring immutability and eliminating the risk of manipulation. To guarantee data accuracy, a distributed ledger will verify the collected information via AI-based automation. Finally, the system will use advanced algorithms to automatically calculate each contractor's sustainability rating, generating detailed scorecards that provide a clear and objective benchmark of their environmental and social performance. This groundbreaking approach empowers stakeholders to make informed decisions based on verifiable data, ultimately driving positive changes towards a more sustainable construction industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroThird;
