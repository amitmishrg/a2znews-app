import { call, put, fork, all, takeEvery, takeLatest } from 'redux-saga/effects'
import request from '../utils/fetch';

import {fetchHeadlinesSuccess, fetchHeadlinesFail} from '../actions/index';
import {
  FETCH_HEADLINES
} from '../constant/index';


// worker Saga: will be fired on FETCH_HEADLINES actions
function* fetchHeadlinesData(action) {
  console.log('fied');
  const requestURL = `https://newsapis.herokuapp.com/headlines?country=in&language=`;
  const options = {
    method: 'GET'
  };
   try {
      const data = yield call(request, requestURL, options);
      const articlesList = data && data.articles;
      yield put(fetchHeadlinesSuccess(articlesList));
   } catch (err) {
      yield put(fetchHeadlinesFail(err));
   }
}

/*
  Starts fetchUser on each dispatched `FETCH_HEADLINES` action.
*/
function* fetchHeadlines() {
  yield takeEvery(FETCH_HEADLINES, fetchHeadlinesData);
}


export default function* rootSaga() {
  yield all([
    fork(fetchHeadlines)
  ])
}
