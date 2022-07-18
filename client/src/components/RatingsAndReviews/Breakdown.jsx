import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Breakdown({ revMeta }) {
  if (!revMeta.product_id) {
    return (
      <div />
    );
  }

  const recommendPercentage = Math.trunc(
    (parseInt(revMeta.recommended.true, 10)
    / (parseInt(revMeta.recommended.false, 10)
    + parseInt(revMeta.recommended.true, 10))) * 100,
  );

  const aveRatingCalc = (ratingsObj) => {
    let totalRatings = 0;
    let totalVotes = 0;
    const entries = Object.entries(ratingsObj);
    entries.forEach((entry) => {
      const rating = parseInt(entry[0], 10);
      const votes = parseInt(entry[1], 10);
      totalVotes += votes;
      totalRatings += rating * votes;
    });
    return Math.round((totalRatings / totalVotes) * 100) / 100;
  };

  const aveRating = aveRatingCalc(revMeta.ratings);

  return (
    <div>
      RATINGS &#38; REVIEWS
      <RatingHeader>{aveRating}</RatingHeader>
      <p>
        {recommendPercentage}
        % of reviews recommend this product
      </p>
      {
        Object.keys(revMeta.ratings).map((rating) => (
          <p key={rating}>
            <u>{`${rating} stars`}</u>
            <br />
          </p>
        ))
      }
      <br />
      <div>
        <div>Size</div>
        <div>Comfort</div>
      </div>
    </div>
  );
}

Breakdown.propTypes = {
  revMeta: PropTypes.shape({
    characteristics: PropTypes.shape({}),
    product_id: PropTypes.string.isRequired,
    ratings: PropTypes.shape({}),
    recommended: PropTypes.shape({
      true: PropTypes.string,
      false: PropTypes.string,
    }),
  }).isRequired,
};

export default Breakdown;

const RatingHeader = styled.div`
  font-size: 4em;
`;
