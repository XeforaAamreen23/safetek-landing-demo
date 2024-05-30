// src/pages/LandingPage.js
import React from 'react';
import './LandingPage.css';
import HeroBanner from '../HeroBanner';
import OurService from '../OurService';
import Contact_sec from '../Contact_sec';
import WhyUs from '../WhyUs';
import TimeLineVertical from '../TimeLineVertical';
import GetInTouch from '../GetInTouch';



function LandingPage()  {
    return (
        <div>
            <HeroBanner />
            <OurService />
            <Contact_sec />
            <WhyUs />
            <TimeLineVertical />
            <GetInTouch />
        </div>
    );
};

export default LandingPage;
