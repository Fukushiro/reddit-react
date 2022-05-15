import React from 'react';
import * as Styles from './styles';
// import { Container } from './styles';

const Search: React.FC = () => {
  return (
    <Styles.MainContainer>
      <Styles.Icon>das</Styles.Icon>
      <Styles.Input type={'text'} placeholder="Search reddit"></Styles.Input>
    </Styles.MainContainer>
  );
};

export default Search;
