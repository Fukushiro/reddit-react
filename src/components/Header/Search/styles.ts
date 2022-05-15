import { style } from '@mui/system';
import styled from 'styled-components';
import { flavor } from '../../../flavor';
export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 250px;
  border: 1px solid;
  height: 50px;
  background-color: ${flavor.colors.textSearchBackground};
  height: 40px;
`;
export const Icon = styled.div`
  align-self: center;
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
`;
