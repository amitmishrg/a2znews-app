import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers/index'; //Import the reducer
import rootSaga from './saga/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Connect our store to the reducers
// mount it on the Store
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
