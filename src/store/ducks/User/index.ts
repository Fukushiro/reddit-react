import { createActions, createReducer } from 'reduxsauce';

export const { Types: UserTypes, Creators: UserCreators } = createActions({
  loginRequest: ['username', 'password'],
  login: ['user'],
});

const INITIAL_STATE: {
  user: { id?: number; username?: string } | null;
  logado: boolean;
} = {
  user: null,
  logado: false,
};

function login(state = INITIAL_STATE, action: { user: any }) {
  return {
    ...state,
    user: action.user,
    logado: true,
  };
}

export default createReducer(INITIAL_STATE, {
  [UserTypes.LOGIN]: login,
});
