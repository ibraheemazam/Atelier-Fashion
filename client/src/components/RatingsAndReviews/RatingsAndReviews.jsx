import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useGlobalContext } from '../../contexts/GlobalStore';
import ReviewTile from './ReviewTile';

function RatingsAndReviews() {
  const {
    productID, setProductID, reviews, setReviews,
  } = useGlobalContext();

  useEffect(() => {
    axios.get('/reviews', {
      params: {
        product_id: productID,
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
  }, [productID, setReviews]);

  return (
    <OuterContainer>
      <div>Rating and reviews</div>
      <ReviewContainer>
        {reviews.map((review) => (
          <ReviewTile key={review.review_id} review={review} />
        ))}
      </ReviewContainer>
    </OuterContainer>
  );
}

export default RatingsAndReviews;

const OuterContainer = styled.div`
  padding: 1em;
  background: papayawhip;
`;

const ReviewContainer = styled.div`
  padding: 1em;
  background: pink;
`;