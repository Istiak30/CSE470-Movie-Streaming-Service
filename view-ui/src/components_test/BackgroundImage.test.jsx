import React from "react";
import Adapter from 'enzyme-adapter-react-18.2'
import { shallow, configure } from "enzyme";
import BackgroundImage from "../components/BackgroundImage";

describe("BackgroundImage", () => {
  configure({adapter: new Adapter()});
  it("renders an image with the correct source", () => {
    const wrapper = shallow(<BackgroundImage />);
    const img = wrapper.find("img");
    expect(img.prop("src")).toEqual("../assets/login.jpg");
  });
});
