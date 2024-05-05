import React from "react";
import { css, StyleSheet } from "aphrodite";


const styles = StyleSheet.create({
  AppBody: {
    margin: '3rem 1rem',
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '1.2rem',
    position: 'relative',
  },
  
  p: {
    padding: '15px',
    marginBottom: '1rem',
  },
  
  form: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px',
    marginTop: '-15px',
    gap: '1rem',
    position: 'absolute',
  },
  
  button: {
    cursor: 'pointer',
  }
  
});

const Login = () => {
  return (
    <>
      <div className={css(styles.AppBody)}>
        <p className={css(styles.p)}>Login to access the full dashboard</p>

        <form className={css(styles.form)}>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' />

          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' name='password' />

          <button className={css(styles.button)}>OK</button>
        </form>
      </div>
    </>
  )
}

export default Login;
