import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

function Helpfulness({ review }) {
  const [helpfulness, setHelpfulness] = useState(review.helpfulness);
  // is it good to do this? Would it be better to pass down the getReviews func from
  // RatingsAndReviews? That would send a get request after put is sent. Rn there are
  // two sources of truth
  const helpfulClicked = useRef(false);

  const putHelpfulRequest = function putHelpfulRequest(reviewID) {
    return (axios.put(`/reviews/${reviewID}/helpful`)
      .then((result) => {
        console.log(`put to change helpful of review ${reviewID} was sent:\n`, result);
      })
      .catch((err) => {
        console.log(`error for put to change helpful of review ${reviewID}:\n`, err);
      }));
  };

  const handleHelpfulClick = function handleHelpfulClick() {
    const reviewID = review.review_id;
    if (!helpfulClicked.current) {
      putHelpfulRequest(reviewID)
        .then(() => {
          setHelpfulness(helpfulness + 1);
          helpfulClicked.current = true;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <HelpfulnessDiv>
      <h5>Was this review helpful?</h5>
      <button type="button" onClick={handleHelpfulClick} value="yes">
        &nbsp;Yes&nbsp;
        {`(${helpfulness})`}
        &nbsp;
      </button>
    </HelpfulnessDiv>
  );
}

Helpfulness.propTypes = {
  review: PropTypes.shape({
    body: PropTypes.string,
    review_id: PropTypes.number,
    summary: PropTypes.string,
    helpfulness: PropTypes.number,
  }).isRequired,
};

export default Helpfulness;

const HelpfulnessDiv = styled.div`
  display: flex;
`;
