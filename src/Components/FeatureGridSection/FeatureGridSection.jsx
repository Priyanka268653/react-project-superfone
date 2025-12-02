import React from "react";
import { 
  FiUsers,          // Shared Number
  FiMusic,          // Sound Professional
  FiBell,           // Zero Missed Calls
  FiBarChart2,      // Boost Google Profile
  FiGift,           // Delight Customers
  FiTrendingUp      // Marketing Ready
} from "react-icons/fi";
import "./FeatureGridSection.css";

function FeatureGridSection() {
  const cards = [
    {
      title: "Shared Number = More Calls",
      desc: "Share a number with your team and handle up to 10 calls at once",
      icon: <FiUsers />
    },
    {
      title: "Sound Professional",
      desc: "Greet customers with AI Caller Tunes that reflect your brand",
      icon: <FiMusic />
    },
    {
      title: "Zero Missed Calls",
      desc: "Answer every call that your team misses with AI Missed Call Agent",
      icon: <FiBell />
    },
    {
      title: "Boost Google Profile",
      desc: "Manage your reviews & business reputation with AI Google Review Assistant",
      icon: <FiBarChart2 />
    },
    {
      title: "Delight Customers",
      desc: "Use AI Festival Tunes to greet customers for festivals of your choice",
      icon: <FiGift />
    },
    {
      title: "Marketing Ready",
      desc: "Create branded marketing material in seconds with AI Marketing Assistant",
      icon: <FiTrendingUp />
    }
  ];

  return (
    <section className="featuregrid-section">
      <div className="featuregrid-container">
        {cards.map((card, index) => (
          <div className="featuregrid-card" key={index}>
            <div className="featuregrid-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
      <div className="featuregrid-btn-container">
        <button className="featuregrid-btn">Register for Trial →</button>
      </div>
    </section>
  );
}

export default FeatureGridSection;
