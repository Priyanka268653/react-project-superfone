import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import HeroSection from "./Components/HeroSection/HeroSection.jsx";
import NextSection from "./Components/HeroSection/NextSection.jsx";
import IndustriesSection from "./Components/IndustriesSection/IndustriesSection.jsx";
import BusinessSection from "./Components/BusinessSection/BusinessSection.jsx";
import FeatureSection from "./Components/FeatureSection/FeatureSection.jsx";
import CTASection from "./Components/CTASection/CTASection.jsx";
import NextFeatureSection from "./Components/NextFeatureSection/NextFeatureSection.jsx";
import AddOnsSection from "./Components/AddOnsSection/AddOnsSection.jsx";
import FeatureGridSection from "./Components/FeatureGridSection/FeatureGridSection.jsx";
import LicensedSection from "./Components/LicensedSection/LicensedSection.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import LoginPage from "./pages/LoginPage.jsx";
import Signup from "./pages/Signup/Signup.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />    {/* <-- GLOBAL (every page) */}
      
      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <NextSection />
              <IndustriesSection />
              <BusinessSection />
              <FeatureSection />
              <CTASection />
              <NextFeatureSection />
              <AddOnsSection />
              <FeatureGridSection />
              <LicensedSection />
            </>
          }
        />

        {/* LOGIN PAGE */}
        <Route 
          path="/login" 
          element={<LoginPage />} 
        />

        {/* SIGNUP PAGE */}
        <Route 
          path="/signup" 
          element={<Signup />} 
        />

      </Routes>

      <Footer />   {/* <-- GLOBAL Footer */}
    </BrowserRouter>
  );
}

export default App;

