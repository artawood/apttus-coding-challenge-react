import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron text-center">
    <h1>Git Repo Search</h1>
    <h2>Apttus Coding Challenge</h2>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://developer.github.com/v3/search/ "
    >
      Powered by GitHub
    </a>
  </div>
);

export default Jumbotron;
