import React from "react";
import "./FeatureSection.css";

function FeatureSection() {
  return (
    <section className="feature-section">
      <div className="feature-background">
        <div className="feature-container">

          {/* LEFT SIDE CONTENT CARD */}
          <div className="feature-left card">
            <h1>Create a great impression, on every call!</h1>
            <h3>AI Business Caller Tune ✨</h3>
            
              <h3>Out of office tune</h3>
              <h3>IVR and call transfer</h3>
              <h3>Festival Caller Tunes 🎉</h3>
           
          </div>

          {/* RIGHT SIDE IMAGE (No card) */}
          <div className="feature-right">
            <img
              src="https://static.wixstatic.com/media/27b8f8_e83f9cfae5b04670af57d610a7f240ae~mv2.png/v1/fill/w_490,h_503,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/27b8f8_e83f9cfae5b04670af57d610a7f240ae~mv2.png"
              alt="Superfone Feature"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
