import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("<NotificationItem />", () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem type="default" value="test" />);
  });

  it('renders correct type and value', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('li').prop('data-notification-type')).toEqual('default');
    expect(wrapper.text()).toEqual('test');
  })

  it('renders correct HTML for an li element with type and value', () => {
    const wrapper = shallow(<NotificationItem type="default" value="Here is a value" />);
    expect(wrapper.find('li[data-notification-type="default"]').text()).toEqual('Here is a value');
  });
});
