import {
  REVIEWS_FETCH_REQUEST,
  REVIEWS_FETCH_SUCCESS,
  REVIEWS_FETCH_FAILURE
} from '../actions/review.action';

export default function reviewReducer(
  state = {
    isLoading: false,
    error: false,
    hasMore: true,
    payload: []
  },
  action
) {
  switch (action.type) {
    case REVIEWS_FETCH_REQUEST:
      return { ...state, isLoading: true, error: false, hasMore: false };
    case REVIEWS_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        payload: state.payload.concat(action.payload),
        hasMore: action.hasMore
      };
    case REVIEWS_FETCH_FAILURE:
      return { ...state, isLoading: false, error: true, hasMore: false };

    default:
      return state;
  }
}
