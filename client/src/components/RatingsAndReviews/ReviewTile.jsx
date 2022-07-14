import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import axios from 'axios';
import Helpfullness from './Helpfullness';

function ReviewTile({ review }) {
  const [helpfulness, setHelpfulness] = useState(review.helpfulness);
  // is it good to do this? Would it be better to pass down the getReviews func from
  // RatingsAndReviews? That would send a get request after put is sent. Rn there are
  // two sources of truth
  const helpfulClicked = useRef(false);
  const starCount = [];

  for (let i = 0; i < review.rating; i += 1) {
    starCount.push(i);
  }

  const handleHelpfulClick = function handleHelpfulClick(event) {
    console.log(event.target.value);
    const YorN = event.target.value;
    const reviewID = review.review_id;

    if (!helpfulClicked.current) {
      axios.put(`/reviews/${reviewID}/helpful`)
        .then((result) => {
          console.log(`put to change helpful of review ${reviewID} was sent:\n`, result);
          setHelpfulness(
            YorN === 'yes'
              ? helpfulness + 1
              : helpfulness - 1,
          );
          helpfulClicked.current = true;
        })
        .catch((err) => {
          console.log(`error for put to change helpful of review ${reviewID}:\n`, err);
        });
    }
  };

  return (
    <Container>
      <br />
      <StarsDateName>
        <div>
          Star count:
          {review.rating}
        </div>
        {/* {starCount.map((star) => (
          <RevDiv key={star} />
        ))}
        <br /> */}
        <DateName>
          <div>
            {`${review.reviewer_name},`}
            &nbsp;
          </div>
          <div>
            {format(parseISO(review.date), 'MMMM dd, yyyy')}
          </div>
        </DateName>
      </StarsDateName>
      <Summary>{review.summary}</Summary>
      {/* need to add word break truncation to summary */}
      <div>
        {review.body}
        {/* need to add conditional formatting for past 250 words */}
      </div>
      <br />
      {review.recommend
      && <div> &#10003; I recommend this product</div>}
      <br />
      {
        true
        && (
        <Response>
          <h4>Response:</h4>
          <br />
          <div>I wish this was a real repsonse. Thanks for reviewing, but no thanks</div>
        </Response>
        )
      }
      <br />
      <Helpfullness review={review} />
    </Container>
  );
}

ReviewTile.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ReviewTile;

const Container = styled.div`
  border-bottom: 1px solid;
`;

const StarsDateName = styled.div`
  display: flex;
  justify-content: space-between;
  background: ;
`;

const DateName = styled.div`
  display: flex;
  justify-content: flex-end;
  background: ;
`;

const Response = styled.div`
  padding: 1em;
  background: lightgrey;
`

const Summary = styled.h3`
  display: flex;
  background: ;
`;

const Helpfulness = styled.div`
  display: flex;
`;

const RevDiv = styled.div`
  margin: 50px 0;
  position: relative;
  display: block;
  color: red;
  width: 0px;
  height: 0px;
  border-right: 100px solid transparent;
  border-bottom: 70px solid red;
  border-left: 100px solid transparent;
  transform: rotate(35deg);
  &:before {
    border-bottom: 80px solid red;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    position: absolute;
    height: 0;
    width: 0;
    top: -45px;
    left: -65px;
    display: block;
    content: '';
    transform: rotate(-35deg);
  };
  &:after {
    position: absolute;
    display: block;
    color: red;
    top: 3px;
    left: -105px;
    width: 0px;
    height: 0px;
    border-right: 100px solid transparent;
    border-bottom: 70px solid red;
    border-left: 100px solid transparent;
    transform: rotate(-70deg);
    content: '';
  };
`;
