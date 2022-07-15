import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function CardImage(card) {
  // console.log('CardImage', card.imageID);
  const [image, setImage] = useState('');
  const {
    outfits, setOutfits,
  } = useGlobalContext();
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
  function handleAdd() {
    let newOutfit = card.outfitInfo;
    newOutfit.thumbnail = image;
    // Note: Need to use below syntax for component to re-render properly
    const tempArray = [...outfits, newOutfit];
    // tempArray.push(newOutfit);
    // console.log(tempArray);
    setOutfits(tempArray);
    console.log('Outfit list', outfits);
  }
  return (
    <div>
      <ImageCard src={image} alt="RelatedProductImage" />
      <Button onClick={(e) => {
        e.stopPropagation();
        handleAdd();
      }}>&#9733;</Button>
    </div>
  );
}

const ImageCard = styled.img`
  display: block;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 200px;
  object-fit: fill;
`;

const Button = styled.button`
  display: block;
  position: absolute;
  position: relative;
  top: -86%;
  right: -72%;
  color: yellow;
  background-color: transparent;
  border: none;
  font-size: 25px;
  font-width: bold;
  &:hover {
    background-color: #0ABAB5;
  }
`;

export default CardImage;
