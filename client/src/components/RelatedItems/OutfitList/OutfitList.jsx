import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../contexts/GlobalStore';
import Outfit from './Outfit';

function OutfitList() {
  const {
    outfits, setOutfits,
  } = useGlobalContext();
  // const [list, setList] = useState(outfits);
  useEffect(() => {
    setOutfits(outfits);
    console.log('In Outfits:', outfits);
  }, [outfits, setOutfits]);
  return (
    <Outline>
      {/* {outfits.length > 0
        ? outfits.map((outfit) => <Outfit outfit={outfit} />)
        : <div>No outfits added</div> } */}
      {outfits.map((outfit, index) => <Outfit outfit={outfit} key={index} index={index} />)}
    </Outline>
  );
}

const Outline = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background: #0ABAB5;
`;

export default OutfitList;
