import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import { StyleSheetTestUtils } from "aphrodite";

describe("footer component", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("renders without crashing", () => {
    shallow(<Footer />);
  });

  it("renders a p tag with 'Copyright'", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain("Copyright");
  });
});
