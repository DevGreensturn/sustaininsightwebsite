import Image from 'next/image';
import styles from "../styles/about.module.css"


const wedo = () => {
  return (
    <div className={` ${styles.ourmission} our-mission-container mx-4`}>
          <div className='row '>      
          <div className='col-lg-6'>
               <div >            
               </div>
               <h4 className={styles.ourmission_rightheading}>What  We Do 
               <Image src="/Images/aboutus/about-8.png" width={40} height={40} alt='arrow' className='arrow-logo' />
                </h4>
               <h6 className='news-rightcontent'>Through our comprehensive platform , we offer a range of features designed to Streamline sustainability management across construction project of all sizes. Fro data collection and analysis to reporting and compliance tracking. SustainInsight provides the tool and resources neede to navigate the sustainability landscape with ease. 
               </h6>           
          </div>
          <div className='col-lg-6'>
            <div>
            <Image src="/Images/aboutus/about-6.png" width={580} height={400} alt='loading' className='image-newsleftside'/>
            </div>
            
          </div>
         </div>
    </div>
  );
};

export default wedo;
