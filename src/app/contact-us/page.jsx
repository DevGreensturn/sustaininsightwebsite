import React from 'react'
import Navbar from '../components/Navbar'
import CommonBanner from '../components/common/CommonBanner'
import ContactUsForm from './ContactUsForm'
import CommonFooterSection from '../components/common/CommonFooterSection'

export default function page() {
  return (
    <div>
        <Navbar />
        <CommonBanner rightheading="Contact Us" image="/Images/all-banner/contact-us.png"/>
        <ContactUsForm />
        <CommonFooterSection />
    </div>
  )
}

