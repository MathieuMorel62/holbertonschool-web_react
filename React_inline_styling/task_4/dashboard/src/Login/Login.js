import React from "react";
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  AppBody: {
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '1.2rem',
  },
  p: {
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.5rem',
    '@media (min-width: 900px)': {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  label: {
    '@media (mx-width: 899px)': {
      marginRight: 'auto',
    },
  },
  input: {
    '@media (max-width: 899px)': {
      width: '20%',
    },
  },
  button: {
    cursor: 'pointer',
    '@media (max-width: 899px)': {
      width: '10%',
    },
  },
});

const Login = () => {
  return (
    <div className={css(styles.AppBody)}>
      <p className={css(styles.p)}>Login to access the full dashboard</p>
      <form className={css(styles.form)}>
        <label className={css(styles.label)} htmlFor="email">Email:</label>
        <input className={css(styles.input)} type="email" id="email" name="email" />
        <label className={css(styles.label)} htmlFor="password">Password:</label>
        <input className={css(styles.input)} type="password" id="password" name="password" />
        <button className={css(styles.button)}>OK</button>
      </form>
    </div>
  );
};

export default Login;
