import React from 'react';
import { Link } from "react-router-dom";
import logo_white from "../../assets/logo_white.svg";
import "./footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <img src={logo_white} alt="" />
        <p className="copyright">© 2023 Erkan Baudekoration</p>
        <div className="footer-links">
          <p><Link to="/">Startseite</Link></p>
          <p><Link to="/agb">Datenschutz</Link></p>
          <p><Link to="/imp">Impressum</Link></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
