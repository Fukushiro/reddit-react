import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { flavor } from '../../flavor';

import * as Styles from './styles';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { urls } from '../../route';
import { useDispatch, useSelector } from 'react-redux';
import { UserTypes } from '../../store/ducks/User';
// import { Container } from './styles';

const Login: React.FC = () => {
  //dispatch
  const dispatch = useDispatch();
  const user = useSelector((s: any) => s.User);
  // useState de valores
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // useState mostrar senha
  const [showPass, setShowPass] = useState<boolean>(false);
  //route

  const navigate = useNavigate();
  //funcoes
  function logar() {
    dispatch({
      type: UserTypes.LOGIN_REQUEST,
      username: username,
      password: password,
    });
  }
  //useEffects
  useEffect(() => {
    console.log('useEffect user:', user);
    if (!!user) {
      if (user.logado) {
        navigate(urls.home);
      }
    }
  }, [user]);
  return (
    <Styles.MainContainer>
      <Styles.CardContainer>
        <Styles.LoginTextInput
          label="Username"
          variant="outlined"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <Styles.LoginTextInputPass
          sx={{ m: 1, width: '25ch' }}
          variant="outlined"
          style={{ marginTop: 20 }}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPass ? 'text' : 'password'}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => {
                    setShowPass(!showPass);
                  }}
                  edge="end"
                >
                  {showPass ? <FaEye /> : <FaEyeSlash />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </Styles.LoginTextInputPass>

        <Styles.LoginButton
          variant="outlined"
          onClick={() => {
            logar();
          }}
        >
          Login
        </Styles.LoginButton>
        <Styles.LoginButton
          variant="outlined"
          onClick={() => {
            navigate(urls.register);
          }}
        >
          Register
        </Styles.LoginButton>
      </Styles.CardContainer>
    </Styles.MainContainer>
  );
};

export default Login;
