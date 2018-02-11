import { fromJS, toJS } from 'immutable';
import { InitialState } from './initialState';

import {
  FETCH_HEADLINES,
  FETCH_HEADLINES_SUCCESS
} from '../constant/index';

const initialState = fromJS(InitialState);

function news(state = initialState, action) {
    switch (action.type) {
      case FETCH_HEADLINES:
        return state
              .setIn(['headlines', 'loader'], true);
      case FETCH_HEADLINES_SUCCESS:
        return state
              .setIn(['headlines', 'loader'], false)
              .setIn(['headlines', 'articles'], action.articles);
        default:
            return state;
    }
};

export default news;
