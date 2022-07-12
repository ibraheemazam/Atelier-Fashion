import React from 'react';
import PropTypes from 'prop-types';

function ReviewTile({ review }) {
  return (
    <div>
      <div>
        {review.rating}
      </div>
    </div>
  );
}

ReviewTile.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewTile;
