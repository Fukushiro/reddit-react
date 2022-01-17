import { all, put, takeLatest } from 'redux-saga/effects';
import { authUserService } from '../../../services/user.service';
import { UserCreators, UserTypes } from './index';
function* loginRequest({ username, password }) {
  try {
    const { funcionou, response } = yield authUserService({
      username: username,
      password: password,
    });

    if (funcionou) {
      yield put(UserCreators.login(response.data.user));
    }
  } catch (e) {
    console.log('loginRequest:', e);
  }
}

export default all([takeLatest(UserTypes.LOGIN_REQUEST, loginRequest)]);
