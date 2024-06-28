import React from 'react'
import styles from "../styles/platform/platform.css";
import Image from 'next/image';

export default function PlatformBanner() {
  return (
    <div>
      <h2 className='platform-heading'> Leading the <span style={{color:"#1FBD12",fontWeight:"900"}}>Way in Carbon</span>  <br /><span style={{color:"#1FBD12",fontWeight:"900"}}> Emissions </span> Management</h2> 

    <h6 className='platform-description'>Manage your carbon footprint with <span style={{fontWeight:"700"}}> precision, compliance, </span>and <br/> <span style={{fontWeight:"700"}}> transparency in one trusted platform. </span> </h6>

    <div className='image-platform layout-section'>
        <Image src="/Images/platform/platform-banner.png" alt='loading' width={900} height={550} className='w-100'/>
    </div>

    </div>
  )
}
