import React from "react";
import LogoImage from "../../../assets/images/Pc_spirit_1_FinalTrnsprnt.png";

const Logo = () => {
  return (
    <div className="col2 d-flex justify-content-center align-items-center logo">
      <a href="#" title="My-eshop">
        <img className="logo mt-2" src={LogoImage} alt="logo" title="" />
        {/* <div
          className="logo-placeholder"
          style={{ backgroundImage: `url("${LogoImage}")` }}
        ></div> */}
      </a>
    </div>
  );
};

export default Logo;
