import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function CardStars({ reviewID }) {
  // console.log('Star data:', stars);
  const totalStars = [];
  const reviews = reviewID.results;
  let average = 0;
  for (let i = 0; i < reviews.length; i += 1) {
    average += reviews[i].rating;
  }
  average /= reviews.length;
  for (let i = 0; i < Math.round(average); i += 1) {
    totalStars.push(<span className="star" key={i}>&#9733;</span>);
  }
  for (let i = 0; i < (5 - Math.round(average)); i += 1) {
    totalStars.push(<span className="star" key={Math.round(average) + i}>&#9734;</span>);
  }

  return (
    <Stars>
      {/* <span className="star">&#9733;</span> */}
      <span className="star">{totalStars}</span>
    </Stars>
  );
}

CardStars.propTypes = {
  reviewID: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.shape({
      rating: PropTypes.number,
    })),
  }).isRequired,
};

const Stars = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export default CardStars;
