import { connect } from 'react-redux';
import { fetchReviews } from '../actions/review.action';
import ReviewListPage from '../components/ReviewListPage';

const mapStateToProps = ({ reviews }) => ({
  reviews: reviews.payload,
  isLoading: reviews.isLoading,
  error: reviews.error
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: page => dispatch(fetchReviews(page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewListPage);
