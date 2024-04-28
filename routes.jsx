// src/routes.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUsPage from "./components/AboutUs.jsx";
import LandingPage from "./components/LandingPage.jsx";
import OurSolutions from "./components/OurSolutions.jsx";
import OurTeam from "./components/OurTeam.jsx";

const Routting = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/ourSolutions" element={<OurSolutions />} />
        <Route path="/ourTeam" element={<OurTeam />} />
      </Routes>
    </Router>
  );
};

export default Routting;
