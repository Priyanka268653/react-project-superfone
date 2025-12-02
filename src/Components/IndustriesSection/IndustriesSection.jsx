import React from "react";
import "./IndustriesSection.css";

function IndustriesSection() {
  return (
    <section className="industries-section">
      <h2>Trusted by businesses across all industries</h2>

      <div className="industries-card">

        <div className="industries-right">
          <ul>
            <li><span className="icon">🏢</span> Real estate</li>
            <li><span className="icon">🛍️</span> Offline retail</li>
            <li><span className="icon">🏨</span> Hospitality</li>
            <li><span className="icon">🧑‍⚕️</span> Healthcare</li>
            <li><span className="icon">🎓</span> Education</li>
            <li><span className="icon">🚗</span> Automobile</li>
          </ul>

          <ul>
            <li><span className="icon">🏭</span> Manufacturing</li>
            <li><span className="icon">🛋️</span> Interior design</li>
            <li><span className="icon">🛒</span> E-Commerce</li>
            <li><span className="icon">💰</span> Financial services</li>
            <li><span className="icon">📣</span> Digital marketing</li>
            <li><span className="icon">💼</span> Freelancers</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default IndustriesSection;
