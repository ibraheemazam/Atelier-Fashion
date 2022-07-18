import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function AddOutfit() {
  const {
    productID, outfits, setOutfits, currOutfit,
  } = useGlobalContext();
  function add() {
    for (let i = 0; i < outfits.length; i += 1) {
      if (outfits[i].details.data.id === productID) {
        return;
      }
    }
    const newOutfit = currOutfit;
    const tempArray = [...outfits, newOutfit];
    setOutfits(tempArray);
  }
  return (
    <Outline>
      <Button onClick={() => add()}> + </Button>
    </Outline>
  );
}

const Outline = styled.div`
`;

const Button = styled.button`
  width: 225px;
  height: 225px;
  font-size: 60px;
  font-width: bold;
`;

export default AddOutfit;
