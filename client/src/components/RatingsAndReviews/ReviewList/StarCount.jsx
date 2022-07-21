import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function StarCount({ review }) {
  const starCount = [];

  for (let i = 0; i < review.rating; i += 1) {
    starCount.push(i);
  }

  return (
    <div>
      <StarContainer>
        {starCount.map((star) => (
          <div key={star}>&#9733;</div>
        ))}
      </StarContainer>
    </div>
  );
}

StarCount.propTypes = {
  review: PropTypes.shape({
    body: PropTypes.string,
    summary: PropTypes.string,
    recommend: PropTypes.bool,
    rating: PropTypes.number,
    reviewer_name: PropTypes.string,
    date: PropTypes.string,
    response: PropTypes.string,
  }).isRequired,
};

export default StarCount;

const StarContainer = styled.div`
  display: flex;
`;
