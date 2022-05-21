import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: red;
  display: flex;
`;

export const Button = styled.div`
  background-color: #1a1a1b;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #242425;
    cursor: pointer;
  }
  user-select: none;
`;

export const ButtonText = styled.p`
  color: #676969;
`;
