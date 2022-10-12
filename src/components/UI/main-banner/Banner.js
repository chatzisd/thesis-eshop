import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      className="banner-container"
      style={{
        backgroundImage: "url(/images/BANNER_1.jpg)",
        // height: "500px",
        height: "65vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="banner-wrapper">
        <div className="cpu d-flex justify-content-center align-items-center">
          <a href="#">CPU</a>
        </div>
        <div className="ram d-flex justify-content-center align-items-center">
          <a href="#">RAM</a>
        </div>
        <div className="b2o d-flex justify-content-center align-items-center text-align-center">
          <a href="#">BUILD 2 ORDER</a>
        </div>
        <div className="case d-flex justify-content-center align-items-center">
          <a href="#">CASE</a>
        </div>
        <div className="accessories d-flex justify-content-center align-items-center">
          <a href="#">ACCESSORIES</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
