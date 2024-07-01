import Image from 'next/image';
import styles from "../styles/about.module.css";

const WhyChooseUs = () => {
  return (
    <div className={`${styles.why_choose} ${styles.ourmission} mb-4`}>
      <div className='row'>
        <div className='col-lg-6'>
          <div>
            <h1 className={`${styles.choose_us} mt-4 text-white px-4`}>Why Choose Us</h1>
            <Image src="/Images/aboutus/about-7.png" width={580} height={400} alt='loading' className={`${styles.image_leftside} px-4 mb-4`} />
          </div>
        </div>
        
        <div className={`${styles.choose_rightcontent} col-lg-6 text-white mt-4`}>
          <div className={`${styles.choose_rightcontent_p} `}>
            <Image src="/Images/aboutus/about-9.png" width={30} height={30} alt='arrow' className='arrow-logo' />
            <p><strong>Trusted Partner:</strong> With a track record of success and a growing base of satisfied customers, SustainInsight is a trusted partner for companies looking to enhance their sustainability practices.</p>
          </div>
          <div className={`${styles.choose_rightcontent_p}`}>
            <Image src="/Images/aboutus/about-9.png" width={30} height={30} alt='arrow' className='arrow-logo' />
            <p><strong>Innovation:</strong> We are committed to staying at the forefront of technological innovation, continually updating and improving our platform to meet the evolving needs of our users.</p>
          </div>
          <div className={`${styles.choose_rightcontent_p}`}>
            <Image src="/Images/aboutus/about-9.png" width={30} height={30} alt='arrow' className='arrow-logo' />
            <p><strong>Impact:</strong> By using SustainInsight, companies can not only meet regulatory requirements but also make a tangible difference in reducing their environmental footprint and driving positive change.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
