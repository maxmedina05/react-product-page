import React, { Component, Fragment } from 'react';
import Filter from '../containers/Filter';
// import Filter from './filter/Filter';
// import ReviewList from './review-list/ReviewList';
import ReviewList from '../containers/VisibleReviewList';

export default class ReviewListPage extends Component {
  componentDidMount() {
    this.props.fetchReviews(1);
  }

  render() {
    return (
      <Fragment>
        <Filter />
        <ReviewList />
      </Fragment>
    );
  }
}
