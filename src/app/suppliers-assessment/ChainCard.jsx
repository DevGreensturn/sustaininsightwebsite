import React from 'react';
import styles from "../styles/our_impact.css";

export default function ChainCard() {
    const data = [
        {
            heading: "Environmental  Regulations",
            paragraph: "Compliance with increasing environmental regulations and standards.",
        },
        {
            heading: "Supply Chain Disruptions",
            paragraph: "Disruptions caused by natural disasters, geopolitical issues, and pandemics.",
        },
        {
            heading: "Technological Adaptation",
            paragraph: "Rapid technological changes requiring constant updates and adaptations.",
        }
    ];
    return (
        <>
            <div className='d-flex justify-center mt-4'>
                <h4 className='supply-heading'>Challenges in Sustainable
                    <br />
                    Supply Chains </h4>
            </div>
            <div className="layout-section">
                <div className='row'>
                    {
                        data.map((data, index) => (
                            <div className='col-lg-4' key={index}>
                                <div className="chain-card">
                                    <div className="chain-text">
                                        <h5 className='chain-heading' >{data.heading}</h5>
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
