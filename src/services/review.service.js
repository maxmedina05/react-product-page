import axios from 'axios';
import { REVIEWS } from './reviews.mock';

const BASE_API_ENDPOINT =
  'https://sellics-frontend-test.herokuapp.com/reviews/';

async function getReviews(page) {
  return (await axios.get(BASE_API_ENDPOINT + page)).data;
}

function getMockReviews(page) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        reviews: REVIEWS,
        hasMore: true
      });
    }, 1000);
  });
}

const ReviewService = {
  getReviews,
  getMockReviews
};

export default ReviewService;
