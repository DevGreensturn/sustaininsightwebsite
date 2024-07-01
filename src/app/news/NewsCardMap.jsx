"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import style from "../styles/news-style/news-section.css";

export default function NewsCardMap() {
    const cardmap = [
        {
            image: "/Images/news/card1.png",
            heading: "Integration of the SDGs into National Planning",
            description: "The e-learning course provides support to policy makers and sustainable development practitioners in designing strategies and plans to implement the 2030 Agenda on Sustainable Development and the SDGs in a integrated and holistic manner.",
        },
        {
            image: "/Images/news/card2.png",
            heading: "Green Marketing Challenge",
            description: "Nowadays, consumers are becoming more conscious of the impact that their consumption choices can have on the environment. Therefore, they are looking for better product options to reduce their environmental footprint.",
        },
        {
            image: "/Images/news/card3.png",
            heading: "Impact Measurement & Management for the SDGs",
            description: "How can businesses and investors help fill the multi-trillion-dollar gap needed for sustainable development? Simply put: by incorporating sustainability and social impact factors on people and planet into management decisions.",
        },
        {
            image: "/Images/news/card1.png",
            heading: "Digital4Sustainability Learning Path",
            description: "The Digital4Sustainability Learning Path explores the transformational role digital solutions and innovations can play in advancing environmental and social sustainability. In particular, how can digital technologies power the green transition, and how can the digital transition be green?.",
        },
        {
            image: "/Images/news/card2.png",
            heading: "What is the Net-Zero Standard:",
            description: "In this 20-minute, interactive e-learning course delivered by the UN Global Compact Academy and the Science Based Targets initiative, you will learn about the Net-Zero Standard and receive guidance on how to set science-based net-zero targets consistent with limiting global temperature rise to 1.5C.",
        },
        {
            image: "/Images/news/card3.png",
            heading: "Setting Science-Based Targets to Achieve Net-Zero:",
            description: "This Academy e-learning course will guide you in the process of setting a science-based target in support of a net-zero future. It will also offer an opportunity to hear from other companies about why they think setting science-based targets makes good business sense.",
        },
        {
            image: "/Images/news/card3.png",
            heading: "Sustainable Consumption and Production in Africa",
            description: "To support the efforts of African countries to actively engage in the transition to an inclusive green economy, and the promotion of a shift to sustainable consumption and production (SCP) patterns.",
        },
        {
            image: "/Images/news/card3.png",
            heading: "Introduction to risk-informed, conflict-sensitive and peacebuilding programming:",
            description: "The course covers theoretical concepts and organizational procedures on risk-informed, conflict-sensitive and peacebuilding programming.",
        },
    ];

    const [showFullText, setShowFullText] = useState(Array(cardmap.length).fill(false));

    const toggleText = (index) => {
        setShowFullText(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div className='layout-section'>
            <div className='row'>
                {cardmap.map((data, index) => (
                    <div className='col-lg-4' key={index}>
                        <div className="newscard-layout mt-4">
                            <div>
                                {data.image && <Image src={data.image} alt={data.heading} width={400} height={200} className='w-100' />}
                            </div>
                            <div className='card-description'>
                                <div>
                                    <h5 className='insight-class'>Insight</h5>
                                </div>
                                <h6 className='card-head'>{data.heading}</h6>
                                <p className='card-bottom'>
                                    {showFullText[index] ? data.description : `${data.description.substring(0, 90)}...`}
                                </p>
                                <div className='show-button' onClick={() => toggleText(index)}>
                                    {showFullText[index] ? "Show Less" : "Show More"}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
