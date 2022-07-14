import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function Breakdown({ productID }) {
  const [revMeta, setRevMeta] = useState({
    characteristics: {
      Comfort: {},
      Quality: {},
      Size: {},
      Width: {},
    },
    product_id: null,
    ratings: {},
    recommended: {},
  });

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

  useEffect(getMetaData, [productID]);

  const recommendPercentage = Math.trunc(
    (parseInt(revMeta.recommended.true, 10)
    / (parseInt(revMeta.recommended.false, 10)
    + parseInt(revMeta.recommended.true, 10))) * 100,
  );

  // const aveRatingCalc = (ratingsObj) => {
  //   let totalRatings = 0;
  //   // Object.keys(ratingsObj) {
  //   //   let voteCount = parseInt(ratingsObj[rating], 10);
  //   //   totalRatings += {}
  //   // }

  // }

  return (
    <div>
      RATINGS &#38; REVIEWS
      <RatingHeader>3.5</RatingHeader>
      <p>
        {recommendPercentage}
        % of reviews recommend this product
      </p>
      <p><u>5 stars</u></p>
      <p><u>4 stars</u></p>
      <p><u>3 stars</u></p>
      <p><u>2 stars</u></p>
      <p><u>1 stars</u></p>
      <br />
      <div>
        <div>Size</div>
        <div>Comfort</div>
      </div>
    </div>
  );
}

export default Breakdown;

const RatingHeader = styled.div`
  font-size: 4em;
`;
