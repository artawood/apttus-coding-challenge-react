import React from "react";

//Container component
export const Container = ({ fluid, children }) => (
  <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>
);
