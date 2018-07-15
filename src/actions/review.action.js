import ReviewService from '../services/review.service';
import { toast } from 'react-toastify';
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

const showErrorMessage = message => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    duration: 3000
  });
};

export const fetchReviews = page => async dispatch => {
  dispatch(fetchReviewsRequest);
  try {
    const response = await ReviewService.getReviews(page);
    dispatch(fetchReviewsSuccess(response.reviews, response.hasMore));
  } catch (ex) {
    console.log(ex);
    const error = ex.response ? ex.response.data.error : ex;
    let message = error.message || error;

    dispatch(fetchReviewsFailure(message));
    showErrorMessage(message);
  }
};
