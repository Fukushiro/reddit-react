import React, { InputHTMLAttributes } from "react";
import * as Styles from "./styles";
import { Properties } from "csstype";
// import { Container } from './styles';
interface ITextInput {
  value: string | undefined;
  setValue: any;
  placeholder?: string;
  styles?: Properties;
}
const TextInput: React.FC<ITextInput> = ({
  value,
  setValue,
  placeholder,
  styles,
}) => {
  function handleChange(event: any) {
    setValue(event.target.value);
  }
  return (
    <Styles.Input
      style={styles}
      type={"text"}
      value={value}
      onChange={handleChange}
      placeholder={!!placeholder ? placeholder : ""}
    />
  );
};

export default TextInput;
