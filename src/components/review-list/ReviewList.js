import React from 'react';
import PropTypes from 'prop-types';
import ReviewListRow from './ReviewListRow';
import './ReviewListRow.css';

const ReviewList = ({ reviews }) => {
  const reviewList = reviews.map(review => (
    <ReviewListRow key={review.reviewId} review={review} />
  ));

  return <div>{reviewList}</div>;
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewList;
