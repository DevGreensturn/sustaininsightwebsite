import React from 'react'

import CommonBanner from '../components/common/CommonBanner'
import ContactUsForm from './ContactUsForm'
import CommonFooterSection from '../components/common/CommonFooterSection'

export default function page() {
  return (
    <div>

        <CommonBanner rightheading="Contact Us" image="/Images/all-banner/contact-us.png"/>
        <ContactUsForm />
        <CommonFooterSection />
    </div>
  )
}

