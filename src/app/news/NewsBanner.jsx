import Image from 'next/image';
import React from 'react';
import styles from "../styles/news-style/news-section.css"

export default function NewsBanner() {
  return (
    <div className='layout-section'>
         <div className='row news-section'>
          <div className='col-lg-6'>
            <div>
            <Image src="/Images/news/news-leftsection.png" width={580} height={400} alt='loading' className='image-newsleftside'/>
            </div>
            
          </div>
         
          <div className='col-lg-6'>
               <div >
               <h5 className='insight-class'>Insight</h5> 
               </div>
               <h4 className='news-rightheading'>Tailored Solutions to Meet <br/> Your Requirements  </h4>
               <h6 className='news-rightcontent'>Gain actionable insights into your organization's energy <br />usage patterns with our comprehensive visualization <br /> tool. Our platform allows you to track energy <br /> consumption over time and understand the <br /> distribution of energy across different sources through <br />intuitive pie and line charts. 
               </h6>
              
          </div>
         </div>
    </div>
  )
}
