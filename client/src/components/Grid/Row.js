import React from "react";

//Row component
export const Row = ({ fluid, children }) => (
  <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>
);
