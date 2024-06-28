import Image from 'next/image'
import React from 'react'

export default function PlatformDetails() {
  return (
    <div className='layout-section'>
        <div className='row detail-class'>
            <div className='col-lg-6 col-sm-12'>
          <h5 className='detail-heading'>Platform Details</h5>
          <h5 className='detail-heading'>Tailored Solutions to Meet <br /> Your Requirements
          </h5>
          <h6 className='detail-description'>Visualizing Energy Consumption Trends</h6>
          <p className='detail-descriptionsecond'>Gain actionable insights into your organization's energy usage patterns with our comprehensive visualization tool. Our platform allows you to track energy consumption over time and understand the distribution of energy across different sources through intuitive pie and line charts. 
          </p>
            </div>
            <div className='col-lg-6 col-sm-12'>
               <Image src="/Images/platform/platform-detail.png" alt='loading' width={700} height={400} className='w-100'/> 
            </div>
        </div>
        <div className='row detail-class'>

        <div className='col-lg-6'>
               <Image src="/Images/platform/supplier.png" alt='loading' width={700} height={400} className='w-100'/> 
            </div>
           
            <div className='col-lg-6 mt-2 '>
          <h5 className='detail-heading'>Supplier Emissions Management
          </h5>
          <p className='detail-descriptionsecond'>Enhance Your Emissions Accuracy by Leveraging Detailed Supplier Data. Identify High-Impact Suppliers, Manage Data Requests, Review Submissions, and Facilitate Revisions for Improved Sustainability Reporting. 
          </p>
            </div>
        </div>
    </div> 
  )
}
