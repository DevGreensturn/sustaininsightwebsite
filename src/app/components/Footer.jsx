"use client";

"use client";

import React from 'react';
import styles from '../styles/header.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <img src="Images/Logo-1.png" alt="SustainInsight Logo" className={styles.logo} />
          <p className={styles.description}>
            At SustainInsight, we are committed to revolutionizing the construction industry through innovative sustainability solutions.
            With a focus on environmental responsibility and data-driven decision-making, we empower construction companies, suppliers,
            and builders to achieve their sustainability goals with confidence.
          </p>
        </div>
        <div className={styles.linksSection}>
          <div className={styles.column}>
            <h4>Our Services</h4>
            <ul>
              <li>Suppliers Assessment</li>
              <li>Enterprise Solutions</li>
              <li>Learning Centre</li>
              <li>Impact on Supply chain</li>
              <li>Industries & Examples</li>
              <li>Why rating suppliers</li>
              <li>Rating Methodology</li>
              <li>Rating Areas</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>About</li>
              <li>Latest News</li>
              <li>Contact Us</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className={styles.newsletterSection}>
            <h4>Join Our Newsletter</h4>
            <form>
              <input type="email" placeholder="Enter your email" className={styles.emailInput} />
              <button type="submit" className={styles.subscribeButton}>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
    <p>2024 SustainInsight. All Rights Reserved.</p>
    <div className={styles.socialIcons}>
        <p className="mt-2">Follow us</p>
        <a href="https://www.facebook.com/profile.php?id=61558199255253" target="_blank" rel="noopener noreferrer">
            <img src="/Images/facebook-box-fill.png" alt="Facebook" />
        </a>
        <a href=" https://www.instagram.com/sustain_insight?igsh=OWYyb2xuNm4ydGJr" target="_blank" rel="noopener noreferrer">
            <img src="/Images/instagram-fill.png" alt="Instagram" />
        </a>
        <a href=" https://in.linkedin.com/company/sustainable-insights" target="_blank" rel="noopener noreferrer">
            <img src="/Images/linkedin-box-fill.png" alt="LinkedIn" />
        </a>
    </div>
   </div>
    </footer>
  );
};

export default Footer;
