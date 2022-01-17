import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { flavor } from '../../flavor';

import * as Styles from './styles';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { urls } from '../../route';
import { createUserService } from '../../services/user.service';
// import { Container } from './styles';

const Login: React.FC = () => {
  // useState de valores
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // useState mostrar senha
  const [showPass, setShowPass] = useState<boolean>(false);
  //route
  const navigate = useNavigate();
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
          onClick={async () => {
            const { response, funcionou } = await createUserService({
              username: username,
              password: password,
            });
            console.log('Register:', response);

            if (funcionou) {
              navigate(urls.login);
            }
          }}
        >
          Register
        </Styles.LoginButton>
      </Styles.CardContainer>
    </Styles.MainContainer>
  );
};

export default Login;
