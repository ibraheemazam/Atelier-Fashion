import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useGlobalContext } from '../../../contexts/GlobalStore';
import CardImage from './CardImage';
import CardStars from './CardStars';

function Card({ data }) {
  // console.log('Check Data:', data);
  // Note: Can't use global variable for info/setInfo. Returns only last productID
  // Each card needs its own set of states
  const {
    productID, setProductID, cardIndex, setCardIndex, productList,
  } = useGlobalContext();
  // const [ID, setID] = useState(data);
  const [info, setInfo] = useState(data);
  useEffect(() => {
    setInfo(data);
  }, [data]);

  function changeItem() {
    // console.log('Info id:', ID);
    setProductID(data.details.data.id);
    // Reset card index when clicking on new item
    setCardIndex(0);
  }
  return (
    <div>
      { info.details
        ? (
          <CardStyle onClick={() => changeItem()}>
            <CardImage imageInfo={info.image.data} details={info.details} />
            <Cards>{info.details.data.name}</Cards>
            <Cards>{info.details.data.category}</Cards>
            <Cards>
              $
              {info.details.data.default_price}
            </Cards>
            <CardStars reviewID={info.stars.data} />
          </CardStyle>
        )
        : <div /> }
    </div>
  );
}

const CardStyle = styled.div`
  display: grid;
  border: 4px solid #0ABAB5;
  &:hover {
    opacity: 0.80;
  }
`;

const Cards = styled.div`
  display: inline-block;
  background: #0ABAB5;
  border: 5px;
  margin-left: auto;
  margin-right: auto;
`;

export default Card;
