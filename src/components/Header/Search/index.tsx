import React, { useState } from 'react';
import { CSSProperties } from 'styled-components';
import * as Styles from './styles';
// import { Container } from './styles';
interface ISearch {
  style?: CSSProperties;
}
const Search: React.FC<ISearch> = ({ style }) => {
  const [text, setText] = useState<string>('');
  return (
    <Styles.MainContainer style={style}>
      <Styles.Icon></Styles.Icon>
      <Styles.Input
        type={'text'}
        placeholder="Search reddit"
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></Styles.Input>

      <Styles.Container style={{ display: text != '' ? 'block' : 'none' }}>
        <p>Dasdsad</p>
        <p>Dasdsad</p>
        <p>Dasdsad</p>
        <p>Dasdsad</p>
      </Styles.Container>
    </Styles.MainContainer>
  );
};

export default Search;
