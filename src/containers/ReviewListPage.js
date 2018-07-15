import { connect } from 'react-redux';
import { fetchReviews } from '../actions/review.action';
import ReviewListPage from '../components/ReviewListPage';

const mapDispatchToProps = dispatch => ({
  fetchReviews: page => dispatch(fetchReviews(page))
});

export default connect(
  null,
  mapDispatchToProps
)(ReviewListPage);
