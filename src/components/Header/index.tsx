import React from 'react';
import { flavor } from '../../flavor';
import DrawerMenu from './DrawerMenu';
import * as Styles from './styles';

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Styles.MainContainer>
      <Styles.Logo width={50 + 75} height={50} />
      <DrawerMenu />
    </Styles.MainContainer>
  );
};

export default Header;
