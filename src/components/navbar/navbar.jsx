import React from "react";
import "./Navbar.css";
import logo from "../assets/logo_placeholder.png";
import cart from "../assets/shopping-cart-line.svg";
import user from "../assets/user-line.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <a href="#">
          <img src={logo} alt="" />
        </a>
      </div>
      <ul className="nav-links">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li id="featureLink" className="link">
          <a href="#">Features</a>
        </li>
        <li id="priceLink" className="link">
          <a href="#">Pricing</a>
        </li>
        <li id="aboutLink" className="link">
          <a href="#">About</a>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <img src={user} alt="" />
        </Link>
        <Link to="/cart" className="nav-cart">
          <img src={cart} alt="" />
          <div className="nav-cart-count">0</div>
        </Link>
      </div>
    </div>
  );
}
