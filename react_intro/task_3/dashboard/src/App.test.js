import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render without throwing an error', () => {
    expect(wrapper).not.toBeNull();
  });

  it('should have a header with .App-header', () => {
    expect(wrapper.find('.App-header').exists()).toBe(true);
  });

  it('should have a body with .App-body', () => {
    expect(wrapper.find('.App-body').exists()).toBe(true);
  });

  it('should have a footer with .App-footer', () => {
    expect(wrapper.find('.App-footer').exists()).toBe(true);
  });
});
