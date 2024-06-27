import React from 'react';
import style from "../../styles/common-style.css"

export default function CommonFooterSection() {
  return (
    <div className='common-footerbox'>
        <h3 className="foter-head">Ready to Join Us in Building a <br /> Greener Futureet started?</h3>

        <h6 className='common-description'>Whether you're a construction industry leader or a supplier looking to improve your sustainability practices, SustainInsight is here to support you every step of the way. Together, let's build a greener, more sustainable future for generations to come.
        </h6>
        <h6 className='common-text'>Contact us today to learn more about how SustainInsight can help you achieve your <br /> sustainability goals.</h6>

        <div className="started-button"> 
           <button type="submit" className="started-get">Get Started</button>
           
        </div>

    </div>
  )
}
