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
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).length).toEqual(3);
  });

  it('renders correct html', () => {
    const htmlContent = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem html={htmlContent} />);
    expect(wrapper.html()).toContain('<u>test</u>');
  });

  it('should display the correct text', () => {
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });
});
