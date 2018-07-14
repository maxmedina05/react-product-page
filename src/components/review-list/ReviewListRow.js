import React from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';

import StarsRating from '../stars-rating/StarsRating';

const trimText = text => {
  return text.length > 15 ? text.substring(0, 15) + '...' : text;
};

const ReviewListRow = ({ review }) => {
  return (
    <div className="review-list-row">
      <div className="review-list-header">
        <span>
          <img
            alt={review.title}
            src="http://via.placeholder.com/100x100"
            width="42"
            height="42"
          />
        </span>
        <span className="review-info">
          <div className="label">DATE</div>
          <div>{Moment(review.reviewCreated).format('DD.MM.YYYY')}</div>
        </span>
        <span className="review-info">
          <div className="label">STARS</div>
          <div>
            <StarsRating count={review.stars} total={5} />
          </div>
        </span>
        <span className="review-info">
          <div className="label">{review.childAsin}</div>
          <div>{trimText(review.productTitle)}</div>
        </span>
      </div>
      <div className="review-list-row-description">
        <h6 className="review-title">{review.title}</h6>
        <p className="review-content">{review.content}</p>
      </div>
    </div>
  );
};

ReviewListRow.propTypes = {
  review: PropTypes.shape({
    reviewId: PropTypes.string,
    childAsin: PropTypes.string,
    reviewCreated: PropTypes.number,
    content: PropTypes.string,
    title: PropTypes.string,
    productTitle: PropTypes.string,
    productImg: PropTypes.string,
    stars: PropTypes.number
  })
};

export default ReviewListRow;
