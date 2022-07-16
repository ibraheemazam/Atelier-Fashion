import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useGlobalContext } from '../../contexts/GlobalStore';
import ReviewTile from './ReviewList/ReviewTile';
import MoreAdd from './ReviewList/MoreAdd';
import Breakdown from './Breakdown';

function RatingsAndReviews() {
  const {
    productID, reviews, setReviews,
  } = useGlobalContext();

  const [sortOrder, setSortOrder] = useState('helpful');

  const [revCount, setRevCount] = useState(2);
  const noMoreReviews = useRef(false);

  const getReviews = function getReviews() {
    console.log('get reviews is run with the following revCount:\n', revCount);
    axios.get('/reviews', {
      params: {
        product_id: productID,
        count: revCount,
        sort: sortOrder,
      },
    })
      .then((result) => {
        console.log('Value of reviews after RatingsAndReviews() axios get request:\n', result.data.results);
        setReviews(
          (prevState) => {
            if (JSON.stringify(result.data.results) === JSON.stringify(prevState)) {
              noMoreReviews.current = true;
            }
            return result.data.results;
          },
        );
      })
      .then(() => {})
      .catch((err) => {
        console.log('Error in axios get request in client function RatingsAndRevies():\n', err);
      });
  };

  useEffect(getReviews, [productID, setReviews, sortOrder, revCount]);

  const handleSortSelect = function handleSortSelect(event) {
    console.log(event.target.value);
    setSortOrder(event.target.value);
  };

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
          <u>
            <select onChange={handleSortSelect}>
              <option value="relevant">Relevance</option>
              <option value="newest">Newest</option>
              <option value="helpful">Helpful</option>
            </select>
          </u>
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
            setRevCount={setRevCount}
            getReviews={(thingg) => getReviews(thingg)}
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
