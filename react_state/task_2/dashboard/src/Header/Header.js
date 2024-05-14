import React from "react";
import { css, StyleSheet } from "aphrodite";
import logo from "../assets/holberton-logo.jpg";


const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    color: '#e11d3f',
    fontFamily: '"Times New Roman", Times, serif',
  },
  
  h1: {
    margin: '0px',
    padding: '30px',
    flexGrow: '1',
    fontSize: '3rem',
  },
  
  img: {
    maxHeight: '260px',
    marginRight: '1rem',
  },
  
  hr: {
    color: 'red',
    backgroundColor: 'red',
    height: '0.1rem',
    minWidth: '100%',
  },
});


const Header = () => {
  return (
    <>
      <header className={css(styles.header)}>
        <img src={logo} className={css(styles.img)} alt="Holberton Logo" />
        <h1 className={css(styles.h1)}>School dashboard</h1>
      </header>
      <hr className={css(styles.hr)} />
    </>
  );
};

export default Header;
