import React from "react";

//Button Component
//Props Notes:
//type is currently set at "default" and changes to "success" once submit form function is initialized
const Button = ({ type = "default", className, children, onClick }) => (
  <button
    onClick={onClick}
    className={["btn btn-lg", `btn-${type}`, className].join(" ")}
  >
    {children}
  </button>
);

export default Button;
