import React from 'react';
import PropTypes from 'prop-types';

function MoreRevs({ noMoreReviews, setRevCount }) {
  const handleMoreReviews = function handleMoreReviews() {
    setRevCount((prevRevCount) => prevRevCount + 2);
  };

  return (
    <div>
      {
        !noMoreReviews.current
        && (
          <button type="button" onClick={handleMoreReviews}>
            MORE REVIEWS
          </button>
        )
      }
    </div>
  );
}

MoreRevs.propTypes = {
  noMoreReviews: PropTypes.shape({
    current: PropTypes.bool,
  }).isRequired,
  setRevCount: PropTypes.func.isRequired,
};

export default MoreRevs;
