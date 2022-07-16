import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function Outfit(outfitObj) {
  // console.log('Outfit Obj:', outfitObj);
  // console.log('index:', data.index);
  const {
    outfits, setOutfits,
  } = useGlobalContext();
  let outfitImage = outfitObj.outfit.imageInfo.results[0].photos[0].thumbnail_url;
  let outfitDetails = outfitObj.outfit.details.data;

  function removeOutfit() {
    // Note: Need to use below syntax for component to re-render properly
    let tempArray = [...outfits];
    tempArray.splice(outfitObj.index, 1);
    // console.log('OutfitArray:', tempArray);
    setOutfits(tempArray);
  }
  return (
    <Outline>
      <div>
        <IMG src={outfitImage} />
        <Button onClick={() => removeOutfit()}>X</Button>
      </div>
      <Info>{outfitDetails.name}</Info>
      <Info>{outfitDetails.category}</Info>
      <Info>${outfitDetails.default_price}</Info>
    </Outline>
  );
}

const Outline = styled.div`
  display: grid;
  border: 4px solid #0ABAB5;
`;

const Info = styled.div`
  display: inline-block;
  background: #0ABAB5;
  border: 5px;
  margin-left: auto;
  margin-right: auto;
`;

const IMG = styled.img`
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
  right: -74%;
  color: red;
  background-color: transparent;
  border: none;
  font-size: 30px;
  font-width: bold;
  &:hover {
    background-color: trasparent;
    opacity: 0.80;
  }
`;

export default Outfit;
