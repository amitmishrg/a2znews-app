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

export function fetchHeadlinesSuccess() {
  return {
    type: FETCH_HEADLINES_SUCCESS
  };
}

export function fetchHeadlinesFail() {
  return {
    type: FETCH_HEADLINES_FAIL
  };
}
