import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import Header from "../Header/Header";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";


function App({ isLoggedIn }) {
  return (
    <>
      <Notifications />
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-body">
          {isLoggedIn ? <CourseList /> : <Login />}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
