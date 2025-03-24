import React from "react"
import './Navbar.css'
import logo from '../assets/logo_placeholder.png'
import cart from '../assets/shopping-cart-line.svg'

function Navbar() {
    return <div className="navbar">
        <div className="nav-logo">
            <a href="#">
                <img src={logo} alt="" />
            </a>
        </div>
        <ul className="nav-links">
            <li className="link"><a href="#">Home</a></li>
            <li id="featureLink" className="link"><a href="#">Features</a></li>
            <li id="priceLink" className="link"><a href="#">Pricing</a></li>
            <li id="aboutLink" className="link"><a href="#">About</a></li>
        </ul>
        <div className="nav-login-cart">
            <button className="btn">Login</button>
            <a href="#">
                <img src={cart} alt="" />
            </a>
        </div>
    </div>
}

export default Navbar