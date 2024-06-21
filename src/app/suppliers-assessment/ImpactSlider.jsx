"use client"
import React from 'react';
import Image from 'next/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// Adjust the path if necessary, make sure the CSS file exists
import styles from "../styles/our_impact.css";

export default function ImpactSlider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className='slider-box layout-section'>
      <div className='row'>
        <div className='col-lg-8'>
          <div className='layout-section slider-left'>
            <Carousel
             additionalTransfrom={0}
             arrows={false}
             autoPlaySpeed={3000}
             centerMode={false}
             className=""
             containerClass="container"
            //  customDot={<CustomDot />}
             dotListClass=""
             draggable
             focusOnSelect={false}
             responsive={responsive}
             infinite
             itemClass=""
             keyBoardControl
             minimumTouchDrag={80}
             pauseOnHover
             renderArrowsWhenDisabled={false}
             renderButtonGroupOutside={false}
             renderDotsOutside={false}
           
             rewind={false}
             rewindWithAnimation={false}
             rtl={false}
             shouldResetAutoplay
             showDots
             sliderClass=""
             slidesToSlide={1}
             swipeable
            >
              <div className='slider-left'>

                <h2>Balancing the costs of <br />implementing sustainable <br /> practices with profitability</h2>
                <h6 className='sliderleft-content'> Identifying cost-effective sustainable <br /> solutions and highlighting long-term ROI.</h6>

                {/* / <div className='d-flex'> */}
                {/* <div className='border-area'>  </div> */}
                <div className='slider-leftpart'>
                  <div className='d-flex gap-4'>
                    <h2 className='slider-num'> 330 + </h2>
                    <h6 className='pt-4'>  CDP Supply Chain <br /> members</h6>
                  </div>

                  <Image src="/Images/our_impact/arrow2.png" width={150} height={150} alt='loading' />

                </div>

              </div>

              <div className='slider-left'>

                <h2>Balancing the costs of <br />implementing sustainable <br /> practices with profitability</h2>
                <h6 className='sliderleft-content'> Identifying cost-effective sustainable <br /> solutions and highlighting long-term ROI.</h6>

                {/* / <div className='d-flex'> */}
                {/* <div className='border-area'>  </div> */}
                <div className='slider-leftpart'>
                  <div className='d-flex gap-4'>
                    <h2 className='slider-num'> 330 + </h2>
                    <h6 className='pt-4'>  CDP Supply Chain <br /> members</h6>
                  </div>

                  <Image src="/Images/our_impact/arrow2.png" width={150} height={150} alt='loading' />

                </div>

              </div>

              {/* </div> */}


            </Carousel>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='pt-4'>
            <Image src="/Images/our_impact/slider.png"
              width={450} height={350} alt='loading next image..' />
          </div>

        </div>
      </div>
    </div>
  )
}
