import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; 

const Header = () => {
  return (
    <header className="header">
      {/* <img className="logo" src="./1708371831466.png" alt="logo" /> */}
      <strong className="com">𝔇-𝔞𝔠𝔥𝔦𝔢𝔳𝔢𝔪𝔢𝔫𝔱𝔰.𝐸𝒯𝐻</strong>
      <Link to="/">
        <button className="home-button">Home</button>
      </Link>
    </header>
  );
};

export default Header;
