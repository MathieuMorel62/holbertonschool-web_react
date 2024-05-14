import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext, defaultUser } from './AppContext';

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: jest.fn() }}>
        <App />
      </AppContext.Provider>
    );
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    wrapper.unmount();
  });

  it('contains the Notifications component', () => {
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it('contains the Header component', () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('contains the Login component when not logged in', () => {
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  it('does not display CourseList when not logged in', () => {
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });

  it('contains the Footer component', () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it('should have a default state for displayDrawer to false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toEqual(false);
  });

  it('should have a state for displayDrawer to true after handleDisplayDrawer call', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toEqual(true);
  });

  it('should have a state for displayDrawer to false after handleHideDrawer call', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ displayDrawer: true });
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toEqual(false);
  });

  describe('when user is logged in', () => {
    beforeEach(() => {
      wrapper.setState({
        user: {
          email: 'test@example.com',
          password: 'password',
          isLoggedIn: true,
        }
      });
    });

    it('does not include the Login component when logged in', () => {
      expect(wrapper.find(Login).exists()).toBe(false);
    });

    it('includes the CourseList component when logged in', () => {
      expect(wrapper.find(CourseList).exists()).toBe(true);
    });
  });

  describe('keydown event tests for logout', () => {
    const keyDownEvent = (ctrlKey, key) => {
      return new KeyboardEvent('keydown', { ctrlKey, key, bubbles: true });
    };

    it('calls logOut and shows alert when Ctrl+H is pressed', () => {
      const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
      document.dispatchEvent(keyDownEvent(true, 'h'));
      expect(wrapper.state().user).toEqual(defaultUser);
      expect(alertMock).toHaveBeenCalledWith('Logging you out');
      alertMock.mockRestore();
    });
  });

  it('logIn function updates the state correctly', () => {
    wrapper.instance().logIn('test@example.com', 'password');
    expect(wrapper.state().user).toEqual({
      email: 'test@example.com',
      password: 'password',
      isLoggedIn: true,
    });
  });

  it('logOut function updates the state correctly', () => {
    wrapper.setState({
      user: {
        email: 'test@example.com',
        password: 'password',
        isLoggedIn: true,
      }
    });
    wrapper.instance().logOut();
    expect(wrapper.state().user).toEqual(defaultUser);
  });
});
