import React from 'react';
import PropTypes from 'prop-types';

const sequence = N => Array.from(Array(N).keys());

const StarsRating = ({ count, total }) => {
  const stars = sequence(total).map(
    idx =>
      idx < count ? (
        <i key={idx} className="fas fa-star" />
      ) : (
        <i key={idx} className="far fa-star" />
      )
  );
  return <span>{stars}</span>;
};

/**
 * count is the number of stars highlighted
 * total is the total number of stars
 */
StarsRating.propTypes = {
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default StarsRating;
