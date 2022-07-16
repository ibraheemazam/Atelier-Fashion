import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useGlobalContext } from '../../../contexts/GlobalStore';
import Card from './Card';

function CardsList() {
  const {
    productID, cardIndex, setCardIndex, productList, setProductList,
  } = useGlobalContext();
  useEffect(() => {
    setProductList([]);
    axios.get('/related', { params: { productID: productID } })
      .then((results) => {
        // Get all related product IDs
        (results.data).map((id) => {
          const details = axios.get('/relatedItem', { params: { productID: id } });
          const image = axios.get('/relatedImage', { params: { productID: id } });
          const stars = axios.get('/relatedStars', { params: { reviewID: id } });
          return Promise.all([details, image, stars])
            .then((object) => {
              // console.log(object);
              const tempObj = {
                details: object[0],
                image: object[1],
                stars: object[2],
              };
              setProductList((oldList) => [...oldList, tempObj]);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((error) => console.log('Error here:', error));
  }, [productID]);
  // console.log('related:', relatedID);
  function clickRight() {
    if (cardIndex + 4 < productList.length) {
      setCardIndex(cardIndex + 1);
      // console.log('CardIndex Right:', cardIndex);
    }
  }
  function clickLeft() {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
      // console.log('CardIndex Left:', cardIndex);
    }
  }
  // const list = [...productList].slice(cardIndex, cardIndex + 4);
  // console.log('List:', list);
  // console.log('List:', productList);
  return (
    <div>
      {cardIndex === 0
        ? <div /> : <LeftButton onClick={() => clickLeft()}> &lt; </LeftButton> }
      <StyleCardList>
        {/* {console.log('Check List:', productList.slice(cardIndex, cardIndex+4))} */}
        {/* {list.map((data) => console.log(data))} */}
        {productList.slice(cardIndex, cardIndex + 4).map((data, i) => <Card data={data} key={i} />)}
      </StyleCardList>
      {cardIndex === productList.length - 4
        ? <div /> : <RightButton onClick={() => clickRight()}> &gt; </RightButton> }
    </div>
  );
}

const StyleCardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background: #0ABAB5;
`;

const LeftButton = styled.button`
  display: block;
  position: absolute;
  font-width: bold;
  font-size: 30px;
  background: #0ABAB5;
  background-color: transparent;
  border: none;
  &:hover {
    opacity: 0.60;
  }
`;

const RightButton = styled.button`
display: block;
position: absolute;
top: 50%;
text-align: left;
font-width: bold;
font-size: 30px;
background: #0ABAB5;
background-color: transparent;
border: none;
&:hover {
  opacity: 0.60;
}
`;

export default CardsList;
