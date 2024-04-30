import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("login component", () => {
  it("render without crashing", () => {
    shallow(<Login />);
  });

  it("renders 2 input tags and 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input")).toHaveLength(2);
    expect(wrapper.find("label")).toHaveLength(2);
  });
});
