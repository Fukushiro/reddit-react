import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./route";
import { Provider } from "react-redux";
import store from "./store";
import { flavor } from "./flavor";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  document.body.style.backgroundColor = `${flavor.colors.background}`;
  const theme = createTheme({
    palette: {
      text: {
        primary: flavor.colors.textFieldTextColor,
        disabled: "#ff0000",
        secondary: flavor.colors.textFieldTextColor,
      },
      background: {
        default: "#ff0000",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
