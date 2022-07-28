import React from "react";
import "./Header.css";
import SocialMedia from "./SocialMedia";
import Nav from "./Nav";
import ContactInfo from "./ContactInfo";
import Logo from "./Logo";
import FunctionButtons from "./FunctionButtons";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <ContactInfo />
        <Nav />
        <span className="middle-col-logo"></span>
        <Logo />
        <SocialMedia />
        <FunctionButtons />
      </div>
    </header>
  );
};

export default Header;
