import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from "../../assets/logo_white.svg"
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links-logo">
        <img src={logo} alt="logo" />
      </div>
        <div className="navbar-links">
          <div className="navbar-links-container">
            <p><Link to="/">test</Link></p>
            <p><Link to="/feature">LEISTUNGEN</Link></p>
            <p><Link to="/about">ÜBER UNS</Link></p>
            <p><Link to="/imp">IMPRESSUM</Link></p>
            <p><Link to="/#contact">KONTAKT</Link></p>
          </div>
        </div>
        <div className="navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
          <div className="navbar-menu-container scale-up-center">
            <div className="navbar-menu-container-links">
            <p><Link to="/">STARTSEITE</Link></p>
            <p><Link to="/feature">LEISTUNGEN</Link></p>
            <p><Link to="/about">ÜBER UNS</Link></p>
            <p><Link to="/imp">IMPRESSUM</Link></p>
            <p><Link to="/#contact">KONTAKT</Link></p>
              </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
