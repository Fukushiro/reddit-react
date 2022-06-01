import { fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import DrawerMenu from "../components/Header/DrawerMenu";
import { baseUrl } from "../services/apiReddit";
import store from "../store";
import * as userService from "../services/user.service";

describe("Header", () => {
  it("should renders without crashing", async () => {
    const { getByText, debug, queryByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <DrawerMenu
            user={{ user: { username: "teste", id: 1 }, logado: true }}
            title={"Home"}
            refresh={true}
          />
        </BrowserRouter>
      </Provider>
    );
    // debug();
    const buttonText = getByText("Home");
    expect(buttonText).toBeTruthy();

    await waitFor(() => {
      const a = queryByText("teste");
      expect(a).toBeTruthy();
    });
  });

  it("should show on click", async () => {
    const { getByText, debug, queryByText, getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <DrawerMenu
            user={{ user: { username: "teste", id: 1 }, logado: true }}
            title={"Home"}
            refresh={true}
          />
        </BrowserRouter>
      </Provider>
    );
    const container = getByTestId("container");
    const button = getByTestId("button");

    fireEvent.click(button);

    await waitFor(() => {
      expect(container).toHaveProperty("style.display", "block");

      debug();
    });
  });
});
