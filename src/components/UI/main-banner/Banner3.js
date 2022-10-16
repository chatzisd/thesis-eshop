import React from "react";
import "./Banner1.css";
import bannerImage from "../../../assets/banners/banner_03_polygon.jpg";

const Banner = () => {
  return (
    <div
      className="banner-container"
      style={{
        backgroundImage: "url(" + bannerImage +")",
        // height: "500px",
        height: "65vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="banner-wrapper">
        
      </div>
    </div>
  );
};

export default Banner;
