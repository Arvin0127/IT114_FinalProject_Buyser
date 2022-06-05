import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import About from './About';
import Portfolio from "./Portfolio";
import Contact from './Contact';
import Resume from './Resume';
import Home from './Home';

import { AnimatePresence } from "framer-motion";
function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="resume" element={<Resume />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}
export default AnimatedRoutes