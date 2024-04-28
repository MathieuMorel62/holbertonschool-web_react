import React from "react";
import "./Footer.css";

import { getFullYear, getFooterCopy } from "../utils/utils";

const Footer = () => {
  return (
    <>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </>
  );
};

export default Footer;