import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 250px;
  height: 50px;
  color: white;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10000;
`;

export const Button = styled.button`
  background-color: #141615;
  color: white;
  border: none;
  width: 100%;
  height: 70%;
  border-radius: 3px;
  text-align: start;
  padding-left: 35px;

  border: 1px solid #141615;

  &:hover {
    border: 1px solid white;
  }
`;
export const Title = styled.p`
  font-size: 12px;
  color: #828078;
  padding-left: 30px;
  /* background-color: red; */
`;
export const ButtonInside = styled.button`
  background-color: #141615;
  color: white;
  border: none;
  width: 100%;
  height: 35px;

  text-align: start;
  padding-left: 35px;
  /* background-color: blue; */

  &:hover {
    background-color: #1d2122;
  }
`;

export const Container = styled.div`
  width: 250px;
  height: 450px;
  color: white;

  /* background-color: red; */
  /* background-color: red; */
  position: absolute;
  top: 50px;
  overflow-y: scroll;
  background-color: #141615;
`;
