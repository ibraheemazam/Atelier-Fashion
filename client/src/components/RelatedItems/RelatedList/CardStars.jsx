import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function CardStars({ reviewID }) {
  const baseStars = [];
  const filledStars = [];
  const reviews = reviewID.results;
  let average = 0;
  for (let i = 0; i < reviews.length; i += 1) {
    average += reviews[i].rating;
  }
  average /= reviews.length;
  const partial = average * 20;
  console.log('Partial star:', partial);
  for (let i = 0; i < 5; i += 1) {
    baseStars.push(<span className="empty-star" key={i}>&#9734;</span>);
  }
  for (let i = 0; i < 5; i += 1) {
    filledStars.push(<span className="filled-star" key={i}>&#9733;</span>);
  }
  console.log('Average:', average);
  console.log('Partial:', partial);
  console.log(baseStars);
  console.log(filledStars);

  return (
    <Stars>
      <BaseStar className="star">{baseStars}</BaseStar>
      <FilledStar className="star" size={partial}>{filledStars}</FilledStar>
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
  position: relative;
  margin-left: auto;
  margin-right: auto;
  font-size: 25px;
  color: gray;
`;

const BaseStar = styled.span`
  position: relative;
`;

const FilledStar = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  width: ${(props) => props.size}%;
  overflow:hidden;
  flex-direction: row;
  color: yellow;
  font-size: bold;
`;

export default CardStars;
