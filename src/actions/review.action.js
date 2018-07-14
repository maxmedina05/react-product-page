const REVIEWS_FETCH_REQUEST = 'FETCH_REVIEWS_REQUEST';
const REVIEWS_FETCH_SUCCESS = 'FETCH_REVIEWS_SUCCESS';
const REVIEWS_FETCH_FAILURE = 'FETCH_REVIEWS_FAILURE';

const fetchReviewsRequest = () => ({
  type: REVIEWS_FETCH_REQUEST
});

const fetchReviewsSuccess = payload => ({
  type: REVIEWS_FETCH_SUCCESS,
  payload
});

const fetchReviewsFailure = error => ({
  type: REVIEWS_FETCH_FAILURE,
  error
});
