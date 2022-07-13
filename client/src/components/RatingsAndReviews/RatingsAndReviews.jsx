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
        product_id: 40367,
        count: 50,
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
  }, [productID, setReviews]);

  return (
    <Container>
      <h4>
        &nbsp;
        {reviews.length}
        &nbsp;
        reviews, sorted by ~sort placeholder~`
      </h4>
      <ReviewContainer>
        {reviews.map((review) => (
          <ReviewTile key={review.review_id} review={review} />
        ))}
      </ReviewContainer>
    </Container>
  );
}

export default RatingsAndReviews;

const Container = styled.div`
  padding: 1em;
  background: ;
`;

const ReviewContainer = styled.div`
  padding: 1em;
  background: ;
`;