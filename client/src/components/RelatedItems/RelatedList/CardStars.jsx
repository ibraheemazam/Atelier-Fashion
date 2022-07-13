import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function CardStars(card) {
  const [stars, setStars] = useState(0);
  const totalStars = [];
  useEffect(() => {
    axios.get('/relatedStars', { params: { reviewID: card.reviewID } })
      .then((data) => {
        let average = 0;
        for (let i = 0; i < data.data.results.length; i += 1) {
          average += data.data.results[i].rating;
        }
        average /= data.data.results.length;
        setStars(average);
        // console.log('starData:', data);
        // console.log('average:', average);
      })
      .catch((err) => {
        console.log('Card error:', err);
      });
  }, [card]);
  // console.log(Math.ceil(stars));
  for (let i = 0; i < Math.ceil(stars); i += 1) {
    totalStars.push(<span className="star" key={i}>&#9733;</span>);
  }
  for (let i = 0; i < (5 - Math.ceil(stars)); i += 1) {
    totalStars.push(<span className="star" key={Math.ceil(stars) + i}>&#9734;</span>);
  }

  return (
    <Stars>
      {/* <span className="star">&#9733;</span> */}
      <span className="star">{totalStars}</span>
    </Stars>
  );
}

const Stars = styled.div`
  background: #0ABAB5;
`;

export default CardStars;
