import React from 'react';
import { flavor } from '../../flavor';
import * as Styles from './styles';
import { ReactComponent as Logo } from '../../img/reddit-logo.svg';
// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Styles.MainContainer>
      <flavor.images.logo width={50 + 75} height={50} />
    </Styles.MainContainer>
  );
};

export default Header;
