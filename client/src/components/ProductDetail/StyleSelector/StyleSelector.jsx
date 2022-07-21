import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Icon } from '@rneui/themed';
import styled from 'styled-components';
import {IoCheckmarkCircleOutline} from 'react-icon/Io';

import { useGlobalContext } from '../../../contexts/GlobalStore';

function StyleSelector(props) {
  const { styles, selectedStyle, setSelectedStyle } = useGlobalContext();

  return (
    <div>
      <h4>
        <b>{'Style > '}</b>
        {selectedStyle.name}
      </h4>
      <div>
        <Thumbnails props={props}>
          {styles.map((style, index) => (
            <Thumbnail key={style.style_id} index={index} style={style} props={props}/>
          ))}
        </Thumbnails>
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

function Thumbnail(props) {
  const { styles, selectedStyle, setSelectedStyle } = useGlobalContext();
  const { index, setIndex } = useState(0);
  const { selected, select} = useState(false);

  function SelectStyle(e) {
    e.preventDefault();
    setSelectedStyle((e, i) =>
    got converted in the proess here to lol (selectedStyle.style_id !== event.target.value.style_id) {
        setSelectedStyle(() => value);
      }
  }
  // function handleSelectStyle(e) {
  //   e.preventDefault();
  //   setSelectedStyle(style);
  //   UpdateImageGallery(selectedStyle);
  //   // updateStyleTitle(selectedStyle);
  //   // overlay checkmark on clicked child thumbnail
  //   styleTitle = selectedStyle.name;
  // }

  return(
    <block>
      <span>
        <div {setSelectedStyle.style_id !=== e.target.value.style_id) && setSelectedStyle(target.value.style_id) role="presentation">
          <img
            <button></button>


            src={style.photos[0].thumbnail_url}
            alt=""
            style={{
              width: '100%',
              height: '100%',
            }}
          ></img>
          {selected
          ? (
          <overlay>
            <base>
              <IoCheckmarkCircleOutline/>
            </base>
            {selectedStyle}
          </overlay>

          )}

      </div>
    </span>
  </block>

  );

}

export function { Thumbnail, StyleSelector};



// const Thumbnails = styled.div`
//   display: flex;
//   border: 1px
//   padding: 1rem 1rem;
// `;

const Thumbnails = styled.div`
  display: flex;
  overflow: auto
  justify-content: space-around;
`;

const ThumbnailRow = syled.span`
  max-height: 20px
  max-width: 80%;
  align: center;
  justify-content: space-around;`
;

const ThumbnailContainer = styled.div`
  padding: 1em;
  background: ;
  justify-content: space-evenly
`;

const Thumbnail = styled.span`
  margin: 1 em;
  padding: 3% 1%;
  text-align: center;
  width: 20%
  // border radius
  stretch
  clip:
`;

const BlueCheckmark = styled.div`
  position: absolute;
  top: 0pm;
  right: 0px;
  display: felx;
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