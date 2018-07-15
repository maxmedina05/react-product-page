import { connect } from 'react-redux';
import { fetchReviews } from '../actions/review.action';
import ReviewList from '../components/review-list/ReviewList';

const mapStateToProps = ({ reviews }) => ({
  reviews: reviews.payload,
  isLoading: reviews.isLoading,
  error: reviews.error
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewList);
