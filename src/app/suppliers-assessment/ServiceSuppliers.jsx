import React from 'react';
import styles from "../styles/our_impact.css";
import Image from 'next/image';

export default function ServiceSuppliers() {
  return (
    <div className='layout-section'>
    <div>
        <h2 className='service-heading'>Our Services</h2>
        <div className='row service-box'>
            <div className='col-lg-3'>
                <div className='service-card'>
                    <div className='mt-2'>
                    <Image src="/Images/service/2.png" alt='loading' width={40} height={40} />
                    <h6 className='service-description'>Our sustainability rating platform offers a unified solution, streamlining data collection, analysis, and reporting for contractors and stakeholders alike.</h6>
                    </div>
                  
                </div>
            </div>
            <div className='col-lg-3'>
            <div className='service-card'>
                   <Image src="/Images/service/4.png" alt='loading' width={40} height={40} />
                   <h6 className='service-description'>We utilize standardized metrics that align with internationally recognized frameworks, ensuring transparency and comparability across the industry.</h6>
                </div>
            </div>
            <div className='col-lg-3'>
            <div className='service-card'>
                   <Image src="/Images/service/3.png" alt='loading' width={40} height={40} />
                   <h6 className='service-description'>Automated monthly validation ensures data accuracy and minimizes manual effort, allowing contractors to focus on achieving sustainable construction goals.</h6>
                </div>
            </div>
            <div className='col-lg-3'>
            <div className='service-card'>
                   <Image src="/Images/service/1.png" alt='loading' width={40} height={40} />
                   <h6 className='service-description'>The user-friendly platform provides a supportive environment, making it easy for contractors of all experience levels to navigate and leverage the platform's capabilities.</h6>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
