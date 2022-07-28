import React from "react";
import phoneIcon from "../../../assets/icons/PHONE.png";
import phoneOrangeIcon from "../../../assets/icons/PHONE_orange.png";

const ContactInfo = () => {
  return (
    <div className="contact-info d-flex align-items-center">
      <p className="contact-info-paragraph mx-6 my-4">
        <a href="#">ΤΟΠΟΘΕΣΙΑ</a>
        {" | "}
        <a href="tel:+30-2133333333">
          <img className="icon" src={phoneOrangeIcon} alt="phone icon" /> +30
          213 33 33 333
        </a>
      </p>
    </div>
  );
};

export default ContactInfo;
