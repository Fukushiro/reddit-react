import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./route";
import {
  DefaultRootState,
  Provider,
  useDispatch,
  useSelector,
} from "react-redux";
import store from "./store";
import { flavor } from "./flavor";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CustomModal from "./components/CustomModal";
import { RootState } from "./store/ducks";
import { CustomModalTypes } from "./store/ducks/CustomModal";

function App() {
  // redux
  const modal = useSelector((state: RootState) => state.CustomModal);
  const dispatch = useDispatch();

  //
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
      <BrowserRouter>
        <CustomModal
          modalOpen={modal.open}
          text={modal.text}
          setModalOpen={() => {
            dispatch({ type: CustomModalTypes.SET_CLOSE });
          }}
          title={modal.title}
        />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
