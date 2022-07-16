import React, { useRef } from 'react';
import styled from 'styled-components';

function MoreAdd({ reviews, getReviews, noMoreReviews }) {
  const revCount = useRef(2);

  const handleMoreReviews = function handleMoreReviews() {
    getReviews(revCount.current += 2);
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
      <button type="button">
        ADD A REVIEW +
      </button>
    </div>
  );
}

export default MoreAdd;
