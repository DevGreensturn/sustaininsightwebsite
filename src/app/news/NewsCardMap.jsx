import Image from 'next/image';
import React from 'react'

export default function NewsCardMap() {

    const cardmap = [
        {
            image:"/Images/news/card1.png",
            heading: "Starting Pilot Projects with Ministry of Energy & Infrastructure, DAMAC, and Dubai Municipality.",
            description: "Our membership management software provides full automation of membership renewals and payments",
        },
        {
            image:"/Images/news/card2.png",
            heading: "Starting Pilot Projects with Ministry of Energy & Infrastructure, DAMAC, and Dubai Municipality.",
            description: "Our membership management software provides full automation of membership renewals and payments",
        },
        {
            image:"/Images/news/card3.png",
            heading: "Starting Pilot Projects with Ministry of Energy & Infrastructure, DAMAC, and Dubai Municipality.",
            description: "Our membership management software provides full automation of membership renewals and payments",
        },
    ];


    return (
        <div className='layout-section'>
            <div className='row'>
                {cardmap.map((data, index) => (
                    <div className='col-lg-4' key={index}>
                        <div> {data.image && <Image src={data.image} alt={data.heading} width={400} height={300} className='w-100'/>}
                            </div>
                        <h5>{data.heading}</h5>
                        <p>{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

