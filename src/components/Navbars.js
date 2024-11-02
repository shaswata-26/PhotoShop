import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/images/Logo.JPG" alt="Logo" className="logo" />
        <span className="logo-text">Logo</span>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Features</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/community">Community</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
      </ul>
      <div className="auth-buttons">
        <button className="btn-login">Login</button>
        <button className="btn-register">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
