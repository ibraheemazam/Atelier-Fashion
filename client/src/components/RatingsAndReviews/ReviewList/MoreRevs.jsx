import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function MoreRevs({ noMoreReviews, setRevCount }) {
  const handleMoreReviews = function handleMoreReviews() {
    setRevCount((prevRevCount) => prevRevCount + 2);
  };

  return (
    <div>
      {
        !noMoreReviews.current
        && (
          <MoreButton type="button" onClick={handleMoreReviews}>
            MORE REVIEWS
          </MoreButton>
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

const MoreButton = styled.button`
  padding: 1em;
  font-size: .9em;
  font-weight: bold;
`;
