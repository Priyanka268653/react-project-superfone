import React from "react";
import "./NextSection.css";

function NextSection() {
  return (
    <section className="next-section">

      <h1 className="next-heading">
    🎥 Watch Superfone in action - just 90 seconds
      </h1>

      <div className="next-images">
        <img 
          src="https://static.wixstatic.com/media/17ea73_55753a27699d419ab4194c689452b5e1~mv2.png/v1/fill/w_293,h_175,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/17ea73_55753a27699d419ab4194c689452b5e1~mv2.png" 
          alt="Superfone Feature 1" 
        />

        <img 
          src="https://static.wixstatic.com/media/17ea73_13162b002fa8452a889db6e5780def0f~mv2.png/v1/fill/w_296,h_175,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/17ea73_13162b002fa8452a889db6e5780def0f~mv2.png" 
          alt="Superfone Feature 2" 
        />
      </div>
       {/* ⭐ Center Button */}
      <div className="next-bottom-btn">
        <button>REGISTER FOR TRIAL ➜ </button>
      </div>

    </section>
  );
}

export default NextSection;
