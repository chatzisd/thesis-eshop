import React from "react";
import Header from "../components/UI/header/Header";
import Slider from "../components/UI/slider/Slider";
import banner1 from "../assets/banners/BANNER_1.jpg";
import banner2 from "../assets/banners/banner_b2o.jpg";
import banner3 from "../assets/banners/banner_03_polygon.jpg";
import Card from "../components/UI/product-categories/CardProduct";

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
      <Slider />
      <Card />
    </div>
  );
};

export default HomePage;
