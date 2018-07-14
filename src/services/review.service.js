import axios from 'axios';

const BASE_API_ENDPOINT =
  'https://sellics-frontend-test.herokuapp.com/reviews/';

function getReviews(page) {
  return axios.get(BASE_API_ENDPOINT + page);
}

const ReviewService = {
  getReviews
};

export default ReviewService;
