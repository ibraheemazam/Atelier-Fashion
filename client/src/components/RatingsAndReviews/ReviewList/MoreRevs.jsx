import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function MoreRevs({ productID, setRevCount, revListLength }) {
  const noMoreReviews = useRef(false);
  const handleMoreReviews = function handleMoreReviews() {
    setRevCount((prevRevCount) => {
      if (prevRevCount + 2 >= revListLength) {
        noMoreReviews.current = true;
        return revListLength;
      }
      return prevRevCount + 2;
    });
  };

  useEffect(() => {
    noMoreReviews.current = false;
  }, [productID]);

  return (
    <div>
      {!noMoreReviews.current
        && (
          <MoreButton type="button" onClick={() => handleMoreReviews()}>
            MORE REVIEWS
          </MoreButton>
        )}
    </div>
  );
}

MoreRevs.propTypes = {
  productID: PropTypes.number.isRequired,
  setRevCount: PropTypes.func.isRequired,
  revListLength: PropTypes.number.isRequired,
};

export default MoreRevs;

const MoreButton = styled.button`
  padding: 1em;
  font-size: .9em;
  font-weight: bold;
`;
