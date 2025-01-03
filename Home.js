import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <nav>
            <h1>Welcome to Transport & Logistics Solutions</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shipments">Shipments</Link></li>
                    <li><Link to="/add-shipment">Add Shipment</Link></li>
                   
                </ul>
            </nav>

            <p>Global Coverage, On-Time Delivery.</p>
        </div>
    );
};

export default Home;
