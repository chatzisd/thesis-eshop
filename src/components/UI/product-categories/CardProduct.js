import React from "react";
import "./Card.css";
import CatImage from "../../../assets/images/cat.png";
import CatImage2 from "../../../assets/images/cat2.jpg";
import MyCard from "./MyCard";
import Arrows from "./Arrows";

const CardProduct = () => {
  return (
    <div className="mycontainer">
      <MyCard src={CatImage} title="Cat 1" cardText="Hello" buttonText="Mew" />
      <MyCard
        src={CatImage2}
        title="Cat 2"
        cardText="Hello"
        buttonText="Mew mew"
      />
      <MyCard src={CatImage} title="Cat 1" cardText="Hello" buttonText="Mew" />
      <MyCard
        src={CatImage2}
        title="Cat 2"
        cardText="Hello"
        buttonText="Mew mew"
      />
    </div>
  );
};

export default CardProduct;
