import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CardImage from './CardImage.jsx';
import CardStars from './CardStars.jsx';

function Card({ data }) {
  const [info, setInfo] = useState({});
  function changeItem() {
    console.log('changed');
  }
  useEffect(() => {
    axios.get('/relatedItem', { params: { productID: data } })
      .then((data) => {
        setInfo(data.data);
      })
      .catch((err) => {
        console.log('Card error:', err);
      });
  }, [data]);
  return (
    <CardStyle onClick={changeItem}>
      <CardImage imageID={info.id} />
      <Cards>{info.name}</Cards>
      <Cards>{info.category}</Cards>
      <Cards>${info.default_price}</Cards>
      <CardStars reviewID={info.id} />
    </CardStyle>
  );
}

const CardStyle = styled.div`
  display: grid;
  border: 5px solid #69BF64;
`;

const Cards = styled.div`
  display: inline-block;
  background: #0ABAB5;
  border: 5px;
`;

export default Card;
