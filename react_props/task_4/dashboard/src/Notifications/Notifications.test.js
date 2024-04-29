import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it('should render without crashing', () => {
    expect(wrapper).not.toBeNull();
  });

  it('renders NotificationItem elements', () => {
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find(NotificationItem).length).toEqual(3);
  });

  it('renders correct html', () => {
    const htmlContent = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem type="default" html={htmlContent} />);
    expect(wrapper.html()).toContain('<u>test</u>');
  });

  it('should display the correct text', () => {
    expect(wrapper.text()).toContain('Your notifications');
  });

  it('displays the menu item when displayDrawer is false', () => {
    wrapper.setProps({ displayDrawer: false });
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  it('hides the Notifications div when displayDrawer is false', () => {
    wrapper.setProps({ displayDrawer: false });
    expect(wrapper.find('.Notifications').exists()).toBe(false);
  });

  it('displays the menu item when displayDrawer is true', () => {
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  it('displays the Notifications div when displayDrawer is true', () => {
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find('.Notifications').exists()).toBe(true);
  });
});
