import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom"; // import Link

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>User Login</h2>

        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="bottom-text">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
