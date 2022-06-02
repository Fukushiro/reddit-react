import { borderBottom } from "@mui/system";
import React from "react";
import * as Styles from "./styles";
// import { Container } from './styles';
interface IButtonsBar {
  botoes: Array<string>;
  width: string;
  height?: number;
  selected: number;
  setSelected: any;
}
const ButtonsBar: React.FC<IButtonsBar> = ({
  width,
  height,
  botoes,
  selected,
  setSelected,
}) => {
  const tamanhoBotao = 100 / botoes.length;
  return (
    <Styles.MainContainer
      style={{ width: width, height: !!height ? height : 50 }}
    >
      {botoes.map((v, i) => (
        <Styles.Button
          style={{
            width: `${tamanhoBotao}%`,
            borderBottomColor: i === selected ? "white" : "black",
            borderBottomWidth: 2,
            borderBottomStyle: "solid",
          }}
          onClick={() => {
            setSelected(i);
          }}
          key={i}
        >
          <Styles.ButtonText
            style={{ color: i === selected ? "white" : "#676969" }}
          >
            {v}
          </Styles.ButtonText>
        </Styles.Button>
      ))}
    </Styles.MainContainer>
  );
};

export default ButtonsBar;
