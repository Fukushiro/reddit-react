import { all } from 'redux-saga/effects';
import User from './User/saga';

export default function* rootSaga(): any {
  return yield all([User]);
}
