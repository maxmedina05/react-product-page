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

  let temp = [];
  if (filter.oneStar) {
    temp = temp.concat(results.filter(x => x.stars === 1));
  }
  if (filter.twoStar) {
    temp = temp.concat(results.filter(x => x.stars === 2));
  }
  if (filter.threeStar) {
    temp = temp.concat(results.filter(x => x.stars === 3));
  }
  if (filter.fourStar) {
    temp = temp.concat(results.filter(x => x.stars === 4));
  }
  if (filter.fiveStar) {
    temp = temp.concat(results.filter(x => x.stars === 5));
  }

  results = temp;

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
