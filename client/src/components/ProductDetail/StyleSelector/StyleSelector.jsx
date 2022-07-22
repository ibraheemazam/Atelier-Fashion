import React, { useEffect, useState } from 'react';
//import { View, Text } from 'react-native';
//import { Icon } from '@rneui/themed';
import styled from 'styled-components';
//import { IoCheckmarkCircleOutline } from 'react-icons';

import { useGlobalContext } from '../../../contexts/GlobalStore';

function StyleSelector(props) {
  const { styles, selectedStyle, setSelectedStyle, productID, productInfo } = useGlobalContext();

  return (
    <div>
      <h4>
        <b>{'Style > '}</b>
        {selectedStyle.name}
      </h4>
      <div>
        <ThumbnailsContainer props={props}>
          {styles.map((style, i) => (
            <Thumbnail key={style.style_id} i={i} value={style} style={style} props={props}/>
          ))}
        </ThumbnailsContainer>
      </div>
    </div>
  );
}


 // overlay
  // could make background of outer div the thumbnail
  // and then make an inner div that is some percentage of the outer div that renders conditionally
  // on whether it's open property is set to true or toggles its visbile: hidden attribute based on
  // whether it's open property is set to true (so re-rendering less?)
  //  and make it somewhat transparent

function Thumbnail({i, style, value, props}) {
  const { styles, selectedStyle, setSelectedStyle, productID, productInfo } = useGlobalContext();

  return(
    <ThumbnailOverview>
      <span>
        <div onClick={() => setSelectedStyle(style)} role="presentation">
          <img
            src={style.photos[0].thumbnail_url}
            alt=""
            style={{
              width: '100%',
              height: '100%',
            }}
          ></img>
          {/* {selected
          ? (
          <overlay>
            <base>
              <IoCheckmarkCircleOutline/>
              {selectedStyle}
            </base>
          </overlay>
          )
         : <></>
         } */}
      </div>
    </span>
  </ThumbnailOverview>
  );
}

export default StyleSelector;

const ThumbnailsContainer = styled.div`
  display: flex;
  border: 1px;
  padding: 1rem 1rem;
  justify-content: space-around;
`;


const ThumbnailOverview = styled.div`
  display: flex;
  max-height: 20px
  max-height: 20px
  margin: 1 em;
  justify-content: space-around;
  overflow: auto;
  text-align: center;
  // border radius
  stretch
  clip:
`;

const Thumbnails = styled.div`
  display: flex;
  border: 1px;
  padding: 1rem 1rem;
  overflow: auto;
  justify-content: space-around;
`;

const ThumbnailRow = styled.span`
  max-height: 20px
  max-width: 80%;
  align: center;
  justify-content: space-around;
  flex-wrap: wrap
`;

const ThumbnailContainer = styled.div`
  padding: 1em;
  background: ;
  justify-content: space-evenly
`;


//padding: 3% 1%;
//width: 20%
//was a block above

const BlueCheckmark = styled.div`
  position: absolute;
  top: 0pm;
  right: 0px;
  display: flex;
  //clear, thivk padding
  //solid blue borde
  .// border radius
  // whole thing slighly transparent
  `;


  // mostly transplarent grey div 100% 100% and contained within


// from andy's stars module, might help me position my thumbnails
// const FilledStar = styled.div`
  // position: absolute;
  // top: 0px;
  // left: 0px;
  // display: flex;
  // width: ${(props) => props.size}%;
  // overflow:hidden;
  // flex-direction: row;
  // color: yellow;
  // font-size: bold;

