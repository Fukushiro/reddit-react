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

export const CreatePostCard = styled.div`
  background-color: #1a1a1b;
  width: 200px;
  padding: 12px;
  color: white;
`;
