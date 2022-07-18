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
  const [place, setPlace] = useState(0);

  useEffect(() => {
    function getPhotos() {
      if (photos) {
        // if (index) {
        // setMain(() => photos[index]);
        // } else {
        setMain(() => photos[place]);
        // }
      }
    }
    function getUrl() {
      if (main) {
        setImageUrl(() => main.url);
      }
    }
    setPhotos(() => selectedStyle.photos);
    getPhotos();
    getUrl();
  }, [setImageUrl, selectedStyle, setMain, setPhotos, photos, main, place]);

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

  function changeMain(e, value) {
    e.preventDefault();
    setPlace(() => value);
  }

  return (
    <Gallery>
      <Main
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
        alt={`${productInfo.name} in ${selectedStyle.name} style`}
      >
        <Side>
          {photos
          && photos.map((photo, index) => (
            <div index={index}>
              <div
                onClick={(e) => changeMain(e, index)}
                role="presentation"
                style={{
                  maxWidth: '30%',
                  height: 'auto',
                  // backgroundImage: `url('${photo.thumbnail_url}')`,
                  // backgroundRepeat: 'no-repeat',
                  // backgroundSize: 'contain',
                }}
              >
                <img
                  src={photo.thumbnail_url}
                  alt=""
                  style={{
                    width: '80%',
                    height: '100%',
                  }}
                />
              </div>
            </div>
          ))}
        </Side>
      </Main>
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

const Side = styled.div`
  width: 10%;
  top: 20%
`;
