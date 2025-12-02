import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="footer-left">
          <h2 className="footer-brand">Superfone</h2>
          <div className="footer-social">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
          </div>
        </div>
      </div>

      <div className="footer-center">
        <a href="#">Fair Usage Policy</a>
        <span>|</span>
        <a href="#">Privacy Policy</a>
        <span>|</span>
        <a href="#">Terms & Conditions</a>
      </div>

      <div className="footer-info">
        <p>Superfone is a brand fully owned by Truegrit Technologies Pvt. Ltd.</p>
        <p>
          All third party logos used belong to their respective legal owners. Their usage doesn't indicate any association or claim.
        </p>
        <p>
          Google Play and the Google Play logo are trademarks of Google LLC.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
