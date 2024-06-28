import React from 'react';
import styles from "../styles/about.module.css";

const Construction = () => {
  return (
    <div className={`${styles.container}`}>
      <div className='row'>
      <div className={`${styles.header}col-lg-6`}>
        <h1>Drivingv Sustainable</h1><h1 className='mt-2'>Construction Practices</h1>
        <p></p>
      </div>
      <div className={`${styles.content}col-lg-6`}>
        <p className={styles.content}>
          At SustainInsight, we are committed to revolutionizing the construction 
          industry through innovative sustainability solutions. With a focus on environmental
           responsibility and data-driven decision-making, we empower construction companies, 
           suppliers, and builders to achieve their sustainability goals with confidence.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Construction;
