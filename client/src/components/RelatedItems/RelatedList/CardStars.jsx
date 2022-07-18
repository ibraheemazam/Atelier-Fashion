import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function CardStars(stars) {
  // console.log('Star data:', stars);
  const totalStars = [];
  let reviews = stars.reviewID.results;
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

const Stars = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export default CardStars;
