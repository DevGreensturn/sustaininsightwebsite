import React from 'react'

export default function ApproachImpact() {
    const data = [
        {
            heading: "Sustainable Sourcing",
            paragraph: "Description of sourcing strategies",
        },
        {
            heading: "Carbon Footprint Reduction",
            paragraph: "Methods to reduce carbon emissions.",
        },
        {
            heading: "Efficient Logistics",
            paragraph: "Optimization of logistics and transportation",
        },
        {
            heading:"Risk Management",
            paragraph:"Strategies for managing supply chain risks",
        }
    ];
    return (
        <>
            <div className='approach-box'>
                <h4 className='supply-heading'>Our Approach</h4>
                <h6 className='mt-4'>Our Approach to Sustainable Supply Chains</h6>
            </div>
            <div className="layout-section">
                <div className='row'>
                    {
                        data.map((data, index) => (
                            <div className='col-lg-6' key={index}>
                                <div className="chain-card">
                                    <div className="chain-text">
                                        <h5>{data.heading}</h5>
                                        <p className='chain-description'>{data.paragraph}</p>
                                    </div>

                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

        </>

    )
}
