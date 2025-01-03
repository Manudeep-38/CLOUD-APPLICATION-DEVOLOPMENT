import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Pages from "./pages/Pages";
import PricingPlan from './pages/PricingPlan';
import Features from './pages/Features';
import FreeQuote from './pages/FreeQuote';
import OurTeam from './pages/OurTeam';
import Testimonial from './pages/Testimonial';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Services from './services/Services';
import './App.css';
import About from "./pages/About";

const App = () => {
    return (
        <Router>
            <div id="root"> {/* Flex container for the whole app */}
                <Pages />
                <main>
                    <Routes>
                        {/* Parent route for Pages */}
                        <Route path="/pages" element={<Pages />}>
                            {/* Nested routes for different pages */}
                            <Route path="pricing-plan" element={<PricingPlan />} />
                            <Route path="features" element={<Features />} />
                            <Route path="free-quote" element={<FreeQuote />} />
                            <Route path="our-team" element={<OurTeam />} />
                            <Route path="testimonial" element={<Testimonial />} />
                            <Route path="404" element={<NotFound />} />
                            
                        </Route>

                        {/* Other routes */}
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
