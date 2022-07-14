import React, { useEffect } from 'react';
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

  const getReviews = function getReviews() {
    axios.get('/reviews', {
      params: {
        product_id: productID,
        count: 2,
        sort: null,
      },
    })
      .then((result) => {
        console.log('Value of reviews after RatingsAndReviews() axios get request:\n', result.data.results);
        setReviews(result.data.results);
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
        <Breakdown />
      </BreakdownContainer>
      <ReviewListContainer>
        <h3>
          &nbsp;
          {reviews.length}
          &nbsp;
          reviews, sorted by&nbsp;
          <u>~sort placeholder~</u>
        </h3>
        {reviews.map((review) => (
          <ReviewTile key={review.review_id} review={review} />
        ))}
        <MoreAddContainer>
          <MoreAdd reviews={reviews} />
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

const MoreAddContainer = styled.div`
  padding: 1em;
  background: ;
`;

const BreakdownContainer = styled.div`
  padding: 1em;
  background: ;
  width: 20%;
`;
