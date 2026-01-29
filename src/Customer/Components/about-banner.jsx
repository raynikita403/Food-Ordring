import React from "react";
import "../../styles/AboutBanner.css";

const AboutBanner = () => {
  return (
    <div className="about-banner d-flex align-items-center text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="text-white mb-4 fs-3">
             Order what you love. <br />
             We’ll bring it to you.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
