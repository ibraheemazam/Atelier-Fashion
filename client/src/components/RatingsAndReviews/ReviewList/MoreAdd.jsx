import React, { useRef } from 'react';
import styled from 'styled-components';

function MoreAdd({ reviews, getReviews, noMoreReviews }) {
  const pageNum = useRef(1);

  const handleMoreReviews = function handleMoreReviews() {
    getReviews(pageNum.current += 1);
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
