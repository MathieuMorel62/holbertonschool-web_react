import React from "react";
import { css, StyleSheet } from "aphrodite";
import { getFullYear, getFooterCopy } from "../utils/utils";


const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    textAlign: 'center',
    padding: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
  },

  p: {
    fontFamily: '"Times New Roman", Times, serif',
    fontStyle: 'italic',
  },

  hr: {
    position: 'fixed',
    width: '100%',
    border: '0.1rem solid #e11d3f',
    bottom: '90px',
  }
});


const Footer = () => {
  return (
    <>
      <hr className={css(styles.hr)} />
      <footer className={css(styles.footer)}>
        <p className={css(styles.p)}>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </>
  );
};

export default Footer;
