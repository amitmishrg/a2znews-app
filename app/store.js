import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers/index'; //Import the reducer
import saga from './saga/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Connect our store to the reducers
// mount it on the Store
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

// then run the saga
//sagaMiddleware.run(saga);

export default store;
