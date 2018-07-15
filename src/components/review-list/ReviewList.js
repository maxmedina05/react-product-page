import React from 'react';
import PropTypes from 'prop-types';
import ReviewListRow from './ReviewListRow';
import ReviewListRowHeader from './ReviewListRowHeader';
import InfiniteScroll from 'react-infinite-scroller';
import './ReviewListRow.css';

const ReviewList = ({ reviews, filter, hasMore, fetchMoreReviews }) => {
  let reviewList = null;

  if (filter.groupBy === '') {
    reviewList = reviews.map(review => (
      <ReviewListRow key={review.reviewId} review={review} />
    ));
  } else {
    reviewList = reviews.map(({ header, reviews }) => (
      <ReviewListRowHeader
        key={header}
        header={header}
        reviews={reviews}
        groupBy={filter.groupBy}
      />
    ));
  }

  return (
    <InfiniteScroll pageStart={1} hasMore={hasMore} loadMore={fetchMoreReviews}>
      {reviewList}
    </InfiniteScroll>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewList;
