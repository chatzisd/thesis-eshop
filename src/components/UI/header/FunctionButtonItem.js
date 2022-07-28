import React from "react";

const FunctionButtonItem = (props) => {
  return (
    <li>
      <a href={props.href}>
        <img className="icon" src={props.src} alt={props.alt} />
        {props.children}
      </a>
    </li>
  );
};

export default FunctionButtonItem;
