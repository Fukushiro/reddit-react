// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import Enzyme from "enzyme";
// import ReactSixteenAdapter from "enzyme-adapter-react-16";
import "@testing-library/jest-dom";
import * as coisa from "@react-hook/media-query";
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
jest.spyOn(coisa, "useMediaQuery").mockImplementationOnce(() => false);

// Enzyme.configure({ adapter: new ReactSixteenAdapter() });
