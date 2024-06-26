import React from 'react';
import style from "../styles/our_impact.css"
import Image from 'next/image';

export default function BalanceImpact() {
  return (
    <div className='layout-section balance-impact'>
              <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-6'>
                  <h3 className='balance-heading'>  Balancing the costs of  implementing <br /> sustainable  practices with profitability</h3>
                  <h6 className='mt-4'> Identifying cost-effective sustainable <br />solutions and highlighting long-term ROI.</h6>
                </div>
                <div className='col-lg-3 col-sm-6 enroll-class'>
                 <div className=''>
                 <h6 className='balance-box'>  2X Enrollment Volume </h6>
                
                 </div>
                 <Image src="/Images/our_impact/balance_one.png" width={300} height={250} className='w-100' alt='loading'/>
                <>
                
                </>
              </div>
              <div className='col-lg-3 col-sm-6'>
              <Image src="/Images/our_impact/balance_two.png" width={300} height={250} className='w-100' alt='loading'/>
                 <div >
                 <div className='balance-box mt-2'> 
                   <Image src="/Images/our_impact/arrow.png"  width={18} height={18} alt='loading' /> &nbsp;
                   Engagement </div>
                
                 </div>
                
                <>
                
                </>
              </div>
              </div>
              </div>
            
    </div>
  )
}
