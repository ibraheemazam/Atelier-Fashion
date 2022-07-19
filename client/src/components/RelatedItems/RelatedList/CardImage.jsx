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
    <Outline>
      <ImageCard src={image.results[0].photos[0].thumbnail_url} alt="RelatedProductImage" />
      <Button onClick={(e) => {
        e.stopPropagation();
        handleModal();
      }}
      >
        &#9733;
      </Button>
      <div>
        {modal && <ComparisonModal details={details} /> }
      </div>
    </Outline>
  );
}

CardImage.propTypes = {
  imageInfo: PropTypes.shape({}).isRequired,
  details: PropTypes.shape({}).isRequired,
};

const Outline = styled.div`
  position: relative;
`;

const ImageCard = styled.img`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 225px;
  height: 225px;
  object-fit: fill;
`;

const Button = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
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
