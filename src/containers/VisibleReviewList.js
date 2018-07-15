import { connect } from 'react-redux';
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
    results = _.orderBy(results, 'created', filter.orderBy);
  }

  if (!isStringEmptyOrNull(filter.groupBy)) {
    switch (filter.groupBy) {
      case 'day':
        results = _.groupBy(results, groupByDay);
        break;
      case 'month':
        results = _.groupBy(results, groupByMonth);
        break;
      case 'week':
        results = _.groupBy(results, groupByWeek);
        break;
    }

    results = Object.keys(results).map(key => {
      if (results.hasOwnProperty(key)) {
        return {
          header: key,
          reviews: results[key]
        };
      }
    });
  }

  return results;
};

const mapStateToProps = ({ reviews, filter }) => {
  return {
    reviews: filterReviews(reviews.payload, filter),
    isLoading: reviews.isLoading,
    error: reviews.error,
    filter
  };
};

export default connect(
  mapStateToProps,
  null
)(ReviewList);
