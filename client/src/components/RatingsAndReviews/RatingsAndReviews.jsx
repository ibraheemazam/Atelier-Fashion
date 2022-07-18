import React, {
  useEffect, useRef, useState, useCallback,
} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useGlobalContext } from '../../contexts/GlobalStore';
import ReviewTile from './ReviewList/ReviewTile';
import MoreRevs from './ReviewList/MoreRevs';
import AddRev from './AddRev/AddRev';
import Breakdown from './Breakdown';

function RatingsAndReviews() {
  const {
    productID, reviews, setReviews, revMeta, setRevMeta,
  } = useGlobalContext();

  const [sortOrder, setSortOrder] = useState('relevant');

  const [revCount, setRevCount] = useState(2);
  const prevSortOrder = useRef(sortOrder);
  const noMoreReviews = useRef(false);

  const getReviews = useCallback(
    () => {
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
              if (JSON.stringify(prevState) === JSON.stringify(result.data.results)) {
                if (prevSortOrder.current === sortOrder) {
                  noMoreReviews.current = true;
                } else {
                  prevSortOrder.current = sortOrder;
                }
              }
              return result.data.results;
            },
          );
        })
        .then(() => {})
        .catch((err) => {
          console.log('Error in axios get request in client function RatingsAndRevies():\n', err);
        });
    },
    [productID, setReviews, sortOrder, revCount],
  );

  const getMetaData = useCallback(
    () => {
      axios.get('/reviews/meta', {
        params: {
          product_id: productID,
        },
      })
        .then((result) => {
          console.log(result.data);
          setRevMeta(result.data);
        })
        .catch((err) => {
          console.log('error in getMetaData() function inside Breakdown.jsx:/n', err);
        });
    },
    [productID, setRevMeta],
  );

  useEffect(() => {
    getReviews();
    getMetaData();
  }, [productID, setReviews, sortOrder, revCount, getReviews, getMetaData]);

  const handleSortSelect = function handleSortSelect(event) {
    console.log(event.target.value);
    setSortOrder(event.target.value);
  };

  return (
    <Container id="ratings-and-reviews">
      <BreakdownContainer>
        <Breakdown productID={productID} revMeta={revMeta} />
      </BreakdownContainer>
      <ReviewListContainer>
        <RevListHeader>
          &nbsp;
          {reviews.length}
          &nbsp;
          reviews, sorted by&nbsp;
          <select onChange={handleSortSelect}>
            <option value="relevant">Relevance</option>
            <option value="newest">Newest</option>
            <option value="helpful">Helpful</option>
          </select>
        </RevListHeader>
        <ReviewTilesContainer>
          {reviews.map((review) => (
            <ReviewTile key={review.review_id} review={review} />
          ))}
        </ReviewTilesContainer>
        {/* Need to split more button and add button into
        their own compnents and have add conitionally render
        if there are no reviews */}
        <MoreAddContainer>
          {
            reviews.length >= 2
            && (
              <MoreRevs
                reviews={reviews}
                setRevCount={setRevCount}
                getReviews={(thingg) => getReviews(thingg)}
                noMoreReviews={noMoreReviews}
              />
            )
          }
          <AddRev revMeta={revMeta} productID={productID} />
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

const RevListHeader = styled.div`
  padding: 1em;
  font-size: 1.3em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  display: flex;
`;

const ReviewListContainer = styled.div`
  padding: 1em;
  background: ;
  width: 80%;
`;

const ReviewTilesContainer = styled.div`
  padding: 1em;
  background: ;
  max-height: 25em;
  overflow: auto;
`;

const MoreAddContainer = styled.div`
  padding: 1em;
  display: flex;
  width: 20em;
  justify-content: space-around;
  margin-left: 20px;
`;

const BreakdownContainer = styled.div`
  padding: 1em;
  background: ;
  width: 20%;
`;
