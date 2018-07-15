import ReviewService from '../services/review.service';
export const REVIEWS_FETCH_REQUEST = 'FETCH_REVIEWS_REQUEST';
export const REVIEWS_FETCH_SUCCESS = 'FETCH_REVIEWS_SUCCESS';
export const REVIEWS_FETCH_FAILURE = 'FETCH_REVIEWS_FAILURE';

const fetchReviewsRequest = () => ({
  type: REVIEWS_FETCH_REQUEST
});

const fetchReviewsSuccess = (payload, hasMore) => ({
  type: REVIEWS_FETCH_SUCCESS,
  payload,
  hasMore
});

const fetchReviewsFailure = error => ({
  type: REVIEWS_FETCH_FAILURE,
  error
});

export const fetchReviews = page => async dispatch => {
  dispatch(fetchReviewsRequest);
  try {
    const response = await ReviewService.getReviews(page);
    dispatch(fetchReviewsSuccess(response.reviews, response.hasMore));
  } catch (ex) {
    const error = ex.response.data.error;
    let message = error.message || error;

    console.log(message);
    dispatch(fetchReviewsFailure(message));
  }
};
