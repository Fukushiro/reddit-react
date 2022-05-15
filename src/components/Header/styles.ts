import styled from 'styled-components';
import { flavor } from '../../flavor';

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

export const Logo = styled(flavor.images.logo)`
  cursor: pointer;
`;
