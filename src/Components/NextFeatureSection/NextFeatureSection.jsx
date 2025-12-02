import React from "react";
import "./NextFeatureSection.css";

function NextFeatureSection() {
  return (
    <section className="nextfeature-section">
      <div className="nextfeature-container">
        <div className="nextfeature-left">
          <h1>Never forget a customer’s request again. Win them!</h1>
            <h3>Auto call-recording - review calls to catch missed details, and close deals faster.</h3>
            <h3>Tags, Notes, Reminders - follow-up on time and win loyal customers</h3>
            <h3>Quick Messages - share links, catalog, product info, super fast ⚡️</h3>
        </div>
        <div className="nextfeature-right">
          <img 
            src="https://static.wixstatic.com/media/17ea73_de2140da0aca4bcc85ee514cd8184fdd~mv2.png/v1/fill/w_485,h_592,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/notes%20reminders%20tags.png" 
            alt="Notes Reminders Tags"
          />
        </div>
      </div>
    </section>
  );
}

export default NextFeatureSection;
