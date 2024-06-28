"use client";
import React, { useState } from 'react';
import styles from "../styles/header.module.css";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('yearly');

  const pricingOptions = [
    {
      title: "Free",
      price: "$0 / forever",
      description: "For developers and marketers building individual projects.",
      buttonLabel: "Start for free",
      features: [
        "5 users",
        "2 locales",
        "Beautiful on-site display",
        "Powerful tools to collect and share content",
        "Chat and email support"
      ]
    },
    {
      title: "Pro",
      price: "$169 / month",
      description: "For developers and marketers building individual projects.",
      buttonLabel: "Sign Up",
      features: [
        "5 users",
        "2 locales",
        "Beautiful on-site display",
        "Powerful tools to collect and share content",
        "Chat and email support"
      ]
    },
    {
      title: "Premium",
      price: "Custom / year",
      description: "For developers and marketers building individual projects.",
      buttonLabel: "Get Started",
      features: [
        "5 users",
        "2 locales",
        "Beautiful on-site display",
        "Powerful tools to collect and share content",
        "Chat and email support"
      ]
    }
  ];

  return (
    <div className={styles.pricingSection}>
      <div className={styles.billingToggle}>
        <button
          className={billingCycle === 'monthly' ? styles.active : ''}
          onClick={() => setBillingCycle('monthly')}
        >
          Monthly
        </button>
        <button
          className={billingCycle === 'yearly' ? styles.active : ''}
          onClick={() => setBillingCycle('yearly')}
        >
          Yearly
        </button>
      </div>
      <div className={styles.pricingGrid}>
        {pricingOptions.map((option, index) => (
          <div key={index} className={styles.pricingCard}>
            <h3>{option.title}</h3>
            <p className={styles.price}>{option.price}</p>
            <p>{option.description}</p>
            <button className={styles.button}>{option.buttonLabel}</button>
            <div className={styles.features}>
              <h4>Includes</h4>
              <ul>
                {option.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
