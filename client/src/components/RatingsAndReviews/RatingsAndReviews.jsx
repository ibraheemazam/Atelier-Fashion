import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useGlobalContext } from '../../contexts/GlobalStore';
import SortList from './ReviewList/SortList';
import ReviewTile from './ReviewList/ReviewTile';
import MoreRevs from './ReviewList/MoreRevs';
import AddRev from './AddRev/AddRev';
import Breakdown from './Breakdown';

// need to change how i get reviews. Just get all at once, then slice.
// if need to change the filter, just make new get request

function RatingsAndReviews() {
  const {
    productID, reviews, setReviews, revMeta, setRevMeta,
  } = useGlobalContext();
  const [sortOrder, setSortOrder] = useState('relevant');
  const [revCount, setRevCount] = useState(2);

  const getReviews = function getReviews() {
    console.log('get reviews is run with the following revCount:\n');
    axios.get('/reviews', {
      params: {
        product_id: productID,
        count: 100,
        sort: sortOrder,
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

  const getMetaData = function getMetaData() {
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
  };

  useEffect(() => {
    getReviews();
    getMetaData();
  }, [productID, sortOrder]);

  useEffect(() => {
    setSortOrder('relevant');
    setRevCount(2);
  }, [productID]);

  return (
    <Container id="ratings-and-reviews">
      <BreakdownContainer>
        <Breakdown productID={productID} revMeta={revMeta} />
      </BreakdownContainer>
      <ReviewListContainer>

        <SortList
          productID={productID}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          revCount={revCount}
        />

        <ReviewTilesContainer>
          {reviews.slice(0, revCount).map((review) => (
            <ReviewTile key={review.review_id} review={review} />
          ))}
        </ReviewTilesContainer>

        <MoreAddContainer>
          {
            reviews.length >= 2
            && (
              <MoreRevs
                productID={productID}
                setRevCount={setRevCount}
                revListLength={reviews.length}
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
