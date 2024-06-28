import Image from 'next/image'
import React from 'react'
import styles from "../../styles/common-style.css"


export default function CommonBanner( props ) {
  return (
    <>
      <section className=''>
        <div className="content">
          <div className="leftside-banner">
            <Image src={props.image} alt='loading' width={800} height={380} className="w-100" />
          </div>
          <div className='rightside-banner'>
            <div style={{ color: "#000" }}>
              <h2 className='right-headingbanner'>{props.rightheading}</h2></div>

          </div>
        </div>
      </section>
    </>
  )
}