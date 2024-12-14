import React from "react";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="logo">Stone World</div>
    <nav>
      <ul>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
