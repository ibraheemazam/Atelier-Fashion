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

  const totalVotesCalc = (ratingsObj) => {
    let totalVotes = 0;
    const entries = Object.entries(ratingsObj);
    entries.forEach((entry) => {
      const votes = parseInt(entry[1], 10);
      totalVotes += votes;
    });
    return totalVotes;
  };

  const totalVotes = totalVotesCalc(revMeta.ratings);

  return (
    <div>
      RATINGS &#38; REVIEWS
      <RatingHeader>{aveRating}</RatingHeader>
      <p>
        {recommendPercentage}
        % of reviews recommend this product
      </p>
      {
        Object.entries(revMeta.ratings).map((ratingEnrty) => (
          <StarRankContainer key={ratingEnrty[0]}>
            <u>{`${ratingEnrty[0]} stars`}</u>
            &nbsp;
            <StarBar width={Math.round((ratingEnrty[1] / totalVotes) * 100)} />
            <br />
            <br />
          </StarRankContainer>
        ))
      }
      <br />
      {Object.entries(revMeta.characteristics).map((charEntry) => (
        <div key={charEntry[1].id}>
          <div>
            {charEntry[0]}
            :&nbsp;
            {/* <ProgBarHorizontal color="pink" />
            <HorizontalProgTrack /> */}
            <HorizontalProgFill width={(parseInt(charEntry[1].value, 10) / 5) * 100} />
            {Math.round(charEntry[1].value * 100) / 100}
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}

Breakdown.propTypes = {
  revMeta: PropTypes.shape({
    characteristics: PropTypes.shape({}),
    product_id: PropTypes.string,
    ratings: PropTypes.shape({}),
    recommended: PropTypes.shape({
      true: PropTypes.string,
      false: PropTypes.string,
    }),
  }).isRequired,
};

export default Breakdown;

const RatingHeader = styled.div`
  padding: .12em;
  font-size: 4em;
`;

const ProgBarHorizontal = styled.div`
  float: left;
  height: 15px;
  width: 100%;
  padding: 12px;
  background: ${(props) => props.color};
`;

const HorizontalProgTrack = styled.div`
  position: relative;
  width: 100%;
  height: 20px;
  background: #ebebeb;
`;

const HorizontalProgFill = styled.div`
  position: relative;
  background: #666;
  height: 20px;
  width: ${(props) => props.width}%;
  color: #fff;
  text-align: center;
  font-family: "Lato","Verdana",sans-serif;
  font-size: 12px;
  line-height: 20px;
`;

const StarRankContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StarBar = styled.div`
  background: #666;
  height: 10px;
  width: ${(props) => props.width}%;
  color: #fff;
`;
