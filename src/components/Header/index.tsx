import React from 'react';
import { flavor } from '../../flavor';
import DrawerMenu from './DrawerMenu';
import * as Styles from './styles';

// import { Container } from './styles';
import { useSelector } from 'react-redux';

const Header: React.FC = () => {
  const user: { user: { username: string; id: number }; logado: boolean } =
    useSelector((v: any) => v.User);
  return (
    <Styles.MainContainer>
      <Styles.Logo width={50 + 75} height={50} />
      <DrawerMenu user={user} />
    </Styles.MainContainer>
  );
};

export default Header;
