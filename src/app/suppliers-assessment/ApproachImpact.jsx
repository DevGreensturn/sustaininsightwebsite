"use client"
import React, { useEffect, useRef } from 'react';
import styles from "../styles/our_impact.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export default function ApproachImpact() {

    // useEffect(() => {
    //     AOS.init({
    //         duration: 1000, 
    //         offset: 200, 
    //         easing: 'ease-in-out', 
    //         delay: 100, 
    //         once: false, 
    //     });
    //   }, []);
    
    const data = [
        {
            heading: "Sustainable Sourcing",
            paragraph: "Description of sourcing strategies",
        },
        {
            heading: "Carbon Footprint Reduction",
            paragraph: "Methods to reduce carbon emissions.",
        },
        {
            heading: "Efficient Logistics",
            paragraph: "Optimization of logistics and transportation",
        },
        {
            heading:"Risk Management",
            paragraph:"Strategies for managing supply chain risks",
        }
    ];
    return (
        <>
            <div className='approach-box'>
                <h4 className='supply-heading'>Our Approach</h4>
                <h6 className='mt-4'>Our Approach to Sustainable Supply Chains</h6>
            </div>
            <div className="layout-section mb-5">
            {/* data-aos="fade-up" */}
                <div className='row' >  
                    {
                        data.map((data, index) => (
                            <div className='col-lg-6' key={index}>
                                <div className="chain-approach">
                                    <div className="approach-text">
                                        <h5>{data.heading}</h5>
                                        <p className='approach-description'>{data.paragraph}</p>
                                    </div>

                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

        </>

    )
}
