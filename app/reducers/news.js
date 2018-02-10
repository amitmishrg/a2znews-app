import { fromJS, toJS } from 'immutable';
import { InitialState } from './initialState';

import {
  FETCH_HEADLINES
} from '../constant/index';

const initialState = fromJS(InitialState);

function news(state = initialState, action) {
    switch (action.type) {
      case FETCH_HEADLINES:
        return state
              .setIn(['headlines', 'loader'], true);
        default:
            return state;
    }
};

export default news;
