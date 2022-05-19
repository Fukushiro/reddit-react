import React, { useEffect, useState } from 'react';
import { flavor } from '../../flavor';
import DrawerMenu from './DrawerMenu';
import * as Styles from './styles';

// import { Container } from './styles';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { urls } from '../../route';
import Search from './Search';
import { useMediaQuery } from '@react-hook/media-query';
import { small } from '../../constants/sizes';
import { IGetSubredditService } from '../../services/subreddit.service';
interface IHeader {
  currentSubreddit?: IGetSubredditService;
  isSubreddit?: boolean;
  refresh?: boolean;
}
const Header: React.FC<IHeader> = ({
  currentSubreddit,
  isSubreddit,
  refresh,
}) => {
  //useEffect
  const [refreshI, setRefreshI] = useState<boolean>(false);
  // media query
  const smallQuery = useMediaQuery(`only screen and (max-width: ${small}px)`);
  //
  const navigate = useNavigate();
  const user: { user: { username: string; id: number }; logado: boolean } =
    useSelector((v: any) => v.User);
  useEffect(() => {
    setRefreshI(!refreshI);
    console.log('Aqui');
  }, [refresh]);
  return (
    <Styles.MainContainer>
      <Styles.logoContainer>
        {smallQuery ? (
          <Styles.LogoSmall
            width={40}
            height={40}
            onClick={() => {
              navigate(urls.home);
            }}
          />
        ) : (
          <Styles.Logo
            width={125}
            height={50}
            onClick={() => {
              navigate(urls.home);
            }}
          />
        )}
      </Styles.logoContainer>
      <Styles.Drawer
        user={user}
        title={isSubreddit ? currentSubreddit?.nome : 'Home'}
        style={{ marginRight: 10, flex: 0.25 }}
        refresh
      />
      <Styles.SearchBar style={{ flex: 0.25 }} />
    </Styles.MainContainer>
  );
};

export default Header;
