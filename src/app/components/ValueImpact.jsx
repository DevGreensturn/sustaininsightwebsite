import React from 'react';
import styles from "../styles/header.module.css";

const ValueImpact = () => {
  return (
    <div className={`value-section full-background padding-top mx-auto py-12 mb-4 ${styles.valueSection}`}>
      <h2 className="section-title text-center">Value & Impact</h2>
      <div className="flex row mx-md-n5 justify-content-center sm-4">
        <div className="d-flex col-12 col-md-6 col-lg-4">
          <div className={`w-100 m-2 card shadow p-3 mb-5 bg-light rounded border me-md-4 ${styles.cardBackground}`}>
            <div className="icon-wrapper">
              <img className="bg-white border border-success rounded-circle p-3" src="/Images/homepage/Mask group 1.png" alt="Mask group 1" />
            </div>
            <div className="content">
              <h3 className="mt-4">Understand Sustainable Performance</h3>
              <p className="text-secondary font-weight-light mt-4">
                Sustainability and carbon scorecards, made simple! Get a clear picture of your environmental impact with an easy-to-read breakdown. This assessment will pinpoint areas for improvement and compare your performance to others. Plus, you’ll receive helpful resources to understand your score and take action towards a more sustainable future.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex col-12 col-md-6 col-lg-4">
          <div className={`w-100 m-2 card shadow p-3 mb-5 bg-light rounded border me-md-4 ${styles.cardBackground}`}>
            <div className="icon-wrapper">
              <img className="bg-white border border-success rounded-circle p-3" src="/Images/homepage/Mask group 2.png" alt="Mask group 2" />
            </div>
            <div className="content">
              <h3 className="mt-4">Track Progress and Improve</h3>
              <p className="text-secondary font-weight-light mt-4">
                Custom improvement plans equip you with the tools to achieve your sustainability goals. Set specific targets, track progress on a user-friendly dashboard, and gain valuable insights through E-learning modules and training partners. This comprehensive approach empowers you to build expertise and ensure measurable progress towards a sustainable future.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex col-12 col-md-6 col-lg-4">
          <div className={`w-100 m-2 card shadow p-3 mb-5 bg-light rounded border me-md-4 ${styles.cardBackground}`}>
            <div className="icon-wrapper">
              <img className="bg-white border border-success rounded-circle p-3" src="/Images/homepage/Mask group 3.png" alt="Mask group 3" />
            </div>
            <div className="content">
              <h3 className="mt-4">Add Value to your Clients</h3>
              <p className="text-secondary font-weight-lighter mt-4">
                Streamline your sustainability journey with collaborative tools. Our platform empowers you to prioritize actions, track progress, and seamlessly share your scorecard with multiple customers. This fosters transparency and collaboration within your supply chain, ultimately helping your customers measure and report their own environmental footprint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueImpact;
