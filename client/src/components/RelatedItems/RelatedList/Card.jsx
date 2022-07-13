import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useGlobalContext } from '../../../contexts/GlobalStore';
import CardImage from './CardImage.jsx';
import CardStars from './CardStars.jsx';

function Card({ data }) {
  const [info, setInfo] = useState(data);
  const {
    productID, setProductID,
  } = useGlobalContext();
  useEffect(() => {
    axios.get('/relatedItem', { params: { productID: info } })
      .then((result) => {
        setInfo(result.data);
      })
      .catch((err) => {
        console.log('Card error:', err);
      });
  }, [setProductID]);
  function changeItem() {
    console.log(info.id);
    setProductID(info.id);
  }
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
  border: 4px solid #0ABAB5;
`;

const Cards = styled.div`
  display: inline-block;
  background: #0ABAB5;
  border: 5px;
`;

export default Card;
