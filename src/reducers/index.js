import { combineReducers } from 'redux';
import reviewReducer from './review.reducer';

export default combineReducers({
  reviews: reviewReducer
});
