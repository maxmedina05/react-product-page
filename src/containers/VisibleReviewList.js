import { connect } from 'react-redux';
import { fetchReviews } from '../actions/review.action';
import ReviewList from '../components/review-list/ReviewList';
import _ from 'lodash';
import Moment from 'moment';

const isStringEmptyOrNull = str => str === null || str === '';

const groupByMonth = ({ reviewCreated }) =>
  new Moment(reviewCreated).format('YYYY-MM');
const groupByDay = ({ reviewCreated }) =>
  new Moment(reviewCreated).format('YYYY-MM-DD');
const groupByWeek = ({ reviewCreated }) =>
  new Moment(reviewCreated).format('YYYY[W]WW');

const aggregationToArray = aggregate => {
  const result = Object.keys(aggregate).map(key => {
    if (aggregate.hasOwnProperty(key)) {
      return {
        header: key,
        reviews: aggregate[key]
      };
    }
  });
  return result;
};

const filterReviews = (reviews, filter) => {
  let results = reviews;

  results = results.filter(x => {
    if (filter.oneStar && x.stars === 1) return x;
    if (filter.twoStar && x.stars === 2) return x;
    if (filter.threeStar && x.stars === 3) return x;
    if (filter.fourStar && x.stars === 4) return x;
    if (filter.fiveStar && x.stars === 5) return x;
  });

  if (!isStringEmptyOrNull(filter.query)) {
    const re = new RegExp(filter.query, 'i');
    results = results.filter(x => re.test(x.title));
  }

  if (!isStringEmptyOrNull(filter.orderBy)) {
    results = _.orderBy(results, 'reviewCreated', filter.orderBy);
  }

  if (!isStringEmptyOrNull(filter.groupBy)) {
    if (filter.groupBy === 'day') {
      results = aggregationToArray(_.groupBy(results, groupByDay));
    }
    if (filter.groupBy === 'month') {
      results = aggregationToArray(_.groupBy(results, groupByMonth));
    }
    if (filter.groupBy === 'week') {
      results = aggregationToArray(_.groupBy(results, groupByWeek));
    }
  }

  return results;
};

const mapStateToProps = ({ reviews, filter }) => {
  return {
    reviews: filterReviews(reviews.payload, filter),
    hasMore: reviews.hasMore,
    isLoading: reviews.isLoading,
    error: reviews.error,
    filter
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMoreReviews: page => dispatch(fetchReviews(page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewList);
