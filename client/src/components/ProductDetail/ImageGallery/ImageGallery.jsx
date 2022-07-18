import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { useGlobalContext } from '../../../contexts/GlobalStore';

import StyleSelector from '../StyleSelector/StyleSelector';

// eslint-disable-next-line react/prop-types
function ImageGallery() {
  const {
    productID, setProductID, selectedStyle, productInfo,
  } = useGlobalContext();

  const [imageUrl, setImageUrl] = useState('');
  const [photos, setPhotos] = useState([]);
  const [main, setMain] = useState({});

  useEffect(() => {
    setPhotos(() => selectedStyle.photos);
    function getPhotos() {
      if (photos) {
        setMain(() => photos[0]);
      }
    }
    function getUrl() {
      if (main) {
        setImageUrl(() => main.url);
      }
    }
    getPhotos();
    getUrl();
    // setMain(() => photos[0]);
    //  setImageUrl(() => main.url);
  }, [setImageUrl, selectedStyle, photos, main, setMain, setPhotos]);

  // useEffect(() => {
  //   setMain(() => photos[0]);
  // }, [photos, setMain]);

  //   const [styleImages, setStyleImages] = useState([]);

  // useEffect(() => {
  //   // setProductID(windows.location.pathname);
  //     axios
  //       .get('/styles', { params: { product_id: productID } })
  //       .then((stylesResult) => setStyleImages(stylesResult.results.forEach()))
  //       // .then((photos) => )
  //       .catch((err) => { console.log('error getting styles images', err); });
  //   }
  //   getStyles()
  //     .catch((err) => { console.log('error getting styles images', err); });
  // }, [setProductID, productID]);

  //   // console.log(styles);
  //   // const stylePhotos = productStyles.results.photos;

  //   // function handleThumbnailClick(e) {
  //   //   e.preventDefault();
  //   //   setSelectedStyle(style);
  //   // };
  //   let allThumbnails;
  //   let images;
  //   let fullImages;

  //   function UpdateImageGallery(e, selectedStyle) {
  //     e.preventDefault();
  //     images = selectedStyle.photos.thumbnails;
  //     fullImages = selectedStyle.photos.url;
  //     allThumbnails = images.map((image) => image.thumbnail);
  //   }

  //  {allThumbnails.map((thumbnail) => <img src={thumbnail} />)}
  console.log(photos);
  console.log(main);
  console.log(imageUrl);

  return (
    <Gallery>
      <Main
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
        alt={`${productInfo.name} in ${selectedStyle.name} style`}
      />
    </Gallery>
  );
}

export default ImageGallery;

const Gallery = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 56.25%
  padding-left: 10%
  padding-right: 10%
  position: relative;
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
`;
