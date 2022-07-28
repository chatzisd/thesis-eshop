import React from "react";

const SocialMediaItem = (props) => {
  return (
    <a href={props.href} className="mr-3">
      <img className="media-icon" src={props.src} alt={props.alt} />
    </a>
  );
};

export default SocialMediaItem;
