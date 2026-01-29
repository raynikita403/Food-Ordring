import React from "react";
import "../../styles/AboutBanner.css";

const MissionSection = () => {
  return (
    <div className="mission-section position-relative">
      {/* Transparent overlay */}
      <div className="overlay position-absolute w-100 h-100"></div>

      {/* Overlapping content box */}
      <div className="container content-box position-relative">
        <div className="row text-warning fw-bold">
          <div className="col-md-6 mb-3">
            <div className="box-item p-4">Mission
                <p className="text-dark fs-6 fw-light">To make every meal accessible and delightful by connecting <br /> people with the food they love, wherever they are.</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="box-item p-4">Vision
                <p className="text-dark fs-6 fw-light">To be the most trusted and convenient food delivery platform, redefining how people experience food every day.</p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="box-item p-4">Values
                <p className="text-dark fs-6 fw-light">Customer First – We prioritize customer satisfaction and convenience.
                Innovation – We leverage technology to make food delivery seamless.
               </p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="box-item p-4">Philosophy
                <p className="text-dark fs-6 fw-light">We believe great food brings people together. By combining technology, logistics, and a passion for quality, we aim to enhance everyday moments with convenience and joy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
