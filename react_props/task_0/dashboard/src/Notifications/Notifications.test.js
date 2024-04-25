import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it('should render without crashing', () => {
    expect(wrapper).not.toBeNull();
  });

  it('should render three list items', () => {
    expect(wrapper.find('li').length).toEqual(3);
  });

  it('should display the correct text', () => {
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });
});
