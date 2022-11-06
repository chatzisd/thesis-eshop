import React from "react";
import "./Card.css";
import CardImage1 from "../../../assets/ui_elements/portfolio_hex_1.png"
import CardImage2 from "../../../assets/ui_elements/portfolio_hex_2.png"
import CardImage3 from "../../../assets/ui_elements/portfolio_hex_3.png"
import CardImage4 from "../../../assets/ui_elements/portfolio_hex_4.png"
import MyCard from "./MyCard";

const CardProduct = () => {
  return (
    <div className="mycontainer">
      <MyCard 
        className="card"
        src={CardImage1} 
        title="Νέες κυκλοφορίες" 
      />
      <MyCard
        className="card"
        src={CardImage2}
        title="Έτοιμες λύσεις"
      />
      <MyCard 
        className="card"
        src={CardImage3} 
        title="Προτάσεις για gamers"/>
      <MyCard
        className="card"
        src={CardImage4}
        title="Επικοινωνήστε μαζί μας"
      />
    </div>
  );
};

export default CardProduct;
