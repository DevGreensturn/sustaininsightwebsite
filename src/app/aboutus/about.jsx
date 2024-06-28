import Image from 'next/image';
import styles from '../styles/about.module.css'

const AboutUs = () => {
    return (
        <div className={`${styles.about} ${styles.ourmission}  `}>
            <div className=''>
                <div className='row'>
                    <div className='col-lg-3 col-sm-6'>
                        <Image src="/Images/about-2.png" width={300} height={250} className='w-100' alt='loading' />
                    </div>
                    <div className='col-lg-3 col-sm-6 enroll-class'>
                        <div className='bg-light'>
                            <h6 className={styles.about_us}>  2024 working with Spark since </h6>

                        </div>
                        <Image src="/Images/about-3.png" width={300} height={250} className='w-100' alt='loading' />
                    </div>
                    <div className='col-lg-6 ml-4'>
                        <h2 className='text-secondary border-left  border-success'>About Us</h2>
                        <h3 className=''> The biggest value prop for<br/> us has been the member <br/> services.</h3>
                        <h6 className='mt-4'> At the heart of our mission is dedicated to fostering a more sustainable future for  the construction sector . By providing cutting-edge tools and actionable insights, we aim to drive meaningful change and make a positive impact on the environment. </h6>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default AboutUs;

