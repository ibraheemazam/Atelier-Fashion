import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useGlobalContext } from '../../../contexts/GlobalStore';
import CardImage from './CardImage';
import CardStars from './CardStars';

function Card({ data }) {
  console.log('Check Data:', data);
  // Note: Can't use global variable for info/setInfo. Returns only last productID
  // Each card needs its own set of states
  const {
    setProductID,
  } = useGlobalContext();
  const [ID, setID] = useState(data);
  const [info, setInfo] = useState({});
  useEffect(() => {
    // console.log('ID:', ID);
    axios.get('/relatedItem', { params: { productID: data } })
      .then((result) => {
        // console.log('result data:', result.data);
        setInfo(result.data);
        setID(result.data.id);
      })
      .catch((err) => {
        console.log('Card error:', err);
      });
  }, [data]);
  function changeItem() {
    // console.log('Info id:', ID);
    setProductID(data);
  }
  return (
    <CardStyle onClick={() => changeItem()}>
      {/* {console.log('Card ID:', ID)} */}
      <CardImage imageID={ID} outfitInfo={info} />
      <Cards>{info.name}</Cards>
      <Cards>{info.category}</Cards>
      <Cards>${info.default_price}</Cards>
      <CardStars reviewID={ID} />
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
