import styled from 'styled-components';
// import { flavor } from '../../flavor';

export const MainContainer = styled.div`
  color: white;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  /* width: 1000px; */
  object-fit: cover;
  height: 300px;
  z-index: 0;
`;
// barra com infos
export const InfosContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 1;
  background-color: #141616;
  margin-top: -50px;
  position: relative;
`;
// icone do subreddit
export const IconImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: none;
  border-radius: 50%;
  margin-right: 15px;
`;
// textos na barra de info
export const InfosTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */

  overflow: hidden;

  width: 500px;
`;

export const InfosTextLabel = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
`;
export const InfosTextTitle = styled.h2`
  margin-top: -10px;
  color: #605d54;
  font-size: 14px;

  font-weight: 500;
  line-height: 18px;
`;
//body
export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #191f25;
`;

export const LeftContainer = styled.div``;

export const RightContainer = styled.div``;
