import React from 'react';
import about_img from "../../assets/about_img.png"
import stars from "../../assets/Stars Minimalistic.png"
import clock from "../../assets/Clock Circle.png"
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-top-left">
          <div className="about-top-left-top">
            <h1>ÜBER UNS</h1>
            <h3>ÜBER UNS</h3>
          </div>
          <div className="about-top-left-bottom">
            <p>Willkommen auf der Webseite der Baudekoration <strong>Erkan Kenan</strong> in Waldaschaff – Ihre <strong>zuverlässigen</strong> Trockenbau Handwerker am Untermain und Umgebung. Über 10 Jahre Erfahrung im Trockenbau und zahlreiche <strong>zufriedene Kunden</strong> sprechen für uns! <br /> <br /> Unser Motto: <strong>„Alles aus einer Hand“</strong> – unsere umfangreichen Leistungen umfassen den schlüsselfertigen <strong>Innenausbau</strong> Ihrer Immobilie genauso wie die <strong>termingerechte</strong> ausführung aller Arten rund ums Haus.
            </p>
            <p className="mehr_erfahren"><br />mehr erfahren...</p>
          </div>
        </div>
        <div className="about-top-right">
          <img src={about_img} alt="about_img" />
        </div>
      </div>
      <div className="about-bottom">
        <div className="feature-1">
          <h1>+10</h1>
          <p>JAHRE<br />ERFAHRUNG</p>
        </div>
        <div className="feature-2">
          <h1>+100</h1>
          <p>ZUFRIEDENE<br />KUNDEN</p>
        </div>
        <div className="feature-3">
          <img src={stars} alt="stars" />
          <p>PERFEKTE<br />LEISTUNGEN</p>
        </div>
        <div className="feature-4">
          <img src={clock} alt="clock" />
          <p>PÜNTLICHE<br />LIEFERUNG</p>
        </div>
      </div>
    </div>
  )
}

export default About
