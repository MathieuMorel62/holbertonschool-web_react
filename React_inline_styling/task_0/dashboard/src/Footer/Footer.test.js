import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("footer component", () => {
  it("render without crashing", () => {
    shallow(<Footer />);
  });

  it("render p tag", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });
});
