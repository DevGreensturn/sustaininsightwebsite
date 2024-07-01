"use client";
import React, { useEffect, useRef } from 'react';
import '../styles/our_impact.css';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ServiceSuppliers() {
    
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            offset: 200, 
            easing: 'ease-in-out', 
            delay: 100, 
            once: false, 
        });
      }, []);
    
    
    return (
        <div className='layout-section'>
            <div>
                <h2 className='service-heading'>Our Services</h2>

                <div className='row service-box' data-aos="fade-up">
                    {[
                        {
                            src: "/Images/service/2.png",
                            description: "Our sustainability rating platform offers a unified solution, streamlining data collection, analysis, and reporting for contractors and stakeholders alike."
                        },
                        {
                            src: "/Images/service/4.png",
                            description: "We utilize standardized metrics that align with internationally recognized frameworks, ensuring transparency and comparability across the industry."
                        },
                        {
                            src: "/Images/service/3.png",
                            description: "Automated monthly validation ensures data accuracy and minimizes manual effort, allowing contractors to focus on achieving sustainable construction goals."
                        },
                        {
                            src: "/Images/service/1.png",
                            description: "The user-friendly platform provides a supportive environment, making it easy for contractors of all experience levels to navigate and leverage the platform's capabilities."
                        }
                    ].map((item, index) => (
                        <div className='col-lg-3' key={index}>
                            <div
                                className='service-card'>
                                <div className='mt-2'>
                                    <Image src={item.src} alt='loading' width={40} height={40} />
                                    <h6 className='service-description'>{item.description}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
