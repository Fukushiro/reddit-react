import { all } from 'redux-saga/effects';
import User from './User/saga';
import Header from './Header/saga';

export default function* rootSaga(): any {
  return yield all([User, Header]);
}
