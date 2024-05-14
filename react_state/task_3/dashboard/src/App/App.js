import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { AppContext, defaultUser, defaultLogOut } from './AppContext';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

const initialNotifications = [
  { id: 1, value: 'New course available', type: 'default' },
  { id: 2, value: 'New resume available', type: 'urgent' },
  { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' },
];

const style = StyleSheet.create({
  app: {
    fontFamily: 'Times New Roman, Times, serif',
  },
  body: {
    height: '500px',
  },
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
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: defaultUser,
      logOut: this.logOut,
      listNotifications: initialNotifications,
    };

    this.handleKey = this.handleKey.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
  }

  logOut = () => {
    this.setState({
      user: defaultUser,
    });
  }

  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter(notification => notification.id !== id)
    });
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKey);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKey);
  }

  handleKey(e) {
    if (e.ctrlKey && e.key === "h") {
      alert("Logging you out");
      this.state.logOut();
    }
  }

  render() {
    const { displayDrawer, user, logOut, listNotifications } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut }}>
        <>
          <Notifications
            listNotifications={listNotifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <div className={css(style.app)}>
            <Header />
            <div className={css(style.body)}>
              {user.isLoggedIn ? (
                <BodySectionWithMarginBottom title={"Course list"}>
                  <CourseList listCourses={listCourses} />
                </BodySectionWithMarginBottom>
              ) : (
                <BodySectionWithMarginBottom title={"Log in to continue"}>
                  <Login logIn={this.logIn} />
                </BodySectionWithMarginBottom>
              )}
              <BodySection title={"News from the School"}>
                <p>Latest updates and insights from our school community.</p>
              </BodySection>
            </div>
            <div className={css(style.footer)}>
              <Footer />
            </div>
          </div>
        </>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  logOut: PropTypes.func,
};

App.defaultProps = {
  logOut: defaultLogOut,
};

export default App;
