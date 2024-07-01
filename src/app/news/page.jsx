import React from 'react'
import CommonBanner  from '../components/common/CommonBanner'
import NewsBanner from './NewsBanner'
import NewsTab from './NewsTab'

export default function page() {
  return (
    <div>
      <CommonBanner rightheading="Our News" image="/Images/all-banner/Image-news.png"/>
      <NewsBanner />
      <NewsTab />
    </div>
  )
}
