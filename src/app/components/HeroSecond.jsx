import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from  '../page.module.css'

const HeroSecond = () => {
  return (
    <div className="flex padding-top  mx-auto py-12 ">
      <div className=" mx-auto py-12">
        <h2 className="text-2xl text-center font-bold mt-4">Trusted by enterprise leading the way in sustainability</h2>
        {/* First div is null */}
        <div className="mb-4"></div>
        {/* Second div with 4 columns in one row */}
        <h2 className="text-2xl text-center font-bold mb-4">Our Services</h2>
        <div className="row mb-4">
        <div className="col-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-4">
        <div className=" w-100 bg-white p-4 rounded rounded-lg shadow-sm border border-success">
              <div className="d-flex "style={{"marginTop": "-50px "}} >
                <img src="/Images/group-3.png" alt=" group-3" className="img-fluid" style={{ height: '64px' }} />
              </div>
              <p  className={`${styles.imageContainer} p-1  mt-4 text-secondary `}>Get a clear picture of your environmental impact with an easy-to-read breakdown. This assessment will pinpoint areas for improvement and compare your performance to others.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-4">
          <div className=" w-100 bg-white p-4 rounded rounded-lg shadow-sm border border-success">
              <div className=" d-flex " style={{"marginTop": "-50px "}}>
                <img src="/Images/Group-4.png" alt="Group-4" className="img-fluid" style={{ height: '64px' }} />
              </div> 
              <p className={`${styles.imageContainer} p-1  mt-4 text-secondary`}>Custom improvement plans equip you with the tools to achieve your sustainability goals. Set specific targets, track progress, and gain valuable insights through dashboards.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-4">
          <div className=" w-100 bg-white p-4 rounded rounded-lg shadow-sm border border-success">
              <div className="d-flex"style={{"marginTop": "-50px "}}>
                <img src="/Images/Group-5.png" alt="Group-5" className="img-fluid" style={{ height: '64px' }} />
              </div>
              <p className={`${styles.imageContainer} p-1  mt-4 text-secondary`}>Streamline your sustainability journey with collaborative tools. Share your scorecards with multiple stakeholders, increasing transparency and supporting their sustainability efforts.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-4">
            <div className=" w-100 bg-white p-4 rounded rounded-lg shadow-sm border border-success">
              <div className="d-flex" style={{"marginTop": "-50px "}}>
                <img src="/Images/Group-6.png" alt="Group-6" className="img-fluid" style={{ height: '64px' }} />
              </div>
              <p className={`${styles.imageContainer} p-1 mt-4 text-secondary`}>Leverage data-driven insights to optimize your operations. Identify inefficiencies, reduce waste, and enhance overall productivity for sustainable growth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSecond;
