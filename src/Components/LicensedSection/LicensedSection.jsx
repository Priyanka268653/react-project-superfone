import React from "react";
import "./LicensedSection.css";

function LicensedSection() {
  return (
    <section className="licensed-section">
      <div className="licensed-container">
        <div className="licensed-icon">
          <img
            src="https://static.wixstatic.com/media/17ea73_552f3dc218b44b34abaa3f820b9efab1~mv2.png/v1/fill/w_122,h_122,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Icon-removebg-preview.png"
            alt="Licensed Icon"
          />
        </div>
        <h1>Licensed by DoT Secure & compliant.</h1>
        <p>
          Our company operates under official telecom licenses issued by the
          Department of Telecommunications - so that your business calls are
          secure and compliant.
        </p>
        <div className="licensed-btn-container">
          <button className="licensed-btn">Start Trial with 100% Trust →</button>
        </div>
      </div>
    </section>
  );
}

export default LicensedSection;
