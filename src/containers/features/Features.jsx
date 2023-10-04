import React from 'react';
import feature_1 from "../../assets/feature_1.png";
import feature_2 from "../../assets/feature_2.png";
import feature_3 from "../../assets/feature_3.png";
import feature_4 from "../../assets/feature_4.png";
import feature_5 from "../../assets/feature_5.png";

import "./features.css";

const Features = () => {
  return (
    <div className="features">
        <div className="feature-1">
          <img src={feature_1} alt="feature_1" />
          <p>TROCKENBAU</p>
        </div>
        <div className="feature-2">
          <img src={feature_2} alt="feature_2" />
          <p>RAUMAKUSTIK</p>
        </div>
        <div className="feature-3">
          <img src={feature_3} alt="feature_3" />
          <p>RAUMAUFTEILUNG</p>
        </div>
        <div className="feature-4">
          <img src={feature_4} alt="feature_4" />
          <p>DECKENGESTALTUNG</p>
        </div>
        <div className="feature-4">
          <img src={feature_5} alt="feature_5" />
          <p>BODENBELEGE</p>
      </div>
    </div>
  )
}

export default Features
