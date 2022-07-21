import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useGlobalContext } from '../../../contexts/GlobalStore';
import CardImage from './CardImage';
import CardStars from './CardStars';

function Card({ data, show }) {
  const {
    setProductID, setCardIndex,
  } = useGlobalContext();
  const [info, setInfo] = useState(data);
  useEffect(() => {
    setInfo(data);
  }, [data]);

  function changeItem() {
    setProductID(data.details.data.id);
    // Reset card index when clicking on new item
    setCardIndex(0);
  }
  return (
    <div>
      { info.details
        ? (
          <CardStyle className={show}>
            {show === 'show' && (
            <CardStyle onClick={() => changeItem()}>
              <CardImage imageInfo={info.image.data} details={info.details} />
              <Text>
                <Cards>{info.details.data.name}</Cards>
                <Cards>{info.details.data.category}</Cards>
                <Cards>
                  $
                  {info.details.data.default_price}
                </Cards>
              </Text>
              <CardStars reviewID={info.stars.data} />
            </CardStyle>
            )}
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
        // name: PropTypes.string,
        // category: PropTypes.string,
        // default_price: PropTypes.string,
      }),
    }),
  }).isRequired,
  show: PropTypes.string.isRequired,
};

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  border: 7px solid transparent;
  &.show {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }
  &.noshow {
    opacity: 0;
    transition-duration: 1s ease;
  }
`;

const Cards = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const Text = styled.div`
display: flex;
flex-direction: column;
  &:hover {
    text-decoration: underline;
  }
`;

export default Card;
