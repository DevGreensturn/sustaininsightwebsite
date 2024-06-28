import Image from 'next/image';
import React, { useState } from 'react';

export default function NewsCardMap() {
    const cardmap = [
        {
            image: "/Images/news/card1.png",
            heading: "Starting Pilot Projects with Ministry of Energy & Infrastructure, DAMAC,.....",
            description: "Our membership management software provides full automation of membership renewals and payments",
        },
        {
            image: "/Images/news/card2.png",
            heading: "Starting Pilot Projects with Ministry of Energy & Infrastructure, DAMAC,.....",
            description: "Our membership management software provides full automation of membership renewals and payments",
        },
        {
            image: "/Images/news/card3.png",
            heading: "Starting Pilot Projects with Ministry of Energy & Infrastructure, DAMAC,.....",
            description: "Our membership management software provides full automation of membership renewals and payments",
        },
        {
            image: "/Images/news/card1.png",
            heading: "New Project with Tech Giants",
            description: "We are excited to announce a new collaboration with leading tech companies to enhance our services.",
        },
        {
            image: "/Images/news/card2.png",
            heading: "Innovative Solutions for Smart Cities",
            description: "Our latest solutions aim to revolutionize urban living with cutting-edge technology.",
        },
        {
            image: "/Images/news/card3.png",
            heading: "Expanding Our Global Reach",
            description: "We are expanding our operations to new international markets.",
        },
    ];

    const [visibleCards, setVisibleCards] = useState(3);

    const showMoreCards = () => {
        setVisibleCards(prevVisibleCards => Math.min(prevVisibleCards + 3, cardmap.length));
    };

    const showLessCards = () => {
        setVisibleCards(prevVisibleCards => Math.max(prevVisibleCards - 3, 3));
    };

    return (
        <div className='layout-section'>
            <div className='row'>
                {cardmap.slice(0, visibleCards).map((data, index) => (
                    <div className='col-lg-4' key={index}>
                        <div className="newscard-layout">
                            <div>
                                {data.image && <Image src={data.image} alt={data.heading} width={400} height={200} className='w-100' />}
                            </div>
                          
                            <div className='card-description'>
                            <div>
                           <h5 className='insight-class'>Insight</h5> 
                            </div>
                                <h6 className='card-head'>{data.heading}</h6>
                                <p className='card-bottom'>{data.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='button-group'>
                {visibleCards < cardmap.length && (
                    <div onClick={showMoreCards} className='show-button'>
                        Show More
                    </div>
                )}
                {visibleCards > 3 && (
                    <div onClick={showLessCards} className='show-button'>
                        Show Less
                    </div>
                )}
            </div>
        </div>
    );
}
