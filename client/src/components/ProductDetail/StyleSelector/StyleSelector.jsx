import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function StyleSelector(props) {
  const { styles, selectedStyle, setSelectedStyle, productID, productInfo } = useGlobalContext();

  return (
    <div>
      <StyleName>
        <b>{'Style > '}</b>
        {selectedStyle.name}
      </StyleName>
      <ThumbnailsContainer props={props}>
        {styles.map((style, i) => (
          <Thumbnail key={style.style_id} i={i} value={style} style={style} props={props}/>
        ))}
      </ThumbnailsContainer>
    </div>
  );
}

const StyleName = styled.h4`
  margin-inline-start: 1em;
  margin-block-end: 0px;
`;


function Thumbnail({i, style, value, props}) {
  const { styles, selectedStyle, setSelectedStyle, productID, productInfo } = useGlobalContext();

  return(
    <div onClick={() => setSelectedStyle(style)} role="presentation">
      <ThumbnailContainer>
          <ThumbnailClass
            src={style.photos[0].thumbnail_url}
            alt=""
            style={{
              width: '100%',
              height: '100%',
            }}
          ></ThumbnailClass>
      </ThumbnailContainer>
    </div>
  );
}

export default StyleSelector;

const ThumbnailsContainer = styled.div`
  display: grid;
  padding: 1rem 1rem;
  justify-items: center;
  grid-template-columns: 24% 24% 24% 24%;
  grid-column-gap: 1%;
  max-height: 20%;
  width: auto;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 1%;
  align-items: center;
  justify-content: center;
  align-content: center;
`;


const ThumbnailContainer = styled.div`
  display: grid;
  height: 50%;
  overflow: hidden;
  justify-content: space-around;
  text-align: center;
  align-content:center;
`;


const ThumbnailClass = styled.img`
  max-width: 100%;
  max-height: 100%
  height: auto;
`;




