import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useGlobalContext } from '../../contexts/GlobalStore';
import ReviewTile from './ReviewList/ReviewTile';
import MoreAdd from './ReviewList/MoreAdd';
import Breakdown from './Breakdown';

function RatingsAndReviews() {
  const {
    productID, setProductID, reviews, setReviews,
  } = useGlobalContext();

  const noMoreReviews = useRef(false);

  const getReviews = function getReviews(pageNum = 1) {
    console.log('get reviews is run with the following pageNum:\n', pageNum)
    axios.get('/reviews', {
      params: {
        product_id: productID,
        count: 2,
        sort: 'newest',
        page: pageNum,
      },
    })
      .then((result) => {
        console.log('Value of reviews after RatingsAndReviews() axios get request:\n', result.data.results);
        if (result.data.results.length === 0) {
          noMoreReviews.current = true;
        }
        setReviews((prevReviews) => result.data.results.concat(prevReviews));
      })
      .then(() => {})
      .catch((err) => {
        console.log('Error in axios get request in client function RatingsAndRevies():\n', err);
      });
  };

  useEffect(getReviews, [productID, setReviews]);

  return (
    <Container>
      <BreakdownContainer>
        <Breakdown productID={productID} />
      </BreakdownContainer>
      <ReviewListContainer>
        <h3>
          &nbsp;
          {reviews.length}
          &nbsp;
          reviews, sorted by&nbsp;
          <u>~sort placeholder~</u>
        </h3>
        <ReviewTilesContainer>
          {reviews.map((review) => (
            <ReviewTile key={review.review_id} review={review} />
          ))}
        </ReviewTilesContainer>
        {/* Need to split more button and add button into
        their own compnents and have add conitionally render
        if there are no reviews */}
        <MoreAddContainer>
          <MoreAdd
            reviews={reviews}
            getReviews={(pageNum) => getReviews(pageNum)}
            noMoreReviews={noMoreReviews}
          />
        </MoreAddContainer>
      </ReviewListContainer>
    </Container>
  );
}

export default RatingsAndReviews;

const Container = styled.div`
  display: flex;
  padding: 1em;
  background: ;
`;

const ReviewListContainer = styled.div`
  padding: 1em;
  background: ;
  width: 80%;
`;

const ReviewTilesContainer = styled.div`
  padding: 1em;
  background: ;
  width: 80%;
  max-height: 25em;
  overflow: auto;
`;

const MoreAddContainer = styled.div`
  padding: 1em;
  background: ;
`;

const BreakdownContainer = styled.div`
  padding: 1em;
  background: ;
  width: 20%;
`;
