import Image from 'next/image';
import styles from "../styles/about.module.css"

const OurMission = () => {
    return (
        <div className={` ${styles.ourmission} our-mission-container mx-4`}>
            <div className='row '>
                <div className='col-lg-6'>
                    <div className="heading-container">
                        <h4 className={styles.ourmission_rightheading}>
                            Our Mission
                            <Image src="/Images/aboutus/about-8.png" width={40} height={40} alt='arrow' className='arrow-logo' />
                        </h4>
                    </div>

                    <h6 className='news-rightcontent'>At the heart of our mission is a dedication to fostering <br />a more sustainable future for the construction sector. By <br /> providing cutting-edge tools and actionable insights,<br /> we aim to drive meaningful change and make a<br /> positive impact on the environment
                    </h6>
                </div>
                <div className='col-lg-6 flex px-4'>
                    <div>
                        <Image src="/Images/aboutus/about-4.png" width={580} height={400} alt='loading' className='image-newsleftside' />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default OurMission;
