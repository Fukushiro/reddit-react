import styled from "styled-components";
import { small } from "../../constants/sizes";
import { flavor } from "../../flavor";
import DrawerMenu from "./DrawerMenu";
import Search from "./Search";

export const MainContainer = styled.div`
  background-color: #141615;
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid white;
  flex: 1;
  position: sticky;
  z-index: 100000;
  top: 0;
  align-items: center;
`;
//container para a logo
export const logoContainer = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: center;
  margin-right: 10px;
  flex: 0.1;
  @media (max-width: ${small}px) {
    margin-left: 10px;
  }
`;
// imagens de logo
export const Logo = styled(flavor.images.logo)`
  cursor: pointer;
`;

export const LogoSmall = styled(flavor.images.logoSmall)`
  cursor: pointer;
`;
//seletor de subreddit
export const Drawer = styled(DrawerMenu)`
  /* flex: 0.25; */
  /* margin-right: 20px; */
`;
//barra de busca de subreddit
export const SearchBar = styled(Search)`
  /* flex: 0.25; */
`;
