import React from 'react';
import styles from "../styles/our_impact.css";
import Image from 'next/image';

export default function PlatformImpact() {
  return (
    <div className='platform-banner mt-4'>
      <div className='layout-section'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-7'>
                    <div className='platform-heading'>
                    <h3 className='platform-head'>  Platform Innovations</h3> 
                    <h6 className='mt-3 text-white'>Advanced Data Analysis</h6>
                    <p className='mt-5 text-white'>Leverage powerful analytical tools to process and interpret collected data.</p>
                    </div>
             
                </div>
                <div className='col-lg-5'>
                    <div className='platform-right'>
                      <div>
                      <Image src="/Images/our_impact/image.png"
                    width={500} height={400} alt='loading' className='platform-image'/>
                      </div>
                 
                    </div>
                   
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
