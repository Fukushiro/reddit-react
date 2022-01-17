import { FormControl, OutlinedInput, TextField } from '@mui/material';
import styled from 'styled-components';
import { flavor } from '../../flavor';
import Button from '@mui/material/Button';
import { styled as muiStyled } from '@mui/system';
import { withStyles } from '@mui/material';
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardContainer = styled.div`
  background-color: ${flavor.colors.backgroundCard};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  width: 500px;
  padding: 50px 0px;
  flex-direction: column;
`;

export const LoginTextInput = styled(TextField)`
  && {
    width: 250px;
  }
`;

export const LoginTextInputPass = styled(FormControl)`
  && {
    margin-top: 50px;
    width: 250px;
  }
`;

export const LoginButton = styled(Button)`
  && {
    margin-top: 25px;
    width: 200px;
  }
`;
