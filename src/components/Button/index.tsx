import { Properties } from "csstype";
import React from "react";
import * as Styles from "./styles";
// import { Container } from './styles';
interface IButton {
  onClick: any;
  text: string;
  style?: Properties;
}
const Button: React.FC<IButton> = ({ onClick, text, style }) => {
  return (
    <Styles.ButtonS onClick={onClick} style={style}>
      {text}
    </Styles.ButtonS>
  );
};

export default Button;
