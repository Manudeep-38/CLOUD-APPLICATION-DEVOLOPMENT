import React from 'react';
import './Services.css'; // Optional: Add styles if you have a CSS file for Services

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-list">
        <div className="service-item">
          <h3>Fleet Management</h3>
          <p>
            Optimize and monitor your fleet operations with real-time tracking,
            maintenance scheduling, and detailed performance analytics.
          </p>
        </div>
        <div className="service-item">
          <h3>Cargo Tracking</h3>
          <p>
            Stay updated on your shipment's location with our advanced cargo
            tracking system, ensuring timely and safe delivery.
          </p>
        </div>
        <div className="service-item">
          <h3>Route Optimization</h3>
          <p>
            Minimize costs and maximize efficiency with intelligent route
            planning and optimization services tailored to your needs.
          </p>
        </div>
        <div className="service-item">
          <h3>Custom Transport Solutions</h3>
          <p>
            We provide customized logistics solutions to meet your unique
            requirements, ensuring seamless and reliable service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
