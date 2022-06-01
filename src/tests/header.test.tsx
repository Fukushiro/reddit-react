import React from "react";
// import { shallow } from "enzyme";
// import App from "../App";
// import Enzyme from "enzyme";
// import ReactSixteenAdapter from "enzyme-adapter-react-16";
// import * as coisas from "@react-hook/media-query";
// import { useMediaQueries } from "@react-hook/media-query";
// import { BrowserRouter } from "react-router-dom";
import { render, waitFor } from "@testing-library/react";
import Test from "../components/Test";
import Header from "../components/Header";
import * as coisa from "@react-hook/media-query";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
// Enzyme.configure({ adapter: new ReactSixteenAdapter() });
// test("renders the component", () => {
//   const setState = jest.fn();
//   const useStateSpy: any = jest.spyOn(React, "useState");
//   useStateSpy.mockImplementation((initialState: any) => [
//     initialState,
//     setState,
//   ]);
//   jest.spyOn(coisas, "useMediaQuery").mockImplementationOnce(() => false);

//   const component = shallow(
//     <BrowserRouter>
//       <Header />
//     </BrowserRouter>
//   );
//   const newInputValue = "React is Awesome";

//   expect(setState).toHaveBeenCalledWith(newInputValue);
// });
describe("Header", () => {
  it("renders without crashing", () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    const linkElement = getByText("MY COMMUNITIES");
    expect(linkElement).toBeTruthy();
  });
});
