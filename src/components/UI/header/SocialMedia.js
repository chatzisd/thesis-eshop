import React from "react";
import "./SocialMedia.css";
import SocialMediaItem from "./SocialMediaItem";
import fbIcon from "../../../assets/icons/FACEBOOK.png";
import instaIcon from "../../../assets/icons/INSTAGRAM.png";
import whatsAppIcon from "../../../assets/icons/whatsApp.png";
import youtubeIcon from "../../../assets/icons/YOUTUBE.png";

const SocialMedia = () => {
  return (
    <div className="d-flex align-items-center justify-content-end social-media-container">
      <div className="mr-6">
        <SocialMediaItem href="#" alt={"facebook icon"} src={fbIcon} />
        <SocialMediaItem href="#" alt={"instagram icon"} src={instaIcon} />
        <SocialMediaItem href="#" alt={"whatsApp icon"} src={whatsAppIcon} />
        <SocialMediaItem href="#" alt={"youtube icon"} src={youtubeIcon} />
      </div>
    </div>
  );
};

export default SocialMedia;
