import axios from 'axios';

const BASE_API_ENDPOINT =
  'https://sellics-frontend-test.herokuapp.com/reviews/';

const options = {
  headers: {
    'Content-Type': 'application/json'
  }
};

async function getReviews(page) {
  return (await axios.get(BASE_API_ENDPOINT + page), options).data;
}

const ReviewService = {
  getReviews
};

export default ReviewService;
