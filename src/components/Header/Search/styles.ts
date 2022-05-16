import { style } from '@mui/system';
import styled from 'styled-components';
import { flavor } from '../../../flavor';
import { AiOutlineSearch } from 'react-icons/ai';
export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 250px;
  border: 1px solid ${flavor.colors.textSearchBorderColor};
  border-radius: 4px;
  height: 50px;
  background-color: ${flavor.colors.textSearchBackground};
  height: 36px;
  position: relative;
  z-index: 10000;
`;
export const Container = styled.div`
  width: 100%;
  height: 450px;
  color: white;

  /* background-color: red; */
  /* background-color: red; */
  position: absolute;
  top: 37px;
  overflow-y: scroll;
  background-color: #141615;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Icon = styled(AiOutlineSearch)`
  align-self: center;
  font-size: 23px;
  color: ${flavor.colors.textSearchIconColor};
  flex: 0.2;
`;
export const Input = styled.input`
  color: ${flavor.colors.textSearchFontColor};
  width: 100%;
  background-color: ${flavor.colors.textSearchBackground};
  outline: none;
  appearance: none;
  border: none;
  /* height: 20px; */
  font-size: 14px;
  line-height: 14px;
  margin-right: 16px;
  flex: 0.8;
  &::placeholder {
    color: ${flavor.colors.textSearchPlaceholderFontColor};
  }
`;

export const ButtonDiv = styled.div``;
export const ButtonInside = styled.button`
  background-color: #141615;
  color: white;
  border: none;
  width: 100%;
  height: 35px;

  text-align: start;
  padding-left: 35px;
  cursor: pointer;
  /* background-color: blue; */

  &:hover {
    background-color: #1d2122;
  }
`;
