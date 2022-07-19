import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { useGlobalContext } from '../../../contexts/GlobalStore';
import ComparisonModal from './ComparisonModal';

function CardImage({ imageInfo, details }) {
  // console.log('CardImage', imageObj);
  const [image, setImage] = useState(imageInfo);
  const [modal, setModal] = useState(false);
  // const {
  //   outfits, setOutfits,
  // } = useGlobalContext();
  useEffect(() => {
    setImage(imageInfo);
  }, [imageInfo]);
  function handleModal() {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }

  return (
    <div>
      <ImageCard src={image.results[0].photos[0].thumbnail_url} alt="RelatedProductImage" />
      <Button onClick={(e) => {
        e.stopPropagation();
        handleModal();
      }}
      >
        &#9733;
      </Button>
      {modal && <ComparisonModal details={details} /> }
    </div>
  );
}

CardImage.propTypes = {
  imageInfo: PropTypes.shape({}).isRequired,
  details: PropTypes.shape({}).isRequired,
};

const ImageCard = styled.img`
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
  right: -72%;
  color: yellow;
  background-color: transparent;
  border: none;
  font-size: 25px;
  font-width: bold;
  &:hover {
    background-color: trasparent;
    opacity: 0.80;
  }
`;

export default CardImage;
