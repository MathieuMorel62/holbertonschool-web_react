import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';


describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('contains the Notifications component', () => {
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it('contains the Header component', () => {
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('contains the Login component', () => {
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  it('contains the Footer component', () => {
    expect(wrapper.find(Footer).exists()).toBe(true);
  });

  it('does not display CourseList', () => {
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });


  describe('when isLoggedIn is true', () => {
    beforeEach(() => {
      wrapper = shallow(<App isLoggedIn={true} />);
    });

    it('does not include the Login component', () => {
      expect(wrapper.find(Login).exists()).toBe(false);
    });

    it('includes the CourseList component', () => {
      expect(wrapper.find(CourseList).exists()).toBe(true);
    });
  });
});
