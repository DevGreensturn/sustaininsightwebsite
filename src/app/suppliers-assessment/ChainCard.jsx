"use client"
import React, { useEffect, useRef } from 'react';
import styles from "../styles/our_impact.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ChainCard() {
    
    useEffect(() => {
        AOS.init({
            duration: 2000, 
            offset: 200, 
            easing: 'ease-in-out', 
            delay: 100, 
            once: false, 
        });
      }, []);

    const data = [
        {
            heading: "Environmental Regulations",
            paragraph: "Compliance with increasing environmental regulations and standards.",
        },
        {
            heading: "Supply Chain Disruptions",
            paragraph: "Disruptions caused by natural disasters, geopolitical issues, and pandemics.",
        },
        {
            heading: "Technological Adaptation",
            paragraph: "Rapid technological changes requiring constant updates and adaptations.",
        }
    ];

    return (
        <>
            <div className='d-flex justify-center mt-4'>
                <h2 className='supply-heading'>Challenges in Sustainable
                    <br />
                    Supply Chains </h2>
            </div>
            <div className="layout-section">
                <div className='row'>
                    {data.map((data, index) => (
                        <div className='col-lg-4' key={index} data-aos="flip-up" data-aos-mirror="true">
                            <div
                                className="chain-card"
                                // ref={el => cardRefs.current[index] = el}
                            >
                                <div className="chain-text">
                                    <h5 className='chain-heading'>{data.heading}</h5>
                                    <p className='chain-description'>{data.paragraph}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
