import React from 'react';
import PropTypes from 'prop-types';
import ReviewListRow from './ReviewListRow';
import ReviewListRowHeader from './ReviewListRowHeader';
import './ReviewListRow.css';

const ReviewList = ({ reviews, filter }) => {
  if (filter.groupBy === '') {
    const reviewList = reviews.map(review => (
      <ReviewListRow key={review.reviewId} review={review} />
    ));
    return <div>{reviewList}</div>;
  } else {
    const reviewListWithHeader = reviews.map(({ header, reviews }) => (
      <ReviewListRowHeader
        key={header}
        header={header}
        reviews={reviews}
        groupBy={filter.groupBy}
      />
    ));
    return <div>{reviewListWithHeader}</div>;
  }
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewList;
