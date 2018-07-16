import React from 'react';
import PropTypes from 'prop-types';
import ReviewListRow from './ReviewListRow';
import ReviewListRowHeader from './ReviewListRowHeader';
import InfiniteScroll from 'react-infinite-scroller';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  handleLoadMore(page) {
    this.props.fetchMoreReviews(page);
  }

  render() {
    const { reviews, filter, isLoading, hasMore } = this.props;
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
      <InfiniteScroll
        pageStart={0}
        hasMore={!isLoading && hasMore}
        loadMore={this.handleLoadMore}
      >
        {reviewList}
      </InfiniteScroll>
    );
  }
}

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewList;
