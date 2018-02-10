import { combineReducers } from 'redux';

import newsReducer from './news';
// Combine all the reducers
const rootReducer = combineReducers({
    news: newsReducer
})

export default rootReducer;
