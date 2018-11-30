import React from "react";

// Column Component
// Use <Col size="12"> or <Col size="md-12"> instead of actual classname for bootstrap column (i.e. <div  className="col-md-12")
// Multiple column classes can be used
export const Col = ({ size, children }) => (
  <div className={size.split(" ").map(size => "col-" + size)}>{children}</div>
);
