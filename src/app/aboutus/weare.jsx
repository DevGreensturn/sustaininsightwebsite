import Image from 'next/image';
import styles from "../styles/about.module.css"


const weare = () => {
  return (
    <div className={` ${styles.ourmission} our-mission-container`}>
          <div className='row '>
          <div className='col-lg-6'>
            <div>
            <Image src="/Images/aboutus/about-5.png" width={580} height={400} alt='loading' className='image-newsleftside'/>
            </div>
            
          </div>
         
          <div className='col-lg-6'>
               <div >
              
               </div>
               <h4 className={styles.ourmission_rightheading}>
               <Image src="/Images/aboutus/about-8.png" width={40} height={40} alt='arrow' className='arrow-logo' />
              Who We Are  </h4>
               <h6 className='news-rightcontent'>
                SustainInsight is an team of passionate , professionals with diverse expertise in Sustainability , technology , and construction . Our collective vision drives us to develope and deliver innovative solutions that address the complex challanges facing the industry
               </h6>
              
          </div>
         </div>
    </div>
  );
};

export default weare;
