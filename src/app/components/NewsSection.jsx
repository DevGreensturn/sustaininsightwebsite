// NewsSection.jsx
import React from 'react';
import styles from "../styles/header.module.css";

const newsItems = [
  {
    title: "Starting Pilot Projects with Ministry of Energy & Infrastructure",
    description: "Our membership management software provides full automation of membership renewals and payments",
    imageUrl: "/Images/homepage/News-1.png",
    link: "#",
  },
  {
    title: "Working on the formation of an Advisory Board with UA",
    description: "We are currently in the process of assembling a distinguished advisory board, bringing together the brighte...",
    imageUrl: "/Images/homepage/News-2.png",
    link: "#",
  },
  {
    title: "Participation in The Environmental Investment",
    description: "We had the opportunity to participate in The Environmental Investment...",
    imageUrl: "/Images/homepage/News-3.png",
    link: "#",
  },
  {
    title: "Selected Europe for Accelerator Program",
    description: "We are thrilled to announce our company has been sele...",
    imageUrl: "/Images/homepage/News-2.png",
    link: "#",
  },
];

const NewsSection = () => {
  return (
    <div className={` py-12`}>
      <h2 className='text-center mb-4'>Our News</h2>
      <div className='row'>
        {newsItems.map((item, index) => (
          <div key={index} className='col-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-4'>
            <div className={styles.newsItem}>
              <img src={item.imageUrl} alt={item.title} className={styles.newsImage} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} className={styles.readMore}>Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
