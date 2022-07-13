import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function CardImage(card) {
  // console.log('CardImage', card.imageID);
  const [image, setImage] = useState('');
  useEffect(() => {
    axios.get('/relatedImage', { params: { productID: card.imageID } })
      .then((data) => {
        // console.log('Card Image Data:', data);
        // console.log('Inside Data:', data.data.results[0].photos[0].thumbnail_url);
        setImage(data.data.results[0].photos[0].thumbnail_url);
        // console.log('URL:', image);
      })
      .catch((err) => {
        console.log('Card error:', err);
      });
  }, [card]);
  return (
    <ImageCard src={image} alt="RelatedProductImage" />
  );
}

const ImageCard = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export default CardImage;
