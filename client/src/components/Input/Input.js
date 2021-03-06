import React from "react";

//Input Component
const Input = props => (
  <div className="input-group input-group-lg">
    <input className="form-control" type="text" {...props} />
  </div>
);

export default Input;
