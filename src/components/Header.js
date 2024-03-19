import React from "react";
import icon from "../images/1.jpg";
const Header = () => {
  return (
    <header className="header">
      <img src={icon} className="header--image"/>
      <h2  className="header--title"> hello world</h2>
      <h4 className="header--project">React Project - Meme Generator</h4>
    </header>
  );
};

export default Header;
