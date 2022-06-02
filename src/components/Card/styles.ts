import styled from "styled-components";
import { small, medium } from "../../constants/sizes";
import { flavor } from "../../flavor";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* <<<<<<< HEAD */
  background-color: ${flavor.colors.cardBackground};
  width: 640px;
  /* =======
  background-color: #141616;
  width: 90%;
>>>>>>> 8295daaf9117960950154e57f49089cfdb9c87cf */
  border: 1px solid #4a4845;
  &:first-child {
    margin-top: 20px;
  }
  @media (max-width: ${medium}px) {
    width: 75%;
  }
  @media (max-width: ${small}px) {
    width: 95%;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  margin-left: 10px;
  margin-right: 10px;
`;
export const LeftContainerDiv = styled.div``;
export const LeftContainerButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const RightContainer = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: blue; */
`;

export const Spam = styled.span`
  color: #999183;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;

export const TitleContainer = styled.div`
  /* display: flex; */
  /* background-color: purple; */

  /* margin-top: -18px; */
`;
export const TitleContainerTitle = styled.span`
  /* background-color: green; */
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: #d0dcc6;
`;
