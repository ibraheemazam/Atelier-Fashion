import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function RatingBreakdown({ revMeta, filterReviews }) {
  const [starFilter, setStarFilter] = useState([]);

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

  const handleStarBarClick = (event) => {
    const val = parseInt(event.target.id, 10);
    const ind = starFilter.indexOf(val);
    if (ind > -1) {
      setStarFilter((prevStarFilter) => {
        prevStarFilter.splice(ind, 1);
        return prevStarFilter;
      });
    } else {
      setStarFilter((prevStarFilter) => prevStarFilter.concat(val));
    }
  };

  useEffect(() => {
    filterReviews(starFilter);
    console.log(starFilter);
  }, [starFilter]);

  return (
    Object.entries(revMeta.ratings).map((ratingEntry) => (
      <StarRankContainer key={ratingEntry[0]}>
        <StarLabel>{`${ratingEntry[0]} stars`}</StarLabel>
        &nbsp;
        <StarBarBackground>
          <StarBar
            id={ratingEntry[0]}
            onClick={(event) => handleStarBarClick(event)}
            width={Math.round((ratingEntry[1] / totalVotes) * 100)}
          />
        </StarBarBackground>
        <br />
        <br />
      </StarRankContainer>
    ))
  );
}

RatingBreakdown.propTypes = {
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

export default RatingBreakdown;

const StarRankContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StarLabel = styled.div`
  display: flex;
  text-decoration: underline;
  width: 30%;
`;

const StarBar = styled.div`
  background: #666;
  height: 10px;
  width: ${(props) => props.width}%;
  &:hover {
    background: gold;
  }
`;

const StarBarBackground = styled.div`
  background: lightgrey;
  height: 100%;
  width: 70%;
`;
