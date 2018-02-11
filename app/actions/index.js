import {
  FETCH_HEADLINES,
  FETCH_HEADLINES_SUCCESS,
  FETCH_HEADLINES_FAIL
} from '../constant/index';

export function fetchHeadlines() {
  return {
    type: FETCH_HEADLINES
  };
}

export function fetchHeadlinesSuccess(articles) {
  return {
    type: FETCH_HEADLINES_SUCCESS,
    articles
  };
}

export function fetchHeadlinesFail(err) {
  return {
    type: FETCH_HEADLINES_FAIL,
    err
  };
}
