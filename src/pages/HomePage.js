import React from "react";
import Header from "../components/UI/header/Header";
import Banner from "../components/UI/main-banner/Banner1";
import Slider from "../components/UI/slider/Slider";
import banner1 from "../assets/banners/BANNER_1.jpg";
import banner2 from "../assets/banners/banner_b2o.jpg";
import banner3 from "../assets/banners/banner_03_polygon.jpg";

const ImageData = [
  {
    image:
      banner1
  },
  {
    image: 
      banner2
  },
  {
    image: 
      banner3
  }
];

const HomePage = () => {
  return (
    <div>
      <Header />
      {/* <Banner /> */}
      <Slider />
    </div>
  );
};

export default HomePage;
