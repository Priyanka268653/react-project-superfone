import React from "react";
import "./BusinessSection.css";
import { FaPhoneAlt, FaSimCard, FaUsers } from "react-icons/fa";

function BusinessSection() {
  const features = [
    {
      title: "Share One Number",
      desc: "Handle multiple calls. Entire team can receive calls using your business SIM number.",
      note: "Customers call the business number, not personal numbers of staff.",
      icon: <FaPhoneAlt />
    },
    {
      title: "SIM Cards",
      desc: "Outgoing calls can only be made from the phone the SIM is in.",
      icon: <FaSimCard />
    },
    {
      title: "Superfone Virtual Number",
      desc: "All team members can make outgoing calls from the same number at the same time.",
      icon: <FaUsers />
    }
  ];

  return (
    <section className="business-section">
      <div className="business-center">
        <h1>A Business Phone App made for business growth 🚀</h1>
      </div>

      <div className="business-container">
        <div className="business-left">
          {features.map((feature, index) => (
            <div className="business-card" key={index}>
              <div className="card-icon">{feature.icon}</div>
              <h2>{feature.title}</h2>
              <p className="card-desc">{feature.desc}</p>
              {feature.note && <p className="card-note">{feature.note}</p>}
            </div>
          ))}
        </div>

        <div className="business-right">
          <img 
            src="https://static.wixstatic.com/media/17ea73_010366e86fcb4170bea76c34156e3f42~mv2.png/v1/crop/x_105,y_21,w_619,h_759/fill/w_500,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/flagship.png" 
            alt="Business Illustration" 
          />
        </div>
      </div>
    </section>
  );
}

export default BusinessSection;
