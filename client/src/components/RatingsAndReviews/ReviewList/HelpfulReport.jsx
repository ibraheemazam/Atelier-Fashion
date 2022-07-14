import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

function HelpfulReport({ review }) {
  const [helpfulness, setHelpfulness] = useState(review.helpfulness);
  // is it good to do this? Would it be better to pass down the getReviews func from
  // RatingsAndReviews? That would send a get request after put is sent. Rn there are
  // two sources of truth
  const helpfulClicked = useRef(false);
  const reportClicked = useRef(false);

  const putRequester = function putRequester(reviewID, helpOrReport) {
    return (axios.put(`/reviews/${reviewID}/${helpOrReport}`)
      .then((result) => {
        console.log(`put to change ${helpOrReport} value of review ${reviewID} was sent:\n`, result);
      })
      .catch((err) => {
        console.log(`error for put to change ${helpOrReport} of review ${reviewID}:\n`, err);
      }));
  };

  const handleHelpfulClick = function handleHelpfulClick() {
    const reviewID = review.review_id;
    if (!helpfulClicked.current) {
      putRequester(reviewID, 'helpful')
        .then(() => {
          setHelpfulness(helpfulness + 1);
          helpfulClicked.current = true;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleReport = function handleReport() {
    const reviewID = review.review_id;
    if (!reportClicked.current) {
      putRequester(reviewID, 'report')
        .then(() => {
          reportClicked.current = true;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <HelpfulnessDiv>
      <YesButton>Was this review helpful?</YesButton>
      <YesButton onClick={() => handleHelpfulClick()}>
        <u>Yes</u>
        &nbsp;
        {`(${helpfulness})`}
      </YesButton>
      <YesButton>|</YesButton>
      <YesButton onClick={() => handleReport()}>
        <u>Report</u>
      </YesButton>
    </HelpfulnessDiv>
  );
}

HelpfulReport.propTypes = {
  review: PropTypes.shape({
    body: PropTypes.string,
    review_id: PropTypes.number,
    summary: PropTypes.string,
    helpfulness: PropTypes.number,
  }).isRequired,
};

export default HelpfulReport;

const HelpfulnessDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 295px;
`;

const YesButton = styled.div`
  display: flex;
`;
