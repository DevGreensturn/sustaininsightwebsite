import React from 'react';
import style from "../styles/contactus/contactus.css";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Image from 'next/image';


export default function ContactUsForm() {
  return (
    <div>
      <div className='contact-head layout-section'>
        {/* <h3 className='contact-heading'>Contact Us</h3> */}
        <div className='contact-image'>
        <Image src="/Images/contactus.svg" width={400} height={150} alt='loading' className='w-100'/>
        </div>
        
      </div>
      <div>
        <h2 className='contact-secondheading'>Contact Us</h2>
      </div>

      <div className='layout-section'>
        <div className='container-fluid'>
        <div className="row">
          <div className='col-lg-6'>
            <div className='contactform'>
              <div className='contact-input'>
              <div className='input-box'>
              <label>First Name</label>
              <input type='text' className='form-control input-field'/>
              </div>
           <div className='input-box'>
           <label>Last Name</label>
           <input type='text' className='form-control input-field'/>
           </div>
              </div>
            <div className='mt-4'>
              <label>Your email</label>
            <input type='email' className='form-control input-field'/>
            </div>
            <div className='mt-4'>
              <label>Your message</label>
            <textarea type='text' className='form-control input-field' rows={5}/>
            </div>
               <div>
                <button type='submit' className='submit-button'>Submit</button>
               </div>

          </div>
          </div>
          <div className='col-lg-6'>
            <div className='contact-right'>
            <h4 style={{fontWeight:"700"}}>Let’s Build something  amazing togather</h4>
            <div className='contact-class'>
            <div className='mt-4'>
             <IoLocationOutline  className='icons-class'/>
            </div>
            <div className='pt-4'>
              <h6 style={{fontWeight:"700"}}>Address</h6>
              <h6>71 Praed Street Paddington London <br />W2 1NS</h6>
            </div>
            </div>
          
            <div className='contact-class'>
            <div className='mt-4'>
             < MdEmail  className='icons-class'/>
            </div>
            <div className='pt-4'>
              <h6 style={{fontWeight:"700"}}>Email</h6>
              <h6>info@drduk.com</h6>
            </div>
            </div>
        
            <div className='contact-class'>
            {/* <div className='mt-4'>
             <FaPhoneAlt  className='icons-class'/>
            </div> */}
            {/* <div className='pt-4'>
              <h6 style={{fontWeight:"700"}}>Phone</h6>
              <h6>03302231838</h6>
            </div> */}
            </div>
            </div>
         
          </div>
          {/* <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
          </div> */}
        </div>
        </div>
    
      
      </div>


    </div>
  )
}
