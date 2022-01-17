import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { loadState, saveState } from '../services/LocalStorageService';
import rootReducer from './ducks';
import rootSaga from './ducks/rootSaga';
const persistedState = loadState();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

store.subscribe(() => saveState(store.getState()));

export default store;
