import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
    <><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
    <div class="contact">
      <div class="box">
        <div class="content">
          <div class="left-side">
            <div class="address details">
              <i class="fas fa-map-marker-alt"></i>
              <div class="topic">Adresse</div>
              <div class="text-one">Fuggerstraße 11</div>
              <div class="text-two">63857, Waldaschaff</div>
            </div>
            <div class="phone details">
              <i class="fas fa-phone-alt"></i>
              <div class="topic">Telefon</div>
              <div class="text-one">0151 20007751</div>
            </div>
            <div class="email details">
              <i class="fas fa-envelope"></i>
              <div class="topic">Email</div>
              <div class="text-one">k.erkan@gmx.de</div>
            </div>
          </div>
          <div class="right-side">
          <iframe className="google-maps"
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.9552950120355!2d9.30131337751185!3d49.97469692150362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd4a78748d424b%3A0xeea26e5f7c153ca6!2sFuggerstra%C3%9Fe%2011%2C%2063857%20Waldaschaff!5e0!3m2!1sde!2sde!4v1695497237441!5m2!1sde!2sde"
            width="1500"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
        </div>
      </div>
    </div></>
    </section>
    
  )
}

export default Contact