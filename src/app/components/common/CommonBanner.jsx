import Image from 'next/image'
import React from 'react'
import styles from "../../styles/common-style.css"


export default function CommonBanner() {
  return (
    <>
      <section className=''>
        <div className="content">
          <div className="leftside-banner">
            <Image src="/Images/all-banner/Image-news.png" alt='loading' width={800} height={380} className="w-100" />
          </div>
          <div className='rightside-banner'>
            <div style={{ color: "#000" }}>
              <h2 className='right-headingbanner'>Our News</h2></div>

          </div>
        </div>
      </section>
    </>
  )
}