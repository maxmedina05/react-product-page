import { combineReducers } from 'redux';
import reviewReducer from './review.reducer';
import filterReducer from './filter.reducer';

export default combineReducers({
  reviews: reviewReducer,
  filter: filterReducer
});
