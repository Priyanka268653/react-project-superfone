import React from "react";
import "./CTASection.css";

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-left">
          <h1>Take full control over business & customer data</h1>
          <h3>Number Masking to protect customer privacy and data theft</h3>
          <h3>User permission controls</h3>
          <h3>Monitor calls from anywhere from the app, or your laptop</h3>
        </div>
        <div className="cta-right">
          <img
            src="https://static.wixstatic.com/media/17ea73_ce3215cd8b5642258abf370d8fee9adf~mv2.png/v1/fill/w_485,h_592,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/data%20protection.png"
            alt="Data Protection"
          />
        </div>
      </div>
    </section>
  );
}

export default CTASection;
