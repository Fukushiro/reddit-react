import styled from "styled-components";
import { large, medium, small } from "../../constants/sizes";
// import { flavor } from '../../flavor';

export const MainContainer = styled.div`
  color: white;
  /* width: 100%; */
  /* background-color: red; */
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 500px;
  background-color: red;

  @media (max-width: ${medium}px) {
    height: 350px;
  }
  @media (max-width: ${small}px) {
    height: 250px;
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  /* width: 1000px; */
  object-fit: cover;
  object-position: top;
  /* display: none; */

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

export const InfosTextLabelDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 450px;
  /* background-color: red; */
  @media (max-width: ${medium}px) {
    width: 400px;
  }
  @media (max-width: ${small}px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const InfosTextLabel = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  width: 300px;
  /* background-color: blue; */
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
  flex-direction: row;
  /* background-color: #191f25; */
  justify-content: center;
  align-items: flex-start;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;

  /* background-color: #191f25; */
  align-items: center;
  /* flex: 0.7; */
  /* background-color: red; */
  width: 70%;
  @media (max-width: ${small}px) {
    width: 100%;
  }
`;
export const RightContainer = styled.div`
  /* flex: 0.3; */
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
  align-items: center;
  width: 30%;
  @media (max-width: ${small}px) {
    display: none;
  }
`;

export const RightContainerAbout = styled.div`
  background-color: #1a1a1b;
  /* background-color: red; */
  width: 200px;
  padding: 12px;
`;

export const RightContainerAboutTitle = styled.h2`
  color: "#545556";
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const RightContainerAboutText = styled.p`
  font-size: 14px;
  color: "#D7DADC";
`;
export const RightContainerAboutButton = styled.button``;
