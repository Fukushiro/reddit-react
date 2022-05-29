import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Enzyme from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import Header from "../components/Header";

Enzyme.configure({ adapter: new ReactSixteenAdapter() });
test("renders the component", () => {
  const component = shallow(<Header />);
  expect(component).toMatchSnapshot();
});
