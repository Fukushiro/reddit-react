import React from 'react';
import { flavor } from '../../flavor';
import DrawerMenu from './DrawerMenu';
import * as Styles from './styles';

// import { Container } from './styles';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { urls } from '../../route';
import Search from './Search';
interface IHeader {}
const Header: React.FC<IHeader> = () => {
  const navigate = useNavigate();
  const user: { user: { username: string; id: number }; logado: boolean } =
    useSelector((v: any) => v.User);
  return (
    <Styles.MainContainer>
      <Styles.Logo
        width={50 + 75}
        height={50}
        onClick={() => {
          navigate(urls.home);
        }}
      />
      <DrawerMenu user={user} />
      <Search />
    </Styles.MainContainer>
  );
};

export default Header;
