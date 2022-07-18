import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function Outfit({ outfit, index }) {
  // console.log('Outfit Obj:', outfitObj);
  console.log('outfit:', outfit);
  // console.log('index:', data.index);
  const {
    outfits, setOutfits,
  } = useGlobalContext();
  const outfitImage = outfit.image.data.results[0].photos[0].thumbnail_url;
  const outfitDetails = outfit.details.data;

  function removeOutfit() {
    // Note: Need to use below syntax for component to re-render properly
    const tempArray = [...outfits];
    tempArray.splice(index, 1);
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
      <Info>
        $
        {outfitDetails.default_price}
      </Info>
    </Outline>
  );
}

Outfit.propTypes = {
  outfit: PropTypes.shape({
    image: PropTypes.shape({
      data: PropTypes.shape({
        results: PropTypes.arrayOf(PropTypes.shape({
          photos: PropTypes.arrayOf(PropTypes.shape({
            thumbnail_url: PropTypes.string,
          })),
        })),
      }),
    }),
    details: PropTypes.shape({
      data: PropTypes.shape({
        name: PropTypes.string,
        category: PropTypes.string,
        default_price: PropTypes.number,
      }),

    }),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Outline = styled.div`
  display: grid;
  &:hover {
    opacity: 0.80;
  }
  margin-top: auto;
`;

const Info = styled.div`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
`;

const IMG = styled.img`
  display: block;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 225px;
  height: 225px;
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
