import React from "react";
import FunctionButtonItem from "./FunctionButtonItem";
import humanIcon from "../../../assets/icons/human.png";
import magnifyIcon from "../../../assets/icons/magnify.png";
import favoriteIcon from "../../../assets/icons/favorite.png";
import cartIcon from "../../../assets/icons/shoppingBag.png";

const FunctionButtons = () => {
  return (
    <div className="d-flex justify-content-end align-items-center register-buttons">
      <ul className="mr-6">
        <FunctionButtonItem href="#" src={humanIcon} alt="human icon">
          Είσοδος ή Δημιουργία λογαριασμού|
        </FunctionButtonItem>
        <FunctionButtonItem href="#" src={magnifyIcon} alt="magnifier icon" />
        <FunctionButtonItem href="#" src={favoriteIcon} alt="heart icon" />
        <FunctionButtonItem href="#" src={cartIcon} alt="cart icon" />
      </ul>
    </div>
  );
};

export default FunctionButtons;
