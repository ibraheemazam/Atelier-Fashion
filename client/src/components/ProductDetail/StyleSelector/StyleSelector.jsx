import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { useGlobalContext } from '../../../contexts/GlobalStore';

function StyleSelector(props) {
  const {
    styles, selectedStyle, setSelectedStyle,
  } = useGlobalContext();

  // useEffect(() => {
  //   axios
  //     .get('/styles', { params: { product_id: productID } })
  //     .then((stylesResult) => {
  //       setSelectedStyle(stylesResult.data.results[0]);
  //       setStyles(stylesResult.data.results);
  //     })
  //     // I'm catching two errors in one here, not great
  //     .catch((err) => console.log('error getting product styles', err));
  // }, [productID, setProductID, setStyles]);

  // const [thumbnails, setThumbnails] = useState([]);
  // console.log('thumbnails before useEffect: ', thumbnails);

  // function getThumbnails() {
  //   // new Promise
  //   console.log('styles at the begiining of getThumbnails: ', styles);
  //   const tempThumbnails = [];
  //   styles.forEach((style) => {
  //     let thumbnail = style.photos[0];
  //     tempThumbnails.push(thumbnail);
  //   });
  //   return tempThumbnails;
  // }

  // for each style in the results away wanto to go to its photos property and grab the first element and thumbnail property of it// new promise to map thumbnails
  // then(([allStyles]) => ( allStyles.map((style) => (
  //   style.photos[0].thumbnail_url
  // )
  // [{ photos [ { thumbnail_url } ] }]

  // console.log('productStyles from styleselector: ', styles);
  // let styleTitle;
  // let imageRows;

  // function handleSelectStyle(e) {
  //   e.preventDefault();
  //   setSelectedStyle(style);
  //   UpdateImageGallery(selectedStyle);
  //   // updateStyleTitle(selectedStyle);
  //   // overlay checkmark on clicked child thumbnail
  //   styleTitle = selectedStyle.name;
  // }

  // function mapThumbnails(styles) {
  //   imageRows = [];
  //   let i = 0;
  //   const copyStyles = [...styles];
  //   console.log(copyStyles);
  //   while (i < copyStyles.length - 4) {
  //     let count = 0;
  //     const imageRow = [];
  //     while (count < 4) {
  //       imageRow.push(copyStyles.shift());
  //       count += 1;
  //     }
  //     imageRows.push(imageRow);
  //     i += 4;
  //   }
  //   if (copyStyles.length > 0) {
  //     imageRows.push(copyStyles);
  //   }
  // }
  // console.log(imageRows);

  function onClickHandler(e, value, index) {
    e.preventDefault();
    if (selectedStyle.style_id !== value.style_id) {
      setSelectedStyle(() => value);
      // setStyle(value);


      // styles.forEach((style) => {
      //   let dfault = style['default?']
      // UpdateImageGallery(selectedStyle);
//     updateStyleTitle(selectedStyle);
//     // overlay checkmark on clicked child thumbnail
      // }
      //   style['default?']
      // <checkbox onClick={handleSelectStyle} />
//     </span>
    }
  }

  // overlay
  // could make background of outer div the thumbnail
  // and then make an inner div that is some percentage of the outer div that renders conditionally
  // on whether it's open property is set to true or toggles its visbile: hidden attribute based on
  // whether it's open property is set to true (so re-rendering less?)
  //  and make it somewhat transparent

  return (
    <div>
      <h4>
        <b>{'Style > '}</b>
        {selectedStyle.name}
      </h4>
      <div>
        <Thumbnails>
          {styles.map((style, index) => (
            <Thumbnail key={style.style_id}>
              <span index={index} onClick={(e) => onClickHandler(e, style, index)} role="presentation">
                <img
                  src={style.photos[0].thumbnail_url}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </span>
            </Thumbnail>
          ))}
        </Thumbnails>
      </div>
    </div>
  );
}

export default StyleSelector;

// const Thumbnails = styled.div`
//   display: flex;
//   border: 1px
//   padding: 1rem 1rem;
// `;

const Thumbnails = styled.div`
  display: flex;
`;

const Thumbnail = styled.span`
  margin: 2%;
  padding: 3% 1%;
  text-align: center;
  width: 20%
`;
