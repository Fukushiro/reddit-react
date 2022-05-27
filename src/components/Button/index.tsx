import { Properties } from "csstype";
import React from "react";
import { CSSProperties } from "styled-components";
import * as Styles from "./styles";
// import { Container } from './styles';
interface IButton {
  onClick: any;
  text: string;
  style?: CSSProperties;
}
const Button: React.FC<IButton> = ({ onClick, text, style }) => {
  return (
    <Styles.ButtonS onClick={onClick} style={style}>
      {text}
    </Styles.ButtonS>
  );
};

export default Button;
