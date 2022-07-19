import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { useGlobalContext } from '../../../contexts/GlobalStore';

function StyleSelector() {
  const {
    styles, selectedStyle, setSelectedStyle,
  } = useGlobalContext();

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

  function onClickHandler(e, value) {
    e.preventDefault();
    if (selectedStyle.style_id !== value.style_id) {
      setSelectedStyle(() => value);
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
