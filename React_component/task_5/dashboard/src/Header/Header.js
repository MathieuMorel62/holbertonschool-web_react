import React from "react";
import logo from "../assets/holberton-logo.jpg";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <hr className="hr-header" />
    </>
  );
};

export default Header;
