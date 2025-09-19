import React from "react";
import "./Hero.css";
import shoppingCart from "../assets/shoppingCart.png";

export default function Hero() {
  return (
    <div className="container">
      <div className="hero-left">
        <h1>
          DO YOU WANT TO BUY SOME <span>CHEAP</span> STUFF?
        </h1>
        <h3>Welcome to this wonderful e-commerce site</h3>
        <button className="hero-left-btn">Shop Now</button>
      </div>
      <div className="hero-right">
        <img src={shoppingCart} alt="" />
      </div>
    </div>
  );
}
