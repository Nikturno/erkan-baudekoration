import React from 'react';
import logo_new from "../../assets/logo_new.png"
import header from "../../assets/header_img.png"
import "./header.css";

const Header = () => {
  return (
  <section id="home">
    <div className="header">
        <div className="header-container">
          <div className="header-container-links">
            <img src={logo_new} alt="logo" />
          <div className="header-container-links-text">
            <h1>Ihr Spezialist für alle Trockenbauarbeiten</h1>
            <h3>Baudekoration am Untermain und Umgebung</h3>
          </div>
        </div>
          <img src={header} alt="header" />
      </div>
    </div>
  </section>
  )
}

export default Header
