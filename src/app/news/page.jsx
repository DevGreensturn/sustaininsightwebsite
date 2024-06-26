import React from 'react'
import Navbar from '../components/Navbar'
import CommonBanner from '../components/common/CommonBanner'
import NewsBanner from './NewsBanner'
import NewsTab from './NewsTab'

export default function page() {
  return (
    <div>
      <Navbar />
      <CommonBanner />
      <NewsBanner />
      <NewsTab />
    </div>
  )
}
