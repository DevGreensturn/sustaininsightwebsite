import React from 'react';

const ValueImpact = () => {
  return (
    <div className="value-section   padding-top mx-auto py-12">
      <h2 className="section-title text-center">Value & Impact</h2>
   
      <div className="flex row mx-md-n5  justify-content-center">
        <div className="col-12 col-md-6 col-lg-4 d-flex  ">
          <div className="w-100 m-2 card bg-light ">
            <div className="icon-wrapper ">
              <img className="bg-white border border-success rounded-circle p-3" src="/Images/Mask group 1.png" alt="Mask group 2" />
            </div>
            <div className="content ">
              <h3>Understand Sustainable Performance</h3>
              <p>
                Sustainability and carbon scorecards, made simple! Get a clear picture of your environmental impact with an easy-to-read breakdown. This assessment will pinpoint areas for improvement and compare your performance to others. Plus, you’ll receive helpful resources to understand your score and take action towards a more sustainable future.
              </p>
            </div>
          </div> 
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex  ">
          <div className="w-100 m-2 card bg-light">
          <div className="icon-wrapper">
            <img className=" bg-white border border-success rounded-circle p-3" src="/Images/Mask group 2.png" alt="Mask group 2" />
          </div>
          <div className="content">
            <h3>Track Progress and Improve</h3>
            <p>
              Custom improvement plans equip you with the tools to achieve your sustainability goals. Set specific targets, track progress on a user-friendly dashboard, and gain valuable insights through E-learning modules and training partners. This comprehensive approach empowers you to build expertise and ensure measurable progress towards a sustainable future.
            </p>
          </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex ">
          <div className="w-100 m-2 card bg-light">
          <div className="icon-wrapper">
            <img className="bg-white border border-success rounded-circle p-3" src="/Images/Mask group 3.png" alt="Mask group 1" />
          </div>
          <div className="content">
            <h3>Add Value to your Clients</h3>
            <p>
              Streamline your sustainability journey with collaborative tools. Our platform empowers you to prioritize actions, track progress, and seamlessly share your scorecard with multiple customers. This fosters transparency and collaboration within your supply chain, ultimately helping your customers measure and report their own environmental footprint.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueImpact;
