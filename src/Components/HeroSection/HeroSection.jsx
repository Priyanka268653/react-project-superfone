import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>India's first AI-ready business phone number</h1>
        <h3>From winning customers to looking professional - every aspect powered by AI</h3>
        <b>Get started at just ₹199 p.m</b>
        <div className="hero-buttons">
          <button className="hero-btn">REGISTER FOR TRIAL</button>
          <button className="hero-btn-outline">PLANS & PRICING</button>
        </div>
      </div>

      <div className="hero-right">
        <img src="https://static.wixstatic.com/media/17ea73_bc8bd8d9c0d849da9e940d693bafabc3~mv2.png/v1/crop/x_0,y_0,w_1811,h_2077/fill/w_269,h_309,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/www%20flagship%20(2).png" alt="Hero Image" />
      </div>
    </section>
  );
}

export default HeroSection;
