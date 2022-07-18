import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useGlobalContext } from '../../../contexts/GlobalStore';
import CardImage from './CardImage';
import CardStars from './CardStars';

function Card({ data }) {
  console.log('Check Data:', data);
  // Note: Can't use global variable for info/setInfo. Returns only last productID
  // Each card needs its own set of states
  const {
    setProductID, setCardIndex,
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

Card.propTypes = {
  data: PropTypes.shape({
    details: PropTypes.shape({
      data: PropTypes.shape({
        id: PropTypes.number,
      }),
    }),
  }).isRequired,
};

const CardStyle = styled.div`
  display: grid;
  &:hover {
    opacity: 0.80;
  }
  margin-top: auto;
`;

const Cards = styled.div`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
`;

export default Card;
