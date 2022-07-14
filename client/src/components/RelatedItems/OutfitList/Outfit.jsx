import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function Outfit(data) {
  // console.log('Outfit data:', data);
  // console.log('index:', data.index);
  const {
    outfits, setOutfits,
  } = useGlobalContext();
  function removeOutfit() {
    // Note: Need to use below syntax for component to re-render properly
    let tempArray = [...outfits];
    tempArray.splice(data.index, 1);
    // console.log('OutfitArray:', tempArray);
    setOutfits(tempArray);
  }
  return (
    <Outline>
      <div>
        <IMG src={data.outfit.thumbnail} />
        <Button onClick={() => removeOutfit()}>X</Button>
      </div>
      <Info>{data.outfit.name}</Info>
      <Info>{data.outfit.category}</Info>
      <Info>${data.outfit.default_price}</Info>
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
`;

const IMG = styled.img`
  display: block;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.button`
  display: block;
  position: absolute;
  position: relative;
  top: -70%;
  right: -85%;
  color: red;
`;

export default Outfit;
