import Image from 'next/image'
import React from 'react';
import styles from "../styles/our_impact.css";
export default function SupplyChain() {
  return (
    <>
     <div className='container'>
        <div className='chain-banner'>
        <Image src={"/Images/our_impact/arrow.png"}
        width={50}
        height={60}
        alt='loading'
        className='supply-chain-image'
        />
        <div className='supply-text'>
        <h2 className='heading'>Why Supply Chain Impact Matters</h2> 
        <div>
       <h6 className='supply-content'>Brief overview of the importance of understanding and improving the <br></br> impact on supply chains for sustainability</h6>
       </div>
        </div>
    </div>
    </div>
    </>
   
  )
}
