import React from 'react';
import { flavor } from '../../flavor';
import * as Styles from './styles';
import Logo from '../../img/reddit-logo.svg';
// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Styles.MainContainer>
      <Logo />
    </Styles.MainContainer>
  );
};

export default Header;
