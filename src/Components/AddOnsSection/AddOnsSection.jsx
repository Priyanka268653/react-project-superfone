import React from "react";
import "./AddOnsSection.css";

function AddOnsSection() {
  return (
    <section className="addons-section">
      <div className="addons-container">
        <div className="addons-left">
          <h1>India's only All-in-One CRM:</h1>
          <h1>Do more, with powerful add ons</h1>
          <h3>⚡ Buy business software add-ons* like Lead Integration, CRM, Whatsapp API when you need them</h3>
          <h3>🤖 Powerful Automations in minutes!</h3>
          <h3>✅ Avoid multiple apps. Avoid confusion.</h3>
          <h3>💰 *Extra charges applicable for add-ons. Check pricing.</h3>
        </div>
        <div className="addons-right">
          <img
            src="https://static.wixstatic.com/media/17ea73_f336d37f9416471aa414ff698ed8e925~mv2.png/v1/fill/w_485,h_592,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1x%20Add-ons.png"
            alt="Add-ons"
          />
        </div>
      </div>
    </section>
  );
}

export default AddOnsSection;
