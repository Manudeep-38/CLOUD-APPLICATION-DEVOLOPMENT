import React from 'react';
import './Hero.css'; // Import the CSS file for the Hero Section



const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1>
                    Transport & Logistics Solution
                </h1>
                <h2>
                    #1 Place For Your <span className="highlight">Logistics</span> Solution
                </h2>
                <p>
                    Global Coverage, On-Time Delivery
                </p>
                <button className="cta-button">Learn More</button>
            </div>
        </div>
    );
};

export default Hero;
