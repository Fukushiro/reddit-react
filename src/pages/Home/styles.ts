import styled from "styled-components";
import { flavor } from "../../flavor";

export const MainContainer = styled.div``;

export const Container2 = styled.div`
  background-color: ${flavor.colors.color2};
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
  /* background-color: blue;
  height: 500px; */
`;

export const RightContainer = styled.div`
  /* flex: 0.3; */
  flex-direction: column;

  /* background-color: blue; */
  margin-left: 24px;
`;

export const CreatePostCard = styled.div`
  background-color: #1a1a1b;
  width: 200px;
  padding: 12px;
  color: white;
`;
