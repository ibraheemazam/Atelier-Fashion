import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useGlobalContext } from '../../../contexts/GlobalStore';
import Card from './Card';

function CardsList() {
  const {
    productID, cardIndex, setCardIndex, productList, setProductList, currOutfit, setCurrOutfit,
  } = useGlobalContext();
  // console.log('productInfo:', productInfo);
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
    // Get data for current product ID for user to add outfit
    const details = axios.get('/relatedItem', { params: { productID: productID } });
    const image = axios.get('/relatedImage', { params: { productID: productID } });
    const stars = axios.get('/relatedStars', { params: { reviewID: productID } });
    Promise.all([details, image, stars])
      .then((object) => {
        const outfitObj = {
          details: object[0],
          image: object[1],
          stars: object[2],
        };
        setCurrOutfit(outfitObj);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productID]);
  // console.log('related:', relatedID);
  console.log('Current Outfit:', currOutfit);
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
    <Container>
      <LeftBox>
        {cardIndex === 0
          ? <LeftButton /> : (
            <LeftButton onClick={() => clickLeft()}> &lt; </LeftButton>
          )}
      </LeftBox>
      <StyleCardList>
        {productList.slice(cardIndex, cardIndex + 4).map((data, i) => <Card data={data} key={i} />)}
      </StyleCardList>
      <RightBox>
        {(cardIndex === productList.length - 4 || productList.length < 4)
          ? <RightButton /> : (
            <RightButton onClick={() => clickRight()}> &gt; </RightButton>
          )}
      </RightBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f1f1f1;
`;

const StyleCardList = styled.div`
  display: flex;
  float: left;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  align-content: space-evenly;
`;

const LeftBox = styled.div`
  display: flex;
  justify-content: flex-end;
  float: left;
  align-items: center;
  flex-grow: 1;
`;

const RightBox = styled.div`
  display: flex;
  float: left;
  align-items: center;
  flex-grow: 1;
`;

const LeftButton = styled.button`
  display: flex;
  align-self: center;
  position: absolute;
  font-width: bold;
  font-size: 60px;
  background-color: transparent;
  border: none;
  &:hover {
    opacity: 0.60;
  }
`;

const RightButton = styled.button`
display: flex;
align-self: center;
position: absolute;
font-width: bold;
font-size: 60px;
background-color: transparent;
border: none;
&:hover {
  opacity: 0.60;
}
`;

export default CardsList;
