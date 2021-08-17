import React from "react";
import "./Button.css";
function Button(props) {
  return (
    <div onClick={props.onClick} className="button">
      {props.children}
    </div>
  );
}

export default Button;
