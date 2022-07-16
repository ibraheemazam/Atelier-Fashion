import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function CardImage(imageObj) {
  // console.log('CardImage', imageObj, imageObj.imageInfo);
  const [image, setImage] = useState(imageObj);
  const {
    outfits, setOutfits,
  } = useGlobalContext();
  useEffect(() => {
    setImage(imageObj);
  }, [imageObj]);
  function handleAdd() {
    const newOutfit = imageObj;
    // newOutfit.thumbnail = image;
    // Note: Need to use below syntax for component to re-render properly
    const tempArray = [...outfits, newOutfit];
    // tempArray.push(newOutfit);
    // console.log(tempArray);
    setOutfits(tempArray);
    console.log('Outfit list', outfits);
  }

  return (
    <div>
      <ImageCard src={image.imageInfo.results[0].photos[0].thumbnail_url} alt="RelatedProductImage" />
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
    background-color: trasparent;
    opacity: 0.60;
  }
`;

export default CardImage;
