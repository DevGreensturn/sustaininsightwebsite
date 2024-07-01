import React from 'react'
import CommonBanner from '../components/common/CommonBanner'
import NewsBanner from './NewsBanner'
import NewsTab from './NewsTab'
import NewsCards from './NewsCards'

export default function page() {
  return (
    <div>
      <CommonBanner rightheading="Latest News" image="/Images/all-banner/Image-news.png"/>
      {/* <NewsBanner />
      <NewsTab /> */}
    
    <NewsCards />

    </div>
  )
}
