import React from 'react';
import styled from 'styled-components';

function Outfit(data) {
  console.log('Outfit data:', data);
  return (
    <Outline>
      <IMG src={data.outfit.thumbnail} />
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
export default Outfit;
