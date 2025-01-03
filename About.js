import React from 'react';
import './About.css';
import '../assets/about.jpg';

const About = () => {
    return (
        <div>
            {/* Header */}

            {/* About Section */}
            <section className="about-us">
                <div className="about-content">
                    <h2>Quick Transport and Logistics Solutions</h2>
                    <p>
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                        Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
                    </p>
                    <div className="features">
                        <div className="feature">
                            <span role="img" aria-label="global">🌐</span>
                            <h3>Global Coverage</h3>
                            <p>Stet stet justo dolor sed duo.</p>
                        </div>
                        <div className="feature">
                            <span role="img" aria-label="delivery">🚚</span>
                            <h3>On Time Delivery</h3>
                            <p>Stet stet justo dolor sed duo.</p>
                        </div>
                    </div>
                </div>
                <div className="image">
    <img className="about-image" src="/assets/about.jpg" alt="Delivery Boxes" />
</div>

            </section>

            {/* Footer */}
            <footer>
                <p>&copy; 2025 Logistica. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default About;
