import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function Card({ data }) {
  console.log('Card Data:', data);
  const [initial, setInitial] = useState({});
  useEffect(() => {
    axios.get('/relatedItem', { params: { productID: data } })
      .then((data) => {
        console.log('Card Data:', data);
        setInitial(data.data);
      })
      .catch((err) => {
        console.log('Card error:', err);
      });
  }, []);
  return (
    <CardStyle>
      <Cards>Image Placeholder</Cards>
      <Cards>{initial.name}</Cards>
      <Cards>{initial.category}</Cards>
      <Cards>${initial.default_price}</Cards>
      <Cards>Star Rating Placeholder</Cards>
    </CardStyle>
  );
}

const CardStyle = styled.div`
  display: grid;
  border: 10px solid #69BF64;
`;

const Cards = styled.div`
  display: inline-block;
  color: white;
  background: #0ABAB5;
  border: 10px;
`;

export default Card;
